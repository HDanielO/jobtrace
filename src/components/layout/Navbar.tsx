"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { dummyUser } from "@/lib/dummy-data";

function getInitials(name: string | null) {
  if (!name) return "U";

  const names = name.split(" ");
  if (names.length >= 2) {
    return `${names[0][0]}${names[names.length - 1][0]}`.toUpperCase();
  }
  return name.substring(0, 2).toUpperCase();
}

export function Navbar() {
  const pathname = usePathname();

  const userInitials = getInitials(dummyUser.full_name);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-7xl mx-auto items-center justify-between px-4">
        <div className="flex items-center gap-6 md:gap-10">
          {/* 1. Logo */}
          <Link href="/dashboard" className="flex items-center space-x-2">
            <span className="font-bold text-primary sm:inline-block text-xl tracking-tight">
              JobTrace
            </span>
          </Link>

          {/* 2. Navigation Links */}
          <nav className="flex gap-6">
            <Link
              href="/dashboard"
              className={`text-sm font-medium transition-colors hover:text-foreground/80 ${
                pathname?.startsWith("/dashboard") ||
                pathname?.startsWith("/jobs")
                  ? "text-foreground"
                  : "text-foreground/60"
              }`}
            >
              Applications
            </Link>
          </nav>
        </div>

        {/* 3. User Settings / Avatar */}
        <div className="flex items-center gap-4">
          <Link href="/settings">
            <Avatar className="h-9 w-9 cursor-pointer transition-opacity hover:opacity-80">
              <AvatarImage src="" alt="User Avatar" />
              <AvatarFallback className="bg-primary/10 text-primary font-medium text-xs">
                {userInitials}
              </AvatarFallback>
            </Avatar>
          </Link>
        </div>
      </div>
    </header>
  );
}
