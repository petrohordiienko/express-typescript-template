import * as path from 'path';
import {IPathHelper} from "./IPathHelper";

export default class PathHelper implements IPathHelper {
    private _instance: PathHelper;

    constructor() {
        if (this._instance) {
            return this._instance;
        }

        this._instance = this;
    }

    get app(): string {
        return `${path.dirname(require.main.filename)}}`;
    }

    get controllers(): string {
        return `${path.dirname(require.main.filename)}/controllers`;
    }

    get models(): string {
        return `${path.dirname(require.main.filename)}/models`;
    }
}
