import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { elke } from "@/data/site";

// Referenz 05: bewusst asymmetrisch, Portrait unten angeschnitten.
export default function Elke() {
  return (
    <section id="elke" className="relative overflow-hidden bg-offwhite px-gutter pt-16 md:aspect-[1920/1100] md:min-h-[38rem] md:p-0">
      <Reveal as="h2" className="font-editorial text-[clamp(2.75rem,5.2vw,6.5rem)] font-light italic uppercase leading-[.98] md:absolute md:left-[4.3%] md:top-[14%]">
        {elke.title.map((l) => <span key={l} className="block">{l}</span>)}
      </Reveal>
      <Reveal delay={200} className="mx-auto mt-8 w-[80%] max-w-md md:absolute md:bottom-0 md:left-[9%] md:mt-0 md:w-[41%] md:max-w-none">
        <Image src="/images/elke.webp" alt="Elke Meran, Massagetherapeutin" width={788} height={948} sizes="(min-width:768px) 41vw, 80vw" className="h-auto w-full" loading="lazy" />
      </Reveal>
      <Reveal as="p" delay={400} className="mt-8 max-w-[34em] text-[clamp(.9rem,1.04vw,1.25rem)] leading-[1.5] md:absolute md:left-[50.6%] md:top-[44%] md:mt-0 md:w-[31%]">{elke.text}</Reveal>
      <Reveal as="p" delay={600} className="my-10 ml-auto w-fit text-right font-editorial text-[clamp(1.5rem,2.6vw,3.2rem)] font-light italic uppercase leading-[.98] md:absolute md:bottom-[5%] md:right-[2.5%] md:my-0 md:w-[20%]">{elke.statement}</Reveal>
    </section>
  );
}
