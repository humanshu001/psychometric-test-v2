"use client"

import { Monitor, CheckCircle2, Settings, TrendingUp, Database, BookText, Calculator, Music, Dumbbell, User, Users, Eye, Leaf, HelpCircle, Clock, ClipboardList, Grid2x2, Layers, FileText, ChevronRight, CheckCircle, X, GraduationCap, UserCheck, Building2, Briefcase, Mail, Phone, HelpCircleIcon } from 'lucide-react'
import Footer from '@/components/ui/footer';

export default function HomePage() {
    return(
        <>
           <div className="bg-black w-full h-16 flex px-4 items-center">
                <h1 className="text-white text-xl font-semibold">Geeta Personality Portal</h1>
           </div>
           
           <div className="relative h-[500px] flex justify-start items-center px-20" style={{backgroundImage: "url(/banner.png)", backgroundSize:"cover"}}>
                {/* Gradient Overlay */}
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-black/70 to-white/5"></div>
                <div className="relative space-y-8 w-1/3 text-white z-10">
                    <h1 className="text-6xl">
                        Find the right career path for you!
                    </h1>
                    <p className="text-lg"> 
                        Recommendations for successful career
                    </p>
                    <a href="/test?test=hgmi" className="bg-blue-700 px-6 py-3 rounded-full hover:bg-blue-800 transition">
                        Take the Free Test
                    </a>
                </div>
           </div>

           {/* Career Guidance Section */}
           <div className="bg-white px-20 py-16">
                <div className="flex gap-12 items-center">
                    {/* Left side - Image */}
                    <div className="w-1/3 flex-shrink-0 flex flex-col items-center">
                        <img 
                            src="/girl.png" 
                            alt="Career Guidance" 
                            className="w-[300px] object-cover h-[500px]"
                        />
                        <button className="mt-6 bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition">
                            Take the Free Test
                        </button>
                    </div>

                    {/* Right side - Content */}
                    <div className="flex-1 space-y-6">
                        <div>
                            <h2 className="text-2xl font-bold mb-4">What is our career guidance test?</h2>
                            <p className="text-gray-700 leading-relaxed">
                                Our career guidance test is based on the world's largest job database. It analyses you on various aspects and maps the career options that best fit you. The report provided also suggests appropriate learning paths to achieve your dream career. Even if you have already made a career decision, the test can still help you validate your choice, so that you are more confident about your decision.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold mb-4">Why do you need a career guidance test?</h2>
                            <p className="text-gray-700 leading-relaxed">
                                Choosing the right career path can be a very challenging task. After all, the career that you choose, sets the tone for the rest of your future. Take this data-driven test to get a clear picture of who you are and what you can be in your career.
                            </p>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-lg">
                            <div className="flex items-start gap-4">
                                <div className="text-6xl font-bold text-blue-600">93%</div>
                                <div className="flex-1">
                                    <p className="text-gray-700">
                                        of Indian students are aware of only 7 career options whereas, there are over 250 career options with 5000 job types available in our country.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <p className="text-gray-700 leading-relaxed">
                                Get insights into the most suitable career options, tailor-made just for you! What's more? You will get recommendations on learning paths that suit your skills to help you shine in your career.
                            </p>
                        </div>
                    </div>
                </div>
           </div>

           {/* Reasons to Choose Section */}
           <div className="bg-gray-50 py-16 px-10">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-12">Reasons to choose career guidance test</h2>
                    
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
           <div className="bg-white py-16 px-10">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-4">Structure and categories of the test</h2>
                    <p className="text-center text-gray-600 mb-8">In order to provide accurate recommendations, we need to know you in depth.</p>
                    
                    <div className="flex justify-center gap-4 mb-12">
                        <div className="flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full">
                            <HelpCircle className="w-5 h-5 text-blue-600" />
                            <span className="text-gray-800 font-medium">90 Questions</span>
                        </div>
                        <div className="flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full">
                            <Clock className="w-5 h-5 text-blue-600" />
                            <span className="text-gray-800 font-medium">90 Minutes</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Linguistic */}
                        <div className="text-center space-y-3">
                            <div className="flex justify-center">
                                <BookText className="w-16 h-16 text-gray-700" />
                            </div>
                            <h3 className="font-bold text-lg">Linguistic</h3>
                            <p className="text-sm text-gray-600">
                                You are good at words, language & also at retention, interpretation and explanation of ideas and information via language
                            </p>
                        </div>

                        {/* Logical-Mathematical */}
                        <div className="text-center space-y-3">
                            <div className="flex justify-center">
                                <Calculator className="w-16 h-16 text-gray-700" />
                            </div>
                            <h3 className="font-bold text-lg">Logical - Mathematical</h3>
                            <p className="text-sm text-gray-600">
                                You are good at logical thinking & also at detecting patterns, scientific reasoning and deduction, analyze problems
                            </p>
                        </div>

                        {/* Musical */}
                        <div className="text-center space-y-3">
                            <div className="flex justify-center">
                                <Music className="w-16 h-16 text-gray-700" />
                            </div>
                            <h3 className="font-bold text-lg">Musical</h3>
                            <p className="text-sm text-gray-600">
                                You are good at musical ability & also at awareness, appreciation and use of sound, recognition of tonal and rhythmic patterns
                            </p>
                        </div>

                        {/* Bodily-Kinesthetic */}
                        <div className="text-center space-y-3">
                            <div className="flex justify-center">
                                <Dumbbell className="w-16 h-16 text-gray-700" />
                            </div>
                            <h3 className="font-bold text-lg">Bodily - Kinesthetic</h3>
                            <p className="text-sm text-gray-600">
                                You are good at body movement control & also at manual dexterity, physical agility and balance, eye and body coordination
                            </p>
                        </div>

                        {/* Intrapersonal */}
                        <div className="text-center space-y-3">
                            <div className="flex justify-center">
                                <User className="w-16 h-16 text-gray-700" />
                            </div>
                            <h3 className="font-bold text-lg">Intrapersonal</h3>
                            <p className="text-sm text-gray-600">
                                You are good at self-awareness & also at personal cognizance, personal objectivity, capable of understanding oneself
                            </p>
                        </div>

                        {/* Interpersonal */}
                        <div className="text-center space-y-3">
                            <div className="flex justify-center">
                                <Users className="w-16 h-16 text-gray-700" />
                            </div>
                            <h3 className="font-bold text-lg">Interpersonal</h3>
                            <p className="text-sm text-gray-600">
                                You are good at perception of other people's feelings, able to relate to others, interpretation of behaviour and communications
                            </p>
                        </div>

                        {/* Spatial-Visual */}
                        <div className="text-center space-y-3">
                            <div className="flex justify-center">
                                <Eye className="w-16 h-16 text-gray-700" />
                            </div>
                            <h3 className="font-bold text-lg">Spatial - Visual</h3>
                            <p className="text-sm text-gray-600">
                                You are good at visual and spatial perception & also at interpretation and creation of visual images, pictorial imagination
                            </p>
                        </div>

                        {/* Naturalist */}
                        <div className="text-center space-y-3">
                            <div className="flex justify-center">
                                <Leaf className="w-16 h-16 text-gray-700" />
                            </div>
                            <h3 className="font-bold text-lg">Naturalist</h3>
                            <p className="text-sm text-gray-600">
                                You are good at doing things related to nature & also at nurturing and relating information to one's natural surroundings
                            </p>
                        </div>
                    </div>
                </div>
           </div>

           {/* Steps to Take the Test Section */}
           <div className="bg-gray-50 py-16 px-10">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-16">Steps to take the test</h2>
                    
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
           <div className="bg-white py-8 px-10">
                <div className="max-w-7xl mx-auto text-center">
                    <p className="text-lg text-gray-700 flex items-center justify-center gap-3">
                        <span>This test is created in association with</span>
                        <img src="/gu.png" alt="" className="h-14 ml-4" />
                    </p>
                </div>
           </div>

           {/* Test Results Comparison Section */}
           <div className="bg-gray-50 py-16 px-10">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-12">What will the test results include?</h2>
                    
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b">
                                    <th className="p-6 text-left font-bold text-lg">Features</th>
                                    {/* <th className="p-6 text-center bg-blue-50">
                                        <div className="space-y-2">
                                            <h3 className="font-bold text-lg">Basic Intelligence Report</h3>
                                            <p className="text-sm text-gray-600 font-normal">Essential intelligence profile analysis</p>
                                        </div>
                                    </th> */}
                                    <th className="p-6 text-center bg-blue-100">
                                        <div className="space-y-2">
                                            <h3 className="font-bold text-lg">Complete Intelligence Report</h3>
                                            <p className="text-sm text-gray-600 font-normal">Comprehensive analysis of all intelligence types</p>
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* Linguistic */}
                                <tr className="border-b hover:bg-gray-50">
                                    <td className="p-4 text-gray-700">Linguistic Intelligence</td>
                                    {/* <td className="p-4 text-center">
                                        <CheckCircle className="w-6 h-6 text-green-600 mx-auto" />
                                    </td> */}
                                    <td className="p-4 text-center bg-blue-50">
                                        <CheckCircle className="w-6 h-6 text-green-600 mx-auto" />
                                    </td>
                                </tr>

                                {/* Logical-Mathematical */}
                                <tr className="border-b hover:bg-gray-50">
                                    <td className="p-4 text-gray-700">Logical-Mathematical Intelligence</td>
                                    {/* <td className="p-4 text-center">
                                        <CheckCircle className="w-6 h-6 text-green-600 mx-auto" />
                                    </td> */}
                                    <td className="p-4 text-center bg-blue-50">
                                        <CheckCircle className="w-6 h-6 text-green-600 mx-auto" />
                                    </td>
                                </tr>

                                {/* Musical */}
                                <tr className="border-b hover:bg-gray-50">
                                    <td className="p-4 text-gray-700">Musical Intelligence</td>
                                    {/* <td className="p-4 text-center">
                                        <X className="w-6 h-6 text-gray-300 mx-auto" />
                                    </td> */}
                                    <td className="p-4 text-center bg-blue-50">
                                        <CheckCircle className="w-6 h-6 text-green-600 mx-auto" />
                                    </td>
                                </tr>

                                {/* Bodily-Kinesthetic */}
                                <tr className="border-b hover:bg-gray-50">
                                    <td className="p-4 text-gray-700">Bodily-Kinesthetic Intelligence</td>
                                    {/* <td className="p-4 text-center">
                                        <X className="w-6 h-6 text-gray-300 mx-auto" />
                                    </td> */}
                                    <td className="p-4 text-center bg-blue-50">
                                        <CheckCircle className="w-6 h-6 text-green-600 mx-auto" />
                                    </td>
                                </tr>

                                {/* Intrapersonal */}
                                <tr className="border-b hover:bg-gray-50">
                                    <td className="p-4 text-gray-700">Intrapersonal Intelligence</td>
                                    {/* <td className="p-4 text-center">
                                        <CheckCircle className="w-6 h-6 text-green-600 mx-auto" />
                                    </td> */}
                                    <td className="p-4 text-center bg-blue-50">
                                        <CheckCircle className="w-6 h-6 text-green-600 mx-auto" />
                                    </td>
                                </tr>

                                {/* Interpersonal */}
                                <tr className="border-b hover:bg-gray-50">
                                    <td className="p-4 text-gray-700">Interpersonal Intelligence</td>
                                    {/* <td className="p-4 text-center">
                                        <CheckCircle className="w-6 h-6 text-green-600 mx-auto" />
                                    </td> */}
                                    <td className="p-4 text-center bg-blue-50">
                                        <CheckCircle className="w-6 h-6 text-green-600 mx-auto" />
                                    </td>
                                </tr>

                                {/* Spatial-Visual */}
                                <tr className="border-b hover:bg-gray-50">
                                    <td className="p-4 text-gray-700">Spatial-Visual Intelligence</td>
                                    {/* <td className="p-4 text-center">
                                        <X className="w-6 h-6 text-gray-300 mx-auto" />
                                    </td> */}
                                    <td className="p-4 text-center bg-blue-50">
                                        <CheckCircle className="w-6 h-6 text-green-600 mx-auto" />
                                    </td>
                                </tr>

                                {/* Naturalist */}
                                <tr className="border-b hover:bg-gray-50">
                                    <td className="p-4 text-gray-700">Naturalist Intelligence</td>
                                    {/* <td className="p-4 text-center">
                                        <X className="w-6 h-6 text-gray-300 mx-auto" />
                                    </td> */}
                                    <td className="p-4 text-center bg-blue-50">
                                        <CheckCircle className="w-6 h-6 text-green-600 mx-auto" />
                                    </td>
                                </tr>

                                {/* Career Recommendations */}
                                <tr className="border-b hover:bg-gray-50">
                                    <td className="p-4 text-gray-700">Career & Learning Recommendations</td>
                                    {/* <td className="p-4 text-center">
                                        <CheckCircle className="w-6 h-6 text-green-600 mx-auto" />
                                    </td> */}
                                    <td className="p-4 text-center bg-blue-50">
                                        <CheckCircle className="w-6 h-6 text-green-600 mx-auto" />
                                    </td>
                                </tr>

                                {/* Detailed Analysis */}
                                <tr className="border-b hover:bg-gray-50">
                                    <td className="p-4 text-gray-700">Detailed Psychometric Analysis</td>
                                    {/* <td className="p-4 text-center">
                                        <X className="w-6 h-6 text-gray-300 mx-auto" />
                                    </td> */}
                                    <td className="p-4 text-center bg-blue-50">
                                        <CheckCircle className="w-6 h-6 text-green-600 mx-auto" />
                                    </td>
                                </tr>

                                {/* Number of Questions */}
                                <tr className="border-b hover:bg-gray-50">
                                    <td className="p-4 text-gray-700">Number of Questions</td>
                                    {/* <td className="p-4 text-center">
                                        <span className="font-semibold text-gray-700">30-40</span>
                                    </td> */}
                                    <td className="p-4 text-center bg-blue-50">
                                        <span className="font-semibold text-gray-700">90</span>
                                    </td>
                                </tr>

                                {/* Price */}
                                <tr className="border-b bg-gray-50">
                                    <td className="p-4 font-bold text-gray-700">Price</td>
                                    {/* <td className="p-4 text-center">
                                        <span className="text-2xl font-bold text-green-600">Free</span>
                                    </td> */}
                                    <td className="p-4 text-center bg-blue-50">
                                        <span className="text-2xl font-bold text-green-600">Free</span>
                                    </td>
                                </tr>

                                {/* Sample Report */}
                                <tr className="border-b hover:bg-gray-50">
                                    <td className="p-4 text-gray-700">Sample Report</td>
                                    {/* <td className="p-4 text-center">
                                        <a href="#" className="text-blue-600 hover:text-blue-800 font-medium underline">
                                            Download Now
                                        </a>
                                    </td> */}
                                    <td className="p-4 text-center bg-blue-50">
                                        <a href="#" className="text-blue-600 hover:text-blue-800 font-medium underline">
                                            Download Now
                                        </a>
                                    </td>
                                </tr>

                                {/* Action Buttons */}
                                <tr>
                                    <td className="p-6"></td>
                                    {/* <td className="p-6 text-center">
                                        <a href="/test" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition font-medium">
                                            Take the Free Test
                                        </a>
                                    </td> */}
                                    <td className="p-6 text-center bg-blue-50">
                                        <a href="/test?test=hgmi" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition font-medium">
                                            Take the Free Test
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
           </div>

           {/* Turn Recommendations into Reality Section */}
           <div className="relative bg-cover bg-center py-24 px-10" style={{backgroundImage: "url('/career.png')"}}>
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/70"></div>
                
                <div className="relative max-w-5xl ml-5 z-10">
                    <div className="text-white space-y-6">
                        <h2 className="text-5xl font-bold mb-4">Turn Recommendations into Reality</h2>
                        <p className="text-lg max-w-3xl mb-12">
                            At Geeta Technical Hub, we not only provide you with the best career recommendations but also help you get ready for your dream career.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
                            {/* Learning Programs */}
                            <div className="flex flex-col items-start space-y-2">
                                <GraduationCap className="w-16 h-16 mb-2" />
                                <h3 className="text-4xl font-bold">450+</h3>
                                <p className="text-lg">Learning Programs</p>
                            </div>

                            {/* Registered Users */}
                            <div className="flex flex-col items-start space-y-2">
                                <UserCheck className="w-16 h-16 mb-2" />
                                <h3 className="text-4xl font-bold">3.64M+</h3>
                                <p className="text-lg">Registered Users</p>
                            </div>

                            {/* Corporates Engaged */}
                            <div className="flex flex-col items-start space-y-2">
                                <Building2 className="w-16 h-16 mb-2" />
                                <h3 className="text-4xl font-bold">600+</h3>
                                <p className="text-lg">Corporates Engaged</p>
                            </div>

                            {/* Internship Opportunities */}
                            <div className="flex flex-col items-start space-y-2">
                                <Briefcase className="w-16 h-16 mb-2" />
                                <h3 className="text-4xl font-bold">170+</h3>
                                <p className="text-lg">Internship Opportunities</p>
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
           <div className="bg-white py-16 px-10">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Left Side - Title */}
                        <div>
                            <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
                            <p className="text-gray-600 text-lg">For queries, feedback & assistance</p>
                        </div>

                        {/* Right Side - Contact Options */}
                        <div className="space-y-6">
                            {/* Email */}
                            <div className="flex items-start gap-4">
                                <div className="bg-blue-100 p-3 rounded-lg">
                                    <Mail className="w-6 h-6 text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg mb-1">Email Us</h3>
                                    <a href="mailto:info@geetauniversity.edu.in" className="text-gray-600 hover:text-blue-600">
                                        info@geetauniversity.edu.in
                                    </a>
                                </div>
                            </div>
                            {/* Phone */}
                            <div className="flex items-start gap-4">
                                <div className="bg-blue-100 p-3 rounded-lg">
                                    <Phone className="w-6 h-6 text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg mb-1">Contact Number</h3>
                                    <a href="tel:09278768000" className="text-gray-600 hover:text-blue-600">
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