import { NextFunction, Request, RequestHandler, Response } from "express";
import Documents from "../../models/Documents";
import Users from "../../models/Users";

const deleteDoc: RequestHandler = async function(req: Request | any, res: Response, next: NextFunction) {
  try {
    const content = await Documents.findById(req.params.id);
    const user = await Users.findById(req.user.id);
    
    // Check if the current loggedin user is owner/author of the document.
    if(!user) {
      res.status(401);
      throw new Error('unauthorized');
    }
    
    // Check whether the document is exists with provided Doc ID.
    if(!content) {
      res.status(404);
      throw new Error('Can\'t delete no content found');
    }

    const deletedDoc = await Documents.findByIdAndDelete(req.params.id);

    res.status(200).json({
      id: deletedDoc?.id,
      message: 'Deleted successfully'
    });

  } catch(error) {
    next(error)
  }
}

export default deleteDoc