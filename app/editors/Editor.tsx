"use client";

import { useRef } from "react";
import { Canvas } from "../canvas/Canvas";
import { List } from "../components/list";

export const Editor = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const options = {
    backgroundColor: "#fdf6e3",
  };

  return (
    <div className="w-full h-full">
      <List listType="tools" title="Tools" className="flex-row place-content-end" />
      <Canvas ref={canvasRef} canvasOptions={options} className="mt-4" />
      <List listType="shapes" title="Shapes" className="flex-row" />
    </div>
  );
};
