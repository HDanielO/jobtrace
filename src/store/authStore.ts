import { create } from "zustand";
import { UserProfile } from "@/types";

interface AuthState {
  user: UserProfile | null;
  isLoading: boolean;
  setUser: (user: UserProfile | null) => void; // A function we will call to save the user
  setLoading: (loading: boolean) => void; // A function we will call to stop the loading spinner
}

// 2. Create the actual store
// `useAuthStore` is a custom React Hook that we can use in any component
// `set` is a special Zustand function used to update the values inside the store
export const useAuthStore = create<AuthState>((set) => ({
  // --- Initial State (What happens the exact second the app opens) ---
  user: null,
  // We start as true because when the app first opens, we haven't checked with Supabase yet
  isLoading: true,

  // --- Actions (Functions that change the state) ---
  // If we call setUser(newUserData), it updates the 'user' variable above
  setUser: (user) => set({ user }),
  // If we call setLoading(false), it updates the 'isLoading' variable above
  setLoading: (isLoading) => set({ isLoading }),
}));
