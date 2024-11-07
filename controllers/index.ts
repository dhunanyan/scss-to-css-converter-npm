import { CommonTokenStream, CharStreams } from "antlr4";
import SCSSLexer from "../dist/SCSSLexer";
import SCSSParser from "../dist/SCSSParser";
import SCSSParserVisitor from "../dist/SCSSParserVisitor";

class MyVisitor extends SCSSParserVisitor<void> {
  private selectorPathList: string[] = [];
  private currentSelectorPath: string[] = [];

  visitStylesheet = (ctx: any): void => {
    ctx.block().forEach((block: any) => this.visitBlock(block));
  };

  visitBlock = (ctx: any): void => {
    this.currentSelectorPath = [ctx.selector().getText()];

    if (ctx.declaration()) {
      ctx.declaration().forEach((declaration: any) => {
        this.selectorPathList.push(
          `${this.currentSelectorPath.join(
            " "
          )} {\n\t${declaration.getText()}\n}`
        );
      });
    }

    ctx
      .nestedBlock()
      .forEach((nestedBlock: any) => this.visitNestedBlock(nestedBlock));
  };

  visitNestedBlock = (ctx: any): void => {
    this.currentSelectorPath.push(ctx.selector().getText());

    if (ctx.declaration()) {
      ctx.declaration().forEach((declaration: any) => {
        this.selectorPathList.push(
          `${this.currentSelectorPath.join(
            " "
          )} {\n\t${declaration.getText()}\n}`
        );
      });
    }

    ctx.nestedBlock().forEach((nestedBlock: any) => {
      this.visitNestedBlock(nestedBlock);
      this.currentSelectorPath.pop();
    });
  };

  getOutput = (): string => {
    return this.selectorPathList.join("\n");
  };
}

export function convertFromText(text: string): string {
  const chars = CharStreams.fromString(text);
  const lexer = new SCSSLexer(chars);
  const tokens = new CommonTokenStream(lexer);
  const parser = new SCSSParser(tokens);
  const tree = parser.stylesheet();

  const visitor = new MyVisitor();
  visitor.visit(tree);

  return visitor.getOutput();
}
