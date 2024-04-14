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
    <div>
    <CreateData />
      {
        data.map((val:any)=>{
          return <div key={val.id}>
            {val.name}
            <Deletetask id={val.id}/>
            <Link href={`/${val.id}`}>Update</Link>
          </div>
        })
      }
    </div>
    
    )
}
