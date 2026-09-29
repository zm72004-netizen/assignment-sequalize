import express from 'express';
import { connectDB, sequelize } from './database/connection.js';
import userRouter from './routes/user.routes.js';
import postRouter from './routes/post.routes.js';
import commentRouter from './routes/comment.routes.js';

const app = express();
const port = 3000;

app.use(express.json());


app.use('/users', userRouter);
app.use('/user', userRouter);
app.use('/posts', postRouter);
app.use('/comments', commentRouter);

connectDB();
sequelize.sync({ alter: true });

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});