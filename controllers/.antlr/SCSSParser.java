// Generated from c:/programming/react/scss-to-css-converter/server/controllers/SCSSParser.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue"})
public class SCSSParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		AbsLength=1, FontRelative=2, ViewportRelative=3, Angle=4, Resolution=5, 
		Freq=6, Time=7, Percentage=8, Dot=9, Colon=10, Semi=11, Lparen=12, Rparen=13, 
		BlockStart=14, BlockEnd=15, Underscore=16, Minus=17, Not=18, Hash=19, 
		To=20, NumberReg=21, Char=22, Digit=23, WhiteSpace=24, SpaceChar=25, Background=26, 
		Border=27, List=28, Font=29, Margin=30, Outline=31, Padding=32, Text=33, 
		Page=34, Speak=35, Break=36, Max=37, Min=38, Pause=39, Height=40, Width=41, 
		Left=42, Top=43, Right=44, Bottom=45, Color=46, Style=47, Content=48, 
		Azimuth=49, Attachment=50, Image=51, Position=52, After=53, Before=54, 
		Overflow=55, Repeat=56, Collapse=57, Spacing=58, Caption=59, Counter=60, 
		Side=61, Increment=62, Clear=63, Clip=64, Reset=65, Cue=66, Cursor=67, 
		Direction=68, Display=69, Elevation=70, Empty=71, Cells=72, Float=73, 
		Family=74, Size=75, Variant=76, Inside=77, Weight=78, Letter=79, Line=80, 
		Type=81, Pitch=82, Orphans=83, Range=84, Play=85, During=86, Richness=87, 
		Header=88, Numeral=89, Punctuation=90, Quotes=91, Speech=92, Rate=93, 
		Stress=94, Table=95, Layout=96, Align=97, Decoration=98, Indent=99, Transform=100, 
		Unicode=101, Bidi=102, Vertical=103, Visibility=104, Voice=105, Volume=106, 
		White=107, Space=108, Widows=109, Word=110, Z=111, Index=112, Alignment=113, 
		Animation=114, Appearance=115, Backface=116, Baseline=117, Bookmark=118, 
		Box=119, Column=120, Columns=121, Crop=122, Dominant=123, Drop=124, Fit=125, 
		Grid=126, Hanging=127, Hyphenate=128, Hyphens=129, Icon=130, Inline=131, 
		Mark=132, Marks=133, Marquee=134, Move=135, Nav=136, Opacity=137, Perspective=138, 
		Phonemes=139, Rendering=140, Resize=141, Rest=142, Rotation=143, Ruby=144, 
		String=145, Target=146, Adjust=147, Delay=148, Duration=149, Name=150, 
		Origin=151, Shift=152, Label=153, Level=154, Radius=155, Flex=156, Lines=157, 
		Orient=158, Pack=159, Shadow=160, Sizing=161, Profile=162, Count=163, 
		Fill=164, Gap=165, Rule=166, Span=167, Offset=168, Stretch=169, Rows=170, 
		Character=171, Resource=172, Orientation=173, Stacking=174, Speed=175, 
		Down=176, Up=177, X=178, Y=179, Policy=180, Trim=181, Intent=182, Point=183, 
		Overhang=184, Set=185, New=186, Justify=187, Wrap=188, Property=189, Balance=190, 
		State=191, Function=192, Outset=193, Slice=194, Source=195, Group=196, 
		Value=197, Strategy=198, Last=199, Monochrome=200, Scan=201, Ratio=202, 
		Aspect=203, Iteration=204, Timing=205, Device=206, Skretch=207, Ordinal=208, 
		Initial=209, Transition=210, First=211, Selection=212, Placeholder=213, 
		Hover=214, Active=215, Focus=216, Visited=217, Child=218, Nth=219, Disabled=220, 
		Checked=221, Required=222, A=223, Abbr=224, Acronym=225, Address=226, 
		Applet=227, Area=228, B=229, Base=230, Basefont=231, Bdo=232, Big=233, 
		Blockquote=234, Body=235, Br=236, Button=237, Center=238, Cite=239, Code=240, 
		Col=241, Colgroup=242, Dd=243, Del=244, Dfn=245, Dir=246, Div=247, Dl=248, 
		Dt=249, Em=250, Fieldset=251, Form=252, Frame=253, Frameset=254, H1=255, 
		H2=256, H3=257, H4=258, H5=259, H6=260, Head=261, Hr=262, Html=263, I=264, 
		Iframe=265, Img=266, Input=267, Ins=268, Kbd=269, Legend=270, Li=271, 
		Map=272, Menu=273, Meta=274, Noframes=275, Noscript=276, Object=277, Ol=278, 
		Optgroup=279, Option=280, P=281, Param=282, Pre=283, Q=284, S=285, Samp=286, 
		Script=287, Select=288, Small=289, Strike=290, Strong=291, Sub=292, Sup=293, 
		Tbody=294, Td=295, Template=296, Textarea=297, Tfoot=298, Th=299, Thead=300, 
		Title=301, Tr=302, Tt=303, U=304, Ul=305, Var=306, Article=307, Aside=308, 
		Audio=309, Bdi=310, Canvas=311, Command=312, Datalist=313, Details=314, 
		Embed=315, Figcaption=316, Figure=317, Footer=318, Hgroup=319, Keygen=320, 
		Main=321, Meter=322, Output=323, Progress=324, Progress_bar_stripes=325, 
		Rp=326, Rt=327, Section=328, Summary=329, Svg=330, Track=331, Video=332, 
		Wbr=333;
	public static final int
		RULE_stylesheet = 0, RULE_block = 1, RULE_nestedBlock = 2, RULE_selector = 3, 
		RULE_pseudoClass = 4, RULE_pseudoElement = 5, RULE_doubleColon = 6, RULE_idSelector = 7, 
		RULE_classSelector = 8, RULE_tagSelector = 9, RULE_identifier = 10, RULE_declaration = 11, 
		RULE_propertyValue = 12, RULE_numValue = 13, RULE_fourNumValue = 14, RULE_threeNumValue = 15, 
		RULE_twoNumValue = 16, RULE_oneNumValue = 17, RULE_whiteSpaceWithSpaceChar = 18, 
		RULE_absLengthValue = 19, RULE_fontRelativeValue = 20, RULE_viewportRelativeValue = 21, 
		RULE_angleValue = 22, RULE_resolutionValue = 23, RULE_freqValue = 24, 
		RULE_timeValue = 25, RULE_percentageValue = 26, RULE_property = 27, RULE_backgroundOptions = 28, 
		RULE_alignmentOptions = 29, RULE_animationOptions = 30, RULE_bookmarkOptions = 31, 
		RULE_borderOptions = 32, RULE_borderBottomTopOptions = 33, RULE_borderRightLeftOptions = 34, 
		RULE_borderImageOptions = 35, RULE_boxOptions = 36, RULE_captionOptions = 37, 
		RULE_colorOptions = 38, RULE_columnOptions = 39, RULE_columnRuleOptions = 40, 
		RULE_counterOptions = 41, RULE_cueOptions = 42, RULE_fontOptions = 43, 
		RULE_floatOptions = 44, RULE_gridOptions = 45, RULE_hyphenateOptions = 46, 
		RULE_imageOptions = 47, RULE_listOptions = 48, RULE_marginOptions = 49, 
		RULE_markOptions = 50, RULE_marqueeOptions = 51, RULE_minMaxOptions = 52, 
		RULE_minMaxDeviceOptions = 53, RULE_navOptions = 54, RULE_deviceOptions = 55, 
		RULE_dropOptions = 56, RULE_dropOptionsBeforeAfter = 57, RULE_fitOptions = 58, 
		RULE_outlineOptions = 59, RULE_overflowOptions = 60, RULE_paddingOptions = 61, 
		RULE_pageOptions = 62, RULE_pageBreakOptions = 63, RULE_pauseOptions = 64, 
		RULE_restOptions = 65, RULE_rubyOptions = 66, RULE_speakOptions = 67, 
		RULE_targetOptions = 68, RULE_textOptions = 69, RULE_transformOptions = 70, 
		RULE_transitionOptions = 71, RULE_voiceOptions = 72, RULE_voicePitchOptions = 73, 
		RULE_wordOptions = 74;
	private static String[] makeRuleNames() {
		return new String[] {
			"stylesheet", "block", "nestedBlock", "selector", "pseudoClass", "pseudoElement", 
			"doubleColon", "idSelector", "classSelector", "tagSelector", "identifier", 
			"declaration", "propertyValue", "numValue", "fourNumValue", "threeNumValue", 
			"twoNumValue", "oneNumValue", "whiteSpaceWithSpaceChar", "absLengthValue", 
			"fontRelativeValue", "viewportRelativeValue", "angleValue", "resolutionValue", 
			"freqValue", "timeValue", "percentageValue", "property", "backgroundOptions", 
			"alignmentOptions", "animationOptions", "bookmarkOptions", "borderOptions", 
			"borderBottomTopOptions", "borderRightLeftOptions", "borderImageOptions", 
			"boxOptions", "captionOptions", "colorOptions", "columnOptions", "columnRuleOptions", 
			"counterOptions", "cueOptions", "fontOptions", "floatOptions", "gridOptions", 
			"hyphenateOptions", "imageOptions", "listOptions", "marginOptions", "markOptions", 
			"marqueeOptions", "minMaxOptions", "minMaxDeviceOptions", "navOptions", 
			"deviceOptions", "dropOptions", "dropOptionsBeforeAfter", "fitOptions", 
			"outlineOptions", "overflowOptions", "paddingOptions", "pageOptions", 
			"pageBreakOptions", "pauseOptions", "restOptions", "rubyOptions", "speakOptions", 
			"targetOptions", "textOptions", "transformOptions", "transitionOptions", 
			"voiceOptions", "voicePitchOptions", "wordOptions"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, "'%'", "'.'", "':'", 
			"';'", "'('", "')'", "'{'", "'}'", "'_'", "'-'", "'not'", "'#'", "'to'", 
			null, null, null, null, "' '", "'background'", "'border'", "'list'", 
			"'font'", "'margin'", "'outline'", "'padding'", "'text'", "'page'", "'speak'", 
			"'break'", "'max'", "'min'", "'pause'", "'height'", "'width'", "'left'", 
			"'top'", "'bottom'", "'right'", "'color'", "'style'", "'content'", "'azimuth'", 
			"'attachment'", "'image'", "'position'", "'after'", "'before'", "'overflow'", 
			"'repeat'", "'collapse'", "'spacing'", "'caption'", "'counter'", "'side'", 
			"'increment'", "'clear'", "'clip'", "'reset'", "'cue'", "'cursor'", "'direction'", 
			"'display'", "'elevation'", "'empty'", "'cells'", "'float'", "'family'", 
			"'size'", "'variant'", "'inside'", "'weight'", "'letter'", "'line'", 
			"'type'", "'pitch'", "'orphans'", "'range'", "'play'", "'during'", "'richness'", 
			"'header'", "'numeral'", "'punctuation'", "'quotes'", "'speech'", "'rate'", 
			"'stress'", "'table'", "'layout'", "'align'", "'decoration'", "'indent'", 
			"'transform'", "'unicode'", "'bidi'", "'vertical'", "'visibility'", "'voice'", 
			"'volume'", "'white'", "'space'", "'widows'", "'word'", "'z'", "'index'", 
			"'alignment'", "'animation'", "'appearance'", "'backface'", "'baseline'", 
			"'bookmark'", "'box'", "'column'", "'columns'", "'crop'", "'dominant'", 
			"'drop'", "'fit'", "'grid'", "'hanging'", "'hyphenate'", "'hyphens'", 
			"'icon'", "'inline'", "'mark'", "'marks'", "'marquee'", "'move'", "'nav'", 
			"'opacity'", "'perspective'", "'phonemes'", "'rendering'", "'resize'", 
			"'rest'", "'rotation'", "'ruby'", "'string'", "'target'", "'adjust'", 
			"'delay'", "'duration'", "'name'", "'origin'", "'shift'", "'label'", 
			"'level'", "'radius'", "'flex'", "'lines'", "'orient'", "'pack'", "'shadow'", 
			"'sizing'", "'profile'", "'count'", "'fill'", "'gap'", "'rule'", "'span'", 
			"'offset'", "'stretch'", "'rows'", "'character'", "'resource'", "'orientation'", 
			"'stacking'", "'speed'", "'down'", "'up'", "'x'", "'y'", "'policy'", 
			"'trim'", "'intent'", "'point'", "'overhang'", "'set'", "'new'", "'justify'", 
			"'wrap'", "'property'", "'balance'", "'state'", "'function'", "'outset'", 
			"'slice'", "'source'", "'group'", "'value'", "'strategy'", "'last'", 
			"'monochrome'", "'scan'", "'ratio'", "'aspect'", "'iteration'", "'timing'", 
			"'device'", "'skretch'", "'ordinal'", "'initial'", "'transition'", "'first'", 
			"'selection'", "'placeholder'", "'hover'", "'active'", "'focus'", "'visited'", 
			"'child'", "'nth'", "'disabled'", "'checked'", "'required'", "'a'", "'abbr'", 
			"'acronym'", "'address'", "'applet'", "'area'", "'b'", "'base'", "'basefont'", 
			"'bdo'", "'big'", "'blockquote'", "'body'", "'br'", "'button'", "'center'", 
			"'cite'", "'code'", "'col'", "'colgroup'", "'dd'", "'del'", "'dfn'", 
			"'dir'", "'div'", "'dl'", "'dt'", "'em'", "'fieldset'", "'form'", "'frame'", 
			"'frameset'", "'h1'", "'h2'", "'h3'", "'h4'", "'h5'", "'h6'", "'head'", 
			"'hr'", "'html'", "'i'", "'iframe'", "'img'", "'input'", "'ins'", "'kbd'", 
			"'legend'", "'li'", "'map'", "'menu'", "'meta'", "'noframes'", "'noscript'", 
			"'object'", "'ol'", "'optgroup'", "'option'", "'p'", "'param'", "'pre'", 
			"'q'", "'s'", "'samp'", "'script'", "'select'", "'small'", "'strike'", 
			"'strong'", "'sub'", "'sup'", "'tbody'", "'td'", "'template'", "'textarea'", 
			"'tfoot'", "'th'", "'thead'", "'title'", "'tr'", "'tt'", "'u'", "'ul'", 
			"'var'", "'article'", "'aside'", "'audio'", "'bdi'", "'canvas'", "'command'", 
			"'datalist'", "'details'", "'embed'", "'figcaption'", "'figure'", "'footer'", 
			"'hgroup'", "'keygen'", "'main'", "'meter'", "'output'", "'progress'", 
			"' progress-bar-stripes'", "'rp'", "'rt'", "'section'", "'summary'", 
			"'svg'", "'track'", "'video'", "'wbr'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "AbsLength", "FontRelative", "ViewportRelative", "Angle", "Resolution", 
			"Freq", "Time", "Percentage", "Dot", "Colon", "Semi", "Lparen", "Rparen", 
			"BlockStart", "BlockEnd", "Underscore", "Minus", "Not", "Hash", "To", 
			"NumberReg", "Char", "Digit", "WhiteSpace", "SpaceChar", "Background", 
			"Border", "List", "Font", "Margin", "Outline", "Padding", "Text", "Page", 
			"Speak", "Break", "Max", "Min", "Pause", "Height", "Width", "Left", "Top", 
			"Right", "Bottom", "Color", "Style", "Content", "Azimuth", "Attachment", 
			"Image", "Position", "After", "Before", "Overflow", "Repeat", "Collapse", 
			"Spacing", "Caption", "Counter", "Side", "Increment", "Clear", "Clip", 
			"Reset", "Cue", "Cursor", "Direction", "Display", "Elevation", "Empty", 
			"Cells", "Float", "Family", "Size", "Variant", "Inside", "Weight", "Letter", 
			"Line", "Type", "Pitch", "Orphans", "Range", "Play", "During", "Richness", 
			"Header", "Numeral", "Punctuation", "Quotes", "Speech", "Rate", "Stress", 
			"Table", "Layout", "Align", "Decoration", "Indent", "Transform", "Unicode", 
			"Bidi", "Vertical", "Visibility", "Voice", "Volume", "White", "Space", 
			"Widows", "Word", "Z", "Index", "Alignment", "Animation", "Appearance", 
			"Backface", "Baseline", "Bookmark", "Box", "Column", "Columns", "Crop", 
			"Dominant", "Drop", "Fit", "Grid", "Hanging", "Hyphenate", "Hyphens", 
			"Icon", "Inline", "Mark", "Marks", "Marquee", "Move", "Nav", "Opacity", 
			"Perspective", "Phonemes", "Rendering", "Resize", "Rest", "Rotation", 
			"Ruby", "String", "Target", "Adjust", "Delay", "Duration", "Name", "Origin", 
			"Shift", "Label", "Level", "Radius", "Flex", "Lines", "Orient", "Pack", 
			"Shadow", "Sizing", "Profile", "Count", "Fill", "Gap", "Rule", "Span", 
			"Offset", "Stretch", "Rows", "Character", "Resource", "Orientation", 
			"Stacking", "Speed", "Down", "Up", "X", "Y", "Policy", "Trim", "Intent", 
			"Point", "Overhang", "Set", "New", "Justify", "Wrap", "Property", "Balance", 
			"State", "Function", "Outset", "Slice", "Source", "Group", "Value", "Strategy", 
			"Last", "Monochrome", "Scan", "Ratio", "Aspect", "Iteration", "Timing", 
			"Device", "Skretch", "Ordinal", "Initial", "Transition", "First", "Selection", 
			"Placeholder", "Hover", "Active", "Focus", "Visited", "Child", "Nth", 
			"Disabled", "Checked", "Required", "A", "Abbr", "Acronym", "Address", 
			"Applet", "Area", "B", "Base", "Basefont", "Bdo", "Big", "Blockquote", 
			"Body", "Br", "Button", "Center", "Cite", "Code", "Col", "Colgroup", 
			"Dd", "Del", "Dfn", "Dir", "Div", "Dl", "Dt", "Em", "Fieldset", "Form", 
			"Frame", "Frameset", "H1", "H2", "H3", "H4", "H5", "H6", "Head", "Hr", 
			"Html", "I", "Iframe", "Img", "Input", "Ins", "Kbd", "Legend", "Li", 
			"Map", "Menu", "Meta", "Noframes", "Noscript", "Object", "Ol", "Optgroup", 
			"Option", "P", "Param", "Pre", "Q", "S", "Samp", "Script", "Select", 
			"Small", "Strike", "Strong", "Sub", "Sup", "Tbody", "Td", "Template", 
			"Textarea", "Tfoot", "Th", "Thead", "Title", "Tr", "Tt", "U", "Ul", "Var", 
			"Article", "Aside", "Audio", "Bdi", "Canvas", "Command", "Datalist", 
			"Details", "Embed", "Figcaption", "Figure", "Footer", "Hgroup", "Keygen", 
			"Main", "Meter", "Output", "Progress", "Progress_bar_stripes", "Rp", 
			"Rt", "Section", "Summary", "Svg", "Track", "Video", "Wbr"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "SCSSParser.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public SCSSParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@SuppressWarnings("CheckReturnValue")
	public static class StylesheetContext extends ParserRuleContext {
		public TerminalNode EOF() { return getToken(SCSSParser.EOF, 0); }
		public List<BlockContext> block() {
			return getRuleContexts(BlockContext.class);
		}
		public BlockContext block(int i) {
			return getRuleContext(BlockContext.class,i);
		}
		public StylesheetContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_stylesheet; }
	}

	public final StylesheetContext stylesheet() throws RecognitionException {
		StylesheetContext _localctx = new StylesheetContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_stylesheet);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(153);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 576601490345951872L) != 0) || ((((_la - 88)) & ~0x3f) == 0 && ((1L << (_la - 88)) & 72356661200683137L) != 0) || ((((_la - 153)) & ~0x3f) == 0 && ((1L << (_la - 153)) & 4398046527489L) != 0) || ((((_la - 223)) & ~0x3f) == 0 && ((1L << (_la - 223)) & -1L) != 0) || ((((_la - 287)) & ~0x3f) == 0 && ((1L << (_la - 287)) & 140737488355327L) != 0)) {
				{
				{
				setState(150);
				block();
				}
				}
				setState(155);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(156);
			match(EOF);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class BlockContext extends ParserRuleContext {
		public SelectorContext selector() {
			return getRuleContext(SelectorContext.class,0);
		}
		public TerminalNode BlockStart() { return getToken(SCSSParser.BlockStart, 0); }
		public TerminalNode BlockEnd() { return getToken(SCSSParser.BlockEnd, 0); }
		public List<TerminalNode> WhiteSpace() { return getTokens(SCSSParser.WhiteSpace); }
		public TerminalNode WhiteSpace(int i) {
			return getToken(SCSSParser.WhiteSpace, i);
		}
		public List<DeclarationContext> declaration() {
			return getRuleContexts(DeclarationContext.class);
		}
		public DeclarationContext declaration(int i) {
			return getRuleContext(DeclarationContext.class,i);
		}
		public List<NestedBlockContext> nestedBlock() {
			return getRuleContexts(NestedBlockContext.class);
		}
		public NestedBlockContext nestedBlock(int i) {
			return getRuleContext(NestedBlockContext.class,i);
		}
		public BlockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_block; }
	}

	public final BlockContext block() throws RecognitionException {
		BlockContext _localctx = new BlockContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_block);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(161);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==WhiteSpace) {
				{
				{
				setState(158);
				match(WhiteSpace);
				}
				}
				setState(163);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(164);
			selector();
			setState(168);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==WhiteSpace) {
				{
				{
				setState(165);
				match(WhiteSpace);
				}
				}
				setState(170);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(171);
			match(BlockStart);
			setState(188);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,8,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					setState(186);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,7,_ctx) ) {
					case 1:
						{
						{
						setState(173);
						_errHandler.sync(this);
						_la = _input.LA(1);
						if (_la==WhiteSpace) {
							{
							setState(172);
							match(WhiteSpace);
							}
						}

						setState(175);
						declaration();
						setState(177);
						_errHandler.sync(this);
						switch ( getInterpreter().adaptivePredict(_input,4,_ctx) ) {
						case 1:
							{
							setState(176);
							match(WhiteSpace);
							}
							break;
						}
						}
						}
						break;
					case 2:
						{
						{
						setState(180);
						_errHandler.sync(this);
						switch ( getInterpreter().adaptivePredict(_input,5,_ctx) ) {
						case 1:
							{
							setState(179);
							match(WhiteSpace);
							}
							break;
						}
						setState(182);
						nestedBlock();
						setState(184);
						_errHandler.sync(this);
						switch ( getInterpreter().adaptivePredict(_input,6,_ctx) ) {
						case 1:
							{
							setState(183);
							match(WhiteSpace);
							}
							break;
						}
						}
						}
						break;
					}
					} 
				}
				setState(190);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,8,_ctx);
			}
			setState(194);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==WhiteSpace) {
				{
				{
				setState(191);
				match(WhiteSpace);
				}
				}
				setState(196);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(197);
			match(BlockEnd);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class NestedBlockContext extends ParserRuleContext {
		public SelectorContext selector() {
			return getRuleContext(SelectorContext.class,0);
		}
		public TerminalNode BlockStart() { return getToken(SCSSParser.BlockStart, 0); }
		public TerminalNode BlockEnd() { return getToken(SCSSParser.BlockEnd, 0); }
		public List<TerminalNode> WhiteSpace() { return getTokens(SCSSParser.WhiteSpace); }
		public TerminalNode WhiteSpace(int i) {
			return getToken(SCSSParser.WhiteSpace, i);
		}
		public List<DeclarationContext> declaration() {
			return getRuleContexts(DeclarationContext.class);
		}
		public DeclarationContext declaration(int i) {
			return getRuleContext(DeclarationContext.class,i);
		}
		public List<NestedBlockContext> nestedBlock() {
			return getRuleContexts(NestedBlockContext.class);
		}
		public NestedBlockContext nestedBlock(int i) {
			return getRuleContext(NestedBlockContext.class,i);
		}
		public NestedBlockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_nestedBlock; }
	}

	public final NestedBlockContext nestedBlock() throws RecognitionException {
		NestedBlockContext _localctx = new NestedBlockContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_nestedBlock);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(202);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==WhiteSpace) {
				{
				{
				setState(199);
				match(WhiteSpace);
				}
				}
				setState(204);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(205);
			selector();
			setState(209);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==WhiteSpace) {
				{
				{
				setState(206);
				match(WhiteSpace);
				}
				}
				setState(211);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(212);
			match(BlockStart);
			setState(229);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,17,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					setState(227);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,16,_ctx) ) {
					case 1:
						{
						{
						setState(214);
						_errHandler.sync(this);
						_la = _input.LA(1);
						if (_la==WhiteSpace) {
							{
							setState(213);
							match(WhiteSpace);
							}
						}

						setState(216);
						declaration();
						setState(218);
						_errHandler.sync(this);
						switch ( getInterpreter().adaptivePredict(_input,13,_ctx) ) {
						case 1:
							{
							setState(217);
							match(WhiteSpace);
							}
							break;
						}
						}
						}
						break;
					case 2:
						{
						{
						setState(221);
						_errHandler.sync(this);
						switch ( getInterpreter().adaptivePredict(_input,14,_ctx) ) {
						case 1:
							{
							setState(220);
							match(WhiteSpace);
							}
							break;
						}
						setState(223);
						nestedBlock();
						setState(225);
						_errHandler.sync(this);
						switch ( getInterpreter().adaptivePredict(_input,15,_ctx) ) {
						case 1:
							{
							setState(224);
							match(WhiteSpace);
							}
							break;
						}
						}
						}
						break;
					}
					} 
				}
				setState(231);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,17,_ctx);
			}
			setState(235);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==WhiteSpace) {
				{
				{
				setState(232);
				match(WhiteSpace);
				}
				}
				setState(237);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(238);
			match(BlockEnd);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class SelectorContext extends ParserRuleContext {
		public List<IdSelectorContext> idSelector() {
			return getRuleContexts(IdSelectorContext.class);
		}
		public IdSelectorContext idSelector(int i) {
			return getRuleContext(IdSelectorContext.class,i);
		}
		public List<ClassSelectorContext> classSelector() {
			return getRuleContexts(ClassSelectorContext.class);
		}
		public ClassSelectorContext classSelector(int i) {
			return getRuleContext(ClassSelectorContext.class,i);
		}
		public List<TagSelectorContext> tagSelector() {
			return getRuleContexts(TagSelectorContext.class);
		}
		public TagSelectorContext tagSelector(int i) {
			return getRuleContext(TagSelectorContext.class,i);
		}
		public List<PseudoClassContext> pseudoClass() {
			return getRuleContexts(PseudoClassContext.class);
		}
		public PseudoClassContext pseudoClass(int i) {
			return getRuleContext(PseudoClassContext.class,i);
		}
		public List<PseudoElementContext> pseudoElement() {
			return getRuleContexts(PseudoElementContext.class);
		}
		public PseudoElementContext pseudoElement(int i) {
			return getRuleContext(PseudoElementContext.class,i);
		}
		public SelectorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_selector; }
	}

	public final SelectorContext selector() throws RecognitionException {
		SelectorContext _localctx = new SelectorContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_selector);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(243); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				setState(243);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case Hash:
					{
					setState(240);
					idSelector();
					}
					break;
				case Dot:
					{
					setState(241);
					classSelector();
					}
					break;
				case Time:
				case Font:
				case Style:
				case Caption:
				case Header:
				case Table:
				case Mark:
				case Nav:
				case Ruby:
				case Label:
				case Span:
				case Source:
				case A:
				case Abbr:
				case Acronym:
				case Address:
				case Applet:
				case Area:
				case B:
				case Base:
				case Basefont:
				case Bdo:
				case Big:
				case Blockquote:
				case Body:
				case Br:
				case Button:
				case Center:
				case Cite:
				case Code:
				case Col:
				case Colgroup:
				case Dd:
				case Del:
				case Dfn:
				case Dir:
				case Div:
				case Dl:
				case Dt:
				case Em:
				case Fieldset:
				case Form:
				case Frame:
				case Frameset:
				case H1:
				case H2:
				case H3:
				case H4:
				case H5:
				case H6:
				case Head:
				case Hr:
				case Html:
				case I:
				case Iframe:
				case Img:
				case Input:
				case Ins:
				case Kbd:
				case Legend:
				case Li:
				case Map:
				case Menu:
				case Meta:
				case Noframes:
				case Noscript:
				case Object:
				case Ol:
				case Optgroup:
				case Option:
				case P:
				case Param:
				case Pre:
				case Q:
				case S:
				case Samp:
				case Script:
				case Select:
				case Small:
				case Strike:
				case Strong:
				case Sub:
				case Sup:
				case Tbody:
				case Td:
				case Template:
				case Textarea:
				case Tfoot:
				case Th:
				case Thead:
				case Title:
				case Tr:
				case Tt:
				case U:
				case Ul:
				case Var:
				case Article:
				case Aside:
				case Audio:
				case Bdi:
				case Canvas:
				case Command:
				case Datalist:
				case Details:
				case Embed:
				case Figcaption:
				case Figure:
				case Footer:
				case Hgroup:
				case Keygen:
				case Main:
				case Meter:
				case Output:
				case Progress:
				case Progress_bar_stripes:
				case Rp:
				case Rt:
				case Section:
				case Summary:
				case Svg:
				case Track:
				case Video:
				case Wbr:
					{
					setState(242);
					tagSelector();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(245); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( (((_la) & ~0x3f) == 0 && ((1L << _la) & 576601490329174656L) != 0) || ((((_la - 88)) & ~0x3f) == 0 && ((1L << (_la - 88)) & 72356661200683137L) != 0) || ((((_la - 153)) & ~0x3f) == 0 && ((1L << (_la - 153)) & 4398046527489L) != 0) || ((((_la - 223)) & ~0x3f) == 0 && ((1L << (_la - 223)) & -1L) != 0) || ((((_la - 287)) & ~0x3f) == 0 && ((1L << (_la - 287)) & 140737488355327L) != 0) );
			setState(251);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==Colon) {
				{
				setState(249);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,21,_ctx) ) {
				case 1:
					{
					setState(247);
					pseudoClass();
					}
					break;
				case 2:
					{
					setState(248);
					pseudoElement();
					}
					break;
				}
				}
				setState(253);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class PseudoClassContext extends ParserRuleContext {
		public TerminalNode Colon() { return getToken(SCSSParser.Colon, 0); }
		public TerminalNode Hover() { return getToken(SCSSParser.Hover, 0); }
		public TerminalNode Active() { return getToken(SCSSParser.Active, 0); }
		public TerminalNode Focus() { return getToken(SCSSParser.Focus, 0); }
		public TerminalNode Visited() { return getToken(SCSSParser.Visited, 0); }
		public TerminalNode First() { return getToken(SCSSParser.First, 0); }
		public TerminalNode Minus() { return getToken(SCSSParser.Minus, 0); }
		public TerminalNode Child() { return getToken(SCSSParser.Child, 0); }
		public TerminalNode Last() { return getToken(SCSSParser.Last, 0); }
		public TerminalNode Nth() { return getToken(SCSSParser.Nth, 0); }
		public TerminalNode Lparen() { return getToken(SCSSParser.Lparen, 0); }
		public TerminalNode Digit() { return getToken(SCSSParser.Digit, 0); }
		public TerminalNode Rparen() { return getToken(SCSSParser.Rparen, 0); }
		public TerminalNode Not() { return getToken(SCSSParser.Not, 0); }
		public TerminalNode Disabled() { return getToken(SCSSParser.Disabled, 0); }
		public TerminalNode Checked() { return getToken(SCSSParser.Checked, 0); }
		public TerminalNode Required() { return getToken(SCSSParser.Required, 0); }
		public TerminalNode Empty() { return getToken(SCSSParser.Empty, 0); }
		public PseudoClassContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_pseudoClass; }
	}

	public final PseudoClassContext pseudoClass() throws RecognitionException {
		PseudoClassContext _localctx = new PseudoClassContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_pseudoClass);
		try {
			setState(289);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,23,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(254);
				match(Colon);
				setState(255);
				match(Hover);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(256);
				match(Colon);
				setState(257);
				match(Active);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(258);
				match(Colon);
				setState(259);
				match(Focus);
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(260);
				match(Colon);
				setState(261);
				match(Visited);
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(262);
				match(Colon);
				setState(263);
				match(First);
				setState(264);
				match(Minus);
				setState(265);
				match(Child);
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(266);
				match(Colon);
				setState(267);
				match(Last);
				setState(268);
				match(Minus);
				setState(269);
				match(Child);
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(270);
				match(Colon);
				setState(271);
				match(Nth);
				setState(272);
				match(Minus);
				setState(273);
				match(Child);
				setState(274);
				match(Lparen);
				setState(275);
				match(Digit);
				setState(276);
				match(Rparen);
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(277);
				match(Colon);
				setState(278);
				match(Not);
				setState(279);
				match(Lparen);
				setState(280);
				match(Rparen);
				}
				break;
			case 9:
				enterOuterAlt(_localctx, 9);
				{
				setState(281);
				match(Colon);
				setState(282);
				match(Disabled);
				}
				break;
			case 10:
				enterOuterAlt(_localctx, 10);
				{
				setState(283);
				match(Colon);
				setState(284);
				match(Checked);
				}
				break;
			case 11:
				enterOuterAlt(_localctx, 11);
				{
				setState(285);
				match(Colon);
				setState(286);
				match(Required);
				}
				break;
			case 12:
				enterOuterAlt(_localctx, 12);
				{
				setState(287);
				match(Colon);
				setState(288);
				match(Empty);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class PseudoElementContext extends ParserRuleContext {
		public DoubleColonContext doubleColon() {
			return getRuleContext(DoubleColonContext.class,0);
		}
		public TerminalNode After() { return getToken(SCSSParser.After, 0); }
		public TerminalNode Before() { return getToken(SCSSParser.Before, 0); }
		public TerminalNode First() { return getToken(SCSSParser.First, 0); }
		public TerminalNode Minus() { return getToken(SCSSParser.Minus, 0); }
		public TerminalNode Letter() { return getToken(SCSSParser.Letter, 0); }
		public TerminalNode Line() { return getToken(SCSSParser.Line, 0); }
		public TerminalNode Selection() { return getToken(SCSSParser.Selection, 0); }
		public TerminalNode Placeholder() { return getToken(SCSSParser.Placeholder, 0); }
		public PseudoElementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_pseudoElement; }
	}

	public final PseudoElementContext pseudoElement() throws RecognitionException {
		PseudoElementContext _localctx = new PseudoElementContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_pseudoElement);
		try {
			setState(313);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,24,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(291);
				doubleColon();
				setState(292);
				match(After);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(294);
				doubleColon();
				setState(295);
				match(Before);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(297);
				doubleColon();
				setState(298);
				match(First);
				setState(299);
				match(Minus);
				setState(300);
				match(Letter);
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(302);
				doubleColon();
				setState(303);
				match(First);
				setState(304);
				match(Minus);
				setState(305);
				match(Line);
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(307);
				doubleColon();
				setState(308);
				match(Selection);
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(310);
				doubleColon();
				setState(311);
				match(Placeholder);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class DoubleColonContext extends ParserRuleContext {
		public TerminalNode Colon() { return getToken(SCSSParser.Colon, 0); }
		public DoubleColonContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_doubleColon; }
	}

	public final DoubleColonContext doubleColon() throws RecognitionException {
		DoubleColonContext _localctx = new DoubleColonContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_doubleColon);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(315);
			match(Colon);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class IdSelectorContext extends ParserRuleContext {
		public TerminalNode Hash() { return getToken(SCSSParser.Hash, 0); }
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public IdSelectorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_idSelector; }
	}

	public final IdSelectorContext idSelector() throws RecognitionException {
		IdSelectorContext _localctx = new IdSelectorContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_idSelector);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(317);
			match(Hash);
			setState(318);
			identifier();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ClassSelectorContext extends ParserRuleContext {
		public TerminalNode Dot() { return getToken(SCSSParser.Dot, 0); }
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public ClassSelectorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_classSelector; }
	}

	public final ClassSelectorContext classSelector() throws RecognitionException {
		ClassSelectorContext _localctx = new ClassSelectorContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_classSelector);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(320);
			match(Dot);
			setState(321);
			identifier();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class TagSelectorContext extends ParserRuleContext {
		public TerminalNode A() { return getToken(SCSSParser.A, 0); }
		public TerminalNode Abbr() { return getToken(SCSSParser.Abbr, 0); }
		public TerminalNode Acronym() { return getToken(SCSSParser.Acronym, 0); }
		public TerminalNode Address() { return getToken(SCSSParser.Address, 0); }
		public TerminalNode Applet() { return getToken(SCSSParser.Applet, 0); }
		public TerminalNode Area() { return getToken(SCSSParser.Area, 0); }
		public TerminalNode B() { return getToken(SCSSParser.B, 0); }
		public TerminalNode Base() { return getToken(SCSSParser.Base, 0); }
		public TerminalNode Basefont() { return getToken(SCSSParser.Basefont, 0); }
		public TerminalNode Bdo() { return getToken(SCSSParser.Bdo, 0); }
		public TerminalNode Big() { return getToken(SCSSParser.Big, 0); }
		public TerminalNode Blockquote() { return getToken(SCSSParser.Blockquote, 0); }
		public TerminalNode Body() { return getToken(SCSSParser.Body, 0); }
		public TerminalNode Br() { return getToken(SCSSParser.Br, 0); }
		public TerminalNode Button() { return getToken(SCSSParser.Button, 0); }
		public TerminalNode Caption() { return getToken(SCSSParser.Caption, 0); }
		public TerminalNode Center() { return getToken(SCSSParser.Center, 0); }
		public TerminalNode Cite() { return getToken(SCSSParser.Cite, 0); }
		public TerminalNode Code() { return getToken(SCSSParser.Code, 0); }
		public TerminalNode Col() { return getToken(SCSSParser.Col, 0); }
		public TerminalNode Colgroup() { return getToken(SCSSParser.Colgroup, 0); }
		public TerminalNode Dd() { return getToken(SCSSParser.Dd, 0); }
		public TerminalNode Del() { return getToken(SCSSParser.Del, 0); }
		public TerminalNode Dfn() { return getToken(SCSSParser.Dfn, 0); }
		public TerminalNode Dir() { return getToken(SCSSParser.Dir, 0); }
		public TerminalNode Div() { return getToken(SCSSParser.Div, 0); }
		public TerminalNode Dl() { return getToken(SCSSParser.Dl, 0); }
		public TerminalNode Dt() { return getToken(SCSSParser.Dt, 0); }
		public TerminalNode Em() { return getToken(SCSSParser.Em, 0); }
		public TerminalNode Fieldset() { return getToken(SCSSParser.Fieldset, 0); }
		public TerminalNode Font() { return getToken(SCSSParser.Font, 0); }
		public TerminalNode Form() { return getToken(SCSSParser.Form, 0); }
		public TerminalNode Frame() { return getToken(SCSSParser.Frame, 0); }
		public TerminalNode Frameset() { return getToken(SCSSParser.Frameset, 0); }
		public TerminalNode H1() { return getToken(SCSSParser.H1, 0); }
		public TerminalNode H2() { return getToken(SCSSParser.H2, 0); }
		public TerminalNode H3() { return getToken(SCSSParser.H3, 0); }
		public TerminalNode H4() { return getToken(SCSSParser.H4, 0); }
		public TerminalNode H5() { return getToken(SCSSParser.H5, 0); }
		public TerminalNode H6() { return getToken(SCSSParser.H6, 0); }
		public TerminalNode Head() { return getToken(SCSSParser.Head, 0); }
		public TerminalNode Hr() { return getToken(SCSSParser.Hr, 0); }
		public TerminalNode Html() { return getToken(SCSSParser.Html, 0); }
		public TerminalNode I() { return getToken(SCSSParser.I, 0); }
		public TerminalNode Iframe() { return getToken(SCSSParser.Iframe, 0); }
		public TerminalNode Img() { return getToken(SCSSParser.Img, 0); }
		public TerminalNode Input() { return getToken(SCSSParser.Input, 0); }
		public TerminalNode Ins() { return getToken(SCSSParser.Ins, 0); }
		public TerminalNode Kbd() { return getToken(SCSSParser.Kbd, 0); }
		public TerminalNode Label() { return getToken(SCSSParser.Label, 0); }
		public TerminalNode Legend() { return getToken(SCSSParser.Legend, 0); }
		public TerminalNode Li() { return getToken(SCSSParser.Li, 0); }
		public TerminalNode Map() { return getToken(SCSSParser.Map, 0); }
		public TerminalNode Mark() { return getToken(SCSSParser.Mark, 0); }
		public TerminalNode Menu() { return getToken(SCSSParser.Menu, 0); }
		public TerminalNode Meta() { return getToken(SCSSParser.Meta, 0); }
		public TerminalNode Noframes() { return getToken(SCSSParser.Noframes, 0); }
		public TerminalNode Noscript() { return getToken(SCSSParser.Noscript, 0); }
		public TerminalNode Object() { return getToken(SCSSParser.Object, 0); }
		public TerminalNode Ol() { return getToken(SCSSParser.Ol, 0); }
		public TerminalNode Optgroup() { return getToken(SCSSParser.Optgroup, 0); }
		public TerminalNode Option() { return getToken(SCSSParser.Option, 0); }
		public TerminalNode P() { return getToken(SCSSParser.P, 0); }
		public TerminalNode Param() { return getToken(SCSSParser.Param, 0); }
		public TerminalNode Pre() { return getToken(SCSSParser.Pre, 0); }
		public TerminalNode Q() { return getToken(SCSSParser.Q, 0); }
		public TerminalNode S() { return getToken(SCSSParser.S, 0); }
		public TerminalNode Samp() { return getToken(SCSSParser.Samp, 0); }
		public TerminalNode Script() { return getToken(SCSSParser.Script, 0); }
		public TerminalNode Select() { return getToken(SCSSParser.Select, 0); }
		public TerminalNode Small() { return getToken(SCSSParser.Small, 0); }
		public TerminalNode Span() { return getToken(SCSSParser.Span, 0); }
		public TerminalNode Strike() { return getToken(SCSSParser.Strike, 0); }
		public TerminalNode Strong() { return getToken(SCSSParser.Strong, 0); }
		public TerminalNode Style() { return getToken(SCSSParser.Style, 0); }
		public TerminalNode Sub() { return getToken(SCSSParser.Sub, 0); }
		public TerminalNode Sup() { return getToken(SCSSParser.Sup, 0); }
		public TerminalNode Table() { return getToken(SCSSParser.Table, 0); }
		public TerminalNode Tbody() { return getToken(SCSSParser.Tbody, 0); }
		public TerminalNode Td() { return getToken(SCSSParser.Td, 0); }
		public TerminalNode Template() { return getToken(SCSSParser.Template, 0); }
		public TerminalNode Textarea() { return getToken(SCSSParser.Textarea, 0); }
		public TerminalNode Tfoot() { return getToken(SCSSParser.Tfoot, 0); }
		public TerminalNode Th() { return getToken(SCSSParser.Th, 0); }
		public TerminalNode Thead() { return getToken(SCSSParser.Thead, 0); }
		public TerminalNode Title() { return getToken(SCSSParser.Title, 0); }
		public TerminalNode Tr() { return getToken(SCSSParser.Tr, 0); }
		public TerminalNode Tt() { return getToken(SCSSParser.Tt, 0); }
		public TerminalNode U() { return getToken(SCSSParser.U, 0); }
		public TerminalNode Ul() { return getToken(SCSSParser.Ul, 0); }
		public TerminalNode Var() { return getToken(SCSSParser.Var, 0); }
		public TerminalNode Article() { return getToken(SCSSParser.Article, 0); }
		public TerminalNode Aside() { return getToken(SCSSParser.Aside, 0); }
		public TerminalNode Audio() { return getToken(SCSSParser.Audio, 0); }
		public TerminalNode Bdi() { return getToken(SCSSParser.Bdi, 0); }
		public TerminalNode Canvas() { return getToken(SCSSParser.Canvas, 0); }
		public TerminalNode Command() { return getToken(SCSSParser.Command, 0); }
		public TerminalNode Datalist() { return getToken(SCSSParser.Datalist, 0); }
		public TerminalNode Details() { return getToken(SCSSParser.Details, 0); }
		public TerminalNode Embed() { return getToken(SCSSParser.Embed, 0); }
		public TerminalNode Figcaption() { return getToken(SCSSParser.Figcaption, 0); }
		public TerminalNode Figure() { return getToken(SCSSParser.Figure, 0); }
		public TerminalNode Footer() { return getToken(SCSSParser.Footer, 0); }
		public TerminalNode Header() { return getToken(SCSSParser.Header, 0); }
		public TerminalNode Hgroup() { return getToken(SCSSParser.Hgroup, 0); }
		public TerminalNode Keygen() { return getToken(SCSSParser.Keygen, 0); }
		public TerminalNode Main() { return getToken(SCSSParser.Main, 0); }
		public TerminalNode Meter() { return getToken(SCSSParser.Meter, 0); }
		public TerminalNode Nav() { return getToken(SCSSParser.Nav, 0); }
		public TerminalNode Output() { return getToken(SCSSParser.Output, 0); }
		public TerminalNode Progress() { return getToken(SCSSParser.Progress, 0); }
		public TerminalNode Progress_bar_stripes() { return getToken(SCSSParser.Progress_bar_stripes, 0); }
		public TerminalNode Rp() { return getToken(SCSSParser.Rp, 0); }
		public TerminalNode Rt() { return getToken(SCSSParser.Rt, 0); }
		public TerminalNode Ruby() { return getToken(SCSSParser.Ruby, 0); }
		public TerminalNode Section() { return getToken(SCSSParser.Section, 0); }
		public TerminalNode Source() { return getToken(SCSSParser.Source, 0); }
		public TerminalNode Summary() { return getToken(SCSSParser.Summary, 0); }
		public TerminalNode Svg() { return getToken(SCSSParser.Svg, 0); }
		public TerminalNode Time() { return getToken(SCSSParser.Time, 0); }
		public TerminalNode Track() { return getToken(SCSSParser.Track, 0); }
		public TerminalNode Video() { return getToken(SCSSParser.Video, 0); }
		public TerminalNode Wbr() { return getToken(SCSSParser.Wbr, 0); }
		public TagSelectorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_tagSelector; }
	}

	public final TagSelectorContext tagSelector() throws RecognitionException {
		TagSelectorContext _localctx = new TagSelectorContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_tagSelector);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(323);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 576601490328649856L) != 0) || ((((_la - 88)) & ~0x3f) == 0 && ((1L << (_la - 88)) & 72356661200683137L) != 0) || ((((_la - 153)) & ~0x3f) == 0 && ((1L << (_la - 153)) & 4398046527489L) != 0) || ((((_la - 223)) & ~0x3f) == 0 && ((1L << (_la - 223)) & -1L) != 0) || ((((_la - 287)) & ~0x3f) == 0 && ((1L << (_la - 287)) & 140737488355327L) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class IdentifierContext extends ParserRuleContext {
		public List<TerminalNode> Char() { return getTokens(SCSSParser.Char); }
		public TerminalNode Char(int i) {
			return getToken(SCSSParser.Char, i);
		}
		public List<TerminalNode> Digit() { return getTokens(SCSSParser.Digit); }
		public TerminalNode Digit(int i) {
			return getToken(SCSSParser.Digit, i);
		}
		public List<TerminalNode> Minus() { return getTokens(SCSSParser.Minus); }
		public TerminalNode Minus(int i) {
			return getToken(SCSSParser.Minus, i);
		}
		public List<TerminalNode> Underscore() { return getTokens(SCSSParser.Underscore); }
		public TerminalNode Underscore(int i) {
			return getToken(SCSSParser.Underscore, i);
		}
		public IdentifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_identifier; }
	}

	public final IdentifierContext identifier() throws RecognitionException {
		IdentifierContext _localctx = new IdentifierContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_identifier);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(326); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(325);
				_la = _input.LA(1);
				if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 12779520L) != 0)) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				}
				setState(328); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( (((_la) & ~0x3f) == 0 && ((1L << _la) & 12779520L) != 0) );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class DeclarationContext extends ParserRuleContext {
		public PropertyContext property() {
			return getRuleContext(PropertyContext.class,0);
		}
		public TerminalNode Colon() { return getToken(SCSSParser.Colon, 0); }
		public PropertyValueContext propertyValue() {
			return getRuleContext(PropertyValueContext.class,0);
		}
		public TerminalNode Semi() { return getToken(SCSSParser.Semi, 0); }
		public List<TerminalNode> WhiteSpace() { return getTokens(SCSSParser.WhiteSpace); }
		public TerminalNode WhiteSpace(int i) {
			return getToken(SCSSParser.WhiteSpace, i);
		}
		public DeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_declaration; }
	}

	public final DeclarationContext declaration() throws RecognitionException {
		DeclarationContext _localctx = new DeclarationContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_declaration);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(330);
			property();
			setState(334);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==WhiteSpace) {
				{
				{
				setState(331);
				match(WhiteSpace);
				}
				}
				setState(336);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(337);
			match(Colon);
			setState(341);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==WhiteSpace) {
				{
				{
				setState(338);
				match(WhiteSpace);
				}
				}
				setState(343);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(344);
			propertyValue();
			setState(348);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==WhiteSpace) {
				{
				{
				setState(345);
				match(WhiteSpace);
				}
				}
				setState(350);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(351);
			match(Semi);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class PropertyValueContext extends ParserRuleContext {
		public NumValueContext numValue() {
			return getRuleContext(NumValueContext.class,0);
		}
		public PropertyValueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_propertyValue; }
	}

	public final PropertyValueContext propertyValue() throws RecognitionException {
		PropertyValueContext _localctx = new PropertyValueContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_propertyValue);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(353);
			numValue();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class NumValueContext extends ParserRuleContext {
		public FourNumValueContext fourNumValue() {
			return getRuleContext(FourNumValueContext.class,0);
		}
		public ThreeNumValueContext threeNumValue() {
			return getRuleContext(ThreeNumValueContext.class,0);
		}
		public TwoNumValueContext twoNumValue() {
			return getRuleContext(TwoNumValueContext.class,0);
		}
		public OneNumValueContext oneNumValue() {
			return getRuleContext(OneNumValueContext.class,0);
		}
		public NumValueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_numValue; }
	}

	public final NumValueContext numValue() throws RecognitionException {
		NumValueContext _localctx = new NumValueContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_numValue);
		try {
			setState(359);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,29,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(355);
				fourNumValue();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(356);
				threeNumValue();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(357);
				twoNumValue();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(358);
				oneNumValue();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class FourNumValueContext extends ParserRuleContext {
		public List<AbsLengthValueContext> absLengthValue() {
			return getRuleContexts(AbsLengthValueContext.class);
		}
		public AbsLengthValueContext absLengthValue(int i) {
			return getRuleContext(AbsLengthValueContext.class,i);
		}
		public List<WhiteSpaceWithSpaceCharContext> whiteSpaceWithSpaceChar() {
			return getRuleContexts(WhiteSpaceWithSpaceCharContext.class);
		}
		public WhiteSpaceWithSpaceCharContext whiteSpaceWithSpaceChar(int i) {
			return getRuleContext(WhiteSpaceWithSpaceCharContext.class,i);
		}
		public List<FontRelativeValueContext> fontRelativeValue() {
			return getRuleContexts(FontRelativeValueContext.class);
		}
		public FontRelativeValueContext fontRelativeValue(int i) {
			return getRuleContext(FontRelativeValueContext.class,i);
		}
		public List<ViewportRelativeValueContext> viewportRelativeValue() {
			return getRuleContexts(ViewportRelativeValueContext.class);
		}
		public ViewportRelativeValueContext viewportRelativeValue(int i) {
			return getRuleContext(ViewportRelativeValueContext.class,i);
		}
		public List<AngleValueContext> angleValue() {
			return getRuleContexts(AngleValueContext.class);
		}
		public AngleValueContext angleValue(int i) {
			return getRuleContext(AngleValueContext.class,i);
		}
		public List<ResolutionValueContext> resolutionValue() {
			return getRuleContexts(ResolutionValueContext.class);
		}
		public ResolutionValueContext resolutionValue(int i) {
			return getRuleContext(ResolutionValueContext.class,i);
		}
		public List<FreqValueContext> freqValue() {
			return getRuleContexts(FreqValueContext.class);
		}
		public FreqValueContext freqValue(int i) {
			return getRuleContext(FreqValueContext.class,i);
		}
		public List<TimeValueContext> timeValue() {
			return getRuleContexts(TimeValueContext.class);
		}
		public TimeValueContext timeValue(int i) {
			return getRuleContext(TimeValueContext.class,i);
		}
		public List<PercentageValueContext> percentageValue() {
			return getRuleContexts(PercentageValueContext.class);
		}
		public PercentageValueContext percentageValue(int i) {
			return getRuleContext(PercentageValueContext.class,i);
		}
		public FourNumValueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fourNumValue; }
	}

	public final FourNumValueContext fourNumValue() throws RecognitionException {
		FourNumValueContext _localctx = new FourNumValueContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_fourNumValue);
		try {
			setState(425);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,30,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(361);
				absLengthValue();
				setState(362);
				whiteSpaceWithSpaceChar();
				setState(363);
				absLengthValue();
				setState(364);
				whiteSpaceWithSpaceChar();
				setState(365);
				absLengthValue();
				setState(366);
				whiteSpaceWithSpaceChar();
				setState(367);
				absLengthValue();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(369);
				fontRelativeValue();
				setState(370);
				whiteSpaceWithSpaceChar();
				setState(371);
				fontRelativeValue();
				setState(372);
				whiteSpaceWithSpaceChar();
				setState(373);
				fontRelativeValue();
				setState(374);
				whiteSpaceWithSpaceChar();
				setState(375);
				fontRelativeValue();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(377);
				viewportRelativeValue();
				setState(378);
				whiteSpaceWithSpaceChar();
				setState(379);
				viewportRelativeValue();
				setState(380);
				whiteSpaceWithSpaceChar();
				setState(381);
				viewportRelativeValue();
				setState(382);
				whiteSpaceWithSpaceChar();
				setState(383);
				viewportRelativeValue();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(385);
				angleValue();
				setState(386);
				whiteSpaceWithSpaceChar();
				setState(387);
				angleValue();
				setState(388);
				whiteSpaceWithSpaceChar();
				setState(389);
				angleValue();
				setState(390);
				whiteSpaceWithSpaceChar();
				setState(391);
				angleValue();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(393);
				resolutionValue();
				setState(394);
				whiteSpaceWithSpaceChar();
				setState(395);
				resolutionValue();
				setState(396);
				whiteSpaceWithSpaceChar();
				setState(397);
				resolutionValue();
				setState(398);
				whiteSpaceWithSpaceChar();
				setState(399);
				resolutionValue();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(401);
				freqValue();
				setState(402);
				whiteSpaceWithSpaceChar();
				setState(403);
				freqValue();
				setState(404);
				whiteSpaceWithSpaceChar();
				setState(405);
				freqValue();
				setState(406);
				whiteSpaceWithSpaceChar();
				setState(407);
				freqValue();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(409);
				timeValue();
				setState(410);
				whiteSpaceWithSpaceChar();
				setState(411);
				timeValue();
				setState(412);
				whiteSpaceWithSpaceChar();
				setState(413);
				timeValue();
				setState(414);
				whiteSpaceWithSpaceChar();
				setState(415);
				timeValue();
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(417);
				percentageValue();
				setState(418);
				whiteSpaceWithSpaceChar();
				setState(419);
				percentageValue();
				setState(420);
				whiteSpaceWithSpaceChar();
				setState(421);
				percentageValue();
				setState(422);
				whiteSpaceWithSpaceChar();
				setState(423);
				percentageValue();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ThreeNumValueContext extends ParserRuleContext {
		public List<AbsLengthValueContext> absLengthValue() {
			return getRuleContexts(AbsLengthValueContext.class);
		}
		public AbsLengthValueContext absLengthValue(int i) {
			return getRuleContext(AbsLengthValueContext.class,i);
		}
		public List<WhiteSpaceWithSpaceCharContext> whiteSpaceWithSpaceChar() {
			return getRuleContexts(WhiteSpaceWithSpaceCharContext.class);
		}
		public WhiteSpaceWithSpaceCharContext whiteSpaceWithSpaceChar(int i) {
			return getRuleContext(WhiteSpaceWithSpaceCharContext.class,i);
		}
		public List<FontRelativeValueContext> fontRelativeValue() {
			return getRuleContexts(FontRelativeValueContext.class);
		}
		public FontRelativeValueContext fontRelativeValue(int i) {
			return getRuleContext(FontRelativeValueContext.class,i);
		}
		public List<ViewportRelativeValueContext> viewportRelativeValue() {
			return getRuleContexts(ViewportRelativeValueContext.class);
		}
		public ViewportRelativeValueContext viewportRelativeValue(int i) {
			return getRuleContext(ViewportRelativeValueContext.class,i);
		}
		public List<AngleValueContext> angleValue() {
			return getRuleContexts(AngleValueContext.class);
		}
		public AngleValueContext angleValue(int i) {
			return getRuleContext(AngleValueContext.class,i);
		}
		public List<ResolutionValueContext> resolutionValue() {
			return getRuleContexts(ResolutionValueContext.class);
		}
		public ResolutionValueContext resolutionValue(int i) {
			return getRuleContext(ResolutionValueContext.class,i);
		}
		public List<FreqValueContext> freqValue() {
			return getRuleContexts(FreqValueContext.class);
		}
		public FreqValueContext freqValue(int i) {
			return getRuleContext(FreqValueContext.class,i);
		}
		public List<TimeValueContext> timeValue() {
			return getRuleContexts(TimeValueContext.class);
		}
		public TimeValueContext timeValue(int i) {
			return getRuleContext(TimeValueContext.class,i);
		}
		public List<PercentageValueContext> percentageValue() {
			return getRuleContexts(PercentageValueContext.class);
		}
		public PercentageValueContext percentageValue(int i) {
			return getRuleContext(PercentageValueContext.class,i);
		}
		public ThreeNumValueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_threeNumValue; }
	}

	public final ThreeNumValueContext threeNumValue() throws RecognitionException {
		ThreeNumValueContext _localctx = new ThreeNumValueContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_threeNumValue);
		try {
			setState(475);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,31,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(427);
				absLengthValue();
				setState(428);
				whiteSpaceWithSpaceChar();
				setState(429);
				absLengthValue();
				setState(430);
				whiteSpaceWithSpaceChar();
				setState(431);
				absLengthValue();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(433);
				fontRelativeValue();
				setState(434);
				whiteSpaceWithSpaceChar();
				setState(435);
				fontRelativeValue();
				setState(436);
				whiteSpaceWithSpaceChar();
				setState(437);
				fontRelativeValue();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(439);
				viewportRelativeValue();
				setState(440);
				whiteSpaceWithSpaceChar();
				setState(441);
				viewportRelativeValue();
				setState(442);
				whiteSpaceWithSpaceChar();
				setState(443);
				viewportRelativeValue();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(445);
				angleValue();
				setState(446);
				whiteSpaceWithSpaceChar();
				setState(447);
				angleValue();
				setState(448);
				whiteSpaceWithSpaceChar();
				setState(449);
				angleValue();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(451);
				resolutionValue();
				setState(452);
				whiteSpaceWithSpaceChar();
				setState(453);
				resolutionValue();
				setState(454);
				whiteSpaceWithSpaceChar();
				setState(455);
				resolutionValue();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(457);
				freqValue();
				setState(458);
				whiteSpaceWithSpaceChar();
				setState(459);
				freqValue();
				setState(460);
				whiteSpaceWithSpaceChar();
				setState(461);
				freqValue();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(463);
				timeValue();
				setState(464);
				whiteSpaceWithSpaceChar();
				setState(465);
				timeValue();
				setState(466);
				whiteSpaceWithSpaceChar();
				setState(467);
				timeValue();
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(469);
				percentageValue();
				setState(470);
				whiteSpaceWithSpaceChar();
				setState(471);
				percentageValue();
				setState(472);
				whiteSpaceWithSpaceChar();
				setState(473);
				percentageValue();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class TwoNumValueContext extends ParserRuleContext {
		public List<AbsLengthValueContext> absLengthValue() {
			return getRuleContexts(AbsLengthValueContext.class);
		}
		public AbsLengthValueContext absLengthValue(int i) {
			return getRuleContext(AbsLengthValueContext.class,i);
		}
		public WhiteSpaceWithSpaceCharContext whiteSpaceWithSpaceChar() {
			return getRuleContext(WhiteSpaceWithSpaceCharContext.class,0);
		}
		public List<FontRelativeValueContext> fontRelativeValue() {
			return getRuleContexts(FontRelativeValueContext.class);
		}
		public FontRelativeValueContext fontRelativeValue(int i) {
			return getRuleContext(FontRelativeValueContext.class,i);
		}
		public List<ViewportRelativeValueContext> viewportRelativeValue() {
			return getRuleContexts(ViewportRelativeValueContext.class);
		}
		public ViewportRelativeValueContext viewportRelativeValue(int i) {
			return getRuleContext(ViewportRelativeValueContext.class,i);
		}
		public List<AngleValueContext> angleValue() {
			return getRuleContexts(AngleValueContext.class);
		}
		public AngleValueContext angleValue(int i) {
			return getRuleContext(AngleValueContext.class,i);
		}
		public List<ResolutionValueContext> resolutionValue() {
			return getRuleContexts(ResolutionValueContext.class);
		}
		public ResolutionValueContext resolutionValue(int i) {
			return getRuleContext(ResolutionValueContext.class,i);
		}
		public List<FreqValueContext> freqValue() {
			return getRuleContexts(FreqValueContext.class);
		}
		public FreqValueContext freqValue(int i) {
			return getRuleContext(FreqValueContext.class,i);
		}
		public List<TimeValueContext> timeValue() {
			return getRuleContexts(TimeValueContext.class);
		}
		public TimeValueContext timeValue(int i) {
			return getRuleContext(TimeValueContext.class,i);
		}
		public List<PercentageValueContext> percentageValue() {
			return getRuleContexts(PercentageValueContext.class);
		}
		public PercentageValueContext percentageValue(int i) {
			return getRuleContext(PercentageValueContext.class,i);
		}
		public TwoNumValueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_twoNumValue; }
	}

	public final TwoNumValueContext twoNumValue() throws RecognitionException {
		TwoNumValueContext _localctx = new TwoNumValueContext(_ctx, getState());
		enterRule(_localctx, 32, RULE_twoNumValue);
		try {
			setState(509);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,32,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(477);
				absLengthValue();
				setState(478);
				whiteSpaceWithSpaceChar();
				setState(479);
				absLengthValue();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(481);
				fontRelativeValue();
				setState(482);
				whiteSpaceWithSpaceChar();
				setState(483);
				fontRelativeValue();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(485);
				viewportRelativeValue();
				setState(486);
				whiteSpaceWithSpaceChar();
				setState(487);
				viewportRelativeValue();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(489);
				angleValue();
				setState(490);
				whiteSpaceWithSpaceChar();
				setState(491);
				angleValue();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(493);
				resolutionValue();
				setState(494);
				whiteSpaceWithSpaceChar();
				setState(495);
				resolutionValue();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(497);
				freqValue();
				setState(498);
				whiteSpaceWithSpaceChar();
				setState(499);
				freqValue();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(501);
				timeValue();
				setState(502);
				whiteSpaceWithSpaceChar();
				setState(503);
				timeValue();
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(505);
				percentageValue();
				setState(506);
				whiteSpaceWithSpaceChar();
				setState(507);
				percentageValue();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class OneNumValueContext extends ParserRuleContext {
		public AbsLengthValueContext absLengthValue() {
			return getRuleContext(AbsLengthValueContext.class,0);
		}
		public FontRelativeValueContext fontRelativeValue() {
			return getRuleContext(FontRelativeValueContext.class,0);
		}
		public ViewportRelativeValueContext viewportRelativeValue() {
			return getRuleContext(ViewportRelativeValueContext.class,0);
		}
		public AngleValueContext angleValue() {
			return getRuleContext(AngleValueContext.class,0);
		}
		public ResolutionValueContext resolutionValue() {
			return getRuleContext(ResolutionValueContext.class,0);
		}
		public FreqValueContext freqValue() {
			return getRuleContext(FreqValueContext.class,0);
		}
		public TimeValueContext timeValue() {
			return getRuleContext(TimeValueContext.class,0);
		}
		public PercentageValueContext percentageValue() {
			return getRuleContext(PercentageValueContext.class,0);
		}
		public OneNumValueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_oneNumValue; }
	}

	public final OneNumValueContext oneNumValue() throws RecognitionException {
		OneNumValueContext _localctx = new OneNumValueContext(_ctx, getState());
		enterRule(_localctx, 34, RULE_oneNumValue);
		try {
			setState(519);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,33,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(511);
				absLengthValue();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(512);
				fontRelativeValue();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(513);
				viewportRelativeValue();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(514);
				angleValue();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(515);
				resolutionValue();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(516);
				freqValue();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(517);
				timeValue();
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(518);
				percentageValue();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class WhiteSpaceWithSpaceCharContext extends ParserRuleContext {
		public TerminalNode SpaceChar() { return getToken(SCSSParser.SpaceChar, 0); }
		public WhiteSpaceWithSpaceCharContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_whiteSpaceWithSpaceChar; }
	}

	public final WhiteSpaceWithSpaceCharContext whiteSpaceWithSpaceChar() throws RecognitionException {
		WhiteSpaceWithSpaceCharContext _localctx = new WhiteSpaceWithSpaceCharContext(_ctx, getState());
		enterRule(_localctx, 36, RULE_whiteSpaceWithSpaceChar);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(521);
			match(SpaceChar);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class AbsLengthValueContext extends ParserRuleContext {
		public TerminalNode NumberReg() { return getToken(SCSSParser.NumberReg, 0); }
		public TerminalNode AbsLength() { return getToken(SCSSParser.AbsLength, 0); }
		public AbsLengthValueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_absLengthValue; }
	}

	public final AbsLengthValueContext absLengthValue() throws RecognitionException {
		AbsLengthValueContext _localctx = new AbsLengthValueContext(_ctx, getState());
		enterRule(_localctx, 38, RULE_absLengthValue);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(523);
			match(NumberReg);
			setState(524);
			match(AbsLength);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class FontRelativeValueContext extends ParserRuleContext {
		public TerminalNode NumberReg() { return getToken(SCSSParser.NumberReg, 0); }
		public TerminalNode FontRelative() { return getToken(SCSSParser.FontRelative, 0); }
		public FontRelativeValueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fontRelativeValue; }
	}

	public final FontRelativeValueContext fontRelativeValue() throws RecognitionException {
		FontRelativeValueContext _localctx = new FontRelativeValueContext(_ctx, getState());
		enterRule(_localctx, 40, RULE_fontRelativeValue);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(526);
			match(NumberReg);
			setState(527);
			match(FontRelative);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ViewportRelativeValueContext extends ParserRuleContext {
		public TerminalNode NumberReg() { return getToken(SCSSParser.NumberReg, 0); }
		public TerminalNode ViewportRelative() { return getToken(SCSSParser.ViewportRelative, 0); }
		public ViewportRelativeValueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_viewportRelativeValue; }
	}

	public final ViewportRelativeValueContext viewportRelativeValue() throws RecognitionException {
		ViewportRelativeValueContext _localctx = new ViewportRelativeValueContext(_ctx, getState());
		enterRule(_localctx, 42, RULE_viewportRelativeValue);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(529);
			match(NumberReg);
			setState(530);
			match(ViewportRelative);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class AngleValueContext extends ParserRuleContext {
		public TerminalNode NumberReg() { return getToken(SCSSParser.NumberReg, 0); }
		public TerminalNode Angle() { return getToken(SCSSParser.Angle, 0); }
		public AngleValueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_angleValue; }
	}

	public final AngleValueContext angleValue() throws RecognitionException {
		AngleValueContext _localctx = new AngleValueContext(_ctx, getState());
		enterRule(_localctx, 44, RULE_angleValue);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(532);
			match(NumberReg);
			setState(533);
			match(Angle);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ResolutionValueContext extends ParserRuleContext {
		public TerminalNode NumberReg() { return getToken(SCSSParser.NumberReg, 0); }
		public TerminalNode Resolution() { return getToken(SCSSParser.Resolution, 0); }
		public ResolutionValueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_resolutionValue; }
	}

	public final ResolutionValueContext resolutionValue() throws RecognitionException {
		ResolutionValueContext _localctx = new ResolutionValueContext(_ctx, getState());
		enterRule(_localctx, 46, RULE_resolutionValue);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(535);
			match(NumberReg);
			setState(536);
			match(Resolution);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class FreqValueContext extends ParserRuleContext {
		public TerminalNode NumberReg() { return getToken(SCSSParser.NumberReg, 0); }
		public TerminalNode Freq() { return getToken(SCSSParser.Freq, 0); }
		public FreqValueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_freqValue; }
	}

	public final FreqValueContext freqValue() throws RecognitionException {
		FreqValueContext _localctx = new FreqValueContext(_ctx, getState());
		enterRule(_localctx, 48, RULE_freqValue);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(538);
			match(NumberReg);
			setState(539);
			match(Freq);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class TimeValueContext extends ParserRuleContext {
		public TerminalNode NumberReg() { return getToken(SCSSParser.NumberReg, 0); }
		public TerminalNode Time() { return getToken(SCSSParser.Time, 0); }
		public TimeValueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_timeValue; }
	}

	public final TimeValueContext timeValue() throws RecognitionException {
		TimeValueContext _localctx = new TimeValueContext(_ctx, getState());
		enterRule(_localctx, 50, RULE_timeValue);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(541);
			match(NumberReg);
			setState(542);
			match(Time);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class PercentageValueContext extends ParserRuleContext {
		public TerminalNode NumberReg() { return getToken(SCSSParser.NumberReg, 0); }
		public TerminalNode Percentage() { return getToken(SCSSParser.Percentage, 0); }
		public PercentageValueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_percentageValue; }
	}

	public final PercentageValueContext percentageValue() throws RecognitionException {
		PercentageValueContext _localctx = new PercentageValueContext(_ctx, getState());
		enterRule(_localctx, 52, RULE_percentageValue);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(544);
			match(NumberReg);
			setState(545);
			match(Percentage);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class PropertyContext extends ParserRuleContext {
		public TerminalNode Appearance() { return getToken(SCSSParser.Appearance, 0); }
		public TerminalNode Azimuth() { return getToken(SCSSParser.Azimuth, 0); }
		public TerminalNode Bottom() { return getToken(SCSSParser.Bottom, 0); }
		public TerminalNode Clear() { return getToken(SCSSParser.Clear, 0); }
		public TerminalNode Clip() { return getToken(SCSSParser.Clip, 0); }
		public TerminalNode Columns() { return getToken(SCSSParser.Columns, 0); }
		public TerminalNode Content() { return getToken(SCSSParser.Content, 0); }
		public TerminalNode Crop() { return getToken(SCSSParser.Crop, 0); }
		public TerminalNode Cursor() { return getToken(SCSSParser.Cursor, 0); }
		public TerminalNode Direction() { return getToken(SCSSParser.Direction, 0); }
		public TerminalNode Display() { return getToken(SCSSParser.Display, 0); }
		public TerminalNode Elevation() { return getToken(SCSSParser.Elevation, 0); }
		public TerminalNode Height() { return getToken(SCSSParser.Height, 0); }
		public TerminalNode Hyphens() { return getToken(SCSSParser.Hyphens, 0); }
		public TerminalNode Icon() { return getToken(SCSSParser.Icon, 0); }
		public TerminalNode Left() { return getToken(SCSSParser.Left, 0); }
		public TerminalNode Marks() { return getToken(SCSSParser.Marks, 0); }
		public TerminalNode Monochrome() { return getToken(SCSSParser.Monochrome, 0); }
		public TerminalNode Opacity() { return getToken(SCSSParser.Opacity, 0); }
		public TerminalNode Orientation() { return getToken(SCSSParser.Orientation, 0); }
		public TerminalNode Orphans() { return getToken(SCSSParser.Orphans, 0); }
		public TerminalNode Phonemes() { return getToken(SCSSParser.Phonemes, 0); }
		public TerminalNode Position() { return getToken(SCSSParser.Position, 0); }
		public TerminalNode Quotes() { return getToken(SCSSParser.Quotes, 0); }
		public TerminalNode Resize() { return getToken(SCSSParser.Resize, 0); }
		public TerminalNode Resolution() { return getToken(SCSSParser.Resolution, 0); }
		public TerminalNode Richness() { return getToken(SCSSParser.Richness, 0); }
		public TerminalNode Right() { return getToken(SCSSParser.Right, 0); }
		public TerminalNode Scan() { return getToken(SCSSParser.Scan, 0); }
		public TerminalNode Size() { return getToken(SCSSParser.Size, 0); }
		public TerminalNode Stress() { return getToken(SCSSParser.Stress, 0); }
		public TerminalNode Top() { return getToken(SCSSParser.Top, 0); }
		public TerminalNode Visibility() { return getToken(SCSSParser.Visibility, 0); }
		public TerminalNode Volume() { return getToken(SCSSParser.Volume, 0); }
		public TerminalNode Widows() { return getToken(SCSSParser.Widows, 0); }
		public TerminalNode Baseline() { return getToken(SCSSParser.Baseline, 0); }
		public List<TerminalNode> Minus() { return getTokens(SCSSParser.Minus); }
		public TerminalNode Minus(int i) {
			return getToken(SCSSParser.Minus, i);
		}
		public TerminalNode Shift() { return getToken(SCSSParser.Shift, 0); }
		public TerminalNode Aspect() { return getToken(SCSSParser.Aspect, 0); }
		public TerminalNode Ratio() { return getToken(SCSSParser.Ratio, 0); }
		public TerminalNode Backface() { return getToken(SCSSParser.Backface, 0); }
		public TerminalNode Caption() { return getToken(SCSSParser.Caption, 0); }
		public TerminalNode Side() { return getToken(SCSSParser.Side, 0); }
		public TerminalNode Dominant() { return getToken(SCSSParser.Dominant, 0); }
		public TerminalNode Empty() { return getToken(SCSSParser.Empty, 0); }
		public TerminalNode Cells() { return getToken(SCSSParser.Cells, 0); }
		public TerminalNode Letter() { return getToken(SCSSParser.Letter, 0); }
		public TerminalNode Spacing() { return getToken(SCSSParser.Spacing, 0); }
		public TerminalNode Move() { return getToken(SCSSParser.Move, 0); }
		public TerminalNode To() { return getToken(SCSSParser.To, 0); }
		public TerminalNode Play() { return getToken(SCSSParser.Play, 0); }
		public TerminalNode During() { return getToken(SCSSParser.During, 0); }
		public TerminalNode Perspective() { return getToken(SCSSParser.Perspective, 0); }
		public TerminalNode Origin() { return getToken(SCSSParser.Origin, 0); }
		public TerminalNode Punctuation() { return getToken(SCSSParser.Punctuation, 0); }
		public TerminalNode Trim() { return getToken(SCSSParser.Trim, 0); }
		public TerminalNode Rendering() { return getToken(SCSSParser.Rendering, 0); }
		public TerminalNode Intent() { return getToken(SCSSParser.Intent, 0); }
		public TerminalNode Speech() { return getToken(SCSSParser.Speech, 0); }
		public TerminalNode Rate() { return getToken(SCSSParser.Rate, 0); }
		public TerminalNode String() { return getToken(SCSSParser.String, 0); }
		public TerminalNode Set() { return getToken(SCSSParser.Set, 0); }
		public TerminalNode Unicode() { return getToken(SCSSParser.Unicode, 0); }
		public TerminalNode Bidi() { return getToken(SCSSParser.Bidi, 0); }
		public TerminalNode Vertical() { return getToken(SCSSParser.Vertical, 0); }
		public TerminalNode Align() { return getToken(SCSSParser.Align, 0); }
		public TerminalNode Inline() { return getToken(SCSSParser.Inline, 0); }
		public TerminalNode Box() { return getToken(SCSSParser.Box, 0); }
		public TerminalNode Background() { return getToken(SCSSParser.Background, 0); }
		public BackgroundOptionsContext backgroundOptions() {
			return getRuleContext(BackgroundOptionsContext.class,0);
		}
		public TerminalNode Alignment() { return getToken(SCSSParser.Alignment, 0); }
		public AlignmentOptionsContext alignmentOptions() {
			return getRuleContext(AlignmentOptionsContext.class,0);
		}
		public TerminalNode Animation() { return getToken(SCSSParser.Animation, 0); }
		public AnimationOptionsContext animationOptions() {
			return getRuleContext(AnimationOptionsContext.class,0);
		}
		public TerminalNode Bookmark() { return getToken(SCSSParser.Bookmark, 0); }
		public BookmarkOptionsContext bookmarkOptions() {
			return getRuleContext(BookmarkOptionsContext.class,0);
		}
		public TerminalNode Border() { return getToken(SCSSParser.Border, 0); }
		public BorderOptionsContext borderOptions() {
			return getRuleContext(BorderOptionsContext.class,0);
		}
		public BoxOptionsContext boxOptions() {
			return getRuleContext(BoxOptionsContext.class,0);
		}
		public CaptionOptionsContext captionOptions() {
			return getRuleContext(CaptionOptionsContext.class,0);
		}
		public TerminalNode Color() { return getToken(SCSSParser.Color, 0); }
		public ColorOptionsContext colorOptions() {
			return getRuleContext(ColorOptionsContext.class,0);
		}
		public TerminalNode Column() { return getToken(SCSSParser.Column, 0); }
		public ColumnOptionsContext columnOptions() {
			return getRuleContext(ColumnOptionsContext.class,0);
		}
		public TerminalNode Counter() { return getToken(SCSSParser.Counter, 0); }
		public CounterOptionsContext counterOptions() {
			return getRuleContext(CounterOptionsContext.class,0);
		}
		public TerminalNode Cue() { return getToken(SCSSParser.Cue, 0); }
		public CueOptionsContext cueOptions() {
			return getRuleContext(CueOptionsContext.class,0);
		}
		public TerminalNode Font() { return getToken(SCSSParser.Font, 0); }
		public FontOptionsContext fontOptions() {
			return getRuleContext(FontOptionsContext.class,0);
		}
		public TerminalNode Float() { return getToken(SCSSParser.Float, 0); }
		public FloatOptionsContext floatOptions() {
			return getRuleContext(FloatOptionsContext.class,0);
		}
		public TerminalNode Grid() { return getToken(SCSSParser.Grid, 0); }
		public GridOptionsContext gridOptions() {
			return getRuleContext(GridOptionsContext.class,0);
		}
		public TerminalNode Hyphenate() { return getToken(SCSSParser.Hyphenate, 0); }
		public HyphenateOptionsContext hyphenateOptions() {
			return getRuleContext(HyphenateOptionsContext.class,0);
		}
		public TerminalNode Image() { return getToken(SCSSParser.Image, 0); }
		public ImageOptionsContext imageOptions() {
			return getRuleContext(ImageOptionsContext.class,0);
		}
		public TerminalNode List() { return getToken(SCSSParser.List, 0); }
		public ListOptionsContext listOptions() {
			return getRuleContext(ListOptionsContext.class,0);
		}
		public TerminalNode Margin() { return getToken(SCSSParser.Margin, 0); }
		public MarginOptionsContext marginOptions() {
			return getRuleContext(MarginOptionsContext.class,0);
		}
		public MarkOptionsContext markOptions() {
			return getRuleContext(MarkOptionsContext.class,0);
		}
		public TerminalNode Marquee() { return getToken(SCSSParser.Marquee, 0); }
		public MarqueeOptionsContext marqueeOptions() {
			return getRuleContext(MarqueeOptionsContext.class,0);
		}
		public TerminalNode Min() { return getToken(SCSSParser.Min, 0); }
		public MinMaxOptionsContext minMaxOptions() {
			return getRuleContext(MinMaxOptionsContext.class,0);
		}
		public TerminalNode Max() { return getToken(SCSSParser.Max, 0); }
		public TerminalNode Nav() { return getToken(SCSSParser.Nav, 0); }
		public NavOptionsContext navOptions() {
			return getRuleContext(NavOptionsContext.class,0);
		}
		public TerminalNode Device() { return getToken(SCSSParser.Device, 0); }
		public DeviceOptionsContext deviceOptions() {
			return getRuleContext(DeviceOptionsContext.class,0);
		}
		public TerminalNode Drop() { return getToken(SCSSParser.Drop, 0); }
		public DropOptionsContext dropOptions() {
			return getRuleContext(DropOptionsContext.class,0);
		}
		public TerminalNode Fit() { return getToken(SCSSParser.Fit, 0); }
		public FitOptionsContext fitOptions() {
			return getRuleContext(FitOptionsContext.class,0);
		}
		public TerminalNode Outline() { return getToken(SCSSParser.Outline, 0); }
		public OutlineOptionsContext outlineOptions() {
			return getRuleContext(OutlineOptionsContext.class,0);
		}
		public TerminalNode Overflow() { return getToken(SCSSParser.Overflow, 0); }
		public OverflowOptionsContext overflowOptions() {
			return getRuleContext(OverflowOptionsContext.class,0);
		}
		public TerminalNode Padding() { return getToken(SCSSParser.Padding, 0); }
		public PaddingOptionsContext paddingOptions() {
			return getRuleContext(PaddingOptionsContext.class,0);
		}
		public TerminalNode Page() { return getToken(SCSSParser.Page, 0); }
		public PageOptionsContext pageOptions() {
			return getRuleContext(PageOptionsContext.class,0);
		}
		public TerminalNode Pause() { return getToken(SCSSParser.Pause, 0); }
		public PauseOptionsContext pauseOptions() {
			return getRuleContext(PauseOptionsContext.class,0);
		}
		public TerminalNode Rest() { return getToken(SCSSParser.Rest, 0); }
		public RestOptionsContext restOptions() {
			return getRuleContext(RestOptionsContext.class,0);
		}
		public TerminalNode Ruby() { return getToken(SCSSParser.Ruby, 0); }
		public RubyOptionsContext rubyOptions() {
			return getRuleContext(RubyOptionsContext.class,0);
		}
		public TerminalNode Speak() { return getToken(SCSSParser.Speak, 0); }
		public SpeakOptionsContext speakOptions() {
			return getRuleContext(SpeakOptionsContext.class,0);
		}
		public TerminalNode Target() { return getToken(SCSSParser.Target, 0); }
		public TargetOptionsContext targetOptions() {
			return getRuleContext(TargetOptionsContext.class,0);
		}
		public TerminalNode Transform() { return getToken(SCSSParser.Transform, 0); }
		public TransformOptionsContext transformOptions() {
			return getRuleContext(TransformOptionsContext.class,0);
		}
		public TerminalNode Transition() { return getToken(SCSSParser.Transition, 0); }
		public TransitionOptionsContext transitionOptions() {
			return getRuleContext(TransitionOptionsContext.class,0);
		}
		public TerminalNode Text() { return getToken(SCSSParser.Text, 0); }
		public TextOptionsContext textOptions() {
			return getRuleContext(TextOptionsContext.class,0);
		}
		public TerminalNode Voice() { return getToken(SCSSParser.Voice, 0); }
		public VoiceOptionsContext voiceOptions() {
			return getRuleContext(VoiceOptionsContext.class,0);
		}
		public TerminalNode Word() { return getToken(SCSSParser.Word, 0); }
		public WordOptionsContext wordOptions() {
			return getRuleContext(WordOptionsContext.class,0);
		}
		public PropertyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_property; }
	}

	public final PropertyContext property() throws RecognitionException {
		PropertyContext _localctx = new PropertyContext(_ctx, getState());
		enterRule(_localctx, 54, RULE_property);
		int _la;
		try {
			setState(795);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,74,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(547);
				match(Appearance);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(548);
				match(Azimuth);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(549);
				match(Bottom);
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(550);
				match(Clear);
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(551);
				match(Clip);
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(552);
				match(Columns);
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(553);
				match(Content);
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(554);
				match(Crop);
				}
				break;
			case 9:
				enterOuterAlt(_localctx, 9);
				{
				setState(555);
				match(Cursor);
				}
				break;
			case 10:
				enterOuterAlt(_localctx, 10);
				{
				setState(556);
				match(Direction);
				}
				break;
			case 11:
				enterOuterAlt(_localctx, 11);
				{
				setState(557);
				match(Display);
				}
				break;
			case 12:
				enterOuterAlt(_localctx, 12);
				{
				setState(558);
				match(Elevation);
				}
				break;
			case 13:
				enterOuterAlt(_localctx, 13);
				{
				setState(559);
				match(Height);
				}
				break;
			case 14:
				enterOuterAlt(_localctx, 14);
				{
				setState(560);
				match(Hyphens);
				}
				break;
			case 15:
				enterOuterAlt(_localctx, 15);
				{
				setState(561);
				match(Icon);
				}
				break;
			case 16:
				enterOuterAlt(_localctx, 16);
				{
				setState(562);
				match(Left);
				}
				break;
			case 17:
				enterOuterAlt(_localctx, 17);
				{
				setState(563);
				match(Marks);
				}
				break;
			case 18:
				enterOuterAlt(_localctx, 18);
				{
				setState(564);
				match(Monochrome);
				}
				break;
			case 19:
				enterOuterAlt(_localctx, 19);
				{
				setState(565);
				match(Opacity);
				}
				break;
			case 20:
				enterOuterAlt(_localctx, 20);
				{
				setState(566);
				match(Orientation);
				}
				break;
			case 21:
				enterOuterAlt(_localctx, 21);
				{
				setState(567);
				match(Orphans);
				}
				break;
			case 22:
				enterOuterAlt(_localctx, 22);
				{
				setState(568);
				match(Phonemes);
				}
				break;
			case 23:
				enterOuterAlt(_localctx, 23);
				{
				setState(569);
				match(Position);
				}
				break;
			case 24:
				enterOuterAlt(_localctx, 24);
				{
				setState(570);
				match(Quotes);
				}
				break;
			case 25:
				enterOuterAlt(_localctx, 25);
				{
				setState(571);
				match(Resize);
				}
				break;
			case 26:
				enterOuterAlt(_localctx, 26);
				{
				setState(572);
				match(Resolution);
				}
				break;
			case 27:
				enterOuterAlt(_localctx, 27);
				{
				setState(573);
				match(Richness);
				}
				break;
			case 28:
				enterOuterAlt(_localctx, 28);
				{
				setState(574);
				match(Right);
				}
				break;
			case 29:
				enterOuterAlt(_localctx, 29);
				{
				setState(575);
				match(Scan);
				}
				break;
			case 30:
				enterOuterAlt(_localctx, 30);
				{
				setState(576);
				match(Size);
				}
				break;
			case 31:
				enterOuterAlt(_localctx, 31);
				{
				setState(577);
				match(Stress);
				}
				break;
			case 32:
				enterOuterAlt(_localctx, 32);
				{
				setState(578);
				match(Top);
				}
				break;
			case 33:
				enterOuterAlt(_localctx, 33);
				{
				setState(579);
				match(Visibility);
				}
				break;
			case 34:
				enterOuterAlt(_localctx, 34);
				{
				setState(580);
				match(Volume);
				}
				break;
			case 35:
				enterOuterAlt(_localctx, 35);
				{
				setState(581);
				match(Widows);
				}
				break;
			case 36:
				enterOuterAlt(_localctx, 36);
				{
				setState(582);
				match(Baseline);
				setState(583);
				match(Minus);
				setState(584);
				match(Shift);
				}
				break;
			case 37:
				enterOuterAlt(_localctx, 37);
				{
				setState(585);
				match(Aspect);
				setState(586);
				match(Minus);
				setState(587);
				match(Ratio);
				}
				break;
			case 38:
				enterOuterAlt(_localctx, 38);
				{
				setState(588);
				match(Backface);
				setState(589);
				match(Minus);
				setState(590);
				match(Visibility);
				}
				break;
			case 39:
				enterOuterAlt(_localctx, 39);
				{
				setState(591);
				match(Caption);
				setState(592);
				match(Minus);
				setState(593);
				match(Side);
				}
				break;
			case 40:
				enterOuterAlt(_localctx, 40);
				{
				setState(594);
				match(Dominant);
				setState(595);
				match(Minus);
				setState(596);
				match(Baseline);
				}
				break;
			case 41:
				enterOuterAlt(_localctx, 41);
				{
				setState(597);
				match(Empty);
				setState(598);
				match(Minus);
				setState(599);
				match(Cells);
				}
				break;
			case 42:
				enterOuterAlt(_localctx, 42);
				{
				setState(600);
				match(Letter);
				setState(601);
				match(Minus);
				setState(602);
				match(Spacing);
				}
				break;
			case 43:
				enterOuterAlt(_localctx, 43);
				{
				setState(603);
				match(Move);
				setState(604);
				match(Minus);
				setState(605);
				match(To);
				}
				break;
			case 44:
				enterOuterAlt(_localctx, 44);
				{
				setState(606);
				match(Play);
				setState(607);
				match(Minus);
				setState(608);
				match(During);
				}
				break;
			case 45:
				enterOuterAlt(_localctx, 45);
				{
				setState(609);
				match(Perspective);
				setState(610);
				match(Minus);
				setState(611);
				match(Origin);
				}
				break;
			case 46:
				enterOuterAlt(_localctx, 46);
				{
				setState(612);
				match(Punctuation);
				setState(613);
				match(Minus);
				setState(614);
				match(Trim);
				}
				break;
			case 47:
				enterOuterAlt(_localctx, 47);
				{
				setState(615);
				match(Rendering);
				setState(616);
				match(Minus);
				setState(617);
				match(Intent);
				}
				break;
			case 48:
				enterOuterAlt(_localctx, 48);
				{
				setState(618);
				match(Speech);
				setState(619);
				match(Minus);
				setState(620);
				match(Rate);
				}
				break;
			case 49:
				enterOuterAlt(_localctx, 49);
				{
				setState(621);
				match(String);
				setState(622);
				match(Minus);
				setState(623);
				match(Set);
				}
				break;
			case 50:
				enterOuterAlt(_localctx, 50);
				{
				setState(624);
				match(Unicode);
				setState(625);
				match(Minus);
				setState(626);
				match(Bidi);
				}
				break;
			case 51:
				enterOuterAlt(_localctx, 51);
				{
				setState(627);
				match(Vertical);
				setState(628);
				match(Minus);
				setState(629);
				match(Align);
				}
				break;
			case 52:
				enterOuterAlt(_localctx, 52);
				{
				setState(630);
				match(Inline);
				setState(631);
				match(Minus);
				setState(632);
				match(Box);
				setState(633);
				match(Minus);
				setState(634);
				match(Align);
				}
				break;
			case 53:
				enterOuterAlt(_localctx, 53);
				{
				setState(635);
				match(Background);
				setState(637);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Minus) {
					{
					setState(636);
					backgroundOptions();
					}
				}

				}
				break;
			case 54:
				enterOuterAlt(_localctx, 54);
				{
				setState(639);
				match(Alignment);
				setState(641);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Minus) {
					{
					setState(640);
					alignmentOptions();
					}
				}

				}
				break;
			case 55:
				enterOuterAlt(_localctx, 55);
				{
				setState(643);
				match(Animation);
				setState(645);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Minus) {
					{
					setState(644);
					animationOptions();
					}
				}

				}
				break;
			case 56:
				enterOuterAlt(_localctx, 56);
				{
				setState(647);
				match(Bookmark);
				setState(649);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Minus) {
					{
					setState(648);
					bookmarkOptions();
					}
				}

				}
				break;
			case 57:
				enterOuterAlt(_localctx, 57);
				{
				setState(651);
				match(Border);
				setState(653);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Minus) {
					{
					setState(652);
					borderOptions();
					}
				}

				}
				break;
			case 58:
				enterOuterAlt(_localctx, 58);
				{
				setState(655);
				match(Box);
				setState(657);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Minus) {
					{
					setState(656);
					boxOptions();
					}
				}

				}
				break;
			case 59:
				enterOuterAlt(_localctx, 59);
				{
				setState(659);
				match(Caption);
				setState(661);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Minus) {
					{
					setState(660);
					captionOptions();
					}
				}

				}
				break;
			case 60:
				enterOuterAlt(_localctx, 60);
				{
				setState(663);
				match(Color);
				setState(665);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Minus) {
					{
					setState(664);
					colorOptions();
					}
				}

				}
				break;
			case 61:
				enterOuterAlt(_localctx, 61);
				{
				setState(667);
				match(Column);
				setState(669);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Minus) {
					{
					setState(668);
					columnOptions();
					}
				}

				}
				break;
			case 62:
				enterOuterAlt(_localctx, 62);
				{
				setState(671);
				match(Counter);
				setState(673);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Minus) {
					{
					setState(672);
					counterOptions();
					}
				}

				}
				break;
			case 63:
				enterOuterAlt(_localctx, 63);
				{
				setState(675);
				match(Cue);
				setState(677);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Minus) {
					{
					setState(676);
					cueOptions();
					}
				}

				}
				break;
			case 64:
				enterOuterAlt(_localctx, 64);
				{
				setState(679);
				match(Font);
				setState(681);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Minus) {
					{
					setState(680);
					fontOptions();
					}
				}

				}
				break;
			case 65:
				enterOuterAlt(_localctx, 65);
				{
				setState(683);
				match(Float);
				setState(685);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Minus) {
					{
					setState(684);
					floatOptions();
					}
				}

				}
				break;
			case 66:
				enterOuterAlt(_localctx, 66);
				{
				setState(687);
				match(Grid);
				setState(689);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Minus) {
					{
					setState(688);
					gridOptions();
					}
				}

				}
				break;
			case 67:
				enterOuterAlt(_localctx, 67);
				{
				setState(691);
				match(Hyphenate);
				setState(693);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Minus) {
					{
					setState(692);
					hyphenateOptions();
					}
				}

				}
				break;
			case 68:
				enterOuterAlt(_localctx, 68);
				{
				setState(695);
				match(Image);
				setState(697);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Minus) {
					{
					setState(696);
					imageOptions();
					}
				}

				}
				break;
			case 69:
				enterOuterAlt(_localctx, 69);
				{
				setState(699);
				match(List);
				setState(701);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Minus) {
					{
					setState(700);
					listOptions();
					}
				}

				}
				break;
			case 70:
				enterOuterAlt(_localctx, 70);
				{
				setState(703);
				match(Margin);
				setState(705);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Minus) {
					{
					setState(704);
					marginOptions();
					}
				}

				}
				break;
			case 71:
				enterOuterAlt(_localctx, 71);
				{
				setState(707);
				match(Marks);
				setState(709);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Minus) {
					{
					setState(708);
					markOptions();
					}
				}

				}
				break;
			case 72:
				enterOuterAlt(_localctx, 72);
				{
				setState(711);
				match(Marquee);
				setState(713);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Minus) {
					{
					setState(712);
					marqueeOptions();
					}
				}

				}
				break;
			case 73:
				enterOuterAlt(_localctx, 73);
				{
				setState(715);
				match(Min);
				setState(717);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Minus) {
					{
					setState(716);
					minMaxOptions();
					}
				}

				}
				break;
			case 74:
				enterOuterAlt(_localctx, 74);
				{
				setState(719);
				match(Max);
				setState(721);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Minus) {
					{
					setState(720);
					minMaxOptions();
					}
				}

				}
				break;
			case 75:
				enterOuterAlt(_localctx, 75);
				{
				setState(723);
				match(Nav);
				setState(725);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Minus) {
					{
					setState(724);
					navOptions();
					}
				}

				}
				break;
			case 76:
				enterOuterAlt(_localctx, 76);
				{
				setState(727);
				match(Device);
				setState(729);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Minus) {
					{
					setState(728);
					deviceOptions();
					}
				}

				}
				break;
			case 77:
				enterOuterAlt(_localctx, 77);
				{
				setState(731);
				match(Drop);
				setState(733);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Minus) {
					{
					setState(732);
					dropOptions();
					}
				}

				}
				break;
			case 78:
				enterOuterAlt(_localctx, 78);
				{
				setState(735);
				match(Fit);
				setState(737);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Minus) {
					{
					setState(736);
					fitOptions();
					}
				}

				}
				break;
			case 79:
				enterOuterAlt(_localctx, 79);
				{
				setState(739);
				match(Outline);
				setState(741);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Minus) {
					{
					setState(740);
					outlineOptions();
					}
				}

				}
				break;
			case 80:
				enterOuterAlt(_localctx, 80);
				{
				setState(743);
				match(Overflow);
				setState(745);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Minus) {
					{
					setState(744);
					overflowOptions();
					}
				}

				}
				break;
			case 81:
				enterOuterAlt(_localctx, 81);
				{
				setState(747);
				match(Padding);
				setState(749);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Minus) {
					{
					setState(748);
					paddingOptions();
					}
				}

				}
				break;
			case 82:
				enterOuterAlt(_localctx, 82);
				{
				setState(751);
				match(Page);
				setState(753);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Minus) {
					{
					setState(752);
					pageOptions();
					}
				}

				}
				break;
			case 83:
				enterOuterAlt(_localctx, 83);
				{
				setState(755);
				match(Pause);
				setState(757);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Minus) {
					{
					setState(756);
					pauseOptions();
					}
				}

				}
				break;
			case 84:
				enterOuterAlt(_localctx, 84);
				{
				setState(759);
				match(Rest);
				setState(761);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Minus) {
					{
					setState(760);
					restOptions();
					}
				}

				}
				break;
			case 85:
				enterOuterAlt(_localctx, 85);
				{
				setState(763);
				match(Ruby);
				setState(765);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Minus) {
					{
					setState(764);
					rubyOptions();
					}
				}

				}
				break;
			case 86:
				enterOuterAlt(_localctx, 86);
				{
				setState(767);
				match(Speak);
				setState(769);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Minus) {
					{
					setState(768);
					speakOptions();
					}
				}

				}
				break;
			case 87:
				enterOuterAlt(_localctx, 87);
				{
				setState(771);
				match(Target);
				setState(773);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Minus) {
					{
					setState(772);
					targetOptions();
					}
				}

				}
				break;
			case 88:
				enterOuterAlt(_localctx, 88);
				{
				setState(775);
				match(Transform);
				setState(777);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Minus) {
					{
					setState(776);
					transformOptions();
					}
				}

				}
				break;
			case 89:
				enterOuterAlt(_localctx, 89);
				{
				setState(779);
				match(Transition);
				setState(781);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Minus) {
					{
					setState(780);
					transitionOptions();
					}
				}

				}
				break;
			case 90:
				enterOuterAlt(_localctx, 90);
				{
				setState(783);
				match(Text);
				setState(785);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Minus) {
					{
					setState(784);
					textOptions();
					}
				}

				}
				break;
			case 91:
				enterOuterAlt(_localctx, 91);
				{
				setState(787);
				match(Voice);
				setState(789);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Minus) {
					{
					setState(788);
					voiceOptions();
					}
				}

				}
				break;
			case 92:
				enterOuterAlt(_localctx, 92);
				{
				setState(791);
				match(Word);
				setState(793);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Minus) {
					{
					setState(792);
					wordOptions();
					}
				}

				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class BackgroundOptionsContext extends ParserRuleContext {
		public TerminalNode Minus() { return getToken(SCSSParser.Minus, 0); }
		public TerminalNode Attachment() { return getToken(SCSSParser.Attachment, 0); }
		public TerminalNode Color() { return getToken(SCSSParser.Color, 0); }
		public TerminalNode Image() { return getToken(SCSSParser.Image, 0); }
		public TerminalNode Position() { return getToken(SCSSParser.Position, 0); }
		public TerminalNode Repeat() { return getToken(SCSSParser.Repeat, 0); }
		public TerminalNode Clip() { return getToken(SCSSParser.Clip, 0); }
		public TerminalNode Origin() { return getToken(SCSSParser.Origin, 0); }
		public TerminalNode Size() { return getToken(SCSSParser.Size, 0); }
		public BackgroundOptionsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_backgroundOptions; }
	}

	public final BackgroundOptionsContext backgroundOptions() throws RecognitionException {
		BackgroundOptionsContext _localctx = new BackgroundOptionsContext(_ctx, getState());
		enterRule(_localctx, 56, RULE_backgroundOptions);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(797);
			match(Minus);
			setState(798);
			_la = _input.LA(1);
			if ( !(((((_la - 46)) & ~0x3f) == 0 && ((1L << (_la - 46)) & 537134193L) != 0) || _la==Origin) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class AlignmentOptionsContext extends ParserRuleContext {
		public TerminalNode Minus() { return getToken(SCSSParser.Minus, 0); }
		public TerminalNode Adjust() { return getToken(SCSSParser.Adjust, 0); }
		public TerminalNode Baseline() { return getToken(SCSSParser.Baseline, 0); }
		public AlignmentOptionsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_alignmentOptions; }
	}

	public final AlignmentOptionsContext alignmentOptions() throws RecognitionException {
		AlignmentOptionsContext _localctx = new AlignmentOptionsContext(_ctx, getState());
		enterRule(_localctx, 58, RULE_alignmentOptions);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(800);
			match(Minus);
			setState(801);
			_la = _input.LA(1);
			if ( !(_la==Baseline || _la==Adjust) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class AnimationOptionsContext extends ParserRuleContext {
		public List<TerminalNode> Minus() { return getTokens(SCSSParser.Minus); }
		public TerminalNode Minus(int i) {
			return getToken(SCSSParser.Minus, i);
		}
		public TerminalNode Delay() { return getToken(SCSSParser.Delay, 0); }
		public TerminalNode Direction() { return getToken(SCSSParser.Direction, 0); }
		public TerminalNode Duration() { return getToken(SCSSParser.Duration, 0); }
		public TerminalNode Name() { return getToken(SCSSParser.Name, 0); }
		public TerminalNode Iteration() { return getToken(SCSSParser.Iteration, 0); }
		public TerminalNode Count() { return getToken(SCSSParser.Count, 0); }
		public TerminalNode Play() { return getToken(SCSSParser.Play, 0); }
		public TerminalNode State() { return getToken(SCSSParser.State, 0); }
		public TerminalNode Timing() { return getToken(SCSSParser.Timing, 0); }
		public TerminalNode Function() { return getToken(SCSSParser.Function, 0); }
		public AnimationOptionsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_animationOptions; }
	}

	public final AnimationOptionsContext animationOptions() throws RecognitionException {
		AnimationOptionsContext _localctx = new AnimationOptionsContext(_ctx, getState());
		enterRule(_localctx, 60, RULE_animationOptions);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(803);
			match(Minus);
			setState(817);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Delay:
				{
				setState(804);
				match(Delay);
				}
				break;
			case Direction:
				{
				setState(805);
				match(Direction);
				}
				break;
			case Duration:
				{
				setState(806);
				match(Duration);
				}
				break;
			case Name:
				{
				setState(807);
				match(Name);
				}
				break;
			case Iteration:
				{
				setState(808);
				match(Iteration);
				setState(809);
				match(Minus);
				setState(810);
				match(Count);
				}
				break;
			case Play:
				{
				setState(811);
				match(Play);
				setState(812);
				match(Minus);
				setState(813);
				match(State);
				}
				break;
			case Timing:
				{
				setState(814);
				match(Timing);
				setState(815);
				match(Minus);
				setState(816);
				match(Function);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class BookmarkOptionsContext extends ParserRuleContext {
		public TerminalNode Minus() { return getToken(SCSSParser.Minus, 0); }
		public TerminalNode Label() { return getToken(SCSSParser.Label, 0); }
		public TerminalNode Level() { return getToken(SCSSParser.Level, 0); }
		public TerminalNode Target() { return getToken(SCSSParser.Target, 0); }
		public BookmarkOptionsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_bookmarkOptions; }
	}

	public final BookmarkOptionsContext bookmarkOptions() throws RecognitionException {
		BookmarkOptionsContext _localctx = new BookmarkOptionsContext(_ctx, getState());
		enterRule(_localctx, 62, RULE_bookmarkOptions);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(819);
			match(Minus);
			setState(820);
			_la = _input.LA(1);
			if ( !(((((_la - 146)) & ~0x3f) == 0 && ((1L << (_la - 146)) & 385L) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class BorderOptionsContext extends ParserRuleContext {
		public TerminalNode Minus() { return getToken(SCSSParser.Minus, 0); }
		public TerminalNode Collapse() { return getToken(SCSSParser.Collapse, 0); }
		public TerminalNode Color() { return getToken(SCSSParser.Color, 0); }
		public TerminalNode Spacing() { return getToken(SCSSParser.Spacing, 0); }
		public TerminalNode Style() { return getToken(SCSSParser.Style, 0); }
		public TerminalNode Width() { return getToken(SCSSParser.Width, 0); }
		public TerminalNode Radius() { return getToken(SCSSParser.Radius, 0); }
		public TerminalNode Top() { return getToken(SCSSParser.Top, 0); }
		public BorderBottomTopOptionsContext borderBottomTopOptions() {
			return getRuleContext(BorderBottomTopOptionsContext.class,0);
		}
		public TerminalNode Right() { return getToken(SCSSParser.Right, 0); }
		public BorderRightLeftOptionsContext borderRightLeftOptions() {
			return getRuleContext(BorderRightLeftOptionsContext.class,0);
		}
		public TerminalNode Bottom() { return getToken(SCSSParser.Bottom, 0); }
		public TerminalNode Left() { return getToken(SCSSParser.Left, 0); }
		public TerminalNode Image() { return getToken(SCSSParser.Image, 0); }
		public BorderImageOptionsContext borderImageOptions() {
			return getRuleContext(BorderImageOptionsContext.class,0);
		}
		public BorderOptionsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_borderOptions; }
	}

	public final BorderOptionsContext borderOptions() throws RecognitionException {
		BorderOptionsContext _localctx = new BorderOptionsContext(_ctx, getState());
		enterRule(_localctx, 64, RULE_borderOptions);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(822);
			match(Minus);
			setState(839);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Collapse:
				{
				setState(823);
				match(Collapse);
				}
				break;
			case Color:
				{
				setState(824);
				match(Color);
				}
				break;
			case Spacing:
				{
				setState(825);
				match(Spacing);
				}
				break;
			case Style:
				{
				setState(826);
				match(Style);
				}
				break;
			case Width:
				{
				setState(827);
				match(Width);
				}
				break;
			case Radius:
				{
				setState(828);
				match(Radius);
				}
				break;
			case Top:
				{
				setState(829);
				match(Top);
				setState(830);
				borderBottomTopOptions();
				}
				break;
			case Right:
				{
				setState(831);
				match(Right);
				setState(832);
				borderRightLeftOptions();
				}
				break;
			case Bottom:
				{
				setState(833);
				match(Bottom);
				setState(834);
				borderBottomTopOptions();
				}
				break;
			case Left:
				{
				setState(835);
				match(Left);
				setState(836);
				borderRightLeftOptions();
				}
				break;
			case Image:
				{
				setState(837);
				match(Image);
				setState(838);
				borderImageOptions();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class BorderBottomTopOptionsContext extends ParserRuleContext {
		public List<TerminalNode> Minus() { return getTokens(SCSSParser.Minus); }
		public TerminalNode Minus(int i) {
			return getToken(SCSSParser.Minus, i);
		}
		public TerminalNode Color() { return getToken(SCSSParser.Color, 0); }
		public TerminalNode Style() { return getToken(SCSSParser.Style, 0); }
		public TerminalNode Width() { return getToken(SCSSParser.Width, 0); }
		public TerminalNode Left() { return getToken(SCSSParser.Left, 0); }
		public TerminalNode Radius() { return getToken(SCSSParser.Radius, 0); }
		public TerminalNode Right() { return getToken(SCSSParser.Right, 0); }
		public BorderBottomTopOptionsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_borderBottomTopOptions; }
	}

	public final BorderBottomTopOptionsContext borderBottomTopOptions() throws RecognitionException {
		BorderBottomTopOptionsContext _localctx = new BorderBottomTopOptionsContext(_ctx, getState());
		enterRule(_localctx, 66, RULE_borderBottomTopOptions);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(841);
			match(Minus);
			setState(851);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Color:
				{
				setState(842);
				match(Color);
				}
				break;
			case Style:
				{
				setState(843);
				match(Style);
				}
				break;
			case Width:
				{
				setState(844);
				match(Width);
				}
				break;
			case Left:
				{
				setState(845);
				match(Left);
				setState(846);
				match(Minus);
				setState(847);
				match(Radius);
				}
				break;
			case Right:
				{
				setState(848);
				match(Right);
				setState(849);
				match(Minus);
				setState(850);
				match(Radius);
				}
				break;
			case Colon:
			case WhiteSpace:
				break;
			default:
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class BorderRightLeftOptionsContext extends ParserRuleContext {
		public TerminalNode Minus() { return getToken(SCSSParser.Minus, 0); }
		public TerminalNode Color() { return getToken(SCSSParser.Color, 0); }
		public TerminalNode Style() { return getToken(SCSSParser.Style, 0); }
		public TerminalNode Width() { return getToken(SCSSParser.Width, 0); }
		public BorderRightLeftOptionsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_borderRightLeftOptions; }
	}

	public final BorderRightLeftOptionsContext borderRightLeftOptions() throws RecognitionException {
		BorderRightLeftOptionsContext _localctx = new BorderRightLeftOptionsContext(_ctx, getState());
		enterRule(_localctx, 68, RULE_borderRightLeftOptions);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(853);
			match(Minus);
			setState(855);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 213305255788544L) != 0)) {
				{
				setState(854);
				_la = _input.LA(1);
				if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 213305255788544L) != 0)) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class BorderImageOptionsContext extends ParserRuleContext {
		public TerminalNode Minus() { return getToken(SCSSParser.Minus, 0); }
		public TerminalNode Outset() { return getToken(SCSSParser.Outset, 0); }
		public TerminalNode Repeat() { return getToken(SCSSParser.Repeat, 0); }
		public TerminalNode Slice() { return getToken(SCSSParser.Slice, 0); }
		public TerminalNode Source() { return getToken(SCSSParser.Source, 0); }
		public TerminalNode Width() { return getToken(SCSSParser.Width, 0); }
		public BorderImageOptionsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_borderImageOptions; }
	}

	public final BorderImageOptionsContext borderImageOptions() throws RecognitionException {
		BorderImageOptionsContext _localctx = new BorderImageOptionsContext(_ctx, getState());
		enterRule(_localctx, 70, RULE_borderImageOptions);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(857);
			match(Minus);
			setState(859);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Width || _la==Repeat || ((((_la - 193)) & ~0x3f) == 0 && ((1L << (_la - 193)) & 7L) != 0)) {
				{
				setState(858);
				_la = _input.LA(1);
				if ( !(_la==Width || _la==Repeat || ((((_la - 193)) & ~0x3f) == 0 && ((1L << (_la - 193)) & 7L) != 0)) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class BoxOptionsContext extends ParserRuleContext {
		public List<TerminalNode> Minus() { return getTokens(SCSSParser.Minus); }
		public TerminalNode Minus(int i) {
			return getToken(SCSSParser.Minus, i);
		}
		public TerminalNode Align() { return getToken(SCSSParser.Align, 0); }
		public TerminalNode Decoration() { return getToken(SCSSParser.Decoration, 0); }
		public TerminalNode Break() { return getToken(SCSSParser.Break, 0); }
		public TerminalNode Direction() { return getToken(SCSSParser.Direction, 0); }
		public TerminalNode Flex() { return getToken(SCSSParser.Flex, 0); }
		public TerminalNode Lines() { return getToken(SCSSParser.Lines, 0); }
		public TerminalNode Ordinal() { return getToken(SCSSParser.Ordinal, 0); }
		public TerminalNode Group() { return getToken(SCSSParser.Group, 0); }
		public TerminalNode Orient() { return getToken(SCSSParser.Orient, 0); }
		public TerminalNode Pack() { return getToken(SCSSParser.Pack, 0); }
		public TerminalNode Shadow() { return getToken(SCSSParser.Shadow, 0); }
		public TerminalNode Sizing() { return getToken(SCSSParser.Sizing, 0); }
		public BoxOptionsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_boxOptions; }
	}

	public final BoxOptionsContext boxOptions() throws RecognitionException {
		BoxOptionsContext _localctx = new BoxOptionsContext(_ctx, getState());
		enterRule(_localctx, 72, RULE_boxOptions);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(861);
			match(Minus);
			setState(880);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Align:
				{
				setState(862);
				match(Align);
				}
				break;
			case Decoration:
				{
				setState(863);
				match(Decoration);
				setState(864);
				match(Minus);
				setState(865);
				match(Break);
				}
				break;
			case Direction:
				{
				setState(866);
				match(Direction);
				}
				break;
			case Flex:
				{
				setState(867);
				match(Flex);
				setState(870);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Minus) {
					{
					setState(868);
					match(Minus);
					setState(869);
					match(Group);
					}
				}

				}
				break;
			case Lines:
				{
				setState(872);
				match(Lines);
				}
				break;
			case Ordinal:
				{
				setState(873);
				match(Ordinal);
				setState(874);
				match(Minus);
				setState(875);
				match(Group);
				}
				break;
			case Orient:
				{
				setState(876);
				match(Orient);
				}
				break;
			case Pack:
				{
				setState(877);
				match(Pack);
				}
				break;
			case Shadow:
				{
				setState(878);
				match(Shadow);
				}
				break;
			case Sizing:
				{
				setState(879);
				match(Sizing);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class CaptionOptionsContext extends ParserRuleContext {
		public TerminalNode Minus() { return getToken(SCSSParser.Minus, 0); }
		public TerminalNode Side() { return getToken(SCSSParser.Side, 0); }
		public CaptionOptionsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_captionOptions; }
	}

	public final CaptionOptionsContext captionOptions() throws RecognitionException {
		CaptionOptionsContext _localctx = new CaptionOptionsContext(_ctx, getState());
		enterRule(_localctx, 74, RULE_captionOptions);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(882);
			match(Minus);
			{
			setState(883);
			match(Side);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ColorOptionsContext extends ParserRuleContext {
		public TerminalNode Minus() { return getToken(SCSSParser.Minus, 0); }
		public TerminalNode Profile() { return getToken(SCSSParser.Profile, 0); }
		public TerminalNode Index() { return getToken(SCSSParser.Index, 0); }
		public ColorOptionsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_colorOptions; }
	}

	public final ColorOptionsContext colorOptions() throws RecognitionException {
		ColorOptionsContext _localctx = new ColorOptionsContext(_ctx, getState());
		enterRule(_localctx, 76, RULE_colorOptions);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(885);
			match(Minus);
			setState(886);
			_la = _input.LA(1);
			if ( !(_la==Index || _la==Profile) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ColumnOptionsContext extends ParserRuleContext {
		public TerminalNode Minus() { return getToken(SCSSParser.Minus, 0); }
		public TerminalNode Count() { return getToken(SCSSParser.Count, 0); }
		public TerminalNode Fill() { return getToken(SCSSParser.Fill, 0); }
		public TerminalNode Gap() { return getToken(SCSSParser.Gap, 0); }
		public ColumnRuleOptionsContext columnRuleOptions() {
			return getRuleContext(ColumnRuleOptionsContext.class,0);
		}
		public TerminalNode Span() { return getToken(SCSSParser.Span, 0); }
		public TerminalNode Width() { return getToken(SCSSParser.Width, 0); }
		public ColumnOptionsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_columnOptions; }
	}

	public final ColumnOptionsContext columnOptions() throws RecognitionException {
		ColumnOptionsContext _localctx = new ColumnOptionsContext(_ctx, getState());
		enterRule(_localctx, 78, RULE_columnOptions);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(888);
			match(Minus);
			setState(895);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Count:
				{
				setState(889);
				match(Count);
				}
				break;
			case Fill:
				{
				setState(890);
				match(Fill);
				}
				break;
			case Gap:
				{
				setState(891);
				match(Gap);
				}
				break;
			case Minus:
				{
				setState(892);
				columnRuleOptions();
				}
				break;
			case Span:
				{
				setState(893);
				match(Span);
				}
				break;
			case Width:
				{
				setState(894);
				match(Width);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ColumnRuleOptionsContext extends ParserRuleContext {
		public TerminalNode Minus() { return getToken(SCSSParser.Minus, 0); }
		public TerminalNode Color() { return getToken(SCSSParser.Color, 0); }
		public TerminalNode Style() { return getToken(SCSSParser.Style, 0); }
		public TerminalNode Width() { return getToken(SCSSParser.Width, 0); }
		public ColumnRuleOptionsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_columnRuleOptions; }
	}

	public final ColumnRuleOptionsContext columnRuleOptions() throws RecognitionException {
		ColumnRuleOptionsContext _localctx = new ColumnRuleOptionsContext(_ctx, getState());
		enterRule(_localctx, 80, RULE_columnRuleOptions);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(897);
			match(Minus);
			setState(898);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 213305255788544L) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class CounterOptionsContext extends ParserRuleContext {
		public TerminalNode Minus() { return getToken(SCSSParser.Minus, 0); }
		public TerminalNode Increment() { return getToken(SCSSParser.Increment, 0); }
		public TerminalNode Reset() { return getToken(SCSSParser.Reset, 0); }
		public CounterOptionsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_counterOptions; }
	}

	public final CounterOptionsContext counterOptions() throws RecognitionException {
		CounterOptionsContext _localctx = new CounterOptionsContext(_ctx, getState());
		enterRule(_localctx, 82, RULE_counterOptions);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(900);
			match(Minus);
			setState(901);
			_la = _input.LA(1);
			if ( !(_la==Increment || _la==Reset) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class CueOptionsContext extends ParserRuleContext {
		public TerminalNode Minus() { return getToken(SCSSParser.Minus, 0); }
		public TerminalNode After() { return getToken(SCSSParser.After, 0); }
		public TerminalNode Before() { return getToken(SCSSParser.Before, 0); }
		public CueOptionsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_cueOptions; }
	}

	public final CueOptionsContext cueOptions() throws RecognitionException {
		CueOptionsContext _localctx = new CueOptionsContext(_ctx, getState());
		enterRule(_localctx, 84, RULE_cueOptions);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(903);
			match(Minus);
			setState(904);
			_la = _input.LA(1);
			if ( !(_la==After || _la==Before) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class FontOptionsContext extends ParserRuleContext {
		public TerminalNode Minus() { return getToken(SCSSParser.Minus, 0); }
		public TerminalNode Family() { return getToken(SCSSParser.Family, 0); }
		public TerminalNode Size() { return getToken(SCSSParser.Size, 0); }
		public TerminalNode Skretch() { return getToken(SCSSParser.Skretch, 0); }
		public TerminalNode Style() { return getToken(SCSSParser.Style, 0); }
		public TerminalNode Variant() { return getToken(SCSSParser.Variant, 0); }
		public TerminalNode Weight() { return getToken(SCSSParser.Weight, 0); }
		public FontOptionsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fontOptions; }
	}

	public final FontOptionsContext fontOptions() throws RecognitionException {
		FontOptionsContext _localctx = new FontOptionsContext(_ctx, getState());
		enterRule(_localctx, 86, RULE_fontOptions);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(906);
			match(Minus);
			setState(907);
			_la = _input.LA(1);
			if ( !(((((_la - 47)) & ~0x3f) == 0 && ((1L << (_la - 47)) & 3087007745L) != 0) || _la==Skretch) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class FloatOptionsContext extends ParserRuleContext {
		public TerminalNode Minus() { return getToken(SCSSParser.Minus, 0); }
		public TerminalNode Offset() { return getToken(SCSSParser.Offset, 0); }
		public FloatOptionsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_floatOptions; }
	}

	public final FloatOptionsContext floatOptions() throws RecognitionException {
		FloatOptionsContext _localctx = new FloatOptionsContext(_ctx, getState());
		enterRule(_localctx, 88, RULE_floatOptions);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(909);
			match(Minus);
			{
			setState(910);
			match(Offset);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class GridOptionsContext extends ParserRuleContext {
		public TerminalNode Minus() { return getToken(SCSSParser.Minus, 0); }
		public TerminalNode Columns() { return getToken(SCSSParser.Columns, 0); }
		public TerminalNode Rows() { return getToken(SCSSParser.Rows, 0); }
		public GridOptionsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_gridOptions; }
	}

	public final GridOptionsContext gridOptions() throws RecognitionException {
		GridOptionsContext _localctx = new GridOptionsContext(_ctx, getState());
		enterRule(_localctx, 90, RULE_gridOptions);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(912);
			match(Minus);
			setState(913);
			_la = _input.LA(1);
			if ( !(_la==Columns || _la==Rows) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class HyphenateOptionsContext extends ParserRuleContext {
		public TerminalNode Minus() { return getToken(SCSSParser.Minus, 0); }
		public TerminalNode After() { return getToken(SCSSParser.After, 0); }
		public TerminalNode Before() { return getToken(SCSSParser.Before, 0); }
		public TerminalNode Character() { return getToken(SCSSParser.Character, 0); }
		public TerminalNode Lines() { return getToken(SCSSParser.Lines, 0); }
		public TerminalNode Resource() { return getToken(SCSSParser.Resource, 0); }
		public HyphenateOptionsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_hyphenateOptions; }
	}

	public final HyphenateOptionsContext hyphenateOptions() throws RecognitionException {
		HyphenateOptionsContext _localctx = new HyphenateOptionsContext(_ctx, getState());
		enterRule(_localctx, 92, RULE_hyphenateOptions);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(915);
			match(Minus);
			setState(916);
			_la = _input.LA(1);
			if ( !(_la==After || _la==Before || ((((_la - 157)) & ~0x3f) == 0 && ((1L << (_la - 157)) & 49153L) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ImageOptionsContext extends ParserRuleContext {
		public TerminalNode Minus() { return getToken(SCSSParser.Minus, 0); }
		public TerminalNode Orientation() { return getToken(SCSSParser.Orientation, 0); }
		public TerminalNode Resolution() { return getToken(SCSSParser.Resolution, 0); }
		public ImageOptionsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_imageOptions; }
	}

	public final ImageOptionsContext imageOptions() throws RecognitionException {
		ImageOptionsContext _localctx = new ImageOptionsContext(_ctx, getState());
		enterRule(_localctx, 94, RULE_imageOptions);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(918);
			match(Minus);
			setState(919);
			_la = _input.LA(1);
			if ( !(_la==Resolution || _la==Orientation) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ListOptionsContext extends ParserRuleContext {
		public List<TerminalNode> Minus() { return getTokens(SCSSParser.Minus); }
		public TerminalNode Minus(int i) {
			return getToken(SCSSParser.Minus, i);
		}
		public TerminalNode Style() { return getToken(SCSSParser.Style, 0); }
		public TerminalNode Image() { return getToken(SCSSParser.Image, 0); }
		public TerminalNode Position() { return getToken(SCSSParser.Position, 0); }
		public TerminalNode Type() { return getToken(SCSSParser.Type, 0); }
		public ListOptionsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_listOptions; }
	}

	public final ListOptionsContext listOptions() throws RecognitionException {
		ListOptionsContext _localctx = new ListOptionsContext(_ctx, getState());
		enterRule(_localctx, 96, RULE_listOptions);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(921);
			match(Minus);
			{
			setState(922);
			match(Style);
			setState(923);
			match(Minus);
			setState(924);
			_la = _input.LA(1);
			if ( !(((((_la - 51)) & ~0x3f) == 0 && ((1L << (_la - 51)) & 1073741827L) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class MarginOptionsContext extends ParserRuleContext {
		public TerminalNode Minus() { return getToken(SCSSParser.Minus, 0); }
		public TerminalNode Bottom() { return getToken(SCSSParser.Bottom, 0); }
		public TerminalNode Left() { return getToken(SCSSParser.Left, 0); }
		public TerminalNode Right() { return getToken(SCSSParser.Right, 0); }
		public TerminalNode Top() { return getToken(SCSSParser.Top, 0); }
		public MarginOptionsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_marginOptions; }
	}

	public final MarginOptionsContext marginOptions() throws RecognitionException {
		MarginOptionsContext _localctx = new MarginOptionsContext(_ctx, getState());
		enterRule(_localctx, 98, RULE_marginOptions);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(926);
			match(Minus);
			setState(927);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 65970697666560L) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class MarkOptionsContext extends ParserRuleContext {
		public TerminalNode Minus() { return getToken(SCSSParser.Minus, 0); }
		public TerminalNode After() { return getToken(SCSSParser.After, 0); }
		public TerminalNode Before() { return getToken(SCSSParser.Before, 0); }
		public MarkOptionsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_markOptions; }
	}

	public final MarkOptionsContext markOptions() throws RecognitionException {
		MarkOptionsContext _localctx = new MarkOptionsContext(_ctx, getState());
		enterRule(_localctx, 100, RULE_markOptions);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(929);
			match(Minus);
			setState(930);
			_la = _input.LA(1);
			if ( !(_la==After || _la==Before) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class MarqueeOptionsContext extends ParserRuleContext {
		public List<TerminalNode> Minus() { return getTokens(SCSSParser.Minus); }
		public TerminalNode Minus(int i) {
			return getToken(SCSSParser.Minus, i);
		}
		public TerminalNode Direction() { return getToken(SCSSParser.Direction, 0); }
		public TerminalNode Speed() { return getToken(SCSSParser.Speed, 0); }
		public TerminalNode Style() { return getToken(SCSSParser.Style, 0); }
		public TerminalNode Play() { return getToken(SCSSParser.Play, 0); }
		public TerminalNode Count() { return getToken(SCSSParser.Count, 0); }
		public MarqueeOptionsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_marqueeOptions; }
	}

	public final MarqueeOptionsContext marqueeOptions() throws RecognitionException {
		MarqueeOptionsContext _localctx = new MarqueeOptionsContext(_ctx, getState());
		enterRule(_localctx, 102, RULE_marqueeOptions);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(932);
			match(Minus);
			setState(939);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Direction:
				{
				setState(933);
				match(Direction);
				}
				break;
			case Speed:
				{
				setState(934);
				match(Speed);
				}
				break;
			case Style:
				{
				setState(935);
				match(Style);
				}
				break;
			case Play:
				{
				setState(936);
				match(Play);
				setState(937);
				match(Minus);
				setState(938);
				match(Count);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class MinMaxOptionsContext extends ParserRuleContext {
		public List<TerminalNode> Minus() { return getTokens(SCSSParser.Minus); }
		public TerminalNode Minus(int i) {
			return getToken(SCSSParser.Minus, i);
		}
		public TerminalNode Color() { return getToken(SCSSParser.Color, 0); }
		public TerminalNode Height() { return getToken(SCSSParser.Height, 0); }
		public TerminalNode Monochrome() { return getToken(SCSSParser.Monochrome, 0); }
		public TerminalNode Resolution() { return getToken(SCSSParser.Resolution, 0); }
		public TerminalNode Width() { return getToken(SCSSParser.Width, 0); }
		public TerminalNode Aspect() { return getToken(SCSSParser.Aspect, 0); }
		public TerminalNode Ratio() { return getToken(SCSSParser.Ratio, 0); }
		public TerminalNode Device() { return getToken(SCSSParser.Device, 0); }
		public MinMaxDeviceOptionsContext minMaxDeviceOptions() {
			return getRuleContext(MinMaxDeviceOptionsContext.class,0);
		}
		public TerminalNode Index() { return getToken(SCSSParser.Index, 0); }
		public MinMaxOptionsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_minMaxOptions; }
	}

	public final MinMaxOptionsContext minMaxOptions() throws RecognitionException {
		MinMaxOptionsContext _localctx = new MinMaxOptionsContext(_ctx, getState());
		enterRule(_localctx, 104, RULE_minMaxOptions);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(941);
			match(Minus);
			setState(956);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Color:
				{
				setState(942);
				match(Color);
				setState(945);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Minus) {
					{
					setState(943);
					match(Minus);
					setState(944);
					match(Index);
					}
				}

				}
				break;
			case Height:
				{
				setState(947);
				match(Height);
				}
				break;
			case Monochrome:
				{
				setState(948);
				match(Monochrome);
				}
				break;
			case Resolution:
				{
				setState(949);
				match(Resolution);
				}
				break;
			case Width:
				{
				setState(950);
				match(Width);
				}
				break;
			case Aspect:
				{
				setState(951);
				match(Aspect);
				setState(952);
				match(Minus);
				setState(953);
				match(Ratio);
				}
				break;
			case Device:
				{
				setState(954);
				match(Device);
				setState(955);
				minMaxDeviceOptions();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class MinMaxDeviceOptionsContext extends ParserRuleContext {
		public TerminalNode Minus() { return getToken(SCSSParser.Minus, 0); }
		public TerminalNode Height() { return getToken(SCSSParser.Height, 0); }
		public TerminalNode Width() { return getToken(SCSSParser.Width, 0); }
		public TerminalNode Aspect() { return getToken(SCSSParser.Aspect, 0); }
		public MinMaxDeviceOptionsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_minMaxDeviceOptions; }
	}

	public final MinMaxDeviceOptionsContext minMaxDeviceOptions() throws RecognitionException {
		MinMaxDeviceOptionsContext _localctx = new MinMaxDeviceOptionsContext(_ctx, getState());
		enterRule(_localctx, 106, RULE_minMaxDeviceOptions);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(958);
			match(Minus);
			setState(959);
			_la = _input.LA(1);
			if ( !(_la==Height || _la==Width || _la==Aspect) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class NavOptionsContext extends ParserRuleContext {
		public TerminalNode Minus() { return getToken(SCSSParser.Minus, 0); }
		public TerminalNode Down() { return getToken(SCSSParser.Down, 0); }
		public TerminalNode Index() { return getToken(SCSSParser.Index, 0); }
		public TerminalNode Left() { return getToken(SCSSParser.Left, 0); }
		public TerminalNode Right() { return getToken(SCSSParser.Right, 0); }
		public TerminalNode Up() { return getToken(SCSSParser.Up, 0); }
		public NavOptionsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_navOptions; }
	}

	public final NavOptionsContext navOptions() throws RecognitionException {
		NavOptionsContext _localctx = new NavOptionsContext(_ctx, getState());
		enterRule(_localctx, 108, RULE_navOptions);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(961);
			match(Minus);
			setState(962);
			_la = _input.LA(1);
			if ( !(_la==Left || _la==Right || _la==Index || _la==Down || _la==Up) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class DeviceOptionsContext extends ParserRuleContext {
		public List<TerminalNode> Minus() { return getTokens(SCSSParser.Minus); }
		public TerminalNode Minus(int i) {
			return getToken(SCSSParser.Minus, i);
		}
		public TerminalNode Width() { return getToken(SCSSParser.Width, 0); }
		public TerminalNode Height() { return getToken(SCSSParser.Height, 0); }
		public TerminalNode Aspect() { return getToken(SCSSParser.Aspect, 0); }
		public TerminalNode Ratio() { return getToken(SCSSParser.Ratio, 0); }
		public DeviceOptionsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_deviceOptions; }
	}

	public final DeviceOptionsContext deviceOptions() throws RecognitionException {
		DeviceOptionsContext _localctx = new DeviceOptionsContext(_ctx, getState());
		enterRule(_localctx, 110, RULE_deviceOptions);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(964);
			match(Minus);
			setState(970);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Width:
				{
				setState(965);
				match(Width);
				}
				break;
			case Height:
				{
				setState(966);
				match(Height);
				}
				break;
			case Aspect:
				{
				setState(967);
				match(Aspect);
				setState(968);
				match(Minus);
				setState(969);
				match(Ratio);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class DropOptionsContext extends ParserRuleContext {
		public TerminalNode Minus() { return getToken(SCSSParser.Minus, 0); }
		public TerminalNode Initial() { return getToken(SCSSParser.Initial, 0); }
		public TerminalNode Before() { return getToken(SCSSParser.Before, 0); }
		public DropOptionsBeforeAfterContext dropOptionsBeforeAfter() {
			return getRuleContext(DropOptionsBeforeAfterContext.class,0);
		}
		public TerminalNode After() { return getToken(SCSSParser.After, 0); }
		public TerminalNode Size() { return getToken(SCSSParser.Size, 0); }
		public TerminalNode Value() { return getToken(SCSSParser.Value, 0); }
		public DropOptionsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_dropOptions; }
	}

	public final DropOptionsContext dropOptions() throws RecognitionException {
		DropOptionsContext _localctx = new DropOptionsContext(_ctx, getState());
		enterRule(_localctx, 112, RULE_dropOptions);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(972);
			match(Minus);
			setState(973);
			match(Initial);
			setState(980);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Before:
				{
				setState(974);
				match(Before);
				setState(975);
				dropOptionsBeforeAfter();
				}
				break;
			case After:
				{
				setState(976);
				match(After);
				setState(977);
				dropOptionsBeforeAfter();
				}
				break;
			case Size:
				{
				setState(978);
				match(Size);
				}
				break;
			case Value:
				{
				setState(979);
				match(Value);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class DropOptionsBeforeAfterContext extends ParserRuleContext {
		public TerminalNode Minus() { return getToken(SCSSParser.Minus, 0); }
		public TerminalNode Adjust() { return getToken(SCSSParser.Adjust, 0); }
		public TerminalNode Align() { return getToken(SCSSParser.Align, 0); }
		public DropOptionsBeforeAfterContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_dropOptionsBeforeAfter; }
	}

	public final DropOptionsBeforeAfterContext dropOptionsBeforeAfter() throws RecognitionException {
		DropOptionsBeforeAfterContext _localctx = new DropOptionsBeforeAfterContext(_ctx, getState());
		enterRule(_localctx, 114, RULE_dropOptionsBeforeAfter);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(982);
			match(Minus);
			setState(983);
			_la = _input.LA(1);
			if ( !(_la==Align || _la==Adjust) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class FitOptionsContext extends ParserRuleContext {
		public TerminalNode Minus() { return getToken(SCSSParser.Minus, 0); }
		public TerminalNode Position() { return getToken(SCSSParser.Position, 0); }
		public FitOptionsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fitOptions; }
	}

	public final FitOptionsContext fitOptions() throws RecognitionException {
		FitOptionsContext _localctx = new FitOptionsContext(_ctx, getState());
		enterRule(_localctx, 116, RULE_fitOptions);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(985);
			match(Minus);
			{
			setState(986);
			match(Position);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class OutlineOptionsContext extends ParserRuleContext {
		public TerminalNode Minus() { return getToken(SCSSParser.Minus, 0); }
		public TerminalNode Color() { return getToken(SCSSParser.Color, 0); }
		public TerminalNode Offset() { return getToken(SCSSParser.Offset, 0); }
		public TerminalNode Style() { return getToken(SCSSParser.Style, 0); }
		public TerminalNode Width() { return getToken(SCSSParser.Width, 0); }
		public OutlineOptionsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_outlineOptions; }
	}

	public final OutlineOptionsContext outlineOptions() throws RecognitionException {
		OutlineOptionsContext _localctx = new OutlineOptionsContext(_ctx, getState());
		enterRule(_localctx, 118, RULE_outlineOptions);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(988);
			match(Minus);
			setState(989);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 213305255788544L) != 0) || _la==Offset) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class OverflowOptionsContext extends ParserRuleContext {
		public TerminalNode Minus() { return getToken(SCSSParser.Minus, 0); }
		public TerminalNode Style() { return getToken(SCSSParser.Style, 0); }
		public TerminalNode X() { return getToken(SCSSParser.X, 0); }
		public TerminalNode Y() { return getToken(SCSSParser.Y, 0); }
		public OverflowOptionsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_overflowOptions; }
	}

	public final OverflowOptionsContext overflowOptions() throws RecognitionException {
		OverflowOptionsContext _localctx = new OverflowOptionsContext(_ctx, getState());
		enterRule(_localctx, 120, RULE_overflowOptions);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(991);
			match(Minus);
			setState(992);
			_la = _input.LA(1);
			if ( !(_la==Style || _la==X || _la==Y) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class PaddingOptionsContext extends ParserRuleContext {
		public TerminalNode Minus() { return getToken(SCSSParser.Minus, 0); }
		public TerminalNode Left() { return getToken(SCSSParser.Left, 0); }
		public TerminalNode Top() { return getToken(SCSSParser.Top, 0); }
		public TerminalNode Right() { return getToken(SCSSParser.Right, 0); }
		public TerminalNode Bottom() { return getToken(SCSSParser.Bottom, 0); }
		public PaddingOptionsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_paddingOptions; }
	}

	public final PaddingOptionsContext paddingOptions() throws RecognitionException {
		PaddingOptionsContext _localctx = new PaddingOptionsContext(_ctx, getState());
		enterRule(_localctx, 122, RULE_paddingOptions);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(994);
			match(Minus);
			setState(995);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 65970697666560L) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class PageOptionsContext extends ParserRuleContext {
		public TerminalNode Minus() { return getToken(SCSSParser.Minus, 0); }
		public TerminalNode Policy() { return getToken(SCSSParser.Policy, 0); }
		public PageBreakOptionsContext pageBreakOptions() {
			return getRuleContext(PageBreakOptionsContext.class,0);
		}
		public PageOptionsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_pageOptions; }
	}

	public final PageOptionsContext pageOptions() throws RecognitionException {
		PageOptionsContext _localctx = new PageOptionsContext(_ctx, getState());
		enterRule(_localctx, 124, RULE_pageOptions);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(997);
			match(Minus);
			setState(1000);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Policy:
				{
				setState(998);
				match(Policy);
				}
				break;
			case Minus:
				{
				setState(999);
				pageBreakOptions();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class PageBreakOptionsContext extends ParserRuleContext {
		public TerminalNode Minus() { return getToken(SCSSParser.Minus, 0); }
		public TerminalNode After() { return getToken(SCSSParser.After, 0); }
		public TerminalNode Before() { return getToken(SCSSParser.Before, 0); }
		public TerminalNode Inside() { return getToken(SCSSParser.Inside, 0); }
		public PageBreakOptionsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_pageBreakOptions; }
	}

	public final PageBreakOptionsContext pageBreakOptions() throws RecognitionException {
		PageBreakOptionsContext _localctx = new PageBreakOptionsContext(_ctx, getState());
		enterRule(_localctx, 126, RULE_pageBreakOptions);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1002);
			match(Minus);
			setState(1003);
			_la = _input.LA(1);
			if ( !(((((_la - 53)) & ~0x3f) == 0 && ((1L << (_la - 53)) & 16777219L) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class PauseOptionsContext extends ParserRuleContext {
		public TerminalNode Minus() { return getToken(SCSSParser.Minus, 0); }
		public TerminalNode After() { return getToken(SCSSParser.After, 0); }
		public TerminalNode Before() { return getToken(SCSSParser.Before, 0); }
		public PauseOptionsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_pauseOptions; }
	}

	public final PauseOptionsContext pauseOptions() throws RecognitionException {
		PauseOptionsContext _localctx = new PauseOptionsContext(_ctx, getState());
		enterRule(_localctx, 128, RULE_pauseOptions);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1005);
			match(Minus);
			setState(1006);
			_la = _input.LA(1);
			if ( !(_la==After || _la==Before) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class RestOptionsContext extends ParserRuleContext {
		public TerminalNode Minus() { return getToken(SCSSParser.Minus, 0); }
		public TerminalNode After() { return getToken(SCSSParser.After, 0); }
		public TerminalNode Before() { return getToken(SCSSParser.Before, 0); }
		public RestOptionsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_restOptions; }
	}

	public final RestOptionsContext restOptions() throws RecognitionException {
		RestOptionsContext _localctx = new RestOptionsContext(_ctx, getState());
		enterRule(_localctx, 130, RULE_restOptions);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1008);
			match(Minus);
			setState(1009);
			_la = _input.LA(1);
			if ( !(_la==After || _la==Before) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class RubyOptionsContext extends ParserRuleContext {
		public TerminalNode Minus() { return getToken(SCSSParser.Minus, 0); }
		public TerminalNode Align() { return getToken(SCSSParser.Align, 0); }
		public TerminalNode Overhang() { return getToken(SCSSParser.Overhang, 0); }
		public TerminalNode Position() { return getToken(SCSSParser.Position, 0); }
		public TerminalNode Span() { return getToken(SCSSParser.Span, 0); }
		public RubyOptionsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_rubyOptions; }
	}

	public final RubyOptionsContext rubyOptions() throws RecognitionException {
		RubyOptionsContext _localctx = new RubyOptionsContext(_ctx, getState());
		enterRule(_localctx, 132, RULE_rubyOptions);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1011);
			match(Minus);
			setState(1012);
			_la = _input.LA(1);
			if ( !(_la==Position || _la==Align || _la==Span || _la==Overhang) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class SpeakOptionsContext extends ParserRuleContext {
		public TerminalNode Minus() { return getToken(SCSSParser.Minus, 0); }
		public TerminalNode Header() { return getToken(SCSSParser.Header, 0); }
		public TerminalNode Numeral() { return getToken(SCSSParser.Numeral, 0); }
		public TerminalNode Punctuation() { return getToken(SCSSParser.Punctuation, 0); }
		public SpeakOptionsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_speakOptions; }
	}

	public final SpeakOptionsContext speakOptions() throws RecognitionException {
		SpeakOptionsContext _localctx = new SpeakOptionsContext(_ctx, getState());
		enterRule(_localctx, 134, RULE_speakOptions);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1014);
			match(Minus);
			setState(1015);
			_la = _input.LA(1);
			if ( !(((((_la - 88)) & ~0x3f) == 0 && ((1L << (_la - 88)) & 7L) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class TargetOptionsContext extends ParserRuleContext {
		public TerminalNode Minus() { return getToken(SCSSParser.Minus, 0); }
		public TerminalNode Name() { return getToken(SCSSParser.Name, 0); }
		public TerminalNode New() { return getToken(SCSSParser.New, 0); }
		public TerminalNode Position() { return getToken(SCSSParser.Position, 0); }
		public TargetOptionsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_targetOptions; }
	}

	public final TargetOptionsContext targetOptions() throws RecognitionException {
		TargetOptionsContext _localctx = new TargetOptionsContext(_ctx, getState());
		enterRule(_localctx, 136, RULE_targetOptions);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1017);
			match(Minus);
			setState(1018);
			_la = _input.LA(1);
			if ( !(_la==Position || _la==Name || _la==New) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class TextOptionsContext extends ParserRuleContext {
		public TerminalNode Minus() { return getToken(SCSSParser.Minus, 0); }
		public TerminalNode Align() { return getToken(SCSSParser.Align, 0); }
		public TerminalNode Decoration() { return getToken(SCSSParser.Decoration, 0); }
		public TerminalNode Height() { return getToken(SCSSParser.Height, 0); }
		public TerminalNode Indent() { return getToken(SCSSParser.Indent, 0); }
		public TerminalNode Justify() { return getToken(SCSSParser.Justify, 0); }
		public TerminalNode Outline() { return getToken(SCSSParser.Outline, 0); }
		public TerminalNode Overflow() { return getToken(SCSSParser.Overflow, 0); }
		public TerminalNode Shadow() { return getToken(SCSSParser.Shadow, 0); }
		public TerminalNode Transform() { return getToken(SCSSParser.Transform, 0); }
		public TextOptionsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_textOptions; }
	}

	public final TextOptionsContext textOptions() throws RecognitionException {
		TextOptionsContext _localctx = new TextOptionsContext(_ctx, getState());
		enterRule(_localctx, 138, RULE_textOptions);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1020);
			match(Minus);
			setState(1021);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 36029898678075392L) != 0) || ((((_la - 97)) & ~0x3f) == 0 && ((1L << (_la - 97)) & -9223372036854775793L) != 0) || _la==Justify) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class TransformOptionsContext extends ParserRuleContext {
		public TerminalNode Minus() { return getToken(SCSSParser.Minus, 0); }
		public TerminalNode Origin() { return getToken(SCSSParser.Origin, 0); }
		public TerminalNode Style() { return getToken(SCSSParser.Style, 0); }
		public TransformOptionsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_transformOptions; }
	}

	public final TransformOptionsContext transformOptions() throws RecognitionException {
		TransformOptionsContext _localctx = new TransformOptionsContext(_ctx, getState());
		enterRule(_localctx, 140, RULE_transformOptions);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1023);
			match(Minus);
			setState(1024);
			_la = _input.LA(1);
			if ( !(_la==Style || _la==Origin) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class TransitionOptionsContext extends ParserRuleContext {
		public List<TerminalNode> Minus() { return getTokens(SCSSParser.Minus); }
		public TerminalNode Minus(int i) {
			return getToken(SCSSParser.Minus, i);
		}
		public TerminalNode Delay() { return getToken(SCSSParser.Delay, 0); }
		public TerminalNode Duration() { return getToken(SCSSParser.Duration, 0); }
		public TerminalNode Property() { return getToken(SCSSParser.Property, 0); }
		public TerminalNode Timing() { return getToken(SCSSParser.Timing, 0); }
		public TerminalNode Function() { return getToken(SCSSParser.Function, 0); }
		public TransitionOptionsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_transitionOptions; }
	}

	public final TransitionOptionsContext transitionOptions() throws RecognitionException {
		TransitionOptionsContext _localctx = new TransitionOptionsContext(_ctx, getState());
		enterRule(_localctx, 142, RULE_transitionOptions);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1026);
			match(Minus);
			setState(1033);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Delay:
				{
				setState(1027);
				match(Delay);
				}
				break;
			case Duration:
				{
				setState(1028);
				match(Duration);
				}
				break;
			case Property:
				{
				setState(1029);
				match(Property);
				}
				break;
			case Timing:
				{
				setState(1030);
				match(Timing);
				setState(1031);
				match(Minus);
				setState(1032);
				match(Function);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class VoiceOptionsContext extends ParserRuleContext {
		public TerminalNode Minus() { return getToken(SCSSParser.Minus, 0); }
		public TerminalNode Family() { return getToken(SCSSParser.Family, 0); }
		public TerminalNode Balance() { return getToken(SCSSParser.Balance, 0); }
		public TerminalNode Duration() { return getToken(SCSSParser.Duration, 0); }
		public TerminalNode Pitch() { return getToken(SCSSParser.Pitch, 0); }
		public TerminalNode Rate() { return getToken(SCSSParser.Rate, 0); }
		public TerminalNode Stress() { return getToken(SCSSParser.Stress, 0); }
		public TerminalNode Volume() { return getToken(SCSSParser.Volume, 0); }
		public VoicePitchOptionsContext voicePitchOptions() {
			return getRuleContext(VoicePitchOptionsContext.class,0);
		}
		public VoiceOptionsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_voiceOptions; }
	}

	public final VoiceOptionsContext voiceOptions() throws RecognitionException {
		VoiceOptionsContext _localctx = new VoiceOptionsContext(_ctx, getState());
		enterRule(_localctx, 144, RULE_voiceOptions);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1035);
			match(Minus);
			setState(1046);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Family:
				{
				setState(1036);
				match(Family);
				}
				break;
			case Balance:
				{
				setState(1037);
				match(Balance);
				}
				break;
			case Duration:
				{
				setState(1038);
				match(Duration);
				}
				break;
			case Pitch:
				{
				setState(1039);
				match(Pitch);
				setState(1041);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Minus) {
					{
					setState(1040);
					voicePitchOptions();
					}
				}

				}
				break;
			case Rate:
				{
				setState(1043);
				match(Rate);
				}
				break;
			case Stress:
				{
				setState(1044);
				match(Stress);
				}
				break;
			case Volume:
				{
				setState(1045);
				match(Volume);
				}
				break;
			case Colon:
			case WhiteSpace:
				break;
			default:
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class VoicePitchOptionsContext extends ParserRuleContext {
		public TerminalNode Minus() { return getToken(SCSSParser.Minus, 0); }
		public TerminalNode Range() { return getToken(SCSSParser.Range, 0); }
		public VoicePitchOptionsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_voicePitchOptions; }
	}

	public final VoicePitchOptionsContext voicePitchOptions() throws RecognitionException {
		VoicePitchOptionsContext _localctx = new VoicePitchOptionsContext(_ctx, getState());
		enterRule(_localctx, 146, RULE_voicePitchOptions);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1048);
			match(Minus);
			setState(1049);
			match(Range);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class WordOptionsContext extends ParserRuleContext {
		public TerminalNode Minus() { return getToken(SCSSParser.Minus, 0); }
		public TerminalNode Spacing() { return getToken(SCSSParser.Spacing, 0); }
		public TerminalNode Break() { return getToken(SCSSParser.Break, 0); }
		public TerminalNode Wrap() { return getToken(SCSSParser.Wrap, 0); }
		public WordOptionsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_wordOptions; }
	}

	public final WordOptionsContext wordOptions() throws RecognitionException {
		WordOptionsContext _localctx = new WordOptionsContext(_ctx, getState());
		enterRule(_localctx, 148, RULE_wordOptions);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1051);
			match(Minus);
			setState(1053);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Break || _la==Spacing || _la==Wrap) {
				{
				setState(1052);
				_la = _input.LA(1);
				if ( !(_la==Break || _la==Spacing || _la==Wrap) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static final String _serializedATN =
		"\u0004\u0001\u014d\u0420\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001"+
		"\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004"+
		"\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007"+
		"\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b\u0007\u000b"+
		"\u0002\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e\u0002\u000f\u0007"+
		"\u000f\u0002\u0010\u0007\u0010\u0002\u0011\u0007\u0011\u0002\u0012\u0007"+
		"\u0012\u0002\u0013\u0007\u0013\u0002\u0014\u0007\u0014\u0002\u0015\u0007"+
		"\u0015\u0002\u0016\u0007\u0016\u0002\u0017\u0007\u0017\u0002\u0018\u0007"+
		"\u0018\u0002\u0019\u0007\u0019\u0002\u001a\u0007\u001a\u0002\u001b\u0007"+
		"\u001b\u0002\u001c\u0007\u001c\u0002\u001d\u0007\u001d\u0002\u001e\u0007"+
		"\u001e\u0002\u001f\u0007\u001f\u0002 \u0007 \u0002!\u0007!\u0002\"\u0007"+
		"\"\u0002#\u0007#\u0002$\u0007$\u0002%\u0007%\u0002&\u0007&\u0002\'\u0007"+
		"\'\u0002(\u0007(\u0002)\u0007)\u0002*\u0007*\u0002+\u0007+\u0002,\u0007"+
		",\u0002-\u0007-\u0002.\u0007.\u0002/\u0007/\u00020\u00070\u00021\u0007"+
		"1\u00022\u00072\u00023\u00073\u00024\u00074\u00025\u00075\u00026\u0007"+
		"6\u00027\u00077\u00028\u00078\u00029\u00079\u0002:\u0007:\u0002;\u0007"+
		";\u0002<\u0007<\u0002=\u0007=\u0002>\u0007>\u0002?\u0007?\u0002@\u0007"+
		"@\u0002A\u0007A\u0002B\u0007B\u0002C\u0007C\u0002D\u0007D\u0002E\u0007"+
		"E\u0002F\u0007F\u0002G\u0007G\u0002H\u0007H\u0002I\u0007I\u0002J\u0007"+
		"J\u0001\u0000\u0005\u0000\u0098\b\u0000\n\u0000\f\u0000\u009b\t\u0000"+
		"\u0001\u0000\u0001\u0000\u0001\u0001\u0005\u0001\u00a0\b\u0001\n\u0001"+
		"\f\u0001\u00a3\t\u0001\u0001\u0001\u0001\u0001\u0005\u0001\u00a7\b\u0001"+
		"\n\u0001\f\u0001\u00aa\t\u0001\u0001\u0001\u0001\u0001\u0003\u0001\u00ae"+
		"\b\u0001\u0001\u0001\u0001\u0001\u0003\u0001\u00b2\b\u0001\u0001\u0001"+
		"\u0003\u0001\u00b5\b\u0001\u0001\u0001\u0001\u0001\u0003\u0001\u00b9\b"+
		"\u0001\u0005\u0001\u00bb\b\u0001\n\u0001\f\u0001\u00be\t\u0001\u0001\u0001"+
		"\u0005\u0001\u00c1\b\u0001\n\u0001\f\u0001\u00c4\t\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0002\u0005\u0002\u00c9\b\u0002\n\u0002\f\u0002\u00cc\t\u0002"+
		"\u0001\u0002\u0001\u0002\u0005\u0002\u00d0\b\u0002\n\u0002\f\u0002\u00d3"+
		"\t\u0002\u0001\u0002\u0001\u0002\u0003\u0002\u00d7\b\u0002\u0001\u0002"+
		"\u0001\u0002\u0003\u0002\u00db\b\u0002\u0001\u0002\u0003\u0002\u00de\b"+
		"\u0002\u0001\u0002\u0001\u0002\u0003\u0002\u00e2\b\u0002\u0005\u0002\u00e4"+
		"\b\u0002\n\u0002\f\u0002\u00e7\t\u0002\u0001\u0002\u0005\u0002\u00ea\b"+
		"\u0002\n\u0002\f\u0002\u00ed\t\u0002\u0001\u0002\u0001\u0002\u0001\u0003"+
		"\u0001\u0003\u0001\u0003\u0004\u0003\u00f4\b\u0003\u000b\u0003\f\u0003"+
		"\u00f5\u0001\u0003\u0001\u0003\u0005\u0003\u00fa\b\u0003\n\u0003\f\u0003"+
		"\u00fd\t\u0003\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004"+
		"\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004"+
		"\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004"+
		"\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004"+
		"\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004"+
		"\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004"+
		"\u0003\u0004\u0122\b\u0004\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005"+
		"\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005"+
		"\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005"+
		"\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005"+
		"\u0003\u0005\u013a\b\u0005\u0001\u0006\u0001\u0006\u0001\u0007\u0001\u0007"+
		"\u0001\u0007\u0001\b\u0001\b\u0001\b\u0001\t\u0001\t\u0001\n\u0004\n\u0147"+
		"\b\n\u000b\n\f\n\u0148\u0001\u000b\u0001\u000b\u0005\u000b\u014d\b\u000b"+
		"\n\u000b\f\u000b\u0150\t\u000b\u0001\u000b\u0001\u000b\u0005\u000b\u0154"+
		"\b\u000b\n\u000b\f\u000b\u0157\t\u000b\u0001\u000b\u0001\u000b\u0005\u000b"+
		"\u015b\b\u000b\n\u000b\f\u000b\u015e\t\u000b\u0001\u000b\u0001\u000b\u0001"+
		"\f\u0001\f\u0001\r\u0001\r\u0001\r\u0001\r\u0003\r\u0168\b\r\u0001\u000e"+
		"\u0001\u000e\u0001\u000e\u0001\u000e\u0001\u000e\u0001\u000e\u0001\u000e"+
		"\u0001\u000e\u0001\u000e\u0001\u000e\u0001\u000e\u0001\u000e\u0001\u000e"+
		"\u0001\u000e\u0001\u000e\u0001\u000e\u0001\u000e\u0001\u000e\u0001\u000e"+
		"\u0001\u000e\u0001\u000e\u0001\u000e\u0001\u000e\u0001\u000e\u0001\u000e"+
		"\u0001\u000e\u0001\u000e\u0001\u000e\u0001\u000e\u0001\u000e\u0001\u000e"+
		"\u0001\u000e\u0001\u000e\u0001\u000e\u0001\u000e\u0001\u000e\u0001\u000e"+
		"\u0001\u000e\u0001\u000e\u0001\u000e\u0001\u000e\u0001\u000e\u0001\u000e"+
		"\u0001\u000e\u0001\u000e\u0001\u000e\u0001\u000e\u0001\u000e\u0001\u000e"+
		"\u0001\u000e\u0001\u000e\u0001\u000e\u0001\u000e\u0001\u000e\u0001\u000e"+
		"\u0001\u000e\u0001\u000e\u0001\u000e\u0001\u000e\u0001\u000e\u0001\u000e"+
		"\u0001\u000e\u0001\u000e\u0001\u000e\u0003\u000e\u01aa\b\u000e\u0001\u000f"+
		"\u0001\u000f\u0001\u000f\u0001\u000f\u0001\u000f\u0001\u000f\u0001\u000f"+
		"\u0001\u000f\u0001\u000f\u0001\u000f\u0001\u000f\u0001\u000f\u0001\u000f"+
		"\u0001\u000f\u0001\u000f\u0001\u000f\u0001\u000f\u0001\u000f\u0001\u000f"+
		"\u0001\u000f\u0001\u000f\u0001\u000f\u0001\u000f\u0001\u000f\u0001\u000f"+
		"\u0001\u000f\u0001\u000f\u0001\u000f\u0001\u000f\u0001\u000f\u0001\u000f"+
		"\u0001\u000f\u0001\u000f\u0001\u000f\u0001\u000f\u0001\u000f\u0001\u000f"+
		"\u0001\u000f\u0001\u000f\u0001\u000f\u0001\u000f\u0001\u000f\u0001\u000f"+
		"\u0001\u000f\u0001\u000f\u0001\u000f\u0001\u000f\u0001\u000f\u0003\u000f"+
		"\u01dc\b\u000f\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0010"+
		"\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0010"+
		"\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0010"+
		"\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0010"+
		"\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0010"+
		"\u0001\u0010\u0001\u0010\u0001\u0010\u0003\u0010\u01fe\b\u0010\u0001\u0011"+
		"\u0001\u0011\u0001\u0011\u0001\u0011\u0001\u0011\u0001\u0011\u0001\u0011"+
		"\u0001\u0011\u0003\u0011\u0208\b\u0011\u0001\u0012\u0001\u0012\u0001\u0013"+
		"\u0001\u0013\u0001\u0013\u0001\u0014\u0001\u0014\u0001\u0014\u0001\u0015"+
		"\u0001\u0015\u0001\u0015\u0001\u0016\u0001\u0016\u0001\u0016\u0001\u0017"+
		"\u0001\u0017\u0001\u0017\u0001\u0018\u0001\u0018\u0001\u0018\u0001\u0019"+
		"\u0001\u0019\u0001\u0019\u0001\u001a\u0001\u001a\u0001\u001a\u0001\u001b"+
		"\u0001\u001b\u0001\u001b\u0001\u001b\u0001\u001b\u0001\u001b\u0001\u001b"+
		"\u0001\u001b\u0001\u001b\u0001\u001b\u0001\u001b\u0001\u001b\u0001\u001b"+
		"\u0001\u001b\u0001\u001b\u0001\u001b\u0001\u001b\u0001\u001b\u0001\u001b"+
		"\u0001\u001b\u0001\u001b\u0001\u001b\u0001\u001b\u0001\u001b\u0001\u001b"+
		"\u0001\u001b\u0001\u001b\u0001\u001b\u0001\u001b\u0001\u001b\u0001\u001b"+
		"\u0001\u001b\u0001\u001b\u0001\u001b\u0001\u001b\u0001\u001b\u0001\u001b"+
		"\u0001\u001b\u0001\u001b\u0001\u001b\u0001\u001b\u0001\u001b\u0001\u001b"+
		"\u0001\u001b\u0001\u001b\u0001\u001b\u0001\u001b\u0001\u001b\u0001\u001b"+
		"\u0001\u001b\u0001\u001b\u0001\u001b\u0001\u001b\u0001\u001b\u0001\u001b"+
		"\u0001\u001b\u0001\u001b\u0001\u001b\u0001\u001b\u0001\u001b\u0001\u001b"+
		"\u0001\u001b\u0001\u001b\u0001\u001b\u0001\u001b\u0001\u001b\u0001\u001b"+
		"\u0001\u001b\u0001\u001b\u0001\u001b\u0001\u001b\u0001\u001b\u0001\u001b"+
		"\u0001\u001b\u0001\u001b\u0001\u001b\u0001\u001b\u0001\u001b\u0001\u001b"+
		"\u0001\u001b\u0001\u001b\u0001\u001b\u0001\u001b\u0001\u001b\u0001\u001b"+
		"\u0001\u001b\u0001\u001b\u0001\u001b\u0001\u001b\u0001\u001b\u0003\u001b"+
		"\u027e\b\u001b\u0001\u001b\u0001\u001b\u0003\u001b\u0282\b\u001b\u0001"+
		"\u001b\u0001\u001b\u0003\u001b\u0286\b\u001b\u0001\u001b\u0001\u001b\u0003"+
		"\u001b\u028a\b\u001b\u0001\u001b\u0001\u001b\u0003\u001b\u028e\b\u001b"+
		"\u0001\u001b\u0001\u001b\u0003\u001b\u0292\b\u001b\u0001\u001b\u0001\u001b"+
		"\u0003\u001b\u0296\b\u001b\u0001\u001b\u0001\u001b\u0003\u001b\u029a\b"+
		"\u001b\u0001\u001b\u0001\u001b\u0003\u001b\u029e\b\u001b\u0001\u001b\u0001"+
		"\u001b\u0003\u001b\u02a2\b\u001b\u0001\u001b\u0001\u001b\u0003\u001b\u02a6"+
		"\b\u001b\u0001\u001b\u0001\u001b\u0003\u001b\u02aa\b\u001b\u0001\u001b"+
		"\u0001\u001b\u0003\u001b\u02ae\b\u001b\u0001\u001b\u0001\u001b\u0003\u001b"+
		"\u02b2\b\u001b\u0001\u001b\u0001\u001b\u0003\u001b\u02b6\b\u001b\u0001"+
		"\u001b\u0001\u001b\u0003\u001b\u02ba\b\u001b\u0001\u001b\u0001\u001b\u0003"+
		"\u001b\u02be\b\u001b\u0001\u001b\u0001\u001b\u0003\u001b\u02c2\b\u001b"+
		"\u0001\u001b\u0001\u001b\u0003\u001b\u02c6\b\u001b\u0001\u001b\u0001\u001b"+
		"\u0003\u001b\u02ca\b\u001b\u0001\u001b\u0001\u001b\u0003\u001b\u02ce\b"+
		"\u001b\u0001\u001b\u0001\u001b\u0003\u001b\u02d2\b\u001b\u0001\u001b\u0001"+
		"\u001b\u0003\u001b\u02d6\b\u001b\u0001\u001b\u0001\u001b\u0003\u001b\u02da"+
		"\b\u001b\u0001\u001b\u0001\u001b\u0003\u001b\u02de\b\u001b\u0001\u001b"+
		"\u0001\u001b\u0003\u001b\u02e2\b\u001b\u0001\u001b\u0001\u001b\u0003\u001b"+
		"\u02e6\b\u001b\u0001\u001b\u0001\u001b\u0003\u001b\u02ea\b\u001b\u0001"+
		"\u001b\u0001\u001b\u0003\u001b\u02ee\b\u001b\u0001\u001b\u0001\u001b\u0003"+
		"\u001b\u02f2\b\u001b\u0001\u001b\u0001\u001b\u0003\u001b\u02f6\b\u001b"+
		"\u0001\u001b\u0001\u001b\u0003\u001b\u02fa\b\u001b\u0001\u001b\u0001\u001b"+
		"\u0003\u001b\u02fe\b\u001b\u0001\u001b\u0001\u001b\u0003\u001b\u0302\b"+
		"\u001b\u0001\u001b\u0001\u001b\u0003\u001b\u0306\b\u001b\u0001\u001b\u0001"+
		"\u001b\u0003\u001b\u030a\b\u001b\u0001\u001b\u0001\u001b\u0003\u001b\u030e"+
		"\b\u001b\u0001\u001b\u0001\u001b\u0003\u001b\u0312\b\u001b\u0001\u001b"+
		"\u0001\u001b\u0003\u001b\u0316\b\u001b\u0001\u001b\u0001\u001b\u0003\u001b"+
		"\u031a\b\u001b\u0003\u001b\u031c\b\u001b\u0001\u001c\u0001\u001c\u0001"+
		"\u001c\u0001\u001d\u0001\u001d\u0001\u001d\u0001\u001e\u0001\u001e\u0001"+
		"\u001e\u0001\u001e\u0001\u001e\u0001\u001e\u0001\u001e\u0001\u001e\u0001"+
		"\u001e\u0001\u001e\u0001\u001e\u0001\u001e\u0001\u001e\u0001\u001e\u0003"+
		"\u001e\u0332\b\u001e\u0001\u001f\u0001\u001f\u0001\u001f\u0001 \u0001"+
		" \u0001 \u0001 \u0001 \u0001 \u0001 \u0001 \u0001 \u0001 \u0001 \u0001"+
		" \u0001 \u0001 \u0001 \u0001 \u0001 \u0003 \u0348\b \u0001!\u0001!\u0001"+
		"!\u0001!\u0001!\u0001!\u0001!\u0001!\u0001!\u0001!\u0003!\u0354\b!\u0001"+
		"\"\u0001\"\u0003\"\u0358\b\"\u0001#\u0001#\u0003#\u035c\b#\u0001$\u0001"+
		"$\u0001$\u0001$\u0001$\u0001$\u0001$\u0001$\u0001$\u0003$\u0367\b$\u0001"+
		"$\u0001$\u0001$\u0001$\u0001$\u0001$\u0001$\u0001$\u0003$\u0371\b$\u0001"+
		"%\u0001%\u0001%\u0001&\u0001&\u0001&\u0001\'\u0001\'\u0001\'\u0001\'\u0001"+
		"\'\u0001\'\u0001\'\u0003\'\u0380\b\'\u0001(\u0001(\u0001(\u0001)\u0001"+
		")\u0001)\u0001*\u0001*\u0001*\u0001+\u0001+\u0001+\u0001,\u0001,\u0001"+
		",\u0001-\u0001-\u0001-\u0001.\u0001.\u0001.\u0001/\u0001/\u0001/\u0001"+
		"0\u00010\u00010\u00010\u00010\u00011\u00011\u00011\u00012\u00012\u0001"+
		"2\u00013\u00013\u00013\u00013\u00013\u00013\u00013\u00033\u03ac\b3\u0001"+
		"4\u00014\u00014\u00014\u00034\u03b2\b4\u00014\u00014\u00014\u00014\u0001"+
		"4\u00014\u00014\u00014\u00014\u00034\u03bd\b4\u00015\u00015\u00015\u0001"+
		"6\u00016\u00016\u00017\u00017\u00017\u00017\u00017\u00017\u00037\u03cb"+
		"\b7\u00018\u00018\u00018\u00018\u00018\u00018\u00018\u00018\u00038\u03d5"+
		"\b8\u00019\u00019\u00019\u0001:\u0001:\u0001:\u0001;\u0001;\u0001;\u0001"+
		"<\u0001<\u0001<\u0001=\u0001=\u0001=\u0001>\u0001>\u0001>\u0003>\u03e9"+
		"\b>\u0001?\u0001?\u0001?\u0001@\u0001@\u0001@\u0001A\u0001A\u0001A\u0001"+
		"B\u0001B\u0001B\u0001C\u0001C\u0001C\u0001D\u0001D\u0001D\u0001E\u0001"+
		"E\u0001E\u0001F\u0001F\u0001F\u0001G\u0001G\u0001G\u0001G\u0001G\u0001"+
		"G\u0001G\u0003G\u040a\bG\u0001H\u0001H\u0001H\u0001H\u0001H\u0001H\u0003"+
		"H\u0412\bH\u0001H\u0001H\u0001H\u0003H\u0417\bH\u0001I\u0001I\u0001I\u0001"+
		"J\u0001J\u0003J\u041e\bJ\u0001J\u0000\u0000K\u0000\u0002\u0004\u0006\b"+
		"\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e \"$&(*,.02"+
		"468:<>@BDFHJLNPRTVXZ\\^`bdfhjlnprtvxz|~\u0080\u0082\u0084\u0086\u0088"+
		"\u008a\u008c\u008e\u0090\u0092\u0094\u0000\u001c\r\u0000\u0007\u0007\u001d"+
		"\u001d//;;XX__\u0084\u0084\u0088\u0088\u0090\u0090\u0099\u0099\u00a7\u00a7"+
		"\u00c3\u00c3\u00df\u014d\u0002\u0000\u0010\u0011\u0016\u0017\u0006\u0000"+
		"..2488@@KK\u0097\u0097\u0002\u0000uu\u0093\u0093\u0002\u0000\u0092\u0092"+
		"\u0099\u009a\u0002\u0000))./\u0003\u0000))88\u00c1\u00c3\u0002\u0000p"+
		"p\u00a2\u00a2\u0002\u0000>>AA\u0001\u000056\u0004\u0000//JLNN\u00cf\u00cf"+
		"\u0002\u0000yy\u00aa\u00aa\u0003\u000056\u009d\u009d\u00ab\u00ac\u0002"+
		"\u0000\u0005\u0005\u00ad\u00ad\u0002\u000034QQ\u0001\u0000*-\u0002\u0000"+
		"()\u00cb\u00cb\u0004\u0000**,,pp\u00b0\u00b1\u0002\u0000aa\u0093\u0093"+
		"\u0003\u0000))./\u00a8\u00a8\u0002\u0000//\u00b2\u00b3\u0002\u000056M"+
		"M\u0004\u000044aa\u00a7\u00a7\u00b8\u00b8\u0001\u0000XZ\u0003\u000044"+
		"\u0096\u0096\u00ba\u00ba\u0006\u0000\u001f\u001f((77ad\u00a0\u00a0\u00bb"+
		"\u00bb\u0002\u0000//\u0097\u0097\u0003\u0000$$::\u00bc\u00bc\u04e4\u0000"+
		"\u0099\u0001\u0000\u0000\u0000\u0002\u00a1\u0001\u0000\u0000\u0000\u0004"+
		"\u00ca\u0001\u0000\u0000\u0000\u0006\u00f3\u0001\u0000\u0000\u0000\b\u0121"+
		"\u0001\u0000\u0000\u0000\n\u0139\u0001\u0000\u0000\u0000\f\u013b\u0001"+
		"\u0000\u0000\u0000\u000e\u013d\u0001\u0000\u0000\u0000\u0010\u0140\u0001"+
		"\u0000\u0000\u0000\u0012\u0143\u0001\u0000\u0000\u0000\u0014\u0146\u0001"+
		"\u0000\u0000\u0000\u0016\u014a\u0001\u0000\u0000\u0000\u0018\u0161\u0001"+
		"\u0000\u0000\u0000\u001a\u0167\u0001\u0000\u0000\u0000\u001c\u01a9\u0001"+
		"\u0000\u0000\u0000\u001e\u01db\u0001\u0000\u0000\u0000 \u01fd\u0001\u0000"+
		"\u0000\u0000\"\u0207\u0001\u0000\u0000\u0000$\u0209\u0001\u0000\u0000"+
		"\u0000&\u020b\u0001\u0000\u0000\u0000(\u020e\u0001\u0000\u0000\u0000*"+
		"\u0211\u0001\u0000\u0000\u0000,\u0214\u0001\u0000\u0000\u0000.\u0217\u0001"+
		"\u0000\u0000\u00000\u021a\u0001\u0000\u0000\u00002\u021d\u0001\u0000\u0000"+
		"\u00004\u0220\u0001\u0000\u0000\u00006\u031b\u0001\u0000\u0000\u00008"+
		"\u031d\u0001\u0000\u0000\u0000:\u0320\u0001\u0000\u0000\u0000<\u0323\u0001"+
		"\u0000\u0000\u0000>\u0333\u0001\u0000\u0000\u0000@\u0336\u0001\u0000\u0000"+
		"\u0000B\u0349\u0001\u0000\u0000\u0000D\u0355\u0001\u0000\u0000\u0000F"+
		"\u0359\u0001\u0000\u0000\u0000H\u035d\u0001\u0000\u0000\u0000J\u0372\u0001"+
		"\u0000\u0000\u0000L\u0375\u0001\u0000\u0000\u0000N\u0378\u0001\u0000\u0000"+
		"\u0000P\u0381\u0001\u0000\u0000\u0000R\u0384\u0001\u0000\u0000\u0000T"+
		"\u0387\u0001\u0000\u0000\u0000V\u038a\u0001\u0000\u0000\u0000X\u038d\u0001"+
		"\u0000\u0000\u0000Z\u0390\u0001\u0000\u0000\u0000\\\u0393\u0001\u0000"+
		"\u0000\u0000^\u0396\u0001\u0000\u0000\u0000`\u0399\u0001\u0000\u0000\u0000"+
		"b\u039e\u0001\u0000\u0000\u0000d\u03a1\u0001\u0000\u0000\u0000f\u03a4"+
		"\u0001\u0000\u0000\u0000h\u03ad\u0001\u0000\u0000\u0000j\u03be\u0001\u0000"+
		"\u0000\u0000l\u03c1\u0001\u0000\u0000\u0000n\u03c4\u0001\u0000\u0000\u0000"+
		"p\u03cc\u0001\u0000\u0000\u0000r\u03d6\u0001\u0000\u0000\u0000t\u03d9"+
		"\u0001\u0000\u0000\u0000v\u03dc\u0001\u0000\u0000\u0000x\u03df\u0001\u0000"+
		"\u0000\u0000z\u03e2\u0001\u0000\u0000\u0000|\u03e5\u0001\u0000\u0000\u0000"+
		"~\u03ea\u0001\u0000\u0000\u0000\u0080\u03ed\u0001\u0000\u0000\u0000\u0082"+
		"\u03f0\u0001\u0000\u0000\u0000\u0084\u03f3\u0001\u0000\u0000\u0000\u0086"+
		"\u03f6\u0001\u0000\u0000\u0000\u0088\u03f9\u0001\u0000\u0000\u0000\u008a"+
		"\u03fc\u0001\u0000\u0000\u0000\u008c\u03ff\u0001\u0000\u0000\u0000\u008e"+
		"\u0402\u0001\u0000\u0000\u0000\u0090\u040b\u0001\u0000\u0000\u0000\u0092"+
		"\u0418\u0001\u0000\u0000\u0000\u0094\u041b\u0001\u0000\u0000\u0000\u0096"+
		"\u0098\u0003\u0002\u0001\u0000\u0097\u0096\u0001\u0000\u0000\u0000\u0098"+
		"\u009b\u0001\u0000\u0000\u0000\u0099\u0097\u0001\u0000\u0000\u0000\u0099"+
		"\u009a\u0001\u0000\u0000\u0000\u009a\u009c\u0001\u0000\u0000\u0000\u009b"+
		"\u0099\u0001\u0000\u0000\u0000\u009c\u009d\u0005\u0000\u0000\u0001\u009d"+
		"\u0001\u0001\u0000\u0000\u0000\u009e\u00a0\u0005\u0018\u0000\u0000\u009f"+
		"\u009e\u0001\u0000\u0000\u0000\u00a0\u00a3\u0001\u0000\u0000\u0000\u00a1"+
		"\u009f\u0001\u0000\u0000\u0000\u00a1\u00a2\u0001\u0000\u0000\u0000\u00a2"+
		"\u00a4\u0001\u0000\u0000\u0000\u00a3\u00a1\u0001\u0000\u0000\u0000\u00a4"+
		"\u00a8\u0003\u0006\u0003\u0000\u00a5\u00a7\u0005\u0018\u0000\u0000\u00a6"+
		"\u00a5\u0001\u0000\u0000\u0000\u00a7\u00aa\u0001\u0000\u0000\u0000\u00a8"+
		"\u00a6\u0001\u0000\u0000\u0000\u00a8\u00a9\u0001\u0000\u0000\u0000\u00a9"+
		"\u00ab\u0001\u0000\u0000\u0000\u00aa\u00a8\u0001\u0000\u0000\u0000\u00ab"+
		"\u00bc\u0005\u000e\u0000\u0000\u00ac\u00ae\u0005\u0018\u0000\u0000\u00ad"+
		"\u00ac\u0001\u0000\u0000\u0000\u00ad\u00ae\u0001\u0000\u0000\u0000\u00ae"+
		"\u00af\u0001\u0000\u0000\u0000\u00af\u00b1\u0003\u0016\u000b\u0000\u00b0"+
		"\u00b2\u0005\u0018\u0000\u0000\u00b1\u00b0\u0001\u0000\u0000\u0000\u00b1"+
		"\u00b2\u0001\u0000\u0000\u0000\u00b2\u00bb\u0001\u0000\u0000\u0000\u00b3"+
		"\u00b5\u0005\u0018\u0000\u0000\u00b4\u00b3\u0001\u0000\u0000\u0000\u00b4"+
		"\u00b5\u0001\u0000\u0000\u0000\u00b5\u00b6\u0001\u0000\u0000\u0000\u00b6"+
		"\u00b8\u0003\u0004\u0002\u0000\u00b7\u00b9\u0005\u0018\u0000\u0000\u00b8"+
		"\u00b7\u0001\u0000\u0000\u0000\u00b8\u00b9\u0001\u0000\u0000\u0000\u00b9"+
		"\u00bb\u0001\u0000\u0000\u0000\u00ba\u00ad\u0001\u0000\u0000\u0000\u00ba"+
		"\u00b4\u0001\u0000\u0000\u0000\u00bb\u00be\u0001\u0000\u0000\u0000\u00bc"+
		"\u00ba\u0001\u0000\u0000\u0000\u00bc\u00bd\u0001\u0000\u0000\u0000\u00bd"+
		"\u00c2\u0001\u0000\u0000\u0000\u00be\u00bc\u0001\u0000\u0000\u0000\u00bf"+
		"\u00c1\u0005\u0018\u0000\u0000\u00c0\u00bf\u0001\u0000\u0000\u0000\u00c1"+
		"\u00c4\u0001\u0000\u0000\u0000\u00c2\u00c0\u0001\u0000\u0000\u0000\u00c2"+
		"\u00c3\u0001\u0000\u0000\u0000\u00c3\u00c5\u0001\u0000\u0000\u0000\u00c4"+
		"\u00c2\u0001\u0000\u0000\u0000\u00c5\u00c6\u0005\u000f\u0000\u0000\u00c6"+
		"\u0003\u0001\u0000\u0000\u0000\u00c7\u00c9\u0005\u0018\u0000\u0000\u00c8"+
		"\u00c7\u0001\u0000\u0000\u0000\u00c9\u00cc\u0001\u0000\u0000\u0000\u00ca"+
		"\u00c8\u0001\u0000\u0000\u0000\u00ca\u00cb\u0001\u0000\u0000\u0000\u00cb"+
		"\u00cd\u0001\u0000\u0000\u0000\u00cc\u00ca\u0001\u0000\u0000\u0000\u00cd"+
		"\u00d1\u0003\u0006\u0003\u0000\u00ce\u00d0\u0005\u0018\u0000\u0000\u00cf"+
		"\u00ce\u0001\u0000\u0000\u0000\u00d0\u00d3\u0001\u0000\u0000\u0000\u00d1"+
		"\u00cf\u0001\u0000\u0000\u0000\u00d1\u00d2\u0001\u0000\u0000\u0000\u00d2"+
		"\u00d4\u0001\u0000\u0000\u0000\u00d3\u00d1\u0001\u0000\u0000\u0000\u00d4"+
		"\u00e5\u0005\u000e\u0000\u0000\u00d5\u00d7\u0005\u0018\u0000\u0000\u00d6"+
		"\u00d5\u0001\u0000\u0000\u0000\u00d6\u00d7\u0001\u0000\u0000\u0000\u00d7"+
		"\u00d8\u0001\u0000\u0000\u0000\u00d8\u00da\u0003\u0016\u000b\u0000\u00d9"+
		"\u00db\u0005\u0018\u0000\u0000\u00da\u00d9\u0001\u0000\u0000\u0000\u00da"+
		"\u00db\u0001\u0000\u0000\u0000\u00db\u00e4\u0001\u0000\u0000\u0000\u00dc"+
		"\u00de\u0005\u0018\u0000\u0000\u00dd\u00dc\u0001\u0000\u0000\u0000\u00dd"+
		"\u00de\u0001\u0000\u0000\u0000\u00de\u00df\u0001\u0000\u0000\u0000\u00df"+
		"\u00e1\u0003\u0004\u0002\u0000\u00e0\u00e2\u0005\u0018\u0000\u0000\u00e1"+
		"\u00e0\u0001\u0000\u0000\u0000\u00e1\u00e2\u0001\u0000\u0000\u0000\u00e2"+
		"\u00e4\u0001\u0000\u0000\u0000\u00e3\u00d6\u0001\u0000\u0000\u0000\u00e3"+
		"\u00dd\u0001\u0000\u0000\u0000\u00e4\u00e7\u0001\u0000\u0000\u0000\u00e5"+
		"\u00e3\u0001\u0000\u0000\u0000\u00e5\u00e6\u0001\u0000\u0000\u0000\u00e6"+
		"\u00eb\u0001\u0000\u0000\u0000\u00e7\u00e5\u0001\u0000\u0000\u0000\u00e8"+
		"\u00ea\u0005\u0018\u0000\u0000\u00e9\u00e8\u0001\u0000\u0000\u0000\u00ea"+
		"\u00ed\u0001\u0000\u0000\u0000\u00eb\u00e9\u0001\u0000\u0000\u0000\u00eb"+
		"\u00ec\u0001\u0000\u0000\u0000\u00ec\u00ee\u0001\u0000\u0000\u0000\u00ed"+
		"\u00eb\u0001\u0000\u0000\u0000\u00ee\u00ef\u0005\u000f\u0000\u0000\u00ef"+
		"\u0005\u0001\u0000\u0000\u0000\u00f0\u00f4\u0003\u000e\u0007\u0000\u00f1"+
		"\u00f4\u0003\u0010\b\u0000\u00f2\u00f4\u0003\u0012\t\u0000\u00f3\u00f0"+
		"\u0001\u0000\u0000\u0000\u00f3\u00f1\u0001\u0000\u0000\u0000\u00f3\u00f2"+
		"\u0001\u0000\u0000\u0000\u00f4\u00f5\u0001\u0000\u0000\u0000\u00f5\u00f3"+
		"\u0001\u0000\u0000\u0000\u00f5\u00f6\u0001\u0000\u0000\u0000\u00f6\u00fb"+
		"\u0001\u0000\u0000\u0000\u00f7\u00fa\u0003\b\u0004\u0000\u00f8\u00fa\u0003"+
		"\n\u0005\u0000\u00f9\u00f7\u0001\u0000\u0000\u0000\u00f9\u00f8\u0001\u0000"+
		"\u0000\u0000\u00fa\u00fd\u0001\u0000\u0000\u0000\u00fb\u00f9\u0001\u0000"+
		"\u0000\u0000\u00fb\u00fc\u0001\u0000\u0000\u0000\u00fc\u0007\u0001\u0000"+
		"\u0000\u0000\u00fd\u00fb\u0001\u0000\u0000\u0000\u00fe\u00ff\u0005\n\u0000"+
		"\u0000\u00ff\u0122\u0005\u00d6\u0000\u0000\u0100\u0101\u0005\n\u0000\u0000"+
		"\u0101\u0122\u0005\u00d7\u0000\u0000\u0102\u0103\u0005\n\u0000\u0000\u0103"+
		"\u0122\u0005\u00d8\u0000\u0000\u0104\u0105\u0005\n\u0000\u0000\u0105\u0122"+
		"\u0005\u00d9\u0000\u0000\u0106\u0107\u0005\n\u0000\u0000\u0107\u0108\u0005"+
		"\u00d3\u0000\u0000\u0108\u0109\u0005\u0011\u0000\u0000\u0109\u0122\u0005"+
		"\u00da\u0000\u0000\u010a\u010b\u0005\n\u0000\u0000\u010b\u010c\u0005\u00c7"+
		"\u0000\u0000\u010c\u010d\u0005\u0011\u0000\u0000\u010d\u0122\u0005\u00da"+
		"\u0000\u0000\u010e\u010f\u0005\n\u0000\u0000\u010f\u0110\u0005\u00db\u0000"+
		"\u0000\u0110\u0111\u0005\u0011\u0000\u0000\u0111\u0112\u0005\u00da\u0000"+
		"\u0000\u0112\u0113\u0005\f\u0000\u0000\u0113\u0114\u0005\u0017\u0000\u0000"+
		"\u0114\u0122\u0005\r\u0000\u0000\u0115\u0116\u0005\n\u0000\u0000\u0116"+
		"\u0117\u0005\u0012\u0000\u0000\u0117\u0118\u0005\f\u0000\u0000\u0118\u0122"+
		"\u0005\r\u0000\u0000\u0119\u011a\u0005\n\u0000\u0000\u011a\u0122\u0005"+
		"\u00dc\u0000\u0000\u011b\u011c\u0005\n\u0000\u0000\u011c\u0122\u0005\u00dd"+
		"\u0000\u0000\u011d\u011e\u0005\n\u0000\u0000\u011e\u0122\u0005\u00de\u0000"+
		"\u0000\u011f\u0120\u0005\n\u0000\u0000\u0120\u0122\u0005G\u0000\u0000"+
		"\u0121\u00fe\u0001\u0000\u0000\u0000\u0121\u0100\u0001\u0000\u0000\u0000"+
		"\u0121\u0102\u0001\u0000\u0000\u0000\u0121\u0104\u0001\u0000\u0000\u0000"+
		"\u0121\u0106\u0001\u0000\u0000\u0000\u0121\u010a\u0001\u0000\u0000\u0000"+
		"\u0121\u010e\u0001\u0000\u0000\u0000\u0121\u0115\u0001\u0000\u0000\u0000"+
		"\u0121\u0119\u0001\u0000\u0000\u0000\u0121\u011b\u0001\u0000\u0000\u0000"+
		"\u0121\u011d\u0001\u0000\u0000\u0000\u0121\u011f\u0001\u0000\u0000\u0000"+
		"\u0122\t\u0001\u0000\u0000\u0000\u0123\u0124\u0003\f\u0006\u0000\u0124"+
		"\u0125\u00055\u0000\u0000\u0125\u013a\u0001\u0000\u0000\u0000\u0126\u0127"+
		"\u0003\f\u0006\u0000\u0127\u0128\u00056\u0000\u0000\u0128\u013a\u0001"+
		"\u0000\u0000\u0000\u0129\u012a\u0003\f\u0006\u0000\u012a\u012b\u0005\u00d3"+
		"\u0000\u0000\u012b\u012c\u0005\u0011\u0000\u0000\u012c\u012d\u0005O\u0000"+
		"\u0000\u012d\u013a\u0001\u0000\u0000\u0000\u012e\u012f\u0003\f\u0006\u0000"+
		"\u012f\u0130\u0005\u00d3\u0000\u0000\u0130\u0131\u0005\u0011\u0000\u0000"+
		"\u0131\u0132\u0005P\u0000\u0000\u0132\u013a\u0001\u0000\u0000\u0000\u0133"+
		"\u0134\u0003\f\u0006\u0000\u0134\u0135\u0005\u00d4\u0000\u0000\u0135\u013a"+
		"\u0001\u0000\u0000\u0000\u0136\u0137\u0003\f\u0006\u0000\u0137\u0138\u0005"+
		"\u00d5\u0000\u0000\u0138\u013a\u0001\u0000\u0000\u0000\u0139\u0123\u0001"+
		"\u0000\u0000\u0000\u0139\u0126\u0001\u0000\u0000\u0000\u0139\u0129\u0001"+
		"\u0000\u0000\u0000\u0139\u012e\u0001\u0000\u0000\u0000\u0139\u0133\u0001"+
		"\u0000\u0000\u0000\u0139\u0136\u0001\u0000\u0000\u0000\u013a\u000b\u0001"+
		"\u0000\u0000\u0000\u013b\u013c\u0005\n\u0000\u0000\u013c\r\u0001\u0000"+
		"\u0000\u0000\u013d\u013e\u0005\u0013\u0000\u0000\u013e\u013f\u0003\u0014"+
		"\n\u0000\u013f\u000f\u0001\u0000\u0000\u0000\u0140\u0141\u0005\t\u0000"+
		"\u0000\u0141\u0142\u0003\u0014\n\u0000\u0142\u0011\u0001\u0000\u0000\u0000"+
		"\u0143\u0144\u0007\u0000\u0000\u0000\u0144\u0013\u0001\u0000\u0000\u0000"+
		"\u0145\u0147\u0007\u0001\u0000\u0000\u0146\u0145\u0001\u0000\u0000\u0000"+
		"\u0147\u0148\u0001\u0000\u0000\u0000\u0148\u0146\u0001\u0000\u0000\u0000"+
		"\u0148\u0149\u0001\u0000\u0000\u0000\u0149\u0015\u0001\u0000\u0000\u0000"+
		"\u014a\u014e\u00036\u001b\u0000\u014b\u014d\u0005\u0018\u0000\u0000\u014c"+
		"\u014b\u0001\u0000\u0000\u0000\u014d\u0150\u0001\u0000\u0000\u0000\u014e"+
		"\u014c\u0001\u0000\u0000\u0000\u014e\u014f\u0001\u0000\u0000\u0000\u014f"+
		"\u0151\u0001\u0000\u0000\u0000\u0150\u014e\u0001\u0000\u0000\u0000\u0151"+
		"\u0155\u0005\n\u0000\u0000\u0152\u0154\u0005\u0018\u0000\u0000\u0153\u0152"+
		"\u0001\u0000\u0000\u0000\u0154\u0157\u0001\u0000\u0000\u0000\u0155\u0153"+
		"\u0001\u0000\u0000\u0000\u0155\u0156\u0001\u0000\u0000\u0000\u0156\u0158"+
		"\u0001\u0000\u0000\u0000\u0157\u0155\u0001\u0000\u0000\u0000\u0158\u015c"+
		"\u0003\u0018\f\u0000\u0159\u015b\u0005\u0018\u0000\u0000\u015a\u0159\u0001"+
		"\u0000\u0000\u0000\u015b\u015e\u0001\u0000\u0000\u0000\u015c\u015a\u0001"+
		"\u0000\u0000\u0000\u015c\u015d\u0001\u0000\u0000\u0000\u015d\u015f\u0001"+
		"\u0000\u0000\u0000\u015e\u015c\u0001\u0000\u0000\u0000\u015f\u0160\u0005"+
		"\u000b\u0000\u0000\u0160\u0017\u0001\u0000\u0000\u0000\u0161\u0162\u0003"+
		"\u001a\r\u0000\u0162\u0019\u0001\u0000\u0000\u0000\u0163\u0168\u0003\u001c"+
		"\u000e\u0000\u0164\u0168\u0003\u001e\u000f\u0000\u0165\u0168\u0003 \u0010"+
		"\u0000\u0166\u0168\u0003\"\u0011\u0000\u0167\u0163\u0001\u0000\u0000\u0000"+
		"\u0167\u0164\u0001\u0000\u0000\u0000\u0167\u0165\u0001\u0000\u0000\u0000"+
		"\u0167\u0166\u0001\u0000\u0000\u0000\u0168\u001b\u0001\u0000\u0000\u0000"+
		"\u0169\u016a\u0003&\u0013\u0000\u016a\u016b\u0003$\u0012\u0000\u016b\u016c"+
		"\u0003&\u0013\u0000\u016c\u016d\u0003$\u0012\u0000\u016d\u016e\u0003&"+
		"\u0013\u0000\u016e\u016f\u0003$\u0012\u0000\u016f\u0170\u0003&\u0013\u0000"+
		"\u0170\u01aa\u0001\u0000\u0000\u0000\u0171\u0172\u0003(\u0014\u0000\u0172"+
		"\u0173\u0003$\u0012\u0000\u0173\u0174\u0003(\u0014\u0000\u0174\u0175\u0003"+
		"$\u0012\u0000\u0175\u0176\u0003(\u0014\u0000\u0176\u0177\u0003$\u0012"+
		"\u0000\u0177\u0178\u0003(\u0014\u0000\u0178\u01aa\u0001\u0000\u0000\u0000"+
		"\u0179\u017a\u0003*\u0015\u0000\u017a\u017b\u0003$\u0012\u0000\u017b\u017c"+
		"\u0003*\u0015\u0000\u017c\u017d\u0003$\u0012\u0000\u017d\u017e\u0003*"+
		"\u0015\u0000\u017e\u017f\u0003$\u0012\u0000\u017f\u0180\u0003*\u0015\u0000"+
		"\u0180\u01aa\u0001\u0000\u0000\u0000\u0181\u0182\u0003,\u0016\u0000\u0182"+
		"\u0183\u0003$\u0012\u0000\u0183\u0184\u0003,\u0016\u0000\u0184\u0185\u0003"+
		"$\u0012\u0000\u0185\u0186\u0003,\u0016\u0000\u0186\u0187\u0003$\u0012"+
		"\u0000\u0187\u0188\u0003,\u0016\u0000\u0188\u01aa\u0001\u0000\u0000\u0000"+
		"\u0189\u018a\u0003.\u0017\u0000\u018a\u018b\u0003$\u0012\u0000\u018b\u018c"+
		"\u0003.\u0017\u0000\u018c\u018d\u0003$\u0012\u0000\u018d\u018e\u0003."+
		"\u0017\u0000\u018e\u018f\u0003$\u0012\u0000\u018f\u0190\u0003.\u0017\u0000"+
		"\u0190\u01aa\u0001\u0000\u0000\u0000\u0191\u0192\u00030\u0018\u0000\u0192"+
		"\u0193\u0003$\u0012\u0000\u0193\u0194\u00030\u0018\u0000\u0194\u0195\u0003"+
		"$\u0012\u0000\u0195\u0196\u00030\u0018\u0000\u0196\u0197\u0003$\u0012"+
		"\u0000\u0197\u0198\u00030\u0018\u0000\u0198\u01aa\u0001\u0000\u0000\u0000"+
		"\u0199\u019a\u00032\u0019\u0000\u019a\u019b\u0003$\u0012\u0000\u019b\u019c"+
		"\u00032\u0019\u0000\u019c\u019d\u0003$\u0012\u0000\u019d\u019e\u00032"+
		"\u0019\u0000\u019e\u019f\u0003$\u0012\u0000\u019f\u01a0\u00032\u0019\u0000"+
		"\u01a0\u01aa\u0001\u0000\u0000\u0000\u01a1\u01a2\u00034\u001a\u0000\u01a2"+
		"\u01a3\u0003$\u0012\u0000\u01a3\u01a4\u00034\u001a\u0000\u01a4\u01a5\u0003"+
		"$\u0012\u0000\u01a5\u01a6\u00034\u001a\u0000\u01a6\u01a7\u0003$\u0012"+
		"\u0000\u01a7\u01a8\u00034\u001a\u0000\u01a8\u01aa\u0001\u0000\u0000\u0000"+
		"\u01a9\u0169\u0001\u0000\u0000\u0000\u01a9\u0171\u0001\u0000\u0000\u0000"+
		"\u01a9\u0179\u0001\u0000\u0000\u0000\u01a9\u0181\u0001\u0000\u0000\u0000"+
		"\u01a9\u0189\u0001\u0000\u0000\u0000\u01a9\u0191\u0001\u0000\u0000\u0000"+
		"\u01a9\u0199\u0001\u0000\u0000\u0000\u01a9\u01a1\u0001\u0000\u0000\u0000"+
		"\u01aa\u001d\u0001\u0000\u0000\u0000\u01ab\u01ac\u0003&\u0013\u0000\u01ac"+
		"\u01ad\u0003$\u0012\u0000\u01ad\u01ae\u0003&\u0013\u0000\u01ae\u01af\u0003"+
		"$\u0012\u0000\u01af\u01b0\u0003&\u0013\u0000\u01b0\u01dc\u0001\u0000\u0000"+
		"\u0000\u01b1\u01b2\u0003(\u0014\u0000\u01b2\u01b3\u0003$\u0012\u0000\u01b3"+
		"\u01b4\u0003(\u0014\u0000\u01b4\u01b5\u0003$\u0012\u0000\u01b5\u01b6\u0003"+
		"(\u0014\u0000\u01b6\u01dc\u0001\u0000\u0000\u0000\u01b7\u01b8\u0003*\u0015"+
		"\u0000\u01b8\u01b9\u0003$\u0012\u0000\u01b9\u01ba\u0003*\u0015\u0000\u01ba"+
		"\u01bb\u0003$\u0012\u0000\u01bb\u01bc\u0003*\u0015\u0000\u01bc\u01dc\u0001"+
		"\u0000\u0000\u0000\u01bd\u01be\u0003,\u0016\u0000\u01be\u01bf\u0003$\u0012"+
		"\u0000\u01bf\u01c0\u0003,\u0016\u0000\u01c0\u01c1\u0003$\u0012\u0000\u01c1"+
		"\u01c2\u0003,\u0016\u0000\u01c2\u01dc\u0001\u0000\u0000\u0000\u01c3\u01c4"+
		"\u0003.\u0017\u0000\u01c4\u01c5\u0003$\u0012\u0000\u01c5\u01c6\u0003."+
		"\u0017\u0000\u01c6\u01c7\u0003$\u0012\u0000\u01c7\u01c8\u0003.\u0017\u0000"+
		"\u01c8\u01dc\u0001\u0000\u0000\u0000\u01c9\u01ca\u00030\u0018\u0000\u01ca"+
		"\u01cb\u0003$\u0012\u0000\u01cb\u01cc\u00030\u0018\u0000\u01cc\u01cd\u0003"+
		"$\u0012\u0000\u01cd\u01ce\u00030\u0018\u0000\u01ce\u01dc\u0001\u0000\u0000"+
		"\u0000\u01cf\u01d0\u00032\u0019\u0000\u01d0\u01d1\u0003$\u0012\u0000\u01d1"+
		"\u01d2\u00032\u0019\u0000\u01d2\u01d3\u0003$\u0012\u0000\u01d3\u01d4\u0003"+
		"2\u0019\u0000\u01d4\u01dc\u0001\u0000\u0000\u0000\u01d5\u01d6\u00034\u001a"+
		"\u0000\u01d6\u01d7\u0003$\u0012\u0000\u01d7\u01d8\u00034\u001a\u0000\u01d8"+
		"\u01d9\u0003$\u0012\u0000\u01d9\u01da\u00034\u001a\u0000\u01da\u01dc\u0001"+
		"\u0000\u0000\u0000\u01db\u01ab\u0001\u0000\u0000\u0000\u01db\u01b1\u0001"+
		"\u0000\u0000\u0000\u01db\u01b7\u0001\u0000\u0000\u0000\u01db\u01bd\u0001"+
		"\u0000\u0000\u0000\u01db\u01c3\u0001\u0000\u0000\u0000\u01db\u01c9\u0001"+
		"\u0000\u0000\u0000\u01db\u01cf\u0001\u0000\u0000\u0000\u01db\u01d5\u0001"+
		"\u0000\u0000\u0000\u01dc\u001f\u0001\u0000\u0000\u0000\u01dd\u01de\u0003"+
		"&\u0013\u0000\u01de\u01df\u0003$\u0012\u0000\u01df\u01e0\u0003&\u0013"+
		"\u0000\u01e0\u01fe\u0001\u0000\u0000\u0000\u01e1\u01e2\u0003(\u0014\u0000"+
		"\u01e2\u01e3\u0003$\u0012\u0000\u01e3\u01e4\u0003(\u0014\u0000\u01e4\u01fe"+
		"\u0001\u0000\u0000\u0000\u01e5\u01e6\u0003*\u0015\u0000\u01e6\u01e7\u0003"+
		"$\u0012\u0000\u01e7\u01e8\u0003*\u0015\u0000\u01e8\u01fe\u0001\u0000\u0000"+
		"\u0000\u01e9\u01ea\u0003,\u0016\u0000\u01ea\u01eb\u0003$\u0012\u0000\u01eb"+
		"\u01ec\u0003,\u0016\u0000\u01ec\u01fe\u0001\u0000\u0000\u0000\u01ed\u01ee"+
		"\u0003.\u0017\u0000\u01ee\u01ef\u0003$\u0012\u0000\u01ef\u01f0\u0003."+
		"\u0017\u0000\u01f0\u01fe\u0001\u0000\u0000\u0000\u01f1\u01f2\u00030\u0018"+
		"\u0000\u01f2\u01f3\u0003$\u0012\u0000\u01f3\u01f4\u00030\u0018\u0000\u01f4"+
		"\u01fe\u0001\u0000\u0000\u0000\u01f5\u01f6\u00032\u0019\u0000\u01f6\u01f7"+
		"\u0003$\u0012\u0000\u01f7\u01f8\u00032\u0019\u0000\u01f8\u01fe\u0001\u0000"+
		"\u0000\u0000\u01f9\u01fa\u00034\u001a\u0000\u01fa\u01fb\u0003$\u0012\u0000"+
		"\u01fb\u01fc\u00034\u001a\u0000\u01fc\u01fe\u0001\u0000\u0000\u0000\u01fd"+
		"\u01dd\u0001\u0000\u0000\u0000\u01fd\u01e1\u0001\u0000\u0000\u0000\u01fd"+
		"\u01e5\u0001\u0000\u0000\u0000\u01fd\u01e9\u0001\u0000\u0000\u0000\u01fd"+
		"\u01ed\u0001\u0000\u0000\u0000\u01fd\u01f1\u0001\u0000\u0000\u0000\u01fd"+
		"\u01f5\u0001\u0000\u0000\u0000\u01fd\u01f9\u0001\u0000\u0000\u0000\u01fe"+
		"!\u0001\u0000\u0000\u0000\u01ff\u0208\u0003&\u0013\u0000\u0200\u0208\u0003"+
		"(\u0014\u0000\u0201\u0208\u0003*\u0015\u0000\u0202\u0208\u0003,\u0016"+
		"\u0000\u0203\u0208\u0003.\u0017\u0000\u0204\u0208\u00030\u0018\u0000\u0205"+
		"\u0208\u00032\u0019\u0000\u0206\u0208\u00034\u001a\u0000\u0207\u01ff\u0001"+
		"\u0000\u0000\u0000\u0207\u0200\u0001\u0000\u0000\u0000\u0207\u0201\u0001"+
		"\u0000\u0000\u0000\u0207\u0202\u0001\u0000\u0000\u0000\u0207\u0203\u0001"+
		"\u0000\u0000\u0000\u0207\u0204\u0001\u0000\u0000\u0000\u0207\u0205\u0001"+
		"\u0000\u0000\u0000\u0207\u0206\u0001\u0000\u0000\u0000\u0208#\u0001\u0000"+
		"\u0000\u0000\u0209\u020a\u0005\u0019\u0000\u0000\u020a%\u0001\u0000\u0000"+
		"\u0000\u020b\u020c\u0005\u0015\u0000\u0000\u020c\u020d\u0005\u0001\u0000"+
		"\u0000\u020d\'\u0001\u0000\u0000\u0000\u020e\u020f\u0005\u0015\u0000\u0000"+
		"\u020f\u0210\u0005\u0002\u0000\u0000\u0210)\u0001\u0000\u0000\u0000\u0211"+
		"\u0212\u0005\u0015\u0000\u0000\u0212\u0213\u0005\u0003\u0000\u0000\u0213"+
		"+\u0001\u0000\u0000\u0000\u0214\u0215\u0005\u0015\u0000\u0000\u0215\u0216"+
		"\u0005\u0004\u0000\u0000\u0216-\u0001\u0000\u0000\u0000\u0217\u0218\u0005"+
		"\u0015\u0000\u0000\u0218\u0219\u0005\u0005\u0000\u0000\u0219/\u0001\u0000"+
		"\u0000\u0000\u021a\u021b\u0005\u0015\u0000\u0000\u021b\u021c\u0005\u0006"+
		"\u0000\u0000\u021c1\u0001\u0000\u0000\u0000\u021d\u021e\u0005\u0015\u0000"+
		"\u0000\u021e\u021f\u0005\u0007\u0000\u0000\u021f3\u0001\u0000\u0000\u0000"+
		"\u0220\u0221\u0005\u0015\u0000\u0000\u0221\u0222\u0005\b\u0000\u0000\u0222"+
		"5\u0001\u0000\u0000\u0000\u0223\u031c\u0005s\u0000\u0000\u0224\u031c\u0005"+
		"1\u0000\u0000\u0225\u031c\u0005-\u0000\u0000\u0226\u031c\u0005?\u0000"+
		"\u0000\u0227\u031c\u0005@\u0000\u0000\u0228\u031c\u0005y\u0000\u0000\u0229"+
		"\u031c\u00050\u0000\u0000\u022a\u031c\u0005z\u0000\u0000\u022b\u031c\u0005"+
		"C\u0000\u0000\u022c\u031c\u0005D\u0000\u0000\u022d\u031c\u0005E\u0000"+
		"\u0000\u022e\u031c\u0005F\u0000\u0000\u022f\u031c\u0005(\u0000\u0000\u0230"+
		"\u031c\u0005\u0081\u0000\u0000\u0231\u031c\u0005\u0082\u0000\u0000\u0232"+
		"\u031c\u0005*\u0000\u0000\u0233\u031c\u0005\u0085\u0000\u0000\u0234\u031c"+
		"\u0005\u00c8\u0000\u0000\u0235\u031c\u0005\u0089\u0000\u0000\u0236\u031c"+
		"\u0005\u00ad\u0000\u0000\u0237\u031c\u0005S\u0000\u0000\u0238\u031c\u0005"+
		"\u008b\u0000\u0000\u0239\u031c\u00054\u0000\u0000\u023a\u031c\u0005[\u0000"+
		"\u0000\u023b\u031c\u0005\u008d\u0000\u0000\u023c\u031c\u0005\u0005\u0000"+
		"\u0000\u023d\u031c\u0005W\u0000\u0000\u023e\u031c\u0005,\u0000\u0000\u023f"+
		"\u031c\u0005\u00c9\u0000\u0000\u0240\u031c\u0005K\u0000\u0000\u0241\u031c"+
		"\u0005^\u0000\u0000\u0242\u031c\u0005+\u0000\u0000\u0243\u031c\u0005h"+
		"\u0000\u0000\u0244\u031c\u0005j\u0000\u0000\u0245\u031c\u0005m\u0000\u0000"+
		"\u0246\u0247\u0005u\u0000\u0000\u0247\u0248\u0005\u0011\u0000\u0000\u0248"+
		"\u031c\u0005\u0098\u0000\u0000\u0249\u024a\u0005\u00cb\u0000\u0000\u024a"+
		"\u024b\u0005\u0011\u0000\u0000\u024b\u031c\u0005\u00ca\u0000\u0000\u024c"+
		"\u024d\u0005t\u0000\u0000\u024d\u024e\u0005\u0011\u0000\u0000\u024e\u031c"+
		"\u0005h\u0000\u0000\u024f\u0250\u0005;\u0000\u0000\u0250\u0251\u0005\u0011"+
		"\u0000\u0000\u0251\u031c\u0005=\u0000\u0000\u0252\u0253\u0005{\u0000\u0000"+
		"\u0253\u0254\u0005\u0011\u0000\u0000\u0254\u031c\u0005u\u0000\u0000\u0255"+
		"\u0256\u0005G\u0000\u0000\u0256\u0257\u0005\u0011\u0000\u0000\u0257\u031c"+
		"\u0005H\u0000\u0000\u0258\u0259\u0005O\u0000\u0000\u0259\u025a\u0005\u0011"+
		"\u0000\u0000\u025a\u031c\u0005:\u0000\u0000\u025b\u025c\u0005\u0087\u0000"+
		"\u0000\u025c\u025d\u0005\u0011\u0000\u0000\u025d\u031c\u0005\u0014\u0000"+
		"\u0000\u025e\u025f\u0005U\u0000\u0000\u025f\u0260\u0005\u0011\u0000\u0000"+
		"\u0260\u031c\u0005V\u0000\u0000\u0261\u0262\u0005\u008a\u0000\u0000\u0262"+
		"\u0263\u0005\u0011\u0000\u0000\u0263\u031c\u0005\u0097\u0000\u0000\u0264"+
		"\u0265\u0005Z\u0000\u0000\u0265\u0266\u0005\u0011\u0000\u0000\u0266\u031c"+
		"\u0005\u00b5\u0000\u0000\u0267\u0268\u0005\u008c\u0000\u0000\u0268\u0269"+
		"\u0005\u0011\u0000\u0000\u0269\u031c\u0005\u00b6\u0000\u0000\u026a\u026b"+
		"\u0005\\\u0000\u0000\u026b\u026c\u0005\u0011\u0000\u0000\u026c\u031c\u0005"+
		"]\u0000\u0000\u026d\u026e\u0005\u0091\u0000\u0000\u026e\u026f\u0005\u0011"+
		"\u0000\u0000\u026f\u031c\u0005\u00b9\u0000\u0000\u0270\u0271\u0005e\u0000"+
		"\u0000\u0271\u0272\u0005\u0011\u0000\u0000\u0272\u031c\u0005f\u0000\u0000"+
		"\u0273\u0274\u0005g\u0000\u0000\u0274\u0275\u0005\u0011\u0000\u0000\u0275"+
		"\u031c\u0005a\u0000\u0000\u0276\u0277\u0005\u0083\u0000\u0000\u0277\u0278"+
		"\u0005\u0011\u0000\u0000\u0278\u0279\u0005w\u0000\u0000\u0279\u027a\u0005"+
		"\u0011\u0000\u0000\u027a\u031c\u0005a\u0000\u0000\u027b\u027d\u0005\u001a"+
		"\u0000\u0000\u027c\u027e\u00038\u001c\u0000\u027d\u027c\u0001\u0000\u0000"+
		"\u0000\u027d\u027e\u0001\u0000\u0000\u0000\u027e\u031c\u0001\u0000\u0000"+
		"\u0000\u027f\u0281\u0005q\u0000\u0000\u0280\u0282\u0003:\u001d\u0000\u0281"+
		"\u0280\u0001\u0000\u0000\u0000\u0281\u0282\u0001\u0000\u0000\u0000\u0282"+
		"\u031c\u0001\u0000\u0000\u0000\u0283\u0285\u0005r\u0000\u0000\u0284\u0286"+
		"\u0003<\u001e\u0000\u0285\u0284\u0001\u0000\u0000\u0000\u0285\u0286\u0001"+
		"\u0000\u0000\u0000\u0286\u031c\u0001\u0000\u0000\u0000\u0287\u0289\u0005"+
		"v\u0000\u0000\u0288\u028a\u0003>\u001f\u0000\u0289\u0288\u0001\u0000\u0000"+
		"\u0000\u0289\u028a\u0001\u0000\u0000\u0000\u028a\u031c\u0001\u0000\u0000"+
		"\u0000\u028b\u028d\u0005\u001b\u0000\u0000\u028c\u028e\u0003@ \u0000\u028d"+
		"\u028c\u0001\u0000\u0000\u0000\u028d\u028e\u0001\u0000\u0000\u0000\u028e"+
		"\u031c\u0001\u0000\u0000\u0000\u028f\u0291\u0005w\u0000\u0000\u0290\u0292"+
		"\u0003H$\u0000\u0291\u0290\u0001\u0000\u0000\u0000\u0291\u0292\u0001\u0000"+
		"\u0000\u0000\u0292\u031c\u0001\u0000\u0000\u0000\u0293\u0295\u0005;\u0000"+
		"\u0000\u0294\u0296\u0003J%\u0000\u0295\u0294\u0001\u0000\u0000\u0000\u0295"+
		"\u0296\u0001\u0000\u0000\u0000\u0296\u031c\u0001\u0000\u0000\u0000\u0297"+
		"\u0299\u0005.\u0000\u0000\u0298\u029a\u0003L&\u0000\u0299\u0298\u0001"+
		"\u0000\u0000\u0000\u0299\u029a\u0001\u0000\u0000\u0000\u029a\u031c\u0001"+
		"\u0000\u0000\u0000\u029b\u029d\u0005x\u0000\u0000\u029c\u029e\u0003N\'"+
		"\u0000\u029d\u029c\u0001\u0000\u0000\u0000\u029d\u029e\u0001\u0000\u0000"+
		"\u0000\u029e\u031c\u0001\u0000\u0000\u0000\u029f\u02a1\u0005<\u0000\u0000"+
		"\u02a0\u02a2\u0003R)\u0000\u02a1\u02a0\u0001\u0000\u0000\u0000\u02a1\u02a2"+
		"\u0001\u0000\u0000\u0000\u02a2\u031c\u0001\u0000\u0000\u0000\u02a3\u02a5"+
		"\u0005B\u0000\u0000\u02a4\u02a6\u0003T*\u0000\u02a5\u02a4\u0001\u0000"+
		"\u0000\u0000\u02a5\u02a6\u0001\u0000\u0000\u0000\u02a6\u031c\u0001\u0000"+
		"\u0000\u0000\u02a7\u02a9\u0005\u001d\u0000\u0000\u02a8\u02aa\u0003V+\u0000"+
		"\u02a9\u02a8\u0001\u0000\u0000\u0000\u02a9\u02aa\u0001\u0000\u0000\u0000"+
		"\u02aa\u031c\u0001\u0000\u0000\u0000\u02ab\u02ad\u0005I\u0000\u0000\u02ac"+
		"\u02ae\u0003X,\u0000\u02ad\u02ac\u0001\u0000\u0000\u0000\u02ad\u02ae\u0001"+
		"\u0000\u0000\u0000\u02ae\u031c\u0001\u0000\u0000\u0000\u02af\u02b1\u0005"+
		"~\u0000\u0000\u02b0\u02b2\u0003Z-\u0000\u02b1\u02b0\u0001\u0000\u0000"+
		"\u0000\u02b1\u02b2\u0001\u0000\u0000\u0000\u02b2\u031c\u0001\u0000\u0000"+
		"\u0000\u02b3\u02b5\u0005\u0080\u0000\u0000\u02b4\u02b6\u0003\\.\u0000"+
		"\u02b5\u02b4\u0001\u0000\u0000\u0000\u02b5\u02b6\u0001\u0000\u0000\u0000"+
		"\u02b6\u031c\u0001\u0000\u0000\u0000\u02b7\u02b9\u00053\u0000\u0000\u02b8"+
		"\u02ba\u0003^/\u0000\u02b9\u02b8\u0001\u0000\u0000\u0000\u02b9\u02ba\u0001"+
		"\u0000\u0000\u0000\u02ba\u031c\u0001\u0000\u0000\u0000\u02bb\u02bd\u0005"+
		"\u001c\u0000\u0000\u02bc\u02be\u0003`0\u0000\u02bd\u02bc\u0001\u0000\u0000"+
		"\u0000\u02bd\u02be\u0001\u0000\u0000\u0000\u02be\u031c\u0001\u0000\u0000"+
		"\u0000\u02bf\u02c1\u0005\u001e\u0000\u0000\u02c0\u02c2\u0003b1\u0000\u02c1"+
		"\u02c0\u0001\u0000\u0000\u0000\u02c1\u02c2\u0001\u0000\u0000\u0000\u02c2"+
		"\u031c\u0001\u0000\u0000\u0000\u02c3\u02c5\u0005\u0085\u0000\u0000\u02c4"+
		"\u02c6\u0003d2\u0000\u02c5\u02c4\u0001\u0000\u0000\u0000\u02c5\u02c6\u0001"+
		"\u0000\u0000\u0000\u02c6\u031c\u0001\u0000\u0000\u0000\u02c7\u02c9\u0005"+
		"\u0086\u0000\u0000\u02c8\u02ca\u0003f3\u0000\u02c9\u02c8\u0001\u0000\u0000"+
		"\u0000\u02c9\u02ca\u0001\u0000\u0000\u0000\u02ca\u031c\u0001\u0000\u0000"+
		"\u0000\u02cb\u02cd\u0005&\u0000\u0000\u02cc\u02ce\u0003h4\u0000\u02cd"+
		"\u02cc\u0001\u0000\u0000\u0000\u02cd\u02ce\u0001\u0000\u0000\u0000\u02ce"+
		"\u031c\u0001\u0000\u0000\u0000\u02cf\u02d1\u0005%\u0000\u0000\u02d0\u02d2"+
		"\u0003h4\u0000\u02d1\u02d0\u0001\u0000\u0000\u0000\u02d1\u02d2\u0001\u0000"+
		"\u0000\u0000\u02d2\u031c\u0001\u0000\u0000\u0000\u02d3\u02d5\u0005\u0088"+
		"\u0000\u0000\u02d4\u02d6\u0003l6\u0000\u02d5\u02d4\u0001\u0000\u0000\u0000"+
		"\u02d5\u02d6\u0001\u0000\u0000\u0000\u02d6\u031c\u0001\u0000\u0000\u0000"+
		"\u02d7\u02d9\u0005\u00ce\u0000\u0000\u02d8\u02da\u0003n7\u0000\u02d9\u02d8"+
		"\u0001\u0000\u0000\u0000\u02d9\u02da\u0001\u0000\u0000\u0000\u02da\u031c"+
		"\u0001\u0000\u0000\u0000\u02db\u02dd\u0005|\u0000\u0000\u02dc\u02de\u0003"+
		"p8\u0000\u02dd\u02dc\u0001\u0000\u0000\u0000\u02dd\u02de\u0001\u0000\u0000"+
		"\u0000\u02de\u031c\u0001\u0000\u0000\u0000\u02df\u02e1\u0005}\u0000\u0000"+
		"\u02e0\u02e2\u0003t:\u0000\u02e1\u02e0\u0001\u0000\u0000\u0000\u02e1\u02e2"+
		"\u0001\u0000\u0000\u0000\u02e2\u031c\u0001\u0000\u0000\u0000\u02e3\u02e5"+
		"\u0005\u001f\u0000\u0000\u02e4\u02e6\u0003v;\u0000\u02e5\u02e4\u0001\u0000"+
		"\u0000\u0000\u02e5\u02e6\u0001\u0000\u0000\u0000\u02e6\u031c\u0001\u0000"+
		"\u0000\u0000\u02e7\u02e9\u00057\u0000\u0000\u02e8\u02ea\u0003x<\u0000"+
		"\u02e9\u02e8\u0001\u0000\u0000\u0000\u02e9\u02ea\u0001\u0000\u0000\u0000"+
		"\u02ea\u031c\u0001\u0000\u0000\u0000\u02eb\u02ed\u0005 \u0000\u0000\u02ec"+
		"\u02ee\u0003z=\u0000\u02ed\u02ec\u0001\u0000\u0000\u0000\u02ed\u02ee\u0001"+
		"\u0000\u0000\u0000\u02ee\u031c\u0001\u0000\u0000\u0000\u02ef\u02f1\u0005"+
		"\"\u0000\u0000\u02f0\u02f2\u0003|>\u0000\u02f1\u02f0\u0001\u0000\u0000"+
		"\u0000\u02f1\u02f2\u0001\u0000\u0000\u0000\u02f2\u031c\u0001\u0000\u0000"+
		"\u0000\u02f3\u02f5\u0005\'\u0000\u0000\u02f4\u02f6\u0003\u0080@\u0000"+
		"\u02f5\u02f4\u0001\u0000\u0000\u0000\u02f5\u02f6\u0001\u0000\u0000\u0000"+
		"\u02f6\u031c\u0001\u0000\u0000\u0000\u02f7\u02f9\u0005\u008e\u0000\u0000"+
		"\u02f8\u02fa\u0003\u0082A\u0000\u02f9\u02f8\u0001\u0000\u0000\u0000\u02f9"+
		"\u02fa\u0001\u0000\u0000\u0000\u02fa\u031c\u0001\u0000\u0000\u0000\u02fb"+
		"\u02fd\u0005\u0090\u0000\u0000\u02fc\u02fe\u0003\u0084B\u0000\u02fd\u02fc"+
		"\u0001\u0000\u0000\u0000\u02fd\u02fe\u0001\u0000\u0000\u0000\u02fe\u031c"+
		"\u0001\u0000\u0000\u0000\u02ff\u0301\u0005#\u0000\u0000\u0300\u0302\u0003"+
		"\u0086C\u0000\u0301\u0300\u0001\u0000\u0000\u0000\u0301\u0302\u0001\u0000"+
		"\u0000\u0000\u0302\u031c\u0001\u0000\u0000\u0000\u0303\u0305\u0005\u0092"+
		"\u0000\u0000\u0304\u0306\u0003\u0088D\u0000\u0305\u0304\u0001\u0000\u0000"+
		"\u0000\u0305\u0306\u0001\u0000\u0000\u0000\u0306\u031c\u0001\u0000\u0000"+
		"\u0000\u0307\u0309\u0005d\u0000\u0000\u0308\u030a\u0003\u008cF\u0000\u0309"+
		"\u0308\u0001\u0000\u0000\u0000\u0309\u030a\u0001\u0000\u0000\u0000\u030a"+
		"\u031c\u0001\u0000\u0000\u0000\u030b\u030d\u0005\u00d2\u0000\u0000\u030c"+
		"\u030e\u0003\u008eG\u0000\u030d\u030c\u0001\u0000\u0000\u0000\u030d\u030e"+
		"\u0001\u0000\u0000\u0000\u030e\u031c\u0001\u0000\u0000\u0000\u030f\u0311"+
		"\u0005!\u0000\u0000\u0310\u0312\u0003\u008aE\u0000\u0311\u0310\u0001\u0000"+
		"\u0000\u0000\u0311\u0312\u0001\u0000\u0000\u0000\u0312\u031c\u0001\u0000"+
		"\u0000\u0000\u0313\u0315\u0005i\u0000\u0000\u0314\u0316\u0003\u0090H\u0000"+
		"\u0315\u0314\u0001\u0000\u0000\u0000\u0315\u0316\u0001\u0000\u0000\u0000"+
		"\u0316\u031c\u0001\u0000\u0000\u0000\u0317\u0319\u0005n\u0000\u0000\u0318"+
		"\u031a\u0003\u0094J\u0000\u0319\u0318\u0001\u0000\u0000\u0000\u0319\u031a"+
		"\u0001\u0000\u0000\u0000\u031a\u031c\u0001\u0000\u0000\u0000\u031b\u0223"+
		"\u0001\u0000\u0000\u0000\u031b\u0224\u0001\u0000\u0000\u0000\u031b\u0225"+
		"\u0001\u0000\u0000\u0000\u031b\u0226\u0001\u0000\u0000\u0000\u031b\u0227"+
		"\u0001\u0000\u0000\u0000\u031b\u0228\u0001\u0000\u0000\u0000\u031b\u0229"+
		"\u0001\u0000\u0000\u0000\u031b\u022a\u0001\u0000\u0000\u0000\u031b\u022b"+
		"\u0001\u0000\u0000\u0000\u031b\u022c\u0001\u0000\u0000\u0000\u031b\u022d"+
		"\u0001\u0000\u0000\u0000\u031b\u022e\u0001\u0000\u0000\u0000\u031b\u022f"+
		"\u0001\u0000\u0000\u0000\u031b\u0230\u0001\u0000\u0000\u0000\u031b\u0231"+
		"\u0001\u0000\u0000\u0000\u031b\u0232\u0001\u0000\u0000\u0000\u031b\u0233"+
		"\u0001\u0000\u0000\u0000\u031b\u0234\u0001\u0000\u0000\u0000\u031b\u0235"+
		"\u0001\u0000\u0000\u0000\u031b\u0236\u0001\u0000\u0000\u0000\u031b\u0237"+
		"\u0001\u0000\u0000\u0000\u031b\u0238\u0001\u0000\u0000\u0000\u031b\u0239"+
		"\u0001\u0000\u0000\u0000\u031b\u023a\u0001\u0000\u0000\u0000\u031b\u023b"+
		"\u0001\u0000\u0000\u0000\u031b\u023c\u0001\u0000\u0000\u0000\u031b\u023d"+
		"\u0001\u0000\u0000\u0000\u031b\u023e\u0001\u0000\u0000\u0000\u031b\u023f"+
		"\u0001\u0000\u0000\u0000\u031b\u0240\u0001\u0000\u0000\u0000\u031b\u0241"+
		"\u0001\u0000\u0000\u0000\u031b\u0242\u0001\u0000\u0000\u0000\u031b\u0243"+
		"\u0001\u0000\u0000\u0000\u031b\u0244\u0001\u0000\u0000\u0000\u031b\u0245"+
		"\u0001\u0000\u0000\u0000\u031b\u0246\u0001\u0000\u0000\u0000\u031b\u0249"+
		"\u0001\u0000\u0000\u0000\u031b\u024c\u0001\u0000\u0000\u0000\u031b\u024f"+
		"\u0001\u0000\u0000\u0000\u031b\u0252\u0001\u0000\u0000\u0000\u031b\u0255"+
		"\u0001\u0000\u0000\u0000\u031b\u0258\u0001\u0000\u0000\u0000\u031b\u025b"+
		"\u0001\u0000\u0000\u0000\u031b\u025e\u0001\u0000\u0000\u0000\u031b\u0261"+
		"\u0001\u0000\u0000\u0000\u031b\u0264\u0001\u0000\u0000\u0000\u031b\u0267"+
		"\u0001\u0000\u0000\u0000\u031b\u026a\u0001\u0000\u0000\u0000\u031b\u026d"+
		"\u0001\u0000\u0000\u0000\u031b\u0270\u0001\u0000\u0000\u0000\u031b\u0273"+
		"\u0001\u0000\u0000\u0000\u031b\u0276\u0001\u0000\u0000\u0000\u031b\u027b"+
		"\u0001\u0000\u0000\u0000\u031b\u027f\u0001\u0000\u0000\u0000\u031b\u0283"+
		"\u0001\u0000\u0000\u0000\u031b\u0287\u0001\u0000\u0000\u0000\u031b\u028b"+
		"\u0001\u0000\u0000\u0000\u031b\u028f\u0001\u0000\u0000\u0000\u031b\u0293"+
		"\u0001\u0000\u0000\u0000\u031b\u0297\u0001\u0000\u0000\u0000\u031b\u029b"+
		"\u0001\u0000\u0000\u0000\u031b\u029f\u0001\u0000\u0000\u0000\u031b\u02a3"+
		"\u0001\u0000\u0000\u0000\u031b\u02a7\u0001\u0000\u0000\u0000\u031b\u02ab"+
		"\u0001\u0000\u0000\u0000\u031b\u02af\u0001\u0000\u0000\u0000\u031b\u02b3"+
		"\u0001\u0000\u0000\u0000\u031b\u02b7\u0001\u0000\u0000\u0000\u031b\u02bb"+
		"\u0001\u0000\u0000\u0000\u031b\u02bf\u0001\u0000\u0000\u0000\u031b\u02c3"+
		"\u0001\u0000\u0000\u0000\u031b\u02c7\u0001\u0000\u0000\u0000\u031b\u02cb"+
		"\u0001\u0000\u0000\u0000\u031b\u02cf\u0001\u0000\u0000\u0000\u031b\u02d3"+
		"\u0001\u0000\u0000\u0000\u031b\u02d7\u0001\u0000\u0000\u0000\u031b\u02db"+
		"\u0001\u0000\u0000\u0000\u031b\u02df\u0001\u0000\u0000\u0000\u031b\u02e3"+
		"\u0001\u0000\u0000\u0000\u031b\u02e7\u0001\u0000\u0000\u0000\u031b\u02eb"+
		"\u0001\u0000\u0000\u0000\u031b\u02ef\u0001\u0000\u0000\u0000\u031b\u02f3"+
		"\u0001\u0000\u0000\u0000\u031b\u02f7\u0001\u0000\u0000\u0000\u031b\u02fb"+
		"\u0001\u0000\u0000\u0000\u031b\u02ff\u0001\u0000\u0000\u0000\u031b\u0303"+
		"\u0001\u0000\u0000\u0000\u031b\u0307\u0001\u0000\u0000\u0000\u031b\u030b"+
		"\u0001\u0000\u0000\u0000\u031b\u030f\u0001\u0000\u0000\u0000\u031b\u0313"+
		"\u0001\u0000\u0000\u0000\u031b\u0317\u0001\u0000\u0000\u0000\u031c7\u0001"+
		"\u0000\u0000\u0000\u031d\u031e\u0005\u0011\u0000\u0000\u031e\u031f\u0007"+
		"\u0002\u0000\u0000\u031f9\u0001\u0000\u0000\u0000\u0320\u0321\u0005\u0011"+
		"\u0000\u0000\u0321\u0322\u0007\u0003\u0000\u0000\u0322;\u0001\u0000\u0000"+
		"\u0000\u0323\u0331\u0005\u0011\u0000\u0000\u0324\u0332\u0005\u0094\u0000"+
		"\u0000\u0325\u0332\u0005D\u0000\u0000\u0326\u0332\u0005\u0095\u0000\u0000"+
		"\u0327\u0332\u0005\u0096\u0000\u0000\u0328\u0329\u0005\u00cc\u0000\u0000"+
		"\u0329\u032a\u0005\u0011\u0000\u0000\u032a\u0332\u0005\u00a3\u0000\u0000"+
		"\u032b\u032c\u0005U\u0000\u0000\u032c\u032d\u0005\u0011\u0000\u0000\u032d"+
		"\u0332\u0005\u00bf\u0000\u0000\u032e\u032f\u0005\u00cd\u0000\u0000\u032f"+
		"\u0330\u0005\u0011\u0000\u0000\u0330\u0332\u0005\u00c0\u0000\u0000\u0331"+
		"\u0324\u0001\u0000\u0000\u0000\u0331\u0325\u0001\u0000\u0000\u0000\u0331"+
		"\u0326\u0001\u0000\u0000\u0000\u0331\u0327\u0001\u0000\u0000\u0000\u0331"+
		"\u0328\u0001\u0000\u0000\u0000\u0331\u032b\u0001\u0000\u0000\u0000\u0331"+
		"\u032e\u0001\u0000\u0000\u0000\u0332=\u0001\u0000\u0000\u0000\u0333\u0334"+
		"\u0005\u0011\u0000\u0000\u0334\u0335\u0007\u0004\u0000\u0000\u0335?\u0001"+
		"\u0000\u0000\u0000\u0336\u0347\u0005\u0011\u0000\u0000\u0337\u0348\u0005"+
		"9\u0000\u0000\u0338\u0348\u0005.\u0000\u0000\u0339\u0348\u0005:\u0000"+
		"\u0000\u033a\u0348\u0005/\u0000\u0000\u033b\u0348\u0005)\u0000\u0000\u033c"+
		"\u0348\u0005\u009b\u0000\u0000\u033d\u033e\u0005+\u0000\u0000\u033e\u0348"+
		"\u0003B!\u0000\u033f\u0340\u0005,\u0000\u0000\u0340\u0348\u0003D\"\u0000"+
		"\u0341\u0342\u0005-\u0000\u0000\u0342\u0348\u0003B!\u0000\u0343\u0344"+
		"\u0005*\u0000\u0000\u0344\u0348\u0003D\"\u0000\u0345\u0346\u00053\u0000"+
		"\u0000\u0346\u0348\u0003F#\u0000\u0347\u0337\u0001\u0000\u0000\u0000\u0347"+
		"\u0338\u0001\u0000\u0000\u0000\u0347\u0339\u0001\u0000\u0000\u0000\u0347"+
		"\u033a\u0001\u0000\u0000\u0000\u0347\u033b\u0001\u0000\u0000\u0000\u0347"+
		"\u033c\u0001\u0000\u0000\u0000\u0347\u033d\u0001\u0000\u0000\u0000\u0347"+
		"\u033f\u0001\u0000\u0000\u0000\u0347\u0341\u0001\u0000\u0000\u0000\u0347"+
		"\u0343\u0001\u0000\u0000\u0000\u0347\u0345\u0001\u0000\u0000\u0000\u0348"+
		"A\u0001\u0000\u0000\u0000\u0349\u0353\u0005\u0011\u0000\u0000\u034a\u0354"+
		"\u0005.\u0000\u0000\u034b\u0354\u0005/\u0000\u0000\u034c\u0354\u0005)"+
		"\u0000\u0000\u034d\u034e\u0005*\u0000\u0000\u034e\u034f\u0005\u0011\u0000"+
		"\u0000\u034f\u0354\u0005\u009b\u0000\u0000\u0350\u0351\u0005,\u0000\u0000"+
		"\u0351\u0352\u0005\u0011\u0000\u0000\u0352\u0354\u0005\u009b\u0000\u0000"+
		"\u0353\u034a\u0001\u0000\u0000\u0000\u0353\u034b\u0001\u0000\u0000\u0000"+
		"\u0353\u034c\u0001\u0000\u0000\u0000\u0353\u034d\u0001\u0000\u0000\u0000"+
		"\u0353\u0350\u0001\u0000\u0000\u0000\u0353\u0354\u0001\u0000\u0000\u0000"+
		"\u0354C\u0001\u0000\u0000\u0000\u0355\u0357\u0005\u0011\u0000\u0000\u0356"+
		"\u0358\u0007\u0005\u0000\u0000\u0357\u0356\u0001\u0000\u0000\u0000\u0357"+
		"\u0358\u0001\u0000\u0000\u0000\u0358E\u0001\u0000\u0000\u0000\u0359\u035b"+
		"\u0005\u0011\u0000\u0000\u035a\u035c\u0007\u0006\u0000\u0000\u035b\u035a"+
		"\u0001\u0000\u0000\u0000\u035b\u035c\u0001\u0000\u0000\u0000\u035cG\u0001"+
		"\u0000\u0000\u0000\u035d\u0370\u0005\u0011\u0000\u0000\u035e\u0371\u0005"+
		"a\u0000\u0000\u035f\u0360\u0005b\u0000\u0000\u0360\u0361\u0005\u0011\u0000"+
		"\u0000\u0361\u0371\u0005$\u0000\u0000\u0362\u0371\u0005D\u0000\u0000\u0363"+
		"\u0366\u0005\u009c\u0000\u0000\u0364\u0365\u0005\u0011\u0000\u0000\u0365"+
		"\u0367\u0005\u00c4\u0000\u0000\u0366\u0364\u0001\u0000\u0000\u0000\u0366"+
		"\u0367\u0001\u0000\u0000\u0000\u0367\u0371\u0001\u0000\u0000\u0000\u0368"+
		"\u0371\u0005\u009d\u0000\u0000\u0369\u036a\u0005\u00d0\u0000\u0000\u036a"+
		"\u036b\u0005\u0011\u0000\u0000\u036b\u0371\u0005\u00c4\u0000\u0000\u036c"+
		"\u0371\u0005\u009e\u0000\u0000\u036d\u0371\u0005\u009f\u0000\u0000\u036e"+
		"\u0371\u0005\u00a0\u0000\u0000\u036f\u0371\u0005\u00a1\u0000\u0000\u0370"+
		"\u035e\u0001\u0000\u0000\u0000\u0370\u035f\u0001\u0000\u0000\u0000\u0370"+
		"\u0362\u0001\u0000\u0000\u0000\u0370\u0363\u0001\u0000\u0000\u0000\u0370"+
		"\u0368\u0001\u0000\u0000\u0000\u0370\u0369\u0001\u0000\u0000\u0000\u0370"+
		"\u036c\u0001\u0000\u0000\u0000\u0370\u036d\u0001\u0000\u0000\u0000\u0370"+
		"\u036e\u0001\u0000\u0000\u0000\u0370\u036f\u0001\u0000\u0000\u0000\u0371"+
		"I\u0001\u0000\u0000\u0000\u0372\u0373\u0005\u0011\u0000\u0000\u0373\u0374"+
		"\u0005=\u0000\u0000\u0374K\u0001\u0000\u0000\u0000\u0375\u0376\u0005\u0011"+
		"\u0000\u0000\u0376\u0377\u0007\u0007\u0000\u0000\u0377M\u0001\u0000\u0000"+
		"\u0000\u0378\u037f\u0005\u0011\u0000\u0000\u0379\u0380\u0005\u00a3\u0000"+
		"\u0000\u037a\u0380\u0005\u00a4\u0000\u0000\u037b\u0380\u0005\u00a5\u0000"+
		"\u0000\u037c\u0380\u0003P(\u0000\u037d\u0380\u0005\u00a7\u0000\u0000\u037e"+
		"\u0380\u0005)\u0000\u0000\u037f\u0379\u0001\u0000\u0000\u0000\u037f\u037a"+
		"\u0001\u0000\u0000\u0000\u037f\u037b\u0001\u0000\u0000\u0000\u037f\u037c"+
		"\u0001\u0000\u0000\u0000\u037f\u037d\u0001\u0000\u0000\u0000\u037f\u037e"+
		"\u0001\u0000\u0000\u0000\u0380O\u0001\u0000\u0000\u0000\u0381\u0382\u0005"+
		"\u0011\u0000\u0000\u0382\u0383\u0007\u0005\u0000\u0000\u0383Q\u0001\u0000"+
		"\u0000\u0000\u0384\u0385\u0005\u0011\u0000\u0000\u0385\u0386\u0007\b\u0000"+
		"\u0000\u0386S\u0001\u0000\u0000\u0000\u0387\u0388\u0005\u0011\u0000\u0000"+
		"\u0388\u0389\u0007\t\u0000\u0000\u0389U\u0001\u0000\u0000\u0000\u038a"+
		"\u038b\u0005\u0011\u0000\u0000\u038b\u038c\u0007\n\u0000\u0000\u038cW"+
		"\u0001\u0000\u0000\u0000\u038d\u038e\u0005\u0011\u0000\u0000\u038e\u038f"+
		"\u0005\u00a8\u0000\u0000\u038fY\u0001\u0000\u0000\u0000\u0390\u0391\u0005"+
		"\u0011\u0000\u0000\u0391\u0392\u0007\u000b\u0000\u0000\u0392[\u0001\u0000"+
		"\u0000\u0000\u0393\u0394\u0005\u0011\u0000\u0000\u0394\u0395\u0007\f\u0000"+
		"\u0000\u0395]\u0001\u0000\u0000\u0000\u0396\u0397\u0005\u0011\u0000\u0000"+
		"\u0397\u0398\u0007\r\u0000\u0000\u0398_\u0001\u0000\u0000\u0000\u0399"+
		"\u039a\u0005\u0011\u0000\u0000\u039a\u039b\u0005/\u0000\u0000\u039b\u039c"+
		"\u0005\u0011\u0000\u0000\u039c\u039d\u0007\u000e\u0000\u0000\u039da\u0001"+
		"\u0000\u0000\u0000\u039e\u039f\u0005\u0011\u0000\u0000\u039f\u03a0\u0007"+
		"\u000f\u0000\u0000\u03a0c\u0001\u0000\u0000\u0000\u03a1\u03a2\u0005\u0011"+
		"\u0000\u0000\u03a2\u03a3\u0007\t\u0000\u0000\u03a3e\u0001\u0000\u0000"+
		"\u0000\u03a4\u03ab\u0005\u0011\u0000\u0000\u03a5\u03ac\u0005D\u0000\u0000"+
		"\u03a6\u03ac\u0005\u00af\u0000\u0000\u03a7\u03ac\u0005/\u0000\u0000\u03a8"+
		"\u03a9\u0005U\u0000\u0000\u03a9\u03aa\u0005\u0011\u0000\u0000\u03aa\u03ac"+
		"\u0005\u00a3\u0000\u0000\u03ab\u03a5\u0001\u0000\u0000\u0000\u03ab\u03a6"+
		"\u0001\u0000\u0000\u0000\u03ab\u03a7\u0001\u0000\u0000\u0000\u03ab\u03a8"+
		"\u0001\u0000\u0000\u0000\u03acg\u0001\u0000\u0000\u0000\u03ad\u03bc\u0005"+
		"\u0011\u0000\u0000\u03ae\u03b1\u0005.\u0000\u0000\u03af\u03b0\u0005\u0011"+
		"\u0000\u0000\u03b0\u03b2\u0005p\u0000\u0000\u03b1\u03af\u0001\u0000\u0000"+
		"\u0000\u03b1\u03b2\u0001\u0000\u0000\u0000\u03b2\u03bd\u0001\u0000\u0000"+
		"\u0000\u03b3\u03bd\u0005(\u0000\u0000\u03b4\u03bd\u0005\u00c8\u0000\u0000"+
		"\u03b5\u03bd\u0005\u0005\u0000\u0000\u03b6\u03bd\u0005)\u0000\u0000\u03b7"+
		"\u03b8\u0005\u00cb\u0000\u0000\u03b8\u03b9\u0005\u0011\u0000\u0000\u03b9"+
		"\u03bd\u0005\u00ca\u0000\u0000\u03ba\u03bb\u0005\u00ce\u0000\u0000\u03bb"+
		"\u03bd\u0003j5\u0000\u03bc\u03ae\u0001\u0000\u0000\u0000\u03bc\u03b3\u0001"+
		"\u0000\u0000\u0000\u03bc\u03b4\u0001\u0000\u0000\u0000\u03bc\u03b5\u0001"+
		"\u0000\u0000\u0000\u03bc\u03b6\u0001\u0000\u0000\u0000\u03bc\u03b7\u0001"+
		"\u0000\u0000\u0000\u03bc\u03ba\u0001\u0000\u0000\u0000\u03bdi\u0001\u0000"+
		"\u0000\u0000\u03be\u03bf\u0005\u0011\u0000\u0000\u03bf\u03c0\u0007\u0010"+
		"\u0000\u0000\u03c0k\u0001\u0000\u0000\u0000\u03c1\u03c2\u0005\u0011\u0000"+
		"\u0000\u03c2\u03c3\u0007\u0011\u0000\u0000\u03c3m\u0001\u0000\u0000\u0000"+
		"\u03c4\u03ca\u0005\u0011\u0000\u0000\u03c5\u03cb\u0005)\u0000\u0000\u03c6"+
		"\u03cb\u0005(\u0000\u0000\u03c7\u03c8\u0005\u00cb\u0000\u0000\u03c8\u03c9"+
		"\u0005\u0011\u0000\u0000\u03c9\u03cb\u0005\u00ca\u0000\u0000\u03ca\u03c5"+
		"\u0001\u0000\u0000\u0000\u03ca\u03c6\u0001\u0000\u0000\u0000\u03ca\u03c7"+
		"\u0001\u0000\u0000\u0000\u03cbo\u0001\u0000\u0000\u0000\u03cc\u03cd\u0005"+
		"\u0011\u0000\u0000\u03cd\u03d4\u0005\u00d1\u0000\u0000\u03ce\u03cf\u0005"+
		"6\u0000\u0000\u03cf\u03d5\u0003r9\u0000\u03d0\u03d1\u00055\u0000\u0000"+
		"\u03d1\u03d5\u0003r9\u0000\u03d2\u03d5\u0005K\u0000\u0000\u03d3\u03d5"+
		"\u0005\u00c5\u0000\u0000\u03d4\u03ce\u0001\u0000\u0000\u0000\u03d4\u03d0"+
		"\u0001\u0000\u0000\u0000\u03d4\u03d2\u0001\u0000\u0000\u0000\u03d4\u03d3"+
		"\u0001\u0000\u0000\u0000\u03d5q\u0001\u0000\u0000\u0000\u03d6\u03d7\u0005"+
		"\u0011\u0000\u0000\u03d7\u03d8\u0007\u0012\u0000\u0000\u03d8s\u0001\u0000"+
		"\u0000\u0000\u03d9\u03da\u0005\u0011\u0000\u0000\u03da\u03db\u00054\u0000"+
		"\u0000\u03dbu\u0001\u0000\u0000\u0000\u03dc\u03dd\u0005\u0011\u0000\u0000"+
		"\u03dd\u03de\u0007\u0013\u0000\u0000\u03dew\u0001\u0000\u0000\u0000\u03df"+
		"\u03e0\u0005\u0011\u0000\u0000\u03e0\u03e1\u0007\u0014\u0000\u0000\u03e1"+
		"y\u0001\u0000\u0000\u0000\u03e2\u03e3\u0005\u0011\u0000\u0000\u03e3\u03e4"+
		"\u0007\u000f\u0000\u0000\u03e4{\u0001\u0000\u0000\u0000\u03e5\u03e8\u0005"+
		"\u0011\u0000\u0000\u03e6\u03e9\u0005\u00b4\u0000\u0000\u03e7\u03e9\u0003"+
		"~?\u0000\u03e8\u03e6\u0001\u0000\u0000\u0000\u03e8\u03e7\u0001\u0000\u0000"+
		"\u0000\u03e9}\u0001\u0000\u0000\u0000\u03ea\u03eb\u0005\u0011\u0000\u0000"+
		"\u03eb\u03ec\u0007\u0015\u0000\u0000\u03ec\u007f\u0001\u0000\u0000\u0000"+
		"\u03ed\u03ee\u0005\u0011\u0000\u0000\u03ee\u03ef\u0007\t\u0000\u0000\u03ef"+
		"\u0081\u0001\u0000\u0000\u0000\u03f0\u03f1\u0005\u0011\u0000\u0000\u03f1"+
		"\u03f2\u0007\t\u0000\u0000\u03f2\u0083\u0001\u0000\u0000\u0000\u03f3\u03f4"+
		"\u0005\u0011\u0000\u0000\u03f4\u03f5\u0007\u0016\u0000\u0000\u03f5\u0085"+
		"\u0001\u0000\u0000\u0000\u03f6\u03f7\u0005\u0011\u0000\u0000\u03f7\u03f8"+
		"\u0007\u0017\u0000\u0000\u03f8\u0087\u0001\u0000\u0000\u0000\u03f9\u03fa"+
		"\u0005\u0011\u0000\u0000\u03fa\u03fb\u0007\u0018\u0000\u0000\u03fb\u0089"+
		"\u0001\u0000\u0000\u0000\u03fc\u03fd\u0005\u0011\u0000\u0000\u03fd\u03fe"+
		"\u0007\u0019\u0000\u0000\u03fe\u008b\u0001\u0000\u0000\u0000\u03ff\u0400"+
		"\u0005\u0011\u0000\u0000\u0400\u0401\u0007\u001a\u0000\u0000\u0401\u008d"+
		"\u0001\u0000\u0000\u0000\u0402\u0409\u0005\u0011\u0000\u0000\u0403\u040a"+
		"\u0005\u0094\u0000\u0000\u0404\u040a\u0005\u0095\u0000\u0000\u0405\u040a"+
		"\u0005\u00bd\u0000\u0000\u0406\u0407\u0005\u00cd\u0000\u0000\u0407\u0408"+
		"\u0005\u0011\u0000\u0000\u0408\u040a\u0005\u00c0\u0000\u0000\u0409\u0403"+
		"\u0001\u0000\u0000\u0000\u0409\u0404\u0001\u0000\u0000\u0000\u0409\u0405"+
		"\u0001\u0000\u0000\u0000\u0409\u0406\u0001\u0000\u0000\u0000\u040a\u008f"+
		"\u0001\u0000\u0000\u0000\u040b\u0416\u0005\u0011\u0000\u0000\u040c\u0417"+
		"\u0005J\u0000\u0000\u040d\u0417\u0005\u00be\u0000\u0000\u040e\u0417\u0005"+
		"\u0095\u0000\u0000\u040f\u0411\u0005R\u0000\u0000\u0410\u0412\u0003\u0092"+
		"I\u0000\u0411\u0410\u0001\u0000\u0000\u0000\u0411\u0412\u0001\u0000\u0000"+
		"\u0000\u0412\u0417\u0001\u0000\u0000\u0000\u0413\u0417\u0005]\u0000\u0000"+
		"\u0414\u0417\u0005^\u0000\u0000\u0415\u0417\u0005j\u0000\u0000\u0416\u040c"+
		"\u0001\u0000\u0000\u0000\u0416\u040d\u0001\u0000\u0000\u0000\u0416\u040e"+
		"\u0001\u0000\u0000\u0000\u0416\u040f\u0001\u0000\u0000\u0000\u0416\u0413"+
		"\u0001\u0000\u0000\u0000\u0416\u0414\u0001\u0000\u0000\u0000\u0416\u0415"+
		"\u0001\u0000\u0000\u0000\u0416\u0417\u0001\u0000\u0000\u0000\u0417\u0091"+
		"\u0001\u0000\u0000\u0000\u0418\u0419\u0005\u0011\u0000\u0000\u0419\u041a"+
		"\u0005T\u0000\u0000\u041a\u0093\u0001\u0000\u0000\u0000\u041b\u041d\u0005"+
		"\u0011\u0000\u0000\u041c\u041e\u0007\u001b\u0000\u0000\u041d\u041c\u0001"+
		"\u0000\u0000\u0000\u041d\u041e\u0001\u0000\u0000\u0000\u041e\u0095\u0001"+
		"\u0000\u0000\u0000]\u0099\u00a1\u00a8\u00ad\u00b1\u00b4\u00b8\u00ba\u00bc"+
		"\u00c2\u00ca\u00d1\u00d6\u00da\u00dd\u00e1\u00e3\u00e5\u00eb\u00f3\u00f5"+
		"\u00f9\u00fb\u0121\u0139\u0148\u014e\u0155\u015c\u0167\u01a9\u01db\u01fd"+
		"\u0207\u027d\u0281\u0285\u0289\u028d\u0291\u0295\u0299\u029d\u02a1\u02a5"+
		"\u02a9\u02ad\u02b1\u02b5\u02b9\u02bd\u02c1\u02c5\u02c9\u02cd\u02d1\u02d5"+
		"\u02d9\u02dd\u02e1\u02e5\u02e9\u02ed\u02f1\u02f5\u02f9\u02fd\u0301\u0305"+
		"\u0309\u030d\u0311\u0315\u0319\u031b\u0331\u0347\u0353\u0357\u035b\u0366"+
		"\u0370\u037f\u03ab\u03b1\u03bc\u03ca\u03d4\u03e8\u0409\u0411\u0416\u041d";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}