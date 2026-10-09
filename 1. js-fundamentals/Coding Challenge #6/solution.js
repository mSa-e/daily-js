// Activating Strict Mode
'use strict';


// ## Your tasks:

// 1. Write a function '`calcTip`' that takes any bill value as an input and returns the corresponding tip, calculated based on the challenge rules
// Test the function using a bill value of 100

function calcTip(bill_value){

    if (bill_value >=50 && bill_value <=300)
        return 0.15 * bill_value
    else 
        return 0.2 * bill_value

}


let calculated_tip=calcTip(100);

console.log(calculated_tip);


// 2. Create an array '`bills`' containing the test data :125, 555 and 44


let bills= new Array(125, 555 ,44);

// 3. Create an array '`tips`' containing the tip value for each bill, calculated from the function you created before

let tips=[calcTip(125),calcTip(555),calcTip(44)];

console.log(bills);

console.log(tips);

// 4. Create an array '`total`' containing the total values, so the `bill + tip`

let total =[bills[0]+tips[0],bills[1]+tips[1],bills[2]+tips[2]];

console.log(total);
