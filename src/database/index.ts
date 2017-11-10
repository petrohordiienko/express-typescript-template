import {Sequelize} from 'sequelize-typescript';
import dotenv = require('dotenv');
import CONFIG from './config';

dotenv['config']();

export class Connect {
    public db: Sequelize;

    constructor() {
        this.db = new Sequelize(CONFIG[process.env['NODE_ENV']]);

        this.db.authenticate()
            .then(() => {
                console.log('Connection has been established successfully.');
            })
            .catch(err => {
                console.error('Unable to connect to the database:', err);
            });
    }
}