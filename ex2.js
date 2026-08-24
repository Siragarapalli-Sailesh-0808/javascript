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

function areSame(address1,address2){
    return address1.street === address2.street &&
        address1.city === address2.city &&
      
        address1.zipCode === address2.zipCode;
}

console.log(areSame(address, newAddress));




let post = {
    title: 'a',
    body : 'b',
    author : 'c',
    views : 10,
    comments: [
        { author: 'a', body: 'b' },
        { author: 'c', body: 'd' }
    ],
    isLive : true
}
console.log(post);
console.log(post.title);
console.log(post.body);
console.log(post.author);
console.log(post.views);
console.log(post.comments);
console.log(post.isLive);

// Constructor Function
function Post(title, body, author,views,comments,isLive) {
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = views;
    this.comments = comments;
    this.isLive = isLive;
}

console.log(new Post('a', 'b', 'c', 10, [{ author: 'a', body: 'b' }, { author: 'c', body: 'd' }], true));


let priceRanges = [
    { label : '$' , min: 0 , max: 199},
    { label : '$$' , min: 200 , max: 499},
    { label : '$$$' , min: 500 , max: 1999},
    { label : '$$$$' , min: 2000 , max: 10000}
];

let resturants = [
   {averagePerPerson: 5}
]


