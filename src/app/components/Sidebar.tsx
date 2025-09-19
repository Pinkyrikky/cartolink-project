// components/Sidebar.tsx
"use client";
import { FiHome, FiBarChart2, FiSettings } from "react-icons/fi";

export default function Sidebar() {
  return (
    <aside className="hidden lg:flex flex-col w-64 h-screen bg-white dark:bg-gray-800 shadow-lg">
      <div className="p-6 text-2xl font-bold">🏆 Brand</div>
      <nav className="flex flex-col gap-3 px-6 mt-6 text-gray-700 dark:text-gray-300">
        <a className="flex items-center gap-3 py-2 hover:text-red-500">
          <FiHome /> Dashboard
        </a>
        <a className="flex items-center gap-3 py-2 hover:text-red-500">
          <FiBarChart2 /> Reports
        </a>
        <a className="flex items-center gap-3 py-2 hover:text-red-500">
          <FiSettings /> Settings
        </a>
      </nav>
    </aside>
  );
}
