webpackJsonp(["styles"],{

/***/ "../../../../../src/assets/fonts/SunAntwerpen_500.eot":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "SunAntwerpen_500.4734753f4baab01da613.eot";

/***/ }),

/***/ "../../../../../src/assets/fonts/SunAntwerpen_500.woff":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "SunAntwerpen_500.616e4e9d1d9d9c47d5ec.woff";

/***/ }),

/***/ "../../../../../src/assets/fonts/antwerpen_regular-webfont.eot":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "antwerpen_regular-webfont.b56bbab5fe6bde6dacd4.eot";

/***/ }),

/***/ "../../../../../src/assets/fonts/antwerpen_regular-webfont.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "antwerpen_regular-webfont.0e6290c51fe0ba3dab47.svg";

/***/ }),

/***/ "../../../../../src/assets/fonts/antwerpen_regular-webfont.ttf":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "antwerpen_regular-webfont.c39b6673e3e9b208efe6.ttf";

/***/ }),

/***/ "../../../../../src/assets/fonts/antwerpen_regular-webfont.woff":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "antwerpen_regular-webfont.141f8d1b211f9e5c16c5.woff";

/***/ }),

/***/ "../../../../../src/assets/fonts/antwerpen_regular-webfont.woff2":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "antwerpen_regular-webfont.0dfd51509fe4987c1f45.woff2";

/***/ }),

