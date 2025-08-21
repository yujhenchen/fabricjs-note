import { Button } from "./button";
import { SVG } from "./svg";

export type ListType = "tools" | "shapes";

interface ListProps {
  title?: string;
  className?: string;
  listType: ListType;
}

const ShapesButtons = () => {
  return (
    <>
      <Button tooltip="circle">
        <SVG ariaLabel="circle">
          <circle cx="12" cy="12" r="9" stroke="currentColor" />
        </SVG>
      </Button>

      <Button tooltip="triangle">
        <SVG ariaLabel="triangle">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.697 16.126c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126Z"
          />
        </SVG>
      </Button>

      <Button tooltip="rect">
        <SVG ariaLabel="rect">
          <rect
            x="3.75"
            y="3.75"
            width="16.5"
            height="16.5"
            rx="2.25"
            ry="2.25"
            stroke="currentColor"
            fill="none"
          />
        </SVG>
      </Button>

      <Button tooltip="text">
        <SVG ariaLabel="text">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h12M12 6v12" />
        </SVG>
      </Button>
    </>
  );
};

const ToolsButtons = () => {
  return (
    <>
      <Button tooltip="import JSON">
        <SVG ariaLabel="import JSON">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m.75 12 3 3m0 0 3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
          />
        </SVG>
      </Button>

      <Button tooltip="export SVG">
        <SVG ariaLabel="export SVG">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m6.75 12-3-3m0 0-3 3m3-3v6m-1.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
          />
        </SVG>
      </Button>
    </>
  );
};

const listButtonsMap = {
  tools: <ToolsButtons />,
  shapes: <ShapesButtons />,
};

export const List = ({ title, className, listType }: ListProps) => {
  return (
    <ul className={`list bg-base-100 rounded-box shadow-md ${className}`}>
      <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">{title}</li>

      <li className="list-column">{listButtonsMap[listType]}</li>
    </ul>
  );
};
