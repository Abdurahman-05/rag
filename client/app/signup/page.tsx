// // import Link from "next/link"
// // import { MessageSquare } from "lucide-react"
// // import { Button } from "@/components/ui/button"
// // import { Input } from "@/components/ui/input"
// // import { Label } from "@/components/ui/label"
// // import { Checkbox } from "@/components/ui/checkbox"
// // import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

// // export default function SignUpPage() {
// //   return (
// //     <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
// //       <Card className="w-full max-w-md">
// //         <CardHeader className="space-y-4 text-center">
// //           <div className="mx-auto w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
// //             <MessageSquare className="w-6 h-6 text-white" />
// //           </div>
// //           <div>
// //             <CardTitle className="text-3xl font-bold">Create Account</CardTitle>
// //             <CardDescription className="text-base mt-2">Sign up to get started with Support AI</CardDescription>
// //           </div>
// //         </CardHeader>
// //         <CardContent className="space-y-6">
// //           <form className="space-y-4">
// //             <div className="space-y-2">
// //               <Label htmlFor="name">Full Name</Label>
// //               <Input id="name" type="text" placeholder="Full Name" className="h-12" />
// //             </div>
// //             <div className="space-y-2">
// //               <Label htmlFor="email">Email</Label>
// //               <Input id="email" type="email" placeholder="Email" className="h-12" />
// //             </div>
// //             <div className="space-y-2">
// //               <Label htmlFor="password">Password</Label>
// //               <Input id="password" type="password" placeholder="Password" className="h-12" />
// //             </div>
// //             <div className="space-y-2">
// //               <Label htmlFor="confirm-password">Confirm Password</Label>
// //               <Input id="confirm-password" type="password" placeholder="Confirm Password" className="h-12" />
// //             </div>
// //             <div className="flex items-center space-x-2">
// //               <Checkbox id="terms" />
// //               <label
// //                 htmlFor="terms"
// //                 className="text-sm text-muted-foreground leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
// //               >
// //                 I agree to the{" "}
// //                 <Link href="/terms" className="text-primary hover:underline">
// //                   Terms of Service
// //                 </Link>{" "}
// //                 and{" "}
// //                 <Link href="/privacy" className="text-primary hover:underline">
// //                   Privacy Policy
// //                 </Link>
// //               </label>
// //             </div>
// //             <Button type="submit" className="w-full h-12 text-base">
// //               Sign Up
// //             </Button>
// //           </form>
// //           <div className="text-center text-sm text-muted-foreground">
// //             Already have an account?{" "}
// //             <Link href="/login" className="text-primary hover:underline font-medium">
// //               Login
// //             </Link>
// //           </div>
// //         </CardContent>
// //       </Card>
// //     </div>
// //   )
// // }
// // import Link from "next/link"
// // import Image from "next/image"
// // import { MessageSquare } from "lucide-react"
// // import { Button } from "@/components/ui/button"
// // import { Input } from "@/components/ui/input"
// // import { Label } from "@/components/ui/label"
// // import { Checkbox } from "@/components/ui/checkbox"

// // export default function SignUpPage() {
// //   return (
// //     <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
// //       <div className="w-full max-w-6xl bg-white rounded-2xl shadow-xl overflow-hidden flex">
// //         {/* Left side - Form */}
// //         <div className="flex-1 flex items-center justify-center px-6 py-8">
// //           <div className="w-full max-w-md space-y-5">
// //             <div className="space-y-4 text-center">
// //               <div className="mx-auto w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
// //                 <MessageSquare className="w-4 h-4 text-white" />
// //               </div>
// //               <div>
// //                 <h1 className="text-3xl font-bold">Create Account</h1>
// //                 <p className="text-muted-foreground text-base mt-2">Sign up to get started with Support AI</p>
// //               </div>
// //             </div>

// //             <form className="space-y-4">
// //               <div className="space-y-2">
// //                 <Label htmlFor="name">Full Name</Label>
// //                 <Input id="name" type="text" placeholder="Full Name" className="h-10" />
// //               </div>
// //               <div className="space-y-2">
// //                 <Label htmlFor="email">Email</Label>
// //                 <Input id="email" type="email" placeholder="Email" className="h-10" />
// //               </div>
// //               <div className="space-y-2">
// //                 <Label htmlFor="password">Password</Label>
// //                 <Input id="password" type="password" placeholder="Password" className="h-10" />
// //               </div>
// //               <div className="space-y-2">
// //                 <Label htmlFor="confirm-password">Confirm Password</Label>
// //                 <Input id="confirm-password" type="password" placeholder="Confirm Password" className="h-10" />
// //               </div>
// //               <div className="flex items-center space-x-2">
// //                 <Checkbox id="terms" />
// //                 <label
// //                   htmlFor="terms"
// //                   className="text-sm text-muted-foreground leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
// //                 >
// //                   I agree to the{" "}
// //                   <Link href="/terms" className="text-primary hover:underline">
// //                     Terms of Service
// //                   </Link>{" "}
// //                   and{" "}
// //                   <Link href="/privacy" className="text-primary hover:underline">
// //                     Privacy Policy
// //                   </Link>
// //                 </label>
// //               </div>
// //               <Button type="submit" className="w-full h-12 text-base">
// //                 Sign Up
// //               </Button>
// //             </form>

