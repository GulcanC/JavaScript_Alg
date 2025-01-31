

// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/

// 8 different data types

// undefined, null, boolean, string, symbol, bigint, number, object

// operators += and -=

let sum = 1;
sum = sum + 5;
console.log(sum); // 6


let tot = 2;
tot += 9;
console.log(tot); // 11

///////////////////////////////////////////////////////////////////

let sub = 5;
sub = sub - 5;
console.log(sub); // 0

let x = 2;
x -= 10;
console.log(x); // -8

const myStr = "FirstLine\n\t\SecondLine\nThirdLine";
console.log(myStr)

//🦚🦚🦚🦚🦚🦚 GOLF CODE 🦚🦚🦚🦚🦚🦚// 


const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"]

// number = par - strokes 
// (5,4) => 5-4 = 1
function golfScore(par, strokes) {

    // (6,1), (3,1) strokes is 1
    if (strokes === 1) {
        console.log(names[0]);
        return names[0];
    }

    // for example (4, 2) => strokes is 2, par is 4 so => 2<= (4-2)
    // (4,2), (5,3), (6,3)
    else if (strokes <= par - 2) {
        console.log(names[1]);
        return names[1];
    }

    // (3,2), (5,4), (9,8)
    else if (strokes === par - 1) {
        console.log(names[2]);
        return names[2];
    }
    // (3,3) (4,4) (6,6)
    else if (strokes === par) {
        console.log(names[3]);
        return names[3];
    }
    // (3,4), (4,5)
    else if (strokes === par + 1) {
        console.log(names[4]);
        return names[4];
    }
    else if (strokes === par + 2) {
        console.log(names[5]);
        return names[5];
    }
    else if (strokes >= par + 3) {
        console.log(names[5]);
        return names[6];;
    }

}

golfScore(7, 7);

//🦚🦚🦚🦚🦚🦚 SWITCH CASE 🦚🦚🦚🦚🦚🦚// 

function caseInSwitch(val) {
    let answer = "";

    switch (val) {

        case 1:
            console.log(answer = "alpha");
            break;

        case 2:
            console.log(answer = "beta");
            break;

        case 3:
            console.log(answer = "gamma");
            break;

        case 4:
            console.log(answer = "delta");
            break;
    }

}

caseInSwitch(4);

//🦚🦚🦚🦚🦚🦚 SWITCH CASE WITH DEFAULT OPTION 🦚🦚🦚🦚🦚🦚// 

function switchDefault(val) {
    let answer = "";

    switch (val) {

        case "a":
            console.log(answer = "apple");
            break;

        case "b":
            console.log(answer = "bird");
            break;

        case "c":
            console.log(answer = "cat");
            break;

        default:
            console.log(answer = "lion");
            break;


    }

} switchDefault("g");
switchDefault("c");

//🦚🦚🦚🦚🦚🦚 SWITCH CASE WITHOUT BREAK STATEMENT 🦚🦚🦚🦚🦚🦚// 

// If the break statement is omitted from a switch statement's case, the following case statement(s) are executed until a break is encountered. 
// If you have multiple inputs with the same output, you can represent them in a switch statement

function switchBreak(val) {
    let answer = "";
    switch (val) {
        case 1:
        case 2:
        case 3:
            console.log(answer = 'Low');
            break;

        case 4:
        case 5:
        case 6:
            console.log(answer = 'Mid');
            break;

        case 7:
        case 8:
        case 9:
            console.log(answer = 'High');
            break;



    }

}

switchBreak(5);
switchBreak(9);
switchBreak(8);

//🦚🦚🦚🦚🦚🦚 COUNTING CARDS 🦚🦚🦚🦚🦚🦚// 

let count = 0;
function cc(card) {
    switch (card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count--;
            break;

    }

    if (count > 0) {
        console.log(count + " Bet");
    } else {
        console.log(count + " Hold");
    }

}

cc(2); cc(3); cc(7); cc('K'); cc('A');

//🦚🦚🦚🦚🦚🦚 TESTING OBJECTS FOR PROPERTIES 🦚🦚🦚🦚🦚🦚// 

// FIRST EXAMPLE
// property means property = key + value
// here the property is top and bottom
// the first one has its own property 'top', the second one no, and the third one has also its own property 'bottom'
function checkForProperty(object, property) {
    console.log(object.hasOwnProperty(property));
    return object.hasOwnProperty(property);

}

