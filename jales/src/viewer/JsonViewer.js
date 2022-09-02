
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

function JsonViewer(props) {
    const space = props.space ?? 2;

    return (
        <SyntaxHighlighter 
            language="json"
            lineProps={{style: {wordBreak: 'break-all', whiteSpace: 'pre-wrap'}}}
            wrapLines={true} 
            style={a11yDark}>
          {JSON.stringify(props.content, null, space)}
        </SyntaxHighlighter>
    )
};

export default JsonViewer;