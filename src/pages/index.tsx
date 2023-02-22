import { Inter } from "@next/font/google";
import Template from "@/components/Template";
import HomePage from "@/components/pages/Home";

const inter = Inter({ subsets: ["latin"] });

export default function App() {
  return (
    <Template>
      <HomePage />
    </Template>
  );
}
