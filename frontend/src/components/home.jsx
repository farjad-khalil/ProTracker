import React, { useContext, useEffect, useState } from 'react'
import WorkoutForm from './WorkoutForm'
import { WorkoutContext } from '../context/context'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
function Home() {
    const { workouts, dispatch } = useContext(WorkoutContext)
    const handleDelete = async(w)=>{
        console.log(`/api/workouts/${w._id}`);
        const response = await fetch(`/api/workouts/${w._id}`,{
            method:'DELETE'
        })
        if(!response.ok){
            console.log(json.error);
        }
        else{
            dispatch({type:'DELETE_WORKOUT',payload:w._id})
        }

    }
    useEffect(() => {
        const fetchWorkouts = async () => {
            const response = await fetch('/api/workouts')
            const json = await response.json()
            if (response.ok) {
                dispatch({type:'SET_WORKOUTS',payload:json})
            }
        }
        fetchWorkouts()
    }, [dispatch])
    return (
        <div className='home'>
            <div className='workouts'>

                {workouts.length > 0 ? (
                    workouts.map((w, i) => (
                        <div key={w._id} className='workout-details'>
                            <h4>{w.title}</h4>
                            <p><strong>Reps:</strong>{w.reps}</p>
                            <p><strong>Load:</strong>{w.load}</p>
                            <p>{formatDistanceToNow(new Date(w.createdAt),{addSuffix:true})}</p>
                            <span onClick={()=>{handleDelete(w)}}>&times;</span> {/* Matches .workout-details span CSS */}
                        </div>
                    ))
                ) : (<>no workout found...</>)
                }
            
            </div>
            <WorkoutForm/>
        </div>
    )
}

export default Home
