// - Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110

let dolphins_score1= 96;
let dolphins_score2= 108;
let dolphins_score3= 89;


let Koalas_score1= 88;
let Koalas_score2= 91;
let Koalas_score3= 110;

// - Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123

// let dolphins_score1= 97;
// let dolphins_score2=112;
// let dolphins_score3= 101;


// let Koalas_score1= 109;
// let Koalas_score2= 95;
// let Koalas_score3= 123;


// - Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

// let dolphins_score1= 97;
// let dolphins_score2= 112;
// let dolphins_score3= 101;


// let Koalas_score1= 109;
// let Koalas_score2= 95;
// let Koalas_score3= 106;


// 1. Calculate the average score for each team, using the test data below

let dolphins_avg= (dolphins_score1+dolphins_score2+dolphins_score3)/3;
let Koalas_avg= (Koalas_score1+Koalas_score2+Koalas_score3)/3;



// 2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score)

// if (dolphins_avg > Koalas_avg){
//     console.log("The winners of the match are the Dolphins");
//     console.log(`Koalas average: ${Koalas_avg} || Dolphins average: ${dolphins_avg} `);
//     console.log(`The Difference is : ${dolphins_avg-Koalas_avg}`);
// }

// else if (dolphins_avg < Koalas_avg){
//     console.log("The winners of the match are the Koalas");
//     console.log(`Koalas average: ${Koalas_avg} || Dolphins average: ${dolphins_avg} `);
//     console.log(`The Difference is : ${Koalas_avg-dolphins_avg}`);
// }
// else 
//     console.log("It's a TIE");


// 3. **Bonus 1**: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. **Hint**: Use a logical operator to test for minimum score,  as well as multiple else-if blocks 😉

// 4. **Bonus 2**: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy


let minimum_score = 100;

if (dolphins_avg > Koalas_avg && dolphins_avg >=minimum_score){
    console.log("The winners of the match are the Dolphins");
    console.log(`Koalas average: ${dolphins_avg} || Dolphins average: ${Koalas_avg} `);
    console.log(`The Difference is : ${dolphins_avg-Koalas_avg}`);
}

else if (dolphins_avg < Koalas_avg && Koalas_avg >=minimum_score){
    console.log("The winners of the match are the Koalas");
    console.log(`Koalas average: ${Koalas_avg} || Dolphins average: ${dolphins_avg} `);
    console.log(`The Difference is : ${Koalas_avg-dolphins_avg}`);
}
else if (dolphins_avg===Koalas_avg && dolphins_avg>=minimum_score && Koalas_avg>=minimum_score)
    console.log("It's a TIE");

else 
    console.log("Niether Wins");
