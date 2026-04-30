import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Stats from '@/components/sections/Stats';
import Cases from '@/components/sections/Cases';
import FAQ from '@/components/sections/FAQ';
import CTA from '@/components/sections/CTA';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Stats />
      <Cases />
      <FAQ />
      <CTA />
    </>
  );
}
