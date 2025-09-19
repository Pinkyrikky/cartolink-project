// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Dark Mode Example",
  description: "Next.js with persistent dark mode",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Prevent FOUC: set theme instantly before hydration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const stored = localStorage.getItem("theme");
                  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
                  if (stored === "dark" || (!stored && prefersDark)) {
                    document.documentElement.classList.add("dark");
                  } else {
                    document.documentElement.classList.remove("dark");
                  }
                } catch (_) {}
              })();
            `,
          }}
        />
      </head>
      <body className="transition-colors transition-t duration-900 bg-gray-50 dark:bg-gray-900 text-black dark:text-white">
        {children}
      </body>
    </html>
  );
}
