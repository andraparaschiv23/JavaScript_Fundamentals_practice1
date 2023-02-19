/* VALUES AND VARIABLES

//a variable is a box in which we store a value;

let js = 'amazing'; //variable js and assign value amazing
//if (js == 'amazing') alert('JavaScript is FUN');
//console.log(40 + 8 + 23 - 10);

//console.log('Jonas');

let firstName = 'Matilda'; //store this value inside this variable
let first = 'janas';
//let first_name_person; it's correct
//console.log(firstName); //js replace the original value assigned to variable
//console.log(first);

//not possible: let jonas%matilda = 'JM'; let 3years= 3;

//let new = 27;
//let name = "Jonas" -> not good to use only name, use instead
//let Person = 'janas'; not use this; use lower case for the start
let $function = 27;
let PI = 3.1415;

let myFirstJob = 'Programmer';
let myCurrentJob = 'Teacher';
let job1 = 'programmer';
let job2 = 'teacher';

let country = 'Romania';
let continent = 'Europe';
let population = '19.186.201';
// console.log(country);
// console.log(continent);
// console.log(population);

*/

/* DATA TYPES
let javascriptIsFun = true;
console.log(typeof javascriptIsFun); //return true
console.log(typeof true); //return boolean
console.log(javascriptIsFun); //return true
console.log(typeof 'Jonas'); //return string
javascriptIsFun = 'YES!';
//first time we use let for the variable; after if we decide to change the type of a value;
//put a book in the box, leter take the book out of the box and put a phone in hte box;
// here we changed from true to YES;
console.log(typeof javascriptIsFun);//return string

let year; //the value of the variable is undefined and the type is also undefined;
console.log(year);
console.log(typeof year);
year = 1991;
console.log(typeof year);

console.log(typeof null); //return object, but is not correct, was acceptable

*/

/* LET, CONST, VAR

let age = 30;
age = 31; //muted the variable let is used when we want to muted a variable

//const when a variable will not be changed in the future
const birthYear = 1991; // a imutable variable; we cannot create empty const veriable, like const job;
//birthYear = 1999;
//const job; -> is not correct

//var pretty much the same as let; it's also muted
//many differences: let is blocked scope and var is function scoped
var job = 'programmer';
job = 'teacher';

lastName = 'Schmedtmann'; //DONT DO IT! doesn't create a variable, js creates instead a property on the global object
console.log(lastName);

*/


/*Basic OPERATORS
//many categories of mathematic operators
//Math operators:
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2020;
console.log(ageJonas, ageSarah);
console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
//2**3 means 2 to the power of 3 = 2*2*2

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);

//Assigment operators
let x = 10 + 5; // 10+5 is done first, so the result is assigned to x
x += 10; //x = x + 10 = 25
console.log(x);
x *= 4; //x = x * 4 = 100
x++; //x = x + 1 = 101;
x--; // x= x-1 = 100;
console.log(x);
*/

/*
//Comparison operators -> used to obtain boolean
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2020;

//console.log(ageJonas > ageSarah); // >, <. >=, <=
//console.log(ageSarah >= 18);

//const isFullAge = ageSarah >= 18;
console.log(now - 1991 > now - 2018);

let x, y; //value of undefined
x = y = 25 - 10 - 5;
console.log(x, y);
const avarageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, avarageAge);

*/

/*
// Exercise  - Code Challange #1

let massMark = 78;
let massJohn = 92;
let heightMark = 1.69;
let heightJohn = 1.95;
const BmiMark = massMark / heightMark ** 2;
console.log(BmiMark);
const BmiJohn = massJohn / heightJohn ** 2;
console.log(BmiJohn);

const BmiMarkV2 = massMark / (heightMark * heightMark);
console.log(BmiMarkV2);
const BmiJognV2 = massJohn / (heightJohn * heightJohn);
console.log(BmiJognV2);

const markHigherBMI = BmiMark > BmiJohn;
console.log(markHigherBMI);
*/

