import { AiOutlineHome } from "react-icons/ai";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { BsListNested } from "react-icons/bs";
export default function NavigatorBottom(): JSX.Element {
  return (
    <div className="w-full bottom-0 px-5 py-3 relative">
      <div className="flex bg-white gap-3 text-dark items-center justify-between px-5 w-full rounded-lg h-16 py-2    shadow-sm">
        <div className="flex px-5">
          <AiOutlineHome className="text-gray-light" size={35} />
        </div>
        <div className="flex justify-center">
          <div className="-top-6 absolute p-2 bg-purple-light rounded-full">
            <BsFillPlusCircleFill className="text-purple" size={60} />
          </div>
        </div>
        <div className="flex px-5">
          <BsListNested className="text-gray-light" size={35} />
        </div>
      </div>
    </div>
  );
}
