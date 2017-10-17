import './global';

import * as express from 'express';
import api from './routes/api/index';
import {Connect} from './models/db/Connect';

const connect = new Connect();
const app: express.Application = express();

app.use('/api', api);

const port: number = Number(process.env['PORT']) || 3000;

app.listen(port, () => console.log(`Listening at http://localhost:${port}/`));