const tasks = [
    {
      id: "1138465078061",
      completed: false,
      text: "Посмотреть новый урок по JavaScript"
    },
    {
      id: "1138465078062",
      completed: false,
      text: "Выполнить тест после урока"
    },
    {
      id: "1138465078063",
      completed: false,
      text: "Выполнить ДЗ после урока"
    }
  ];
  
  const createTaskItem = (taskId, taskText) => {
    const taskItem = document.createElement("div");
    taskItem.className = "task-item";
    taskItem.dataset.taskId = taskId;
  
    const taskItemMainContainer = document.createElement("div");
    taskItemMainContainer.className = "task-item__main-container";
  
    const taskItemMainContent = document.createElement("div");
    taskItemMainContent.className = "task-item__main-content";
  
    taskItem.append(taskItemMainContainer);
    taskItemMainContainer.append(taskItemMainContent);
  
    const checkboxForm = document.createElement("form");
    checkboxForm.className = "checkbox-form";
  
    const inputCheckbox = document.createElement("input");
    inputCheckbox.type = "checkbox";
    inputCheckbox.className = "checkbox-form__checkbox";
    const inputId = `task-${taskId}`;
    inputCheckbox.id = inputId;
  
    const labelCheckbox = document.createElement("label");
    labelCheckbox.htmlFor = inputId;
  
    const taskItemText = document.createElement("span");
    taskItemText.className = "task-item__text";
    taskItemText.innerText = taskText;
  
    const deleteButton = document.createElement("button");
    deleteButton.className =
      "task-item__delete-button default-button delete-button";
    deleteButton.innerText = "Удалить";
  
    taskItemMainContent.append(checkboxForm, taskItemText);
    checkboxForm.append(inputCheckbox, labelCheckbox);
    taskItemMainContainer.append(deleteButton);
  
    return taskItem;
  };
  
  const tasksListContainer = document.querySelector(".tasks-list");

  tasks.forEach((task) => {
    const taskItem = createTaskItem(task.id, task.text);
    tasksListContainer.append(taskItem);
  });

function checkExistinTasks(newElementValue){ //вспомогательная фунция для проверки существующей записи
    return tasks.findIndex(item => item.text === newElementValue);
}


const submitButton = document.querySelector(".create-task-block");
submitButton.addEventListener("submit", (event) => {
    const errorMessageBlock = submitButton.querySelector('.error-message-block');
    event.preventDefault();
    const { target } = event;
    const newTaskNameInput = target.taskName;
    const inputValue = newTaskNameInput.value;
    console.log(inputValue.length);
    if(inputValue){
        
        if(checkExistinTasks(inputValue) === -1){
            
            if(errorMessageBlock){
                errorMessageBlock.remove();
            }

            tasks.push (newTask = {
                id: String(Date.now()),
                completed: false,
                text: inputValue,
            });

            tasksListContainer.append(createTaskItem(newTask.id, newTask.text));
        }
        else{
            
            if(errorMessageBlock){
                errorMessageBlock.remove();
            }
            submitButton.innerHTML += `<span class="error-message-block"> Задача с таким названием уже существует. </span>`
        }  
        }
        else{
            if(errorMessageBlock){
            errorMessageBlock.remove();
        }
            
        submitButton.innerHTML += `<span class="error-message-block"> Название задачи не должно быть пустым! </span>`
        } 
  });


  const createNotification = () => {

    const modalOverlay = document.createElement("div");
    modalOverlay.className = ("modal-overlay");
    // modalOverlay.classList.add('modal-overlay_hidden');    

    const deleteModal = document.createElement("div");
    deleteModal.className = "delete-modal";
  
    const taskItemMainContent = document.createElement("div");
    taskItemMainContent.className = "task-item__main-content";

    const deleteModalQuestion = document.createElement("h3");
    deleteModalQuestion.className = "delete-modal__question";
    deleteModalQuestion.textContent = "Вы действительно хотите удалить эту задачу?";

    const deleteModalButtons = document.createElement("div");
    deleteModalButtons.className = "delete-modal__buttons";
  
    const cancelButton = document.createElement("button");
    cancelButton.className = ("delete-modal__cancel-button");
    cancelButton.classList.add("delete-modal__button");
    cancelButton.textContent = "Отмена";

    const deleteButton = document.createElement("button");
    deleteButton.className = ("delete-modal__confirm-button");
    deleteButton.classList.add("delete-modal__button");
    deleteButton.textContent = "Удалить";

    deleteModalButtons.append(deleteButton);
    deleteModalButtons.append(cancelButton);
    deleteModal.append(deleteModalQuestion);
    deleteModal.append(deleteModalButtons);
    modalOverlay.append(deleteModal);

    cancelButton.addEventListener('click', () => {
        console.log("эээ");
        // const modalOverlay = document.querySelector('.modal-overlay'); //
        modalOverlay.classList.add('modal-overlay_hidden');
    })
    return modalOverlay;
}
  
const body = document.querySelector('body')

  tasksListContainer.addEventListener('click', (event) => {
    console.log(event);
    console.log(tasks);

    const buttonName = event.target.closest('.task-item');
    
    const isDeleteButton = event.target.closest('.task-item__delete-button');
    
    if(isDeleteButton){

        const modalOverlay = document.querySelector('.modal-overlay'); 
        if(modalOverlay){
            modalOverlay.classList.remove('modal-overlay_hidden');
        }
        
        else{   
            const Notification = createNotification(); 
            body.append(Notification);
        }
        
        const deleteButton = document.querySelector('.delete-modal__confirm-button')
        deleteButton.addEventListener('click', () => {
            const buttonId = buttonName.dataset.taskId;
            const index = tasks.findIndex(el => el.id === buttonId);
            console.log(tasks.splice(index,1));
            document.querySelector(`[data-task-id="${buttonId}"]`).remove();
            const modalOverlay = document.querySelector('.modal-overlay'); 
            modalOverlay.classList.add('modal-overlay_hidden');

        })

    }
    })


    //===========меняет тему=======

    document.addEventListener('keydown', (event) =>{
    
        const {key} = event;
        
        if(key === "Tab"){
        event.preventDefault();
    
        const body = document.querySelector('body');
        const allTaskItems = document.querySelectorAll('.task-item');
        const allButtons = document.querySelectorAll('button');

        let computedStyle = getComputedStyle(document.body);
        
        const darkTheme = {
            border:'1px solid #ffffff',
            backgroundColor: '#24292E',
            color:'#ffffff',
        }

        const lightTheme = {
            border:'none',
            backgroundColor: 'initial',
            color:'initial',
        }

        if(computedStyle.backgroundColor === hex2rgb('#24292E')){
            body.style.backgroundColor = lightTheme.backgroundColor;
            allTaskItems.forEach(element => {
                element.style.color = lightTheme.color;
            });
        
            allButtons.forEach(element => {
                element.style.border = lightTheme.border;
            });
        }else{
            body.style.backgroundColor = darkTheme.backgroundColor;
            allTaskItems.forEach(element => {
                element.style.color = darkTheme.color;
            });
         
            allButtons.forEach(element => {
                element.style.border = darkTheme.border;
            });
        }
        }
       })     
       
    
       function hex2rgb(c) {
        var bigint = parseInt(c.split('#')[1], 16);
        var r = (bigint >> 16) & 255;
        var g = (bigint >> 8) & 255;
        var b = bigint & 255;
        return 'rgb(' + r + ', ' + g + ', ' + b + ')';
    }