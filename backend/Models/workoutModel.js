const mongoose = require('mongoose')
const schema = mongoose.Schema

const workoutSchema = new schema(
    {
        title: {
            type: String,
            required: true
        },
        reps: {
            type: Number,
            required: true
        },
        load: {
            type: Number,
            required: true
        },
        exerciseType: {
            type: String,
            required: true
        },
        restTime: {
            type: Number,
        },
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Workout',workoutSchema)