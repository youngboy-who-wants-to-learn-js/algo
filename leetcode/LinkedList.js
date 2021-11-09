//! 234. Palindrome Linked List
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  //? my
  // let slow = head,
  //   fast = head;
  // while (fast && fast.next) {
  //   slow = slow.next;
  //   fast = fast.next.next;
  // }
  // let middle = slow;
  // let prev = null;
  // let current = head;
  // while (current !== middle) {
  //   let next = current.next;
  //   current.next = prev;
  //   prev = current;
  //   current = next;
  // }
  // if (fast) {
  //   middle = middle.next;
  // }
  // while (prev && middle) {
  //   if (prev.val !== middle.val) {
  //     return false;
  //   }
  //   prev = prev.next;
  //   middle = middle.next;
  // }
  // return true;
};

//! 876. Middle of the Linked List
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  let slow = (fast = head);
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
};

//! 160. Intersection of Two Linked Lists
/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  //     let set = new Set()
  //     let currentA = headA
  //     let currentB = headB

  //     while (currentA) {
  //         set.add(currentA);
  //         currentA = currentA.next
  //     }

  //     while (currentB) {
  //         if (set.has(currentB)) {
  //             return currentB
  //     }
  //         currentB = currentB.next
  //     }

  //     return null;

  let currentA = headA;
  let currentB = headB;

  while (currentA != currentB) {
    if (currentA === null) {
      currentA = headB;
    } else {
      currentA = currentA.next;
    }

    if (currentB === null) {
      currentB = headA;
    } else {
      currentB = currentB.next;
    }
  }
  return currentA;
};

//! 206. Reverse Linked List
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let prev = null;
  let current = head;

  while (current) {
    let next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
};

//! 237. Delete Node in a Linked List
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/*
  @param {ListNode} node
  @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function (node) {
  node.val = node.next.val;
  node.next = node.next.next;
};

//! 203. Remove Linked List Elements
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  let result = new ListNode(-1);
  result.next = head;

  let current = result;
  while (current.next) {
    if (current.next.val === val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }

  return result.next;
  //     if (!head) {
  //         return head
  //     }

  //     while (head && head.val === val) {
  //         head = head.next;
  //     }

  //     let current = head;

  //     while (current.next) {
  //         if (current.next.val === val) {
  //             current.next = current.next.next
  //         } else {
  //             current = current.next
  //         }
  //     }

  //     return head
};

//! 141. Linked List Cycle
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  if (!head) {
    return false;
  }

  let slow = (fast = head);
  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow == fast) return true;
  }
  return false;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  let current = head;
  let nextElForSwap = current.next.next;
  //  let dummy = new ListNode(-1);

  //  while (current && current.next) {
  //      let next = current.next;
  //      let tmp = next
  //      next = current
  //      next.next = nextElForSwap

  //      tmp.next = next;
  //      console.log('tmp:', tmp.val);
  //      // console.log('head:', head);
  //      console.log('current:', current.val);
  //      console.log('next:', next.val)

  //      current = current.next
  //      nextElForSwap = nextElForSwap?.next?.next
  //   }

  // return newLinkedList

  let dummy = new ListNode(-1);
  dummy.next = head;
  let res = dummy;

  while (dummy.next && dummy.next.next) {
    let p = dummy.next;
    let q = dummy.next.next;

    dummy.next = q;
    p.next = q.next;
    q.next = p;
    dummy = p;
  }

  return res.next;
};

/**
 * Initialize your data structure here.
 */

var ListNode = function (val = 0, next = null) {
  this.val = val;
  this.next = next;
};

var MyLinkedList = function () {
  this.head = null;
  this.tail = null;
  this.length = null;
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1.
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  if (!this.head) {
    return -1;
  }
  let current = this.head;
  let i = 0;
  while (i <= index && current) {
    if (index === i) {
      return current.val;
    }

    i++;
    current = current.next;
  }

  return -1;
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  const node = new ListNode(val, this.head);

  this.head = node;
  if (!this.head || !this.tail) {
    this.tail = node;
    this.head = node;
  }

  this.length++;
};

