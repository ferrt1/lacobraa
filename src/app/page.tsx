import Bunting from "@/components/Bunting";
import Hero from "@/components/Hero";
import Countdown from "@/components/Countdown";
import ActionCards from "@/components/ActionCards";
import Stats from "@/components/Stats";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* zona "campo": un solo fondo (anillos arriba + pasto abajo) detrás de
          banderines, arco y countdown — sin franjas azules entremedio */}
      <div className="fieldzone">
        <Bunting intensity={1} />
        <Hero />
        <Countdown />
      </div>
      <ActionCards />
      <Stats />
      <Footer />
    </>
  );
}
