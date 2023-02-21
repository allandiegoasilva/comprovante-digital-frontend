import { createContext, useState } from "react";

interface Tabs {
  selectedTab: string;
  changeTab: (tab: string) => void;
}

export const NavigatorBottomContext = createContext<Tabs>({
  selectedTab: "home",
  changeTab: (tab: string) => {},
});

export default function NavigatorBottomProvider({ children }: any) {
  const [selectedTab, setSelectedTab] = useState<string>("home");

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
