// hoisting

walk();
function walk () {
    console.log("walk");
}


// buit in arguments function

function sum(){
    let total = 0;
    for (let value of arguments)
        total += value;
    return total;
}

console.log(sum(1,10,4,10,5));

// Rest operator

function cart (discount,...prices) {
  const total = prices.reduce((a,b) => {return a + b});
  return total * (1 - discount);
}

console.log(cart(0.1,20,30,40)); 

// getter and setter
// Try and Catch
const person = {
    firstName : 'Sailesh',
    lastName : 'Siragarapalli',
    set fullName(value) {
        if (typeof value !== "string")
            throw new Error("Name should be a string");
        const parts = value.split(' ');
        if (parts.length !== 2) {
            throw new Error("Enter a valid full name");
        }
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

try {
    person.fullName = 'Vijay Sailesh';
}
catch (error) {
    alert(error);
}

person.fullName = 'Karri Vijay';
console.log(person);


// This KeyWord

const video = {
    title : 'a',
    tags : ['a','b','c'],
    showTags(){
        this.tags.forEach(function(tag){
            console.log(this.title, tag);
        },this);
    }
};

video.showTags();


// change this 

function playVedio(a,b) {
    console.log(this);
}

playVedio.call({name: "Vijay",age : 18},1,2)
playVedio.apply({name:"Vijay",age:22})













  



