'use client'

import { ThemeProvider as MaterialTailwindProvider } from "@material-tailwind/react";
import { useTheme } from './theme-provider';

export function MaterialTheme({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();
  
  return (
    <MaterialTailwindProvider>
      {children}
    </MaterialTailwindProvider>
  );
} 