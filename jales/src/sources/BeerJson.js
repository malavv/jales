import { Doc } from "../hooks/useDocuments";
export default class BeerJSON {

    constructor(id, lbl, data) {
        this.id = id;
        this.lbl = lbl;
        this.data = data;
    }

    static async fromUrl(url) {
        const name = url.slice(url.lastIndexOf("/") + 1);
        const page = await fetch(url);
  
        return new Doc(name, await page.json());
    }
}