import mongoose from "mongoose";
const notesSchema = mongoose.Schema(
  {
    name: {
      type: mongoose.ObjectId,
      require: true,
      ref: "users",
    },
    title: {
      type: String,
    },
    text: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("notes", notesSchema);
