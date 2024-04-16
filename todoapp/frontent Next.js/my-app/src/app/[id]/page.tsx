'use client'
import { Updatetask } from "../server"
import React, { useState } from 'react'

const Update=({params}:{params:{id:string}})=>{
    const [task,settask]=useState("")
    const id1=Number(params.id)
    return(
        <div className="flex justify-center items-center h-screen bg-gray-200">
            <div className="h-[220px] flex flex-col  justify-center p-4 rounded-md bg-gray-500 ">
                <div className="text-center mb-11 text-lg">Update</div>
                <div className="flex justify-center items-center mb-5">
                <input type="text" 
                className="p-2 mr-1 rounded-md
                "
                value={task}
                onChange={(e)=>{
                    settask(e.target.value)
                }}
                placeholder="Enter Updated task"
                />
                    <button className="bg-gray-200 rounded-md  cursor-pointer p-2"  onClick={()=>{
                        Updatetask(`http://127.0.0.1:8000/todo/${id1}`,{name:task,id:id1})
                        settask("")
                    }} >Update</button>
                </div>
                
            </div>
     
            
    </div>
    )
}
export default Update