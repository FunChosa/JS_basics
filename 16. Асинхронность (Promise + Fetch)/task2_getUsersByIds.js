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


const getUsersByIds = (ids) => {
    toggleLoader();
    Promise.all(ids.map((id) => fetch(`${USERS_URL}/${id}`)))
        .then((responses) => {
            return Promise.all(responses.map((response) => response.json()));
        })
        .then((users) => {
            const usersArray = Array.isArray(users) ? users : Object.values(users);
            usersArray.forEach((user) => {
                const userHTML = createNewUser (user.name);
                dataContainer.append(userHTML);
            });
        })
        .catch((error) => {
            console.log('упс!',error);
        })
        .finally(() => {
            toggleLoader();
          });
}

getUsersByIds([5, 6, 2, 1]);