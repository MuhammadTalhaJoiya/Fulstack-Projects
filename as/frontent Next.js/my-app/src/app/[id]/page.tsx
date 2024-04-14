'use client'
import { Updatetask } from "../server"
import React, { useState } from 'react'

const Update=({params}:{params:{id:string}})=>{
    const [task,settask]=useState("")
    const id1=Number(params.id)
    return(
        <div>
     <input type="text" 
            value={task}
            onChange={(e)=>{
                settask(e.target.value)
            }}
            placeholder="Enter Updated task"
            />
                <button className="bg-gray-200 rounded-md p-0.5 cursor-pointer"  onClick={()=>{
                    Updatetask(`http://127.0.0.1:8000/todo/${id1}`,{name:task,id:id1})
                    settask("")
                }} >Update</button>
            
    </div>
    )
}
export default Update