import { CommonTokenStream, CharStreams } from 'antlr4';
import SCSSParser from '@parser/SCSSParser';
import SCSSLexer from '@parser/SCSSLexer';

import { Visitor } from './Visitor';
import { ErrorListener } from './ErrorListener';
import { IMain } from '@models';

export class Main implements IMain {
  input: string;

  constructor(input: string) {
    this.input = input;
  }

  public getInput(): string {
    return this.input;
  }

  public setInput(input: string): void {
    this.input = input;
  }

  public isValid(): boolean {
    const errorListener = new ErrorListener();

    try {
      const inputStream = CharStreams.fromString(this.getInput());

      const lexer = new SCSSLexer(inputStream);
      lexer.removeErrorListeners();
      lexer.addErrorListener(errorListener);

      const tokenStream = new CommonTokenStream(lexer);
      const parser = new SCSSParser(tokenStream);
      parser.removeErrorListeners();
      parser.addErrorListener(errorListener);

      const tree = parser.stylesheet();
      const visitor = new Visitor();
      visitor.visit(tree);

      if (errorListener.getErrors().length > 0) {
        console.error('Parsing Errors:', errorListener.getErrors());
        return false;
      }

      return true;
    } catch (error) {
      console.error('Parsing Error:', error);
      return false;
    }
  }
}
