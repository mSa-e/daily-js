// Data 1
let markWeight1 = 78;
let markHeight1 = 1.69;

let johnWeight1 = 92;
let johnHeight1 = 1.95;

let markBMI = markWeight1/(markHeight1**2);
let johnBMI = johnWeight1/(johnHeight1**2);

let markHigherBMI = markBMI > johnBMI

console.log("Mark BMI:",markBMI, "\nJohn BMI:",johnBMI);
console.log("Does John has a higher BMI than Mark:",markHigherBMI);


//////////////////

// Data 2
let markWeight2 = 95;
let markHeight2 = 1.88;

let johnWeight2 = 85;
let johnHeight2 = 1.76;


markBMI = markWeight2/(markHeight2**2);
johnBMI = johnWeight2/(johnHeight2**2);

markHigherBMI = markBMI > johnBMI

console.log("Mark BMI:",markBMI, "\nJohn BMI:",johnBMI);
console.log("Does John has a higher BMI than Mark:",markHigherBMI);


/*
Output

Mark BMI: 27.309968138370508 
John BMI: 24.194608809993426
Does John has a higher BMI than Mark: true

Mark BMI: 26.87867813490267 
John BMI: 27.44059917355372
Does John has a higher BMI than Mark: false
*/