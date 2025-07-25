interface PhoneIconProps {
  className?: string;
}

export const PhoneIcon = (props: PhoneIconProps) => {
  const { className } = props;
  return (
    <svg
      className="w-6 h-6 text-[#7F56D9]"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
    >
      <path d="M22 16.92V19a2 2 0 01-2.18 2A19.72 19.72 0 013 5.18 2 2 0 015 3h2.09a2 2 0 012 1.72c.13 1.13.37 2.25.72 3.32a2 2 0 01-.45 2.11l-1.27 1.27a16 16 0 006.58 6.58l1.27-1.27a2 2 0 012.11-.45c1.07.35 2.19.59 3.32.72a2 2 0 011.72 2z" />
    </svg>
  );
};
