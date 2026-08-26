let person = { name : 'Sailesh' };

Object.defineProperty(person, 'name', {
    configurable : true,
    enumerable : true,
    writable : false,
    
});

person.name = "Sanjay";

console.log(Object.getOwnPropertyDescriptor(person, 'name'));
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log("Drawing");
    }
}


const c1 = new Circle(1);
const c2 = new Circle(2);
