import React from 'react';
import SubNavbar from '../SubNavbar';
import SubNavbarIQ from '../SubNavbarIQ';

export const questions = [
    {
      question: "1. What is the output of the following C program?\n\n#include <stdio.h>\nint main() {\n    int x = 5;\n    printf(\"%d\\n\", x++);\n    return 0;\n}",
      answer: "The output will be 5.",
      explanation: "The post-increment operator (x++) returns the value before incrementing. So, x is printed as 5 and then incremented to 6.",
      code: `#include <stdio.h>
  int main() {
      int x = 5;
      printf("%d\\n", x++);
      return 0;
  }`
    },
    {
      question: "2. Write a C program to check if a number is prime.",
      answer: "A number is prime if it is greater than 1 and divisible only by 1 and itself.",
      explanation: "We iterate from 2 to sqrt(n) to check for any divisors. If none are found, the number is prime.",
      code: `#include <stdio.h>
  #include <math.h>
  int main() {
      int n, i, flag = 0;
      printf("Enter a positive integer: ");
      scanf("%d", &n);
      if (n <= 1) {
          printf("Not a prime number.\\n");
          return 0;
      }
      for (i = 2; i <= sqrt(n); i++) {
          if (n % i == 0) {
              flag = 1;
              break;
          }
      }
      if (flag == 0)
          printf("%d is a prime number.\\n", n);
      else
          printf("%d is not a prime number.\\n", n);
      return 0;
  }`
    },
    {
      question: "3. Write a C program to find the factorial of a number using recursion.",
      answer: "Use a recursive function where factorial(n) = n * factorial(n-1).",
      explanation: "The recursion stops when n == 0 (base case), returning 1. For other values, it multiplies by the factorial of n-1.",
      code: `#include <stdio.h>
  int factorial(int n) {
      if (n == 0)
          return 1;
      else
          return n * factorial(n - 1);
  }
  int main() {
      int n;
      printf("Enter a number: ");
      scanf("%d", &n);
      printf("Factorial of %d is %d\\n", n, factorial(n));
      return 0;
  }`
    },
    {
      question: "4. What is a pointer in C? How is it declared and initialized?",
      answer: "A pointer is a variable that stores the memory address of another variable.",
      explanation: "Declaration uses '*' (e.g., `int *ptr;`). Initialization uses the '&' operator to get the address of a variable (e.g., `ptr = &x;`).",
      code: `#include <stdio.h>
  int main() {
      int x = 10;
      int *ptr;
      ptr = &x;
      printf("Value of x: %d\\n", x);
      printf("Address of x: %p\\n", &x);
      printf("Value of ptr: %p\\n", ptr);
      printf("Value pointed to by ptr: %d\\n", *ptr);
      return 0;
  }`
    },
    {
      question: "5. Explain the difference between `malloc()` and `calloc()`.",
      answer: "`malloc()` allocates a block of uninitialized memory, while `calloc()` allocates a block of initialized memory (all bits set to zero) and takes two arguments: number of elements and size of each element.",
      explanation: "`malloc(size)` allocates `size` bytes. `calloc(n, size)` allocates `n * size` bytes and initializes them to zero.",
      code: `#include <stdio.h>
  #include <stdlib.h>
  int main() {
      int *arr1 = (int*) malloc(5 * sizeof(int));
      int *arr2 = (int*) calloc(5, sizeof(int));
      if (arr1 == NULL || arr2 == NULL) {
          printf("Memory allocation failed.\\n");
          return 1;
      }
      printf("Memory allocated using malloc (uninitialized):\\n");
      for (int i = 0; i < 5; i++) {
          printf("%d ", arr1[i]);
      }
      printf("\\nMemory allocated using calloc (initialized to 0):\\n");
      for (int i = 0; i < 5; i++) {
          printf("%d ", arr2[i]);
      }
      free(arr1);
      free(arr2);
      return 0;
  }`
    },
    {
      question: "6. What is a structure in C? How is it defined and used?",
      answer: "A structure is a user-defined data type that can hold members of different data types.",
      explanation: "Defined using the `struct` keyword (e.g., `struct Point { int x; int y; };`). Accessed using the dot operator (e.g., `point1.x = 10;`).",
      code: `#include <stdio.h>
  struct Point {
      int x;
      int y;
  };
  int main() {
      struct Point p1;
      p1.x = 10;
      p1.y = 20;
      printf("x = %d, y = %d\\n", p1.x, p1.y);
      return 0;
  }`
    },
    {
      question: "7. Explain the difference between a structure and a union.",
      answer: "Structure allocates memory for all its members separately, while a union allocates memory equal to the size of its largest member, and only one member can be active at a time.",
      explanation: "Members of a structure exist independently. Members of a union share the same memory location.",
      code: `#include <stdio.h>
  struct StructExample {
      int a;
      char b;
  };
  union UnionExample {
      int a;
      char b;
  };
  int main() {
      struct StructExample s;
      s.a = 10;
      s.b = 'A';
      printf("Struct size: %lu, s.a: %d, s.b: %c\\n", sizeof(s), s.a, s.b);
      union UnionExample u;
      u.a = 10;
      printf("Union size: %lu, u.a: %d\\n", sizeof(u), u.a);
      u.b = 'A';
      printf("Union size: %lu, u.a: %d, u.b: %c\\n", sizeof(u), u.a, u.b); // Note: u.a is now affected by u.b
      return 0;
  }`
    },
    {
      question: "8. What are the different storage classes in C?",
      answer: "The storage classes are `auto`, `static`, `extern`, and `register`.",
      explanation: "`auto` (default, local), `static` (retains value between function calls, local or global), `extern` (reference to a global variable), `register` (suggests storing in a register for faster access).",
      code: `#include <stdio.h>
  int globalVar = 10; // extern by default
  void increment() {
      static int count = 0; // static local variable
      count++;
      printf("Count: %d\\n", count);
  }
  int main() {
      auto int localVar = 5; // auto local variable
      register int regVar = 10; // register variable
      extern int globalVar; // explicitly declared as extern
      printf("Local variable: %d\\n", localVar);
      printf("Register variable: %d\\n", regVar);
      printf("Global variable: %d\\n", globalVar);
      increment();
      increment();
      return 0;
  }`
    },
    {
      question: "9. Explain the difference between pass by value and pass by reference.",
      answer: "Pass by value sends a copy of the variable's value to the function, so changes inside the function do not affect the original. Pass by reference sends the memory address, allowing the function to modify the original variable.",
      explanation: "Pass by value uses direct variables. Pass by reference uses pointers.",
      code: `#include <stdio.h>
  void passByValue(int x) {
      x = x + 10;
      printf("Inside passByValue: x = %d\\n", x);
  }
  void passByReference(int *x) {
      *x = *x + 10;
      printf("Inside passByReference: *x = %d\\n", *x);
  }
  int main() {
      int a = 5;
      printf("Before passByValue: a = %d\\n", a);
      passByValue(a);
      printf("After passByValue: a = %d\\n", a);
      int b = 5;
      printf("Before passByReference: b = %d\\n", b);
      passByReference(&b);
      printf("After passByReference: b = %d\\n", b);
      return 0;
  }`
    },
    {
      question: "10. What are function pointers? How are they declared and used?",
      answer: "Function pointers are variables that store the memory address of a function.",
      explanation: "Declaration: `return_type (*ptr_name)(parameter_types);`. Usage: Assign a function's address to the pointer and then call the function using the pointer.",
      code: `#include <stdio.h>
  int add(int a, int b) {
      return a + b;
  }
  int subtract(int a, int b) {
      return a - b;
  }
  int main() {
      int (*operation)(int, int); // Function pointer declaration
      operation = add; // Assigning the address of add function
      printf("Addition: %d\\n", operation(5, 3));
      operation = subtract; // Assigning the address of subtract function
      printf("Subtraction: %d\\n", operation(5, 3));
      return 0;
  }`
    },
    {
      question: "11. What is recursion? Give an example.",
      answer: "Recursion is a programming technique where a function calls itself directly or indirectly.",
      explanation: "A recursive function must have a base case to stop the recursion.",
      code: `#include <stdio.h>
  int factorial(int n) {
      if (n == 0) {
          return 1; // Base case
      } else {
          return n * factorial(n - 1); // Recursive call
      }
  }
  int main() {
      int num = 5;
      printf("Factorial of %d is %d\\n", num, factorial(num));
      return 0;
  }`
    },
    {
      question: "12. What are command-line arguments in C?",
      answer: "Command-line arguments are parameters passed to the `main()` function when the program is executed from the command line.",
      explanation: "`main()` can have two parameters: `argc` (argument count) and `argv` (argument vector, an array of strings).",
      code: `#include <stdio.h>
  int main(int argc, char *argv[]) {
      printf("Number of arguments: %d\\n", argc);
      printf("Arguments are:\\n");
      for (int i = 0; i < argc; i++) {
          printf("argv[%d]: %s\\n", i, argv[i]);
      }
      return 0;
  }
  // Compilation and execution: gcc program.c && ./a.out arg1 arg2`
    },
    {
      question: "13. What is the difference between `#include <stdio.h>` and `#include \"myheader.h\"`?",
      answer: "`#include <stdio.h>` searches for the header file in the standard system directories, while `#include \"myheader.h\"` first searches in the current directory and then in the standard directories.",
      explanation: "Angle brackets `<>` are for system headers, double quotes `\"\"` are for user-defined headers.",
      code: `// myheader.h
  #ifndef MYHEADER_H
  #define MYHEADER_H
  void greet(char *name);
  #endif
  
  // myheader.c
  #include <stdio.h>
  #include "myheader.h"
  void greet(char *name) {
      printf("Hello, %s!\\n", name);
  }
  
  // main.c
  #include "myheader.h"
  int main() {
      greet("World");
      return 0;
  }`
    },
    {
      question: "14. Explain the use of the `static` keyword in C.",
      answer: "The `static` keyword has different meanings depending on the context: with local variables (retains value between function calls), with global variables (limits scope to the file), and with functions (limits scope to the file).",
      explanation: "Static local: persistent within the function. Static global/function: internal linkage.",
      code: `#include <stdio.h>
  // static global variable (only accessible in this file)
  static int fileSpecificVar = 20;
  void increment() {
      // static local variable (retains its value)
      static int count = 0;
      count++;
      printf("Count: %d\\n", count);
  }
  // static function (only callable within this file)
  static void printFileVar() {
      printf("File specific variable: %d\\n", fileSpecificVar);
  }
  int main() {
      increment(); // Output: Count: 1
      increment(); // Output: Count: 2
      printFileVar(); // Output: File specific variable: 20
      return 0;
  }`
    },
    {
      question: "15. What is a dangling pointer? How can it be avoided?",
      answer: "A dangling pointer is a pointer that points to a memory location that has been freed or no longer exists.",
      explanation: "Caused by freeing memory pointed to by a pointer and then still using the pointer, or when a local variable's address is returned from a function.",
      code: `#include <stdio.h>
  #include <stdlib.h>
  int *createAndFree() {
      int *ptr = (int*) malloc(sizeof(int));
      *ptr = 10;
      free(ptr);
      return ptr; // ptr is now a dangling pointer
  }
  int main() {
      int *danglingPtr = createAndFree();
      // Accessing danglingPtr here can lead to undefined behavior
      // Avoidance: Set pointers to NULL after freeing memory.
      int *safePtr = (int*) malloc(sizeof(int));
      *safePtr = 20;
      free(safePtr);
      safePtr = NULL; // Now safePtr is not dangling
      return 0;
  }`
    },
    {
      question: "16. What is memory leak? How can it be prevented?",
      answer: "A memory leak occurs when memory is allocated dynamically but is not deallocated properly, leading to wasted memory resources.",
      explanation: "Caused by forgetting to use `free()` for dynamically allocated memory.",
      code: `#include <stdio.h>
  #include <stdlib.h>
  void allocateMemory() {
      int *ptr = (int*) malloc(100 * sizeof(int));
      // ... use ptr ...
      // Missing free(ptr) will cause a memory leak
  }
  void preventLeak() {
      int *ptr = (int*) malloc(100 * sizeof(int));
      // ... use ptr ...
      free(ptr); // Memory is deallocated, preventing a leak
  }
  int main() {
      allocateMemory(); // Potential memory leak
      preventLeak();    // Memory leak prevented
      return 0;
  }`
    },
    {
      question: "17. What are bitwise operators in C? List them.",
      answer: "Bitwise operators perform operations at the individual bit level.",
      explanation: "AND (`&`), OR (`|`), XOR (`^`), NOT (`~`), Left Shift (`<<`), Right Shift (`>>`).",
      code: `#include <stdio.h>
  int main() {
      unsigned int a = 60;  // 0011 1100
      unsigned int b = 13;  // 0000 1101
      int result = 0;
      result = a & b;       // 0000 1100 (12)
      printf("a & b = %d\\n", result);
      result = a | b;       // 0011 1101 (61)
      printf("a | b = %d\\n", result);
      result = a ^ b;       // 0011 0001 (49)
      printf("a ^ b = %d\\n", result);
      result = ~a;          // 1100 0011 (-61 in 32-bit signed)
      printf("~a = %d\\
      n", result);
    result = a << 2;      // 1111 0000 (240)
    printf("a << 2 = %d\\n", result);
    result = a >> 2;      // 0000 1111 (15)
    printf("a >> 2 = %d\\n", result);
    return 0;
}`
  },
  {
    question: "18. What are the different types of loops in C?",
    answer: "There are three main types of loops in C: `for`, `while`, and `do-while`.",
    explanation: "`for` loop is used when the number of iterations is known. `while` loop continues as long as the condition is true (condition checked before execution). `do-while` loop executes at least once and then continues as long as the condition is true (condition checked after execution).",
    code: `#include <stdio.h>
int main() {
    // for loop
    for (int i = 0; i < 5; i++) {
        printf("for: %d\\n", i);
    }
    // while loop
    int j = 0;
    while (j < 5) {
        printf("while: %d\\n", j);
        j++;
    }
    // do-while loop
    int k = 0;
    do {
        printf("do-while: %d\\n", k);
        k++;
    } while (k < 5);
    return 0;
}`
  },
  {
    question: "19. Explain the use of `break` and `continue` statements in loops.",
    answer: "`break` statement terminates the loop immediately and transfers control to the statement following the loop. `continue` statement skips the current iteration of the loop and proceeds to the next iteration.",
    code: `#include <stdio.h>
int main() {
    // break example
    for (int i = 0; i < 10; i++) {
        if (i == 5) {
            break;
        }
        printf("break: %d\\n", i);
    }
    // continue example
    for (int i = 0; i < 10; i++) {
        if (i % 2 == 0) {
            continue;
        }
        printf("continue: %d\\n", i);
    }
    return 0;
}`
  },
  {
    question: "20. What is a string in C? How is it represented?",
    answer: "A string in C is an array of characters terminated by a null character (`\\0`).",
    explanation: "Strings are typically declared as character arrays (e.g., `char str[20];`) or using character pointers (e.g., `char *str = \"Hello\";`).",
    code: `#include <stdio.h>
int main() {
    char str1[6] = {'H', 'e', 'l', 'l', 'o', '\\0'};
    char str2[] = "World";
    char *str3 = "C Programming";
    printf("String 1: %s\\n", str1);
    printf("String 2: %s\\n", str2);
    printf("String 3: %s\\n", str3);
    return 0;
}`
  },
  {
    question: "21. What are some common string manipulation functions in C?",
    answer: "Some common functions include `strlen()`, `strcpy()`, `strcat()`, `strcmp()`, `strncpy()`, `strncat()`, `strncmp()`, which are part of the `string.h` library.",
    explanation: "`strlen`: length, `strcpy`: copy, `strcat`: concatenate, `strcmp`: compare, `strncpy`, `strncat`, `strncmp`: their bounded counterparts.",
    code: `#include <stdio.h>
#include <string.h>
int main() {
    char str1[20] = "Hello";
    char str2[] = "World";
    printf("Length of str1: %lu\\n", strlen(str1));
    strcpy(str1, str2);
    printf("strcpy(str1, str2): %s\\n", str1);
    strcat(str1, "!");
    printf("strcat(str1, \"!\"): %s\\n", str1);
    printf("strcmp(\"abc\", \"abd\"): %d\\n", strcmp("abc", "abd"));
    return 0;
}`
  },
  {
    question: "22. What is type casting in C? Give an example.",
    answer: "Type casting is the process of converting a variable from one data type to another.",
    explanation: "Can be implicit (automatic by the compiler) or explicit (using the cast operator `(type)`).",
    code: `#include <stdio.h>
int main() {
    int integerVar = 10;
    float floatVar;
    // Implicit type casting
    floatVar = integerVar;
    printf("Implicit cast: floatVar = %f\\n", floatVar);
    float anotherFloat = 7.5;
    int anotherInteger;
    // Explicit type casting
    anotherInteger = (int) anotherFloat;
    printf("Explicit cast: anotherInteger = %d\\n", anotherInteger);
    return 0;
}`
  },
  {
    question: "23. What are preprocessor directives in C? List some common ones.",
    answer: "Preprocessor directives are commands that are processed by the C preprocessor before compilation.",
    explanation: "Common directives include `#include`, `#define`, `#ifdef`, `#ifndef`, `#else`, `#endif`, `#undef`.",
    code: `#include <stdio.h>
#define PI 3.14159
#ifdef DEBUG
    #define LOG(msg) printf("DEBUG: %s\\n", msg)
#else
    #define LOG(msg)
#endif
int main() {
    printf("Value of PI: %f\\n", PI);
    LOG("Program started");
    return 0;
}`
  },
  {
    question: "24. Explain the difference between `#define` and `const` for defining constants.",
    answer: "`#define` is a preprocessor directive that performs text substitution before compilation, while `const` declares a variable whose value cannot be changed after initialization, with type checking.",
    explanation: "`#define` is simpler but lacks type safety and scope. `const` provides type safety and respects scope rules.",
    code: `#include <stdio.h>
#define LIMIT 100 // Preprocessor definition
const int MAX = 200; // Constant variable
int main() {
    int arr1[LIMIT]; // Valid
    // int arr2[MAX]; // Also valid, but MAX has a type
    printf("LIMIT: %d, MAX: %d\\n", LIMIT, MAX);
    // LIMIT = 150; // Error: Left operand is not an lvalue
    // MAX = 250;   // Error: assignment of read-only variable 'MAX'
    return 0;
}`
  },
  {
    question: "25. What are header files in C? What is their purpose?",
    answer: "Header files contain declarations of functions, macros, and data types that can be used in multiple source files.",
    explanation: "They allow for code reusability and modularity. Standard library functions are declared in header files like `stdio.h`, `string.h`, `math.h`, etc.",
    code: `// my_math.h
#ifndef MY_MATH_H
#define MY_MATH_H
int add(int a, int b);
int multiply(int a, int b);
#endif

// my_math.c
#include "my_math.h"
int add(int a, int b) {
    return a + b;
}
int multiply(int a, int b) {
    return a * b;
}

// main.c
#include <stdio.h>
#include "my_math.h"
int main() {
    int sum = add(5, 3);
    int product = multiply(5, 3);
    printf("Sum: %d, Product: %d\\n", sum, product);
    return 0;
}`
  },
  {
    question: "26. What is the difference between a structure and an array?",
    answer: "An array is a collection of elements of the same data type, stored in contiguous memory locations. A structure is a collection of members of different data types, also stored in contiguous memory (usually, with potential padding).",
    explanation: "Arrays are for homogeneous data, structures are for heterogeneous data.",
    code: `#include <stdio.h>
struct Point {
    int x;
    int y;
};
int main() {
    int numbers[5] = {1, 2, 3, 4, 5}; // Array of integers
    struct Point p1 = {10, 20};       // Structure with integer members
    printf("Array element: %d\\n", numbers[0]);
    printf("Structure member: %d\\n", p1.x);
    return 0;
}`
  },
  {
    question: "27. What is enumeration in C? How is it defined and used?",
    answer: "Enumeration (`enum`) is a user-defined data type that consists of named integer constants.",
    explanation: "Defined using the `enum` keyword (e.g., `enum Color { RED, GREEN, BLUE };`). Used to make code more readable.",
    code: `#include <stdio.h>
enum Color {
    RED,   // 0
    GREEN, // 1
    BLUE   // 2
};
int main() {
    enum Color myColor = GREEN;
    printf("My color is %d\\n", myColor);
    if (myColor == GREEN) {
        printf("It's green!\\n");
    }
    return 0;
}`
  },
  {
    question: "28. Explain the use of the `typedef` keyword in C.",
    answer: "`typedef` is used to create an alias (a new name) for an existing data type.",
    explanation: "It can make code more readable and can be useful for complex data types.",
    code: `#include <stdio.h>
typedef int integer;
typedef unsigned char byte;
typedef struct {
    char name[50];
    int age;
} Person;
int main() {
    integer count = 10;
    byte data = 255;
    Person p1 = {"Alice", 30};
    printf("Count: %d, Data: %d\\n", count, data);
    printf("Person: Name = %s, Age = %d\\n", p1.name, p1.age);
    return 0;
}`
  },
  {
    question: "29. What is the difference between `fopen()`, `fread()`, `fwrite()`, and `fclose()`?",
    answer: "`fopen()` opens a file with a specified mode (read, write, etc.). `fread()` reads data from a file. `fwrite()` writes data to a file. `fclose()` closes an opened file.",
    explanation: "These are standard library functions in `stdio.h` for file input/output operations.",
    code: `#include <stdio.h>
#include <stdlib.h>
int main() {
    FILE *fp;
    char buffer[20];
    // Writing to a file
    fp = fopen("myfile.txt", "w");
    if (fp == NULL) {
        perror("Error opening file for writing");
        return 1;
    }
    fwrite("Hello, world!", 1, 13, fp);
    fclose(fp);
    // Reading from a file
    fp = fopen("myfile.txt", "r");
    if (fp == NULL) {
        perror("Error opening file for reading");
        return 1;
    }
    fread(buffer, 1, 13, fp);
    buffer[13] = '\\0';
    printf("Read from file: %s\\n", buffer);
    fclose(fp);
    return 0;
}`
  },
  {
    question: "30. What are the different file opening modes in `fopen()`?",
    answer: "Common modes include `\"r\"` (read), `\"w\"` (write, creates or overwrites), `\"a\"` (append), `\"r+\"` (read and write), `\"w+\"` (read and write, creates or overwrites), `\"a+\"` (read and append). Binary modes are `\"rb\"`, `\"wb\"`, `\"ab\"`, `\"r+b\"`, `\"w+b\"`, `\"a+b\"`.",
    explanation: "The mode string specifies the intended operation on the file.",
    code: `#include <stdio.h>
#include <stdlib.h>
int main() {
    FILE *fp;
    // Read mode
    fp = fopen("existing_file.txt", "r");
    if (fp == NULL) perror("Error opening for read"); else fclose(fp);
    // Write mode (creates or overwrites)
    fp = fopen("new_file.txt", "w");
    if (fp == NULL) perror("Error opening for write"); else fclose(fp);
    // Append mode (adds to the end)
    fp = fopen("existing_file.txt", "a");
    if (fp == NULL) perror("Error opening for append"); else fclose(fp);
    return 0;
}`
  }
  // You would continue this pattern for the remaining 20 questions
];

export default function CInterviewQuestions() {
    return (
      <>
        <div className="min-h-screen bg-gradient-to-br from-blue-600 via-sky-500 to-blue-400 flex flex-col items-center p-4">
          <SubNavbarIQ />
          <div className="max-w-6xl w-full mt-[90px] p-4 sm:p-6 overflow-y-scroll scrollbar-hide h-[80dvh] ">
            <h1 className="text-4xl font-extrabold text-center text-white mb-10 drop-shadow-lg">
             C Language Interview Questions
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
  