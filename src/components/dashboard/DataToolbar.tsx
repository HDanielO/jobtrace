import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, LucideIcon } from "lucide-react";

export interface ToolbarButton {
  text: string;
  icon: LucideIcon;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  colorClass?: string;
  onClick: () => void; // Required now, since we only use functions!
}

interface DataToolbarProps {
  title: string;
  searchPlaceholder: string;
  onSearchChange: (value: string) => void; // Function to handle search typing
  buttons: ToolbarButton[];
}

export function DataToolbar({
  title,
  searchPlaceholder,
  onSearchChange,
  buttons,
}: DataToolbarProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <h2 className="text-xl font-semibold tracking-tight">{title}</h2>

      <div className="flex items-center gap-2">
        {/* Search Bar */}
        <div className="relative flex-1 sm:w-[300px]">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder={searchPlaceholder}
            className="w-full pl-8"
            // Pass the typed value up to the parent component
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>

        {/* Dynamically Generate Buttons */}
        {buttons.map((btn, index) => {
          const Icon = btn.icon;
          return (
            <Button
              key={index}
              variant={btn.variant || "default"}
              className={`px-3 shrink-0 ${btn.colorClass || ""}`}
              onClick={btn.onClick}
            >
              <Icon className="h-4 w-4 sm:mr-2" />
              <span className="hidden sm:inline">{btn.text}</span>
            </Button>
          );
        })}
      </div>
    </div>
  );
}
