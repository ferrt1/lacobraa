import Bunting from "@/components/Bunting";
import Hero from "@/components/Hero";
import Countdown from "@/components/Countdown";
import ActionCards from "@/components/ActionCards";
import Stats from "@/components/Stats";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Bunting intensity={1} />
      <Hero />
      <Countdown />
      <ActionCards />
      <Stats />
      <Footer />
    </>
  );
}
