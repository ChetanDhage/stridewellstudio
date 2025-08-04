import { Schema, model } from "mongoose";
import { genSalt, hash, compare } from "bcryptjs";

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
  roles: [
    {
      type: Schema.Types.ObjectId,
      ref: "Role",
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Password encryption
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  const salt = await genSalt(10);
  this.password = await hash(this.password, salt);
  next();
});

// Password comparison
userSchema.methods.comparePassword = async function (password) {
  return await compare(password, this.password);
};

export default model("User", userSchema);
