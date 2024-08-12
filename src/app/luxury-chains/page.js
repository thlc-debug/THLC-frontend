"use client";

import Hero from "@/components/luxury-chains/HeroSection";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Chains from "@/components/luxury-chains/Chains";
// import { fetchHotels } from "@/utils/actions";

export default async function LuxuryChainsPage() {
  // const hotels = await fetchHotels();

  return (
    <main className="font-f_3">
      <Header />
      <Hero />
      {/* <h1 className="sr-only">Luxury Chains</h1> */}
      {/* <h2 className="sr-only">Find hotels as per your convenience...</h2> */}
      {/* <Chains hotels={hotels} /> */}
      {/* <Footer /> */}
    </main>
  );
}
