import { Request } from "express";

interface Req extends Request {
  user: {
    id: string;
    name: string;
    email: string;
    session?: string;
    expiresOn?: Date;
  }
};

declare global {
  namespace Express {
    interface Request extends Req {};
  }
};