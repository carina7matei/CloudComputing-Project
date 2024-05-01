import Link from "next/link";

export default function Navbar(){
    return (
        <nav className="flex justify-between items-center bg-purple-500 px-8 py-3">
        <Link className="text-white font-bold" href={'/'}>ToDo App</Link>
        <Link  className=" rounded-md bg-purple-400 p-2 text-white" href={'/addTodo'}>Add todo</Link>
        </nav>
    );
}