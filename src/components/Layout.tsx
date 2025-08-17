@@ .. @@
 const Layout = ({ children }: LayoutProps) => {
   return (
-    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900 transition-colors duration-300">
+    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50 dark:from-gray-900 dark:via-slate-900 dark:to-indigo-950 transition-colors duration-300">
       <Navbar />
       <main className="pt-16">
         {children}