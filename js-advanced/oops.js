// OOPS
// Encapsulation-Abstraction-Inheritance-Polymorphism

// Factory Function
function createCircle(radius) {
    return {
        radius,
        draw: function() {
            console.log('draw');
        }
    };
}

const circle = createCircle(2);
circle.draw();


// Constructor Functions
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}
const circle1 = new Circle(2);
console.log(circle1);


let number = 10;
function increase(number) {
    number++;
    return number;
}

increase(number);

console.log(number);
