import { IRouter, Router } from "express";
import { deleteDoc, getDoc, setDoc, updateDoc } from "../controllers";
import { authorizeHandler } from "../middlewares/authorizeHandler";

const routers: IRouter = Router();

routers.route('/document').get(authorizeHandler, getDoc).post(authorizeHandler, setDoc);
routers.route('/document/:id').delete(authorizeHandler, deleteDoc).put(authorizeHandler, updateDoc);

// $2a$10$oCnGDNVYJYXQBxku3gxuOO--e8dc8076-b9ad-40fa-aa07-87d8c5c0eb5c
export default routers;