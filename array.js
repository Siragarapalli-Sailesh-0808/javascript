
let selectedColours = ['red', 'green', 'blue'];
selectedColours[3] = 1;
console.log(selectedColours);
console.log(selectedColours.length);


const numbers = [3,4];
numbers.unshift(1,2);
numbers.push(5,6,1);
numbers.pop();
numbers.shift();
console.log(numbers);
numbers.splice(1,2);
numbers.length = 0;
console.log(numbers);
console.log(numbers.indexOf(1));
console.log(numbers.lastIndexOf(1));
console.log(numbers.includes(6));



const courses = [
    {id : 1 , name : 'a'},
    {id : 2 , name : 'b'}
];

const course = courses.find(function(course) {
    return course.name === 'b';
});
console.log(course);


const subjects = [
    { name: 'html' },
    { name: 'css' },
    { name: 'javascript' },
    { name: 'node' }
];

const subject = subjects.find(subject => subject.name === 'css');

console.log(subject['name']);




