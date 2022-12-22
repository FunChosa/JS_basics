const USERS_URL = "https://jsonplaceholder.typicode.com/users";

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

const dataContainer = document.querySelector('#data-container');

const getAllusers = () => {
    toggleLoader();
    const result = fetch(USERS_URL,{ 
        method: 'GET',
    });
    console.log('результат', result); //fetch возвращает promise
    //fetch это специальная функция, которой мы можем передать URL и обработать результат
    result //так как result это promise мы можем его обрабатывать и декодировать
        .then((response) => {
            if(!response.ok){
                throw new Error('ой, что-то пошло не так!') //throw выкидывает ошибку и мы перейдем в блок catch
            }
            return response.json(); //декодирование в заданный формат
        })
        .then((users) => {
            users.forEach((user) => {
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