import { IRouter, Router } from "express";
import { getUser, getUsers, register } from "../controller";

const routers: IRouter = Router();

routers.get('/', getUsers);
routers.get('/:id', getUser);

routers.post('/register', register);

// export default routers;
export = routers;