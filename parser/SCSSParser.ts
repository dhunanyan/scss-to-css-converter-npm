// Generated from SCSSParser.g4 by ANTLR 4.13.2
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

import {
	ATN,
	ATNDeserializer, DecisionState, DFA, FailedPredicateException,
	RecognitionException, NoViableAltException, BailErrorStrategy,
	Parser, ParserATNSimulator,
	RuleContext, ParserRuleContext, PredictionMode, PredictionContextCache,
	TerminalNode, RuleNode,
	Token, TokenStream,
	Interval, IntervalSet
} from 'antlr4';
import SCSSParserListener from "./SCSSParserListener.js";
import SCSSParserVisitor from "./SCSSParserVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class SCSSParser extends Parser {
	public static readonly Comment = 1;
	public static readonly MultiLineComment = 2;
	public static readonly LineComment = 3;
	public static readonly Space = 4;
	public static readonly Uri = 5;
	public static readonly Format = 6;
	public static readonly AbsLength = 7;
	public static readonly FontRelative = 8;
	public static readonly ViewportRelative = 9;
	public static readonly Angle = 10;
	public static readonly Resolution = 11;
	public static readonly Freq = 12;
	public static readonly Time = 13;
	public static readonly Percentage = 14;
	public static readonly Import = 15;
	public static readonly Include = 16;
	public static readonly Use = 17;
	public static readonly Require = 18;
	public static readonly Charset = 19;
	public static readonly Mixin = 20;
	public static readonly Function = 21;
	public static readonly FontFace = 22;
	public static readonly Forward = 23;
	public static readonly Content = 24;
	public static readonly Keyframes = 25;
	public static readonly Return = 26;
	public static readonly Media = 27;
	public static readonly Extend = 28;
	public static readonly Warn = 29;
	public static readonly Error = 30;
	public static readonly If = 31;
	public static readonly AtIf = 32;
	public static readonly AtFor = 33;
	public static readonly AtElse = 34;
	public static readonly AtWhile = 35;
	public static readonly AtEach = 36;
	public static readonly From = 37;
	public static readonly To = 38;
	public static readonly Through = 39;
	public static readonly Only = 40;
	public static readonly Not = 41;
	public static readonly And = 42;
	public static readonly Using = 43;
	public static readonly As = 44;
	public static readonly With = 45;
	public static readonly Or = 46;
	public static readonly In = 47;
	public static readonly Default = 48;
	public static readonly Important = 49;
	public static readonly Lparen = 50;
	public static readonly Rparen = 51;
	public static readonly Lbrack = 52;
	public static readonly Rbrack = 53;
	public static readonly BlockStart = 54;
	public static readonly BlockEnd = 55;
	public static readonly Dot = 56;
	public static readonly Comma = 57;
	public static readonly Colon = 58;
	public static readonly Semi = 59;
	public static readonly Tilde = 60;
	public static readonly Under = 61;
	public static readonly Dollar = 62;
	public static readonly At = 63;
	public static readonly Amp = 64;
	public static readonly Hash = 65;
	public static readonly True = 66;
	public static readonly False = 67;
	public static readonly Plus = 68;
	public static readonly Div = 69;
	public static readonly Minus = 70;
	public static readonly Times = 71;
	public static readonly Eq = 72;
	public static readonly NotEq = 73;
	public static readonly Greater = 74;
	public static readonly Less = 75;
	public static readonly Includes = 76;
	public static readonly DashMatch = 77;
	public static readonly Pipe = 78;
	public static readonly Cdo = 79;
	public static readonly Cdc = 80;
	public static readonly PseudoNot = 81;
	public static readonly Calc = 82;
	public static readonly Rotate = 83;
	public static readonly Var = 84;
	public static readonly Rgba = 85;
	public static readonly Repeat = 86;
	public static readonly PrefixMatch = 87;
	public static readonly SuffixMatch = 88;
	public static readonly SubstringMatch = 89;
	public static readonly VendorPrefix = 90;
	public static readonly Variable = 91;
	public static readonly Number = 92;
	public static readonly String_ = 93;
	public static readonly Ident = 94;
	public static override readonly EOF = Token.EOF;
	public static readonly RULE_stylesheet = 0;
	public static readonly RULE_statement = 1;
	public static readonly RULE_importDeclaration = 2;
	public static readonly RULE_importPath = 3;
	public static readonly RULE_asClause = 4;
	public static readonly RULE_withClause = 5;
	public static readonly RULE_variableDeclaration = 6;
	public static readonly RULE_variableValue = 7;
	public static readonly RULE_variableName = 8;
	public static readonly RULE_namespace_ = 9;
	public static readonly RULE_propertyDeclaration = 10;
	public static readonly RULE_prio = 11;
	public static readonly RULE_propertyValue = 12;
	public static readonly RULE_mediaDeclaration = 13;
	public static readonly RULE_mediaQueryList = 14;
	public static readonly RULE_mediaQuery = 15;
	public static readonly RULE_mediaExpression = 16;
	public static readonly RULE_mixinDeclaration = 17;
	public static readonly RULE_contentDeclaration = 18;
	public static readonly RULE_fontFaceDeclaration = 19;
	public static readonly RULE_keyframesDeclaration = 20;
	public static readonly RULE_keyframesBlock = 21;
	public static readonly RULE_percentageStatement = 22;
	public static readonly RULE_includeDeclaration = 23;
	public static readonly RULE_interpolationDeclaration = 24;
	public static readonly RULE_extendDeclaration = 25;
	public static readonly RULE_warndingDeclaration = 26;
	public static readonly RULE_errorDeclaration = 27;
	public static readonly RULE_atStatementDeclaration = 28;
	public static readonly RULE_ruleset = 29;
	public static readonly RULE_block = 30;
	public static readonly RULE_selectorGroup = 31;
	public static readonly RULE_selector = 32;
	public static readonly RULE_combinator = 33;
	public static readonly RULE_selectorSequence = 34;
	public static readonly RULE_id = 35;
	public static readonly RULE_typeSelector = 36;
	public static readonly RULE_typeNamespacePrefix = 37;
	public static readonly RULE_universal = 38;
	public static readonly RULE_className = 39;
	public static readonly RULE_interpolation = 40;
	public static readonly RULE_parentRef = 41;
	public static readonly RULE_attrib = 42;
	public static readonly RULE_pseudo = 43;
	public static readonly RULE_functionalPseudo = 44;
	public static readonly RULE_pseudoParameter = 45;
	public static readonly RULE_negation = 46;
	public static readonly RULE_negationArg = 47;
	public static readonly RULE_operator_ = 48;
	public static readonly RULE_value = 49;
	public static readonly RULE_functionDeclaration = 50;
	public static readonly RULE_parameters = 51;
	public static readonly RULE_parameter = 52;
	public static readonly RULE_functionBody = 53;
	public static readonly RULE_functionReturn = 54;
	public static readonly RULE_functionStatement = 55;
	public static readonly RULE_functionCall = 56;
	public static readonly RULE_expression = 57;
	public static readonly RULE_expressionPart = 58;
	public static readonly RULE_ifExpression = 59;
	public static readonly RULE_listDeclaration = 60;
	public static readonly RULE_listCommaSeparated = 61;
	public static readonly RULE_listSpaceSeparated = 62;
	public static readonly RULE_listBracketed = 63;
	public static readonly RULE_listElement = 64;
	public static readonly RULE_mapDeclaration = 65;
	public static readonly RULE_mapEntries = 66;
	public static readonly RULE_mapEntry = 67;
	public static readonly RULE_mapKey = 68;
	public static readonly RULE_mapValue = 69;
	public static readonly RULE_ifDeclaration = 70;
	public static readonly RULE_elseIfStatement = 71;
	public static readonly RULE_elseStatement = 72;
	public static readonly RULE_forDeclaration = 73;
	public static readonly RULE_through = 74;
	public static readonly RULE_whileDeclaration = 75;
	public static readonly RULE_eachDeclaration = 76;
	public static readonly RULE_eachValueList = 77;
	public static readonly RULE_var_ = 78;
	public static readonly RULE_calc = 79;
	public static readonly RULE_rotate = 80;
	public static readonly RULE_rgba = 81;
	public static readonly RULE_repeat = 82;
	public static readonly RULE_unit = 83;
	public static readonly RULE_length = 84;
	public static readonly RULE_dimension = 85;
	public static readonly RULE_percentage = 86;
	public static readonly RULE_degree = 87;
	public static readonly RULE_measurment = 88;
	public static readonly RULE_uri = 89;
	public static readonly RULE_arglist = 90;
	public static readonly RULE_plusMinus = 91;
	public static readonly RULE_hexcolor = 92;
	public static readonly RULE_color = 93;
	public static readonly RULE_boolean = 94;
	public static readonly RULE_number = 95;
	public static readonly RULE_identifier = 96;
	public static readonly literalNames: (string | null)[] = [ null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            "'%'", "'@import'", 
                                                            "'@include'", 
                                                            "'@use'", "'@require'", 
                                                            "'@charset '", 
                                                            "'@mixin'", 
                                                            "'@function'", 
                                                            "'@font-face'", 
                                                            "'@forward'", 
                                                            "'@content'", 
                                                            "'@keyframes'", 
                                                            "'@return'", 
                                                            "'@media'", 
                                                            "'@extend'", 
                                                            "'@warn'", "'@error'", 
                                                            "'if'", "'@if'", 
                                                            "'@for'", "'@else'", 
                                                            "'@while'", 
                                                            "'@each'", "'from'", 
                                                            "'to'", "'through'", 
                                                            "'only'", "'not'", 
                                                            "'and'", "'using'", 
                                                            "'as'", "'with'", 
                                                            "'or'", "'in'", 
                                                            "'!default'", 
                                                            "'!important'", 
                                                            "'('", "')'", 
                                                            "'['", "']'", 
                                                            "'{'", "'}'", 
                                                            "'.'", "','", 
                                                            "':'", "';'", 
                                                            "'~'", "'_'", 
                                                            "'$'", "'@'", 
                                                            "'&'", "'#'", 
                                                            "'true'", "'false'", 
                                                            "'+'", "'/'", 
                                                            "'-'", "'*'", 
                                                            "'='", "'!='", 
                                                            "'>'", "'<'", 
                                                            "'~='", "'|='", 
                                                            "'|'", "'<!--'", 
                                                            "'-->'", "':not('", 
                                                            "'calc('", "'rotate('", 
                                                            "'var('", "'rgba('", 
                                                            "'repeat('", 
                                                            "'^='", "'$='", 
                                                            "'*='" ];
	public static readonly symbolicNames: (string | null)[] = [ null, "Comment", 
                                                             "MultiLineComment", 
                                                             "LineComment", 
                                                             "Space", "Uri", 
                                                             "Format", "AbsLength", 
                                                             "FontRelative", 
                                                             "ViewportRelative", 
                                                             "Angle", "Resolution", 
                                                             "Freq", "Time", 
                                                             "Percentage", 
                                                             "Import", "Include", 
                                                             "Use", "Require", 
                                                             "Charset", 
                                                             "Mixin", "Function", 
                                                             "FontFace", 
                                                             "Forward", 
                                                             "Content", 
                                                             "Keyframes", 
                                                             "Return", "Media", 
                                                             "Extend", "Warn", 
                                                             "Error", "If", 
                                                             "AtIf", "AtFor", 
                                                             "AtElse", "AtWhile", 
                                                             "AtEach", "From", 
                                                             "To", "Through", 
                                                             "Only", "Not", 
                                                             "And", "Using", 
                                                             "As", "With", 
                                                             "Or", "In", 
                                                             "Default", 
                                                             "Important", 
                                                             "Lparen", "Rparen", 
                                                             "Lbrack", "Rbrack", 
                                                             "BlockStart", 
                                                             "BlockEnd", 
                                                             "Dot", "Comma", 
                                                             "Colon", "Semi", 
                                                             "Tilde", "Under", 
                                                             "Dollar", "At", 
                                                             "Amp", "Hash", 
                                                             "True", "False", 
                                                             "Plus", "Div", 
                                                             "Minus", "Times", 
                                                             "Eq", "NotEq", 
                                                             "Greater", 
                                                             "Less", "Includes", 
                                                             "DashMatch", 
                                                             "Pipe", "Cdo", 
                                                             "Cdc", "PseudoNot", 
                                                             "Calc", "Rotate", 
                                                             "Var", "Rgba", 
                                                             "Repeat", "PrefixMatch", 
                                                             "SuffixMatch", 
                                                             "SubstringMatch", 
                                                             "VendorPrefix", 
                                                             "Variable", 
                                                             "Number", "String_", 
                                                             "Ident" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"stylesheet", "statement", "importDeclaration", "importPath", "asClause", 
		"withClause", "variableDeclaration", "variableValue", "variableName", 
		"namespace_", "propertyDeclaration", "prio", "propertyValue", "mediaDeclaration", 
		"mediaQueryList", "mediaQuery", "mediaExpression", "mixinDeclaration", 
		"contentDeclaration", "fontFaceDeclaration", "keyframesDeclaration", "keyframesBlock", 
		"percentageStatement", "includeDeclaration", "interpolationDeclaration", 
		"extendDeclaration", "warndingDeclaration", "errorDeclaration", "atStatementDeclaration", 
		"ruleset", "block", "selectorGroup", "selector", "combinator", "selectorSequence", 
		"id", "typeSelector", "typeNamespacePrefix", "universal", "className", 
		"interpolation", "parentRef", "attrib", "pseudo", "functionalPseudo", 
		"pseudoParameter", "negation", "negationArg", "operator_", "value", "functionDeclaration", 
		"parameters", "parameter", "functionBody", "functionReturn", "functionStatement", 
		"functionCall", "expression", "expressionPart", "ifExpression", "listDeclaration", 
		"listCommaSeparated", "listSpaceSeparated", "listBracketed", "listElement", 
		"mapDeclaration", "mapEntries", "mapEntry", "mapKey", "mapValue", "ifDeclaration", 
		"elseIfStatement", "elseStatement", "forDeclaration", "through", "whileDeclaration", 
		"eachDeclaration", "eachValueList", "var_", "calc", "rotate", "rgba", 
		"repeat", "unit", "length", "dimension", "percentage", "degree", "measurment", 
		"uri", "arglist", "plusMinus", "hexcolor", "color", "boolean", "number", 
		"identifier",
	];
	public get grammarFileName(): string { return "SCSSParser.g4"; }
	public get literalNames(): (string | null)[] { return SCSSParser.literalNames; }
	public get symbolicNames(): (string | null)[] { return SCSSParser.symbolicNames; }
	public get ruleNames(): string[] { return SCSSParser.ruleNames; }
	public get serializedATN(): number[] { return SCSSParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, SCSSParser._ATN, SCSSParser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public stylesheet(): StylesheetContext {
		let localctx: StylesheetContext = new StylesheetContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, SCSSParser.RULE_stylesheet);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 197;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2079834128) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 3574595707) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 1543652563) !== 0)) {
				{
				{
				this.state = 194;
				this.statement();
				}
				}
				this.state = 199;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 200;
			this.match(SCSSParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let localctx: StatementContext = new StatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, SCSSParser.RULE_statement);
		try {
			this.state = 223;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 202;
				this.importDeclaration();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 203;
				this.variableDeclaration();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 204;
				this.propertyDeclaration();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 205;
				this.interpolationDeclaration();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 206;
				this.mediaDeclaration();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 207;
				this.mixinDeclaration();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 208;
				this.contentDeclaration();
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 209;
				this.functionDeclaration();
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 210;
				this.ifDeclaration();
				}
				break;
			case 10:
				this.enterOuterAlt(localctx, 10);
				{
				this.state = 211;
				this.forDeclaration();
				}
				break;
			case 11:
				this.enterOuterAlt(localctx, 11);
				{
				this.state = 212;
				this.whileDeclaration();
				}
				break;
			case 12:
				this.enterOuterAlt(localctx, 12);
				{
				this.state = 213;
				this.eachDeclaration();
				}
				break;
			case 13:
				this.enterOuterAlt(localctx, 13);
				{
				this.state = 214;
				this.fontFaceDeclaration();
				}
				break;
			case 14:
				this.enterOuterAlt(localctx, 14);
				{
				this.state = 215;
				this.keyframesDeclaration();
				}
				break;
			case 15:
				this.enterOuterAlt(localctx, 15);
				{
				this.state = 216;
				this.includeDeclaration();
				}
				break;
			case 16:
				this.enterOuterAlt(localctx, 16);
				{
				this.state = 217;
				this.extendDeclaration();
				}
				break;
			case 17:
				this.enterOuterAlt(localctx, 17);
				{
				this.state = 218;
				this.warndingDeclaration();
				}
				break;
			case 18:
				this.enterOuterAlt(localctx, 18);
				{
				this.state = 219;
				this.errorDeclaration();
				}
				break;
			case 19:
				this.enterOuterAlt(localctx, 19);
				{
				this.state = 220;
				this.ruleset();
				}
				break;
			case 20:
				this.enterOuterAlt(localctx, 20);
				{
				this.state = 221;
				this.atStatementDeclaration();
				}
				break;
			case 21:
				this.enterOuterAlt(localctx, 21);
				{
				this.state = 222;
				this.percentageStatement();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public importDeclaration(): ImportDeclarationContext {
		let localctx: ImportDeclarationContext = new ImportDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, SCSSParser.RULE_importDeclaration);
		let _la: number;
		try {
			this.state = 248;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 15:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 225;
				this.match(SCSSParser.Import);
				this.state = 226;
				this.importPath();
				this.state = 228;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===59) {
					{
					this.state = 227;
					this.match(SCSSParser.Semi);
					}
				}

				}
				break;
			case 18:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 230;
				this.match(SCSSParser.Require);
				this.state = 231;
				this.importPath();
				this.state = 233;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===59) {
					{
					this.state = 232;
					this.match(SCSSParser.Semi);
					}
				}

				}
				break;
			case 17:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 235;
				this.match(SCSSParser.Use);
				this.state = 236;
				this.importPath();
				this.state = 238;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===44) {
					{
					this.state = 237;
					this.asClause();
					}
				}

				this.state = 241;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===45) {
					{
					this.state = 240;
					this.withClause();
					}
				}

				this.state = 244;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===59) {
					{
					this.state = 243;
					this.match(SCSSParser.Semi);
					}
				}

				}
				break;
			case 23:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 246;
				this.match(SCSSParser.Forward);
				this.state = 247;
				this.importPath();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public importPath(): ImportPathContext {
		let localctx: ImportPathContext = new ImportPathContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, SCSSParser.RULE_importPath);
		try {
			this.state = 252;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 5:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 250;
				this.uri();
				}
				break;
			case 93:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 251;
				this.match(SCSSParser.String_);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public asClause(): AsClauseContext {
		let localctx: AsClauseContext = new AsClauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, SCSSParser.RULE_asClause);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 254;
			this.match(SCSSParser.As);
			this.state = 257;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 71:
				{
				this.state = 255;
				this.match(SCSSParser.Times);
				}
				break;
			case 37:
			case 38:
			case 70:
			case 90:
			case 94:
				{
				this.state = 256;
				this.identifier();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public withClause(): WithClauseContext {
		let localctx: WithClauseContext = new WithClauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, SCSSParser.RULE_withClause);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 259;
			this.match(SCSSParser.With);
			this.state = 260;
			this.match(SCSSParser.Lparen);
			this.state = 261;
			this.parameters();
			this.state = 262;
			this.match(SCSSParser.Rparen);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public variableDeclaration(): VariableDeclarationContext {
		let localctx: VariableDeclarationContext = new VariableDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, SCSSParser.RULE_variableDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 264;
			this.variableName();
			this.state = 265;
			this.match(SCSSParser.Colon);
			this.state = 266;
			this.variableValue();
			this.state = 268;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 10, this._ctx) ) {
			case 1:
				{
				this.state = 267;
				this.prio();
				}
				break;
			}
			this.state = 271;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===59) {
				{
				this.state = 270;
				this.match(SCSSParser.Semi);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public variableValue(): VariableValueContext {
		let localctx: VariableValueContext = new VariableValueContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, SCSSParser.RULE_variableValue);
		try {
			let _alt: number;
			this.state = 288;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 14, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 273;
				this.value();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 274;
				this.functionDeclaration();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 275;
				this.functionCall();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 277;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 276;
						this.mapDeclaration();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 279;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 12, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 282;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 281;
						this.listDeclaration();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 284;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 13, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 286;
				this.variableName();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 287;
				this.identifier();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public variableName(): VariableNameContext {
		let localctx: VariableNameContext = new VariableNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 16, SCSSParser.RULE_variableName);
		let _la: number;
		try {
			this.state = 313;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 19, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 298;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 15, this._ctx) ) {
				case 1:
					{
					{
					this.state = 290;
					this.match(SCSSParser.Minus);
					this.state = 291;
					this.match(SCSSParser.Minus);
					}
					this.state = 293;
					this.match(SCSSParser.Dollar);
					}
					break;
				case 2:
					{
					this.state = 294;
					this.plusMinus();
					this.state = 295;
					this.match(SCSSParser.Dollar);
					}
					break;
				case 3:
					{
					this.state = 297;
					this.match(SCSSParser.Dollar);
					}
					break;
				}
				this.state = 300;
				this.identifier();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 302;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 16, this._ctx) ) {
				case 1:
					{
					this.state = 301;
					this.plusMinus();
					}
					break;
				}
				this.state = 305;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===37 || _la===38 || ((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & 17825793) !== 0)) {
					{
					this.state = 304;
					this.namespace_();
					}
				}

				this.state = 307;
				this.match(SCSSParser.Dollar);
				this.state = 310;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 37:
				case 38:
				case 70:
				case 90:
				case 94:
					{
					this.state = 308;
					this.identifier();
					}
					break;
				case 7:
				case 8:
				case 9:
				case 10:
				case 11:
				case 12:
				case 13:
				case 14:
					{
					this.state = 309;
					this.measurment();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 312;
				this.match(SCSSParser.Variable);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public namespace_(): Namespace_Context {
		let localctx: Namespace_Context = new Namespace_Context(this, this._ctx, this.state);
		this.enterRule(localctx, 18, SCSSParser.RULE_namespace_);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 318;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 315;
					this.identifier();
					this.state = 316;
					this.match(SCSSParser.Dot);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 320;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 20, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public propertyDeclaration(): PropertyDeclarationContext {
		let localctx: PropertyDeclarationContext = new PropertyDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 20, SCSSParser.RULE_propertyDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 322;
			this.identifier();
			this.state = 323;
			this.match(SCSSParser.Colon);
			this.state = 324;
			this.propertyValue();
			this.state = 326;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===59) {
				{
				this.state = 325;
				this.match(SCSSParser.Semi);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public prio(): PrioContext {
		let localctx: PrioContext = new PrioContext(this, this._ctx, this.state);
		this.enterRule(localctx, 22, SCSSParser.RULE_prio);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 328;
			_la = this._input.LA(1);
			if(!(_la===48 || _la===49)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public propertyValue(): PropertyValueContext {
		let localctx: PropertyValueContext = new PropertyValueContext(this, this._ctx, this.state);
		this.enterRule(localctx, 24, SCSSParser.RULE_propertyValue);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 343;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 24, this._ctx) ) {
			case 1:
				{
				this.state = 330;
				this.value();
				}
				break;
			case 2:
				{
				this.state = 332;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 22, this._ctx) ) {
				case 1:
					{
					this.state = 331;
					this.value();
					}
					break;
				}
				this.state = 335;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===48 || _la===49) {
					{
					this.state = 334;
					this.prio();
					}
				}

				this.state = 337;
				this.block();
				}
				break;
			case 3:
				{
				this.state = 338;
				this.variableName();
				}
				break;
			case 4:
				{
				this.state = 339;
				this.listSpaceSeparated();
				}
				break;
			case 5:
				{
				this.state = 340;
				this.listCommaSeparated();
				}
				break;
			case 6:
				{
				this.state = 341;
				this.expression();
				}
				break;
			case 7:
				{
				this.state = 342;
				this.functionCall();
				}
				break;
			}
			this.state = 346;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 25, this._ctx) ) {
			case 1:
				{
				this.state = 345;
				this.prio();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public mediaDeclaration(): MediaDeclarationContext {
		let localctx: MediaDeclarationContext = new MediaDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 26, SCSSParser.RULE_mediaDeclaration);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 348;
			this.match(SCSSParser.Media);
			this.state = 349;
			this.mediaQueryList();
			this.state = 350;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public mediaQueryList(): MediaQueryListContext {
		let localctx: MediaQueryListContext = new MediaQueryListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 28, SCSSParser.RULE_mediaQueryList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 360;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 27, this._ctx) ) {
			case 1:
				{
				this.state = 352;
				this.mediaQuery();
				this.state = 357;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===57) {
					{
					{
					this.state = 353;
					this.match(SCSSParser.Comma);
					this.state = 354;
					this.mediaQuery();
					}
					}
					this.state = 359;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public mediaQuery(): MediaQueryContext {
		let localctx: MediaQueryContext = new MediaQueryContext(this, this._ctx, this.state);
		this.enterRule(localctx, 30, SCSSParser.RULE_mediaQuery);
		let _la: number;
		try {
			this.state = 384;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 32, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 363;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 28, this._ctx) ) {
				case 1:
					{
					this.state = 362;
					_la = this._input.LA(1);
					if(!(_la===40 || _la===41)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					}
					break;
				}
				this.state = 367;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 29, this._ctx) ) {
				case 1:
					{
					this.state = 365;
					this.identifier();
					}
					break;
				case 2:
					{
					this.state = 366;
					this.value();
					}
					break;
				}
				this.state = 373;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===42) {
					{
					{
					this.state = 369;
					this.match(SCSSParser.And);
					this.state = 370;
					this.mediaExpression();
					}
					}
					this.state = 375;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 376;
				this.mediaExpression();
				this.state = 381;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===42) {
					{
					{
					this.state = 377;
					this.match(SCSSParser.And);
					this.state = 378;
					this.mediaExpression();
					}
					}
					this.state = 383;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public mediaExpression(): MediaExpressionContext {
		let localctx: MediaExpressionContext = new MediaExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 32, SCSSParser.RULE_mediaExpression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 386;
			this.match(SCSSParser.Lparen);
			this.state = 387;
			this.identifier();
			this.state = 390;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===58) {
				{
				this.state = 388;
				this.match(SCSSParser.Colon);
				this.state = 389;
				this.value();
				}
			}

			this.state = 392;
			this.match(SCSSParser.Rparen);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public mixinDeclaration(): MixinDeclarationContext {
		let localctx: MixinDeclarationContext = new MixinDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 34, SCSSParser.RULE_mixinDeclaration);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 394;
			this.match(SCSSParser.Mixin);
			this.state = 401;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 34, this._ctx) ) {
			case 1:
				{
				this.state = 395;
				this.identifier();
				}
				break;
			case 2:
				{
				this.state = 396;
				this.identifier();
				this.state = 397;
				this.match(SCSSParser.Lparen);
				this.state = 398;
				this.parameters();
				this.state = 399;
				this.match(SCSSParser.Rparen);
				}
				break;
			}
			this.state = 403;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public contentDeclaration(): ContentDeclarationContext {
		let localctx: ContentDeclarationContext = new ContentDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 36, SCSSParser.RULE_contentDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 405;
			this.match(SCSSParser.Content);
			this.state = 410;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 35, this._ctx) ) {
			case 1:
				{
				this.state = 406;
				this.match(SCSSParser.Lparen);
				this.state = 407;
				this.parameters();
				this.state = 408;
				this.match(SCSSParser.Rparen);
				}
				break;
			}
			this.state = 413;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===59) {
				{
				this.state = 412;
				this.match(SCSSParser.Semi);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public fontFaceDeclaration(): FontFaceDeclarationContext {
		let localctx: FontFaceDeclarationContext = new FontFaceDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 38, SCSSParser.RULE_fontFaceDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 415;
			this.match(SCSSParser.FontFace);
			this.state = 416;
			this.match(SCSSParser.BlockStart);
			this.state = 420;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2079834128) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 3574595707) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 1543652563) !== 0)) {
				{
				{
				this.state = 417;
				this.statement();
				}
				}
				this.state = 422;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 423;
			this.match(SCSSParser.BlockEnd);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public keyframesDeclaration(): KeyframesDeclarationContext {
		let localctx: KeyframesDeclarationContext = new KeyframesDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 40, SCSSParser.RULE_keyframesDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 425;
			this.match(SCSSParser.Keyframes);
			this.state = 427;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===37 || _la===38 || ((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & 17825793) !== 0)) {
				{
				this.state = 426;
				this.identifier();
				}
			}

			this.state = 429;
			this.keyframesBlock();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public keyframesBlock(): KeyframesBlockContext {
		let localctx: KeyframesBlockContext = new KeyframesBlockContext(this, this._ctx, this.state);
		this.enterRule(localctx, 42, SCSSParser.RULE_keyframesBlock);
		let _la: number;
		try {
			this.state = 440;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 40, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 431;
				this.match(SCSSParser.BlockStart);
				this.state = 435;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & 16777221) !== 0)) {
					{
					{
					this.state = 432;
					this.percentageStatement();
					}
					}
					this.state = 437;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 438;
				this.match(SCSSParser.BlockEnd);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 439;
				this.block();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public percentageStatement(): PercentageStatementContext {
		let localctx: PercentageStatementContext = new PercentageStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 44, SCSSParser.RULE_percentageStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 442;
			this.percentage();
			this.state = 443;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public includeDeclaration(): IncludeDeclarationContext {
		let localctx: IncludeDeclarationContext = new IncludeDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 46, SCSSParser.RULE_includeDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 445;
			this.match(SCSSParser.Include);
			this.state = 447;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 41, this._ctx) ) {
			case 1:
				{
				this.state = 446;
				this.namespace_();
				}
				break;
			}
			this.state = 451;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 42, this._ctx) ) {
			case 1:
				{
				this.state = 449;
				this.identifier();
				}
				break;
			case 2:
				{
				this.state = 450;
				this.functionCall();
				}
				break;
			}
			this.state = 459;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 59:
				{
				this.state = 453;
				this.match(SCSSParser.Semi);
				}
				break;
			case 43:
				{
				this.state = 454;
				this.match(SCSSParser.Using);
				this.state = 455;
				this.match(SCSSParser.Lparen);
				this.state = 456;
				this.parameters();
				this.state = 457;
				this.match(SCSSParser.Rparen);
				}
				break;
			case -1:
			case 4:
			case 5:
			case 6:
			case 7:
			case 8:
			case 9:
			case 10:
			case 11:
			case 12:
			case 13:
			case 14:
			case 15:
			case 16:
			case 17:
			case 18:
			case 20:
			case 21:
			case 22:
			case 23:
			case 24:
			case 25:
			case 26:
			case 27:
			case 28:
			case 29:
			case 30:
			case 31:
			case 32:
			case 33:
			case 35:
			case 36:
			case 37:
			case 38:
			case 41:
			case 48:
			case 49:
			case 50:
			case 52:
			case 54:
			case 55:
			case 56:
			case 58:
			case 60:
			case 62:
			case 63:
			case 64:
			case 65:
			case 66:
			case 67:
			case 68:
			case 70:
			case 71:
			case 74:
			case 78:
			case 81:
			case 82:
			case 83:
			case 84:
			case 85:
			case 90:
			case 91:
			case 92:
			case 93:
			case 94:
				break;
			default:
				break;
			}
			this.state = 462;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===54) {
				{
				this.state = 461;
				this.block();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public interpolationDeclaration(): InterpolationDeclarationContext {
		let localctx: InterpolationDeclarationContext = new InterpolationDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 48, SCSSParser.RULE_interpolationDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 464;
			this.interpolation();
			this.state = 465;
			this.match(SCSSParser.Colon);
			this.state = 466;
			this.propertyValue();
			this.state = 468;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===59) {
				{
				this.state = 467;
				this.match(SCSSParser.Semi);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public extendDeclaration(): ExtendDeclarationContext {
		let localctx: ExtendDeclarationContext = new ExtendDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 50, SCSSParser.RULE_extendDeclaration);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 470;
			this.match(SCSSParser.Extend);
			this.state = 473;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 46, this._ctx) ) {
			case 1:
				{
				this.state = 471;
				this.match(SCSSParser.Percentage);
				}
				break;
			case 2:
				{
				this.state = 472;
				this.parentRef();
				}
				break;
			}
			this.state = 483;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					this.state = 483;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 47, this._ctx) ) {
					case 1:
						{
						this.state = 475;
						this.id();
						}
						break;
					case 2:
						{
						this.state = 476;
						this.typeSelector();
						}
						break;
					case 3:
						{
						this.state = 477;
						this.universal();
						}
						break;
					case 4:
						{
						this.state = 478;
						this.className();
						}
						break;
					case 5:
						{
						this.state = 479;
						this.attrib();
						}
						break;
					case 6:
						{
						this.state = 480;
						this.pseudo();
						}
						break;
					case 7:
						{
						this.state = 481;
						this.interpolation();
						}
						break;
					case 8:
						{
						this.state = 482;
						this.parentRef();
						}
						break;
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 485;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 48, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 488;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===59) {
				{
				this.state = 487;
				this.match(SCSSParser.Semi);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public warndingDeclaration(): WarndingDeclarationContext {
		let localctx: WarndingDeclarationContext = new WarndingDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 52, SCSSParser.RULE_warndingDeclaration);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 490;
			this.match(SCSSParser.Warn);
			this.state = 491;
			this.match(SCSSParser.String_);
			this.state = 492;
			this.match(SCSSParser.Semi);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public errorDeclaration(): ErrorDeclarationContext {
		let localctx: ErrorDeclarationContext = new ErrorDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 54, SCSSParser.RULE_errorDeclaration);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 494;
			this.match(SCSSParser.Error);
			this.state = 495;
			this.match(SCSSParser.String_);
			this.state = 496;
			this.match(SCSSParser.Semi);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public atStatementDeclaration(): AtStatementDeclarationContext {
		let localctx: AtStatementDeclarationContext = new AtStatementDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 56, SCSSParser.RULE_atStatementDeclaration);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 498;
			this.match(SCSSParser.At);
			this.state = 505;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 50, this._ctx) ) {
			case 1:
				{
				this.state = 499;
				this.identifier();
				this.state = 500;
				this.match(SCSSParser.Lparen);
				this.state = 501;
				this.parameters();
				this.state = 502;
				this.match(SCSSParser.Rparen);
				}
				break;
			case 2:
				{
				this.state = 504;
				this.identifier();
				}
				break;
			}
			this.state = 507;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public ruleset(): RulesetContext {
		let localctx: RulesetContext = new RulesetContext(this, this._ctx, this.state);
		this.enterRule(localctx, 58, SCSSParser.RULE_ruleset);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 509;
			this.selectorGroup();
			this.state = 510;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public block(): BlockContext {
		let localctx: BlockContext = new BlockContext(this, this._ctx, this.state);
		this.enterRule(localctx, 60, SCSSParser.RULE_block);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 512;
			this.match(SCSSParser.BlockStart);
			this.state = 516;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2079834128) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 3574595707) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 1543652563) !== 0)) {
				{
				{
				this.state = 513;
				this.statement();
				}
				}
				this.state = 518;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 520;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===26) {
				{
				this.state = 519;
				this.functionReturn();
				}
			}

			this.state = 522;
			this.match(SCSSParser.BlockEnd);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public selectorGroup(): SelectorGroupContext {
		let localctx: SelectorGroupContext = new SelectorGroupContext(this, this._ctx, this.state);
		this.enterRule(localctx, 62, SCSSParser.RULE_selectorGroup);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 524;
			this.selector();
			this.state = 529;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===57) {
				{
				{
				this.state = 525;
				this.match(SCSSParser.Comma);
				this.state = 526;
				this.selector();
				}
				}
				this.state = 531;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public selector(): SelectorContext {
		let localctx: SelectorContext = new SelectorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 64, SCSSParser.RULE_selector);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 533;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 54, this._ctx) ) {
			case 1:
				{
				this.state = 532;
				this.combinator();
				}
				break;
			}
			this.state = 535;
			this.selectorSequence();
			this.state = 541;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===4 || ((((_la - 60)) & ~0x1F) === 0 && ((1 << (_la - 60)) & 16641) !== 0)) {
				{
				{
				this.state = 536;
				this.combinator();
				this.state = 537;
				this.selectorSequence();
				}
				}
				this.state = 543;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public combinator(): CombinatorContext {
		let localctx: CombinatorContext = new CombinatorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 66, SCSSParser.RULE_combinator);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 544;
			_la = this._input.LA(1);
			if(!(_la===4 || ((((_la - 60)) & ~0x1F) === 0 && ((1 << (_la - 60)) & 16641) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public selectorSequence(): SelectorSequenceContext {
		let localctx: SelectorSequenceContext = new SelectorSequenceContext(this, this._ctx, this.state);
		this.enterRule(localctx, 68, SCSSParser.RULE_selectorSequence);
		let _la: number;
		try {
			let _alt: number;
			this.state = 582;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 63, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 548;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 56, this._ctx) ) {
				case 1:
					{
					this.state = 546;
					this.typeSelector();
					}
					break;
				case 2:
					{
					this.state = 547;
					this.universal();
					}
					break;
				}
				this.state = 563;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 405307395) !== 0) || ((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & 17827841) !== 0)) {
					{
					this.state = 561;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 58, this._ctx) ) {
					case 1:
						{
						this.state = 550;
						this.id();
						}
						break;
					case 2:
						{
						this.state = 551;
						this.className();
						}
						break;
					case 3:
						{
						this.state = 552;
						this.attrib();
						}
						break;
					case 4:
						{
						this.state = 553;
						this.pseudo();
						}
						break;
					case 5:
						{
						this.state = 554;
						this.negation();
						}
						break;
					case 6:
						{
						this.state = 555;
						this.interpolation();
						this.state = 558;
						this._errHandler.sync(this);
						switch ( this._interp.adaptivePredict(this._input, 57, this._ctx) ) {
						case 1:
							{
							this.state = 556;
							this.variableName();
							}
							break;
						case 2:
							{
							this.state = 557;
							this.match(SCSSParser.Percentage);
							}
							break;
						}
						}
						break;
					case 7:
						{
						this.state = 560;
						this.parentRef();
						}
						break;
					}
					}
					this.state = 565;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 578;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						this.state = 578;
						this._errHandler.sync(this);
						switch ( this._interp.adaptivePredict(this._input, 61, this._ctx) ) {
						case 1:
							{
							this.state = 566;
							this.typeSelector();
							}
							break;
						case 2:
							{
							this.state = 567;
							this.id();
							}
							break;
						case 3:
							{
							this.state = 568;
							this.className();
							}
							break;
						case 4:
							{
							this.state = 569;
							this.attrib();
							}
							break;
						case 5:
							{
							this.state = 570;
							this.pseudo();
							}
							break;
						case 6:
							{
							this.state = 571;
							this.negation();
							}
							break;
						case 7:
							{
							this.state = 572;
							this.interpolation();
							this.state = 575;
							this._errHandler.sync(this);
							switch ( this._interp.adaptivePredict(this._input, 60, this._ctx) ) {
							case 1:
								{
								this.state = 573;
								this.variableName();
								}
								break;
							case 2:
								{
								this.state = 574;
								this.match(SCSSParser.Percentage);
								}
								break;
							}
							}
							break;
						case 8:
							{
							this.state = 577;
							this.parentRef();
							}
							break;
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 580;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 62, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public id(): IdContext {
		let localctx: IdContext = new IdContext(this, this._ctx, this.state);
		this.enterRule(localctx, 70, SCSSParser.RULE_id);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 584;
			this.match(SCSSParser.Hash);
			this.state = 585;
			this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public typeSelector(): TypeSelectorContext {
		let localctx: TypeSelectorContext = new TypeSelectorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 72, SCSSParser.RULE_typeSelector);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 588;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 64, this._ctx) ) {
			case 1:
				{
				this.state = 587;
				this.typeNamespacePrefix();
				}
				break;
			}
			this.state = 592;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 14:
				{
				this.state = 590;
				this.match(SCSSParser.Percentage);
				}
				break;
			case 64:
				{
				this.state = 591;
				this.parentRef();
				}
				break;
			case 37:
			case 38:
			case 62:
			case 68:
			case 70:
			case 90:
			case 91:
			case 94:
				break;
			default:
				break;
			}
			this.state = 596;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 66, this._ctx) ) {
			case 1:
				{
				this.state = 594;
				this.identifier();
				}
				break;
			case 2:
				{
				this.state = 595;
				this.variableName();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public typeNamespacePrefix(): TypeNamespacePrefixContext {
		let localctx: TypeNamespacePrefixContext = new TypeNamespacePrefixContext(this, this._ctx, this.state);
		this.enterRule(localctx, 74, SCSSParser.RULE_typeNamespacePrefix);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 600;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 37:
			case 38:
			case 70:
			case 90:
			case 94:
				{
				this.state = 598;
				this.identifier();
				}
				break;
			case 71:
				{
				this.state = 599;
				this.match(SCSSParser.Times);
				}
				break;
			case 78:
				break;
			default:
				break;
			}
			this.state = 602;
			this.match(SCSSParser.Pipe);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public universal(): UniversalContext {
		let localctx: UniversalContext = new UniversalContext(this, this._ctx, this.state);
		this.enterRule(localctx, 76, SCSSParser.RULE_universal);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 605;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 68, this._ctx) ) {
			case 1:
				{
				this.state = 604;
				this.typeNamespacePrefix();
				}
				break;
			}
			this.state = 607;
			this.match(SCSSParser.Times);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public className(): ClassNameContext {
		let localctx: ClassNameContext = new ClassNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 78, SCSSParser.RULE_className);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 609;
			this.match(SCSSParser.Dot);
			this.state = 613;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					this.state = 613;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 69, this._ctx) ) {
					case 1:
						{
						this.state = 610;
						this.match(SCSSParser.Minus);
						}
						break;
					case 2:
						{
						this.state = 611;
						this.identifier();
						}
						break;
					case 3:
						{
						this.state = 612;
						this.interpolation();
						}
						break;
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 615;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 70, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public interpolation(): InterpolationContext {
		let localctx: InterpolationContext = new InterpolationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 80, SCSSParser.RULE_interpolation);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 618;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===37 || _la===38 || ((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & 17825793) !== 0)) {
				{
				this.state = 617;
				this.namespace_();
				}
			}

			this.state = 620;
			this.match(SCSSParser.Hash);
			this.state = 621;
			this.match(SCSSParser.BlockStart);
			this.state = 623;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 72, this._ctx) ) {
			case 1:
				{
				this.state = 622;
				this.namespace_();
				}
				break;
			}
			this.state = 628;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 73, this._ctx) ) {
			case 1:
				{
				this.state = 625;
				this.ifExpression();
				}
				break;
			case 2:
				{
				this.state = 626;
				this.value();
				}
				break;
			case 3:
				{
				this.state = 627;
				this.parentRef();
				}
				break;
			}
			this.state = 630;
			this.match(SCSSParser.BlockEnd);
			this.state = 632;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 74, this._ctx) ) {
			case 1:
				{
				this.state = 631;
				this.measurment();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public parentRef(): ParentRefContext {
		let localctx: ParentRefContext = new ParentRefContext(this, this._ctx, this.state);
		this.enterRule(localctx, 82, SCSSParser.RULE_parentRef);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 634;
			this.match(SCSSParser.Amp);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public attrib(): AttribContext {
		let localctx: AttribContext = new AttribContext(this, this._ctx, this.state);
		this.enterRule(localctx, 84, SCSSParser.RULE_attrib);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 636;
			this.match(SCSSParser.Lbrack);
			this.state = 638;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 75, this._ctx) ) {
			case 1:
				{
				this.state = 637;
				this.typeNamespacePrefix();
				}
				break;
			}
			this.state = 640;
			this.identifier();
			this.state = 646;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & 229425) !== 0)) {
				{
				this.state = 641;
				_la = this._input.LA(1);
				if(!(((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & 229425) !== 0))) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 644;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 37:
				case 38:
				case 70:
				case 90:
				case 94:
					{
					this.state = 642;
					this.identifier();
					}
					break;
				case 93:
					{
					this.state = 643;
					this.match(SCSSParser.String_);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
			}

			this.state = 648;
			this.match(SCSSParser.Rbrack);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public pseudo(): PseudoContext {
		let localctx: PseudoContext = new PseudoContext(this, this._ctx, this.state);
		this.enterRule(localctx, 86, SCSSParser.RULE_pseudo);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 650;
			this.match(SCSSParser.Colon);
			this.state = 652;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===58) {
				{
				this.state = 651;
				this.match(SCSSParser.Colon);
				}
			}

			this.state = 657;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 79, this._ctx) ) {
			case 1:
				{
				this.state = 654;
				this.interpolation();
				}
				break;
			case 2:
				{
				this.state = 655;
				this.identifier();
				}
				break;
			case 3:
				{
				this.state = 656;
				this.functionalPseudo();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public functionalPseudo(): FunctionalPseudoContext {
		let localctx: FunctionalPseudoContext = new FunctionalPseudoContext(this, this._ctx, this.state);
		this.enterRule(localctx, 88, SCSSParser.RULE_functionalPseudo);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 659;
			this.match(SCSSParser.Ident);
			this.state = 660;
			this.match(SCSSParser.Lparen);
			this.state = 662;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 661;
				this.pseudoParameter();
				}
				}
				this.state = 664;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2147516384) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 4060755987) !== 0) || ((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & 32632833) !== 0));
			this.state = 666;
			this.match(SCSSParser.Rparen);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public pseudoParameter(): PseudoParameterContext {
		let localctx: PseudoParameterContext = new PseudoParameterContext(this, this._ctx, this.state);
		this.enterRule(localctx, 90, SCSSParser.RULE_pseudoParameter);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			{
			this.state = 671;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 81, this._ctx) ) {
			case 1:
				{
				this.state = 668;
				this.value();
				}
				break;
			case 2:
				{
				this.state = 669;
				this.className();
				}
				break;
			case 3:
				{
				this.state = 670;
				this.interpolation();
				}
				break;
			}
			this.state = 674;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===57) {
				{
				this.state = 673;
				this.match(SCSSParser.Comma);
				}
			}

			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public negation(): NegationContext {
		let localctx: NegationContext = new NegationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 92, SCSSParser.RULE_negation);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 676;
			this.match(SCSSParser.PseudoNot);
			this.state = 677;
			this.negationArg();
			this.state = 678;
			this.match(SCSSParser.Rparen);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public negationArg(): NegationArgContext {
		let localctx: NegationArgContext = new NegationArgContext(this, this._ctx, this.state);
		this.enterRule(localctx, 94, SCSSParser.RULE_negationArg);
		try {
			this.state = 686;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 83, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 680;
				this.typeSelector();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 681;
				this.universal();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 682;
				this.match(SCSSParser.Hash);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 683;
				this.className();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 684;
				this.attrib();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 685;
				this.pseudo();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public operator_(): Operator_Context {
		let localctx: Operator_Context = new Operator_Context(this, this._ctx, this.state);
		this.enterRule(localctx, 96, SCSSParser.RULE_operator_);
		let _la: number;
		try {
			this.state = 706;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 85, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 688;
				this.match(SCSSParser.Div);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 689;
				this.match(SCSSParser.Times);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 690;
				this.match(SCSSParser.Minus);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 691;
				this.match(SCSSParser.Plus);
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 692;
				this.match(SCSSParser.Greater);
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 693;
				this.match(SCSSParser.Less);
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 694;
				this.match(SCSSParser.Greater);
				this.state = 695;
				this.match(SCSSParser.Eq);
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 696;
				this.match(SCSSParser.Less);
				this.state = 697;
				this.match(SCSSParser.Eq);
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 698;
				this.match(SCSSParser.Eq);
				this.state = 700;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===72) {
					{
					this.state = 699;
					this.match(SCSSParser.Eq);
					}
				}

				}
				break;
			case 10:
				this.enterOuterAlt(localctx, 10);
				{
				this.state = 702;
				this.match(SCSSParser.NotEq);
				}
				break;
			case 11:
				this.enterOuterAlt(localctx, 11);
				{
				this.state = 703;
				this.match(SCSSParser.And);
				}
				break;
			case 12:
				this.enterOuterAlt(localctx, 12);
				{
				this.state = 704;
				this.match(SCSSParser.Or);
				}
				break;
			case 13:
				this.enterOuterAlt(localctx, 13);
				{
				this.state = 705;
				this.match(SCSSParser.Not);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public value(): ValueContext {
		let localctx: ValueContext = new ValueContext(this, this._ctx, this.state);
		this.enterRule(localctx, 98, SCSSParser.RULE_value);
		try {
			this.state = 729;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 86, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 708;
				this.unit();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 709;
				this.number_();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 710;
				this.boolean_();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 711;
				this.calc();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 712;
				this.rotate();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 713;
				this.rgba();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 714;
				this.var_();
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 715;
				this.uri();
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 716;
				this.repeat();
				}
				break;
			case 10:
				this.enterOuterAlt(localctx, 10);
				{
				this.state = 717;
				this.match(SCSSParser.Format);
				}
				break;
			case 11:
				this.enterOuterAlt(localctx, 11);
				{
				this.state = 718;
				this.match(SCSSParser.String_);
				}
				break;
			case 12:
				this.enterOuterAlt(localctx, 12);
				{
				this.state = 719;
				this.functionCall();
				}
				break;
			case 13:
				this.enterOuterAlt(localctx, 13);
				{
				this.state = 720;
				this.variableName();
				}
				break;
			case 14:
				this.enterOuterAlt(localctx, 14);
				{
				this.state = 721;
				this.interpolation();
				}
				break;
			case 15:
				this.enterOuterAlt(localctx, 15);
				{
				this.state = 722;
				this.hexcolor();
				}
				break;
			case 16:
				this.enterOuterAlt(localctx, 16);
				{
				this.state = 723;
				this.identifier();
				}
				break;
			case 17:
				this.enterOuterAlt(localctx, 17);
				{
				this.state = 724;
				this.expression();
				}
				break;
			case 18:
				this.enterOuterAlt(localctx, 18);
				{
				this.state = 725;
				this.block();
				}
				break;
			case 19:
				this.enterOuterAlt(localctx, 19);
				{
				this.state = 726;
				this.match(SCSSParser.Lparen);
				this.state = 727;
				this.match(SCSSParser.Rparen);
				}
				break;
			case 20:
				this.enterOuterAlt(localctx, 20);
				{
				this.state = 728;
				this.measurment();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public functionDeclaration(): FunctionDeclarationContext {
		let localctx: FunctionDeclarationContext = new FunctionDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 100, SCSSParser.RULE_functionDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 731;
			this.match(SCSSParser.Function);
			this.state = 736;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===37 || _la===38 || ((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & 17825793) !== 0)) {
				{
				this.state = 733;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 87, this._ctx) ) {
				case 1:
					{
					this.state = 732;
					this.namespace_();
					}
					break;
				}
				this.state = 735;
				this.identifier();
				}
			}

			this.state = 738;
			this.match(SCSSParser.Lparen);
			this.state = 739;
			this.parameters();
			this.state = 740;
			this.match(SCSSParser.Rparen);
			this.state = 741;
			this.match(SCSSParser.BlockStart);
			this.state = 743;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 89, this._ctx) ) {
			case 1:
				{
				this.state = 742;
				this.functionBody();
				}
				break;
			}
			this.state = 745;
			this.match(SCSSParser.BlockEnd);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public parameters(): ParametersContext {
		let localctx: ParametersContext = new ParametersContext(this, this._ctx, this.state);
		this.enterRule(localctx, 102, SCSSParser.RULE_parameters);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 748;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2147516384) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 4060231699) !== 0) || ((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & 32632833) !== 0)) {
				{
				this.state = 747;
				this.parameter();
				}
			}

			this.state = 754;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===57) {
				{
				{
				this.state = 750;
				this.match(SCSSParser.Comma);
				this.state = 751;
				this.parameter();
				}
				}
				this.state = 756;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public parameter(): ParameterContext {
		let localctx: ParameterContext = new ParameterContext(this, this._ctx, this.state);
		this.enterRule(localctx, 104, SCSSParser.RULE_parameter);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 761;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 92, this._ctx) ) {
			case 1:
				{
				this.state = 757;
				this.value();
				}
				break;
			case 2:
				{
				this.state = 758;
				this.variableDeclaration();
				}
				break;
			case 3:
				{
				this.state = 759;
				this.listSpaceSeparated();
				}
				break;
			case 4:
				{
				this.state = 760;
				this.mapDeclaration();
				}
				break;
			}
			this.state = 764;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===56) {
				{
				this.state = 763;
				this.arglist();
				}
			}

			this.state = 767;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===48 || _la===49) {
				{
				this.state = 766;
				this.prio();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public functionBody(): FunctionBodyContext {
		let localctx: FunctionBodyContext = new FunctionBodyContext(this, this._ctx, this.state);
		this.enterRule(localctx, 106, SCSSParser.RULE_functionBody);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 772;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4227334128) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 3575054971) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 2084455647) !== 0)) {
				{
				{
				this.state = 769;
				this.functionStatement();
				}
				}
				this.state = 774;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 776;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===26) {
				{
				this.state = 775;
				this.functionReturn();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public functionReturn(): FunctionReturnContext {
		let localctx: FunctionReturnContext = new FunctionReturnContext(this, this._ctx, this.state);
		this.enterRule(localctx, 108, SCSSParser.RULE_functionReturn);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 778;
			this.match(SCSSParser.Return);
			this.state = 779;
			this.expression();
			this.state = 784;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===57) {
				{
				{
				this.state = 780;
				this.match(SCSSParser.Comma);
				this.state = 781;
				this.expression();
				}
				}
				this.state = 786;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 788;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===59) {
				{
				this.state = 787;
				this.match(SCSSParser.Semi);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public functionStatement(): FunctionStatementContext {
		let localctx: FunctionStatementContext = new FunctionStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 110, SCSSParser.RULE_functionStatement);
		try {
			this.state = 794;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 99, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 790;
				this.expression();
				this.state = 791;
				this.match(SCSSParser.Semi);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 793;
				this.statement();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public functionCall(): FunctionCallContext {
		let localctx: FunctionCallContext = new FunctionCallContext(this, this._ctx, this.state);
		this.enterRule(localctx, 112, SCSSParser.RULE_functionCall);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 797;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 100, this._ctx) ) {
			case 1:
				{
				this.state = 796;
				this.namespace_();
				}
				break;
			}
			this.state = 799;
			this.identifier();
			this.state = 800;
			this.match(SCSSParser.Lparen);
			this.state = 801;
			this.parameters();
			this.state = 802;
			this.match(SCSSParser.Rparen);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public expression(): ExpressionContext {
		let localctx: ExpressionContext = new ExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 114, SCSSParser.RULE_expression);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 805;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===41) {
				{
				this.state = 804;
				this.match(SCSSParser.Not);
				}
			}

			this.state = 807;
			this.expressionPart();
			this.state = 816;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 103, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 808;
					this.operator_();
					this.state = 810;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===41) {
						{
						this.state = 809;
						this.match(SCSSParser.Not);
						}
					}

					this.state = 812;
					this.expressionPart();
					}
					}
				}
				this.state = 818;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 103, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public expressionPart(): ExpressionPartContext {
		let localctx: ExpressionPartContext = new ExpressionPartContext(this, this._ctx, this.state);
		this.enterRule(localctx, 116, SCSSParser.RULE_expressionPart);
		let _la: number;
		try {
			this.state = 845;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 106, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 819;
				this.unit();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 820;
				this.identifier();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 821;
				this.variableName();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 822;
				this.var_();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 823;
				this.boolean_();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 824;
				this.calc();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 825;
				this.rotate();
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 826;
				this.rgba();
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 827;
				this.number_();
				}
				break;
			case 10:
				this.enterOuterAlt(localctx, 10);
				{
				this.state = 828;
				this.uri();
				}
				break;
			case 11:
				this.enterOuterAlt(localctx, 11);
				{
				this.state = 829;
				this.match(SCSSParser.Format);
				}
				break;
			case 12:
				this.enterOuterAlt(localctx, 12);
				{
				this.state = 830;
				this.match(SCSSParser.String_);
				}
				break;
			case 13:
				this.enterOuterAlt(localctx, 13);
				{
				this.state = 831;
				this.interpolation();
				}
				break;
			case 14:
				this.enterOuterAlt(localctx, 14);
				{
				this.state = 832;
				this.hexcolor();
				}
				break;
			case 15:
				this.enterOuterAlt(localctx, 15);
				{
				this.state = 833;
				this.ifExpression();
				}
				break;
			case 16:
				this.enterOuterAlt(localctx, 16);
				{
				this.state = 834;
				this.functionCall();
				}
				break;
			case 17:
				this.enterOuterAlt(localctx, 17);
				{
				this.state = 836;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===68 || _la===70) {
					{
					this.state = 835;
					this.plusMinus();
					}
				}

				this.state = 838;
				this.match(SCSSParser.Lparen);
				this.state = 840;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2147516384) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 4060100627) !== 0) || ((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & 32567297) !== 0)) {
					{
					this.state = 839;
					this.expression();
					}
				}

				this.state = 842;
				this.match(SCSSParser.Rparen);
				}
				break;
			case 18:
				this.enterOuterAlt(localctx, 18);
				{
				this.state = 843;
				this.prio();
				}
				break;
			case 19:
				this.enterOuterAlt(localctx, 19);
				{
				this.state = 844;
				this.measurment();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public ifExpression(): IfExpressionContext {
		let localctx: IfExpressionContext = new IfExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 118, SCSSParser.RULE_ifExpression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 847;
			this.match(SCSSParser.If);
			this.state = 848;
			this.match(SCSSParser.Lparen);
			this.state = 851;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 5:
			case 6:
			case 7:
			case 8:
			case 9:
			case 10:
			case 11:
			case 12:
			case 13:
			case 14:
			case 31:
			case 37:
			case 38:
			case 41:
			case 48:
			case 49:
			case 50:
			case 62:
			case 65:
			case 66:
			case 67:
			case 68:
			case 70:
			case 82:
			case 83:
			case 84:
			case 85:
			case 90:
			case 91:
			case 92:
			case 93:
			case 94:
				{
				this.state = 849;
				this.expression();
				}
				break;
			case 64:
				{
				this.state = 850;
				this.parentRef();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 853;
			this.match(SCSSParser.Comma);
			this.state = 854;
			this.value();
			this.state = 855;
			this.match(SCSSParser.Comma);
			this.state = 856;
			this.value();
			this.state = 857;
			this.match(SCSSParser.Rparen);
			this.state = 859;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 108, this._ctx) ) {
			case 1:
				{
				this.state = 858;
				this.measurment();
				}
				break;
			}
			this.state = 862;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 109, this._ctx) ) {
			case 1:
				{
				this.state = 861;
				this.prio();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public listDeclaration(): ListDeclarationContext {
		let localctx: ListDeclarationContext = new ListDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 120, SCSSParser.RULE_listDeclaration);
		try {
			this.state = 873;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 111, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 867;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 110, this._ctx) ) {
				case 1:
					{
					this.state = 864;
					this.listBracketed();
					}
					break;
				case 2:
					{
					this.state = 865;
					this.listCommaSeparated();
					}
					break;
				case 3:
					{
					this.state = 866;
					this.listSpaceSeparated();
					}
					break;
				}
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 869;
				this.match(SCSSParser.Lparen);
				this.state = 870;
				this.listDeclaration();
				this.state = 871;
				this.match(SCSSParser.Rparen);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public listCommaSeparated(): ListCommaSeparatedContext {
		let localctx: ListCommaSeparatedContext = new ListCommaSeparatedContext(this, this._ctx, this.state);
		this.enterRule(localctx, 122, SCSSParser.RULE_listCommaSeparated);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 875;
			this.listElement();
			this.state = 880;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 112, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 876;
					this.match(SCSSParser.Comma);
					this.state = 877;
					this.listElement();
					}
					}
				}
				this.state = 882;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 112, this._ctx);
			}
			this.state = 884;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 113, this._ctx) ) {
			case 1:
				{
				this.state = 883;
				this.match(SCSSParser.Comma);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public listSpaceSeparated(): ListSpaceSeparatedContext {
		let localctx: ListSpaceSeparatedContext = new ListSpaceSeparatedContext(this, this._ctx, this.state);
		this.enterRule(localctx, 124, SCSSParser.RULE_listSpaceSeparated);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 887;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 886;
					this.listElement();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 889;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 114, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public listBracketed(): ListBracketedContext {
		let localctx: ListBracketedContext = new ListBracketedContext(this, this._ctx, this.state);
		this.enterRule(localctx, 126, SCSSParser.RULE_listBracketed);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 891;
			this.match(SCSSParser.Lbrack);
			this.state = 894;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 115, this._ctx) ) {
			case 1:
				{
				this.state = 892;
				this.listSpaceSeparated();
				}
				break;
			case 2:
				{
				this.state = 893;
				this.listCommaSeparated();
				}
				break;
			}
			this.state = 896;
			this.match(SCSSParser.Rbrack);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public listElement(): ListElementContext {
		let localctx: ListElementContext = new ListElementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 128, SCSSParser.RULE_listElement);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 899;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 116, this._ctx) ) {
			case 1:
				{
				this.state = 898;
				this.match(SCSSParser.Lparen);
				}
				break;
			}
			this.state = 905;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 901;
					this.value();
					this.state = 903;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 117, this._ctx) ) {
					case 1:
						{
						this.state = 902;
						this.match(SCSSParser.Comma);
						}
						break;
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 907;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 118, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 910;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 119, this._ctx) ) {
			case 1:
				{
				this.state = 909;
				this.match(SCSSParser.Rparen);
				}
				break;
			}
			this.state = 913;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 120, this._ctx) ) {
			case 1:
				{
				this.state = 912;
				this.match(SCSSParser.Comma);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public mapDeclaration(): MapDeclarationContext {
		let localctx: MapDeclarationContext = new MapDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 130, SCSSParser.RULE_mapDeclaration);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 915;
			this.match(SCSSParser.Lparen);
			this.state = 916;
			this.mapEntries();
			this.state = 917;
			this.match(SCSSParser.Rparen);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public mapEntries(): MapEntriesContext {
		let localctx: MapEntriesContext = new MapEntriesContext(this, this._ctx, this.state);
		this.enterRule(localctx, 132, SCSSParser.RULE_mapEntries);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 919;
			this.mapEntry();
			this.state = 924;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 121, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 920;
					this.match(SCSSParser.Comma);
					this.state = 921;
					this.mapEntry();
					}
					}
				}
				this.state = 926;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 121, this._ctx);
			}
			this.state = 928;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===57) {
				{
				this.state = 927;
				this.match(SCSSParser.Comma);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public mapEntry(): MapEntryContext {
		let localctx: MapEntryContext = new MapEntryContext(this, this._ctx, this.state);
		this.enterRule(localctx, 134, SCSSParser.RULE_mapEntry);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 930;
			this.mapKey();
			this.state = 931;
			this.match(SCSSParser.Colon);
			this.state = 932;
			this.mapValue();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public mapKey(): MapKeyContext {
		let localctx: MapKeyContext = new MapKeyContext(this, this._ctx, this.state);
		this.enterRule(localctx, 136, SCSSParser.RULE_mapKey);
		try {
			this.state = 937;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 123, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 934;
				this.value();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 935;
				this.listDeclaration();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 936;
				this.mapDeclaration();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public mapValue(): MapValueContext {
		let localctx: MapValueContext = new MapValueContext(this, this._ctx, this.state);
		this.enterRule(localctx, 138, SCSSParser.RULE_mapValue);
		try {
			this.state = 942;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 124, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 939;
				this.value();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 940;
				this.listDeclaration();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 941;
				this.mapDeclaration();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public ifDeclaration(): IfDeclarationContext {
		let localctx: IfDeclarationContext = new IfDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 140, SCSSParser.RULE_ifDeclaration);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 944;
			this.match(SCSSParser.AtIf);
			this.state = 945;
			this.expression();
			this.state = 946;
			this.block();
			this.state = 950;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 125, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 947;
					this.elseIfStatement();
					}
					}
				}
				this.state = 952;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 125, this._ctx);
			}
			this.state = 954;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===34) {
				{
				this.state = 953;
				this.elseStatement();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public elseIfStatement(): ElseIfStatementContext {
		let localctx: ElseIfStatementContext = new ElseIfStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 142, SCSSParser.RULE_elseIfStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 956;
			this.match(SCSSParser.AtElse);
			this.state = 957;
			this.match(SCSSParser.If);
			this.state = 958;
			this.expression();
			this.state = 959;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public elseStatement(): ElseStatementContext {
		let localctx: ElseStatementContext = new ElseStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 144, SCSSParser.RULE_elseStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 961;
			this.match(SCSSParser.AtElse);
			this.state = 962;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public forDeclaration(): ForDeclarationContext {
		let localctx: ForDeclarationContext = new ForDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 146, SCSSParser.RULE_forDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 964;
			this.match(SCSSParser.AtFor);
			this.state = 965;
			this.variableName();
			this.state = 966;
			this.match(SCSSParser.From);
			this.state = 967;
			this.match(SCSSParser.Number);
			this.state = 968;
			_la = this._input.LA(1);
			if(!(_la===38 || _la===39)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 969;
			this.through();
			this.state = 970;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public through(): ThroughContext {
		let localctx: ThroughContext = new ThroughContext(this, this._ctx, this.state);
		this.enterRule(localctx, 148, SCSSParser.RULE_through);
		try {
			this.state = 975;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 127, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 972;
				this.match(SCSSParser.Number);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 973;
				this.functionCall();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 974;
				this.expression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public whileDeclaration(): WhileDeclarationContext {
		let localctx: WhileDeclarationContext = new WhileDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 150, SCSSParser.RULE_whileDeclaration);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 977;
			this.match(SCSSParser.AtWhile);
			this.state = 978;
			this.expression();
			this.state = 979;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public eachDeclaration(): EachDeclarationContext {
		let localctx: EachDeclarationContext = new EachDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 152, SCSSParser.RULE_eachDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 981;
			this.match(SCSSParser.AtEach);
			this.state = 982;
			this.variableName();
			this.state = 987;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===57) {
				{
				{
				this.state = 983;
				this.match(SCSSParser.Comma);
				this.state = 984;
				this.variableName();
				}
				}
				this.state = 989;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 990;
			this.match(SCSSParser.In);
			this.state = 991;
			this.eachValueList();
			this.state = 992;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public eachValueList(): EachValueListContext {
		let localctx: EachValueListContext = new EachValueListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 154, SCSSParser.RULE_eachValueList);
		try {
			this.state = 996;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 129, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 994;
				this.listDeclaration();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 995;
				this.mapDeclaration();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public var_(): Var_Context {
		let localctx: Var_Context = new Var_Context(this, this._ctx, this.state);
		this.enterRule(localctx, 156, SCSSParser.RULE_var_);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 998;
			this.match(SCSSParser.Var);
			this.state = 999;
			this.match(SCSSParser.Variable);
			this.state = 1002;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===57) {
				{
				this.state = 1000;
				this.match(SCSSParser.Comma);
				this.state = 1001;
				this.value();
				}
			}

			this.state = 1004;
			this.match(SCSSParser.Rparen);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public calc(): CalcContext {
		let localctx: CalcContext = new CalcContext(this, this._ctx, this.state);
		this.enterRule(localctx, 158, SCSSParser.RULE_calc);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1006;
			this.match(SCSSParser.Calc);
			this.state = 1007;
			this.expression();
			this.state = 1008;
			this.match(SCSSParser.Rparen);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public rotate(): RotateContext {
		let localctx: RotateContext = new RotateContext(this, this._ctx, this.state);
		this.enterRule(localctx, 160, SCSSParser.RULE_rotate);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1010;
			this.match(SCSSParser.Rotate);
			this.state = 1011;
			this.degree();
			this.state = 1012;
			this.match(SCSSParser.Rparen);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public rgba(): RgbaContext {
		let localctx: RgbaContext = new RgbaContext(this, this._ctx, this.state);
		this.enterRule(localctx, 162, SCSSParser.RULE_rgba);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1014;
			this.match(SCSSParser.Rgba);
			this.state = 1015;
			this.value();
			this.state = 1022;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2147516384) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 4061280275) !== 0) || ((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & 32632833) !== 0)) {
				{
				{
				this.state = 1017;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===57) {
					{
					this.state = 1016;
					this.match(SCSSParser.Comma);
					}
				}

				this.state = 1019;
				this.value();
				}
				}
				this.state = 1024;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1025;
			this.match(SCSSParser.Rparen);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public repeat(): RepeatContext {
		let localctx: RepeatContext = new RepeatContext(this, this._ctx, this.state);
		this.enterRule(localctx, 164, SCSSParser.RULE_repeat);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1027;
			this.match(SCSSParser.Repeat);
			this.state = 1028;
			this.value();
			this.state = 1029;
			this.match(SCSSParser.Comma);
			this.state = 1030;
			this.number_();
			this.state = 1031;
			this.match(SCSSParser.Freq);
			this.state = 1032;
			this.match(SCSSParser.Rparen);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public unit(): UnitContext {
		let localctx: UnitContext = new UnitContext(this, this._ctx, this.state);
		this.enterRule(localctx, 166, SCSSParser.RULE_unit);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1038;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 133, this._ctx) ) {
			case 1:
				{
				this.state = 1034;
				this.length();
				}
				break;
			case 2:
				{
				this.state = 1035;
				this.dimension();
				}
				break;
			case 3:
				{
				this.state = 1036;
				this.percentage();
				}
				break;
			case 4:
				{
				this.state = 1037;
				this.degree();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public length(): LengthContext {
		let localctx: LengthContext = new LengthContext(this, this._ctx, this.state);
		this.enterRule(localctx, 168, SCSSParser.RULE_length);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1041;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===68 || _la===70) {
				{
				this.state = 1040;
				this.plusMinus();
				}
			}

			this.state = 1043;
			this.match(SCSSParser.Number);
			this.state = 1044;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 896) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public dimension(): DimensionContext {
		let localctx: DimensionContext = new DimensionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 170, SCSSParser.RULE_dimension);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1047;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===68 || _la===70) {
				{
				this.state = 1046;
				this.plusMinus();
				}
			}

			this.state = 1049;
			this.match(SCSSParser.Number);
			this.state = 1050;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 15360) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public percentage(): PercentageContext {
		let localctx: PercentageContext = new PercentageContext(this, this._ctx, this.state);
		this.enterRule(localctx, 172, SCSSParser.RULE_percentage);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1053;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===68 || _la===70) {
				{
				this.state = 1052;
				this.plusMinus();
				}
			}

			this.state = 1055;
			this.match(SCSSParser.Number);
			this.state = 1056;
			this.match(SCSSParser.Percentage);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public degree(): DegreeContext {
		let localctx: DegreeContext = new DegreeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 174, SCSSParser.RULE_degree);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1059;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===68 || _la===70) {
				{
				this.state = 1058;
				this.plusMinus();
				}
			}

			this.state = 1061;
			this.match(SCSSParser.Number);
			this.state = 1062;
			this.match(SCSSParser.Angle);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public measurment(): MeasurmentContext {
		let localctx: MeasurmentContext = new MeasurmentContext(this, this._ctx, this.state);
		this.enterRule(localctx, 176, SCSSParser.RULE_measurment);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1064;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 32640) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public uri(): UriContext {
		let localctx: UriContext = new UriContext(this, this._ctx, this.state);
		this.enterRule(localctx, 178, SCSSParser.RULE_uri);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1066;
			this.match(SCSSParser.Uri);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public arglist(): ArglistContext {
		let localctx: ArglistContext = new ArglistContext(this, this._ctx, this.state);
		this.enterRule(localctx, 180, SCSSParser.RULE_arglist);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1068;
			this.match(SCSSParser.Dot);
			this.state = 1069;
			this.match(SCSSParser.Dot);
			this.state = 1070;
			this.match(SCSSParser.Dot);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public plusMinus(): PlusMinusContext {
		let localctx: PlusMinusContext = new PlusMinusContext(this, this._ctx, this.state);
		this.enterRule(localctx, 182, SCSSParser.RULE_plusMinus);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1072;
			_la = this._input.LA(1);
			if(!(_la===68 || _la===70)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public hexcolor(): HexcolorContext {
		let localctx: HexcolorContext = new HexcolorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 184, SCSSParser.RULE_hexcolor);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1074;
			this.match(SCSSParser.Hash);
			this.state = 1075;
			this.color();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public color(): ColorContext {
		let localctx: ColorContext = new ColorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 186, SCSSParser.RULE_color);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1078;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1077;
					_la = this._input.LA(1);
					if(!(_la===92 || _la===94)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1080;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 138, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public boolean_(): BooleanContext {
		let localctx: BooleanContext = new BooleanContext(this, this._ctx, this.state);
		this.enterRule(localctx, 188, SCSSParser.RULE_boolean);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1082;
			_la = this._input.LA(1);
			if(!(_la===66 || _la===67)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public number_(): NumberContext {
		let localctx: NumberContext = new NumberContext(this, this._ctx, this.state);
		this.enterRule(localctx, 190, SCSSParser.RULE_number);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1085;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===68 || _la===70) {
				{
				this.state = 1084;
				this.plusMinus();
				}
			}

			this.state = 1087;
			this.match(SCSSParser.Number);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public identifier(): IdentifierContext {
		let localctx: IdentifierContext = new IdentifierContext(this, this._ctx, this.state);
		this.enterRule(localctx, 192, SCSSParser.RULE_identifier);
		let _la: number;
		try {
			this.state = 1095;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 70:
			case 90:
			case 94:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1090;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===70 || _la===90) {
					{
					this.state = 1089;
					_la = this._input.LA(1);
					if(!(_la===70 || _la===90)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					}
				}

				this.state = 1092;
				this.match(SCSSParser.Ident);
				}
				break;
			case 37:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1093;
				this.match(SCSSParser.From);
				}
				break;
			case 38:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1094;
				this.match(SCSSParser.To);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public static readonly _serializedATN: number[] = [4,1,94,1098,2,0,7,0,
	2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,
	2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,
	17,7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,
	7,24,2,25,7,25,2,26,7,26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,
	31,2,32,7,32,2,33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,
	2,39,7,39,2,40,7,40,2,41,7,41,2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,
	46,7,46,2,47,7,47,2,48,7,48,2,49,7,49,2,50,7,50,2,51,7,51,2,52,7,52,2,53,
	7,53,2,54,7,54,2,55,7,55,2,56,7,56,2,57,7,57,2,58,7,58,2,59,7,59,2,60,7,
	60,2,61,7,61,2,62,7,62,2,63,7,63,2,64,7,64,2,65,7,65,2,66,7,66,2,67,7,67,
	2,68,7,68,2,69,7,69,2,70,7,70,2,71,7,71,2,72,7,72,2,73,7,73,2,74,7,74,2,
	75,7,75,2,76,7,76,2,77,7,77,2,78,7,78,2,79,7,79,2,80,7,80,2,81,7,81,2,82,
	7,82,2,83,7,83,2,84,7,84,2,85,7,85,2,86,7,86,2,87,7,87,2,88,7,88,2,89,7,
	89,2,90,7,90,2,91,7,91,2,92,7,92,2,93,7,93,2,94,7,94,2,95,7,95,2,96,7,96,
	1,0,5,0,196,8,0,10,0,12,0,199,9,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
	1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,224,8,1,1,2,1,
	2,1,2,3,2,229,8,2,1,2,1,2,1,2,3,2,234,8,2,1,2,1,2,1,2,3,2,239,8,2,1,2,3,
	2,242,8,2,1,2,3,2,245,8,2,1,2,1,2,3,2,249,8,2,1,3,1,3,3,3,253,8,3,1,4,1,
	4,1,4,3,4,258,8,4,1,5,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,6,3,6,269,8,6,1,6,3,
	6,272,8,6,1,7,1,7,1,7,1,7,4,7,278,8,7,11,7,12,7,279,1,7,4,7,283,8,7,11,
	7,12,7,284,1,7,1,7,3,7,289,8,7,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,3,8,299,
	8,8,1,8,1,8,3,8,303,8,8,1,8,3,8,306,8,8,1,8,1,8,1,8,3,8,311,8,8,1,8,3,8,
	314,8,8,1,9,1,9,1,9,4,9,319,8,9,11,9,12,9,320,1,10,1,10,1,10,1,10,3,10,
	327,8,10,1,11,1,11,1,12,1,12,3,12,333,8,12,1,12,3,12,336,8,12,1,12,1,12,
	1,12,1,12,1,12,1,12,3,12,344,8,12,1,12,3,12,347,8,12,1,13,1,13,1,13,1,13,
	1,14,1,14,1,14,5,14,356,8,14,10,14,12,14,359,9,14,3,14,361,8,14,1,15,3,
	15,364,8,15,1,15,1,15,3,15,368,8,15,1,15,1,15,5,15,372,8,15,10,15,12,15,
	375,9,15,1,15,1,15,1,15,5,15,380,8,15,10,15,12,15,383,9,15,3,15,385,8,15,
	1,16,1,16,1,16,1,16,3,16,391,8,16,1,16,1,16,1,17,1,17,1,17,1,17,1,17,1,
	17,1,17,3,17,402,8,17,1,17,1,17,1,18,1,18,1,18,1,18,1,18,3,18,411,8,18,
	1,18,3,18,414,8,18,1,19,1,19,1,19,5,19,419,8,19,10,19,12,19,422,9,19,1,
	19,1,19,1,20,1,20,3,20,428,8,20,1,20,1,20,1,21,1,21,5,21,434,8,21,10,21,
	12,21,437,9,21,1,21,1,21,3,21,441,8,21,1,22,1,22,1,22,1,23,1,23,3,23,448,
	8,23,1,23,1,23,3,23,452,8,23,1,23,1,23,1,23,1,23,1,23,1,23,3,23,460,8,23,
	1,23,3,23,463,8,23,1,24,1,24,1,24,1,24,3,24,469,8,24,1,25,1,25,1,25,3,25,
	474,8,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,4,25,484,8,25,11,25,12,
	25,485,1,25,3,25,489,8,25,1,26,1,26,1,26,1,26,1,27,1,27,1,27,1,27,1,28,
	1,28,1,28,1,28,1,28,1,28,1,28,3,28,506,8,28,1,28,1,28,1,29,1,29,1,29,1,
	30,1,30,5,30,515,8,30,10,30,12,30,518,9,30,1,30,3,30,521,8,30,1,30,1,30,
	1,31,1,31,1,31,5,31,528,8,31,10,31,12,31,531,9,31,1,32,3,32,534,8,32,1,
	32,1,32,1,32,1,32,5,32,540,8,32,10,32,12,32,543,9,32,1,33,1,33,1,34,1,34,
	3,34,549,8,34,1,34,1,34,1,34,1,34,1,34,1,34,1,34,1,34,3,34,559,8,34,1,34,
	5,34,562,8,34,10,34,12,34,565,9,34,1,34,1,34,1,34,1,34,1,34,1,34,1,34,1,
	34,1,34,3,34,576,8,34,1,34,4,34,579,8,34,11,34,12,34,580,3,34,583,8,34,
	1,35,1,35,1,35,1,36,3,36,589,8,36,1,36,1,36,3,36,593,8,36,1,36,1,36,3,36,
	597,8,36,1,37,1,37,3,37,601,8,37,1,37,1,37,1,38,3,38,606,8,38,1,38,1,38,
	1,39,1,39,1,39,1,39,4,39,614,8,39,11,39,12,39,615,1,40,3,40,619,8,40,1,
	40,1,40,1,40,3,40,624,8,40,1,40,1,40,1,40,3,40,629,8,40,1,40,1,40,3,40,
	633,8,40,1,41,1,41,1,42,1,42,3,42,639,8,42,1,42,1,42,1,42,1,42,3,42,645,
	8,42,3,42,647,8,42,1,42,1,42,1,43,1,43,3,43,653,8,43,1,43,1,43,1,43,3,43,
	658,8,43,1,44,1,44,1,44,4,44,663,8,44,11,44,12,44,664,1,44,1,44,1,45,1,
	45,1,45,3,45,672,8,45,1,45,3,45,675,8,45,1,46,1,46,1,46,1,46,1,47,1,47,
	1,47,1,47,1,47,1,47,3,47,687,8,47,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,
	48,1,48,1,48,1,48,1,48,3,48,701,8,48,1,48,1,48,1,48,1,48,3,48,707,8,48,
	1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,
	49,1,49,1,49,1,49,1,49,1,49,1,49,3,49,730,8,49,1,50,1,50,3,50,734,8,50,
	1,50,3,50,737,8,50,1,50,1,50,1,50,1,50,1,50,3,50,744,8,50,1,50,1,50,1,51,
	3,51,749,8,51,1,51,1,51,5,51,753,8,51,10,51,12,51,756,9,51,1,52,1,52,1,
	52,1,52,3,52,762,8,52,1,52,3,52,765,8,52,1,52,3,52,768,8,52,1,53,5,53,771,
	8,53,10,53,12,53,774,9,53,1,53,3,53,777,8,53,1,54,1,54,1,54,1,54,5,54,783,
	8,54,10,54,12,54,786,9,54,1,54,3,54,789,8,54,1,55,1,55,1,55,1,55,3,55,795,
	8,55,1,56,3,56,798,8,56,1,56,1,56,1,56,1,56,1,56,1,57,3,57,806,8,57,1,57,
	1,57,1,57,3,57,811,8,57,1,57,1,57,5,57,815,8,57,10,57,12,57,818,9,57,1,
	58,1,58,1,58,1,58,1,58,1,58,1,58,1,58,1,58,1,58,1,58,1,58,1,58,1,58,1,58,
	1,58,1,58,3,58,837,8,58,1,58,1,58,3,58,841,8,58,1,58,1,58,1,58,3,58,846,
	8,58,1,59,1,59,1,59,1,59,3,59,852,8,59,1,59,1,59,1,59,1,59,1,59,1,59,3,
	59,860,8,59,1,59,3,59,863,8,59,1,60,1,60,1,60,3,60,868,8,60,1,60,1,60,1,
	60,1,60,3,60,874,8,60,1,61,1,61,1,61,5,61,879,8,61,10,61,12,61,882,9,61,
	1,61,3,61,885,8,61,1,62,4,62,888,8,62,11,62,12,62,889,1,63,1,63,1,63,3,
	63,895,8,63,1,63,1,63,1,64,3,64,900,8,64,1,64,1,64,3,64,904,8,64,4,64,906,
	8,64,11,64,12,64,907,1,64,3,64,911,8,64,1,64,3,64,914,8,64,1,65,1,65,1,
	65,1,65,1,66,1,66,1,66,5,66,923,8,66,10,66,12,66,926,9,66,1,66,3,66,929,
	8,66,1,67,1,67,1,67,1,67,1,68,1,68,1,68,3,68,938,8,68,1,69,1,69,1,69,3,
	69,943,8,69,1,70,1,70,1,70,1,70,5,70,949,8,70,10,70,12,70,952,9,70,1,70,
	3,70,955,8,70,1,71,1,71,1,71,1,71,1,71,1,72,1,72,1,72,1,73,1,73,1,73,1,
	73,1,73,1,73,1,73,1,73,1,74,1,74,1,74,3,74,976,8,74,1,75,1,75,1,75,1,75,
	1,76,1,76,1,76,1,76,5,76,986,8,76,10,76,12,76,989,9,76,1,76,1,76,1,76,1,
	76,1,77,1,77,3,77,997,8,77,1,78,1,78,1,78,1,78,3,78,1003,8,78,1,78,1,78,
	1,79,1,79,1,79,1,79,1,80,1,80,1,80,1,80,1,81,1,81,1,81,3,81,1018,8,81,1,
	81,5,81,1021,8,81,10,81,12,81,1024,9,81,1,81,1,81,1,82,1,82,1,82,1,82,1,
	82,1,82,1,82,1,83,1,83,1,83,1,83,3,83,1039,8,83,1,84,3,84,1042,8,84,1,84,
	1,84,1,84,1,85,3,85,1048,8,85,1,85,1,85,1,85,1,86,3,86,1054,8,86,1,86,1,
	86,1,86,1,87,3,87,1060,8,87,1,87,1,87,1,87,1,88,1,88,1,89,1,89,1,90,1,90,
	1,90,1,90,1,91,1,91,1,92,1,92,1,92,1,93,4,93,1079,8,93,11,93,12,93,1080,
	1,94,1,94,1,95,3,95,1086,8,95,1,95,1,95,1,96,3,96,1091,8,96,1,96,1,96,1,
	96,3,96,1096,8,96,1,96,0,0,97,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,
	32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,
	80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,118,120,
	122,124,126,128,130,132,134,136,138,140,142,144,146,148,150,152,154,156,
	158,160,162,164,166,168,170,172,174,176,178,180,182,184,186,188,190,192,
	0,12,1,0,48,49,1,0,40,41,4,0,4,4,60,60,68,68,74,74,3,0,72,72,76,77,87,89,
	1,0,38,39,1,0,7,9,1,0,10,13,1,0,7,14,2,0,68,68,70,70,2,0,92,92,94,94,1,
	0,66,67,2,0,70,70,90,90,1261,0,197,1,0,0,0,2,223,1,0,0,0,4,248,1,0,0,0,
	6,252,1,0,0,0,8,254,1,0,0,0,10,259,1,0,0,0,12,264,1,0,0,0,14,288,1,0,0,
	0,16,313,1,0,0,0,18,318,1,0,0,0,20,322,1,0,0,0,22,328,1,0,0,0,24,343,1,
	0,0,0,26,348,1,0,0,0,28,360,1,0,0,0,30,384,1,0,0,0,32,386,1,0,0,0,34,394,
	1,0,0,0,36,405,1,0,0,0,38,415,1,0,0,0,40,425,1,0,0,0,42,440,1,0,0,0,44,
	442,1,0,0,0,46,445,1,0,0,0,48,464,1,0,0,0,50,470,1,0,0,0,52,490,1,0,0,0,
	54,494,1,0,0,0,56,498,1,0,0,0,58,509,1,0,0,0,60,512,1,0,0,0,62,524,1,0,
	0,0,64,533,1,0,0,0,66,544,1,0,0,0,68,582,1,0,0,0,70,584,1,0,0,0,72,588,
	1,0,0,0,74,600,1,0,0,0,76,605,1,0,0,0,78,609,1,0,0,0,80,618,1,0,0,0,82,
	634,1,0,0,0,84,636,1,0,0,0,86,650,1,0,0,0,88,659,1,0,0,0,90,671,1,0,0,0,
	92,676,1,0,0,0,94,686,1,0,0,0,96,706,1,0,0,0,98,729,1,0,0,0,100,731,1,0,
	0,0,102,748,1,0,0,0,104,761,1,0,0,0,106,772,1,0,0,0,108,778,1,0,0,0,110,
	794,1,0,0,0,112,797,1,0,0,0,114,805,1,0,0,0,116,845,1,0,0,0,118,847,1,0,
	0,0,120,873,1,0,0,0,122,875,1,0,0,0,124,887,1,0,0,0,126,891,1,0,0,0,128,
	899,1,0,0,0,130,915,1,0,0,0,132,919,1,0,0,0,134,930,1,0,0,0,136,937,1,0,
	0,0,138,942,1,0,0,0,140,944,1,0,0,0,142,956,1,0,0,0,144,961,1,0,0,0,146,
	964,1,0,0,0,148,975,1,0,0,0,150,977,1,0,0,0,152,981,1,0,0,0,154,996,1,0,
	0,0,156,998,1,0,0,0,158,1006,1,0,0,0,160,1010,1,0,0,0,162,1014,1,0,0,0,
	164,1027,1,0,0,0,166,1038,1,0,0,0,168,1041,1,0,0,0,170,1047,1,0,0,0,172,
	1053,1,0,0,0,174,1059,1,0,0,0,176,1064,1,0,0,0,178,1066,1,0,0,0,180,1068,
	1,0,0,0,182,1072,1,0,0,0,184,1074,1,0,0,0,186,1078,1,0,0,0,188,1082,1,0,
	0,0,190,1085,1,0,0,0,192,1095,1,0,0,0,194,196,3,2,1,0,195,194,1,0,0,0,196,
	199,1,0,0,0,197,195,1,0,0,0,197,198,1,0,0,0,198,200,1,0,0,0,199,197,1,0,
	0,0,200,201,5,0,0,1,201,1,1,0,0,0,202,224,3,4,2,0,203,224,3,12,6,0,204,
	224,3,20,10,0,205,224,3,48,24,0,206,224,3,26,13,0,207,224,3,34,17,0,208,
	224,3,36,18,0,209,224,3,100,50,0,210,224,3,140,70,0,211,224,3,146,73,0,
	212,224,3,150,75,0,213,224,3,152,76,0,214,224,3,38,19,0,215,224,3,40,20,
	0,216,224,3,46,23,0,217,224,3,50,25,0,218,224,3,52,26,0,219,224,3,54,27,
	0,220,224,3,58,29,0,221,224,3,56,28,0,222,224,3,44,22,0,223,202,1,0,0,0,
	223,203,1,0,0,0,223,204,1,0,0,0,223,205,1,0,0,0,223,206,1,0,0,0,223,207,
	1,0,0,0,223,208,1,0,0,0,223,209,1,0,0,0,223,210,1,0,0,0,223,211,1,0,0,0,
	223,212,1,0,0,0,223,213,1,0,0,0,223,214,1,0,0,0,223,215,1,0,0,0,223,216,
	1,0,0,0,223,217,1,0,0,0,223,218,1,0,0,0,223,219,1,0,0,0,223,220,1,0,0,0,
	223,221,1,0,0,0,223,222,1,0,0,0,224,3,1,0,0,0,225,226,5,15,0,0,226,228,
	3,6,3,0,227,229,5,59,0,0,228,227,1,0,0,0,228,229,1,0,0,0,229,249,1,0,0,
	0,230,231,5,18,0,0,231,233,3,6,3,0,232,234,5,59,0,0,233,232,1,0,0,0,233,
	234,1,0,0,0,234,249,1,0,0,0,235,236,5,17,0,0,236,238,3,6,3,0,237,239,3,
	8,4,0,238,237,1,0,0,0,238,239,1,0,0,0,239,241,1,0,0,0,240,242,3,10,5,0,
	241,240,1,0,0,0,241,242,1,0,0,0,242,244,1,0,0,0,243,245,5,59,0,0,244,243,
	1,0,0,0,244,245,1,0,0,0,245,249,1,0,0,0,246,247,5,23,0,0,247,249,3,6,3,
	0,248,225,1,0,0,0,248,230,1,0,0,0,248,235,1,0,0,0,248,246,1,0,0,0,249,5,
	1,0,0,0,250,253,3,178,89,0,251,253,5,93,0,0,252,250,1,0,0,0,252,251,1,0,
	0,0,253,7,1,0,0,0,254,257,5,44,0,0,255,258,5,71,0,0,256,258,3,192,96,0,
	257,255,1,0,0,0,257,256,1,0,0,0,258,9,1,0,0,0,259,260,5,45,0,0,260,261,
	5,50,0,0,261,262,3,102,51,0,262,263,5,51,0,0,263,11,1,0,0,0,264,265,3,16,
	8,0,265,266,5,58,0,0,266,268,3,14,7,0,267,269,3,22,11,0,268,267,1,0,0,0,
	268,269,1,0,0,0,269,271,1,0,0,0,270,272,5,59,0,0,271,270,1,0,0,0,271,272,
	1,0,0,0,272,13,1,0,0,0,273,289,3,98,49,0,274,289,3,100,50,0,275,289,3,112,
	56,0,276,278,3,130,65,0,277,276,1,0,0,0,278,279,1,0,0,0,279,277,1,0,0,0,
	279,280,1,0,0,0,280,289,1,0,0,0,281,283,3,120,60,0,282,281,1,0,0,0,283,
	284,1,0,0,0,284,282,1,0,0,0,284,285,1,0,0,0,285,289,1,0,0,0,286,289,3,16,
	8,0,287,289,3,192,96,0,288,273,1,0,0,0,288,274,1,0,0,0,288,275,1,0,0,0,
	288,277,1,0,0,0,288,282,1,0,0,0,288,286,1,0,0,0,288,287,1,0,0,0,289,15,
	1,0,0,0,290,291,5,70,0,0,291,292,5,70,0,0,292,293,1,0,0,0,293,299,5,62,
	0,0,294,295,3,182,91,0,295,296,5,62,0,0,296,299,1,0,0,0,297,299,5,62,0,
	0,298,290,1,0,0,0,298,294,1,0,0,0,298,297,1,0,0,0,299,300,1,0,0,0,300,314,
	3,192,96,0,301,303,3,182,91,0,302,301,1,0,0,0,302,303,1,0,0,0,303,305,1,
	0,0,0,304,306,3,18,9,0,305,304,1,0,0,0,305,306,1,0,0,0,306,307,1,0,0,0,
	307,310,5,62,0,0,308,311,3,192,96,0,309,311,3,176,88,0,310,308,1,0,0,0,
	310,309,1,0,0,0,311,314,1,0,0,0,312,314,5,91,0,0,313,298,1,0,0,0,313,302,
	1,0,0,0,313,312,1,0,0,0,314,17,1,0,0,0,315,316,3,192,96,0,316,317,5,56,
	0,0,317,319,1,0,0,0,318,315,1,0,0,0,319,320,1,0,0,0,320,318,1,0,0,0,320,
	321,1,0,0,0,321,19,1,0,0,0,322,323,3,192,96,0,323,324,5,58,0,0,324,326,
	3,24,12,0,325,327,5,59,0,0,326,325,1,0,0,0,326,327,1,0,0,0,327,21,1,0,0,
	0,328,329,7,0,0,0,329,23,1,0,0,0,330,344,3,98,49,0,331,333,3,98,49,0,332,
	331,1,0,0,0,332,333,1,0,0,0,333,335,1,0,0,0,334,336,3,22,11,0,335,334,1,
	0,0,0,335,336,1,0,0,0,336,337,1,0,0,0,337,344,3,60,30,0,338,344,3,16,8,
	0,339,344,3,124,62,0,340,344,3,122,61,0,341,344,3,114,57,0,342,344,3,112,
	56,0,343,330,1,0,0,0,343,332,1,0,0,0,343,338,1,0,0,0,343,339,1,0,0,0,343,
	340,1,0,0,0,343,341,1,0,0,0,343,342,1,0,0,0,344,346,1,0,0,0,345,347,3,22,
	11,0,346,345,1,0,0,0,346,347,1,0,0,0,347,25,1,0,0,0,348,349,5,27,0,0,349,
	350,3,28,14,0,350,351,3,60,30,0,351,27,1,0,0,0,352,357,3,30,15,0,353,354,
	5,57,0,0,354,356,3,30,15,0,355,353,1,0,0,0,356,359,1,0,0,0,357,355,1,0,
	0,0,357,358,1,0,0,0,358,361,1,0,0,0,359,357,1,0,0,0,360,352,1,0,0,0,360,
	361,1,0,0,0,361,29,1,0,0,0,362,364,7,1,0,0,363,362,1,0,0,0,363,364,1,0,
	0,0,364,367,1,0,0,0,365,368,3,192,96,0,366,368,3,98,49,0,367,365,1,0,0,
	0,367,366,1,0,0,0,368,373,1,0,0,0,369,370,5,42,0,0,370,372,3,32,16,0,371,
	369,1,0,0,0,372,375,1,0,0,0,373,371,1,0,0,0,373,374,1,0,0,0,374,385,1,0,
	0,0,375,373,1,0,0,0,376,381,3,32,16,0,377,378,5,42,0,0,378,380,3,32,16,
	0,379,377,1,0,0,0,380,383,1,0,0,0,381,379,1,0,0,0,381,382,1,0,0,0,382,385,
	1,0,0,0,383,381,1,0,0,0,384,363,1,0,0,0,384,376,1,0,0,0,385,31,1,0,0,0,
	386,387,5,50,0,0,387,390,3,192,96,0,388,389,5,58,0,0,389,391,3,98,49,0,
	390,388,1,0,0,0,390,391,1,0,0,0,391,392,1,0,0,0,392,393,5,51,0,0,393,33,
	1,0,0,0,394,401,5,20,0,0,395,402,3,192,96,0,396,397,3,192,96,0,397,398,
	5,50,0,0,398,399,3,102,51,0,399,400,5,51,0,0,400,402,1,0,0,0,401,395,1,
	0,0,0,401,396,1,0,0,0,402,403,1,0,0,0,403,404,3,60,30,0,404,35,1,0,0,0,
	405,410,5,24,0,0,406,407,5,50,0,0,407,408,3,102,51,0,408,409,5,51,0,0,409,
	411,1,0,0,0,410,406,1,0,0,0,410,411,1,0,0,0,411,413,1,0,0,0,412,414,5,59,
	0,0,413,412,1,0,0,0,413,414,1,0,0,0,414,37,1,0,0,0,415,416,5,22,0,0,416,
	420,5,54,0,0,417,419,3,2,1,0,418,417,1,0,0,0,419,422,1,0,0,0,420,418,1,
	0,0,0,420,421,1,0,0,0,421,423,1,0,0,0,422,420,1,0,0,0,423,424,5,55,0,0,
	424,39,1,0,0,0,425,427,5,25,0,0,426,428,3,192,96,0,427,426,1,0,0,0,427,
	428,1,0,0,0,428,429,1,0,0,0,429,430,3,42,21,0,430,41,1,0,0,0,431,435,5,
	54,0,0,432,434,3,44,22,0,433,432,1,0,0,0,434,437,1,0,0,0,435,433,1,0,0,
	0,435,436,1,0,0,0,436,438,1,0,0,0,437,435,1,0,0,0,438,441,5,55,0,0,439,
	441,3,60,30,0,440,431,1,0,0,0,440,439,1,0,0,0,441,43,1,0,0,0,442,443,3,
	172,86,0,443,444,3,60,30,0,444,45,1,0,0,0,445,447,5,16,0,0,446,448,3,18,
	9,0,447,446,1,0,0,0,447,448,1,0,0,0,448,451,1,0,0,0,449,452,3,192,96,0,
	450,452,3,112,56,0,451,449,1,0,0,0,451,450,1,0,0,0,452,459,1,0,0,0,453,
	460,5,59,0,0,454,455,5,43,0,0,455,456,5,50,0,0,456,457,3,102,51,0,457,458,
	5,51,0,0,458,460,1,0,0,0,459,453,1,0,0,0,459,454,1,0,0,0,459,460,1,0,0,
	0,460,462,1,0,0,0,461,463,3,60,30,0,462,461,1,0,0,0,462,463,1,0,0,0,463,
	47,1,0,0,0,464,465,3,80,40,0,465,466,5,58,0,0,466,468,3,24,12,0,467,469,
	5,59,0,0,468,467,1,0,0,0,468,469,1,0,0,0,469,49,1,0,0,0,470,473,5,28,0,
	0,471,474,5,14,0,0,472,474,3,82,41,0,473,471,1,0,0,0,473,472,1,0,0,0,473,
	474,1,0,0,0,474,483,1,0,0,0,475,484,3,70,35,0,476,484,3,72,36,0,477,484,
	3,76,38,0,478,484,3,78,39,0,479,484,3,84,42,0,480,484,3,86,43,0,481,484,
	3,80,40,0,482,484,3,82,41,0,483,475,1,0,0,0,483,476,1,0,0,0,483,477,1,0,
	0,0,483,478,1,0,0,0,483,479,1,0,0,0,483,480,1,0,0,0,483,481,1,0,0,0,483,
	482,1,0,0,0,484,485,1,0,0,0,485,483,1,0,0,0,485,486,1,0,0,0,486,488,1,0,
	0,0,487,489,5,59,0,0,488,487,1,0,0,0,488,489,1,0,0,0,489,51,1,0,0,0,490,
	491,5,29,0,0,491,492,5,93,0,0,492,493,5,59,0,0,493,53,1,0,0,0,494,495,5,
	30,0,0,495,496,5,93,0,0,496,497,5,59,0,0,497,55,1,0,0,0,498,505,5,63,0,
	0,499,500,3,192,96,0,500,501,5,50,0,0,501,502,3,102,51,0,502,503,5,51,0,
	0,503,506,1,0,0,0,504,506,3,192,96,0,505,499,1,0,0,0,505,504,1,0,0,0,506,
	507,1,0,0,0,507,508,3,60,30,0,508,57,1,0,0,0,509,510,3,62,31,0,510,511,
	3,60,30,0,511,59,1,0,0,0,512,516,5,54,0,0,513,515,3,2,1,0,514,513,1,0,0,
	0,515,518,1,0,0,0,516,514,1,0,0,0,516,517,1,0,0,0,517,520,1,0,0,0,518,516,
	1,0,0,0,519,521,3,108,54,0,520,519,1,0,0,0,520,521,1,0,0,0,521,522,1,0,
	0,0,522,523,5,55,0,0,523,61,1,0,0,0,524,529,3,64,32,0,525,526,5,57,0,0,
	526,528,3,64,32,0,527,525,1,0,0,0,528,531,1,0,0,0,529,527,1,0,0,0,529,530,
	1,0,0,0,530,63,1,0,0,0,531,529,1,0,0,0,532,534,3,66,33,0,533,532,1,0,0,
	0,533,534,1,0,0,0,534,535,1,0,0,0,535,541,3,68,34,0,536,537,3,66,33,0,537,
	538,3,68,34,0,538,540,1,0,0,0,539,536,1,0,0,0,540,543,1,0,0,0,541,539,1,
	0,0,0,541,542,1,0,0,0,542,65,1,0,0,0,543,541,1,0,0,0,544,545,7,2,0,0,545,
	67,1,0,0,0,546,549,3,72,36,0,547,549,3,76,38,0,548,546,1,0,0,0,548,547,
	1,0,0,0,549,563,1,0,0,0,550,562,3,70,35,0,551,562,3,78,39,0,552,562,3,84,
	42,0,553,562,3,86,43,0,554,562,3,92,46,0,555,558,3,80,40,0,556,559,3,16,
	8,0,557,559,5,14,0,0,558,556,1,0,0,0,558,557,1,0,0,0,558,559,1,0,0,0,559,
	562,1,0,0,0,560,562,3,82,41,0,561,550,1,0,0,0,561,551,1,0,0,0,561,552,1,
	0,0,0,561,553,1,0,0,0,561,554,1,0,0,0,561,555,1,0,0,0,561,560,1,0,0,0,562,
	565,1,0,0,0,563,561,1,0,0,0,563,564,1,0,0,0,564,583,1,0,0,0,565,563,1,0,
	0,0,566,579,3,72,36,0,567,579,3,70,35,0,568,579,3,78,39,0,569,579,3,84,
	42,0,570,579,3,86,43,0,571,579,3,92,46,0,572,575,3,80,40,0,573,576,3,16,
	8,0,574,576,5,14,0,0,575,573,1,0,0,0,575,574,1,0,0,0,575,576,1,0,0,0,576,
	579,1,0,0,0,577,579,3,82,41,0,578,566,1,0,0,0,578,567,1,0,0,0,578,568,1,
	0,0,0,578,569,1,0,0,0,578,570,1,0,0,0,578,571,1,0,0,0,578,572,1,0,0,0,578,
	577,1,0,0,0,579,580,1,0,0,0,580,578,1,0,0,0,580,581,1,0,0,0,581,583,1,0,
	0,0,582,548,1,0,0,0,582,578,1,0,0,0,583,69,1,0,0,0,584,585,5,65,0,0,585,
	586,3,192,96,0,586,71,1,0,0,0,587,589,3,74,37,0,588,587,1,0,0,0,588,589,
	1,0,0,0,589,592,1,0,0,0,590,593,5,14,0,0,591,593,3,82,41,0,592,590,1,0,
	0,0,592,591,1,0,0,0,592,593,1,0,0,0,593,596,1,0,0,0,594,597,3,192,96,0,
	595,597,3,16,8,0,596,594,1,0,0,0,596,595,1,0,0,0,597,73,1,0,0,0,598,601,
	3,192,96,0,599,601,5,71,0,0,600,598,1,0,0,0,600,599,1,0,0,0,600,601,1,0,
	0,0,601,602,1,0,0,0,602,603,5,78,0,0,603,75,1,0,0,0,604,606,3,74,37,0,605,
	604,1,0,0,0,605,606,1,0,0,0,606,607,1,0,0,0,607,608,5,71,0,0,608,77,1,0,
	0,0,609,613,5,56,0,0,610,614,5,70,0,0,611,614,3,192,96,0,612,614,3,80,40,
	0,613,610,1,0,0,0,613,611,1,0,0,0,613,612,1,0,0,0,614,615,1,0,0,0,615,613,
	1,0,0,0,615,616,1,0,0,0,616,79,1,0,0,0,617,619,3,18,9,0,618,617,1,0,0,0,
	618,619,1,0,0,0,619,620,1,0,0,0,620,621,5,65,0,0,621,623,5,54,0,0,622,624,
	3,18,9,0,623,622,1,0,0,0,623,624,1,0,0,0,624,628,1,0,0,0,625,629,3,118,
	59,0,626,629,3,98,49,0,627,629,3,82,41,0,628,625,1,0,0,0,628,626,1,0,0,
	0,628,627,1,0,0,0,629,630,1,0,0,0,630,632,5,55,0,0,631,633,3,176,88,0,632,
	631,1,0,0,0,632,633,1,0,0,0,633,81,1,0,0,0,634,635,5,64,0,0,635,83,1,0,
	0,0,636,638,5,52,0,0,637,639,3,74,37,0,638,637,1,0,0,0,638,639,1,0,0,0,
	639,640,1,0,0,0,640,646,3,192,96,0,641,644,7,3,0,0,642,645,3,192,96,0,643,
	645,5,93,0,0,644,642,1,0,0,0,644,643,1,0,0,0,645,647,1,0,0,0,646,641,1,
	0,0,0,646,647,1,0,0,0,647,648,1,0,0,0,648,649,5,53,0,0,649,85,1,0,0,0,650,
	652,5,58,0,0,651,653,5,58,0,0,652,651,1,0,0,0,652,653,1,0,0,0,653,657,1,
	0,0,0,654,658,3,80,40,0,655,658,3,192,96,0,656,658,3,88,44,0,657,654,1,
	0,0,0,657,655,1,0,0,0,657,656,1,0,0,0,658,87,1,0,0,0,659,660,5,94,0,0,660,
	662,5,50,0,0,661,663,3,90,45,0,662,661,1,0,0,0,663,664,1,0,0,0,664,662,
	1,0,0,0,664,665,1,0,0,0,665,666,1,0,0,0,666,667,5,51,0,0,667,89,1,0,0,0,
	668,672,3,98,49,0,669,672,3,78,39,0,670,672,3,80,40,0,671,668,1,0,0,0,671,
	669,1,0,0,0,671,670,1,0,0,0,672,674,1,0,0,0,673,675,5,57,0,0,674,673,1,
	0,0,0,674,675,1,0,0,0,675,91,1,0,0,0,676,677,5,81,0,0,677,678,3,94,47,0,
	678,679,5,51,0,0,679,93,1,0,0,0,680,687,3,72,36,0,681,687,3,76,38,0,682,
	687,5,65,0,0,683,687,3,78,39,0,684,687,3,84,42,0,685,687,3,86,43,0,686,
	680,1,0,0,0,686,681,1,0,0,0,686,682,1,0,0,0,686,683,1,0,0,0,686,684,1,0,
	0,0,686,685,1,0,0,0,687,95,1,0,0,0,688,707,5,69,0,0,689,707,5,71,0,0,690,
	707,5,70,0,0,691,707,5,68,0,0,692,707,5,74,0,0,693,707,5,75,0,0,694,695,
	5,74,0,0,695,707,5,72,0,0,696,697,5,75,0,0,697,707,5,72,0,0,698,700,5,72,
	0,0,699,701,5,72,0,0,700,699,1,0,0,0,700,701,1,0,0,0,701,707,1,0,0,0,702,
	707,5,73,0,0,703,707,5,42,0,0,704,707,5,46,0,0,705,707,5,41,0,0,706,688,
	1,0,0,0,706,689,1,0,0,0,706,690,1,0,0,0,706,691,1,0,0,0,706,692,1,0,0,0,
	706,693,1,0,0,0,706,694,1,0,0,0,706,696,1,0,0,0,706,698,1,0,0,0,706,702,
	1,0,0,0,706,703,1,0,0,0,706,704,1,0,0,0,706,705,1,0,0,0,707,97,1,0,0,0,
	708,730,3,166,83,0,709,730,3,190,95,0,710,730,3,188,94,0,711,730,3,158,
	79,0,712,730,3,160,80,0,713,730,3,162,81,0,714,730,3,156,78,0,715,730,3,
	178,89,0,716,730,3,164,82,0,717,730,5,6,0,0,718,730,5,93,0,0,719,730,3,
	112,56,0,720,730,3,16,8,0,721,730,3,80,40,0,722,730,3,184,92,0,723,730,
	3,192,96,0,724,730,3,114,57,0,725,730,3,60,30,0,726,727,5,50,0,0,727,730,
	5,51,0,0,728,730,3,176,88,0,729,708,1,0,0,0,729,709,1,0,0,0,729,710,1,0,
	0,0,729,711,1,0,0,0,729,712,1,0,0,0,729,713,1,0,0,0,729,714,1,0,0,0,729,
	715,1,0,0,0,729,716,1,0,0,0,729,717,1,0,0,0,729,718,1,0,0,0,729,719,1,0,
	0,0,729,720,1,0,0,0,729,721,1,0,0,0,729,722,1,0,0,0,729,723,1,0,0,0,729,
	724,1,0,0,0,729,725,1,0,0,0,729,726,1,0,0,0,729,728,1,0,0,0,730,99,1,0,
	0,0,731,736,5,21,0,0,732,734,3,18,9,0,733,732,1,0,0,0,733,734,1,0,0,0,734,
	735,1,0,0,0,735,737,3,192,96,0,736,733,1,0,0,0,736,737,1,0,0,0,737,738,
	1,0,0,0,738,739,5,50,0,0,739,740,3,102,51,0,740,741,5,51,0,0,741,743,5,
	54,0,0,742,744,3,106,53,0,743,742,1,0,0,0,743,744,1,0,0,0,744,745,1,0,0,
	0,745,746,5,55,0,0,746,101,1,0,0,0,747,749,3,104,52,0,748,747,1,0,0,0,748,
	749,1,0,0,0,749,754,1,0,0,0,750,751,5,57,0,0,751,753,3,104,52,0,752,750,
	1,0,0,0,753,756,1,0,0,0,754,752,1,0,0,0,754,755,1,0,0,0,755,103,1,0,0,0,
	756,754,1,0,0,0,757,762,3,98,49,0,758,762,3,12,6,0,759,762,3,124,62,0,760,
	762,3,130,65,0,761,757,1,0,0,0,761,758,1,0,0,0,761,759,1,0,0,0,761,760,
	1,0,0,0,762,764,1,0,0,0,763,765,3,180,90,0,764,763,1,0,0,0,764,765,1,0,
	0,0,765,767,1,0,0,0,766,768,3,22,11,0,767,766,1,0,0,0,767,768,1,0,0,0,768,
	105,1,0,0,0,769,771,3,110,55,0,770,769,1,0,0,0,771,774,1,0,0,0,772,770,
	1,0,0,0,772,773,1,0,0,0,773,776,1,0,0,0,774,772,1,0,0,0,775,777,3,108,54,
	0,776,775,1,0,0,0,776,777,1,0,0,0,777,107,1,0,0,0,778,779,5,26,0,0,779,
	784,3,114,57,0,780,781,5,57,0,0,781,783,3,114,57,0,782,780,1,0,0,0,783,
	786,1,0,0,0,784,782,1,0,0,0,784,785,1,0,0,0,785,788,1,0,0,0,786,784,1,0,
	0,0,787,789,5,59,0,0,788,787,1,0,0,0,788,789,1,0,0,0,789,109,1,0,0,0,790,
	791,3,114,57,0,791,792,5,59,0,0,792,795,1,0,0,0,793,795,3,2,1,0,794,790,
	1,0,0,0,794,793,1,0,0,0,795,111,1,0,0,0,796,798,3,18,9,0,797,796,1,0,0,
	0,797,798,1,0,0,0,798,799,1,0,0,0,799,800,3,192,96,0,800,801,5,50,0,0,801,
	802,3,102,51,0,802,803,5,51,0,0,803,113,1,0,0,0,804,806,5,41,0,0,805,804,
	1,0,0,0,805,806,1,0,0,0,806,807,1,0,0,0,807,816,3,116,58,0,808,810,3,96,
	48,0,809,811,5,41,0,0,810,809,1,0,0,0,810,811,1,0,0,0,811,812,1,0,0,0,812,
	813,3,116,58,0,813,815,1,0,0,0,814,808,1,0,0,0,815,818,1,0,0,0,816,814,
	1,0,0,0,816,817,1,0,0,0,817,115,1,0,0,0,818,816,1,0,0,0,819,846,3,166,83,
	0,820,846,3,192,96,0,821,846,3,16,8,0,822,846,3,156,78,0,823,846,3,188,
	94,0,824,846,3,158,79,0,825,846,3,160,80,0,826,846,3,162,81,0,827,846,3,
	190,95,0,828,846,3,178,89,0,829,846,5,6,0,0,830,846,5,93,0,0,831,846,3,
	80,40,0,832,846,3,184,92,0,833,846,3,118,59,0,834,846,3,112,56,0,835,837,
	3,182,91,0,836,835,1,0,0,0,836,837,1,0,0,0,837,838,1,0,0,0,838,840,5,50,
	0,0,839,841,3,114,57,0,840,839,1,0,0,0,840,841,1,0,0,0,841,842,1,0,0,0,
	842,846,5,51,0,0,843,846,3,22,11,0,844,846,3,176,88,0,845,819,1,0,0,0,845,
	820,1,0,0,0,845,821,1,0,0,0,845,822,1,0,0,0,845,823,1,0,0,0,845,824,1,0,
	0,0,845,825,1,0,0,0,845,826,1,0,0,0,845,827,1,0,0,0,845,828,1,0,0,0,845,
	829,1,0,0,0,845,830,1,0,0,0,845,831,1,0,0,0,845,832,1,0,0,0,845,833,1,0,
	0,0,845,834,1,0,0,0,845,836,1,0,0,0,845,843,1,0,0,0,845,844,1,0,0,0,846,
	117,1,0,0,0,847,848,5,31,0,0,848,851,5,50,0,0,849,852,3,114,57,0,850,852,
	3,82,41,0,851,849,1,0,0,0,851,850,1,0,0,0,852,853,1,0,0,0,853,854,5,57,
	0,0,854,855,3,98,49,0,855,856,5,57,0,0,856,857,3,98,49,0,857,859,5,51,0,
	0,858,860,3,176,88,0,859,858,1,0,0,0,859,860,1,0,0,0,860,862,1,0,0,0,861,
	863,3,22,11,0,862,861,1,0,0,0,862,863,1,0,0,0,863,119,1,0,0,0,864,868,3,
	126,63,0,865,868,3,122,61,0,866,868,3,124,62,0,867,864,1,0,0,0,867,865,
	1,0,0,0,867,866,1,0,0,0,868,874,1,0,0,0,869,870,5,50,0,0,870,871,3,120,
	60,0,871,872,5,51,0,0,872,874,1,0,0,0,873,867,1,0,0,0,873,869,1,0,0,0,874,
	121,1,0,0,0,875,880,3,128,64,0,876,877,5,57,0,0,877,879,3,128,64,0,878,
	876,1,0,0,0,879,882,1,0,0,0,880,878,1,0,0,0,880,881,1,0,0,0,881,884,1,0,
	0,0,882,880,1,0,0,0,883,885,5,57,0,0,884,883,1,0,0,0,884,885,1,0,0,0,885,
	123,1,0,0,0,886,888,3,128,64,0,887,886,1,0,0,0,888,889,1,0,0,0,889,887,
	1,0,0,0,889,890,1,0,0,0,890,125,1,0,0,0,891,894,5,52,0,0,892,895,3,124,
	62,0,893,895,3,122,61,0,894,892,1,0,0,0,894,893,1,0,0,0,895,896,1,0,0,0,
	896,897,5,53,0,0,897,127,1,0,0,0,898,900,5,50,0,0,899,898,1,0,0,0,899,900,
	1,0,0,0,900,905,1,0,0,0,901,903,3,98,49,0,902,904,5,57,0,0,903,902,1,0,
	0,0,903,904,1,0,0,0,904,906,1,0,0,0,905,901,1,0,0,0,906,907,1,0,0,0,907,
	905,1,0,0,0,907,908,1,0,0,0,908,910,1,0,0,0,909,911,5,51,0,0,910,909,1,
	0,0,0,910,911,1,0,0,0,911,913,1,0,0,0,912,914,5,57,0,0,913,912,1,0,0,0,
	913,914,1,0,0,0,914,129,1,0,0,0,915,916,5,50,0,0,916,917,3,132,66,0,917,
	918,5,51,0,0,918,131,1,0,0,0,919,924,3,134,67,0,920,921,5,57,0,0,921,923,
	3,134,67,0,922,920,1,0,0,0,923,926,1,0,0,0,924,922,1,0,0,0,924,925,1,0,
	0,0,925,928,1,0,0,0,926,924,1,0,0,0,927,929,5,57,0,0,928,927,1,0,0,0,928,
	929,1,0,0,0,929,133,1,0,0,0,930,931,3,136,68,0,931,932,5,58,0,0,932,933,
	3,138,69,0,933,135,1,0,0,0,934,938,3,98,49,0,935,938,3,120,60,0,936,938,
	3,130,65,0,937,934,1,0,0,0,937,935,1,0,0,0,937,936,1,0,0,0,938,137,1,0,
	0,0,939,943,3,98,49,0,940,943,3,120,60,0,941,943,3,130,65,0,942,939,1,0,
	0,0,942,940,1,0,0,0,942,941,1,0,0,0,943,139,1,0,0,0,944,945,5,32,0,0,945,
	946,3,114,57,0,946,950,3,60,30,0,947,949,3,142,71,0,948,947,1,0,0,0,949,
	952,1,0,0,0,950,948,1,0,0,0,950,951,1,0,0,0,951,954,1,0,0,0,952,950,1,0,
	0,0,953,955,3,144,72,0,954,953,1,0,0,0,954,955,1,0,0,0,955,141,1,0,0,0,
	956,957,5,34,0,0,957,958,5,31,0,0,958,959,3,114,57,0,959,960,3,60,30,0,
	960,143,1,0,0,0,961,962,5,34,0,0,962,963,3,60,30,0,963,145,1,0,0,0,964,
	965,5,33,0,0,965,966,3,16,8,0,966,967,5,37,0,0,967,968,5,92,0,0,968,969,
	7,4,0,0,969,970,3,148,74,0,970,971,3,60,30,0,971,147,1,0,0,0,972,976,5,
	92,0,0,973,976,3,112,56,0,974,976,3,114,57,0,975,972,1,0,0,0,975,973,1,
	0,0,0,975,974,1,0,0,0,976,149,1,0,0,0,977,978,5,35,0,0,978,979,3,114,57,
	0,979,980,3,60,30,0,980,151,1,0,0,0,981,982,5,36,0,0,982,987,3,16,8,0,983,
	984,5,57,0,0,984,986,3,16,8,0,985,983,1,0,0,0,986,989,1,0,0,0,987,985,1,
	0,0,0,987,988,1,0,0,0,988,990,1,0,0,0,989,987,1,0,0,0,990,991,5,47,0,0,
	991,992,3,154,77,0,992,993,3,60,30,0,993,153,1,0,0,0,994,997,3,120,60,0,
	995,997,3,130,65,0,996,994,1,0,0,0,996,995,1,0,0,0,997,155,1,0,0,0,998,
	999,5,84,0,0,999,1002,5,91,0,0,1000,1001,5,57,0,0,1001,1003,3,98,49,0,1002,
	1000,1,0,0,0,1002,1003,1,0,0,0,1003,1004,1,0,0,0,1004,1005,5,51,0,0,1005,
	157,1,0,0,0,1006,1007,5,82,0,0,1007,1008,3,114,57,0,1008,1009,5,51,0,0,
	1009,159,1,0,0,0,1010,1011,5,83,0,0,1011,1012,3,174,87,0,1012,1013,5,51,
	0,0,1013,161,1,0,0,0,1014,1015,5,85,0,0,1015,1022,3,98,49,0,1016,1018,5,
	57,0,0,1017,1016,1,0,0,0,1017,1018,1,0,0,0,1018,1019,1,0,0,0,1019,1021,
	3,98,49,0,1020,1017,1,0,0,0,1021,1024,1,0,0,0,1022,1020,1,0,0,0,1022,1023,
	1,0,0,0,1023,1025,1,0,0,0,1024,1022,1,0,0,0,1025,1026,5,51,0,0,1026,163,
	1,0,0,0,1027,1028,5,86,0,0,1028,1029,3,98,49,0,1029,1030,5,57,0,0,1030,
	1031,3,190,95,0,1031,1032,5,12,0,0,1032,1033,5,51,0,0,1033,165,1,0,0,0,
	1034,1039,3,168,84,0,1035,1039,3,170,85,0,1036,1039,3,172,86,0,1037,1039,
	3,174,87,0,1038,1034,1,0,0,0,1038,1035,1,0,0,0,1038,1036,1,0,0,0,1038,1037,
	1,0,0,0,1039,167,1,0,0,0,1040,1042,3,182,91,0,1041,1040,1,0,0,0,1041,1042,
	1,0,0,0,1042,1043,1,0,0,0,1043,1044,5,92,0,0,1044,1045,7,5,0,0,1045,169,
	1,0,0,0,1046,1048,3,182,91,0,1047,1046,1,0,0,0,1047,1048,1,0,0,0,1048,1049,
	1,0,0,0,1049,1050,5,92,0,0,1050,1051,7,6,0,0,1051,171,1,0,0,0,1052,1054,
	3,182,91,0,1053,1052,1,0,0,0,1053,1054,1,0,0,0,1054,1055,1,0,0,0,1055,1056,
	5,92,0,0,1056,1057,5,14,0,0,1057,173,1,0,0,0,1058,1060,3,182,91,0,1059,
	1058,1,0,0,0,1059,1060,1,0,0,0,1060,1061,1,0,0,0,1061,1062,5,92,0,0,1062,
	1063,5,10,0,0,1063,175,1,0,0,0,1064,1065,7,7,0,0,1065,177,1,0,0,0,1066,
	1067,5,5,0,0,1067,179,1,0,0,0,1068,1069,5,56,0,0,1069,1070,5,56,0,0,1070,
	1071,5,56,0,0,1071,181,1,0,0,0,1072,1073,7,8,0,0,1073,183,1,0,0,0,1074,
	1075,5,65,0,0,1075,1076,3,186,93,0,1076,185,1,0,0,0,1077,1079,7,9,0,0,1078,
	1077,1,0,0,0,1079,1080,1,0,0,0,1080,1078,1,0,0,0,1080,1081,1,0,0,0,1081,
	187,1,0,0,0,1082,1083,7,10,0,0,1083,189,1,0,0,0,1084,1086,3,182,91,0,1085,
	1084,1,0,0,0,1085,1086,1,0,0,0,1086,1087,1,0,0,0,1087,1088,5,92,0,0,1088,
	191,1,0,0,0,1089,1091,7,11,0,0,1090,1089,1,0,0,0,1090,1091,1,0,0,0,1091,
	1092,1,0,0,0,1092,1096,5,94,0,0,1093,1096,5,37,0,0,1094,1096,5,38,0,0,1095,
	1090,1,0,0,0,1095,1093,1,0,0,0,1095,1094,1,0,0,0,1096,193,1,0,0,0,142,197,
	223,228,233,238,241,244,248,252,257,268,271,279,284,288,298,302,305,310,
	313,320,326,332,335,343,346,357,360,363,367,373,381,384,390,401,410,413,
	420,427,435,440,447,451,459,462,468,473,483,485,488,505,516,520,529,533,
	541,548,558,561,563,575,578,580,582,588,592,596,600,605,613,615,618,623,
	628,632,638,644,646,652,657,664,671,674,686,700,706,729,733,736,743,748,
	754,761,764,767,772,776,784,788,794,797,805,810,816,836,840,845,851,859,
	862,867,873,880,884,889,894,899,903,907,910,913,924,928,937,942,950,954,
	975,987,996,1002,1017,1022,1038,1041,1047,1053,1059,1080,1085,1090,1095];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!SCSSParser.__ATN) {
			SCSSParser.__ATN = new ATNDeserializer().deserialize(SCSSParser._serializedATN);
		}

		return SCSSParser.__ATN;
	}


	static DecisionsToDFA = SCSSParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class StylesheetContext extends ParserRuleContext {
	constructor(parser?: SCSSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EOF(): TerminalNode {
		return this.getToken(SCSSParser.EOF, 0);
	}
	public statement_list(): StatementContext[] {
		return this.getTypedRuleContexts(StatementContext) as StatementContext[];
	}
	public statement(i: number): StatementContext {
		return this.getTypedRuleContext(StatementContext, i) as StatementContext;
	}
    public get ruleIndex(): number {
    	return SCSSParser.RULE_stylesheet;
	}
	public enterRule(listener: SCSSParserListener): void {
	    if(listener.enterStylesheet) {
	 		listener.enterStylesheet(this);
		}
	}
	public exitRule(listener: SCSSParserListener): void {
	    if(listener.exitStylesheet) {
	 		listener.exitStylesheet(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SCSSParserVisitor<Result>): Result {
		if (visitor.visitStylesheet) {
			return visitor.visitStylesheet(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	constructor(parser?: SCSSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public importDeclaration(): ImportDeclarationContext {
		return this.getTypedRuleContext(ImportDeclarationContext, 0) as ImportDeclarationContext;
	}
	public variableDeclaration(): VariableDeclarationContext {
		return this.getTypedRuleContext(VariableDeclarationContext, 0) as VariableDeclarationContext;
	}
	public propertyDeclaration(): PropertyDeclarationContext {
		return this.getTypedRuleContext(PropertyDeclarationContext, 0) as PropertyDeclarationContext;
	}
	public interpolationDeclaration(): InterpolationDeclarationContext {
		return this.getTypedRuleContext(InterpolationDeclarationContext, 0) as InterpolationDeclarationContext;
	}
	public mediaDeclaration(): MediaDeclarationContext {
		return this.getTypedRuleContext(MediaDeclarationContext, 0) as MediaDeclarationContext;
	}
	public mixinDeclaration(): MixinDeclarationContext {
		return this.getTypedRuleContext(MixinDeclarationContext, 0) as MixinDeclarationContext;
	}
	public contentDeclaration(): ContentDeclarationContext {
		return this.getTypedRuleContext(ContentDeclarationContext, 0) as ContentDeclarationContext;
	}
	public functionDeclaration(): FunctionDeclarationContext {
		return this.getTypedRuleContext(FunctionDeclarationContext, 0) as FunctionDeclarationContext;
	}
	public ifDeclaration(): IfDeclarationContext {
		return this.getTypedRuleContext(IfDeclarationContext, 0) as IfDeclarationContext;
	}
	public forDeclaration(): ForDeclarationContext {
		return this.getTypedRuleContext(ForDeclarationContext, 0) as ForDeclarationContext;
	}
	public whileDeclaration(): WhileDeclarationContext {
		return this.getTypedRuleContext(WhileDeclarationContext, 0) as WhileDeclarationContext;
	}
	public eachDeclaration(): EachDeclarationContext {
		return this.getTypedRuleContext(EachDeclarationContext, 0) as EachDeclarationContext;
	}
	public fontFaceDeclaration(): FontFaceDeclarationContext {
		return this.getTypedRuleContext(FontFaceDeclarationContext, 0) as FontFaceDeclarationContext;
	}
	public keyframesDeclaration(): KeyframesDeclarationContext {
		return this.getTypedRuleContext(KeyframesDeclarationContext, 0) as KeyframesDeclarationContext;
	}
	public includeDeclaration(): IncludeDeclarationContext {
		return this.getTypedRuleContext(IncludeDeclarationContext, 0) as IncludeDeclarationContext;
	}
	public extendDeclaration(): ExtendDeclarationContext {
		return this.getTypedRuleContext(ExtendDeclarationContext, 0) as ExtendDeclarationContext;
	}
	public warndingDeclaration(): WarndingDeclarationContext {
		return this.getTypedRuleContext(WarndingDeclarationContext, 0) as WarndingDeclarationContext;
	}
	public errorDeclaration(): ErrorDeclarationContext {
		return this.getTypedRuleContext(ErrorDeclarationContext, 0) as ErrorDeclarationContext;
	}
	public ruleset(): RulesetContext {
		return this.getTypedRuleContext(RulesetContext, 0) as RulesetContext;
	}
	public atStatementDeclaration(): AtStatementDeclarationContext {
		return this.getTypedRuleContext(AtStatementDeclarationContext, 0) as AtStatementDeclarationContext;
	}
	public percentageStatement(): PercentageStatementContext {
		return this.getTypedRuleContext(PercentageStatementContext, 0) as PercentageStatementContext;
	}
    public get ruleIndex(): number {
    	return SCSSParser.RULE_statement;
	}
	public enterRule(listener: SCSSParserListener): void {
	    if(listener.enterStatement) {
	 		listener.enterStatement(this);
		}
	}
	public exitRule(listener: SCSSParserListener): void {
	    if(listener.exitStatement) {
	 		listener.exitStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SCSSParserVisitor<Result>): Result {
		if (visitor.visitStatement) {
			return visitor.visitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ImportDeclarationContext extends ParserRuleContext {
	constructor(parser?: SCSSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Import(): TerminalNode {
		return this.getToken(SCSSParser.Import, 0);
	}
	public importPath(): ImportPathContext {
		return this.getTypedRuleContext(ImportPathContext, 0) as ImportPathContext;
	}
	public Semi(): TerminalNode {
		return this.getToken(SCSSParser.Semi, 0);
	}
	public Require(): TerminalNode {
		return this.getToken(SCSSParser.Require, 0);
	}
	public Use(): TerminalNode {
		return this.getToken(SCSSParser.Use, 0);
	}
	public asClause(): AsClauseContext {
		return this.getTypedRuleContext(AsClauseContext, 0) as AsClauseContext;
	}
	public withClause(): WithClauseContext {
		return this.getTypedRuleContext(WithClauseContext, 0) as WithClauseContext;
	}
	public Forward(): TerminalNode {
		return this.getToken(SCSSParser.Forward, 0);
	}
    public get ruleIndex(): number {
    	return SCSSParser.RULE_importDeclaration;
	}
	public enterRule(listener: SCSSParserListener): void {
	    if(listener.enterImportDeclaration) {
	 		listener.enterImportDeclaration(this);
		}
	}
	public exitRule(listener: SCSSParserListener): void {
	    if(listener.exitImportDeclaration) {
	 		listener.exitImportDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SCSSParserVisitor<Result>): Result {
		if (visitor.visitImportDeclaration) {
			return visitor.visitImportDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ImportPathContext extends ParserRuleContext {
	constructor(parser?: SCSSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public uri(): UriContext {
		return this.getTypedRuleContext(UriContext, 0) as UriContext;
	}
	public String_(): TerminalNode {
		return this.getToken(SCSSParser.String_, 0);
	}
    public get ruleIndex(): number {
    	return SCSSParser.RULE_importPath;
	}
	public enterRule(listener: SCSSParserListener): void {
	    if(listener.enterImportPath) {
	 		listener.enterImportPath(this);
		}
	}
	public exitRule(listener: SCSSParserListener): void {
	    if(listener.exitImportPath) {
	 		listener.exitImportPath(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SCSSParserVisitor<Result>): Result {
		if (visitor.visitImportPath) {
			return visitor.visitImportPath(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AsClauseContext extends ParserRuleContext {
	constructor(parser?: SCSSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public As(): TerminalNode {
		return this.getToken(SCSSParser.As, 0);
	}
	public Times(): TerminalNode {
		return this.getToken(SCSSParser.Times, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
    public get ruleIndex(): number {
    	return SCSSParser.RULE_asClause;
	}
	public enterRule(listener: SCSSParserListener): void {
	    if(listener.enterAsClause) {
	 		listener.enterAsClause(this);
		}
	}
	public exitRule(listener: SCSSParserListener): void {
	    if(listener.exitAsClause) {
	 		listener.exitAsClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SCSSParserVisitor<Result>): Result {
		if (visitor.visitAsClause) {
			return visitor.visitAsClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WithClauseContext extends ParserRuleContext {
	constructor(parser?: SCSSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public With(): TerminalNode {
		return this.getToken(SCSSParser.With, 0);
	}
	public Lparen(): TerminalNode {
		return this.getToken(SCSSParser.Lparen, 0);
	}
	public parameters(): ParametersContext {
		return this.getTypedRuleContext(ParametersContext, 0) as ParametersContext;
	}
	public Rparen(): TerminalNode {
		return this.getToken(SCSSParser.Rparen, 0);
	}
    public get ruleIndex(): number {
    	return SCSSParser.RULE_withClause;
	}
	public enterRule(listener: SCSSParserListener): void {
	    if(listener.enterWithClause) {
	 		listener.enterWithClause(this);
		}
	}
	public exitRule(listener: SCSSParserListener): void {
	    if(listener.exitWithClause) {
	 		listener.exitWithClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SCSSParserVisitor<Result>): Result {
		if (visitor.visitWithClause) {
			return visitor.visitWithClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableDeclarationContext extends ParserRuleContext {
	constructor(parser?: SCSSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public variableName(): VariableNameContext {
		return this.getTypedRuleContext(VariableNameContext, 0) as VariableNameContext;
	}
	public Colon(): TerminalNode {
		return this.getToken(SCSSParser.Colon, 0);
	}
	public variableValue(): VariableValueContext {
		return this.getTypedRuleContext(VariableValueContext, 0) as VariableValueContext;
	}
	public prio(): PrioContext {
		return this.getTypedRuleContext(PrioContext, 0) as PrioContext;
	}
	public Semi(): TerminalNode {
		return this.getToken(SCSSParser.Semi, 0);
	}
    public get ruleIndex(): number {
    	return SCSSParser.RULE_variableDeclaration;
	}
	public enterRule(listener: SCSSParserListener): void {
	    if(listener.enterVariableDeclaration) {
	 		listener.enterVariableDeclaration(this);
		}
	}
	public exitRule(listener: SCSSParserListener): void {
	    if(listener.exitVariableDeclaration) {
	 		listener.exitVariableDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SCSSParserVisitor<Result>): Result {
		if (visitor.visitVariableDeclaration) {
			return visitor.visitVariableDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableValueContext extends ParserRuleContext {
	constructor(parser?: SCSSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public value(): ValueContext {
		return this.getTypedRuleContext(ValueContext, 0) as ValueContext;
	}
	public functionDeclaration(): FunctionDeclarationContext {
		return this.getTypedRuleContext(FunctionDeclarationContext, 0) as FunctionDeclarationContext;
	}
	public functionCall(): FunctionCallContext {
		return this.getTypedRuleContext(FunctionCallContext, 0) as FunctionCallContext;
	}
	public mapDeclaration_list(): MapDeclarationContext[] {
		return this.getTypedRuleContexts(MapDeclarationContext) as MapDeclarationContext[];
	}
	public mapDeclaration(i: number): MapDeclarationContext {
		return this.getTypedRuleContext(MapDeclarationContext, i) as MapDeclarationContext;
	}
	public listDeclaration_list(): ListDeclarationContext[] {
		return this.getTypedRuleContexts(ListDeclarationContext) as ListDeclarationContext[];
	}
	public listDeclaration(i: number): ListDeclarationContext {
		return this.getTypedRuleContext(ListDeclarationContext, i) as ListDeclarationContext;
	}
	public variableName(): VariableNameContext {
		return this.getTypedRuleContext(VariableNameContext, 0) as VariableNameContext;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
    public get ruleIndex(): number {
    	return SCSSParser.RULE_variableValue;
	}
	public enterRule(listener: SCSSParserListener): void {
	    if(listener.enterVariableValue) {
	 		listener.enterVariableValue(this);
		}
	}
	public exitRule(listener: SCSSParserListener): void {
	    if(listener.exitVariableValue) {
	 		listener.exitVariableValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SCSSParserVisitor<Result>): Result {
		if (visitor.visitVariableValue) {
			return visitor.visitVariableValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableNameContext extends ParserRuleContext {
	constructor(parser?: SCSSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public Dollar(): TerminalNode {
		return this.getToken(SCSSParser.Dollar, 0);
	}
	public plusMinus(): PlusMinusContext {
		return this.getTypedRuleContext(PlusMinusContext, 0) as PlusMinusContext;
	}
	public Minus_list(): TerminalNode[] {
	    	return this.getTokens(SCSSParser.Minus);
	}
	public Minus(i: number): TerminalNode {
		return this.getToken(SCSSParser.Minus, i);
	}
	public measurment(): MeasurmentContext {
		return this.getTypedRuleContext(MeasurmentContext, 0) as MeasurmentContext;
	}
	public namespace_(): Namespace_Context {
		return this.getTypedRuleContext(Namespace_Context, 0) as Namespace_Context;
	}
	public Variable(): TerminalNode {
		return this.getToken(SCSSParser.Variable, 0);
	}
    public get ruleIndex(): number {
    	return SCSSParser.RULE_variableName;
	}
	public enterRule(listener: SCSSParserListener): void {
	    if(listener.enterVariableName) {
	 		listener.enterVariableName(this);
		}
	}
	public exitRule(listener: SCSSParserListener): void {
	    if(listener.exitVariableName) {
	 		listener.exitVariableName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SCSSParserVisitor<Result>): Result {
		if (visitor.visitVariableName) {
			return visitor.visitVariableName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Namespace_Context extends ParserRuleContext {
	constructor(parser?: SCSSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier_list(): IdentifierContext[] {
		return this.getTypedRuleContexts(IdentifierContext) as IdentifierContext[];
	}
	public identifier(i: number): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, i) as IdentifierContext;
	}
	public Dot_list(): TerminalNode[] {
	    	return this.getTokens(SCSSParser.Dot);
	}
	public Dot(i: number): TerminalNode {
		return this.getToken(SCSSParser.Dot, i);
	}
    public get ruleIndex(): number {
    	return SCSSParser.RULE_namespace_;
	}
	public enterRule(listener: SCSSParserListener): void {
	    if(listener.enterNamespace_) {
	 		listener.enterNamespace_(this);
		}
	}
	public exitRule(listener: SCSSParserListener): void {
	    if(listener.exitNamespace_) {
	 		listener.exitNamespace_(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SCSSParserVisitor<Result>): Result {
		if (visitor.visitNamespace_) {
			return visitor.visitNamespace_(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PropertyDeclarationContext extends ParserRuleContext {
	constructor(parser?: SCSSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public Colon(): TerminalNode {
		return this.getToken(SCSSParser.Colon, 0);
	}
	public propertyValue(): PropertyValueContext {
		return this.getTypedRuleContext(PropertyValueContext, 0) as PropertyValueContext;
	}
	public Semi(): TerminalNode {
		return this.getToken(SCSSParser.Semi, 0);
	}
    public get ruleIndex(): number {
    	return SCSSParser.RULE_propertyDeclaration;
	}
	public enterRule(listener: SCSSParserListener): void {
	    if(listener.enterPropertyDeclaration) {
	 		listener.enterPropertyDeclaration(this);
		}
	}
	public exitRule(listener: SCSSParserListener): void {
	    if(listener.exitPropertyDeclaration) {
	 		listener.exitPropertyDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SCSSParserVisitor<Result>): Result {
		if (visitor.visitPropertyDeclaration) {
			return visitor.visitPropertyDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrioContext extends ParserRuleContext {
	constructor(parser?: SCSSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Important(): TerminalNode {
		return this.getToken(SCSSParser.Important, 0);
	}
	public Default(): TerminalNode {
		return this.getToken(SCSSParser.Default, 0);
	}
    public get ruleIndex(): number {
    	return SCSSParser.RULE_prio;
	}
	public enterRule(listener: SCSSParserListener): void {
	    if(listener.enterPrio) {
	 		listener.enterPrio(this);
		}
	}
	public exitRule(listener: SCSSParserListener): void {
	    if(listener.exitPrio) {
	 		listener.exitPrio(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SCSSParserVisitor<Result>): Result {
		if (visitor.visitPrio) {
			return visitor.visitPrio(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PropertyValueContext extends ParserRuleContext {
	constructor(parser?: SCSSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public value(): ValueContext {
		return this.getTypedRuleContext(ValueContext, 0) as ValueContext;
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
	public variableName(): VariableNameContext {
		return this.getTypedRuleContext(VariableNameContext, 0) as VariableNameContext;
	}
	public listSpaceSeparated(): ListSpaceSeparatedContext {
		return this.getTypedRuleContext(ListSpaceSeparatedContext, 0) as ListSpaceSeparatedContext;
	}
	public listCommaSeparated(): ListCommaSeparatedContext {
		return this.getTypedRuleContext(ListCommaSeparatedContext, 0) as ListCommaSeparatedContext;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public functionCall(): FunctionCallContext {
		return this.getTypedRuleContext(FunctionCallContext, 0) as FunctionCallContext;
	}
	public prio_list(): PrioContext[] {
		return this.getTypedRuleContexts(PrioContext) as PrioContext[];
	}
	public prio(i: number): PrioContext {
		return this.getTypedRuleContext(PrioContext, i) as PrioContext;
	}
    public get ruleIndex(): number {
    	return SCSSParser.RULE_propertyValue;
	}
	public enterRule(listener: SCSSParserListener): void {
	    if(listener.enterPropertyValue) {
	 		listener.enterPropertyValue(this);
		}
	}
	public exitRule(listener: SCSSParserListener): void {
	    if(listener.exitPropertyValue) {
	 		listener.exitPropertyValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SCSSParserVisitor<Result>): Result {
		if (visitor.visitPropertyValue) {
			return visitor.visitPropertyValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MediaDeclarationContext extends ParserRuleContext {
	constructor(parser?: SCSSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Media(): TerminalNode {
		return this.getToken(SCSSParser.Media, 0);
	}
	public mediaQueryList(): MediaQueryListContext {
		return this.getTypedRuleContext(MediaQueryListContext, 0) as MediaQueryListContext;
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
    public get ruleIndex(): number {
    	return SCSSParser.RULE_mediaDeclaration;
	}
	public enterRule(listener: SCSSParserListener): void {
	    if(listener.enterMediaDeclaration) {
	 		listener.enterMediaDeclaration(this);
		}
	}
	public exitRule(listener: SCSSParserListener): void {
	    if(listener.exitMediaDeclaration) {
	 		listener.exitMediaDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SCSSParserVisitor<Result>): Result {
		if (visitor.visitMediaDeclaration) {
			return visitor.visitMediaDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MediaQueryListContext extends ParserRuleContext {
	constructor(parser?: SCSSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public mediaQuery_list(): MediaQueryContext[] {
		return this.getTypedRuleContexts(MediaQueryContext) as MediaQueryContext[];
	}
	public mediaQuery(i: number): MediaQueryContext {
		return this.getTypedRuleContext(MediaQueryContext, i) as MediaQueryContext;
	}
	public Comma_list(): TerminalNode[] {
	    	return this.getTokens(SCSSParser.Comma);
	}
	public Comma(i: number): TerminalNode {
		return this.getToken(SCSSParser.Comma, i);
	}
    public get ruleIndex(): number {
    	return SCSSParser.RULE_mediaQueryList;
	}
	public enterRule(listener: SCSSParserListener): void {
	    if(listener.enterMediaQueryList) {
	 		listener.enterMediaQueryList(this);
		}
	}
	public exitRule(listener: SCSSParserListener): void {
	    if(listener.exitMediaQueryList) {
	 		listener.exitMediaQueryList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SCSSParserVisitor<Result>): Result {
		if (visitor.visitMediaQueryList) {
			return visitor.visitMediaQueryList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MediaQueryContext extends ParserRuleContext {
	constructor(parser?: SCSSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public value(): ValueContext {
		return this.getTypedRuleContext(ValueContext, 0) as ValueContext;
	}
	public And_list(): TerminalNode[] {
	    	return this.getTokens(SCSSParser.And);
	}
	public And(i: number): TerminalNode {
		return this.getToken(SCSSParser.And, i);
	}
	public mediaExpression_list(): MediaExpressionContext[] {
		return this.getTypedRuleContexts(MediaExpressionContext) as MediaExpressionContext[];
	}
	public mediaExpression(i: number): MediaExpressionContext {
		return this.getTypedRuleContext(MediaExpressionContext, i) as MediaExpressionContext;
	}
	public Only(): TerminalNode {
		return this.getToken(SCSSParser.Only, 0);
	}
	public Not(): TerminalNode {
		return this.getToken(SCSSParser.Not, 0);
	}
    public get ruleIndex(): number {
    	return SCSSParser.RULE_mediaQuery;
	}
	public enterRule(listener: SCSSParserListener): void {
	    if(listener.enterMediaQuery) {
	 		listener.enterMediaQuery(this);
		}
	}
	public exitRule(listener: SCSSParserListener): void {
	    if(listener.exitMediaQuery) {
	 		listener.exitMediaQuery(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SCSSParserVisitor<Result>): Result {
		if (visitor.visitMediaQuery) {
			return visitor.visitMediaQuery(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MediaExpressionContext extends ParserRuleContext {
	constructor(parser?: SCSSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Lparen(): TerminalNode {
		return this.getToken(SCSSParser.Lparen, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public Rparen(): TerminalNode {
		return this.getToken(SCSSParser.Rparen, 0);
	}
	public Colon(): TerminalNode {
		return this.getToken(SCSSParser.Colon, 0);
	}
	public value(): ValueContext {
		return this.getTypedRuleContext(ValueContext, 0) as ValueContext;
	}
    public get ruleIndex(): number {
    	return SCSSParser.RULE_mediaExpression;
	}
	public enterRule(listener: SCSSParserListener): void {
	    if(listener.enterMediaExpression) {
	 		listener.enterMediaExpression(this);
		}
	}
	public exitRule(listener: SCSSParserListener): void {
	    if(listener.exitMediaExpression) {
	 		listener.exitMediaExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SCSSParserVisitor<Result>): Result {
		if (visitor.visitMediaExpression) {
			return visitor.visitMediaExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MixinDeclarationContext extends ParserRuleContext {
	constructor(parser?: SCSSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Mixin(): TerminalNode {
		return this.getToken(SCSSParser.Mixin, 0);
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public Lparen(): TerminalNode {
		return this.getToken(SCSSParser.Lparen, 0);
	}
	public parameters(): ParametersContext {
		return this.getTypedRuleContext(ParametersContext, 0) as ParametersContext;
	}
	public Rparen(): TerminalNode {
		return this.getToken(SCSSParser.Rparen, 0);
	}
    public get ruleIndex(): number {
    	return SCSSParser.RULE_mixinDeclaration;
	}
	public enterRule(listener: SCSSParserListener): void {
	    if(listener.enterMixinDeclaration) {
	 		listener.enterMixinDeclaration(this);
		}
	}
	public exitRule(listener: SCSSParserListener): void {
	    if(listener.exitMixinDeclaration) {
	 		listener.exitMixinDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SCSSParserVisitor<Result>): Result {
		if (visitor.visitMixinDeclaration) {
			return visitor.visitMixinDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ContentDeclarationContext extends ParserRuleContext {
	constructor(parser?: SCSSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Content(): TerminalNode {
		return this.getToken(SCSSParser.Content, 0);
	}
	public Lparen(): TerminalNode {
		return this.getToken(SCSSParser.Lparen, 0);
	}
	public parameters(): ParametersContext {
		return this.getTypedRuleContext(ParametersContext, 0) as ParametersContext;
	}
	public Rparen(): TerminalNode {
		return this.getToken(SCSSParser.Rparen, 0);
	}
	public Semi(): TerminalNode {
		return this.getToken(SCSSParser.Semi, 0);
	}
    public get ruleIndex(): number {
    	return SCSSParser.RULE_contentDeclaration;
	}
	public enterRule(listener: SCSSParserListener): void {
	    if(listener.enterContentDeclaration) {
	 		listener.enterContentDeclaration(this);
		}
	}
	public exitRule(listener: SCSSParserListener): void {
	    if(listener.exitContentDeclaration) {
	 		listener.exitContentDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SCSSParserVisitor<Result>): Result {
		if (visitor.visitContentDeclaration) {
			return visitor.visitContentDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FontFaceDeclarationContext extends ParserRuleContext {
	constructor(parser?: SCSSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public FontFace(): TerminalNode {
		return this.getToken(SCSSParser.FontFace, 0);
	}
	public BlockStart(): TerminalNode {
		return this.getToken(SCSSParser.BlockStart, 0);
	}
	public BlockEnd(): TerminalNode {
		return this.getToken(SCSSParser.BlockEnd, 0);
	}
	public statement_list(): StatementContext[] {
		return this.getTypedRuleContexts(StatementContext) as StatementContext[];
	}
	public statement(i: number): StatementContext {
		return this.getTypedRuleContext(StatementContext, i) as StatementContext;
	}
    public get ruleIndex(): number {
    	return SCSSParser.RULE_fontFaceDeclaration;
	}
	public enterRule(listener: SCSSParserListener): void {
	    if(listener.enterFontFaceDeclaration) {
	 		listener.enterFontFaceDeclaration(this);
		}
	}
	public exitRule(listener: SCSSParserListener): void {
	    if(listener.exitFontFaceDeclaration) {
	 		listener.exitFontFaceDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SCSSParserVisitor<Result>): Result {
		if (visitor.visitFontFaceDeclaration) {
			return visitor.visitFontFaceDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class KeyframesDeclarationContext extends ParserRuleContext {
	constructor(parser?: SCSSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Keyframes(): TerminalNode {
		return this.getToken(SCSSParser.Keyframes, 0);
	}
	public keyframesBlock(): KeyframesBlockContext {
		return this.getTypedRuleContext(KeyframesBlockContext, 0) as KeyframesBlockContext;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
    public get ruleIndex(): number {
    	return SCSSParser.RULE_keyframesDeclaration;
	}
	public enterRule(listener: SCSSParserListener): void {
	    if(listener.enterKeyframesDeclaration) {
	 		listener.enterKeyframesDeclaration(this);
		}
	}
	public exitRule(listener: SCSSParserListener): void {
	    if(listener.exitKeyframesDeclaration) {
	 		listener.exitKeyframesDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SCSSParserVisitor<Result>): Result {
		if (visitor.visitKeyframesDeclaration) {
			return visitor.visitKeyframesDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class KeyframesBlockContext extends ParserRuleContext {
	constructor(parser?: SCSSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public BlockStart(): TerminalNode {
		return this.getToken(SCSSParser.BlockStart, 0);
	}
	public BlockEnd(): TerminalNode {
		return this.getToken(SCSSParser.BlockEnd, 0);
	}
	public percentageStatement_list(): PercentageStatementContext[] {
		return this.getTypedRuleContexts(PercentageStatementContext) as PercentageStatementContext[];
	}
	public percentageStatement(i: number): PercentageStatementContext {
		return this.getTypedRuleContext(PercentageStatementContext, i) as PercentageStatementContext;
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
    public get ruleIndex(): number {
    	return SCSSParser.RULE_keyframesBlock;
	}
	public enterRule(listener: SCSSParserListener): void {
	    if(listener.enterKeyframesBlock) {
	 		listener.enterKeyframesBlock(this);
		}
	}
	public exitRule(listener: SCSSParserListener): void {
	    if(listener.exitKeyframesBlock) {
	 		listener.exitKeyframesBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SCSSParserVisitor<Result>): Result {
		if (visitor.visitKeyframesBlock) {
			return visitor.visitKeyframesBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PercentageStatementContext extends ParserRuleContext {
	constructor(parser?: SCSSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public percentage(): PercentageContext {
		return this.getTypedRuleContext(PercentageContext, 0) as PercentageContext;
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
    public get ruleIndex(): number {
    	return SCSSParser.RULE_percentageStatement;
	}
	public enterRule(listener: SCSSParserListener): void {
	    if(listener.enterPercentageStatement) {
	 		listener.enterPercentageStatement(this);
		}
	}
	public exitRule(listener: SCSSParserListener): void {
	    if(listener.exitPercentageStatement) {
	 		listener.exitPercentageStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SCSSParserVisitor<Result>): Result {
		if (visitor.visitPercentageStatement) {
			return visitor.visitPercentageStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IncludeDeclarationContext extends ParserRuleContext {
	constructor(parser?: SCSSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Include(): TerminalNode {
		return this.getToken(SCSSParser.Include, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public functionCall(): FunctionCallContext {
		return this.getTypedRuleContext(FunctionCallContext, 0) as FunctionCallContext;
	}
	public namespace_(): Namespace_Context {
		return this.getTypedRuleContext(Namespace_Context, 0) as Namespace_Context;
	}
	public Semi(): TerminalNode {
		return this.getToken(SCSSParser.Semi, 0);
	}
	public Using(): TerminalNode {
		return this.getToken(SCSSParser.Using, 0);
	}
	public Lparen(): TerminalNode {
		return this.getToken(SCSSParser.Lparen, 0);
	}
	public parameters(): ParametersContext {
		return this.getTypedRuleContext(ParametersContext, 0) as ParametersContext;
	}
	public Rparen(): TerminalNode {
		return this.getToken(SCSSParser.Rparen, 0);
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
    public get ruleIndex(): number {
    	return SCSSParser.RULE_includeDeclaration;
	}
	public enterRule(listener: SCSSParserListener): void {
	    if(listener.enterIncludeDeclaration) {
	 		listener.enterIncludeDeclaration(this);
		}
	}
	public exitRule(listener: SCSSParserListener): void {
	    if(listener.exitIncludeDeclaration) {
	 		listener.exitIncludeDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SCSSParserVisitor<Result>): Result {
		if (visitor.visitIncludeDeclaration) {
			return visitor.visitIncludeDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InterpolationDeclarationContext extends ParserRuleContext {
	constructor(parser?: SCSSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public interpolation(): InterpolationContext {
		return this.getTypedRuleContext(InterpolationContext, 0) as InterpolationContext;
	}
	public Colon(): TerminalNode {
		return this.getToken(SCSSParser.Colon, 0);
	}
	public propertyValue(): PropertyValueContext {
		return this.getTypedRuleContext(PropertyValueContext, 0) as PropertyValueContext;
	}
	public Semi(): TerminalNode {
		return this.getToken(SCSSParser.Semi, 0);
	}
    public get ruleIndex(): number {
    	return SCSSParser.RULE_interpolationDeclaration;
	}
	public enterRule(listener: SCSSParserListener): void {
	    if(listener.enterInterpolationDeclaration) {
	 		listener.enterInterpolationDeclaration(this);
		}
	}
	public exitRule(listener: SCSSParserListener): void {
	    if(listener.exitInterpolationDeclaration) {
	 		listener.exitInterpolationDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SCSSParserVisitor<Result>): Result {
		if (visitor.visitInterpolationDeclaration) {
			return visitor.visitInterpolationDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExtendDeclarationContext extends ParserRuleContext {
	constructor(parser?: SCSSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Extend(): TerminalNode {
		return this.getToken(SCSSParser.Extend, 0);
	}
	public Percentage(): TerminalNode {
		return this.getToken(SCSSParser.Percentage, 0);
	}
	public parentRef_list(): ParentRefContext[] {
		return this.getTypedRuleContexts(ParentRefContext) as ParentRefContext[];
	}
	public parentRef(i: number): ParentRefContext {
		return this.getTypedRuleContext(ParentRefContext, i) as ParentRefContext;
	}
	public id_list(): IdContext[] {
		return this.getTypedRuleContexts(IdContext) as IdContext[];
	}
	public id(i: number): IdContext {
		return this.getTypedRuleContext(IdContext, i) as IdContext;
	}
	public typeSelector_list(): TypeSelectorContext[] {
		return this.getTypedRuleContexts(TypeSelectorContext) as TypeSelectorContext[];
	}
	public typeSelector(i: number): TypeSelectorContext {
		return this.getTypedRuleContext(TypeSelectorContext, i) as TypeSelectorContext;
	}
	public universal_list(): UniversalContext[] {
		return this.getTypedRuleContexts(UniversalContext) as UniversalContext[];
	}
	public universal(i: number): UniversalContext {
		return this.getTypedRuleContext(UniversalContext, i) as UniversalContext;
	}
	public className_list(): ClassNameContext[] {
		return this.getTypedRuleContexts(ClassNameContext) as ClassNameContext[];
	}
	public className(i: number): ClassNameContext {
		return this.getTypedRuleContext(ClassNameContext, i) as ClassNameContext;
	}
	public attrib_list(): AttribContext[] {
		return this.getTypedRuleContexts(AttribContext) as AttribContext[];
	}
	public attrib(i: number): AttribContext {
		return this.getTypedRuleContext(AttribContext, i) as AttribContext;
	}
	public pseudo_list(): PseudoContext[] {
		return this.getTypedRuleContexts(PseudoContext) as PseudoContext[];
	}
	public pseudo(i: number): PseudoContext {
		return this.getTypedRuleContext(PseudoContext, i) as PseudoContext;
	}
	public interpolation_list(): InterpolationContext[] {
		return this.getTypedRuleContexts(InterpolationContext) as InterpolationContext[];
	}
	public interpolation(i: number): InterpolationContext {
		return this.getTypedRuleContext(InterpolationContext, i) as InterpolationContext;
	}
	public Semi(): TerminalNode {
		return this.getToken(SCSSParser.Semi, 0);
	}
    public get ruleIndex(): number {
    	return SCSSParser.RULE_extendDeclaration;
	}
	public enterRule(listener: SCSSParserListener): void {
	    if(listener.enterExtendDeclaration) {
	 		listener.enterExtendDeclaration(this);
		}
	}
	public exitRule(listener: SCSSParserListener): void {
	    if(listener.exitExtendDeclaration) {
	 		listener.exitExtendDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SCSSParserVisitor<Result>): Result {
		if (visitor.visitExtendDeclaration) {
			return visitor.visitExtendDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WarndingDeclarationContext extends ParserRuleContext {
	constructor(parser?: SCSSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Warn(): TerminalNode {
		return this.getToken(SCSSParser.Warn, 0);
	}
	public String_(): TerminalNode {
		return this.getToken(SCSSParser.String_, 0);
	}
	public Semi(): TerminalNode {
		return this.getToken(SCSSParser.Semi, 0);
	}
    public get ruleIndex(): number {
    	return SCSSParser.RULE_warndingDeclaration;
	}
	public enterRule(listener: SCSSParserListener): void {
	    if(listener.enterWarndingDeclaration) {
	 		listener.enterWarndingDeclaration(this);
		}
	}
	public exitRule(listener: SCSSParserListener): void {
	    if(listener.exitWarndingDeclaration) {
	 		listener.exitWarndingDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SCSSParserVisitor<Result>): Result {
		if (visitor.visitWarndingDeclaration) {
			return visitor.visitWarndingDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ErrorDeclarationContext extends ParserRuleContext {
	constructor(parser?: SCSSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Error(): TerminalNode {
		return this.getToken(SCSSParser.Error, 0);
	}
	public String_(): TerminalNode {
		return this.getToken(SCSSParser.String_, 0);
	}
	public Semi(): TerminalNode {
		return this.getToken(SCSSParser.Semi, 0);
	}
    public get ruleIndex(): number {
    	return SCSSParser.RULE_errorDeclaration;
	}
	public enterRule(listener: SCSSParserListener): void {
	    if(listener.enterErrorDeclaration) {
	 		listener.enterErrorDeclaration(this);
		}
	}
	public exitRule(listener: SCSSParserListener): void {
	    if(listener.exitErrorDeclaration) {
	 		listener.exitErrorDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SCSSParserVisitor<Result>): Result {
		if (visitor.visitErrorDeclaration) {
			return visitor.visitErrorDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AtStatementDeclarationContext extends ParserRuleContext {
	constructor(parser?: SCSSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public At(): TerminalNode {
		return this.getToken(SCSSParser.At, 0);
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public Lparen(): TerminalNode {
		return this.getToken(SCSSParser.Lparen, 0);
	}
	public parameters(): ParametersContext {
		return this.getTypedRuleContext(ParametersContext, 0) as ParametersContext;
	}
	public Rparen(): TerminalNode {
		return this.getToken(SCSSParser.Rparen, 0);
	}
    public get ruleIndex(): number {
    	return SCSSParser.RULE_atStatementDeclaration;
	}
	public enterRule(listener: SCSSParserListener): void {
	    if(listener.enterAtStatementDeclaration) {
	 		listener.enterAtStatementDeclaration(this);
		}
	}
	public exitRule(listener: SCSSParserListener): void {
	    if(listener.exitAtStatementDeclaration) {
	 		listener.exitAtStatementDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SCSSParserVisitor<Result>): Result {
		if (visitor.visitAtStatementDeclaration) {
			return visitor.visitAtStatementDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RulesetContext extends ParserRuleContext {
	constructor(parser?: SCSSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public selectorGroup(): SelectorGroupContext {
		return this.getTypedRuleContext(SelectorGroupContext, 0) as SelectorGroupContext;
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
    public get ruleIndex(): number {
    	return SCSSParser.RULE_ruleset;
	}
	public enterRule(listener: SCSSParserListener): void {
	    if(listener.enterRuleset) {
	 		listener.enterRuleset(this);
		}
	}
	public exitRule(listener: SCSSParserListener): void {
	    if(listener.exitRuleset) {
	 		listener.exitRuleset(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SCSSParserVisitor<Result>): Result {
		if (visitor.visitRuleset) {
			return visitor.visitRuleset(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockContext extends ParserRuleContext {
	constructor(parser?: SCSSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public BlockStart(): TerminalNode {
		return this.getToken(SCSSParser.BlockStart, 0);
	}
	public BlockEnd(): TerminalNode {
		return this.getToken(SCSSParser.BlockEnd, 0);
	}
	public statement_list(): StatementContext[] {
		return this.getTypedRuleContexts(StatementContext) as StatementContext[];
	}
	public statement(i: number): StatementContext {
		return this.getTypedRuleContext(StatementContext, i) as StatementContext;
	}
	public functionReturn(): FunctionReturnContext {
		return this.getTypedRuleContext(FunctionReturnContext, 0) as FunctionReturnContext;
	}
    public get ruleIndex(): number {
    	return SCSSParser.RULE_block;
	}
	public enterRule(listener: SCSSParserListener): void {
	    if(listener.enterBlock) {
	 		listener.enterBlock(this);
		}
	}
	public exitRule(listener: SCSSParserListener): void {
	    if(listener.exitBlock) {
	 		listener.exitBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SCSSParserVisitor<Result>): Result {
		if (visitor.visitBlock) {
			return visitor.visitBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SelectorGroupContext extends ParserRuleContext {
	constructor(parser?: SCSSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public selector_list(): SelectorContext[] {
		return this.getTypedRuleContexts(SelectorContext) as SelectorContext[];
	}
	public selector(i: number): SelectorContext {
		return this.getTypedRuleContext(SelectorContext, i) as SelectorContext;
	}
	public Comma_list(): TerminalNode[] {
	    	return this.getTokens(SCSSParser.Comma);
	}
	public Comma(i: number): TerminalNode {
		return this.getToken(SCSSParser.Comma, i);
	}
    public get ruleIndex(): number {
    	return SCSSParser.RULE_selectorGroup;
	}
	public enterRule(listener: SCSSParserListener): void {
	    if(listener.enterSelectorGroup) {
	 		listener.enterSelectorGroup(this);
		}
	}
	public exitRule(listener: SCSSParserListener): void {
	    if(listener.exitSelectorGroup) {
	 		listener.exitSelectorGroup(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SCSSParserVisitor<Result>): Result {
		if (visitor.visitSelectorGroup) {
			return visitor.visitSelectorGroup(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SelectorContext extends ParserRuleContext {
	constructor(parser?: SCSSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public selectorSequence_list(): SelectorSequenceContext[] {
		return this.getTypedRuleContexts(SelectorSequenceContext) as SelectorSequenceContext[];
	}
	public selectorSequence(i: number): SelectorSequenceContext {
		return this.getTypedRuleContext(SelectorSequenceContext, i) as SelectorSequenceContext;
	}
	public combinator_list(): CombinatorContext[] {
		return this.getTypedRuleContexts(CombinatorContext) as CombinatorContext[];
	}
	public combinator(i: number): CombinatorContext {
		return this.getTypedRuleContext(CombinatorContext, i) as CombinatorContext;
	}
    public get ruleIndex(): number {
    	return SCSSParser.RULE_selector;
	}
	public enterRule(listener: SCSSParserListener): void {
	    if(listener.enterSelector) {
	 		listener.enterSelector(this);
		}
	}
	public exitRule(listener: SCSSParserListener): void {
	    if(listener.exitSelector) {
	 		listener.exitSelector(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SCSSParserVisitor<Result>): Result {
		if (visitor.visitSelector) {
			return visitor.visitSelector(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CombinatorContext extends ParserRuleContext {
	constructor(parser?: SCSSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Plus(): TerminalNode {
		return this.getToken(SCSSParser.Plus, 0);
	}
	public Greater(): TerminalNode {
		return this.getToken(SCSSParser.Greater, 0);
	}
	public Tilde(): TerminalNode {
		return this.getToken(SCSSParser.Tilde, 0);
	}
	public Space(): TerminalNode {
		return this.getToken(SCSSParser.Space, 0);
	}
    public get ruleIndex(): number {
    	return SCSSParser.RULE_combinator;
	}
	public enterRule(listener: SCSSParserListener): void {
	    if(listener.enterCombinator) {
	 		listener.enterCombinator(this);
		}
	}
	public exitRule(listener: SCSSParserListener): void {
	    if(listener.exitCombinator) {
	 		listener.exitCombinator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SCSSParserVisitor<Result>): Result {
		if (visitor.visitCombinator) {
			return visitor.visitCombinator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SelectorSequenceContext extends ParserRuleContext {
	constructor(parser?: SCSSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public typeSelector_list(): TypeSelectorContext[] {
		return this.getTypedRuleContexts(TypeSelectorContext) as TypeSelectorContext[];
	}
	public typeSelector(i: number): TypeSelectorContext {
		return this.getTypedRuleContext(TypeSelectorContext, i) as TypeSelectorContext;
	}
	public universal(): UniversalContext {
		return this.getTypedRuleContext(UniversalContext, 0) as UniversalContext;
	}
	public id_list(): IdContext[] {
		return this.getTypedRuleContexts(IdContext) as IdContext[];
	}
	public id(i: number): IdContext {
		return this.getTypedRuleContext(IdContext, i) as IdContext;
	}
	public className_list(): ClassNameContext[] {
		return this.getTypedRuleContexts(ClassNameContext) as ClassNameContext[];
	}
	public className(i: number): ClassNameContext {
		return this.getTypedRuleContext(ClassNameContext, i) as ClassNameContext;
	}
	public attrib_list(): AttribContext[] {
		return this.getTypedRuleContexts(AttribContext) as AttribContext[];
	}
	public attrib(i: number): AttribContext {
		return this.getTypedRuleContext(AttribContext, i) as AttribContext;
	}
	public pseudo_list(): PseudoContext[] {
		return this.getTypedRuleContexts(PseudoContext) as PseudoContext[];
	}
	public pseudo(i: number): PseudoContext {
		return this.getTypedRuleContext(PseudoContext, i) as PseudoContext;
	}
	public negation_list(): NegationContext[] {
		return this.getTypedRuleContexts(NegationContext) as NegationContext[];
	}
	public negation(i: number): NegationContext {
		return this.getTypedRuleContext(NegationContext, i) as NegationContext;
	}
	public interpolation_list(): InterpolationContext[] {
		return this.getTypedRuleContexts(InterpolationContext) as InterpolationContext[];
	}
	public interpolation(i: number): InterpolationContext {
		return this.getTypedRuleContext(InterpolationContext, i) as InterpolationContext;
	}
	public parentRef_list(): ParentRefContext[] {
		return this.getTypedRuleContexts(ParentRefContext) as ParentRefContext[];
	}
	public parentRef(i: number): ParentRefContext {
		return this.getTypedRuleContext(ParentRefContext, i) as ParentRefContext;
	}
	public variableName_list(): VariableNameContext[] {
		return this.getTypedRuleContexts(VariableNameContext) as VariableNameContext[];
	}
	public variableName(i: number): VariableNameContext {
		return this.getTypedRuleContext(VariableNameContext, i) as VariableNameContext;
	}
	public Percentage_list(): TerminalNode[] {
	    	return this.getTokens(SCSSParser.Percentage);
	}
	public Percentage(i: number): TerminalNode {
		return this.getToken(SCSSParser.Percentage, i);
	}
    public get ruleIndex(): number {
    	return SCSSParser.RULE_selectorSequence;
	}
	public enterRule(listener: SCSSParserListener): void {
	    if(listener.enterSelectorSequence) {
	 		listener.enterSelectorSequence(this);
		}
	}
	public exitRule(listener: SCSSParserListener): void {
	    if(listener.exitSelectorSequence) {
	 		listener.exitSelectorSequence(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SCSSParserVisitor<Result>): Result {
		if (visitor.visitSelectorSequence) {
			return visitor.visitSelectorSequence(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdContext extends ParserRuleContext {
	constructor(parser?: SCSSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Hash(): TerminalNode {
		return this.getToken(SCSSParser.Hash, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
    public get ruleIndex(): number {
    	return SCSSParser.RULE_id;
	}
	public enterRule(listener: SCSSParserListener): void {
	    if(listener.enterId) {
	 		listener.enterId(this);
		}
	}
	public exitRule(listener: SCSSParserListener): void {
	    if(listener.exitId) {
	 		listener.exitId(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SCSSParserVisitor<Result>): Result {
		if (visitor.visitId) {
			return visitor.visitId(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeSelectorContext extends ParserRuleContext {
	constructor(parser?: SCSSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public variableName(): VariableNameContext {
		return this.getTypedRuleContext(VariableNameContext, 0) as VariableNameContext;
	}
	public typeNamespacePrefix(): TypeNamespacePrefixContext {
		return this.getTypedRuleContext(TypeNamespacePrefixContext, 0) as TypeNamespacePrefixContext;
	}
	public Percentage(): TerminalNode {
		return this.getToken(SCSSParser.Percentage, 0);
	}
	public parentRef(): ParentRefContext {
		return this.getTypedRuleContext(ParentRefContext, 0) as ParentRefContext;
	}
    public get ruleIndex(): number {
    	return SCSSParser.RULE_typeSelector;
	}
	public enterRule(listener: SCSSParserListener): void {
	    if(listener.enterTypeSelector) {
	 		listener.enterTypeSelector(this);
		}
	}
	public exitRule(listener: SCSSParserListener): void {
	    if(listener.exitTypeSelector) {
	 		listener.exitTypeSelector(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SCSSParserVisitor<Result>): Result {
		if (visitor.visitTypeSelector) {
			return visitor.visitTypeSelector(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeNamespacePrefixContext extends ParserRuleContext {
	constructor(parser?: SCSSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Pipe(): TerminalNode {
		return this.getToken(SCSSParser.Pipe, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public Times(): TerminalNode {
		return this.getToken(SCSSParser.Times, 0);
	}
    public get ruleIndex(): number {
    	return SCSSParser.RULE_typeNamespacePrefix;
	}
	public enterRule(listener: SCSSParserListener): void {
	    if(listener.enterTypeNamespacePrefix) {
	 		listener.enterTypeNamespacePrefix(this);
		}
	}
	public exitRule(listener: SCSSParserListener): void {
	    if(listener.exitTypeNamespacePrefix) {
	 		listener.exitTypeNamespacePrefix(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SCSSParserVisitor<Result>): Result {
		if (visitor.visitTypeNamespacePrefix) {
			return visitor.visitTypeNamespacePrefix(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UniversalContext extends ParserRuleContext {
	constructor(parser?: SCSSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Times(): TerminalNode {
		return this.getToken(SCSSParser.Times, 0);
	}
	public typeNamespacePrefix(): TypeNamespacePrefixContext {
		return this.getTypedRuleContext(TypeNamespacePrefixContext, 0) as TypeNamespacePrefixContext;
	}
    public get ruleIndex(): number {
    	return SCSSParser.RULE_universal;
	}
	public enterRule(listener: SCSSParserListener): void {
	    if(listener.enterUniversal) {
	 		listener.enterUniversal(this);
		}
	}
	public exitRule(listener: SCSSParserListener): void {
	    if(listener.exitUniversal) {
	 		listener.exitUniversal(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SCSSParserVisitor<Result>): Result {
		if (visitor.visitUniversal) {
			return visitor.visitUniversal(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassNameContext extends ParserRuleContext {
	constructor(parser?: SCSSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Dot(): TerminalNode {
		return this.getToken(SCSSParser.Dot, 0);
	}
	public Minus_list(): TerminalNode[] {
	    	return this.getTokens(SCSSParser.Minus);
	}
	public Minus(i: number): TerminalNode {
		return this.getToken(SCSSParser.Minus, i);
	}
	public identifier_list(): IdentifierContext[] {
		return this.getTypedRuleContexts(IdentifierContext) as IdentifierContext[];
	}
	public identifier(i: number): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, i) as IdentifierContext;
	}
	public interpolation_list(): InterpolationContext[] {
		return this.getTypedRuleContexts(InterpolationContext) as InterpolationContext[];
	}
	public interpolation(i: number): InterpolationContext {
		return this.getTypedRuleContext(InterpolationContext, i) as InterpolationContext;
	}
    public get ruleIndex(): number {
    	return SCSSParser.RULE_className;
	}
	public enterRule(listener: SCSSParserListener): void {
	    if(listener.enterClassName) {
	 		listener.enterClassName(this);
		}
	}
	public exitRule(listener: SCSSParserListener): void {
	    if(listener.exitClassName) {
	 		listener.exitClassName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SCSSParserVisitor<Result>): Result {
		if (visitor.visitClassName) {
			return visitor.visitClassName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InterpolationContext extends ParserRuleContext {
	constructor(parser?: SCSSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Hash(): TerminalNode {
		return this.getToken(SCSSParser.Hash, 0);
	}
	public BlockStart(): TerminalNode {
		return this.getToken(SCSSParser.BlockStart, 0);
	}
	public BlockEnd(): TerminalNode {
		return this.getToken(SCSSParser.BlockEnd, 0);
	}
	public ifExpression(): IfExpressionContext {
		return this.getTypedRuleContext(IfExpressionContext, 0) as IfExpressionContext;
	}
	public value(): ValueContext {
		return this.getTypedRuleContext(ValueContext, 0) as ValueContext;
	}
	public parentRef(): ParentRefContext {
		return this.getTypedRuleContext(ParentRefContext, 0) as ParentRefContext;
	}
	public namespace__list(): Namespace_Context[] {
		return this.getTypedRuleContexts(Namespace_Context) as Namespace_Context[];
	}
	public namespace_(i: number): Namespace_Context {
		return this.getTypedRuleContext(Namespace_Context, i) as Namespace_Context;
	}
	public measurment(): MeasurmentContext {
		return this.getTypedRuleContext(MeasurmentContext, 0) as MeasurmentContext;
	}
    public get ruleIndex(): number {
    	return SCSSParser.RULE_interpolation;
	}
	public enterRule(listener: SCSSParserListener): void {
	    if(listener.enterInterpolation) {
	 		listener.enterInterpolation(this);
		}
	}
	public exitRule(listener: SCSSParserListener): void {
	    if(listener.exitInterpolation) {
	 		listener.exitInterpolation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SCSSParserVisitor<Result>): Result {
		if (visitor.visitInterpolation) {
			return visitor.visitInterpolation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParentRefContext extends ParserRuleContext {
	constructor(parser?: SCSSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Amp(): TerminalNode {
		return this.getToken(SCSSParser.Amp, 0);
	}
    public get ruleIndex(): number {
    	return SCSSParser.RULE_parentRef;
	}
	public enterRule(listener: SCSSParserListener): void {
	    if(listener.enterParentRef) {
	 		listener.enterParentRef(this);
		}
	}
	public exitRule(listener: SCSSParserListener): void {
	    if(listener.exitParentRef) {
	 		listener.exitParentRef(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SCSSParserVisitor<Result>): Result {
		if (visitor.visitParentRef) {
			return visitor.visitParentRef(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AttribContext extends ParserRuleContext {
	constructor(parser?: SCSSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Lbrack(): TerminalNode {
		return this.getToken(SCSSParser.Lbrack, 0);
	}
	public identifier_list(): IdentifierContext[] {
		return this.getTypedRuleContexts(IdentifierContext) as IdentifierContext[];
	}
	public identifier(i: number): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, i) as IdentifierContext;
	}
	public Rbrack(): TerminalNode {
		return this.getToken(SCSSParser.Rbrack, 0);
	}
	public typeNamespacePrefix(): TypeNamespacePrefixContext {
		return this.getTypedRuleContext(TypeNamespacePrefixContext, 0) as TypeNamespacePrefixContext;
	}
	public PrefixMatch(): TerminalNode {
		return this.getToken(SCSSParser.PrefixMatch, 0);
	}
	public SuffixMatch(): TerminalNode {
		return this.getToken(SCSSParser.SuffixMatch, 0);
	}
	public SubstringMatch(): TerminalNode {
		return this.getToken(SCSSParser.SubstringMatch, 0);
	}
	public Eq(): TerminalNode {
		return this.getToken(SCSSParser.Eq, 0);
	}
	public Includes(): TerminalNode {
		return this.getToken(SCSSParser.Includes, 0);
	}
	public DashMatch(): TerminalNode {
		return this.getToken(SCSSParser.DashMatch, 0);
	}
	public String_(): TerminalNode {
		return this.getToken(SCSSParser.String_, 0);
	}
    public get ruleIndex(): number {
    	return SCSSParser.RULE_attrib;
	}
	public enterRule(listener: SCSSParserListener): void {
	    if(listener.enterAttrib) {
	 		listener.enterAttrib(this);
		}
	}
	public exitRule(listener: SCSSParserListener): void {
	    if(listener.exitAttrib) {
	 		listener.exitAttrib(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SCSSParserVisitor<Result>): Result {
		if (visitor.visitAttrib) {
			return visitor.visitAttrib(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PseudoContext extends ParserRuleContext {
	constructor(parser?: SCSSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Colon_list(): TerminalNode[] {
	    	return this.getTokens(SCSSParser.Colon);
	}
	public Colon(i: number): TerminalNode {
		return this.getToken(SCSSParser.Colon, i);
	}
	public interpolation(): InterpolationContext {
		return this.getTypedRuleContext(InterpolationContext, 0) as InterpolationContext;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public functionalPseudo(): FunctionalPseudoContext {
		return this.getTypedRuleContext(FunctionalPseudoContext, 0) as FunctionalPseudoContext;
	}
    public get ruleIndex(): number {
    	return SCSSParser.RULE_pseudo;
	}
	public enterRule(listener: SCSSParserListener): void {
	    if(listener.enterPseudo) {
	 		listener.enterPseudo(this);
		}
	}
	public exitRule(listener: SCSSParserListener): void {
	    if(listener.exitPseudo) {
	 		listener.exitPseudo(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SCSSParserVisitor<Result>): Result {
		if (visitor.visitPseudo) {
			return visitor.visitPseudo(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionalPseudoContext extends ParserRuleContext {
	constructor(parser?: SCSSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Ident(): TerminalNode {
		return this.getToken(SCSSParser.Ident, 0);
	}
	public Lparen(): TerminalNode {
		return this.getToken(SCSSParser.Lparen, 0);
	}
	public Rparen(): TerminalNode {
		return this.getToken(SCSSParser.Rparen, 0);
	}
	public pseudoParameter_list(): PseudoParameterContext[] {
		return this.getTypedRuleContexts(PseudoParameterContext) as PseudoParameterContext[];
	}
	public pseudoParameter(i: number): PseudoParameterContext {
		return this.getTypedRuleContext(PseudoParameterContext, i) as PseudoParameterContext;
	}
    public get ruleIndex(): number {
    	return SCSSParser.RULE_functionalPseudo;
	}
	public enterRule(listener: SCSSParserListener): void {
	    if(listener.enterFunctionalPseudo) {
	 		listener.enterFunctionalPseudo(this);
		}
	}
	public exitRule(listener: SCSSParserListener): void {
	    if(listener.exitFunctionalPseudo) {
	 		listener.exitFunctionalPseudo(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SCSSParserVisitor<Result>): Result {
		if (visitor.visitFunctionalPseudo) {
			return visitor.visitFunctionalPseudo(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PseudoParameterContext extends ParserRuleContext {
	constructor(parser?: SCSSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public value(): ValueContext {
		return this.getTypedRuleContext(ValueContext, 0) as ValueContext;
	}
	public className(): ClassNameContext {
		return this.getTypedRuleContext(ClassNameContext, 0) as ClassNameContext;
	}
	public interpolation(): InterpolationContext {
		return this.getTypedRuleContext(InterpolationContext, 0) as InterpolationContext;
	}
	public Comma(): TerminalNode {
		return this.getToken(SCSSParser.Comma, 0);
	}
    public get ruleIndex(): number {
    	return SCSSParser.RULE_pseudoParameter;
	}
	public enterRule(listener: SCSSParserListener): void {
	    if(listener.enterPseudoParameter) {
	 		listener.enterPseudoParameter(this);
		}
	}
	public exitRule(listener: SCSSParserListener): void {
	    if(listener.exitPseudoParameter) {
	 		listener.exitPseudoParameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SCSSParserVisitor<Result>): Result {
		if (visitor.visitPseudoParameter) {
			return visitor.visitPseudoParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NegationContext extends ParserRuleContext {
	constructor(parser?: SCSSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public PseudoNot(): TerminalNode {
		return this.getToken(SCSSParser.PseudoNot, 0);
	}
	public negationArg(): NegationArgContext {
		return this.getTypedRuleContext(NegationArgContext, 0) as NegationArgContext;
	}
	public Rparen(): TerminalNode {
		return this.getToken(SCSSParser.Rparen, 0);
	}
    public get ruleIndex(): number {
    	return SCSSParser.RULE_negation;
	}
	public enterRule(listener: SCSSParserListener): void {
	    if(listener.enterNegation) {
	 		listener.enterNegation(this);
		}
	}
	public exitRule(listener: SCSSParserListener): void {
	    if(listener.exitNegation) {
	 		listener.exitNegation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SCSSParserVisitor<Result>): Result {
		if (visitor.visitNegation) {
			return visitor.visitNegation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NegationArgContext extends ParserRuleContext {
	constructor(parser?: SCSSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public typeSelector(): TypeSelectorContext {
		return this.getTypedRuleContext(TypeSelectorContext, 0) as TypeSelectorContext;
	}
	public universal(): UniversalContext {
		return this.getTypedRuleContext(UniversalContext, 0) as UniversalContext;
	}
	public Hash(): TerminalNode {
		return this.getToken(SCSSParser.Hash, 0);
	}
	public className(): ClassNameContext {
		return this.getTypedRuleContext(ClassNameContext, 0) as ClassNameContext;
	}
	public attrib(): AttribContext {
		return this.getTypedRuleContext(AttribContext, 0) as AttribContext;
	}
	public pseudo(): PseudoContext {
		return this.getTypedRuleContext(PseudoContext, 0) as PseudoContext;
	}
    public get ruleIndex(): number {
    	return SCSSParser.RULE_negationArg;
	}
	public enterRule(listener: SCSSParserListener): void {
	    if(listener.enterNegationArg) {
	 		listener.enterNegationArg(this);
		}
	}
	public exitRule(listener: SCSSParserListener): void {
	    if(listener.exitNegationArg) {
	 		listener.exitNegationArg(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SCSSParserVisitor<Result>): Result {
		if (visitor.visitNegationArg) {
			return visitor.visitNegationArg(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Operator_Context extends ParserRuleContext {
	constructor(parser?: SCSSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Div(): TerminalNode {
		return this.getToken(SCSSParser.Div, 0);
	}
	public Times(): TerminalNode {
		return this.getToken(SCSSParser.Times, 0);
	}
	public Minus(): TerminalNode {
		return this.getToken(SCSSParser.Minus, 0);
	}
	public Plus(): TerminalNode {
		return this.getToken(SCSSParser.Plus, 0);
	}
	public Greater(): TerminalNode {
		return this.getToken(SCSSParser.Greater, 0);
	}
	public Less(): TerminalNode {
		return this.getToken(SCSSParser.Less, 0);
	}
	public Eq_list(): TerminalNode[] {
	    	return this.getTokens(SCSSParser.Eq);
	}
	public Eq(i: number): TerminalNode {
		return this.getToken(SCSSParser.Eq, i);
	}
	public NotEq(): TerminalNode {
		return this.getToken(SCSSParser.NotEq, 0);
	}
	public And(): TerminalNode {
		return this.getToken(SCSSParser.And, 0);
	}
	public Or(): TerminalNode {
		return this.getToken(SCSSParser.Or, 0);
	}
	public Not(): TerminalNode {
		return this.getToken(SCSSParser.Not, 0);
	}
    public get ruleIndex(): number {
    	return SCSSParser.RULE_operator_;
	}
	public enterRule(listener: SCSSParserListener): void {
	    if(listener.enterOperator_) {
	 		listener.enterOperator_(this);
		}
	}
	public exitRule(listener: SCSSParserListener): void {
	    if(listener.exitOperator_) {
	 		listener.exitOperator_(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SCSSParserVisitor<Result>): Result {
		if (visitor.visitOperator_) {
			return visitor.visitOperator_(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ValueContext extends ParserRuleContext {
	constructor(parser?: SCSSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public unit(): UnitContext {
		return this.getTypedRuleContext(UnitContext, 0) as UnitContext;
	}
	public number_(): NumberContext {
		return this.getTypedRuleContext(NumberContext, 0) as NumberContext;
	}
	public boolean_(): BooleanContext {
		return this.getTypedRuleContext(BooleanContext, 0) as BooleanContext;
	}
	public calc(): CalcContext {
		return this.getTypedRuleContext(CalcContext, 0) as CalcContext;
	}
	public rotate(): RotateContext {
		return this.getTypedRuleContext(RotateContext, 0) as RotateContext;
	}
	public rgba(): RgbaContext {
		return this.getTypedRuleContext(RgbaContext, 0) as RgbaContext;
	}
	public var_(): Var_Context {
		return this.getTypedRuleContext(Var_Context, 0) as Var_Context;
	}
	public uri(): UriContext {
		return this.getTypedRuleContext(UriContext, 0) as UriContext;
	}
	public repeat(): RepeatContext {
		return this.getTypedRuleContext(RepeatContext, 0) as RepeatContext;
	}
	public Format(): TerminalNode {
		return this.getToken(SCSSParser.Format, 0);
	}
	public String_(): TerminalNode {
		return this.getToken(SCSSParser.String_, 0);
	}
	public functionCall(): FunctionCallContext {
		return this.getTypedRuleContext(FunctionCallContext, 0) as FunctionCallContext;
	}
	public variableName(): VariableNameContext {
		return this.getTypedRuleContext(VariableNameContext, 0) as VariableNameContext;
	}
	public interpolation(): InterpolationContext {
		return this.getTypedRuleContext(InterpolationContext, 0) as InterpolationContext;
	}
	public hexcolor(): HexcolorContext {
		return this.getTypedRuleContext(HexcolorContext, 0) as HexcolorContext;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
	public Lparen(): TerminalNode {
		return this.getToken(SCSSParser.Lparen, 0);
	}
	public Rparen(): TerminalNode {
		return this.getToken(SCSSParser.Rparen, 0);
	}
	public measurment(): MeasurmentContext {
		return this.getTypedRuleContext(MeasurmentContext, 0) as MeasurmentContext;
	}
    public get ruleIndex(): number {
    	return SCSSParser.RULE_value;
	}
	public enterRule(listener: SCSSParserListener): void {
	    if(listener.enterValue) {
	 		listener.enterValue(this);
		}
	}
	public exitRule(listener: SCSSParserListener): void {
	    if(listener.exitValue) {
	 		listener.exitValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SCSSParserVisitor<Result>): Result {
		if (visitor.visitValue) {
			return visitor.visitValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionDeclarationContext extends ParserRuleContext {
	constructor(parser?: SCSSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Function(): TerminalNode {
		return this.getToken(SCSSParser.Function, 0);
	}
	public Lparen(): TerminalNode {
		return this.getToken(SCSSParser.Lparen, 0);
	}
	public parameters(): ParametersContext {
		return this.getTypedRuleContext(ParametersContext, 0) as ParametersContext;
	}
	public Rparen(): TerminalNode {
		return this.getToken(SCSSParser.Rparen, 0);
	}
	public BlockStart(): TerminalNode {
		return this.getToken(SCSSParser.BlockStart, 0);
	}
	public BlockEnd(): TerminalNode {
		return this.getToken(SCSSParser.BlockEnd, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public functionBody(): FunctionBodyContext {
		return this.getTypedRuleContext(FunctionBodyContext, 0) as FunctionBodyContext;
	}
	public namespace_(): Namespace_Context {
		return this.getTypedRuleContext(Namespace_Context, 0) as Namespace_Context;
	}
    public get ruleIndex(): number {
    	return SCSSParser.RULE_functionDeclaration;
	}
	public enterRule(listener: SCSSParserListener): void {
	    if(listener.enterFunctionDeclaration) {
	 		listener.enterFunctionDeclaration(this);
		}
	}
	public exitRule(listener: SCSSParserListener): void {
	    if(listener.exitFunctionDeclaration) {
	 		listener.exitFunctionDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SCSSParserVisitor<Result>): Result {
		if (visitor.visitFunctionDeclaration) {
			return visitor.visitFunctionDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParametersContext extends ParserRuleContext {
	constructor(parser?: SCSSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public parameter_list(): ParameterContext[] {
		return this.getTypedRuleContexts(ParameterContext) as ParameterContext[];
	}
	public parameter(i: number): ParameterContext {
		return this.getTypedRuleContext(ParameterContext, i) as ParameterContext;
	}
	public Comma_list(): TerminalNode[] {
	    	return this.getTokens(SCSSParser.Comma);
	}
	public Comma(i: number): TerminalNode {
		return this.getToken(SCSSParser.Comma, i);
	}
    public get ruleIndex(): number {
    	return SCSSParser.RULE_parameters;
	}
	public enterRule(listener: SCSSParserListener): void {
	    if(listener.enterParameters) {
	 		listener.enterParameters(this);
		}
	}
	public exitRule(listener: SCSSParserListener): void {
	    if(listener.exitParameters) {
	 		listener.exitParameters(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SCSSParserVisitor<Result>): Result {
		if (visitor.visitParameters) {
			return visitor.visitParameters(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParameterContext extends ParserRuleContext {
	constructor(parser?: SCSSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public value(): ValueContext {
		return this.getTypedRuleContext(ValueContext, 0) as ValueContext;
	}
	public variableDeclaration(): VariableDeclarationContext {
		return this.getTypedRuleContext(VariableDeclarationContext, 0) as VariableDeclarationContext;
	}
	public listSpaceSeparated(): ListSpaceSeparatedContext {
		return this.getTypedRuleContext(ListSpaceSeparatedContext, 0) as ListSpaceSeparatedContext;
	}
	public mapDeclaration(): MapDeclarationContext {
		return this.getTypedRuleContext(MapDeclarationContext, 0) as MapDeclarationContext;
	}
	public arglist(): ArglistContext {
		return this.getTypedRuleContext(ArglistContext, 0) as ArglistContext;
	}
	public prio(): PrioContext {
		return this.getTypedRuleContext(PrioContext, 0) as PrioContext;
	}
    public get ruleIndex(): number {
    	return SCSSParser.RULE_parameter;
	}
	public enterRule(listener: SCSSParserListener): void {
	    if(listener.enterParameter) {
	 		listener.enterParameter(this);
		}
	}
	public exitRule(listener: SCSSParserListener): void {
	    if(listener.exitParameter) {
	 		listener.exitParameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SCSSParserVisitor<Result>): Result {
		if (visitor.visitParameter) {
			return visitor.visitParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionBodyContext extends ParserRuleContext {
	constructor(parser?: SCSSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public functionStatement_list(): FunctionStatementContext[] {
		return this.getTypedRuleContexts(FunctionStatementContext) as FunctionStatementContext[];
	}
	public functionStatement(i: number): FunctionStatementContext {
		return this.getTypedRuleContext(FunctionStatementContext, i) as FunctionStatementContext;
	}
	public functionReturn(): FunctionReturnContext {
		return this.getTypedRuleContext(FunctionReturnContext, 0) as FunctionReturnContext;
	}
    public get ruleIndex(): number {
    	return SCSSParser.RULE_functionBody;
	}
	public enterRule(listener: SCSSParserListener): void {
	    if(listener.enterFunctionBody) {
	 		listener.enterFunctionBody(this);
		}
	}
	public exitRule(listener: SCSSParserListener): void {
	    if(listener.exitFunctionBody) {
	 		listener.exitFunctionBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SCSSParserVisitor<Result>): Result {
		if (visitor.visitFunctionBody) {
			return visitor.visitFunctionBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionReturnContext extends ParserRuleContext {
	constructor(parser?: SCSSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Return(): TerminalNode {
		return this.getToken(SCSSParser.Return, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public Comma_list(): TerminalNode[] {
	    	return this.getTokens(SCSSParser.Comma);
	}
	public Comma(i: number): TerminalNode {
		return this.getToken(SCSSParser.Comma, i);
	}
	public Semi(): TerminalNode {
		return this.getToken(SCSSParser.Semi, 0);
	}
    public get ruleIndex(): number {
    	return SCSSParser.RULE_functionReturn;
	}
	public enterRule(listener: SCSSParserListener): void {
	    if(listener.enterFunctionReturn) {
	 		listener.enterFunctionReturn(this);
		}
	}
	public exitRule(listener: SCSSParserListener): void {
	    if(listener.exitFunctionReturn) {
	 		listener.exitFunctionReturn(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SCSSParserVisitor<Result>): Result {
		if (visitor.visitFunctionReturn) {
			return visitor.visitFunctionReturn(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionStatementContext extends ParserRuleContext {
	constructor(parser?: SCSSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public Semi(): TerminalNode {
		return this.getToken(SCSSParser.Semi, 0);
	}
	public statement(): StatementContext {
		return this.getTypedRuleContext(StatementContext, 0) as StatementContext;
	}
    public get ruleIndex(): number {
    	return SCSSParser.RULE_functionStatement;
	}
	public enterRule(listener: SCSSParserListener): void {
	    if(listener.enterFunctionStatement) {
	 		listener.enterFunctionStatement(this);
		}
	}
	public exitRule(listener: SCSSParserListener): void {
	    if(listener.exitFunctionStatement) {
	 		listener.exitFunctionStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SCSSParserVisitor<Result>): Result {
		if (visitor.visitFunctionStatement) {
			return visitor.visitFunctionStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionCallContext extends ParserRuleContext {
	constructor(parser?: SCSSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public Lparen(): TerminalNode {
		return this.getToken(SCSSParser.Lparen, 0);
	}
	public parameters(): ParametersContext {
		return this.getTypedRuleContext(ParametersContext, 0) as ParametersContext;
	}
	public Rparen(): TerminalNode {
		return this.getToken(SCSSParser.Rparen, 0);
	}
	public namespace_(): Namespace_Context {
		return this.getTypedRuleContext(Namespace_Context, 0) as Namespace_Context;
	}
    public get ruleIndex(): number {
    	return SCSSParser.RULE_functionCall;
	}
	public enterRule(listener: SCSSParserListener): void {
	    if(listener.enterFunctionCall) {
	 		listener.enterFunctionCall(this);
		}
	}
	public exitRule(listener: SCSSParserListener): void {
	    if(listener.exitFunctionCall) {
	 		listener.exitFunctionCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SCSSParserVisitor<Result>): Result {
		if (visitor.visitFunctionCall) {
			return visitor.visitFunctionCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	constructor(parser?: SCSSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expressionPart_list(): ExpressionPartContext[] {
		return this.getTypedRuleContexts(ExpressionPartContext) as ExpressionPartContext[];
	}
	public expressionPart(i: number): ExpressionPartContext {
		return this.getTypedRuleContext(ExpressionPartContext, i) as ExpressionPartContext;
	}
	public Not_list(): TerminalNode[] {
	    	return this.getTokens(SCSSParser.Not);
	}
	public Not(i: number): TerminalNode {
		return this.getToken(SCSSParser.Not, i);
	}
	public operator__list(): Operator_Context[] {
		return this.getTypedRuleContexts(Operator_Context) as Operator_Context[];
	}
	public operator_(i: number): Operator_Context {
		return this.getTypedRuleContext(Operator_Context, i) as Operator_Context;
	}
    public get ruleIndex(): number {
    	return SCSSParser.RULE_expression;
	}
	public enterRule(listener: SCSSParserListener): void {
	    if(listener.enterExpression) {
	 		listener.enterExpression(this);
		}
	}
	public exitRule(listener: SCSSParserListener): void {
	    if(listener.exitExpression) {
	 		listener.exitExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SCSSParserVisitor<Result>): Result {
		if (visitor.visitExpression) {
			return visitor.visitExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionPartContext extends ParserRuleContext {
	constructor(parser?: SCSSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public unit(): UnitContext {
		return this.getTypedRuleContext(UnitContext, 0) as UnitContext;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public variableName(): VariableNameContext {
		return this.getTypedRuleContext(VariableNameContext, 0) as VariableNameContext;
	}
	public var_(): Var_Context {
		return this.getTypedRuleContext(Var_Context, 0) as Var_Context;
	}
	public boolean_(): BooleanContext {
		return this.getTypedRuleContext(BooleanContext, 0) as BooleanContext;
	}
	public calc(): CalcContext {
		return this.getTypedRuleContext(CalcContext, 0) as CalcContext;
	}
	public rotate(): RotateContext {
		return this.getTypedRuleContext(RotateContext, 0) as RotateContext;
	}
	public rgba(): RgbaContext {
		return this.getTypedRuleContext(RgbaContext, 0) as RgbaContext;
	}
	public number_(): NumberContext {
		return this.getTypedRuleContext(NumberContext, 0) as NumberContext;
	}
	public uri(): UriContext {
		return this.getTypedRuleContext(UriContext, 0) as UriContext;
	}
	public Format(): TerminalNode {
		return this.getToken(SCSSParser.Format, 0);
	}
	public String_(): TerminalNode {
		return this.getToken(SCSSParser.String_, 0);
	}
	public interpolation(): InterpolationContext {
		return this.getTypedRuleContext(InterpolationContext, 0) as InterpolationContext;
	}
	public hexcolor(): HexcolorContext {
		return this.getTypedRuleContext(HexcolorContext, 0) as HexcolorContext;
	}
	public ifExpression(): IfExpressionContext {
		return this.getTypedRuleContext(IfExpressionContext, 0) as IfExpressionContext;
	}
	public functionCall(): FunctionCallContext {
		return this.getTypedRuleContext(FunctionCallContext, 0) as FunctionCallContext;
	}
	public Lparen(): TerminalNode {
		return this.getToken(SCSSParser.Lparen, 0);
	}
	public Rparen(): TerminalNode {
		return this.getToken(SCSSParser.Rparen, 0);
	}
	public plusMinus(): PlusMinusContext {
		return this.getTypedRuleContext(PlusMinusContext, 0) as PlusMinusContext;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public prio(): PrioContext {
		return this.getTypedRuleContext(PrioContext, 0) as PrioContext;
	}
	public measurment(): MeasurmentContext {
		return this.getTypedRuleContext(MeasurmentContext, 0) as MeasurmentContext;
	}
    public get ruleIndex(): number {
    	return SCSSParser.RULE_expressionPart;
	}
	public enterRule(listener: SCSSParserListener): void {
	    if(listener.enterExpressionPart) {
	 		listener.enterExpressionPart(this);
		}
	}
	public exitRule(listener: SCSSParserListener): void {
	    if(listener.exitExpressionPart) {
	 		listener.exitExpressionPart(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SCSSParserVisitor<Result>): Result {
		if (visitor.visitExpressionPart) {
			return visitor.visitExpressionPart(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfExpressionContext extends ParserRuleContext {
	constructor(parser?: SCSSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public If(): TerminalNode {
		return this.getToken(SCSSParser.If, 0);
	}
	public Lparen(): TerminalNode {
		return this.getToken(SCSSParser.Lparen, 0);
	}
	public Comma_list(): TerminalNode[] {
	    	return this.getTokens(SCSSParser.Comma);
	}
	public Comma(i: number): TerminalNode {
		return this.getToken(SCSSParser.Comma, i);
	}
	public value_list(): ValueContext[] {
		return this.getTypedRuleContexts(ValueContext) as ValueContext[];
	}
	public value(i: number): ValueContext {
		return this.getTypedRuleContext(ValueContext, i) as ValueContext;
	}
	public Rparen(): TerminalNode {
		return this.getToken(SCSSParser.Rparen, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public parentRef(): ParentRefContext {
		return this.getTypedRuleContext(ParentRefContext, 0) as ParentRefContext;
	}
	public measurment(): MeasurmentContext {
		return this.getTypedRuleContext(MeasurmentContext, 0) as MeasurmentContext;
	}
	public prio(): PrioContext {
		return this.getTypedRuleContext(PrioContext, 0) as PrioContext;
	}
    public get ruleIndex(): number {
    	return SCSSParser.RULE_ifExpression;
	}
	public enterRule(listener: SCSSParserListener): void {
	    if(listener.enterIfExpression) {
	 		listener.enterIfExpression(this);
		}
	}
	public exitRule(listener: SCSSParserListener): void {
	    if(listener.exitIfExpression) {
	 		listener.exitIfExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SCSSParserVisitor<Result>): Result {
		if (visitor.visitIfExpression) {
			return visitor.visitIfExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ListDeclarationContext extends ParserRuleContext {
	constructor(parser?: SCSSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public listBracketed(): ListBracketedContext {
		return this.getTypedRuleContext(ListBracketedContext, 0) as ListBracketedContext;
	}
	public listCommaSeparated(): ListCommaSeparatedContext {
		return this.getTypedRuleContext(ListCommaSeparatedContext, 0) as ListCommaSeparatedContext;
	}
	public listSpaceSeparated(): ListSpaceSeparatedContext {
		return this.getTypedRuleContext(ListSpaceSeparatedContext, 0) as ListSpaceSeparatedContext;
	}
	public Lparen(): TerminalNode {
		return this.getToken(SCSSParser.Lparen, 0);
	}
	public listDeclaration(): ListDeclarationContext {
		return this.getTypedRuleContext(ListDeclarationContext, 0) as ListDeclarationContext;
	}
	public Rparen(): TerminalNode {
		return this.getToken(SCSSParser.Rparen, 0);
	}
    public get ruleIndex(): number {
    	return SCSSParser.RULE_listDeclaration;
	}
	public enterRule(listener: SCSSParserListener): void {
	    if(listener.enterListDeclaration) {
	 		listener.enterListDeclaration(this);
		}
	}
	public exitRule(listener: SCSSParserListener): void {
	    if(listener.exitListDeclaration) {
	 		listener.exitListDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SCSSParserVisitor<Result>): Result {
		if (visitor.visitListDeclaration) {
			return visitor.visitListDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ListCommaSeparatedContext extends ParserRuleContext {
	constructor(parser?: SCSSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public listElement_list(): ListElementContext[] {
		return this.getTypedRuleContexts(ListElementContext) as ListElementContext[];
	}
	public listElement(i: number): ListElementContext {
		return this.getTypedRuleContext(ListElementContext, i) as ListElementContext;
	}
	public Comma_list(): TerminalNode[] {
	    	return this.getTokens(SCSSParser.Comma);
	}
	public Comma(i: number): TerminalNode {
		return this.getToken(SCSSParser.Comma, i);
	}
    public get ruleIndex(): number {
    	return SCSSParser.RULE_listCommaSeparated;
	}
	public enterRule(listener: SCSSParserListener): void {
	    if(listener.enterListCommaSeparated) {
	 		listener.enterListCommaSeparated(this);
		}
	}
	public exitRule(listener: SCSSParserListener): void {
	    if(listener.exitListCommaSeparated) {
	 		listener.exitListCommaSeparated(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SCSSParserVisitor<Result>): Result {
		if (visitor.visitListCommaSeparated) {
			return visitor.visitListCommaSeparated(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ListSpaceSeparatedContext extends ParserRuleContext {
	constructor(parser?: SCSSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public listElement_list(): ListElementContext[] {
		return this.getTypedRuleContexts(ListElementContext) as ListElementContext[];
	}
	public listElement(i: number): ListElementContext {
		return this.getTypedRuleContext(ListElementContext, i) as ListElementContext;
	}
    public get ruleIndex(): number {
    	return SCSSParser.RULE_listSpaceSeparated;
	}
	public enterRule(listener: SCSSParserListener): void {
	    if(listener.enterListSpaceSeparated) {
	 		listener.enterListSpaceSeparated(this);
		}
	}
	public exitRule(listener: SCSSParserListener): void {
	    if(listener.exitListSpaceSeparated) {
	 		listener.exitListSpaceSeparated(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SCSSParserVisitor<Result>): Result {
		if (visitor.visitListSpaceSeparated) {
			return visitor.visitListSpaceSeparated(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ListBracketedContext extends ParserRuleContext {
	constructor(parser?: SCSSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Lbrack(): TerminalNode {
		return this.getToken(SCSSParser.Lbrack, 0);
	}
	public Rbrack(): TerminalNode {
		return this.getToken(SCSSParser.Rbrack, 0);
	}
	public listSpaceSeparated(): ListSpaceSeparatedContext {
		return this.getTypedRuleContext(ListSpaceSeparatedContext, 0) as ListSpaceSeparatedContext;
	}
	public listCommaSeparated(): ListCommaSeparatedContext {
		return this.getTypedRuleContext(ListCommaSeparatedContext, 0) as ListCommaSeparatedContext;
	}
    public get ruleIndex(): number {
    	return SCSSParser.RULE_listBracketed;
	}
	public enterRule(listener: SCSSParserListener): void {
	    if(listener.enterListBracketed) {
	 		listener.enterListBracketed(this);
		}
	}
	public exitRule(listener: SCSSParserListener): void {
	    if(listener.exitListBracketed) {
	 		listener.exitListBracketed(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SCSSParserVisitor<Result>): Result {
		if (visitor.visitListBracketed) {
			return visitor.visitListBracketed(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ListElementContext extends ParserRuleContext {
	constructor(parser?: SCSSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Lparen(): TerminalNode {
		return this.getToken(SCSSParser.Lparen, 0);
	}
	public value_list(): ValueContext[] {
		return this.getTypedRuleContexts(ValueContext) as ValueContext[];
	}
	public value(i: number): ValueContext {
		return this.getTypedRuleContext(ValueContext, i) as ValueContext;
	}
	public Rparen(): TerminalNode {
		return this.getToken(SCSSParser.Rparen, 0);
	}
	public Comma_list(): TerminalNode[] {
	    	return this.getTokens(SCSSParser.Comma);
	}
	public Comma(i: number): TerminalNode {
		return this.getToken(SCSSParser.Comma, i);
	}
    public get ruleIndex(): number {
    	return SCSSParser.RULE_listElement;
	}
	public enterRule(listener: SCSSParserListener): void {
	    if(listener.enterListElement) {
	 		listener.enterListElement(this);
		}
	}
	public exitRule(listener: SCSSParserListener): void {
	    if(listener.exitListElement) {
	 		listener.exitListElement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SCSSParserVisitor<Result>): Result {
		if (visitor.visitListElement) {
			return visitor.visitListElement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MapDeclarationContext extends ParserRuleContext {
	constructor(parser?: SCSSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Lparen(): TerminalNode {
		return this.getToken(SCSSParser.Lparen, 0);
	}
	public mapEntries(): MapEntriesContext {
		return this.getTypedRuleContext(MapEntriesContext, 0) as MapEntriesContext;
	}
	public Rparen(): TerminalNode {
		return this.getToken(SCSSParser.Rparen, 0);
	}
    public get ruleIndex(): number {
    	return SCSSParser.RULE_mapDeclaration;
	}
	public enterRule(listener: SCSSParserListener): void {
	    if(listener.enterMapDeclaration) {
	 		listener.enterMapDeclaration(this);
		}
	}
	public exitRule(listener: SCSSParserListener): void {
	    if(listener.exitMapDeclaration) {
	 		listener.exitMapDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SCSSParserVisitor<Result>): Result {
		if (visitor.visitMapDeclaration) {
			return visitor.visitMapDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MapEntriesContext extends ParserRuleContext {
	constructor(parser?: SCSSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public mapEntry_list(): MapEntryContext[] {
		return this.getTypedRuleContexts(MapEntryContext) as MapEntryContext[];
	}
	public mapEntry(i: number): MapEntryContext {
		return this.getTypedRuleContext(MapEntryContext, i) as MapEntryContext;
	}
	public Comma_list(): TerminalNode[] {
	    	return this.getTokens(SCSSParser.Comma);
	}
	public Comma(i: number): TerminalNode {
		return this.getToken(SCSSParser.Comma, i);
	}
    public get ruleIndex(): number {
    	return SCSSParser.RULE_mapEntries;
	}
	public enterRule(listener: SCSSParserListener): void {
	    if(listener.enterMapEntries) {
	 		listener.enterMapEntries(this);
		}
	}
	public exitRule(listener: SCSSParserListener): void {
	    if(listener.exitMapEntries) {
	 		listener.exitMapEntries(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SCSSParserVisitor<Result>): Result {
		if (visitor.visitMapEntries) {
			return visitor.visitMapEntries(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MapEntryContext extends ParserRuleContext {
	constructor(parser?: SCSSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public mapKey(): MapKeyContext {
		return this.getTypedRuleContext(MapKeyContext, 0) as MapKeyContext;
	}
	public Colon(): TerminalNode {
		return this.getToken(SCSSParser.Colon, 0);
	}
	public mapValue(): MapValueContext {
		return this.getTypedRuleContext(MapValueContext, 0) as MapValueContext;
	}
    public get ruleIndex(): number {
    	return SCSSParser.RULE_mapEntry;
	}
	public enterRule(listener: SCSSParserListener): void {
	    if(listener.enterMapEntry) {
	 		listener.enterMapEntry(this);
		}
	}
	public exitRule(listener: SCSSParserListener): void {
	    if(listener.exitMapEntry) {
	 		listener.exitMapEntry(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SCSSParserVisitor<Result>): Result {
		if (visitor.visitMapEntry) {
			return visitor.visitMapEntry(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MapKeyContext extends ParserRuleContext {
	constructor(parser?: SCSSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public value(): ValueContext {
		return this.getTypedRuleContext(ValueContext, 0) as ValueContext;
	}
	public listDeclaration(): ListDeclarationContext {
		return this.getTypedRuleContext(ListDeclarationContext, 0) as ListDeclarationContext;
	}
	public mapDeclaration(): MapDeclarationContext {
		return this.getTypedRuleContext(MapDeclarationContext, 0) as MapDeclarationContext;
	}
    public get ruleIndex(): number {
    	return SCSSParser.RULE_mapKey;
	}
	public enterRule(listener: SCSSParserListener): void {
	    if(listener.enterMapKey) {
	 		listener.enterMapKey(this);
		}
	}
	public exitRule(listener: SCSSParserListener): void {
	    if(listener.exitMapKey) {
	 		listener.exitMapKey(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SCSSParserVisitor<Result>): Result {
		if (visitor.visitMapKey) {
			return visitor.visitMapKey(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MapValueContext extends ParserRuleContext {
	constructor(parser?: SCSSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public value(): ValueContext {
		return this.getTypedRuleContext(ValueContext, 0) as ValueContext;
	}
	public listDeclaration(): ListDeclarationContext {
		return this.getTypedRuleContext(ListDeclarationContext, 0) as ListDeclarationContext;
	}
	public mapDeclaration(): MapDeclarationContext {
		return this.getTypedRuleContext(MapDeclarationContext, 0) as MapDeclarationContext;
	}
    public get ruleIndex(): number {
    	return SCSSParser.RULE_mapValue;
	}
	public enterRule(listener: SCSSParserListener): void {
	    if(listener.enterMapValue) {
	 		listener.enterMapValue(this);
		}
	}
	public exitRule(listener: SCSSParserListener): void {
	    if(listener.exitMapValue) {
	 		listener.exitMapValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SCSSParserVisitor<Result>): Result {
		if (visitor.visitMapValue) {
			return visitor.visitMapValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfDeclarationContext extends ParserRuleContext {
	constructor(parser?: SCSSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public AtIf(): TerminalNode {
		return this.getToken(SCSSParser.AtIf, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
	public elseIfStatement_list(): ElseIfStatementContext[] {
		return this.getTypedRuleContexts(ElseIfStatementContext) as ElseIfStatementContext[];
	}
	public elseIfStatement(i: number): ElseIfStatementContext {
		return this.getTypedRuleContext(ElseIfStatementContext, i) as ElseIfStatementContext;
	}
	public elseStatement(): ElseStatementContext {
		return this.getTypedRuleContext(ElseStatementContext, 0) as ElseStatementContext;
	}
    public get ruleIndex(): number {
    	return SCSSParser.RULE_ifDeclaration;
	}
	public enterRule(listener: SCSSParserListener): void {
	    if(listener.enterIfDeclaration) {
	 		listener.enterIfDeclaration(this);
		}
	}
	public exitRule(listener: SCSSParserListener): void {
	    if(listener.exitIfDeclaration) {
	 		listener.exitIfDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SCSSParserVisitor<Result>): Result {
		if (visitor.visitIfDeclaration) {
			return visitor.visitIfDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElseIfStatementContext extends ParserRuleContext {
	constructor(parser?: SCSSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public AtElse(): TerminalNode {
		return this.getToken(SCSSParser.AtElse, 0);
	}
	public If(): TerminalNode {
		return this.getToken(SCSSParser.If, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
    public get ruleIndex(): number {
    	return SCSSParser.RULE_elseIfStatement;
	}
	public enterRule(listener: SCSSParserListener): void {
	    if(listener.enterElseIfStatement) {
	 		listener.enterElseIfStatement(this);
		}
	}
	public exitRule(listener: SCSSParserListener): void {
	    if(listener.exitElseIfStatement) {
	 		listener.exitElseIfStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SCSSParserVisitor<Result>): Result {
		if (visitor.visitElseIfStatement) {
			return visitor.visitElseIfStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElseStatementContext extends ParserRuleContext {
	constructor(parser?: SCSSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public AtElse(): TerminalNode {
		return this.getToken(SCSSParser.AtElse, 0);
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
    public get ruleIndex(): number {
    	return SCSSParser.RULE_elseStatement;
	}
	public enterRule(listener: SCSSParserListener): void {
	    if(listener.enterElseStatement) {
	 		listener.enterElseStatement(this);
		}
	}
	public exitRule(listener: SCSSParserListener): void {
	    if(listener.exitElseStatement) {
	 		listener.exitElseStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SCSSParserVisitor<Result>): Result {
		if (visitor.visitElseStatement) {
			return visitor.visitElseStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ForDeclarationContext extends ParserRuleContext {
	constructor(parser?: SCSSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public AtFor(): TerminalNode {
		return this.getToken(SCSSParser.AtFor, 0);
	}
	public variableName(): VariableNameContext {
		return this.getTypedRuleContext(VariableNameContext, 0) as VariableNameContext;
	}
	public From(): TerminalNode {
		return this.getToken(SCSSParser.From, 0);
	}
	public Number(): TerminalNode {
		return this.getToken(SCSSParser.Number, 0);
	}
	public through(): ThroughContext {
		return this.getTypedRuleContext(ThroughContext, 0) as ThroughContext;
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
	public To(): TerminalNode {
		return this.getToken(SCSSParser.To, 0);
	}
	public Through(): TerminalNode {
		return this.getToken(SCSSParser.Through, 0);
	}
    public get ruleIndex(): number {
    	return SCSSParser.RULE_forDeclaration;
	}
	public enterRule(listener: SCSSParserListener): void {
	    if(listener.enterForDeclaration) {
	 		listener.enterForDeclaration(this);
		}
	}
	public exitRule(listener: SCSSParserListener): void {
	    if(listener.exitForDeclaration) {
	 		listener.exitForDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SCSSParserVisitor<Result>): Result {
		if (visitor.visitForDeclaration) {
			return visitor.visitForDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ThroughContext extends ParserRuleContext {
	constructor(parser?: SCSSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Number(): TerminalNode {
		return this.getToken(SCSSParser.Number, 0);
	}
	public functionCall(): FunctionCallContext {
		return this.getTypedRuleContext(FunctionCallContext, 0) as FunctionCallContext;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return SCSSParser.RULE_through;
	}
	public enterRule(listener: SCSSParserListener): void {
	    if(listener.enterThrough) {
	 		listener.enterThrough(this);
		}
	}
	public exitRule(listener: SCSSParserListener): void {
	    if(listener.exitThrough) {
	 		listener.exitThrough(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SCSSParserVisitor<Result>): Result {
		if (visitor.visitThrough) {
			return visitor.visitThrough(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WhileDeclarationContext extends ParserRuleContext {
	constructor(parser?: SCSSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public AtWhile(): TerminalNode {
		return this.getToken(SCSSParser.AtWhile, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
    public get ruleIndex(): number {
    	return SCSSParser.RULE_whileDeclaration;
	}
	public enterRule(listener: SCSSParserListener): void {
	    if(listener.enterWhileDeclaration) {
	 		listener.enterWhileDeclaration(this);
		}
	}
	public exitRule(listener: SCSSParserListener): void {
	    if(listener.exitWhileDeclaration) {
	 		listener.exitWhileDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SCSSParserVisitor<Result>): Result {
		if (visitor.visitWhileDeclaration) {
			return visitor.visitWhileDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EachDeclarationContext extends ParserRuleContext {
	constructor(parser?: SCSSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public AtEach(): TerminalNode {
		return this.getToken(SCSSParser.AtEach, 0);
	}
	public variableName_list(): VariableNameContext[] {
		return this.getTypedRuleContexts(VariableNameContext) as VariableNameContext[];
	}
	public variableName(i: number): VariableNameContext {
		return this.getTypedRuleContext(VariableNameContext, i) as VariableNameContext;
	}
	public In(): TerminalNode {
		return this.getToken(SCSSParser.In, 0);
	}
	public eachValueList(): EachValueListContext {
		return this.getTypedRuleContext(EachValueListContext, 0) as EachValueListContext;
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
	public Comma_list(): TerminalNode[] {
	    	return this.getTokens(SCSSParser.Comma);
	}
	public Comma(i: number): TerminalNode {
		return this.getToken(SCSSParser.Comma, i);
	}
    public get ruleIndex(): number {
    	return SCSSParser.RULE_eachDeclaration;
	}
	public enterRule(listener: SCSSParserListener): void {
	    if(listener.enterEachDeclaration) {
	 		listener.enterEachDeclaration(this);
		}
	}
	public exitRule(listener: SCSSParserListener): void {
	    if(listener.exitEachDeclaration) {
	 		listener.exitEachDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SCSSParserVisitor<Result>): Result {
		if (visitor.visitEachDeclaration) {
			return visitor.visitEachDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EachValueListContext extends ParserRuleContext {
	constructor(parser?: SCSSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public listDeclaration(): ListDeclarationContext {
		return this.getTypedRuleContext(ListDeclarationContext, 0) as ListDeclarationContext;
	}
	public mapDeclaration(): MapDeclarationContext {
		return this.getTypedRuleContext(MapDeclarationContext, 0) as MapDeclarationContext;
	}
    public get ruleIndex(): number {
    	return SCSSParser.RULE_eachValueList;
	}
	public enterRule(listener: SCSSParserListener): void {
	    if(listener.enterEachValueList) {
	 		listener.enterEachValueList(this);
		}
	}
	public exitRule(listener: SCSSParserListener): void {
	    if(listener.exitEachValueList) {
	 		listener.exitEachValueList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SCSSParserVisitor<Result>): Result {
		if (visitor.visitEachValueList) {
			return visitor.visitEachValueList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Var_Context extends ParserRuleContext {
	constructor(parser?: SCSSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Var(): TerminalNode {
		return this.getToken(SCSSParser.Var, 0);
	}
	public Variable(): TerminalNode {
		return this.getToken(SCSSParser.Variable, 0);
	}
	public Rparen(): TerminalNode {
		return this.getToken(SCSSParser.Rparen, 0);
	}
	public Comma(): TerminalNode {
		return this.getToken(SCSSParser.Comma, 0);
	}
	public value(): ValueContext {
		return this.getTypedRuleContext(ValueContext, 0) as ValueContext;
	}
    public get ruleIndex(): number {
    	return SCSSParser.RULE_var_;
	}
	public enterRule(listener: SCSSParserListener): void {
	    if(listener.enterVar_) {
	 		listener.enterVar_(this);
		}
	}
	public exitRule(listener: SCSSParserListener): void {
	    if(listener.exitVar_) {
	 		listener.exitVar_(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SCSSParserVisitor<Result>): Result {
		if (visitor.visitVar_) {
			return visitor.visitVar_(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CalcContext extends ParserRuleContext {
	constructor(parser?: SCSSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Calc(): TerminalNode {
		return this.getToken(SCSSParser.Calc, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public Rparen(): TerminalNode {
		return this.getToken(SCSSParser.Rparen, 0);
	}
    public get ruleIndex(): number {
    	return SCSSParser.RULE_calc;
	}
	public enterRule(listener: SCSSParserListener): void {
	    if(listener.enterCalc) {
	 		listener.enterCalc(this);
		}
	}
	public exitRule(listener: SCSSParserListener): void {
	    if(listener.exitCalc) {
	 		listener.exitCalc(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SCSSParserVisitor<Result>): Result {
		if (visitor.visitCalc) {
			return visitor.visitCalc(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RotateContext extends ParserRuleContext {
	constructor(parser?: SCSSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Rotate(): TerminalNode {
		return this.getToken(SCSSParser.Rotate, 0);
	}
	public degree(): DegreeContext {
		return this.getTypedRuleContext(DegreeContext, 0) as DegreeContext;
	}
	public Rparen(): TerminalNode {
		return this.getToken(SCSSParser.Rparen, 0);
	}
    public get ruleIndex(): number {
    	return SCSSParser.RULE_rotate;
	}
	public enterRule(listener: SCSSParserListener): void {
	    if(listener.enterRotate) {
	 		listener.enterRotate(this);
		}
	}
	public exitRule(listener: SCSSParserListener): void {
	    if(listener.exitRotate) {
	 		listener.exitRotate(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SCSSParserVisitor<Result>): Result {
		if (visitor.visitRotate) {
			return visitor.visitRotate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RgbaContext extends ParserRuleContext {
	constructor(parser?: SCSSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Rgba(): TerminalNode {
		return this.getToken(SCSSParser.Rgba, 0);
	}
	public value_list(): ValueContext[] {
		return this.getTypedRuleContexts(ValueContext) as ValueContext[];
	}
	public value(i: number): ValueContext {
		return this.getTypedRuleContext(ValueContext, i) as ValueContext;
	}
	public Rparen(): TerminalNode {
		return this.getToken(SCSSParser.Rparen, 0);
	}
	public Comma_list(): TerminalNode[] {
	    	return this.getTokens(SCSSParser.Comma);
	}
	public Comma(i: number): TerminalNode {
		return this.getToken(SCSSParser.Comma, i);
	}
    public get ruleIndex(): number {
    	return SCSSParser.RULE_rgba;
	}
	public enterRule(listener: SCSSParserListener): void {
	    if(listener.enterRgba) {
	 		listener.enterRgba(this);
		}
	}
	public exitRule(listener: SCSSParserListener): void {
	    if(listener.exitRgba) {
	 		listener.exitRgba(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SCSSParserVisitor<Result>): Result {
		if (visitor.visitRgba) {
			return visitor.visitRgba(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RepeatContext extends ParserRuleContext {
	constructor(parser?: SCSSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Repeat(): TerminalNode {
		return this.getToken(SCSSParser.Repeat, 0);
	}
	public value(): ValueContext {
		return this.getTypedRuleContext(ValueContext, 0) as ValueContext;
	}
	public Comma(): TerminalNode {
		return this.getToken(SCSSParser.Comma, 0);
	}
	public number_(): NumberContext {
		return this.getTypedRuleContext(NumberContext, 0) as NumberContext;
	}
	public Freq(): TerminalNode {
		return this.getToken(SCSSParser.Freq, 0);
	}
	public Rparen(): TerminalNode {
		return this.getToken(SCSSParser.Rparen, 0);
	}
    public get ruleIndex(): number {
    	return SCSSParser.RULE_repeat;
	}
	public enterRule(listener: SCSSParserListener): void {
	    if(listener.enterRepeat) {
	 		listener.enterRepeat(this);
		}
	}
	public exitRule(listener: SCSSParserListener): void {
	    if(listener.exitRepeat) {
	 		listener.exitRepeat(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SCSSParserVisitor<Result>): Result {
		if (visitor.visitRepeat) {
			return visitor.visitRepeat(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnitContext extends ParserRuleContext {
	constructor(parser?: SCSSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public length(): LengthContext {
		return this.getTypedRuleContext(LengthContext, 0) as LengthContext;
	}
	public dimension(): DimensionContext {
		return this.getTypedRuleContext(DimensionContext, 0) as DimensionContext;
	}
	public percentage(): PercentageContext {
		return this.getTypedRuleContext(PercentageContext, 0) as PercentageContext;
	}
	public degree(): DegreeContext {
		return this.getTypedRuleContext(DegreeContext, 0) as DegreeContext;
	}
    public get ruleIndex(): number {
    	return SCSSParser.RULE_unit;
	}
	public enterRule(listener: SCSSParserListener): void {
	    if(listener.enterUnit) {
	 		listener.enterUnit(this);
		}
	}
	public exitRule(listener: SCSSParserListener): void {
	    if(listener.exitUnit) {
	 		listener.exitUnit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SCSSParserVisitor<Result>): Result {
		if (visitor.visitUnit) {
			return visitor.visitUnit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LengthContext extends ParserRuleContext {
	constructor(parser?: SCSSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Number(): TerminalNode {
		return this.getToken(SCSSParser.Number, 0);
	}
	public AbsLength(): TerminalNode {
		return this.getToken(SCSSParser.AbsLength, 0);
	}
	public FontRelative(): TerminalNode {
		return this.getToken(SCSSParser.FontRelative, 0);
	}
	public ViewportRelative(): TerminalNode {
		return this.getToken(SCSSParser.ViewportRelative, 0);
	}
	public plusMinus(): PlusMinusContext {
		return this.getTypedRuleContext(PlusMinusContext, 0) as PlusMinusContext;
	}
    public get ruleIndex(): number {
    	return SCSSParser.RULE_length;
	}
	public enterRule(listener: SCSSParserListener): void {
	    if(listener.enterLength) {
	 		listener.enterLength(this);
		}
	}
	public exitRule(listener: SCSSParserListener): void {
	    if(listener.exitLength) {
	 		listener.exitLength(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SCSSParserVisitor<Result>): Result {
		if (visitor.visitLength) {
			return visitor.visitLength(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DimensionContext extends ParserRuleContext {
	constructor(parser?: SCSSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Number(): TerminalNode {
		return this.getToken(SCSSParser.Number, 0);
	}
	public Time(): TerminalNode {
		return this.getToken(SCSSParser.Time, 0);
	}
	public Freq(): TerminalNode {
		return this.getToken(SCSSParser.Freq, 0);
	}
	public Resolution(): TerminalNode {
		return this.getToken(SCSSParser.Resolution, 0);
	}
	public Angle(): TerminalNode {
		return this.getToken(SCSSParser.Angle, 0);
	}
	public plusMinus(): PlusMinusContext {
		return this.getTypedRuleContext(PlusMinusContext, 0) as PlusMinusContext;
	}
    public get ruleIndex(): number {
    	return SCSSParser.RULE_dimension;
	}
	public enterRule(listener: SCSSParserListener): void {
	    if(listener.enterDimension) {
	 		listener.enterDimension(this);
		}
	}
	public exitRule(listener: SCSSParserListener): void {
	    if(listener.exitDimension) {
	 		listener.exitDimension(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SCSSParserVisitor<Result>): Result {
		if (visitor.visitDimension) {
			return visitor.visitDimension(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PercentageContext extends ParserRuleContext {
	constructor(parser?: SCSSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Number(): TerminalNode {
		return this.getToken(SCSSParser.Number, 0);
	}
	public Percentage(): TerminalNode {
		return this.getToken(SCSSParser.Percentage, 0);
	}
	public plusMinus(): PlusMinusContext {
		return this.getTypedRuleContext(PlusMinusContext, 0) as PlusMinusContext;
	}
    public get ruleIndex(): number {
    	return SCSSParser.RULE_percentage;
	}
	public enterRule(listener: SCSSParserListener): void {
	    if(listener.enterPercentage) {
	 		listener.enterPercentage(this);
		}
	}
	public exitRule(listener: SCSSParserListener): void {
	    if(listener.exitPercentage) {
	 		listener.exitPercentage(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SCSSParserVisitor<Result>): Result {
		if (visitor.visitPercentage) {
			return visitor.visitPercentage(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DegreeContext extends ParserRuleContext {
	constructor(parser?: SCSSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Number(): TerminalNode {
		return this.getToken(SCSSParser.Number, 0);
	}
	public Angle(): TerminalNode {
		return this.getToken(SCSSParser.Angle, 0);
	}
	public plusMinus(): PlusMinusContext {
		return this.getTypedRuleContext(PlusMinusContext, 0) as PlusMinusContext;
	}
    public get ruleIndex(): number {
    	return SCSSParser.RULE_degree;
	}
	public enterRule(listener: SCSSParserListener): void {
	    if(listener.enterDegree) {
	 		listener.enterDegree(this);
		}
	}
	public exitRule(listener: SCSSParserListener): void {
	    if(listener.exitDegree) {
	 		listener.exitDegree(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SCSSParserVisitor<Result>): Result {
		if (visitor.visitDegree) {
			return visitor.visitDegree(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MeasurmentContext extends ParserRuleContext {
	constructor(parser?: SCSSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public AbsLength(): TerminalNode {
		return this.getToken(SCSSParser.AbsLength, 0);
	}
	public FontRelative(): TerminalNode {
		return this.getToken(SCSSParser.FontRelative, 0);
	}
	public ViewportRelative(): TerminalNode {
		return this.getToken(SCSSParser.ViewportRelative, 0);
	}
	public Time(): TerminalNode {
		return this.getToken(SCSSParser.Time, 0);
	}
	public Freq(): TerminalNode {
		return this.getToken(SCSSParser.Freq, 0);
	}
	public Resolution(): TerminalNode {
		return this.getToken(SCSSParser.Resolution, 0);
	}
	public Angle(): TerminalNode {
		return this.getToken(SCSSParser.Angle, 0);
	}
	public Percentage(): TerminalNode {
		return this.getToken(SCSSParser.Percentage, 0);
	}
    public get ruleIndex(): number {
    	return SCSSParser.RULE_measurment;
	}
	public enterRule(listener: SCSSParserListener): void {
	    if(listener.enterMeasurment) {
	 		listener.enterMeasurment(this);
		}
	}
	public exitRule(listener: SCSSParserListener): void {
	    if(listener.exitMeasurment) {
	 		listener.exitMeasurment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SCSSParserVisitor<Result>): Result {
		if (visitor.visitMeasurment) {
			return visitor.visitMeasurment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UriContext extends ParserRuleContext {
	constructor(parser?: SCSSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Uri(): TerminalNode {
		return this.getToken(SCSSParser.Uri, 0);
	}
    public get ruleIndex(): number {
    	return SCSSParser.RULE_uri;
	}
	public enterRule(listener: SCSSParserListener): void {
	    if(listener.enterUri) {
	 		listener.enterUri(this);
		}
	}
	public exitRule(listener: SCSSParserListener): void {
	    if(listener.exitUri) {
	 		listener.exitUri(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SCSSParserVisitor<Result>): Result {
		if (visitor.visitUri) {
			return visitor.visitUri(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArglistContext extends ParserRuleContext {
	constructor(parser?: SCSSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Dot_list(): TerminalNode[] {
	    	return this.getTokens(SCSSParser.Dot);
	}
	public Dot(i: number): TerminalNode {
		return this.getToken(SCSSParser.Dot, i);
	}
    public get ruleIndex(): number {
    	return SCSSParser.RULE_arglist;
	}
	public enterRule(listener: SCSSParserListener): void {
	    if(listener.enterArglist) {
	 		listener.enterArglist(this);
		}
	}
	public exitRule(listener: SCSSParserListener): void {
	    if(listener.exitArglist) {
	 		listener.exitArglist(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SCSSParserVisitor<Result>): Result {
		if (visitor.visitArglist) {
			return visitor.visitArglist(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PlusMinusContext extends ParserRuleContext {
	constructor(parser?: SCSSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Plus(): TerminalNode {
		return this.getToken(SCSSParser.Plus, 0);
	}
	public Minus(): TerminalNode {
		return this.getToken(SCSSParser.Minus, 0);
	}
    public get ruleIndex(): number {
    	return SCSSParser.RULE_plusMinus;
	}
	public enterRule(listener: SCSSParserListener): void {
	    if(listener.enterPlusMinus) {
	 		listener.enterPlusMinus(this);
		}
	}
	public exitRule(listener: SCSSParserListener): void {
	    if(listener.exitPlusMinus) {
	 		listener.exitPlusMinus(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SCSSParserVisitor<Result>): Result {
		if (visitor.visitPlusMinus) {
			return visitor.visitPlusMinus(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class HexcolorContext extends ParserRuleContext {
	constructor(parser?: SCSSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Hash(): TerminalNode {
		return this.getToken(SCSSParser.Hash, 0);
	}
	public color(): ColorContext {
		return this.getTypedRuleContext(ColorContext, 0) as ColorContext;
	}
    public get ruleIndex(): number {
    	return SCSSParser.RULE_hexcolor;
	}
	public enterRule(listener: SCSSParserListener): void {
	    if(listener.enterHexcolor) {
	 		listener.enterHexcolor(this);
		}
	}
	public exitRule(listener: SCSSParserListener): void {
	    if(listener.exitHexcolor) {
	 		listener.exitHexcolor(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SCSSParserVisitor<Result>): Result {
		if (visitor.visitHexcolor) {
			return visitor.visitHexcolor(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ColorContext extends ParserRuleContext {
	constructor(parser?: SCSSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Number_list(): TerminalNode[] {
	    	return this.getTokens(SCSSParser.Number);
	}
	public Number(i: number): TerminalNode {
		return this.getToken(SCSSParser.Number, i);
	}
	public Ident_list(): TerminalNode[] {
	    	return this.getTokens(SCSSParser.Ident);
	}
	public Ident(i: number): TerminalNode {
		return this.getToken(SCSSParser.Ident, i);
	}
    public get ruleIndex(): number {
    	return SCSSParser.RULE_color;
	}
	public enterRule(listener: SCSSParserListener): void {
	    if(listener.enterColor) {
	 		listener.enterColor(this);
		}
	}
	public exitRule(listener: SCSSParserListener): void {
	    if(listener.exitColor) {
	 		listener.exitColor(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SCSSParserVisitor<Result>): Result {
		if (visitor.visitColor) {
			return visitor.visitColor(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BooleanContext extends ParserRuleContext {
	constructor(parser?: SCSSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public True(): TerminalNode {
		return this.getToken(SCSSParser.True, 0);
	}
	public False(): TerminalNode {
		return this.getToken(SCSSParser.False, 0);
	}
    public get ruleIndex(): number {
    	return SCSSParser.RULE_boolean;
	}
	public enterRule(listener: SCSSParserListener): void {
	    if(listener.enterBoolean) {
	 		listener.enterBoolean(this);
		}
	}
	public exitRule(listener: SCSSParserListener): void {
	    if(listener.exitBoolean) {
	 		listener.exitBoolean(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SCSSParserVisitor<Result>): Result {
		if (visitor.visitBoolean) {
			return visitor.visitBoolean(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NumberContext extends ParserRuleContext {
	constructor(parser?: SCSSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Number(): TerminalNode {
		return this.getToken(SCSSParser.Number, 0);
	}
	public plusMinus(): PlusMinusContext {
		return this.getTypedRuleContext(PlusMinusContext, 0) as PlusMinusContext;
	}
    public get ruleIndex(): number {
    	return SCSSParser.RULE_number;
	}
	public enterRule(listener: SCSSParserListener): void {
	    if(listener.enterNumber) {
	 		listener.enterNumber(this);
		}
	}
	public exitRule(listener: SCSSParserListener): void {
	    if(listener.exitNumber) {
	 		listener.exitNumber(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SCSSParserVisitor<Result>): Result {
		if (visitor.visitNumber) {
			return visitor.visitNumber(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentifierContext extends ParserRuleContext {
	constructor(parser?: SCSSParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Ident(): TerminalNode {
		return this.getToken(SCSSParser.Ident, 0);
	}
	public VendorPrefix(): TerminalNode {
		return this.getToken(SCSSParser.VendorPrefix, 0);
	}
	public Minus(): TerminalNode {
		return this.getToken(SCSSParser.Minus, 0);
	}
	public From(): TerminalNode {
		return this.getToken(SCSSParser.From, 0);
	}
	public To(): TerminalNode {
		return this.getToken(SCSSParser.To, 0);
	}
    public get ruleIndex(): number {
    	return SCSSParser.RULE_identifier;
	}
	public enterRule(listener: SCSSParserListener): void {
	    if(listener.enterIdentifier) {
	 		listener.enterIdentifier(this);
		}
	}
	public exitRule(listener: SCSSParserListener): void {
	    if(listener.exitIdentifier) {
	 		listener.exitIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SCSSParserVisitor<Result>): Result {
		if (visitor.visitIdentifier) {
			return visitor.visitIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
