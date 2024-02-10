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
//how to add data that is in bullet points
export default mongoose.model("notes", notesSchema);