checkForProperty({ top: 'hat', bottom: 'pants' }, 'top');
checkForProperty({ top: 'hat', bottom: 'pants' }, 'middle');
checkForProperty({ top: 'hat', bottom: 'pants' }, 'bottom');

// SECOND EXAMPLE

function checkObj(obj, property) {
    if (obj.hasOwnProperty(property)) {
        return obj[property];
    } else {
        return 'Property is not found!';
    }
}

console.log(checkObj({ color: 'yellow', car: 'BMW', age: 43 }, 'age'));
console.log(checkObj({ color: 'purple', car: 'Honda', age: 40 }, 'cars'));
console.log(checkObj({ color: 'red', car: 'Mercedes', age: 53 }, 'car'));

//🦚🦚🦚🦚🦚🦚 RECORD COLLECTION 🦚🦚🦚🦚🦚🦚// 

const recordCollection = {
    2548: {
        albumTitle: 'Slippery When Wet',
        artist: 'Bon Jovi',
        tracks: ['Let It Rock', 'You Give Love a Bad Name']

    },

    2468: {
        albumTitle: '1999',
        artist: 'Prince',
        tracks: ['1999', 'Litte Red Corvette']

    },

    1245: {
        artist: 'Robert Palmer',
        tracks: []
    },

    5439: {
        albumTitle: 'ABBA Gold'

    }
}

function updateRecords(records, id, prop, value) {
    // if value is an empty string, delete the given prop property from album
    if (value === "") {
        delete records[id][prop];
    }
    // if prop is not tracks and value is not an empty string, assign the value to that album's prop
    else if (prop !== 'tracks' && value !== "") {
        records[id][prop] = value;
    }
    else if (prop === 'tracks' && value !== "") {
        if (records[id].hasOwnProperty('tracks') === 0) {
            records[id][prop] = [];
        }
    }

    else if (prop === 'tracks' && value !== "") {
        records[id][prop].push(value);
    }


    else if (prop === 'albumeTitle' && value !== "") {
        records[id][prop].push(value);
    }
    return records;
}

console.log(updateRecords(recordCollection, 5439, 'artist', 'Gulcan'))
console.log(updateRecords(recordCollection, 1245, 'albumTitle', 'Rose Can'))

//🦚🦚🦚🦚🦚🦚 ITERATE WITH JAVASCRIPT WHILE LOOPS 🦚🦚🦚🦚🦚🦚// 

//🦚🦚🦚 obtain this array => [ 0, 1, 2, 3, 4, 5 ]

const ourArray = [];
let i = 0;

while (i <= 5) {
    ourArray.push(i);
    i++;
}
console.log(ourArray);

//🦚🦚🦚  obtain this array => [ 5, 4, 3, 2, 1, 0 ]

const myArr = [];
let j = 5;

while (j >= 0) {
    myArr.push(j);
    j--;
}

console.log(myArr);


//🦚🦚🦚  obtain this array => [ 5, 4, 3, 2, 1, 0 ] second way

// first step => obtain this array [0, 1, 2, 3, 4, 5]

const arr = [];

let g = 0;

while (g <= 5) {
    arr.push(g);
    g++;
}
console.log("result of the first step = " + arr);

// second step => use sort method to obtain => [5,4,3,2,1]

arr.sort(function (a, b) {
    return b - a;
});
console.log("result of the second step = " + arr);

//🦚🦚🦚🦚🦚🦚 FOR LOOPS 🦚🦚🦚🦚🦚🦚// 

// 🦚 obtain this array => [2,3,4,5]
// o=o+2 => o += 2
const ourArr = [];
for (let o = 2; o <= 5; (o = o + 1)) {
    ourArr.push(o);
}
console.log(ourArr);

// 🦚 obtain this array => odd numbers = nombres pairs => [0,2,4,6,8]
// k=k+2 => k += 2
const pairs = [];

for (let k = 0; k <= 8; k = k + 2) {
    pairs.push(k);
}
console.log(pairs);

// 🦚 obtain this array => even numbers = nombres impairs => [1,3,5,7,9]

const Arr = [];
for (let b = 1; b <= 9; b += 2) {
    Arr.push(b);
}
console.log(Arr);


// 🦚 obtain this array => odd numbers = nombres pairs => [10,8,6,4,2]

