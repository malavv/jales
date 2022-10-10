import './App.css';

import React, { useEffect, useState } from 'react';

import Header from '../ui/Header';
import Footer, { FooterStatus } from '../ui/Footer';
import TabList from '../ui/TabList';
import FileViewer, { ViewModes } from '../viewer/FileViewer';

import examples from '../sources/examples';
import { AskForUrl } from '../util/UserInput';
import BeerJSON from '../sources/BeerJson';

function getFilename(path) {
  let sIdx = path.lastIndexOf("/");
  if (sIdx !== -1)
    return path.substr(sIdx + 1);
  return path.substr(path.lastIndexOf("\\") + 1);
}

export default function App() {
  const [files, setFiles] = useState([]);
  const [active, setActive] = useState(null);
  const [beerJsonVer, setBeerJsonVer] = useState('Unknown');
  const [mode, setMode] = useState(ViewModes.compact);
  const [status, setStatus] =  useState(FooterStatus.green);

  useEffect(() => {

    if (window.fileArg === '') { // Default to examples
      console.log("App is starting with file arg:", window.fileArg);
      const files = examples; // Fetch list of files
      setFiles(files);
      setActive(files[0].id);
      setBeerJsonVer(files[0].data.beerjson.version);
      setStatus(FooterStatus.green);
    } else {
      // Loads file given as arguments if it's there.
      const fileArg = window.fileArg;
      console.log(`Load filename ${window.fileArg}`);
      const fileId = getFilename(fileArg);
  
      // Called when message received from main process
      window.api.receive("fromMain", (data) => {
        const files = [
          {
            id: fileId,
            lbl: fileId,
            data: data
          }
        ]; // Fetch list of files
        setFiles(files);
        setActive(fileId);
        // Unclear why version is not there.
        setBeerJsonVer(data.beerjson?.version);
        setStatus(FooterStatus.green);
      });
    
      // Send a message to the main process
      window.api.send("toMain", fileArg);    
    }

  }, []);

  const handleFileChange = active => {
    const recipe = files.find(f => f.id === active);
    setActive(recipe.id);
    setBeerJsonVer(recipe.data.beerjson.version);
  };
  const handleModeChange = mode => setMode(mode);
  const handleNewFile = async () => {
      // example: https://raw.githubusercontent.com/beerjson/beerjson/master/tests/real/KettleSour.json
      const url = await AskForUrl('Enter BeerJSON file URL. If Github, use raw version');
      const beerJson = await BeerJSON.fromUrl(url);

      setFiles([...files, beerJson]);
  };

  const recipe = files.find(e => e.id === active);

  return (
    <div className="App">
      <Header filename={active}/>
      <TabList 
          tabs={files}
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