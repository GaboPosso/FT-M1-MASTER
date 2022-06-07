// Constructors of Node and LinkedList 
class Node { // Create Node, each node has it's data and the next node's reference
    constructor(data, next){
        this.data = data;
        this.next= next;
    }
}

class LinkedList {
    constructor() { //LinkedList's constructor doesn't get any parameters, but it has two properties
        this.head = null; //Head it's the initial value of the list, inits on Null because this list is created with no value inside
        this.size = 0; //Size of the list, '0' because it's initiated in empty state.
    }
    //Now let's make an add function to add data to be saved in the list
    add(data) { // function add gets data to be added to the list as a parameter
        const newNode = new Node(data, null); //Create a new variable type Node, gets data and next as null as parameters
        if (!this.head) { // If head of the previous Node is null then the new Node will be the new Head of the list.
            this.head = newNode; 
        } else {//On the other hand, if head is not null we should iterate through all nodes until we find an empty reference of the next Node
            let current = this.head; //New Variable to register the new Head value.
            while (current.next) { //While current Head has next Node's reference, meant to be next node's data is not empty.                current = current.next;
                current = current.next; //Updates current Node until there's no next node's reference. It means that we move in the Linked list til we meet an empty reference;

            }
            current.next = newNode; //When we encounter an empty reference, then the last Node will be a reference to the new Node.
        }
        this.size++ // Finally, we add size to the Linked List
    }
}

const testNode = new Node('test', null)
console.log(testNode);
const linkedList = new LinkedList();
console.log(linkedList); 
linkedList.add(10);
console.log(linkedList);
linkedList.add(99);
console.log(linkedList);
linkedList.add(37);
console.log(linkedList);