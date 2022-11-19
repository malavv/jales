import React from 'react';

function Tab(props) {
    const { active, onClick, filename, onClose } = props;

    const onClickHdl = () => onClick(filename);
    return (
        <li active={String(active)} onClick={onClickHdl}>
          <div className='name'>{filename}</div>
          <div className='close' style={{paddingLeft: "10px"}} onClick={() => onClose(filename)}>X</div>          
        </li>
    );
}

export default Tab