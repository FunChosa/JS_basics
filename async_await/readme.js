// then catch finally - проблема в том что код начинает расти вправо
/*
const USERS_URL = 'https://jsonplaceholder.typicode.com/users';
const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos';

fetch(USERS_URL)
    .then((response) => response.json())
        .then((users) => {
            console.log('users', users);
            const firstUserId = users[0]?.id;
            fetch(`${TODOS_URL}?userId=${firstUserId}`)
                .then((response) => response.json())
                .then((todos) => {
                    console.log(todos);
                })
                .catch((error) => {
                    console.log(error);
                })
        })
    .catch((error) => {
        console.log('error', error);
    })
*/

const USERS_URL = 'https://jsonplaceholder.typicode.com/users';
const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos';

const getTodosWithUserData = async () => {
    try {
        const response = await fetch(USERS_URL);
        if(!response.ok){
            throw new Error('ошибка в получении данных о пользователях');
        }
        const users = await response.json();
        console.log(users);
        const firstUserId = users[0]?.id;
        const todosResponse = await fetch(`${TODOS_URL}?userId=${firstUserId}`)
        if(!todosResponse.ok){
            throw new Error('ошибка в получении данных о задачах');
        }
        const todos = await todosResponse.json();
        console.log(todos);
    } catch (error) {
        console.log('ой!', error);
    } finally {
        console.log('finally');
    }
}

const promise = getTodosWithUserData();
console.log(promise);