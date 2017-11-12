import {Sequelize} from 'sequelize-typescript';
import dotenv = require('dotenv');
import * as CONFIG from '../config/database.config';

dotenv['config']();

export class Connect {
    public db: Sequelize;

    constructor() {
        this.db = new Sequelize(CONFIG[process.env['NODE_ENV']]);
    }
}