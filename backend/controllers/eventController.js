import { event } from "../models/eventModel.js";

// GET all events
export const getAllevents = async (req, res) => {
  try {
    const result = await event.find({}).sort({ createdAt: -1 });

    if (!result) {
      return res.status(400).json({ error: "No Data Found" });
    }

    res.status(200).json(result);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

//Get one event
export const getOneevents = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await event.findById(id);

    if (!result) {
      return res.status(400).json({ error: "No data found" });
    }

    res.status(200).json(result);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

//Post an Events
export const createEvents = async (req, res) => {
  const { eventTitle, startDate, startTime, location, description, eventType } =
    req.body;
  const photo = req.file.filename;
  try {
    const result = await event.create({
      eventTitle,
      startDate,
      startTime,
      location,
      description,
      eventType,
      photo,
    });

    if (!result) {
      return res.status(400).json({ error: "No data found" });
    }

    res.status(200).json(result);
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
};

//Delete an event
export const deleteEvents = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await event.findOneAndDelete({ _id: id });
    if (!result) {
      res.status(400).json({ error: "No data found" });
    }

    res.status(200).json(result);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

//Update an evnt
export const updateEvents = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await event.findOneAndUpdate({ _id: id }, { ...req.body });

    if (!result) {
      return res.status(400).json({ error: "No data found" });
    }

    res.status(200).json(result);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
