import React from 'react';
import DebugViewer from './debug/DebugViewer';
import JsonViewer from './JsonViewer';
import CompactViewer from './CompactViewer';

export const ViewModes = {
    json: 'json',
    debug: 'debug',
    compact: 'compact'
};

const createViewer = (mode, content) => {
    switch (mode) {
        case ViewModes.json:
            return (<JsonViewer content={content} />);
        case ViewModes.debug:
            return (<DebugViewer content={content} />);
        case ViewModes.compact:
            return (<CompactViewer content={content} />);
        default:
            console.warn('FileViewer: No/Unrecognized mode selected');
    }
}

function FileViewer(props) {
    return (<main>{createViewer(props.mode ?? 'json', props.content)}</main>);
}

export default FileViewer