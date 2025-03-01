import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import agendaRoutes from "../backend/routes/agendaRoutes.js";

// express app
const app = express();

// middleware
app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
  console.log(req.path, res.method);
  next();
});

// router
app.use("/api/ajendas", agendaRoutes);

// connect to the DB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to DB");
    // listen to the port
    app.listen(process.env.PORT, () => {
      console.log(`listen to port 4000`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
