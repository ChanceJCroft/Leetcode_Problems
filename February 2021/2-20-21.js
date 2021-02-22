//**PROBLEM 1**//

/* Given an array of distinct integers arr, find all pairs of elements with the minimum absolute difference of any two elements. 

Return a list of pairs in ascending order(with respect to pairs), each pair [a, b] follows

a, b are from arr
a < b
b - a equals to the minimum absolute difference of any two elements in arr */

//SOLUTION//
var minimumAbsDifference = function(arr) {
    //create new array for return
    const newArr = arr.sort((a,b) => a - b);
    const finalArr = [];
    //create variable to track minimum absolute difference
    let minDiff = Math.abs(newArr[0] - newArr[1]);
    //iterate through array to identify minimum difference
    for(let i = 0; i < newArr.length; i++) {
        for(let x = i + 1; x <= newArr.length; x++) {
            if(Math.abs(newArr[i] - newArr[x]) < minDiff) {
                minDiff = Math.abs(newArr[i] - newArr[x]);
            }
        }
    }
    
    //double for loop to check if any other options equal that same minimum absolute difference
    //push into new array if it does equal
    for(let i = 0; i < newArr.length; i++) {
        for(let x = i + 1; x <= newArr.length; x++) {
            if(Math.abs(newArr[i] - newArr[x]) === minDiff) {
                finalArr.push([newArr[i], newArr[x]]);
            }
        }
    }
    
    //return the new array
    return finalArr;
};



//**PROBLEM 2**//

/* Alice and Bob take turns playing a game, with Alice starting first.

Initially, there is a number N on the chalkboard.  On each player's turn, that player makes a move consisting of:

Choosing any x with 0 < x < N and N % x == 0.
Replacing the number N on the chalkboard with N - x.
Also, if a player cannot make a move, they lose the game.

Return True if and only if Alice wins the game, assuming both players play optimally. */

var divisorGame = function(N) {
    //create variables to track who's turn it is
    let alice = false;
    let bob = true;
    let number = N;
    
    //check to see if there is a number that can divide evenly
    for(let i = number; i > 0; i--) {
        if(number % i == 0 && number !== i) {
            number -= i;
            if(alice === true) {
                alice = false;
                bob = true;
            } else {
                alice = true;
                bob = false;
            }
        }
    }
    
    
    
    //return final value
    return alice;
};

//**PROBLEM 3**//

/* Given an integer array arr, return the mean of the remaining integers after removing the smallest 5% and the largest 5% of the elements. */

var trimMean = function(arr) {
    //determine how big 5% of the array is - set variable for amount to me removed.
    let removeNum = 1;
    if(Math.round(arr.length / 20 > 1)) {
        removeNum = Math.round(arr.length / 20);
    }
    
    //sort the array
    let newArray = arr.sort((a,b) => a - b);
    
    //remove the top and bottoms
    for(let i = 0; i < removeNum; i++) {
        newArray.shift();
        newArray.pop();
    }
    
    //sum all numbers in the array
    let arrSum = newArray.reduce((a,b) => a + b);
    
    //divide by array length
    let finalNum = arrSum / arr.length;
    
    //return
    return finalNum;
};

//**PROBLEM 4**//





