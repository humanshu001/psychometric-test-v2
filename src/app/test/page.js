'use client'

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select'

const OPTIONS = [
  { label: 'Strongly Agree', value: 'stronglyAgree' },
  { label: 'Agree', value: 'agree' },
  { label: 'Disagree', value: 'disagree' },
  { label: 'Strongly Disagree', value: 'stronglyDisagree' },
]

const TESTS = {
  dweck: {
    title: 'Growth vs. Fixed Mindset Test',
    questions: [
      "Your intelligence is something very basic about you that you can’t change very much.",
      "No matter how much intelligence you have, you can always change it quite a bit.",
      "You can always substantially change how intelligent you are.",
      "You are a certain kind of person, and there is not much that can be done to really change that.",
      "You can always change basic things about the kind of person you are.",
      "Music talent can be learned by anyone.",
      "Only a few people will be truly good at sports – you have to be 'born with it.'",
      "Math is much easier to learn if you are male or maybe come from a culture that values math.",
      "The harder you work at something, the better you will be at it.",
      "No matter what kind of person you are, you can always change substantially.",
      "Trying new things is stressful for me and I avoid it.",
      "Some people are good and kind, some are not – it is not often that people change.",
      "I appreciate when parents, coaches, teachers give me feedback about my performance.",
      "I often get angry when I get feedback about my performance.",
      "All human beings without a brain injury or birth defect are capable of the same amount of learning.",
      "You can learn new things, but you can’t really change how intelligent you are.",
      "You can do things differently, but the important part of who you are can’t really be changed.",
      "Human beings are basically good, but sometimes make terrible decisions.",
      "An important reason why I do my schoolwork is that I like to learn new things.",
      "Truly smart people don’t need to try hard."
    ],
    scoring: {
      0: [0, 1, 2, 3],
      1: [3, 2, 1, 0],
      2: [3, 2, 1, 0],
      3: [0, 1, 2, 3],
      4: [3, 2, 1, 0],
      5: [3, 2, 1, 0],
      6: [0, 1, 2, 3],
      7: [0, 1, 2, 3],
      8: [3, 2, 1, 0],
      9: [3, 2, 1, 0],
      10: [0, 1, 2, 3],
      11: [0, 1, 2, 3],
      12: [3, 2, 1, 0],
      13: [0, 1, 2, 3],
      14: [3, 2, 1, 0],
      15: [0, 1, 2, 3],
      16: [0, 1, 2, 3],
      17: [3, 2, 1, 0],
      18: [3, 2, 1, 0],
      19: [0, 1, 2, 3],
    },
    interpret(score) {
      if (score >= 45) return 'Strong Growth Mindset'
      if (score >= 34) return 'Growth Mindset with some Fixed ideas'
      if (score >= 21) return 'Fixed Mindset with some Growth ideas'
      return 'Strong Fixed Mindset'
    }
  },
  rses: {
    title: 'Rosenberg Self-Esteem Scale',
    questions: [
      "On the whole, I am satisfied with myself.",
      "At times, I think I am no good at all.",
      "I feel that I have a number of good qualities.",
      "I am able to do things as well as most other people.",
      "I feel I do not have much to be proud of.",
      "I certainly feel useless at times.",
      "I feel that I'm a person of worth, at least on an equal plane with others.",
      "I wish I could have more respect for myself.",
      "All in all, I am inclined to feel that I am a failure.",
      "I take a positive attitude toward myself.",
    ],
    scoring: {
      0: [3, 2, 1, 0],
      1: [0, 1, 2, 3],
      2: [3, 2, 1, 0],
      3: [3, 2, 1, 0],
      4: [0, 1, 2, 3],
      5: [0, 1, 2, 3],
      6: [3, 2, 1, 0],
      7: [0, 1, 2, 3],
      8: [0, 1, 2, 3],
      9: [3, 2, 1, 0],
    },
    interpret(score) {
      if (score >= 21) return 'High Self-Esteem'
      if (score >= 11) return 'Moderate Self-Esteem'
      return 'Low Self-Esteem'
    }
  }
}

export default function ImprovedPersonalityTest() {
  const [selectedTest, setSelectedTest] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answers, setAnswers] = useState([])
  const [score, setScore] = useState(null)
  const [open, setOpen] = useState(false)

  const handleAnswer = (value) => {
    const updated = [...answers]
    updated[currentIndex] = value
    setAnswers(updated)
  }

  const calculateScore = () => {
    const test = TESTS[selectedTest]
    const result = answers.reduce((sum, val, i) => {
      const idx = ['stronglyAgree', 'agree', 'disagree', 'stronglyDisagree'].indexOf(val)
      return sum + (test.scoring[i]?.[idx] || 0)
    }, 0)
    setScore(result)
    setOpen(true)
  }

  const reset = () => {
    setScore(null)
    setAnswers([])
    setCurrentIndex(0)
  }

  return (
    <div className="w-full mx-auto px-4 space-y-6">
      <h1 className="text-2xl font-bold">Select a Test</h1>
      <Select onValueChange={(val) => {
        setSelectedTest(val)
        reset()
      }}>
        <SelectTrigger>
          <SelectValue placeholder="Choose a test" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="dweck">Growth vs. Fixed Mindset</SelectItem>
          <SelectItem value="rses">Rosenberg Self-Esteem Scale</SelectItem>
        </SelectContent>
      </Select>

      {selectedTest && (
        <Card className="w-full">
          <CardContent className="p-6 space-y-4">
            <div className="text-sm text-muted-foreground">
              {TESTS[selectedTest].title}
            </div>
            <div className="text-sm font-medium">
              Question {currentIndex + 1} of {TESTS[selectedTest].questions.length}
            </div>
            <div className="mb-4 font-bold text-xl">{TESTS[selectedTest].questions[currentIndex]}</div>
            <RadioGroup
              value={answers[currentIndex] || ''}
              onValueChange={handleAnswer}
            >
              {OPTIONS.map(opt => (
                <div key={opt.value} className="flex items-center space-x-2">
                  <RadioGroupItem value={opt.value} id={opt.value} />
                  <Label htmlFor={opt.value}>{opt.label}</Label>
                </div>
              ))}
            </RadioGroup>
            <div className="flex justify-between mt-6">
              <Button
                variant="o</div>utline"
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
                  disabled={answers.length !== TESTS[selectedTest].questions.length}
                >
                  Submit
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      )}

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{TESTS[selectedTest]?.title} Result</DialogTitle>
          </DialogHeader>
          {score !== null && (
            <div className="space-y-2">
              <p className="text-6xl font-black text-center">{score}</p>
              <p className='text-center mt-3'>{TESTS[selectedTest].interpret(score)}</p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
