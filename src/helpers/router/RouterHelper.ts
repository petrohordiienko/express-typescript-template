import * as express from 'express';
import {IRouterMatcher, IRouterMatcherRoutes, IRouterMatcherRoutesMethod} from './IRouterMatcher';
import {IRouterHelperGroupProps} from './IRouterHelper';
import RouterMatcher from './RouterMatcher';

export default class RouterHelper {
    public static router: express.Router = express.Router();

    public static group(props: IRouterHelperGroupProps, cb: (router: IRouterMatcher) => void): void {
        const routerMatcher = new RouterMatcher();
        cb(routerMatcher);
        const groupRoutes: IRouterMatcherRoutes = routerMatcher.routes;

        Object.keys(groupRoutes)
            .forEach((method: string) =>
                groupRoutes[method].forEach((item: IRouterMatcherRoutesMethod) => {
                    const path = props.prefix ? `/${props.prefix}/${item.path}` : item.path;
                    const controller = require(`${global['app'].path.controllers}/${item.filePath}`);
                    const instanceController = new controller.default();

                    this.router[method](
                        path,
                        [],
                        (req: Request, res: Response) => instanceController[item.actionName](req, res));
                }));
    }
}