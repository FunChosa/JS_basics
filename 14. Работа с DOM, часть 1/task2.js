const tasksList = document.querySelector(".tasks-list");

const tasks = [
    {
        id: '1138465078061',
        completed: false,
        text: 'Посмотреть новый урок по JavaScript',
    },
    {
        id: '1138465078062',
        completed: false,
        text: 'Выполнить тест после урока',
    },
    {
        id: '1138465078063',
        completed: false,
        text: 'Выполнить ДЗ после урока',
    },
];


tasks.forEach(element => {
    tasksList.innerHTML += `<div class="task-item" data-task-id="${element.id}"></div>`; //<div class="task-item" data-task-id="1">
    const taskItem = tasksList.querySelector(`[data-task-id="${element.id}"]`);
    taskItem.innerHTML = '<div class="task-item__main-container"></div>'; //<div class="task-item__main-container">
    const mainContainer = taskItem.querySelector('.task-item__main-container');
    mainContainer.innerHTML += '<div class="task-item__main-content"></div>';//<div class="task-item__main-content">
    const mainContent = mainContainer.querySelector('.task-item__main-content');
    mainContent.innerHTML += '<form class="checkbox-form"></form>'; //<form class="checkbox-form">
    const checkboxForm = mainContent.querySelector('.checkbox-form');
    checkboxForm.innerHTML += `<input class="checkbox-form__checkbox" type="checkbox" id="task-${element.id}">`;
    checkboxForm.innerHTML += `<label for="task-${element.id}"></label>`;
    mainContent.innerHTML += `<span class="task-item__text"> ${element.text} </span>`; //<span class="task-item__text">
    mainContainer.innerHTML += `<button class="task-item__delete-button default-button delete-button" data-delete-task-id="${element.id}">Удалить</button>`;

});