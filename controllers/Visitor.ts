import {
  RulesetContext,
  SelectorGroupContext,
  BlockContext,
  StatementContext,
  PropertyDeclarationContext,
} from '@parser/SCSSParser';
import SCSSParserVisitor from '@parser/SCSSParserVisitor';
import { TerminalNode } from 'antlr4';

export type DeclarationType = string;
export type DeclarationStackType = DeclarationType[];
export type DeclarationListType = DeclarationStackType[];

export type SelectorType = string;
export type SelectorStackType = SelectorType[];
export type SelectorListType = SelectorStackType[];

export type CSSType = string;

export class Visitor extends SCSSParserVisitor<void> {
  private selectorStack: SelectorStackType = [];
  private selectorList: SelectorListType = [];

  private declarationStack: DeclarationStackType = [];
  private declarationList: DeclarationListType = [];
  private isLastDeclarationApplied: boolean = false;

  visitRuleset = (ctx: RulesetContext): void => {
    const selectorGroupCtx: SelectorGroupContext = ctx.selectorGroup();
    const blockCtx: BlockContext = ctx.block();

    // creates flat selector for current block (starts pushing into an empty array)
    this.selectorStack.push(`${selectorGroupCtx.getText()}`);

    this.visit(blockCtx);

    const isBlockEmpty = blockCtx.children?.length === 2;
    const blockContainsDeclarations =
      blockCtx.children?.length === 3 &&
      blockCtx.children?.some(
        (c) =>
          c instanceof StatementContext &&
          c.children?.some((c) => c instanceof RulesetContext)
      );
    if (!isBlockEmpty && !blockContainsDeclarations) {
      this.selectorList.push([...this.selectorStack]);
    }

    // removes flat selector for current block (in order to apply to array the new one later)
    this.selectorStack.pop();
  };

  visitStatement = (ctx: StatementContext): void => {
    ctx.children?.forEach((child) => {
      if (child instanceof PropertyDeclarationContext) {
        this.declarationStack.push(`${child.getText()}`);
        this.visit(child);
        return;
      }

      // @ISSUE-1 this does is not being called for the last Statement of PropertyDeclarationContext instance.
      // So the last propertyDeclaration item is not being added to array (only the last one)
      if (this.declarationStack.length > 0) {
        this.declarationList.push([...this.declarationStack]);
        this.declarationStack = [];
      }
      this.visit(child);
    });
  };

  visitBlock = (ctx: BlockContext): void => {
    ctx.children?.forEach((child) => {
      this.visit(child);

      // @ISSUE-1 - workaround
      if (
        this.declarationStack.length !== 0 &&
        !this.isLastDeclarationApplied &&
        child instanceof TerminalNode &&
        child.getText() === '}'
      ) {
        this.declarationList.push([...this.declarationStack]);
        this.isLastDeclarationApplied = true;
      }
    });

    // ctx.statement_list()
  };

  convertToCSS = (): CSSType =>
    this.declarationList
      .map(
        (declaration, i) =>
          this.selectorList.reverse()[i].join(' ').replace(' &.', '.') +
          ' ' +
          '{' +
          '\n' +
          '\t' +
          declaration.join('\n\t') +
          '\n' +
          '}'
      )
      .join('\n');

  getOutput = (): CSSType => {
    return this.convertToCSS();
  };
}
