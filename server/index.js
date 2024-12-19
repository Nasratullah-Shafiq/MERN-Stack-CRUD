import express from "express";
import mongoose from "mongoose";
import Dotenv from "dotenv";  // Import dotenv
import route from './routes/route.js'; // Import your route
import cors from "cors";
const app = express();

// Use express's built-in JSON parser
app.use(express.json());
app.use(cors());
Dotenv.config(); // Load environment variables

const PORT = process.env.PORT || 7000;
const MONGOURL = process.env.MONGO_URL;

mongoose
    .connect(MONGOURL, { useNewUrlParser: true, useUnifiedTopology: true }) // Recommended options
    .then(() => {
        console.log("DB Connected Successfully.");
        app.listen(PORT, () => {
            console.log(`Server is Running on port:${PORT}`);
        });
    })
    .catch((error) => console.log(`Error connecting to MongoDB: ${error.message}`));

// Use the routes
app.use("/api", route);

