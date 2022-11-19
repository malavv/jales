export class Doc {
    /**
     * BeerJSON doc.
     * @param {string} filename Filename
     * @param {Object} data Parsed JSON data
     */
    constructor(filename, data) {
        this.filename = filename;
        this.data = data;
    }

    /**
     * Loads a BeerJSON from a ES5 File
     * 
     * Same as you would get from a FileInput.
     * @param {File} file 
     * @returns BeerJSON doc.
     */
    static async fromFile(file) {
        return new Doc(file.name, JSON.parse(await file.text()));
    }

    /**
     * Loads a BeerJSON document from a public URL.
     * 
     * ex: https://raw.githubusercontent.com/beerjson/beerjson/master/tests/real/KettleSour.json
     * @param {string} url 
     * @returns A BeerJSON document
     */
    static async fromUrl(url) {
        const name = url.slice(url.lastIndexOf("/") + 1);
        const resp = await fetch(url);
  
        return new Doc(name, await resp.json());
    }

    /**
     * Checks structural validity.
     * @returns If BeerJSON document is valid
     */
    isValid() {
        return this.filename && this.data;
    }
}