/***/ "../../../../../src/styles.css":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"import\":false}!../../../../postcss-loader/lib/index.js?{\"ident\":\"postcss\",\"sourceMap\":false}!../../../../../src/styles.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__("../../../../style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js??ref--7-1!../node_modules/postcss-loader/lib/index.js??postcss!./styles.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js??ref--7-1!../node_modules/postcss-loader/lib/index.js??postcss!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "../../../../css-loader/index.js?{\"sourceMap\":false,\"import\":false}!../../../../postcss-loader/lib/index.js?{\"ident\":\"postcss\",\"sourceMap\":false}!../../../../../src/styles.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\r\n\r\n@font-face{\r\n  font-family:\"Antwerpen\";\r\n  src: url(" + escape(__webpack_require__("../../../../../src/assets/fonts/antwerpen_regular-webfont.eot")) + ");\r\n  src:\r\n    url(" + escape(__webpack_require__("../../../../../src/assets/fonts/antwerpen_regular-webfont.eot")) + "?#iefix) format(\"embedded-opentype\"),\r\n    url(" + escape(__webpack_require__("../../../../../src/assets/fonts/antwerpen_regular-webfont.woff2")) + ") format(\"woff2\"),\r\n    url(" + escape(__webpack_require__("../../../../../src/assets/fonts/antwerpen_regular-webfont.woff")) + ") format(\"woff\"),\r\n    url(" + escape(__webpack_require__("../../../../../src/assets/fonts/antwerpen_regular-webfont.ttf")) + ") format(\"truetype\"),\r\n    url(" + escape(__webpack_require__("../../../../../src/assets/fonts/antwerpen_regular-webfont.svg")) + "#antwerpenregular) format(\"svg\");\r\n  font-weight:normal;\r\n  font-style:normal;\r\n}\r\n\r\n@font-face{\r\n  font-family:\"Sun Regular\";\r\n  src:url(" + escape(__webpack_require__("../../../../../src/assets/fonts/SunAntwerpen_500.eot")) + ");\r\n  src:url(" + escape(__webpack_require__("../../../../../src/assets/fonts/SunAntwerpen_500.woff")) + ") format(\"woff\");\r\n  font-weight:500;\r\n  font-style:normal;\r\n}\r\n\r\nbody {\r\n\tfont-family: \"Sun Regular\", \"Arial\", sans-serif;\r\n\tfont-size: 17px;\r\n\tmargin: 0;\r\n}\r\n\r\nh1, h2, h3, h4, h5, h6, span {\r\n  font-family: \"Antwerpen\", \"SunRegular\", Arial, Sans-serif;\r\n  font-weight: normal;\r\n}\r\n\r\nh1 {\r\n\tcolor: #CF0039;\r\n\tfont-size: 3rem;\r\n\tmargin: 1rem 0 0 0;\r\n}\r\n\r\np {\r\n  font-size: 1rem;\r\n  line-height: 1.33em;\r\n  margin-top: .5rem;\r\n  margin-bottom: 1rem;\r\n  padding-top: 0;\r\n  padding-bottom: 0;\r\n}\r\n\r\np.lead {\r\n  font-weight: 700;\r\n}\r\n\r\np a, .right li a {\r\n  color: #0064B4;\r\n  text-decoration: underline;\r\n}\r\n\r\np a:hover {\r\n  color: #003c6c;\r\n}\r\n\r\n.right li {\r\n  list-style: square;\r\n  font-size: 1rem;\r\n  line-height: 1.33em;\r\n}\r\n\r\napp-footer {\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\t-webkit-box-pack: center;\r\n\t    -ms-flex-pack: center;\r\n\t        justify-content: center;\r\n\t-webkit-box-orient: horizontal;\r\n\t-webkit-box-direction: normal;\r\n\t    -ms-flex-direction: row;\r\n\t        flex-direction: row;\r\n\tbackground-color: #202020;\r\n\tmargin-top: 50px;\r\n\tpadding: 20px 0 30px 0;\r\n\tcolor: #fff;\r\n}\r\n\r\niframe {\r\n\twidth: 760px;\r\n\theight: 427px;\r\n\tborder-style: none;\r\n}\r\n\r\n.logo {\r\n\twidth: 6em;\r\n\theight: 6em;\r\n\tmargin-top: 48px;\r\n\tz-index: 950;\r\n}\r\n\r\n@-moz-document url-prefix() {\r\n  .background {\r\n    margin-top: -82px !important;\r\n  }\r\n\r\n  .topnav {\r\n  \ttop: 13px !important;\r\n  }\r\n}\r\n\r\n.topnav {\r\n\tposition: absolute;\r\n\tright: 0;\r\n\ttop: 15px;\r\n}\r\n\r\n.topnav a {\r\n\ttext-decoration: none;\r\n\tcolor: #fff;\r\n\tpadding: 15px 20px;\r\n  background: #0064B4;\r\n  border-right: 4px solid rgba(0,0,0,0.2);\r\n  -webkit-transition: background .25s ease-out;\r\n  transition: background .25s ease-out;\r\n  font-weight: bold;\r\n}\r\n\r\n.topnav a:last-child {\r\n  border-right-width: 2px;\r\n}\r\n\r\n.topnav a:hover {\r\n  background: #003f72;\r\n}\r\n\r\n.videoWrapper {\r\n  position: relative;\r\n  padding-bottom: 56.25%; /* 16:9 */\r\n  padding-top: 25px;\r\n  height: 0;\r\n}\r\n\r\n.videoWrapper iframe {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  border-style: none;\r\n}\r\n\r\n.subnav {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-flow: column;\r\n          flex-flow: column;\r\n  margin-right: 20px;\r\n}\r\n\r\n.subnav a {\r\n  width: 300px;\r\n  border-top: 1px solid rgba(127,127,127,0.3);\r\n  margin: 0;\r\n  margin-top: -1px;\r\n  padding: 15px 10px;\r\n  position: relative;\r\n  color: inherit;\r\n  text-decoration: inherit;\r\n}\r\n\r\n.subnav a.active{\r\n  color: #0064B4;\r\n  font-weight: bold;\r\n}\r\n\r\n.subnav a:last-child {\r\n  border-bottom: 1px solid rgba(127,127,127,0.3);\r\n}\r\n\r\n.subnav a:hover {\r\n  background: #eee;\r\n  color: #003c6c;\r\n\r\n}\r\n\r\n.subnav a.selected {\r\n  font-weight: bold;\r\n  color: #0064B4;\r\n}\r\n\r\n.subnav a i {\r\n  position: absolute;\r\n  right: 10px;\r\n  font-size: .8rem;\r\n  margin: .1rem 0;\r\n  -webkit-transition: font-size .2s ease-in-out, margin .2s ease-in-out;\r\n  transition: font-size .2s ease-in-out, margin .2s ease-in-out;\r\n}\r\n\r\n.subnav a:hover i {\r\n  font-size: 1rem;\r\n  margin: 0 3px;\r\n}\r\n\r\n.right {\r\n  width: 40%;\r\n}\r\n\r\na {\r\n  margin: 10px 0;\r\n}\r\n\r\nh2 {\r\n  margin-top: .5rem;\r\n}\r\n\r\n@media only screen and (max-width: 1210px) {\r\n\r\n    .right {\r\n    \twidth: 60%;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 940px) {\r\n    .logo {\r\n        width: 3.5em;\r\n        height: 3.5em;\r\n    }\r\n\r\n    h1 {\r\n    \tfont-size: 2.5rem;\r\n    }\r\n\r\n    .subnav {\r\n    \twidth: 55%;\r\n    \tmargin: 20px 0 10px 0;\r\n    }\r\n\r\n    .subnav a {\r\n    \twidth: 90%;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 736px) {\r\n  .subnav {\r\n    margin-top: 80px;\r\n  }\r\n\r\n}\r\n\r\n@media only screen and (max-width: 700px) {\r\n    app-footer {\r\n      -webkit-box-orient: vertical;\r\n      -webkit-box-direction: normal;\r\n          -ms-flex-direction: column;\r\n              flex-direction: column;\r\n      -webkit-box-align: center;\r\n          -ms-flex-align: center;\r\n              align-items: center;\r\n    }\r\n\r\n    .media {\r\n    \tmargin-top: 40px;\r\n    \tmargin-left: -10px;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 640px) {\r\n\t.subnav {\r\n    width: 80%;\r\n    margin-top: 0;\r\n\t}\r\n\r\n    .right {\r\n    \twidth: 90%;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 530px) {\r\n    h1 {\r\n    \tfont-size: 2rem;\r\n    }\r\n}\r\n", ""]);

// exports


/***/ }),

/***/ "../../../../css-loader/lib/css-base.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "../../../../css-loader/lib/url/escape.js":
/***/ (function(module, exports) {

module.exports = function escape(url) {
    if (typeof url !== 'string') {
        return url
    }
    // If url is already wrapped in quotes, remove them
    if (/^['"].*['"]$/.test(url)) {
        url = url.slice(1, -1);
    }
    // Should url be wrapped?
    // See https://drafts.csswg.org/css-values-3/#urls
    if (/["'() \t\n]/.test(url)) {
        return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"'
    }

    return url
}


/***/ }),

/***/ "../../../../style-loader/addStyles.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/styles.css");


/***/ })

},[2]);
//# sourceMappingURL=styles.bundle.js.map