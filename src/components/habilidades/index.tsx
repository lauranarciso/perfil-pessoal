import { CardHabilidades } from "../card-habilidades";
import { BranchIcon } from "../icons/branch-icon";
import { CodeWrapIcon } from "../icons/code-wrap-icon";
import { DataBaseIcon } from "../icons/data-base-icon";
import { LayoutIcon } from "../icons/layout-icon";
import { ProgressCircle } from "../progress-circle";

export const Habilidades = () => {
  const habilidades = [
    {
      icon: <LayoutIcon className="w-6 h-6" />,
      title: "Frontend",
      lista: ["HTML5", "CSS3", "React", "Tailwind CSS"],
    },
    {
      icon: <CodeWrapIcon className="w-6 h-6" />,
      title: "Linguagens",
      lista: ["JavaScript", "Python", "Java", "TypeScript"],
    },
    {
      icon: <BranchIcon className="w-6 h-6" />,
      title: "Ferramentas",
      lista: ["Git & GitHub", "VS Code", "Figma", "Azure DevOps"],
    },
  ];

  return (
    <section
      id="habilidades"
      className="bg-[#F3F4F6] py-24 px-8 flex flex-col gap-12"
    >
      <div className="flex flex-col gap-4 items-center text-center">
        <h2 className="text-(--primary) font-bold lg:text-5xl text-4xl">
          Minhas habilidades
        </h2>
        <p className="text-[#6C6F7A] lg:text-2xl text-lg lg:w-[60ch]">
          Tecnologias e ferramentas que estou aprendendo e aplicando em meus
          projetos
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 justify-center">
        {habilidades.map((habilidades, index) => (
          <CardHabilidades
            icon={habilidades.icon}
            title={habilidades.title}
            lista={habilidades.lista}
            key={index}
          />
        ))}
      </div>
      <div className="flex flex-col gap-10 pt-8">
        <div className="flex justify-center">
          <h2 className="font-semibold text-2xl text-[#21242C]">
            Nível de Experiência
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center text-center gap-12 lg:gap-30">
          <ProgressCircle label="HTML/CSS" percent={85} />
          <ProgressCircle label="JavaScript" percent={75} />
          <ProgressCircle label="React" percent={70} />
          <ProgressCircle label="Python" percent={70} />
        </div>
      </div>
    </section>
  );
};
