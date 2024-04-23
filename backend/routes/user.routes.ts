import { IRouter, Router } from "express";
import { getUser, getUsers, register, login, updateUser, deleteUser } from "../controllers";

const routers: IRouter = Router();

routers.get('/', getUsers);
routers.post('/register', register);
routers.post('/login', login);

routers.route('/:id').get(getUser).put(updateUser).delete(deleteUser);


// export default routers;
export = routers;