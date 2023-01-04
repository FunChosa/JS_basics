function findTicket(minNumber, maxNumber){
    for (let i = maxNumber; i > minNumber; i--) {
        if(i%3 == 0 && i%7 == 0 && i%2!=0 && i%5!=0){
            console.log(`Номер выигрышного билета: ${i}`);
            break;
        }
    }
}
findTicket(1016, 1937)


