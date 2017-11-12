import {Connect} from "../database/index";

export abstract class BaseController extends Connect {
    constructor() {
        super();
    }
}