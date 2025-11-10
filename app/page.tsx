import Navbar from "./_components/navbar";
import Hero from "./_components/hero";
import Services from "./_components/services";
import About from "./_components/about";
import Tokenomics from "./_components/tokenomics";
import FAQ from "./_components/faq";
import Footer from "./_components/footer";
import Roadmap from "./_components/roadmap";
import MarketOpportunity from "./_components/market-opportunity";
import Features from "./_components/features";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <Hero />
      <Services />
      <About />
      <MarketOpportunity />
      <Tokenomics />
      <Roadmap />
      <Features />
      <FAQ />
    </Fragment>
  );
}
