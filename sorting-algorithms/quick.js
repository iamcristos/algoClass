/*
QUICK SORT

*** Description

Like merge sort, quick sort employs a divide and conquer strategy.

It has a partitioning step, in which you pick an element (called a pivot) and partition the array so that all smaller elements come before pivot and all larger elements come after. The pivot will be in its final position. Recursively apply this to the subarray of smaller elements and the subarray of larger elements.

*** Exercises

- Write a partition helper function. For choice of pivot, for a basic implementation, we recommend choosing either the first or last element in the subarray. If you need hints, look up the Lumoto partiton scheme. Test this out before moving forward!
- Implement quicksort
- Identify time complexity

- Consider implications for choice of pivot (https://en.wikipedia.org/wiki/Quicksort#Choice_of_pivot)

*** Extra Credit

Variants:
- Implement a multi-pivot quicksort (ex: partition into 3 subarrays using 2 pivots)

*/
function partition(arr, low, high) {
    // keep track of the pivot index
    let pivotIndex = arr.length
    for (let i=0; i< arr.length; i++) {
        if(arr[i] >= arr[pivotIndex]) {
            const temp = arr[pivotIndex];
            arr[i] = arr[pivotIndex - 1]
            arr[pivotIndex] = arr[i]
            arr[pivotIndex - 1] = temp
            pivotIndex += 1
        }
    }
}