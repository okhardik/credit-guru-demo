"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Eye, EyeOff, User, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [loginType, setLoginType] = useState("customer")

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center space-x-3 mb-6">
            <Image
              src="/images/credit-guru-logo.png"
              alt="Credit Guru Logo"
              width={50}
              height={50}
              className="rounded-lg"
            />
            <div>
              <h1 className="text-xl font-bold text-[#1e40af]">CREDIT GURU</h1>
              <p className="text-xs text-gray-600">Your Financial Partner</p>
            </div>
          </Link>
        </div>

        <Card className="border-2 border-gray-100 shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-gray-900">Welcome Back</CardTitle>
            <CardDescription>Sign in to access your account</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs value={loginType} onValueChange={setLoginType} className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="customer" className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Customer
                </TabsTrigger>
                <TabsTrigger value="partner" className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  Partner
                </TabsTrigger>
              </TabsList>

              <TabsContent value="customer">
                <form className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="customer-email">Email or Mobile</Label>
                    <Input
                      id="customer-email"
                      type="text"
                      placeholder="Enter your email or mobile number"
                      className="border-gray-300 focus:border-[#1e40af]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="customer-password">Password</Label>
                    <div className="relative">
                      <Input
                        id="customer-password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        className="border-gray-300 focus:border-[#1e40af] pr-10"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="remember" className="rounded border-gray-300" />
                      <Label htmlFor="remember" className="text-sm text-gray-600">
                        Remember me
                      </Label>
                    </div>
                    <Link href="/forgot-password" className="text-sm text-[#1e40af] hover:underline">
                      Forgot password?
                    </Link>
                  </div>
                  <Link href="/dashboard/customer">
                    <Button className="w-full bg-[#1e40af] hover:bg-[#1e3a8a] text-white">Sign In as Customer</Button>
                  </Link>
                </form>
              </TabsContent>

              <TabsContent value="partner">
                <form className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="partner-email">Partner ID or Email</Label>
                    <Input
                      id="partner-email"
                      type="text"
                      placeholder="Enter your partner ID or email"
                      className="border-gray-300 focus:border-[#1e40af]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="partner-password">Password</Label>
                    <div className="relative">
                      <Input
                        id="partner-password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        className="border-gray-300 focus:border-[#1e40af] pr-10"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="remember-partner" className="rounded border-gray-300" />
                      <Label htmlFor="remember-partner" className="text-sm text-gray-600">
                        Remember me
                      </Label>
                    </div>
                    <Link href="/forgot-password" className="text-sm text-[#1e40af] hover:underline">
                      Forgot password?
                    </Link>
                  </div>
                  <Link href="/dashboard/partner">
                    <Button className="w-full bg-[#1e40af] hover:bg-[#1e3a8a] text-white">Sign In as Partner</Button>
                  </Link>
                </form>
              </TabsContent>
            </Tabs>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Don't have an account?{" "}
                <Link href="/register" className="text-[#1e40af] hover:underline font-medium">
                  Sign up here
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="mt-6 text-center text-xs text-gray-500">
          <p>By signing in, you agree to our Terms of Service and Privacy Policy</p>
        </div>
      </div>
    </div>
  )
}
