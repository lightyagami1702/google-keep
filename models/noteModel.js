import mongoose from "mongoose";
const notesSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
      ref: "Users",
    },
    title: {
      type: String,
    },
    text: {
      type: String,
      require: true,
    },
    isPinned: {
      type: Boolean,
    },
    isTrashed: {
      type: Boolean,
    },
    color: {
      type: String,
    },
    label: [
      {
        name: String,
      },
    ],
    collaborator: [{ name: String, email: String }],
  },
  { timestamps: true }
);
//how to add data that is in bullet points
export default mongoose.model("notes", notesSchema);
