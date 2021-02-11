//**PROBLEM 1**//

/* Let's call an array arr a mountain if the following properties hold:

arr.length >= 3
There exists some i with 0 < i < arr.length - 1 such that:
arr[0] < arr[1] < ... arr[i-1] < arr[i]
arr[i] > arr[i+1] > ... > arr[arr.length - 1]
Given an integer array arr that is guaranteed to be a mountain, return any i such that arr[0] < arr[1] < ... arr[i - 1] < arr[i] > arr[i + 1] > ... > arr[arr.length - 1]. */

//This was a bit easier than expected because the array is guaranteed to be a mountain array.
var peakIndexInMountainArray = function(arr) {
    const newInt = Math.max(...arr);
    return arr.indexOf(newInt);
};


//**PROBLEM 2**//

/* Given an array of integers arr, write a function that returns true if and only if the number of occurrences of each value in the array is unique.

 

Example 1:

Input: arr = [1,2,2,1,1,3]
Output: true
Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences. */

var uniqueOccurrences = function(arr) {
    var counts = {};
    arr.forEach(function(x) { counts[x] = (counts[x] || 0)+1; });
    let newArr = [];
    
    for(const property in counts) {
        newArr.push(counts[property])
    };
    
    for(let i = 0; i < newArr.length; i++) {
        if(newArr.indexOf(i) !== newArr.lastIndexOf(i)) {
            return false;
        }
    
    }
    return true;
};

//**PROBLEM 3**//

/*X city opened a new cinema, many people would like to go to this cinema. The cinema also gives out a poster indicating the movies’ ratings and descriptions.
Please write a SQL query to output movies with an odd numbered ID and a description that is not 'boring'. Order the result by rating.*/

//Looks like I accidentally snuck some SQL in here!

SELECT * FROM cinema 
WHERE (id % 2) > 0 
AND NOT description='boring'
ORDER BY rating DESC;


//**PROBLEM 4**//

/* Given two arrays arr1 and arr2, the elements of arr2 are distinct, and all elements in arr2 are also in arr1.

Sort the elements of arr1 such that the relative ordering of items in arr1 are the same as in arr2.  Elements that don't appear in arr2 should be placed at the end of arr1 in ascending order.

 

Example 1:

Input: arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]
Output: [2,2,2,1,4,3,3,9,6,7,19] */
var relativeSortArray = function(arr1, arr2) {
    let finalArr = [];
    
    for(let i = 0; i < arr2.length; i++){
        for(let x = 0; x < arr1.length; x++) {
            if(arr2[i] === arr1[x]){
                finalArr.push(arr1[x]);
                arr1.splice(x, 1);
            }
        }
    }
    
    if(arr1.length > 1){
        arr1.sort((a,b) => a-b);
        for(let i = 0; i < arr1.length; i++){
            finalArr.push(arr1[i]);
        }
    }
    
    return finalArr;
};


//***PROBLEM 5***//

/* Students are asked to stand in non-decreasing order of heights for an annual photo.

Return the minimum number of students that must move in order for all students to be standing in non-decreasing order of height.

Notice that when a group of students is selected they can reorder in any possible way between themselves and the non selected students remain on their seats. */
var heightChecker = function(heights) {
    let counter = 0;
    let newArr = [...heights].sort((a,b) => a-b);
    
    for(let i = 0; i < heights.length; i++){
        if(newArr[i] !== heights[i]) {
            counter++;
        }
    }
    
    return counter;
};


