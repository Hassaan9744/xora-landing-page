import Download from "./sections/download";
import Faq from "./sections/faq";
import Feautres from "./sections/feautres";
import Footer from "./sections/footer";
import Header from "./sections/header";
import Hero from "./sections/hero";
import Pricing from "./sections/pricing";
import Testimonials from "./sections/testimonials";

export default function App() {

  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <Feautres />
      <Pricing />
      <Faq />
      <Testimonials />
      <Download />
      <Footer />
    </main>
  );
}
