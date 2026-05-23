import Header from "@/components/layout/Header";
import Hero from "@/sections/Hero";
import Tools from "@/sections/Tools";
import Experience from "@/sections/Experience";
import Projects from "@/sections/Projects";
import About from "@/sections/About";
import Faq from "@/sections/Faq";
import Cta from "@/sections/Cta";
import Footer from "@/sections/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <div id="ferramentas"><Tools /></div>
        <div id="experiencia"><Experience /></div>
        <div id="projetos"><Projects /></div>
        <div id="sobre"><About /></div>
        <div id="faq"><Faq /></div>
        <Cta />
      </main>
      <Footer />
    </>
  );
}
