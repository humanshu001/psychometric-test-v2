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
import jsonToCsvExport from "json-to-csv-export";

const ADMIN_EMAIL = "admin@geeta.edu.in";
const ADMIN_PASSWORD = "admin123";

// --- DATA: Intelligence Grid Details (Required for Admin View Mapping) ---
const HGMI_DETAILS = {
  "Linguistic": {
    characteristics: "You are good at words, language & also at:\n• Retention\n• Interpretation and explanation of ideas and information via language\n• Understanding relationship between communication and meaning",
    courses: [
      "BA LLB",
      "BBA LLB",
      "BA (H) Psychology, Political Science, English",
      "BA in Journalism & Mass Communication"
    ]
  },
  "Logical-Mathematical": {
    characteristics: "You are good at logical thinking & also at:\n• Detecting patterns\n• Scientific reasoning and deduction\n• Analyzing problems\n• Performing mathematical calculations\n• Understanding relationship between cause and effect",
    courses: [
      "B.Com",
      "Banking & Finance",
      "Law",
      "B.Pharmacy / D-Pharmacy",
      "BCA",
      "B.Sc (Hons.) in Mathematics, Microbiology, Forensic Science",
      "BA (Hons.) Economics",
      "B.Tech (CSE, ME, Civil)"
    ]
  },
  "Musical": {
    characteristics: "You are good at Musical Ability & also at:\n• Awareness, appreciation and use of sound\n• Recognition of tonal and rhythmic patterns\n• Understanding relationship between sound and feeling",
    courses: [
      "Event Management",
      "Mass Communication",
      "BBA, B.Com",
      "B.Tech",
      "BA Performing Arts",
      "Hotel Management"
    ]
  },
  "Bodily-Kinesthetic": {
    characteristics: "You are good at body movement control & also at:\n• Manual dexterity\n• Physical agility and balance\n• Eye and body coordination",
    courses: [
      "B.Sc. Design",
      "B.Design",
      "Diploma (ME, CE)",
      "B.Tech (ME, CE)"
    ]
  },
  "Intrapersonal": {
    characteristics: "You are good at self-awareness & also at:\n• Personal cognizance and objectivity\n• Understanding oneself and one's relationship to others\n• Understanding one's own need for and reaction to change",
    courses: [
      "BBA - Entrepreneurship & Family Business",
      "BA (Hons.) Psychology",
      "B.Sc Forensic Science",
      "BA (Hons.) in Design / Fine Arts / Performing Arts"
    ]
  },
  "Interpersonal": {
    characteristics: "You are good at perception of other people's feelings & also at:\n• Relating to others\n• Interpretation of behavior and communications\n• Understanding relationships between people and their situations",
    courses: [
      "BBA LLB",
      "BBA (Hons)",
      "BA (Hons.) Political Science, Psychology, Hotel Management",
      "B.Sc. Airlines, Travel & Tourism Management",
      "BBA MBA Integrated",
      "BA in Journalism & Mass Communication"
    ]
  },
  "Spatial": {
    characteristics: "You are good at visual and spatial perception & also at:\n• Interpretation and creation of visual images\n• Pictorial imagination and expression\n• Understanding relationship between images, meanings, and space",
    courses: [
      "B.Tech (Civil, ME, CSE, ECE)",
      "BCA",
      "B.Design, B.Sc Interior Design",
      "BA Film & Television Studies",
      "BA Fine Arts",
      "Dental Science"
    ]
  },
  "Naturalist": {
    characteristics: "You are good at doing things related to nature & also at:\n• Nurturing and relating information to one's natural surroundings\n• Sensitivity to nature and place within it\n• Caring for, taming and interacting with animals\n• Discern changes in weather or surroundings\n• Recognizing and classifying species",
    courses: [
      "B.Sc. Nutrition & Dietetics",
      "B.Sc. Agricultural Science",
      "B.Sc. Microbiology",
      "B.Sc Forensic Science",
      "B.Sc Chemistry"
    ]
  }
};

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
  const [dataToExport, setDataToExport] = useState([]);

  const fetchAllTestSubmissions = async () => {
    try {
      const response = await axios.get(
        "https://psychometric-test-v2-backend.onrender.com/"
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
    setDataToExport(
      filteredSubmissions.map((submission) => ({
        "Name": submission.name,
        "Email": submission.email,
        "Phone": submission.phone,
        "Test Name": submission.test_name,
        "Score": submission.score,
        "Result": submission.result,
        "Course": submission.course,
        "Institution": submission.institution,
        "Marital Status": submission.married ? "Married" : "Unmarried",
        "Education": submission.education,
        "Religion": submission.religion,
        "Rural or Urban": submission.rural_or_urban,
        "Timestamp": new Date(new Date(submission.timestamp).getTime() - 8 * 60 * 60 * 1000).toLocaleString("en-IN", {timeZone: "Asia/Kolkata"})
      }))
    );
  }, [filteredSubmissions]);

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
        <CardHeader className={"flex items-center justify-between"}>
          <h2 className="text-xl font-semibold">Submissions</h2>
          <Button
            variant="outline"
            onClick={() => jsonToCsvExport({data: dataToExport, filename: 'Test Submissions.csv'})}
          >
            Export to CSV
          </Button>
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
                        <DialogContent className="max-w-3xl max-h-[85vh] overflow-y-auto">
                          <DialogHeader>
                            <DialogTitle className="text-xl">
                              Student Submission Details
                            </DialogTitle>
                          </DialogHeader>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 text-sm">
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
                                Total Score
                              </Label>
                            </div>
                            <div className="col-span-full">
                              <Label className="text-muted-foreground">
                                Detailed Analysis
                              </Label>
                              {(() => {
                                const parseResult = (result) => {
                                  try {
                                    return JSON.parse(result);
                                  } catch (e) {
                                    return result;
                                  }
                                };

                                const parsedResult = parseResult(submission.result);

                                if (typeof parsedResult === 'string') {
                                  return (
                                    <p className="font-semibold text-primary">
                                      {parsedResult}
                                    </p>
                                  );
                                } else if (parsedResult && typeof parsedResult === 'object') {
                                  return (
                                    <div className="mt-2 p-4 bg-gray-50 rounded-lg space-y-3">
                                      <h4 className="font-bold text-lg text-primary">
                                        {parsedResult.title}
                                      </h4>
                                      <p className="text-gray-700 leading-relaxed">
                                        {parsedResult.description}
                                      </p>
                                      
                                      {/* --- HGMI INTELLIGENCE BREAKDOWN & RECOMMENDATIONS --- */}
                                      {parsedResult.breakdown && Array.isArray(parsedResult.breakdown) && (
                                        <div className="mt-6 space-y-6">
                                          
                                          {/* Full Score Table */}
                                          <div>
                                              <h5 className="font-bold text-md text-[#841844] mb-2">Full Score Breakdown</h5>
                                              <Table className="border rounded-lg bg-white">
                                                <TableHeader>
                                                  <TableRow>
                                                    <TableHead>Intelligence Type</TableHead>
                                                    <TableHead className="text-right">Score (Max 12)</TableHead>
                                                  </TableRow>
                                                </TableHeader>
                                                <TableBody>
                                                  {parsedResult.breakdown.map((cat, index) => (
                                                    <TableRow key={index} className={index < 3 ? 'bg-yellow-50 font-medium' : ''}>
                                                      <TableCell>{cat.name}</TableCell>
                                                      <TableCell className="text-right">{cat.score}</TableCell>
                                                    </TableRow>
                                                  ))}
                                                </TableBody>
                                              </Table>
                                          </div>

                                          {/* Detailed Recommendations for Top 3 */}
                                          <div className="border-t pt-4">
                                            <h5 className="font-bold text-lg text-[#841844] mb-4">Top 3 Recommended Careers & Courses</h5>
                                            <div className="space-y-4">
                                              {parsedResult.breakdown.slice(0, 3).map((cat, i) => {
                                                // Try to match by ID first (newer submissions), then by name (legacy support)
                                                const details = HGMI_DETAILS[cat.id] || HGMI_DETAILS[cat.name]; 
                                                
                                                if (!details) return null;

                                                return (
                                                  <div key={i} className="bg-white p-4 rounded-lg border shadow-sm">
                                                    <h6 className="font-bold text-[#841844] mb-2 text-md flex items-center gap-2">
                                                      <span className="bg-[#841844] text-white w-6 h-6 flex items-center justify-center rounded-full text-xs">{i + 1}</span>
                                                      {cat.name}
                                                    </h6>
                                                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                                                      <div>
                                                        <span className="font-semibold text-gray-800 block mb-1">Characteristics:</span>
                                                        <p className="text-gray-600 whitespace-pre-line">{details.characteristics}</p>
                                                      </div>
                                                      <div>
                                                        <span className="font-semibold text-gray-800 block mb-1 flex items-center gap-2">
                                                          <GraduationCap className="w-4 h-4"/> Recommended Courses:
                                                        </span>
                                                        <ul className="list-disc list-inside text-gray-600 space-y-1 mt-1">
                                                          {details.courses.map((c, idx) => (
                                                            <li key={idx}>{c}</li>
                                                          ))}
                                                        </ul>
                                                      </div>
                                                    </div>
                                                  </div>
                                                );
                                              })}
                                            </div>
                                          </div>

                                        </div>
                                      )}
                                      {/* --- END HGMI --- */}

                                      {parsedResult.studentProfile && (
                                        <div className="mt-4 border-t pt-2">
                                          <h5 className="font-medium text-primary mb-1">Student Profile</h5>
                                          <p className="text-gray-700">{parsedResult.studentProfile}</p>
                                        </div>
                                      )}
                                      {parsedResult.goal && (
                                        <div>
                                          <h5 className="font-medium text-primary mb-1">Goal</h5>
                                          <p className="text-gray-700">{parsedResult.goal}</p>
                                        </div>
                                      )}
                                      {parsedResult.suggestions && Array.isArray(parsedResult.suggestions) && (
                                        <div>
                                          <h5 className="font-medium text-primary mb-1">Suggestions</h5>
                                          <ul className="list-disc list-inside text-gray-700 space-y-1">
                                            {parsedResult.suggestions.map((suggestion, index) => (
                                              <li key={index}>{suggestion}</li>
                                            ))}
                                          </ul>
                                        </div>
                                      )}
                                    </div>
                                  );
                                } else {
                                  return (
                                    <p className="font-semibold text-primary">
                                      {JSON.stringify(parsedResult)}
                                    </p>
                                  );
                                }
                              })()}
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