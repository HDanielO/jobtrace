import { createClient } from '@supabase/supabase-js';

// Get our keys from the environment variables we just set up
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;


export const supabase = createClient(supabaseUrl, supabaseAnonKey);