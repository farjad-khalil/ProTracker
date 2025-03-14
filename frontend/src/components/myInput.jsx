import React, { useState } from 'react'

function MyInput({type,e_class,placeholder,value,set}) {
    
  return (
    <div>
      <input
              type={type}
              className={`w-64 min-w-0 px-3 py-2 border  focus:outline-none focus:ring-2 focus:ring-gray-500  ${e_class}`}
              placeholder={placeholder}
              onChange={(e) => { set(e.target.value) }}
            />
    </div>
  )
}

export default MyInput
