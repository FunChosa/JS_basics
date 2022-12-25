const clientName = prompt('Введите имя клиента')
let clientSpentToday = prompt('Сколько клиент потратил сегодня?')
let clientSpentForAllTime = prompt('Сколько клиент потратил за все время?')

clientSpentToday = Number(clientSpentToday)
clientSpentForAllTime = Number(clientSpentForAllTime)

let discount = 0

if(clientSpentForAllTime && clientSpentToday){
    if(clientSpentForAllTime >= 100 && clientSpentForAllTime < 300){
        discount = 10
    } else if(clientSpentForAllTime >= 300 && clientSpentForAllTime < 500){
        discount = 20
    } else if(clientSpentForAllTime >= 500 ){
        discount = 30
    } 
    alert(`Вам предоставляется скидка в ${discount}%!` )
    clientSpentToday = clientSpentToday - (clientSpentToday * discount) / 100
    clientSpentForAllTime += clientSpentToday
    alert(`Спасибо, ${clientName}! К оплате ${clientSpentToday}$. За все время в нашем ресторане вы потратили ${clientSpentForAllTime}$.`)
}
else{
    alert('Сумма, которую клиент потратил за все время и которую потратил сегодня, должна быть числом! Перезагрузи страницу, чтобы повторить попытку.')
}