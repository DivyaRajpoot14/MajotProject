import express from 'express';
import cors from "cors";
const app = express();

app.use(express.json());

app.use(cors()); // 🟢 Allow all origins by default
// or to allow only your frontend:
app.use(cors({
  origin: process.env.CORS, // ✅ only allow React frontend
  credentials: true
}));

import userRoutes from './routes/user.routes.js';
app.use("/user", userRoutes);

import subjectRoutes from './routes/subject.routes.js';
app.use("/subject", subjectRoutes);

import objectiveRoutes from './routes/objective.routes.js';
app.use("/objective", objectiveRoutes);

export { app }; 