import React from 'react';
import SubNavbar from '../SubNavbar';
import SubNavbarIQ from '../SubNavbarIQ';

const questions = [
  {
    question: "1. What is an Operating System?",
    answer: "An Operating System (OS) is system software that manages hardware and software resources.",
    explanation: "It provides services for computer programs and acts as an intermediary between users and hardware.",
    code: `// Example: Windows, Linux, macOS`
  },
  {
    question: "2. What are the main functions of an OS?",
    answer: "Process management, memory management, file system management, device management, and security.",
    explanation: "These functions ensure efficient operation and resource allocation.",
    code: `// Example: Scheduling processes, allocating RAM`
  },
  {
    question: "3. What is a process?",
    answer: "A process is an instance of a program in execution.",
    explanation: "Each process has its own memory space, code, and data.",
    code: `// Example: Running Chrome and VS Code simultaneously`
  },
  {
    question: "4. What is a thread?",
    answer: "A thread is the smallest unit of CPU execution within a process.",
    explanation: "Multiple threads can exist within one process, sharing memory.",
    code: `// Example: Downloading and rendering in a browser tab`
  },
  {
    question: "5. What is multitasking?",
    answer: "Multitasking allows multiple processes to run concurrently.",
    explanation: "The CPU switches between tasks quickly to provide parallelism.",
    code: `// Example: Listening to music while typing a document`
  },
  {
    question: "6. What is the difference between process and program?",
    answer: "A program is a passive set of instructions; a process is the active execution of those instructions.",
    explanation: "A process is created when a program runs.",
    code: `// Example: Notepad.exe (program) vs Notepad process`
  },
  {
    question: "7. What is a system call?",
    answer: "A system call is a way for programs to request services from the OS.",
    explanation: "It provides a controlled interface to hardware resources.",
    code: `// Example: open(), read(), write(), fork()`
  },
  {
    question: "8. What is a kernel?",
    answer: "The kernel is the core part of the OS that manages system resources.",
    explanation: "It handles communication between hardware and software.",
    code: `// Example: Linux kernel, Windows NT kernel`
  },
  {
    question: "9. What are the types of kernels?",
    answer: "Monolithic kernel, Microkernel, Hybrid kernel.",
    explanation: "They differ in how system components are structured and executed.",
    code: `// Linux: Monolithic, Windows: Hybrid, Minix: Microkernel`
  },
  {
    question: "10. What is scheduling in OS?",
    answer: "Scheduling is the method of allocating CPU time to processes.",
    explanation: "It decides which process runs next using algorithms.",
    code: `// Example: FCFS, SJF, Round Robin`
  },
  {
    question: "11. What is a deadlock?",
    answer: "Deadlock is a situation where processes wait indefinitely for resources held by each other.",
    explanation: "No process can proceed or be terminated.",
    code: `// Circular wait between processes`
  },
  {
    question: "12. What are the necessary conditions for deadlock?",
    answer: "Mutual exclusion, hold and wait, no preemption, circular wait.",
    explanation: "All must be true for a deadlock to occur.",
    code: `// Example: Printers and scanners locked by two processes`
  },
  {
    question: "13. What is virtual memory?",
    answer: "Virtual memory is a memory management technique that gives the illusion of more memory than physically available.",
    explanation: "It uses disk space to extend RAM.",
    code: `// Example: Swapping data to/from disk`
  },
  {
    question: "14. What is paging?",
    answer: "Paging is a memory management scheme that eliminates the need for contiguous memory.",
    explanation: "It divides memory into fixed-size pages and frames.",
    code: `// Page table maps virtual to physical addresses`
  },
  {
    question: "15. What is segmentation?",
    answer: "Segmentation divides memory into variable-size segments based on logical divisions.",
    explanation: "Each segment has a name and length.",
    code: `// Code, data, stack segments`
  },
  {
    question: "16. What is thrashing?",
    answer: "Thrashing occurs when excessive paging reduces CPU efficiency.",
    explanation: "Processes spend more time swapping pages than executing.",
    code: `// Caused by insufficient memory`
  },
  {
    question: "17. What is a file system?",
    answer: "A file system organizes and stores data on storage devices.",
    explanation: "It manages file access, naming, and permissions.",
    code: `// Example: NTFS, FAT32, ext4`
  },
  {
    question: "18. What is context switching?",
    answer: "Context switching is the process of saving and loading process states.",
    explanation: "It allows multitasking by switching CPU from one process to another.",
    code: `// Switch between Process A and Process B`
  },
  {
    question: "19. What is a race condition?",
    answer: "A race condition occurs when multiple processes access shared data concurrently.",
    explanation: "The final result depends on the order of execution.",
    code: `// Two threads incrementing a counter`
  },
  {
    question: "20. What is a critical section?",
    answer: "A critical section is a code segment that accesses shared resources.",
    explanation: "Only one process should execute it at a time.",
    code: `// Use mutex/semaphores to protect critical section`
  },
  {
    question: "21. What are semaphores?",
    answer: "Semaphores are signaling mechanisms to control access to shared resources.",
    explanation: "Used to solve synchronization problems.",
    code: `// wait() and signal() operations`
  },
  {
    question: "22. What is the difference between logical and physical address?",
    answer: "Logical address is generated by CPU; physical address is the actual location in memory.",
    explanation: "Logical to physical mapping is done by MMU.",
    code: `// Virtual Address: 0xAF21 → Physical Address: 0x1F21`
  },
  {
    question: "23. What is demand paging?",
    answer: "Demand paging loads pages into memory only when needed.",
    explanation: "It improves memory efficiency.",
    code: `// Page fault triggers loading from disk`
  },
  {
    question: "24. What is a page fault?",
    answer: "A page fault occurs when a program accesses a page not currently in memory.",
    explanation: "The OS loads the page from disk into RAM.",
    code: `// Handled by page fault handler`
  },
  {
    question: "25. What is an inode?",
    answer: "An inode is a data structure used to represent a file in Unix-based systems.",
    explanation: "It stores metadata like size, ownership, and permissions.",
    code: `// ls -i shows inode number`
  },
  {
    question: "26. What is swap space?",
    answer: "Swap space is disk space used as virtual memory when RAM is full.",
    explanation: "It holds inactive pages temporarily.",
    code: `// Linux: /swapfile or swap partition`
  },
  {
    question: "27. What is booting?",
    answer: "Booting is the process of starting a computer and loading the OS.",
    explanation: "Involves BIOS/UEFI, bootloader, and OS kernel.",
    code: `// Bootloader: GRUB in Linux`
  },
  {
    question: "28. What is fragmentation?",
    answer: "Fragmentation occurs when storage space is used inefficiently.",
    explanation: "It can be internal or external.",
    code: `// Example: Memory blocks too small for new data`
  },
  {
    question: "29. What is the difference between compaction and paging?",
    answer: "Compaction reduces fragmentation by rearranging memory; paging avoids it using fixed-size pages.",
    explanation: "Paging is hardware-supported and more efficient.",
    code: `// Paging uses page tables, compaction is OS-managed`
  },
  {
    question: "30. What is the difference between cooperative and preemptive multitasking?",
    answer: "In cooperative multitasking, a process voluntarily yields CPU; in preemptive, the OS forcibly switches.",
    explanation: "Modern OS use preemptive multitasking for fairness.",
    code: `// Preemptive: Windows, Linux; Cooperative: Early Mac OS`
  }
];




      
  
export default function OsInterviewQuestions() {
    return (
      <>
        <div className="min-h-screen bg-gradient-to-br from-blue-600 via-sky-500 to-blue-400 flex flex-col items-center p-4">
          <SubNavbarIQ />
          <div className="max-w-6xl w-full mt-[90px] p-4 sm:p-6 overflow-y-scroll scrollbar-hide h-[80dvh] ">
            <h1 className="text-4xl font-extrabold text-center text-white mb-10 drop-shadow-lg">
        Operating System Interview Questions
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
  