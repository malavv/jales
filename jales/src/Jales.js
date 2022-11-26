import App from './routes/App';
import Home from './routes/Home';

import { Grommet } from 'grommet';

import useLoaders from './hooks/useDocuments';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const theme_config = {
    global: {
        colors: { doc: '#ff99cc' }
    }
};

export default function Jales() {
    const [docs, loadFile, loadExample, loadUrl, closeDoc] = useLoaders();

    return (<Grommet full theme={theme_config}>
        {docs.size === 0
            ? <Home loadFile={loadFile} loadExample={loadExample} />
            : <App docs={docs} loadUrl={loadUrl} closeDoc={closeDoc} />}
            <ToastContainer theme="dark" position='top-right' autoClose={3000} />
    </Grommet>);
}