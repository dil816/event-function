import { agenda } from "../models/agendaModel.js";

// GET all agendas
export const getAllagendas = async (req, res) => {
  try {
    const result = await agenda.find({}).sort({ createdAt: -1 });

    if (!result) {
      return res.status(400).json({ error: "No data found" });
    }

    res.status(200).json(result);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

// GET one agenda
export const getOneagenda = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await agenda.findById(id);

    if (!result) {
      return res.status(400).json({ error: "No data found" });
    }

    res.status(200).json(result);
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
};

// post an agenda
export const createAnagenda = async (req, res) => {
  const { title, date, startTime, endTime, timeRange,eventId } = req.body;

  try {
    const result = await agenda.create({
      title,
      date,
      startTime,
      endTime,
      timeRange,
      eventId,
    });

    if (!result) {
      return res.status(400).json({ error: "No data found" });
    }

    res.status(200).json(result);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

// DELETE an agenda
export const deleteAnagenda = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await agenda.findOneAndDelete({ _id: id });
    if (!result) {
      return res.status(400).json({ error: "No data found" });
    }

    res.status(200).json(result);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

// PUT an agenda
export const updateAnagendas = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await agenda.findOneAndUpdate({ _id: id }, { ...req.body });

    if (!result) {
      return res.status(400).json({ error: "No data found" });
    }

    res.status(200).json(result);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
