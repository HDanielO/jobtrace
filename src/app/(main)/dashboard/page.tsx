"use client";

import { dummyJobs } from "@/lib/dummy-data";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Clock, Plus, FileText, Flag, Filter } from "lucide-react";
import { StatCards, StatCardData } from "@/components/dashboard/StatCards";
import { DataToolbar, ToolbarButton } from "@/components/dashboard/DataToolbar";

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
          {dummyJobs.map((job) => (
            <Card key={job.id} className="hover:bg-muted/50 transition-colors">
              <CardContent className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="font-semibold text-lg">{job.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {job.company} • {job.location}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-primary/10 text-primary uppercase tracking-wider">
                    {job.status.replace("_", " ")}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