const table = [];
for (let u = 10; u >= 2; u -= 2) {
    table.push(u);
}
console.log(table);

// 🦚 obtain this array => even numbers = nombres impairs => [9,7,5,3,1]

const tableX = [];
for (let v = 9; v >= 1; v = v - 2) {
    tableX.push(v);
}
console.log(tableX);

// 🦚 Output each element of the array to the console

const monTable = [10, 9, 8, 7, 6];

for (let i = 0; i < monTable.length; i++) {
    console.log(monTable[i]);
}

// 🦚 Add the value of each element, it means calculate all elements => [2, 3, 4, 5, 6]

const tablo = [2, 3, 4, 5, 6];

var total = 0;

for (let i = 0; i < tablo.length; i++) {
    total += tablo[i];
    // total = total + tablo[i];
}

console.log(total, tablo.length);

// 🦚 We have a multi-dimensional array, we have to multiply all elemnt in these arrays

function multiplyAll() {

    const arr4 = [[2, 6], [7, 8], [9, 1]];
    var product = 1;

    for (let i = 0; i < arr4.length; i++) {
        for (let j = 0; j < arr4[i].length; j++) {
        }
    }
    console.log(product); // 6048
}

multiplyAll();

// 🦚 Second example => multiply all elements in the subarray.

function multiply() {

    var arr5 = [[1, 2], [3, 5], [5, 6]];
    var product1 = 1;

    for (let i = 0; i < arr5.length; i++) {

        for (let j = 0; j < arr5[i].length; j++) {
            product1 *= arr5[i][j];
        }
    }
    console.log(product1);
}

multiply(); // 900

// 🦚🦚🦚🦚🦚 DO WHILE LOOP 🦚🦚🦚🦚🦚

// do it if it is true


// 🦚🦚🦚🦚🦚 obtain this array => [0,1,2,3,4,5,6]

const array6 = [];
let y = 0;

do {
    array6.push(y);
    y++;
} while (y < 7);
console.log(array6);

// 🦚🦚🦚🦚🦚 obtain this array => [6,5,4,3,2,1]

const array7 = [];
let z = 6;

do {
    array7.push(z);
    z--;
} while (z >= 1);
console.log(array7)

// 🦚🦚🦚🦚🦚 obtain this array => [6,4,2,0]

const array8 = [];

let c = 6;

do {
    array8.push(c);
    c = c - 2;
} while (c >= 0)
console.log(array8)

// 🦚🦚🦚🦚🦚 obtain this array => [9,7,5,3]

const array9 = [];

let b = 9;

do {

    array9.push(b);
    b -= 2;
} while (b > 2)
console.log(array9);

// 🦚🦚🦚🦚🦚 PROFILE LOOP

const contacts = [
    {
        firstName: 'Akira',
        lastName: 'Laine',
        number: '0543236543',
        likes: ["Books", "Cooking", 'Biking']
    },

    {
        firstName: 'Chilli',
        lastName: 'Ters',
        number: '0543564543',
        likes: ["Swimming", "Painting", 'Musics']
    },

    {
        firstName: 'Queen',
        lastName: 'Zert',
        number: '0342236543',
        likes: ["Radio", "Writing", 'Cars']
    },

    {
        firstName: 'szent',
        lastName: 'zadez',
        number: '0543996543',
        likes: ["Nature", "Mountain", 'Singing']
    },
];

// a lookUpProfile function that takes name and a peoperty prop as arguments

function lookUpProfile(name, prop) {
    for (let i = 0; i < contacts.length; i++) {
        // the function should check if name is an actual contact's firstName 
        if (contacts[i].firstName === name) {
            // and the given property prop is a property of that contact 
            if (prop in contacts[i]) {
                // if both are true return the "value" of that property
                return contacts[i][prop];
            }
            // if prop does not correspond to any valid properties of a contact found to match name then return the string 'No such property'
            else {
                return 'No such property';
            }
        }
    }
    // if prop does not correspond to any contacts then return the string 'No such contact'

    return 'No such contact';
}
console.log(lookUpProfile("Queen", "likes"));

// 🦚🦚🦚🦚🦚 Math.random() => generates random decimal numbers between 0 and 1, (0 is inclusive but 1 is exclusive)
// So it can be return 0, our aim writing a function to return a random decimal number except 0

function decimalNum() {
    if (Math.random() === 0) {
        return 'error';
    } else {
        return Math.random();
    }
} console.log(decimalNum());

