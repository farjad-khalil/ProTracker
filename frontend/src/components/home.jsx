import React, { useEffect, useState } from 'react'

function Home() {
    const [workout, setWorkout] = useState([])

    useEffect(() => {
        const fetchWorkouts = async () => {
            const response = await fetch('/api/workouts')
            console.log(response, 'asf')
            const json = await response.json()
            console.log(json);

            if (response.ok) {
                setWorkout(json)
            }
        }
        fetchWorkouts()
    }, [])
    return (
        <div className='home'>
            <div className='workouts'>

                {workout.length > 0 ? (
                    workout.map((w, i) => (
                        <div key={w._id} className='workout-details'>
                            <h4>{w.title}</h4>
                            <p><strong>Reps:</strong>{w.reps}</p>
                            <p><strong>Load:</strong>{w.load}</p>
                            <p>Created At: {w.createdAt}</p>
                            <span>&times;</span> {/* Matches .workout-details span CSS */}
                        </div>
                    ))
                ) : (<>Loading...</>)

                }
            </div>
        </div>
    )
}

export default Home
