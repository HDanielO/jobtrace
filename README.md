# JobTrace

## Description
JobTrace is a modern, secure, and intuitive web application designed to help job seekers track their applications. Users can save job postings, track their current application status (Not Applied, In Progress, Progressed, Accepted, Rejected), store the original job URLs, and maintain a personalized to-do list for every role they apply to.

## Why it was created
I created JobTrace because I was always losing track of jobs that I had applied to or gotten feedback on. As a job seeker myself, I needed a tool that was built specifically for the chaos of the job hunt—so I built it. It was made for job seekers, by a job seeker.

## What it aims to solve
Keeping track of job applications across multiple platforms (LinkedIn, Indeed, company websites) can quickly become chaotic. JobTrace solves this by providing a single, centralized dashboard where job seekers can:
- Track the exact status of every application.
- Keep a detailed checklist (To-Do list) of next steps (e.g., "Tailor resume", "Follow up via email", "Prep for HackerRank").
- Quickly access original job posting links.
- View high-level metrics of their job hunt progress.

## Technologies Used
This project is built with a modern, industry-standard tech stack:

- **Next.js (App Router)**: The core React framework used for routing, server-side rendering, and API structure.
- **TypeScript**: Provides strict type-checking to ensure data integrity and catch errors before runtime.
- **Tailwind CSS & shadcn/ui**: Used to build a clean, responsive, and accessible user interface without writing massive amounts of custom CSS.
- **Supabase**: Serves as the complete backend, providing a PostgreSQL database, Row Level Security (RLS) for data protection, and user Authentication.
- **TanStack Query (React Query)**: Handles fetching, caching, and updating asynchronous data from the database.
- **Zustand**: A lightweight global state manager used to keep track of the currently logged-in user across the entire application.
- **React Hook Form & Zod**: Used together to manage complex form states (like adding/editing jobs) and strictly validate user inputs before they reach the database.
- **Sonner**: Provides elegant toast notifications to alert the user of successes or errors.

## Contact
**Developer**: Hameed Daniel
**Email**: [hameeddnl@gmail.com]
**GitHub**: [https://github.com/HDanielO]
**Twitter / X**: [https://x.com/HameedDaniel_]

