import express from 'express'
import userRouter from './router/user.route';
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());
app.use(userRouter)

export default app;

