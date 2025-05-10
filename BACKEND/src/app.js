import express from 'express';

const app = express();

app.use(express.json());

import userRoutes from './routes/user.routes.js';
app.use("/user", userRoutes);

import subjectRoutes from './routes/subject.routes.js';
app.use("/subject", subjectRoutes);

export { app }; 