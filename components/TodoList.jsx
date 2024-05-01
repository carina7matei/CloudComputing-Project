
import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import {HiPencilAlt} from "react-icons/hi";

const getTodos = async () => {
    try {
      const res = await fetch("http://0.0.0.0:3000/api/todos", {
        cache: "no-store",
      });
  
      if (!res.ok) {
        throw new Error("Failed to fetch topics");
      }
  
      return res.json();
    } catch (error) {
      console.log("Error loading topics: ", error);
    }
  };
  

export default async function TodoList(){
const {todos}= await getTodos();

    return (
    <>
        {todos.map(t=>(
            <div  key={t._id} className="p-4  items-start border border-slate-300 my-3 gap-5 flex justify-between">
            <div>
                <h2 className="font-bold text-2xl">{t.title}</h2>
                <div>{t.description}</div>
            </div>
    
            <div className="flex gap-2">
                <RemoveBtn id={t._id}/>
                <Link href={`/edit/${t._id}`}>
                    <HiPencilAlt size={24}/>
                </Link>
            </div>
           </div>
        ))}
       </>
    );
}