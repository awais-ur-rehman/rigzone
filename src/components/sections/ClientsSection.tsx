"use client";

import { useEffect, useMemo, useState } from "react";
import clients from "@/data/clients.json";

interface ClientItem {
  id: string;
  name: string;
  logo: string; // path to svg the user will fill later
}

export function ClientsSection() {
  const allClients = (clients as ClientItem[]).filter(Boolean);

  // Split clients into three groups initially, keeping distribution balanced
  const initialGroups = useMemo(() => {
    const groups: ClientItem[][] = [[], [], []];
    allClients.forEach((c, i) => groups[i % 3].push(c));
    return groups;
  }, [allClients]);

  const [rowGroups, setRowGroups] = useState<ClientItem[][]>(initialGroups);

  // Every 30s rotate groups so a logo can later appear in a different row
  useEffect(() => {
    const id = setInterval(() => {
      setRowGroups((prev) => [prev[2], prev[0], prev[1]]);
    }, 30000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="clients" className="py-20 bg-white min-h-screen flex items-center justify-center">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-10">
          <div className="inline-block">
            <span className="bg-[#435057] text-[#F6F4EB] font-inter px-4 py-2 text-[18px] tracking-[1.2px]">
              Our Clients
            </span>
          </div>

          <h2 className="text-3xl lg:text-[44px] font-motor-oil font-normal text-[#3E4C52] leading-10 tracking-[1.2px]">
            Trusted by leading brands across the globe.
          </h2>

          <div className="space-y-8">
            <MarqueeRow items={rowGroups[0]} direction="right-to-left" />
            <MarqueeRow items={rowGroups[1]} direction="left-to-right" />
            <MarqueeRow items={rowGroups[2]} direction="right-to-left" />
          </div>
        </div>
      </div>
    </section>
  );
}

function MarqueeRow({ items, direction }: { items: ClientItem[]; direction: "left-to-right" | "right-to-left" }) {
  const animationClass = direction === "right-to-left" ? "marquee-animate-left" : "marquee-animate-right";

  // Duplicate the sequence to enable seamless looping
  const sequence = useMemo(() => [...items, ...items], [items]);

  return (
    <div className="relative overflow-hidden">
      <div
        className={`flex items-center gap-16 whitespace-nowrap ${animationClass}`}
        style={{ width: "200%" }}
      >
        {sequence.map((c, idx) => (
          <div key={`${c.id}-${idx}`} className="flex items-center justify-center h-fit py-10 space-x-10">
            <img
              src={c.logo || "/images/placeholder-logo.svg"}
              alt={c.name}
              className="h-fit w-auto object-cover opacity-80"
            />
          </div>
        ))}
      </div>

      {/* Edge fade overlays */}
      <div aria-hidden className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-32 bg-gradient-to-r from-white to-transparent" />
      <div aria-hidden className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-32 bg-gradient-to-l from-white to-transparent" />
    </div>
  );
}
