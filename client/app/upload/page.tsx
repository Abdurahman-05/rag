// "use client"

// import apiClient from "@/lib/api-client" // 👈 adjust path based on your folder (e.g. src/lib/apiClient)
// import { Textarea } from "@/components/ui/textarea"
// import { Button } from "@/components/ui/button"
// import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
// import { useEffect, useState } from "react"
// import { useRouter } from "next/navigation"
// import { LogOut } from "lucide-react"

// export default function UploadPage() {
//   const router = useRouter()
//   const [user, setUser] = useState<any>(null)
//   const [authLoading, setAuthLoading] = useState(true)

//   useEffect(() => {
//     // Check if token exists
//     const token = localStorage.getItem("authToken")
//     if (!token) {
//       router.push("/login")
//       return
//     }

//     // Get user data from token or API
//     const userData = localStorage.getItem("userData")
//     if (userData) {
//       setUser(JSON.parse(userData))
//     }
//     setAuthLoading(false)
//   }, [router])

//   const handleLogout = () => {
//     localStorage.removeItem("authToken")
//     localStorage.removeItem("userData")
//     router.push("/login")
//   }

//   if (authLoading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <div className="text-center">
//           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
//           <p className="text-muted-foreground">Loading...</p>
//         </div>
//       </div>
//     )
//   }

//   const [text, setText] = useState("")
//   const [uploading, setUploading] = useState(false)
//   const [message, setMessage] = useState("")

//   const handleSubmit = async (e: any) => {
//     e.preventDefault()
//     if (!text.trim()) {
//       setMessage("❌ Please enter some text")
//       return
//     }

//     try {
//       setUploading(true)
//       setMessage("")

//       // 👇 Using apiClient with baseURL
//       const res = await apiClient.post("/embedding/upload", { text })

//       setMessage("✅ Successfully uploaded and embedded!")
//       setText("")
//     } catch (error) {
//       console.error(error)
//       setMessage("❌ Failed to upload. Check the backend or network connection.")
//     } finally {
//       setUploading(false)
//     }
//   }

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-50">
//       <div className="w-full max-w-lg">
//         <Card className="shadow-xl">
//           <CardHeader>
//             <CardTitle className="text-center text-xl font-semibold">
//               Company Information Upload
//             </CardTitle>
//           </CardHeader>
//           <CardContent>
//             <form onSubmit={handleSubmit} className="space-y-4">
//               <label className="text-sm font-medium">Enter your company information:</label>
//               <Textarea
//                 placeholder="Example: Mohammed Sadik is vice president of our lab..."
//                 value={text}
//                 onChange={(e) => setText(e.target.value)}
//                 rows={5}
//                 className="resize-none"
//               />

//               <Button type="submit" disabled={uploading} className="w-full">
//                 {uploading ? "Uploading..." : "Submit"}
//               </Button>

//               {message && (
//                 <p
//                   className={`text-center text-sm mt-2 ${
//                     message.startsWith("✅") ? "text-green-600" : "text-red-600"
//                   }`}
//                 >
//                   {message}
//                 </p>
//               )}
//             </form>
//           </CardContent>
//         </Card>

//         <div className="mt-4 flex justify-center">
//           <Button onClick={handleLogout} variant="outline" size="lg" className="gap-2 bg-transparent">
//             <LogOut className="w-4 h-4" />
//             Logout
//           </Button>
//         </div>
//       </div>
//     </div>
//   )
// }

// "use client";

// import { useEffect, useState } from "react";
// import apiClient from "@/lib/api-client"; // 👈 adjust path based on your folder (e.g. src/lib/apiClient)
// import { Textarea } from "@/components/ui/textarea";
// import { Button } from "@/components/ui/button";
// import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
// import { LogOut } from "lucide-react";
// import { useRouter } from "next/navigation";


// export default function UploadPage() {
//   const [text, setText] = useState("");
//   // const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState("");

//   const router = useRouter()
//   const [user, setUser] = useState<any>(null)
//   const [loading, setLoading] = useState(true)

//   useEffect(() => {
//     // Check if token exists
//     const token = localStorage.getItem("authToken")
//     if (!token) {
//       router.push("/login")
//       return
//     }

//     // Get user data from token or API
//     const userData = localStorage.getItem("userData")
//     if (userData) {
//       setUser(JSON.parse(userData))
//     }
//     setLoading(false)
//   }, [router])

//   const handleLogout = () => {
//     localStorage.removeItem("authToken")
//     localStorage.removeItem("userData")
//     router.push("/login")
//   }

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <div className="text-center">
//           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
//           <p className="text-muted-foreground">Loading...</p>
//         </div>
//       </div>
//     )
//   }

