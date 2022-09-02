import './App.css';
import Header from './Header';
import Footer from './Footer';
import TabList from './TabList';

import examples from './examples.js';
import React from 'react';

import FileViewer from './FileViewer';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      examples: examples,
      active: examples[0].name,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  getActive() {
    return this.state.examples.find(e => e.name === this.state.active);
  }

  handleChange(active) {
    this.setState({active: active});
  }

  render() {

    let recipe = this.getActive();

    return (
      <div className="App">
        <Header />
        <TabList 
            tabs={this.state.examples.map(e => e.name)}
            active={this.state.active}
            onChange={this.handleChange} />

        <FileViewer 
            name={this.state.active} 
            content={recipe.data} />
        <Footer />
      </div>
    );
  }
}

export default App;
