
interface IHorizontalLines  {
  text?: string; 
}

export default function HorizontalLine({ text = "" } : IHorizontalLines) : JSX.Element {
 return (
  <div className="flex w-full relative  justify-center max-h-5">
    <div className="h-[0.5px] absolute top-3   bg-gray-light-1 w-full rounded-full"></div>
    <small className="z-10 font-semibold bg-purple-light px-2 rounded-full border text-center justify-center border-gray-light-1 text-gray-light">
       { text } 
    </small>
  </div>
 );
}