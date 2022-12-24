const USERS_URL = "https://jsonplaceholder.typicode.com/users";
const dataContainer = document.querySelector('#data-container');


const createNewUser = (name) => {
    const newUser = document.createElement('li');
    const newUserLink = document.createElement('a');
    newUserLink.href = '#';
    newUserLink.textContent = name;
    newUser.append(newUserLink);
    return newUser;
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


const getAllusers = () => {
    toggleLoader();
    
    //fetch возвращает promise
    //fetch это специальная функция, которой мы можем передать URL и обработать результат
    //так как result это promise мы можем его обрабатывать и декодировать
    fetch(USERS_URL) //method: 'GET' по умолчанию
        .then((response) => {
            if(!response.ok){
                throw new Error('ой, что-то пошло не так!') //throw выкидывает ошибку и мы перейдем в блок catch
            }
            return response.json(); //декодирование в заданный формат
        })
        .then((users) => {
            const usersArray = Array.isArray(users) ? users : Object.values(users);
            usersArray.forEach((user) => {
                const userHTML = createNewUser(user.name);
                dataContainer.append(userHTML);
            });
        })
        .catch((error) => {
            console.log('словили ошибку', error);
        })
        .finally(() => {
            toggleLoader();
        })
}

getAllusers();