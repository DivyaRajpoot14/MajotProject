import React from 'react';
import SubNavbar from '../SubNavbar';
import SubNavbarIQ from '../SubNavbarIQ';

const questions = [
  {
    question: "1. What is ASP.NET?",
    answer: "ASP.NET is a server-side web application framework developed by Microsoft.",
    explanation: "It allows developers to build dynamic web pages, web applications, and web services using .NET languages like C#.",
    code: `// Example: ASP.NET web forms or MVC apps`
  },
  {
    question: "2. What are the main components of ASP.NET?",
    answer: "Web Forms, MVC, Web API, and SignalR.",
    explanation: "These components help build different types of web applications: Web Forms for event-driven apps, MVC for model-view-controller apps, Web API for REST services, and SignalR for real-time communication.",
    code: `// Example: MVC Controller and View`
  },
  {
    question: "3. What is the difference between ASP.NET Web Forms and ASP.NET MVC?",
    answer: "Web Forms uses event-driven and stateful programming; MVC uses a pattern separating data, UI, and control.",
    explanation: "MVC offers better control over HTML, supports TDD, and is more suited for modern web apps than Web Forms.",
    code: `// Web Forms: .aspx pages; MVC: Controllers and Views`
  },
  {
    question: "4. What is ViewState in ASP.NET?",
    answer: "ViewState is a method to preserve page and control values between postbacks.",
    explanation: "It stores the state of controls in a hidden field on the page, so data is not lost on postback.",
    code: `// Enable ViewState: EnableViewState=\"true\"`
  },
  {
    question: "5. What are postbacks in ASP.NET?",
    answer: "Postback is the process of submitting an ASP.NET page to the server for processing.",
    explanation: "It allows the server to process user actions and return updated content.",
    code: `// Example: Button click causes postback`
  },
  {
    question: "6. What is the Global.asax file?",
    answer: "Global.asax is an optional file used to handle application-level events.",
    explanation: "It contains event handlers like Application_Start, Application_End, Session_Start, etc.",
    code: `// void Application_Start(object sender, EventArgs e) { }`
  },
  {
    question: "7. What is the difference between Server.Transfer and Response.Redirect?",
    answer: "Server.Transfer transfers execution to another page on the server without a round trip; Response.Redirect sends an HTTP redirect to the browser.",
    explanation: "Server.Transfer is faster but URL in browser doesn't change; Response.Redirect changes the URL but is slower due to extra round trip.",
    code: `// Server.Transfer(\"Page2.aspx\");`
  },
  {
    question: "8. What are the different validation controls in ASP.NET?",
    answer: "RequiredFieldValidator, RangeValidator, RegularExpressionValidator, CompareValidator, CustomValidator, ValidationSummary.",
    explanation: "They provide client and server-side validation to ensure data integrity.",
    code: `<asp:RequiredFieldValidator ID=\"rfv\" ControlToValidate=\"txtName\" ErrorMessage=\"Name required\" runat=\"server\" />`
  },
  {
    question: "9. What is the ASP.NET Page Life Cycle?",
    answer: "It is the series of events from page request to rendering and unloading.",
    explanation: "Includes Init, Load, Postback event handling, Rendering, and Unload phases.",
    code: `// Example: protected void Page_Load(object sender, EventArgs e) { }`
  },
  {
    question: "10. What is caching in ASP.NET?",
    answer: "Caching stores frequently used data or pages to improve performance.",
    explanation: "It reduces server processing and database hits by storing data in memory.",
    code: `// Response.Cache.SetExpires(DateTime.Now.AddMinutes(10));`
  },
  {
    question: "11. What is Session State in ASP.NET?",
    answer: "Session state stores user data for the duration of the user session.",
    explanation: "It allows persisting user-specific data across multiple pages.",
    code: `// Session[\"UserName\"] = \"John\";`
  },
  {
    question: "12. What are the different modes of session state?",
    answer: "InProc, StateServer, SQLServer, Custom, and Off.",
    explanation: "They specify where session data is stored: in-process memory, out-of-process server, database, or custom store.",
    code: `// <sessionState mode=\"InProc\" timeout=\"20\" />`
  },
  {
    question: "13. What is ViewState and how is it different from Session State?",
    answer: "ViewState stores data in a hidden field on the page; Session State stores data on the server.",
    explanation: "ViewState persists page state between postbacks; Session persists data across pages and user visits.",
    code: `// ViewState[\"Key\"] = value;`
  },
  {
    question: "14. What is the difference between Application State and Session State?",
    answer: "Application state is shared across all users; session state is per user.",
    explanation: "Application state stores global data, while session state stores user-specific data.",
    code: `// Application[\"AppData\"] = value;`
  },
  {
    question: "15. How do you handle errors in ASP.NET?",
    answer: "Using try-catch blocks, custom error pages, and the Application_Error event in Global.asax.",
    explanation: "Custom error pages improve user experience by displaying friendly messages.",
    code: `// try { } catch (Exception ex) { }`
  },
  {
    question: "16. What is an HTTP Handler in ASP.NET?",
    answer: "HTTP Handlers process HTTP requests for specific resource types.",
    explanation: "They implement the IHttpHandler interface and are used for custom processing like serving images.",
    code: `// public class MyHandler : IHttpHandler { public void ProcessRequest(HttpContext context) { } }`
  },
  {
    question: "17. What is an HTTP Module?",
    answer: "HTTP Modules are components that handle request pipeline events.",
    explanation: "They can inspect or modify requests and responses globally.",
    code: `// public class MyModule : IHttpModule { public void Init(HttpApplication app) { } }`
  },
  {
    question: "18. What is the difference between Server.MapPath and ResolveUrl?",
    answer: "Server.MapPath returns the physical path on the server; ResolveUrl converts a relative URL to an absolute URL.",
    explanation: "MapPath is used for file operations; ResolveUrl is for generating URLs in web pages.",
    code: `// string path = Server.MapPath(\"~/files\");`
  },
  {
    question: "19. What is the role of the Web.config file?",
    answer: "Web.config stores configuration settings for the web application.",
    explanation: "It contains settings like connection strings, session state, authentication, and custom errors.",
    code: `// <configuration><connectionStrings>...</connectionStrings></configuration>`
  },
  {
    question: "20. How do you implement authentication in ASP.NET?",
    answer: "Using forms authentication, Windows authentication, or custom authentication.",
    explanation: "Forms authentication uses cookies to identify logged-in users.",
    code: `// <authentication mode=\"Forms\">...</authentication>`
  },
  {
    question: "21. What is the difference between Authentication and Authorization?",
    answer: "Authentication verifies user identity; authorization checks permissions to access resources.",
    explanation: "Both are crucial for securing applications.",
    code: `// Authenticated user allowed to access resource`
  },
  {
    question: "22. What is Razor in ASP.NET MVC?",
    answer: "Razor is a view engine that uses C# syntax to embed server code in HTML.",
    explanation: "It simplifies markup and logic integration in views.",
    code: `// @model MyModel <h1>@Model.Title</h1>`
  },
  {
    question: "23. What is the purpose of the Global.asax file?",
    answer: "To handle application-level events like Application_Start and Session_Start.",
    explanation: "It allows centralized event handling for the application lifecycle.",
    code: `// void Application_Error(object sender, EventArgs e) { }`
  },
  {
    question: "24. How do you maintain state in ASP.NET MVC?",
    answer: "Using TempData, ViewBag, ViewData, cookies, session state, or query strings.",
    explanation: "Each has different lifetimes and purposes.",
    code: `// TempData[\"Message\"] = \"Success\";`
  },
  {
    question: "25. What is Web API?",
    answer: "ASP.NET Web API is a framework for building RESTful HTTP services.",
    explanation: "It supports CRUD operations over HTTP and works well with clients like browsers and mobile apps.",
    code: `// public class ProductsController : ApiController { }`
  },
  {
    question: "26. What are Bundling and Minification?",
    answer: "Techniques to improve web app performance by reducing the number and size of HTTP requests.",
    explanation: "Bundling combines multiple files; minification removes whitespace and comments.",
    code: `// bundles.Add(new ScriptBundle(\"~/bundles/jquery\").Include(\"jquery.js\"));`
  },
  {
    question: "27. What is Entity Framework?",
    answer: "Entity Framework is an Object-Relational Mapper (ORM) for .NET.",
    explanation: "It allows developers to work with databases using .NET objects without writing SQL.",
    code: `// var products = context.Products.ToList();`
  },
  {
    question: "28. How do you implement dependency injection in ASP.NET Core?",
    answer: "Using built-in DI container via IServiceCollection in Startup.cs.",
    explanation: "Services are registered and then injected into constructors.",
    code: `// services.AddTransient<IMyService, MyService>();`
  },
  {
    question: "29. What is Middleware in ASP.NET Core?",
    answer: "Middleware are components that form the HTTP request pipeline.",
    explanation: "Each middleware can process requests and responses, and call the next component.",
    code: `// app.UseAuthentication(); app.UseAuthorization();`
  },
  {
    question: "30. What is Tag Helper in ASP.NET Core?",
    answer: "Tag Helpers enable server-side code to participate in creating and rendering HTML elements.",
    explanation: "They provide a cleaner syntax than traditional HTML helpers.",
    code: `<a asp-controller=\"Home\" asp-action=\"Index\">Home</a>`
  }
];

      
  
export default function AspInterviewQuestions() {
    return (
      <>
        <div className="min-h-screen bg-gradient-to-br from-blue-600 via-sky-500 to-blue-400 flex flex-col items-center p-4">
          <SubNavbarIQ />
          <div className="max-w-6xl w-full mt-[90px] p-4 sm:p-6 overflow-y-scroll scrollbar-hide h-[80dvh] ">
            <h1 className="text-4xl font-extrabold text-center text-white mb-10 drop-shadow-lg">
          Asp.NET Language Interview Questions
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
  