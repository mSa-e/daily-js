// 1. Create an array '`bills`' containing all 10 test bill values

let bills=[22, 295, 176, 440, 37, 105, 10, 1100, 86 ,52]

// 2. Create empty arrays for the tips and the totals ('`tips`' and '`totals`')

let tips=[]
let totals=[]

// 3. Use the '`calcTip`' function we wrote before (no need to repeat) to calculate tips and total values (`bill + tip`) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

// to calculate tips and total values (`bill + tip`) for 
// every bill value in the bills array. Use a for 
// loop to perform the 10 calculations!


function calcTip(bills){
    for (const bill_value of bills){
    if (bill_value >=50 && bill_value <=300){
        tips.push(0.15 * bill_value);
        totals.push(0.15 * bill_value+bill_value);
    }
    else{
        tips.push(0.2 * bill_value);
        totals.push(0.2 * bill_value+bill_value);
         }
    }
}


// 4. **Bonus**: Write a function '`calcAverage`' which takes an array called '`arr`' as an argument. This function calculates the average of all numbers in the given array. This is a **difficult** challenge (we haven't done this before)! Here is how to solve it:

function calcAverage(arr){
    let sum =0;
    for (const value of arr){
        sum+=value;
    }
    return sum/(arr.length);
}


//////////////

calcTip(bills);
console.log(tips);
console.log(totals);
console.log(calcAverage(totals));
console.log(calcAverage(tips));