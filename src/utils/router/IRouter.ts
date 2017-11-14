import {NextFunction, Router} from "express";

export interface IRouter {
    group: (props: IRouterGroupProps, cb: (router: Router) => void) => void;
    expressRouter: Router;
}

export interface IRouterGroupProps {
    namespace?: string;
    prefix?: string;
    middleware?: Array<(req: Request, res: Response, next: NextFunction) => void>
}