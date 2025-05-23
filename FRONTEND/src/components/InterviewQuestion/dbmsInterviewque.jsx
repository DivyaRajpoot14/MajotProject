import React from 'react';
import SubNavbar from '../SubNavbar';
import SubNavbarIQ from '../SubNavbarIQ';

const questions = [
  {
    question: "1. What is a DBMS?",
    answer: "A DBMS (Database Management System) is software that allows users to define, create, maintain, and control access to databases.",
    explanation: "It acts as an interface between users and the database, ensuring data is consistently organized and easily accessible.",
    code: `-- Example of creating a database in SQL
CREATE DATABASE SchoolDB;`
  },
  {
    question: "2. What is the difference between DBMS and RDBMS?",
    answer: "RDBMS (Relational DBMS) stores data in tables with relationships, while DBMS can be hierarchical or network-based and may not support relations.",
    explanation: "RDBMS follows the relational model introduced by E.F. Codd, whereas a DBMS might not enforce such structure.",
    code: `-- Creating a relational table
CREATE TABLE Students (
  ID INT PRIMARY KEY,
  Name VARCHAR(50),
  Age INT
);`
  },
  {
    question: "3. What is a primary key?",
    answer: "A primary key is a column or a combination of columns that uniquely identifies each row in a table.",
    explanation: "It must contain unique values and cannot have NULLs.",
    code: `CREATE TABLE Employees (
  EmpID INT PRIMARY KEY,
  EmpName VARCHAR(100)
);`
  },
  {
    question: "4. What is a foreign key?",
    answer: "A foreign key is a column that establishes a link between the data in two tables.",
    explanation: "It references the primary key in another table, ensuring referential integrity.",
    code: `CREATE TABLE Orders (
  OrderID INT,
  CustomerID INT,
  FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)
);`
  },
  {
    question: "5. What is normalization?",
    answer: "Normalization is the process of organizing data to reduce redundancy and improve data integrity.",
    explanation: "It involves dividing large tables into smaller ones and defining relationships between them.",
    code: `-- Splitting Customer and Orders into two tables to normalize
CREATE TABLE Customers (
  CustomerID INT PRIMARY KEY,
  CustomerName VARCHAR(100)
);

CREATE TABLE Orders (
  OrderID INT PRIMARY KEY,
  CustomerID INT,
  FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)
);`
  },
  {
    question: "6. What is denormalization?",
    answer: "Denormalization is the process of combining normalized tables to improve read performance.",
    explanation: "It may introduce redundancy but is useful in analytical queries where joins are expensive.",
    code: `-- Combined table for reporting
CREATE TABLE CustomerOrders (
  OrderID INT,
  CustomerName VARCHAR(100),
  OrderAmount DECIMAL
);`
  },
  {
    question: "7. What are the different types of keys in DBMS?",
    answer: "The different keys are Primary Key, Foreign Key, Candidate Key, Super Key, and Alternate Key.",
    explanation: "Each key plays a role in ensuring data integrity and uniqueness.",
    code: `-- Example of candidate keys
CREATE TABLE Users (
  UserID INT PRIMARY KEY,
  Email VARCHAR(100) UNIQUE
);`
  },
  {
    question: "8. What is SQL?",
    answer: "SQL (Structured Query Language) is a standard language used to interact with relational databases.",
    explanation: "SQL is used for querying, updating, and managing data.",
    code: `SELECT * FROM Students;`
  },
  {
    question: "9. What is a JOIN in SQL?",
    answer: "A JOIN is used to combine rows from two or more tables based on a related column.",
    explanation: "Types include INNER JOIN, LEFT JOIN, RIGHT JOIN, and FULL OUTER JOIN.",
    code: `SELECT Orders.OrderID, Customers.CustomerName
FROM Orders
INNER JOIN Customers ON Orders.CustomerID = Customers.CustomerID;`
  },
  {
    question: "10. What is an index in DBMS?",
    answer: "An index is a database object that improves the speed of data retrieval operations.",
    explanation: "It works like a table of contents in a book.",
    code: `CREATE INDEX idx_name ON Students(Name);`
  },
  {
    question: "11. What is a view in SQL?",
    answer: "A view is a virtual table based on the result-set of a SQL query.",
    explanation: "It allows users to simplify complex queries and enhance security.",
    code: `CREATE VIEW StudentView AS
SELECT Name, Age FROM Students WHERE Age > 18;`
  },
  {
    question: "12. What is a transaction in DBMS?",
    answer: "A transaction is a sequence of operations performed as a single logical unit of work.",
    explanation: "It must be ACID-compliant (Atomicity, Consistency, Isolation, Durability).",
    code: `BEGIN TRANSACTION;
UPDATE Accounts SET Balance = Balance - 100 WHERE AccountID = 1;
UPDATE Accounts SET Balance = Balance + 100 WHERE AccountID = 2;
COMMIT;`
  },
  {
    question: "13. What is a trigger in SQL?",
    answer: "A trigger is a set of SQL statements that automatically executes in response to certain events on a table.",
    explanation: "It is often used for enforcing rules or auditing.",
    code: `CREATE TRIGGER trg_UpdateDate
BEFORE UPDATE ON Students
FOR EACH ROW
SET NEW.UpdatedDate = NOW();`
  },
  {
    question: "14. What is the difference between DELETE and TRUNCATE?",
    answer: "DELETE removes specific rows and can be rolled back, whereas TRUNCATE removes all rows and cannot be rolled back.",
    explanation: "DELETE is DML, TRUNCATE is DDL.",
    code: `DELETE FROM Students WHERE Age < 18;
TRUNCATE TABLE Students;`
  },
  {
    question: "15. What is a stored procedure?",
    answer: "A stored procedure is a prepared SQL code that you can save and reuse.",
    explanation: "It helps improve performance and code reusability.",
    code: `CREATE PROCEDURE GetStudents()
BEGIN
  SELECT * FROM Students;
END;`
  },
    {
      question: "16. What is the ACID property in DBMS?",
      answer: "ACID stands for Atomicity, Consistency, Isolation, and Durability — properties that ensure reliable database transactions.",
      explanation: "These properties guarantee that database transactions are processed reliably even in case of failure.",
      code: `-- Example of a transaction
  BEGIN TRANSACTION;
  UPDATE Bank SET Balance = Balance - 500 WHERE AccountID = 1;
  UPDATE Bank SET Balance = Balance + 500 WHERE AccountID = 2;
  COMMIT;`
    },
    {
      question: "17. What is a cursor in SQL?",
      answer: "A cursor is a database object used to retrieve and manipulate row-by-row results from a result set.",
      explanation: "It is useful when you need to process rows individually.",
      code: `DECLARE cursor_name CURSOR FOR
  SELECT Name FROM Students;
  OPEN cursor_name;
  -- FETCH and process rows here
  CLOSE cursor_name;`
    },
    {
      question: "18. What is data redundancy?",
      answer: "Data redundancy means the same piece of data is stored in multiple places in a database.",
      explanation: "It can lead to inconsistency and unnecessary storage usage.",
      code: `-- Example: Redundant customer data in multiple tables
  CREATE TABLE Orders (
    OrderID INT,
    CustomerName VARCHAR(100), -- Redundant if also in Customers table
    Amount DECIMAL
  );`
    },
    {
      question: "19. What is data integrity?",
      answer: "Data integrity ensures that data is accurate, consistent, and reliable throughout its lifecycle.",
      explanation: "It is enforced using constraints like PRIMARY KEY, FOREIGN KEY, UNIQUE, and CHECK.",
      code: `CREATE TABLE Products (
    ProductID INT PRIMARY KEY,
    Price DECIMAL CHECK (Price > 0)
  );`
    },
    {
      question: "20. What is a schema in DBMS?",
      answer: "A schema is the logical structure that defines the organization of data in a database.",
      explanation: "It includes tables, views, relationships, indexes, etc.",
      code: `-- In SQL Server
  CREATE SCHEMA School;`
    },
    {
      question: "21. What is a subquery in SQL?",
      answer: "A subquery is a query nested inside another SQL query.",
      explanation: "It is used to perform intermediate calculations or filtering.",
      code: `SELECT Name FROM Students
  WHERE Age > (SELECT AVG(Age) FROM Students);`
    },
    {
      question: "22. What is the difference between WHERE and HAVING?",
      answer: "WHERE filters rows before grouping, HAVING filters groups after aggregation.",
      explanation: "HAVING is used with GROUP BY clauses.",
      code: `SELECT Department, COUNT(*) FROM Employees
  GROUP BY Department
  HAVING COUNT(*) > 5;`
    },
    {
      question: "23. What is an entity in DBMS?",
      answer: "An entity is a real-world object or concept that can have data stored about it.",
      explanation: "In ER modeling, entities become tables in the database.",
      code: `-- Entity: Student
  CREATE TABLE Student (
    StudentID INT,
    Name VARCHAR(100)
  );`
    },
    {
      question: "24. What is an ER diagram?",
      answer: "An ER (Entity-Relationship) diagram is a visual representation of entities and their relationships.",
      explanation: "It helps in database design and modeling.",
      code: `-- No direct SQL code, but tools like MySQL Workbench help draw ER diagrams.`
    },
    {
      question: "25. What is a composite key?",
      answer: "A composite key is a combination of two or more columns that uniquely identify a row.",
      explanation: "Used when a single column cannot uniquely identify records.",
      code: `CREATE TABLE Enrollment (
    StudentID INT,
    CourseID INT,
    PRIMARY KEY (StudentID, CourseID)
  );`
    },
    {
      question: "26. What is a unique key?",
      answer: "A unique key constraint ensures all values in a column are different.",
      explanation: "Unlike the primary key, a table can have multiple unique keys.",
      code: `CREATE TABLE Users (
    ID INT,
    Email VARCHAR(100) UNIQUE
  );`
    },
    {
      question: "27. What is a NULL value in DBMS?",
      answer: "NULL represents missing or unknown data in a database field.",
      explanation: "It is different from 0 or an empty string.",
      code: `SELECT * FROM Students WHERE Address IS NULL;`
    },
    {
      question: "28. What is a constraint in DBMS?",
      answer: "A constraint is a rule applied to columns to enforce data integrity.",
      explanation: "Types include NOT NULL, UNIQUE, PRIMARY KEY, FOREIGN KEY, and CHECK.",
      code: `CREATE TABLE Test (
    ID INT PRIMARY KEY,
    Score INT CHECK (Score <= 100)
  );`
    },
    {
      question: "29. What is a deadlock in DBMS?",
      answer: "A deadlock is a situation where two or more transactions are waiting for each other to release locks, resulting in a halt.",
      explanation: "It is resolved using timeout or deadlock detection algorithms.",
      code: `-- Handled internally by DBMS using lock timeouts or detection mechanisms.`
    },
    {
      question: "30. What is the difference between DDL and DML?",
      answer: "DDL (Data Definition Language) defines database structure. DML (Data Manipulation Language) handles data manipulation.",
      explanation: "Examples of DDL: CREATE, ALTER. DML: SELECT, INSERT, UPDATE.",
      code: `-- DDL
  CREATE TABLE Test (ID INT);
  
  -- DML
  INSERT INTO Test VALUES (1);`
    }

];


      
  
export default function DbmsInterviewQuestions() {
    return (
      <>
        <div className="min-h-screen bg-gradient-to-br from-blue-600 via-sky-500 to-blue-400 flex flex-col items-center p-4">
          <SubNavbarIQ />
          <div className="max-w-6xl w-full mt-[90px] p-4 sm:p-6 overflow-y-scroll scrollbar-hide h-[80dvh] ">
            <h1 className="text-4xl font-extrabold text-center text-white mb-10 drop-shadow-lg">
            Dbms  Interview Questions
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
  