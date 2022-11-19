import './App.css';

import React, { useState, useEffect } from 'react';

import Header from '../ui/Header';
import Footer, { FooterStatus } from '../ui/Footer';
import TabList from '../ui/TabList';
import FileViewer, { ViewModes } from '../viewer/FileViewer';

//import { AskForUrl } from '../util/UserInput';
//import BeerJSON from '../sources/BeerJson';


export default function App(props) {
  const { docs } = props;
  const [active, setActive] = useState(null);
  const [beerJsonVer, setBeerJsonVer] = useState('Unknown');
  const [mode, setMode] = useState(ViewModes.compact);
  const [status, setStatus] =  useState(FooterStatus.green);

  useEffect(() => {
    const a = docs[0];
    setActive(a?.filename);
    setBeerJsonVer(a?.data.beerjson.version);
    setStatus(FooterStatus.green);
  }, [docs]);
  

  const handleFileChange = active => {
    const recipe = docs.find(f => f.id === active);
    setActive(recipe.id);
    setBeerJsonVer(recipe.data.beerjson.version);
  };
  const handleModeChange = mode => setMode(mode);
  const handleNewFile = async () => {
      // example: https://raw.githubusercontent.com/beerjson/beerjson/master/tests/real/KettleSour.json
      //const url = await AskForUrl('Enter BeerJSON file URL. If Github, use raw version');
      //const beerJson = await BeerJSON.fromUrl(url);

      console.log('setFiles([...docs, beerJson]);');
  };

  const recipe = docs.find(e => e.id === active);

  return (
    <div className="App">
      <Header filename={active}/>
      <TabList 
          tabs={docs}
          active={active}
          onChange={handleFileChange}
          onNewFile={handleNewFile} />

      <FileViewer 
          mode={mode}
          name={active} 
          content={recipe && recipe.data} />

      <Footer
          status={status}
          mode={mode}
          beerJsonVer={beerJsonVer}
          modes={Object.values(ViewModes)}
          onModeChange={handleModeChange} />
    </div>
  );
}