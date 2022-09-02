import React from 'react';
import DebugViewer from './DebugViewer';
import JsonViewer from './JsonViewer';

export const ViewModes = {
    json: 'json',
    debug: 'debug',
};

const createViewer = (mode, content) => {
    switch (mode) {
        case ViewModes.json:
            return (<JsonViewer content={content} />);
        case ViewModes.debug:
            return (<DebugViewer content={content} />);
        default:
            console.warn('FileViewer: No/Unrecognized mode selected');
    }
}

function FileViewer(props) {
    return (<main>{createViewer(props.mode ?? 'json', props.content)}</main>);
}

export default FileViewer