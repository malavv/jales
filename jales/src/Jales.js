import App from './routes/App';
import Home from './routes/Home';
import Widgets from './routes/Widgets';

import { Grommet } from 'grommet';

import useLoaders from './hooks/useDocuments';

export default function Jales() {
    const [docs, loadFile, loadExample, loadUrl, closeDoc] = useLoaders();

    const isWidget = false;
    const isHome = docs.size === 0;
    const isView = !isHome;

    return (<Grommet full>
        {isHome && 
            <Home loadFile={loadFile} loadExample={loadExample} />}

        {isView && 
            <App docs={docs} loadUrl={loadUrl} closeDoc={closeDoc} />}

        {isWidget && (<Widgets />)}
    </Grommet>);
}