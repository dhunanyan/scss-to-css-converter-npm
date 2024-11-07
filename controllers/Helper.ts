import { CommonTokenStream, CharStreams } from 'antlr4';
import SCSSParser from '@parser/SCSSParser';
import SCSSLexer from '@parser/SCSSLexer';
import { Visitor } from './Visitor';

import { IHelper } from '@models';

export class Helper implements IHelper {
  private input: string;

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
    try {
      const inputStream = CharStreams.fromString(this.getInput());
      const lexer = new SCSSLexer(inputStream);
      const tokenStream = new CommonTokenStream(lexer);
      const parser = new SCSSParser(tokenStream);

      const tree = parser.stylesheet();
      const visitor = new Visitor();

      visitor.visit(tree);

      return true;
    } catch (error) {
      console.error('Parsing Error:', error);
      return false;
    }
  }
}
