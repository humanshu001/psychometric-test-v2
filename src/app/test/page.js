"use client";

import { useState } from "react";
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
  married: [{ label: "Yes", value: "yes" }, { label: "No", value: "no" }],
  religion: [{ label: "Hindu", value: "hindu" }, { label: "Muslim", value: "muslim" }, { label: "Christian", value: "christian" }, { label: "Other", value: "other" }],
  rural_urban: [{ label: "Urban", value: "urban" }, { label: "Rural", value: "rural" }],
  gender: [{ label: "Male", value: "male" }, { label: "Female", value: "female" }, { label: "Other", value: "other" }],
};

export default function ImprovedPersonalityTest() {
  const [selectedTest, setSelectedTest] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [score, setScore] = useState(null);
  const [open, setOpen] = useState(false);
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
    rural_urban: ""
  });
  const [formSubmitted, setFormSubmitted] = useState(false);


  const handleAnswer = (value) => {
    const updated = [...answers];
    updated[currentIndex] = value;
    setAnswers(updated);
  };

  const calculateScore = async () => {
    const test = TESTS[selectedTest];
    const result = answers.reduce((sum, val, i) => {
      const idx = test.options.indexOf(val);
      return sum + (test.scoring[i]?.[idx] || 0);
    }, 0);

    setScore(result);
    setOpen(true);

    const payload = {
      name: userInfo.name,
      dob: userInfo.dob,
      course: userInfo.course,
      married: userInfo.married === "yes" ? 1 : 0,
      education: userInfo.education,
      religion: userInfo.religion,
      gender: userInfo.gender,
      email: userInfo.email,
      occupation: userInfo.occupation,
      phone: userInfo.phone,
      institution: userInfo.institution,
      rural_or_urban: userInfo.rural_urban,
      test_name: test.title,
      score: result,
      result: test.interpret(result),
    };

    try {
      console.log("Submission successful");
      console.log("Payload:", payload);
      const response = await axios.post("https://psychometric-test-geeta.onrender.com/submit-details", payload);
      console.log("Response data:", response.data);
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
        rural_urban: ""
      });
    } catch (error) {
      console.error("Failed to submit result", error);
    }
  };


  const reset = () => {
    setScore(null);
    setAnswers([]);
    setCurrentIndex(0);
  };

  return (
    <div className="w-full mx-auto px-4 space-y-6">
      <h1 className="text-2xl font-bold">Select a Test</h1>
      <Select
        onValueChange={(val) => {
          setSelectedTest(val);
          reset();
        }}
      >
        <SelectTrigger>
          <SelectValue placeholder="Choose a test" />
        </SelectTrigger>
        <SelectContent>
          {Object.entries(TESTS).map(([key, test]) => (
            <SelectItem key={key} value={key}>{test.title}</SelectItem>
          ))}
        </SelectContent>
      </Select>

      {selectedTest && (!formSubmitted ? (
          <Card className="w-full">
            <CardContent className="p-6 space-y-4">
              <h2 className="text-xl font-semibold mb-2">Fill your details before starting the test</h2>
             {Object.entries(userInfo).map(([key, value]) => (
              <div key={key} className="space-y-1">
                <Label htmlFor={key} className="capitalize">{key.replace("_", " or ")}</Label>
                {selectFields[key] ? (
                  <Select
                    value={value}
                    onValueChange={(val) =>
                      setUserInfo({ ...userInfo, [key]: val })
                    }
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder={`Select ${key.replace("_", " or ")}`} />
                    </SelectTrigger>
                    <SelectContent>
                      {selectFields[key].map((opt) => (
                        <SelectItem key={opt.value} value={opt.value}>
                          {opt.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                ) :
                  key === "dob" ? (
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

              <Button
                onClick={() => setFormSubmitted(true)}
                disabled={Object.values(userInfo).some((val) => !val.trim())}
              >
                Start Test
              </Button>
            </CardContent>
          </Card>
        ) : (
        <Card className="w-full">
          <CardContent className="p-6 space-y-4">
            <div className="text-sm text-muted-foreground">
              {TESTS[selectedTest]?.title}
            </div>
            <div className="text-sm font-medium">
              Question {currentIndex + 1} of{" "}
              {TESTS[selectedTest].questions.length}
            </div>
            <div className="mb-4 font-bold text-xl">
              {TESTS[selectedTest].questions[currentIndex]}
            </div>
            <RadioGroup
              value={answers[currentIndex] || ""}
              onValueChange={handleAnswer}
            >
              {TESTS[selectedTest].options.map((opt, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <RadioGroupItem value={opt} id={`${currentIndex}-${index}`} />
                  <Label htmlFor={`${currentIndex}-${index}`}>{opt}</Label>
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
              {currentIndex < TESTS[selectedTest].questions.length - 1 ? (
                <Button
                  onClick={() => setCurrentIndex(currentIndex + 1)}
                  disabled={!answers[currentIndex]}
                >
                  Next
                </Button>
              ) : (
                <Button
                  onClick={calculateScore}
                  disabled={
                    answers.length !== TESTS[selectedTest].questions.length
                  }
                >
                  Submit
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      ))}

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{TESTS[selectedTest]?.title} Result</DialogTitle>
          </DialogHeader>
          {score !== null && (
            <div className="space-y-2">
              <p className="text-6xl font-black text-center">{score}</p>
              <p className="text-center mt-3">
                {TESTS[selectedTest].interpret(score)}
              </p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
