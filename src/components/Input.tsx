import { HtmlHTMLAttributes } from "react";

interface InputProps extends React.HtmlHTMLAttributes<HTMLInputElement> {}

export default function Input(props: InputProps) {
  return (
    <input
      className="h-10 rounded-lg shadow-sm w-full font-normal px-3 py-6 outline-none "
      {...props}
    />
  );
}
