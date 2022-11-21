class Node{
    constructor(data=null, next=null){
        this.data = data
        this.next = next
    }
}


class LinkedList {
    #count;
    constructor(head=null){
        this.head = head
        this.#count = 0
    }

    append(value){
        const addedNode = new Node(value)
        if(!this.head) this.head = addedNode
        else{
            let currentNode = this.head
            let parentNode
        while(currentNode){
            parentNode = currentNode
            currentNode = parentNode.next
        }
        parentNode.next = addedNode
    }

    }

    prepend(value){
        const addedNode = new Node(value)
        addedNode.next = this.head
        this.head = addedNode
        this.#count++
    }

    size(){return this.#count}

    headNode(){ return this.head}
    
    tailNode(){ return this.#findNull(this.head)}

    atIndex(index, value = this.head){
        if (value == null || typeof index !== 'number') return null
        else if(index == 0) return value
        else{
            index -= 1
            return this.atIndex(index, value.next)
        }
    }

    pop(){
        if(!this.head) return
        const penultimateNode = this.#findPenultimate(this.head)
        const lastNode = penultimateNode.next
        penultimateNode.next = null
        this.#count--
        return lastNode.data
    }

    shift(){
        if(this.head == null) return
        const shifted = this.head
        this.head = shifted.next
        this.#count--
        return shifted.data
    }

        contains(value){
        let node = this.head
        while (node){
            if(value === node.data){
                return true
            }
            node = node.next
        }
        return false
    }
    

    find(value){
        let node = this.head
        let index = 0
        while (node){
            if(value === node.data){
                return index
            }
            node = node.next
            index++
        }
        return null
    }
    

    toString(string='Head --> '){
        let node=this.head
        while(node){
            string += `(${node.data}) --> `
            node = node.next
        }
        string += 'null'
        return string
    }
    
    insertAt(index, value){
        const firstNode=this.head
        const insertedNode = new Node(value)
        if(index === 0 || firstNode === null){
            this.prepend(value)
        }
        else if (this.atIndex(index) === null){
            this.append(value)
        }
        else{
            const previousNode = this.atIndex(index-1)
            const currentNode = this.atIndex(index)
            insertedNode.next = currentNode
            previousNode.next = insertedNode
        }
        this.#count++
    }

    removeAt(index){
        if (index == 0) return this.shift()
        else if (index >= this.#count || index < 0) return
        else {
            const previousNode = this.atIndex(index-1)
            const currentNode = previousNode.next
            previousNode.next = currentNode.next
            return currentNode.data
        }
        
    }

// Utitlity Functions
    #findNull(value){
        if(value.next == null) return value
        else {
            return this.#findNull(value.next)
        }
    }

    #findPenultimate(value){
        if (value.next.next == null) return value
        else return this.#findPenultimate(value.next)
    }
}

const myList = new LinkedList()
myList.append('World')

myList.prepend('Hello')
console.log(myList.toString())
myList.insertAt(1, 'to the')
console.log(myList.toString())
console.log(myList.contains('to the'))
console.log(myList.find('dlfj'))
