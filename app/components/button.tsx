interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  selected?: boolean;
  tooltip?: string;
  tooltipPosition?: "top" | "bottom" | "left" | "right";
}

const tooltipPositionMap = {
  top: "tooltip-top",
  bottom: "tooltip-bottom",
  left: "tooltip-left",
  right: "tooltip-right",
};

export const Button = ({
  children,
  onClick,
  selected = false,
  tooltip = "",
  tooltipPosition = "top",
}: ButtonProps) => (
  <div className={`tooltip ${tooltipPositionMap[tooltipPosition]}`} data-tip={tooltip}>
    <button
      type="button"
      className={`btn btn-square btn-ghost ${selected ? "btn-active" : ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  </div>
);
