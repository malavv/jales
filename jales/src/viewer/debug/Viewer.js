/**
 * Debug Viewer - Dumps recipe content with the least amount of processing
 * 
 * This viewer has the least requirements, it only asks for an object that
 * (1) doesn't have circular references, (2) doesn't contain a BigInt value.
 * But it prints something in any cases.
 * 
 * @param {*} config configuration of the debug viewer.
 * @returns JSX viewer
 */
export default function Viewer({space, content}) {
    return (
        <pre style={{color: `white`}}>
            {stringify(content, space ?? 2)}
        </pre>);
};

/**
 * Dumps an object to a string
 * 
 * Since this is a debugging viewer, it should show always show something. Even in error cases.
 * We check the requirements of stringify and send error message.
 * @param {Object} obj Object to dump
 * @param {number} space Indentation length
 * @returns 
 */
function stringify(obj, space) {
    if (space === undefined)
        return 'undefined'; // This wouldn't be visible otherwise.

    try {
        return JSON.stringify(obj, null, space);
    } catch (e) {

        if (e instanceof TypeError) {
            return `TypeError in DebugViewer<stringify> ${e.message}`;
        }
        return `${e.name} in DebugViewer<stringify> ${e.message}`;
    }
}