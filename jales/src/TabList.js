import './TabList.css';
import React from 'react';
import Tab from './Tab';

class TabList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            active: props.active,
            files: props.tabs,
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(filename) {
        if (this.state.active === filename)
            return;
            
        this.setState({active: filename});
        this.props.onChange(filename);
    }

    render() {
        let fileTabs = this.state.files.map(fn => {
            return (<Tab 
                key={fn}
                active={String(fn === this.state.active)} 
                name={fn}
                onClick={() => this.handleClick(fn)} />);
        });

        return (
            <ul className="TabList">
                {fileTabs}
            </ul>
        );
    }
}

export default TabList