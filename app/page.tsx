import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import Benefits from "@/components/sections/benefits";
import Collaboration from "@/components/sections/collaboration";
import Hero from "@/components/sections/hero";
import FAQ from "@/components/sections/faq";

import Services from "@/components/sections/services";
import ButtonGradient from "@/components/svg/button-gradient";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <main>
      <div className={cn("overflow-hidden pt-[4.75rem] lg:pt-[5.25rem]")}>
        <Navbar />
        <Hero />
        <Benefits />
        <Collaboration />
        <Services />
        
        <FAQ />
        <Footer />
      </div>
      <ButtonGradient />
    </main>
  );
}
