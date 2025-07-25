interface CardHabilidadesProps {
  icon?: React.ReactElement;
  title: string;
  lista: string[];
}

export const CardHabilidades = (props: CardHabilidadesProps) => {
  const { icon, title, lista } = props;
  return (
    <div className="flex flex-col gap-2 justify-center border rounded-xl p-6 lg:w-70 lg:h-60 border-[#ebe4e4] shadow-lg transform transition-transform duration-300 hover:scale-105">
      <div className="flex gap-2 items-center">
        <div className="bg-(--primary) w-12 h-12 flex rounded-xl items-center justify-center">
          {icon}
        </div>
        <h2 className="text[#21242C] font-semibold text-lg">{title}</h2>
      </div>
      <ul className="list-disc pl-6 marker:text-[#A084E8]">
        {lista.map((lista: string, index: number) => (
          <div key={index}>
            <li className="text-[#6C6F7A]">{lista}</li>
          </div>
        ))}
      </ul>
    </div>
  );
};
