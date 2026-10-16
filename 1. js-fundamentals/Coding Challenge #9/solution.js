const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

let amplitude1 = (temperatures) => {
  let num_temp = [];
  // Excluding errors
  for (let i = 0; i < temperatures.length; i++) {
    if (typeof temperatures[i] === "number") {
      num_temp.push(temperatures[i]);
    }
  }
  // Getting the maximum
  let max = num_temp[0];
  let min = num_temp[0];
  for (let i = 1; i < num_temp.length; ++i) {
    if (num_temp[i] > max) max = num_temp[i];
    if (num_temp[i] < min) min = num_temp[i];
  }
  return max - min;
};

console.log(amplitude1(temperatures));

/////////////

// PROBLEM 2:
// Function should now receive 2 arrays of temps

// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice?
// NO! Just merge two arrays

// 2) Breaking up into sub-problems
// - Merge 2 arrays

let amplitude2 = function (temperatures1, temperatures2) {
  let temperatures = [...temperatures1, ...temperatures2];
  let num_temp = [];
  // Excluding errors
  for (let i = 0; i < temperatures.length; i++) {
    if (typeof temperatures[i] === "number") {
      num_temp.push(temperatures[i]);
    }
  }
  // Getting the maximum
  let max = num_temp[0];
  let min = num_temp[0];
  for (let i = 1; i < num_temp.length; ++i) {
    if (num_temp[i] > max) max = num_temp[i];
    if (num_temp[i] < min) min = num_temp[i];
  }
  return max - min;
};

console.log(amplitude2([3, 5, 1], [9, 0, 5]));
