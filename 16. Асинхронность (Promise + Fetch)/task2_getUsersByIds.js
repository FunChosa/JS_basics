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


const getUsersByIds = (ids) => {
    const requests = ids.map((id) => fetch(`${USERS_URL}/${id}`));
    Promise.all(requests)
        .then((responses) => {
            const dataResults = responses.map((response)=> response.json());
            return Promise.all(dataResults);
        })
        .then((users) => {
            users.forEach((user) => {
                const userHTML = createNewUser (user.name);
                dataContainer.append(userHTML);
            });
        })
        .catch((error) => {
            console.log('упс!',error);
        })
}

getUsersByIds([5, 6, 2, 1]);