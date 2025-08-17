@@ .. @@
 import React, { useState } from 'react';
 import { NavLink, useNavigate } from 'react-router-dom';
-import { BookOpen, Menu, X, LogOut, ChevronDown } from 'lucide-react';
+import { BookOpen, Menu, X, LogOut, ChevronDown, Moon, Sun } from 'lucide-react';
 import { Button } from '@/components/ui/button';
+import { useTheme } from '@/contexts/ThemeProvider';
 import {
   DropdownMenu,
   DropdownMenuContent,
@@ .. @@
 const Navbar = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const navigate = useNavigate();
+  const { theme, toggleTheme } = useTheme();
 
   const mainNavItems = [
@@ .. @@
-      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200/50 shadow-sm">
+      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-700/50 shadow-sm transition-colors duration-300">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex justify-between items-center h-16">
             {/* Logo */}
             <NavLink to="/" className="flex items-center space-x-3 group">
               <div className="relative">
-                <div className="p-2.5 bg-gradient-to-br from-sky-500 via-blue-500 to-purple-600 rounded-xl group-hover:scale-105 transition-all duration-300 shadow-lg group-hover:shadow-xl">
+                <div className="p-2.5 bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-600 rounded-xl group-hover:scale-105 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                   <BookOpen className="h-6 w-6 text-white" />
                 </div>
-                <div className="absolute -inset-1 bg-gradient-to-br from-sky-500 to-purple-600 rounded-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300 -z-10"></div>
+                <div className="absolute -inset-1 bg-gradient-to-br from-indigo-600 to-blue-600 rounded-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300 -z-10"></div>
               </div>
               <div className="hidden sm:block">
-                <span className="text-xl font-bold bg-gradient-to-r from-sky-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
-                  AI Notes Buddy
+                <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
+                  StudyFlow
                 </span>
-                <div className="text-xs text-gray-500 -mt-1">Smart Learning Assistant</div>
+                <div className="text-xs text-gray-500 dark:text-gray-400 -mt-1">Professional Learning Platform</div>
               </div>
             </NavLink>
 
@@ .. @@
                 className={({ isActive }) =>
-                  `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
+                  `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 relative ${
                     isActive
-                      ? 'text-sky-600 bg-sky-50 shadow-sm'
-                      : 'text-gray-600 hover:text-sky-600 hover:bg-sky-50/50'
+                      ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 shadow-sm'
+                      : 'text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50/50 dark:hover:bg-indigo-900/20'
                   }`
                 }
               >
@@ .. @@
             <DropdownMenu>
               <DropdownMenuTrigger asChild>
-                <Button variant="ghost" className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-sky-600 hover:bg-sky-50/50">
+                <Button variant="ghost" className="px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50/50 dark:hover:bg-indigo-900/20">
                   Tools
                   <ChevronDown className="ml-1 h-4 w-4" />
                 </Button>
               </DropdownMenuTrigger>
-              <DropdownMenuContent align="center" className="w-56 mt-2">
+              <DropdownMenuContent align="center" className="w-56 mt-2 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                 {toolsNavItems.map((item) => (
                   <DropdownMenuItem key={item.name} asChild>
                     <NavLink
                       to={item.path}
-                      className="flex items-center space-x-2 w-full px-2 py-2 text-sm cursor-pointer"
+                      className="flex items-center space-x-2 w-full px-2 py-2 text-sm cursor-pointer text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400"
                     >
                       <span className="text-base">{item.icon}</span>
                       <span>{item.name}</span>
@@ .. @@
                 className={({ isActive }) =>
-                  `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
+                  `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 relative ${
                     isActive
-                      ? 'text-sky-600 bg-sky-50 shadow-sm'
-                      : 'text-gray-600 hover:text-sky-600 hover:bg-sky-50/50'
+                      ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 shadow-sm'
+                      : 'text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50/50 dark:hover:bg-indigo-900/20'
                   }`
                 }
               >
@@ .. @@
           {/* Desktop Sign Out */}
           <div className="hidden lg:flex items-center">
+            {/* Theme Toggle */}
+            <Button
+              variant="ghost"
+              size="sm"
+              onClick={toggleTheme}
+              className="mr-3 p-2 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors duration-200"
+            >
+              {theme === 'dark' ? (
+                <Sun className="h-4 w-4 text-gray-600 dark:text-gray-300" />
+              ) : (
+                <Moon className="h-4 w-4 text-gray-600 dark:text-gray-300" />
+              )}
+            </Button>
             <Button
               variant="outline"
               size="sm"
               onClick={handleSignOut}
-              className="flex items-center space-x-2 border-gray-200 hover:border-sky-300 hover:bg-sky-50 transition-all duration-200"
+              className="flex items-center space-x-2 border-gray-200 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-all duration-200"
             >
               <LogOut className="h-4 w-4" />
               <span>Sign Out</span>
@@ .. @@
             <Button
               variant="ghost"
               size="sm"
               onClick={() => setIsMenuOpen(!isMenuOpen)}
-              className="p-2 hover:bg-sky-50 transition-colors duration-200"
+              className="p-2 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors duration-200"
             >
               {isMenuOpen ? (
-                <X className="h-6 w-6 text-gray-600" />
+                <X className="h-6 w-6 text-gray-600 dark:text-gray-300" />
               ) : (
-                <Menu className="h-6 w-6 text-gray-600" />
+                <Menu className="h-6 w-6 text-gray-600 dark:text-gray-300" />
               )}
             </Button>
           </div>
@@ .. @@
         {/* Mobile Navigation */}
         {isMenuOpen && (
-          <div className="lg:hidden border-t border-gray-200/50 bg-white/95 backdrop-blur-md">
+          <div className="lg:hidden border-t border-gray-200/50 dark:border-gray-700/50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md">
             <div className="px-2 pt-4 pb-6 space-y-1">
               {/* Main Navigation */}
               <div className="space-y-1 mb-4">
@@ .. @@
                     className={({ isActive }) =>
-                      `block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
+                      `block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 relative ${
                         isActive
-                          ? 'text-sky-600 bg-sky-50 shadow-sm'
-                          : 'text-gray-600 hover:text-sky-600 hover:bg-sky-50/50'
+                          ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 shadow-sm'
+                          : 'text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50/50 dark:hover:bg-indigo-900/20'
                       }`
                     }
                     onClick={() => setIsMenuOpen(false)}
@@ .. @@
               {/* Tools Section */}
-              <div className="border-t border-gray-200/50 pt-4 mb-4">
-                <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
+              <div className="border-t border-gray-200/50 dark:border-gray-700/50 pt-4 mb-4">
+                <div className="px-4 py-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                   Tools
                 </div>
                 {toolsNavItems.map((item) => (
@@ .. @@
                     className={({ isActive }) =>
-                      `flex items-center space-x-3 px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
+                      `flex items-center space-x-3 px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 relative ${
                         isActive
-                          ? 'text-sky-600 bg-sky-50 shadow-sm'
-                          : 'text-gray-600 hover:text-sky-600 hover:bg-sky-50/50'
+                          ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 shadow-sm'
+                          : 'text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50/50 dark:hover:bg-indigo-900/20'
                       }`
                     }
                     onClick={() => setIsMenuOpen(false)}
@@ .. @@
               {/* Secondary Navigation */}
-              <div className="border-t border-gray-200/50 pt-4 mb-4">
+              <div className="border-t border-gray-200/50 dark:border-gray-700/50 pt-4 mb-4">
                 {secondaryNavItems.map((item) => (
                   <NavLink
                     key={item.name}
                     to={item.path}
                     className={({ isActive }) =>
-                      `block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
+                      `block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 relative ${
                         isActive
-                          ? 'text-sky-600 bg-sky-50 shadow-sm'
-                          : 'text-gray-600 hover:text-sky-600 hover:bg-sky-50/50'
+                          ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 shadow-sm'
+                          : 'text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50/50 dark:hover:bg-indigo-900/20'
                       }`
                     }
                     onClick={() => setIsMenuOpen(false)}
@@ .. @@
               </div>
 
+              {/* Mobile Theme Toggle */}
+              <div className="border-t border-gray-200/50 dark:border-gray-700/50 pt-4 mb-4">
+                <button
+                  onClick={() => {
+                    toggleTheme();
+                    setIsMenuOpen(false);
+                  }}
+                  className="flex items-center space-x-3 w-full px-4 py-3 text-base font-medium text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50/50 dark:hover:bg-indigo-900/20 rounded-lg transition-all duration-200"
+                >
+                  {theme === 'dark' ? (
+                    <Sun className="h-5 w-5" />
+                  ) : (
+                    <Moon className="h-5 w-5" />
+                  )}
+                  <span>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
+                </button>
+              </div>
+
               {/* Mobile Sign Out */}
-              <div className="border-t border-gray-200/50 pt-4">
+              <div className="border-t border-gray-200/50 dark:border-gray-700/50 pt-4">
                 <button
                   onClick={() => {
                     handleSignOut();
                     setIsMenuOpen(false);
                   }}
-                  className="flex items-center space-x-3 w-full px-4 py-3 text-base font-medium text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg transition-all duration-200"
+                  className="flex items-center space-x-3 w-full px-4 py-3 text-base font-medium text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-all duration-200"
                 >
                   <LogOut className="h-5 w-5" />
                   <span>Sign Out</span>