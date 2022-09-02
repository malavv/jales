import React from 'react';

function Tab(props) {
    return (<li active={props.active} onClick={props.onClick}>{props.name}</li>);
}

export default Tab