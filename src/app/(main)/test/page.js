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
    course: "",
    married: "",
    education: "",
    religion: "",
    gender: "",
    email: "",
    occupation: "",
    phone: "",
    institution: "",
    rural_or_urban: "",
  });

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const test = query.get("test");
    if (test) setSelectedTest(test);
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

    // --- Logic to handle Multi-Score Tests (e.g., HGMI) vs. Single-Score Tests ---
    if (test.categories) {
      // Multi-Score Calculation (HGMI)
      const categoryScores = test.categories.map(category => {
        let categorySum = 0;
        for (let i = category.range[0]; i <= category.range[1]; i++) {
          const val = answers[i];
          if (val !== undefined) {
            const idx = test.options.indexOf(val);
            // Ensure scoring exists for the index, otherwise default to 0
            categorySum += (test.scoring[i]?.[idx] || 0);
          }
        }
        return { name: category.name, score: categorySum };
      });

      // Total score for database/simple display
      totalScore = categoryScores.reduce((sum, cat) => sum + cat.score, 0);
      
      // Interpretation is fetched and the breakdown is attached
      interpretation = test.interpret(totalScore); 
      interpretation.breakdown = categoryScores.sort((a, b) => b.score - a.score);

    } else {
      // Single-Score Calculation (Dweck, Rses, etc.)
      totalScore = answers.reduce((sum, val, i) => {
        const idx = test.options.indexOf(val);
        // Ensure scoring exists for the index, otherwise default to 0
        return sum + (test.scoring[i]?.[idx] || 0);
      }, 0);
      
      interpretation = test.interpret(totalScore);
    }
    
    setScore(totalScore);
    setResultDetails(interpretation);
    setOpen(true);
    // --------------------------------------------------------------------------

    const payload = {
      ...userInfo,
      married: userInfo.married === "yes" ? 1 : 0,
      test_name: test.title,
      score: totalScore,
      // Store the full interpretation object, including the breakdown for HGMI
      result: JSON.stringify(interpretation), 
    };

    try {
      await axios.post(
        "https://psychometric-test-v2-backend.onrender.com/submit-details",
        payload
      );
      setFormSubmitted(false);
      setAnswers([]);
      setCurrentIndex(0);
      setUserInfo({
        name: "",
        dob: "",
        course: "",
        married: "",
        education: "",
        religion: "",
        gender: "",
        email: "",
        occupation: "",
        phone: "",
        institution: "",
        rural_or_urban: "",
      });
    } catch (error) {
      console.error("Failed to submit result", error);
    }
  };


  const reset = () => {
    setScore(null);
    setAnswers([]);
    setCurrentIndex(0);
    setResultDetails(null);
  };

  return (
    <div className="w-full mx-auto px-4 space-y-6">
      {
        !formSubmitted && (
          <>
          <h1 className="text-3xl font-extrabold text-[#841844]">Select a Test</h1>
          
          <Select
          onValueChange={(val) => {
            setSelectedTest(val);
            reset();
          }}
          value={selectedTest || ""}
          >
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
        )
      }

      {selectedTest &&
        (!formSubmitted ? (
          <Card className="w-full border border-[#841844]/40 shadow-md">
            <CardContent className="p-6 space-y-4">
              <h2 className="text-xl font-bold text-[#841844]">
                Fill Your Details Before Starting the Test
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {Object.entries(userInfo).map(([key, value]) => (
                  <div key={key} className="space-y-1">
                    <Label htmlFor={key} className="capitalize">
                      {key.replaceAll("_", " ")}
                    </Label>
                    {selectFields[key] ? (
                      <Select
                        value={value}
                        onValueChange={(val) =>
                          setUserInfo({ ...userInfo, [key]: val })
                        }
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue
                            placeholder={`Select ${key.replaceAll("_", " ")}`}
                          />
                        </SelectTrigger>
                        <SelectContent>
                          {selectFields[key].map((opt) => (
                            <SelectItem key={opt.value} value={opt.value}>
                              {opt.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    ) : key === "dob" ? (
                      <Input
                        type="date"
                        id={key}
                        value={value}
                        onChange={(e) =>
                          setUserInfo({ ...userInfo, [key]: e.target.value })
                        }
                      />
                    ) : (
                      <Input
                        type="text"
                        id={key}
                        value={value}
                        onChange={(e) =>
                          setUserInfo({ ...userInfo, [key]: e.target.value })
                        }
                      />
                    )}
                  </div>
                ))}
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
                Question {currentIndex + 1} of{" "}
                {TESTS[selectedTest]?.questions?.length}
              </div>
              <div className="mb-4 font-bold text-xl text-[#841844]">
                {TESTS[selectedTest]?.questions[currentIndex]}
              </div>
              <RadioGroup
                value={answers[currentIndex] || ""}
                onValueChange={handleAnswer}
              >
                {TESTS[selectedTest]?.options?.map((opt, index) => (
                  <div key={index} className="flex items-center space-x-2 w-full cursor-pointer">
                    <RadioGroupItem
                      value={opt}
                      id={`${currentIndex}-${index}`}
                    />
                    <Label className={"w-full cursor-pointer"} htmlFor={`${currentIndex}-${index}`}>{opt}</Label>
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
                    disabled={
                      answers.length !== TESTS[selectedTest]?.questions?.length
                    }
                  >
                    Submit
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}

      {/* Result Dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="text-left max-w-xl">
          <DialogHeader>
            <DialogTitle className="text-[#841844] text-center">
              {TESTS[selectedTest]?.title} Result
            </DialogTitle>
          </DialogHeader>
          {score !== null && resultDetails && (
            <div className="space-y-4 h-64 overflow-y-auto">
              {/* Conditional Score Display: Larger for single score, smaller with label for multi-score */}
              <p className={`font-bold text-[#841844] text-center ${resultDetails.breakdown ? 'text-2xl' : 'text-5xl'}`}>
                  {resultDetails.breakdown ? `Total Score: ${score}` : score}
              </p>

              {/* Multi-Intelligence Breakdown (HGMI specific) */}
              {resultDetails.breakdown && (
                <div className="space-y-3 p-3 border rounded-lg bg-gray-50">
                  <h3 className="text-xl font-semibold text-[#841844] mb-2">
                    Intelligence Profile Breakdown
                  </h3>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    {/* Breakdown is already sorted in calculateScore */}
                    {resultDetails.breakdown.map((cat, i) => (
                      <div
                        key={cat.name}
                        className={`flex justify-between p-2 rounded ${
                          i < 3 ? "bg-yellow-100 font-medium border border-yellow-300" : "bg-white border"
                        }`}
                      >
                        <span className="text-gray-700">{cat.name}</span>
                        <span className="text-[#841844] font-bold">
                          {cat.score} / 12
                        </span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground pt-2">
                    Scores shown are raw counts of 'Yes' responses per intelligence type (out of 12 questions).
                  </p>
                </div>
              )}

              {/* Interpretation (Common for all tests) */}
              {typeof resultDetails === 'string' ? (
                <p className="text-xl font-semibold text-[#841844]">{resultDetails}</p>
              ) : (
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-[#841844]">
                    {resultDetails.title}
                  </h3>

                  <p className="text-gray-700 leading-relaxed">
                    {resultDetails.description}
                  </p>

                  {resultDetails.studentProfile && (
                    <>
                      <h4 className="font-medium text-md text-[#841844]">Student Profile</h4>
                      <p className="text-gray-700">{resultDetails.studentProfile}</p>
                    </>
                  )}

                  {resultDetails.goal && (
                    <>
                      <h4 className="font-medium text-md text-[#841844]">Goal</h4>
                      <p className="text-gray-700">{resultDetails.goal}</p>
                    </>
                  )}

                  {resultDetails.suggestions && (
                    <div>
                      <h4 className="font-medium text-md text-[#841844] mb-1">
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

              <div className="text-center">
                <Button variant="outline" onClick={() => setOpen(false)}>
                  Close
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}