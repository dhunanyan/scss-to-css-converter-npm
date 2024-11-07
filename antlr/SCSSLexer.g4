/*
 [The "BSD licence"]
 Copyright (c) 2014 Vlad Shlosberg
 Copyright (c) 2022 Sergei Russkikh
 All rights reserved.
*/

lexer grammar SCSSLexer;

fragment Hex             : [0-9a-fA-F];
fragment NewlineOrSpace  : '\r\n' | [ \t\r\n\f] |;
fragment Unicode         : '\\' Hex Hex? Hex? Hex? Hex? Hex? NewlineOrSpace;
fragment Escape          : Unicode | '\\' ~[\r\n\f0-9a-fA-F];
fragment Whitespace      : Space |;
fragment Newline         : '\n' | '\r\n' | '\r' | '\f';
fragment ZeroToFourZeros : '0'? '0'? '0'? '0'?;
fragment DashChar        : '-' | '\\' ZeroToFourZeros '2d' NewlineOrSpace;

fragment Nmstart  : [_a-zA-Z] | Nonascii | Escape;
fragment Nmchar   : [_a-zA-Z0-9\-] | Nonascii | Escape;
fragment Nonascii : ~[\u0000-\u007f];
fragment Name     : Nmchar+;
fragment Url      : ( [!#$%&*-~] | Nonascii | Escape)*;

Comment          : (LineComment | MultiLineComment) -> skip;
MultiLineComment : '/*' ~'*'* '*'+ ( ~[/*] ~'*'* '*'+)* '/';
LineComment      : '//' ~([\n\r\u2028\u2029])*;
Space            : [ \t\r\n\f]+ -> skip;

Uri    : 'url(' Whitespace (Url | String_) (Space (Url | String_))* Whitespace ')';
Format : 'format(' Whitespace String_ Whitespace ')';

AbsLength        : 'px' | 'cm' | 'mm' | 'pt' | 'pc' | 'q';
FontRelative     : 'em' | 'ex' | 'ch' | 'rem';
ViewportRelative : 'vw' | 'vh' | 'vmin' | 'vmax';
Angle            : 'deg' | 'rad' | 'grad' | 'turn';
Resolution       : 'dpi' | 'dpcm' | 'dppx';
Freq             : 'hz' | 'khz' | 'fr';
Time             : 'ms' | 's';
Percentage       : '%';

Import    : '@import';
Include   : '@include';
Use       : '@use';
Require   : '@require';
Charset   : '@charset ';
Mixin     : '@mixin';
Function  : '@function';
FontFace  : '@font-face';
Forward   : '@forward';
Content   : '@content';
Keyframes : '@keyframes';
Return    : '@return';
Media     : '@media';
Extend    : '@extend';
Warn      : '@warn';
Error     : '@error';

If      : 'if';
AtIf    : '@if';
AtFor   : '@for';
AtElse  : '@else';
AtWhile : '@while';
AtEach  : '@each';

From    : 'from';
To      : 'to';
Through : 'through';
Only    : 'only';
Not     : 'not';
And     : 'and';
Using   : 'using';
As      : 'as';
With    : 'with';
Or      : 'or';
In      : 'in';

Default   : '!default';
Important : '!important';

Lparen     : '(';
Rparen     : ')';
Lbrack     : '[';
Rbrack     : ']';
BlockStart : '{';
BlockEnd   : '}';

Dot   : '.';
Comma : ',';
Colon : ':';
Semi  : ';';

Tilde  : '~';
Under  : '_';
Dollar : '$';
At     : '@';
Amp    : '&';
Hash   : '#';
True   : 'true';
False  : 'false';

Plus  : '+';
Div   : '/';
Minus : '-';
Times : '*';

Eq        : '=';
NotEq     : '!=';
Greater   : '>';
Less      : '<';
Includes  : '~=';
DashMatch : '|=';
Pipe      : '|';
Cdo       : '<!--';
Cdc       : '-->';

PseudoNot : ':not(';
Calc      : 'calc(';
Rotate    : 'rotate(';
Var       : 'var(';
Rgba      : 'rgba(';
Repeat    : 'repeat(';

PrefixMatch    : '^=';
SuffixMatch    : '$=';
SubstringMatch : '*=';

VendorPrefix: '-moz-' | '-webkit-' | '-o-';

Variable               : '--' (Interpolation | Nmstart) (Interpolation | Nmchar)*;
fragment Interpolation : Hash BlockStart Dollar? Ident BlockEnd;
Number                 : [0-9]+ | [0-9]* '.' [0-9]+;
String_:
    '"' (~[\n\r\f\\"] | '\\' Newline | Escape)* '"'
    | '\'' ( ~[\n\r\f\\'] | '\\' Newline | Escape)* '\''
;

// Give Ident least priority so that more specific rules matches first
Ident: Nmstart Nmchar*;