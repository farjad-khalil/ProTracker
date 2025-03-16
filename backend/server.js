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
} = require('./Controllers/controllerFunctions');

const app = express();

// ✅ Allow CORS for both local & production frontend
const allowedOrigins = [
    "http://localhost:5173", // Local Development
    "https://pro-tracker-pi.vercel.app" // ✅ Deployed Frontend
];

const corsOptions = {
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error("CORS policy does not allow access from this origin"));
        }
    },
    methods: "GET,POST,PUT,PATCH,DELETE",
    allowedHeaders: "Content-Type,Authorization",
    credentials: true
};

// ✅ Apply CORS Middleware FIRST
app.use(cors(corsOptions));
app.options("*", cors(corsOptions)); // Handle CORS Preflight Requests

// ✅ Middleware
app.use(express.json());

app.use((req, res, next) => {
    console.log(`🚀 Request: ${req.method} ${req.path}`);
    next();
});

// ✅ Test Route (Check if Backend is Working)
app.get('/', (req, res) => {
    res.json({ message: 'Backend is running with CORS enabled!' });
});

// ✅ Workout Routes
app.get('/api/workouts', getAllWorkout);
app.get('/api/workouts/:id', getSinWorkout);
app.post('/api/workouts', createWorkout);
app.delete('/api/workouts/:id', deleteWorkout);
app.patch('/api/workouts/:id', updateWorkout);

// ✅ Connect to MongoDB and Start Server
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`✅ CONNECTED TO DB & LISTENING ON PORT ${PORT}`);
        });
    })
    .catch((err) => {
        console.error("❌ Database Connection Error:", err);
    });
