"use client";

import { useEffect, useState } from "react";

export function ThemeToggle() {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        // Check initial theme from localStorage or system preference
        const stored = localStorage.getItem("theme");
        const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        const shouldBeDark = stored === "dark" || (!stored && systemPrefersDark);

        setIsDark(shouldBeDark);
        if (shouldBeDark) {
            document.documentElement.classList.add("dark");
        }
    }, []);

    const toggleTheme = () => {
        const newIsDark = !isDark;
        setIsDark(newIsDark);

        if (newIsDark) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    };

    return (
        <button
            onClick={toggleTheme}
            className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            style={{
                backgroundColor: isDark ? "oklch(0.70 0.15 230)" : "oklch(0.92 0.004 286.32)",
            }}
            aria-label="Toggle theme"
        >
            <span
                className="inline-block h-4 w-4 transform rounded-full bg-background transition-transform shadow-sm"
                style={{
                    transform: isDark ? "translateX(1.5rem)" : "translateX(0.25rem)",
                }}
            />
        </button>
    );
}
