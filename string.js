const message = 'This is a test message';


console.log(message.replace('test', 'best'));
console.log(message.length);
console.log(message.includes('test'));
console.log(message.startsWith('This'));
console.log(message.endsWith('message'));


const another = '    This is a test message      ';
console.log(another.trim());


//template literals
let name = 'sailesh';
let nameMessage = `hi ${name}`
console.log(nameMessage);

console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(name.length);