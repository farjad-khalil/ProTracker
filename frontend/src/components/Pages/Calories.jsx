import React from 'react'
import CalorieChart from '../CalorieChart'
import CalorieGoal from '../CalorieGoal'

export default function Calories() {
    return (
        <div className='min-h-screen pt-28 px-14 '>
            <div className='grid grid-cols-12 gap-10'>
                <CalorieChart />
                <CalorieGoal className='' />
            </div>
        </div>
    )
}