// 🦚🦚🦚🦚🦚 Math.random() => create a function called randomRange that takes a range myMin and myMax and returns a random whole number that's greater than or equal to myMin and less than or equal to myMax
// for example myMin=1, myMax=4 (8-2+1)= 7 =>random number*7 = 5,774 => 5,774+1=6,774 => Math.floor(6,774) => 7

function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1) + myMin)
}

console.log(randomRange(2, 8))

// 🦚🦚🦚🦚🦚 parseInt() function parses a string and returns an integer.

console.log(parseInt('108'));
console.log(parseInt('008'));
console.log(parseInt('018'));
console.log(parseInt('AQS')); // if the first character in the string can not be converted into anumber, then it returns NaN

// 🦚🦚🦚🦚🦚 parseInt() with radix
// radix is the base of a system of numeration
// binary has two available (0,1)
// decimal has ten available (0,1,2,3,4,5,6,7,8,9)
// hexadecimal has sixteen available (0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f)

function convertToInteger(str) {
    return parseInt(str, 2);
}
console.log(convertToInteger("10011"));

// 🦚🦚🦚🦚🦚 CONDITIONAL OPERATOR - MULTIPLE CONDITIONAL OPERATOR
// if the number is negative return 'negative', if the number is 0 return 'zero', if the number is positive return 'positive'


function multCond(num) {
    return (num === 0) ? 'zero' : (num > 0) ? 'positive' : 'negative';
}

console.log(multCond(0));
console.log(multCond(10));
console.log(multCond(-10));


// 🦚🦚🦚🦚🦚 Use Recursion to Create a CountUp

// obtain this array => [1,2,3,4,5] by using recursion
// define a function called countup with one parameter, n
function countup(n) {
    // if the function is called with a number less than 1, the function shoul return an empty array.
    if (n < 1) {
        return [];
    }
    // else the function should use recursion to return an array containing the integers 1 through n based on the parameter n.
    else {
        const countArray = countup(n - 1);
        countArray.push(n);
        return countArray;

    }

}

console.log(countup(-1));
console.log(countup(10));

// 🦚🦚🦚🦚🦚 Use Recursion to Create a CountDown
// obtain this array by using the recursion => [5,4,3,2,1]
// create a function called countdown with one parameter, n
function countdown(n) {
    // if the function is called with a number less than 1, the function should return an empty array
    if (n < 1) {
        return [];
    }
    // else the function should use recursion to return an array containing the integers n through 1 based on the n parameter.
    else {
        const arrayQ = countdown(n - 1);
        arrayQ.unshift(n); // use unshift method to add elements to the front of the array
        return arrayQ;
    }

}
console.log(countdown(0));
console.log(countdown(6));

// 🦚🦚🦚🦚🦚 Use Recursion to Create a Range of numbers
// obtain this array [2, 3, 4, 5, 6]

// We have defined a function named rangeOfNumbers with two parameters. The function should return an array of inetegers which begins
// with a number represented by the starNum parameter and ends with a number represented by the endNum parameter.
// The starting number will always be lessthan or equal to the ending number. 
// We have to use recursion by calling itself, not loops.

function rangeNum(startNum, endNum) {
    if (endNum < startNum) {
        return [];

    }
    else if (startNum <= endNum) {

        const arrayG = rangeNum(startNum, endNum - 1);
        arrayG.push(endNum);
        return arrayG;
    }
}

console.log(rangeNum(2, 6));

//🦚🦚🦚🦚🦚🦚 REPEAT METHOD 🦚🦚🦚🦚🦚🦚// 

document.write("REPEAT METHOD" + `<br>` + `<br>`);

document.write('👩‍🚒Gulcan COSKUN👩‍🚒'.repeat('3') + `<br>` + `<br>`)

document.write('Sedat COSKUN👩‍🚒'.repeat('3') + `<br>` + `<br>`)


//🦚🦚🦚🦚🦚🦚 CONCATINATION METHOD 🦚🦚🦚🦚🦚🦚// 

document.write("CONCATINATION METHOD" + `<br>` + `<br>`);

document.write('👩‍🚒Gulcan COSKUN👩‍🚒'.concat(3) + `<br>` + `<br>`)
document.write('7'.concat(3) + `<br>` + `<br>`)
document.write('Gul'.concat('can') + `<br>`)

