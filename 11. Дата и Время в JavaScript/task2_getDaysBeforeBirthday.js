function getDaysBeforeBirthday(nextBirthdayDate){
    let difference = nextBirthdayDate.getTime() - Date.now() 
    return convertMsToDays(difference)
}

function convertMsToDays(day){
    return Math.round(day / 1000 / 60 / 60 / 24)
}

const myBirthday = new Date('October 24, 2023');
console.log(getDaysBeforeBirthday(myBirthday))