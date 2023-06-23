export default function Discount() {
  return <div className="my-10">
    <div className="container m-auto bg-gradient-to-b from-yellow-500 to-amber-500">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 h-96">
        <div className="h-full w-full bg-cover bg-center bg-no-repeat hidden sm:block" style={{ backgroundImage: 'url(./discount.png' }}></div>
        <div className="text-white flex justify-center flex-col text-center sm:text-left">
          <div className="text-4xl font-bold">Desconto Especial <br />Cliente C6</div>
          <div className="">Cliente C6 tem desconto especial <br />
no plano de saúde mental!</div>
          <div className="text-xl mt-10">De <span className="line-through text-2xl">R$ 199,90</span></div>
          <div className="text-2xl">Por <span className="text-5xl font-bold">R$ 99,90</span>/mês</div>
        </div>
      </div>
    </div>
  </div>
}
