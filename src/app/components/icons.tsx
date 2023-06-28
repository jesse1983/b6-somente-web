"use client";
import Image from "next/image";

export default function Icons() {
  const icons = [
    { title: "Qualidade", icon: "./icon_success.svg" },
    { title: "Disponibilidade", icon: "./icon_calendar.svg" },
    { title: "Acessibilidade", icon: "./icon_mouse.svg" },
    { title: "Resolução", icon: "./icon_brain.svg" },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 my-10 mx-10 sm:mx-0">
      {icons.map((icon) => (
        <div
          className="bg-gray-200 flex flex-col justify-center items-center p-12 gap-8"
          key={icon.title}
        >
          <div className="text-2xl font-bold">{icon.title}</div>
          <div>
            <Image
              src={icon.icon}
              width={115}
              height={115}
              alt="Qualidade"
              className="max-w-auto"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
