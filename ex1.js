let a = "red";
let b = "blue";
let temp;

temp = a;
a = b;
b = temp;

console.log(a);
console.log(b);


function max(a,b){
if (a > b) {
    console.log(a);
} else {
    console.log(b);
}
}
max(5,6);


function isLandscape(width, height){
   if (width >= height){
    console.log("Landscape");
   }
   else{
    console.log("Portrait");
   }    
}
isLandscape(10,6);

function FizzBuzz(number){
    if (number % 3 === 0 && number % 5 === 0){
        console.log("FizzBuzz");
    }
    else if (number % 3 === 0){
        console.log("Fizz");
    }
    else if (number % 5 === 0){
        console.log("Buzz");
    }
    else{
        console.log(number);
    }
}
FizzBuzz(true);

function checkSpeed(speed){
    const speedLimit = 70;
    const kmPerPoint = 5;

    if (speed < speedLimit + kmPerPoint){
        console.log("Ok");
    }
    else {
        const points = Math.floor((speed - speedLimit) / kmPerPoint);
        if (points >= 12) console.log('License Suspended');
        else 
            console.log(points);
    }

}
checkSpeed(120);


function showNumbers(limit){
    for (let i = 0; i <= limit; i++){
        if (i % 2 === 0) console.log(i, 'Even');
        else console.log(i, 'odd');
    }
}
showNumbers(20);

function countTruthy(array){
    let count = 0;
    for (let value of array){
        if (value) 
        count++;
    }
    return count;
}

console.log(countTruthy([0, 1, null, undefined, NaN, false, '', 3, 4, 5, 6, 7, 8, 9, 10]));


function showProperties(obj){
    for (let key in obj){
        if (typeof obj[key] === 'string')
            console.log(key, obj[key]);
        else if (typeof obj[key] === 'number')
            console.log(key, obj[key]);
    }
}
showProperties({title : 'a', year : 2020, rating : 4.5,director: 'b'});


function sum(limit){
    let sum = 0;
    for (let i = 0; i <= limit; i++){
        if (i % 3 === 0 || i % 5 === 0){
            sum += i;
        }
    }
    return sum;
}
console.log(sum(10));


function calcualteGrade(marks){
    let sum = 0;
    for (let mark of marks){
        sum += mark;
    }
    let average = sum / marks.length;
    
    if (average >= 90){
        console.log("A");
    }
    else if (average >= 80){
        console.log("B");
    }
    else if (average >= 70){
        console.log("C");
    }
    else if (average >= 60){
        console.log("D");
    }
    else{
        console.log("F");
    }
}


console.log(calcualteGrade([100, 100, 100, 100, 100]));


function showStars(rows){
    for (let row = 1; row <= rows; row++){
        let stars = ''
    for (let i = 1; i <= row; i++){
        stars += '*';
        }
    console.log(stars);
    }
}
showStars(5);

function showPrime(limit){
    for (let number = 2; number <= limit; number++){
        if (isPrime(number)) console.log(number);
    }
}
function isPrime(number){
    for (let factor = 2; factor < number; factor++){
        if (number % factor === 0) return false;
    }
    return true;
}
console.log(showPrime(20));
console.log(isPrime(2));