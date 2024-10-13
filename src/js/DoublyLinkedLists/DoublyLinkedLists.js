console.log('#================#');
console.log('Doubly Linked List');
console.log('#================#');
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  /** Big O
   * push --> add a node in the end of LL -->  O(1)
   * pop --> remove the last node of LL --> O(1)
   * unshift --> add a node in the beginning of LL --> O(1)
   * shift --> remove the fisrt node of LL --> O(1)
   * insert --> add a node in the LL --> O(n)
   * remove --> reome a node form the LL --> O(n)
   * find --> find a node with id or value in LL --> O(n)
   * debending on this big O it is better to use LL if the programm will most use unshift & shift
   */
  constructor() {
    this.lenght = 0;
    this.head = null;
    this.tail = null;
  }

  push(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.lenght++;
    return this;
  }
  pop() {
    if (!this.head) {
      throw new Error('Invaild Operation');
    } else if (this.lenght >= 2) {
      this.tail = this.tail.prev;
      this.tail.next = null;
    } else {
      this.head = null;
      this.tail = null;
    }
    this.lenght--;
    console.log(temp);
    return this;
  }

  unshift(value) {
    const newNode = new Node(value);
    if (this.lenght === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }

    this.lenght++;
    return this;
  }
  shift() {
    if (!this.head) {
      throw new Error('Invaild Operation');
    } else if (this.lenght === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let temp = this.head;
      this.head = this.head.next;
      this.head.prev = null;
      temp.next = null;
    }

    this.lenght--;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.lenght) throw new Error('Invaild Operation');

    let node = null;
    if (index < this.lenght / 2) {
      node = this.head;
      for (let i = 0; i < index; i++) node = node.next;
    } else {
      node = this.tail;
      for (let i = this.lenght - 1; i > index; i--) node = node.prev;
    }

    return node;
  }
  set(index, value) {
    let node = this.get(index);
    if (node) {
      node.value = value;
      return true;
    }
    return false;
  }
  insert(index, value) {
    const newNode = new Node(value);
    if (index === 0 || !this.head) return this.unshift(value);
    if (index === this.lenght) return this.push(value);

    let wantedNode = this.get(index);
    let pervNode = wantedNode.prev;

    if (wantedNode) {
      newNode.next = wantedNode;
      newNode.prev = wantedNode.prev;
      pervNode.next = newNode;
      wantedNode.prev = newNode;
    }
    return this;
  }
  remove(index) {
    if (index === 0) return this.shift();
    if (index === this.lenght) return this.pop();

    let node = this.get(index);

    let prevNode = node.prev;
    let nextNode = node.next;
    prevNode.next = nextNode;
    nextNode.prev = prevNode;
    this.lenght--;
    return this;
  }
}
const dll = new DoublyLinkedList();
console.log(dll);
dll.insert(0, 2);
dll.insert(0, 1);
dll.push(3);
dll.push(4);
dll.push(5);
console.log(dll);
dll.remove(1);
console.log(dll);
