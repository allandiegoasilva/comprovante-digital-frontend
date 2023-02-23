import Button from "../Button";
import Input from "../Input";
import { GoSettings } from 'react-icons/go'
import { useState } from 'react'; 
import HorizontalLine from "../HorizontalLine";

export default function Filter() : JSX.Element {

 const [keyword, setKeyword] = useState<string>("");
 
 const [billets, setBillets] = useState<Array<Object>>([]);

 return (
  <div className="flex flex-col h-full  px-3 gap-3">
     {/* Filter */} 
     <div className="flex w-full bg-white p-2 rounded-lg">
       <div className="flex flex-1">
          <Input shadow={false} placeholder="Digite um título" />
       </div>
       <div className="flex">
          <Button size="md" icon={<GoSettings size={15}/>}/>
       </div>
     </div>

     {/* Listing */}
     <div className="flex h-full w-full  overflow-y-auto">
          <HorizontalLine text="Janeiro / 2023"/>
     </div>
  </div>
  );
} 