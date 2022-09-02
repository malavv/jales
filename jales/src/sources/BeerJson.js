export default class BeerJSON {

    constructor(id, lbl, data) {
        this.id = id;
        this.lbl = lbl;
        this.data = data;
    }

    static async fromUrl(url) {
        const name = url.slice(url.lastIndexOf("/") + 1);

        const page = await fetch(url);
        const data = await page.json();
  
        return new BeerJSON(name, name, data);
    }
}