"use client";

import { useEffect } from "react";
import { useTheme } from "next-themes";

export function FaviconUpdater() {
  const { theme, systemTheme } = useTheme();

  useEffect(() => {
    const updateFavicon = () => {
      const favicon = document.querySelector('link[rel="icon"]');
      if (!favicon) return;

      const isDark =
        theme === "dark" || (theme === "system" && systemTheme === "dark");

      favicon.href = isDark ? "/favicondark.ico" : "/faviconlight.ico";
    };

    updateFavicon();
  }, [theme, systemTheme]);

  return null;
}
