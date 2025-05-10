import express from 'express';

const app = express();

app.use(express.json());

import userRoutes from './routes/user.routes.js';
app.use("/user", userRoutes);

import subjectRoutes from './routes/subject.routes.js';
app.use("/subject", subjectRoutes);

import objectiveRoutes from './routes/objective.routes.js';
app.use("/objective", objectiveRoutes);

export { app }; 