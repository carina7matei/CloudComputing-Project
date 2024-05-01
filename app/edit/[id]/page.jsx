import EditTodoForm from "@/components/EditTodoForm";



const getTodoById = async (id) => {
    try {
      const res = await fetch(`/api/todos/${id}`, {
        cache: "no-store",
      });
  
      if (!res.ok) {
        throw new Error("Failed to fetch topic");
      }
  
      return res.json();
    } catch (error) {
      console.log(error);
    }
  };
  
  export default async function EditTopic({ params }) {
    const { id } = params;
    const { todo } = await getTodoById(id);
    const { title, description } = todo;
  
    return <EditTodoForm id={id} title={title} description={description} />;
  }