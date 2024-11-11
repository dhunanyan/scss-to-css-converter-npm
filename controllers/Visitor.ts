import {
  RulesetContext,
  SelectorGroupContext,
  BlockContext,
  StatementContext,
  PropertyDeclarationContext,
  PropertyValueContext,
  ListSpaceSeparatedContext,
  ListElementContext,
} from "../parser/SCSSParser";
import SCSSParserVisitor from "../parser/SCSSParserVisitor";

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

  private spaceSeparatedValueStack: string[] = [];

  visitRuleset = (ctx: RulesetContext): void => {
    const selectorGroupCtx: SelectorGroupContext = ctx.selectorGroup();
    const blockCtx: BlockContext = ctx.block();

    this.selectorStack.push(`${selectorGroupCtx.getText()}`);

    this.visit(blockCtx);

    this.selectorList.push([...this.selectorStack]);
    this.selectorStack.pop();
  };
  visitListSpaceSeparated = (ctx: ListSpaceSeparatedContext): void => {
    ctx.children?.forEach((c) => {
      this.visit(c);

      if (c instanceof ListElementContext) {
        c.children?.forEach((listElementChild) => {
          this.spaceSeparatedValueStack.push(listElementChild.getText());
        });
      }
    });
  };
  visitPropertyDeclaration = (ctx: PropertyDeclarationContext): void => {
    const propertyDeclaration = ctx.children?.map((c) => {
      if (c instanceof PropertyValueContext) {
        return c.children
          ?.map((propertyValueCtx) => {
            if (propertyValueCtx instanceof ListSpaceSeparatedContext) {
              this.spaceSeparatedValueStack = [];
              this.visit(propertyValueCtx);
              return this.spaceSeparatedValueStack.join(" ");
            }

            return propertyValueCtx.getText();
          })
          ?.join(" ");
      }

      if (c === ctx.Colon()) {
        return c.getText() + " ";
      }

      return c.getText();
    });

    this.declarationStack.push(`${propertyDeclaration?.join("")}`);
  };
  visitBlock = (ctx: BlockContext): void => {
    const statements = ctx.children?.filter(
      (c) => c instanceof StatementContext
    );

    const propertyDeclarations = statements?.map((statementCtx) =>
      statementCtx.children?.filter(
        (c) => c instanceof PropertyDeclarationContext
      )
    );

    propertyDeclarations?.map((statement) =>
      statement?.map((propertyDeclaration) => {
        this.visit(propertyDeclaration);
      })
    );

    this.declarationList.push([...this.declarationStack]);
    this.declarationStack = [];

    const rulesets = statements?.map((statementCtx) =>
      statementCtx.children?.filter((c) => c instanceof RulesetContext)
    );

    rulesets?.map((statement) =>
      statement?.map((ruleset) => {
        this.visit(ruleset);
      })
    );
  };

  parseCSS = (): CSSType =>
    this.declarationList
      .map((declaration, i) =>
        declaration.length
          ? `${this.selectorList.reverse()[i].join(" ").replaceAll(" &", "")} {\n\t${declaration.join("\n\t")}\n}`
          : ""
      )
      .join("\n\n");

  getCSS = (): CSSType => this.parseCSS();
}
