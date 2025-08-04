"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="space-y-10 px-4 md:px-8 py-10">
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-extrabold text-[#841844]">
          Geeta Personality Portal
        </h1>
        <p className="text-lg text-muted-foreground">
          Powered by Geeta University – where “empowering education empowers
          minds”
        </p>
        <Link href="/test">
          <Button size="lg" className="bg-[#841844] hover:bg-[#6c1337] text-white">
            Go to Tests
          </Button>
        </Link>
      </div>

      <Separator />

      {/* Test Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="col-span-full">
          <h1 className="text-center text-3xl font-bold mb-4 text-[#841844]">
            Explore Your Personality with Our Tests
          </h1>
        </div>

        {[
          {
            href: "/test?test=dweck",
            title: "Growth vs. Fixed Mindset",
            badge: "Mindset",
            desc:
              "Explore how you perceive intelligence and learning. Do you believe abilities can grow with effort?",
            gradient: "from-[#ffb400] to-[#841844]",
          },
          {
            href: "/test?test=rses",
            title: "Rosenberg Self-Esteem Scale",
            badge: "Self-Esteem",
            desc:
              "Measure your self-worth, confidence, and how positively you view yourself across different situations.",
            gradient: "from-[#ff9f43] to-[#841844]",
          },
          {
            href: "/test?test=aggression",
            title: "Aggression Scale",
            badge: "Aggression",
            desc:
              "Understand how you handle anger, frustration, and social conflict in emotionally triggering events.",
            gradient: "from-red-400 to-[#841844]",
          },
          {
            href: "/test?test=emotional",
            title: "Emotional Intelligence Scale",
            badge: "Emotional Intelligence",
            desc:
              "Discover how well you recognize, regulate, and empathize with emotions—yours and others'.",
            gradient: "from-indigo-500 to-[#841844]",
          },
          {
            href: "/test?test=wellbeing",
            title: "Well-Being Scale",
            badge: "Well-Being",
            desc:
              "Assess your satisfaction with life, emotional resilience, and psychological wellness.",
            gradient: "from-emerald-400 to-[#841844]",
          },
          {
            href: "/test?test=peerpressure",
            title: "Peer Pressure Scale",
            badge: "Peer Influence",
            desc:
              "Evaluate how strongly peer opinions shape your choices, behavior, and decision-making.",
            gradient: "from-purple-500 to-[#841844]",
          },
          {
            href: "/test?test=enterpreneurship",
            title: "Student Entrepreneurial Mindset Scale",
            badge: "Entrepreneurship",
            desc:
              "Analyze your entrepreneurial traits like self-efficacy, risk-taking, creativity, and persistence.",
            gradient: "from-yellow-500 to-[#841844]",
          },
          {
            href: "/test?test=achievement",
            title: "Achievement Motivation Scale",
            badge: "Achievement",
            desc:
              "Measure your internal drive, goal orientation, competitiveness, and persistence toward success.",
            gradient: "from-blue-500 to-[#841844]",
          },
          {
            href: "/test?test=forgiveness",
            title: "Forgiveness Scale",
            badge: "Forgiveness",
            desc:
              "Reflect on your ability to let go of resentment, move forward, and restore emotional peace.",
            gradient: "from-pink-500 to-[#841844]",
          }
        ].map(({ href, title, badge, desc, gradient }) => (
          <Link key={title} href={href} className="h-full">
            {/* 🟢 Updated: Make the card fill the available height */}
            <Card className="h-full hover:shadow-xl transition-all duration-300 hover:border-[#841844]">
              {/* 🟢 Updated: Flex layout to make content stretch */}
              <CardContent className="p-6 space-y-3 flex flex-col h-full">
                <Badge className={`border-none font-extrabold bg-gradient-to-r ${gradient} text-white`}>
                  {badge}
                </Badge>
                <h2 className="text-xl font-semibold text-[#841844]">
                  {title}
                </h2>
                {/* 🟢 Updated: Make this paragraph grow to fill space evenly */}
                <p className="text-muted-foreground text-sm flex-grow">
                  {desc}
                </p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>


      <Separator />

      {/* Highlights */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="border-[#841844]">
          <CardContent className="space-y-2">
            <Badge className="bg-[#841844] text-white">Campus Size</Badge>
            <p className="text-2xl font-semibold">40 acres</p>
            <p className="text-sm text-muted-foreground">
              A sprawling, industry-connected campus in Panipat
            </p>
          </CardContent>
        </Card>

        <Card className="border-[#ffb400]">
          <CardContent className="space-y-2">
            <Badge className="bg-[#ffb400] text-white">Placements</Badge>
            <p className="text-2xl font-semibold">40 LPA (Highest)</p>
            <p className="text-sm text-muted-foreground">
              445+ recruiters and 3,000+ offers last season
            </p>
          </CardContent>
        </Card>

        <Card className="border-[#e91e63]">
          <CardContent className="space-y-2">
            <Badge className="bg-[#e91e63] text-white">Programs Offered</Badge>
            <p className="text-2xl font-semibold">70+</p>
            <p className="text-sm text-muted-foreground">
              From UG to Ph.D., across Engineering, Law, Management, Pharmacy,
              Agriculture & more
            </p>
          </CardContent>
        </Card>
      </div>

      <Separator />

      {/* Vision & Mission */}
      <Card className="bg-gradient-to-r from-[#fff4ec] to-[#ffe6f1]">
        <CardContent className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#841844]">
            Our Vision & Mission
          </h2>
          <p className="text-muted-foreground">
            “To reach the pinnacle of academic excellence and nurture
            future-ready leaders…”
          </p>
          <ul className="list-disc ml-5 space-y-2 text-sm">
            <li>Student‑centric, outcome‑based teaching.</li>
            <li>Fostering research & innovation.</li>
            <li>Strong industry‑academia partnerships.</li>
            <li>Nurturing entrepreneurship among students.</li>
          </ul>
        </CardContent>
      </Card>

      <Separator />

      {/* International & PhD */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="hover:bg-[#fdf2f8] transition">
          <CardContent className="space-y-3">
            <h3 className="text-xl font-semibold text-[#841844]">
              International Students
            </h3>
            <p className="text-sm text-muted-foreground">
              A vibrant campus preparing students for global careers, with
              dedicated admission & visa support
            </p>
          </CardContent>
        </Card>

        <Card className="hover:bg-[#fdf2f8] transition">
          <CardContent className="space-y-3">
            <h3 className="text-xl font-semibold text-[#841844]">
              Ph.D. Programs
            </h3>
            <p className="text-sm text-muted-foreground">
              Offers interdisciplinary Ph.D. across disciplines with dedicated
              infrastructure and national-level entrance testing
            </p>
          </CardContent>
        </Card>
      </div>

      <Separator />

      {/* Final CTA */}
      <div className="text-center">
        <Link href="/test">
          <Button
            size="lg"
            variant="outline"
            className="border-[#841844] text-[#841844] hover:bg-[#841844]/10"
          >
            Explore Personality Tests
          </Button>
        </Link>
      </div>
    </div>
  );
}
