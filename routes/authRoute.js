import express from "express";
import {
  loginController,
  registerController,
} from "../controller/authController.js";
import { requiredSign } from "../middleware/authMiddleware.js";
import {
  createNotes,
  deleteNote,
  // getNotes,
  getOneNote,
  updateNote,
} from "../controller/notesController.js";
//router object
const router = express.Router();
//register
router.post("/register", registerController);
//login
router.post("/login", loginController);
//get notes
// router.get("/notes-home", requiredSign, getNotes);
//get notes
router.get("/notes-home/:id", requiredSign, getOneNote);
//create note
router.post("/notes-home", requiredSign, createNotes);
//update note
router.patch("/notes-home/:id", requiredSign, updateNote);
//delete note
router.delete("/notes-home/:id", requiredSign, deleteNote);
export default router;
