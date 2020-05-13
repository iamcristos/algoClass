/*
BINARY SEARCH ARRAY

*** Description

Given a sorted array and a value, determine if the value is in the array using the binary search (divide and conquer) method.

*** Exercises

Write a function that takes a sorted array and a value and returns the index of the value in the array. Return null if the value is not found in the array. What is the time complexity?

Extra credit: Implement the function both iteratively and recursively.

*/
function BinarySearch(arr,x) {
    const mid = Math.floor(arr.length/2);
    if( x < arr[mid]) {
        for(let i=0; i< mid; i++) {
            if(arr[i] === x) return i
        }
    } else {
        for(let i = mid; i<arr.length; i++) {
            if (arr[i] === x) return i
        }
    }
    return null
};



console.log(BinarySearch([1,2,3,4,5], 5))
