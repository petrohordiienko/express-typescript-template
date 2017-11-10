import {Response, Request} from 'express';
import User from '../database/models/User';

export default class UserController {
    constructor() {
    }

    public all(req: Request, res: Response): any {
        User.findAll()
            .then((users) => {
                console.log(users);
            });
        return res.send('users');
    }
}