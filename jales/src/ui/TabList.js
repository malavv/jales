import './TabList.css';
import React from 'react';
import Tab from './Tab';

/**
 * Creates a list of tabs to switch between.
 * @param {{active:string, onChange:function, tabs:{id:string, lbl:string}}} props Tab info.
 * @returns 
 */
function TabList(props) {
    const handleClick = (id) => {
        if (props.active === id)
            return;
            
        props.onChange(id);
    }

    return (
        <ul className="TabList">
            {props.tabs.map(el => (
            <Tab 
                key={el.id}
                active={el.id === props.active} 
                lbl={el.lbl}
                onClick={() => handleClick(el.id)} />))}
        </ul>
    );
}

export default TabList