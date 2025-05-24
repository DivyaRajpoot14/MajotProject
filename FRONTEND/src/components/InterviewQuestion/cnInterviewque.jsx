import React from 'react';
import SubNavbar from '../SubNavbar';
import SubNavbarIQ from '../SubNavbarIQ';

const questions = [
  {
    question: "1. What is a computer network?",
    answer: "A computer network is a collection of interconnected devices that can communicate and share resources.",
    explanation: "Networks allow data exchange between computers, enabling communication and resource sharing such as files and printers.",
    code: `// Example: LAN, WAN, Internet`
  },
  {
    question: "2. What are the types of computer networks?",
    answer: "LAN, WAN, MAN, PAN, and CAN are common types of networks.",
    explanation: "They differ by geographic scope: LAN (local), WAN (wide), MAN (metropolitan), PAN (personal), CAN (campus).",
    code: `// LAN: Office network, WAN: The Internet`
  },
  {
    question: "3. What is the OSI model?",
    answer: "The OSI model is a conceptual framework with 7 layers to understand networking functions.",
    explanation: "Layers: Physical, Data Link, Network, Transport, Session, Presentation, Application.",
    code: `// Layer 3 = Network layer (IP routing)`
  },
  {
    question: "4. What is TCP/IP?",
    answer: "TCP/IP is a protocol suite used for internetworking and the basis of the Internet.",
    explanation: "It consists of layers: Link, Internet, Transport (TCP/UDP), and Application.",
    code: `// TCP = Reliable connection-oriented protocol`
  },
  {
    question: "5. What is the difference between TCP and UDP?",
    answer: "TCP is connection-oriented and reliable; UDP is connectionless and faster but unreliable.",
    explanation: "TCP guarantees delivery, UDP does not, suitable for streaming or gaming.",
    code: `// TCP: HTTP, UDP: DNS, VoIP`
  },
  {
    question: "6. What is an IP address?",
    answer: "An IP address is a unique identifier for a device on a network.",
    explanation: "IPv4 addresses are 32-bit, IPv6 are 128-bit.",
    code: `// IPv4: 192.168.1.1, IPv6: 2001:0db8::1`
  },
  {
    question: "7. What is subnetting?",
    answer: "Subnetting divides a large network into smaller sub-networks to improve management and security.",
    explanation: "It involves splitting IP address space using subnet masks.",
    code: `// 192.168.1.0/24 into two subnets: /25 and /25`
  },
  {
    question: "8. What is DNS?",
    answer: "DNS translates domain names into IP addresses.",
    explanation: "It allows users to access websites via readable names instead of numeric IPs.",
    code: `// www.example.com → 93.184.216.34`
  },
  {
    question: "9. What is a MAC address?",
    answer: "MAC address is a hardware identifier assigned to a network interface card.",
    explanation: "It uniquely identifies devices at the data link layer.",
    code: `// Example: 00:1A:2B:3C:4D:5E`
  },
  {
    question: "10. What is a router?",
    answer: "A router forwards data packets between different networks.",
    explanation: "It connects LANs to WANs and routes traffic efficiently.",
    code: `// Router routes packets between home network and Internet`
  },
  {
    question: "11. What is a switch?",
    answer: "A switch connects devices within a LAN and forwards data based on MAC addresses.",
    explanation: "Switches operate at the data link layer and reduce collisions.",
    code: `// Switch connects multiple PCs in an office`
  },
  {
    question: "12. What is a firewall?",
    answer: "A firewall controls incoming and outgoing network traffic based on security rules.",
    explanation: "It protects networks from unauthorized access and attacks.",
    code: `// Example: Blocking certain IP addresses`
  },
  {
    question: "13. What is a protocol?",
    answer: "A protocol is a set of rules that govern data communication.",
    explanation: "It ensures devices can understand each other and communicate effectively.",
    code: `// HTTP, FTP, SMTP are examples of protocols`
  },
  {
    question: "14. What is the difference between a hub and a switch?",
    answer: "A hub broadcasts data to all ports; a switch sends data only to the destination device.",
    explanation: "Switches reduce network collisions and improve performance.",
    code: `// Hub is less efficient than a switch`
  },
  {
    question: "15. What is packet switching?",
    answer: "Packet switching breaks data into packets for transmission over the network.",
    explanation: "Each packet may take different paths and is reassembled at destination.",
    code: `// Internet uses packet switching`
  },
  {
    question: "16. What is latency?",
    answer: "Latency is the delay between sending and receiving data.",
    explanation: "Lower latency means faster communication.",
    code: `// Ping measures latency in milliseconds`
  },
  {
    question: "17. What is bandwidth?",
    answer: "Bandwidth is the maximum data transfer rate of a network connection.",
    explanation: "Measured in bits per second (bps), higher bandwidth means more data can be sent.",
    code: `// 100 Mbps Ethernet`
  },
  {
    question: "18. What is NAT?",
    answer: "Network Address Translation translates private IP addresses to a public IP address.",
    explanation: "Allows multiple devices to share one public IP.",
    code: `// Router performing NAT in home network`
  },
  {
    question: "19. What is ARP?",
    answer: "Address Resolution Protocol maps IP addresses to MAC addresses on a local network.",
    explanation: "It enables communication at the data link layer.",
    code: `// ARP request and reply process`
  },
  {
    question: "20. What is a VLAN?",
    answer: "Virtual LAN segments a physical network into multiple logical networks.",
    explanation: "Improves security and traffic management.",
    code: `// VLANs separate traffic between departments`
  },
  {
    question: "21. What is DHCP?",
    answer: "Dynamic Host Configuration Protocol automatically assigns IP addresses to devices.",
    explanation: "Simplifies network configuration.",
    code: `// DHCP server assigns IP like 192.168.1.10`
  },
  {
    question: "22. What is the difference between symmetric and asymmetric encryption?",
    answer: "Symmetric uses the same key for encryption and decryption; asymmetric uses a public/private key pair.",
    explanation: "Asymmetric is slower but more secure for key exchange.",
    code: `// SSL/TLS uses asymmetric encryption for handshake`
  },
  {
    question: "23. What is a proxy server?",
    answer: "A proxy server acts as an intermediary between a client and the internet.",
    explanation: "It can filter requests, improve performance, and provide anonymity.",
    code: `// Proxy caches web content to speed up access`
  },
  {
    question: "24. What is HTTP?",
    answer: "HyperText Transfer Protocol is the foundation of data communication on the web.",
    explanation: "Defines how messages are formatted and transmitted.",
    code: `// HTTP GET and POST requests`
  },
  {
    question: "25. What is SSL/TLS?",
    answer: "SSL/TLS protocols provide secure encrypted communication over a network.",
    explanation: "They ensure confidentiality and data integrity.",
    code: `// HTTPS uses SSL/TLS`
  },
  {
    question: "26. What is a socket?",
    answer: "A socket is an endpoint for sending or receiving data across a network.",
    explanation: "It includes IP address and port number.",
    code: `// Socket programming in TCP/IP`
  },
  {
    question: "27. What is the difference between unicast, multicast, and broadcast?",
    answer: "Unicast sends to a single destination, multicast to a group, broadcast to all devices in a network.",
    explanation: "Different ways to distribute data efficiently.",
    code: `// Broadcast example: ARP request`
  },
  {
    question: "28. What is ICMP?",
    answer: "Internet Control Message Protocol is used for error messages and diagnostics.",
    explanation: "Used by tools like ping and traceroute.",
    code: `// Ping uses ICMP echo requests/replies`
  },
  {
    question: "29. What is a subnet mask?",
    answer: "A subnet mask divides the IP address into network and host portions.",
    explanation: "It helps determine which subnet an IP belongs to.",
    code: `// 255.255.255.0 subnet mask`
  },
  {
    question: "30. What is the difference between a public IP and a private IP?",
    answer: "Public IP is globally unique and accessible over the Internet; private IP is used within private networks.",
    explanation: "Private IPs are not routable on the Internet.",
    code: `// Private IP range: 192.168.x.x, Public IP example: 8.8.8.8`
  }
];





      
  
export default function CnInterviewQuestions() {
    return (
      <>
        <div className="min-h-screen bg-gradient-to-br from-blue-600 via-sky-500 to-blue-400 flex flex-col items-center p-4">
          <SubNavbarIQ />
          <div className="max-w-6xl w-full mt-[90px] p-4 sm:p-6 overflow-y-scroll scrollbar-hide h-[80dvh] ">
            <h1 className="text-4xl font-extrabold text-center text-white mb-10 drop-shadow-lg">
     Computer Network Interview Questions
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
  