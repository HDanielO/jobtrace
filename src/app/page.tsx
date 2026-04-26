import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FileChartColumn, ListTodo, ShelvingUnit } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col relative">
      {/* Background Texture (Net/Grid) */}
      <div className="fixed inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#8080801a_1px,transparent_1px),linear-gradient(to_bottom,#8080801a_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      {/* 1. Simple Public Navbar (Only visible when logged out) */}
      <header className="container mx-auto flex h-16 items-center justify-between px-4 max-w-7xl">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-tight text-primary">
            JobTrace
          </span>
        </div>
        <nav className="flex items-center gap-4">
          <Link
            href="/login"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Log In
          </Link>
          <Link href="/signup">
            <Button size="sm">Sign Up</Button>
          </Link>
        </nav>
      </header>

      {/* 2. Hero Section */}
      <main className="flex-1">
        <section className="container mx-auto px-4 py-24 md:py-32 max-w-7xl">
          <div className="flex flex-col items-center text-center space-y-8">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Track every job.
              <br className="hidden sm:block" />
              <span className="text-primary">Never lose an opportunity.</span>
            </h1>
            <p className="max-w-[700px] text-lg text-muted-foreground md:text-xl">
              Built by a job seeker, for job seekers. Centralize your
              applications, track statuses, and keep a dedicated to-do list for
              every role.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link href="/signup" className="w-full sm:w-7/10">
                <Button size="lg" className="w-full">
                  Get Started for Free
                </Button>
              </Link>
              <Link href="/login" className="w-full sm:w-7/10">
                <Button variant="outline" size="lg" className="w-full">
                  Log In
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* 3. Feature Cards Section */}
        <section className="container mx-auto px-4 py-16 max-w-7xl">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center text-center space-y-4 p-8 bg-black text-white rounded-2xl border border-border/50 ">
              <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center text-white font-bold text-xl">
                <FileChartColumn />
              </div>
              <h3 className="text-xl font-bold">Smart Status Tracking</h3>
              <p className="text-white/70">
                Keep an eye on exactly where you stand. From &quot;Applied&quot;
                to &quot;Accepted&quot;, never wonder about a role again.
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4 p-8 bg-black text-white rounded-2xl border border-border/50 ">
              <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center text-white font-bold text-xl">
                <ListTodo />
              </div>
              <h3 className="text-xl font-bold">Targeted To-Do Lists</h3>
              <p className="text-white/70">
                Add specific tasks to each application. Need to tailor your
                resume or prepare for a technical interview? Track it here.
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4 p-8 bg-black text-white rounded-2xl border border-border/50 ">
              <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center text-white font-bold text-xl">
                <ShelvingUnit />
              </div>
              <h3 className="text-xl font-bold">Organized Workflow</h3>
              <p className="text-white/70">
                Ditch the messy spreadsheets. Get a beautiful, centralized
                dashboard for your entire job hunting journey.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* 4. Footer */}
      <footer className="border-t py-6 md:py-8 mt-12">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 md:flex-row px-4 max-w-7xl text-center md:text-left">
          <p className="text-sm font-medium text-muted-foreground">
            Built by a job seeker, for job seekers.
          </p>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} JobTrace. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
