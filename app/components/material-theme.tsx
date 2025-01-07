'use client'

import { ThemeProvider as MaterialTailwindProvider } from "@material-tailwind/react";

export function MaterialTheme({ children }: { children: React.ReactNode }) {
  return (
    <MaterialTailwindProvider>
      {children}
    </MaterialTailwindProvider>
  );
} 