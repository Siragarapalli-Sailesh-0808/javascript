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
  return total * (discount);
}

console.log(cart(0.1,20,30,40));
  



