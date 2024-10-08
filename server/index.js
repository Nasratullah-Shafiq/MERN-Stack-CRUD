import express from "express"
import mongoose from "mongoose"
import bodyParser from "body-parser"
import Dotenv from "dotenv"
import route from './routes/route.js';

const app = express();
app.use(bodyParser.json());
Dotenv.config();

const PORT = process.env.PORT || 7000;
const MONGOURL = process.env.MONGO_URL;

mongoose
        .connect(MONGOURL)
        .then(()=>{
            console.log("DB Connected Successfully.")
            app.listen(PORT,()=>{
                console.log('Server is Running on port:${PORT} ');
            });
        })
        .catch((error)=>console.log(error));
app.use("/api", route);


