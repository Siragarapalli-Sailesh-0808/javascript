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
  



