const age = 24; //number
console.log(Number(age), Boolean(age), String(age));

const name = 'Gulnaz'; //string
console.log(Number(name), Boolean(name), String(name));

const isVampire = false; //boolean
console.log(Number(isVampire), Boolean(isVampire), String(isVampire));

const myCatName = null; //null
console.log(Number(myCatName), Boolean(myCatName), String(myCatName));

let something; //undefined 
console.log(Number(something), Boolean(something), String(something));

const myFriendsCat = { //object
    name: "Peach",
    age: 2,
    owner: "Kate",
    isKind: false
}
console.log(Number(myFriendsCat), Boolean(myFriendsCat), String(myFriendsCat));

const bigInt = 90n; //bigint
console.log(Number(bigInt), Boolean(bigInt), String(bigInt));

// const winter = Symbol("snow"); //symbol
// console.log(Number(winter), Boolean(winter), String(winter));
