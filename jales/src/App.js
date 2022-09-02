import './App.css';

import React from 'react';

import Header from './ui/Header';
import Footer, { FooterStatus } from './ui/Footer';
import TabList from './ui/TabList';
import FileViewer, { ViewModes } from './viewer/FileViewer';

import examples from './sources/examples.js';

async function AskUrl() {
  // example: https://raw.githubusercontent.com/beerjson/beerjson/master/tests/real/KettleSour.json
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(prompt('Enter BeerJSON file URL. If Github, use raw version'));
    }, 0);
  });
}
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      files: [],
      active: null,
      mode: ViewModes.json,
      status: FooterStatus.green,
    };

    this.handleFileChange = this.handleFileChange.bind(this);
    this.handleModeChange = this.handleModeChange.bind(this);
    this.handleNewFile = this.handleNewFile.bind(this);
  }

  componentDidMount() {
    const files = examples; // Fetch list of files

    this.setState({
      files: files,
      active: files[0].id,
    });
  }

  handleFileChange(active) { this.setState({active: active}); }
  handleModeChange(mode) { this.setState({mode: mode}); }

  handleNewFile() { 
    (async () => {
      const url = await AskUrl();
      const page = await fetch(url);
      
      const lastSlash = url.lastIndexOf("/");

      const id = url.slice(lastSlash + 1);
      const lbl = id;
      const data = await page.json();

      this.setState(oldState => {
        return { files: [...oldState.files, {id, lbl, data}] };
      })
    })();
  }

  render() {
    let recipe = this.state.files.find(e => e.id === this.state.active);

    return (
      <div className="App">
        <Header />
        <TabList 
            tabs={this.state.files}
            active={this.state.active}
            onChange={this.handleFileChange}
            onNewFile={this.handleNewFile} />

        <FileViewer 
            mode={this.state.mode}
            name={this.state.active} 
            content={recipe && recipe.data} />

        <Footer
            status={this.state.status}
            mode={this.state.mode}
            modes={Object.values(ViewModes)}
            onModeChange={this.handleModeChange} />
      </div>
    );
  }
}

export default App;
