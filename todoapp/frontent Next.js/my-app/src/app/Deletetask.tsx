'use client'
import React from 'react'
import { deletetask } from './server'

function Deletetask(props:any) {
  return (
    <div>
      <button className="bg-gray-200 rounded-md p-0.5 px-1 cursor-pointer ml-3" onClick={()=>{
            deletetask(`http://127.0.0.1:8000/todo/${props.id}`,{id:props.id})
          }}>Delete</button>
    </div>
  )
}

export default Deletetask
