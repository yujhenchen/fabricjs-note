"use client";

import * as fabric from "fabric"; // v6
import { type RefObject, useEffect, useRef } from "react";

import { Handler } from "./handlers/handler";
import type { FabricCanvas } from "./models/object.model";

export interface CanvasInstance {
  handler: Handler;
  canvas: FabricCanvas;
}

interface CanvasProps {
  // ref: RefObject<CanvasInstance>;
  handlerRef: RefObject<Handler>;
  fabricCanvasRef: RefObject<FabricCanvas>;

  canvasOptions?: Partial<fabric.CanvasOptions>;
  className?: string;
}

interface InternalCanvasProps {
  handlerRef: RefObject<Handler>;
  fabricCanvasRef: RefObject<FabricCanvas>;
  canvasOptions?: Partial<fabric.CanvasOptions>;
  className?: string;
}

const InternalCanvas = ({
  handlerRef,
  fabricCanvasRef,
  canvasOptions,
  className,
}: InternalCanvasProps) => {
  const canvasElRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasElRef.current) {
      return;
    }

    const options = {
      width: canvasElRef.current.parentElement.clientWidth,
      height: (canvasElRef.current.parentElement.clientHeight / 5) * 4,
      ...canvasOptions,
    };
    const canvas = new fabric.Canvas(canvasElRef.current, options);

    fabricCanvasRef.current = canvas;
    handlerRef.current = new Handler({
      canvas,
    });

    canvas.renderAll();

    return () => {
      canvas.dispose();
      handlerRef.current = null;
      fabricCanvasRef.current = null;
    };
  }, [canvasOptions, handlerRef, fabricCanvasRef]);

  return (
    <div className="w-full h-full">
      <canvas ref={canvasElRef} className={className} />
    </div>
  );
};

export const Canvas = ({ handlerRef, fabricCanvasRef, canvasOptions, className }: CanvasProps) => {
  // NOTE: useImperativeHandle runs earlier than useEffect, which makes handlerRef.current always null
  // const handlerRef = useRef<Handler | null>(null);
  // const fabricCanvasRef = useRef<FabricCanvas | null>(null);

  // useImperativeHandle(ref, () => ({
  // 	handler: handlerRef.current,
  // 	canvas: fabricCanvasRef.current,
  // }));

  return (
    <InternalCanvas
      handlerRef={handlerRef}
      fabricCanvasRef={fabricCanvasRef}
      canvasOptions={canvasOptions}
      className={className}
    />
  );
};
