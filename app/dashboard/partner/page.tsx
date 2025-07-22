"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Users, TrendingUp, DollarSign, Target, Eye, Phone, Mail, Bell, User, LogOut, Filter } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function PartnerDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  const leads = [
    {
      id: "LEAD001",
      customerName: "Rajesh Kumar",
      product: "Health Insurance",
      company: "HDFC ERGO",
      status: "converted",
      amount: "₹5,00,000",
      commission: "₹15,000",
      date: "2024-01-15",
      phone: "+91 98765 43210",
      email: "rajesh@email.com",
    },
    {
      id: "LEAD002",
      customerName: "Priya Sharma",
      product: "Personal Loan",
      company: "HDFC Bank",
      status: "processing",
      amount: "₹2,00,000",
      commission: "₹8,000",
      date: "2024-01-20",
      phone: "+91 87654 32109",
      email: "priya@email.com",
    },
    {
      id: "LEAD003",
      customerName: "Amit Patel",
      product: "Mutual Fund SIP",
      company: "SBI Mutual Fund",
      status: "follow_up",
      amount: "₹5,000/month",
      commission: "₹500",
      date: "2024-01-22",
      phone: "+91 76543 21098",
      email: "amit@email.com",
    },
    {
      id: "LEAD004",
      customerName: "Sneha Gupta",
      product: "Term Insurance",
      company: "LIC",
      status: "rejected",
      amount: "₹10,00,000",
      commission: "₹0",
      date: "2024-01-18",
      phone: "+91 65432 10987",
      email: "sneha@email.com",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "converted":
        return "bg-green-100 text-green-800"
      case "processing":
        return "bg-yellow-100 text-yellow-800"
      case "follow_up":
        return "bg-blue-100 text-blue-800"
      case "rejected":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const monthlyStats = {
    totalLeads: 45,
    convertedLeads: 12,
    conversionRate: 26.7,
    totalCommission: 125000,
    pendingCommission: 35000,
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/images/credit-guru-logo.png"
              alt="Credit Guru Logo"
              width={40}
              height={40}
              className="rounded-lg"
            />
            <div>
              <h1 className="text-lg font-bold text-[#1e40af]">CREDIT GURU</h1>
              <p className="text-xs text-gray-600">Partner Dashboard</p>
            </div>
          </Link>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <Bell className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <User className="h-4 w-4" />
            </Button>
            <Link href="/login">
              <Button variant="ghost" size="sm">
                <LogOut className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, Partner!</h1>
          <p className="text-gray-600">Track your leads, commissions, and grow your business with Credit Guru.</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 lg:w-auto lg:grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="leads">Leads</TabsTrigger>
            <TabsTrigger value="commissions">Commissions</TabsTrigger>
            <TabsTrigger value="profile">Profile</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Leads</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{monthlyStats.totalLeads}</div>
                  <p className="text-xs text-muted-foreground">This month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Converted</CardTitle>
                  <Target className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{monthlyStats.convertedLeads}</div>
                  <p className="text-xs text-muted-foreground">+2 from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{monthlyStats.conversionRate}%</div>
                  <p className="text-xs text-muted-foreground">+5% from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Commission</CardTitle>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">₹{(monthlyStats.totalCommission / 1000).toFixed(0)}K</div>
                  <p className="text-xs text-muted-foreground">This month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Pending</CardTitle>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">₹{(monthlyStats.pendingCommission / 1000).toFixed(0)}K</div>
                  <p className="text-xs text-muted-foreground">To be paid</p>
                </CardContent>
              </Card>
            </div>

            {/* Recent Leads */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Leads</CardTitle>
                <CardDescription>Your latest lead activities and their current status</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {leads.slice(0, 3).map((lead) => (
                    <div key={lead.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-[#1e40af] rounded-lg flex items-center justify-center">
                          <Users className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <h4 className="font-medium">{lead.customerName}</h4>
                          <p className="text-sm text-gray-600">
                            {lead.product} • {lead.company}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="text-right">
                          <p className="font-medium">{lead.amount}</p>
                          <p className="text-sm text-gray-600">Commission: {lead.commission}</p>
                        </div>
                        <Badge className={getStatusColor(lead.status)}>
                          <span className="capitalize">{lead.status.replace("_", " ")}</span>
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Performance Chart Placeholder */}
            <Card>
              <CardHeader>
                <CardTitle>Monthly Performance</CardTitle>
                <CardDescription>Your lead conversion and commission trends</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                  <p className="text-gray-500">Performance chart will be displayed here</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="leads" className="space-y-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>All Leads</CardTitle>
                  <CardDescription>Manage and track all your leads</CardDescription>
                </div>
                <Button variant="outline" size="sm">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {leads.map((lead) => (
                    <div key={lead.id} className="border rounded-lg p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h3 className="text-lg font-semibold">{lead.customerName}</h3>
                          <p className="text-gray-600">
                            {lead.product} - {lead.company}
                          </p>
                        </div>
                        <Badge className={getStatusColor(lead.status)}>
                          <span className="capitalize">{lead.status.replace("_", " ")}</span>
                        </Badge>
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-4">
                        <div>
                          <p className="text-sm text-gray-600">Lead ID</p>
                          <p className="font-medium">{lead.id}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Amount</p>
                          <p className="font-medium">{lead.amount}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Commission</p>
                          <p className="font-medium">{lead.commission}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Date</p>
                          <p className="font-medium">{lead.date}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Contact</p>
                          <div className="flex space-x-2">
                            <Button size="sm" variant="ghost" className="p-1">
                              <Phone className="h-4 w-4" />
                            </Button>
                            <Button size="sm" variant="ghost" className="p-1">
                              <Mail className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">
                          <Eye className="h-4 w-4 mr-2" />
                          View Details
                        </Button>
                        {lead.status === "follow_up" && (
                          <Button size="sm" className="bg-[#1e40af] hover:bg-[#1e3a8a] text-white">
                            Follow Up
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="commissions" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>This Month</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-[#1e40af]">₹1,25,000</div>
                  <p className="text-sm text-gray-600">Total commission earned</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Pending</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-[#fbbf24]">₹35,000</div>
                  <p className="text-sm text-gray-600">Awaiting payment</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Paid</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-green-600">₹90,000</div>
                  <p className="text-sm text-gray-600">Already received</p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Commission History</CardTitle>
                <CardDescription>Detailed breakdown of your commission payments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {leads
                    .filter((lead) => lead.status === "converted")
                    .map((lead) => (
                      <div key={lead.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <h4 className="font-medium">{lead.customerName}</h4>
                          <p className="text-sm text-gray-600">
                            {lead.product} - {lead.company}
                          </p>
                          <p className="text-xs text-gray-500">{lead.date}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-green-600">{lead.commission}</p>
                          <Badge className="bg-green-100 text-green-800">Paid</Badge>
                        </div>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="profile" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Partner Information</CardTitle>
                <CardDescription>Manage your partner profile and business details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Personal Details</h3>
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm text-gray-600">Partner ID</p>
                        <p className="font-medium">CG-PART-001</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Full Name</p>
                        <p className="font-medium">Rahul Agarwal</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Email</p>
                        <p className="font-medium">rahul.partner@email.com</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Mobile</p>
                        <p className="font-medium">+91 98765 43210</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Business Details</h3>
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm text-gray-600">Business Name</p>
                        <p className="font-medium">Agarwal Financial Services</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Registration Date</p>
                        <p className="font-medium">15/03/2023</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Commission Rate</p>
                        <p className="font-medium">3-5% (Product dependent)</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Status</p>
                        <Badge className="bg-green-100 text-green-800">Active</Badge>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pt-4">
                  <Button className="bg-[#1e40af] hover:bg-[#1e3a8a] text-white">Edit Profile</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
