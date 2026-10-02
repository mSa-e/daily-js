// Test data

let bill=275;
// let bill=40;
// let bill=430;

// 1. Calculate the tip, depending on the bill value. 
// Create a variable called '`tip`' for this. 
// It's not allowed to use an if/else statement 
// (If it's easier for you, you can start with an if/else statement,
//  and then try to convert it to a ternary operator!)


let tip = bill>=50&&bill<=300 ? bill*(15.0/100.0) : bill *(20.0/100.0);

// 2. Print a string to the console containing the bill value,
//  the tip, and the final value (`bill + tip`).
//  Example: _"The bill was 275, the tip was 41.25, and 
// the total value 316.25"

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${tip+bill}`);