# Create Common Algorithms Using JavaScript
# 1. Fibonnaci
In Maths, [fibonnaci](https://en.wikipedia.org/wiki/Fibonacci_number) is the sequence of numbers where the first two numbers are 0 and 1, with each subsequent number being defined as the sum of the previous two numbers in the sequence.
For example, _0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233..._
This is a good example of a problem that can be solve using [Recursion](https://en.wikipedia.org/wiki/Recursion)
### Usage: 
`fibsRec(10)` _// [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]_   


# 2. Merge Sort
The [Merge Sort](https://en.wikipedia.org/wiki/Merge_sort) algorithm is a sorting algorithm that is based on the Divide and Conquer paradigm. It is another great problem that is solved using [Recursion](https://en.wikipedia.org/wiki/Recursion)

### usage:
```mergeSort([-9, 39, 2, 68, 44, -5]``` _// [ -9, -5, 2, 39, 44, 68 ]_

Optionally, it takes a `reverse` parameter. Default is `false`
```mergeSort([-9, 39, 2, 68, 44, -5], true)``` _// [ 68, 44, 39, 2, -5, -9 ]_


# 3. Linked List
A linked list is a linear collection of data elements called nodes that “point” to the next node by means of a pointer.

``` [ NODE(head) ] -> [ NODE ] -> [NODE] -> [ NODE(tail) ] -> null```

Above is a basic representation of a linked list

### Usage: Create an new linked list object 
```const myLinkedList = new LinkedList()``` 

The [LinkedList Object](https://github.com/Complexlity/JS-algorithms/blob/main/linked-list.js) contains the following methods
- ### append 
```myLinkedList.append('World')``` inserts a new Node with data `World` to the end of the List and returns `undefined`
- ### prepend 
```myLinkedList.prepend('Hello')``` inserts a new Node with data `Hello` to the beginning of the list and returns `undefined`
- ### size
```myLinkedList.size()```returns the number of items in the list _//  2_
- ### headNode
```myLinkedList.headNode()``` returns the first item on the list (The Head) _// Hello_
- ### tailNode
```myLinkedList.tailNode()``` retuns the last item on the list (The Tail) _//World_
- ### atIndex(index)
```myLinkedList.atIndex(1)``` returns the item at index of 1 _// World_ and returns `null` for invalid indexes
- ### contains(value)
```myLinkedList.contains('Coding')``` returns `true` if  'Coding' is present in the list and `false` otherwise _// false_
- ### find(value)
```myLinkedList.find('World')``` returns the index of `World` in the list otherwise `null` _// 1_
- ### toString
```myLinkedList.toString()``` returns a visual representation of the current state of the linked list

    Head --> (Hello) --> (World) --> null
- ### insertAt(index, value)
```myLinkedList.insertAt(1, 'How are you')``` inserts `How are you` at index position 1 and  returns `undefined`. Adds item to the end of the list for invalid indexes
- ### removeAt(index)
```myLinkedList.removeAt(2)``` removes the item at index of 2 and returns it _// World_
Retuns `undefined` if out-of-index
- ### pop
```myLinkedList.pop()``` removes the last item from the list and returns it _// World_
- ### shift
```myLinkedList.shift()``` removes the first items from the list and returns it _// How are you_

