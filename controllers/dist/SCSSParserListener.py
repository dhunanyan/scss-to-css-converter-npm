# Generated from ./controllers/SCSSParser.g4 by ANTLR 4.13.2
from antlr4 import *
if "." in __name__:
    from .SCSSParser import SCSSParser
else:
    from SCSSParser import SCSSParser

# This class defines a complete listener for a parse tree produced by SCSSParser.
class SCSSParserListener(ParseTreeListener):

    # Enter a parse tree produced by SCSSParser#stylesheet.
    def enterStylesheet(self, ctx:SCSSParser.StylesheetContext):
        pass

    # Exit a parse tree produced by SCSSParser#stylesheet.
    def exitStylesheet(self, ctx:SCSSParser.StylesheetContext):
        pass


    # Enter a parse tree produced by SCSSParser#block.
    def enterBlock(self, ctx:SCSSParser.BlockContext):
        pass

    # Exit a parse tree produced by SCSSParser#block.
    def exitBlock(self, ctx:SCSSParser.BlockContext):
        pass


    # Enter a parse tree produced by SCSSParser#nestedBlock.
    def enterNestedBlock(self, ctx:SCSSParser.NestedBlockContext):
        pass

    # Exit a parse tree produced by SCSSParser#nestedBlock.
    def exitNestedBlock(self, ctx:SCSSParser.NestedBlockContext):
        pass


    # Enter a parse tree produced by SCSSParser#selector.
    def enterSelector(self, ctx:SCSSParser.SelectorContext):
        pass

    # Exit a parse tree produced by SCSSParser#selector.
    def exitSelector(self, ctx:SCSSParser.SelectorContext):
        pass


    # Enter a parse tree produced by SCSSParser#pseudoClass.
    def enterPseudoClass(self, ctx:SCSSParser.PseudoClassContext):
        pass

    # Exit a parse tree produced by SCSSParser#pseudoClass.
    def exitPseudoClass(self, ctx:SCSSParser.PseudoClassContext):
        pass


    # Enter a parse tree produced by SCSSParser#pseudoElement.
    def enterPseudoElement(self, ctx:SCSSParser.PseudoElementContext):
        pass

    # Exit a parse tree produced by SCSSParser#pseudoElement.
    def exitPseudoElement(self, ctx:SCSSParser.PseudoElementContext):
        pass


    # Enter a parse tree produced by SCSSParser#doubleColon.
    def enterDoubleColon(self, ctx:SCSSParser.DoubleColonContext):
        pass

    # Exit a parse tree produced by SCSSParser#doubleColon.
    def exitDoubleColon(self, ctx:SCSSParser.DoubleColonContext):
        pass


    # Enter a parse tree produced by SCSSParser#idSelector.
    def enterIdSelector(self, ctx:SCSSParser.IdSelectorContext):
        pass

    # Exit a parse tree produced by SCSSParser#idSelector.
    def exitIdSelector(self, ctx:SCSSParser.IdSelectorContext):
        pass


    # Enter a parse tree produced by SCSSParser#classSelector.
    def enterClassSelector(self, ctx:SCSSParser.ClassSelectorContext):
        pass

    # Exit a parse tree produced by SCSSParser#classSelector.
    def exitClassSelector(self, ctx:SCSSParser.ClassSelectorContext):
        pass


    # Enter a parse tree produced by SCSSParser#tagSelector.
    def enterTagSelector(self, ctx:SCSSParser.TagSelectorContext):
        pass

    # Exit a parse tree produced by SCSSParser#tagSelector.
    def exitTagSelector(self, ctx:SCSSParser.TagSelectorContext):
        pass


    # Enter a parse tree produced by SCSSParser#identifier.
    def enterIdentifier(self, ctx:SCSSParser.IdentifierContext):
        pass

    # Exit a parse tree produced by SCSSParser#identifier.
    def exitIdentifier(self, ctx:SCSSParser.IdentifierContext):
        pass


    # Enter a parse tree produced by SCSSParser#declaration.
    def enterDeclaration(self, ctx:SCSSParser.DeclarationContext):
        pass

    # Exit a parse tree produced by SCSSParser#declaration.
    def exitDeclaration(self, ctx:SCSSParser.DeclarationContext):
        pass


    # Enter a parse tree produced by SCSSParser#propertyValue.
    def enterPropertyValue(self, ctx:SCSSParser.PropertyValueContext):
        pass

    # Exit a parse tree produced by SCSSParser#propertyValue.
    def exitPropertyValue(self, ctx:SCSSParser.PropertyValueContext):
        pass


    # Enter a parse tree produced by SCSSParser#numValue.
    def enterNumValue(self, ctx:SCSSParser.NumValueContext):
        pass

    # Exit a parse tree produced by SCSSParser#numValue.
    def exitNumValue(self, ctx:SCSSParser.NumValueContext):
        pass


    # Enter a parse tree produced by SCSSParser#fourNumValue.
    def enterFourNumValue(self, ctx:SCSSParser.FourNumValueContext):
        pass

    # Exit a parse tree produced by SCSSParser#fourNumValue.
    def exitFourNumValue(self, ctx:SCSSParser.FourNumValueContext):
        pass


    # Enter a parse tree produced by SCSSParser#threeNumValue.
    def enterThreeNumValue(self, ctx:SCSSParser.ThreeNumValueContext):
        pass

    # Exit a parse tree produced by SCSSParser#threeNumValue.
    def exitThreeNumValue(self, ctx:SCSSParser.ThreeNumValueContext):
        pass


    # Enter a parse tree produced by SCSSParser#twoNumValue.
    def enterTwoNumValue(self, ctx:SCSSParser.TwoNumValueContext):
        pass

    # Exit a parse tree produced by SCSSParser#twoNumValue.
    def exitTwoNumValue(self, ctx:SCSSParser.TwoNumValueContext):
        pass


    # Enter a parse tree produced by SCSSParser#oneNumValue.
    def enterOneNumValue(self, ctx:SCSSParser.OneNumValueContext):
        pass

    # Exit a parse tree produced by SCSSParser#oneNumValue.
    def exitOneNumValue(self, ctx:SCSSParser.OneNumValueContext):
        pass


    # Enter a parse tree produced by SCSSParser#whiteSpaceWithSpaceChar.
    def enterWhiteSpaceWithSpaceChar(self, ctx:SCSSParser.WhiteSpaceWithSpaceCharContext):
        pass

    # Exit a parse tree produced by SCSSParser#whiteSpaceWithSpaceChar.
    def exitWhiteSpaceWithSpaceChar(self, ctx:SCSSParser.WhiteSpaceWithSpaceCharContext):
        pass


    # Enter a parse tree produced by SCSSParser#absLengthValue.
    def enterAbsLengthValue(self, ctx:SCSSParser.AbsLengthValueContext):
        pass

    # Exit a parse tree produced by SCSSParser#absLengthValue.
    def exitAbsLengthValue(self, ctx:SCSSParser.AbsLengthValueContext):
        pass


    # Enter a parse tree produced by SCSSParser#fontRelativeValue.
    def enterFontRelativeValue(self, ctx:SCSSParser.FontRelativeValueContext):
        pass

    # Exit a parse tree produced by SCSSParser#fontRelativeValue.
    def exitFontRelativeValue(self, ctx:SCSSParser.FontRelativeValueContext):
        pass


    # Enter a parse tree produced by SCSSParser#viewportRelativeValue.
    def enterViewportRelativeValue(self, ctx:SCSSParser.ViewportRelativeValueContext):
        pass

    # Exit a parse tree produced by SCSSParser#viewportRelativeValue.
    def exitViewportRelativeValue(self, ctx:SCSSParser.ViewportRelativeValueContext):
        pass


    # Enter a parse tree produced by SCSSParser#angleValue.
    def enterAngleValue(self, ctx:SCSSParser.AngleValueContext):
        pass

    # Exit a parse tree produced by SCSSParser#angleValue.
    def exitAngleValue(self, ctx:SCSSParser.AngleValueContext):
        pass


    # Enter a parse tree produced by SCSSParser#resolutionValue.
    def enterResolutionValue(self, ctx:SCSSParser.ResolutionValueContext):
        pass

    # Exit a parse tree produced by SCSSParser#resolutionValue.
    def exitResolutionValue(self, ctx:SCSSParser.ResolutionValueContext):
        pass


    # Enter a parse tree produced by SCSSParser#freqValue.
    def enterFreqValue(self, ctx:SCSSParser.FreqValueContext):
        pass

    # Exit a parse tree produced by SCSSParser#freqValue.
    def exitFreqValue(self, ctx:SCSSParser.FreqValueContext):
        pass


    # Enter a parse tree produced by SCSSParser#timeValue.
    def enterTimeValue(self, ctx:SCSSParser.TimeValueContext):
        pass

    # Exit a parse tree produced by SCSSParser#timeValue.
    def exitTimeValue(self, ctx:SCSSParser.TimeValueContext):
        pass


    # Enter a parse tree produced by SCSSParser#percentageValue.
    def enterPercentageValue(self, ctx:SCSSParser.PercentageValueContext):
        pass

    # Exit a parse tree produced by SCSSParser#percentageValue.
    def exitPercentageValue(self, ctx:SCSSParser.PercentageValueContext):
        pass


    # Enter a parse tree produced by SCSSParser#property.
    def enterProperty(self, ctx:SCSSParser.PropertyContext):
        pass

    # Exit a parse tree produced by SCSSParser#property.
    def exitProperty(self, ctx:SCSSParser.PropertyContext):
        pass


    # Enter a parse tree produced by SCSSParser#backgroundOptions.
    def enterBackgroundOptions(self, ctx:SCSSParser.BackgroundOptionsContext):
        pass

    # Exit a parse tree produced by SCSSParser#backgroundOptions.
    def exitBackgroundOptions(self, ctx:SCSSParser.BackgroundOptionsContext):
        pass


    # Enter a parse tree produced by SCSSParser#alignmentOptions.
    def enterAlignmentOptions(self, ctx:SCSSParser.AlignmentOptionsContext):
        pass

    # Exit a parse tree produced by SCSSParser#alignmentOptions.
    def exitAlignmentOptions(self, ctx:SCSSParser.AlignmentOptionsContext):
        pass


    # Enter a parse tree produced by SCSSParser#animationOptions.
    def enterAnimationOptions(self, ctx:SCSSParser.AnimationOptionsContext):
        pass

    # Exit a parse tree produced by SCSSParser#animationOptions.
    def exitAnimationOptions(self, ctx:SCSSParser.AnimationOptionsContext):
        pass


    # Enter a parse tree produced by SCSSParser#bookmarkOptions.
    def enterBookmarkOptions(self, ctx:SCSSParser.BookmarkOptionsContext):
        pass

    # Exit a parse tree produced by SCSSParser#bookmarkOptions.
    def exitBookmarkOptions(self, ctx:SCSSParser.BookmarkOptionsContext):
        pass


    # Enter a parse tree produced by SCSSParser#borderOptions.
    def enterBorderOptions(self, ctx:SCSSParser.BorderOptionsContext):
        pass

    # Exit a parse tree produced by SCSSParser#borderOptions.
    def exitBorderOptions(self, ctx:SCSSParser.BorderOptionsContext):
        pass


    # Enter a parse tree produced by SCSSParser#borderBottomTopOptions.
    def enterBorderBottomTopOptions(self, ctx:SCSSParser.BorderBottomTopOptionsContext):
        pass

    # Exit a parse tree produced by SCSSParser#borderBottomTopOptions.
    def exitBorderBottomTopOptions(self, ctx:SCSSParser.BorderBottomTopOptionsContext):
        pass


    # Enter a parse tree produced by SCSSParser#borderRightLeftOptions.
    def enterBorderRightLeftOptions(self, ctx:SCSSParser.BorderRightLeftOptionsContext):
        pass

    # Exit a parse tree produced by SCSSParser#borderRightLeftOptions.
    def exitBorderRightLeftOptions(self, ctx:SCSSParser.BorderRightLeftOptionsContext):
        pass


    # Enter a parse tree produced by SCSSParser#borderImageOptions.
    def enterBorderImageOptions(self, ctx:SCSSParser.BorderImageOptionsContext):
        pass

    # Exit a parse tree produced by SCSSParser#borderImageOptions.
    def exitBorderImageOptions(self, ctx:SCSSParser.BorderImageOptionsContext):
        pass


    # Enter a parse tree produced by SCSSParser#boxOptions.
    def enterBoxOptions(self, ctx:SCSSParser.BoxOptionsContext):
        pass

    # Exit a parse tree produced by SCSSParser#boxOptions.
    def exitBoxOptions(self, ctx:SCSSParser.BoxOptionsContext):
        pass


    # Enter a parse tree produced by SCSSParser#captionOptions.
    def enterCaptionOptions(self, ctx:SCSSParser.CaptionOptionsContext):
        pass

    # Exit a parse tree produced by SCSSParser#captionOptions.
    def exitCaptionOptions(self, ctx:SCSSParser.CaptionOptionsContext):
        pass


    # Enter a parse tree produced by SCSSParser#colorOptions.
    def enterColorOptions(self, ctx:SCSSParser.ColorOptionsContext):
        pass

    # Exit a parse tree produced by SCSSParser#colorOptions.
    def exitColorOptions(self, ctx:SCSSParser.ColorOptionsContext):
        pass


    # Enter a parse tree produced by SCSSParser#columnOptions.
    def enterColumnOptions(self, ctx:SCSSParser.ColumnOptionsContext):
        pass

    # Exit a parse tree produced by SCSSParser#columnOptions.
    def exitColumnOptions(self, ctx:SCSSParser.ColumnOptionsContext):
        pass


    # Enter a parse tree produced by SCSSParser#columnRuleOptions.
    def enterColumnRuleOptions(self, ctx:SCSSParser.ColumnRuleOptionsContext):
        pass

    # Exit a parse tree produced by SCSSParser#columnRuleOptions.
    def exitColumnRuleOptions(self, ctx:SCSSParser.ColumnRuleOptionsContext):
        pass


    # Enter a parse tree produced by SCSSParser#counterOptions.
    def enterCounterOptions(self, ctx:SCSSParser.CounterOptionsContext):
        pass

    # Exit a parse tree produced by SCSSParser#counterOptions.
    def exitCounterOptions(self, ctx:SCSSParser.CounterOptionsContext):
        pass


    # Enter a parse tree produced by SCSSParser#cueOptions.
    def enterCueOptions(self, ctx:SCSSParser.CueOptionsContext):
        pass

    # Exit a parse tree produced by SCSSParser#cueOptions.
    def exitCueOptions(self, ctx:SCSSParser.CueOptionsContext):
        pass


    # Enter a parse tree produced by SCSSParser#fontOptions.
    def enterFontOptions(self, ctx:SCSSParser.FontOptionsContext):
        pass

    # Exit a parse tree produced by SCSSParser#fontOptions.
    def exitFontOptions(self, ctx:SCSSParser.FontOptionsContext):
        pass


    # Enter a parse tree produced by SCSSParser#floatOptions.
    def enterFloatOptions(self, ctx:SCSSParser.FloatOptionsContext):
        pass

    # Exit a parse tree produced by SCSSParser#floatOptions.
    def exitFloatOptions(self, ctx:SCSSParser.FloatOptionsContext):
        pass


    # Enter a parse tree produced by SCSSParser#gridOptions.
    def enterGridOptions(self, ctx:SCSSParser.GridOptionsContext):
        pass

    # Exit a parse tree produced by SCSSParser#gridOptions.
    def exitGridOptions(self, ctx:SCSSParser.GridOptionsContext):
        pass


    # Enter a parse tree produced by SCSSParser#hyphenateOptions.
    def enterHyphenateOptions(self, ctx:SCSSParser.HyphenateOptionsContext):
        pass

    # Exit a parse tree produced by SCSSParser#hyphenateOptions.
    def exitHyphenateOptions(self, ctx:SCSSParser.HyphenateOptionsContext):
        pass


    # Enter a parse tree produced by SCSSParser#imageOptions.
    def enterImageOptions(self, ctx:SCSSParser.ImageOptionsContext):
        pass

    # Exit a parse tree produced by SCSSParser#imageOptions.
    def exitImageOptions(self, ctx:SCSSParser.ImageOptionsContext):
        pass


    # Enter a parse tree produced by SCSSParser#listOptions.
    def enterListOptions(self, ctx:SCSSParser.ListOptionsContext):
        pass

    # Exit a parse tree produced by SCSSParser#listOptions.
    def exitListOptions(self, ctx:SCSSParser.ListOptionsContext):
        pass


    # Enter a parse tree produced by SCSSParser#marginOptions.
    def enterMarginOptions(self, ctx:SCSSParser.MarginOptionsContext):
        pass

    # Exit a parse tree produced by SCSSParser#marginOptions.
    def exitMarginOptions(self, ctx:SCSSParser.MarginOptionsContext):
        pass


    # Enter a parse tree produced by SCSSParser#markOptions.
    def enterMarkOptions(self, ctx:SCSSParser.MarkOptionsContext):
        pass

    # Exit a parse tree produced by SCSSParser#markOptions.
    def exitMarkOptions(self, ctx:SCSSParser.MarkOptionsContext):
        pass


    # Enter a parse tree produced by SCSSParser#marqueeOptions.
    def enterMarqueeOptions(self, ctx:SCSSParser.MarqueeOptionsContext):
        pass

    # Exit a parse tree produced by SCSSParser#marqueeOptions.
    def exitMarqueeOptions(self, ctx:SCSSParser.MarqueeOptionsContext):
        pass


    # Enter a parse tree produced by SCSSParser#minMaxOptions.
    def enterMinMaxOptions(self, ctx:SCSSParser.MinMaxOptionsContext):
        pass

    # Exit a parse tree produced by SCSSParser#minMaxOptions.
    def exitMinMaxOptions(self, ctx:SCSSParser.MinMaxOptionsContext):
        pass


    # Enter a parse tree produced by SCSSParser#minMaxDeviceOptions.
    def enterMinMaxDeviceOptions(self, ctx:SCSSParser.MinMaxDeviceOptionsContext):
        pass

    # Exit a parse tree produced by SCSSParser#minMaxDeviceOptions.
    def exitMinMaxDeviceOptions(self, ctx:SCSSParser.MinMaxDeviceOptionsContext):
        pass


    # Enter a parse tree produced by SCSSParser#navOptions.
    def enterNavOptions(self, ctx:SCSSParser.NavOptionsContext):
        pass

    # Exit a parse tree produced by SCSSParser#navOptions.
    def exitNavOptions(self, ctx:SCSSParser.NavOptionsContext):
        pass


    # Enter a parse tree produced by SCSSParser#deviceOptions.
    def enterDeviceOptions(self, ctx:SCSSParser.DeviceOptionsContext):
        pass

    # Exit a parse tree produced by SCSSParser#deviceOptions.
    def exitDeviceOptions(self, ctx:SCSSParser.DeviceOptionsContext):
        pass


    # Enter a parse tree produced by SCSSParser#dropOptions.
    def enterDropOptions(self, ctx:SCSSParser.DropOptionsContext):
        pass

    # Exit a parse tree produced by SCSSParser#dropOptions.
    def exitDropOptions(self, ctx:SCSSParser.DropOptionsContext):
        pass


    # Enter a parse tree produced by SCSSParser#dropOptionsBeforeAfter.
    def enterDropOptionsBeforeAfter(self, ctx:SCSSParser.DropOptionsBeforeAfterContext):
        pass

    # Exit a parse tree produced by SCSSParser#dropOptionsBeforeAfter.
    def exitDropOptionsBeforeAfter(self, ctx:SCSSParser.DropOptionsBeforeAfterContext):
        pass


    # Enter a parse tree produced by SCSSParser#fitOptions.
    def enterFitOptions(self, ctx:SCSSParser.FitOptionsContext):
        pass

    # Exit a parse tree produced by SCSSParser#fitOptions.
    def exitFitOptions(self, ctx:SCSSParser.FitOptionsContext):
        pass


    # Enter a parse tree produced by SCSSParser#outlineOptions.
    def enterOutlineOptions(self, ctx:SCSSParser.OutlineOptionsContext):
        pass

    # Exit a parse tree produced by SCSSParser#outlineOptions.
    def exitOutlineOptions(self, ctx:SCSSParser.OutlineOptionsContext):
        pass


    # Enter a parse tree produced by SCSSParser#overflowOptions.
    def enterOverflowOptions(self, ctx:SCSSParser.OverflowOptionsContext):
        pass

    # Exit a parse tree produced by SCSSParser#overflowOptions.
    def exitOverflowOptions(self, ctx:SCSSParser.OverflowOptionsContext):
        pass


    # Enter a parse tree produced by SCSSParser#paddingOptions.
    def enterPaddingOptions(self, ctx:SCSSParser.PaddingOptionsContext):
        pass

    # Exit a parse tree produced by SCSSParser#paddingOptions.
    def exitPaddingOptions(self, ctx:SCSSParser.PaddingOptionsContext):
        pass


    # Enter a parse tree produced by SCSSParser#pageOptions.
    def enterPageOptions(self, ctx:SCSSParser.PageOptionsContext):
        pass

    # Exit a parse tree produced by SCSSParser#pageOptions.
    def exitPageOptions(self, ctx:SCSSParser.PageOptionsContext):
        pass


    # Enter a parse tree produced by SCSSParser#pageBreakOptions.
    def enterPageBreakOptions(self, ctx:SCSSParser.PageBreakOptionsContext):
        pass

    # Exit a parse tree produced by SCSSParser#pageBreakOptions.
    def exitPageBreakOptions(self, ctx:SCSSParser.PageBreakOptionsContext):
        pass


    # Enter a parse tree produced by SCSSParser#pauseOptions.
    def enterPauseOptions(self, ctx:SCSSParser.PauseOptionsContext):
        pass

    # Exit a parse tree produced by SCSSParser#pauseOptions.
    def exitPauseOptions(self, ctx:SCSSParser.PauseOptionsContext):
        pass


    # Enter a parse tree produced by SCSSParser#restOptions.
    def enterRestOptions(self, ctx:SCSSParser.RestOptionsContext):
        pass

    # Exit a parse tree produced by SCSSParser#restOptions.
    def exitRestOptions(self, ctx:SCSSParser.RestOptionsContext):
        pass


    # Enter a parse tree produced by SCSSParser#rubyOptions.
    def enterRubyOptions(self, ctx:SCSSParser.RubyOptionsContext):
        pass

    # Exit a parse tree produced by SCSSParser#rubyOptions.
    def exitRubyOptions(self, ctx:SCSSParser.RubyOptionsContext):
        pass


    # Enter a parse tree produced by SCSSParser#speakOptions.
    def enterSpeakOptions(self, ctx:SCSSParser.SpeakOptionsContext):
        pass

    # Exit a parse tree produced by SCSSParser#speakOptions.
    def exitSpeakOptions(self, ctx:SCSSParser.SpeakOptionsContext):
        pass


    # Enter a parse tree produced by SCSSParser#targetOptions.
    def enterTargetOptions(self, ctx:SCSSParser.TargetOptionsContext):
        pass

    # Exit a parse tree produced by SCSSParser#targetOptions.
    def exitTargetOptions(self, ctx:SCSSParser.TargetOptionsContext):
        pass


    # Enter a parse tree produced by SCSSParser#textOptions.
    def enterTextOptions(self, ctx:SCSSParser.TextOptionsContext):
        pass

    # Exit a parse tree produced by SCSSParser#textOptions.
    def exitTextOptions(self, ctx:SCSSParser.TextOptionsContext):
        pass


    # Enter a parse tree produced by SCSSParser#transformOptions.
    def enterTransformOptions(self, ctx:SCSSParser.TransformOptionsContext):
        pass

    # Exit a parse tree produced by SCSSParser#transformOptions.
    def exitTransformOptions(self, ctx:SCSSParser.TransformOptionsContext):
        pass


    # Enter a parse tree produced by SCSSParser#transitionOptions.
    def enterTransitionOptions(self, ctx:SCSSParser.TransitionOptionsContext):
        pass

    # Exit a parse tree produced by SCSSParser#transitionOptions.
    def exitTransitionOptions(self, ctx:SCSSParser.TransitionOptionsContext):
        pass


    # Enter a parse tree produced by SCSSParser#voiceOptions.
    def enterVoiceOptions(self, ctx:SCSSParser.VoiceOptionsContext):
        pass

    # Exit a parse tree produced by SCSSParser#voiceOptions.
    def exitVoiceOptions(self, ctx:SCSSParser.VoiceOptionsContext):
        pass


    # Enter a parse tree produced by SCSSParser#voicePitchOptions.
    def enterVoicePitchOptions(self, ctx:SCSSParser.VoicePitchOptionsContext):
        pass

    # Exit a parse tree produced by SCSSParser#voicePitchOptions.
    def exitVoicePitchOptions(self, ctx:SCSSParser.VoicePitchOptionsContext):
        pass


    # Enter a parse tree produced by SCSSParser#wordOptions.
    def enterWordOptions(self, ctx:SCSSParser.WordOptionsContext):
        pass

    # Exit a parse tree produced by SCSSParser#wordOptions.
    def exitWordOptions(self, ctx:SCSSParser.WordOptionsContext):
        pass



del SCSSParser