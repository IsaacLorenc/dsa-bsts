
# Binary Search Tree (BST)

## Overview
This project implements a **Binary Search Tree (BST)** with common operations such as insertion (both iterative and recursive), searching for nodes, and traversal methods (DFS and BFS).

## Features
- **Insert (Iterative & Recursive)**: Adds a node to the tree.
- **Search (Iterative & Recursive)**: Finds a node by value.
- **Traversals**:
  - **DFS Pre-Order**: Root → Left → Right
  - **DFS In-Order**: Left → Root → Right
  - **DFS Post-Order**: Left → Right → Root
  - **BFS**: Level-order traversal


## Usage

```javascript
const bst = new BinarySearchTree();

// Insert nodes
bst.insert(15).insert(20).insert(10).insertRecursively(12);

// Search
const node = bst.findIteratively(20);

// Traversals
console.log(bst.dfsInOrder()); // [10, 12, 15, 20]
console.log(bst.bfs()); // [15, 10, 20, 12]
```

## License
This project is licensed under the MIT License.
