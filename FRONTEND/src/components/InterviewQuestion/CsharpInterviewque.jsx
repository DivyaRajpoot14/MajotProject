import React from 'react';
import SubNavbar from '../SubNavbar';
import SubNavbarIQ from '../SubNavbarIQ';

const questions = [
  {
    question: "1. What is C#?",
    answer: "C# is an object-oriented programming language developed by Microsoft. It is used to build desktop apps, web services, games, and enterprise software on the .NET platform.",
    explanation: "C# combines the power of C++ with the simplicity of Visual Basic, making it suitable for a wide range of applications.",
    code: `using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Hello, World!");
    }
}`
  },
  {
    question: "2. What is the difference between value types and reference types in C#?",
    answer: "Value types store data directly, while reference types store a reference to the data’s memory address.",
    explanation: "Examples of value types include int, float; reference types include string, arrays, class objects.",
    code: `int a = 10;           // Value type
string s = "Hello";   // Reference type`
  },
  {
    question: "3. What is a constructor in C#?",
    answer: "A constructor is a special method that is called automatically when an object is created.",
    explanation: "It is used to initialize the object’s data members and has the same name as the class.",
    code: `class Person
{
    public string Name;

    public Person(string name)
    {
        Name = name;
    }
}`
  },
  {
    question: "4. What is method overloading?",
    answer: "Method overloading is when multiple methods in the same class have the same name but different parameters.",
    explanation: "The compiler determines which method to call based on the number and types of arguments.",
    code: `class Calculator
{
    public int Add(int a, int b) => a + b;
    public double Add(double a, double b) => a + b;
}`
  },
  {
    question: "5. What is the use of 'this' keyword in C#?",
    answer: "The 'this' keyword refers to the current instance of the class.",
    explanation: "It is commonly used to differentiate between class fields and parameters with the same name.",
    code: `class Student
{
    string name;

    public Student(string name)
    {
        this.name = name;
    }
}`
  },
  {
    question: "6. What is inheritance in C#?",
    answer: "Inheritance allows one class to inherit members from another class.",
    explanation: "The derived class inherits fields and methods from the base class, promoting code reusability.",
    code: `class Animal
{
    public void Eat() => Console.WriteLine("Eating...");
}

class Dog : Animal
{
    public void Bark() => Console.WriteLine("Barking...");
}`
  },
  {
    question: "7. What is polymorphism?",
    answer: "Polymorphism allows methods to have different implementations based on the object’s runtime type.",
    explanation: "It can be achieved using method overriding and interfaces.",
    code: `class Animal
{
    public virtual void Speak() => Console.WriteLine("Animal speaks");
}

class Dog : Animal
{
    public override void Speak() => Console.WriteLine("Dog barks");
}`
  },
  {
    question: "8. What is encapsulation in C#?",
    answer: "Encapsulation is the process of hiding internal data and exposing only necessary parts through public methods.",
    explanation: "It is implemented using access modifiers like private, public, and properties.",
    code: `class Person
{
    private string name;

    public string Name
    {
        get => name;
        set => name = value;
    }
}`
  },
  {
    question: "9. What is an interface in C#?",
    answer: "An interface defines a contract that classes must follow by implementing all its members.",
    explanation: "Interfaces contain only declarations of methods, properties, etc., without implementation.",
    code: `interface IVehicle
{
    void Drive();
}

class Car : IVehicle
{
    public void Drive() => Console.WriteLine("Driving car...");
}`
  },
  {
    question: "10. What is an abstract class?",
    answer: "An abstract class is a class that cannot be instantiated and can contain abstract and non-abstract methods.",
    explanation: "It is used as a base class and must be inherited to be used.",
    code: `abstract class Shape
{
    public abstract void Draw();
}

class Circle : Shape
{
    public override void Draw() => Console.WriteLine("Drawing circle");
}`
  },
  {
    question: "11. What is the difference between 'override' and 'new' keywords in C#?",
    answer: "'override' extends the base class method; 'new' hides it.",
    explanation: "Use 'override' for runtime polymorphism, 'new' for hiding the base method.",
    code: `class Base
{
    public virtual void Show() => Console.WriteLine("Base Show");
}

class Derived : Base
{
    public override void Show() => Console.WriteLine("Derived Show");
}`
  },
  {
    question: "12. What are properties in C#?",
    answer: "Properties provide a mechanism to read, write, or compute the values of private fields.",
    explanation: "They are like data members with get and set accessors.",
    code: `class Person
{
    private string name;
    public string Name
    {
        get => name;
        set => name = value;
    }
}`
  },
  {
    question: "13. What is a static constructor?",
    answer: "A static constructor initializes static members of the class and is called only once.",
    explanation: "It runs automatically before the first instance is created or any static members are referenced.",
    code: `class Demo
{
    static Demo() => Console.WriteLine("Static constructor called");
}`
  },
  {
    question: "14. What is a namespace in C#?",
    answer: "A namespace is a container that organizes classes and other types logically.",
    explanation: "It prevents naming conflicts and organizes code.",
    code: `namespace MyApp
{
    class MyClass { }
}`
  },
  {
    question: "15. What is the difference between 'break' and 'continue'?",
    answer: "'break' exits the loop; 'continue' skips to the next iteration.",
    explanation: "'break' ends the loop, while 'continue' skips current iteration only.",
    code: `for (int i = 0; i < 5; i++)
{
    if (i == 2) continue;
    Console.WriteLine(i);
}`
  },
  {
    question: "16. What is a delegate in C#?",
    answer: "A delegate is a type-safe function pointer that refers to a method.",
    explanation: "It is used for implementing events and callback methods.",
    code: `delegate void Greet(string name);

class Program
{
    static void SayHello(string name) => Console.WriteLine("Hello " + name);

    static void Main()
    {
        Greet greet = SayHello;
        greet("Divya");
    }
}`
  },
  {
    question: "17. What is the difference between 'is' and 'as' operators?",
    answer: "'is' checks if an object is of a specific type; 'as' attempts to cast and returns null if it fails.",
    explanation: "'is' returns bool, 'as' returns object or null.",
    code: `object obj = "Hello";

if (obj is string) Console.WriteLine("It's a string");

string str = obj as string;
if (str != null) Console.WriteLine(str);`
  },
  {
    question: "18. What is exception handling in C#?",
    answer: "Exception handling is a mechanism to handle runtime errors using try, catch, and finally blocks.",
    explanation: "It helps prevent application crashes and provides user-friendly error messages.",
    code: `try
{
    int x = 10 / 0;
}
catch (DivideByZeroException ex)
{
    Console.WriteLine("Cannot divide by zero");
}`
  },
  {
    question: "19. What is the difference between 'finally' and 'finalize' in C#?",
    answer: "'finally' is a block that executes after try/catch, regardless of an exception. 'finalize' is a method used for cleanup before garbage collection.",
    explanation: "They serve different purposes in resource management.",
    code: `try
{
    // Code that may throw an exception
}
finally
{
    // Cleanup code
}`
  },
  {
    question: "20. What is the difference between 'const' and 'readonly' in C#?",
    answer: "'const' fields are evaluated at compile-time and cannot be changed. 'readonly' fields are evaluated at runtime and can be assigned in the constructor.",
    explanation: "Use 'const' for values that never change and 'readonly' for values that are set at runtime.",
    code: `const double Pi = 3.14159;
readonly int Age;`
  },
  {
    question: "21. What is a nullable type in C#?",
    answer: "A nullable type allows value types to be assigned null.",
    explanation: "It’s useful for database operations and optional values.",
    code: `int? age = null;
if (age.HasValue)
    Console.WriteLine(age.Value);`
  },
  {
    question: "22. What is boxing and unboxing?",
    answer: "Boxing converts a value type to object; unboxing extracts it back.",
    explanation: "Boxing stores a value type in a reference type; unboxing does the reverse.",
    code: `int num = 123;
object obj = num;      // Boxing
int i = (int)obj;      // Unboxing`
  },
  {
    question: "23. What are extension methods?",
    answer: "Extension methods add new methods to existing types without modifying them.",
    explanation: "They are defined in static classes using 'this' keyword in parameters.",
    code: `public static class StringHelper
{
    public static int WordCount(this string str)
    {
        return str.Split(' ').Length;
    }
}`
  },
  {
    question: "24. What is LINQ in C#?",
    answer: "LINQ (Language Integrated Query) is used to query collections in a SQL-like manner.",
    explanation: "It allows querying arrays, collections, databases, etc., using a unified syntax.",
    code: `int[] nums = {1, 2, 3, 4};
var even = from n in nums where n % 2 == 0 select n;`
  },
  {
    question: "25. What is async and await in C#?",
    answer: "They are used for asynchronous programming to avoid blocking the main thread.",
    explanation: "'await' pauses the method until the awaited task completes.",
    code: `async Task<string> GetDataAsync()
{
    await Task.Delay(1000);
    return "Done";
}`
  },
  {
    question: "26. What is a thread in C#?",
    answer: "A thread is the smallest unit of execution in a program.",
    explanation: "It allows parallel execution of code, useful for multitasking.",
    code: `Thread t = new Thread(() => Console.WriteLine("Running..."));
t.Start();`
  },
  {
    question: "27. What is the 'lock' statement?",
    answer: "'lock' ensures that one thread does not enter a critical section of code while another thread is in it.",
    explanation: "Used to handle thread synchronization and avoid race conditions.",
    code: `lock (someObject)
{
    // Critical section
}`
  },
  {
    question: "28. What is a generic in C#?",
    answer: "Generics allow you to define a class or method with a placeholder for the data type.",
    explanation: "It improves type safety and performance.",
    code: `class Box<T>
{
    public T Value;
}`
  },
  {
    question: "29. What is the use of 'var' keyword?",
    answer: "'var' allows implicit typing; the type is inferred by the compiler.",
    explanation: "Used when the type is obvious or long to write.",
    code: `var name = "Divya";
var age = 25;`
  },
  {
    question: "30. What are access modifiers in C#?",
    answer: "Access modifiers define the visibility of a class or its members.",
    explanation: "Examples include public, private, protected, internal.",
    code: `public class Car
{
    private string model;
}`
  }
];

 

      
  
export default function CsharpInterviewQuestions() {
    return (
      <>
        <div className="min-h-screen bg-gradient-to-br from-blue-600 via-sky-500 to-blue-400 flex flex-col items-center p-4">
          <SubNavbarIQ />
          <div className="max-w-6xl w-full mt-[90px] p-4 sm:p-6 overflow-y-scroll scrollbar-hide h-[80dvh] ">
            <h1 className="text-4xl font-extrabold text-center text-white mb-10 drop-shadow-lg">
             C# Language Interview Questions
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
  