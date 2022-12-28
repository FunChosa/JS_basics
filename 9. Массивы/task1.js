const peopleWaiting = [
    "Кристина",
    "Олег",
    "Кирилл",
    "Мария",
    "Светлана",
    "Артем",
    "Глеб"
  ];
  
  const giveParcel = () => {
    const clientName = peopleWaiting.shift();
    alert(
      `${clientName} получил(а) посылку. В очереди осталось ${peopleWaiting.length} человек.`
    );
  };
  
  const leaveQueueWithoutParcel = () => {
    const clientName = peopleWaiting.pop();
    alert(`${clientName} не получил(а) посылку и ушел(ла) из очереди`);
  };
  
  giveParcel();
  giveParcel();
  giveParcel();
  
  for (let i = peopleWaiting.length; i > 0; i -= 1) {
    leaveQueueWithoutParcel();
  }
  

/*const peopleWaiting = [
    'Кристина', 
    'Олег', 
    'Кирилл', 
    'Мария', 
    'Светлана', 
    'Артем', 
    'Глеб'
]

function giveParcel(peopleWaiting){
    while(peopleWaiting.length > 4){
        alert(`${peopleWaiting[0]} получил(а) посылку. В очереди осталось ${peopleWaiting.length-1} человек.`)
        peopleWaiting.shift()
    }
}

function leaveQueueWithoutParcel(peopleWaiting){
    for (let i = peopleWaiting.length-1 ; i >= 0; i--){
        alert(`${peopleWaiting[i]} не получил(а) посылку и ушел(ла) из очереди.`)
        peopleWaiting.pop()
    }
}

giveParcel(peopleWaiting)
leaveQueueWithoutParcel(peopleWaiting)
*/