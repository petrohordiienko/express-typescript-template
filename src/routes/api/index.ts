import v1 from './v1';
import * as express from 'express';

const api: express.Router = express.Router();

api.use('/v1', v1);

export default api;