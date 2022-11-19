function mergeSort(arr){
    if (arr.length < 2) return arr
    const midPoint = Math.floor(arr.length / 2)
    const leftArray = arr.slice(0, midPoint)
    const rightArray = arr.slice(midPoint)
    return merge(mergeSort(leftArray), mergeSort(rightArray))
}

function merge(left, right){
    const sortedArray = []
    while(left.length && right.length){
        if (left[0] <= right[0]) sortedArray.push(left.shift())
        else sortedArray.push(right.shift())
    }
    return [...sortedArray, ...left, ...right]
}

let myArray = [3,5,-1, 22, 44, 243, 9]

console.log(mergeSort(myArray)) // [-1, 3, 5, 9, 22, 44, 243]