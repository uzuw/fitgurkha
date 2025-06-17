import React from "react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { UserDataProvider } from "@/context/UserDataContext";
import { AuthProvider } from "@/context/AuthContext";

export const metadata = {
  title: "Fitness Tracker",
  description: "Personalized fitness and nutrition app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <Sidebar />
        <div className="flex flex-col flex-1">
          <Navbar />
          <main className="p-6 flex-1 overflow-auto">
            <AuthProvider>
              <UserDataProvider>{children}</UserDataProvider>
            </AuthProvider>
          </main>
        </div>
      </body>
    </html>
  );
}
