"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Shield, TrendingUp, CreditCard, Star, Check } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ComparePage() {
  const [activeTab, setActiveTab] = useState("insurance")
  const [ageRange, setAgeRange] = useState([25])
  const [coverageAmount, setCoverageAmount] = useState([500000])

  const insurancePlans = [
    {
      id: 1,
      company: "HDFC ERGO",
      planName: "Health Suraksha Gold",
      premium: "₹8,500",
      coverage: "₹5,00,000",
      features: ["Cashless Treatment", "Pre & Post Hospitalization", "Day Care Procedures", "Maternity Cover"],
      rating: 4.5,
      waitingPeriod: "2 years",
      roomRent: "1% of Sum Insured",
      networkHospitals: "10,000+",
    },
    {
      id: 2,
      company: "ICICI Lombard",
      planName: "Complete Health Insurance",
      premium: "₹9,200",
      coverage: "₹5,00,000",
      features: ["Cashless Treatment", "Health Check-ups", "Ambulance Cover", "Mental Health Cover"],
      rating: 4.3,
      waitingPeriod: "3 years",
      roomRent: "Single AC Room",
      networkHospitals: "7,000+",
    },
    {
      id: 3,
      company: "Bajaj Allianz",
      planName: "Health Guard",
      premium: "₹7,800",
      coverage: "₹5,00,000",
      features: ["Cashless Treatment", "Alternative Treatment", "Personal Accident", "Critical Illness"],
      rating: 4.2,
      waitingPeriod: "2 years",
      roomRent: "₹6,000/day",
      networkHospitals: "6,500+",
    },
  ]

  const mutualFunds = [
    {
      id: 1,
      company: "SBI Mutual Fund",
      fundName: "SBI Bluechip Fund",
      category: "Large Cap",
      returns1Y: "12.5%",
      returns3Y: "15.2%",
      returns5Y: "13.8%",
      expenseRatio: "1.95%",
      minSIP: "₹500",
      rating: 4.4,
      riskLevel: "Moderate",
    },
    {
      id: 2,
      company: "HDFC Mutual Fund",
      fundName: "HDFC Top 100 Fund",
      category: "Large Cap",
      returns1Y: "13.2%",
      returns3Y: "16.1%",
      returns5Y: "14.5%",
      expenseRatio: "1.85%",
      minSIP: "₹500",
      rating: 4.6,
      riskLevel: "Moderate",
    },
    {
      id: 3,
      company: "ICICI Prudential",
      fundName: "ICICI Pru Bluechip Fund",
      category: "Large Cap",
      returns1Y: "11.8%",
      returns3Y: "14.9%",
      returns5Y: "13.2%",
      expenseRatio: "1.75%",
      minSIP: "₹1,000",
      rating: 4.3,
      riskLevel: "Moderate",
    },
  ]

  const loans = [
    {
      id: 1,
      bank: "HDFC Bank",
      loanType: "Personal Loan",
      interestRate: "10.5% - 24%",
      processingFee: "Up to 2.5%",
      maxAmount: "₹40,00,000",
      tenure: "12-60 months",
      minSalary: "₹25,000",
      rating: 4.5,
    },
    {
      id: 2,
      bank: "ICICI Bank",
      loanType: "Personal Loan",
      interestRate: "10.75% - 19%",
      processingFee: "Up to 2.25%",
      maxAmount: "₹25,00,000",
      tenure: "12-60 months",
      minSalary: "₹20,000",
      rating: 4.3,
    },
    {
      id: 3,
      bank: "Axis Bank",
      loanType: "Personal Loan",
      interestRate: "10.49% - 22%",
      processingFee: "Up to 2%",
      maxAmount: "₹15,00,000",
      tenure: "12-60 months",
      minSalary: "₹15,000",
      rating: 4.2,
    },
  ]

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
              <p className="text-xs text-gray-600">Compare & Choose</p>
            </div>
          </Link>
          <div className="flex items-center space-x-3">
            <Link href="/login">
              <Button
                variant="outline"
                className="border-[#1e40af] text-[#1e40af] hover:bg-[#1e40af] hover:text-white bg-transparent"
              >
                Login
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Compare Financial Products</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find the best insurance, mutual funds, and loan products tailored to your needs
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 lg:w-auto lg:grid-cols-3">
            <TabsTrigger value="insurance" className="flex items-center gap-2">
              <Shield className="h-4 w-4" />
              Insurance
            </TabsTrigger>
            <TabsTrigger value="mutual-funds" className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              Mutual Funds
            </TabsTrigger>
            <TabsTrigger value="loans" className="flex items-center gap-2">
              <CreditCard className="h-4 w-4" />
              Loans
            </TabsTrigger>
          </TabsList>

          <TabsContent value="insurance" className="space-y-6">
            {/* Filters */}
            <Card>
              <CardHeader>
                <CardTitle>Filter Health Insurance Plans</CardTitle>
                <CardDescription>Customize your search to find the perfect plan</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="space-y-2">
                    <Label>Age</Label>
                    <div className="px-3">
                      <Slider
                        value={ageRange}
                        onValueChange={setAgeRange}
                        max={65}
                        min={18}
                        step={1}
                        className="w-full"
                      />
                      <div className="flex justify-between text-sm text-gray-500 mt-1">
                        <span>18</span>
                        <span>{ageRange[0]} years</span>
                        <span>65</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Coverage Amount</Label>
                    <div className="px-3">
                      <Slider
                        value={coverageAmount}
                        onValueChange={setCoverageAmount}
                        max={2000000}
                        min={100000}
                        step={100000}
                        className="w-full"
                      />
                      <div className="flex justify-between text-sm text-gray-500 mt-1">
                        <span>₹1L</span>
                        <span>₹{(coverageAmount[0] / 100000).toFixed(0)}L</span>
                        <span>₹20L</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Plan Type</Label>
                    <Select defaultValue="individual">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="individual">Individual</SelectItem>
                        <SelectItem value="family">Family Floater</SelectItem>
                        <SelectItem value="senior">Senior Citizen</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Company</Label>
                    <Select defaultValue="all">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Companies</SelectItem>
                        <SelectItem value="hdfc">HDFC ERGO</SelectItem>
                        <SelectItem value="icici">ICICI Lombard</SelectItem>
                        <SelectItem value="bajaj">Bajaj Allianz</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Insurance Plans Comparison */}
            <div className="grid gap-6">
              {insurancePlans.map((plan) => (
                <Card key={plan.id} className="border-2 hover:border-[#1e40af] transition-colors">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-xl">{plan.planName}</CardTitle>
                        <CardDescription className="text-lg font-medium text-[#1e40af]">{plan.company}</CardDescription>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-[#1e40af]">{plan.premium}</div>
                        <div className="text-sm text-gray-600">per year</div>
                        <div className="flex items-center mt-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="ml-1 text-sm font-medium">{plan.rating}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Coverage</h4>
                        <p className="text-lg font-bold text-green-600">{plan.coverage}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Waiting Period</h4>
                        <p className="text-gray-700">{plan.waitingPeriod}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Room Rent</h4>
                        <p className="text-gray-700">{plan.roomRent}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Network Hospitals</h4>
                        <p className="text-gray-700">{plan.networkHospitals}</p>
                      </div>
                    </div>
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Features</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {plan.features.map((feature, index) => (
                          <div key={index} className="flex items-center">
                            <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                            <span className="text-sm text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="flex space-x-3">
                      <Button className="bg-[#1e40af] hover:bg-[#1e3a8a] text-white flex-1">Buy Now</Button>
                      <Button
                        variant="outline"
                        className="border-[#1e40af] text-[#1e40af] hover:bg-[#1e40af] hover:text-white bg-transparent"
                      >
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="mutual-funds" className="space-y-6">
            {/* Mutual Funds Filters */}
            <Card>
              <CardHeader>
                <CardTitle>Filter Mutual Funds</CardTitle>
                <CardDescription>Find funds that match your investment goals</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="space-y-2">
                    <Label>Fund Category</Label>
                    <Select defaultValue="large-cap">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="large-cap">Large Cap</SelectItem>
                        <SelectItem value="mid-cap">Mid Cap</SelectItem>
                        <SelectItem value="small-cap">Small Cap</SelectItem>
                        <SelectItem value="hybrid">Hybrid</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Risk Level</Label>
                    <Select defaultValue="moderate">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low">Low</SelectItem>
                        <SelectItem value="moderate">Moderate</SelectItem>
                        <SelectItem value="high">High</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Investment Amount</Label>
                    <Select defaultValue="500">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="500">₹500</SelectItem>
                        <SelectItem value="1000">₹1,000</SelectItem>
                        <SelectItem value="5000">₹5,000</SelectItem>
                        <SelectItem value="10000">₹10,000</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Fund House</Label>
                    <Select defaultValue="all">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Fund Houses</SelectItem>
                        <SelectItem value="sbi">SBI Mutual Fund</SelectItem>
                        <SelectItem value="hdfc">HDFC Mutual Fund</SelectItem>
                        <SelectItem value="icici">ICICI Prudential</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Mutual Funds Comparison */}
            <div className="grid gap-6">
              {mutualFunds.map((fund) => (
                <Card key={fund.id} className="border-2 hover:border-[#1e40af] transition-colors">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-xl">{fund.fundName}</CardTitle>
                        <CardDescription className="text-lg font-medium text-[#1e40af]">{fund.company}</CardDescription>
                        <Badge className="mt-2 bg-blue-100 text-blue-800">{fund.category}</Badge>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-600">Min SIP</div>
                        <div className="text-2xl font-bold text-[#1e40af]">{fund.minSIP}</div>
                        <div className="flex items-center mt-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="ml-1 text-sm font-medium">{fund.rating}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">1 Year Return</h4>
                        <p className="text-lg font-bold text-green-600">{fund.returns1Y}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">3 Year Return</h4>
                        <p className="text-lg font-bold text-green-600">{fund.returns3Y}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">5 Year Return</h4>
                        <p className="text-lg font-bold text-green-600">{fund.returns5Y}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Expense Ratio</h4>
                        <p className="text-gray-700">{fund.expenseRatio}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Risk Level</h4>
                        <Badge
                          className={
                            fund.riskLevel === "Low"
                              ? "bg-green-100 text-green-800"
                              : fund.riskLevel === "Moderate"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-red-100 text-red-800"
                          }
                        >
                          {fund.riskLevel}
                        </Badge>
                      </div>
                    </div>
                    <div className="flex space-x-3">
                      <Button className="bg-[#1e40af] hover:bg-[#1e3a8a] text-white flex-1">Start SIP</Button>
                      <Button
                        variant="outline"
                        className="border-[#1e40af] text-[#1e40af] hover:bg-[#1e40af] hover:text-white bg-transparent"
                      >
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="loans" className="space-y-6">
            {/* Loan Filters */}
            <Card>
              <CardHeader>
                <CardTitle>Filter Loan Products</CardTitle>
                <CardDescription>Find the best loan options for your needs</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="space-y-2">
                    <Label>Loan Type</Label>
                    <Select defaultValue="personal">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="personal">Personal Loan</SelectItem>
                        <SelectItem value="home">Home Loan</SelectItem>
                        <SelectItem value="business">Business Loan</SelectItem>
                        <SelectItem value="education">Education Loan</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Loan Amount</Label>
                    <Select defaultValue="500000">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="100000">₹1,00,000</SelectItem>
                        <SelectItem value="500000">₹5,00,000</SelectItem>
                        <SelectItem value="1000000">₹10,00,000</SelectItem>
                        <SelectItem value="2000000">₹20,00,000</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Monthly Income</Label>
                    <Select defaultValue="50000">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="25000">₹25,000</SelectItem>
                        <SelectItem value="50000">₹50,000</SelectItem>
                        <SelectItem value="100000">₹1,00,000</SelectItem>
                        <SelectItem value="200000">₹2,00,000</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Bank</Label>
                    <Select defaultValue="all">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Banks</SelectItem>
                        <SelectItem value="hdfc">HDFC Bank</SelectItem>
                        <SelectItem value="icici">ICICI Bank</SelectItem>
                        <SelectItem value="axis">Axis Bank</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Loans Comparison */}
            <div className="grid gap-6">
              {loans.map((loan) => (
                <Card key={loan.id} className="border-2 hover:border-[#1e40af] transition-colors">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-xl">{loan.loanType}</CardTitle>
                        <CardDescription className="text-lg font-medium text-[#1e40af]">{loan.bank}</CardDescription>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-600">Interest Rate</div>
                        <div className="text-2xl font-bold text-[#1e40af]">{loan.interestRate.split(" - ")[0]}</div>
                        <div className="text-sm text-gray-600">onwards</div>
                        <div className="flex items-center mt-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="ml-1 text-sm font-medium">{loan.rating}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Max Amount</h4>
                        <p className="text-lg font-bold text-green-600">{loan.maxAmount}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Processing Fee</h4>
                        <p className="text-gray-700">{loan.processingFee}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Tenure</h4>
                        <p className="text-gray-700">{loan.tenure}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Min Salary</h4>
                        <p className="text-gray-700">{loan.minSalary}</p>
                      </div>
                    </div>
                    <div className="flex space-x-3">
                      <Button className="bg-[#1e40af] hover:bg-[#1e3a8a] text-white flex-1">Apply Now</Button>
                      <Button
                        variant="outline"
                        className="border-[#1e40af] text-[#1e40af] hover:bg-[#1e40af] hover:text-white bg-transparent"
                      >
                        Check Eligibility
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
