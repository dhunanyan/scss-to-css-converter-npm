import {
  ErrorListener as ANTLRErrorListener,
  Recognizer,
  Token,
  RecognitionException,
} from 'antlr4';

export class ErrorListener extends ANTLRErrorListener<Token | number> {
  private errors: string[] = [];

  // Override the syntaxError method to capture syntax errors
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  syntaxError(
    recognizer: Recognizer<Token | number>,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    offendingSymbol: Token | number,
    line: number,
    charPositionInLine: number,
    msg: string,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    e?: RecognitionException
  ): void {
    const errorMessage = `Line ${line}:${charPositionInLine} - ${msg}`;
    this.errors.push(errorMessage);
  }

  // Override the illegalCharacterError method to capture illegal character errors
  illegalCharacterError(c: string): void {
    this.errors.push(`Illegal character: ${c}`);
  }

  // Method to get the list of collected errors
  getErrors(): string[] {
    return this.errors;
  }
}
