export interface IRouterMatcher {
    get?: (path: string, cbPath: string) => void;
    routes: {get?: IRouterMatcherRoutesMethod[]};
}

export interface IRouterMatcherRoutes {
    get?: IRouterMatcherRoutesMethod[];
    post?: IRouterMatcherRoutesMethod[];
    put?: IRouterMatcherRoutesMethod[];
    delete?: IRouterMatcherRoutesMethod[];
}

export interface IRouterMatcherRoutesMethod {
    path: string;
    filePath: string;
    actionName: string;
}