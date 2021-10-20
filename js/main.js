//==================Exercise #1 ==========//
/*Write a function that finds the index of the first non-consecutive element in the array. 
For example, if we have an array [1, 2, 3, 5, 6, 7] then this will return 3 since the array
at index 3 is 5 which is not consecutive. If every element in the array is consecutive, return -1
*/

// function firstNonConsecutive(arr){
    //Your code goes here
// }

function firstNonConsecutive(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i]+1 != arr[i+1]){
            return i+1
            
        }
    }

    return -1
} 




console.log(firstNonConsecutive([1,2,3,5,6,7]))
console.log(firstNonConsecutive([2,3,4,5,6,7,9,10]))
console.log(firstNonConsecutive([1,3,4,5,6,]))
console.log(firstNonConsecutive([1,2,3,4,5]))

console.log('hello patrick')
//Call function here with arguments




//============Exercise #2 ============//
/*Write an arrow function that when given an array of numbers, returns the sum of all of the positives ones.
Example 1:
Input: [10, 12, -9, 3, -1, 0, 15] 
Output: 40
Explain: 10 + 12 + 3 + 15 = 40

Example 2:
Input: [3, 5, 7, 9, -10, 2, -22, -1] 
Output: 26

Note: if there is nothing to sum, the sum is default to 0.
*/

// Write arrow function here


// Call function here with arguments
// console.clear()

//using reducer
function sumOfPositiveNumbers(arr) {
    lstOne = []
    for (let i = 0; i < arr.length; i++){
        if (arr[i] >= 0){
            lstOne.push(arr[i])
        }
    }
    const reducer = (accumulator, curr) => accumulator + curr;
    console.log(lstOne.reduce(reducer));
}
console.log(sumOfPositiveNumbers([1,3,5,-7,-3,4,2,-5]))
//arrow function using reducer
let sumOfPositiveNumbers3 = (arr) => {
    lstOne = []
    for (let i = 0; i < arr.length; i++){
        if (arr[i] >= 0){
            lstOne.push(arr[i])
        }
    }
    const reducer = (accumulator, curr) => accumulator + curr;
    console.log(lstOne.reduce(reducer));
}
console.log(sumOfPositiveNumbers([1,3,5,-7,-3,4,2,-5]))


//using for loop
function sumOfPositiveNumbers2(arr) {
    res = 0
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > 0){
            res += arr[i]
        }
    }
    return res
}
console.log(sumOfPositiveNumbers2([1,3,5,-7,-3,4,2,-5]))
//arrow function using for loop
let sumOfPositiveNumbers1 = (arr) => {
    res = 0
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > 0){
            res += arr[i]
        }
    }
    return res
}
console.log(sumOfPositiveNumbers1([1,3,5,-7,-3,4,2,-5]))

