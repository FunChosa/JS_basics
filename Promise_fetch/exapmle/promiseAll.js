// Promise.all([
//     new Promise(),
//     new Promise(),
//     new Promise(),
// ]);

const TODOS_URL = "https://jsonplaceholder.typicode.com/todos";

const todosIds = [43, 10, 5, 100, 101];
const dataContainer = document.querySelector('#data-container');

const createToDoElement = (text) => {
    const todoElement = document.createElement('li');
    const todoElementAncor = document.createElement('a');
    todoElementAncor.href = '#';
    todoElementAncor.textContent = text;
    todoElement.append(todoElementAncor);
    return todoElement;
}

const getTodoByIds = (ids) => {
    const requests = ids.map((id) => fetch(`${TODOS_URL}/${id}`));
    Promise.all(requests)
        .then((responses) => {
            const dataResults = responses.map((response)=> response.json());
            return Promise.all(dataResults);
        })
        .then((todos) => {
            console.log('тудус', todos);
            todos.forEach((todo) => {
                const todoHTML = createToDoElement (todo.title);
                dataContainer.append(todoHTML);
            });
        })
        .catch((error) => {
            console.log('упс!',error);
        })
}

getTodoByIds(todosIds);