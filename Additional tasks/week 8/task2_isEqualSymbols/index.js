function isEqualSymbols(str1, str2) { 
    let chars1 = str1.split('').sort().join(''); 
    let chars2 = str2.split('').sort().join(''); 
    return chars1 == chars2;
}

console.log(isEqualSymbols('адрес', 'среда')) // true 
console.log(isEqualSymbols('ноутбук', 'программист')) // false 