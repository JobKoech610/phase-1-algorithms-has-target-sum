
function hasTargetSum(array, target) {
  // write your algorithm here
  
  const seenNumbers = {};
  for (const number of array) {
   
    const complement = target - number;
    
    if (seenNumbers[complement]) return true;
    seenNumbers[number] = true;
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  // pseudocode
  // create an object to keep track of all the numbers we've seen const seenNumbers = {};
  // iterate over the array of numbers using for of
   // for the current number, identify a complementary number that adds to our target  const complement = target - number;
    // (for example: if our number is 2, and the target is 5, the complementary number is 3)
     // check if any of the keys in our object is the complement to the current number
    // if so, return true
        // save the current number as the key on our object so we can check it later against other numbers
          // if we reach the end of the array, return false



*/

/*
  Add written explanation of your solution here
// the object (seenNumbers) keep track of all the numbers we've seen
  // iterate over the array of numbers
   // for the current number, identify a complementary number that adds to our target
    // (for example: if our number is 2, and the target is 5, the complementary number is 3)
     // check if any of the keys in our object is the complement to the current number
    // if so, return true
        // save the current number as the key on our object so we can check it later against other numbers
          // if we reach the end of the array, return false




*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
