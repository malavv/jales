import App from './routes/App';
import Home from './routes/Home';
import Widgets from './routes/Widgets';

import { HashRouter, Routes, Route } from "react-router-dom";
import { useCallback, useEffect, useState } from 'react';

export default function Jales() {

    const [files, setFiles] = useState([]);

    useEffect(() => {
        console.log(`Files changed ${files}`);
    }, [files]);

    const loadFile = useCallback((filename) => {
        setFiles([...files, filename])
    }, [files, setFiles])

    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Home loadFileHdl={loadFile} />} />
                <Route path="view/" element={<App />} />
                <Route path="ui/*" element={<Widgets />} />
            </Routes>
        </HashRouter>
    );
}