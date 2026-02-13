"use client"

import { Monitor, CheckCircle2, Settings, TrendingUp, Database, BookText, Calculator, Music, Dumbbell, User, Users, Eye, Leaf, HelpCircle, Clock, ClipboardList, Grid2x2, Layers, FileText, ChevronRight, CheckCircle, X, GraduationCap, UserCheck, Building2, Briefcase, Mail, Phone, HelpCircleIcon } from 'lucide-react'
import Footer from '@/components/ui/footer';

export default function HomePage() {
    return(
        <>
           <div className="bg-black w-full h-16 flex px-4 items-center">
                <h1 className="text-white text-xl font-semibold">Psychometric Test Portal</h1>
           </div>
           
           <div className="relative min-h-[400px] md:h-[500px] flex justify-start items-center px-4 md:px-10 lg:px-20 py-8 md:py-0" style={{backgroundImage: "url(/COVER-Copy.png)", backgroundSize:"cover"}}>
                {/* Gradient Overlay */}
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-black/80 to-black/20 md:from-black/70 md:to-white/5"></div>
                <div className="relative space-y-4 md:space-y-8 w-full md:w-2/3 lg:w-1/2 xl:w-1/3 text-white z-10">
                    <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold">
                        Confused About Courses?
                    </h1>
                    <p className="text-base md:text-lg lg:text-2xl"> 
                        A COMPLETE GUIDE FOR <br />
                        12TH STUDENTS ABOUT <br />
                        THEIR ACADEMIC JOURNEY <br />
                        & CAREER PLANNING
                    </p>
                    <a href="/test?test=hgmi" className="inline-block bg-blue-700 px-6 py-3 rounded-full hover:bg-blue-800 transition">
                        Take the Free Test
                    </a>
                </div>
           </div>

           {/* Career Guidance Section */}
           <div className="bg-white px-4 md:px-10 lg:px-20 py-12 md:py-16">
                <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-center">
                    {/* Left side - Image */}
                    <div className="w-full lg:w-1/3 flex-shrink-0 flex flex-col items-center">
                        <img 
                            src="/girl.png" 
                            alt="Career Guidance" 
                            className="w-full max-w-[300px] object-cover h-auto lg:h-[500px]"
                        />
                        <button className="mt-6 bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition">
                            Take the Free Test
                        </button>
                    </div>

                    {/* Right side - Content */}
                    <div className="flex-1 space-y-6">
                        <div>
                            <h2 className="text-xl md:text-2xl font-bold mb-4">What is our career guidance test?</h2>
                            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                                Our career guidance test is based on the world's largest job database. It analyses you on various aspects and maps the career options that best fit you. The report provided also suggests appropriate learning paths to achieve your dream career. Even if you have already made a career decision, the test can still help you validate your choice, so that you are more confident about your decision.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl md:text-2xl font-bold mb-4">Why do you need a career guidance test?</h2>
                            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                                Choosing the right career path can be a very challenging task. After all, the career that you choose, sets the tone for the rest of your future. Take this data-driven test to get a clear picture of who you are and what you can be in your career.
                            </p>
                        </div>

                        <div className="bg-gray-50 p-4 md:p-6 rounded-lg">
                            <div className="flex flex-col md:flex-row items-start gap-4">
                                <div className="text-4xl md:text-6xl font-bold text-blue-600">93%</div>
                                <div className="flex-1">
                                    <p className="text-sm md:text-base text-gray-700">
                                        of Indian students are aware of only 7 career options whereas, there are over 250 career options with 5000 job types available in our country.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                                Get insights into the most suitable career options, tailor-made just for you! What's more? You will get recommendations on learning paths that suit your skills to help you shine in your career.
                            </p>
                        </div>
                    </div>
                </div>
           </div>

           {/* Reasons to Choose Section */}
           <div className="bg-gray-50 py-12 md:py-16 px-4 md:px-10">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 md:mb-12">Reasons to choose career guidance test</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                        {/* Card 1 */}
                        <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
                            <div className="mb-4">
                                <Monitor className="w-12 h-12 text-blue-600" />
                            </div>
                            <p className="text-gray-800 text-sm">Data-driven psychometric test</p>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
                            <div className="mb-4">
                                <CheckCircle2 className="w-12 h-12 text-blue-600" />
                            </div>
                            <p className="text-gray-800 text-sm">Accurate analysis of your personality and strengths</p>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
                            <div className="mb-4">
                                <Settings className="w-12 h-12 text-blue-600" />
                            </div>
                            <p className="text-gray-800 text-sm">Customised career recommendations</p>
                        </div>

                        {/* Card 4 */}
                        <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
                            <div className="mb-4">
                                <TrendingUp className="w-12 h-12 text-blue-600" />
                            </div>
                            <p className="text-gray-800 text-sm">Detailed insights into various career aspects</p>
                        </div>

                        {/* Card 5 */}
                        <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
                            <div className="mb-4">
                                <Database className="w-12 h-12 text-blue-600" />
                            </div>
                            <p className="text-gray-800 text-sm">Based on most robust <span className="text-blue-600 font-semibold">O*NET</span> database</p>
                        </div>
                    </div>
                </div>
           </div>

           {/* Structure and Categories Section */}
           <div className="bg-white py-12 md:py-16 px-4 md:px-10">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-4">Structure and categories of the test</h2>
                    <p className="text-center text-sm md:text-base text-gray-600 mb-6 md:mb-8">In order to provide accurate recommendations, we need to know you in depth.</p>
                    
                    <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4 mb-8 md:mb-12">
                        <div className="flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full">
                            <HelpCircle className="w-5 h-5 text-blue-600" />
                            <span className="text-gray-800 font-medium">96 Questions</span>
                        </div>
                        <div className="flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full">
                            <Clock className="w-5 h-5 text-blue-600" />
                            <span className="text-gray-800 font-medium">96 Minutes</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                        {/* Linguistic */}
                        <div className="text-center space-y-3">
                            <div className="flex justify-center">
                                <BookText className="w-12 h-12 md:w-16 md:h-16 text-gray-700" />
                            </div>
                            <h3 className="font-bold text-base md:text-lg">Linguistic</h3>
                            <p className="text-xs md:text-sm text-gray-600">
                                You are good at words, language & also at retention, interpretation and explanation of ideas and information via language
                            </p>
                        </div>

                        {/* Logical-Mathematical */}
                        <div className="text-center space-y-3">
                            <div className="flex justify-center">
                                <Calculator className="w-12 h-12 md:w-16 md:h-16 text-gray-700" />
                            </div>
                            <h3 className="font-bold text-base md:text-lg">Logical - Mathematical</h3>
                            <p className="text-xs md:text-sm text-gray-600">
                                You are good at logical thinking & also at detecting patterns, scientific reasoning and deduction, analyze problems
                            </p>
                        </div>

                        {/* Musical */}
                        <div className="text-center space-y-3">
                            <div className="flex justify-center">
                                <Music className="w-12 h-12 md:w-16 md:h-16 text-gray-700" />
                            </div>
                            <h3 className="font-bold text-base md:text-lg">Musical</h3>
                            <p className="text-xs md:text-sm text-gray-600">
                                You are good at musical ability & also at awareness, appreciation and use of sound, recognition of tonal and rhythmic patterns
                            </p>
                        </div>

                        {/* Bodily-Kinesthetic */}
                        <div className="text-center space-y-3">
                            <div className="flex justify-center">
                                <Dumbbell className="w-12 h-12 md:w-16 md:h-16 text-gray-700" />
                            </div>
                            <h3 className="font-bold text-base md:text-lg">Bodily - Kinesthetic</h3>
                            <p className="text-xs md:text-sm text-gray-600">
                                You are good at body movement control & also at manual dexterity, physical agility and balance, eye and body coordination
                            </p>
                        </div>

                        {/* Intrapersonal */}
                        <div className="text-center space-y-3">
                            <div className="flex justify-center">
                                <User className="w-12 h-12 md:w-16 md:h-16 text-gray-700" />
                            </div>
                            <h3 className="font-bold text-base md:text-lg">Intrapersonal</h3>
                            <p className="text-xs md:text-sm text-gray-600">
                                You are good at self-awareness & also at personal cognizance, personal objectivity, capable of understanding oneself
                            </p>
                        </div>

                        {/* Interpersonal */}
                        <div className="text-center space-y-3">
                            <div className="flex justify-center">
                                <Users className="w-12 h-12 md:w-16 md:h-16 text-gray-700" />
                            </div>
                            <h3 className="font-bold text-base md:text-lg">Interpersonal</h3>
                            <p className="text-xs md:text-sm text-gray-600">
                                You are good at perception of other people's feelings, able to relate to others, interpretation of behaviour and communications
                            </p>
                        </div>

                        {/* Spatial-Visual */}
                        <div className="text-center space-y-3">
                            <div className="flex justify-center">
                                <Eye className="w-12 h-12 md:w-16 md:h-16 text-gray-700" />
                            </div>
                            <h3 className="font-bold text-base md:text-lg">Spatial - Visual</h3>
                            <p className="text-xs md:text-sm text-gray-600">
                                You are good at visual and spatial perception & also at interpretation and creation of visual images, pictorial imagination
                            </p>
                        </div>

                        {/* Naturalist */}
                        <div className="text-center space-y-3">
                            <div className="flex justify-center">
                                <Leaf className="w-12 h-12 md:w-16 md:h-16 text-gray-700" />
                            </div>
                            <h3 className="font-bold text-base md:text-lg">Naturalist</h3>
                            <p className="text-xs md:text-sm text-gray-600">
                                You are good at doing things related to nature & also at nurturing and relating information to one's natural surroundings
                            </p>
                        </div>
                    </div>
                </div>
           </div>

           {/* Steps to Take the Test Section */}
           <div className="bg-gray-50 py-12 md:py-16 px-4 md:px-10">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 md:mb-16">Steps to take the test</h2>
                    
                    {/* Steps Flow with SVG Arrows */}
                    <div className="relative">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                            {/* Step 1 */}
                            <div className="flex flex-col items-center text-center space-y-4 relative">
                                <div className="bg-white rounded-full p-6 shadow-md">
                                    <ClipboardList className="w-16 h-16 text-blue-600" />
                                </div>
                                <h3 className="font-bold text-lg">Step 1</h3>
                                <p className="text-sm text-gray-600">
                                    Click on TAKE THE FREE TEST and select your desired test
                                </p>
                                {/* Dotted Arrow - Hidden on mobile */}
                                <div className="hidden md:block absolute top-12 -right-12 w-24">
                                    <svg className="w-full h-16" viewBox="0 0 100 60">
                                        <path
                                            d="M 0 30 Q 50 0, 100 30"
                                            fill="none"
                                            stroke="#3b82f6"
                                            strokeWidth="2"
                                            strokeDasharray="5,5"
                                            markerEnd="url(#arrowhead)"
                                        />
                                        <defs>
                                            <marker
                                                id="arrowhead"
                                                markerWidth="10"
                                                markerHeight="10"
                                                refX="9"
                                                refY="3"
                                                orient="auto"
                                            >
                                                <polygon points="0 0, 10 3, 0 6" fill="#3b82f6" />
                                            </marker>
                                        </defs>
                                    </svg>
                                </div>
                            </div>

                            {/* Step 2 */}
                            <div className="flex flex-col items-center text-center space-y-4 relative">
                                <div className="bg-white rounded-full p-6 shadow-md">
                                    <Grid2x2 className="w-16 h-16 text-blue-600" />
                                </div>
                                <h3 className="font-bold text-lg">Step 2</h3>
                                <p className="text-sm text-gray-600">
                                    Fill in your personal details to begin the assessment
                                </p>
                                {/* Dotted Arrow - Hidden on mobile */}
                                <div className="hidden md:block absolute top-12 -right-12 w-24">
                                    <svg className="w-full h-16" viewBox="0 0 100 60">
                                        <path
                                            d="M 0 30 Q 50 60, 100 30"
                                            fill="none"
                                            stroke="#3b82f6"
                                            strokeWidth="2"
                                            strokeDasharray="5,5"
                                            markerEnd="url(#arrowhead2)"
                                        />
                                        <defs>
                                            <marker
                                                id="arrowhead2"
                                                markerWidth="10"
                                                markerHeight="10"
                                                refX="9"
                                                refY="3"
                                                orient="auto"
                                            >
                                                <polygon points="0 0, 10 3, 0 6" fill="#3b82f6" />
                                            </marker>
                                        </defs>
                                    </svg>
                                </div>
                            </div>

                            {/* Step 3 */}
                            <div className="flex flex-col items-center text-center space-y-4 relative">
                                <div className="bg-white rounded-full p-6 shadow-md">
                                    <Layers className="w-16 h-16 text-blue-600" />
                                </div>
                                <h3 className="font-bold text-lg">Step 3</h3>
                                <p className="text-sm text-gray-600">
                                    Answer all questions honestly and thoughtfully
                                </p>
                                {/* Dotted Arrow - Hidden on mobile */}
                                <div className="hidden md:block absolute top-12 -right-12 w-24">
                                    <svg className="w-full h-16" viewBox="0 0 100 60">
                                        <path
                                            d="M 0 30 Q 50 0, 100 30"
                                            fill="none"
                                            stroke="#3b82f6"
                                            strokeWidth="2"
                                            strokeDasharray="5,5"
                                            markerEnd="url(#arrowhead3)"
                                        />
                                        <defs>
                                            <marker
                                                id="arrowhead3"
                                                markerWidth="10"
                                                markerHeight="10"
                                                refX="9"
                                                refY="3"
                                                orient="auto"
                                            >
                                                <polygon points="0 0, 10 3, 0 6" fill="#3b82f6" />
                                            </marker>
                                        </defs>
                                    </svg>
                                </div>
                            </div>

                            {/* Step 4 */}
                            <div className="flex flex-col items-center text-center space-y-4">
                                <div className="bg-white rounded-full p-6 shadow-md">
                                    <FileText className="w-16 h-16 text-blue-600" />
                                </div>
                                <h3 className="font-bold text-lg">Step 4</h3>
                                <p className="text-sm text-gray-600">
                                    Submit your responses and view your detailed results
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
           </div>

           {/* Association Section */}
           <div className="bg-white py-6 md:py-8 px-4 md:px-10">
                <div className="max-w-7xl mx-auto text-center">
                    <p className="text-sm md:text-lg text-gray-700 flex flex-col sm:flex-row items-center justify-center gap-3">
                        <span>This test is created in association with</span>
                        <img src="/gu.png" alt="" className="h-10 md:h-14 sm:ml-4" />
                    </p>
                </div>
           </div>

           {/* Test Results Comparison Section */}
<div className="bg-gray-50 py-12 md:py-16 px-4 md:px-10">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 md:mb-12">
      Compare Our Assessments
    </h2>

    <div className="bg-white rounded-lg shadow-lg overflow-hidden overflow-x-auto">
      <table className="w-full min-w-[700px]">
        <thead>
          <tr className="border-b">
            <th className="p-3 md:p-6 text-left font-bold text-sm md:text-lg w-1/3">
              Features
            </th>
            
            {/* HGMI Header */}
            <th className="p-3 md:p-6 text-center bg-blue-100 w-1/3">
              <div className="space-y-2">
                <h3 className="font-bold text-sm md:text-lg">Multiple Intelligence</h3>
                <p className="text-xs md:text-sm text-gray-600 font-normal">
                  Complete profile of 8 intelligence types
                </p>
              </div>
            </th>

            {/* RIASEC Header */}
            <th className="p-3 md:p-6 text-center bg-green-100 w-1/3">
              <div className="space-y-2">
                <h3 className="font-bold text-sm md:text-lg">Career Interest (RIASEC)</h3>
                <p className="text-xs md:text-sm text-gray-600 font-normal">
                  Career personality & industry fit
                </p>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {/* Intelligence Metrics */}
          {[
            "Linguistic Intelligence",
            "Logical-Mathematical Intelligence",
            "Musical Intelligence",
            "Bodily-Kinesthetic Intelligence",
            "Intrapersonal Intelligence",
            "Interpersonal Intelligence",
            "Spatial-Visual Intelligence",
            "Naturalist Intelligence",
          ].map((feature, index) => (
            <tr key={index} className="border-b hover:bg-gray-50">
              <td className="p-2 md:p-4 text-xs md:text-base text-gray-700">
                {feature}
              </td>
              {/* HGMI has all these */}
              <td className="p-2 md:p-4 text-center bg-blue-50">
                <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-green-600 mx-auto" />
              </td>
              {/* RIASEC does not measure these specifically */}
              <td className="p-2 md:p-4 text-center bg-green-50">
                <X className="w-5 h-5 md:w-6 md:h-6 text-gray-300 mx-auto" />
              </td>
            </tr>
          ))}

          {/* Career & Learning Recommendations */}
          <tr className="border-b hover:bg-gray-50">
            <td className="p-2 md:p-4 text-xs md:text-base text-gray-700">
              Career Recommendations
            </td>
            <td className="p-2 md:p-4 text-center bg-blue-50">
              <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-green-600 mx-auto" />
            </td>
            <td className="p-2 md:p-4 text-center bg-green-50">
              <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-green-600 mx-auto" />
            </td>
          </tr>

          {/* Detailed Analysis */}
          <tr className="border-b hover:bg-gray-50">
            <td className="p-2 md:p-4 text-xs md:text-base text-gray-700">
              Detailed Psychometric Analysis
            </td>
            <td className="p-2 md:p-4 text-center bg-blue-50">
              <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-green-600 mx-auto" />
            </td>
            <td className="p-2 md:p-4 text-center bg-green-50">
              <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-green-600 mx-auto" />
            </td>
          </tr>

          {/* Number of Questions */}
          <tr className="border-b hover:bg-gray-50">
            <td className="p-2 md:p-4 text-xs md:text-base text-gray-700">
              Number of Questions
            </td>
            <td className="p-2 md:p-4 text-center bg-blue-50">
              <span className="font-semibold text-sm md:text-base text-gray-700">
                90
              </span>
            </td>
            <td className="p-2 md:p-4 text-center bg-green-50">
              <span className="font-semibold text-sm md:text-base text-gray-700">
                18
              </span>
            </td>
          </tr>

          {/* Price */}
          <tr className="border-b bg-gray-50">
            <td className="p-2 md:p-4 font-bold text-xs md:text-base text-gray-700">
              Price
            </td>
            <td className="p-2 md:p-4 text-center bg-blue-50">
              <span className="text-xl md:text-2xl font-bold text-green-600">
                Free
              </span>
            </td>
            <td className="p-2 md:p-4 text-center bg-green-50">
              <span className="text-xl md:text-2xl font-bold text-green-600">
                Free
              </span>
            </td>
          </tr>

          {/* Sample Report */}
          <tr className="border-b hover:bg-gray-50">
            <td className="p-2 md:p-4 text-xs md:text-base text-gray-700">
              Sample Report
            </td>
            <td className="p-2 md:p-4 text-center bg-blue-50">
              <a
                href="#"
                className="text-blue-600 hover:text-blue-800 font-medium underline text-xs md:text-base"
              >
                Download
              </a>
            </td>
            <td className="p-2 md:p-4 text-center bg-green-50">
              <a
                href="#"
                className="text-blue-600 hover:text-blue-800 font-medium underline text-xs md:text-base"
              >
                Download
              </a>
            </td>
          </tr>

          {/* Action Buttons */}
          <tr>
            <td className="p-3 md:p-6"></td>
            <td className="p-3 md:p-6 text-center bg-blue-50">
              <a
                href="/test?test=hgmi"
                className="inline-block bg-blue-600 text-white px-4 md:px-6 py-2 md:py-3 rounded-full hover:bg-blue-700 transition font-medium text-xs md:text-sm"
              >
                Start Long Test
              </a>
            </td>
            <td className="p-3 md:p-6 text-center bg-green-50">
              <a
                href="/test?test=riasec"
                className="inline-block bg-green-600 text-white px-4 md:px-6 py-2 md:py-3 rounded-full hover:bg-green-700 transition font-medium text-xs md:text-sm"
              >
                Start Short Test
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>

           {/* Turn Recommendations into Reality Section */}
           <div className="relative bg-cover bg-center py-12 md:py-24 px-4 md:px-10" style={{backgroundImage: "url('/career.png')"}}>
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 md:from-black/70"></div>
                
                <div className="relative max-w-5xl md:ml-5 z-10">
                    <div className="text-white space-y-4 md:space-y-6">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Turn Recommendations into Reality</h2>
                        <p className="text-sm md:text-base lg:text-lg max-w-3xl mb-8 md:mb-12">
                            At Geeta Technical Hub, we not only provide you with the best career recommendations but also help you get ready for your dream career.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-6 md:mb-10">
                            {/* Learning Programs */}
                            <div className="flex flex-col items-start space-y-2">
                                <GraduationCap className="w-12 h-12 md:w-16 md:h-16 mb-2" />
                                <h3 className="text-3xl md:text-4xl font-bold">450+</h3>
                                <p className="text-base md:text-lg">Learning Programs</p>
                            </div>

                            {/* Registered Users */}
                            <div className="flex flex-col items-start space-y-2">
                                <UserCheck className="w-12 h-12 md:w-16 md:h-16 mb-2" />
                                <h3 className="text-3xl md:text-4xl font-bold">3.64M+</h3>
                                <p className="text-base md:text-lg">Registered Users</p>
                            </div>

                            {/* Corporates Engaged */}
                            <div className="flex flex-col items-start space-y-2">
                                <Building2 className="w-12 h-12 md:w-16 md:h-16 mb-2" />
                                <h3 className="text-3xl md:text-4xl font-bold">600+</h3>
                                <p className="text-base md:text-lg">Corporates Engaged</p>
                            </div>

                            {/* Internship Opportunities */}
                            <div className="flex flex-col items-start space-y-2">
                                <Briefcase className="w-12 h-12 md:w-16 md:h-16 mb-2" />
                                <h3 className="text-3xl md:text-4xl font-bold">170+</h3>
                                <p className="text-base md:text-lg">Internship Opportunities</p>
                            </div>
                        </div>

                        <div>
                            <button className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition font-medium">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
           </div>

           {/* Contact Us Section */}
           <div className="bg-white py-12 md:py-16 px-4 md:px-10">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
                        {/* Left Side - Title */}
                        <div>
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Contact Us</h2>
                            <p className="text-gray-600 text-sm md:text-base lg:text-lg">For queries, feedback & assistance</p>
                        </div>

                        {/* Right Side - Contact Options */}
                        <div className="space-y-6">
                            {/* Email */}
                            <div className="flex items-start gap-4">
                                <div className="bg-blue-100 p-3 rounded-lg">
                                    <Mail className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-base md:text-lg mb-1">Email Us</h3>
                                    <a href="mailto:info@geetauniversity.edu.in" className="text-sm md:text-base text-gray-600 hover:text-blue-600 break-all">
                                        info@geetauniversity.edu.in
                                    </a>
                                </div>
                            </div>
                            {/* Phone */}
                            <div className="flex items-start gap-4">
                                <div className="bg-blue-100 p-3 rounded-lg">
                                    <Phone className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-base md:text-lg mb-1">Contact Number</h3>
                                    <a href="tel:09278768000" className="text-sm md:text-base text-gray-600 hover:text-blue-600">
                                        092787 68000
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
           </div>
        <Footer />
        </>
    )
}