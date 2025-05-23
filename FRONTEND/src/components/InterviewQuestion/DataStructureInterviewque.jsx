import React from 'react';

import SubNavbarIQ from '../SubNavbarIQ';

const questions = [
  {
    question: "1. What is a data structure?",
    answer: "A data structure is a way to organize and store data in a computer so that it can be used efficiently.",
    explanation: "Data structures help in organizing data in such a way that it can be accessed and modified efficiently.",
    code: `// Example: Using an array to store integers
int[] numbers = {1, 2, 3, 4};`
  },
  {
    question: "2. What is the difference between an array and a linked list?",
    answer: "An array stores elements in contiguous memory, while a linked list stores elements using nodes connected by pointers.",
    explanation: "Arrays allow random access, linked lists allow dynamic memory allocation and easy insertions/deletions.",
    code: `// Linked List Node in C#
class Node {
  public int data;
  public Node next;
  public Node(int d) { data = d; next = null; }
}`
  },
  {
    question: "3. What is a stack?",
    answer: "A stack is a linear data structure that follows the LIFO (Last In First Out) principle.",
    explanation: "The last element added to the stack will be the first one to be removed.",
    code: `Stack<int> stack = new Stack<int>();
stack.Push(10);
stack.Pop();`
  },
  {
    question: "4. What is a queue?",
    answer: "A queue is a linear data structure that follows the FIFO (First In First Out) principle.",
    explanation: "The first element added to the queue will be the first one to be removed.",
    code: `Queue<int> queue = new Queue<int>();
queue.Enqueue(5);
queue.Dequeue();`
  },
  {
    question: "5. What is a linked list?",
    answer: "A linked list is a linear data structure where each element is a node that contains data and a reference to the next node.",
    explanation: "Linked lists allow dynamic memory allocation and easy insertions/deletions.",
    code: `class Node {
  public int data;
  public Node next;
  public Node(int d) { data = d; next = null; }
}`
  },
  {
    question: "6. What is the difference between singly and doubly linked lists?",
    answer: "A singly linked list has nodes with one pointer to the next node, while a doubly linked list has nodes with pointers to both next and previous nodes.",
    explanation: "Doubly linked lists provide easier navigation but require more memory.",
    code: `class DoublyNode {
  public int data;
  public DoublyNode prev, next;
}`
  },
  {
    question: "7. What is a binary tree?",
    answer: "A binary tree is a tree data structure in which each node has at most two children, referred to as left and right child.",
    explanation: "Binary trees are used in searching, sorting, and hierarchical data representation.",
    code: `class TreeNode {
  public int val;
  public TreeNode left, right;
}`
  },
  {
    question: "8. What is a binary search tree (BST)?",
    answer: "A BST is a binary tree in which for each node, all values in the left subtree are smaller, and all values in the right subtree are larger.",
    explanation: "BSTs allow fast searching, insertion, and deletion.",
    code: `if (value < node.val) node = node.left; else node = node.right;`
  },
  {
    question: "9. What is a hash table?",
    answer: "A hash table is a data structure that maps keys to values using a hash function.",
    explanation: "It offers average-case O(1) time for insertion, deletion, and search.",
    code: `Dictionary<string, int> map = new Dictionary<string, int>();
map["apple"] = 1;`
  },
  {
    question: "10. What is recursion?",
    answer: "Recursion is a method where a function calls itself to solve a smaller instance of a problem.",
    explanation: "It's commonly used in problems like factorial, Fibonacci, and tree traversal.",
    code: `int factorial(int n) {
  return n == 0 ? 1 : n * factorial(n - 1);
}`
  },
  {
    question: "11. What is a graph?",
    answer: "A graph is a collection of nodes (vertices) and edges connecting them.",
    explanation: "Graphs are used to model networks like social networks, maps, and web pages.",
    code: `Dictionary<int, List<int>> graph = new();`
  },
  {
    question: "12. What is BFS (Breadth-First Search)?",
    answer: "BFS is a graph traversal algorithm that visits all nodes level by level.",
    explanation: "It uses a queue and is useful for finding the shortest path in unweighted graphs.",
    code: `Queue<int> q = new Queue<int>();
q.Enqueue(start);`
  },
  {
    question: "13. What is DFS (Depth-First Search)?",
    answer: "DFS is a graph traversal algorithm that explores as far as possible along each branch before backtracking.",
    explanation: "It uses a stack or recursion and is useful for cycle detection and path finding.",
    code: `void DFS(int node) {
  visited[node] = true;
  foreach (var neighbor in graph[node]) DFS(neighbor);
}`
  },
  {
    question: "14. What is a heap?",
    answer: "A heap is a special tree-based structure that satisfies the heap property (min-heap or max-heap).",
    explanation: "Heaps are used to implement priority queues.",
    code: `PriorityQueue<int, int> pq = new();`
  },
  {
    question: "15. What is a trie?",
    answer: "A trie is a tree-like data structure used to store strings, where each node represents a character.",
    explanation: "It is useful for prefix matching and autocomplete systems.",
    code: `class TrieNode {
  public Dictionary<char, TrieNode> children = new();
  public bool isEndOfWord = false;
}`
  },
  {
    question: "16. What is the time complexity of array access?",
    answer: "O(1)",
    explanation: "Accessing an element in an array by index takes constant time.",
    code: `int x = arr[3];`
  },
  {
    question: "17. What is a circular queue?",
    answer: "A circular queue is a queue in which the last position is connected back to the first to make a circle.",
    explanation: "It efficiently uses space by reusing empty spots.",
    code: `int front = 0, rear = 0; rear = (rear + 1) % size;`
  },
  {
    question: "18. What is the difference between linear and non-linear data structures?",
    answer: "Linear structures (like arrays, stacks) have sequential data, while non-linear structures (like trees, graphs) have hierarchical connections.",
    explanation: "Linear structures allow single traversal; non-linear structures allow hierarchical data processing.",
    code: `// Tree is non-linear, Stack is linear`
  },
  {
    question: "19. What is a doubly ended queue (deque)?",
    answer: "A deque is a data structure that allows insertion and deletion from both front and rear.",
    explanation: "Useful for implementing stacks, queues, and sliding window algorithms.",
    code: `Deque<int> dq = new Deque<int>();`
  },
  {
    question: "20. What is dynamic programming?",
    answer: "Dynamic programming solves problems by breaking them into overlapping subproblems and storing results to avoid redundant work.",
    explanation: "It's used in optimization problems like Knapsack, Fibonacci, etc.",
    code: `int[] dp = new int[n+1]; dp[0] = 0; dp[1] = 1;`
  },
  {
    question: "21. What is a segment tree?",
    answer: "A segment tree is a tree used for storing intervals or segments, allowing fast queries and updates.",
    explanation: "Useful in range query problems like sum, min, max.",
    code: `// Used in competitive programming for range queries`
  },
  {
    question: "22. What is the difference between shallow and deep copy?",
    answer: "Shallow copy copies object references, deep copy copies actual objects.",
    explanation: "Deep copy duplicates all nested objects to avoid shared references.",
    code: `Object.DeepClone(); // Deep copy`
  },
  {
    question: "23. What is amortized analysis?",
    answer: "Amortized analysis averages the time required to perform operations over a sequence, even if a single operation is costly.",
    explanation: "Used in dynamic arrays, where resizing happens occasionally.",
    code: `List<int> list = new(); // Uses amortized doubling`
  },
  {
    question: "24. What is the difference between array and ArrayList?",
    answer: "Array has fixed size and type; ArrayList can dynamically resize and store objects.",
    explanation: "ArrayList is part of System.Collections and is flexible.",
    code: `ArrayList list = new ArrayList(); list.Add(1);`
  },
  {
    question: "25. What is a balanced binary tree?",
    answer: "A binary tree is balanced if the height difference between left and right subtrees is no more than one.",
    explanation: "It ensures efficient operations like insertion, deletion, and search.",
    code: `// AVL and Red-Black trees are balanced binary trees`
  },
  {
    question: "26. What is hashing?",
    answer: "Hashing is a technique to convert a large key into a small index for faster search.",
    explanation: "Used in hash tables to map keys to values.",
    code: `int index = key.GetHashCode() % array.Length;`
  },
  {
    question: "27. What is Big O notation?",
    answer: "Big O describes the worst-case time complexity of an algorithm.",
    explanation: "It helps in analyzing and comparing algorithm efficiency.",
    code: `// O(n), O(log n), O(n^2) etc.`
  },
  {
    question: "28. What is tail recursion?",
    answer: "Tail recursion is a form of recursion where the recursive call is the last statement in the function.",
    explanation: "Tail recursion can be optimized to avoid growing the call stack.",
    code: `int TailFactorial(int n, int acc = 1) => n == 0 ? acc : TailFactorial(n - 1, n * acc);`
  },
  {
    question: "29. What is a red-black tree?",
    answer: "A red-black tree is a self-balancing binary search tree.",
    explanation: "It ensures the tree remains balanced with specific color and rotation rules.",
    code: `// Used in map/set implementations like C++ STL or TreeMap in Java`
  },
  {
    question: "30. What is the difference between a tree and a graph?",
    answer: "A tree is a connected acyclic graph with n-1 edges, while a graph may contain cycles and any number of edges.",
    explanation: "All trees are graphs, but not all graphs are trees.",
    code: `// Tree has one path between nodes, graph can have multiple`
  }
];

  
 

      
  
export default function DsInterviewQuestions() {
    return (
      <>
        <div className="min-h-screen bg-gradient-to-br from-blue-600 via-sky-500 to-blue-400 flex flex-col items-center p-4">
          <SubNavbarIQ />
          <div className="max-w-6xl w-full mt-[90px] p-4 sm:p-6 overflow-y-scroll scrollbar-hide h-[80dvh] ">
            <h1 className="text-4xl font-extrabold text-center text-white mb-10 drop-shadow-lg">
              Data Structure Interview Questions
            </h1>
  
            {questions.map((q, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-6 mb-8 border-l-4 border-blue-500 hover:shadow-2xl transition duration-300"
              >
                <h2 className="text-2xl font-semibold text-blue-700 mb-3">
                   {q.question}
                </h2>
  
                <p className="text-green-700 font-medium mb-2">
                <span className="font-semibold">Answer:</span> {q.answer}
                </p>
  
                <p className="text-gray-700 mb-3">
                <span className="font-semibold">Explanation:</span> {q.explanation}
                </p>
  
                <div className="bg-gray-900 text-green-300 font-mono text-sm rounded-lg p-4 overflow-auto whitespace-pre-wrap">
                  <pre>
                    <code>{q.code}</code>
                  </pre>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
  