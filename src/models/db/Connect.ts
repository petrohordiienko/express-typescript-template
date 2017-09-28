import {Sequelize} from 'sequelize-typescript';
import dotenv = require('dotenv');
import pathLib = require('path');
const appDir = pathLib.dirname(require.main.filename);

dotenv['config']();

const modelsPath = `${appDir}${process.env['MODELS_PATH']}`;

export class Connect {
    public db: Sequelize;

    constructor() {
        this.db = new Sequelize({
            database: 'api',
            dialect: 'mysql',
            username: 'root',
            password: '111',
            storage: ':memory:',
            modelPaths: [modelsPath],
        });
    }
}