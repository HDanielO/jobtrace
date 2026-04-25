// 1. Strict Enum-like types for status and work type
export type JobStatus =
  | "not_applied"
  | "in_progress"
  | "progressed"
  | "accepted"
  | "rejected"
  | "completed";

export type JobType = "remote" | "hybrid" | "onsite" | "unknown";

// 2. The Todo Interface for the Checklist
export interface Todo {
  id: string;
  text: string;
  is_completed: boolean;
}

// 3. The Job Interface
export interface Job {
  id: string;
  user_id: string;
  title: string;
  company: string;
  location: string | null;
  job_type: JobType;
  status: JobStatus;
  url: string;
  todos: Todo[];
  created_at: string;
  updated_at: string;
}

// 4. User Profile Interface
export interface UserProfile {
  id: string;
  email: string;
  full_name: string | null;
  avatar_url: string | null;
  created_at: string;
  updated_at: string;
}

// 5. Input types for Forms
export type CreateJobInput = Omit<
  Job,
  "id" | "user_id" | "created_at" | "updated_at"
>;
export type UpdateJobInput = Partial<CreateJobInput>;
