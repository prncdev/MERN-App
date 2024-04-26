
import { Document, model, Schema } from "mongoose";
interface IDocs extends Document {
  user: Schema.Types.ObjectId;
  content: string;
}

const documentSchema = new Schema<IDocs>({
  user:     { type: Schema.Types.ObjectId, required: true, ref: 'Users'},
  content:  { type: String, required: true },
}, {
  timestamps: true,
});

const Documents = model<IDocs>('Documents', documentSchema);

export default Documents;