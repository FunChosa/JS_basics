function checkQuestionAnswer(question, correctAnswer){
    userAnswer = prompt(question)
    return (userAnswer.toLowerCase() === correctAnswer.toLowerCase())
        ? alert ('Ответ верный')
        : alert ('Ответ неверный')
    }
    checkQuestionAnswer('Арбуз это фрукт или ягода?', 'Ягода');
    checkQuestionAnswer('Сколько в среднем зубов у взрослого человека?', '32');
    checkQuestionAnswer('Как называется самая маленькая птица в мире?', 'Колибри');