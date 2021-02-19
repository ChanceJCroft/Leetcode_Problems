//**PROBLEM 1**//

/* There is a robot starting at position (0, 0), the origin, on a 2D plane. Given a sequence of its moves, judge if this robot ends up at (0, 0) after it completes its moves.

The move sequence is represented by a string, and the character moves[i] represents its ith move. Valid moves are R (right), L (left), U (up), and D (down). If the robot returns to the origin after it finishes all of its moves, return true. Otherwise, return false.

Note: The way that the robot is "facing" is irrelevant. "R" will always make the robot move to the right once, "L" will always make it move left, etc. Also, assume that the magnitude of the robot's movement is the same for each move. */

var judgeCircle = function(moves) {
    //create variable to track movement as an array
    let horizontal = 0;
    let vertical = 0;
    
    //split the string into an array for easy iteration
    const movesArr = moves.split('');
    
    //iterate through the array, checking what value it is
    for(let i = 0; i < movesArr.length; i++) {
        //adjust the tracking variable based on value
        if (movesArr[i] == 'U') {
            vertical++;
        }
        else if (movesArr[i] == 'D') {
            vertical--;
        }
        else if (movesArr[i] == 'L') {
            horizontal--;
        }
        else if (movesArr[i] == 'R') {
            horizontal++;
        }
    }
    
    
    //check if the final value is 0,0
    if(vertical === 0 && horizontal === 0) {
        return true;
    } else {
        return false;
    }
};



//**PROBLEM 2**//

/*Given an array arr, replace every element in that array with the greatest element among the elements to its right, and replace the last element with -1.

After doing so, return the array. */

var replaceElements = function(arr) {
    //create a new array to push elements into
    let newArr = [];
    
    //iterate through the original array to push elements
    for(let i = 1; i < arr.length; i++) {
        let tempMax = arr[i];
            for(let x = i; x < arr.length; x++ ) {
                if(arr[x] >= tempMax) {
                tempMax = arr[x];
            }
        }
        newArr.push(tempMax);
    }
    
    //push -1 to the end
    newArr.push(-1);
    
    //return
    return newArr;
};



//**PROBLEM 3**//

/* Hercy wants to save money for his first car. He puts money in the Leetcode bank every day.

He starts by putting in $1 on Monday, the first day. Every day from Tuesday to Sunday, he will put in $1 more than the day before. On every subsequent Monday, he will put in $1 more than the previous Monday.
Given n, return the total amount of money he will have in the Leetcode bank at the end of the nth day. */

var totalMoney = function(n) {
    let money = 0;
    let days = 0;
    for(let i = 1; i <= n; i++) {
        money += i;
        days++
        if(days % 7 == 0) {
            money = (money/7) + 1;
            i = money + 1;
        }
    }
    
    return money;
};