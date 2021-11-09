//! 108. Convert Sorted Array to Binary Search Tree
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  return traverse(nums, 0, nums.length - 1);
};

function traverse(nums, start, end) {
  if (start > end) {
    return null;
  }

  let mid = Math.floor((start + end) / 2);
  let root = new TreeNode(nums[mid]);
  root.left = traverse(nums, start, mid - 1);
  root.right = traverse(nums, mid + 1, end);
  return root;
}

//! 109. Convert Sorted List to Binary Search Tree

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function (head) {
  let nums = [];
  let currentListNode = head;
  while (currentListNode) {
    nums.push(currentListNode.val);
    currentListNode = currentListNode.next;
  }

  const sortedListToBSTHelper = (nums, start, end) => {
    if (start > end) return null;

    let mid = Math.floor((start + end) / 2);
    let root = new TreeNode(nums[mid]);
    root.left = sortedListToBSTHelper(nums, start, mid - 1);
    root.right = sortedListToBSTHelper(nums, mid + 1, end);
    return root;
  };

  return sortedListToBSTHelper(nums, 0, nums.length - 1);
};

//! 653. Two Sum IV - Input is a BST
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */

const inOrderTraverse = (node, cb) => {
  if (node !== null) {
    inOrderTraverse(node.left, cb);
    cb(node.val);
    inOrderTraverse(node.right, cb);
  }
};

var findTarget = function (root, k) {
  /**
   * Definition for a binary tree node.
   * function TreeNode(val, left, right) {
   *     this.val = (val===undefined ? 0 : val)
   *     this.left = (left===undefined ? null : left)
   *     this.right = (right===undefined ? null : right)
   * }
   */
  /**
   * @param {TreeNode} root
   * @param {number} k
   * @return {boolean}
   */

  var findTarget = function (root, k) {
    // const queue = [root];
    const map = {};

    //     while (queue.length) {
    //       const node = queue.shift();
    //       if ((map[k - node.val]) !== undefined) {
    //         return true
    //       }
    //       map[node.val] = k - node.val;

    //           console.log(map)
    //         console.log(map[k - node.val])
    //       if (node.left) {
    //         queue.push(node.left);
    //       }

    //       if (node.right) {
    //         queue.push(node.right)
    //       }
    //     }

    const preOrderTraverse = (node) => {
      if (node !== null) {
        if (map[k - node.val] !== undefined) {
          res = true;
        }
        map[node.val] = k - node.val;
        preOrderTraverse(node.left);
        preOrderTraverse(node.right);
      }
    };

    let res = false;
    preOrderTraverse(root);
    return res;
  };
};

//! 783. Minimum Distance Between BST Nodes
//! 530. Minimum Absolute Difference in BST
var getMinimumDifference = function (root) {
  let prev = null;
  let min = Infinity;
  function inOrderTraverse(node) {
    if (node !== null) {
      inOrderTraverse(node.left);
      if (prev === null) {
        prev = node.val;
      } else {
        min = Math.min(min, node.val - prev);
        prev = node.val;
      }
      inOrderTraverse(node.right);
    }
  }

  inOrderTraverse(root);
  return min;

  // const nodes = [];

  // function inOrderTraverse(node) {
  //   if (node !== null) {
  //     inOrderTraverse(node.left);
  //     nodes.push(node.val);
  //     inOrderTraverse(node.right);
  //   }
  // }

  // inOrderTraverse(root);
  // let min = Infinity;
  // for (let i = 1; i < nodes.length; i++) {
  //   min = Math.min(min, nodes[i] - nodes[i - 1]);
  // }
  // return min;
};

//! 897. Increasing Order Search Tree
var increasingBST1 = function (root) {
  const nodesValues = [];
  function inOrder(node) {
    if (node !== null) {
      inOrder(node.left);
      nodesValues.push(node.val);
      inOrder(node.right);
    }
  }
  inOrder(root);
  let newTree = new TreeNode(nodesValues[0]);
  let tmpTree = newTree;

  for (let i = 1; i < nodesValues.length; i++) {
    tmpTree.right = new TreeNode(nodesValues[i]);
    tmpTree = tmpTree.right;
  }

  return newTree;
};

var increasingBST2 = function (root) {
  let newTree = new TreeNode(-1);
  let tmpTree = newTree;
  function inOrder(node) {
    if (node !== null) {
      inOrder(node.left);
      tmpTree.right = new TreeNode(node.val);
      tmpTree = tmpTree.right;
      inOrder(node.right);
    }
  }
  inOrder(root);
  return newTree.right;
};

//! 101. Symmetric Tree
var isSymmetric = function (root) {
  let res = true;

  function isMirror(node1, node2) {
    if (!node1 && !node2) {
      return;
    }
    if (!node1 || !node2 || node1.val !== node2.val) {
      res = false;
      return;
    }

    isMirror(node1.left, node2.right);
    isMirror(node1.right, node2.left);
  }

  isMirror(root, root);
  return res;
};

//! 104. Maximum Depth of Binary Tree

var maxDepth = function (root) {
  const helper = (node) => {
    if (node) {
      return 1 + Math.max(helper(node.left), helper(node.right));
    }
    return 0;
  };

  return helper(root);
};

//! 94. Binary Tree Inorder Traversal

var inorderTraversal = function (root) {
  const values = [];
  function inOrder(node) {
    if (node) {
      inOrder(node.left);
      values.push(node.val);
      inOrder(node.right);
    }
  }

  inOrder(root);
  return values;
};

//! 100. Same Tree
var isSameTree = function (p, q) {
  if (!p && !q) {
    return true;
  }

  if (!p || !q || p.val !== q.val) {
    return false;
  }

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

//! 110. Balanced Binary Tree
var isBalanced = function (root) {
  if (!root) {
    return true;
  }

  const height = (node) => {
    if (node) {
      return 1 + Math.max(height(node.left), height(node.right));
    }
    return 0;
  };
  let heightLeftSub = height(root.left);
  let heightRightSub = height(root.right);

  if (Math.abs(heightLeftSub - heightRightSub) > 1) return false;

  return isBalanced(root.left) && isBalanced(root.right);
};
