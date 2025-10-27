// // "use client"

// // import { useState } from "react"
// // import { Button } from "@/components/ui/button"
// // import { Input } from "@/components/ui/input"
// // import { MessageSquare, Send } from "lucide-react"
// // import { ChatMessage } from "@/components/chat-message"
// // import Link from "next/link"

// // interface Message {
// //   id: string
// //   role: "user" | "assistant"
// //   content: string
// //   avatar?: string
// // }

// // interface ChatSidebarProps {
// //   isOpen: boolean
// //   onToggle: () => void

// // }

// // export function ChatArea({ isOpen, onToggle }: ChatSidebarProps) {
// //   const [messages, setMessages] = useState<Message[]>([
// //     {
// //       id: "1",
// //       role: "assistant",
// //       content: "Hello! How can I help you today?",
// //       avatar: "/bot.jpg",
// //     },

// //   ])

// //   const [input, setInput] = useState("")

// //   const handleSend = () => {
// //     if (input.trim()) {
// //       const newMessage: Message = {
// //         id: Date.now().toString(),
// //         role: "user",
// //         content: input,
// //         avatar: "/user.jpg",
// //       }
// //       setMessages([...messages, newMessage])
// //       setInput("")

// //       setTimeout(() => {
// //         const aiResponse: Message = {
// //           id: (Date.now() + 1).toString(),
// //           role: "assistant",
// //           content: "Thank you for providing that information. How else can I assist you?",
// //           avatar: "/bot.jpg",
// //         }
// //         setMessages((prev) => [...prev, aiResponse])
// //       }, 500)
// //     }
// //   }

// //   return (
// //     <div className="flex-1 flex flex-col overflow-hidden ">

// //       {
// //         isOpen ?
// //           <span className={`text-xl font-bold pl-2 py-3 border-b-1`}>
// //             <button className="flex" onClick={onToggle}>
// //               <img className="h-5 w-5 justify-center items-center " src='sidebar1.png' />
// //             </button >
// //           </span>
// //           :
// //           <div className="flex items-center pl-3 gap-3 py-3 border-1">

// //             <MessageSquare className={`h-5 w-5 text-primary `} />
// //             <span className={`text-xl font-extrabold text-primary`}>SupportAI</span>
// //           </div>

// //       }

// //       <div className="flex-1 overflow-y-auto p-6 space-y-4">
// //         {messages.map((message) => (
// //           <ChatMessage key={message.id} message={message} />
// //         ))}
// //       </div>

// //       <div className="border-t border-border bg-card p-4">
// //         <div className="flex gap-3">
// //           <Input
// //             placeholder="Type your message..."
// //             value={input}
// //             onChange={(e) => setInput(e.target.value)}
// //             onKeyPress={(e) => e.key === "Enter" && handleSend()}
// //             className="flex-1"
// //           />
// //           <Button onClick={handleSend} className="bg-primary hover:bg-primary/90 text-primary-foreground px-6">
// //             <Send className="w-4 h-4 mr-2" />
// //             Send
// //           </Button>
// //         </div>
// //       </div>
// //     </div>
// //   )
// // }


// "use client";

// import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { MessageSquare, Send } from "lucide-react";
// import { ChatMessage } from "@/components/chat-message";

// interface Message {
//   id: string;
//   role: "user" | "assistant";
//   content: string;
//   avatar?: string;
// }

// interface ChatSidebarProps {
//   isOpen: boolean;
//   onToggle: () => void;
// }

// export function ChatArea({ isOpen, onToggle }: ChatSidebarProps) {
//   const router = useRouter();
//   const [messages, setMessages] = useState<Message[]>([
//     {
//       id: "1",
//       role: "assistant",
//       content: "Hello! How can I help you today?",
//       avatar: "/bot.jpg",
//     },
//   ]);
//   const [input, setInput] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const [isValidating, setIsValidating] = useState(true);

//   // // Helper: get token from localStorage
//   // const getToken = (): string | null => {
//   //   if (typeof window === "undefined") return null;
//   //   return localStorage.getItem("token");
//   // };

//   // // Helper: remove token
//   // const removeToken = (): void => {
//   //   if (typeof window === "undefined") return;
//   //   localStorage.removeItem("token");
//   // };

//   // // useEffect: Check token first with fetch
//   useEffect(() => {
//     const validateToken = async () => {
//       const token = getToken();
//       if (!token) {
//         router.replace("/login");
//         return;
//       }

