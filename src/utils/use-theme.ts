'use client';

import { useState, useEffect } from 'react';
import { useTheme as useNextTheme } from 'next-themes';

export type Theme = 'dark' | 'light' | 'system';

export function useTheme() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, systemTheme } = useNextTheme();

  // Only run this on the client side
  useEffect(() => {
    setMounted(true);
  }, []);

  // During SSR or before hydration, return default values
  if (!mounted) {
    return {
      theme: undefined,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      setTheme: (_: Theme) => {},
      systemTheme: undefined,
      isDark: false,
      isLight: false,
      currentTheme: undefined,
    };
  }

  const currentTheme = theme === 'system' ? systemTheme : theme;

  return {
    theme: theme as Theme | undefined,
    setTheme: setTheme as (theme: Theme) => void,
    systemTheme: systemTheme as 'dark' | 'light' | undefined,
    isDark: currentTheme === 'dark',
    isLight: currentTheme === 'light',
    currentTheme: currentTheme as 'dark' | 'light' | undefined,
  };
}
