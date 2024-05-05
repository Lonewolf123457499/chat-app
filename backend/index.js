import express from"express"
import dotenv from"dotenv"
const app=express();
const PORT=process.env.PORT||8080;

import cookieParser from "cookie-parser";
import authRoutes from"./routes/auth.routes.js"
import messageRoutes from "./routes/message.routes.js"
import connectTomongoosedb from "./db/connectionToMongodb.js";
import userRouter from "./routes/users.routes.js"
dotenv.config();
app.use(express.json())

import cors from "cors"

// const app = express();

// Allow requests from all origins
app.use(cors());
connectTomongoosedb();
app.use("/api/auth",authRoutes);
app.use(cookieParser());
app.use("/api/messages", messageRoutes);
app.use("/api/users",userRouter);

app.get("/",(req,res)=>{
    res.send("hi");
})
 app.listen(PORT,()=>{
console.log(`http://localhost:${PORT}`)
 })