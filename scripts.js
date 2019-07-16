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

const serialize = (root) => {
  return JSON.stringify(root);
};

const deserialize = (stringOfObjects) => {
  return JSON.parse(stringOfObjects);
};

var fancyString = '{"value":"root","left":{"value":"left","left":{"value":"left-left","left":0,"right":0},"right":{"value":"right","left":0,"right":0}},"right":0}';

deString = deserialize(fancyString);

console.log('fancyString =', fancyString);
console.log('deString =', deString);

$(document).ready(function() {
  $('#output-section-1').text(node);
  $('#output-section-2').text(serialize(node));
  $('#output-section-3').text(deserialize(serialize(node)));
  $('#output-section-4').text(deserialize(fancyString));
  });
