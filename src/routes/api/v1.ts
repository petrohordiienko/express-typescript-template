import Router from "../../utils/router/Router";

const router = new Router();

router.group(
    {
        prefix: 'auth',
    },
    (router: Router) => {
        router.post('register', 'AuthorizationController@register');
        router.post('login', 'AuthorizationController@login');
    });

export default router.expressRouter;