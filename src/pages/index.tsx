import { Inter } from "@next/font/google";
import {motion, AnimatePresence } from "framer-motion";

import Template from "@/components/Template";
import HomePage from "@/components/pages/Home";
import CreatePage from "@/components/pages/Create";
import { useContext } from 'react'; 
import { INavigatorBottomContext, NavigatorBottomContext } from "@/hooks/NavigatorBottom.hook";
import Filter from "@/components/pages/Filter";
import { Tabs } from "@/enums/Tabs.enum";
const inter = Inter({ subsets: ["latin"] });

interface Page {
  id: string; 
  component: JSX.Element
}

export default function App() {

  const { selectedTab } = useContext<INavigatorBottomContext>(NavigatorBottomContext);
   
  const pages : Array<Page> = [
    {
      id: Tabs.Home,
      component: <HomePage/>
    },
    {
      id: Tabs.Create,
      component: <CreatePage/>
    },
    {
      id: Tabs.Filter,
      component: <Filter/>
    }
  ]

  return (
    <Template> 
      {pages.map((page : Page) => selectedTab == page.id && (
      <AnimatePresence key={page.id}>
       <motion.div
       className="h-full"
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ duration: 0.2 }}
       >
        { page.component } 
       </motion.div>
      </AnimatePresence>      
      ))}
    </Template>
  );
}
