"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";

type Item = {
  title: string;
  bg: string;
};

const items: Item[] = [
  { title: "Motivação", bg: "/motivacao.png" },
  { title: "Produtividade", bg: "/produtividade.png" },
  { title: "Inteligência emocional", bg: "/inteligencia-emocional.png" },
  { title: "Auto conhecimento", bg: "/auto-conhecimento.png" },
  { title: "Relacionamento", bg: "/relacionamento.png" },
];

export default function Carousel() {
  const limit = 3;
  const delay = 5000;
  let start = new Date().getTime();

  const [first, setFirst] = useState(4);

  const next = () => {
    start = new Date().getTime();
    if (first === items.length - 1) setFirst(0);
    else setFirst(first + 1);
  };

  const prev = () => {
    start = new Date().getTime();
    if (first === 0) setFirst(items.length - 1);
    else setFirst(first - 1);
  };

  const filtered = useMemo(() => {
    const fillItems: Item[] = [];
    for (let i = 0; i < limit; i++) {
      if (items[first + i]) fillItems.push(items[first + i]);
      else fillItems.push(items[first + i - items.length]);
    }
    return fillItems;
  }, [first, items]);

  useEffect(() => {
    timer();
  },[first]);

  const timer = () => {
    const startOn = new Date().getTime();
    const interval = setInterval(() => {
      if (startOn < start) {
        clearInterval(interval);
        return;
      }
      const now = new Date().getTime();
      const diff = now - start;
      if (diff >= delay) {
        next();
        clearInterval(interval);
      }
    }, 50);
  }

  return (
    <div className="mx-auto container py-10">
      <div className="flex gap-10 items-center mb-10">
        <div className="flex-none">
          <a href="#prev" onClick={prev}>
            <Image
              src="/nav-blue.svg"
              width={24}
              height={42}
              alt="Anterior"
              className="max-w-auto"
            />
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 flex-1 overflow-hidden h-80">
          {filtered.map((e) => (
            <div
              className="w-auto h-80 bg-blue-700 bg-cover bg-no-repeat bg-center flex flex-col cursor-pointer"
              key={e.title}
              style={{ backgroundImage: `url(${e.bg})` }}
            >
              <div className="text-white text-xl font-bold p-6 bg-blue-700/60 flex-none">{e.title}</div>
              <div className="text-white p-6 bg-blue-700/60 flex-1 opacity-0 hover:opacity-100 transition-all duration-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum urna nulla, luctus eu massa sit amet, porta luctus enim. Fusce eget metus vel quam vehicula efficitur et a diam.</div>
            </div>
          ))}
        </div>
        <div className="flex-none">
          <a href="#next" onClick={next}>
            <Image
              src="/nav-blue.svg"
              width={24}
              height={42}
              alt="Próximo"
              className="max-w-auto"
              style={{ transform: "scaleX(-1)" }}
            />
          </a>
        </div>
      </div>
      <div className="text-center text-4xl font-light">Sempre teremos um horário para você.</div>
    </div>
  );
}
