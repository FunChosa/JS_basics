let question1 = 'Сколько будет 2 + 2?'
let question2 = 'Сколько будет 2 * 2?'
let question3 = 'У Пети было 5 яблок. 3 из них он съел, 1 отдал другу. Сколько яблок у Пети осталось?'
let question4 = 'У Маши было 10 конфет. 2 она съела, 1 отдала другу. После мама дала Маше еще 5 конфет. Сколько в итоге конфет осталось у Маши?'
let question5 = 'Сколько будет 2 + 2 * 2?'

let correctAnswer1 = 4
let correctAnswer2 = 4
let correctAnswer3 = 1
let correctAnswer4 = 2
let correctAnswer5 = 6

//захотелось использовать массивы, потому что очень много однотипных строк :(

let questions = [question1, question2, question3, question4, question5]
let correctAnswers = [correctAnswer1, correctAnswer2,correctAnswer3,correctAnswer4,correctAnswer5]

let correct = 0
let incorrect = 0

for (i=0; i<questions.length; i++){
        let userAnswers =[] 
        userAnswers[i]= prompt(questions[i])
        if (Number(userAnswers[i]) === Number(correctAnswers[i])){
            alert("Ответ верный")
            correct++;
            }else{
                alert("Ответ неверный")
                incorrect++;
            }
    }

alert(`верных ответов ${correct}, неверных ответов ${incorrect}`)
