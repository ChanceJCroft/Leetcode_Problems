/* Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

 

Example 1:

Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100]. */

var sortedSquares = function(nums) {
    let newNums = [];
    for(let i = 0; i < nums.length; i++) {
        newNums.push(nums[i] * nums[i]);
    }
    
    return newNums.sort((a,b) => a - b);
};


/* The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

Given two integers x and y, calculate the Hamming distance.

Note:
0 ≤ x, y < 231.

Example:

Input: x = 1, y = 4

Output: 2

Explanation:
1   (0 0 0 1)
4   (0 1 0 0)
       ↑   ↑

The above arrows point to positions where the corresponding bits are different. */

//Definitely not working perfectly, but it was a start to what I was thinking

var hammingDistance = function(x, y) {
    let counter = 0;
    let binX = parseInt(x, 2).toString('');
    let binY = parseInt(y, 2).toString('');
    for(let i = 0; i < binX.length; i++) {
        if(binX[i] !== binY[i]) {
            counter++;
        }
    }
    
    return counter;
};