import {Sequelize} from 'sequelize-typescript';
import dotenv = require('dotenv');

dotenv['config']();

export class Connect {
    public db: Sequelize;

    constructor() {
        this.db = new Sequelize({
            database: process.env['DB_NAME'],
            dialect: 'mysql',
            username: process.env['DB_USER_NAME'],
            password: process.env['DB_PASSWORD'],
            storage: ':memory:',
            modelPaths: [global['app'].path.models],
        });
    }
}