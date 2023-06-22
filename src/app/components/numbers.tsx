"use client";
import Image from "next/image";

export default function Numbers() {
  const nums = [
    { total: "+8.000", unit: "Consultas mensais", icon: "./icon-consultas.svg", color: '#02C567' },
    { total: "+93%", unit: "Em taxa de retorno", icon: "./icon-retorno.svg", color: '#2F88FF' },
    { total: "+175.000", unit: "Vidas transformadas", icon: "./icon-vidas.svg", color: '#FF0523' },
  ];
  return (
    <div
      className="bg-gray-900 min-h-96 flex items-center justify-center bg-no-repeat bg-center bg-cover my-10 py-10"
      style={{ backgroundImage: "url(./bg-numbers.jpg)" }}
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {nums.map((num) => (
          <div key={num.total} className="flex items-center justify-center">
            <div className="flex flex-col items-center justify-center rounded-full border border-white h-72 w-72 text-center gap-3">
            <Image
                  src={num.icon}
                  width={56}
                  height={56}
                  alt={num.unit}
                  className="max-w-auto"
                />
              <div className="text-white font-thin text-6xl tracking-tighter" style={{ color: num.color }}>{num.total}</div>
              <div className="text-white font-bold">{num.unit}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
