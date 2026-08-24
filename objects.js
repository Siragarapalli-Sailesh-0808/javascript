
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