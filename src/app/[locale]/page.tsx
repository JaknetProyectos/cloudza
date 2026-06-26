import CTASection from "@/components/site/cta";
import WhyChooseUsSection from "@/components/site/features";
import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import { Hero } from "@/components/site/hero";
import { Pricing } from "@/components/site/pricing";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background">
      <Header />
      <main className="lg:pl-20">
        <Hero />
        <Pricing />
        <WhyChooseUsSection />
        <CTASection />
        <Footer />
      </main>
      
    </div>
  );
}
