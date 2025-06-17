interface WorkoutCardProps {
  workout: string;
}

export default function WorkoutCard({ workout }: WorkoutCardProps) {
  return (
    <div className="p-4 mb-3 bg-green-100 rounded shadow">
      <p className="text-green-900">{workout}</p>
    </div>
  );
}
