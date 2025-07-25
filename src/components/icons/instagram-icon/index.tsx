interface InstagramIconProps {
  className?: string;
}

export const InstagramIcon = (props: InstagramIconProps) => {
  const { className } = props;
  return (
    <svg
      className="w-5 h-5 text-[#21242C]"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17" cy="7" r="1" />
    </svg>
  );
};