//       try {
//         const res = await fetch("http://localhost:5000/api/users/profile", {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//         });

//         if (res.status === 401) {
//           removeToken();
//           router.replace("/login");
//           return;
//         }

//         if (res.ok) {
  //           setIsValidating(false);
//         }
//       } catch {
//         setIsValidating(false); // allow offline
//       }
//     };

//     validateToken();
//   }, [router]);

//   if (isValidating) {
//     return (
//       <div className="flex min-h-screen items-center justify-center">
//         <div className="text-center">
//           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
//           <p className="text-muted-foreground">Verifying session...</p>
//         </div>
//       </div>
//     );
//   }

//   const handleSend = async () => {
//     if (!input.trim() || isLoading) return;

//     const userMsg: Message = {
//       id: Date.now().toString(),
//       role: "user",
//       content: input,
//       avatar: "/user.jpg",
//     };

//     setMessages((prev) => [...prev, userMsg]);
//     setInput("");
//     setIsLoading(true);

//     const token = getToken();

//     try {
//       const res = await fetch("http://localhost:5000/api/embedding/search", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify({ text: input }),
//       });

//       const data = await res.json();

//       if (!res.ok) {
//         if (res.status === 401) {
//           removeToken();
//           router.replace("/login");
//           return;
//         }
//         throw new Error(data.message || "Request failed");
//       }

//       const aiText = data.data?.trim() || "No response";

//       const aiMsg: Message = {
//         id: (Date.now() + 1).toString(),
//         role: "assistant",
//         content: aiText,
//         avatar: "/bot.jpg",
//       };

//       setMessages((prev) => [...prev, aiMsg]);
//     } catch (error: any) {
//       const errMsg: Message = {
//         id: (Date.now() + 2).toString(),
//         role: "assistant",
//         content: error.message || "Sorry, try again.",
//         avatar: "/bot.jpg",
//       };
//       setMessages((prev) => [...prev, errMsg]);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="flex-1 flex flex-col overflow-hidden">
//       {/* Header */}
//       {isOpen ? (
//         <div className="text-xl font-bold pl-2 py-3 border-b">
//           <button className="flex" onClick={onToggle}>
//             <img className="h-5 w-5" src="/sidebar1.png" alt="toggle" />
//           </button>
//         </div>
//       ) : (
//         <div className="flex items-center pl-3 gap-3 py-3 border-b">
//           <MessageSquare className="h-5 w-5 text-primary" />
//           <span className="text-xl font-extrabold text-primary">SupportAI</span>
//         </div>
//       )}

//       {/* Messages */}
//       <div className="flex-1 overflow-y-auto p-6 space-y-4">
//         {messages.map((msg) => (
//           <ChatMessage key={msg.id} message={msg} />
//         ))}
//         {isLoading && (
//           <div className="flex justify-center py-2">
//             <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary"></div>
//           </div>
//         )}
//       </div>

//       {/* Input */}
//       <div className="border-t border-border bg-card p-4">
//         <div className="flex gap-3">
//           <Input
//             placeholder="Type your message..."
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//             onKeyDown={(e) => {
//               if (e.key === "Enter" && !e.shiftKey) {
//                 e.preventDefault();
//                 handleSend();
//               }
//             }}
//             className="flex-1"
//             disabled={isLoading}
//           />
//           <Button
//             onClick={handleSend}
//             disabled={isLoading}
//             className="bg-primary hover:bg-primary/90 text-primary-foreground px-6"
//           >
//             <Send className="w-4 h-4 mr-2" />
//             Send
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// }
//   "use client";
  
//   import { useEffect, useState } from "react";
//   import { Button } from "@/components/ui/button";
//   import { Input } from "@/components/ui/input";
//   import { MessageSquare, Send } from "lucide-react";
//   import { ChatMessage } from "@/components/chat-message";
//   import apiClient from "@/lib/api-client"; 
 
  
//   interface Message {
//     id: string;
//     role: "user" | "assistant";
//     content: string;
//     avatar?: string;
//   }
  
//   interface ChatSidebarProps {
//     isOpen: boolean;
//     onToggle: () => void;
//   }
  
//   export function ChatArea({ isOpen, onToggle }: ChatSidebarProps) {
//     const [messages, setMessages] = useState<Message[]>([
//       {
//         id: "1",
//         role: "assistant",
//         content: "Hello! How can I help you today?",
//         avatar: "/bot.jpg",
//       },
//     ]);
   
