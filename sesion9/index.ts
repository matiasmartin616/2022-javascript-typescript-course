import axios from 'axios';

const url = "https://jsonplaceholder.typicode.com/todos/1";

interface ITodo{
        userId: number,
        id: number,
        title: string,
        completed: boolean,
}

axios.get(url).then(response => {   
    const todo = response.data as ITodo//Hacer un casting coger un objeto y castearlo a Todo

    const id = todo.id;
    const title = todo.title;
    const completed = todo.completed;

    console.log(id,title,completed);

})