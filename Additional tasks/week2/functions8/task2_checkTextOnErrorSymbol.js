function checkTextOnErrorSymbol(text, errorSymbol, successCallback, errorCallback){

    for(let i = 0; i < text.length; i++){
        if(text.indexOf(errorSymbol)===-1){
            successCallback('В данном тексте нет запрещенных символов')}

        if (text[i] === errorSymbol){
            errorCallback(`Найден запрещенный символ ${errorSymbol} под индексом ${i}`)}}
    }
    
    
function showSuccessMessage(message){
    console.log(message)
}
            
function showErrorMessage(message){
    console.error(message)
}

const text = 'Привет! Как дела! Давно мы с тобой не виделись.'; 
checkTextOnErrorSymbol(text, 'б', showSuccessMessage, showErrorMessage);

/*const showSuccessMessage = (message) => {
  console.log(message);
};

const showErrorMessage = (message) => {
  console.error(message);
};

const checkTextOnErrorSymbol = (
  text,
  errorSymbol,
  successCallback,
  errorCallback
) => {
  let countErrors = 0;
  for (let i = 0; i < text.length; i += 1) {
    const currentSymbol = text[i];
    if (currentSymbol === errorSymbol && errorCallback) {
      errorCallback(
        `Найден запрещенный символ "${errorSymbol}" под индексом ${i}.`
      );
      countErrors += 1;
    }
  }

  if (successCallback && countErrors === 0) {
    successCallback("В данном тексте нет запрещенных символов");
  }
};

const text = "Привет! Как дела! Давно мы с тобой не виделись.";
checkTextOnErrorSymbol(text, "Ф", showSuccessMessage, showErrorMessage);
*/