import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Appointment from "@/components/sections/Appointment";
import Elke from "@/components/sections/Elke";
import Hero from "@/components/sections/Hero";
import Products from "@/components/sections/Products";
import Testimonials from "@/components/sections/Testimonials";
import Treatments from "@/components/sections/Treatments";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Treatments />
        <Elke />
        <Testimonials />
        <Appointment />
        <Products />
      </main>
      <Footer />
    </>
  );
}