//🦚🦚🦚🦚🦚🦚 PARSEINT METHOD 🦚🦚🦚🦚🦚🦚// 

console.log((parseInt('664')))

//🦚🦚🦚🦚🦚🦚 CONERT NUMBERS TO ROMAN NUMBERS 🦚🦚🦚🦚🦚🦚// 

//🦚🦚 MATH FLOOR METHOD 🦚🦚// 

document.write('🦚🦚Math fllor🦚🦚' + `<br>` + `<br>`)
document.write('The result of the 50/18 is  2.7777 but the result of the floor is  ' + Math.floor(50 / 18) + ' asagi tamamliyor yukariya degil' + `<br>` + `<br>`); //
document.write('The result of the 5/1000 is  0.005 but the result of the floor is  ' + Math.floor(5 / 1000) + ' asagi tamamliyor yukariya degil' + `<br>` + `<br>`); //
console.log(5 / 1000)

//🦚🦚 REPEAT METHOD 🦚🦚// 

document.write('"abc".repeat(1) = ' + ("abc".repeat(1)) + `<br>` + `<br>`)
document.write('"abc".repeat(0) = ' + ("abc".repeat(0)) + `<br>` + `<br>`)
document.write('"abc".repeat(3) = ' + ("abc".repeat(3)) + `<br>` + `<br>`)

function stringToRoman(num) {
    let roman = {
        M: 1000, CM: 900, D: 500,
        CD: 400, C: 100, XC: 90,
        L: 50, XL: 40, X: 10,
        IX: 9, V: 5, IV: 4, I: 1
    };
    let str = '';

    for (let i of Object.keys(roman)) {
        let q = Math.floor(num / roman[i]);
        console.log(num) // 5
        console.log(roman[i]) // 5
        console.log(i) // V
        console.log(num / roman[i]) // 1
        console.log(q); //  1
        num -= q * roman[i]; // num = num - (q*roman[i]) => (5-(1*5)) => num = 0
        str += i.repeat(q) // str = str+ i.repeat(1) => 
        console.log(i); // V
        console.log(q * roman[i]) // 5
        console.log(i.repeat(q)) // V
        console.log(num)
        console.log(str) // 
    }


    return str;
}

console.log(stringToRoman(123));

// 🦚🦚 SPLIT METHOD 🦚🦚

const myString = "Bonjour, je m'appelle Gulcan COSKUN"
const splitLetter = myString.split("")
console.log(splitLetter);

const myString1 = "Bonjour, je m'appelle Gulcan COSKUN"
const splitLetter1 = myString1.split(" ")
console.log(splitLetter1);

// 🦚🦚 REPEAT METHOD 🦚🦚

console.log(("Gulcan COSKUN ").repeat(4))

// 🦚🦚 CONCAT METHOD 🦚🦚
console.log(("Gulcan COSKUN").concat(' Sedat'))

// 🦚🦚 REVERSED STRING 🦚🦚 

// Given a string, return a new string with the reversed order of characters

function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
console.log(reverseString('hello'));


// 🦚🦚  STRING IS POLINDROM 🦚🦚 

// Palindrom is a word, phrase, number or other sequence of characters which reads the same backward or forward.

function palinndrom(string3) {
    for (let i = 0; i < string3.length / 2; i++) {
        if (string3[i] === string3[string3.length - 1 - i]) {

            return 'It is palindrome!'
        }
        else { return 'it is not palindrome!' }
    }
}

console.log(palinndrom('coloce'))

// 🦚🦚  FACTORIALIZE A NUMBER 🦚🦚

function factorialize(num) {
    if (num === 0 || num === 1) {
        console.log('the result is 1');
        return 1;
    } else {
        for (let i = num - 1; i > 0; i--) {
            num = num * i;
        }
        return num;
    }
}
console.log(factorialize(6));

// 🦚🦚  REPEAT A STRING USING  🦚🦚

function repeatStrTimes(string, times) {
    if (times < 0) {
        return "";
    } if (times === 1) { return string; }
    else {
        return string + repeatStrTimes(string, times - 1);
    }
}
console.log(repeatStrTimes("Gul", 5));

// 🦚🦚 CONFIRM THE ENDING OF A STRING 🦚🦚

// 🦚🦚 METHOD SUBSTRING substr()

