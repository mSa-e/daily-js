// Old code using Data 1

let markWeight1 = 78;
let markHeight1 = 1.69;

let johnWeight1 = 92;
let johnHeight1 = 1.95;

let markBMI = markWeight1/(markHeight1**2);
let johnBMI = johnWeight1/(johnHeight1**2);

let markHigherBMI = markBMI > johnBMI


// The new Addition
if (markHigherBMI){
    console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
}
else{
    console.log(`Mark's BMI (${markBMI}) is less than John's (${johnBMI})!`);
}

/*
Output

Mark's BMI (27.309968138370508) is higher than John's (24.194608809993426)!

*/