/**
 * Append a node of value val to the last element of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  let node = new ListNode(val);

  if (!this.head || !this.tail) {
    this.head = node;
    this.tail = node;
  }

  this.tail.next = node;
  this.tail = node;
  this.length++;
};

MyLinkedList.prototype.toArray = function () {
  const output = [];
  let current = this.head;

  while (current) {
    output.push(current.val);

    current = current.next;
  }

  return output;
};
/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted.
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index === 0) {
    this.addAtHead(val);
    return;
  }

  if (index === this.length) {
    this.addAtTail(val);
    return;
  }

  let current = this.head;
  let i = 0;
  while (i < this.length) {
    if (i + 1 === index) {
      current.next = new ListNode(val, current.next);
      this.length++;
      return;
    }

    i++;
    current = current.next;
  }

  return null;
};

/**
 * Delete the index-th node in the linked list, if the index is valid.
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index > this.length - 1) return;

  if (index === 0) {
    this.head = this.head.next;
    if (this.length === 1) {
      this.tail = null;
    }
    this.length--;
    return;
  }

  let current = this.head;
  let i = 0;

  while (i < this.length) {
    if (i + 1 === index) {
      console.log(current);
      current.next = current.next.next;

      if (index === this.length - 1) {
        this.tail = current;
      }

      this.length--;
      return;
    }
    current = current.next;
    i++;
  }
};

/**
 * Your MyLinkedList object will be instantiated and called as such:

 */

let list = new MyLinkedList();

class Node {
  constructor(val = null, prev = null, next = null) {
    this.val = val;
    this.next = next;
    this.prev = prev;
  }
}

class MLnkdLst {
  constructor() {
    this.head = new Node();
    this.tail = new Node();
    this.length = 0;
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  get(idx) {
    if (idx < 0 || idx >= this.length) {
      return -1;
    }

    let curNode = this.head.next;

    while (idx--) curNode = curNode.next;

    return curNode.val;
  }

  addAtHead(val) {
    let prev = this.head;
    let next = this.head.next;

    let node = new Node(val, prev, next);

    prev.next = node;
    next.prev = node;

    this.length++;
  }

  addAtTail(val) {
    let prev = this.tail.prev;
    let next = this.tail;

    let node = new Node(val, prev, next);

    prev.next = node;
    next.prev = node;

    this.length++;
  }

  addAtIndex(idx, val) {
    if (idx < 0 || idx > this.length) {
      return null;
    }

    if (idx === this.length) {
      this.addAtTail(val);
      return;
    }

    let prev = this.head;

    while (idx--) prev = prev.next;

    let next = prev.next.next;

    let node = new Node(val, prev, next);

    prev.next = node;
    next.prev = node;

    this.length++;
  }

  deleteAtIndex(idx) {
    if (idx < 0 || idx >= this.length) {
      return null;
    }

    let prev = this.head;

    while (idx--) prev = prev.next;

    let next = prev.next.next;

    prev.next = next;
    next.prev = prev;

    this.legth--;
  }
}



//! 1669. Merge In Between Linked Lists
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function (list1, a, b, list2) {
  let current1 = list1;
  let current2 = list2;
  let dummy = new ListNode(-1);
  let res = dummy;

  while (a--) {
    res.next = current1;

    res = res.next;
    current1 = current1.next;
  }

  // while (a--) current1 = current1.next;
  // console.log('current1', current1)
  // while (current2) {
  //   current1.next = current2;

  //   current1 = current1.next;
  //   current2 = current2.next;
  // }

  return dummy.next;
};
// let res = mergeInBetween(list1.head, 3, 4, list2.head);
// console.log(res.next.next.next);

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function (head) {
  //     let current = head;
  //     let result = [];
  //     while (current) {
  //      result.push(current.val);

  //      current = current.next;
  //     }

  //     return parseInt(result.join(''), 2);

  let current = head;
  let num = 0;

  while (current) {
    num = num * 2 + current.val;

    current = current.next;
  }

  return num;
};

//! 82. Remove Duplicates from Sorted List II
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  //   let current = head;
  //   let dummyNode = new ListNode(-1);
  //   let result = dummyNode;
  //   let prevValue = null;

  //   while (current) {
  //     let curVal = current.val;

  //     if (
  //       !(
  //         current.val === (current.next && current.next.val) ||
  //         current.val === prevValue
  //       )
  //     ) {
  //       result.next = new ListNode(current.val);
  //       result = result.next;
  //     }

  //     prevValue = curVal;
  //     current = current.next;
  //   }

