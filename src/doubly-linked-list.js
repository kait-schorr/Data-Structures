class ListNode {
  /* Do not modify the constructor */
  constructor(value, prev = null, next = null) {
    this.value = value;
    this.prev = prev;
    this.next = next;
  }

  /* Insert the given value as this node's
  `next` node */
  insertAfter(value) {
    let newNode = {
      value: value,
      next: null,
      prev: this
    };

    this.next = newNode;
  }

  /* Insert the given value as the this node's
  `prev` node */
  insertBefore(value) {
    let newNode = {
      value: value,
      next: this,
      prev: null
    };
    this.prev = newNode;
  }

  /* Delete this node */
  delete() {}
}

class DoublyLinkedList {
  /* Do not modify the constructor */
  constructor() {
    this.head = null;
    this.tail = null;
  }

  /* Adds the given value as the new head
  node of the list */
  addToHead(value) {
    let newNode = new ListNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
  }

  /* Remove the list's current head. The list's
  `head` pointer should point to the removed node's
  `next` node */
  removeFromHead() {
    if (!this.head) return null;
    const removedNode = this.head;
    this.head = this.head.next;
    return removedNode.value;
  }

  /* Adds the given value as the new tail
  node of the list */
  addToTail(value) {
    let newNode = new ListNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
  }

  /* Remove the list's current tail. The list's
  `tail` pointer should point to the removed node's
  `prev` node */
  removeFromTail() {
    if (!this.head) return null;
    if (!this.tail.prev) {
      let removedNode = this.tail;
      this.head = null;
      this.tail = null;
      return removedNode.value;
    }
    const removedNode = this.tail;
    this.tail = this.tail.prev;
    return removedNode.value;
  }

  /* Move the given node to the front of the
  list. Update the list's `head` pointer
  accordingly */
  moveToFront(node) {
    if (this.head === this.tail) return;
    let leftNode = node.prev || null;
    let rightNode = node.next || null;
    this.head.prev = node;
    node.next = this.head;
    node.prev = null;
    this.head = node;
    leftNode.next = rightNode;
    if (rightNode) {
      rightNode.prev = leftNode;
    } else {
      this.tail = leftNode;
    }
  }

  /* Move the given node to the back of the
  list. Update the list's `tail` pointer 
  accordingly */
  moveToBack(node) {
    if (this.head === this.tail) return;
    let leftNode = node.prev || null;
    let rightNode = node.next || null;
    node.prev = this.tail;
    this.tail.next = node;
    this.tail = node;
    node.next = null;
    rightNode.prev = leftNode;
    if (leftNode) {
      leftNode.next = rightNode;
    } else {
      this.head = rightNode;
    }
  }

  /* Delete the given node from the list */
  delete(node) {
    node.next.prev = node.prev;
    node.prev.next = node.next;
  }
}

module.exports = DoublyLinkedList;
