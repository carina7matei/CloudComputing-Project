"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditTodoForm({id, title, description}){

    const [newTitle, setNewTitle]=useState(title);
    const [newDescription, setNewDescription]=useState(description);

    const router=useRouter();
    const handleSubmit= async (e)=>{
        e.preventDefault();
        try{
            const res=await fetch(`/api/todos/${id}`,{
                method:"PUT",
                headers:{
                    "Content-type":"application/json"
                },
                body:JSON.stringify({newTitle,newDescription})
            });

            if(!res.ok){
                throw new Error("Failed to update todo.")
            }
            router.refresh();
            router.push("/");
        }catch(e){
            console.log(e);
        }

    }

    return (
        <form  onSubmit={handleSubmit} className="flex flex-col gap-3">
         <input type="text" placeholder="Todo title"
         onChange={(e)=>setNewTitle(e.target.value)}
         value={newTitle}
             className="borer border-slate-300 px-8 py-2"
         />
          <input type="text" placeholder="Todo description"
             onChange={(e)=>setNewDescription(e.target.value)}
            value={newDescription}
             className="borer border-slate-300 px-8 py-2"
         />
         <button className="bg-purple-500 font-bold text-white py-3 px-6 w-fit">Update ToDo</button>
        </form>
     );
}