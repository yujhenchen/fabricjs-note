"use client";

import * as fabric from "fabric"; // v6
import { useEffect, useRef } from "react";

interface Props {
  className?: string;
}

export const FabricJSCanvas = ({ className }: Props) => {
  const canvasEl = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const options = {
      width: canvasEl.current.parentElement.clientWidth,
      height: (canvasEl.current.parentElement.clientHeight / 7) * 6,
      backgroundColor: "#fdf6e3",
    };
    const canvas = new fabric.Canvas(canvasEl.current, options);
    // make the fabric.Canvas instance available to your app
    // updateCanvasContext(canvas);

    const helloWorld = new fabric.FabricText("hello world");
    canvas.add(helloWorld);
    canvas.centerObject(helloWorld);

    return () => {
      // updateCanvasContext(null);
      canvas.dispose();
    };
  }, []);

  return <canvas className={className} ref={canvasEl} />;
};
