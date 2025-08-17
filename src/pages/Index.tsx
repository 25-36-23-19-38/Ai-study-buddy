@@ .. @@
 import React from 'react';
 import { useNavigate } from 'react-router-dom';
-import { MessageCircle, Map, FileText, Sparkles, ArrowRight } from 'lucide-react';
+import { MessageCircle, Map, FileText, Sparkles, ArrowRight, Users, TrendingUp, Shield } from 'lucide-react';
 import { Button } from '@/components/ui/button';
 import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
 
@@ .. @@
       title: 'Chat with Book',
       description: 'Upload your notes or books and have interactive conversations with AI to understand complex topics.',
       path: '/chat',
-      color: 'from-sky-500 to-blue-500',
+      color: 'from-indigo-500 to-purple-500',
     },
     {
       icon: Map,
-      title: 'Get Chapter Roadmap',
+      title: 'Study Roadmaps',
       description: 'Generate visual study roadmaps that break down chapters into manageable learning steps.',
       path: '/roadmap',
-      color: 'from-purple-500 to-pink-500',
+      color: 'from-purple-500 to-blue-500',
     },
     {
       icon: FileText,
-      title: 'Summarize Notes',
+      title: 'Smart Summaries',
       description: 'Transform lengthy notes into concise summaries that capture all the key points.',
       path: '/summarize',
-      color: 'from-emerald-500 to-teal-500',
+      color: 'from-blue-500 to-cyan-500',
     },
   ];
 
@@ .. @@
       {/* Hero Section */}
       <section className="px-4 sm:px-6 lg:px-8 py-20 text-center">
         <div className="max-w-4xl mx-auto">
-          <div className="flex justify-center mb-8">
-            <div className="p-4 bg-gradient-to-r from-sky-500 to-purple-500 rounded-full animate-pulse">
-              <Sparkles className="h-12 w-12 text-white" />
+          <div className="flex justify-center mb-8 relative">
+            <div className="p-6 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl shadow-2xl">
+              <Sparkles className="h-16 w-16 text-white" />
             </div>
+            <div className="absolute -inset-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl opacity-20 blur-xl"></div>
           </div>
           
-          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
-            Learn Smart.{' '}
-            <span className="bg-gradient-to-r from-sky-600 to-purple-600 bg-clip-text text-transparent">
-              Study Less.
+          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
+            Transform Your{' '}
+            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
+              Learning Experience
             </span>
-            <br />
-            <span className="text-3xl sm:text-4xl lg:text-5xl text-gray-700">
-              AI-Powered Learning.
-            </span>
           </h1>
           
-          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
-            Transform your study experience with AI that understands your learning style. 
-            Chat with your materials, create roadmaps, and summarize complex topics instantly.
+          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
+            StudyFlow is a professional learning platform that helps students and professionals 
+            master complex subjects through intelligent study tools and personalized learning paths.
           </p>
           
           <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <Button 
               size="lg" 
-              className="bg-gradient-to-r from-sky-500 to-purple-500 hover:from-sky-600 hover:to-purple-600 text-white px-8 py-3 text-lg"
+              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
               onClick={() => navigate('/chat')}
             >
-              Start Learning
+              Get Started Free
               <ArrowRight className="ml-2 h-5 w-5" />
             </Button>
             <Button 
               size="lg" 
               variant="outline" 
-              className="border-sky-300 text-sky-600 hover:bg-sky-50 px-8 py-3 text-lg"
+              className="border-indigo-300 dark:border-indigo-600 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 px-8 py-4 text-lg font-semibold transition-all duration-300"
               onClick={() => navigate('/roadmap')}
             >
-              See Demo
+              View Demo
             </Button>
           </div>
