var __extends=this&&this.__extends||function(){var n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])};return function(t,e){function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}}();!function(t){if("object"==typeof module&&"object"==typeof module.exports){var e=t(require,exports);void 0!==e&&(module.exports=e)}else"function"==typeof define&&define.amd&&define(["require","exports"],t)}(function(t,e){"use strict";var i,r,n;function o(t,e){var r=null;return!t||e<t.offset||e>t.end?null:(t.accept(function(t){return-1===t.offset&&-1===t.length||t.offset<=e&&t.end>=e&&(r?t.length<=r.length&&(r=t):r=t,!0)}),r)}Object.defineProperty(e,"__esModule",{value:!0}),(r=i=e.NodeType||(e.NodeType={}))[r.Undefined=0]="Undefined",r[r.Identifier=1]="Identifier",r[r.Stylesheet=2]="Stylesheet",r[r.Ruleset=3]="Ruleset",r[r.Selector=4]="Selector",r[r.SimpleSelector=5]="SimpleSelector",r[r.SelectorInterpolation=6]="SelectorInterpolation",r[r.SelectorCombinator=7]="SelectorCombinator",r[r.SelectorCombinatorParent=8]="SelectorCombinatorParent",r[r.SelectorCombinatorSibling=9]="SelectorCombinatorSibling",r[r.SelectorCombinatorAllSiblings=10]="SelectorCombinatorAllSiblings",r[r.SelectorCombinatorShadowPiercingDescendant=11]="SelectorCombinatorShadowPiercingDescendant",r[r.Page=12]="Page",r[r.PageBoxMarginBox=13]="PageBoxMarginBox",r[r.ClassSelector=14]="ClassSelector",r[r.IdentifierSelector=15]="IdentifierSelector",r[r.ElementNameSelector=16]="ElementNameSelector",r[r.PseudoSelector=17]="PseudoSelector",r[r.AttributeSelector=18]="AttributeSelector",r[r.Declaration=19]="Declaration",r[r.Declarations=20]="Declarations",r[r.Property=21]="Property",r[r.Expression=22]="Expression",r[r.BinaryExpression=23]="BinaryExpression",r[r.Term=24]="Term",r[r.Operator=25]="Operator",r[r.Value=26]="Value",r[r.StringLiteral=27]="StringLiteral",r[r.URILiteral=28]="URILiteral",r[r.EscapedValue=29]="EscapedValue",r[r.Function=30]="Function",r[r.NumericValue=31]="NumericValue",r[r.HexColorValue=32]="HexColorValue",r[r.MixinDeclaration=33]="MixinDeclaration",r[r.MixinReference=34]="MixinReference",r[r.VariableName=35]="VariableName",r[r.VariableDeclaration=36]="VariableDeclaration",r[r.Prio=37]="Prio",r[r.Interpolation=38]="Interpolation",r[r.NestedProperties=39]="NestedProperties",r[r.ExtendsReference=40]="ExtendsReference",r[r.SelectorPlaceholder=41]="SelectorPlaceholder",r[r.Debug=42]="Debug",r[r.If=43]="If",r[r.Else=44]="Else",r[r.For=45]="For",r[r.Each=46]="Each",r[r.While=47]="While",r[r.MixinContent=48]="MixinContent",r[r.Media=49]="Media",r[r.Keyframe=50]="Keyframe",r[r.FontFace=51]="FontFace",r[r.Import=52]="Import",r[r.Namespace=53]="Namespace",r[r.Invocation=54]="Invocation",r[r.FunctionDeclaration=55]="FunctionDeclaration",r[r.ReturnStatement=56]="ReturnStatement",r[r.MediaQuery=57]="MediaQuery",r[r.FunctionParameter=58]="FunctionParameter",r[r.FunctionArgument=59]="FunctionArgument",r[r.KeyframeSelector=60]="KeyframeSelector",r[r.ViewPort=61]="ViewPort",r[r.Document=62]="Document",r[r.AtApplyRule=63]="AtApplyRule",r[r.CustomPropertyDeclaration=64]="CustomPropertyDeclaration",r[r.CustomPropertySet=65]="CustomPropertySet",r[r.ListEntry=66]="ListEntry",r[r.Supports=67]="Supports",r[r.SupportsCondition=68]="SupportsCondition",r[r.NamespacePrefix=69]="NamespacePrefix",r[r.GridLine=70]="GridLine",(n=e.ReferenceType||(e.ReferenceType={}))[n.Mixin=0]="Mixin",n[n.Rule=1]="Rule",n[n.Variable=2]="Variable",n[n.Function=3]="Function",n[n.Keyframe=4]="Keyframe",n[n.Unknown=5]="Unknown",e.getNodeAtOffset=o,e.getNodePath=function(t,e){for(var r=o(t,e),n=[];r;)n.unshift(r),r=r.parent;return n},e.getParentDeclaration=function(t){var e=t.findParent(i.Declaration);return e&&e.getValue()&&e.getValue().encloses(t)?e:null};var u=function(){function t(t,e,r){void 0===t&&(t=-1),void 0===e&&(e=-1),this.parent=null,this.offset=t,this.length=e,r&&(this.nodeType=r)}return Object.defineProperty(t.prototype,"end",{get:function(){return this.offset+this.length},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"type",{get:function(){return this.nodeType||i.Undefined},set:function(t){this.nodeType=t},enumerable:!0,configurable:!0}),t.prototype.getTextProvider=function(){for(var t=this;t&&!t.textProvider;)t=t.parent;return t?t.textProvider:function(){return"unknown"}},t.prototype.getText=function(){return this.getTextProvider()(this.offset,this.length)},t.prototype.matches=function(t){return this.length===t.length&&this.getTextProvider()(this.offset,this.length)===t},t.prototype.startsWith=function(t){return this.length>=t.length&&this.getTextProvider()(this.offset,t.length)===t},t.prototype.endsWith=function(t){return this.length>=t.length&&this.getTextProvider()(this.end-t.length,t.length)===t},t.prototype.accept=function(t){if(t(this)&&this.children)for(var e=0,r=this.children;e<r.length;e++){r[e].accept(t)}},t.prototype.acceptVisitor=function(t){this.accept(t.visitNode.bind(t))},t.prototype.adoptChild=function(t,e){if(void 0===e&&(e=-1),t.parent&&t.parent.children){var r=t.parent.children.indexOf(t);0<=r&&t.parent.children.splice(r,1)}var n=(t.parent=this).children;return n||(n=this.children=[]),-1!==e?n.splice(e,0,t):n.push(t),t},t.prototype.attachTo=function(t,e){return void 0===e&&(e=-1),t&&t.adoptChild(this,e),this},t.prototype.collectIssues=function(t){this.issues&&t.push.apply(t,this.issues)},t.prototype.addIssue=function(t){this.issues||(this.issues=[]),this.issues.push(t)},t.prototype.hasIssue=function(e){return this.issues&&this.issues.some(function(t){return t.getRule()===e})},t.prototype.isErroneous=function(t){return void 0===t&&(t=!1),!!(this.issues&&0<this.issues.length)||t&&this.children&&this.children.some(function(t){return t.isErroneous(!0)})},t.prototype.setNode=function(t,e,r){return void 0===r&&(r=-1),!!e&&(e.attachTo(this,r),this[t]=e,!0)},t.prototype.addChild=function(t){return!!t&&(this.children||(this.children=[]),t.attachTo(this),this.updateOffsetAndLength(t),!0)},t.prototype.updateOffsetAndLength=function(t){(t.offset<this.offset||-1===this.offset)&&(this.offset=t.offset);var e=t.end;(e>this.end||-1===this.length)&&(this.length=e-this.offset)},t.prototype.hasChildren=function(){return this.children&&0<this.children.length},t.prototype.getChildren=function(){return this.children?this.children.slice(0):[]},t.prototype.getChild=function(t){return this.children&&t<this.children.length?this.children[t]:null},t.prototype.addChildren=function(t){for(var e=0,r=t;e<r.length;e++){var n=r[e];this.addChild(n)}},t.prototype.findFirstChildBeforeOffset=function(t){if(this.children)for(var e=null,r=this.children.length-1;0<=r;r--)if((e=this.children[r]).offset<=t)return e;return null},t.prototype.findChildAtOffset=function(t,e){var r=this.findFirstChildBeforeOffset(t);return r&&r.end>=t?e&&r.findChildAtOffset(t,!0)||r:null},t.prototype.encloses=function(t){return this.offset<=t.offset&&this.offset+this.length>=t.offset+t.length},t.prototype.getParent=function(){for(var t=this.parent;t instanceof s;)t=t.parent;return t},t.prototype.findParent=function(t){for(var e=this;e&&e.type!==t;)e=e.parent;return e},t.prototype.setData=function(t,e){this.options||(this.options={}),this.options[t]=e},t.prototype.getData=function(t){return this.options&&this.options.hasOwnProperty(t)?this.options[t]:null},t}(),s=function(n){function t(t,e){void 0===e&&(e=-1);var r=n.call(this,-1,-1)||this;return r.attachTo(t,e),r.offset=-1,r.length=-1,r}return __extends(t,n),t}(e.Node=u);e.Nodelist=s;var c=function(n){function t(t,e){var r=n.call(this,t,e)||this;return r.isCustomProperty=!1,r}return __extends(t,n),Object.defineProperty(t.prototype,"type",{get:function(){return i.Identifier},enumerable:!0,configurable:!0}),t.prototype.containsInterpolation=function(){return this.hasChildren()},t}(u);e.Identifier=c;var a=function(r){function t(t,e){return r.call(this,t,e)||this}return __extends(t,r),Object.defineProperty(t.prototype,"type",{get:function(){return i.Stylesheet},enumerable:!0,configurable:!0}),t.prototype.setName=function(t){this.name=t},t}(u);e.Stylesheet=a;var p=function(r){function t(t,e){return r.call(this,t,e)||this}return __extends(t,r),Object.defineProperty(t.prototype,"type",{get:function(){return i.Declarations},enumerable:!0,configurable:!0}),t}(u);e.Declarations=p;var f=function(r){function t(t,e){return r.call(this,t,e)||this}return __extends(t,r),t.prototype.getDeclarations=function(){return this.declarations},t.prototype.setDeclarations=function(t){return this.setNode("declarations",t)},t}(u),l=function(r){function t(t,e){return r.call(this,t,e)||this}return __extends(t,r),Object.defineProperty(t.prototype,"type",{get:function(){return i.Ruleset},enumerable:!0,configurable:!0}),t.prototype.getSelectors=function(){return this.selectors||(this.selectors=new s(this)),this.selectors},t.prototype.isNested=function(){return this.parent&&null!==this.parent.findParent(i.Declarations)},t}(e.BodyDeclaration=f);e.RuleSet=l;var h=function(r){function t(t,e){return r.call(this,t,e)||this}return __extends(t,r),Object.defineProperty(t.prototype,"type",{get:function(){return i.Selector},enumerable:!0,configurable:!0}),t}(u);e.Selector=h;var d=function(r){function t(t,e){return r.call(this,t,e)||this}return __extends(t,r),Object.defineProperty(t.prototype,"type",{get:function(){return i.SimpleSelector},enumerable:!0,configurable:!0}),t}(u);e.SimpleSelector=d;var y=function(r){function t(t,e){return r.call(this,t,e)||this}return __extends(t,r),Object.defineProperty(t.prototype,"type",{get:function(){return i.AtApplyRule},enumerable:!0,configurable:!0}),t.prototype.setIdentifier=function(t){return this.setNode("identifier",t,0)},t.prototype.getIdentifier=function(){return this.identifier},t.prototype.getName=function(){return this.identifier?this.identifier.getText():""},t}(u);e.AtApplyRule=y;var g=function(r){function t(t,e){return r.call(this,t,e)||this}return __extends(t,r),t}(u),b=function(r){function t(t,e){return r.call(this,t,e)||this}return __extends(t,r),Object.defineProperty(t.prototype,"type",{get:function(){return i.CustomPropertyDeclaration},enumerable:!0,configurable:!0}),t.prototype.setProperty=function(t){return this.setNode("property",t)},t.prototype.getProperty=function(){return this.property},t.prototype.setValue=function(t){return this.setNode("value",t)},t.prototype.getValue=function(){return this.value},t.prototype.setPropertySet=function(t){return this.setNode("propertySet",t)},t.prototype.getPropertySet=function(){return this.propertySet},t}(e.AbstractDeclaration=g);e.CustomPropertyDeclaration=b;var m=function(r){function t(t,e){return r.call(this,t,e)||this}return __extends(t,r),Object.defineProperty(t.prototype,"type",{get:function(){return i.CustomPropertySet},enumerable:!0,configurable:!0}),t}(f);e.CustomPropertySet=m;var P=function(r){function n(t,e){return r.call(this,t,e)||this}return __extends(n,r),Object.defineProperty(n.prototype,"type",{get:function(){return i.Declaration},enumerable:!0,configurable:!0}),n.prototype.setProperty=function(t){return this.setNode("property",t)},n.prototype.getProperty=function(){return this.property},n.prototype.getFullPropertyName=function(){var t=this.property?this.property.getName():"unknown";if(this.parent instanceof p&&this.parent.getParent()instanceof F){var e=this.parent.getParent().getParent();if(e instanceof n)return e.getFullPropertyName()+t}return t},n.prototype.getNonPrefixedPropertyName=function(){var t=this.getFullPropertyName();if(t&&"-"===t.charAt(0)){var e=t.indexOf("-",1);if(-1!==e)return t.substring(e+1)}return t},n.prototype.setValue=function(t){return this.setNode("value",t)},n.prototype.getValue=function(){return this.value},n.prototype.setNestedProperties=function(t){return this.setNode("nestedProprties",t)},n.prototype.getNestedProperties=function(){return this.nestedProprties},n}(g);e.Declaration=P;var x=function(r){function t(t,e){return r.call(this,t,e)||this}return __extends(t,r),Object.defineProperty(t.prototype,"type",{get:function(){return i.Property},enumerable:!0,configurable:!0}),t.prototype.setIdentifier=function(t){return this.setNode("identifier",t)},t.prototype.getIdentifier=function(){return this.identifier},t.prototype.getName=function(){return this.getText()},t.prototype.isCustomProperty=function(){return this.identifier.isCustomProperty},t}(u);e.Property=x;var v=function(r){function t(t,e){return r.call(this,t,e)||this}return __extends(t,r),Object.defineProperty(t.prototype,"type",{get:function(){return i.Invocation},enumerable:!0,configurable:!0}),t.prototype.getArguments=function(){return this.arguments||(this.arguments=new s(this)),this.arguments},t}(u),_=function(r){function t(t,e){return r.call(this,t,e)||this}return __extends(t,r),Object.defineProperty(t.prototype,"type",{get:function(){return i.Function},enumerable:!0,configurable:!0}),t.prototype.setIdentifier=function(t){return this.setNode("identifier",t,0)},t.prototype.getIdentifier=function(){return this.identifier},t.prototype.getName=function(){return this.identifier?this.identifier.getText():""},t}(e.Invocation=v);e.Function=_;var N=function(r){function t(t,e){return r.call(this,t,e)||this}return __extends(t,r),Object.defineProperty(t.prototype,"type",{get:function(){return i.FunctionParameter},enumerable:!0,configurable:!0}),t.prototype.setIdentifier=function(t){return this.setNode("identifier",t,0)},t.prototype.getIdentifier=function(){return this.identifier},t.prototype.getName=function(){return this.identifier?this.identifier.getText():""},t.prototype.setDefaultValue=function(t){return this.setNode("defaultValue",t,0)},t.prototype.getDefaultValue=function(){return this.defaultValue},t}(u);e.FunctionParameter=N;var S=function(r){function t(t,e){return r.call(this,t,e)||this}return __extends(t,r),Object.defineProperty(t.prototype,"type",{get:function(){return i.FunctionArgument},enumerable:!0,configurable:!0}),t.prototype.setIdentifier=function(t){return this.setNode("identifier",t,0)},t.prototype.getIdentifier=function(){return this.identifier},t.prototype.getName=function(){return this.identifier?this.identifier.getText():""},t.prototype.setValue=function(t){return this.setNode("value",t,0)},t.prototype.getValue=function(){return this.value},t}(u);e.FunctionArgument=S;var O=function(r){function t(t,e){return r.call(this,t,e)||this}return __extends(t,r),Object.defineProperty(t.prototype,"type",{get:function(){return i.If},enumerable:!0,configurable:!0}),t.prototype.setExpression=function(t){return this.setNode("expression",t,0)},t.prototype.setElseClause=function(t){return this.setNode("elseClause",t)},t}(f);e.IfStatement=O;var C=function(r){function t(t,e){return r.call(this,t,e)||this}return __extends(t,r),Object.defineProperty(t.prototype,"type",{get:function(){return i.For},enumerable:!0,configurable:!0}),t.prototype.setVariable=function(t){return this.setNode("variable",t,0)},t}(f);e.ForStatement=C;var j=function(r){function t(t,e){return r.call(this,t,e)||this}return __extends(t,r),Object.defineProperty(t.prototype,"type",{get:function(){return i.Each},enumerable:!0,configurable:!0}),t.prototype.getVariables=function(){return this.variables||(this.variables=new s(this)),this.variables},t}(f);e.EachStatement=j;var I=function(r){function t(t,e){return r.call(this,t,e)||this}return __extends(t,r),Object.defineProperty(t.prototype,"type",{get:function(){return i.While},enumerable:!0,configurable:!0}),t}(f);e.WhileStatement=I;var V=function(r){function t(t,e){return r.call(this,t,e)||this}return __extends(t,r),Object.defineProperty(t.prototype,"type",{get:function(){return i.Else},enumerable:!0,configurable:!0}),t}(f);e.ElseStatement=V;var D=function(r){function t(t,e){return r.call(this,t,e)||this}return __extends(t,r),Object.defineProperty(t.prototype,"type",{get:function(){return i.FunctionDeclaration},enumerable:!0,configurable:!0}),t.prototype.setIdentifier=function(t){return this.setNode("identifier",t,0)},t.prototype.getIdentifier=function(){return this.identifier},t.prototype.getName=function(){return this.identifier?this.identifier.getText():""},t.prototype.getParameters=function(){return this.parameters||(this.parameters=new s(this)),this.parameters},t}(f);e.FunctionDeclaration=D;var E=function(r){function t(t,e){return r.call(this,t,e)||this}return __extends(t,r),Object.defineProperty(t.prototype,"type",{get:function(){return i.ViewPort},enumerable:!0,configurable:!0}),t}(f);e.ViewPort=E;var T=function(r){function t(t,e){return r.call(this,t,e)||this}return __extends(t,r),Object.defineProperty(t.prototype,"type",{get:function(){return i.FontFace},enumerable:!0,configurable:!0}),t}(f);e.FontFace=T;var F=function(r){function t(t,e){return r.call(this,t,e)||this}return __extends(t,r),Object.defineProperty(t.prototype,"type",{get:function(){return i.NestedProperties},enumerable:!0,configurable:!0}),t}(f);e.NestedProperties=F;var A=function(r){function t(t,e){return r.call(this,t,e)||this}return __extends(t,r),Object.defineProperty(t.prototype,"type",{get:function(){return i.Keyframe},enumerable:!0,configurable:!0}),t.prototype.setKeyword=function(t){return this.setNode("keyword",t,0)},t.prototype.getKeyword=function(){return this.keyword},t.prototype.setIdentifier=function(t){return this.setNode("identifier",t,0)},t.prototype.getIdentifier=function(){return this.identifier},t.prototype.getName=function(){return this.identifier?this.identifier.getText():""},t}(f);e.Keyframe=A;var M=function(r){function t(t,e){return r.call(this,t,e)||this}return __extends(t,r),Object.defineProperty(t.prototype,"type",{get:function(){return i.KeyframeSelector},enumerable:!0,configurable:!0}),t}(f);e.KeyframeSelector=M;var w=function(r){function t(t,e){return r.call(this,t,e)||this}return __extends(t,r),Object.defineProperty(t.prototype,"type",{get:function(){return i.Import},enumerable:!0,configurable:!0}),t.prototype.setMedialist=function(t){return!!t&&(t.attachTo(this),this.medialist=t,!0)},t}(u);e.Import=w;var R=function(r){function t(t,e){return r.call(this,t,e)||this}return __extends(t,r),Object.defineProperty(t.prototype,"type",{get:function(){return i.Namespace},enumerable:!0,configurable:!0}),t}(u);e.Namespace=R;var L=function(r){function t(t,e){return r.call(this,t,e)||this}return __extends(t,r),Object.defineProperty(t.prototype,"type",{get:function(){return i.Media},enumerable:!0,configurable:!0}),t}(f);e.Media=L;var B=function(r){function t(t,e){return r.call(this,t,e)||this}return __extends(t,r),Object.defineProperty(t.prototype,"type",{get:function(){return i.Supports},enumerable:!0,configurable:!0}),t}(f);e.Supports=B;var K=function(r){function t(t,e){return r.call(this,t,e)||this}return __extends(t,r),Object.defineProperty(t.prototype,"type",{get:function(){return i.Document},enumerable:!0,configurable:!0}),t}(f);e.Document=K;var W=function(r){function t(t,e){return r.call(this,t,e)||this}return __extends(t,r),t.prototype.getMediums=function(){return this.mediums||(this.mediums=new s(this)),this.mediums},t}(u);e.Medialist=W;var k=function(r){function t(t,e){return r.call(this,t,e)||this}return __extends(t,r),Object.defineProperty(t.prototype,"type",{get:function(){return i.MediaQuery},enumerable:!0,configurable:!0}),t}(u);e.MediaQuery=k;var U=function(r){function t(t,e){return r.call(this,t,e)||this}return __extends(t,r),Object.defineProperty(t.prototype,"type",{get:function(){return i.SupportsCondition},enumerable:!0,configurable:!0}),t}(u);e.SupportsCondition=U;var G=function(r){function t(t,e){return r.call(this,t,e)||this}return __extends(t,r),Object.defineProperty(t.prototype,"type",{get:function(){return i.Page},enumerable:!0,configurable:!0}),t}(f);e.Page=G;var H=function(r){function t(t,e){return r.call(this,t,e)||this}return __extends(t,r),Object.defineProperty(t.prototype,"type",{get:function(){return i.PageBoxMarginBox},enumerable:!0,configurable:!0}),t}(f);e.PageBoxMarginBox=H;var Q=function(r){function t(t,e){return r.call(this,t,e)||this}return __extends(t,r),Object.defineProperty(t.prototype,"type",{get:function(){return i.Expression},enumerable:!0,configurable:!0}),t}(u);e.Expression=Q;var q=function(r){function t(t,e){return r.call(this,t,e)||this}return __extends(t,r),Object.defineProperty(t.prototype,"type",{get:function(){return i.BinaryExpression},enumerable:!0,configurable:!0}),t.prototype.setLeft=function(t){return this.setNode("left",t)},t.prototype.getLeft=function(){return this.left},t.prototype.setRight=function(t){return this.setNode("right",t)},t.prototype.getRight=function(){return this.right},t.prototype.setOperator=function(t){return this.setNode("operator",t)},t.prototype.getOperator=function(){return this.operator},t}(u);e.BinaryExpression=q;var z=function(r){function t(t,e){return r.call(this,t,e)||this}return __extends(t,r),Object.defineProperty(t.prototype,"type",{get:function(){return i.Term},enumerable:!0,configurable:!0}),t.prototype.setOperator=function(t){return this.setNode("operator",t)},t.prototype.getOperator=function(){return this.operator},t.prototype.setExpression=function(t){return this.setNode("expression",t)},t.prototype.getExpression=function(){return this.expression},t}(u);e.Term=z;var J=function(r){function t(t,e){return r.call(this,t,e)||this}return __extends(t,r),Object.defineProperty(t.prototype,"type",{get:function(){return i.AttributeSelector},enumerable:!0,configurable:!0}),t.prototype.setExpression=function(t){return this.setNode("expression",t)},t.prototype.getExpression=function(){return this.expression},t.prototype.setNamespacePrefix=function(t){return this.setNode("namespacePrefix",t)},t.prototype.getNamespacePrefix=function(){return this.namespacePrefix},t}(u);e.AttributeSelector=J;var X=function(r){function t(t,e){return r.call(this,t,e)||this}return __extends(t,r),Object.defineProperty(t.prototype,"type",{get:function(){return i.Operator},enumerable:!0,configurable:!0}),t}(u);e.Operator=X;var Y=function(r){function t(t,e){return r.call(this,t,e)||this}return __extends(t,r),Object.defineProperty(t.prototype,"type",{get:function(){return i.HexColorValue},enumerable:!0,configurable:!0}),t}(u);e.HexColorValue=Y;var Z=function(r){function t(t,e){return r.call(this,t,e)||this}return __extends(t,r),Object.defineProperty(t.prototype,"type",{get:function(){return i.NumericValue},enumerable:!0,configurable:!0}),t.prototype.getValue=function(){for(var t,e=this.getText(),r=0,n=".".charCodeAt(0),i="0".charCodeAt(0),o="9".charCodeAt(0),u=0,s=e.length;u<s&&(i<=(t=e.charCodeAt(u))&&t<=o||t===n);u++)r+=1;return{value:e.substring(0,r),unit:r<e.length?e.substring(r):void 0}},t}(u);e.NumericValue=Z;var $=function(r){function t(t,e){return r.call(this,t,e)||this}return __extends(t,r),Object.defineProperty(t.prototype,"type",{get:function(){return i.VariableDeclaration},enumerable:!0,configurable:!0}),t.prototype.setVariable=function(t){return!!t&&(t.attachTo(this),this.variable=t,!0)},t.prototype.getVariable=function(){return this.variable},t.prototype.getName=function(){return this.variable?this.variable.getName():""},t.prototype.setValue=function(t){return!!t&&(t.attachTo(this),this.value=t,!0)},t.prototype.getValue=function(){return this.value},t}(g);e.VariableDeclaration=$;var tt=function(r){function t(t,e){return r.call(this,t,e)||this}return __extends(t,r),Object.defineProperty(t.prototype,"type",{get:function(){return i.Interpolation},enumerable:!0,configurable:!0}),t}(u);e.Interpolation=tt;var et=function(r){function t(t,e){return r.call(this,t,e)||this}return __extends(t,r),Object.defineProperty(t.prototype,"type",{get:function(){return i.VariableName},enumerable:!0,configurable:!0}),t.prototype.getName=function(){return this.getText()},t}(u);e.Variable=et;var rt=function(r){function t(t,e){return r.call(this,t,e)||this}return __extends(t,r),Object.defineProperty(t.prototype,"type",{get:function(){return i.ExtendsReference},enumerable:!0,configurable:!0}),t.prototype.getSelectors=function(){return this.selectors||(this.selectors=new s(this)),this.selectors},t}(u);e.ExtendsReference=rt;var nt=function(r){function t(t,e){return r.call(this,t,e)||this}return __extends(t,r),Object.defineProperty(t.prototype,"type",{get:function(){return i.MixinReference},enumerable:!0,configurable:!0}),t.prototype.getNamespaces=function(){return this.namespaces||(this.namespaces=new s(this)),this.namespaces},t.prototype.setIdentifier=function(t){return this.setNode("identifier",t,0)},t.prototype.getIdentifier=function(){return this.identifier},t.prototype.getName=function(){return this.identifier?this.identifier.getText():""},t.prototype.getArguments=function(){return this.arguments||(this.arguments=new s(this)),this.arguments},t.prototype.setContent=function(t){return this.setNode("content",t)},t.prototype.getContent=function(){return this.content},t}(u);e.MixinReference=nt;var it=function(r){function t(t,e){return r.call(this,t,e)||this}return __extends(t,r),Object.defineProperty(t.prototype,"type",{get:function(){return i.MixinDeclaration},enumerable:!0,configurable:!0}),t.prototype.setIdentifier=function(t){return this.setNode("identifier",t,0)},t.prototype.getIdentifier=function(){return this.identifier},t.prototype.getName=function(){return this.identifier?this.identifier.getText():""},t.prototype.getParameters=function(){return this.parameters||(this.parameters=new s(this)),this.parameters},t.prototype.setGuard=function(t){return t&&(t.attachTo(this),this.guard=t),!1},t}(f);e.MixinDeclaration=it;var ot=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return __extends(e,t),e.prototype.getConditions=function(){return this.conditions||(this.conditions=new s(this)),this.conditions},e}(u);e.LessGuard=ot;var ut,st=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return __extends(e,t),e.prototype.setVariable=function(t){return this.setNode("variable",t)},e}(u);e.GuardCondition=st,(ut=e.Level||(e.Level={}))[ut.Ignore=1]="Ignore",ut[ut.Warning=2]="Warning",ut[ut.Error=4]="Error";var ct=function(){function t(t,e,r,n,i,o){void 0===i&&(i=t.offset),void 0===o&&(o=t.length),this.node=t,this.rule=e,this.level=r,this.message=n||e.message,this.offset=i,this.length=o}return t.prototype.getRule=function(){return this.rule},t.prototype.getLevel=function(){return this.level},t.prototype.getOffset=function(){return this.offset},t.prototype.getLength=function(){return this.length},t.prototype.getNode=function(){return this.node},t.prototype.getMessage=function(){return this.message},t}();e.Marker=ct;var at=function(){function r(){this.entries=[]}return r.entries=function(t){var e=new r;return t.acceptVisitor(e),e.entries},r.prototype.visitNode=function(t){return t.isErroneous()&&t.collectIssues(this.entries),!0},r}();e.ParseErrorCollector=at});