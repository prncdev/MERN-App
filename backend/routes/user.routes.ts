import { IRouter, Router } from "express";
import { getUser, getUsers, register, updateUser, deleteUser } from "../controllers";

const routers: IRouter = Router();

routers.get('/', getUsers);
routers.post('/register', register);

routers.route('/:id').get(getUser).put(updateUser).delete(deleteUser);


// export default routers;
export = routers;