/* String and templates

const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(jonas);

const jonasNew = `I am ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string..`);
console.log('String with \n multiple \n\ lines');
console.log(`String with
multiple
lines`);
*/

/* IF ELSE CONDITION
const age = 15;
const isOldEnough = age >= 18;
// if condition inside () is true, then what is in {} will be executed, otherwise no; but with else, will enter on else
if (isOldEnough) {
    console.log('Sarah can start driving license ');
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years`);
}

const birthYear = 2001;
let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);
*/

/* Exercise Challange #2

let massMark = 78;
let massJohn = 92;
let heightMark = 1.69;
let heightJohn = 1.95;
const BmiMark = massMark / heightMark ** 2;
console.log(BmiMark);
const BmiJohn = massJohn / heightJohn ** 2;
console.log(BmiJohn);

const BmiMarkV2 = massMark / (heightMark * heightMark);
console.log(BmiMarkV2);
const BmiJognV2 = massJohn / (heightJohn * heightJohn);
console.log(BmiJognV2);

const markHigherBMI = BmiMark > BmiJohn;
//console.log(markHigherBMI);

if (BmiMark > BmiJohn) {
    console.log(`Mark's BMI (${BmiMark}) is higher then John's (${BmiJohn})!`);
} else {
    console.log(`John's BMI (${BmiJohn}) is higher then Mark's (${BmiMark})!`);
}

*/

//Conversion and Coercion
//type conversion (When manually convert from a type to another) and type coercion (implicity)

/*
//Type Conversion (explicity convert frm a type to another)
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas')); //returns NaN (not a number); fails to produce a number, NaN means a invalid nbr
console.log(typeof NaN);

console.log(String(23), 23);
//boleans are converted in a special way


//Type Coercion (JS convert one value to match the other value)
console.log('I am ' + 23 + ' years old');
console.log('23' + '10' - 3); //js converts string to numbers; minus operator converts the others
console.log('23' * '2'); //converts to numbers

let n = '1' + 1;  //11
n = n - 1; //minus converts to a number
console.log(n);//10

//+ converts the other to a string
'10' - '4' - '3' - 2 + '5' //"15"

*/

/*

//Thruty and Falsy values
// 5 Falsy values in JS: 0, '', undefined,null, NaN (false itself it's already false) -> all of this will be converted to false
// Thruty values: any number that is not 0, any string that is not empty, that is true
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean('')); //bolean is always type coercion in practice in 2 scenario:
//when using logical operators or on if/else statements; ex:

const money = 0;
if (money) { //if not a boolean, js will try to convert to boolean value
    console.log("Don't spend it all;) ");
} else {
    console.log("You shoul get a job!");
}

let height;
if (height) {
    console.log('YAY! Height is defined');
} else {
    console.log('Height is undefined');
}
*/

/*

//Equality opertor == and ===
const age = '18';
if (age === 18) console.log('You just became an adult (strict)'); //strict equality operator; don'tt perform type coercion
// '18' == 18 return true ; string 18 is converted to number, and 18= 18
// '18' ===18 return false
//avoid to use == when compering values; insted, use === which is a strict 

if (age == 18) console.log('You just became an adult (loose)');

const favourite = Number(prompt("What's your favour23ite number?"));
console.log(typeof favourite);

if (favourite === 23) { //22 === 23 -> FALSE 
    console.log('Cool! 23 is an amazing number!');
} else if (favourite === 7) {
    console.log('7 is also a cool number')
} else {
    console.log('Number is not 23 or 7')
}


if (favourite !== 23) console.log('WHy not 23?');

*/

/* Logical operators 

const hasDriversLicense = true; //A
const hasGoodVision = true; //B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);
const shouldDrive = hasDriversLicense && hasGoodVision;
// if (shouldDrive) {
//     console.log('Sarah is able to drive')
// } else {
//     console.log('Someone else should drive...')
// }

const isTired = false; //C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive')
} else {
    console.log('Someone else should drive...')
}


*/

