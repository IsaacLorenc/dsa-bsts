class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  // This method inserts a new node into the binary search tree (BST)
  // with the given value. The method uses iteration to traverse the tree
  // and find the correct position to insert the new node.
  //
  // Parameters:
  // - val: The value of the new node to be inserted.
  //
  // Returns:
  // - The tree itself.
  insert(val) {
    // Create a new node with the given value.
    let newNode = new Node(val);

    // Check if the tree is empty.
    if (this.root === null){
      // If the tree is empty, make the new node the root of the tree.
      this.root = newNode;
      // Return the tree.
      return this;
    }

    // Initialize a variable to keep track of the current node
    // in the tree while traversing.
    let current = this.root;

    // Start traversing the tree.
    while(true) {
      // If the value of the new node is less than the value of the current node,
      // move to the left subtree.
      if (val < current.val) {
        // Check if the left subtree is empty.
        if (current.left === null) {
          // If the left subtree is empty, insert the new node as the left child of the current node.
          current.left = newNode;
          // Return the tree.
          return this;
        } else {
          // Move to the left subtree.
          current = current.left;
        }
      }
      // If the value of the new node is greater than the value of the current node,
      // move to the right subtree.
      else if (val > current.val) {
        // Check if the right subtree is empty.
        if (current.right === null) {
          // If the right subtree is empty, insert the new node as the right child of the current node.
          current.right = newNode;
          // Return the tree.
          return this;
        } else {
          // Move to the right subtree.
          current = current.right;
        }
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  // This method inserts a new node into the binary search tree (BST)
  // with the given value. The method uses recursion to traverse the tree
  // and find the correct position to insert the new node.
  //
  // Parameters:
  // - val: The value of the new node to be inserted.
  // - current: The current node in the tree while traversing.
  //   Defaults to the root of the tree.
  //
  // Returns:
  // - The tree itself.
  insertRecursively(val, current = this.root) {
    // Check if the tree is empty.
    if (this.root === null) {
      // If the tree is empty, make the new node the root of the tree.
      this.root = new Node(val);
      // Return the tree.
      return this;
    }

    // Check if the value of the new node is less than the value of the current node.
    if (val < current.val) {
      // Check if the left subtree is empty.
      if (current.left === null) {
        // If the left subtree is empty, insert the new node as the left child of the current node.
        current.left = new Node(val);
        // Return the tree.
        return this;
      }
      // Recursively call insertRecursively on the left subtree.
      return this.insertRecursively(val, current.left);
    }
    // Check if the value of the new node is greater than the value of the current node.
    else {
      // Check if the right subtree is empty.
      if (current.right === null) {
        // If the right subtree is empty, insert the new node as the right child of the current node.
        current.right = new Node(val);
        // Return the tree.
        return this;
      }
      // Recursively call insertRecursively on the right subtree.
      return this.insertRecursively(val, current.right);
    }
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  /**
   * find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration.
   *
   * @param {number} val - Value to search for.
   * @return {Node|undefined} - Node with value val, or undefined if not found.
   */
  find(val) {
    let currentNode = this.root;
    let found = false;

    // If the tree is empty, return undefined.
    if (currentNode === null) return undefined;

    while (currentNode && !found) {
      // If the value of the current node is equal to the value of the new node, return the current node.
      if (val === currentNode.val) return currentNode;

      // If the value of the new node is less than the value of the current node, traverse left.
      if (val < currentNode.val) {
        currentNode = currentNode.left;
      }
      // If the value of the new node is greater than the value of the current node, traverse right.
      else if (val > currentNode.val) {
        currentNode = currentNode.right;
      }
      // If the value of the new node is equal to the value of the current node, set found to true.
      else {
        found = true;
      }
    }

    // If the value was not found, return undefined.
    if (!found) return undefined;
    // Return the node with the value val.
    return currentNode;
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, current = this.root) {
      if (this.root === null) return undefined;

      if (val < current.val) {
        if (current.left === null) return undefined;
        return this.findRecursively(val, current.left);
      } else if (val > current.val) {
        if (current.right === null) return undefined;
        return this.findRecursively(val, current.right)
      }
      return current;
    }


  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes.
   *
   * Start at the root.
   * Recursively traverse the left subtree.
   * Recursively traverse the right subtree.
   */
  dfsPreOrder() {
    // Create an array to hold the values of the visited nodes.
    let data = [];
    // Set the current node to the root.
    let current = this.root;

    // Define a recursive function to traverse the tree.
    function traverse(node) {
      // Add the value of the current node to the data array.
      data.push(node.val);
      // If the current node has a left child, traverse down the left subtree.
      node.left && traverse(node.left);
      // If the current node has a right child, traverse down the right subtree.
      node.right && traverse(node.right);
    }

    // Start the traversal.
    traverse(current);
    // Return the array of visited nodes.
    return data;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes.
   *
   * Start at the root.
   * Traverse the left subtree.
   * Visit the current node (add it to the data array).
   * Traverse the right subtree.
   */
  dfsInOrder() {
    // Create an array to hold the values of the visited nodes.
    let data = [];
    // Set the current node to the root.
    let current = this.root;

    // Define a recursive function to traverse the tree.
    function traverse(node) {
      // If the current node has a left child, traverse down the left subtree.
      if (node.left) traverse(node.left);
      // Add the value of the current node to the data array.
      data.push(node.val);
      // If the current node has a right child, traverse down the right subtree.
      if (node.right) traverse(node.right);
    }

    // Start the traversal.
    traverse(current);
    // Return the array of visited nodes.
    return data;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    let data = [];
    let current = this.root;

    function traverse(node) {
      node.left && traverse(node.left); 
      node.right && traverse(node.right); 
      data.push(node.val); 
    }
    traverse(current);
    return data;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let node = this.root;
    let queue = [];
    let data = [];

    queue.push(node);

    while (queue.length) {
      node = queue.shift();
      data.push(node.val);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }

    return data;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

module.exports = BinarySearchTree;
