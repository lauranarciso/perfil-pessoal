interface LinkedinIconProps {
  className?: string;
}

export const LinkedinIcon = (props: LinkedinIconProps) => {
  const { className } = props;
  return (
    <svg
      className="w-5 h-5 text-[#21242C]"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
    >
      <rect x="2" y="2" width="20" height="20" rx="2" />
      <path d="M8 11v5M8 8v.01M12 11v5M12 14a2 2 0 114 0v2" />
    </svg>
  );
};
