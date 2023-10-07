import express from "express";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";
import studentRouter from "../routes/routerStudents.js";
import connectionDB from "../config/connection.js";
import colors from "colors";

connectionDB()
dotenv.config();
const app = express();
const PORT = process.env.PORT = 5000

// TODO: middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// TODO: endpoints
app.use(studentRouter)

const bootstrap = () => {
    try {
        app.listen(PORT)
    } catch (error) {
        throw new Error(error)        
    }
};

bootstrap()