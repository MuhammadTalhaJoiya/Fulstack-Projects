"use server"

import { revalidatePath, revalidateTag } from "next/cache"
import { useRouter } from "next/router"

export const getdata=async(url:string)=>{
    const data=await fetch(url,{
        cache:"no-store",
        next:{
            tags:["task"]
        }
    })
    const res=await data.json()
    return res
}
export const addtask=async(url:string,dataa:any)=>{
    let tasktodo=await fetch(url,{
        method:"POST",
        headers: {
            "Content-Type": "application/json",
          },
        body: JSON.stringify(dataa)
    })
    // revalidateTag("task")
    return "Task added"
}

export const deletetask=async(url:string,data:any)=>{
    let tasktodo=await fetch(url,{
        method:"DELETE",
        headers: {
            "Content-Type": "application/json",
          },
        body: JSON.stringify(data)
    })
    revalidatePath("/")
    return "Task deleted"
}
export const Updatetask=async(url:string,data:any)=>{
    let tasktodo=await fetch(url,{
        method:"PUT",
        headers: {
            "Content-Type": "application/json",
          },
        body: JSON.stringify(data)
    })
    // revalidatePath("/")
    revalidateTag('task')
    return "Task Updated"
}