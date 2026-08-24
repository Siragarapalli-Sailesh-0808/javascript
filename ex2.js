console.log("ex2");

// Function Show Address
const address = {
    street : '123 Main St',
    city : 'Anytown',
    zipCode : '12345'
};

function showAddress(address){
    console.log("street: ",address.street);
    console.log("city: ",address.city);
    console.log("zipCode: ",address.zipCode);
}

showAddress(address);

// Factory Function
function createAddress(street,city,zipCode) {
    return { 
    street,
    city,
    zipCode
    };
}
console.log(createAddress('123 Main St','Anytown','12345'));

// Constructor Function
function updateAAddress(street,city,zipCode) {
    this.street = street,
    this.city = city,
    this.zipCode = zipCode
}

const newAddress = new updateAAddress("TEst Adress","Anytown","12345");
console.log(newAddress); 