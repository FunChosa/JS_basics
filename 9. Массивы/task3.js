const coffees = ['Latte', 'Cappuccino', 'Americano']
let coffeeName = prompt("Поиск кофе по названию:")

const indexOfCoffe = coffees.findIndex(
    (coffee) => coffee.toLowerCase() === coffeeName.toLowerCase().trim()
)

const result = (indexOfCoffe > -1) 
? alert(`Держите ваш любимый кофе ${coffees[indexOfCoffe]}. Он ${indexOfCoffe + 1}-й по популярности в нашей кофейне`)
: alert("К сожалению, такого вида кофе нет в наличии")