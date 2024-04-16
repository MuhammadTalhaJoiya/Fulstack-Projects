'use client'
import React from 'react'
import { deletetask } from './server'

function Deletetask(props:any) {
  return (
    <div>
      <button className="text-black bg-white rounded-md p-1.5 cursor-pointer ml-1" onClick={()=>{
            deletetask(`http://127.0.0.1:8000/todo/${props.id}`,{id:props.id})
          }}>Delete</button>
    </div>
  )
}

export default Deletetask
