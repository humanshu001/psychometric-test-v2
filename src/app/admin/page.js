"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import axios from "axios";
import { Eye, GraduationCap } from "lucide-react";
import { TESTS } from "@/data";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DatePicker } from "@/components/ui/date-picker";
import { es } from "date-fns/locale";

const ADMIN_EMAIL = "admin@geeta.edu.in";
const ADMIN_PASSWORD = "admin123";

export default function AdminPanel() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [testSubmissions, setTestSubmissions] = useState([]);
  const [filteredSubmissions, setFilteredSubmissions] = useState([]);
  const [testName, setTestName] = useState("all");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const fetchAllTestSubmissions = async () => {
    try {
      const response = await axios.get(
        "https://psychometric-test-geeta.onrender.com/"
      );
      if(testName === "all") {
        setFilteredSubmissions(response.data);
      }else {
        setFilteredSubmissions(
          response.data.filter((submission) => submission.test_name === testName)
        );
      }
      setTestSubmissions(response.data);
    } catch (error) {
      console.error("Error fetching test submissions:", error);
      setError("Failed to fetch test submissions. Please try again later.");
    }
  };

  useEffect(() => {
    const session = sessionStorage.getItem("adminLoggedIn");
    if (session === "true") {
      setLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      sessionStorage.setItem("adminLoggedIn", "true");
      setLoggedIn(true);
      setError("");
    } else {
      setError("Invalid email or password.");
    }
  };

  useEffect(() => {
    if (testName === "all") {
      setFilteredSubmissions(testSubmissions);
    } else {
      setFilteredSubmissions(
        testSubmissions.filter((submission) => submission.test_name === testName)
      );
    }
  }, [testName, testSubmissions]);

  const handleLogout = () => {
    sessionStorage.removeItem("adminLoggedIn");
    setLoggedIn(false);
    setEmail("");
    setPassword("");
  };

  useEffect(() => {
    if (startDate && endDate) {
      const filtered = testSubmissions.filter((submission) => {
        const submissionDate =new Date(new Date(submission.timestamp).getTime() - 8 * 60 * 60 * 1000);
        return (submissionDate >= startDate && submissionDate <= endDate);
      });
      setFilteredSubmissions(filtered);
    } else if (testName === "all") {
      setFilteredSubmissions(testSubmissions);
    } else {
      setFilteredSubmissions(
        testSubmissions.filter((submission) => submission.test_name === testName)
      );
    }
  }, [startDate, endDate, testSubmissions]);

  if (!loggedIn) {
    return (
      <div className="max-w-md mx-auto mt-16">
        <Card>
          <CardContent className="p-6 space-y-4">
            <h2 className="text-2xl font-bold">Admin Login</h2>
            {error && (
              <Alert variant="destructive">
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="admin@geeta.edu.in"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Button onClick={handleLogin} className="w-full mt-4">
              Login
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="w-full mx-auto mt-10 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <Button variant="outline" onClick={handleLogout}>
          Logout
        </Button>
      </div>

      <Separator />

      <Card>
        <CardHeader>
          <h2 className="text-xl font-semibold">Submissions</h2>
        </CardHeader>
        <CardContent className="p-5 pt-0 space-y-4">
          <div className="flex justify-end flex-wrap gap-2 mb-4">
            <Select value={testName} onValueChange={setTestName}>
              <SelectTrigger>
                <SelectValue placeholder="Filter by Test" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Tests</SelectItem>
                {Object.entries(TESTS).map(([key, test]) => (
                  <SelectItem key={key} value={test.title}>
                    {test.title}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <DatePicker date={startDate} setDate={setStartDate} text="Start Date" />
            <DatePicker date={endDate} setDate={setEndDate} text="End Date" />

            <Button onClick={fetchAllTestSubmissions}>
              Search
            </Button>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Sr.</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Test</TableHead>
                <TableHead>Course</TableHead>
                <TableHead>Submission Time</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {filteredSubmissions.length !== 0 ? (
                filteredSubmissions.map((submission, index) => (
                  <TableRow key={submission.id}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{submission.name}</TableCell>
                    <TableCell>{submission.test_name}</TableCell>
                    <TableCell>{submission.course}</TableCell>
                    <TableCell>
                      {new Date(
                        new Date(submission.timestamp).getTime() -
                          8 * 60 * 60 * 1000
                      ).toLocaleString("en-IN", {
                        timeZone: "Asia/Kolkata",
                      })}
                    </TableCell>
                    <TableCell className="space-x-2">
                      {/* Detail View */}
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" size="icon">
                            <Eye className="h-4 w-4" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl">
                          <DialogHeader>
                            <DialogTitle className="text-xl">
                              Student Submission Details
                            </DialogTitle>
                          </DialogHeader>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 text-sm h-[400px] overflow-y-auto">
                            <div>
                              <Label className="text-muted-foreground">
                                Name
                              </Label>
                              <p className="font-medium">{submission.name}</p>
                            </div>
                            <div>
                              <Label className="text-muted-foreground">
                                Email
                              </Label>
                              <p className="font-medium">{submission.email}</p>
                            </div>

                            <div>
                              <Label className="text-muted-foreground">
                                Phone
                              </Label>
                              <p className="font-medium">{submission.phone}</p>
                            </div>
                            <div>
                              <Label className="text-muted-foreground">
                                Gender
                              </Label>
                              <p className="font-medium capitalize">
                                {submission.gender}
                              </p>
                            </div>

                            <div>
                              <Label className="text-muted-foreground">
                                Date of Birth
                              </Label>
                              <p className="font-medium">
                                {new Date(submission.dob).toLocaleDateString()}
                              </p>
                            </div>
                            <div>
                              <Label className="text-muted-foreground">
                                Marital Status
                              </Label>
                              <p className="font-medium">
                                {submission.married ? "Married" : "Unmarried"}
                              </p>
                            </div>

                            <div>
                              <Label className="text-muted-foreground">
                                Education
                              </Label>
                              <p className="font-medium">
                                {submission.education}
                              </p>
                            </div>
                            <div>
                              <Label className="text-muted-foreground">
                                Occupation
                              </Label>
                              <p className="font-medium">
                                {submission.occupation}
                              </p>
                            </div>

                            <div>
                              <Label className="text-muted-foreground">
                                Institution
                              </Label>
                              <p className="font-medium">
                                {submission.institution}
                              </p>
                            </div>
                            <div>
                              <Label className="text-muted-foreground">
                                Course
                              </Label>
                              <p className="font-medium">{submission.course}</p>
                            </div>

                            <div>
                              <Label className="text-muted-foreground">
                                Religion
                              </Label>
                              <p className="font-medium capitalize">
                                {submission.religion}
                              </p>
                            </div>
                            <div>
                              <Label className="text-muted-foreground">
                                Rural or Urban
                              </Label>
                              <p className="font-medium capitalize">
                                {submission.rural_or_urban}
                              </p>
                            </div>

                            <div className="col-span-full mt-2 border-t pt-4">
                              <Label className="text-muted-foreground">
                                Test Name
                              </Label>
                              <p className="font-medium">
                                {submission.test_name}
                              </p>
                            </div>
                            <div className="col-span-full flex flex-col items-center my-8">
                              <p className="font-black text-green-600 text-5xl">
                                {submission.score}
                              </p>
                              <Label className="text-muted-foreground">
                                Score
                              </Label>
                            </div>
                            <div className="col-span-1">
                              <Label className="text-muted-foreground">
                                Result
                              </Label>
                              <p className="font-semibold text-primary">
                                {submission.result}
                              </p>
                            </div>
                            <div className="col-span-1">
                              <Label className="text-muted-foreground">
                                Submitted On
                              </Label>
                              <p className="font-medium">
                                {new Date(
                                  submission.timestamp
                                ).toLocaleString()}
                              </p>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow className="text-center">
                  <TableCell colSpan={6} className="py-10">
                    <p className="text-muted-foreground">
                      No submissions found matching your search criteria.
                    </p>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
