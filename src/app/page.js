"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <div className="space-y-8">
        {/* Hero Section */}
        <div className="text-center space-y-3">
          <h1 className="text-5xl font-bold">Geeta Personality Portal</h1>
          <p className="text-lg text-muted-foreground">
            Powered by Geeta University – where “empowering education empowers
            minds”
          </p>
          <Link href="/test">
            <Button size="lg">Go to Tests</Button>
          </Link>
        </div>

        <Separator />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="col-span-full">
            <h1 className="text-center text-3xl font-bold mb-4">
              Explore Your Personality with Our Tests
            </h1>
          </div>

          {/* Growth Mindset */}
          <Card className="hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6 space-y-3">
              <Badge className="bg-gradient-to-r from-green-400 to-blue-500 text-white">
                Mindset
              </Badge>
              <h2 className="text-xl font-semibold">
                Growth vs. Fixed Mindset
              </h2>
              <p className="text-muted-foreground">
                Explore your beliefs about learning and ability through Dr.
                Carol Dweck’s world-renowned framework.
              </p>
            </CardContent>
          </Card>

          {/* Self-Esteem */}
          <Card className="hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6 space-y-3">
              <Badge className="bg-gradient-to-r from-pink-500 to-purple-500 text-white">
                Self-Esteem
              </Badge>
              <h2 className="text-xl font-semibold">
                Rosenberg Self-Esteem Scale
              </h2>
              <p className="text-muted-foreground">
                Discover your self-perception and confidence level with this
                classic self-esteem inventory.
              </p>
            </CardContent>
          </Card>

          {/* Aggression Scale */}
          <Card className="hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6 space-y-3">
              <Badge className="bg-gradient-to-r from-red-400 to-yellow-400 text-white">
                Aggression
              </Badge>
              <h2 className="text-xl font-semibold">Aggression Scale</h2>
              <p className="text-muted-foreground">
                Assess how you manage anger, frustration, and conflict through
                everyday emotional triggers.
              </p>
            </CardContent>
          </Card>

          {/* Emotional Intelligence */}
          <Card className="hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6 space-y-3">
              <Badge className="bg-gradient-to-r from-indigo-500 to-pink-500 text-white">
                Emotional Intelligence
              </Badge>
              <h2 className="text-xl font-semibold">
                Emotional Intelligence Scale
              </h2>
              <p className="text-muted-foreground">
                Measure your self-awareness, empathy, and relationship skills
                with this practical tool.
              </p>
            </CardContent>
          </Card>

          {/* Well-Being Scale */}
          <Card className="hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6 space-y-3">
              <Badge className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white">
                Well-Being
              </Badge>
              <h2 className="text-xl font-semibold">Well-Being Scale</h2>
              <p className="text-muted-foreground">
                Discover your overall life satisfaction and emotional health
                across different dimensions.
              </p>
            </CardContent>
          </Card>
        </div>

        <Separator />

        {/* Highlights */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="border-indigo-500">
            <CardContent className="space-y-2">
              <Badge className="bg-indigo-400 text-white">Campus Size</Badge>
              <p className="text-2xl font-semibold">40 acres</p>
              <p className="text-sm text-muted-foreground">
                A sprawling, industry-connected campus in Panipat
              </p>
            </CardContent>
          </Card>

          <Card className="border-green-500">
            <CardContent className="space-y-2">
              <Badge className="bg-green-400 text-white">Placements</Badge>
              <p className="text-2xl font-semibold">40 LPA (Highest)</p>
              <p className="text-sm text-muted-foreground">
                445+ recruiters and 3,000+ offers last season
              </p>
            </CardContent>
          </Card>

          <Card className="border-pink-500">
            <CardContent className="space-y-2">
              <Badge className="bg-pink-400 text-white">Programs Offered</Badge>
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
        <Card className="bg-gradient-to-r from-blue-50 to-green-50">
          <CardContent className="space-y-4">
            <h2 className="text-2xl font-semibold">Our Vision & Mission</h2>
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

        {/* International & Ph.D. */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="hover:bg-gray-50 transition">
            <CardContent className="space-y-3">
              <h3 className="text-xl font-semibold">International Students</h3>
              <p className="text-sm text-muted-foreground">
                A vibrant campus preparing students for global careers, with
                dedicated admission & visa support
              </p>
            </CardContent>
          </Card>

          <Card className="hover:bg-gray-50 transition">
            <CardContent className="space-y-3">
              <h3 className="text-xl font-semibold">Ph.D. Programs</h3>
              <p className="text-sm text-muted-foreground">
                Offers interdisciplinary Ph.D. across disciplines with dedicated
                infrastructure and national-level entrance testing
              </p>
            </CardContent>
          </Card>
        </div>

        <Separator />

        {/* Call-to-Action */}
        <div className="text-center">
          <Link href="/test">
            <Button size="lg" variant="outline">
              Explore Personality Tests
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}
