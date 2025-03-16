import React, { useContext, useEffect, useState } from 'react'
import _WorkoutForm from '../_WorkoutForm'
import { toast, Toaster } from 'sonner'
import { WorkoutContext, WorkoutContextProvider } from '../../context/context'
import format from 'date-fns/format'
import { Clock, Dumbbell, Repeat, Trash2, Flame, CalendarCheck, Trophy} from "lucide-react";
import { } from "lucide-react";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,

} from "@/components/ui/card"
import CommunityCards from '../CommunityCards'

const workoutCards = [
  {
    title: "Total Workouts",
    count: 120, // Example count
    icon: <Dumbbell className="text-purple-500" />,
    bg: "bg-purple-800/20",
  },
  {
    title: "Active Days",
    count: 75, // Number of days user worked out
    icon: <CalendarCheck className="text-yellow-500" />,
    bg: "bg-yellow-800/20",
  },
  {
    title: "Calories Burned",
    count: 18_500, // Example calorie count
    icon: <Flame className="text-red-500" />,
    bg: "bg-red-800/20",
  },
  {
    title: "Personal Bests",
    count: 12, // Example personal bests
    icon: <Trophy className="text-blue-500" />,
    bg: "bg-blue-800/20",
  },
];


function Home() {

    const { workouts, dispatch } = useContext(WorkoutContext)
    const handleDelete = async (w) => {
        console.log(`/api/workouts/${w._id}`);
        const response = await fetch(`https://workouttrackerbackend-7nb918sn4-farjads-projects-4da592f0.vercel.app/api/workouts/${w._id}`, {
            method: 'DELETE'
        })
        if (!response.ok) {
            console.log(json.error);
        }
        else {
            dispatch({ type: 'DELETE_WORKOUT', payload: w._id })
            toast.success("Workout Deleted", {
                description: ``,
                action: {
                    label: "close",
                    onClick: () => console.log("Undo"),
                },
            });
        }

    }
    useEffect(() => {
        const fetchWorkouts = async () => {
            const response = await fetch('https://workouttrackerbackend-7nb918sn4-farjads-projects-4da592f0.vercel.app/api/workouts')
            const json = await response.json()
            if (response.ok) {
                dispatch({ type: 'SET_WORKOUTS', payload: json })
            }
        }
        fetchWorkouts()
    }, [dispatch])
    console.log(workouts);

    return (
        <div className='pt-24 px-10'>
            <CommunityCards Cards={workoutCards} />
            <div className='min-h-screen p-32 pt-2 max-[780px]:p-10 max-[780px]:pt-2'>
                <div className='text-indigo-900 text-2xl font-semibold mb-3'>Workouts</div>
                <div className='grid min-[1450px]:grid-cols-3 min-[1160px]:grid-cols-2 grid-cols-1 gap-2 gap-y-10 '>

                    {workouts.map((w, i) => (

                        <Card className="w-[320px] h-[280px] bg-white rounded-lg relative p-4 transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-gray-400 " key={i}>
                            {/* Card Header */}
                            <CardHeader className="pb-2 cursor-pointer">
                                <div className="flex justify-between items-center">
                                    <CardTitle className="text-xl font-semibold text-indigo-950 capitalize">{w.title}</CardTitle>
                                    <CardDescription
                                        className={`capitalize px-2 py-[2px] rounded-md ${w.exerciseType === "strength" ? "bg-red-50 text-red-900" :
                                            w.exerciseType === "cardio" ? "bg-blue-50 text-blue-900" :
                                                w.exerciseType === "balance" ? "bg-green-50 text-green-900" :
                                                    w.exerciseType === "stretching" ? "bg-yellow-50 text-yellow-900" :
                                                        "bg-gray-50 text-gray-900" // Default fallback
                                            }`
                                        }
                                    >
                                        {w.exerciseType}
                                    </CardDescription>
                                </div>
                            </CardHeader>

                            {/* Card Content */}
                            <CardContent className="space-y-2 text-gray-700 cursor-pointer">
                                <div className="flex items-center gap-2">
                                    <Dumbbell className="w-5 h-5 text-red-700 " />
                                    <p className=" font-light">Load: <span className="font-semibold">{w.load}kg</span></p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Repeat className="w-5 h-5 text-amber-500 " />
                                    <p className="font-light">Repetitions: <span className="font-semibold">{w.reps}</span></p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock className="w-5 h-5 text-blue-700 " />
                                    <p className="font-light">Rest Time: <span className="font-semibold">{w.restTime}</span></p>
                                </div>
                            </CardContent>

                            {/* Card Footer */}
                            <CardFooter className="flex justify-between items-center cursor-pointer">
                                <p className="absolute bottom-2 left-2 text-sm text-gray-500"></p>
                            </CardFooter>
                            <div className='p-2 w-10 absolute bottom-4 hover:bg-red-100 transition-all delay-75 ease-in-out  rounded-full text-red-8600 cursor-pointer' onClick={() => { handleDelete(w) }}>
                                <Trash2 className=' text-red-800 ' />
                            </div>
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
                <_WorkoutForm />
                <Toaster />

            </div>
        </div>
    )
}

export default Home
