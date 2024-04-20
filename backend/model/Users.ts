import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name:   { type: String, required: true },
  age:    { type: Number, required: true },
  email:  { type: String, required: true, unique: true },
});

const Users = mongoose.model('Users', userSchema);

export default Users;