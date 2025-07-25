interface ChevronDownIconProps {
  className?: string;
}

export const ChevronDownIcon = (props: ChevronDownIconProps) => {
  const { className } = props;

  return (
    <svg
      data-testid="geist-icon"
      height="16"
      strokeLinejoin="round"
      className="w-6 h-6 animate-bounce"
      viewBox="0 0 24 24"
      width="16"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 9l-7 7-7-7"
        fillRule="evenodd"
        clipRule="evenodd"
        fill="#555B6E"
      ></path>
    </svg>
  );
};
