"use client";

import { useEffect, useState } from "react";

type Theme = "warm" | "mono" | "earth" | "noir";

const themes: { id: Theme; label: string }[] = [
  { id: "warm", label: "Tono cálido" },
  { id: "mono", label: "Monocromático" },
  { id: "earth", label: "Tierra" },
  { id: "noir", label: "Noir" },
];

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState<Theme>("warm");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("portfolio-theme") as Theme | null;
    if (saved && themes.some((t) => t.id === saved)) {
      setTheme(saved);
      document.documentElement.setAttribute("data-theme", saved);
    }
  }, []);

  const handleThemeChange = (t: Theme) => {
    setTheme(t);
    document.documentElement.setAttribute("data-theme", t);
    localStorage.setItem("portfolio-theme", t);
  };

  if (!mounted) return null;

  return (
    <div
      className="fixed right-4 top-4 z-50 flex flex-wrap gap-1 rounded-full border p-1.5 opacity-80 transition-opacity hover:opacity-100 sm:right-6 sm:top-6"
      style={{ borderColor: "var(--border)", backgroundColor: "var(--card-bg)" }}
    >
      {themes.map((t) => (
        <button
          key={t.id}
          onClick={() => handleThemeChange(t.id)}
          title={t.label}
          className={`rounded-full px-2.5 py-1 text-[11px] font-medium transition-all sm:px-3 sm:py-1.5 sm:text-xs ${
            theme === t.id ? "font-semibold" : ""
          }`}
          style={{
            backgroundColor: theme === t.id ? "var(--accent)" : "transparent",
            color: theme === t.id ? "var(--bg-primary)" : "var(--text-secondary)",
          }}
        >
          {t.label}
        </button>
      ))}
    </div>
  );
}
