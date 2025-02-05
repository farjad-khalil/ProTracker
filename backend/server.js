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

// ✅ Enable CORS for your frontend domain
app.use(cors({
    origin: "https://workouttrackerapp-rho.vercel.app", // Allow frontend domain
    methods: "GET,POST,PUT,PATCH,DELETE",
    allowedHeaders: "Content-Type,Authorization"
}));

// ✅ Middleware
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, '  ', req.method);
    next();
});

// ✅ Routes
app.get('/', (req, res) => {
    res.json({ message: 'Response from root' });
});

// GET all workouts
app.get('/api/workouts', getAllWorkout);

// GET single workout
app.get('/api/workouts/:id', getSinWorkout);

// POST a new workout
app.post('/api/workouts', createWorkout);

// DELETE a workout
app.delete('/api/workouts/:id', deleteWorkout);

// UPDATE a workout
app.patch('/api/workouts/:id', updateWorkout);

// ✅ Connect to MongoDB and Start Server
mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('CONNECTED TO DB & LISTENING ON PORT ', process.env.PORT);
        });
    })
    .catch((err) => {
        console.log("Database Connection Error:", err);
    });