+          
+          {/* Trust indicators */}
+          <div className="mt-16 flex items-center justify-center space-x-8 text-sm text-gray-500 dark:text-gray-400">
+            <div className="flex items-center space-x-2">
+              <Users className="h-4 w-4" />
+              <span>10,000+ Students</span>
+            </div>
+            <div className="flex items-center space-x-2">
+              <TrendingUp className="h-4 w-4" />
+              <span>95% Success Rate</span>
+            </div>
+            <div className="flex items-center space-x-2">
+              <Shield className="h-4 w-4" />
+              <span>Enterprise Security</span>
+            </div>
+          </div>
         </div>
       </section>
 
       {/* Features Section */}
-      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-white/50">
+      <section className="px-4 sm:px-6 lg:px-8 py-24 bg-white/50 dark:bg-gray-900/50">
         <div className="max-w-6xl mx-auto">
           <div className="text-center mb-16">
-            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
-              Powerful Features for Smart Learning
+            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
+              Professional Learning Tools
             </h2>
-            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
-              Discover how AI can revolutionize your study routine with these intelligent tools.
+            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
+              Everything you need to accelerate your learning and achieve your academic goals.
             </p>
           </div>
 
@@ -1,7 +1,7 @@
             {features.map((feature, index) => (
               <Card 
                 key={feature.title}
-                className="group hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-2 border-0 shadow-md"
+                className="group hover:shadow-2xl transition-all duration-500 cursor-pointer hover:-translate-y-3 border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-indigo-500/10 dark:hover:shadow-indigo-400/10 bg-white dark:bg-gray-800/50 backdrop-blur-sm"
                 onClick={() => navigate(feature.path)}
               >
                 <CardHeader className="text-center pb-4">
-                  <div className="mx-auto mb-4 p-3 w-fit rounded-full bg-gradient-to-r from-sky-100 to-purple-100 group-hover:scale-110 transition-transform">
-                    <div className={`p-3 rounded-full bg-gradient-to-r ${feature.color}`}>
+                  <div className="mx-auto mb-6 p-4 w-fit rounded-2xl bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/30 dark:to-purple-900/30 group-hover:scale-110 transition-transform duration-300">
+                    <div className={`p-4 rounded-xl bg-gradient-to-r ${feature.color} shadow-lg`}>
                       <feature.icon className="h-8 w-8 text-white" />
                     </div>
                   </div>
-                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-sky-600 transition-colors">
+                  <CardTitle className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                     {feature.title}
                   </CardTitle>
                 </CardHeader>
                 <CardContent className="text-center">
-                  <CardDescription className="text-gray-600 text-base leading-relaxed">
+                  <CardDescription className="text-gray-600 dark:text-gray-300 text-base leading-relaxed mb-6">
                     {feature.description}
                   </CardDescription>
                   <div className="mt-6">
                     <Button 
                       variant="ghost" 
-                      className="text-sky-600 hover:text-sky-700 hover:bg-sky-50 group-hover:translate-x-1 transition-transform"
+                      className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 group-hover:translate-x-1 transition-all duration-300 font-semibold"
                     >
-                      Try Now
+                      Explore Feature
                       <ArrowRight className="ml-2 h-4 w-4" />
                     </Button>
                   </div>
@@ .. @@
       </section>
 
       {/* CTA Section */}
-      <section className="px-4 sm:px-6 lg:px-8 py-20">
+      <section className="px-4 sm:px-6 lg:px-8 py-24">
         <div className="max-w-4xl mx-auto text-center">
-          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
-            Ready to Transform Your Learning?
+          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
+            Ready to Accelerate Your Success?
           </h2>
-          <p className="text-xl text-gray-600 mb-8">
-            Join thousands of students who are already learning smarter with AI Notes Buddy.
+          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
+            Join thousands of students and professionals who have transformed their learning with StudyFlow.
           </p>
           <Button 
             size="lg"
-            className="bg-gradient-to-r from-sky-500 to-purple-500 hover:from-sky-600 hover:to-purple-600 text-white px-12 py-4 text-lg"
+            className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-12 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
             onClick={() => navigate('/chat')}
           >
-            Get Started for Free
+            Start Your Journey
             <ArrowRight className="ml-2 h-5 w-5" />
           </Button>
+          <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
+            No credit card required • Free forever plan available
+          </p>
         </div>
       </section>
     </div>