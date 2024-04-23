import { Schema, model } from "mongoose";

interface IUsers{
  name: string;
  email: string;
  age: number;
}

const userSchema = new Schema<IUsers>({
  name:   { type: String, required: true },
  age:    { type: Number, required: true },
  email:  { type: String, required: true, unique: true },
}, {
  timestamps: true,
});

const Users = model<IUsers>('Users', userSchema);

export default Users;