import { IRouter, Router } from "express";
import { getDoc } from "../controllers";
import { authorizeHandler } from "backend/middlewares/authorizeHandler";

const router: IRouter = Router();

router.get('/document', authorizeHandler, getDoc);

export default router;