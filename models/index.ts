export interface IConverter {
  setInput(input: string): void;
  getInput(): string;
  isValid(): boolean;
}
