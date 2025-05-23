import React from 'react';
import SubNavbar from '../SubNavbar';
import SubNavbarIQ from '../SubNavbarIQ';

const questions  = [
  {
    question: "1. What is a Data Warehouse?",
    answer: "A data warehouse is a centralized repository used for reporting and data analysis.",
    explanation: "It stores historical data from different sources and helps in decision-making.",
    code: `// Example architecture: ETL -> Data Warehouse -> Reporting Tools`
  },
  {
    question: "2. What are the key characteristics of a Data Warehouse?",
    answer: "Subject-oriented, integrated, non-volatile, and time-variant.",
    explanation: "These properties help in organizing and analyzing historical data efficiently.",
    code: `// Stored data doesn't change frequently (non-volatile)`
  },
  {
    question: "3. What is ETL in Data Warehousing?",
    answer: "ETL stands for Extract, Transform, Load.",
    explanation: "ETL extracts data from sources, transforms it, and loads into the data warehouse.",
    code: `// ETL tools: Talend, Informatica, SSIS`
  },
  {
    question: "4. What is the difference between OLTP and OLAP?",
    answer: "OLTP handles day-to-day transactions; OLAP is used for analysis and queries.",
    explanation: "OLTP is optimized for fast insert/update/delete, OLAP for complex queries.",
    code: `// OLTP: INSERT/UPDATE; OLAP: SELECT with aggregation`
  },
  {
    question: "5. What is a data mart?",
    answer: "A data mart is a subset of a data warehouse focused on a specific business line.",
    explanation: "It simplifies access to relevant data for departments like sales or finance.",
    code: `// Example: Sales Data Mart for sales analysis`
  },
  {
    question: "6. What is dimensional modeling?",
    answer: "A modeling technique used to structure data into facts and dimensions.",
    explanation: "Makes data easy to retrieve for business intelligence tasks.",
    code: `// Schema: Fact Table + Dimension Tables`
  },
  {
    question: "7. What is a star schema?",
    answer: "A star schema consists of a central fact table linked to dimension tables.",
    explanation: "It simplifies queries and improves performance in OLAP systems.",
    code: `FactSales -> DimCustomer, DimProduct, DimDate`
  },
  {
    question: "8. What is a snowflake schema?",
    answer: "A snowflake schema is a normalized version of the star schema.",
    explanation: "It reduces redundancy but may slow down queries.",
    code: `DimProduct -> DimProductCategory`
  },
  {
    question: "9. What is a fact table?",
    answer: "A fact table contains measurable, quantitative data for analysis.",
    explanation: "It typically includes foreign keys to dimension tables.",
    code: `FactSales: SaleID, CustomerID, ProductID, Amount`
  },
  {
    question: "10. What is a dimension table?",
    answer: "A dimension table contains descriptive attributes related to dimensions.",
    explanation: "Used to filter, group, and label facts.",
    code: `DimProduct: ProductID, ProductName, Category`
  },
  {
    question: "11. What is granularity in data warehousing?",
    answer: "Granularity refers to the level of detail stored in a data warehouse.",
    explanation: "Finer granularity means more detailed data, coarser means summarized data.",
    code: `// Example: Daily vs Monthly Sales Data`
  },
  {
    question: "12. What is a surrogate key?",
    answer: "A surrogate key is a system-generated key used instead of a natural key.",
    explanation: "It ensures uniqueness and avoids key changes from operational data.",
    code: `CustomerID INT IDENTITY(1,1) PRIMARY KEY`
  },
  {
    question: "13. What is slowly changing dimension (SCD)?",
    answer: "SCD tracks changes in dimension attributes over time.",
    explanation: "Types: SCD Type 1 (overwrite), Type 2 (versioning), Type 3 (partial history).",
    code: `-- SCD Type 2 adds new row with version info`
  },
  {
    question: "14. What is data cleansing?",
    answer: "Data cleansing is the process of detecting and correcting inaccurate records.",
    explanation: "Essential for ensuring data quality in the warehouse.",
    code: `-- Removing nulls, duplicates, and invalid values`
  },
  {
    question: "15. What is metadata in a data warehouse?",
    answer: "Metadata is data about data, describing structure, origin, and usage.",
    explanation: "Helps users understand the data warehouse contents.",
    code: `-- Examples: Table descriptions, column types, lineage`
  },
  {
    question: "16. What is a data cube?",
    answer: "A data cube allows data to be modeled and viewed in multiple dimensions.",
    explanation: "Used in OLAP for faster analytical queries.",
    code: `-- Cube dimensions: Product, Time, Region`
  },
  {
    question: "17. What is data aggregation?",
    answer: "Data aggregation is the process of summarizing data.",
    explanation: "Used to compute metrics like total sales, averages, etc.",
    code: `SELECT Region, SUM(Sales) FROM FactSales GROUP BY Region;`
  },
  {
    question: "18. What are conformed dimensions?",
    answer: "Conformed dimensions are shared across different fact tables or data marts.",
    explanation: "They provide consistent reporting across the warehouse.",
    code: `DimCustomer used by FactSales and FactReturns`
  },
  {
    question: "19. What is a factless fact table?",
    answer: "A factless fact table records events or relationships without measures.",
    explanation: "Used to track occurrences like student attendance, product promotions.",
    code: `FactAttendance(StudentID, ClassID, Date)`
  },
  {
    question: "20. What is OLAP?",
    answer: "Online Analytical Processing (OLAP) is used for multidimensional analysis of data.",
    explanation: "OLAP enables fast answers to complex analytical queries.",
    code: `-- OLAP cube provides slicing, dicing, pivoting operations`
  },
  {
    question: "21. What is MOLAP, ROLAP, and HOLAP?",
    answer: "They are OLAP storage types: MOLAP uses multidimensional storage, ROLAP uses relational, and HOLAP is hybrid.",
    explanation: "Each has different performance and storage characteristics.",
    code: `-- MOLAP: High speed, low flexibility; ROLAP: Scalable; HOLAP: Balanced`
  },
  {
    question: "22. What is data lineage?",
    answer: "Data lineage describes the origin and transformation of data over its lifecycle.",
    explanation: "Useful for tracking errors and ensuring data integrity.",
    code: `-- ETL tools like Talend provide lineage tracking`
  },
  {
    question: "23. What are the components of a data warehouse architecture?",
    answer: "Data source, ETL process, staging area, data warehouse, data marts, and BI tools.",
    explanation: "Each component plays a role in collecting, processing, and analyzing data.",
    code: `// Diagram: Source → ETL → DW → Data Marts → Reporting`
  },
  {
    question: "24. What is a schema in data warehouse?",
    answer: "A schema defines the structure of the data warehouse, such as star, snowflake, or galaxy.",
    explanation: "It organizes fact and dimension tables for analysis.",
    code: `-- Star schema is most commonly used`
  },
  {
    question: "25. What is a data warehouse bus matrix?",
    answer: "It shows the relationship between business processes and dimensions.",
    explanation: "Used in dimensional modeling for planning.",
    code: `// Rows: Business Processes, Columns: Dimensions`
  },
  {
    question: "26. What is normalization and denormalization?",
    answer: "Normalization reduces redundancy; denormalization increases query speed by combining tables.",
    explanation: "Data warehouses often use denormalized schemas for performance.",
    code: `-- DimProduct contains Product and Category info`
  },
  {
    question: "27. What is data profiling?",
    answer: "Data profiling analyzes data to understand structure, content, and quality.",
    explanation: "Helps detect issues like missing values or inconsistencies.",
    code: `-- Used in the data preparation stage of ETL`
  },
  {
    question: "28. What is the role of a staging area in ETL?",
    answer: "The staging area temporarily stores raw data before transformation.",
    explanation: "It isolates source data for auditing and validation.",
    code: `-- Temporary tables used in ETL pipeline`
  },
  {
    question: "29. What is a dashboard in business intelligence?",
    answer: "A dashboard visually displays key metrics and data summaries.",
    explanation: "Used by executives and analysts to monitor performance.",
    code: `-- Tools: Power BI, Tableau, Looker`
  },
  {
    question: "30. What is a KPI (Key Performance Indicator)?",
    answer: "KPI is a measurable value that indicates how well a business is achieving objectives.",
    explanation: "KPIs are tracked using dashboards and reports from data warehouses.",
    code: `-- Example: Revenue Growth %, Customer Retention Rate`
  }
];


      
  
export default function DwhInterviewQuestions() {
    return (
      <>
        <div className="min-h-screen bg-gradient-to-br from-blue-600 via-sky-500 to-blue-400 flex flex-col items-center p-4">
          <SubNavbarIQ />
          <div className="max-w-6xl w-full mt-[90px] p-4 sm:p-6 overflow-y-scroll scrollbar-hide h-[80dvh] ">
            <h1 className="text-4xl font-extrabold text-center text-white mb-10 drop-shadow-lg">
             DataWare House Interview Questions
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
  