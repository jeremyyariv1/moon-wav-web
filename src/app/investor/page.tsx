import InvestorHero from "@/components/investor/InvestorHero";
import Destination from "@/components/investor/Destination";
import Worldview from "@/components/investor/Worldview";
import Pattern from "@/components/investor/Pattern";
import OneLayerUp from "@/components/investor/OneLayerUp";
import Product from "@/components/investor/Product";
import Plan from "@/components/investor/Plan";
import Incumbents from "@/components/investor/Incumbents";
import Hardware from "@/components/investor/Hardware";
import HardQuestions from "@/components/investor/HardQuestions";
import Window from "@/components/investor/Window";
import InvestorFooter from "@/components/investor/InvestorFooter";
import NarrativeProgress from "@/components/shared/NarrativeProgress";

const SECTIONS = [
  { id: "destination", label: "Destination" },
  { id: "worldview", label: "Worldview" },
  { id: "pattern", label: "Pattern" },
  { id: "strategy", label: "Strategy" },
  { id: "product", label: "Product" },
  { id: "plan", label: "Plan" },
  { id: "incumbents", label: "Competition" },
  { id: "hardware", label: "Tailwind" },
  { id: "qa", label: "Q&A" },
  { id: "window", label: "Window" },
];

export default function InvestorPage() {
  return (
    <main className="bg-brand-bg">
      <NarrativeProgress sections={SECTIONS} />
      <InvestorHero />
      <Destination />
      <Worldview />
      <Pattern />
      <OneLayerUp />
      <Product />
      <Plan />
      <Incumbents />
      <Hardware />
      <HardQuestions />
      <Window />
      <InvestorFooter />
    </main>
  );
}
