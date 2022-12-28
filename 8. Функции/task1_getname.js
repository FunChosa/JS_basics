function getName1(name){ // Function declaration
    return console.log(`Имя равно ${name}`)
}
const getName2 = function (name){ // Function expression
    return console.log(`Имя равно ${name}`)
} 
const getName3 = (name) => { `Имя равно ${name}`}// Arrow function expression

getName1('Huey')
getName2('Dewey')
getName3('Louie Duck')