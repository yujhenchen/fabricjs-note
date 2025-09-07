import type { CanvasOption, FabricCanvas, FabricObject } from "../models/object.model";
import { ObjectFactory, type ObjectType } from "../ObjectFactory";

export interface HandlerOption {
  /**
   * Canvas object
   * @type {FabricCanvas}
   */
  canvas?: FabricCanvas;
  /**
   * Canvas option
   * @type {CanvasOption}
   */
  canvasOption?: CanvasOption;
}

export type HandlerOptions = HandlerOption;

export class Handler {
  public canvas: FabricCanvas;

  constructor(options: HandlerOptions) {
    this.initialize(options);
  }

  public initialize(options: HandlerOptions) {
    this.initOption(options);
  }

  public initOption(options: HandlerOptions) {
    this.canvas = options.canvas;
  }

  public add(objectType: ObjectType, centered = true, options?: unknown) {
    const createdObj = ObjectFactory.createObject(objectType, options);
    this.canvas.add(createdObj);
    if (centered) {
      this.centerObject(createdObj);
    }
    return createdObj;
  }

  public addText(centered = true, text: string, options?: unknown) {
    const createdObj = ObjectFactory.createText(text, options);
    this.canvas.add(createdObj);
    if (centered) {
      this.centerObject(createdObj);
    }
    return createdObj;
  }

  public centerObject(object: FabricObject) {
    this.canvas.centerObject(object);
  }
}