console.log(('Gulcan').substr(2, 2)); // lc => soldan iki tane sayiyor ve iki taneyi return yapiyor
console.log(('Gulcan').substr(3, 2)); // lc => soldan 3 tane sayiyor ve iki taneyi return yapiyor
console.log(('Gulcan').substr(2)); // lc => soldan iki tane sayiyor ve geri kalani return yapiyor

function confirmEnd(string, target) {
    if (string.substr(-target.length) === target) {
        return true;

    } else {
        return false;
    }
}

console.log(confirmEnd('Gul', 'l'));

// 🦚🦚 FIND THE LONGEST WORD IN THE STRING

function findLongest(str) {

    let splitString = str.split(' ');
    console.log(splitString);
    longestWord = ' ';

    for (let i = 0; i < splitString.length; i++) {
        if (splitString[i].length > longestWord.length) {
            longestWord = splitString[i];
        }
    }
    console.log('The longest word = ' + longestWord + '. The longest length = ' + longestWord.length)
    return longestWord;

}

console.log(findLongest("Ben çok para kazanacagim ve çocuklarimla, yegenlerimle, annem ve kardesimle dünyayi gezecegim!"));


// 🦚🦚 FIND THE SMALLEST WORD IN THE STRING

function smallestWord() {


    let stringSplit = stringX.split(' ');
    let smallestWord = stringSplit[0];
    console.log(stringSplit);
    console.log(stringSplit.length)
    console.log(smallestWord.length)
    for (let i = 0; i < stringSplit.length; i++) {

        if (stringSplit[i].length < smallestWord.length) {
            smallestWord = stringSplit[i];
        }
    }
    console.log(smallestWord)
    return smallestWord;
}

let stringX = 'Ben G cok para kazanacagim, karavan alacagim, yol bisikleti alacagim, ve dunyayai gezecegim'

console.log(smallestWord(stringX));


// 🦚🦚 TITLE CASE A SENTENCE WITH FOR LOOP

// 🦚🦚 split mathod 

document.write('🦚 SPLIT METHOD' + '</br>' + '</br>');

document.write('split("Ben çok para kazanacagim") => ' + ("Ben çok para kazanacagim").split(" ") + '</br>' + '</br>');

// 🦚🦚 CHARAT mathod 

document.write('🦚 CHARAT METHOD =' + ' returns the character at the specified index in a string' + '</br>' + '</br>');

document.write('("CokPara").charAt(0)  => ' + ("CokPara").charAt(0) + '</br>' + '</br>');

// 🦚🦚 SLICE mathod 

document.write('🦚 Slice method = It extrcats  a section of the string and returns it as a new string' + '</br>' + '</br>');

document.write("('CokParaKazanacagim').slice(7) = " + ('CokParaKazanacagim').slice(7) + '</br>' + '</br>'); // we are starting from left and from 0, then when we come to 7, we will choose all letters by starting from 7. 
document.write("('CokParaKazanacagim').slice(-7) = " + ('CokParaKazanacagim').slice(-7) + '</br>' + '</br>'); // here we start from right and we will choose from between 0 and 7 from right. 
document.write("('CokParaKazanacagim').slice(4, 7) = " + ('CokParaKazanacagim').slice(4, 7) + '</br>' + '</br>'); // we come to 4 and 7, we choose between 4 and 7


function titleCase(string) {

    // first lowercase the string, then split the string into an array of strings.
    string = string.toLowerCase().split(' ');

    for (var i = 0; i < string.length; i++) {

        string[i] = string[i].charAt(0).toUpperCase() + string[i].slice(1);

    }
    return string.join(' ');
}

console.log(titleCase('Ben çok para kazanacagim!'));


// 🦚🦚 FIND LARGEST NUMBER IN THE ARRAY

function findLargest() {
    let largestNum = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] > largestNum) {
            largestNum = array[i];
        }
    }
    return largestNum
}
let array = [5, 7, 90, 3, 65, 123, 0, 234, -543];
console.log(findLargest(array));


// 🦚🦚 FIND SMALLEST NUMBER IN THE ARRAY

function findSmallest() {
    let smallestNum = 0;

    for (let i = 0; i < array1.length; i++) {
        if (array1[i] < smallestNum) {
            smallestNum = array1[i];
        }

    }
    return smallestNum;
}
let array1 = [4, -4, 90, 0, -78, 98, 1, 7, 6, -765, 87]
console.log(findSmallest(array1))