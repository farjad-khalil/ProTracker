require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const { 
    createWorkout, 
    getAllWorkout, 
    getSinWorkout, 
    deleteWorkout, 
    updateWorkout 
} = require('../Controllers/controllerFunctions'); // ✅ Ensure the correct path

const app = express();

// ✅ Allow CORS for both local & deployed frontend
const allowedOrigins = [
    "http://localhost:5173",
    "https://pro-tracker-pi.vercel.app"
];

app.use(cors({
    origin: allowedOrigins,
    methods: "GET,POST,PUT,PATCH,DELETE",
    allowedHeaders: "Content-Type,Authorization",
    credentials: true
}));

app.use(express.json());

// ✅ MongoDB Connection (Prevents multiple connections)
let isConnected = false;

async function connectToDB() {
    if (!isConnected) {
        try {
            await mongoose.connect(process.env.MONGODB_URI, {
                useNewUrlParser: true,
                useUnifiedTopology: true
            });
            isConnected = true;
            console.log("✅ Connected to MongoDB");
        } catch (error) {
            console.error("❌ Database Connection Error:", error);
        }
    }
}
connectToDB();

// ✅ API Routes
app.get('/api/workouts', getAllWorkout);
app.get('/api/workouts/:id', getSinWorkout);
app.post('/api/workouts', createWorkout);
app.delete('/api/workouts/:id', deleteWorkout);
app.patch('/api/workouts/:id', updateWorkout);

// ✅ Export as a Serverless Function
module.exports = app;
