import { IRouter, Router } from "express";
import { getDoc } from "../controllers";

const router: IRouter = Router();

router.get('/document', getDoc);

export default router;