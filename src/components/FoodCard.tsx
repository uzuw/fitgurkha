interface FoodCardProps {
  name: string;
  description: string;
}

export default function FoodCard({ name, description }: FoodCardProps) {
  return (
    <div className="p-4 mb-3 bg-yellow-100 rounded shadow">
      <h3 className="font-semibold text-yellow-900">{name}</h3>
      <p className="text-yellow-800">{description}</p>
    </div>
  );
}
