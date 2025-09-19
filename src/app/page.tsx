// app/page.tsx

import GenerateGrid from "./components/GenerateGrid";
import HeroCarousel from "./components/HeroCarousel";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="bg-white dark:bg-gray-900 transition-colors transition-t duration-900 min-h-screen text-gray-900 dark:text-white">
      <Navbar />
      <section className="max-w-7xl mx-auto px-4">
        <HeroCarousel />
        <GenerateGrid />
      </section>
    </main>
  );
}
