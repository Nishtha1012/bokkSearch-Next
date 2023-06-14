import { model, models, Schema } from "mongoose";

const userSchema = new Schema({
  email: String,
  username: String,
  password: String,
});

const Users = models.user || model("user", userSchema);

export default Users;
