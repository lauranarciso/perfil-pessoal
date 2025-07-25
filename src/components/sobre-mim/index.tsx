import { CardSobreMim } from "../card-sobre-mim";
import { BookIcon } from "../icons/book-icon";
import { CodeIcon } from "../icons/code-icon";
import { HeartIcon } from "../icons/heart-icon";
import { NotebookIcon } from "../icons/notbook-icon";

export const SobreMim = () => {
  const sobremim = [
    {
      icon: <CodeIcon className="w-8 h-8" />,
      title: "Desenvolvimento",
      text: "Aprendendo linguagens modernas e frameworks atuais",
    },
    {
      icon: <BookIcon className="w-8 h-8" />,
      title: "Estudos",
      text: "Graduação em Análise e Desenvolvimento de Sistemas",
    },
    {
      icon: <NotebookIcon className="w-8 h-8" />,
      title: "Dedicação",
      text: "Sempre pronta para novos desafios e projetos",
    },
    {
      icon: <HeartIcon className="w-8 h-8" />,
      title: "Paixão",
      text: "Apaixonada por tecnologia e inovação",
    },
  ];

  return (
    <section id="sobre" className="px-8 flex flex-col gap-12">
      <div className="flex flex-col items-center gap-4 text-center">
        <h2 className="text-(--primary) font-bold lg:text-5xl text-4xl">
          Sobre mim
        </h2>
        <p className="text-[#6C6F7A] lg:text-2xl text-lg lg:w-[60ch]">
          Conheça um pouco mais sobre minha jornada e o que me motiva
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 justify-center">
        {sobremim.map((about, index) => (
          <CardSobreMim
            icon={about.icon}
            title={about.title}
            text={about.text}
            key={index}
          />
        ))}
      </div>
    </section>
  );
};
