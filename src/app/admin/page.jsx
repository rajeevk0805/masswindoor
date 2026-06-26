"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CalendarDays, Users, Mail, Phone, Clock } from "lucide-react"

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    if (typeof window !== "undefined") {
      return !!localStorage.getItem("authToken")
    }
    return false
  })
  const router = useRouter()

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/")
    }
  }, [isAuthenticated, router])

  const handleLogout = () => {
    localStorage.removeItem("authToken")
    router.push("/")
  }

  if (!isAuthenticated) {
    return <div>Loading...</div>
  }

  const bookings = [
    {
      id: 1,
      customerName: "John Doe",
      service: "Web Development",
      date: "2024-01-15",
      time: "10:00 AM",
      status: "confirmed",
    },
    {
      id: 2,
      customerName: "Jane Smith",
      service: "UI/UX Design",
      date: "2024-01-16",
      time: "2:00 PM",
      status: "pending",
    },
    {
      id: 3,
      customerName: "Mike Johnson",
      service: "Consultation",
      date: "2024-01-17",
      time: "11:30 AM",
      status: "confirmed",
    },
  ]

  const contacts = [
    {
      id: 1,
      name: "Sarah Wilson",
      email: "sarah@example.com",
      phone: "+1 (555) 123-4567",
      subject: "Project Inquiry",
      message: "I'm interested in discussing a new web development project.",
      date: "2024-01-14",
    },
    {
      id: 2,
      name: "David Brown",
      email: "david@example.com",
      phone: "+1 (555) 987-6543",
      subject: "Support Request",
      message: "Need help with existing website maintenance.",
      date: "2024-01-13",
    },
  ]

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <p className="text-muted-foreground">Welcome back! Here{'\''}s what{'\''}s happening.</p>
        </div>
        <Button onClick={handleLogout} variant="outline">
          Logout
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Bookings</CardTitle>
            <CalendarDays className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{bookings.length}</div>
            <p className="text-xs text-muted-foreground">+2 from last week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Contact Inquiries</CardTitle>
            <Mail className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{contacts.length}</div>
            <p className="text-xs text-muted-foreground">+1 from yesterday</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Reviews</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1</div>
            <p className="text-xs text-muted-foreground">Needs attention</p>
          </CardContent>
        </Card>
      </div>

      {/* Bookings Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CalendarDays className="h-5 w-5" />
            Recent Bookings
          </CardTitle>
          <CardDescription>Latest booking requests and appointments</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {bookings.map((booking) => (
              <div key={booking.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="space-y-1">
                  <p className="font-medium">{booking.customerName}</p>
                  <p className="text-sm text-muted-foreground">{booking.service}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <CalendarDays className="h-3 w-3" />
                      {booking.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {booking.time}
                    </span>
                  </div>
                </div>
                <Badge variant={booking.status === "confirmed" ? "default" : "secondary"}>{booking.status}</Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Contact Details Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Mail className="h-5 w-5" />
            Contact Us Details
          </CardTitle>
          <CardDescription>Recent contact form submissions and inquiries</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {contacts.map((contact) => (
              <div key={contact.id} className="p-4 border rounded-lg space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-medium">{contact.name}</p>
                    <p className="text-sm font-medium text-muted-foreground">{contact.subject}</p>
                  </div>
                  <span className="text-xs text-muted-foreground">{contact.date}</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Mail className="h-3 w-3" />
                      {contact.email}
                    </span>
                    <span className="flex items-center gap-1">
                      <Phone className="h-3 w-3" />
                      {contact.phone}
                    </span>
                  </div>
                  <p className="text-sm">{contact.message}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
