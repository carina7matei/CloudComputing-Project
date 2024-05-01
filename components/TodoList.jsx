import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import {HiPencilAlt} from "react-icons/hi";

export default function TodoList(){
    return (
       <div className="p-4  items-start border border-slate-300 my-3 gap-5 flex justify-between">
        <div>
            <h2 className="font-bold text-2xl">ToDo title</h2>
            <div>ToDo Description</div>
        </div>

        <div className="flex gap-2">
            <RemoveBtn/>
            <Link href={'/edit/123'}>
                <HiPencilAlt size={24}/>
            </Link>
        </div>
       </div>
    );
}