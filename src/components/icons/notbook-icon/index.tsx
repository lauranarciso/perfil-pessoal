interface NotebookIconProps {
  className?: string;
}

export const NotebookIcon = (props: NotebookIconProps) => {
  const { className } = props;
  return (
    <svg
      data-testid="geist-icon"
      height="16"
      strokeLinejoin="round"
      viewBox="0 0 16 16"
      width="16"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.28497 1.5H13V12C13 12.5523 12.5523 13 12 13H6.28497L6.28497 1.5ZM5.03497 1.5H3V12C3 12.5523 3.44772 13 4 13H5.03497L5.03497 1.5ZM5.03497 14.5H4C2.61929 14.5 1.5 13.3807 1.5 12V1.5V0H3H13H14.5V1.5V12C14.5 13.3807 13.3807 14.5 12 14.5H6.28497V15V15.625H5.03497V15V14.5ZM8.505 3.375H9.13H10.13H10.755V4.625H10.13H9.13H8.505V3.375ZM9.13 6.375H8.505V7.625H9.13H10.13H10.755V6.375H10.13H9.13Z"
        fill="#7E73F2"
      ></path>
    </svg>
  );
};
