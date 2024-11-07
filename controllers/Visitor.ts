import {
  RulesetContext,
  SelectorGroupContext,
  BlockContext,
} from '@parser/SCSSParser';
import SCSSParserVisitor from '@parser/SCSSParserVisitor';

export class Visitor extends SCSSParserVisitor<void> {
  visitRuleset = (ctx: RulesetContext): void => {
    const selectorGroupCtx: SelectorGroupContext = ctx.selectorGroup();
    const blockCtx: BlockContext = ctx.block();

    console.info('Selector Group:', selectorGroupCtx.getText());
    console.info('Block:', blockCtx.getText());

    this.visit(blockCtx);
  };
}