//     const [input, setInput] = useState("");
  

//   const handleSend = async () => {
//   const userInput = input.trim();
//   if (!userInput) return;

//   // Get auth token from localStorage
//   const authToken = localStorage.getItem('authToken');
  
//   if (!authToken) {
//     // Handle case when user is not authenticated
//     const errorMsg: Message = {
//       id: (Date.now() + 1).toString(),
//       role: "assistant",
//       content: "🔐 Authentication required. Please log in first.",
//       avatar: "/bot.jpg",
//     };
//     setMessages((prev) => [...prev, errorMsg]);
//     return;
//   }

//   // Create user message
//   const userMessage: Message = {
//     id: Date.now().toString(),
//     role: "user",
//     content: userInput,
//     avatar: "/user.jpg",
//   };

//   // Add user message to chat
//   setMessages((prev) => [...prev, userMessage]);
//   setInput("");

//   try {
//     // API call with authentication
//     const response = await fetch('http://localhost:5000/api/embedding/search', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${authToken}`,
//       },
//       body: JSON.stringify({ text: userInput }),
//     });

//     // Handle HTTP errors
//     if (!response.ok) {
//       if (response.status === 401) {
//         throw new Error('Authentication failed - Please login again');
//       } else if (response.status === 403) {
//         throw new Error('Access denied - Invalid permissions');
//       } else {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
//     }

//     const responseData = await response.json();

//     // Validate response structure
//     if (!responseData || typeof responseData !== 'object') {
//       throw new Error('Invalid response format');
//     }

//     // Extract AI response text
//     const aiText = responseData.data?.trim() || 
//                    responseData.message?.trim() || 
//                    "⚠️ No response content available";

//     const aiResponse: Message = {
//       id: (Date.now() + 1).toString(),
//       role: "assistant",
//       content: aiText,
//       avatar: "/bot.jpg",
//     };

//     setMessages((prev) => [...prev, aiResponse]);

//   } catch (error) {
//     console.error("Chat Error:", error);
    
//     const errorMsg: Message = {
//       id: (Date.now() + 2).toString(),
//       role: "assistant",
//       content: getErrorMessage(error),
//       avatar: "/bot.jpg",
//     };
    
//     setMessages((prev) => [...prev, errorMsg]);
//   }
// };

// // Enhanced error handler
// const getErrorMessage = (error: unknown): string => {
//   if (error instanceof Error) {
//     if (error.message.includes('Authentication failed') || 
//         error.message.includes('Access denied')) {
//       // Clear invalid token and redirect to login
//       localStorage.removeItem('authToken');
//       return `🔐 ${error.message}. Redirecting to login...`;
//     } else if (error.message.includes('Failed to fetch')) {
//       return "🌐 Connection error - Please check if the server is running";
//     } else if (error.message.includes('HTTP error')) {
//       return "🔄 Network error - Please try again later";
//     }
//     return `🤖 Error: ${error.message}`;
//   }
//   return "🤖 Sorry, I encountered an unexpected error. Please try again.";
// };
    
//     // // ✅ Loading state
//     // if (loading) {
//     //   return (
//     //     <div className="min-h-screen flex items-center justify-center">
//     //       <div className="text-center">
//     //         <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
//     //         <p className="text-muted-foreground">Loading...</p>
//     //       </div>
//     //     </div>
//     //   );
//     // }

//     return (
//       <div className="flex-1 flex flex-col overflow-hidden ">
//         {isOpen ? (
//           <span className={`text-xl font-bold pl-2 py-3 border-b-1`}>
//             <button className="flex" onClick={onToggle}>
//               <img
//                 className="h-5 w-5 justify-center items-center "
//                 src="sidebar1.png"
//               />
//             </button>
//           </span>
//         ) : (
//           <div className="flex items-center pl-3 gap-3 py-3 border-1">
//             <MessageSquare className={`h-5 w-5 text-primary `} />
//             <span className={`text-xl font-extrabold text-primary`}>
//               SupportAI
//             </span>
//           </div>
//         )}
  
//         <div className="flex-1 overflow-y-auto p-6 space-y-4">
//           {messages.map((message) => (
//             <ChatMessage key={message.id} message={message} />
//           ))}
//         </div>
  
