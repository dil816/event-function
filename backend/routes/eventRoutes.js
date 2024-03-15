import express from "express";
import {
  getOneevents,
  getAllevents,
  createEvents,
  deleteEvents,
  updateEvents,
} from "../controllers/eventController.js";

const router = express.Router();

// Get one Event
router.get("/:id", getOneevents);

// Get All Events
router.get("/", getAllevents);

// Post An Event
router.post("/", createEvents);

// Delete An Event
router.delete("/:id", deleteEvents);

// Update An Event
router.put("/:id", updateEvents);

export default router;
