import { CommonTokenStream, CharStreams } from 'antlr4';
import SCSSParser from '../parser/SCSSParser';
import SCSSLexer from '../parser/SCSSLexer';

import { type CSSType, Visitor } from './Visitor';
import { ErrorListener } from './ErrorListener';
import { IMain } from '../models';

export class Main implements IMain {
  private input: string;
  private output: CSSType;
  private errorListener: ErrorListener;

  constructor(input: string) {
    this.input = input;
    this.errorListener = new ErrorListener();

    const inputStream = CharStreams.fromString(this.input);

    const lexer = new SCSSLexer(inputStream);
    lexer.removeErrorListeners();
    lexer.addErrorListener(this.errorListener);

    const tokenStream = new CommonTokenStream(lexer);
    const parser = new SCSSParser(tokenStream);
    parser.removeErrorListeners();
    parser.addErrorListener(this.errorListener);

    const tree = parser.stylesheet();
    const visitor = new Visitor();
    visitor.visit(tree);

    this.output = visitor.getOutput();
  }

  public getInput(): string {
    return this.input;
  }

  public setInput(input: string): void {
    this.input = input;
  }

  public getOutput(): CSSType {
    return this.output;
  }

  public isValid(): boolean {
    try {
      if (
        this.errorListener.getErrors() &&
        this.errorListener.getErrors().length > 0
      ) {
        console.error('Parsing Errors:', this.errorListener.getErrors());
        return false;
      }

      return true;
    } catch (error) {
      console.error('Failed to run "isValid()" function', error);
      return false;
    }
  }
}
