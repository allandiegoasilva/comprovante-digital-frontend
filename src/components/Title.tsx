interface TitleProps {
  text: string;
  size?: "h1" | "h3" | "h6";
}

export default function Title({ text, size = "h3" }: TitleProps) {
  return (
    <span
      className={`
      font-medium 
      ${size == "h1" && "text-3xl"}
      ${size == "h3" && "text-xl"}
      ${size == "h6" && "text-lg"}
  `}
    >
      {text}
    </span>
  );
}
