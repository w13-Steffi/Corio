import Image from "next/image";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { products } from "@/data/site";

// Referenz 08: Flaschen laufen bewusst über den rechten Rand.
export default function Products() {
  return (
    <section id="produkte" className="relative overflow-hidden bg-offwhite px-gutter py-16 md:aspect-[1960/932] md:min-h-[32rem] md:p-0">
      <div className="md:absolute md:left-[4.1%] md:top-[14%] md:w-[38%]">
        <Reveal as="h2" className="font-editorial text-[clamp(2rem,4.1vw,5rem)] font-light italic uppercase leading-[1.02]">
          {products.title.map((l) => <span key={l} className="block">{l}</span>)}
        </Reveal>
        <Reveal as="p" delay={150} className="mt-4 font-editorial text-[clamp(.9rem,1.25vw,1.5rem)] font-light italic uppercase leading-[1.05]">
          {products.sub.map((l) => <span key={l} className="block">{l}</span>)}
        </Reveal>
        <Reveal as="p" delay={300} className="mt-10 text-[clamp(.85rem,1.04vw,1.25rem)] leading-[1.55] md:mt-[9%]">{products.text}</Reveal>
        <Reveal delay={400} className="mt-10 md:mt-[7%]"><Button href="#">Mehr erfahren</Button></Reveal>
      </div>
      {/* TODO: hochauflösendes, freigestelltes Bild (≥1400 px) statt 358×225-Platzhalter */}
      <Reveal delay={300} y={0} className="mt-12 -mr-[var(--gutter)] translate-x-8 md:absolute md:left-[66%] md:top-[27%] md:mt-0 md:mr-0 md:w-[38%] md:translate-x-0">
        <Image src="/images/products-placeholder.png" alt="doTERRA Balance, Serenity, Citrus Bliss und Adaptiv ätherische Öle" width={358} height={225} sizes="40vw" className="h-auto w-full max-w-none" loading="lazy" />
      </Reveal>
    </section>
  );
}
