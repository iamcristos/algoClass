/*
Implement a function that flattens a nested array.

flatten([1,[2],[3, [[4]]]]);
=> [1,2,3,4]
*/

function flatten(arr) {
    const newArr = []
    newArr.push(arr.shift())
    console.log(newArr)
    if (arr.length < 2) {
        return newArr
    }
    for(let i =0; i< arr.length; i++) {
        console.log(arr, 'hello')
        return flatten(arr[i])
    }
    console.log(newArr, 'hello')
    return newArr
}

console.log(flatten([1,[2],[3, [[4]]]]))
