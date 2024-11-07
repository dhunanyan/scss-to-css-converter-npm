// Generated from c:/programming/react/scss-to-css-converter/server/controllers/SCSSParser.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link SCSSParser}.
 */
public interface SCSSParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link SCSSParser#stylesheet}.
	 * @param ctx the parse tree
	 */
	void enterStylesheet(SCSSParser.StylesheetContext ctx);
	/**
	 * Exit a parse tree produced by {@link SCSSParser#stylesheet}.
	 * @param ctx the parse tree
	 */
	void exitStylesheet(SCSSParser.StylesheetContext ctx);
	/**
	 * Enter a parse tree produced by {@link SCSSParser#block}.
	 * @param ctx the parse tree
	 */
	void enterBlock(SCSSParser.BlockContext ctx);
	/**
	 * Exit a parse tree produced by {@link SCSSParser#block}.
	 * @param ctx the parse tree
	 */
	void exitBlock(SCSSParser.BlockContext ctx);
	/**
	 * Enter a parse tree produced by {@link SCSSParser#nestedBlock}.
	 * @param ctx the parse tree
	 */
	void enterNestedBlock(SCSSParser.NestedBlockContext ctx);
	/**
	 * Exit a parse tree produced by {@link SCSSParser#nestedBlock}.
	 * @param ctx the parse tree
	 */
	void exitNestedBlock(SCSSParser.NestedBlockContext ctx);
	/**
	 * Enter a parse tree produced by {@link SCSSParser#selector}.
	 * @param ctx the parse tree
	 */
	void enterSelector(SCSSParser.SelectorContext ctx);
	/**
	 * Exit a parse tree produced by {@link SCSSParser#selector}.
	 * @param ctx the parse tree
	 */
	void exitSelector(SCSSParser.SelectorContext ctx);
	/**
	 * Enter a parse tree produced by {@link SCSSParser#pseudoClass}.
	 * @param ctx the parse tree
	 */
	void enterPseudoClass(SCSSParser.PseudoClassContext ctx);
	/**
	 * Exit a parse tree produced by {@link SCSSParser#pseudoClass}.
	 * @param ctx the parse tree
	 */
	void exitPseudoClass(SCSSParser.PseudoClassContext ctx);
	/**
	 * Enter a parse tree produced by {@link SCSSParser#pseudoElement}.
	 * @param ctx the parse tree
	 */
	void enterPseudoElement(SCSSParser.PseudoElementContext ctx);
	/**
	 * Exit a parse tree produced by {@link SCSSParser#pseudoElement}.
	 * @param ctx the parse tree
	 */
	void exitPseudoElement(SCSSParser.PseudoElementContext ctx);
	/**
	 * Enter a parse tree produced by {@link SCSSParser#doubleColon}.
	 * @param ctx the parse tree
	 */
	void enterDoubleColon(SCSSParser.DoubleColonContext ctx);
	/**
	 * Exit a parse tree produced by {@link SCSSParser#doubleColon}.
	 * @param ctx the parse tree
	 */
	void exitDoubleColon(SCSSParser.DoubleColonContext ctx);
	/**
	 * Enter a parse tree produced by {@link SCSSParser#idSelector}.
	 * @param ctx the parse tree
	 */
	void enterIdSelector(SCSSParser.IdSelectorContext ctx);
	/**
	 * Exit a parse tree produced by {@link SCSSParser#idSelector}.
	 * @param ctx the parse tree
	 */
	void exitIdSelector(SCSSParser.IdSelectorContext ctx);
	/**
	 * Enter a parse tree produced by {@link SCSSParser#classSelector}.
	 * @param ctx the parse tree
	 */
	void enterClassSelector(SCSSParser.ClassSelectorContext ctx);
	/**
	 * Exit a parse tree produced by {@link SCSSParser#classSelector}.
	 * @param ctx the parse tree
	 */
	void exitClassSelector(SCSSParser.ClassSelectorContext ctx);
	/**
	 * Enter a parse tree produced by {@link SCSSParser#tagSelector}.
	 * @param ctx the parse tree
	 */
	void enterTagSelector(SCSSParser.TagSelectorContext ctx);
	/**
	 * Exit a parse tree produced by {@link SCSSParser#tagSelector}.
	 * @param ctx the parse tree
	 */
	void exitTagSelector(SCSSParser.TagSelectorContext ctx);
	/**
	 * Enter a parse tree produced by {@link SCSSParser#identifier}.
	 * @param ctx the parse tree
	 */
	void enterIdentifier(SCSSParser.IdentifierContext ctx);
	/**
	 * Exit a parse tree produced by {@link SCSSParser#identifier}.
	 * @param ctx the parse tree
	 */
	void exitIdentifier(SCSSParser.IdentifierContext ctx);
	/**
	 * Enter a parse tree produced by {@link SCSSParser#declaration}.
	 * @param ctx the parse tree
	 */
	void enterDeclaration(SCSSParser.DeclarationContext ctx);
	/**
	 * Exit a parse tree produced by {@link SCSSParser#declaration}.
	 * @param ctx the parse tree
	 */
	void exitDeclaration(SCSSParser.DeclarationContext ctx);
	/**
	 * Enter a parse tree produced by {@link SCSSParser#propertyValue}.
	 * @param ctx the parse tree
	 */
	void enterPropertyValue(SCSSParser.PropertyValueContext ctx);
	/**
	 * Exit a parse tree produced by {@link SCSSParser#propertyValue}.
	 * @param ctx the parse tree
	 */
	void exitPropertyValue(SCSSParser.PropertyValueContext ctx);
	/**
	 * Enter a parse tree produced by {@link SCSSParser#numValue}.
	 * @param ctx the parse tree
	 */
	void enterNumValue(SCSSParser.NumValueContext ctx);
	/**
	 * Exit a parse tree produced by {@link SCSSParser#numValue}.
	 * @param ctx the parse tree
	 */
	void exitNumValue(SCSSParser.NumValueContext ctx);
	/**
	 * Enter a parse tree produced by {@link SCSSParser#fourNumValue}.
	 * @param ctx the parse tree
	 */
	void enterFourNumValue(SCSSParser.FourNumValueContext ctx);
	/**
	 * Exit a parse tree produced by {@link SCSSParser#fourNumValue}.
	 * @param ctx the parse tree
	 */
	void exitFourNumValue(SCSSParser.FourNumValueContext ctx);
	/**
	 * Enter a parse tree produced by {@link SCSSParser#threeNumValue}.
	 * @param ctx the parse tree
	 */
	void enterThreeNumValue(SCSSParser.ThreeNumValueContext ctx);
	/**
	 * Exit a parse tree produced by {@link SCSSParser#threeNumValue}.
	 * @param ctx the parse tree
	 */
	void exitThreeNumValue(SCSSParser.ThreeNumValueContext ctx);
	/**
	 * Enter a parse tree produced by {@link SCSSParser#twoNumValue}.
	 * @param ctx the parse tree
	 */
	void enterTwoNumValue(SCSSParser.TwoNumValueContext ctx);
	/**
	 * Exit a parse tree produced by {@link SCSSParser#twoNumValue}.
	 * @param ctx the parse tree
	 */
	void exitTwoNumValue(SCSSParser.TwoNumValueContext ctx);
	/**
	 * Enter a parse tree produced by {@link SCSSParser#oneNumValue}.
	 * @param ctx the parse tree
	 */
	void enterOneNumValue(SCSSParser.OneNumValueContext ctx);
	/**
	 * Exit a parse tree produced by {@link SCSSParser#oneNumValue}.
	 * @param ctx the parse tree
	 */
	void exitOneNumValue(SCSSParser.OneNumValueContext ctx);
	/**
	 * Enter a parse tree produced by {@link SCSSParser#whiteSpaceWithSpaceChar}.
	 * @param ctx the parse tree
	 */
	void enterWhiteSpaceWithSpaceChar(SCSSParser.WhiteSpaceWithSpaceCharContext ctx);
	/**
	 * Exit a parse tree produced by {@link SCSSParser#whiteSpaceWithSpaceChar}.
	 * @param ctx the parse tree
	 */
	void exitWhiteSpaceWithSpaceChar(SCSSParser.WhiteSpaceWithSpaceCharContext ctx);
	/**
	 * Enter a parse tree produced by {@link SCSSParser#absLengthValue}.
	 * @param ctx the parse tree
	 */
	void enterAbsLengthValue(SCSSParser.AbsLengthValueContext ctx);
	/**
	 * Exit a parse tree produced by {@link SCSSParser#absLengthValue}.
	 * @param ctx the parse tree
	 */
	void exitAbsLengthValue(SCSSParser.AbsLengthValueContext ctx);
	/**
	 * Enter a parse tree produced by {@link SCSSParser#fontRelativeValue}.
	 * @param ctx the parse tree
	 */
	void enterFontRelativeValue(SCSSParser.FontRelativeValueContext ctx);
	/**
	 * Exit a parse tree produced by {@link SCSSParser#fontRelativeValue}.
	 * @param ctx the parse tree
	 */
	void exitFontRelativeValue(SCSSParser.FontRelativeValueContext ctx);
	/**
	 * Enter a parse tree produced by {@link SCSSParser#viewportRelativeValue}.
	 * @param ctx the parse tree
	 */
	void enterViewportRelativeValue(SCSSParser.ViewportRelativeValueContext ctx);
	/**
	 * Exit a parse tree produced by {@link SCSSParser#viewportRelativeValue}.
	 * @param ctx the parse tree
	 */
	void exitViewportRelativeValue(SCSSParser.ViewportRelativeValueContext ctx);
	/**
	 * Enter a parse tree produced by {@link SCSSParser#angleValue}.
	 * @param ctx the parse tree
	 */
	void enterAngleValue(SCSSParser.AngleValueContext ctx);
	/**
	 * Exit a parse tree produced by {@link SCSSParser#angleValue}.
	 * @param ctx the parse tree
	 */
	void exitAngleValue(SCSSParser.AngleValueContext ctx);
	/**
	 * Enter a parse tree produced by {@link SCSSParser#resolutionValue}.
	 * @param ctx the parse tree
	 */
	void enterResolutionValue(SCSSParser.ResolutionValueContext ctx);
	/**
	 * Exit a parse tree produced by {@link SCSSParser#resolutionValue}.
	 * @param ctx the parse tree
	 */
	void exitResolutionValue(SCSSParser.ResolutionValueContext ctx);
	/**
	 * Enter a parse tree produced by {@link SCSSParser#freqValue}.
	 * @param ctx the parse tree
	 */
	void enterFreqValue(SCSSParser.FreqValueContext ctx);
	/**
	 * Exit a parse tree produced by {@link SCSSParser#freqValue}.
	 * @param ctx the parse tree
	 */
	void exitFreqValue(SCSSParser.FreqValueContext ctx);
	/**
	 * Enter a parse tree produced by {@link SCSSParser#timeValue}.
	 * @param ctx the parse tree
	 */
	void enterTimeValue(SCSSParser.TimeValueContext ctx);
	/**
	 * Exit a parse tree produced by {@link SCSSParser#timeValue}.
	 * @param ctx the parse tree
	 */
	void exitTimeValue(SCSSParser.TimeValueContext ctx);
	/**
	 * Enter a parse tree produced by {@link SCSSParser#percentageValue}.
	 * @param ctx the parse tree
	 */
	void enterPercentageValue(SCSSParser.PercentageValueContext ctx);
	/**
	 * Exit a parse tree produced by {@link SCSSParser#percentageValue}.
	 * @param ctx the parse tree
	 */
	void exitPercentageValue(SCSSParser.PercentageValueContext ctx);
	/**
	 * Enter a parse tree produced by {@link SCSSParser#property}.
	 * @param ctx the parse tree
	 */
	void enterProperty(SCSSParser.PropertyContext ctx);
	/**
	 * Exit a parse tree produced by {@link SCSSParser#property}.
	 * @param ctx the parse tree
	 */
	void exitProperty(SCSSParser.PropertyContext ctx);
	/**
	 * Enter a parse tree produced by {@link SCSSParser#backgroundOptions}.
	 * @param ctx the parse tree
	 */
	void enterBackgroundOptions(SCSSParser.BackgroundOptionsContext ctx);
	/**
	 * Exit a parse tree produced by {@link SCSSParser#backgroundOptions}.
	 * @param ctx the parse tree
	 */
	void exitBackgroundOptions(SCSSParser.BackgroundOptionsContext ctx);
	/**
	 * Enter a parse tree produced by {@link SCSSParser#alignmentOptions}.
	 * @param ctx the parse tree
	 */
	void enterAlignmentOptions(SCSSParser.AlignmentOptionsContext ctx);
	/**
	 * Exit a parse tree produced by {@link SCSSParser#alignmentOptions}.
	 * @param ctx the parse tree
	 */
	void exitAlignmentOptions(SCSSParser.AlignmentOptionsContext ctx);
	/**
	 * Enter a parse tree produced by {@link SCSSParser#animationOptions}.
	 * @param ctx the parse tree
	 */
	void enterAnimationOptions(SCSSParser.AnimationOptionsContext ctx);
	/**
	 * Exit a parse tree produced by {@link SCSSParser#animationOptions}.
	 * @param ctx the parse tree
	 */
	void exitAnimationOptions(SCSSParser.AnimationOptionsContext ctx);
	/**
	 * Enter a parse tree produced by {@link SCSSParser#bookmarkOptions}.
	 * @param ctx the parse tree
	 */
	void enterBookmarkOptions(SCSSParser.BookmarkOptionsContext ctx);
	/**
	 * Exit a parse tree produced by {@link SCSSParser#bookmarkOptions}.
	 * @param ctx the parse tree
	 */
	void exitBookmarkOptions(SCSSParser.BookmarkOptionsContext ctx);
	/**
	 * Enter a parse tree produced by {@link SCSSParser#borderOptions}.
	 * @param ctx the parse tree
	 */
	void enterBorderOptions(SCSSParser.BorderOptionsContext ctx);
	/**
	 * Exit a parse tree produced by {@link SCSSParser#borderOptions}.
	 * @param ctx the parse tree
	 */
	void exitBorderOptions(SCSSParser.BorderOptionsContext ctx);
	/**
	 * Enter a parse tree produced by {@link SCSSParser#borderBottomTopOptions}.
	 * @param ctx the parse tree
	 */
	void enterBorderBottomTopOptions(SCSSParser.BorderBottomTopOptionsContext ctx);
	/**
	 * Exit a parse tree produced by {@link SCSSParser#borderBottomTopOptions}.
	 * @param ctx the parse tree
	 */
	void exitBorderBottomTopOptions(SCSSParser.BorderBottomTopOptionsContext ctx);
	/**
	 * Enter a parse tree produced by {@link SCSSParser#borderRightLeftOptions}.
	 * @param ctx the parse tree
	 */
	void enterBorderRightLeftOptions(SCSSParser.BorderRightLeftOptionsContext ctx);
	/**
	 * Exit a parse tree produced by {@link SCSSParser#borderRightLeftOptions}.
	 * @param ctx the parse tree
	 */
	void exitBorderRightLeftOptions(SCSSParser.BorderRightLeftOptionsContext ctx);
	/**
	 * Enter a parse tree produced by {@link SCSSParser#borderImageOptions}.
	 * @param ctx the parse tree
	 */
	void enterBorderImageOptions(SCSSParser.BorderImageOptionsContext ctx);
	/**
	 * Exit a parse tree produced by {@link SCSSParser#borderImageOptions}.
	 * @param ctx the parse tree
	 */
	void exitBorderImageOptions(SCSSParser.BorderImageOptionsContext ctx);
	/**
	 * Enter a parse tree produced by {@link SCSSParser#boxOptions}.
	 * @param ctx the parse tree
	 */
	void enterBoxOptions(SCSSParser.BoxOptionsContext ctx);
	/**
	 * Exit a parse tree produced by {@link SCSSParser#boxOptions}.
	 * @param ctx the parse tree
	 */
	void exitBoxOptions(SCSSParser.BoxOptionsContext ctx);
	/**
	 * Enter a parse tree produced by {@link SCSSParser#captionOptions}.
	 * @param ctx the parse tree
	 */
	void enterCaptionOptions(SCSSParser.CaptionOptionsContext ctx);
	/**
	 * Exit a parse tree produced by {@link SCSSParser#captionOptions}.
	 * @param ctx the parse tree
	 */
	void exitCaptionOptions(SCSSParser.CaptionOptionsContext ctx);
	/**
	 * Enter a parse tree produced by {@link SCSSParser#colorOptions}.
	 * @param ctx the parse tree
	 */
	void enterColorOptions(SCSSParser.ColorOptionsContext ctx);
	/**
	 * Exit a parse tree produced by {@link SCSSParser#colorOptions}.
	 * @param ctx the parse tree
	 */
	void exitColorOptions(SCSSParser.ColorOptionsContext ctx);
	/**
	 * Enter a parse tree produced by {@link SCSSParser#columnOptions}.
	 * @param ctx the parse tree
	 */
	void enterColumnOptions(SCSSParser.ColumnOptionsContext ctx);
	/**
	 * Exit a parse tree produced by {@link SCSSParser#columnOptions}.
	 * @param ctx the parse tree
	 */
	void exitColumnOptions(SCSSParser.ColumnOptionsContext ctx);
	/**
	 * Enter a parse tree produced by {@link SCSSParser#columnRuleOptions}.
	 * @param ctx the parse tree
	 */
	void enterColumnRuleOptions(SCSSParser.ColumnRuleOptionsContext ctx);
	/**
	 * Exit a parse tree produced by {@link SCSSParser#columnRuleOptions}.
	 * @param ctx the parse tree
	 */
	void exitColumnRuleOptions(SCSSParser.ColumnRuleOptionsContext ctx);
	/**
	 * Enter a parse tree produced by {@link SCSSParser#counterOptions}.
	 * @param ctx the parse tree
	 */
	void enterCounterOptions(SCSSParser.CounterOptionsContext ctx);
	/**
	 * Exit a parse tree produced by {@link SCSSParser#counterOptions}.
	 * @param ctx the parse tree
	 */
	void exitCounterOptions(SCSSParser.CounterOptionsContext ctx);
	/**
	 * Enter a parse tree produced by {@link SCSSParser#cueOptions}.
	 * @param ctx the parse tree
	 */
	void enterCueOptions(SCSSParser.CueOptionsContext ctx);
	/**
	 * Exit a parse tree produced by {@link SCSSParser#cueOptions}.
	 * @param ctx the parse tree
	 */
	void exitCueOptions(SCSSParser.CueOptionsContext ctx);
	/**
	 * Enter a parse tree produced by {@link SCSSParser#fontOptions}.
	 * @param ctx the parse tree
	 */
	void enterFontOptions(SCSSParser.FontOptionsContext ctx);
	/**
	 * Exit a parse tree produced by {@link SCSSParser#fontOptions}.
	 * @param ctx the parse tree
	 */
	void exitFontOptions(SCSSParser.FontOptionsContext ctx);
	/**
	 * Enter a parse tree produced by {@link SCSSParser#floatOptions}.
	 * @param ctx the parse tree
	 */
	void enterFloatOptions(SCSSParser.FloatOptionsContext ctx);
	/**
	 * Exit a parse tree produced by {@link SCSSParser#floatOptions}.
	 * @param ctx the parse tree
	 */
	void exitFloatOptions(SCSSParser.FloatOptionsContext ctx);
	/**
	 * Enter a parse tree produced by {@link SCSSParser#gridOptions}.
	 * @param ctx the parse tree
	 */
	void enterGridOptions(SCSSParser.GridOptionsContext ctx);
	/**
	 * Exit a parse tree produced by {@link SCSSParser#gridOptions}.
	 * @param ctx the parse tree
	 */
	void exitGridOptions(SCSSParser.GridOptionsContext ctx);
	/**
	 * Enter a parse tree produced by {@link SCSSParser#hyphenateOptions}.
	 * @param ctx the parse tree
	 */
	void enterHyphenateOptions(SCSSParser.HyphenateOptionsContext ctx);
	/**
	 * Exit a parse tree produced by {@link SCSSParser#hyphenateOptions}.
	 * @param ctx the parse tree
	 */
	void exitHyphenateOptions(SCSSParser.HyphenateOptionsContext ctx);
	/**
	 * Enter a parse tree produced by {@link SCSSParser#imageOptions}.
	 * @param ctx the parse tree
	 */
	void enterImageOptions(SCSSParser.ImageOptionsContext ctx);
	/**
	 * Exit a parse tree produced by {@link SCSSParser#imageOptions}.
	 * @param ctx the parse tree
	 */
	void exitImageOptions(SCSSParser.ImageOptionsContext ctx);
	/**
	 * Enter a parse tree produced by {@link SCSSParser#listOptions}.
	 * @param ctx the parse tree
	 */
	void enterListOptions(SCSSParser.ListOptionsContext ctx);
	/**
	 * Exit a parse tree produced by {@link SCSSParser#listOptions}.
	 * @param ctx the parse tree
	 */
	void exitListOptions(SCSSParser.ListOptionsContext ctx);
	/**
	 * Enter a parse tree produced by {@link SCSSParser#marginOptions}.
	 * @param ctx the parse tree
	 */
	void enterMarginOptions(SCSSParser.MarginOptionsContext ctx);
	/**
	 * Exit a parse tree produced by {@link SCSSParser#marginOptions}.
	 * @param ctx the parse tree
	 */
	void exitMarginOptions(SCSSParser.MarginOptionsContext ctx);
	/**
	 * Enter a parse tree produced by {@link SCSSParser#markOptions}.
	 * @param ctx the parse tree
	 */
	void enterMarkOptions(SCSSParser.MarkOptionsContext ctx);
	/**
	 * Exit a parse tree produced by {@link SCSSParser#markOptions}.
	 * @param ctx the parse tree
	 */
	void exitMarkOptions(SCSSParser.MarkOptionsContext ctx);
	/**
	 * Enter a parse tree produced by {@link SCSSParser#marqueeOptions}.
	 * @param ctx the parse tree
	 */
	void enterMarqueeOptions(SCSSParser.MarqueeOptionsContext ctx);
	/**
	 * Exit a parse tree produced by {@link SCSSParser#marqueeOptions}.
	 * @param ctx the parse tree
	 */
	void exitMarqueeOptions(SCSSParser.MarqueeOptionsContext ctx);
	/**
	 * Enter a parse tree produced by {@link SCSSParser#minMaxOptions}.
	 * @param ctx the parse tree
	 */
	void enterMinMaxOptions(SCSSParser.MinMaxOptionsContext ctx);
	/**
	 * Exit a parse tree produced by {@link SCSSParser#minMaxOptions}.
	 * @param ctx the parse tree
	 */
	void exitMinMaxOptions(SCSSParser.MinMaxOptionsContext ctx);
	/**
	 * Enter a parse tree produced by {@link SCSSParser#minMaxDeviceOptions}.
	 * @param ctx the parse tree
	 */
	void enterMinMaxDeviceOptions(SCSSParser.MinMaxDeviceOptionsContext ctx);
	/**
	 * Exit a parse tree produced by {@link SCSSParser#minMaxDeviceOptions}.
	 * @param ctx the parse tree
	 */
	void exitMinMaxDeviceOptions(SCSSParser.MinMaxDeviceOptionsContext ctx);
	/**
	 * Enter a parse tree produced by {@link SCSSParser#navOptions}.
	 * @param ctx the parse tree
	 */
	void enterNavOptions(SCSSParser.NavOptionsContext ctx);
	/**
	 * Exit a parse tree produced by {@link SCSSParser#navOptions}.
	 * @param ctx the parse tree
	 */
	void exitNavOptions(SCSSParser.NavOptionsContext ctx);
	/**
	 * Enter a parse tree produced by {@link SCSSParser#deviceOptions}.
	 * @param ctx the parse tree
	 */
	void enterDeviceOptions(SCSSParser.DeviceOptionsContext ctx);
	/**
	 * Exit a parse tree produced by {@link SCSSParser#deviceOptions}.
	 * @param ctx the parse tree
	 */
	void exitDeviceOptions(SCSSParser.DeviceOptionsContext ctx);
	/**
	 * Enter a parse tree produced by {@link SCSSParser#dropOptions}.
	 * @param ctx the parse tree
	 */
	void enterDropOptions(SCSSParser.DropOptionsContext ctx);
	/**
	 * Exit a parse tree produced by {@link SCSSParser#dropOptions}.
	 * @param ctx the parse tree
	 */
	void exitDropOptions(SCSSParser.DropOptionsContext ctx);
	/**
	 * Enter a parse tree produced by {@link SCSSParser#dropOptionsBeforeAfter}.
	 * @param ctx the parse tree
	 */
	void enterDropOptionsBeforeAfter(SCSSParser.DropOptionsBeforeAfterContext ctx);
	/**
	 * Exit a parse tree produced by {@link SCSSParser#dropOptionsBeforeAfter}.
	 * @param ctx the parse tree
	 */
	void exitDropOptionsBeforeAfter(SCSSParser.DropOptionsBeforeAfterContext ctx);
	/**
	 * Enter a parse tree produced by {@link SCSSParser#fitOptions}.
	 * @param ctx the parse tree
	 */
	void enterFitOptions(SCSSParser.FitOptionsContext ctx);
	/**
	 * Exit a parse tree produced by {@link SCSSParser#fitOptions}.
	 * @param ctx the parse tree
	 */
	void exitFitOptions(SCSSParser.FitOptionsContext ctx);
	/**
	 * Enter a parse tree produced by {@link SCSSParser#outlineOptions}.
	 * @param ctx the parse tree
	 */
	void enterOutlineOptions(SCSSParser.OutlineOptionsContext ctx);
	/**
	 * Exit a parse tree produced by {@link SCSSParser#outlineOptions}.
	 * @param ctx the parse tree
	 */
	void exitOutlineOptions(SCSSParser.OutlineOptionsContext ctx);
	/**
	 * Enter a parse tree produced by {@link SCSSParser#overflowOptions}.
	 * @param ctx the parse tree
	 */
	void enterOverflowOptions(SCSSParser.OverflowOptionsContext ctx);
	/**
	 * Exit a parse tree produced by {@link SCSSParser#overflowOptions}.
	 * @param ctx the parse tree
	 */
	void exitOverflowOptions(SCSSParser.OverflowOptionsContext ctx);
	/**
	 * Enter a parse tree produced by {@link SCSSParser#paddingOptions}.
	 * @param ctx the parse tree
	 */
	void enterPaddingOptions(SCSSParser.PaddingOptionsContext ctx);
	/**
	 * Exit a parse tree produced by {@link SCSSParser#paddingOptions}.
	 * @param ctx the parse tree
	 */
	void exitPaddingOptions(SCSSParser.PaddingOptionsContext ctx);
	/**
	 * Enter a parse tree produced by {@link SCSSParser#pageOptions}.
	 * @param ctx the parse tree
	 */
	void enterPageOptions(SCSSParser.PageOptionsContext ctx);
	/**
	 * Exit a parse tree produced by {@link SCSSParser#pageOptions}.
	 * @param ctx the parse tree
	 */
	void exitPageOptions(SCSSParser.PageOptionsContext ctx);
	/**
	 * Enter a parse tree produced by {@link SCSSParser#pageBreakOptions}.
	 * @param ctx the parse tree
	 */
	void enterPageBreakOptions(SCSSParser.PageBreakOptionsContext ctx);
	/**
	 * Exit a parse tree produced by {@link SCSSParser#pageBreakOptions}.
	 * @param ctx the parse tree
	 */
	void exitPageBreakOptions(SCSSParser.PageBreakOptionsContext ctx);
	/**
	 * Enter a parse tree produced by {@link SCSSParser#pauseOptions}.
	 * @param ctx the parse tree
	 */
	void enterPauseOptions(SCSSParser.PauseOptionsContext ctx);
	/**
	 * Exit a parse tree produced by {@link SCSSParser#pauseOptions}.
	 * @param ctx the parse tree
	 */
	void exitPauseOptions(SCSSParser.PauseOptionsContext ctx);
	/**
	 * Enter a parse tree produced by {@link SCSSParser#restOptions}.
	 * @param ctx the parse tree
	 */
	void enterRestOptions(SCSSParser.RestOptionsContext ctx);
	/**
	 * Exit a parse tree produced by {@link SCSSParser#restOptions}.
	 * @param ctx the parse tree
	 */
	void exitRestOptions(SCSSParser.RestOptionsContext ctx);
	/**
	 * Enter a parse tree produced by {@link SCSSParser#rubyOptions}.
	 * @param ctx the parse tree
	 */
	void enterRubyOptions(SCSSParser.RubyOptionsContext ctx);
	/**
	 * Exit a parse tree produced by {@link SCSSParser#rubyOptions}.
	 * @param ctx the parse tree
	 */
	void exitRubyOptions(SCSSParser.RubyOptionsContext ctx);
	/**
	 * Enter a parse tree produced by {@link SCSSParser#speakOptions}.
	 * @param ctx the parse tree
	 */
	void enterSpeakOptions(SCSSParser.SpeakOptionsContext ctx);
	/**
	 * Exit a parse tree produced by {@link SCSSParser#speakOptions}.
	 * @param ctx the parse tree
	 */
	void exitSpeakOptions(SCSSParser.SpeakOptionsContext ctx);
	/**
	 * Enter a parse tree produced by {@link SCSSParser#targetOptions}.
	 * @param ctx the parse tree
	 */
	void enterTargetOptions(SCSSParser.TargetOptionsContext ctx);
	/**
	 * Exit a parse tree produced by {@link SCSSParser#targetOptions}.
	 * @param ctx the parse tree
	 */
	void exitTargetOptions(SCSSParser.TargetOptionsContext ctx);
	/**
	 * Enter a parse tree produced by {@link SCSSParser#textOptions}.
	 * @param ctx the parse tree
	 */
	void enterTextOptions(SCSSParser.TextOptionsContext ctx);
	/**
	 * Exit a parse tree produced by {@link SCSSParser#textOptions}.
	 * @param ctx the parse tree
	 */
	void exitTextOptions(SCSSParser.TextOptionsContext ctx);
	/**
	 * Enter a parse tree produced by {@link SCSSParser#transformOptions}.
	 * @param ctx the parse tree
	 */
	void enterTransformOptions(SCSSParser.TransformOptionsContext ctx);
	/**
	 * Exit a parse tree produced by {@link SCSSParser#transformOptions}.
	 * @param ctx the parse tree
	 */
	void exitTransformOptions(SCSSParser.TransformOptionsContext ctx);
	/**
	 * Enter a parse tree produced by {@link SCSSParser#transitionOptions}.
	 * @param ctx the parse tree
	 */
	void enterTransitionOptions(SCSSParser.TransitionOptionsContext ctx);
	/**
	 * Exit a parse tree produced by {@link SCSSParser#transitionOptions}.
	 * @param ctx the parse tree
	 */
	void exitTransitionOptions(SCSSParser.TransitionOptionsContext ctx);
	/**
	 * Enter a parse tree produced by {@link SCSSParser#voiceOptions}.
	 * @param ctx the parse tree
	 */
	void enterVoiceOptions(SCSSParser.VoiceOptionsContext ctx);
	/**
	 * Exit a parse tree produced by {@link SCSSParser#voiceOptions}.
	 * @param ctx the parse tree
	 */
	void exitVoiceOptions(SCSSParser.VoiceOptionsContext ctx);
	/**
	 * Enter a parse tree produced by {@link SCSSParser#voicePitchOptions}.
	 * @param ctx the parse tree
	 */
	void enterVoicePitchOptions(SCSSParser.VoicePitchOptionsContext ctx);
	/**
	 * Exit a parse tree produced by {@link SCSSParser#voicePitchOptions}.
	 * @param ctx the parse tree
	 */
	void exitVoicePitchOptions(SCSSParser.VoicePitchOptionsContext ctx);
	/**
	 * Enter a parse tree produced by {@link SCSSParser#wordOptions}.
	 * @param ctx the parse tree
	 */
	void enterWordOptions(SCSSParser.WordOptionsContext ctx);
	/**
	 * Exit a parse tree produced by {@link SCSSParser#wordOptions}.
	 * @param ctx the parse tree
	 */
	void exitWordOptions(SCSSParser.WordOptionsContext ctx);
}