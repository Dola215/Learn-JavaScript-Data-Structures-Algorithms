// create Node Class
class Node {
  /***
   {
      value: any value
      pointer: to next node or null if the end
   }
   */
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  /** Big O
   * push --> add a node in the end of LL -->  O(1)
   * pop --> remove the last node of LL --> O(n)
   * unshift --> add a node in the beginning of LL --> O(1)
   * shift --> remove the fisrt node of LL --> O(1)
   * insert --> add a node in the LL --> O(n)
   * remove --> reome a node form the LL --> O(n)
   * find --> find a node with id or value in LL --> O(n)
   * debending on this big O it is better to use LL if the programm will most use unshift & shift
   */
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  gethead() {
    return this.head;
  }
  getTail() {
    return this.tail;
  }
  getLength() {
    return this.length;
  }
  makeEmpty() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  printList() {
    /**
     * loop over the LL and print the value of all node
     */
    if (!this.head) {
      return `There isn't Nodes to get!`;
    }
    let str = '';
    let temp = this.head;
    while (temp.next) {
      str += temp.value + ' -> ';
      temp = temp.next;
    }
    return str;
  }

  // Dealing with the end of LL
  push(value = 0) {
    /** Add a new node to the end of LL
     * - check if there are nodes in LL or not
     *  -- if no --> make the head & tail = newNode
     *  -- if there are one or more nodes
     *    -- make the tail.next = newNode
     *    -- make the tail = newNode
     *  -- increment the length by one
     * -- return the new LL
     */
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }
  pop() {
    /** Delete the last node of LL
     * - check if there are nodes in LL or not
     *  -- if no --> threw an error and end the programm
     *  -- if yes
     *    -- if there 1 node
     *     -- head & taill = null
     *    -- if there two or more
     *     -- make the tail to null
     *     -- make the node befor the last to be the tail
     *  -- decrement the length by one
     *  -- return the old tail
     */
    if (!this.head) {
      throw new Error('Invaild Operation');
    }
    let temp = this.head,
      prev = this.head;
    while (temp.next) {
      prev = temp;
      temp = temp.next;
    }

    this.tail = prev;
    this.tail.next = null;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    }

    this.length--;
    return this;
  }

  // Dealing with the beginning of LL
  unshift(value) {
    /** add new node to the first of LL
     * - crate new node
     *  - check if there are nodes in LL or not
     *    -- if no --> make the head & tail = newNode
     *    -- if there are one or more nodes
     *      -- make the newNode.next = to the head
     *      -- make the head = newNode
     *  - increament the length by 1
     *  - return the new LL
     */

    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }
  shift() {
    /** Delet the first node of the LL
     *  - if there aren't any nodes make head & tail = null
     *  - if there are more than 1 node
     *    --  head.next = null
     *    --  head = head.next
     *  - decrement the length by 1
     *  - return the new LL
     */
    if (!this.head) {
      throw new Error('Invaild Operation');
    }
    let temp = this.head.next;
    this.head.next = null;
    this.head = temp;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    }
    this.length--;
    return this;
  }

  // Dealing with different indexes of LL
  get(index) {
    if (!this.head) throw new Error('Invaild Task');
    if (index < 0 || index >= this.length) throw new Error('Invaild Task');
    if (this.length === 1) return this.head;

    let temp = this.head;
    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }
    return temp;
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
    /**
     * - new node
     * - if the index = 0 use unshift
     * - if the index = length use pop
     * - the node in this index
     */
    if (index === 0) return this.unshift(value);
    if (index === this.length) return this.push(value);
    if (index < 0 || index > this.length) throw new Error('Invaild Operation');

    const newNode = new Node(value);
    const temp = this.get(index - 1);

    newNode.next = temp.next;
    temp.next = newNode;

    this.length++;
    return this;
  }
  remove(index) {
    if (index === 0) return this.shift();
    if (index === this.length) return this.pop();
    if (index < 0 || index > this.length) throw new Error('Invaild Operation');

    const prev = this.get(index - 1);
    const temp = this.get(index);

    prev.next = temp.next;
    temp.next = null;
    this.length--;
    return this;
  }
  reverse() {
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;

    let prev = null,
      next = null;
    for (let i = 0; i < this.length; i++) {
      next = temp.next;
      temp.next = prev;
      prev = temp;
      temp = next;
    }
    return this;
  }
}

const ll = new LinkedList();
console.log(ll);
ll.push(1);
ll.push(2);
ll.push(3);
ll.push(4);
console.log(ll);
