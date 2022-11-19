import examples from '../sources/examples';

import { useCallback, useState } from 'react';

export class Doc {
    constructor(filename, data) {
        this.filename = filename;
        this.data = data;
    }

    static async fromFile(file) {
        return new Doc(file.name, JSON.parse(await file.text()));
    }
}

export default function useLoader() {
    // JsonBeer Documents
    const [docs, setDocs] = useState([]);

    const loadFile = useCallback(async (file) => {
        if (docs.some(d => d.filename === file.name))
            return;

        setDocs([...docs, await Doc.fromFile(file)])
    }, [docs, setDocs]);

    const loadExample = useCallback(async () => {
        const ex = examples[0];

        if (docs.some(d => d.filename === ex.filename))
            return;

        setDocs([...docs, ex]);
    }, [docs, setDocs]);


    return [docs, loadFile, loadExample];
}