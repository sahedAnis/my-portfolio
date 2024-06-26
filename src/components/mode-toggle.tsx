"use client"

import * as React from "react"
import { MoonIcon, SunIcon } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  function setLayoutTheme() {
    switch (theme) {
        case "light": {
            setTheme("dark");
            break;
        }
        case "dark": {
            setTheme("light");
            break;
        }   
    }
  }

  return (
    <Button className="bg-transparent border-0" variant="outline" size="icon" onClick={setLayoutTheme}>
          <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
