/*
BINARY SEARCH TREES

Abstract data type
A binary search tree is a tree with the additional constraints:
- each node has only two child nodes (node.left and node.right)
- all the values in the left subtree of a node are less than or equal to the value of the node
- all the values in the right subtree of a node are greater than the value of the node

*** Operations:

bsTree.insert(value)
=> bsTree (return for chaining purposes)
Insert value into correct position within tree

bsTree.contains(value)
=> true/false
Return true if value is in tree, false if not

bsTree.traverseDepthFirst_inOrder(callback)
=> undefined
Invoke the callback for every node in a depth-first in-order (visit left branch, then current node, than right branch)
Note: In-Order traversal is most common type for binary trees. For binary search tree, this visits the nodes in ascending order (hence the name).

bsTree.traverseDepthFirst_preOrder(callback)
=> undefined
Invoke the callback for every node in a depth-first pre-order (visits current node before its child nodes)

bsTree.traverseDepthFirst_postOrder(callback)
=> undefined
Invoke the callback for every node in a depth-first post-order (visit the current node after its child nodes)

bsTree.isValid()
=> returns true if BST is a valid BST otherwise returns false. This method is useful for checking your other methods.

bsTree.removeNode(value)
=> node
Remove node from tree.

bsTree.checkIfFull()
=> true/false
A binary tree is full if every node has either zero or two children (no nodes have only one child)

bsTree.checkIfBalanced()
=> true/false
For this exercise, let's say that a tree is balanced if the minimum height and the maximum height differ by no more than 1. The height for a branch is the number of levels below the root.


*** Additional Exercises:
A binary search tree was created by iterating over an array and inserting each element into the tree. Given a binary search tree with no duplicates, how many different arrays would result in the creation of this tree.

*/

function BinarySearchTree (value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BinarySearchTree.prototype.insert = function(value) {
  // implement me...
  // check if the value is greater than the root
    // if it is then move right and if right is null then insert
  if(this.value < value) {
    if(!this.right) {
        const newTree = new BinarySearchTree(value)
       this.right = newTree
       return this
      //  return newTree
    }else{
        return this.right.insert(value)
    }
  }else {
    if(!this.left) {
      const newTree = new BinarySearchTree(value)
      this.left = newTree
      return this
      // return newTree
    }
    else {
      return this.left.insert(value)
    }
  }

};
// Time complexity:

BinarySearchTree.prototype.contains = function(value) {
  // implement me...
  if(this.value === value) return true;
    if(this.value < value && this.right) {
      return this.right.contains(value)
    }else if(this.value > value && this.left) {
      return this.left.contains(value)
    }
  return false
};
// Time complexity:

BinarySearchTree.prototype.traverseDepthFirst_inOrder = function(fn) {
  // implement me...
  if(this.left) {
    this.left.traverseDepthFirst_inOrder(fn)
  }
  fn(this.value)
  if(this.right) {
    this.right.traverseDepthFirst_inOrder(fn)
  }
  return
};
// Time complexity:

BinarySearchTree.prototype.traverseDepthFirst_preOrder = function(fn) {
  // implement me...
  fn(this.value)
  if(this.left) {
    this.left.traverseDepthFirst_preOrder(fn)
  }
  if(this.right) {
    this.right.traverseDepthFirst_preOrder(fn)
  }
  return
};
// Time complexity:

BinarySearchTree.prototype.traverseDepthFirst_postOrder = function(fn) {
  // implement me...
  if(this.left) {
    this.left.traverseDepthFirst_postOrder(fn)
  }
  if(this.right) {
    this.right.traverseDepthFirst_postOrder(fn)
  }
  fn(this.value)
  return
};
// Time complexity:

BinarySearchTree.prototype.minDelete = function() {
  let parentNode = this;
  if(!this.left && this.right) {
    this.value = this.right.value
    const right = this.right
    this.right = right.right ? right.right : null
    this.left = right.left ? right.left : null
    return
  }
  
  if(this.left && this.left.left) {
      return this.left.minDelete()
  }
  if(this.left && !!this.left.right) {
    this.left = this.left.right
    return
  }
  console.log(this.left, parentNode)
  this.left = null
  // console.log(this.left, parentNode)
  return 
};

BinarySearchTree.prototype.deleteNode = function(value) {
  if(this.value === value) {
    if(!!this.left && !!this.right) {
      // traverse through the right and get the minimun
      let minNode = this.right.left;
      while(minNode.left) {
        minNode = minNode.left
      }
      this.value = minNode.value
      return
    } else if(!!this.left && !!this.left.right) {
        this.value = this.left.right.value
        return
    }else if(!!this.right && !!this.right.left) {
      this.value = this.right.left.value
      return
    }else if(!!this.left) {
      this.value = this.left.value
    }else if(!!this.right) {
      this.value = this.right.value
    }
  }else {
    if(this.value > value) {
      return this.left.deleteNode(value)
    } else if(this.value < value) {
      return this.right.deleteNode(value)
    }
  }
  console.log('not found')
  return
}


BinarySearchTree.prototype.checkIfFull = function() {
  // implement me...
};
// Time complexity:

BinarySearchTree.prototype.checkIfBalanced = function() {
  // implement me...
};
// Time complexity:


const tree1 = new BinarySearchTree(10)
tree1.insert(5)
tree1.insert(2)
tree1.insert(20)
tree1.insert(12)
// tree1.insert(10)
tree1.insert(4)
tree1.insert(1)

// console.log(tree1)
// console.log(tree1.contains(12))
console.log(tree1.traverseDepthFirst_inOrder(console.log))
// console.log(tree1.traverseDepthFirst_preOrder(console.log))
// console.log(tree1.traverseDepthFirst_postOrder(console.log))

console.log(tree1.minDelete(),tree1.minDelete(),tree1.minDelete(), tree1.minDelete(), tree1.minDelete(),tree1.minDelete(),
tree1.minDelete(), tree1.minDelete(), tree1.minDelete(), tree1.minDelete(), tree1.minDelete()
)

