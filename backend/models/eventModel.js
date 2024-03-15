import mongoose from "mongoose";

const eventSchema = mongoose.Schema(
  {
    eventTitle: {
      type: String,
      require: true,
    },
    startDate: {
      type: String,
      require: true,
    },
    location: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

export const event = mongoose.model("Event", eventSchema);
