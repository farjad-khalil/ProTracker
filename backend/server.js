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

// ✅ Allow CORS for specific frontend domain
const corsOptions = {
    origin: ["http://localhost:5173"], // Your frontend domain change
    methods: "GET,POST,PUT,PATCH,DELETE",
    allowedHeaders: "Content-Type,Authorization",
    credentials: true
};

app.use(cors(corsOptions));

// ✅ Middleware
app.use(express.json());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");//change
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    console.log(req.path, '  ', req.method);
    next();
});

// ✅ Routes
app.get('/', (req, res) => {
    res.json({ message: 'CORS is working properly!' });
});

// Workout Routes
app.get('/api/workouts', getAllWorkout);
app.get('/api/workouts/:id', getSinWorkout);
app.post('/api/workouts', createWorkout);
app.delete('/api/workouts/:id', deleteWorkout);
app.patch('/api/workouts/:id', updateWorkout);

// ✅ Connect to MongoDB and Start Server
mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('CONNECTED TO DB & LISTENING ON PORT ', process.env.PORT);
        });
    })
    .catch((err) => {
        console.error("Database Connection Error:", err);
    });
