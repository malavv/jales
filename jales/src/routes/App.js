import './App.css';

import React, { useState, useEffect, useCallback } from 'react';

import Header from '../ui/Header';
import Footer, { FooterStatus } from '../ui/Footer';
import TabList from '../ui/TabList';
import FileViewer, { ViewModes } from '../viewer/FileViewer';

import AskUser from '../util/AskUser';

import { Notification } from 'grommet';


export default function App(props) {
  const { docs, loadUrl, closeDoc } = props;

  const [active, setActive] = useState(null);
  const [beerJsonVer, setBeerJsonVer] = useState('Unknown');
  const [mode, setMode] = useState(ViewModes.compact);
  const [status, setStatus] = useState(FooterStatus.green);

  const [visibleUrlPrompt, setVisibleUrlPrompt] = useState(false);
  const [toast, setToast] = useState({});
  const [isToastVisible, setToastVisible] = useState(false);

  // Set of BeerJSON documents or active changed
  useEffect(() => {
    if (!active || !docs.has(active)) {
      setActive(docs.keys().next().value);
      return;
    }

    const doc = docs.get(active);
    setBeerJsonVer(doc?.data.beerjson.version);
    setStatus(FooterStatus.green);
  }, [active, docs]);

  // User asked to load URL
  const onAskLoadUrl = useCallback(async (url) => {
    try {
      const doc = await loadUrl(url);
      if (!doc) {
        setToast({ status: "warning", msg: "BeerJSON is already loaded" });
        setToastVisible(true);
      } else {
        setActive(doc.filename);
      }

    } catch (err) {
      console.error(err)
    } finally {
      setVisibleUrlPrompt(false);
    }

  }, [loadUrl, setVisibleUrlPrompt, setToast, setToastVisible]);

  const recipe = docs.get(active);

  return (
    <div className="App">
      <Header filename={active} />

      <TabList
        tabs={docs.keys()}
        active={active}
        tabClickedHdl={(active) => setActive(active)}
        closeTabHdl={closeDoc}
        askLoadUrl={() => setVisibleUrlPrompt(true)} />

      <FileViewer
        mode={mode}
        name={active}
        content={recipe && recipe.data} />

      <Footer
        status={status}
        mode={mode}
        beerJsonVer={beerJsonVer}
        modes={Object.values(ViewModes)}
        onModeChange={mode => setMode(mode)} />

      {isToastVisible && <Notification toast status={toast.status} title={toast.msg} onClose={() => setToastVisible(false) } />}

      <AskUser visible={visibleUrlPrompt} title="Load from URL" submitLbl="Load File" onSubmit={onAskLoadUrl} />
    </div>
  );
}
// onClose={setToastVisible(false)}