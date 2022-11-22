class Node{
    constructor(data){
        this.data = data
        this.left = null 
        this.right = null
    }
}

class BinaryTree{
    constructor(){
        this.root = null
    }

    insert(data){
        let node = this.root
        if (node === null) {
            this.root = new Node(data);
            return 
        }
        else {
            this.#searchTree(node, data)
            return
        }
    }

    delete(data){
        this.root = this.#removeNode(this.root, data)
    }

    find(data){
        let currentNode = this.root
        while(currentNode){
            if(data == currentNode.data) return currentNode
            if (data > currentNode.data) currentNode = currentNode.right
            else currentNode = currentNode.left
        }
        return null
    }

    contains(data){
        let currentNode = this.root
        while(currentNode){
            if(data == currentNode.data) return true
            if (data > currentNode.data) currentNode = currentNode.right
            else currentNode = currentNode.left
        }
        return false
    }


    levelOrder() {
        // checks if the tree is null
        if (!this.root) return;

        this.queue = [];
        // Inserts the very first (root) node into the queue
        this.queue.push(this.root);
        this.output = [];
        while (this.queue.length) {

            // Takes the very first item of the queue
            const node = this.queue.shift();
          
            // Add all the children (right or left or both) of the node to the queue
            if (node.left) {  
             this.queue.push(node.left);
          }
          if (node.right) {
             this.queue.push(node.right);
          }

          // Adds the data of the node to the array output
          this.output.push(node.data);
        }
        return this.output;
       }

    // Traversal = left --> root --> right
       inOrder() {
        let node = this.root
        let valuesArr = []
        let newArr = inOrderRecursion(node, valuesArr) 
        return newArr
     
        function inOrderRecursion(node, arr){
        if (node == null) {
            return arr
        };
        let leftArray = inOrderRecursion(node.left, arr);
        arr.push(node.data)
        let rightArray = inOrderRecursion(node.right, leftArray);
        return rightArray
    }
}

findheight(data){
let node = this.root
let x = data
function findHeightUtil(node, x)
{
    // Base Case
    if (node == null)
    {
        return -1;
    }
  
    // Store the maximum height of
    // the left and right subtree
    var leftHeight = findHeightUtil(node.left, x);
  
    var rightHeight = findHeightUtil(node.right, x);
  
    // Update height of the current node
    var ans = Math.max(leftHeight, rightHeight) + 1;
  
    // If current node is the required node
    if (node.data == x)
        height = ans;
  
    return ans;
}
}
 
// Traversal = root --> left --> right 
preOrder() {
    let node = this.root
    let valuesArr = []
    let newArr = preOrderRecursion(node, valuesArr) 
    return newArr
 
    function preOrderRecursion(node, arr){
    if (node == null) {
        return arr
    };
    arr.push(node.data)
    let leftArray = preOrderRecursion(node.left, arr);
    let rightArray = preOrderRecursion(node.right, leftArray);
    return rightArray
}
} 

// Traversal = left --> right --> root
postOrder() {
    let node = this.root
    let valuesArr = []
    let newArr = postOrderRecursion(node, valuesArr) 
    return newArr
 
    function postOrderRecursion(node, arr){
    if (node == null) {
        return arr
    };
    let leftArray = postOrderRecursion(node.left, arr);
    let rightArray = postOrderRecursion(node.right, leftArray);
    rightArray.push(node.data)
    return rightArray
}
}



    prettyPrint(node=this.root, prefix = '', isLeft = true) {
        // console.log(node.right)
        if (node.right !== null) {
          this.prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
        }
        console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
        // console.log(node.left)
        if (node.left !== null) {
          this.prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
        }
      }
    
// Utility Functions  
#searchTree(node, data){
    if(data < node.data){
        if(node.left === null){
            node.left = new Node(data)
            return
        }
        else if(node.left !== null){
            return this.#searchTree(node.left, data)
        }
    }
    else if (data > node.data){
        if(node.right === null){
            node.right = new Node(data)
            return
        }
        else if(node.right !== null){
            return this.#searchTree(node.right, data)
        }
    }
}

#removeNode(node,data){

    // Node is last on the list
    if (node == null) return null

    // Data is found
    if (data == node.data){
        // Node has no children
        if(node.left == null && node.right == null) return null

        // Node has only one child
        if (node.left == null) return node.right
        if (node.right == null) return node.left

        //Node has two children
        // Find the smallest data on the right side of the node
        let tempNode = node.right
        while(tempNode.left != null) tempNode = tempNode.left
        node.data = tempNode.data
        node.right = this.#removeNode(node.right, tempNode.data)
        return node
    }

    // Data is on the left side on the tree node
    else if (data < node.data) {
        node.left = this.#removeNode(node.left, data)
        return node
    }
    // Data is on right side of the node
    else {
        node.right = this.#removeNode(node.right, data)
        return node
        }
}

}



let newTree = new BinaryTree()
newTree.insert(25)
newTree.insert(15)
newTree.insert(50)
newTree.insert(10)
newTree.insert(22)
newTree.insert(35)
newTree.insert(70)
newTree.insert(4)
newTree.insert(12)
newTree.insert(18)
newTree.insert(24)
newTree.insert(31)
newTree.insert(44)
newTree.insert(66)
newTree.insert(90)
console.log(newTree.findheight(66))
console.log(newTree.prettyPrint())
// console.log(newTree.levelOrderRecursion())
// console.log(newTree.inOrder())
// console.log(newTree.preOrder())
// console.log(newTree.postOrder())