//         <div className="border-t border-border bg-card p-4">
//           <div className="flex gap-3">
//             <Input
//               placeholder="Type your message..."
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//               onKeyPress={(e) => e.key === "Enter" && handleSend()}
//               className="flex-1"
//             />
//             <Button
//               onClick={handleSend}
//               className="bg-primary hover:bg-primary/90 text-primary-foreground px-6"
//             >
//               <Send className="w-4 h-4 mr-2" />
//               Send
//             </Button>
//           </div>
//         </div>
//       </div>
//     );
//   }

"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageSquare, Send } from "lucide-react";
import { ChatMessage } from "@/components/chat-message";
import apiClient from "@/lib/api-client";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  avatar?: string;
}

interface ChatSidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

export function ChatArea({ isOpen, onToggle }: ChatSidebarProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content: "Hello! How can I help you today?",
      avatar: "/bot.jpg",
    },
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    const userInput = input.trim();
    if (!userInput) return;

    const authToken = localStorage.getItem("authToken");

    if (!authToken) {
      const errorMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: "🔐 Authentication required. Please log in first.",
        avatar: "/bot.jpg",
      };
      setMessages((prev) => [...prev, errorMsg]);
      return;
    }

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: userInput,
      avatar: "/user.jpg",
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    // Add temporary loading (typing) message
    const typingMessage: Message = {
      id: "typing",
      role: "assistant",
      content: "typing...",
      avatar: "/bot.jpg",
    };
    setMessages((prev) => [...prev, typingMessage]);
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/embedding/search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`,
        },
        body: JSON.stringify({ text: userInput }),
      });

      if (!response.ok) {
        if (response.status === 401) throw new Error("Authentication failed - Please login again");
        else if (response.status === 403) throw new Error("Access denied - Invalid permissions");
        else throw new Error(`HTTP error! status: ${response.status}`);
      }

      const responseData = await response.json();
      const aiText =
        responseData.data?.trim() ||
        responseData.message?.trim() ||
        "⚠️ No response content available";

      setMessages((prev) => [
        ...prev.filter((m) => m.id !== "typing"), // remove typing message
        {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content: aiText,
          avatar: "/bot.jpg",
        },
      ]);
    } catch (error) {
      console.error("Chat Error:", error);

      setMessages((prev) => [
        ...prev.filter((m) => m.id !== "typing"), // remove typing
        {
          id: (Date.now() + 2).toString(),
          role: "assistant",
          content: getErrorMessage(error),
          avatar: "/bot.jpg",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const getErrorMessage = (error: unknown): string => {
    if (error instanceof Error) {
      if (
        error.message.includes("Authentication failed") ||
        error.message.includes("Access denied")
      ) {
        localStorage.removeItem("authToken");
        return `🔐 ${error.message}. Redirecting to login...`;
      } else if (error.message.includes("Failed to fetch")) {
        return "🌐 Connection error - Please check if the server is running";
      } else if (error.message.includes("HTTP error")) {
        return "🔄 Network error - Please try again later";
      }
      return `🤖 Error: ${error.message}`;
    }
    return "🤖 Sorry, I encountered an unexpected error. Please try again.";
  };

  // Typing animation (3 dots)
  const TypingDots = () => (
    <div className="flex space-x-1 items-center">
      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
    </div>
  );

  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      {isOpen ? (
        <span className="text-xl font-bold pl-2 py-3 border-b-1">
          <button className="flex" onClick={onToggle}>
            <img className="h-5 w-5 justify-center items-center" src="sidebar1.png" />
          </button>
        </span>
      ) : (
        <div className="flex items-center pl-3 gap-3 py-3 border-1">
          <MessageSquare className="h-5 w-5 text-primary" />
          <span className="text-xl font-extrabold text-primary">SupportAI</span>
        </div>
      )}

      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {messages.map((message) =>
          message.id === "typing" ? (
            <div key="typing" className="flex items-center space-x-2">
              <img src="/bot.jpg" className="w-8 h-8 rounded-full" />
              <TypingDots />
            </div>
          ) : (
            <ChatMessage key={message.id} message={message} />
          )
        )}
      </div>

      <div className="border-t border-border bg-card p-4">
        <div className="flex gap-3">
          <Input
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
            className="flex-1"
            disabled={loading}
          />
          <Button
            onClick={handleSend}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-6"
            disabled={loading}
          >
            <Send className="w-4 h-4 mr-2" />
            Send
          </Button>
        </div>
      </div>
    </div>
  );
}
