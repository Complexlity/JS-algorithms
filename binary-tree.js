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

}



let newTree = new BinaryTree()
newTree.insert(20)
newTree.insert(1)
newTree.insert(22)
newTree.insert(21)
newTree.insert(37)
newTree.insert(5)
newTree.prettyPrint()
// newTree.prettyPrint()
