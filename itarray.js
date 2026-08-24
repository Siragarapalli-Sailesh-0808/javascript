const numbers = [1,2,3];
numbers.forEach((number, index) => console.log(number, index));

const join = numbers.join(' ');
console.log(join);



const subjects = [
    {id : 1 , name : 'html'},
    {id : 2 , name : 'Css'},
    {id : 3 , name : 'js'}
];


subjects.sort(function(a,b) {

    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
});

console.log(subjects);


const test = [1, 2, 9];

const allPositive = test.every(function (value) {
    return value >= 0;
});

console.log(allPositive);

const arr = [1, 2, 3, -1];
const filtered = arr.filter(n => n >= 0);
console.log(filtered);


const items = filtered.map(num => 'a' + num);
console.log(items);

const obj = filtered.map(n => {
    const obj = { value: n};
    return obj;
});

console.log(obj);


