
import { model, Schema } from "mongoose";

type DocType = {
  user: Schema.Types.ObjectId;
  content: string;
}

const documentSchema = new Schema<DocType>({
  user:     { type: Schema.Types.ObjectId, required: true, ref: 'Users'},
  content:  { type: String, required: true },
}, {
  timestamps: true,
});

const Documents = model<DocType>('Documents', documentSchema);

export default Documents;