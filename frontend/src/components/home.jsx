import React, { useContext, useEffect, useState } from 'react'
import WorkoutForm from './WorkoutForm'
import { Toaster } from 'sonner'
import { WorkoutContext } from '../context/context'
import format from 'date-fns/format'
import { Clock, Dumbbell, Repeat } from "lucide-react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
    
} from "@/components/ui/card"

function Home() {
    
    const { workouts, dispatch } = useContext(WorkoutContext)
    const handleDelete = async (w) => {
        console.log(`/api/workouts/${w._id}`);
        const response = await fetch(`/api/workouts/${w._id}`, {
            method: 'DELETE'
        })
        if (!response.ok) {
            console.log(json.error);
        }
        else {
            dispatch({ type: 'DELETE_WORKOUT', payload: w._id })
        }

    }
    useEffect(() => {
        const fetchWorkouts = async () => {
            const response = await fetch('/api/workouts')
            const json = await response.json()
            if (response.ok) {
                dispatch({ type: 'SET_WORKOUTS', payload: json })
            }
        }
        fetchWorkouts()
    }, [dispatch])
    return (

        <div className=''>
            <div className='grid grid-cols-3 gap-2 gap-y-10'>
            
                {workouts.map((w, i) => (
                    <Card className="w-[320px] h-[280px] bg-white shadow-md rounded-lg relative p-4" key={i}>
                        {/* Card Header */}
                        <CardHeader className="pb-2 cursor-pointer">
                            <div className="flex justify-between items-center">
                                <CardTitle className="text-xl font-semibold text-gray-900 capitalize">{w.title}</CardTitle>
                                <CardDescription>Strenght</CardDescription>
                            </div>
                        </CardHeader>

                        {/* Card Content */}
                        <CardContent className="space-y-2 text-gray-700 cursor-pointer">
                            <div className="flex items-center gap-2">
                                <Dumbbell className="w-5 h-5 text-red-700" />
                                <p className=" font-medium">Load: <span className="font-semibold">{w.load}kg</span></p>
                            </div>
                            <div className="flex items-center gap-2">
                                <Repeat className="w-5 h-5 text-amber-500" />
                                <p className="font-medium">Repetitions: <span className="font-semibold">15</span></p>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-5 h-5 text-blue-700" />
                                <p className="font-medium">Rest Time: <span className="font-semibold">60 sec</span></p>
                            </div>
                        </CardContent>

                        {/* Card Footer */}
                        <CardFooter className="flex justify-between items-center cursor-pointer">
                            <p className="absolute bottom-2 left-2 text-sm text-gray-500"></p>
                        </CardFooter>

                        {/* Time Display at Bottom Right */}
                        <div className="absolute bottom-4 right-4 text-xs text-gray-600 bg-gray-200 px-2 py-1 rounded-md">
                        {format(new Date(w.createdAt), "dd/MM/yyyy")} | 10:45 AM
                        </div>
                    </Card>
                ))}

            </div>


            <div className=' '>

                {workouts.length > 0 ? (
                    workouts.map((w, i) => (
                        <div key={w._id} className=' '>
                            <h4>{w.title}</h4>
                            <p><strong>Reps:</strong>{w.reps}</p>
                            <p><strong>Load:</strong>{w.load}</p>
                            {/* <p>{formatDistanceToNow(new Date(w.createdAt), { addSuffix: true })}</p> */}
                            <span onClick={() => { handleDelete(w) }}>&times;</span> {/* Matches .workout-details span CSS */}
                        </div>
                    ))
                ) : (<>no workout found...</>)
                }

            </div>
            <WorkoutForm />
        <Toaster />
            
        </div>
    )
}

export default Home
