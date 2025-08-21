interface SVGProps {
  role?: string;
  ariaLabel: string;
  children: React.ReactNode;
}

export const SVG = ({ role = "img", ariaLabel, children }: SVGProps) => {
  return (
    <svg
      role={role}
      aria-label={ariaLabel}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-6"
    >
      {children}
    </svg>
  );
};
