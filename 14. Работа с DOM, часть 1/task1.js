// const body = document.querySelector("body");

// //форма
// const form = document.createElement("form");
// form.className = "create-user-form";
// body.prepend(form);

// //label1
// const label1 = document.createElement("label");
// label1.textContent = " Имя ";
// form.prepend(label1);

// //plaseholder1
// const plaseholder1 =  document.createElement("input");
// plaseholder1.type = "text";
// plaseholder1.name = "userName";
// plaseholder1.placeholder = "Введите ваше имя";
// label1.append(plaseholder1);

// //label2
// const label2 = document.createElement("label");
// label2.textContent = " Пароль ";
// label2.style.backgroundColor = "#fffff"
// label1.after(label2);

// //plaseholder2
// const plaseholder2 =  document.createElement("input");
// plaseholder2.type = "password";
// plaseholder2.name = "password";
// plaseholder2.placeholder = "Придумайте Пароль";
// label2.append(plaseholder2);

// //кнопка
// const submit = document.createElement("button");
// submit.textContent = "  Подтвердить";
// submit.type = submit;
// label2.after(submit);

// //проверяем
// console.log(form)

// // =============================

const bodyMain = document.querySelector("body");

bodyMain.innerHTML = '<form class="create-user-form"></form>'; 
const formMain = bodyMain.querySelector('.create-user-form'); 

formMain.innerHTML = '<label label-id="1">Имя </label>'; 
const labelName = formMain.querySelector('[label-id="1"]'); 
labelName.innerHTML += '<input type="text" name="userName" placeholder="Введите ваше имя">';

formMain.innerHTML += '<label label-id="2"> Пароль </label>';
const labelPassword = formMain.querySelector('[label-id="2"]');
labelPassword.innerHTML += '<input type="text" name="userName" placeholder="Введите ваше имя">';
formMain.innerHTML += '<button type="submit"> Подтвердить </button>';