!function(e){if("object"==typeof module&&"object"==typeof module.exports){var n=e(require,exports);void 0!==n&&(module.exports=n)}else"function"==typeof define&&define.amd&&define(["require","exports","../parser/htmlScanner","vscode-languageserver-types"],e)}(function(e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var s=e("../parser/htmlScanner"),d=e("vscode-languageserver-types");function t(e,n){return e.line<n.line||e.line===n.line&&e.character<=n.character}function c(e,n){return t(e.start,n)&&t(n,e.end)}function f(e,n,t){for(var r=s.createScanner(n.getText(),t),o=r.scan();o!==s.TokenType.EOS&&o!==e;)o=r.scan();return o!==s.TokenType.EOS?{start:n.positionAt(r.getTokenOffset()),end:n.positionAt(r.getTokenEnd())}:null}n.findDocumentHighlights=function(e,n,t){var r=e.offsetAt(n),o=t.findNodeAt(r);if(!o.tag)return[];var a=[],i=f(s.TokenType.StartTag,e,o.start),u="number"==typeof o.endTagStart&&f(s.TokenType.EndTag,e,o.endTagStart);return(i&&c(i,n)||u&&c(u,n))&&(i&&a.push({kind:d.DocumentHighlightKind.Read,range:i}),u&&a.push({kind:d.DocumentHighlightKind.Read,range:u})),a}});