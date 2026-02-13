"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { TESTS } from "@/data";
import { Input } from "@/components/ui/input";
import axios from "axios";

const selectFields = {
  married: [
    { label: "Yes", value: "yes" },
    { label: "No", value: "no" },
  ],
  religion: [
    { label: "Hindu", value: "hindu" },
    { label: "Muslim", value: "muslim" },
    { label: "Christian", value: "christian" },
    { label: "Other", value: "other" },
  ],
  rural_or_urban: [
    { label: "Urban", value: "urban" },
    { label: "Rural", value: "rural" },
  ],
  gender: [
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
    { label: "Other", value: "other" },
  ],
};

export default function ImprovedPersonalityTest() {
  const [selectedTest, setSelectedTest] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [score, setScore] = useState(null);
  const [open, setOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [resultDetails, setResultDetails] = useState(null);

  const [userInfo, setUserInfo] = useState({
    name: "",
    dob: "",
    class: "",
    roll_number: "",
    gender: "",
    email: "",
    father_name: "",
    phone: "",
    institution: "",
    city: "",
  });

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const test = query.get("test");
    if (test && TESTS[test]) {
      setSelectedTest(test);
    }
  }, []);

  const handleAnswer = (value) => {
    const updated = [...answers];
    updated[currentIndex] = value;
    setAnswers(updated);
  };

  const calculateScore = async () => {
    const test = TESTS[selectedTest];
    let totalScore;
    let interpretation;

    // --- Logic to handle Multi-Score Tests (HGMI & RIASEC) vs. Single-Score Tests ---
    if (test.categories) {
      // Multi-Score Calculation
      const categoryScores = test.categories.map((category) => {
        let categorySum = 0;
        // Check if range exists to prevent errors
        if (category.range && category.range.length === 2) {
          for (let i = category.range[0]; i <= category.range[1]; i++) {
            const val = answers[i];
            if (val !== undefined) {
              const idx = test.options.indexOf(val);
              // Handle standard 0-indexed scoring if specific map not found
              const point = test.scoring[i]?.[idx] ?? idx;
              categorySum += point;
            }
          }
        }
        return { ...category, score: categorySum };
      });

      // Total score isn't always relevant for multi-category, but we sum it anyway
      totalScore = categoryScores.reduce((sum, cat) => sum + cat.score, 0);

      // Interpret returns the base object, we append the breakdown
      interpretation = test.interpret(totalScore);
      interpretation.breakdown = categoryScores.sort((a, b) => b.score - a.score);
    } else {
      // Single-Score Calculation
      totalScore = answers.reduce((sum, val, i) => {
        const idx = test.options.indexOf(val);
        return sum + (test.scoring[i]?.[idx] || 0);
      }, 0);

      interpretation = test.interpret(totalScore);
    }

    setScore(totalScore);
    setResultDetails(interpretation);
    setOpen(true);

    const payload = {
      name: userInfo.name,
      dob: userInfo.dob,
      course: userInfo.class,
      married: 0,
      education: userInfo.roll_number,
      religion: "not-specified",
      gender: userInfo.gender,
      email: userInfo.email,
      occupation: userInfo.father_name,
      phone: userInfo.phone,
      institution: userInfo.institution,
      city: userInfo.city,
      rural_or_urban: "not-specified",
      test_name: test.title,
      score: totalScore,
      result: JSON.stringify(interpretation),
    };

    try {
      await axios.post(
        "https://deeppink-moose-154369.hostingersite.com/submit-details",
        payload
      );
      window.href="/"
      // Reset logic handles clearing state for next test if needed
    } catch (error) {
      console.error("Failed to submit result", error);
    }
  };

  const reset = () => {
    setScore(null);
    setAnswers([]);
    setCurrentIndex(0);
    setResultDetails(null);
    setFormSubmitted(false); 
  };

  const handleTestSelect = (val) => {
    setSelectedTest(val);
    reset();
  };

  return (
    <div className="w-full mx-auto px-4 space-y-6">
      {!formSubmitted && (
        <>
          <h1 className="text-3xl font-extrabold text-[#841844]">Select a Test</h1>
          <Select onValueChange={handleTestSelect} value={selectedTest || ""}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Choose a test" />
            </SelectTrigger>
            <SelectContent>
              {Object.entries(TESTS).map(([key, test]) => (
                <SelectItem key={key} value={key}>
                  {test.title}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </>
      )}

      {selectedTest &&
        (!formSubmitted ? (
          <Card className="w-full border border-[#841844]/40 shadow-md">
            <CardContent className="p-6 space-y-4">
              <h2 className="text-xl font-bold text-[#841844]">
                Fill Your Details Before Starting the Test
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <Label htmlFor="name">Name</Label>
                  <Input type="text" id="name" value={userInfo.name} onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })} />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="dob">Dob</Label>
                  <Input type="date" id="dob" value={userInfo.dob} onChange={(e) => setUserInfo({ ...userInfo, dob: e.target.value })} />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="class">Class</Label>
                  <Input type="text" id="class" value={userInfo.class} onChange={(e) => setUserInfo({ ...userInfo, class: e.target.value })} />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="roll_number">Roll Number</Label>
                  <Input type="text" id="roll_number" value={userInfo.roll_number} onChange={(e) => setUserInfo({ ...userInfo, roll_number: e.target.value })} />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="gender">Gender</Label>
                  <Select value={userInfo.gender} onValueChange={(val) => setUserInfo({ ...userInfo, gender: val })}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                    <SelectContent>
                      {selectFields.gender.map((opt) => (
                        <SelectItem key={opt.value} value={opt.value}>
                          {opt.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-1">
                  <Label htmlFor="email">Email</Label>
                  <Input type="email" id="email" value={userInfo.email} onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })} />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="father_name">Father Name</Label>
                  <Input type="text" id="father_name" value={userInfo.father_name} onChange={(e) => setUserInfo({ ...userInfo, father_name: e.target.value })} />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="phone">Phone</Label>
                  <Input type="text" id="phone" value={userInfo.phone} onChange={(e) => setUserInfo({ ...userInfo, phone: e.target.value })} />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="institution">State</Label>
                  <Input type="text" id="institution" value={userInfo.institution} onChange={(e) => setUserInfo({ ...userInfo, institution: e.target.value })} />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="city">City</Label>
                  <Input type="text" id="city" value={userInfo.city} onChange={(e) => setUserInfo({ ...userInfo, city: e.target.value })} />
                </div>
              </div>
              <Button
                className="bg-[#841844] text-white hover:bg-[#6d1337]"
                onClick={() => setFormSubmitted(true)}
                disabled={Object.values(userInfo).some((val) => !val.trim())}
              >
                Start Test
              </Button>
            </CardContent>
          </Card>
        ) : (
          <Card className="w-full border border-[#841844]/30">
            <CardContent className="p-6 space-y-4">
              <div className="text-sm text-muted-foreground">
                {TESTS[selectedTest]?.title}
              </div>
              <div className="text-sm font-medium">
                Question {currentIndex + 1} of {TESTS[selectedTest]?.questions?.length}
              </div>
              <div className="mb-4 font-bold text-xl text-[#841844]">
                {TESTS[selectedTest]?.questions[currentIndex]}
              </div>
              <RadioGroup
                value={answers[currentIndex] || ""}
                onValueChange={handleAnswer}
              >
                {TESTS[selectedTest]?.options?.map((opt, index) => (
                  <div key={index} className="flex items-center space-x-2 w-full cursor-pointer hover:bg-gray-50 p-2 rounded">
                    <RadioGroupItem value={opt} id={`${currentIndex}-${index}`} />
                    <Label className={"w-full cursor-pointer"} htmlFor={`${currentIndex}-${index}`}>
                      {opt}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
              <div className="flex justify-between mt-6">
                <Button
                  variant="outline"
                  disabled={currentIndex === 0}
                  onClick={() => setCurrentIndex(currentIndex - 1)}
                >
                  Previous
                </Button>
                {currentIndex < TESTS[selectedTest]?.questions?.length - 1 ? (
                  <Button
                    onClick={() => setCurrentIndex(currentIndex + 1)}
                    disabled={!answers[currentIndex]}
                  >
                    Next
                  </Button>
                ) : (
                  <Button
                    className="bg-[#841844] text-white hover:bg-[#6d1337]"
                    onClick={calculateScore}
                    disabled={answers.length !== TESTS[selectedTest]?.questions?.length}
                  >
                    Submit
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="text-left max-w-2xl max-h-[85vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-[#841844] text-center">
              {TESTS[selectedTest]?.title} Result
            </DialogTitle>
          </DialogHeader>

          {score !== null && resultDetails && (
            <div className="space-y-6">
              {/* Show Total Score only if it's NOT a multi-category breakdown (or if you want it anyway) */}
              {!resultDetails.breakdown && (
                <p className="font-bold text-[#841844] text-center text-5xl">
                   {score}
                </p>
              )}

              {/* --- MULTI-CATEGORY RESULT DISPLAY (HGMI & RIASEC) --- */}
              {resultDetails.breakdown && (
                <div className="space-y-6">
                  <div className="bg-gray-50 p-4 rounded-lg border">
                    <h3 className="text-xl font-bold text-[#841844] mb-4 text-center">
                      Top 3 Dominant Areas & Recommendations
                    </h3>

                    <div className="space-y-6">
                      {/* Detailed View for Top 3 */}
                      {resultDetails.breakdown.slice(0, 3).map((cat, index) => {
                        const details = TESTS[selectedTest]?.details?.[cat.id];
                        const maxScorePerCat = (cat.range[1] - cat.range[0] + 1) * 5; // Approx max based on 5-point scale max

                        return (
                          <div
                            key={cat.name}
                            className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm"
                          >
                            <div className="flex justify-between items-center mb-3 border-b pb-2">
                              <h4 className="text-lg font-bold text-[#841844]">
                                {index + 1}. {cat.name}
                              </h4>
                              <span className="bg-[#841844] text-white px-3 py-1 rounded-full text-sm font-semibold">
                                Score: {cat.score}
                              </span>
                            </div>

                            {details ? (
                              <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
                                {/* Characteristics / Description */}
                                <div>
                                  <strong className="block text-[#841844] mb-1">
                                    {details.characteristics ? "Characteristics:" : "Description:"}
                                  </strong>
                                  <p className="whitespace-pre-line leading-relaxed">
                                    {details.characteristics || details.description}
                                  </p>
                                </div>

                                {/* Courses / Careers */}
                                <div>
                                  <strong className="block text-[#841844] mb-1">
                                    {details.courses ? "Recommended Courses:" : "Suitable Careers:"}
                                  </strong>
                                  {Array.isArray(details.courses) ? (
                                    <ul className="list-disc list-inside space-y-1 marker:text-[#841844]">
                                      {details.courses.map((course, i) => (
                                        <li key={i}>{course}</li>
                                      ))}
                                    </ul>
                                  ) : (
                                    <p className="leading-relaxed">
                                      {details.careers || details.courses}
                                    </p>
                                  )}
                                </div>
                              </div>
                            ) : (
                              <p className="text-gray-500 italic">
                                Detailed recommendations not available for this category.
                              </p>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Summary List for the Rest */}
                  <div className="p-4 border rounded-lg bg-gray-50">
                    <h4 className="font-semibold text-gray-700 mb-3">
                      Full Profile Breakdown
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
                      {resultDetails.breakdown.slice(3).map((cat) => (
                        <div
                          key={cat.name}
                          className="flex justify-between p-2 rounded bg-white border items-center"
                        >
                          <span className="text-gray-600 truncate mr-2" title={cat.name}>
                            {cat.name}
                          </span>
                          <span className="font-bold text-gray-800">{cat.score}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* --- STANDARD RESULT INTERPRETATION (For non-breakdown tests) --- */}
              {/* If it's just a string result (old format support) */}
              {typeof resultDetails === "string" ? (
                <p className="text-xl font-semibold text-[#841844] text-center">
                  {resultDetails}
                </p>
              ) : (
                // If it's an object result
                <div className="space-y-4">
                   {/* Title/Description for all tests (including breakdown ones) */}
                  <div className="text-center">
                     <p className="text-gray-700 leading-relaxed font-medium">
                        {resultDetails.description}
                     </p>
                  </div>

                  {resultDetails.studentProfile && (
                    <div className="bg-blue-50 p-3 rounded-md border border-blue-100">
                      <h4 className="font-medium text-md text-[#841844]">
                        Student Profile
                      </h4>
                      <p className="text-gray-700">{resultDetails.studentProfile}</p>
                    </div>
                  )}

                  {resultDetails.goal && (
                    <div className="bg-green-50 p-3 rounded-md border border-green-100">
                      <h4 className="font-medium text-md text-[#841844]">Goal</h4>
                      <p className="text-gray-700">{resultDetails.goal}</p>
                    </div>
                  )}

                  {resultDetails.suggestions && (
                    <div className="bg-orange-50 p-3 rounded-md border border-orange-100">
                      <h4 className="font-medium text-md text-[#841844] mb-2">
                        Suggestions
                      </h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        {resultDetails.suggestions.map((s, i) => (
                          <li key={i}>{s}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}

              <div className="text-center pt-2">
                <Button
                  className="bg-[#841844] hover:bg-[#6d1337] text-white"
                  onClick={() => setOpen(false)}
                >
                  Close Result
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}