// for loop
for (let i = 1; i <= 5; i++) {
    console.log("Hello World", i);
}

// while loop
let i = 0;
while (i <= 5){
    console.log(i);
    i++;
}

// do while loop

let s = 0;
do {
    console.log(s);
    s++;
} while (s <= 5);


// for-in
const person = {
    name : "sailesh",
    age : 22
};

for (let key in person){
    console.log(person[key]);
}

// for-of
const colors = ['red', 'green', 'blue'];
for (let color of colors) {
    console.log(color);
}