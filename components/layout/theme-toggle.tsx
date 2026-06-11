"use client";

import { Palette } from "lucide-react";
import { Button } from "../ui/button";
import { useTheme } from "@/providers/theme-provider";

export function ThemeToggle() {
  const { cycleTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      className="text-muted-foreground"
      aria-label="Switch theme"
      onClick={cycleTheme}
    >
      <Palette className="size-5" />
    </Button>
  );
}
