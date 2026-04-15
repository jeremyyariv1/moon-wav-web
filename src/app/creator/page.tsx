import CreatorHero from "@/components/creator/CreatorHero";
import TheState from "@/components/creator/TheState";
import TheReframe from "@/components/creator/TheReframe";
import HowItWorks from "@/components/creator/HowItWorks";
import Funnel from "@/components/creator/Funnel";
import WhatYouGet from "@/components/creator/WhatYouGet";
import CreatorQA from "@/components/creator/CreatorQA";
import CreatorCTA from "@/components/creator/CreatorCTA";
import CreatorFooter from "@/components/creator/CreatorFooter";
import NarrativeProgress from "@/components/shared/NarrativeProgress";

const SECTIONS = [
  { id: "state", label: "The state" },
  { id: "reframe", label: "The reframe" },
  { id: "how", label: "How it works" },
  { id: "funnel", label: "The funnel" },
  { id: "benefits", label: "What you get" },
  { id: "qa", label: "Q&A" },
  { id: "cta", label: "Apply" },
];

export default function CreatorPage() {
  return (
    <main className="bg-brand-bg">
      <NarrativeProgress sections={SECTIONS} />
      <CreatorHero />
      <TheState />
      <TheReframe />
      <HowItWorks />
      <Funnel />
      <WhatYouGet />
      <CreatorQA />
      <CreatorCTA />
      <CreatorFooter />
    </main>
  );
}
