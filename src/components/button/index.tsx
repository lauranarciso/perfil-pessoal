import Link from "next/link";

interface ButtonProps {
  href: string;
  label: string;
  className?: string;
}

export const Button = (props: ButtonProps) => {
  const { href, label, className } = props;

  return (
    <Link
      href={href}
      className={`flex items-center justify-center gap-2 text-xl transition-transform duration-300 hover:scale-105 px-6 py-2 rounded-xl w-fit bg-(--primary) text-white font-medium`}
    >
      {label}
    </Link>
  );
 
};