//   const handleSubmit = async (e: { preventDefault: () => void; }) => {
//     e.preventDefault();
//     if (!text.trim()) {
//       setMessage("❌ Please enter some text");
//       return;
//     }

//     try {
//       setLoading(true);
//       setMessage("");

//       // 👇 Using apiClient with baseURL
//       const res = await apiClient.post("/embedding/upload", { text });

//       setMessage("✅ Successfully uploaded and embedded!");
//       setText("");
//     } catch (error) {
//       console.error(error);
//       setMessage(
//         "❌ Failed to upload. Check the backend or network connection."
//       );
//     } finally {
//       setLoading(false);
//     }
//   };




//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-50">
//       <Card className="w-full max-w-lg shadow-xl">
//         <CardHeader>
//           <CardTitle className="text-center text-xl font-semibold">
//             Company Information Upload
//           </CardTitle>
//         </CardHeader>
//         <CardContent>
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <label className="text-sm font-medium">
//               Enter your company information:
//             </label>
//             <Textarea
//               placeholder="Example: Our company specializes in AI-powered chat solutions and data analytics for startups."
//               value={text}
//               onChange={(e) => setText(e.target.value)}
//               rows={5}
//               className="resize-none"
//             />

//             <Button type="submit" disabled={loading} className="w-full">
//               {loading ? "Uploading..." : "Submit"}
//             </Button>

//             {message && (
//               <p
//                 className={`text-center text-sm mt-2 ${
//                   message.startsWith("✅") ? "text-green-600" : "text-red-600"
//                 }`}
//               >
//                 {message}
//               </p>
//             )}
//           </form>
//         </CardContent>
//       </Card>
//       <Button
//         onClick={handleLogout}
//         variant="outline"
//         size="lg"
//         className="gap-2 bg-transparent"
//       >
//         <LogOut className="w-4 h-4" />
//         // Logout //{" "}
//       </Button>
//     </div>
//   );
// }
"use client";

import { useEffect, useState } from "react";
import apiClient from "@/lib/api-client";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { LogOut, MessageSquare } from "lucide-react";
import { useRouter } from "next/navigation";

export default function UploadPage() {
  const [text, setText] = useState("");
  const [message, setMessage] = useState("");
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  // ✅ Load user and check auth
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      router.push("/login");
      return;
    }

    const userData = localStorage.getItem("userData");
    if (userData) {
      setUser(JSON.parse(userData));
    }

    setLoading(false);
  }, [router]);

  // ✅ Logout
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userData");
    router.push("/login");
  };

  // ✅ Submit form
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!text.trim()) {
      setMessage("❌ Please enter some text.");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const token = localStorage.getItem("authToken");
      const response = await apiClient.post(
        "/embedding/upload",
        { text },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (response.status === 200 || response.status === 201) {
        setMessage("✅ Successfully uploaded and embedded!");
        setText("");
      } else {
        setMessage("⚠️ Something went wrong, please try again.");
      }
    } catch (error) {
      console.error(error);
      setMessage("❌ Failed to upload. Check backend or network connection.");
    } finally {
      setLoading(false);
    }
  };

  // ✅ Loading state
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gray-50">
      {/* 🔹 Logout button */}
      <div className="absolute top-6 right-6">
        <Button
          onClick={handleLogout}
          variant="outline"
          size="sm"
          className="gap-2 bg-transparent"
        >
          <LogOut className="w-4 h-4" />
          Logout
        </Button>
      </div>

      {/* 🔹 Upload form */}
      <Card className="w-full max-w-lg shadow-lg border border-gray-200">
        <CardHeader>
          <CardTitle className="text-center text-xl font-semibold text-gray-800">
            Company Information Upload
          </CardTitle>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <label className="text-sm font-medium text-gray-700">
              Enter your company information:
            </label>

            <Textarea
              placeholder="Example: Our company builds AI-powered tools to automate customer service and enhance productivity."
              value={text}
              onChange={(e) => setText(e.target.value)}
              rows={5}
              className="resize-none mt-2"
            />

            <Button type="submit" disabled={loading} className="w-full">
              {loading ? "Uploading..." : "Submit"}
            </Button>
            <Button
                type="button"
                onClick={() => router.push("/chat")}
                variant="secondary"
                className="w-full flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                Go to Chatbot
              </Button>

            {message && (
              <p
                className={`text-center text-sm mt-2 transition-all duration-300 ${
                  message.startsWith("✅")
                    ? "text-green-600"
                    : message.startsWith("⚠️")
                    ? "text-yellow-600"
                    : "text-red-600"
                }`}
              >
                {message}
              </p>
            )}
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

