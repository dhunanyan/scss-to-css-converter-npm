// Generated from SCSSParser.g4 by ANTLR 4.13.2

import {ParseTreeListener} from "antlr4";


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
 * This interface defines a complete listener for a parse tree produced by
 * `SCSSParser`.
 */
export default class SCSSParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `SCSSParser.stylesheet`.
	 * @param ctx the parse tree
	 */
	enterStylesheet?: (ctx: StylesheetContext) => void;
	/**
	 * Exit a parse tree produced by `SCSSParser.stylesheet`.
	 * @param ctx the parse tree
	 */
	exitStylesheet?: (ctx: StylesheetContext) => void;
	/**
	 * Enter a parse tree produced by `SCSSParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `SCSSParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;
	/**
	 * Enter a parse tree produced by `SCSSParser.importDeclaration`.
	 * @param ctx the parse tree
	 */
	enterImportDeclaration?: (ctx: ImportDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `SCSSParser.importDeclaration`.
	 * @param ctx the parse tree
	 */
	exitImportDeclaration?: (ctx: ImportDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `SCSSParser.importPath`.
	 * @param ctx the parse tree
	 */
	enterImportPath?: (ctx: ImportPathContext) => void;
	/**
	 * Exit a parse tree produced by `SCSSParser.importPath`.
	 * @param ctx the parse tree
	 */
	exitImportPath?: (ctx: ImportPathContext) => void;
	/**
	 * Enter a parse tree produced by `SCSSParser.asClause`.
	 * @param ctx the parse tree
	 */
	enterAsClause?: (ctx: AsClauseContext) => void;
	/**
	 * Exit a parse tree produced by `SCSSParser.asClause`.
	 * @param ctx the parse tree
	 */
	exitAsClause?: (ctx: AsClauseContext) => void;
	/**
	 * Enter a parse tree produced by `SCSSParser.withClause`.
	 * @param ctx the parse tree
	 */
	enterWithClause?: (ctx: WithClauseContext) => void;
	/**
	 * Exit a parse tree produced by `SCSSParser.withClause`.
	 * @param ctx the parse tree
	 */
	exitWithClause?: (ctx: WithClauseContext) => void;
	/**
	 * Enter a parse tree produced by `SCSSParser.variableDeclaration`.
	 * @param ctx the parse tree
	 */
	enterVariableDeclaration?: (ctx: VariableDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `SCSSParser.variableDeclaration`.
	 * @param ctx the parse tree
	 */
	exitVariableDeclaration?: (ctx: VariableDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `SCSSParser.variableValue`.
	 * @param ctx the parse tree
	 */
	enterVariableValue?: (ctx: VariableValueContext) => void;
	/**
	 * Exit a parse tree produced by `SCSSParser.variableValue`.
	 * @param ctx the parse tree
	 */
	exitVariableValue?: (ctx: VariableValueContext) => void;
	/**
	 * Enter a parse tree produced by `SCSSParser.variableName`.
	 * @param ctx the parse tree
	 */
	enterVariableName?: (ctx: VariableNameContext) => void;
	/**
	 * Exit a parse tree produced by `SCSSParser.variableName`.
	 * @param ctx the parse tree
	 */
	exitVariableName?: (ctx: VariableNameContext) => void;
	/**
	 * Enter a parse tree produced by `SCSSParser.namespace_`.
	 * @param ctx the parse tree
	 */
	enterNamespace_?: (ctx: Namespace_Context) => void;
	/**
	 * Exit a parse tree produced by `SCSSParser.namespace_`.
	 * @param ctx the parse tree
	 */
	exitNamespace_?: (ctx: Namespace_Context) => void;
	/**
	 * Enter a parse tree produced by `SCSSParser.propertyDeclaration`.
	 * @param ctx the parse tree
	 */
	enterPropertyDeclaration?: (ctx: PropertyDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `SCSSParser.propertyDeclaration`.
	 * @param ctx the parse tree
	 */
	exitPropertyDeclaration?: (ctx: PropertyDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `SCSSParser.prio`.
	 * @param ctx the parse tree
	 */
	enterPrio?: (ctx: PrioContext) => void;
	/**
	 * Exit a parse tree produced by `SCSSParser.prio`.
	 * @param ctx the parse tree
	 */
	exitPrio?: (ctx: PrioContext) => void;
	/**
	 * Enter a parse tree produced by `SCSSParser.propertyValue`.
	 * @param ctx the parse tree
	 */
	enterPropertyValue?: (ctx: PropertyValueContext) => void;
	/**
	 * Exit a parse tree produced by `SCSSParser.propertyValue`.
	 * @param ctx the parse tree
	 */
	exitPropertyValue?: (ctx: PropertyValueContext) => void;
	/**
	 * Enter a parse tree produced by `SCSSParser.mediaDeclaration`.
	 * @param ctx the parse tree
	 */
	enterMediaDeclaration?: (ctx: MediaDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `SCSSParser.mediaDeclaration`.
	 * @param ctx the parse tree
	 */
	exitMediaDeclaration?: (ctx: MediaDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `SCSSParser.mediaQueryList`.
	 * @param ctx the parse tree
	 */
	enterMediaQueryList?: (ctx: MediaQueryListContext) => void;
	/**
	 * Exit a parse tree produced by `SCSSParser.mediaQueryList`.
	 * @param ctx the parse tree
	 */
	exitMediaQueryList?: (ctx: MediaQueryListContext) => void;
	/**
	 * Enter a parse tree produced by `SCSSParser.mediaQuery`.
	 * @param ctx the parse tree
	 */
	enterMediaQuery?: (ctx: MediaQueryContext) => void;
	/**
	 * Exit a parse tree produced by `SCSSParser.mediaQuery`.
	 * @param ctx the parse tree
	 */
	exitMediaQuery?: (ctx: MediaQueryContext) => void;
	/**
	 * Enter a parse tree produced by `SCSSParser.mediaExpression`.
	 * @param ctx the parse tree
	 */
	enterMediaExpression?: (ctx: MediaExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `SCSSParser.mediaExpression`.
	 * @param ctx the parse tree
	 */
	exitMediaExpression?: (ctx: MediaExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `SCSSParser.mixinDeclaration`.
	 * @param ctx the parse tree
	 */
	enterMixinDeclaration?: (ctx: MixinDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `SCSSParser.mixinDeclaration`.
	 * @param ctx the parse tree
	 */
	exitMixinDeclaration?: (ctx: MixinDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `SCSSParser.contentDeclaration`.
	 * @param ctx the parse tree
	 */
	enterContentDeclaration?: (ctx: ContentDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `SCSSParser.contentDeclaration`.
	 * @param ctx the parse tree
	 */
	exitContentDeclaration?: (ctx: ContentDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `SCSSParser.fontFaceDeclaration`.
	 * @param ctx the parse tree
	 */
	enterFontFaceDeclaration?: (ctx: FontFaceDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `SCSSParser.fontFaceDeclaration`.
	 * @param ctx the parse tree
	 */
	exitFontFaceDeclaration?: (ctx: FontFaceDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `SCSSParser.keyframesDeclaration`.
	 * @param ctx the parse tree
	 */
	enterKeyframesDeclaration?: (ctx: KeyframesDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `SCSSParser.keyframesDeclaration`.
	 * @param ctx the parse tree
	 */
	exitKeyframesDeclaration?: (ctx: KeyframesDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `SCSSParser.keyframesBlock`.
	 * @param ctx the parse tree
	 */
	enterKeyframesBlock?: (ctx: KeyframesBlockContext) => void;
	/**
	 * Exit a parse tree produced by `SCSSParser.keyframesBlock`.
	 * @param ctx the parse tree
	 */
	exitKeyframesBlock?: (ctx: KeyframesBlockContext) => void;
	/**
	 * Enter a parse tree produced by `SCSSParser.percentageStatement`.
	 * @param ctx the parse tree
	 */
	enterPercentageStatement?: (ctx: PercentageStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SCSSParser.percentageStatement`.
	 * @param ctx the parse tree
	 */
	exitPercentageStatement?: (ctx: PercentageStatementContext) => void;
	/**
	 * Enter a parse tree produced by `SCSSParser.includeDeclaration`.
	 * @param ctx the parse tree
	 */
	enterIncludeDeclaration?: (ctx: IncludeDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `SCSSParser.includeDeclaration`.
	 * @param ctx the parse tree
	 */
	exitIncludeDeclaration?: (ctx: IncludeDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `SCSSParser.interpolationDeclaration`.
	 * @param ctx the parse tree
	 */
	enterInterpolationDeclaration?: (ctx: InterpolationDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `SCSSParser.interpolationDeclaration`.
	 * @param ctx the parse tree
	 */
	exitInterpolationDeclaration?: (ctx: InterpolationDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `SCSSParser.extendDeclaration`.
	 * @param ctx the parse tree
	 */
	enterExtendDeclaration?: (ctx: ExtendDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `SCSSParser.extendDeclaration`.
	 * @param ctx the parse tree
	 */
	exitExtendDeclaration?: (ctx: ExtendDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `SCSSParser.warndingDeclaration`.
	 * @param ctx the parse tree
	 */
	enterWarndingDeclaration?: (ctx: WarndingDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `SCSSParser.warndingDeclaration`.
	 * @param ctx the parse tree
	 */
	exitWarndingDeclaration?: (ctx: WarndingDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `SCSSParser.errorDeclaration`.
	 * @param ctx the parse tree
	 */
	enterErrorDeclaration?: (ctx: ErrorDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `SCSSParser.errorDeclaration`.
	 * @param ctx the parse tree
	 */
	exitErrorDeclaration?: (ctx: ErrorDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `SCSSParser.atStatementDeclaration`.
	 * @param ctx the parse tree
	 */
	enterAtStatementDeclaration?: (ctx: AtStatementDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `SCSSParser.atStatementDeclaration`.
	 * @param ctx the parse tree
	 */
	exitAtStatementDeclaration?: (ctx: AtStatementDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `SCSSParser.ruleset`.
	 * @param ctx the parse tree
	 */
	enterRuleset?: (ctx: RulesetContext) => void;
	/**
	 * Exit a parse tree produced by `SCSSParser.ruleset`.
	 * @param ctx the parse tree
	 */
	exitRuleset?: (ctx: RulesetContext) => void;
	/**
	 * Enter a parse tree produced by `SCSSParser.block`.
	 * @param ctx the parse tree
	 */
	enterBlock?: (ctx: BlockContext) => void;
	/**
	 * Exit a parse tree produced by `SCSSParser.block`.
	 * @param ctx the parse tree
	 */
	exitBlock?: (ctx: BlockContext) => void;
	/**
	 * Enter a parse tree produced by `SCSSParser.selectorGroup`.
	 * @param ctx the parse tree
	 */
	enterSelectorGroup?: (ctx: SelectorGroupContext) => void;
	/**
	 * Exit a parse tree produced by `SCSSParser.selectorGroup`.
	 * @param ctx the parse tree
	 */
	exitSelectorGroup?: (ctx: SelectorGroupContext) => void;
	/**
	 * Enter a parse tree produced by `SCSSParser.selector`.
	 * @param ctx the parse tree
	 */
	enterSelector?: (ctx: SelectorContext) => void;
	/**
	 * Exit a parse tree produced by `SCSSParser.selector`.
	 * @param ctx the parse tree
	 */
	exitSelector?: (ctx: SelectorContext) => void;
	/**
	 * Enter a parse tree produced by `SCSSParser.combinator`.
	 * @param ctx the parse tree
	 */
	enterCombinator?: (ctx: CombinatorContext) => void;
	/**
	 * Exit a parse tree produced by `SCSSParser.combinator`.
	 * @param ctx the parse tree
	 */
	exitCombinator?: (ctx: CombinatorContext) => void;
	/**
	 * Enter a parse tree produced by `SCSSParser.selectorSequence`.
	 * @param ctx the parse tree
	 */
	enterSelectorSequence?: (ctx: SelectorSequenceContext) => void;
	/**
	 * Exit a parse tree produced by `SCSSParser.selectorSequence`.
	 * @param ctx the parse tree
	 */
	exitSelectorSequence?: (ctx: SelectorSequenceContext) => void;
	/**
	 * Enter a parse tree produced by `SCSSParser.id`.
	 * @param ctx the parse tree
	 */
	enterId?: (ctx: IdContext) => void;
	/**
	 * Exit a parse tree produced by `SCSSParser.id`.
	 * @param ctx the parse tree
	 */
	exitId?: (ctx: IdContext) => void;
	/**
	 * Enter a parse tree produced by `SCSSParser.typeSelector`.
	 * @param ctx the parse tree
	 */
	enterTypeSelector?: (ctx: TypeSelectorContext) => void;
	/**
	 * Exit a parse tree produced by `SCSSParser.typeSelector`.
	 * @param ctx the parse tree
	 */
	exitTypeSelector?: (ctx: TypeSelectorContext) => void;
	/**
	 * Enter a parse tree produced by `SCSSParser.typeNamespacePrefix`.
	 * @param ctx the parse tree
	 */
	enterTypeNamespacePrefix?: (ctx: TypeNamespacePrefixContext) => void;
	/**
	 * Exit a parse tree produced by `SCSSParser.typeNamespacePrefix`.
	 * @param ctx the parse tree
	 */
	exitTypeNamespacePrefix?: (ctx: TypeNamespacePrefixContext) => void;
	/**
	 * Enter a parse tree produced by `SCSSParser.universal`.
	 * @param ctx the parse tree
	 */
	enterUniversal?: (ctx: UniversalContext) => void;
	/**
	 * Exit a parse tree produced by `SCSSParser.universal`.
	 * @param ctx the parse tree
	 */
	exitUniversal?: (ctx: UniversalContext) => void;
	/**
	 * Enter a parse tree produced by `SCSSParser.className`.
	 * @param ctx the parse tree
	 */
	enterClassName?: (ctx: ClassNameContext) => void;
	/**
	 * Exit a parse tree produced by `SCSSParser.className`.
	 * @param ctx the parse tree
	 */
	exitClassName?: (ctx: ClassNameContext) => void;
	/**
	 * Enter a parse tree produced by `SCSSParser.interpolation`.
	 * @param ctx the parse tree
	 */
	enterInterpolation?: (ctx: InterpolationContext) => void;
	/**
	 * Exit a parse tree produced by `SCSSParser.interpolation`.
	 * @param ctx the parse tree
	 */
	exitInterpolation?: (ctx: InterpolationContext) => void;
	/**
	 * Enter a parse tree produced by `SCSSParser.parentRef`.
	 * @param ctx the parse tree
	 */
	enterParentRef?: (ctx: ParentRefContext) => void;
	/**
	 * Exit a parse tree produced by `SCSSParser.parentRef`.
	 * @param ctx the parse tree
	 */
	exitParentRef?: (ctx: ParentRefContext) => void;
	/**
	 * Enter a parse tree produced by `SCSSParser.attrib`.
	 * @param ctx the parse tree
	 */
	enterAttrib?: (ctx: AttribContext) => void;
	/**
	 * Exit a parse tree produced by `SCSSParser.attrib`.
	 * @param ctx the parse tree
	 */
	exitAttrib?: (ctx: AttribContext) => void;
	/**
	 * Enter a parse tree produced by `SCSSParser.pseudo`.
	 * @param ctx the parse tree
	 */
	enterPseudo?: (ctx: PseudoContext) => void;
	/**
	 * Exit a parse tree produced by `SCSSParser.pseudo`.
	 * @param ctx the parse tree
	 */
	exitPseudo?: (ctx: PseudoContext) => void;
	/**
	 * Enter a parse tree produced by `SCSSParser.functionalPseudo`.
	 * @param ctx the parse tree
	 */
	enterFunctionalPseudo?: (ctx: FunctionalPseudoContext) => void;
	/**
	 * Exit a parse tree produced by `SCSSParser.functionalPseudo`.
	 * @param ctx the parse tree
	 */
	exitFunctionalPseudo?: (ctx: FunctionalPseudoContext) => void;
	/**
	 * Enter a parse tree produced by `SCSSParser.pseudoParameter`.
	 * @param ctx the parse tree
	 */
	enterPseudoParameter?: (ctx: PseudoParameterContext) => void;
	/**
	 * Exit a parse tree produced by `SCSSParser.pseudoParameter`.
	 * @param ctx the parse tree
	 */
	exitPseudoParameter?: (ctx: PseudoParameterContext) => void;
	/**
	 * Enter a parse tree produced by `SCSSParser.negation`.
	 * @param ctx the parse tree
	 */
	enterNegation?: (ctx: NegationContext) => void;
	/**
	 * Exit a parse tree produced by `SCSSParser.negation`.
	 * @param ctx the parse tree
	 */
	exitNegation?: (ctx: NegationContext) => void;
	/**
	 * Enter a parse tree produced by `SCSSParser.negationArg`.
	 * @param ctx the parse tree
	 */
	enterNegationArg?: (ctx: NegationArgContext) => void;
	/**
	 * Exit a parse tree produced by `SCSSParser.negationArg`.
	 * @param ctx the parse tree
	 */
	exitNegationArg?: (ctx: NegationArgContext) => void;
	/**
	 * Enter a parse tree produced by `SCSSParser.operator_`.
	 * @param ctx the parse tree
	 */
	enterOperator_?: (ctx: Operator_Context) => void;
	/**
	 * Exit a parse tree produced by `SCSSParser.operator_`.
	 * @param ctx the parse tree
	 */
	exitOperator_?: (ctx: Operator_Context) => void;
	/**
	 * Enter a parse tree produced by `SCSSParser.value`.
	 * @param ctx the parse tree
	 */
	enterValue?: (ctx: ValueContext) => void;
	/**
	 * Exit a parse tree produced by `SCSSParser.value`.
	 * @param ctx the parse tree
	 */
	exitValue?: (ctx: ValueContext) => void;
	/**
	 * Enter a parse tree produced by `SCSSParser.functionDeclaration`.
	 * @param ctx the parse tree
	 */
	enterFunctionDeclaration?: (ctx: FunctionDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `SCSSParser.functionDeclaration`.
	 * @param ctx the parse tree
	 */
	exitFunctionDeclaration?: (ctx: FunctionDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `SCSSParser.parameters`.
	 * @param ctx the parse tree
	 */
	enterParameters?: (ctx: ParametersContext) => void;
	/**
	 * Exit a parse tree produced by `SCSSParser.parameters`.
	 * @param ctx the parse tree
	 */
	exitParameters?: (ctx: ParametersContext) => void;
	/**
	 * Enter a parse tree produced by `SCSSParser.parameter`.
	 * @param ctx the parse tree
	 */
	enterParameter?: (ctx: ParameterContext) => void;
	/**
	 * Exit a parse tree produced by `SCSSParser.parameter`.
	 * @param ctx the parse tree
	 */
	exitParameter?: (ctx: ParameterContext) => void;
	/**
	 * Enter a parse tree produced by `SCSSParser.functionBody`.
	 * @param ctx the parse tree
	 */
	enterFunctionBody?: (ctx: FunctionBodyContext) => void;
	/**
	 * Exit a parse tree produced by `SCSSParser.functionBody`.
	 * @param ctx the parse tree
	 */
	exitFunctionBody?: (ctx: FunctionBodyContext) => void;
	/**
	 * Enter a parse tree produced by `SCSSParser.functionReturn`.
	 * @param ctx the parse tree
	 */
	enterFunctionReturn?: (ctx: FunctionReturnContext) => void;
	/**
	 * Exit a parse tree produced by `SCSSParser.functionReturn`.
	 * @param ctx the parse tree
	 */
	exitFunctionReturn?: (ctx: FunctionReturnContext) => void;
	/**
	 * Enter a parse tree produced by `SCSSParser.functionStatement`.
	 * @param ctx the parse tree
	 */
	enterFunctionStatement?: (ctx: FunctionStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SCSSParser.functionStatement`.
	 * @param ctx the parse tree
	 */
	exitFunctionStatement?: (ctx: FunctionStatementContext) => void;
	/**
	 * Enter a parse tree produced by `SCSSParser.functionCall`.
	 * @param ctx the parse tree
	 */
	enterFunctionCall?: (ctx: FunctionCallContext) => void;
	/**
	 * Exit a parse tree produced by `SCSSParser.functionCall`.
	 * @param ctx the parse tree
	 */
	exitFunctionCall?: (ctx: FunctionCallContext) => void;
	/**
	 * Enter a parse tree produced by `SCSSParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `SCSSParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `SCSSParser.expressionPart`.
	 * @param ctx the parse tree
	 */
	enterExpressionPart?: (ctx: ExpressionPartContext) => void;
	/**
	 * Exit a parse tree produced by `SCSSParser.expressionPart`.
	 * @param ctx the parse tree
	 */
	exitExpressionPart?: (ctx: ExpressionPartContext) => void;
	/**
	 * Enter a parse tree produced by `SCSSParser.ifExpression`.
	 * @param ctx the parse tree
	 */
	enterIfExpression?: (ctx: IfExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `SCSSParser.ifExpression`.
	 * @param ctx the parse tree
	 */
	exitIfExpression?: (ctx: IfExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `SCSSParser.listDeclaration`.
	 * @param ctx the parse tree
	 */
	enterListDeclaration?: (ctx: ListDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `SCSSParser.listDeclaration`.
	 * @param ctx the parse tree
	 */
	exitListDeclaration?: (ctx: ListDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `SCSSParser.listCommaSeparated`.
	 * @param ctx the parse tree
	 */
	enterListCommaSeparated?: (ctx: ListCommaSeparatedContext) => void;
	/**
	 * Exit a parse tree produced by `SCSSParser.listCommaSeparated`.
	 * @param ctx the parse tree
	 */
	exitListCommaSeparated?: (ctx: ListCommaSeparatedContext) => void;
	/**
	 * Enter a parse tree produced by `SCSSParser.listSpaceSeparated`.
	 * @param ctx the parse tree
	 */
	enterListSpaceSeparated?: (ctx: ListSpaceSeparatedContext) => void;
	/**
	 * Exit a parse tree produced by `SCSSParser.listSpaceSeparated`.
	 * @param ctx the parse tree
	 */
	exitListSpaceSeparated?: (ctx: ListSpaceSeparatedContext) => void;
	/**
	 * Enter a parse tree produced by `SCSSParser.listBracketed`.
	 * @param ctx the parse tree
	 */
	enterListBracketed?: (ctx: ListBracketedContext) => void;
	/**
	 * Exit a parse tree produced by `SCSSParser.listBracketed`.
	 * @param ctx the parse tree
	 */
	exitListBracketed?: (ctx: ListBracketedContext) => void;
	/**
	 * Enter a parse tree produced by `SCSSParser.listElement`.
	 * @param ctx the parse tree
	 */
	enterListElement?: (ctx: ListElementContext) => void;
	/**
	 * Exit a parse tree produced by `SCSSParser.listElement`.
	 * @param ctx the parse tree
	 */
	exitListElement?: (ctx: ListElementContext) => void;
	/**
	 * Enter a parse tree produced by `SCSSParser.mapDeclaration`.
	 * @param ctx the parse tree
	 */
	enterMapDeclaration?: (ctx: MapDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `SCSSParser.mapDeclaration`.
	 * @param ctx the parse tree
	 */
	exitMapDeclaration?: (ctx: MapDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `SCSSParser.mapEntries`.
	 * @param ctx the parse tree
	 */
	enterMapEntries?: (ctx: MapEntriesContext) => void;
	/**
	 * Exit a parse tree produced by `SCSSParser.mapEntries`.
	 * @param ctx the parse tree
	 */
	exitMapEntries?: (ctx: MapEntriesContext) => void;
	/**
	 * Enter a parse tree produced by `SCSSParser.mapEntry`.
	 * @param ctx the parse tree
	 */
	enterMapEntry?: (ctx: MapEntryContext) => void;
	/**
	 * Exit a parse tree produced by `SCSSParser.mapEntry`.
	 * @param ctx the parse tree
	 */
	exitMapEntry?: (ctx: MapEntryContext) => void;
	/**
	 * Enter a parse tree produced by `SCSSParser.mapKey`.
	 * @param ctx the parse tree
	 */
	enterMapKey?: (ctx: MapKeyContext) => void;
	/**
	 * Exit a parse tree produced by `SCSSParser.mapKey`.
	 * @param ctx the parse tree
	 */
	exitMapKey?: (ctx: MapKeyContext) => void;
	/**
	 * Enter a parse tree produced by `SCSSParser.mapValue`.
	 * @param ctx the parse tree
	 */
	enterMapValue?: (ctx: MapValueContext) => void;
	/**
	 * Exit a parse tree produced by `SCSSParser.mapValue`.
	 * @param ctx the parse tree
	 */
	exitMapValue?: (ctx: MapValueContext) => void;
	/**
	 * Enter a parse tree produced by `SCSSParser.ifDeclaration`.
	 * @param ctx the parse tree
	 */
	enterIfDeclaration?: (ctx: IfDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `SCSSParser.ifDeclaration`.
	 * @param ctx the parse tree
	 */
	exitIfDeclaration?: (ctx: IfDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `SCSSParser.elseIfStatement`.
	 * @param ctx the parse tree
	 */
	enterElseIfStatement?: (ctx: ElseIfStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SCSSParser.elseIfStatement`.
	 * @param ctx the parse tree
	 */
	exitElseIfStatement?: (ctx: ElseIfStatementContext) => void;
	/**
	 * Enter a parse tree produced by `SCSSParser.elseStatement`.
	 * @param ctx the parse tree
	 */
	enterElseStatement?: (ctx: ElseStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SCSSParser.elseStatement`.
	 * @param ctx the parse tree
	 */
	exitElseStatement?: (ctx: ElseStatementContext) => void;
	/**
	 * Enter a parse tree produced by `SCSSParser.forDeclaration`.
	 * @param ctx the parse tree
	 */
	enterForDeclaration?: (ctx: ForDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `SCSSParser.forDeclaration`.
	 * @param ctx the parse tree
	 */
	exitForDeclaration?: (ctx: ForDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `SCSSParser.through`.
	 * @param ctx the parse tree
	 */
	enterThrough?: (ctx: ThroughContext) => void;
	/**
	 * Exit a parse tree produced by `SCSSParser.through`.
	 * @param ctx the parse tree
	 */
	exitThrough?: (ctx: ThroughContext) => void;
	/**
	 * Enter a parse tree produced by `SCSSParser.whileDeclaration`.
	 * @param ctx the parse tree
	 */
	enterWhileDeclaration?: (ctx: WhileDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `SCSSParser.whileDeclaration`.
	 * @param ctx the parse tree
	 */
	exitWhileDeclaration?: (ctx: WhileDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `SCSSParser.eachDeclaration`.
	 * @param ctx the parse tree
	 */
	enterEachDeclaration?: (ctx: EachDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `SCSSParser.eachDeclaration`.
	 * @param ctx the parse tree
	 */
	exitEachDeclaration?: (ctx: EachDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `SCSSParser.eachValueList`.
	 * @param ctx the parse tree
	 */
	enterEachValueList?: (ctx: EachValueListContext) => void;
	/**
	 * Exit a parse tree produced by `SCSSParser.eachValueList`.
	 * @param ctx the parse tree
	 */
	exitEachValueList?: (ctx: EachValueListContext) => void;
	/**
	 * Enter a parse tree produced by `SCSSParser.var_`.
	 * @param ctx the parse tree
	 */
	enterVar_?: (ctx: Var_Context) => void;
	/**
	 * Exit a parse tree produced by `SCSSParser.var_`.
	 * @param ctx the parse tree
	 */
	exitVar_?: (ctx: Var_Context) => void;
	/**
	 * Enter a parse tree produced by `SCSSParser.calc`.
	 * @param ctx the parse tree
	 */
	enterCalc?: (ctx: CalcContext) => void;
	/**
	 * Exit a parse tree produced by `SCSSParser.calc`.
	 * @param ctx the parse tree
	 */
	exitCalc?: (ctx: CalcContext) => void;
	/**
	 * Enter a parse tree produced by `SCSSParser.rotate`.
	 * @param ctx the parse tree
	 */
	enterRotate?: (ctx: RotateContext) => void;
	/**
	 * Exit a parse tree produced by `SCSSParser.rotate`.
	 * @param ctx the parse tree
	 */
	exitRotate?: (ctx: RotateContext) => void;
	/**
	 * Enter a parse tree produced by `SCSSParser.rgba`.
	 * @param ctx the parse tree
	 */
	enterRgba?: (ctx: RgbaContext) => void;
	/**
	 * Exit a parse tree produced by `SCSSParser.rgba`.
	 * @param ctx the parse tree
	 */
	exitRgba?: (ctx: RgbaContext) => void;
	/**
	 * Enter a parse tree produced by `SCSSParser.repeat`.
	 * @param ctx the parse tree
	 */
	enterRepeat?: (ctx: RepeatContext) => void;
	/**
	 * Exit a parse tree produced by `SCSSParser.repeat`.
	 * @param ctx the parse tree
	 */
	exitRepeat?: (ctx: RepeatContext) => void;
	/**
	 * Enter a parse tree produced by `SCSSParser.unit`.
	 * @param ctx the parse tree
	 */
	enterUnit?: (ctx: UnitContext) => void;
	/**
	 * Exit a parse tree produced by `SCSSParser.unit`.
	 * @param ctx the parse tree
	 */
	exitUnit?: (ctx: UnitContext) => void;
	/**
	 * Enter a parse tree produced by `SCSSParser.length`.
	 * @param ctx the parse tree
	 */
	enterLength?: (ctx: LengthContext) => void;
	/**
	 * Exit a parse tree produced by `SCSSParser.length`.
	 * @param ctx the parse tree
	 */
	exitLength?: (ctx: LengthContext) => void;
	/**
	 * Enter a parse tree produced by `SCSSParser.dimension`.
	 * @param ctx the parse tree
	 */
	enterDimension?: (ctx: DimensionContext) => void;
	/**
	 * Exit a parse tree produced by `SCSSParser.dimension`.
	 * @param ctx the parse tree
	 */
	exitDimension?: (ctx: DimensionContext) => void;
	/**
	 * Enter a parse tree produced by `SCSSParser.percentage`.
	 * @param ctx the parse tree
	 */
	enterPercentage?: (ctx: PercentageContext) => void;
	/**
	 * Exit a parse tree produced by `SCSSParser.percentage`.
	 * @param ctx the parse tree
	 */
	exitPercentage?: (ctx: PercentageContext) => void;
	/**
	 * Enter a parse tree produced by `SCSSParser.degree`.
	 * @param ctx the parse tree
	 */
	enterDegree?: (ctx: DegreeContext) => void;
	/**
	 * Exit a parse tree produced by `SCSSParser.degree`.
	 * @param ctx the parse tree
	 */
	exitDegree?: (ctx: DegreeContext) => void;
	/**
	 * Enter a parse tree produced by `SCSSParser.measurment`.
	 * @param ctx the parse tree
	 */
	enterMeasurment?: (ctx: MeasurmentContext) => void;
	/**
	 * Exit a parse tree produced by `SCSSParser.measurment`.
	 * @param ctx the parse tree
	 */
	exitMeasurment?: (ctx: MeasurmentContext) => void;
	/**
	 * Enter a parse tree produced by `SCSSParser.uri`.
	 * @param ctx the parse tree
	 */
	enterUri?: (ctx: UriContext) => void;
	/**
	 * Exit a parse tree produced by `SCSSParser.uri`.
	 * @param ctx the parse tree
	 */
	exitUri?: (ctx: UriContext) => void;
	/**
	 * Enter a parse tree produced by `SCSSParser.arglist`.
	 * @param ctx the parse tree
	 */
	enterArglist?: (ctx: ArglistContext) => void;
	/**
	 * Exit a parse tree produced by `SCSSParser.arglist`.
	 * @param ctx the parse tree
	 */
	exitArglist?: (ctx: ArglistContext) => void;
	/**
	 * Enter a parse tree produced by `SCSSParser.plusMinus`.
	 * @param ctx the parse tree
	 */
	enterPlusMinus?: (ctx: PlusMinusContext) => void;
	/**
	 * Exit a parse tree produced by `SCSSParser.plusMinus`.
	 * @param ctx the parse tree
	 */
	exitPlusMinus?: (ctx: PlusMinusContext) => void;
	/**
	 * Enter a parse tree produced by `SCSSParser.hexcolor`.
	 * @param ctx the parse tree
	 */
	enterHexcolor?: (ctx: HexcolorContext) => void;
	/**
	 * Exit a parse tree produced by `SCSSParser.hexcolor`.
	 * @param ctx the parse tree
	 */
	exitHexcolor?: (ctx: HexcolorContext) => void;
	/**
	 * Enter a parse tree produced by `SCSSParser.color`.
	 * @param ctx the parse tree
	 */
	enterColor?: (ctx: ColorContext) => void;
	/**
	 * Exit a parse tree produced by `SCSSParser.color`.
	 * @param ctx the parse tree
	 */
	exitColor?: (ctx: ColorContext) => void;
	/**
	 * Enter a parse tree produced by `SCSSParser.boolean`.
	 * @param ctx the parse tree
	 */
	enterBoolean?: (ctx: BooleanContext) => void;
	/**
	 * Exit a parse tree produced by `SCSSParser.boolean`.
	 * @param ctx the parse tree
	 */
	exitBoolean?: (ctx: BooleanContext) => void;
	/**
	 * Enter a parse tree produced by `SCSSParser.number`.
	 * @param ctx the parse tree
	 */
	enterNumber?: (ctx: NumberContext) => void;
	/**
	 * Exit a parse tree produced by `SCSSParser.number`.
	 * @param ctx the parse tree
	 */
	exitNumber?: (ctx: NumberContext) => void;
	/**
	 * Enter a parse tree produced by `SCSSParser.identifier`.
	 * @param ctx the parse tree
	 */
	enterIdentifier?: (ctx: IdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `SCSSParser.identifier`.
	 * @param ctx the parse tree
	 */
	exitIdentifier?: (ctx: IdentifierContext) => void;
}

