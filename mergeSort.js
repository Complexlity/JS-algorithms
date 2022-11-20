// Merge sort algorithm using recursion
function mergeSort(arr, reverse=false){
    if (arr.length < 2) return arr
    const midPoint = Math.floor(arr.length / 2)
    const leftArray = arr.slice(0, midPoint)
    const rightArray = arr.slice(midPoint)
    return merge(mergeSort(leftArray, reverse), mergeSort(rightArray, reverse), reverse)
}


// Function to merge the both sides of the array
function merge(left, right, reverse){
    const sortedArray = []
    if(!reverse){
    while(left.length && right.length){
        if (left[0] <= right[0]) sortedArray.push(left.shift())
        else sortedArray.push(right.shift())
    }
}
else{
    while(left.length && right.length){
        if (left[0] >= right[0]) sortedArray.push(left.shift())
        else sortedArray.push(right.shift())
    }
}
    return [...sortedArray, ...left, ...right]
}

let myArray = [3,5,-1, 22, 44, 243, 9]

console.log(mergeSort(myArray, true)) // [-1, 3, 5, 9, 22, 44, 243]
console.log(mergeSort([-9, 39, 2, 68, 44, -5]))