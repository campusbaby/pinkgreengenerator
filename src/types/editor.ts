export interface RGB {
  r: number;
  g: number;
  b: number;
}

export type EffectType = 'classic' | 'reverse' | 'colorblind';

export interface ColorPalette {
  shadow: RGB;
  highlight: RGB;
}

export interface DuotoneEffect {
  name: string;
  type: EffectType;
  colors: ColorPalette;
}

export interface ProcessedImage {
  canvas: HTMLCanvasElement;
  dataUrl: string;
}

export interface FileValidation {
  isValid: boolean;
  error?: string;
}