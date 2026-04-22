export interface BadgeProps {
  valid: boolean;
}

export function Badge({ valid }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${
        valid
          ? 'bg-green-100 text-green-800'
          : 'bg-red-100 text-red-800'
      }`}
    >
      {valid ? 'OK' : 'NOK'}
    </span>
  );
}
