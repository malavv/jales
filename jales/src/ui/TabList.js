import './TabList.css';
import React from 'react';
import Tab from './Tab';

/**
 * Creates a list of tabs to switch between.
 * @param {{active:string, onChange:function, tabs:{id:string, lbl:string}}} props Tab info.
 * @returns 
 */
function TabList(props) {

    const { askLoadUrl, tabs, active, tabClickedHdl, closeTabHdl } = props;

    const toDocumentTab = 
        (filename) => <Tab key={filename} active={filename === active} filename={filename} onClick={tabClickedHdl} onClose={closeTabHdl} />

    return (
        <ul className="TabList">
            {/* Active Tabs */}
            {[...tabs].map(doc => toDocumentTab(doc))}

            {/* New Tab by URL */}
            <li key={-1} className="tab-new" onClick={askLoadUrl}>+</li>
        </ul>
    );
}

export default TabList