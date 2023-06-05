// // // alert('Hello World');
// // // alert('Hello'); alert('World');

// // // alert('hellio')
// // // alert('world')

// // // alert(3 +
// // //     1
// // //     + 2);
// // // 'use script'

// // // alert('Hello World');
// // // [1,2].forEach(alert);

// // let message;

// // message = 'hello World'; //store the string hello world in a variable named message
// // alert(message); // shows the variable content

// // let age = 40;
// // alert(age);

// // // let user = 'John', age1 = 40, message1 = 'hello';
// // const Pi = 3.142;

// // let admin;
// // let name;
// //  name = 'John';
// //  admin = name;
// //  alert(admin);


// // let age = '45';
// // alert(typeof age);
// // age = Number(age);
// // alert(age);
// // alert(typeof age)

// // let num = 12;
// // alert(typeof num);

// // num = String(num);
// // alert(num);


// //comparison operators

// // ===
// // ==
// // <
// // >
// // !=
// // !==

// // alert( 3 === '3');
// // alert(3 == '3');
// // alert(true == 1);
// // alert(false == 0);
// // alert(false == '');
// // alert( 'a' > 'A');
// // alert(12 < 12.0);


// // if(condition){
// //     statement
// // }else if(){
// //     statement
// // }else{

// // }

// let simbi = 'boy';

// if(simbi != 'boy'){
//     alert('1000 naira to simbi')
// } else if(simbi == 'girl'){
//     alert(true);
// }else if(simbi != 'girl'){
//     alert(true)
// }

// //write a code that pays salary to workers that work only either saturday 
// //or sunday and pay each 1000  naira to workers that work.
// //NOTE: use prompt to get the day of work for each workers.


// let workers = prompt('Enter working day');

// // if(workers == 'saturday'){
// //     alert('1000 for you saturday worker')
// // }else if (workers == 'sunday'){
// //     alert('1000 for you sunday worker')
// // } else{
// //     alert('you will not be paid')
// // }

//  //ternary operator
//  //syntax

//  // condition ? value : value

// //  let salary = (workers == 'saturday') ? '1000 for you' : 
// //  (workers == 'sunday')? '1000 for sunday workers': 'no pay';
// //  alert(salary)

// // if('0'){
// //     alert('Hello')
// // }

// //Using the if..else construct, write the code which asks: ‘What is the
// // “official” name of JavaScript?’
// //If the visitor enters “ECMAScript”, then output “Right!”, 
// //otherwise – output: “You don’t know? ECMAScript!”

// // let query = prompt('What is the “official” name of JavaScript?');
// // if(query == 'ECMAScript'){
// //     alert('Right')
// // }else{
// //     alert("You don’t know? ECMAScript!")
// // }


// //Using if..else, write the code which gets a number via prompt 
// //and then shows in alert:
// //1, if the value is greater than zero,
// //-1, if less than zero,
// //0, if equals zero.
// //In this task we assume that the input is always a number.

// // let num = prompt('Enter a number');
// // if(num > 0){
// //     alert(1)
// // }else if(num < 0){
// //     alert(-1)
// // }else{
// //     alert(0)
// // }

// //Rewrite this if using the conditional operator '?':

// // let result;

// // if (a + b < 4) {
// //   result = 'Below';
// // } else {
// //   result = 'Over';
// // }

// // let a = 3;
// // let b = 2;
// // let results = (a+b<4) ? 'Below' : 'Over';
// // alert(results)

// // || && ! ??

// // alert( true || true);
// // alert(false||true);
// // alert(true||false);
// // alert(false||false);

// // if(1||0){
// //     alert('holla')
// // }

// let hour = 112;
// let isWeekend = true;

// // if(hour < 10 || hour>18 || isWeekend){
// //     alert('the office is closed');
// // }

// let test = hour < 10 || hour>18 || isWeekend
// alert(test);

let upperlet = /[A-Z]/
let lowerlet = /[a-z]/
let num = /[0-9]/
let symbol = /[£$%&@#]/

let pword = prompt('Enter password')
let pwordlen = pword.length
 while(pwordlen < 9){
    if(pwordlen <= 6){
        alert('Weak password')
        pword = prompt('Enter password')
        pwordlen = pword.length
    }else if(pwordlen <= 8){
        alert('Medium password')
        if((upperlet.test(pword) === false) && (num.test(pword) === false)){
            alert('Missing uppercase or number')
            pword = prompt('Enter password')
            pwordlen = pword.length
        }
        pword = prompt('Enter Password')
        pwordlen = pword.length
    }
}

if(pwordlen >= 9){
    alert('Strong password')
    if((upperlet.test(pword) === false) && (num.test(pword)=== false) && 
    (symbol.test(pword)===false)){
        alert('Missing uppercase or number or symbol')
        pword = prompt('Enter Password')
        pwordlen = pword.length 
    }
}