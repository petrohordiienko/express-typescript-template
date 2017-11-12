import './global';

import * as express from 'express';
import api from './routes/api/index';

export default class Server {
    private _port: number = Number(process.env['PORT']) || 3000;
    private _app: express.Application;
    public static app: express.Application;

    constructor() {
        this._app = express();
        Server.app = this._app;

        this._app.use('/api', api);
        this._app.listen(this._port, () => console.log(`Listening at http://localhost:${this._port}`));
    }
}

new Server();