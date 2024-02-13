import userModel from "../models/userModel.js";
import noteModel from "../models/noteModel.js";
//get notes
export const getNotes = async (req, res) => {
  try {
    const notes = await noteModel.find({ user: req.user.id });
    res.status(201).send({
      success: true,
      message: "notes fetched Successfully",
      notes,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error in getting notes",
      error,
    });
  }
};
//getOneNote
export const getOneNote = async (req, res) => {
  try {
    noteModel.findOne(req.params.id);
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in getting One notes",
      error,
    });
  }
};
// create notes
export const createNotes = async (req, res) => {
  try {
    if (!req.body.title) {
      res.status(400).send({
        success: false,
        message: "Error in getting title notes",
      });
    }
    const { title, text, isPinned, isTrashed, color, label } = req.body;
    const notes = await noteModel.create({
      title,
      text,
      user: req.user.id,
      isPinned,
      isTrashed,
      color,
      label,
    });
    res.status(200).send(notes);
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in creating notes",
    });
  }
};
// update notes
export const updateNote = async (req, res) => {
  try {
    const id = req.params.id;
    // const { title, text, isPinned, isTrashed, color } = req.body;
    const updateNote = await noteModel
      .findOneAndUpdate(
        { _id: "65c88a35f6a00808d1e54d31" },
        {
          new: true,
        },
        req.body
      )
      .save();

    res.status(200).send({
      success: true,
      message: "notes updated Successfully",
      updateNote,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in updating notes",
    });
  }
};
export const deleteNote = async (req, res) => {
  const id = req.params.id;
  noteModel
    .findByIdAndDelete(id)
    .then((deletedNote) => {
      if (!deletedNote) {
        return res
          .status(404)
          .json({ success: false, message: "Note not found" });
      }
      res.status(200).json({
        success: true,
        message: "Note deleted successfully",
        deletedNote,
      });
    })
    .catch((error) => {
      console.error("Error deleting note:", error);
      res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    });
};
