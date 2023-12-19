"use client";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";

export interface DarkModeToggleBtn {}

function DarkModeToggleBtn({}: DarkModeToggleBtn) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <MoonIcon className="w-6 h-6" />;

  return (
    <button
      onClick={() => {
        setTheme(theme === "light" ? "dark" : "light");
      }}
    >
      {theme === "light" && <MoonIcon className="w-6 h-6" />}
      {theme !== "light" && <SunIcon className="w-6 h-6" />}
    </button>
  );
}

export { DarkModeToggleBtn };
