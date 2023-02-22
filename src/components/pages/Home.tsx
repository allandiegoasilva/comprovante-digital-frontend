import Card from "../Card";
import Title from "../Title";
import Billet from "../Billet";
import { IBillet } from "../../dtos/IBillet";
import { useState } from "react";

export default function HomePage(): JSX.Element {
  const [billets, setBillets] = useState<Array<IBillet>>([
    {
      id: "123",
      title: "Comprovante da netflix",
      description: "Comprovante do mês 01/2023",
    },
    {
      id: "123",
      title: "Comprovante da netflix",
      description: "Comprovante do mês 01/2023",
    },
    {
      id: "123",
      title: "Comprovante da netflix",
      description: "Comprovante do mês 01/2023",
    },
    {
      id: "123",
      title: "Comprovante da netflix",
      description: "Comprovante do mês 01/2023",
    },
    {
      id: "123",
      title: "Comprovante da netflix",
      description: "Comprovante do mês 01/2023",
    },
    {
      id: "123",
      title: "Comprovante da netflix",
      description: "Comprovante do mês 01/2023",
    },
    {
      id: "123",
      title: "Comprovante da netflix",
      description: "Comprovante do mês 01/2023",
    },
    {
      id: "123",
      title: "Comprovante da netflix",
      description: "Comprovante do mês 01/2023",
    },
    {
      id: "123",
      title: "Comprovante da netflix",
      description: "Comprovante do mês 01/2023",
    },
    {
      id: "123",
      title: "Comprovante da netflix",
      description: "Comprovante do mês 01/2023",
    },
    {
      id: "123",
      title: "Comprovante da netflix",
      description: "Comprovante do mês 01/2023",
    },
    {
      id: "123",
      title: "Comprovante da netflix",
      description: "Comprovante do mês 01/2023",
    },
  ]);

  return (
    <div className="flex flex-col h-full w-full gap-4">
      <Card title="Qtd. Comprovantes salvos">
        <div className="flex w-full justify-center">
          <span className="text-7xl font-bold text-gray-light">89</span>
        </div>
      </Card>
      <Title text="Últimos arquivos salvos" />
      <div className="flex w-full flex-col overflow-y-auto gap-3 pb-8">
        {billets.map((billet: IBillet) => (
          <Billet
            key={billet.id}
            id={billet.id}
            title={billet.title}
            description={billet.description}
          />
        ))}
      </div>
    </div>
  );
}
