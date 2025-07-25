interface EnvelopeIconProps {
  className?: string;
}

export const EnvelopeIcon = (props: EnvelopeIconProps) => {
  const { className } = props;
  return (
    <svg
      className="w-6 h-6 text-[#7F56D9]"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  );
};
