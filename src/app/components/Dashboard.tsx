// components/Dashboard.tsx

import Card from "./Card";

export default function Dashboard() {
  return (
    <section className="p-6 grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
      <Card title="Total Users" value="12,450" />
      <Card title="Revenue" value="$23,400" />
      <Card title="Active Sessions" value="320" />
      {/* Replace these with chart/table components */}
      <div className="col-span-1 md:col-span-2 bg-white dark:bg-gray-800 rounded-xl shadow p-6">
        <h2 className="text-lg font-semibold mb-4">Performance</h2>
        <div className="h-48 flex items-center justify-center text-gray-400 dark:text-gray-500">
          📊 Chart placeholder
        </div>
      </div>
    </section>
  );
}
