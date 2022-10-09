
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

// Based on definition in https://regex101.com/r/tA9pM8/1
const regexJson = {
    number: `-?(?:0|[1-9]\\d*)(?:\\.\\d+)?(?:[eE][+-]?\\d+)?`,
    string: `"(?:\\\\(?:["\\\\\\/bfnrt]|u[a-fA-F0-9]{4})|[^"\\\\\\0-\\x1F\\x7F]+)*"`,
};

/**
 * JSON Viewer - Pretty Printed and syntax highlighted JSON viewer.
 * 
 * Pretty printing includes:
 *   * JSON Syntax highlighting
 *   * Indentation
 *   * Inlining small quantities for a more compact representation.
 * 
 * @param {*} config configuration of the debug viewer.
 * @returns JSX viewer
 */
export default function JsonViewer({content, space}) {
    return (
        <SyntaxHighlighter 
            language="json"
            lineProps={{style: {wordBreak: 'break-all', whiteSpace: 'pre-wrap'}}}
            wrapLines={true} 
            style={a11yDark}>
          {content && adjustPrettyJson(JSON.stringify(content, null, space ?? 2))}
        </SyntaxHighlighter>
    )
};

/**
 * Modifies parts of the prettyfied JSON string.
 * @param {string} prettyJsonStr 
 * @returns 
 */
function adjustPrettyJson(prettyJsonStr) {
    // This *has* to be done on prettified json. Doing this with replacer or toJSON doesn't work.
    prettyJsonStr = inlineQuantities(prettyJsonStr);

    return prettyJsonStr;
}

/**
 * Inlines and reorder quantity object for a more compact and readable version
 * 
 * All regex must account for all types of whitespaces (newline, space, etc.)
 * Quantities might be found in reversed order in the document, but reordering for value to come first.
 * 
 * Don't try to make the REGEX for numbers and string, just taking them as-is.
 * 
 * @param {string} str Pretty JSON formatted object
 * @returns 
 */
function inlineQuantities(str) {
    // Add matched key-value pair removing all whitespaces.
    const kv = (k, v) => `\\s*"(${k})"\\s*:\\s*(${v})\\s*`;

    const unitRegex = kv("unit", regexJson.string);
    const valueRegex = kv("value", regexJson.number);

    return str.replace(new 
        // Match every quantities
        RegExp(`(?:\\{${unitRegex},${valueRegex}\\}|\\{${valueRegex},${unitRegex}\\})`, "g"), 
        // Reorder them and print in compact form.
        (_, k1, v1, k2, v2) => {
            let [v, u] = k1 === "unit" ? [v2, v1] : [v1, v2];
            return `{"value": ${v}, "unit": ${u}}`;
        });
}