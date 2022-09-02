import React from 'react';

function Tab(props) {
    return (
        <li active={String(props.active)} 
            onClick={props.onClick}>
          {props.lbl}
        </li>
    );
}

export default Tab