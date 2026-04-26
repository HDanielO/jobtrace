"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SearchX } from "lucide-react";
import { useAuthStore } from "@/store/authStore";

export default function NotFound() {
  // Check if a user is currently logged in using our global store
  const { user } = useAuthStore();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-muted/30 px-4 py-12 relative">
      {/* Background Texture (Net/Grid) */}
      <div className="fixed inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#8080801a_1px,transparent_1px),linear-gradient(to_bottom,#8080801a_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      {/* Logo */}
      <div className="mb-8 flex items-center space-x-2">
        <span className="text-3xl font-extrabold tracking-tight text-primary">
          JobTrace
        </span>
      </div>

      <div className="flex flex-col items-center text-center space-y-6 max-w-md w-full p-8 bg-card rounded-2xl border border-border/50 shadow-lg">
        <div className="h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center text-primary">
          <SearchX className="h-12 w-12" />
        </div>
        
        <div className="space-y-2">
          <h1 className="text-4xl font-extrabold tracking-tight">404</h1>
          <h2 className="text-xl font-semibold text-muted-foreground">
            Page not found
          </h2>
        </div>

        <p className="text-muted-foreground text-sm">
          Oops! The page you are looking for seems to have gone missing. 
          It might have been moved or deleted.
        </p>

        {/* Dynamically change the destination and text based on auth status */}
        <Link href={user ? "/dashboard" : "/"} className="w-full pt-4">
          <Button size="lg" className="w-full">
            {user ? "Back to Dashboard" : "Return Home"}
          </Button>
        </Link>
      </div>
    </div>
  );
}
