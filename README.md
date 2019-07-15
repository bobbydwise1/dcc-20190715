# Daily Coding Problem 2019-07-15

#### _This problem was asked by Google._

* _Given the root to a binary tree, implement serialize(root), which serializes the tree into a string, and deserialize(s), which deserializes the string back into the tree._

* _For example, given the following Node class_

class Node:
   def __init__(self, val, left=None, right=None):
       self.val = val
       self.left = left
       self.right = right

* _The following test should pass:_

node = Node('root', Node('left', Node('left.left')), Node('right'))
assert deserialize(serialize(node)).left.left.val == 'left.left
