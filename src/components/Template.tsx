import NavigatorBottom from "./NavigatorBottom";

export default function Template({ children }: any): JSX.Element {
  return (
    <div className="flex flex-col pt-8 justify-between h-screen w-full bg-purple-light overflow-y-hidden">
      <div className="px-3 h-full overflow-y-auto">{children}</div>
      <NavigatorBottom />
    </div>
  );
}
