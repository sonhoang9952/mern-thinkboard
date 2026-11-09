import express from "express";
import { getAllNote } from "../controller/notesController.js";

const router = express.Router();

router.get("/", getAllNote);

export default router;
