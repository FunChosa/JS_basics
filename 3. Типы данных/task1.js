// В JavaScript всего 8 типов данных. Это number, string, boolean, null, undefined, object, bigint, symbol.

const age = 24; //number
console.log('age', age, typeof age);

const name = 'Gulnaz'; //string
console.log('name', name, typeof name);

const isVampire = false; //boolean
console.log('isVampire', isVampire, typeof isVampire);

const myCatName = null; //null
console.log('myCatName', myCatName, typeof myCatName);

let something; //undefined 
console.log('something', something, typeof something);

const myFriendsCat = { //object
    name: "Peach",
    age: 2,
    owner: "Kate",
    isKind: false
}
console.log('myFriendsCat', myFriendsCat, typeof myFriendsCat);

const bigInt = 90n; //bigint
console.log('bigInt', bigInt, typeof bigInt);

const winter = Symbol("snow"); //symbol
console.log('Symbol("snow")', Symbol("snow"), typeof Symbol("snow"));
