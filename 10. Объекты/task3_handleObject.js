function handleObject(obj, key, action){ 
    switch(action){ 
    case 'get': return obj[key] 
    case 'add': obj[key] = ""; return obj 
    case 'delete': delete obj[key]; return obj 
    default: return obj 
     
 } 
} 
 
const student = { 
    name: 'Maxim', 
    programmingLanguage: 'JavaScript', 
} 
 
const result = handleObject(student, 'programmingLanguage', 'get'); 
// const result = handleObject(student, 'age', 'add'); 
// const result = handleObject(student, 'programmingLanguage', 'delete'); 
// const result = handleObject(student, 'programmingLanguage', 'remove'); 
console.log('result', result); // { name: 'Maxim' }