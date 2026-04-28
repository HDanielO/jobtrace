import { Job, UserProfile } from "@/types";

export const dummyUser: UserProfile = {
  id: "user-123",
  email: "daniel@example.com",
  full_name: "Daniel Olanrewaju",
  avatar_url: "avatar-3", // Example of a predefined avatar ID
  created_at: new Date().toISOString(),
  updated_at: new Date().toISOString(),
};

export const dummyJobs: Job[] = [
  {
    id: "job-1",
    user_id: "user-123",
    title: "UI/UX Developer",
    company: "Moniepoint",
    location: "Lagos, Nigeria",
    job_type: "onsite",
    status: "not_applied",
    url: "https://moniepoint.com/careers",
    todos: [
      {
        id: "t1",
        text: "Update portfolio with recent Next.js project",
        is_completed: false,
      },
      { id: "t2", text: "Tailor resume for Fintech", is_completed: false },
    ],
    created_at: "2026-04-25T11:00:00Z",
    updated_at: "2026-04-25T11:00:00Z",
  },
  {
    id: "job-2",
    user_id: "user-123",
    title: "Frontend Developer",
    company: "Paystack",
    location: "Lagos, Nigeria (Hybrid)",
    job_type: "hybrid",
    status: "in_progress",
    url: "https://paystack.com/careers",
    todos: [
      {
        id: "t3",
        text: "Send cold email to the engineering manager",
        is_completed: true,
      },
      { id: "t4", text: "Follow up next week", is_completed: false },
    ],
    created_at: "2026-04-20T10:00:00Z",
    updated_at: "2026-04-22T14:30:00Z",
  },
  {
    id: "job-3",
    user_id: "user-123",
    title: "React Engineer",
    company: "Andela",
    location: "Remote",
    job_type: "remote",
    status: "progressed",
    url: "https://andela.com/roles",
    todos: [
      { id: "t5", text: "Complete HackerRank assessment", is_completed: true },
      {
        id: "t6",
        text: "Prepare for technical interview on Friday",
        is_completed: false,
      },
    ],
    created_at: "2026-04-15T09:15:00Z",
    updated_at: "2026-04-24T09:15:00Z",
  },
  {
    id: "job-4",
    user_id: "user-123",
    title: "Senior Frontend Engineer",
    company: "Flutterwave",
    location: "Remote",
    job_type: "remote",
    status: "rejected",
    url: "https://flutterwave.com",
    todos: [
      {
        id: "t7",
        text: "Ask for feedback on why I was rejected",
        is_completed: false,
      },
    ],
    created_at: "2026-03-15T08:00:00Z",
    updated_at: "2026-04-05T16:20:00Z",
  },
  {
    id: "job-5",
    user_id: "user-123",
    title: "Software Engineer II",
    company: "Kuda Bank",
    location: "Lagos, Nigeria",
    job_type: "hybrid",
    status: "accepted",
    url: "https://kuda.com/careers",
    todos: [
      { id: "t8", text: "Review employment contract", is_completed: true },
      { id: "t9", text: "Sign and return documents", is_completed: false },
    ],
    created_at: "2026-02-10T08:00:00Z",
    updated_at: "2026-04-25T16:20:00Z",
  },
  {
    id: "job-6",
    user_id: "user-123",
    title: "Fullstack Engineer",
    company: "Google",
    location: "London, UK",
    job_type: "unknown",
    status: "completed",
    url: "https://careers.google.com",
    todos: [
      {
        id: "t10",
        text: "Reflect on the interview process",
        is_completed: true,
      },
    ],
    created_at: "2026-01-05T08:00:00Z",
    updated_at: "2026-02-05T16:20:00Z",
  },
];

export const getDummyMetrics = () => {
  return {
    totalTracked: dummyJobs.length,
    inProgress: dummyJobs.filter((j) => j.status === "in_progress").length,
    progressed: dummyJobs.filter((j) => j.status === "progressed").length,
    accepted: dummyJobs.filter((j) => j.status === "accepted").length,
    rejected: dummyJobs.filter((j) => j.status === "rejected").length,
    notApplied: dummyJobs.filter((j) => j.status === "not_applied").length,
    completed: dummyJobs.filter((j) => j.status === "completed").length,
  };
};
