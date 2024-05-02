import EditTodoForm from "@/components/EditTodoForm";



const getTodoById = async (id) => {
  const apiURL=process.env.API_URL;
    try {
      const res = await fetch(`${apiURL}/api/todos/${id}`, {
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