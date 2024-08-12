import Hero from "@/components/luxury-chains/HeroSection";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Chains from "@/components/luxury-chains/Chains";
import { fetchHotels } from "@/utils/actions";

export default async function LuxuryChainsPage() {
  const hotels = await fetchHotels();

  return (
    <main className="font-f_3">
      <Header />
      <Hero />
      <Chains hotels={hotels} />
      <Footer />
    </main>
  );
}
