require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()


//middleware
app.use((req, res, next) => {
    console.log(req.path, '  ', req.method)
    next()
})



//ROUTES
app.get('/', (req, res) => {
    res.json({ mssg: 'response for root' })
})
//GET all workouts
app.get('/api/workouts', (req, res) => {
    res.json({ mssg: 'GET all workouts' })
})
//GET single workout
app.get('/api/workouts/:id', (req, res) => {
    res.json({ mssg: 'GET a single workouts' })
})
//POST a new workout
app.post('/api/workouts', (req, res) => {
    res.json({ mssg: 'POST a new workout' })
})
//DELETE a workouts
app.delete('/api/workouts/:id', (req, res) => {
    res.json({ mssg: 'DELETE a single workout' })
})
//UPDATE a workouts
app.patch('/api/workouts/:id', (req, res) => {
    res.json({ mssg: 'UPDATE a workout' })
})



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