// //             <div className="text-center text-sm text-muted-foreground">
// //               Already have an account?{" "}
// //               <Link href="/login" className="text-primary hover:underline font-medium">
// //                 Login
// //               </Link>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Right side - Image */}
// //         <div className="hidden lg:flex flex-1 bg-gradient-to-br from-blue-50 to-blue-100 items-center justify-center">
// //           <div className="relative w-full h-full max-w-2xl ">
// //             <Image
// //               src="https://res.cloudinary.com/djjasfjpr/image/upload/v1760524874/chat-bot_zljihl.webp"
// //               alt="AI Assistant"
// //               fill
// //               className="w-full h-full"
// //             />
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   )
// // }

// "use client";

// import type React from "react";

// import Link from "next/link";
// import Image from "next/image";
// import { MessageSquare } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Checkbox } from "@/components/ui/checkbox";
// import { useState } from "react";
// import apiClient from "@/lib/api-client";

// export default function SignUpPage() {
//   const [formData, setFormData] = useState({
//     fullname: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });
//   const [termsAccepted, setTermsAccepted] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState(false);

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { id, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [id === "name"
//         ? "fullname"
//         : id === "confirm-password"
//         ? "confirmPassword"
//         : id]: value,
//     }));
//     setError("");
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setError("");

//     // Validation
//     if (
//       !formData.fullname ||
//       !formData.email ||
//       !formData.password ||
//       !formData.confirmPassword
//     ) {
//       setError("All fields are required");
//       return;
//     }

//     if (formData.password !== formData.confirmPassword) {
//       setError("Passwords do not match");
//       return;
//     }

//     if (!termsAccepted) {
//       setError("Please accept the terms and conditions");
//       return;
//     }

//     setLoading(true);

//     try {
//       const response = await apiClient.post("/auth/signup", {
//         fullname: formData.fullname,
//         email: formData.email,
//         password: formData.password,
//       });

//       setSuccess(true);
//       setFormData({
//         fullname: "",
//         email: "",
//         password: "",
//         confirmPassword: "",
//       });
//       setTermsAccepted(false);

//       setTimeout(() => {
//         window.location.href = "/upload"
//       }, 1500)
//     } catch (err: any) {
//       const errorMessage =
//         err.response?.data?.message || "Signup failed. Please try again.";
//       setError(errorMessage);
//       console.error("[v0] Signup error:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 p-8">
//       <div className="w-full max-w-6xl bg-white rounded-2xl shadow-xl overflow-hidden flex">
//         {/* Left side - Form */}
//         <div className="flex-1 flex items-center justify-center px-8 py-12">
//           <div className="w-full max-w-md space-y-8">
//             <div className="space-y-4 text-center">
//               <div className="mx-auto w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
//                 <MessageSquare className="w-6 h-6 text-white" />
//               </div>
//               <div>
//                 <h1 className="text-3xl font-bold">Create Account</h1>
//                 <p className="text-muted-foreground text-base mt-2">
//                   Sign up to get started with Support AI
//                 </p>
//               </div>
//             </div>

//             {error && (
//               <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
//                 {error}
//               </div>
//             )}
//             {success && (
//               <div className="p-3 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm">
//                 Account created successfully! Redirecting to login...
//               </div>
//             )}

//             <form onSubmit={handleSubmit} className="space-y-4">
//               <div className="space-y-2">
//                 <Label htmlFor="name">Full Name</Label>
//                 <Input
//                   id="name"
//                   type="text"
//                   placeholder="Full Name"
//                   className="h-12"
//                   value={formData.fullname}
//                   onChange={handleInputChange}
//                   disabled={loading}
//                 />
//               </div>
//               <div className="space-y-2">
//                 <Label htmlFor="email">Email</Label>
//                 <Input
//                   id="email"
//                   type="email"
//                   placeholder="Email"
//                   className="h-12"
//                   value={formData.email}
//                   onChange={handleInputChange}
//                   disabled={loading}
//                 />
//               </div>
//               <div className="space-y-2">
//                 <Label htmlFor="password">Password</Label>
//                 <Input
//                   id="password"
//                   type="password"
//                   placeholder="Password"
//                   className="h-12"
//                   value={formData.password}
//                   onChange={handleInputChange}
//                   disabled={loading}
//                 />
//               </div>
//               <div className="space-y-2">
//                 <Label htmlFor="confirm-password">Confirm Password</Label>
//                 <Input
//                   id="confirm-password"
//                   type="password"
//                   placeholder="Confirm Password"
//                   className="h-12"
//                   value={formData.confirmPassword}
//                   onChange={handleInputChange}
//                   disabled={loading}
//                 />
//               </div>
//               <div className="flex items-center space-x-2">
//                 <Checkbox
//                   id="terms"
//                   checked={termsAccepted}
//                   onCheckedChange={(checked) =>
//                     setTermsAccepted(checked as boolean)
//                   }
//                   disabled={loading}
//                 />
//                 <label
//                   htmlFor="terms"
//                   className="text-sm text-muted-foreground leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
//                 >
//                   I agree to the{" "}
//                   <Link href="/terms" className="text-primary hover:underline">
//                     Terms of Service
//                   </Link>{" "}
//                   and{" "}
//                   <Link
//                     href="/privacy"
//                     className="text-primary hover:underline"
//                   >
//                     Privacy Policy
//                   </Link>
//                 </label>
//               </div>
//               <Button
//                 type="submit"
//                 className="w-full h-12 text-base"
//                 disabled={loading}
//               >
//                 {loading ? "Creating Account..." : "Sign Up"}
//               </Button>
//             </form>

//             <div className="text-center text-sm text-muted-foreground">
//               Already have an account?{" "}
//               <Link
//                 href="/login"
//                 className="text-primary hover:underline font-medium"
//               >
//                 Login
//               </Link>
//             </div>
//           </div>
//         </div>

//         {/* Right side - Image */}
//         <div className="hidden lg:flex flex-1 bg-gradient-to-br from-blue-50 to-blue-100 items-center justify-center p-12">
//           <div className="relative w-full h-full max-w-2xl max-h-[600px]">
//             {/* <Image
//               src="/modern-ai-chatbot-assistant-illustration.jpg"
//               alt="AI Assistant"
//               fill
//               className="object-contain"
//             /> */}
//             <Image
//               src="https://res.cloudinary.com/djjasfjpr/image/upload/v1760524874/chat-bot_zljihl.webp"
//               alt="AI Assistant"
//               fill
//               className="w-full h-full"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import type React from "react";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import apiClient from "@/lib/api-client";

export default function SignUpPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id === "name"
        ? "fullname"
        : id === "confirm-password"
        ? "confirmPassword"
        : id]: value,
    }));
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    // Validation
    if (
      !formData.fullname ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      setError("All fields are required");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (!termsAccepted) {
      setError("Please accept the terms and conditions");
      return;
    }

    setLoading(true);

    try {
      const response = await apiClient.post("/auth/signup", {
        fullname: formData.fullname,
        email: formData.email,
        password: formData.password,
      });

      if (response.data.token) {
        localStorage.setItem("authToken", response.data.token);
      }

      router.push("/upload");
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(
          err.response?.data?.message || "Signup failed. Please try again."
        );
      } else {
        setError("An unexpected error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="space-y-4 text-center pb-8">
          <div className="mx-auto w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-8 h-8 text-primary-foreground"
            >
              <path d="M12 2C10.34 2 9 3.34 9 5C9 6.66 10.34 8 12 8C13.66 8 15 6.66 15 5C15 3.34 13.66 2 12 2ZM12 14C8.13 14 5 15.79 5 18V20H19V18C19 15.79 15.87 14 12 14Z" />
            </svg>
          </div>
          <div>
            <CardTitle className="text-3xl font-bold">Create Account</CardTitle>
            <CardDescription className="text-base mt-2">
              Sign up to get started with Support AI
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="Full Name"
                className="h-12"
                value={formData.fullname}
                onChange={handleInputChange}
                disabled={loading}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Email"
                className="h-12"
                value={formData.email}
                onChange={handleInputChange}
                disabled={loading}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Password"
                className="h-12"
                value={formData.password}
                onChange={handleInputChange}
                disabled={loading}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirm-password">Confirm Password</Label>
              <Input
                id="confirm-password"
                type="password"
                placeholder="Confirm Password"
                className="h-12"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                disabled={loading}
              />
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="terms"
                checked={termsAccepted}
                onCheckedChange={(checked) =>
                  setTermsAccepted(checked as boolean)
                }
                disabled={loading}
              />
              <label
                htmlFor="terms"
                className="text-sm text-muted-foreground leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                I agree to the{" "}
                <Link href="/terms" className="text-primary hover:underline">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="/privacy" className="text-primary hover:underline">
                  Privacy Policy
                </Link>
              </label>
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <Button
              type="submit"
              className="w-full h-12 text-base font-medium"
              disabled={loading}
            >
              {loading ? "Creating Account..." : "Sign Up"}
            </Button>
          </form>
          <div className="text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-primary hover:underline font-medium"
            >
              Login
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
