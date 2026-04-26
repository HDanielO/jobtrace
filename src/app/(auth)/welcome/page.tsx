import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PartyPopper } from "lucide-react";

export default function WelcomePage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-muted/30 px-4 py-12 relative">
      {/* Background Texture (Net/Grid) */}
      <div className="fixed inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#8080801a_1px,transparent_1px),linear-gradient(to_bottom,#8080801a_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      {/* Logo (Not linked to home) */}
      <div className="mb-8 flex items-center space-x-2">
        <span className="text-3xl font-extrabold tracking-tight text-primary">
          JobTrace
        </span>
      </div>

      <Card className="w-full max-w-md shadow-lg border-border/50 text-center">
        <CardHeader className="space-y-4">
          {/* Celebratory Icon */}
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
            <PartyPopper className="h-10 w-10 text-primary" />
          </div>
          <CardTitle className="text-3xl font-bold tracking-tight text-primary">
            Welcome to JobTrace!
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 pt-2">
          <p className="text-base text-muted-foreground">
            Your professional job tracking workspace is ready. Let&apos;s get you closer to your next role.
          </p>
          <Link href="/dashboard" className="block w-full">
            <Button className="w-full" size="lg" type="button">
              Go to Dashboard
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
