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

// ✅ Allow CORS from ANY origin
app.use(cors({
    origin: "*",  // ✅ Allows requests from everywhere
    methods: "GET,POST,PUT,PATCH,DELETE",
    allowedHeaders: "Content-Type,Authorization",
    credentials: true
}));

// ✅ Middleware
app.use(express.json());

// ✅ Debugging - Log incoming requests
app.use((req, res, next) => {
    console.log(`Incoming request: ${req.method} ${req.path}`);
    next();
});

// ✅ API Routes
app.get('/api/workouts', getAllWorkout);
app.get('/api/workouts/:id', getSinWorkout);
app.post('/api/workouts', createWorkout);
app.delete('/api/workouts/:id', deleteWorkout);
app.patch('/api/workouts/:id', updateWorkout);

// ✅ MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        const PORT = process.env.PORT || 5000;
        app.listen(PORT, () => {
            console.log(`✅ CONNECTED TO DB & LISTENING ON PORT ${PORT}`);
        });
    })
    .catch((err) => {
        console.error("❌ Database Connection Error:", err);
    });
