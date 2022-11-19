import examples from '../sources/examples';

import { useCallback, useState } from 'react';

import { Doc } from '../model/doc';

export default function useLoader() {
    // BeerJSON Documents
    const [docs, setDocs] = useState(new Map());
    const [cache] = useState(new Map());

    // Returns what was loaded.
    const setDocIfMissing = useCallback(async (doc) => {
        if (!doc.isValid())
            throw new Error('JSON document is invalid and is not loaded');

        if (!docs.has(doc.filename)) {
            setDocs(new Map([...docs.entries(), [doc.filename, doc]]))
            return doc;
        }
        console.info(`${doc.filename} already in open documents`);
        return null;
    }, [docs, setDocs]);

    const cacheDoc = useCallback(async (docname, creator) => {
        if (cache.has(docname))
            return cache.get(docname);
        const nd = await creator(docname);
        cache.set(docname, nd);
        return nd;
    }, [cache]);

    const closeDoc = useCallback((filename) => {
        setDocs(docs => new Map([...docs.entries()].filter(([k]) => k !== filename)));
      }, [setDocs]);
    

    const loadExample = useCallback(async () => setDocIfMissing(examples[0]), [setDocIfMissing]);
    const loadFile = useCallback(async (file) => setDocIfMissing(await cacheDoc(file, Doc.fromFile)), [setDocIfMissing, cacheDoc]);
    const loadUrl = useCallback(async (url) => setDocIfMissing(await cacheDoc(url, Doc.fromUrl)), [setDocIfMissing, cacheDoc]);

    return [docs, loadFile, loadExample, loadUrl, closeDoc];
}