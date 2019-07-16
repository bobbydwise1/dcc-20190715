/*
Good morning! Here's your coding interview problem for today.

This problem was asked by Google.

Given the root to a binary tree, implement serialize(root), which serializes the tree into a string, and deserialize(s), which deserializes the string back into the tree.

For example, given the following Node class

class Node:
   def __init__(self, val, left=None, right=None):
       self.val = val
       self.left = left
       self.right = right

The following test should pass:

node = Node('root', Node('left', Node('left.left')), Node('right'))
assert deserialize(serialize(node)).left.left.val == 'left.left
*/

class Node {
  constructor(value, left=0, right=0) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

var node = new Node('root', new Node('left', new Node('left-left'), new Node('right')));
console.log('node = ', node);



// const serialize = (root) => {
//
// };
//
// const deserialize = (root) => {
//
// };

$(document).ready(function() {
  $('#output-section-1').text(JSON.stringify(node));
  $('#output-section-2').text('test2');
  $('#output-section-3').text('test3');
  });
