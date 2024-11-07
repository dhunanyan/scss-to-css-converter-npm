rm -rf parser  
antlr4 -Dlanguage=TypeScript antlr/SCSSLexer.g4 -visitor -o parser
antlr4 -Dlanguage=TypeScript antlr/SCSSParser.g4 -visitor -o parser
