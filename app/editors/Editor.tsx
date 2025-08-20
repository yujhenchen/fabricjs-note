"use client";

import { useRef } from "react";
import { Canvas } from "../canvas/Canvas";

export const Editor = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const options = {
    backgroundColor: "#fdf6e3",
  };

  return <Canvas ref={canvasRef} canvasOptions={options} className="mt-24 sm:mt-16" />;
};
