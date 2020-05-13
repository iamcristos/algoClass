/*
TREES

Abstract data type

General Tree:
A tree has a root node.
The root node has 0 or more children.
Each child node has 0 or more children.
(each node in the tree can be seen as a subtree)

Constraints:
A child has only one parent and the root node has no parent.
Note: A tree is a special type of graph. A tree is a graph without cycles.

*** Operations:

tree.addChild(value)
=> child node (new tree)
add child to tree/subtree and return child node (which should be a tree instance)

tree.contains(value)
=> true/false
Return true if value is in tree, false if not

tree.traverseDepthFirst(callback)
=> undefined
Invoke the callback for every node in a depth-first order

tree.traverseBreadthFirst(callback)
=> undefined
Invoke the callback for every node in a breadth-first order

*** Additional Exercises:
Given treeA and treeB, check if treeB is a subtree of treeA (meaning that there exists a node n in treeA such that the subtree of n is identical to treeB).

Given a dictionary, create a prefix tree (commonly known as a trie)
https://en.wikipedia.org/wiki/Trie

*/

function Tree (value) {
  // implement me...
  this.value = value;
  this.children = []
}

Tree.prototype.addChild = function(value) {
  // implement me...
  const newTree = new Tree(value);
  this.children.push(newTree);
  return newTree;
};
// Time complexity:


Tree.prototype.contains = function(value) {
  // implement me...

  if(this.value === value) return true
  // while(this.children.length) {
    const currentTree = this.children.pop()
    if(currentTree.value === value) return true
    if(currentTree.children.length) {
      return currentTree.contains(value)
    }
  // }
  return false
};
// Time complexity:


Tree.prototype.traverseDepthFirst = function(fn) {
  // implement me...
};
// Time complexity:


Tree.prototype.traverseBreadthFirst = function(fn) {
  // implement me...
};
// Time complexity:

const tree = new Tree(1)
tree.addChild(2).addChild(3).addChild(4).addChild(10)
console.log(tree.children.length)
console.log(tree.contains(10))