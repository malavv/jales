export default class Files {
    static getFilename(path) {
        let sIdx = path.lastIndexOf("/");
        if (sIdx !== -1)
            return path.substr(sIdx + 1);
        return path.substr(path.lastIndexOf("\\") + 1);
    }
}
