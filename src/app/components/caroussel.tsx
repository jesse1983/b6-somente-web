"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";

type Item = {
  title: string;
  bg: string;
  text: string;
};

const items: Item[] = [
  { title: "Motivação", bg: "./motivacao.png", text: 'A maioria das vezes a falta de motivação afeta um bom convívio profissional e pessoal. A ajuda de um psicólogo mostrará o caminho certo a seguir!' },
  { title: "Produtividade", bg: "./produtividade.png", text: 'A falta de produtividade na maioria das vezes é relacionada com a parte emocional. Ter um bom equilíbrio emocional garante uma maior eficiência na realização das tarefas do nosso dia a dia.' },
  { title: "Inteligência emocional", bg: "./inteligencia-emocional.png", text: 'É relacionado ao controle consciente das emoções. Tanto profissionalmente ou pessoalmente, ter uma boa inteligência emocional evita graves problemas mentais.' },
  { title: "Autoconhecimento", bg: "./auto-conhecimento.png", text: 'Conhecimento de si próprio é fundamental para uma vida mais produtiva e feliz. Ter o domínio desse conhecimento pode evitar problemas de autoestima, ansiedade e instabilidade emocional.' },
  { title: "Relacionamento", bg: "./relacionamento.png", text: 'Uma boa ligação afetiva com pessoas, profissionalmente e na nossa vida pessoal é essencial para nossa vida. Afinal não é possível viver completamente sozinho.' },
];

export default function Carousel() {
  const limit = 3;
  const delay = 5000;
  let start = new Date().getTime();

  const [first, setFirst] = useState(4);

  const next = (ev?: React.MouseEvent<HTMLAnchorElement>) => {
    ev?.preventDefault();
    start = new Date().getTime();
    if (first === items.length - 1) setFirst(0);
    else setFirst(first + 1);
  };

  const prev = (ev?: React.MouseEvent<HTMLAnchorElement>) => {
    ev?.preventDefault();
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
      <div className="text-center text-4xl font-light mb-10">Com o que podemos te ajudar?</div>

      <div className="flex gap-10 items-center mb-10">
        <div className="flex-none">
          <a href="#prev" onClick={prev}>
            <Image
              src={"./nav-blue.svg"}
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
              <div className="text-white text-xl font-bold p-6 bg-blue-700/70 flex-none">{e.title}</div>
              <div className="text-white p-6 bg-blue-700/70 flex-1 opacity-0 hover:opacity-100 transition-all duration-500">
                {e.text}
              </div>
            </div>
          ))}
        </div>
        <div className="flex-none">
          <a href="#next" onClick={next}>
            <Image
              src="./nav-blue.svg"
              width={24}
              height={42}
              alt="Próximo"
              className="max-w-auto"
              style={{ transform: "scaleX(-1)" }}
            />
          </a>
        </div>
      </div>
      <div className="text-center text-4xl font-light">Saúde mental para todos!</div>
    </div>
  );
}
