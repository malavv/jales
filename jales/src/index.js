import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from "react-router-dom";

import reportWebVitals from './reportWebVitals';

import App from './routes/App';
import Home from './routes/Home';
import Widgets from './routes/Widgets';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="view/" element={<App />} />
        <Route path="ui/*" element={<Widgets />} />
      </Routes>
    </HashRouter>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
