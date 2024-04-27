import { IRouter, Router } from "express";
import { getUser, getUsers, register, updateUser, deleteUser, login, getMe, logout } from "../controllers";
import { authorizeHandler } from "../middlewares/authorizeHandler";

const routers: IRouter = Router();

routers.get('/', getUsers);
routers.get('/me', authorizeHandler, getMe);
routers.post('/register', register);
routers.post('/login', login);
routers.post('/logout', logout);

routers.route('/:id').get(getUser).put(updateUser).delete(deleteUser);


// export default routers;
export = routers;