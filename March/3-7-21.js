/**PROBLEM 1**/

/* Given two arrays of integers nums and index. Your task is to create target array under the following rules:

Initially target array is empty.
From left to right read nums[i] and index[i], insert at index index[i] the value nums[i] in target array.
Repeat the previous step until there are no elements to read in nums and index.
Return the target array. */

var createTargetArray = function(nums, index) {
    //create new array variable to add items into
    let newArr = [];
    
    //iterate through the 2 arrays
    for(let i = 0; i < nums.length; i++) {
        newArr.splice(index[i], 0, nums[i]);
    }
    
    //return the new array
    return newArr;
};


/**PROBLEM 2**/

/* Given two string arrays word1 and word2, return true if the two arrays represent the same string, and false otherwise.

A string is represented by an array if the array elements concatenated in order forms the string. */

var arrayStringsAreEqual = function(word1, word2) {
    //join the 2 arrays
    let finalWord1 = word1.join('');
    let finalWord2 = word2.join('');
    
    //create a variable that checks if they are equal
    const isEqual = (finalWord1 === finalWord2) ? true : false;
    
    
    //return if it is equal
    return isEqual;
};