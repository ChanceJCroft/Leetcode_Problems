/* Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1]. */

var twoSum = function(nums, target) {
    for(let i = 0; i < nums.length; i++) {
        for(let x = 1; x < nums.length; x++) {
            if(nums[i] + nums[x] == target && i !== x) {
                return [i, x];
            }
        }
    }
    
};


/* Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

Follow up: Could you implement a solution with a linear runtime complexity and without using extra memory?

 

Example 1:

Input: nums = [2,2,1]
Output: 1 */

var singleNumber = function(nums) {
    return nums.filter(num => nums.indexOf(num) == nums.lastIndexOf(num));
};


