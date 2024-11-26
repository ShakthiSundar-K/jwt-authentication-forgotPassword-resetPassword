import mongoose from "./index.js";
import validators from "../utils/validators.js";
import { generateUUID } from "../utils/helper.js";

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    id: {
      type: String,
      default: function () {
        return generateUUID();
      },
      unique: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      validate: {
        validator: validators.validateEmail,
        message: (props) => `${props.value} is not a valid email!`,
      },
    },

    password: {
      type: String,
      required: true,
    },

    resetPasswordToken: { type: String, default: undefined },
    resetPasswordExpire: { type: Date, default: undefined },
  },
  { timestamps: true }
);

export default mongoose.model("users", UserSchema);
