function allowVisa(array){
    let today = new Date ()
    return people = array.filter(item => !item.criminalRecord && today.getTime() < fixPassportExpiration(item.passportExpiration).getTime())
  
    function fixPassportExpiration(day){ //вспомогательная функция, преобразовывает исходную дату дд.мм.гггг в гггг.мм.дд
      const arrayFromDate = day.split('.')
      return new Date (arrayFromDate[2], arrayFromDate[1], arrayFromDate[0])
       }
    }
  
  
  const peopleWithVisa = [
    
    {
        firstName: 'Stasia',
        lastName: 'Ward',
        criminalRecord: true,
        passportExpiration: '19.06.2040',
    },
    {
      firstName: 'Elliot',
      lastName: 'Baker',
      criminalRecord: false,
      passportExpiration: '04.06.2041',
    },
    {
        firstName: 'Leighann',
        lastName: 'Scott',
        criminalRecord: true,
        passportExpiration: '31.07.2039',
    },
    {
        firstName: 'Nick',
        lastName: 'Pop',
        criminalRecord: false,
        passportExpiration: '31.12.2010',
    },
  ];
  
  
   
  const result = allowVisa(peopleWithVisa);
  console.log('result', result);


  /*
  const peopleWithVisa = [
  {
    firstName: "Stasia",
    lastName: "Ward",
    criminalRecord: true,
    passportExpiration: "19.06.2040"
  },
  {
    firstName: "Elliot",
    lastName: "Baker",
    criminalRecord: false,
    passportExpiration: "04.06.2041"
  },
  {
    firstName: "Leighann",
    lastName: "Scott",
    criminalRecord: true,
    passportExpiration: "31.07.2039"
  },
  {
    firstName: "Nick",
    lastName: "Pop",
    criminalRecord: false,
    passportExpiration: "31.12.2010"
  }
];

const allowVisa = (people) => {
  return people.filter((person) => {
    const splittedExpirationDate = person.passportExpiration.split(".");
    const year = splittedExpirationDate.at(-1);
    const month = splittedExpirationDate[1];
    const date = splittedExpirationDate[0];
    const passportExpirationDate = new Date(year, month - 1, date);
    return (
      passportExpirationDate.getTime() > Date.now() && !person.criminalRecord
    );
  });
};

console.log(allowVisa(peopleWithVisa));

  */