import Button from "@/components/Button";
import Image from "next/image";
import logo from "@/images/logo-text.svg";
import Input from "@/components/Input";

import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useState } from "react";

export default function LoginPage(): JSX.Element {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <div className="flex flex-col overflow-y-hidden w-full h-screen justify-center px-10 py-20 items-center bg-purple-light">
      <Image
        alt="Logo - Comprovante Digital"
        src={logo}
        width={360}
        height={350}
      />
      <div className="flex flex-col w-full h-full justify-center items-center gap-8">
        <Input type="email" placeholder="E-mail" />
        <div className="w-full flex items-center  pr-2 rounded-lg">
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="Senha: ********"
            icon={
              showPassword ? (
                <AiOutlineEye
                  className="text-dark"
                  onClick={() => setShowPassword(false)}
                  size={35}
                />
              ) : (
                <AiOutlineEyeInvisible
                  className="text-dark"
                  onClick={() => setShowPassword(true)}
                  size={35}
                />
              )
            }
          />
        </div>
        <Button size="md" text="Entrar" />
      </div>
    </div>
  );
}
