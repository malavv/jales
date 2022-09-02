import React from 'react';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

class FileViewer extends React.Component {

    render() {
        return (<main>
            <SyntaxHighlighter language="javascript" style={dark}>
                {JSON.stringify(this.props.content, null, 2)}
            </SyntaxHighlighter>
        </main>);
    }
}

export default FileViewer