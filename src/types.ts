export interface RGB {
  r: number;
  g: number;
  b: number;
}

export type ConversionState =
  | { status: "idle" }
  | { status: "success"; rgb: RGB }
  | { status: "error" };
