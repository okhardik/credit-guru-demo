import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, TrendingUp, Users, Award, ArrowRight, CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  const services = [
    {
      icon: Shield,
      title: "Insurance Solutions",
      description: "Comprehensive insurance plans from top Indian insurers",
      features: ["Life Insurance", "Health Insurance", "Motor Insurance", "Travel Insurance"],
    },
    {
      icon: TrendingUp,
      title: "Mutual Funds",
      description: "Diversified investment options for wealth creation",
      features: ["Equity Funds", "Debt Funds", "Hybrid Funds", "Tax Saving Funds"],
    },
    {
      icon: Users,
      title: "Banking Services",
      description: "Loans and banking products from leading banks",
      features: ["Personal Loans", "Home Loans", "Business Loans", "Credit Cards"],
    },
  ]

  const partners = [
    "HDFC Bank",
    "ICICI Bank",
    "SBI",
    "Axis Bank",
    "HDFC Life",
    "LIC",
    "Bajaj Allianz",
    "ICICI Prudential",
    "SBI Mutual Fund",
    "HDFC Mutual Fund",
    "Aditya Birla",
    "Nippon India",
  ]

  const stats = [
    { number: "50+", label: "Partner Companies" },
    { number: "10,000+", label: "Happy Customers" },
    { number: "₹500Cr+", label: "Claims Processed" },
    { number: "99.5%", label: "Customer Satisfaction" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
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
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#services" className="text-gray-700 hover:text-[#1e40af] transition-colors">
              Services
            </Link>
            <Link href="#partners" className="text-gray-700 hover:text-[#1e40af] transition-colors">
              Partners
            </Link>
            <Link href="#about" className="text-gray-700 hover:text-[#1e40af] transition-colors">
              About
            </Link>
            <Link href="#contact" className="text-gray-700 hover:text-[#1e40af] transition-colors">
              Contact
            </Link>
          </nav>
          <div className="flex items-center space-x-3">
            <Link href="/login">
              <Button
                variant="outline"
                className="border-[#1e40af] text-[#1e40af] hover:bg-[#1e40af] hover:text-white bg-transparent"
              >
                Login
              </Button>
            </Link>
            <Link href="/compare">
              <Button className="bg-[#1e40af] hover:bg-[#1e3a8a] text-white">Compare Now</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Your Trusted <span className="text-[#1e40af]">Financial</span> Aggregator
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Compare and choose the best insurance, mutual funds, and banking products from India's leading financial
              institutions. Get expert guidance and seamless service delivery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/compare">
                <Button size="lg" className="bg-[#1e40af] hover:bg-[#1e3a8a] text-white px-8 py-3">
                  Start Comparing <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="#services">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#1e40af] text-[#1e40af] hover:bg-[#1e40af] hover:text-white px-8 py-3 bg-transparent"
                >
                  Explore Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#1e40af] text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#fbbf24] mb-2">{stat.number}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive financial solutions tailored to your needs
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-2 hover:border-[#1e40af] transition-colors group">
                <CardHeader>
                  <div className="w-12 h-12 bg-[#1e40af] rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#1e3a8a] transition-colors">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-700">
                        <CheckCircle className="h-4 w-4 text-[#1e40af] mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Partners</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We work with India's most trusted financial institutions
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {partners.map((partner, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-lg mx-auto mb-3 flex items-center justify-center">
                    <span className="text-2xl font-bold text-[#1e40af]">
                      {partner
                        .split(" ")
                        .map((word) => word[0])
                        .join("")
                        .slice(0, 2)}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{partner}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">About Credit Guru</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Credit Guru is a leading financial aggregator in India, connecting customers with the best insurance,
                mutual fund, and banking products from top-tier financial institutions. With over a decade of
                experience, we've helped thousands of customers make informed financial decisions.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Award className="h-6 w-6 text-[#fbbf24] mr-3" />
                  <span className="text-gray-700">RBI Registered Financial Aggregator</span>
                </div>
                <div className="flex items-center">
                  <Shield className="h-6 w-6 text-[#fbbf24] mr-3" />
                  <span className="text-gray-700">100% Secure & Transparent Process</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-6 w-6 text-[#fbbf24] mr-3" />
                  <span className="text-gray-700">Expert Financial Advisors</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#1e40af] to-[#1e3a8a] p-8 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#fbbf24] mr-3 mt-0.5 flex-shrink-0" />
                  <span>Compare products from 50+ leading financial institutions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#fbbf24] mr-3 mt-0.5 flex-shrink-0" />
                  <span>Free consultation and personalized recommendations</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#fbbf24] mr-3 mt-0.5 flex-shrink-0" />
                  <span>End-to-end support from application to claim settlement</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#fbbf24] mr-3 mt-0.5 flex-shrink-0" />
                  <span>Digital platform for easy tracking and management</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-[#1e40af] to-[#1e3a8a] text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Join thousands of satisfied customers who trust Credit Guru for their financial needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/compare">
              <Button size="lg" className="bg-[#fbbf24] hover:bg-[#f59e0b] text-[#1e40af] font-semibold px-8 py-3">
                Compare Products Now
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#1e40af] px-8 py-3 bg-transparent"
              >
                Contact Our Experts
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Image
                  src="/images/credit-guru-logo.png"
                  alt="Credit Guru Logo"
                  width={40}
                  height={40}
                  className="rounded-lg"
                />
                <div>
                  <h3 className="text-lg font-bold">CREDIT GURU</h3>
                  <p className="text-xs text-gray-400">Your Financial Partner</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                India's trusted financial aggregator for insurance, mutual funds, and banking products.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="/insurance" className="hover:text-white transition-colors">
                    Insurance
                  </Link>
                </li>
                <li>
                  <Link href="/mutual-funds" className="hover:text-white transition-colors">
                    Mutual Funds
                  </Link>
                </li>
                <li>
                  <Link href="/loans" className="hover:text-white transition-colors">
                    Loans
                  </Link>
                </li>
                <li>
                  <Link href="/credit-cards" className="hover:text-white transition-colors">
                    Credit Cards
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="hover:text-white transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/partners" className="hover:text-white transition-colors">
                    Partners
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="/help" className="hover:text-white transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/complaints" className="hover:text-white transition-colors">
                    Complaints
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 Credit Guru. All rights reserved. | IRDAI Registration No: XXXXX | CIN: UXXXXX</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
