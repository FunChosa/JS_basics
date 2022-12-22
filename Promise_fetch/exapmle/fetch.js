const TODOS_URL = "https://jsonplaceholder.typicode.com/todos";

const createToDoElement = (text) => {
    const todoElement = document.createElement('li');
    const todoElementAncor = document.createElement('a');
    todoElementAncor.href = '#';
    todoElementAncor.textContent = text;
    todoElement.append(todoElementAncor);
    return todoElement;
}

const toggleLoader = () => {
    const loaderHTML = document.querySelector('#loader');
    const isHidden = loaderHTML.hasAttribute('hidden');
    if(isHidden){
        loaderHTML.removeAttribute('hidden');
    }else{
        loaderHTML.setAttribute('hidden', '');
    }
}

const dataContainer = document.querySelector('#data-container');

const getAllTodos = () => {
    toggleLoader();
    const result = fetch(TODOS_URL,{ 
        method: 'GET',
    });
    console.log('результат', result); //fetch возвращает promise
    //fetch это специальная функция, которой мы можем передать URL и обработать результат
    result //так как result это promise мы можем его обрабатывать и декодировать
        .then((response) => {
            // console.log(response);
            if(!response.ok){
                throw new Error('вот она ошибка') //throw выкидывает ошибку и мы перейдем в блок catch
            }
            return response.json(); //декодирование в заданный формат
        })
        .then((todos) => {
            todos.forEach((todo) => {
                const todoHTML = createToDoElement(todo.title);
                dataContainer.append(todoHTML);
            });
        })
        .catch((error) => {
            console.log('словили ошибку', error);
        })
        .finally(() => {
            toggleLoader();
        })
}

getAllTodos();


