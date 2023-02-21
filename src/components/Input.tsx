import { HtmlHTMLAttributes, HTMLInputTypeAttribute } from "react";

interface InputProps extends React.HtmlHTMLAttributes<HTMLInputElement> {
  type?: HTMLInputTypeAttribute;
  invalid?: boolean;
  bg?: "white" | "transparent";
  icon?: JSX.Element;
}

export default function Input(props: InputProps) {
  const {
    type = "text",
    icon = undefined,
    bg = "white",
    invalid = false,
    ...rest
  } = props;
  return (
    <div className="flex flex-col w-full">
      <div
        className={`flex items-center bg-white pr-3 rounded-lg w-full ${
          invalid ? "text-red" : "text-dark"
        }`}
      >
        <input
          type={type}
          className={`
       h-10  rounded-lg shadow-sm w-full font-normal px-3 py-6 outline-none
       ${bg == "white" ? "bg-white" : "bg-trasparent"}
      `}
          {...rest}
        />
        {icon}
      </div>
      {invalid && (
        <small className="text-red text-xs font-bold px-2">
          Campo inválido
        </small>
      )}
    </div>
  );
}
