import React from 'react';
import SubNavbar from '../SubNavbar';
import SubNavbarIQ from '../SubNavbarIQ';

const questions = [
  {
    question: "1. What is Python, and list some of its key features?",
    answer: "Python is a high-level, interpreted programming language known for its simplicity and readability. Key features include dynamic typing, automatic memory management, and a large standard library.",
    explanation: "Python's design philosophy emphasizes code readability with the use of significant indentation.",
    code: `print("Hello, World!")`
  },
  {
    question: "2. What are Python lists and tuples?",
    answer: "Lists are mutable sequences, typically used to store collections of homogeneous items. Tuples are immutable sequences, typically used to store collections of heterogeneous data.",
    explanation: "Lists allow modification of their content, while tuples do not.",
    code: `my_list = [1, 2, 3]
my_tuple = (1, 'a', 3.14)`
  },
  {
    question: "3. What is the __init__() function in Python?",
    answer: "The __init__() function is a constructor in Python. It's called when an object is instantiated from a class.",
    explanation: "It allows the class to initialize the attributes of the class.",
    code: `class MyClass:
  def __init__(self, value):
    self.value = value`
  },
  {
    question: "4. What is the difference between mutable and immutable data types?",
    answer: "Mutable data types can be changed after their creation, while immutable data types cannot.",
    explanation: "Examples of mutable types include lists and dictionaries; examples of immutable types include strings and tuples.",
    code: `my_list = [1, 2, 3]
my_tuple = (1, 2, 3)`
  },
  {
    question: "5. What are Python's primary built-in data types?",
    answer: "Python's primary built-in data types include int, float, complex, bool, str, list, tuple, set, frozenset, dict, bytes, bytearray, and None.",
    explanation: "These data types are used to store values of different kinds.",
    code: `my_int = 10
my_str = "Hello"`
  },
  {
    question: "6. What is the difference between '==' and 'is' in Python?",
    answer: "'==' checks if the values of two variables are equal, while 'is' checks if two variables point to the same object in memory.",
    explanation: "Use '==' to compare values, and 'is' to compare object identities.",
    code: `a = [1, 2, 3]
b = a
print(a == b)  # True
print(a is b)  # True`
  },
  {
    question: "7. How does Python handle memory management?",
    answer: "Python uses automatic memory management with a built-in garbage collector.",
    explanation: "The garbage collector frees up memory by deleting objects that are no longer in use.",
    code: `import gc
gc.collect()`
  },
  {
    question: "8. What are decorators in Python?",
    answer: "Decorators are functions that modify the behavior of another function.",
    explanation: "They are often used to add functionality to existing code in a clean and readable way.",
    code: `def decorator(func):
  def wrapper():
    print("Before function call")
    func()
    print("After function call")
  return wrapper

@decorator
def say_hello():
  print("Hello!")

say_hello()`
  },
  {
    question: "9. What is the purpose of the 'self' keyword in Python?",
    answer: "The 'self' keyword represents the instance of the class.",
    explanation: "It allows access to the attributes and methods of the class in Python.",
    code: `class MyClass:
  def __init__(self, value):
    self.value = value`
  },
  {
    question: "10. What are lambda functions in Python?",
    answer: "Lambda functions are small anonymous functions defined with the 'lambda' keyword.",
    explanation: "They can have any number of arguments but only one expression.",
    code: `add = lambda x, y: x + y
print(add(2, 3))  # 5`
  },
  {
    question: "11. What is the difference between 'deepcopy' and 'copy' in Python?",
    answer: "The 'copy' module provides two functions: 'copy()' for shallow copies and 'deepcopy()' for deep copies.",
    explanation: "A shallow copy creates a new object but inserts references into it to the objects found in the original. A deep copy creates a new object and recursively copies all objects found in the original.",
    code: `import copy
original = [1, [2, 3]]
shallow = copy.copy(original)
deep = copy.deepcopy(original)`
  },
  {
    question: "12. What are Python's built-in data structures?",
    answer: "Python's built-in data structures include lists, tuples, sets, and dictionaries.",
    explanation: "These structures are used to store and organize data efficiently.",
    code: `my_list = [1, 2, 3]
my_tuple = (1, 2, 3)
my_set = {1, 2, 3}
my_dict = {'a': 1, 'b': 2}`
  },
  {
    question: "13. What is the purpose of the 'with' statement in Python?",
    answer: "The 'with' statement simplifies exception handling and resource management.",
    explanation: "It ensures that resources are properly cleaned up after use, even if an error occurs.",
    code: `with open('file.txt', 'r') as file:
  content = file.read()`
  },
  {
    question: "14. What are list comprehensions in Python?",
    answer: "List comprehensions provide a concise way to create lists.",
    explanation: "They consist of an expression followed by a 'for' clause and optionally one or more 'if' clauses.",
    code: `squares = [x**2 for x in range(10)]`
  },
  {
    question: "15. What is the difference between 'range' and 'xrange' in Python?",
    answer: "'range' returns a list, while 'xrange' returns an iterator in Python 2.",
    explanation: "In Python 3, 'range' behaves like 'xrange' from Python 2, returning an iterator.",
    code: `for i in range(5):
  print(i)`
  },
  {
    question: "16. What are generators in Python?",
    answer: "Generators are functions that return an iterable set of items, one at a time, using the 'yield' keyword.",
    explanation: "They allow for lazy evaluation, producing items only when needed.",
    code: `def count_up_to(n):
  count = 0
  while count <= n:
    yield count
    count += 1`
  },
  {
    question: "17. What is exception handling in Python?",
    answer: "Exception handling in Python is done using 'try', 'except', 'else', and 'finally' blocks.",
    explanation: "It allows for graceful handling of runtime errors.",
    code: `try:
  result = 10 / 0
except ZeroDivisionError:
  print("Cannot divide by zero")
else:
  print("Division successful")
finally:
  print("Execution completed")`
  },
  {
    question: "18. What is the purpose of the 'assert' statement in Python?",
    answer: "The 'assert' statement is used for debugging purposes.",
    explanation: "It tests if a condition is true, and if not, raises an AssertionError.",
    code: `assert 2 + 2 == 4`
  },
  {
    question: "19. What is the difference between 'del' and 'remove' in Python?",
    answer: "'del' is used to delete variables or elements at a specific index, while 'remove' is used to remove the first occurrence of a value.",
    explanation: "Use 'del' for index-based deletion and 'remove' for value-based deletion.",
    code: `my_list = [1, 2, 3]
del my_list[1]
my_list.remove(3)`
  },
  {
    question: "20. What are Python modules and packages?",
    answer: "Modules are files containing Python code, and packages are directories containing multiple modules.",
    explanation: "They allow for modular programming and code organization.",
    code: `import math
print(math.sqrt(16))`
  },
  {
    question: "21. What is the purpose of the 'global' keyword in Python?",
    answer: "The 'global' keyword is used to declare a variable as global.",
    explanation: "It allows for modification of a variable outside the current scope.",
    code: `x = 10
def modify_global():
  global x
  x = 20`
  },
  {
    question: "22. What is the purpose of the 'nonlocal' keyword in Python?",
    answer: "The 'nonlocal' keyword is used to declare a variable as nonlocal.",
    explanation: "It allows for modification of a variable in the nearest enclosing scope that is not global.",
    code: `def outer():
  x = 10
  def inner():
    nonlocal x
    x = 20
  inner()
  print(x)`
  },
  {
    question: "23. What is the Global Interpreter Lock (GIL) in Python?",
    answer: "The GIL is a mutex that protects access to Python objects, preventing multiple threads from executing Python bytecodes at once.",
    explanation: "It allows for thread-safe operations but can limit performance in CPU-bound multi-threaded programs.",
    code: `import threading
import time

def count():
    for i in range(1000000):
        pass

threads = []
for i in range(10):
    thread = threading.Thread(target=count)
    threads.append(thread)
    thread.start()

for thread in threads:
    thread.join()`
  },
  {
    question: "24. What is the purpose of the 'yield' keyword in Python?",
    answer: "The 'yield' keyword is used to return a generator from a function.",
    explanation: "It allows the function to return an iterable set of items, one at a time.",
    code: `def countdown(n):
  while n > 0:
    yield n
    n -= 1`
  },

    {
      question: "25. What is a copy constructor, and how does it differ from a deep copy?",
      answer: "A copy constructor in C++ is a special constructor that creates a new object as a copy of an existing object. It differs from a deep copy in that a deep copy involves creating a new object and copying all fields, including dynamically allocated memory, whereas a shallow copy only copies the values of the fields, not the objects they point to.",
      explanation: "Understanding copy constructors is crucial for managing dynamic memory and ensuring proper object copying behavior.",
      code: `#include <iostream>
  #include <cstring>
  
  class MyClass {
  public:
      char* data;
      MyClass(const char* val) {
          data = new char[strlen(val) + 1];
          strcpy(data, val);
      }
      MyClass(const MyClass& other) {
          data = new char[strlen(other.data) + 1];
          strcpy(data, other.data);
      }
      ~MyClass() {
          delete[] data;
      }
  };
  
  int main() {
      MyClass obj1("Hello");
      MyClass obj2 = obj1; // Copy constructor is called
      std::cout << obj2.data << std::endl;
      return 0;
  }`
    },
    {
      question: "26. What is the difference between a class and a struct in C++?",
      answer: "In C++, the primary difference between a class and a struct is the default access level. Members of a class are private by default, while members of a struct are public by default. Both can have member functions and can be used to create objects.",
      explanation: "This distinction affects how data encapsulation is handled in C++.",
      code: `#include <iostream>
  
  class MyClass {
      int x;
  public:
      void setX(int val) { x = val; }
      int getX() { return x; }
  };
  
  struct MyStruct {
      int x;
  };
  
  int main() {
      MyClass obj1;
      obj1.setX(10);
      std::cout << "Class x: " << obj1.getX() << std::endl;
  
      MyStruct obj2;
      obj2.x = 20;
      std::cout << "Struct x: " << obj2.x << std::endl;
  
      return 0;
  }`
    },
    {
      question: "27. What are smart pointers in C++?",
      answer: "Smart pointers are wrappers around raw pointers that automatically manage the lifetime of dynamically allocated objects. They help prevent memory leaks by ensuring that objects are properly deleted when no longer needed. Common types include std::unique_ptr, std::shared_ptr, and std::weak_ptr.",
      explanation: "Smart pointers are part of the C++ Standard Library and are essential for modern C++ memory management.",
      code: `#include <iostream>
  #include <memory>
  
  int main() {
      std::unique_ptr<int> ptr1 = std::make_unique<int>(10);
      std::cout << "Value: " << *ptr1 << std::endl;
      // No need to manually delete ptr1; it will be automatically deleted when it goes out of scope
      return 0;
  }`
    },
    {
      question: "28. What is operator overloading in C++?",
      answer: "Operator overloading in C++ allows you to define custom behavior for operators (like +, -, *, etc.) when they are applied to user-defined types. This enables intuitive syntax for complex operations involving objects of custom classes.",
      explanation: "Operator overloading enhances code readability and allows objects to be manipulated using standard operators.",
      code: `#include <iostream>
  
  class Complex {
  public:
      int real, imag;
      Complex(int r, int i) : real(r), imag(i) {}
      Complex operator + (const Complex& other) {
          return Complex(real + other.real, imag + other.imag);
      }
  };
  
  int main() {
      Complex c1(1, 2), c2(3, 4);
      Complex c3 = c1 + c2;
      std::cout << "Sum: " << c3.real << " + " << c3.imag << "i" << std::endl;
      return 0;
  }`
    },
    {
      question: "29. What is a pure virtual function in C++?",
      answer: "A pure virtual function is a function declared in a base class that has no implementation and must be overridden in any derived class. It is declared by assigning 0 to the function declaration, e.g., virtual void func() = 0;",
      explanation: "Pure virtual functions make a class abstract, meaning it cannot be instantiated directly.",
      code: `#include <iostream>
  
  class Abstract {
  public:
      virtual void show() = 0; // Pure virtual function
  };
  
  class Concrete : public Abstract {
  public:
      void show() override {
          std::cout << "Concrete class implementation" << std::endl;
      }
  };
  
  int main() {
      Concrete obj;
      obj.show();
      return 0;
  }`
    },
    {
      question: "30. What is the use of the 'explicit' keyword in C++?",
      answer: "The 'explicit' keyword is used to mark constructors and conversion operators to prevent implicit conversions that could lead to unexpected behavior. It ensures that such constructors or operators are only called when explicitly invoked.",
      explanation: "Using 'explicit' helps in avoiding unintended type conversions, making the code more predictable and safer.",
      code: `#include <iostream>
  
  class MyClass {
  public:
      explicit MyClass(int x) { std::cout << "Constructor called with " << x << std::endl; }
  };
  
  int main() {
      MyClass obj1(10); // OK
      // MyClass obj2 = 20; // Error: no matching constructor
      return 0;
  }`
    }
  ];
  
 

      
  
export default function PythonInterviewQuestions() {
    return (
      <>
        <div className="min-h-screen bg-gradient-to-br from-blue-600 via-sky-500 to-blue-400 flex flex-col items-center p-4">
          <SubNavbarIQ />
          <div className="max-w-6xl w-full mt-[90px] p-4 sm:p-6 overflow-y-scroll scrollbar-hide h-[80dvh] ">
            <h1 className="text-4xl font-extrabold text-center text-white mb-10 drop-shadow-lg">
             Python Language Interview Questions
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
  