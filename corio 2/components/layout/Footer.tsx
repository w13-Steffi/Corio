import Logo from "@/components/ui/Logo";
import TextLink from "@/components/ui/TextLink";
import { footer } from "@/data/site";

export default function Footer() {
  return (
    <footer className="bg-black px-gutter pb-10 pt-[clamp(3rem,7.5vw,9rem)] text-white">
      <div className="mx-auto grid max-w-frame gap-12 md:grid-cols-[42.8%_15.5%_1fr]">
        <Logo className="h-auto w-[clamp(11rem,14.6vw,17.5rem)]" />
        <div className="text-[clamp(.85rem,.83vw,1rem)] leading-[1.5]">
          <h2 className="mb-3 font-editorial text-[clamp(.95rem,1vw,1.2rem)] font-light italic uppercase">{footer.city}</h2>
          <address className="not-italic">{footer.address.map((l) => <span key={l} className="block">{l}</span>)}</address>
          <p className="mt-5"><TextLink href={`tel:${footer.phone.replace(/\s/g, "")}`}>T: {footer.phone}</TextLink></p>
          <p className="mt-3"><TextLink href={`mailto:${footer.email}`}>{footer.email}</TextLink></p>
        </div>
        <div className="text-[clamp(.85rem,.83vw,1rem)] leading-[1.5]">
          <h2 className="mb-3 font-editorial text-[clamp(.95rem,1vw,1.2rem)] font-light italic uppercase">{footer.hoursTitle}</h2>
          {footer.hours.map(([d, h]) => <p key={d} className="mb-3"><span className="block">{d}</span><span className="block">{h}</span></p>)}
          <a href={footer.instagram} target="_blank" rel="noopener noreferrer" aria-label="CORIO auf Instagram" className="inline-block py-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/icons/instagram.svg" alt="" width={17} height={16} className="invert" />
          </a>
        </div>
      </div>
      <div className="mx-auto mt-14 flex max-w-frame flex-col gap-4 border-t border-white pt-3 md:flex-row md:justify-between">
        <p className="text-[clamp(.75rem,.83vw,1rem)] text-white/80">© Corio. 2026</p>
        <ul className="flex flex-wrap gap-x-4 font-editorial text-[clamp(.85rem,.95vw,1.15rem)] font-light italic uppercase">
          {footer.legal.map(([l, h]) => <li key={l}><TextLink href={h}>{l}</TextLink></li>)}
        </ul>
      </div>
    </footer>
  );
}
