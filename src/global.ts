import PathHelper from "./utils/path/PathHelper";

Object.defineProperty(global, 'app', {
    get() {
        return {
            path: new PathHelper(),
        }
    }
});