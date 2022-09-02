
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

function JsonViewer(props) {
    const space = props.space ?? 2;

    return (
        <SyntaxHighlighter language="javascript" style={dark}>
            {JSON.stringify(props.content, null, space)}
        </SyntaxHighlighter>
    )
};

export default JsonViewer;