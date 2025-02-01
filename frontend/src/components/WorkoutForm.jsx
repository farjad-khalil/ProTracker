import React, { useState } from 'react'

function WorkoutForm() {
    const [title, setTitle] = useState('');
    const [load, setLoad] = useState('');
    const [reps, setReps] = useState('');
    const [error, setError] = useState(null);


    const handleSubmit = async (e) => {
        e.preventDefault();
        const workout = { title, load, reps }
        
        const response = await fetch('/api/workouts',{
            method:'POST',
            body:JSON.stringify(workout),
            headers:{
                    'Content-type':'application/json'
            }
        })
        const json = await response.json();
        if(!response.ok){
            setError(json.error)
        }
        else{
            setTitle('')
            setLoad('')
            setReps('')
            setError(null)
            console.log("new workout added");
            
        }

    }
    return (
        <div>
            <form className='create' onSubmit={handleSubmit}>
                <h3>Add a new workout</h3>
                <label>Title</label>
                <input onChange={(e) => { setTitle(e.target.value) }} type='text' value={title} />
                <label>LOAD:</label>
                <input onChange={(e) => { setLoad(e.target.value) }} type='number' value={load} />
                <label>REPS</label>
                <input onChange={(e) => { setReps(e.target.value) }} type='number' value={reps} />
                <button>Add workout</button>
                {error && <div className='error'> {error}</div>}
            </form>
        </div>
    )
}

export default WorkoutForm
