
function uniqueArray(array) {
    return [... new Set(array)] 
    // new Set() - получает уникальные значения массива
    // spread ("…") - преобразовывает структуру данных Set в массив
}


console.log(uniqueArray([1, 1, 2, 2, 4, 2, 3, 7, 3]) );// => [1, 2, 4, 3, 7]