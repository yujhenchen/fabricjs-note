"use client";

import * as fabric from "fabric"; // v6
import { type RefObject, useEffect } from "react";

interface CanvasProps {
  ref: RefObject<HTMLCanvasElement>;
  // onLoad: () => void;
  canvasOptions?: Partial<fabric.CanvasOptions>;
  className?: string;
}

export const Canvas = ({
  ref,
  // onLoad,
  canvasOptions,
  className,
}: CanvasProps) => {
  useEffect(() => {
    const options = {
      width: ref.current.parentElement.clientWidth,
      height: (ref.current.parentElement.clientHeight / 7) * 6,
      ...canvasOptions,
    };
    const canvas = new fabric.Canvas(ref.current, options);
    // make the fabric.Canvas instance available to your app
    // updateCanvasContext(canvas);

    // const helloWorld = new fabric.FabricText("hello world");
    // canvas.add(helloWorld);
    // canvas.centerObject(helloWorld);
    canvas.renderAll();

    return () => {
      // updateCanvasContext(null);
      canvas.dispose();
    };
  }, [ref.current, canvasOptions]);

  return (
    <canvas
      className={className}
      // ref={canvasEl}
      ref={ref}
    />
  );
};
