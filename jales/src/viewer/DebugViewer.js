function DebugViewer(props) {
    const space = props.space ?? 2;

    return (<div>{JSON.stringify(props.content, null, space)}</div>);
};

export default DebugViewer;