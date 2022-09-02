
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

function InlineQuantities(prettyContent) {
    if (!prettyContent)
        return prettyContent

    const unit = `"unit"\\s*:\\s*".*?"`;
    const value = `"value"\\s*:\\s*[\\d\\.]+`;
    const quantityRegex = new RegExp(`{\\s*(${unit})\\s*,\\s*(${value})\\s*}`, "g");

    // Put unit and values on single line, with value first. As in {"value": 5, "unit": "day"}
    return prettyContent.replace(quantityRegex, (_, u1, u2) => /unit/.test(u1) ? `{${u2}, ${u1}}` : `{${u1}, ${u2}}`);
}

function JsonViewer(props) {
    const space = props.space ?? 2;

    const formatted = InlineQuantities(JSON.stringify(props.content, null, space))

    return (
        <SyntaxHighlighter 
            language="json"
            lineProps={{style: {wordBreak: 'break-all', whiteSpace: 'pre-wrap'}}}
            wrapLines={true} 
            style={a11yDark}>
          {formatted}
        </SyntaxHighlighter>
    )
};

export default JsonViewer;