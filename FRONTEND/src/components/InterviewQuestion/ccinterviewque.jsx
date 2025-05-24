import React from 'react';
import SubNavbar from '../SubNavbar';
import SubNavbarIQ from '../SubNavbarIQ';
const questions = [
  {
    question: "1. What is cloud computing?",
    answer: "Cloud computing is the delivery of computing services—including servers, storage, databases, networking, software, analytics, and intelligence—over the Internet ('the cloud') to offer faster innovation, flexible resources, and economies of scale.",
    explanation: "Cloud computing allows users to access and store data and applications on remote servers, reducing the need for local infrastructure and enabling scalability and flexibility.",
    code: "// No code example for this conceptual question"
  },
  {
    question: "2. What are the different service models in cloud computing?",
    answer: "The primary service models are Infrastructure as a Service (IaaS), Platform as a Service (PaaS), and Software as a Service (SaaS).",
    explanation: "IaaS provides virtualized computing resources over the internet. PaaS offers hardware and software tools over the internet. SaaS delivers software applications over the internet, on a subscription basis.",
    code: "// No code example for this conceptual question"
  },
  {
    question: "3. What is the difference between public, private, and hybrid clouds?",
    answer: "Public clouds are owned and operated by third-party service providers. Private clouds are used exclusively by a single organization. Hybrid clouds combine public and private clouds, allowing data and applications to be shared between them.",
    explanation: "Each cloud deployment model offers different levels of control, flexibility, and management. Organizations choose based on their specific needs and compliance requirements.",
    code: "// No code example for this conceptual question"
  },
  {
    question: "4. What is virtualization in cloud computing?",
    answer: "Virtualization is the creation of a virtual version of something, such as a server, a storage device, or network resources.",
    explanation: "It allows multiple operating systems and applications to run on the same physical hardware, increasing efficiency and scalability.",
    code: "// No code example for this conceptual question"
  },
  {
    question: "5. What are the benefits of cloud computing?",
    answer: "Benefits include cost efficiency, scalability, performance, speed and agility, and security.",
    explanation: "Cloud computing reduces the capital expense of buying hardware and software, offers flexible resources, and allows for faster innovation.",
    code: "// No code example for this conceptual question"
  },
  {
    question: "6. What is a hypervisor?",
    answer: "A hypervisor is software that creates and runs virtual machines (VMs).",
    explanation: "It allows multiple VMs to run on a single physical machine, sharing its resources.",
    code: "// No code example for this conceptual question"
  },
  {
    question: "7. What is the difference between scalability and elasticity in cloud computing?",
    answer: "Scalability is the ability to increase workload capacity within existing infrastructure. Elasticity is the ability to automatically increase or decrease resources as needed.",
    explanation: "Scalability is often manual and planned, while elasticity is automatic and responsive to workload changes.",
    code: "// No code example for this conceptual question"
  },
  {
    question: "8. What is load balancing in cloud computing?",
    answer: "Load balancing distributes incoming network traffic across multiple servers to ensure no single server becomes overwhelmed.",
    explanation: "It enhances the responsiveness and availability of applications.",
    code: "// No code example for this conceptual question"
  },
  {
    question: "9. What is auto-scaling in cloud computing?",
    answer: "Auto-scaling automatically adjusts the number of computing resources based on the current demand.",
    explanation: "It helps maintain performance and minimize costs by scaling resources up or down as needed.",
    code: "// No code example for this conceptual question"
  },
  {
    question: "10. What is a Virtual Private Cloud (VPC)?",
    answer: "A VPC is a secure, isolated private cloud hosted within a public cloud.",
    explanation: "It allows organizations to run resources in a virtual network that they define.",
    code: "// No code example for this conceptual question"
  },
  {
    question: "11. What is the role of APIs in cloud services?",
    answer: "APIs allow different software applications to communicate with each other.",
    explanation: "In cloud computing, APIs enable the integration and management of cloud services.",
    code: "// No code example for this conceptual question"
  },
  {
    question: "12. What is multi-tenancy in cloud computing?",
    answer: "Multi-tenancy is an architecture where a single instance of software serves multiple customers (tenants).",
    explanation: "Each tenant's data is isolated and remains invisible to other tenants.",
    code: "// No code example for this conceptual question"
  },
  {
    question: "13. What is the difference between vertical and horizontal scaling?",
    answer: "Vertical scaling adds more power (CPU, RAM) to an existing machine. Horizontal scaling adds more machines to handle the workload.",
    explanation: "Vertical scaling is limited by the capacity of a single machine, while horizontal scaling offers more flexibility and redundancy.",
    code: "// No code example for this conceptual question"
  },
  {
    question: "14. What is serverless computing?",
    answer: "Serverless computing allows developers to build and run applications without managing servers.",
    explanation: "The cloud provider automatically provisions, scales, and manages the infrastructure required to run the code.",
    code: "// No code example for this conceptual question"
  },
  {
    question: "15. What is Infrastructure as Code (IaC)?",
    answer: "IaC is the management of infrastructure through code instead of manual processes.",
    explanation: "It allows for automation and consistency in provisioning and managing infrastructure.",
    code: `# Example using Terraform
resource "aws_instance" "example" {
  ami           = "ami-0c55b159cbfafe1f0"
  instance_type = "t2.micro"
}`
  },
  {
    question: "16. What is the shared responsibility model in cloud computing?",
    answer: "It's a security framework that dictates the responsibilities of cloud providers and users.",
    explanation: "Providers manage the security of the cloud infrastructure, while users are responsible for securing their data and applications.",
    code: "// No code example for this conceptual question"
  },
  {
    question: "17. What is a Content Delivery Network (CDN)?",
    answer: "A CDN is a network of servers that deliver content to users based on their geographic location.",
    explanation: "It improves website load times and reduces latency by serving content from the nearest server.",
    code: "// No code example for this conceptual question"
  },
  {
    question: "18. What is cloud bursting?",
    answer: "Cloud bursting is a configuration where an application runs in a private cloud and bursts into a public cloud when demand increases.",
    explanation: "It allows for cost-effective scalability during peak demand periods.",
    code: "// No code example for this conceptual question"
  },
  {
    question: "19. What is a cloud service provider?",
    answer: "A cloud service provider offers services like IaaS, PaaS, and SaaS to customers.",
    explanation: "Examples include Amazon Web Services (AWS), Microsoft Azure, and Google Cloud Platform (GCP).",
    code: "// No code example for this conceptual question"
  },
  {
    question: "20. What is data redundancy in cloud computing?",
    answer: "Data redundancy involves storing copies of data in multiple locations.",
    explanation: "It ensures data availability and durability in case of hardware failures.",
    code: "// No code example for this conceptual question"
  },
  {
    question: "21. What is the role of containers in cloud computing?",
    answer: "Containers package applications and their dependencies into a single unit.",
    explanation: "They enable consistent deployment across different environments.",
    code: `# Example using Docker
FROM node:14
WORKDIR /app
COPY . .
RUN npm install
CMD ["node", "app.js"]`
  },
  {
    question: "22. What is the difference between containers and virtual machines?",
    answer: "Containers share the host OS kernel and are more lightweight. VMs have separate OS instances.",
    explanation: "Containers are faster to start and use fewer resources compared to VMs.",
    code: "// No code example for this conceptual question"
  },
  {
    question: "23. What is a cloud-native application?",
    answer: "A cloud-native application is designed to run in a cloud environment, leveraging its scalability and flexibility.",
    explanation: "These applications are typically built using microservices architecture and deployed in containers.",
    code: "// No code example for this conceptual question"
  },
  {
    question: "24. What is a service mesh?",
    answer: "A service mesh is a dedicated infrastructure layer for facilitating service-to-service communications.",
    explanation: "It provides features like load balancing, encryption, and authentication between services.",
    code: "// No code example for this conceptual question"
  },
  {
    question: "25. What is the purpose of monitoring in cloud computing?",
    answer: "Monitoring tracks the performance and health of cloud resources and applications.",
    explanation: "It helps in identifying issues, ensuring uptime, and optimizing resource usage.",
    code: "// No code example for this conceptual question"
  },
  {
    question: "26. What is a cloud firewall?",
    answer: "A cloud firewall is a security system that monitors and controls incoming and outgoing network traffic in a cloud environment.",
    explanation: "It protects cloud resources from unauthorized access and cyber threats.",
    code: "// No code example for this conceptual question"
  },
  {
    question: "27. What is the role of identity and access management (IAM) in cloud computing?",
    answer: "IAM manages user identities and their access to cloud resources.",
    explanation: "It ensures that only authorized users can access specific resources, enhancing security.",
    code: "// No code example for this conceptual question"
  },
  {
    question: "28. What is data encryption in cloud computing?",
    answer: "Data encryption converts data into a coded format to prevent unauthorized access.",
    explanation: "It protects data at rest and in transit within cloud environments.",
    code: "// No code example for this conceptual question"
  },
  {
    question: "29. What is the importance of compliance in cloud computing?",
    answer: "Compliance ensures that cloud services meet regulatory and legal standards.",
    explanation: "It helps organizations avoid legal penalties and maintain customer trust.",
    code: "// No code example for this conceptual question"
  },
  {
    question: "30. What is disaster recovery in cloud computing?",
    answer: "Disaster recovery (DR) in cloud computing is a strategy and set of processes to restore systems, data, and applications to a functional state after a disaster or outage.",
    explanation: "Cloud-based disaster recovery allows businesses to back up their data and IT infrastructure in a secure cloud environment and quickly restore operations after a system failure, natural disaster, or cyberattack. This reduces downtime and ensures business continuity.",
    code: `// Example AWS CLI command to copy backup data to a DR bucket
  aws s3 cp s3://primary-bucket/backup.zip s3://dr-bucket/backup.zip
  
  // Simulated pseudo-logic for automated failover
  if (primaryRegion.isDown()) {
      redirectTrafficTo(drRegion.endpoint);
      restoreFromBackup(drBucket, backupFile);
  }`
  }
];  
  
export default function CCInterviewQuestions() {
    return (
      <>
        <div className="min-h-screen bg-gradient-to-br from-blue-600 via-sky-500 to-blue-400 flex flex-col items-center p-4">
          <SubNavbarIQ />
          <div className="max-w-6xl w-full mt-[90px] p-4 sm:p-6 overflow-y-scroll scrollbar-hide h-[80dvh] ">
            <h1 className="text-4xl font-extrabold text-center text-white mb-10 drop-shadow-lg">
          Cloud Computing Interview Questions
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
  