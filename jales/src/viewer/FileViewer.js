import React from 'react';
import DebugViewer from './debug/Viewer';
import JsonViewer from './json/Viewer';
import CompactViewer from './compact/Viewer';

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
            const msg = 'FileViewer: Unrecognized mode selected';
            console.warn(msg);
            return (<h3>{msg}</h3>);
    }
}

export default function FileViewer(props) {
    return (<main>{createViewer(props.mode, props.content)}</main>);
}
