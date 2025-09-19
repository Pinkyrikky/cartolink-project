// components/Card.tsx
interface CardProps {
  title: string;
  value: string;
}

export default function Card({ title, value }: CardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 hover:shadow-lg transition">
      <h2 className="text-sm font-medium text-gray-500 dark:text-gray-400">
        {title}
      </h2>
      <p className="text-2xl font-bold mt-2">{value}</p>
    </div>
  );
}
