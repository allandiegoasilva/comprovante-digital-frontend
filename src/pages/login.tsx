import Button from "@/components/Button";
import Image from "next/image";

import logo from "@/images/logo-text.svg";

export default function LoginPage(): JSX.Element {
  return (
    <div className="flex flex-col overflow-y-hidden w-full h-screen justify-center px-10 py-20 items-center bg-purple-light">
      <Image
        alt="Logo - Comprovante Digital"
        src={logo}
        width={360}
        height={350}
      />
      <div className="flex flex-col w-full h-full justify-center items-center gap-8">
        <input type="text" />
        <input type="text" />
        <Button text="Entrar" />
      </div>
    </div>
  );
}
