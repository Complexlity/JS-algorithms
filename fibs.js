// Solution 1 using loops
function fibs(value){
    const arr = [0,1]
    if (value < 2 ) return arr.slice(0, value)
    for (i = 0; i < value-2; i++){
        arr.push(arr[i]+arr[i+1])
    }
    return arr
}

// Solution 2 using Recursion
function fibsRec(value, arr=[0,1]){
    if(arr.length >= value) return arr.slice(0, value)
    else {
        let lastIndex = arr.length - 1
        arr.push(arr[lastIndex] + arr[lastIndex - 1])
        return fibsRec(value, arr)
    }
}

console.log(fibs(8)) // [0, 1, 1, 2, 3, 5, 8, 13]
console.log(fibsRec(10)) //[0, 1, 1, 2, 3, 5, 8, 13, 21]