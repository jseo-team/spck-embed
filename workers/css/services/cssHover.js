!function(e){if("object"==typeof module&&"object"==typeof module.exports){var r=e(require,exports);void 0!==r&&(module.exports=r)}else"function"==typeof define&&define.amd&&define(["require","exports","../parser/cssNodes","./languageFacts","vscode-languageserver-types","./selectorPrinting"],e)}(function(e,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var g=e("../parser/cssNodes"),p=e("./languageFacts"),d=e("vscode-languageserver-types"),v=e("./selectorPrinting"),t=function(){function e(){}return e.prototype.doHover=function(r,e,t){function n(e){return d.Range.create(r.positionAt(e.offset),r.positionAt(e.end))}for(var o=r.offsetAt(e),i=g.getNodePath(t,o),s=0;s<i.length;s++){var a=i[s];if(a instanceof g.Selector)return{contents:v.selectorToMarkedString(a),range:n(a)};if(a instanceof g.SimpleSelector)return{contents:v.simpleSelectorToMarkedString(a),range:n(a)};if(a instanceof g.Declaration){var c=a.getFullPropertyName(),f=p.getProperties()[c];if(f){var u=[];f.description&&u.push(d.MarkedString.fromPlainText(f.description));var l=p.getBrowserLabel(f.browsers);if(l&&u.push(d.MarkedString.fromPlainText(l)),u.length)return{contents:u,range:n(a)}}}}return null},e}();r.CSSHover=t});