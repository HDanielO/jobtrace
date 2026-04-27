import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

// 1. Add the color property to our data shape
export interface StatCardData {
  title: string;
  value: number;
  icon: LucideIcon;
  color: string; // We use a hex color here to safely style dynamic borders and bars
}

interface StatCardsProps {
  data: StatCardData[];
  totalJobs: number; // We need this to calculate the percentage!
}

// 2. Build the component
export function StatCards({ data, totalJobs }: StatCardsProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
      {data.map((stat) => {
        const Icon = stat.icon;

        // Calculate percentage. If totalJobs is 0, default to 0 to prevent dividing by zero.
        const percentage =
          totalJobs > 0 ? Math.round((stat.value / totalJobs) * 100) : 0;

        return (
          <Card
            key={stat.title}
            className="bg-card relative overflow-hidden shadow-none py-0 gap-1"
            // Here is the cool colored bottom border!
            style={{ border: `1px solid ${stat.color}` }}
          >
            <CardHeader className="flex flex-row items-center justify-between p-4 pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              {/* Color the icon to match */}
              <Icon className="h-4 w-4" style={{ color: stat.color }} />
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <div className="text-2xl font-bold">{stat.value}</div>

              {/* Progress Bar Container (The grey background track) */}
              <div className="w-full bg-muted rounded-full h-1.5 mt-3">
                {/* Actual Progress Fill */}
                <div
                  className="h-1.5 rounded-full transition-all duration-1000 ease-in-out"
                  style={{
                    width: `${percentage}%`,
                    backgroundColor: stat.color,
                  }}
                ></div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
