import React from 'react';
import SubNavbar from '../SubNavbar';
import SubNavbarIQ from '../SubNavbarIQ';


const questions = [
    {
      question: "1. What is the difference between C and C++?",
      answer: "C is a procedural programming language, whereas C++ is a multi-paradigm language that supports object-oriented, procedural, functional, and generic programming.",
      explanation: "C++ introduces features like classes, inheritance, polymorphism, and templates, which are not present in C.",
      code: `// No code example needed for this conceptual question`
    },
    {
      question: "2. What are classes and objects in C++?",
      answer: "A class is a blueprint for creating objects, defining data and methods. An object is an instance of a class.",
      explanation: "Classes encapsulate data and functions, promoting modularity and reusability.",
      code: `class Car {
    public:
      string model;
      int year;
      void display() {
        cout << model << " " << year << endl;
      }
  };
  
  int main() {
    Car myCar;
    myCar.model = "Toyota";
    myCar.year = 2020;
    myCar.display();
    return 0;
  }`
    },
    {
      question: "3. What are access specifiers in C++?",
      answer: "Access specifiers define the accessibility of class members. They are public, private, and protected.",
      explanation: "Public members are accessible from outside the class, private members are not, and protected members are accessible in derived classes.",
      code: `class MyClass {
    private:
      int x;
    public:
      void setX(int val) { x = val; }
      int getX() { return x; }
  };`
    },
    {
      question: "4. What is function overloading?",
      answer: "Function overloading allows multiple functions with the same name but different parameters.",
      explanation: "The compiler differentiates between overloaded functions based on the number and types of parameters.",
      code: `class Print {
    public:
      void show(int i) { cout << i << endl; }
      void show(double d) { cout << d << endl; }
  };`
    },
    {
      question: "5. What is operator overloading?",
      answer: "Operator overloading allows you to redefine the way operators work for user-defined types.",
      explanation: "This can make code more intuitive and readable when working with custom classes.",
      code: `class Complex {
    private:
      int real, imag;
    public:
      Complex operator + (const Complex& obj) {
        Complex temp;
        temp.real = real + obj.real;
        temp.imag = imag + obj.imag;
        return temp;
      }
  };`
    },
    {
      question: "6. What is a constructor in C++?",
      answer: "A constructor is a special member function that is called when an object is instantiated.",
      explanation: "Constructors initialize objects and can be overloaded to provide different initialization options.",
      code: `class Box {
    public:
      int length;
      Box() { length = 10; }
  };`
    },
    {
      question: "7. What is a destructor in C++?",
      answer: "A destructor is a special member function that is called when an object is destroyed.",
      explanation: "Destructors are used to release resources allocated by the object.",
      code: `class Box {
    public:
      ~Box() { cout << "Destructor called"; }
  };`
    },
    {
      question: "8. What is inheritance in C++?",
      answer: "Inheritance allows a class to inherit properties and behaviors from another class.",
      explanation: "It promotes code reusability and establishes a relationship between classes.",
      code: `class Animal {
    public:
      void eat() { cout << "Eating"; }
  };
  
  class Dog : public Animal {
    public:
      void bark() { cout << "Barking"; }
  };`
    },
    {
      question: "9. What is polymorphism in C++?",
      answer: "Polymorphism allows functions to behave differently based on the object that invokes them.",
      explanation: "It can be achieved through function overloading and operator overloading.",
      code: `class Shape {
    public:
      virtual void draw() { cout << "Drawing Shape"; }
  };
  
  class Circle : public Shape {
    public:
      void draw() { cout << "Drawing Circle"; }
  };`
    },
    {
      question: "10. What is encapsulation?",
      answer: "Encapsulation is the bundling of data and methods that operate on the data within a single unit or class.",
      explanation: "It restricts direct access to some of an object's components, which can prevent unintended interference and misuse.",
      code: `class Account {
    private:
      double balance;
    public:
      void deposit(double amount) { balance += amount; }
      double getBalance() { return balance; }
  };`
    },
    {
      question: "11. What is abstraction in C++?",
      answer: "Abstraction is the concept of hiding the complex implementation details and showing only the necessary features of an object.",
      explanation: "It helps in reducing complexity and allows the programmer to focus on interactions at a higher level.",
      code: `class AbstractShape {
    public:
      virtual void draw() = 0; // Pure virtual function
  };`
    },
    {
      question: "12. What is a pure virtual function?",
      answer: "A pure virtual function is a function declared in a base class that has no definition and must be overridden in derived classes.",
      explanation: "It makes the base class abstract and ensures that derived classes implement the function.",
      code: `class Shape {
    public:
      virtual void draw() = 0; // Pure virtual function
  };`
    },
    {
      question: "13. What is a virtual function?",
      answer: "A virtual function is a member function in a base class that you expect to override in derived classes.",
      explanation: "It supports dynamic (run-time) polymorphism.",
      code: `class Base {
    public:
      virtual void show() { cout << "Base class show function"; }
  };
  
  class Derived : public Base {
    public:
      void show() { cout << "Derived class show function"; }
  };`
    },
    {
      question: "14. What is a static member in C++?",
      answer: "A static member is shared by all objects of a class and is initialized only once.",
      explanation: "Static members can be accessed using the class name and scope resolution operator.",
      code: `class Counter {
    static int count;
    public:
      Counter() { count++; }
      static int getCount() { return count; }
  };`
    },
    {
      question: "15. What is a friend function?",
      answer: "A friend function is a function that is not a member of a class but has access to its private and protected members.",
      explanation: "It is declared using the 'friend' keyword inside the class.",
      code: `class Box {
    private:
      int length;
    public:
      friend void printLength(Box b);
  };
  
  void printLength(Box b) {
    cout << "Length: " << b.length;
  }`  
    },
    {
      question: "16. What is the difference between class and struct?",
      answer: "In C++, the only difference between class and struct is the default access level. Members of a class are private by default, while members of a struct are public.",
      explanation: "This distinction affects how data is accessed and encapsulated.",
      code: `class MyClass {
    int x;
  };
  
  struct MyStruct {
    int x;
  };`
    },
    {
      question: "17. What is the difference between new and malloc?",
      answer: "new is an operator in C++ that allocates memory and calls the constructor, while malloc is a function in C that allocates memory but does not call the constructor.",
      explanation: "new is type-safe and initializes the allocated memory, whereas malloc is not type-safe and does not initialize the memory.",
      code: `int* ptr1 = new int; // Allocates memory and calls constructor
  int* ptr2 = (int*)malloc(sizeof(int)); // Allocates memory but does not call constructor`
    },
    {
      question: "18. What is the difference between delete and free?",
      answer: "delete is an operator in C++ that deallocates memory and calls the destructor, while free is a function in C that deallocates memory but does not call the destructor.",
      explanation: "delete is type-safe and ensures that the destructor is called, whereas free is not type-safe and does not call the destructor.",
      code: `int* ptr = new int;
  delete ptr; // Deallocates memory and calls destructor
  free(ptr); // Deallocates memory but does not call destructor`
    },
    {
      question: "19. What is a reference variable?",
      answer: "A reference variable is an alias for another variable, allowing you to refer to the same memory location using a different name.",
      explanation: "References must be initialized when declared and cannot be null.",
      code: `int x = 10;
  int& ref = x; // ref is a reference to x`
    },
    {
      question: "20. What is a pointer?",
      answer: "A pointer is a variable that stores the memory address of another variable.",
      explanation: "Pointers are used for dynamic memory allocation and for referencing variables indirectly.",
      code: `int x = 10;
  int* ptr = &x; // ptr stores the address of x`
    },
    {
      question: "21. What is dynamic memory allocation?",
      answer: "Dynamic memory allocation is the process of allocating memory at runtime using operators like new and delete.",
      explanation: "It allows for flexible memory usage and is essential for handling variable-sized data structures.",
      code: `int* ptr = new int[10]; // Allocates memory for an array of 10 integers
  delete[] ptr; // Deallocates the array`
    },
    {
      question: "22. What is a template in C++?",
      answer: "A template is a feature in C++ that allows functions and classes to operate with generic types.",
      explanation: "Templates enable code reusability and type safety.",
      code: `template <typename T>
  T add(T a, T b) {
    return a + b;
  }`  
    },
    {
          question: "23. What is the difference between `new` and `malloc()` in C++?",
          answer: "`new` is an operator in C++ that allocates memory and calls the constructor of the object, while `malloc()` is a C library function that allocates raw memory without calling any constructor.",
          explanation: "`new` provides type safety and initializes the object, whereas `malloc()` does not.",
          code: `#include <iostream>
      #include <cstdlib>
      
      class MyClass {
      public:
          MyClass() { std::cout << "Constructor called\n"; }
          ~MyClass() { std::cout << "Destructor called\n"; }
      };
      
      int main() {
          MyClass* obj1 = new MyClass; // Allocates memory and calls constructor
          delete obj1; // Calls destructor and deallocates memory
      
          MyClass* obj2 = (MyClass*)malloc(sizeof(MyClass)); // Allocates raw memory
          free(obj2); // Deallocates memory without calling destructor
      
          return 0;
      }`
        },
        {
          question: "24. What are smart pointers in C++?",
          answer: "Smart pointers are wrappers around raw pointers that provide automatic memory management. They help in preventing memory leaks and dangling pointers.",
          explanation: "C++ provides several types of smart pointers, including `std::unique_ptr`, `std::shared_ptr`, and `std::weak_ptr`.",
          code: `#include <iostream>
      #include <memory>
      
      int main() {
          std::unique_ptr<int> ptr1 = std::make_unique<int>(10);
          std::cout << *ptr1 << std::endl;
      
          std::shared_ptr<int> ptr2 = std::make_shared<int>(20);
          std::cout << *ptr2 << std::endl;
      
          return 0;
      }`
        },
        {
          question: "25. What is the purpose of the `noexcept` specifier in C++?",
          answer: "`noexcept` is used to specify that a function does not throw any exceptions.",
          explanation: "Marking functions as `noexcept` helps the compiler optimize code and provides information to the programmer about exception safety.",
          code: `#include <iostream>
      
      void func() noexcept {
          std::cout << "This function does not throw exceptions.\n";
      }
      
      int main() {
          func();
          return 0;
      }`
        },
        {
          question: "26. What is a lambda expression in C++?",
          answer: "A lambda expression is an anonymous function that can be defined inline and passed as arguments to algorithms.",
          explanation: "Lambdas provide a concise way to write function objects and can capture variables from their surrounding scope.",
          code: `#include <iostream>
      #include <vector>
      #include <algorithm>
      
      int main() {
          std::vector<int> vec = {1, 2, 3, 4, 5};
          int sum = 0;
      
          std::for_each(vec.begin(), vec.end(), [&sum](int x) {
              sum += x;
          });
      
          std::cout << "Sum: " << sum << std::endl;
          return 0;
      }`
        },
        {
          question: "27. What is the difference between `std::vector` and `std::array` in C++?",
          answer: "`std::vector` is a dynamic array that can change size at runtime, while `std::array` is a fixed-size array known at compile time.",
          explanation: "`std::vector` provides flexibility but may incur overhead, whereas `std::array` offers performance benefits for fixed-size collections.",
          code: `#include <iostream>
      #include <vector>
      #include <array>
      
      int main() {
          std::vector<int> vec = {1, 2, 3};
          std::array<int, 3> arr = {1, 2, 3};
      
          std::cout << "Vector size: " << vec.size() << std::endl;
          std::cout << "Array size: " << arr.size() << std::endl;
      
          return 0;
      }`
        },
        {
          question: "28. What is operator overloading in C++?",
          answer: "Operator overloading allows you to define custom behavior for operators when applied to user-defined types.",
          explanation: "It enhances code readability and allows operators to work intuitively with custom classes.",
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
          std::cout << "Sum: " << c3.real << " + " << c3.imag << "i\n";
          return 0;
      }`
        },
        {
          question: "29. What is a pure virtual function in C++?",
          answer: "A pure virtual function is a function declared in a base class that has no implementation and must be overridden in derived classes.",
          explanation: "It makes a class abstract, meaning it cannot be instantiated directly.",
          code: `#include <iostream>
      
      class Shape {
      public:
          virtual void draw() = 0; // Pure virtual function
      };
      
      class Circle : public Shape {
      public:
          void draw() override {
              std::cout << "Drawing Circle\n";
          }
      };
      
      int main() {
          Circle c;
          c.draw();
          return 0;
      }`
        },
        {
          question: "30. What is the Rule of Three/Five in C++?",
          answer: "The Rule of Three/Five states that if a class needs to define a destructor, copy constructor, or copy assignment operator, it should also define the other two.",
          explanation: "This ensures proper resource management and prevents resource leaks or undefined behavior.",
          code: `#include <iostream>
      #include <cstring>
      
      class MyClass {
          char* data;
      public:
          MyClass(const char* str) {
              data = new char[strlen(str) + 1];
              strcpy(data, str);
          }
          ~MyClass() {
              delete[] data;
          }
          MyClass(const MyClass& other) {
              data = new char[strlen(other.data) + 1];
              strcpy(data, other.data);
          }
          MyClass& operator=(const MyClass& other) {
              if (this != &other) {
                  delete[] data;
                  data = new char[strlen(other.data) + 1];
                  strcpy(data, other.data);
              }
              return *this;
          }
      };
      
      int main() {
          MyClass obj1("Hello");
          MyClass obj2 = obj1; // Copy constructor
          MyClass obj3("World");
          obj3 = obj1; // Copy assignment operator
          return 0;
      }`
        }
      ];
      
export default function CppInterviewQuestions() {
    return (
      <>
        <div className="min-h-screen bg-gradient-to-br from-blue-600 via-sky-500 to-blue-400 flex flex-col items-center p-4">
          <SubNavbarIQ />
          <div className="max-w-6xl w-full mt-[90px] p-4 sm:p-6 overflow-y-scroll scrollbar-hide h-[80dvh] ">
           
          <h1 className="text-4xl font-extrabold text-center text-white mb-10 drop-shadow-lg">
             C++ Language Interview Questions
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