/*
//Coding chalange
// const dolphinsScore1 = 96;
// const dolphinsScore2 = 108;
// const dolphinsScore3 = 89;
// const koalasScore1 = 88;
// const koalasScore2 = 91;
// const koalasScore3 = 110;
// let avergeDolphines = 0;
// let averegeKoalas = 0;

// avergeDolphines = (dolphinsScore1 + dolphinsScore2 + dolphinsScore3) / 3
// console.log('Dolphins team:' + avergeDolphines);
// averegeKoalas = (koalasScore1 + koalasScore2 + koalasScore3) / 3
// console.log('Koalas team: ' + averegeKoalas);

// if (avergeDolphines > averegeKoalas) {
//     console.log('The winner team is Dolphins team');
// } else if (averegeKoalas === avergeDolphines) {
//     console.log('The winner team is Koalas team');
// } else if (averegeKoalas > avergeDolphines) {
//     console.log('The winner teams is Koalas team');
// }

const dolphinsScore1 = 97;
const dolphinsScore2 = 112;
const dolphinsScore3 = 80;
const koalasScore1 = 1090;
const koalasScore2 = 95;
const koalasScore3 = 50;

// const dolphinsScore1 = 96;
// const dolphinsScore2 = 108;
// const dolphinsScore3 = 89;
// const koalasScore1 = 88;
// const koalasScore2 = 91;
// const koalasScore3 = 110;
let avergeDolphines = 0;
let averegeKoalas = 0;

avergeDolphines = (dolphinsScore1 + dolphinsScore2 + dolphinsScore3) / 3
console.log('Dolphins team:' + avergeDolphines);
averegeKoalas = (koalasScore1 + koalasScore2 + koalasScore3) / 3
console.log('Koalas team: ' + averegeKoalas);


if (avergeDolphines > averegeKoalas && avergeDolphines >= 100) {
    console.log('The winner team is Dolphins team');
} else if (averegeKoalas === avergeDolphines && averegeKoalas >= 90 && avergeDolphines >= 100) {
    console.log('There is a draw!');
} else if (averegeKoalas > avergeDolphines && averegeKoalas >= 100) {
    console.log('The winner teams is Koalas team');
} else {
    console.log('No one wins the thropy')
}
*/

/* SWITCH statement
const day = 'saturday';

switch (day) {
    case 'monday': //day ==='monday'
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.group('Record videos');
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend :D');
        break;
    default:
        console.log('Not a valid day!')
}


if (day === 'monday') {
    console.log('Plan course structure');
    console.log('Go to coding meetup');
} else if (day === 'tuesday') {
    console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
    console.log('Write code examples');
} else if (day === 'friday') {
    console.group('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
    console.log('Enjoy the weekend :D');
} else {
    console.log('Not a valid day!')
}
*/

/*
//Statements and Expressions
//Expression = a pice of code that produce a value ( 3+ 4 will produce a value and this is an expression; 1991 is still an expresiion because produces a value; true && failse && !false also an expression)

//Statement = a big piece of code; it doesn't produce a value
if (23 > 10) {
    const str = '23 is bigger'; //here the string itself '' is an expression
}
const me = 'Jonas';
console.log(`I'm ${2037 - 1991} years old ${me}`);

*/

/*
//Conditional operator (terary)-> all in one line

const age = 19;
age >= 18 ? console.log('I like to drink wine ') :
    console.log('I like to drink water');

const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);

let drink2;
if (age >= 18) {
    drink2 = 'wine';
} else {
    drink2 = 'water';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);

*/

//Coding challange #4

let billValue = 430;
let tip = billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.2;
// if (billValue >= 50 && billValue <= 300) {
//     tip = 15;
// } else {
//     tip = 20;
// }
// console.log(tip);

//billValue >= 50 && billValue <= 300 ? console.log(tip = 15) : console.log(tip = 20);

console.log(`The bill was ${billValue}, the tip was ${tip}, and the total value ${billValue + tip}`);

//JS Releases and versions
