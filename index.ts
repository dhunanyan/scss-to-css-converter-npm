import { Converter } from "./controllers";

export type ConvertReturnType = {
  isSCSSValid: boolean;
  CSS: string;
};

export const convert = (SCSS: string): ConvertReturnType => {
  const converter = new Converter(SCSS);
  return { isSCSSValid: converter.isValid(), CSS: converter.getOutput() };
};
