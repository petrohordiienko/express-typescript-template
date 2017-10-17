import PathHelper from "./helpers/path/PathHelper";

Object.defineProperty(global, 'app', {
    get() {
        return {
            path: new PathHelper(),
        }
    }
});