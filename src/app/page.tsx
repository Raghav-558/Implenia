import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Kickbox from "@/components/Kickbox";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <Kickbox />
      <HowItWorks />
    </>
  );
}
