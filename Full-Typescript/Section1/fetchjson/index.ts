import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/todos/1"

interface ToDo {
    id: number;
    title: string;
    completed: boolean;
}

axios.get(url).then(response => {
    const todo = response.data as ToDo;
    
    const id = todo.id;
    const title = todo.title;
    const completed = todo.completed;

    logTodo(id, title, completed);
    
});

const logTodo = (id: number, title: string, completed: boolean) => {
    console.log(`
        The toDo ID: ${id}
        Has a tittle of: ${title}
        status of finished: ${completed}
    `)
}
