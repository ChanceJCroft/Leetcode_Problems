//PROBLEM 1//
/* Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

Return the running sum of nums.

 

Example 1:

Input: nums = [1,2,3,4]
Output: [1,3,6,10]
Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4]. */

//****MY SOLUTION****//

var runningSum = function(nums) {
    let newArr = [];
    let newPush = 0;
    
    for(let i = 0; i < nums.length; i++) {
        newPush += nums[i];
        newArr.push(newPush);
    }
    
    return newArr;
};


//PROBLEM 2//
/* Given the array candies and the integer extraCandies, where candies[i] represents the number of candies that the ith kid has.

For each kid check if there is a way to distribute extraCandies among the kids such that he or she can have the greatest number of candies among them. Notice that multiple kids can have the greatest number of candies.

 

Example 1:

Input: candies = [2,3,5,1,3], extraCandies = 3
Output: [true,true,true,false,true] 
Explanation: 
Kid 1 has 2 candies and if he or she receives all extra candies (3) will have 5 candies --- the greatest number of candies among the kids. 
Kid 2 has 3 candies and if he or she receives at least 2 extra candies will have the greatest number of candies among the kids. 
Kid 3 has 5 candies and this is already the greatest number of candies among the kids. 
Kid 4 has 1 candy and even if he or she receives all extra candies will only have 4 candies. 
Kid 5 has 3 candies and if he or she receives at least 2 extra candies will have the greatest number of candies among the kids.  */

//*****MY SOLUTION *****//

var kidsWithCandies = function(candies, extraCandies) {
    const finalArr = [];
    let compareNum = Math.max(...candies);
    for(let i = 0; i < candies.length; i++) {
        if(candies[i] + extraCandies >= compareNum) {
            finalArr.push(true);
        } else {
            finalArr.push(false);
        }
    }
    
    return finalArr;
};


//PROBLEM 3//
/* You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.

A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.

 

Example 1:

Input: accounts = [[1,2,3],[3,2,1]]
Output: 6
Explanation:
1st customer has wealth = 1 + 2 + 3 = 6
2nd customer has wealth = 3 + 2 + 1 = 6
Both customers are considered the richest with a wealth of 6 each, so return 6. */

//*****MY SOLUTION*****//

var maximumWealth = function(accounts) {
    let highestWealth = 0;
    for(let i = 0; i < accounts.length; i++) {
        let testWealth = accounts[i].reduce((a,b) => a+b);
        if(testWealth > highestWealth) {
            highestWealth = testWealth;
        }
    }
    
    return highestWealth;
};



//PROBLEM 4//

/* Given a valid (IPv4) IP address, return a defanged version of that IP address.

A defanged IP address replaces every period "." with "[.]".

 

Example 1:

Input: address = "1.1.1.1"
Output: "1[.]1[.]1[.]1" */

//******MY SOLUTION*****//
var defangIPaddr = function(address) {
    let finalString = "";
    let newArr = address.split('');
    for(let i = 0; i < newArr.length; i++) {
        if(newArr[i] !== ".") {
            finalString += newArr[i];
        } else {
            finalString += "[.]"
        }
    }
    
    return finalString;
};


//PROBLEM 5//

/* Given an array of integers nums.

A pair (i,j) is called good if nums[i] == nums[j] and i < j.

Return the number of good pairs.

 

Example 1:

Input: nums = [1,2,3,1,1,3]
Output: 4
Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed. */

//*****MY SOLUTION*****//

var numIdenticalPairs = function(nums) {
    let finalNum = 0;
    for(let i = 0; i < nums.length; i++) {
        for(let j = i + 1; j < nums.length; j++) {
            if(nums[i] == nums[j]) {
                finalNum += 1;
            }
        }
    }
    
    return finalNum;
};