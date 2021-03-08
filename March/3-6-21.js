//**PROBLEM 1**//

//Find largest value evenly divisible by 4 in an array

function solution(A) {
    //create variable to keep track of highest num divisible by 4
    let finalNum = -10000;
    
    //iterate through the array to check if each number is divisible by four
    for(let i = 0; i < A.length; i++) {
        if(A[i] % 4 == 0 && A[i] > finalNum) {
            finalNum = A[i];            
        }
    }
    //return the variable
    return finalNum;
}

//**PROBLEM 2**//

//Given an array of 1s and 0s, find the minimum number of changes to make sure the array is alternating between the two

function solution(A) {
    //create 2 variables to track starting with 0 and starting with 1
    let zeroCount = 0;
    let oneCount = 0;
    let zeroArr = A.slice();
    let oneArr = A.slice();

    //start with 0 and make a new array with changes
    if(zeroArr[0] === 1) {
        zeroArr[0] = 0;
        zeroCount += 1;
    }
    for(let i = 1; i < zeroArr.length; i++) {
        if(zeroArr[i-1] === 0 && zeroArr[i] === 1) {
            continue;
        } else if(zeroArr[i-1] === 1 && zeroArr[i] === 0) {
            continue;
        } else if(zeroArr[i-1] === 0 && zeroArr[i] === 0) {
            zeroArr[i] = 1;
            zeroCount += 1;
        } else {
            zeroArr[i] = 0;
            zeroCount += 1;
        }
    }




    //start with 1 and make a new array with changes
    if(oneArr[0] === 0) {
        oneArr[0] = 1;
        oneCount++;
    }
    for(let i = 1; i < oneArr.length; i++) {
        if(oneArr[i-1] === 1 && oneArr[i] === 0) {
            continue;
        } else if(oneArr[i-1] === 0 && oneArr[i] === 1) {
            continue;
        } else if(oneArr[i-1] === 1 && oneArr[i] === 1) {
            oneArr[i] = 0;
            oneCount += 1;
        } else {
            oneArr[i] = 0;
            oneCount += 1;
        }
    }

    //compare the variables
    const finalAnswer = (oneCount < zeroCount) ? oneCount : zeroCount;

    //return final variable
    return finalAnswer; 

}



//**PROBLEM 3**//

//Look at an HTML page. There will be divs with a single letter and a background color. Look through all of the divs
//and return a string containing each letter IF the div background color and the letter color are different.

function solution() {
    //create a string variable to push the seeable letters into
    let finalStr = "";

    //identify all of the tags
    let tds = document.getElementsByTagName("td");
    let table = Array.prototype.slice.call( tds, 0 );

    //iterate through the tds to check if color = background color
    for(let element of table) {
        if(element.style.color !== element.style.backgroundColor) {
            finalStr += element.textContent;
        }
    }

    return finalStr;
}