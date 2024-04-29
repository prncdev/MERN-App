import { Schema, Document, model } from "mongoose";

// Define the interface representing the structure of your user document.
interface IUsers extends Document{
  name: string;
  email: string;
  password: string;
  session?: string;
  expiresOn?: Date;
}

const userSchema = new Schema<IUsers>({
  name:        { type: String, required: true },
  email:       { type: String, required: true, unique: true },
  password:    { type: String, required: true },
  session:     { type: String },
  expiresOn:   { type: Date }
}, {
  timestamps: true,
});

const Users = model<IUsers>('Users', userSchema);

export default Users;