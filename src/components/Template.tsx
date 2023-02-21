import NavigatorBottom from "./NavigatorBottom";

export default function Template({ children }: any): JSX.Element {
  return (
    <div className="flex flex-col pt-8 justify-between h-screen w-full bg-purple-light overflow-y-hidden">
      {children}
      <NavigatorBottom />
    </div>
  );
}
