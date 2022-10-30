import express from 'express'
import categoriesRouter from './categories/router/categories.route';
import userRouter from './user/router/user.route';
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());
app.use(userRouter);
app.use(categoriesRouter);

export default app;

