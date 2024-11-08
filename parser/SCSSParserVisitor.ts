// Generated from SCSSParser.g4 by ANTLR 4.13.2

import {ParseTreeVisitor} from 'antlr4';


import { StylesheetContext } from "./SCSSParser.js";
import { StatementContext } from "./SCSSParser.js";
import { ImportDeclarationContext } from "./SCSSParser.js";
import { ImportPathContext } from "./SCSSParser.js";
import { AsClauseContext } from "./SCSSParser.js";
import { WithClauseContext } from "./SCSSParser.js";
import { VariableDeclarationContext } from "./SCSSParser.js";
import { VariableValueContext } from "./SCSSParser.js";
import { VariableNameContext } from "./SCSSParser.js";
import { Namespace_Context } from "./SCSSParser.js";
import { PropertyDeclarationContext } from "./SCSSParser.js";
import { PrioContext } from "./SCSSParser.js";
import { PropertyValueContext } from "./SCSSParser.js";
import { MediaDeclarationContext } from "./SCSSParser.js";
import { MediaQueryListContext } from "./SCSSParser.js";
import { MediaQueryContext } from "./SCSSParser.js";
import { MediaExpressionContext } from "./SCSSParser.js";
import { MixinDeclarationContext } from "./SCSSParser.js";
import { ContentDeclarationContext } from "./SCSSParser.js";
import { FontFaceDeclarationContext } from "./SCSSParser.js";
import { KeyframesDeclarationContext } from "./SCSSParser.js";
import { KeyframesBlockContext } from "./SCSSParser.js";
import { PercentageStatementContext } from "./SCSSParser.js";
import { IncludeDeclarationContext } from "./SCSSParser.js";
import { InterpolationDeclarationContext } from "./SCSSParser.js";
import { ExtendDeclarationContext } from "./SCSSParser.js";
import { WarndingDeclarationContext } from "./SCSSParser.js";
import { ErrorDeclarationContext } from "./SCSSParser.js";
import { AtStatementDeclarationContext } from "./SCSSParser.js";
import { RulesetContext } from "./SCSSParser.js";
import { BlockContext } from "./SCSSParser.js";
import { SelectorGroupContext } from "./SCSSParser.js";
import { SelectorContext } from "./SCSSParser.js";
import { CombinatorContext } from "./SCSSParser.js";
import { SelectorSequenceContext } from "./SCSSParser.js";
import { IdContext } from "./SCSSParser.js";
import { TypeSelectorContext } from "./SCSSParser.js";
import { TypeNamespacePrefixContext } from "./SCSSParser.js";
import { UniversalContext } from "./SCSSParser.js";
import { ClassNameContext } from "./SCSSParser.js";
import { InterpolationContext } from "./SCSSParser.js";
import { ParentRefContext } from "./SCSSParser.js";
import { AttribContext } from "./SCSSParser.js";
import { PseudoContext } from "./SCSSParser.js";
import { FunctionalPseudoContext } from "./SCSSParser.js";
import { PseudoParameterContext } from "./SCSSParser.js";
import { NegationContext } from "./SCSSParser.js";
import { NegationArgContext } from "./SCSSParser.js";
import { Operator_Context } from "./SCSSParser.js";
import { ValueContext } from "./SCSSParser.js";
import { FunctionDeclarationContext } from "./SCSSParser.js";
import { ParametersContext } from "./SCSSParser.js";
import { ParameterContext } from "./SCSSParser.js";
import { FunctionBodyContext } from "./SCSSParser.js";
import { FunctionReturnContext } from "./SCSSParser.js";
import { FunctionStatementContext } from "./SCSSParser.js";
import { FunctionCallContext } from "./SCSSParser.js";
import { ExpressionContext } from "./SCSSParser.js";
import { ExpressionPartContext } from "./SCSSParser.js";
import { IfExpressionContext } from "./SCSSParser.js";
import { ListDeclarationContext } from "./SCSSParser.js";
import { ListCommaSeparatedContext } from "./SCSSParser.js";
import { ListSpaceSeparatedContext } from "./SCSSParser.js";
import { ListBracketedContext } from "./SCSSParser.js";
import { ListElementContext } from "./SCSSParser.js";
import { MapDeclarationContext } from "./SCSSParser.js";
import { MapEntriesContext } from "./SCSSParser.js";
import { MapEntryContext } from "./SCSSParser.js";
import { MapKeyContext } from "./SCSSParser.js";
import { MapValueContext } from "./SCSSParser.js";
import { IfDeclarationContext } from "./SCSSParser.js";
import { ElseIfStatementContext } from "./SCSSParser.js";
import { ElseStatementContext } from "./SCSSParser.js";
import { ForDeclarationContext } from "./SCSSParser.js";
import { ThroughContext } from "./SCSSParser.js";
import { WhileDeclarationContext } from "./SCSSParser.js";
import { EachDeclarationContext } from "./SCSSParser.js";
import { EachValueListContext } from "./SCSSParser.js";
import { Var_Context } from "./SCSSParser.js";
import { CalcContext } from "./SCSSParser.js";
import { RotateContext } from "./SCSSParser.js";
import { RgbaContext } from "./SCSSParser.js";
import { RepeatContext } from "./SCSSParser.js";
import { UnitContext } from "./SCSSParser.js";
import { LengthContext } from "./SCSSParser.js";
import { DimensionContext } from "./SCSSParser.js";
import { PercentageContext } from "./SCSSParser.js";
import { DegreeContext } from "./SCSSParser.js";
import { MeasurmentContext } from "./SCSSParser.js";
import { UriContext } from "./SCSSParser.js";
import { ArglistContext } from "./SCSSParser.js";
import { PlusMinusContext } from "./SCSSParser.js";
import { HexcolorContext } from "./SCSSParser.js";
import { ColorContext } from "./SCSSParser.js";
import { BooleanContext } from "./SCSSParser.js";
import { NumberContext } from "./SCSSParser.js";
import { IdentifierContext } from "./SCSSParser.js";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `SCSSParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export default class SCSSParserVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `SCSSParser.stylesheet`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStylesheet?: (ctx: StylesheetContext) => Result;
	/**
	 * Visit a parse tree produced by `SCSSParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;
	/**
	 * Visit a parse tree produced by `SCSSParser.importDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImportDeclaration?: (ctx: ImportDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `SCSSParser.importPath`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImportPath?: (ctx: ImportPathContext) => Result;
	/**
	 * Visit a parse tree produced by `SCSSParser.asClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAsClause?: (ctx: AsClauseContext) => Result;
	/**
	 * Visit a parse tree produced by `SCSSParser.withClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWithClause?: (ctx: WithClauseContext) => Result;
	/**
	 * Visit a parse tree produced by `SCSSParser.variableDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableDeclaration?: (ctx: VariableDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `SCSSParser.variableValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableValue?: (ctx: VariableValueContext) => Result;
	/**
	 * Visit a parse tree produced by `SCSSParser.variableName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableName?: (ctx: VariableNameContext) => Result;
	/**
	 * Visit a parse tree produced by `SCSSParser.namespace_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNamespace_?: (ctx: Namespace_Context) => Result;
	/**
	 * Visit a parse tree produced by `SCSSParser.propertyDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPropertyDeclaration?: (ctx: PropertyDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `SCSSParser.prio`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrio?: (ctx: PrioContext) => Result;
	/**
	 * Visit a parse tree produced by `SCSSParser.propertyValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPropertyValue?: (ctx: PropertyValueContext) => Result;
	/**
	 * Visit a parse tree produced by `SCSSParser.mediaDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMediaDeclaration?: (ctx: MediaDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `SCSSParser.mediaQueryList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMediaQueryList?: (ctx: MediaQueryListContext) => Result;
	/**
	 * Visit a parse tree produced by `SCSSParser.mediaQuery`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMediaQuery?: (ctx: MediaQueryContext) => Result;
	/**
	 * Visit a parse tree produced by `SCSSParser.mediaExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMediaExpression?: (ctx: MediaExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `SCSSParser.mixinDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMixinDeclaration?: (ctx: MixinDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `SCSSParser.contentDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitContentDeclaration?: (ctx: ContentDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `SCSSParser.fontFaceDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFontFaceDeclaration?: (ctx: FontFaceDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `SCSSParser.keyframesDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKeyframesDeclaration?: (ctx: KeyframesDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `SCSSParser.keyframesBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKeyframesBlock?: (ctx: KeyframesBlockContext) => Result;
	/**
	 * Visit a parse tree produced by `SCSSParser.percentageStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPercentageStatement?: (ctx: PercentageStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `SCSSParser.includeDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIncludeDeclaration?: (ctx: IncludeDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `SCSSParser.interpolationDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterpolationDeclaration?: (ctx: InterpolationDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `SCSSParser.extendDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExtendDeclaration?: (ctx: ExtendDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `SCSSParser.warndingDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWarndingDeclaration?: (ctx: WarndingDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `SCSSParser.errorDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitErrorDeclaration?: (ctx: ErrorDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `SCSSParser.atStatementDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAtStatementDeclaration?: (ctx: AtStatementDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `SCSSParser.ruleset`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRuleset?: (ctx: RulesetContext) => Result;
	/**
	 * Visit a parse tree produced by `SCSSParser.block`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlock?: (ctx: BlockContext) => Result;
	/**
	 * Visit a parse tree produced by `SCSSParser.selectorGroup`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelectorGroup?: (ctx: SelectorGroupContext) => Result;
	/**
	 * Visit a parse tree produced by `SCSSParser.selector`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelector?: (ctx: SelectorContext) => Result;
	/**
	 * Visit a parse tree produced by `SCSSParser.combinator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCombinator?: (ctx: CombinatorContext) => Result;
	/**
	 * Visit a parse tree produced by `SCSSParser.selectorSequence`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelectorSequence?: (ctx: SelectorSequenceContext) => Result;
	/**
	 * Visit a parse tree produced by `SCSSParser.id`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitId?: (ctx: IdContext) => Result;
	/**
	 * Visit a parse tree produced by `SCSSParser.typeSelector`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeSelector?: (ctx: TypeSelectorContext) => Result;
	/**
	 * Visit a parse tree produced by `SCSSParser.typeNamespacePrefix`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeNamespacePrefix?: (ctx: TypeNamespacePrefixContext) => Result;
	/**
	 * Visit a parse tree produced by `SCSSParser.universal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUniversal?: (ctx: UniversalContext) => Result;
	/**
	 * Visit a parse tree produced by `SCSSParser.className`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassName?: (ctx: ClassNameContext) => Result;
	/**
	 * Visit a parse tree produced by `SCSSParser.interpolation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterpolation?: (ctx: InterpolationContext) => Result;
	/**
	 * Visit a parse tree produced by `SCSSParser.parentRef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParentRef?: (ctx: ParentRefContext) => Result;
	/**
	 * Visit a parse tree produced by `SCSSParser.attrib`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttrib?: (ctx: AttribContext) => Result;
	/**
	 * Visit a parse tree produced by `SCSSParser.pseudo`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPseudo?: (ctx: PseudoContext) => Result;
	/**
	 * Visit a parse tree produced by `SCSSParser.functionalPseudo`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionalPseudo?: (ctx: FunctionalPseudoContext) => Result;
	/**
	 * Visit a parse tree produced by `SCSSParser.pseudoParameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPseudoParameter?: (ctx: PseudoParameterContext) => Result;
	/**
	 * Visit a parse tree produced by `SCSSParser.negation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNegation?: (ctx: NegationContext) => Result;
	/**
	 * Visit a parse tree produced by `SCSSParser.negationArg`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNegationArg?: (ctx: NegationArgContext) => Result;
	/**
	 * Visit a parse tree produced by `SCSSParser.operator_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOperator_?: (ctx: Operator_Context) => Result;
	/**
	 * Visit a parse tree produced by `SCSSParser.value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValue?: (ctx: ValueContext) => Result;
	/**
	 * Visit a parse tree produced by `SCSSParser.functionDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionDeclaration?: (ctx: FunctionDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `SCSSParser.parameters`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameters?: (ctx: ParametersContext) => Result;
	/**
	 * Visit a parse tree produced by `SCSSParser.parameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameter?: (ctx: ParameterContext) => Result;
	/**
	 * Visit a parse tree produced by `SCSSParser.functionBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionBody?: (ctx: FunctionBodyContext) => Result;
	/**
	 * Visit a parse tree produced by `SCSSParser.functionReturn`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionReturn?: (ctx: FunctionReturnContext) => Result;
	/**
	 * Visit a parse tree produced by `SCSSParser.functionStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionStatement?: (ctx: FunctionStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `SCSSParser.functionCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionCall?: (ctx: FunctionCallContext) => Result;
	/**
	 * Visit a parse tree produced by `SCSSParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `SCSSParser.expressionPart`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionPart?: (ctx: ExpressionPartContext) => Result;
	/**
	 * Visit a parse tree produced by `SCSSParser.ifExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfExpression?: (ctx: IfExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `SCSSParser.listDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitListDeclaration?: (ctx: ListDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `SCSSParser.listCommaSeparated`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitListCommaSeparated?: (ctx: ListCommaSeparatedContext) => Result;
	/**
	 * Visit a parse tree produced by `SCSSParser.listSpaceSeparated`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitListSpaceSeparated?: (ctx: ListSpaceSeparatedContext) => Result;
	/**
	 * Visit a parse tree produced by `SCSSParser.listBracketed`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitListBracketed?: (ctx: ListBracketedContext) => Result;
	/**
	 * Visit a parse tree produced by `SCSSParser.listElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitListElement?: (ctx: ListElementContext) => Result;
	/**
	 * Visit a parse tree produced by `SCSSParser.mapDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMapDeclaration?: (ctx: MapDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `SCSSParser.mapEntries`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMapEntries?: (ctx: MapEntriesContext) => Result;
	/**
	 * Visit a parse tree produced by `SCSSParser.mapEntry`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMapEntry?: (ctx: MapEntryContext) => Result;
	/**
	 * Visit a parse tree produced by `SCSSParser.mapKey`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMapKey?: (ctx: MapKeyContext) => Result;
	/**
	 * Visit a parse tree produced by `SCSSParser.mapValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMapValue?: (ctx: MapValueContext) => Result;
	/**
	 * Visit a parse tree produced by `SCSSParser.ifDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfDeclaration?: (ctx: IfDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `SCSSParser.elseIfStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElseIfStatement?: (ctx: ElseIfStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `SCSSParser.elseStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElseStatement?: (ctx: ElseStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `SCSSParser.forDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForDeclaration?: (ctx: ForDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `SCSSParser.through`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitThrough?: (ctx: ThroughContext) => Result;
	/**
	 * Visit a parse tree produced by `SCSSParser.whileDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhileDeclaration?: (ctx: WhileDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `SCSSParser.eachDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEachDeclaration?: (ctx: EachDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `SCSSParser.eachValueList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEachValueList?: (ctx: EachValueListContext) => Result;
	/**
	 * Visit a parse tree produced by `SCSSParser.var_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVar_?: (ctx: Var_Context) => Result;
	/**
	 * Visit a parse tree produced by `SCSSParser.calc`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCalc?: (ctx: CalcContext) => Result;
	/**
	 * Visit a parse tree produced by `SCSSParser.rotate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRotate?: (ctx: RotateContext) => Result;
	/**
	 * Visit a parse tree produced by `SCSSParser.rgba`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRgba?: (ctx: RgbaContext) => Result;
	/**
	 * Visit a parse tree produced by `SCSSParser.repeat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRepeat?: (ctx: RepeatContext) => Result;
	/**
	 * Visit a parse tree produced by `SCSSParser.unit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnit?: (ctx: UnitContext) => Result;
	/**
	 * Visit a parse tree produced by `SCSSParser.length`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLength?: (ctx: LengthContext) => Result;
	/**
	 * Visit a parse tree produced by `SCSSParser.dimension`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDimension?: (ctx: DimensionContext) => Result;
	/**
	 * Visit a parse tree produced by `SCSSParser.percentage`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPercentage?: (ctx: PercentageContext) => Result;
	/**
	 * Visit a parse tree produced by `SCSSParser.degree`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDegree?: (ctx: DegreeContext) => Result;
	/**
	 * Visit a parse tree produced by `SCSSParser.measurment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMeasurment?: (ctx: MeasurmentContext) => Result;
	/**
	 * Visit a parse tree produced by `SCSSParser.uri`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUri?: (ctx: UriContext) => Result;
	/**
	 * Visit a parse tree produced by `SCSSParser.arglist`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArglist?: (ctx: ArglistContext) => Result;
	/**
	 * Visit a parse tree produced by `SCSSParser.plusMinus`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPlusMinus?: (ctx: PlusMinusContext) => Result;
	/**
	 * Visit a parse tree produced by `SCSSParser.hexcolor`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHexcolor?: (ctx: HexcolorContext) => Result;
	/**
	 * Visit a parse tree produced by `SCSSParser.color`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColor?: (ctx: ColorContext) => Result;
	/**
	 * Visit a parse tree produced by `SCSSParser.boolean`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBoolean?: (ctx: BooleanContext) => Result;
	/**
	 * Visit a parse tree produced by `SCSSParser.number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumber?: (ctx: NumberContext) => Result;
	/**
	 * Visit a parse tree produced by `SCSSParser.identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifier?: (ctx: IdentifierContext) => Result;
}

