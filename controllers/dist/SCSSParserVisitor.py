# Generated from ./controllers/SCSSParser.g4 by ANTLR 4.13.2
from antlr4 import *
if "." in __name__:
    from .SCSSParser import SCSSParser
else:
    from SCSSParser import SCSSParser

# This class defines a complete generic visitor for a parse tree produced by SCSSParser.

class SCSSParserVisitor(ParseTreeVisitor):

    # Visit a parse tree produced by SCSSParser#stylesheet.
    def visitStylesheet(self, ctx:SCSSParser.StylesheetContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by SCSSParser#block.
    def visitBlock(self, ctx:SCSSParser.BlockContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by SCSSParser#nestedBlock.
    def visitNestedBlock(self, ctx:SCSSParser.NestedBlockContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by SCSSParser#selector.
    def visitSelector(self, ctx:SCSSParser.SelectorContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by SCSSParser#pseudoClass.
    def visitPseudoClass(self, ctx:SCSSParser.PseudoClassContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by SCSSParser#pseudoElement.
    def visitPseudoElement(self, ctx:SCSSParser.PseudoElementContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by SCSSParser#doubleColon.
    def visitDoubleColon(self, ctx:SCSSParser.DoubleColonContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by SCSSParser#idSelector.
    def visitIdSelector(self, ctx:SCSSParser.IdSelectorContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by SCSSParser#classSelector.
    def visitClassSelector(self, ctx:SCSSParser.ClassSelectorContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by SCSSParser#tagSelector.
    def visitTagSelector(self, ctx:SCSSParser.TagSelectorContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by SCSSParser#identifier.
    def visitIdentifier(self, ctx:SCSSParser.IdentifierContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by SCSSParser#declaration.
    def visitDeclaration(self, ctx:SCSSParser.DeclarationContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by SCSSParser#propertyValue.
    def visitPropertyValue(self, ctx:SCSSParser.PropertyValueContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by SCSSParser#numValue.
    def visitNumValue(self, ctx:SCSSParser.NumValueContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by SCSSParser#fourNumValue.
    def visitFourNumValue(self, ctx:SCSSParser.FourNumValueContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by SCSSParser#threeNumValue.
    def visitThreeNumValue(self, ctx:SCSSParser.ThreeNumValueContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by SCSSParser#twoNumValue.
    def visitTwoNumValue(self, ctx:SCSSParser.TwoNumValueContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by SCSSParser#oneNumValue.
    def visitOneNumValue(self, ctx:SCSSParser.OneNumValueContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by SCSSParser#whiteSpaceWithSpaceChar.
    def visitWhiteSpaceWithSpaceChar(self, ctx:SCSSParser.WhiteSpaceWithSpaceCharContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by SCSSParser#absLengthValue.
    def visitAbsLengthValue(self, ctx:SCSSParser.AbsLengthValueContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by SCSSParser#fontRelativeValue.
    def visitFontRelativeValue(self, ctx:SCSSParser.FontRelativeValueContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by SCSSParser#viewportRelativeValue.
    def visitViewportRelativeValue(self, ctx:SCSSParser.ViewportRelativeValueContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by SCSSParser#angleValue.
    def visitAngleValue(self, ctx:SCSSParser.AngleValueContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by SCSSParser#resolutionValue.
    def visitResolutionValue(self, ctx:SCSSParser.ResolutionValueContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by SCSSParser#freqValue.
    def visitFreqValue(self, ctx:SCSSParser.FreqValueContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by SCSSParser#timeValue.
    def visitTimeValue(self, ctx:SCSSParser.TimeValueContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by SCSSParser#percentageValue.
    def visitPercentageValue(self, ctx:SCSSParser.PercentageValueContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by SCSSParser#property.
    def visitProperty(self, ctx:SCSSParser.PropertyContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by SCSSParser#backgroundOptions.
    def visitBackgroundOptions(self, ctx:SCSSParser.BackgroundOptionsContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by SCSSParser#alignmentOptions.
    def visitAlignmentOptions(self, ctx:SCSSParser.AlignmentOptionsContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by SCSSParser#animationOptions.
    def visitAnimationOptions(self, ctx:SCSSParser.AnimationOptionsContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by SCSSParser#bookmarkOptions.
    def visitBookmarkOptions(self, ctx:SCSSParser.BookmarkOptionsContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by SCSSParser#borderOptions.
    def visitBorderOptions(self, ctx:SCSSParser.BorderOptionsContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by SCSSParser#borderBottomTopOptions.
    def visitBorderBottomTopOptions(self, ctx:SCSSParser.BorderBottomTopOptionsContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by SCSSParser#borderRightLeftOptions.
    def visitBorderRightLeftOptions(self, ctx:SCSSParser.BorderRightLeftOptionsContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by SCSSParser#borderImageOptions.
    def visitBorderImageOptions(self, ctx:SCSSParser.BorderImageOptionsContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by SCSSParser#boxOptions.
    def visitBoxOptions(self, ctx:SCSSParser.BoxOptionsContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by SCSSParser#captionOptions.
    def visitCaptionOptions(self, ctx:SCSSParser.CaptionOptionsContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by SCSSParser#colorOptions.
    def visitColorOptions(self, ctx:SCSSParser.ColorOptionsContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by SCSSParser#columnOptions.
    def visitColumnOptions(self, ctx:SCSSParser.ColumnOptionsContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by SCSSParser#columnRuleOptions.
    def visitColumnRuleOptions(self, ctx:SCSSParser.ColumnRuleOptionsContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by SCSSParser#counterOptions.
    def visitCounterOptions(self, ctx:SCSSParser.CounterOptionsContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by SCSSParser#cueOptions.
    def visitCueOptions(self, ctx:SCSSParser.CueOptionsContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by SCSSParser#fontOptions.
    def visitFontOptions(self, ctx:SCSSParser.FontOptionsContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by SCSSParser#floatOptions.
    def visitFloatOptions(self, ctx:SCSSParser.FloatOptionsContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by SCSSParser#gridOptions.
    def visitGridOptions(self, ctx:SCSSParser.GridOptionsContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by SCSSParser#hyphenateOptions.
    def visitHyphenateOptions(self, ctx:SCSSParser.HyphenateOptionsContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by SCSSParser#imageOptions.
    def visitImageOptions(self, ctx:SCSSParser.ImageOptionsContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by SCSSParser#listOptions.
    def visitListOptions(self, ctx:SCSSParser.ListOptionsContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by SCSSParser#marginOptions.
    def visitMarginOptions(self, ctx:SCSSParser.MarginOptionsContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by SCSSParser#markOptions.
    def visitMarkOptions(self, ctx:SCSSParser.MarkOptionsContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by SCSSParser#marqueeOptions.
    def visitMarqueeOptions(self, ctx:SCSSParser.MarqueeOptionsContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by SCSSParser#minMaxOptions.
    def visitMinMaxOptions(self, ctx:SCSSParser.MinMaxOptionsContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by SCSSParser#minMaxDeviceOptions.
    def visitMinMaxDeviceOptions(self, ctx:SCSSParser.MinMaxDeviceOptionsContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by SCSSParser#navOptions.
    def visitNavOptions(self, ctx:SCSSParser.NavOptionsContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by SCSSParser#deviceOptions.
    def visitDeviceOptions(self, ctx:SCSSParser.DeviceOptionsContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by SCSSParser#dropOptions.
    def visitDropOptions(self, ctx:SCSSParser.DropOptionsContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by SCSSParser#dropOptionsBeforeAfter.
    def visitDropOptionsBeforeAfter(self, ctx:SCSSParser.DropOptionsBeforeAfterContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by SCSSParser#fitOptions.
    def visitFitOptions(self, ctx:SCSSParser.FitOptionsContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by SCSSParser#outlineOptions.
    def visitOutlineOptions(self, ctx:SCSSParser.OutlineOptionsContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by SCSSParser#overflowOptions.
    def visitOverflowOptions(self, ctx:SCSSParser.OverflowOptionsContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by SCSSParser#paddingOptions.
    def visitPaddingOptions(self, ctx:SCSSParser.PaddingOptionsContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by SCSSParser#pageOptions.
    def visitPageOptions(self, ctx:SCSSParser.PageOptionsContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by SCSSParser#pageBreakOptions.
    def visitPageBreakOptions(self, ctx:SCSSParser.PageBreakOptionsContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by SCSSParser#pauseOptions.
    def visitPauseOptions(self, ctx:SCSSParser.PauseOptionsContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by SCSSParser#restOptions.
    def visitRestOptions(self, ctx:SCSSParser.RestOptionsContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by SCSSParser#rubyOptions.
    def visitRubyOptions(self, ctx:SCSSParser.RubyOptionsContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by SCSSParser#speakOptions.
    def visitSpeakOptions(self, ctx:SCSSParser.SpeakOptionsContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by SCSSParser#targetOptions.
    def visitTargetOptions(self, ctx:SCSSParser.TargetOptionsContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by SCSSParser#textOptions.
    def visitTextOptions(self, ctx:SCSSParser.TextOptionsContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by SCSSParser#transformOptions.
    def visitTransformOptions(self, ctx:SCSSParser.TransformOptionsContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by SCSSParser#transitionOptions.
    def visitTransitionOptions(self, ctx:SCSSParser.TransitionOptionsContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by SCSSParser#voiceOptions.
    def visitVoiceOptions(self, ctx:SCSSParser.VoiceOptionsContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by SCSSParser#voicePitchOptions.
    def visitVoicePitchOptions(self, ctx:SCSSParser.VoicePitchOptionsContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by SCSSParser#wordOptions.
    def visitWordOptions(self, ctx:SCSSParser.WordOptionsContext):
        return self.visitChildren(ctx)



del SCSSParser