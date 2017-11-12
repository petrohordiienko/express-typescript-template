import {Response, Request} from 'express';
import User from '../database/models/User';
import {BaseController} from "./BaseController";

export default class UserController extends BaseController {
    constructor() {
        super();
    }

    public all(req: Request, res: Response): any {
        User.findAll()
            .then((users) => {
                console.log(users);
            });
        return res.send('users');
    }
}