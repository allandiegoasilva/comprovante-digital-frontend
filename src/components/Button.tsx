interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  icon?: JSX.Element;
  size: "sm" | "md" | "lg";
  btType?: "purple" | "white";
}

export default function Button(props: ButtonProps): JSX.Element {
  const { text, icon, size = "md", btType = "purple", ...rest } = props;

  if (btType == "white") return <button></button>;

  return (
    <button
      {...rest}
      className={`
       flex w-full 
       items-center 
     bg-purple focus:ring
     focus:ring-purple 
       flex-col 
       justify-center 
       rounded-2xl
       font-medium text-white
       ${size == "sm" && "p-2"}
       ${size == "md" && "p-4"}
       ${size == "lg" && "p-6"}
      `}
    >
      {icon}
      {text}
    </button>
  );
}
