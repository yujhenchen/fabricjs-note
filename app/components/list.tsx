import { Button } from "./button";

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
        <svg
          role="img"
          aria-label="circle"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <circle cx="12" cy="12" r="9" stroke="currentColor" />
        </svg>
      </Button>

      <Button tooltip="triangle">
        <svg
          role="img"
          aria-label="triangle"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.697 16.126c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126Z"
          />
        </svg>
      </Button>

      <Button tooltip="rect">
        <svg
          role="img"
          aria-label="rect"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
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
        </svg>
      </Button>

      <Button tooltip="text">
        <svg
          role="img"
          aria-label="text"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h12M12 6v12" />
        </svg>
      </Button>
    </>
  );
};

const ToolsButtons = () => {
  return (
    <>
      <Button tooltip="import JSON">
        <svg
          role="img"
          aria-label="import JSON"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m.75 12 3 3m0 0 3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
          />
        </svg>
      </Button>

      <Button tooltip="export SVG">
        <svg
          role="img"
          aria-label="export SVG"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m6.75 12-3-3m0 0-3 3m3-3v6m-1.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
          />
        </svg>
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
