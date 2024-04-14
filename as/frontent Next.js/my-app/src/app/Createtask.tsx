'use client'
import { useEffect, useState } from "react"
import { Updatetask, addtask } from "./server"
import { useRouter } from "next/navigation"
const CreateData=()=>{
    const router=useRouter()
    const [task,settask]=useState("")
    return (
        <div >
            <input type="text" 
            value={task}
            onChange={(e)=>{
                settask(e.target.value)
            }}
            placeholder="Enter task"
            />
            {
                <button className="bg-gray-200 rounded-md p-0.5 cursor-pointer"  onClick={()=>{
                    addtask("http://127.0.0.1:8000/todo/",{name:task})
                    router.refresh()
                    settask("")
                }} >Submit</button>
            }
            
            
        </div>
    )
}
export default CreateData