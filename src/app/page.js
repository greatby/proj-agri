import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProductTabs from "../components/ProductTabs";
import FooterContact from "../components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <ProductTabs />
      <FooterContact />
    </>
  );
}
