import About from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Faq } from "@/components/sections/Faq";
import { Hero } from "@/components/sections/Hero";
import { Intro } from "@/components/sections/Intro";
import { Pricing } from "@/components/sections/Pricing";
import { Process } from "@/components/sections/Process";
import Quote from "@/components/sections/Quote";
import { Services } from "@/components/sections/Services";
import Team from "@/components/sections/Team";
import { Testimonials } from "@/components/sections/Testimonials";
import WhyUs from "@/components/sections/WhyUs";
import { Work } from "@/components/sections/Work";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Intro />
      <Process />
      <About />
      <Quote />
      <Team />
      <WhyUs />
      {/* <Work />
      <Services /> */}
      <Pricing />
      <Testimonials />
      <Faq />
      <Contact />
    </>
  );
}
