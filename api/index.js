import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';

dotenv.config();
mongoose.connect(process.env.MONGO_STRING).then(()=>{
    console.log("Connected to MongoDB!!!");
}).catch((error) => {
    console.log(error);
});
const app = express();
app.use(express.json());
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});
app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);