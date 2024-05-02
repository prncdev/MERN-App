import { Request, Response, NextFunction, RequestHandler } from "express";
import Documents from "../../models/Documents";

const deleteDoc: RequestHandler = async function(req: Request, res: Response, next: NextFunction) {
  try {
    const content = await Documents.findById(req.params.id);
    
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