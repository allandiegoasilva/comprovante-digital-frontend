import { IBillet } from "@/dtos/IBillet";
import { AiOutlineCloudDownload } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import Card from "./Card";
import Title from "./Title";

export default function Billet({ id, title, description = "" }: IBillet) {
  function download() {
    // download file
  }

  function remove() {
    // remove file
  }

  return (
    <Card>
      <Title text={title} size="h6" />
      <p className="font-normal text-gray-light">{description}</p>
      <div className="flex justify-end gap-2">
        <button
          onClick={download}
          className="flex gap-2 items-center text-sm px-2 rounded-full p-1 text-purple bg-purple-light"
        >
          <AiOutlineCloudDownload />
          Baixar
        </button>

        <button
          onClick={download}
          className="flex gap-2  items-center text-sm px-2 rounded-full p-1 text-red bg-red-light"
        >
          <BsTrash />
          Remover
        </button>
      </div>
    </Card>
  );
}
