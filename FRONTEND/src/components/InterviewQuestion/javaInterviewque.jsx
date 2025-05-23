import React from 'react';
import SubNavbar from '../SubNavbar';
import SubNavbarIQ from '../SubNavbarIQ';

const questions =  [
    {
      question: "1. What is Java?",
      answer: "Java is a high-level, class-based, object-oriented programming language designed to have as few implementation dependencies as possible. It is intended to let application developers write once, run anywhere (WORA).",
      explanation: "Java achieves platform independence by compiling source code into bytecode, which can run on any platform that has a Java Virtual Machine (JVM).",
      code: `public class HelloWorld {
    public static void main(String[] args) {
      System.out.println("Hello, World!");
    }
  }`
    },
    {
      question: "2. What are the main features of Java?",
      answer: "Java features include object-oriented, platform-independent, multithreaded, secure, robust, architecture-neutral, portable, high-performance, distributed, and dynamic.",
      explanation: "These features make Java suitable for building a wide range of applications, from mobile apps to large-scale enterprise systems.",
      code: `// No code example for this conceptual question`
    },
    {
      question: "3. What is the difference between JDK, JRE, and JVM?",
      answer: "JDK (Java Development Kit) is a software development kit used to develop Java applications. JRE (Java Runtime Environment) provides libraries and JVM to run Java applications. JVM (Java Virtual Machine) is an engine that provides runtime environment to execute Java bytecode.",
      explanation: "JDK includes JRE and development tools, while JRE includes JVM and libraries to run Java applications.",
      code: `// No code example for this conceptual question`
    },
    {
      question: "4. What is a class in Java?",
      answer: "A class in Java is a blueprint from which individual objects are created. It defines a datatype by bundling data and methods that operate on the data into one single unit.",
      explanation: "Classes are fundamental to object-oriented programming in Java, encapsulating data for the object and methods to manipulate that data.",
      code: `class Car {
    String model;
    int year;
    
    void start() {
      System.out.println("Car is starting");
    }
  }`
    },
    {
      question: "5. What is an object in Java?",
      answer: "An object is an instance of a class. It contains both data (attributes) and methods (functions) that operate on the data.",
      explanation: "Objects are the basic units of Object-Oriented Programming, representing real-world entities.",
      code: `Car myCar = new Car();
  myCar.model = "Toyota";
  myCar.year = 2020;
  myCar.start();`
    },
    {
      question: "6. What is inheritance in Java?",
      answer: "Inheritance is a mechanism wherein a new class is derived from an existing class. The derived class (subclass) inherits attributes and methods of the base class (superclass).",
      explanation: "It promotes code reusability and establishes a relationship between parent and child classes.",
      code: `class Vehicle {
    void start() {
      System.out.println("Vehicle is starting");
    }
  }
  
  class Car extends Vehicle {
    void drive() {
      System.out.println("Car is driving");
    }
  }`
    },
    {
      question: "7. What is polymorphism in Java?",
      answer: "Polymorphism allows objects to be treated as instances of their parent class. The most common use of polymorphism is when a parent class reference is used to refer to a child class object.",
      explanation: "It enables one interface to be used for a general class of actions, making it easier to scale and add functionalities.",
      code: `class Animal {
    void sound() {
      System.out.println("Animal makes a sound");
    }
  }
  
  class Dog extends Animal {
    void sound() {
      System.out.println("Dog barks");
    }
  }` 
    },
    {
      question: "8. What is encapsulation in Java?",
      answer: "Encapsulation is the wrapping of data (variables) and code (methods) together as a single unit. It restricts direct access to some of an object's components and can prevent unintended interference and misuse of the data.",
      explanation: "It helps in data hiding and provides a controlled way to access and modify the data.",
      code: `class Person {
    private String name;
    
    public String getName() {
      return name;
    }
    
    public void setName(String name) {
      this.name = name;
    }
  }`
    },
    {
      question: "9. What is abstraction in Java?",
      answer: "Abstraction is the concept of hiding the complex implementation details and showing only the necessary features of an object.",
      explanation: "It helps in reducing programming complexity and effort.",
      code: `abstract class Animal {
    abstract void sound();
  }
  
  class Dog extends Animal {
    void sound() {
      System.out.println("Dog barks");
    }
  }`
    },
    {
      question: "10. What is the difference between method overloading and method overriding?",
      answer: "Method overloading is defining multiple methods with the same name but different parameters. Method overriding is redefining a method in a subclass that was already defined in its superclass.",
      explanation: "Overloading is resolved at compile-time, while overriding is resolved at runtime.",
      code: `class Animal {
    void sound() {
      System.out.println("Animal makes a sound");
    }
    
    void sound(String type) {
      System.out.println("Animal makes a " + type + " sound");
    }
  }
  
  class Dog extends Animal {
    @Override
    void sound() {
      System.out.println("Dog barks");
    }
  }` 
    },
    {
      question: "11. What are constructors in Java?",
      answer: "Constructors are special methods used to initialize objects. They are called when an object of a class is created.",
      explanation: "Constructors have the same name as the class and do not have a return type.",
      code: `class Car {
    String model;
    
    Car(String model) {
      this.model = model;
    }
  }` 
    },
    {
      question: "12. What is the difference between '==' and 'equals()' in Java?",
      answer: "'==' compares the reference (memory address) of two objects, while 'equals()' compares the actual content of the objects.",
      explanation: "Use '==' for reference comparison and 'equals()' for content comparison.",
      code: `String str1 = new String("Hello");
  String str2 = new String("Hello");
  
  System.out.println(str1 == str2); // false
  System.out.println(str1.equals(str2)); // true`
    },
    {
      question: "13. What is the 'final' keyword in Java?",
      answer: "The 'final' keyword is used to define constants, prevent method overriding, and prevent inheritance.",
      explanation: "It can be applied to variables, methods, and classes.",
      code: `final int MAX_SPEED = 120;
  
  final class Car {
    // class code
  }
  
  final void start() {
    // method code
  }` 
    },
    {
      question: "14. What is the 'static' keyword in Java?",
      answer: "The 'static' keyword is used for memory management and can be applied to variables, methods, blocks, and nested classes.",
      explanation: "It indicates that the member belongs to the class rather than instances of the class.",
      code: `class Car {
    static int count = 0;
    
    Car() {
      count++;
    }
  }` 
    },
    {
      question: "15. What is the 'this' keyword in Java?",
      answer: "The 'this' keyword refers to the current instance of a class.",
      explanation: "It is used to refer to the current object's attributes and methods.",
      code: `class Car {
    String model;
    
    Car(String model) {
      this.model = model;
    }
  }` 
    },
    {
      question: "16. What is the 'super' keyword in Java?",
      answer: "The 'super' keyword refers to the superclass (parent class) of the current object.",
      explanation: "It is used to access superclass methods and constructors.",
      code: `class Animal {
    void sound() {
      System.out.println("Animal makes a sound");
    }
  }
  
  class Dog extends Animal {
    void sound() {
      super.sound();
      System.out.println("Dog barks");
    }
  }` 
    },
    {
      question: "17. What is the 'instanceof' keyword in Java?",
      answer: "The 'instanceof' keyword is used to test whether an object is an instance of a specific class or subclass.",
      explanation: "It helps in type checking during runtime.",
      code: `String str = "Hello";
  System.out.println(str instanceof String); // true` 
    },
    {
      question: "18. What are access modifiers in Java?",
      answer: "Access modifiers in Java are keywords that set the accessibility of classes, constructors, methods, and other members.",
      explanation: "They include 'public', 'protected', 'private', and default (no modifier).",
      code: `public class Car {
    private String model;
    
    public void setModel(String model) {
      this.model = model;
    }
    
    public String getModel() {
      return model;
    }
  }` 
    },
    {
      question: "19. What is the 'default' access modifier in Java?",
      answer: "The 'default' access modifier (no modifier) allows access to members within the same package.",
      explanation: "It provides package-level access, meaning the member is accessible to other classes in the same package but not outside it.",
      code: `class Car {
    String model; // default access modifier
    
    void start() {
      System.out.println("Car is starting");
    }
  }` 
    },
    {
      question: "20. What is the 'protected' access modifier in Java?",
      answer: "The 'protected' access modifier allows access to members within the same package and subclasses (including those in different packages).",
      explanation: "It provides a level of access control that is more restrictive than 'public' but less restrictive than 'private'.",
      code: `class Car {
    protected String model;
    
    protected void start() {
      System.out.println("Car is starting");
    }
  }` 
    },
    {
      question: "21. What is the 'private' access modifier in Java?",
      answer: "The 'private' access modifier restricts access to members within the same class only.",
      explanation: "It is the most restrictive access level, ensuring that members are not accessible outside their class.",
      code: `class Car {
    private String model;
    
    private void start() {
      System.out.println("Car is starting");
    }
  }` 
    },

        {
          question: "23. What is the difference between `==` and `equals()` in Java?",
          answer: "`==` compares object references (memory addresses), while `equals()` compares the actual content of the objects.",
          explanation: "Use `equals()` when you want to compare the content of objects, and `==` when you want to compare their references.",
          code: `String str1 = "hello";
      String str2 = "hello";
      System.out.println(str1 == str2); // true
      System.out.println(str1.equals(str2)); // true`
        },
        {
          question: "24. What is the purpose of the `final` keyword in Java?",
          answer: "The `final` keyword is used to define constants, prevent method overriding, and prevent inheritance.",
          explanation: "A `final` variable cannot be reassigned, a `final` method cannot be overridden, and a `final` class cannot be subclassed.",
          code: `final int MAX_VALUE = 100;
      // MAX_VALUE = 200; // This will cause a compilation error`
        },
        {
          question: "25. What is the difference between `ArrayList` and `LinkedList`?",
          answer: "`ArrayList` is backed by a dynamic array, while `LinkedList` is backed by a doubly-linked list.",
          explanation: "`ArrayList` provides fast random access but slower insertions and deletions, whereas `LinkedList` provides slower random access but faster insertions and deletions.",
          code: `List<String> arrayList = new ArrayList<>();
      List<String> linkedList = new LinkedList<>();`
        },
        {
          question: "26. What is the purpose of the `transient` keyword in Java?",
          answer: "The `transient` keyword is used to indicate that a field should not be serialized.",
          explanation: "When an object is serialized, the `transient` fields are not included in the serialization process.",
          code: `private transient int tempData;`
        },
        {
          question: "27. What is the difference between `StringBuilder` and `StringBuffer`?",
          answer: "`StringBuilder` is not synchronized and is faster, while `StringBuffer` is synchronized and thread-safe.",
          explanation: "Use `StringBuilder` when thread safety is not a concern, and `StringBuffer` when thread safety is required.",
          code: `StringBuilder sb = new StringBuilder();
      sb.append("Hello");
      StringBuffer sbf = new StringBuffer();
      sbf.append("World");`
        },
        {
          question: "28. What is the purpose of the `super` keyword in Java?",
          answer: "The `super` keyword is used to refer to the superclass of the current object.",
          explanation: "It can be used to access superclass methods, constructors, and fields.",
          code: `class Animal {
        void eat() {
          System.out.println("Animal is eating");
        }
      }
      
      class Dog extends Animal {
        void eat() {
          super.eat();
          System.out.println("Dog is eating");
        }
      }`
        },
        {
          question: "29. What is the difference between `throw` and `throws` in Java?",
          answer: "`throw` is used to explicitly throw an exception, while `throws` is used to declare exceptions that a method may throw.",
          explanation: "`throw` is followed by an instance of `Throwable`, and `throws` is used in a method signature.",
          code: `public void myMethod() throws IOException {
        throw new IOException("File not found");
      }`
        },
        {
          question: "30. What is the purpose of the `instanceof` operator in Java?",
          answer: "The `instanceof` operator is used to test whether an object is an instance of a specific class or subclass.",
          explanation: "It returns `true` if the object is an instance of the specified class or subclass, and `false` otherwise.",
          code: `String str = "Hello";
      System.out.println(str instanceof String); // true`
        }
      ];
      
  
export default function JavaInterviewQuestions() {
    return (
      <>
        <div className="min-h-screen bg-gradient-to-br from-blue-600 via-sky-500 to-blue-400 flex flex-col items-center p-4">
          <SubNavbarIQ />
          <div className="max-w-6xl w-full mt-[90px] p-4 sm:p-6 overflow-y-scroll scrollbar-hide h-[80dvh] ">
            <h1 className="text-4xl font-extrabold text-center text-white mb-10 drop-shadow-lg">
             Java Language Interview Questions
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
  