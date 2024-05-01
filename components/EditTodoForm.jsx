export default function EditTodoForm(){

    return (
        <form className="flex flex-col gap-3">
         <input type="text" placeholder="Todo title"
             className="borer border-slate-300 px-8 py-2"
         />
          <input type="text" placeholder="Todo description"
             className="borer border-slate-300 px-8 py-2"
         />
         <button className="bg-purple-500 font-bold text-white py-3 px-6 w-fit">Update ToDo</button>
        </form>
     );
}