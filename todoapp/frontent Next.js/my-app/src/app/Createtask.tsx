'use client'
import { useEffect, useState } from "react"
import { Updatetask, addtask } from "./server"
import { useRouter } from "next/navigation"
const CreateData=()=>{
    const router=useRouter()
    const [task,settask]=useState("")
    return (
        <div className="pb-2">
      <div className="text-center mb-4 text-lg">TODO</div>

            <input type="text" 
            className="p-2 rounded-md"
            value={task}
            onChange={(e)=>{
                settask(e.target.value)
            }}
            placeholder="Enter task"
            />
            {
                <button className="text-black bg-white rounded-md p-1.5 cursor-pointer ml-0.5"  onClick={()=>{
                    addtask("http://127.0.0.1:8000/todo/",{name:task})
                    router.refresh()
                    settask("")
                }} >Submit</button>
            }
            
            
        </div>
    )
}
export default CreateData