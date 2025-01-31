require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const {createWorkout,getAllWorkout,getSinWorkout,deleteWorkout,updateWorkout} = require('./Controllers/controllerFunctions')
const app = express()


//middleware
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, '  ', req.method)
    next()
})



//ROUTES
app.get('/', (req, res) => {
    res.json({ mssg: 'response for root' })
})


//GET all workouts
app.get('/api/workouts', getAllWorkout)


//GET single workout
app.get('/api/workouts/:id', getSinWorkout)


//POST a new workout
app.post('/api/workouts', createWorkout)


//DELETE a workouts
app.delete('/api/workouts/:id', deleteWorkout)
//UPDATE a workouts
app.patch('/api/workouts/:id', updateWorkout)



mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('CONNECTED TO DB & LISTENING TO PORT ', process.env.PORT)
        })
    })
    .catch((err) => {
        console.log(err);

    })
//listen for req
