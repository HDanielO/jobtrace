"use client";

import { dummyJobs } from "@/lib/dummy-data";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Clock, Plus, FileText, Flag, Filter } from "lucide-react";
import { StatCards, StatCardData } from "@/components/dashboard/StatCards";
import { DataToolbar, ToolbarButton } from "@/components/dashboard/DataToolbar";

// --- Helper Function for Status Badge Colors ---
const getStatusConfig = (status: string) => {
  switch (status) {
    case "not_applied": return { bg: "bg-slate-500/10", text: "text-slate-500", dot: "bg-slate-500" };
    case "in_progress": return { bg: "bg-amber-500/10", text: "text-amber-500", dot: "bg-amber-500" };
    case "progressed": return { bg: "bg-blue-500/10", text: "text-blue-500", dot: "bg-blue-500" };
    case "accepted": return { bg: "bg-emerald-500/10", text: "text-emerald-500", dot: "bg-emerald-500" };
    case "rejected": return { bg: "bg-red-500/10", text: "text-red-500", dot: "bg-red-500" };
    case "completed": return { bg: "bg-purple-500/10", text: "text-purple-500", dot: "bg-purple-500" };
    default: return { bg: "bg-primary/10", text: "text-primary", dot: "bg-primary" };
  }
};

export default function DashboardPage() {
  const totalJobs = dummyJobs.length;
  const notAppliedJobs = dummyJobs.filter(
    (job) => job.status === "not_applied",
  ).length;
  const inProgressJobs = dummyJobs.filter(
    (job) => job.status === "in_progress",
  ).length;
  const completedJobs = dummyJobs.filter(
    (job) => job.status === "completed",
  ).length;

  const statsData: StatCardData[] = [
    {
      title: "Total Jobs",
      value: totalJobs,
      icon: Briefcase,
      color: "black",
    },
    {
      title: "Not Applied",
      value: notAppliedJobs,
      icon: FileText,
      color: "#94a3b8",
    },
    {
      title: "In Progress",
      value: inProgressJobs,
      icon: Clock,
      color: "#f59e0b",
    },
    { title: "Completed", value: completedJobs, icon: Flag, color: "#10b981" },
  ];

  // Placeholder Functions for the Toolbar
  const handleSearch = (value: string) => {
    console.log("Searching for:", value);
  };

  const handleFilterClick = () => {
    console.log("Filter clicked!");
  };

  const handleAddClick = () => {
    console.log("Add clicked!");
  };

  // toolbar buttons
  const toolbarButtons: ToolbarButton[] = [
    {
      text: "Filter",
      icon: Filter,
      variant: "outline",
      onClick: handleFilterClick,
    },
    { text: "Add", icon: Plus, variant: "default", onClick: handleAddClick },
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl space-y-8">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome back! Here is an overview of your job hunt.
          </p>
        </div>
      </div>

      <StatCards data={statsData} totalJobs={totalJobs} />

      {/* Jobs Toolbar & List Section */}
      <div className="space-y-4">
        {/* Jobs Toolbar */}
        <DataToolbar
          title="Your Jobs"
          searchPlaceholder="Search by role or company..."
          onSearchChange={handleSearch}
          buttons={toolbarButtons}
        />

        {/* The List of Jobs */}
        <div className="grid gap-4">
          {dummyJobs.map((job) => {
            // 1. Get the colors for this specific status
            const statusConfig = getStatusConfig(job.status);
            
            // 2. Format the date nicely (e.g., "Apr 25, 2026")
            const formattedDate = new Intl.DateTimeFormat('en-US', { 
              month: 'short', day: 'numeric', year: 'numeric' 
            }).format(new Date(job.created_at));

            return (
              <Card key={job.id} className="hover:bg-muted/50 transition-colors">
                <CardContent className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  
                  {/* Left Side: Job Details */}
                  <div className="space-y-1">
                    <h3 className="font-semibold text-lg">{job.title}</h3>
                    <div className="flex flex-wrap items-center text-sm text-muted-foreground gap-2">
                      <span>{job.company}</span>
                      <span>•</span>
                      <span>{job.location}</span>
                      <span>•</span>
                      <span className="capitalize">{job.job_type}</span>
                      <span>•</span>
                      <span>{formattedDate}</span>
                    </div>
                  </div>

                  {/* Right Side: Status Badge */}
                  <div className="flex items-center gap-2 shrink-0">
                    <span 
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium uppercase tracking-wider ${statusConfig.bg} ${statusConfig.text}`}
                    >
                      {/* The colored dot */}
                      <span className={`h-1.5 w-1.5 rounded-full ${statusConfig.dot}`}></span>
                      {job.status.replace("_", " ")}
                    </span>
                  </div>

                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
