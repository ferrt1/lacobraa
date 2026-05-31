import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import StatsStrip from "@/components/StatsStrip";
import FeatureCards from "@/components/FeatureCards";
import UpcomingMatches from "@/components/UpcomingMatches";
import SorteoBand from "@/components/SorteoBand";
import SponsorsMarquee from "@/components/SponsorsMarquee";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <StatsStrip />
        <FeatureCards />
        <UpcomingMatches />
        <SorteoBand />
        <SponsorsMarquee />
      </main>
      <Footer />
    </>
  );
}
