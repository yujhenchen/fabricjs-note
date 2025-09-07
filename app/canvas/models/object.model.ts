import type * as fabric from "fabric"; // v6

export type FabricCanvas<T = fabric.Canvas> = T;

export type CanvasOption = fabric.CanvasOptions;

// export type FabricObjectOption<T extends any = fabric.IObjectOptions> = T & {
//   /**
//    * Object id
//    * @type {string}
//    */
//   id?: string;
//   /**
//    * Parent object id
//    * @type {string}
//    */
//   parentId?: string;
//   /**
//    * Original opacity
//    * @type {number}
//    */
//   originOpacity?: number;
//   /**
//    * Original top position
//    * @type {number}
//    */
//   originTop?: number;
//   /**
//    * Original left position
//    * @type {number}
//    */
//   originLeft?: number;
//   /**
//    * Original scale X
//    * @type {number}
//    */
//   originScaleX?: number;
//   /**
//    * Original scale Y
//    * @type {number}
//    */
//   originScaleY?: number;
//   /**
//    * Original angle
//    * @type {number}
//    */
//   originAngle?: number;
//   /**
//    * Original fill color
//    *
//    * @type {(string | fabric.Pattern | fabric.Gradient)}
//    */
//   originFill?: string | fabric.Pattern | fabric.Gradient;
//   /**
//    * Original stroke color
//    * @type {string}
//    */
//   originStroke?: string;
//   /**
//    * Original rotation
//    *
//    * @type {number}
//    */
//   originRotation?: number;
//   /**
//    * Object editable
//    * @type {boolean}
//    */
//   editable?: boolean;
//   /**
//    * Object Super type
//    * @type {string}
//    */
//   superType?: string;
//   /**
//    * @description
//    * @type {string}
//    */
//   description?: string;
//   /**
//    * Animation property
//    * @type {AnimationProperty}
//    */
//   animation?: AnimationProperty;
//   /**
//    * Anime instance
//    * @type {anime.AnimeInstance}
//    */
//   anime?: anime.AnimeInstance;
//   /**
//    * Tooltip property
//    * @type {TooltipProperty}
//    */
//   tooltip?: TooltipProperty;
//   /**
//    * Link property
//    * @type {LinkProperty}
//    */
//   link?: LinkProperty;
//   /**
//    * Is running animation
//    * @type {boolean}
//    */
//   animating?: boolean;
//   /**
//    * Object class
//    * @type {string}
//    */
//   class?: string;
//   /**
//    * Is possible delete
//    * @type {boolean}
//    */
//   deletable?: boolean;
//   /**
//    * Is enable double click
//    * @type {boolean}
//    */
//   dblclick?: boolean;
//   /**
//    * Is possible clone
//    * @type {boolean}
//    */
//   cloneable?: boolean;
//   /**
//    * Is locked object
//    * @type {boolean}
//    */
//   locked?: boolean;
//   /**
//    * This property replaces "angle"
//    *
//    * @type {number}
//    */
//   rotation?: number;
//   /**
//    * Whether it can be clicked
//    *
//    * @type {boolean}
//    */
//   clickable?: boolean;
//   [key: string]: any;
// };

export type FabricObject<T = fabric.Object> = T; // & FabricObjectOption;
