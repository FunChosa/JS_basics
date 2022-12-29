const ordersArr = [4, 2, 1, 3]; 
const people = [        
   { id: 1, name: "Максим" },
   { id: 2, name: "Николай" },
   { id: 3, name: "Ангелина" },
   { id: 4, name: "Виталий" },
];
let sortedPatients = [];
function giveTalonsInOrder(patients, orders){
    orders.forEach(element => {
        sortedPatients.push(patients.find(item => item.id === element))
    });
    return sortedPatients;
}
const result = giveTalonsInOrder(people, ordersArr);
console.log('result', result);