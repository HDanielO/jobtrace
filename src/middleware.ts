import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  // ADD THIS LINE: Temp bypass for UI development to let everyone in!
  return NextResponse.next();

  // 1. Create a response object that we can modify
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });

  // 2. Create the Supabase client specifically for the server
  // This chunk looks complex, but it's just telling Supabase how to read/write cookies
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          // Update request cookies
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value),
          );
          // Update response cookies
          response = NextResponse.next({
            request,
          });
          cookiesToSet.forEach(({ name, value, options }) =>
            response.cookies.set(name, value, options),
          );
        },
      },
    },
  );

  // 3. Fetch the current user session securely from the database
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // 4. Define our protected routes (pages that require you to be logged in)
  const isProtectedRoute =
    request.nextUrl.pathname.startsWith("/dashboard") ||
    request.nextUrl.pathname.startsWith("/jobs");

  // 5. THE BOUNCER: If trying to access a protected route but NOT logged in -> Send to /login
  if (isProtectedRoute && !user) {
    const url = request.nextUrl.clone();
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  // 6. THE USHER: If already logged in and trying to go to /login or /signup -> Send to /dashboard
  const isAuthRoute =
    request.nextUrl.pathname === "/login" ||
    request.nextUrl.pathname === "/signup";
  if (isAuthRoute && user) {
    const url = request.nextUrl.clone();
    url.pathname = "/dashboard";
    return NextResponse.redirect(url);
  }

  // Return the response (with any refreshed Supabase cookies attached)
  return response;
}

// 7. Config tells Next.js exactly which routes the middleware should run on.
// We tell it to run on EVERYTHING except static files (like images, CSS, fonts) to save performance.
export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
