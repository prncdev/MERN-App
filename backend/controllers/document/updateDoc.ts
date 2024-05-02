import { Request, Response, NextFunction, RequestHandler } from "express";
import Documents from "../../models/Documents";

const updateDoc: RequestHandler = async function(req: Request, res: Response, next: NextFunction) {
  try {
    const content = await Documents.findById(req.params.id);
    
    // Check whether the document is exists with provided Doc ID.
    if(!content) {
      res.status(404);
      throw new Error('No content found to update');
    }

    const updatedDoc = await Documents.findByIdAndUpdate(req.params.id, req.body, {new: true});

    res.status(200).json({ content: updatedDoc});
    
  } catch(error) {
    next(error)
  }
}

export default updateDoc