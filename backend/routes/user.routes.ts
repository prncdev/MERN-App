import { IRouter, Router } from "express";
import { getUser, getUsers, register, updateUser, deleteUser } from "../controllers";

const routers: IRouter = Router();

routers.get('/', getUsers);

routers.get('/:id', getUser);

routers.post('/register', register);

routers.put('/:id', updateUser);

routers.delete('/:id', deleteUser);


// export default routers;
export = routers;