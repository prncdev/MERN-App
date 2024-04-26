import { IRouter, Router } from "express";
import { getUser, getUsers, register, updateUser, deleteUser, login, getMe } from "../controllers";

const routers: IRouter = Router();

routers.get('/', getUsers);
routers.get('/me', getMe);
routers.post('/register', register);
routers.post('/login', login);

routers.route('/:id').get(getUser).put(updateUser).delete(deleteUser);


// export default routers;
export = routers;