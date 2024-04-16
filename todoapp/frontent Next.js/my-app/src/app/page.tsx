import Image from "next/image";
import {deletetask, getdata} from "./server"
import CreateData from "./Createtask";
import Link from "next/link";
import Deletetask from "./Deletetask";
export interface GetData{ content: string, id: number }
export default async function Home() {
  
  const data:GetData[]=await getdata("http://127.0.0.1:8000/todo/")
  // console.log(gettodo)
  return (
    <div className="h-[100vh] bg-gray-200 flex justify-center items-center">
      <div className="bg-gray-500 p-8 mx-auto flex justify-center items-center flex-col w-[600px] rounded-md"><CreateData />

      {
        data.map((val:any)=>{
          return <div className="flex justify-center items-center p-1 " key={val.id}>
            <div className="w-[100px]">{val.name}</div>
            <Deletetask id={val.id}/>
            <Link className="text-black bg-white rounded-md p-1.5 cursor-pointer ml-1" href={`/${val.id}`}>Update</Link>
          </div>
        })
      }</div>
    
    </div>
    
    )
}