  //   return dummyNode.next;

  let dummy = new ListNode(-1, head);
  let prev = dummy;

  while (head) {
    if (head.next && head.val === head.next.val) {
      //skip the nodes whose values are equel to head.
      while (head.next && head.val === head.next.val) {
        head = head.next;
      }
      prev.next = head.next;
    } else {
      prev = prev.next;
    }
    head = head.next;
  }

  return dummy.next;
};

//! 23. Merge k Sorted Lists
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    let res = [];
    for (let i = 0; i < lists.length; i++) {
        let head = lists[i];
        while (head) {
            res.push(head.val);
            head = head.next;
        }
    }
    
    res.sort((a, b) => a - b);
    let dummy = new ListNode(-1);
    let result = dummy;
    for (let elem of res) {
        result.next = new ListNode(elem);
        result = result.next;
    }
    
    return dummy.next;
};

//! 21. Merge Two Sorted Lists
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
//     if (!l1) return l2;
//     if (!l2) return l1;
//     if (!l1 && !l2) return l1;
    
//     let dummy = new ListNode(-1);
//     let res = dummy;
    
//     while (l1 && l2) {
//         if (l1.val > l2.val) {
//            res.next = new ListNode(l2.val)
//            l2 = l2.next;
//            res = res.next;
//         } else if (l2.val > l1.val) {
//            res.next = new ListNode(l1.val)
//            l1 = l1.next;
//            res = res.next;
//         } else {
//            res.next = new ListNode(l2.val)
//            l2 = l2.next;
//            res = res.next;
//            res.next = new ListNode(l1.val)
//            l1 = l1.next;
//            res = res.next;
//         }
//     }
    
//     if (l2) {
//         res.next = l2
//     }
    
//     if (l1) {
//         res.next = l1
//     }
    
    
//     return dummy.next;
    
  let merged = new ListNode(0);
  let result = merged;
    
   while (l1 && l2) {
        if (l1.val < l2.val) {
            result.next = new ListNode(l1.val)
            l1 = l1.next;
        } else {
            result.next = new ListNode(l2.val);
            l2 = l2.next
        }
       
       result = result.next;
   }
    
   while (l1) {
       result.next = new ListNode(l1.val)
       l1 = l1.next
       result = result.next;
   } 
    
     while (l2) {
       result.next = new ListNode(l2.val)
        l2 = l2.next;
       result = result.next;
   } 
   
   return merged.next; 
};

//! 1669. Merge In Between Linked Lists
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function(list1, a, b, list2) {
    let dummy = new ListNode(-1);
    let result = dummy;
    let tmpA = a;
    
    while (a--) {
        result.next = new ListNode(list1.val);
        list1 = list1.next;
        result = result.next;
    }
    
    while (list2) {
        result.next = new ListNode(list2.val)
        list2 = list2.next;
        result = result.next;
    }
    
    let i = b - tmpA + 1;
    
    while (i--) list1 = list1.next
    result.next = list1;
    
    return dummy.next;
};

//! 2. Add Two Numbers
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addStrings1 = function (num1, num2) {
  let result = [];
  let i = num1.length - 1;
  let j = num2.length - 1;
  let carry = 0;
  while (i >= 0 || j >= 0) {
    let sum = carry;
    if (i >= 0) {
      sum += num1.charAt(i--) - "0";
    }

    if (j >= 0) {
      sum += num2.charAt(j--) - "0";
    }

    result.push(Math.floor(sum % 10));
    carry = Math.floor(sum / 10);
  }

  if (carry != 0) {
    result.push(carry);
  }

  return result.reverse().join("");
};
var addTwoNumbers = function(l1, l2) {
      let sum1 = "";
    let sum2 = "";
    
    let cur1 = l1;
    let cur2 = l2;
    
    while (cur1) {
        sum1 += cur1.val.toString();
        cur1 = cur1.next;
    }
    
    while (cur2) {
        sum2 += cur2.val.toString();
        cur2 = cur2.next;
    }

    let reverseSum = addStrings1([...sum1].reverse().join(''), [...sum2].reverse().join(''))

    let newList = new ListNode(-1);
    let result = newList
    for (let i = reverseSum.length - 1; i >= 0; i--) {
        result.next = new ListNode(reverseSum[i]);
        result = result.next
    }

    return newList.next
};