// Activating Strict Mode
'use strict';


// ## Your tasks:

// 1. For each of them, create an object with properties for their full name, 
// mass, and height

// 2. Create a '`calcBMI`' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method

let mark_object={
    fname:"Mark",
    lname:"Miller",
    mass:78,
    height:1.69,
    calcBMI: function(){
        this.bmi=(this.mass / (this.height * this.height)).toFixed(3); // .toFixed(n) means approximate to the nearst n
        return this.bmi;
    }
};

let john_object={
    fname:"John",
    lname:"Smith",
    mass:92,
    height:1.95,
    calcBMI: function(){
        this.bmi=(this.mass / (this.height * this.height)).toFixed(3);
        return this.bmi;
    }
};

// 3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: _"John's BMI (28.3) is higher than Mark's (23.9)!"_

john_object.calcBMI();
mark_object.calcBMI();


if (john_object.bmi>mark_object.bmi)
    console.log(`${john_object.fname}'s BMI (${john_object.bmi}) is higher than ${mark_object.fname}'s BMI (${mark_object.bmi})`);
else if (john_object.bmi<mark_object.bmi)
        console.log(`${mark_object.fname}'s BMI (${mark_object.bmi}) is higher than ${john_object.fname}'s BMI (${john_object.bmi})`);
else
    console.log(`Both ${mark_object.fname} and ${john_object.fname} have equal BMIs (${john_object.bmi})`);

