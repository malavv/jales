import App from './routes/App';
import Home from './routes/Home';
import Widgets from './routes/Widgets';

import useLoaders from './hooks/useLoaders';

export default function Jales() {
    const [docs, loadFile, loadExample] = useLoaders();

    const isWidget = false;
    const isHome = docs.length === 0;
    const isView = !isHome;

    return (<div>
        {isHome && (<Home loadFileHdl={loadFile} loadExampleHdl={loadExample} />)}

        {isView && (<App docs={docs} />)}

        {isWidget && (<Widgets />)}
    </div>);
}