// Activating Strict Mode
'use strict';


// Test data:

// Data 1

// let dolphins_score_1=44;
// let dolphins_score_2=23;
// let dolphins_score_3=71;

// let koalas_score_1=65;
// let koalas_score_2=54;
// let koalas_score_3=49;


// Data 2

let dolphins_score_1=85;
let dolphins_score_2=54;
let dolphins_score_3=41;

let koalas_score_1=23;
let koalas_score_2=34;
let koalas_score_3=27;


// 1. Create an arrow function '`calcAverage`' to calculate the average of 3 scores
// 2. Use the function to calculate the average for both teams

let calcAverage = (score1,score2,score3) => (score1+score2+score3)/3;

// 3. Create a function '`checkWinner`' that takes the average score of each team as parameters ('`avgDolphins`' and '`avgKoalas`'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: _"Koalas win (30 vs. 13)"_
let checkWinner = (avgDolphins,avgKoalas) => {
    if (avgDolphins>=avgKoalas*2)
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    else if (avgKoalas>=avgDolphins*2)
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    else 
        console.log(`no team wins.`);
}


// 4. Use the '`checkWinner`' function to determine the winner for both Data 1 and Data 2

let avgDolphins =calcAverage(dolphins_score_1,dolphins_score_2,dolphins_score_3);

let avgKoalas=calcAverage(koalas_score_1,koalas_score_2,koalas_score_3);

checkWinner(avgDolphins,avgKoalas);