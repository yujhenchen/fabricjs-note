import * as fabric from "fabric"; // v6

export type ObjectType = "circle" | "triangle" | "square" | "text";

export class ObjectFactory {
  // static #instance: ObjectFactory;

  // private constructor() { }
  constructor() {}

  // public static get instance(): ObjectFactory {
  //   if (!ObjectFactory.#instance) {
  //     ObjectFactory.#instance = new ObjectFactory();
  //   }
  //   return ObjectFactory.#instance;
  // }

  static createObject(type: ObjectType, options?: unknown): fabric.Object {
    switch (type) {
      case "circle":
        return new fabric.Circle(options);
      case "triangle":
        return new fabric.Triangle(options);
      case "square":
        return new fabric.Rect(options);
      default:
        return new fabric.Rect(options);
    }
  }

  static createText(text: string = "default ", options?: unknown): fabric.Object {
    return new fabric.FabricText(text, options);
  }
}
