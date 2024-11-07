rm -rf parser  
mkdir parser

cd antlr
antlr4 -Dlanguage=TypeScript SCSSLexer.g4 -visitor -o ../parser
antlr4 -Dlanguage=TypeScript SCSSParser.g4 -visitor -o ../parser
cd ..