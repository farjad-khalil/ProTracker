import React, { useContext, useEffect } from 'react'
import MyBarChart from '../MyBarChart'
import { MyPieChart } from '../MyPieChart'
import { WorkoutContext } from '../../context/context'
import MyAreaChart from '../MyAreaChart'

export default function Analytics() {
    const { workouts,dispatch } = useContext(WorkoutContext)
        console.log(workouts)
         useEffect(() => {
                const fetchWorkouts = async () => {
                    const response = await fetch('http://localhost:3000/api/workouts')
                    const json = await response.json()
                    if (response.ok) {
                        dispatch({ type: 'SET_WORKOUTS', payload: json })
                    }
                }
                fetchWorkouts()
            }, [dispatch])
    
    return (
        <div className='min-h-screen'>
            <div className='text-indigo-900 text-2xl font-semibold mb-3'>Track your exercises</div>
            <div className='flex gap-10 mb-10'>
                <MyBarChart workouts={workouts}/>
                <MyPieChart  workouts={workouts} />
            </div>
            <MyAreaChart />
        </div>
    )
}
