interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  selected?: boolean;
  tooltip?: string;
}

export const Button = ({ children, onClick, selected = false, tooltip = "" }: ButtonProps) => (
  <div className="tooltip" data-tip={tooltip}>
    <button
      type="button"
      className={`btn btn-square btn-ghost ${selected ? "btn-active" : ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  </div>
);
