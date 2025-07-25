import { Button } from "../button";
import { ChevronDownIcon } from "../icons/chevron-down-icon";

export const Banner = () => {
  return (
    <section className="flex flex-col py-24 px-8 text-center items-center gap-6 bg-[#F3F4F6]">
      <h1 className="text-(--primary) font-bold lg:text-7xl text-5xl">
        Olá, eu sou Laura Narciso
      </h1>
      <h2 className="text-[#555B6E] font-semibold lg:text-4xl text-xl">
        Estudante de Análise e Desenvolvimento de Sistemas
      </h2>
      <p className="text-[#6C6F7A] lg:text-2xl text-lg lg:w-[60ch]">
        Apaixonada por tecnologia e desenvolvimento de software. Atualmente
        cursando ADS e construindo minha jornada no mundo da programação, sempre
        em busca de novos desafios e aprendizados.
      </p>

      <div className="flex lg:flex-row flex-col items-center gap-4 p-4">
        <Button href="/" label="Entre em contato" />
        <Button href="/" label="Ver projetos" />
      </div>
    </section>
  );
};
