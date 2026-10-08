# Coding Challenge #5

Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team **only** wins if it has at least **double** the average score of the other team.
Otherwise, no team wins!

## Your tasks:

1. Create an arrow function '`calcAverage`' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function '`checkWinner`' that takes the average score of each team as parameters ('`avgDolphins`' and '`avgKoalas`'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: _"Koalas win (30 vs. 13)"_
4. Use the '`checkWinner`' function to determine the winner for both Data 1 and Data 2
5. Ignore draws this time

## Test data:

- Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
- Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

## Hints:

- To calculate average of 3 values, add them all together and divide by 3
- To check if number A is at least double number B, check for A >= 2 \* B. Apply this to the team's average scores 😉

**GOOD LUCK** 😀

> ## Note 1
>
> A Challenge can have more than one solution in different forms that depends on you **(No Issue in that)** but **it should ouputs the same output**

> ## Note 2
>
> This challange contains basic Javascript as it covers From `console.log` till `Functions` only and not above that
>
> In each new challenge will contain knew topics that builds on the old ones
