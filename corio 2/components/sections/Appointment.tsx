"use client";

import Image from "next/image";
import { useState, type FormEvent } from "react";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { appointment } from "@/data/site";

const field =
  "h-12 w-full rounded-full border border-black/70 bg-transparent px-6 text-base text-black placeholder:text-black/55 " +
  "transition-[border-color,box-shadow] duration-300 focus:border-black focus:outline-none focus-visible:ring-2 focus-visible:ring-black/80 focus-visible:ring-offset-0 aria-[invalid=true]:border-red-900";

export default function Appointment() {
  const [status, setStatus] = useState<"idle" | "invalid" | "ready">("idle");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) { setStatus("invalid"); form.reportValidity(); return; }
    const data = Object.fromEntries(new FormData(form));
    // TODO: hier Mail-Service/Backend anbinden (z. B. POST /api/appointment)
    console.info("Terminanfrage (nicht gesendet):", data);
    setStatus("ready");
  }

  return (
    <section id="termin" className="grid md:min-h-[56vw] md:grid-cols-2">
      <div className="flex flex-col bg-secondary px-gutter py-16 md:pt-[13%]">
        <Reveal as="h2" className="font-editorial text-[clamp(2.75rem,4.4vw,5.5rem)] font-light italic uppercase leading-[1.02]">
          {appointment.title.map((l) => <span key={l} className="block">{l}</span>)}
        </Reveal>
        <Reveal as="p" delay={200} className="mt-8 max-w-[30em] text-[clamp(.9rem,1.04vw,1.25rem)] leading-[1.5]">{appointment.text}</Reveal>
        <form onSubmit={onSubmit} noValidate className="mt-12 flex flex-1 flex-col md:mt-[6%]">
          <div className="grid gap-4 sm:grid-cols-2 md:gap-6">
            <input className={field} name="name" placeholder="Name" aria-label="Name" autoComplete="given-name" required />
            <input className={field} name="nachname" placeholder="Nachname" aria-label="Nachname" autoComplete="family-name" required />
            <input className={field} name="email" type="email" placeholder="Email" aria-label="E-Mail" autoComplete="email" required />
            <input className={field} name="datum" placeholder="Datum" aria-label="Wunschdatum" required
              onFocus={(e) => (e.currentTarget.type = "date")} onBlur={(e) => { if (!e.currentTarget.value) e.currentTarget.type = "text"; }} />
          </div>
          <p role="status" className="mt-4 min-h-6 text-sm">
            {status === "invalid" && "Bitte alle Felder ausfüllen."}
            {status === "ready" && "Formular ist vorbereitet – Versand wird noch angebunden."}
          </p>
          <div className="mt-10 md:mt-auto"><Button type="submit">Termin anfragen</Button></div>
        </form>
      </div>
      <div className="grid min-h-[60vh] grid-rows-2 md:min-h-0">
        {["termin-1", "termin-2"].map((s) => (
          <div key={s} className="relative min-h-[30vh]"><Image src={`/images/${s}.webp`} alt="" fill sizes="(min-width:768px) 50vw, 100vw" className="object-cover" loading="lazy" /></div>
        ))}
      </div>
    </section>
  );
}
