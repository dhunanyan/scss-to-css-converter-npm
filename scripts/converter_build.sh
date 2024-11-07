rm -rf dist  
antlr4 -Dlanguage=TypeScript antlr/SCSSLexer.g4 -visitor -o dist
antlr4 -Dlanguage=TypeScript antlr/SCSSParser.g4 -visitor -o dist
