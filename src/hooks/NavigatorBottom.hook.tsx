import { Tabs } from "@/enums/Tabs.enum";
import { createContext, useState } from "react";

export interface INavigatorBottomContext {
  selectedTab: string;
  changeTab: (tab: string) => void;
}

export const NavigatorBottomContext = createContext<INavigatorBottomContext>({
  selectedTab: Tabs.Home,
  changeTab: (tab: string) => {},
});   

export default function NavigatorBottomProvider({ children }: any) {
  const [selectedTab, setSelectedTab] = useState<string>(Tabs.Home);

  function changeTab(tab: string) {
    setSelectedTab(tab);
  }

  return (
    <NavigatorBottomContext.Provider
      value={{
        changeTab,
        selectedTab,
      }}
    >
      {children}
    </NavigatorBottomContext.Provider>
  );
}
