export interface IRouterHelper {
    group: (props: IRouterHelperGroupProps, cb: (router) => void) => void;
}

export interface IRouterHelperGroupProps {
    namespace?: string;
    prefix?: string;
}