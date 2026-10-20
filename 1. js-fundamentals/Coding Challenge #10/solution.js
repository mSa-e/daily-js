// Given an array of forecasted maximum temperatures, the thermometer displays
// a string with the given temperatures.
// **Example**: [17, 21, 23] will print "... 17°C in 1 days ... 21°C in 2 days ... 23°C in 3 days ..."

// 1. Create a function '`printForecast`' which takes in an array
// '`arr`' and logs a string like the above to the console.
// Try it with both test datasets.

const temperatures1 = [17, 21, 23];
const temperatures2 = [12, 5, -5, 0, 4];

// 1. Create a function '`printForecast`' which takes in an array '`arr`' and logs a string like the above to the console. Try it with both test datasets.

("17°C in 1 days ... 21°C in 2 days ... 23°C in 3 days");

let printForecast = function (arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    const daylabel = i + 1 === 1 ? "day" : "days";
    str += `${arr[i]}°C in ${i + 1} ${daylabel} ...`;
  }

  console.log(" ... " + str);
};

////////////

printForecast(temperatures1);

printForecast(temperatures2);
