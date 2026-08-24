
// Reference Types
// Objects
let person = {
    pname: 'sailesh',
    page: 22,
    pisApproved: false
};
person.name = 'vijay';
console.log(person.name);


const circle = {
    radius: 1,
    isVisible: true,
    draw: function() {
    console.log('draw');
    }
};
circle.draw(3);

// Factory Function
function createCircle(radius) {
    return {
        radius,
        draw() {
        console.log('draw');
        }
    };
}

const circle1 = createCircle(1);
console.log(circle1);

const circle2 = createCircle(2);
console.log(circle2);


// Constructor Function
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
    console.log('draw');
    }
}
const Circle1 = new Circle(1);
console.log(circle1);



// Dynamic Nature of Objects
const circleDynamic = {
    radius: 1,
};

circleDynamic.color = 'red';
circleDynamic.draw = function() {}

delete circleDynamic.radius;

console.log(circleDynamic);


let number = {value : 11};

function increase(number) {
    number.value++;
}

increase(number);
console.log(number);