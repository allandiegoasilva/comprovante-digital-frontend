interface CardProps {
  children: JSX.Element | JSX.Element[];
  title?: string;
}

export default function Card({ title = "", children }: CardProps) {
  return (
    <div className="flex flex-col w-full shadow-sm bg-white rounded-lg p-4 gap-2">
      <span className="font-medium text-xl">{title}</span>
      {children}
    </div>
  );
}
