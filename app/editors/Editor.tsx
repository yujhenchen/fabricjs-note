"use client";

import { useRef } from "react";
import { Canvas } from "../canvas/Canvas";
import type { Handler } from "../canvas/handlers/handler";
import type { FabricCanvas } from "../canvas/models/object.model";
import { Button } from "../components/button";
import { List } from "../components/list";

export const Editor = () => {
  // const canvasRef = useRef<CanvasInstance>(null);
  const handlerRef = useRef<Handler | null>(null);
  const fabricCanvasRef = useRef<FabricCanvas | null>(null);

  const options = {
    backgroundColor: "#fdf6e3",
  };

  return (
    <div className="w-full h-full">
      <List listType="tools" title="Tools" className="flex-row place-content-end" />
      <Canvas
        handlerRef={handlerRef}
        fabricCanvasRef={fabricCanvasRef}
        canvasOptions={options}
        className="mt-4"
      />
      <List listType="shapes" title="Shapes" className="flex-row" />

      {/* TODO: remove this test used button */}
      <Button
        onClick={() => {
          handlerRef.current?.add("circle", true, {
            radius: 50,
            fill: "blue",
            left: 100,
            top: 100,
            centeredScaling: true,
          });
        }}
      >
        Circle
      </Button>
    </div>
  );
};
