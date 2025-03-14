
import React from 'react'
import WorkoutForm from './WorkoutForm';
import { UserPen } from 'lucide-react';


export default function Navbar() {
  return (
    <nav className="bg-gray-50 w-[calc(100%-13rem)]  h-20 fixed top-0 z-20 flex items-center justify-between px-6">

      <div className="text-indigo-900 text-2xl ">Overview </div>
      <div className='flex items-center'>
        <input placeholder="Search" className="border px-3 py-2 w-80 rounded-3xl text-gray-700 mx-10 bg-gray-100 cursor-text" disabled
        />
        <div className='w-10 h-10 bg-red-100 rounded-full text-red-600 cursor-pointer hover:bg-red-200 flex items-center justify-center mx-2'>
          <UserPen className='' />
        </div>
        <WorkoutForm />
      </div>

    </nav>
  );
}