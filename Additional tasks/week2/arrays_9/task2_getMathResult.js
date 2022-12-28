function getMathResult(expression){
    const possibleOperations = [">", "<", "=", "+", "-", "*", "/"] //массив разрешенных операторов
    

    if(expression.length > 3){
        let updatedExpression = []
        expression.forEach(function(item, index, array) {
                if(Number(item) || possibleOperations.includes(item)){
                    updatedExpression.push(item)
                }
            })
        expression = updatedExpression
    }

    if(expression.length < 3){
        return console.log ('Ошибка длины')
    }
    
    if(expression.length == 3){
    switch (expression[1]){ 
    case ">": return console.log (Number(expression[0]) > Number(expression[2])); break;
    case "<": return console.log (Number(expression[0]) < Number(expression[2])); break;
    case "=": return console.log (Number(expression[0]) == Number(expression[2])); break;
    case "+": return console.log (Number(expression[0]) + Number(expression[2])); break;
    case "-": return console.log (Number(expression[0]) - Number(expression[2])); break;
    case "*": return console.log (Number(expression[0]) * Number(expression[2])); break;
    case "/": return console.log (Number(expression[0]) / Number(expression[2])); break;
    default: return console.log ('Ошибка оператора'); break;
  }}
     
}

getMathResult(['100', 'hello', 'javascript', 'help200','help200', '*', 4]);
getMathResult(['200', '+', 300]); // 500
getMathResult(['20', '-', '5']); // 15
getMathResult([100, '/', 100]); // 1
getMathResult([2, '-', 2]); // 0
getMathResult(['5', '>', '10']); // false
getMathResult(['5', '<', '10']); // true
getMathResult(['1', '=', 1]); // true
getMathResult(['+', '100', 10]); // 'Ошибка'
getMathResult(['1', '**', 1]); // 'Ошибка'
getMathResult(['1', 1]); // 'Ошибка'