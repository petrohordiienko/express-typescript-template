import * as express from 'express';
import {IRouterMatcher} from '../../../helpers/router/IRouterMatcher';
import RouterHelper from '../../../helpers/router/RouterHelper';

const v1: express.Router = express.Router();

RouterHelper.group(
    {
        prefix: 'users',
    },
    (router: IRouterMatcher) => {
        router.get('', 'UsersController@all');
    });

v1.use('', RouterHelper.router);

export default v1;