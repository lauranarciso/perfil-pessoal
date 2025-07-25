interface CardSobreMimProps {
  icon?: React.ReactElement;
  title: string;
  text: string;
}

export const CardSobreMim = (props: CardSobreMimProps) => {
  const { icon, title, text } = props;
  return (
    <div className="flex flex-col border rounded-xl p-6 lg:w-70 lg:h-50 border-[#ebe4e4] shadow-lg  transform transition-transform duration-300 hover:scale-105">
      <div className="flex flex-col gap-2">
        {icon}
        <h2 className="text-[#21242C] font-semibold text-lg">{title}</h2>
        <p className="text-[#6C6F7A]">{text}</p>
      </div>
    </div>
  );
};
