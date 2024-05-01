'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddTodo(){
    const [title, setTitle]=useState('');
    const [description, setDesc]=useState('');

    const router=useRouter();

    const handleSubmit=async(e)=>{
        e.preventDefault();

        if(!title || !description){
            alert("Title or Description are not valid!");
            return;
        }

        try{
           const res= await fetch("http://localhost:3000/api/todos",{
                method:'POST',
                headers:{
                    "Content-type":"application/json"
                },
                body:JSON.stringify({title,description})
            });

            if(res.ok){
                router.push("/");
            }else{
                throw new Error("Error at creating the todo...")
            }
        }catch(e){
            console.log("Error: ",e);
        }
    }
    return (
       <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input type="text" placeholder="Todo title"
        onChange={(e)=>setTitle(e.target.value)}
        value={title}
            className="borer border-slate-300 px-8 py-2"
        />
         <input type="text" placeholder="Todo description"
            onChange={(e)=>setDesc(e.target.value)}
            value={description}
            className="borer border-slate-300 px-8 py-2"
        />
        <button type="submit" className="bg-purple-500 font-bold text-white py-3 px-6 w-fit">Add ToDo</button>
       </form>
    );
}