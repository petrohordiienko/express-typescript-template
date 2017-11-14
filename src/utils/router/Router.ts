import * as express from 'express';
import {IRouter, IRouterGroupProps} from './IRouter';

export default class Router implements IRouter {
    expressRouter: express.Router = express.Router();

    constructor() {
    }

    get(path: string, controllerAction: string): void {
        this._setRoute(path, 'get', controllerAction);
    }

    post(path: string, controllerAction: string): void {
        this._setRoute(path, 'post', controllerAction);
    }

    put(path: string, controllerAction: string): void {
        this._setRoute(path, 'put', controllerAction);
    }

    delete(path: string, controllerAction: string): void {
        this._setRoute(path, 'delete', controllerAction);
    }

    group(props: IRouterGroupProps, cb: (router: Router) => void): void {
        const router: Router = new Router();

        cb(router);

        this.expressRouter.use(
            props.prefix ? `/${props.prefix}` : '',
            props.middleware && props.middleware.length ? props.middleware : [],
            router.expressRouter
        );
    }

    private _setRoute(path, method, controllerAction): void {
        const [filePath, actionName] = this._parseControllerAction(controllerAction);
        const controller = require(`${global['app'].path.controllers}/${filePath}`);
        const instanceController = new controller.default();

        if (filePath && actionName) {
            this.expressRouter[method](`/${path}`, (req: Request, res: Response) => instanceController[actionName](req, res));
        }
    }

    private _parseControllerAction(controllerAction: string): string[] {
        const cbPathArray = controllerAction.split('@');

        if (cbPathArray.length === 2) {
            const filePath: string = cbPathArray[0];
            const actionName: string = cbPathArray[1];

            return [filePath, actionName];
        }
    }
}