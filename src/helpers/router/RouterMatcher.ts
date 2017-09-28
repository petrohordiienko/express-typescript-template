import {IRouterMatcher, IRouterMatcherRoutes} from './IRouterMatcher';

export default class RouterMatcher implements IRouterMatcher {
    public routes: IRouterMatcherRoutes;

    constructor() {
        this.routes = {};
        this.routes.get = [];
        this.routes.post = [];
        this.routes.put = [];
        this.routes.delete = [];
    }

    public get(path: string, cbPath: string): void {
        const cbPathArray = cbPath.split('@');

        if (cbPathArray.length === 2) {
            const filePath: string = cbPathArray[0];
            const actionName: string = cbPathArray[1];

            this.routes.get.push({path, filePath, actionName});
        }
    }
}