import mongoose from "mongoose";

const documentSchema = new mongoose.Schema({
  user:     { type: mongoose.Schema.Types.ObjectId, required: true },
  content:  { type: String, required: true },
  ref:      'Users'
});

const Documents = mongoose.model('Documents', documentSchema);

export default Documents;