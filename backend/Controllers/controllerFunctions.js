const { default: mongoose } = require('mongoose')
const Workout = require('../Models/workoutModel')


//CREATE a new workout
const createWorkout = async (req,res)=> {
    const {title,load,reps,exerciseType,restTime} =  req.body
    try{
        const workout = await Workout.create({title,load,reps,exerciseType,restTime})
        res.status(200).json(workout)
    }catch(err){
        res.status(400).json({error:err.message})
    }
}
//GET all workouts
const getAllWorkout = async (req,res) => {
    try{
        const allWorkouts = await Workout.find().sort({ createdAt: -1 })
        res.status(200).json(allWorkouts)

    }catch(err){
        res.status(400).json({error:err.message})
    }
}
//GET single workout
const getSinWorkout = async (req,res) => {
        const {id} = req.params
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(400).json({error:'No such Workout'})
        }
        const SinWorkout = await Workout.findById(id)
        if(!SinWorkout){
            return res.status(400).json({error:'No such Workout'})
        }else{
            res.status(200).json(SinWorkout)
        }

   
}
//DELETE a workout
const deleteWorkout  = async (req,res)=>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error:'No such Workout'})
    }
    const workout = await Workout.findByIdAndDelete(id)
    if(!workout){
        return res.status(400).json({error:'No such Workout'})
    }
    res.status(200).json(workout)
}

//UPDATE a workout
const updateWorkout = async (req,res)=>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error:'No such Workout'})
    }
    const workout = await Workout.findByIdAndUpdate(id,{...req.body} );
    if(!workout){
        return res.status(400).json({error:'No such Workout'})
    }
    res.status(200).json(workout)
}


module.exports = {
    createWorkout,
    getAllWorkout,
    getSinWorkout,
    deleteWorkout,
    updateWorkout
}