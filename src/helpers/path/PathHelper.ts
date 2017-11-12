import * as path from 'path';
import {IPathHelper} from "./IPathHelper";

export default class PathHelper implements IPathHelper {
    private static _instance: PathHelper = new PathHelper();

    constructor() {
        if (PathHelper._instance) {
            return PathHelper._instance;
        }

        PathHelper._instance = this;
    }

    get app(): string {
        return `${path.dirname(require.main.filename)}`;
    }

    get controllers(): string {
        return `${this.app}/controllers`;
    }

    get models(): string {
        return `${this.app}/database/models`;
    }
}
