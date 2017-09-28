import * as express from 'express';
import {IRouterMatcher, IRouterMatcherRoutes, IRouterMatcherRoutesMethod} from './IRouterMatcher';
import * as dotenv from 'dotenv';
import {dirname} from 'path';
import {IRouterHelperGroupProps} from './IRouterHelper';
import RouterMatcher from './RouterMatcher';

const appDir = dirname(require.main.filename);

dotenv.config();

const controllersPath = `${appDir}${process.env['CONTROLLERS_PATH']}`;

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
                    const controller = require(`${controllersPath}/${item.filePath}`);
                    const instanceController = new controller.default();

                    this.router[method](
                        path,
                        [],
                        (req: Request, res: Response) => instanceController[item.actionName](req, res));
                }));
    }
}