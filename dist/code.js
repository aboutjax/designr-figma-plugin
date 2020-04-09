/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/code.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/code.ts":
/*!*********************!*\
  !*** ./src/code.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helper_theme_swap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper/theme-swap */ "./src/helper/theme-swap.ts");
/* harmony import */ var _helper_spacing_check__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helper/spacing-check */ "./src/helper/spacing-check.ts");
/* harmony import */ var _helper_color_check__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helper/color-check */ "./src/helper/color-check.ts");
/* harmony import */ var _helper_force_auto_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helper/force-auto-layout */ "./src/helper/force-auto-layout.ts");
/* harmony import */ var _helper_spacing_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helper/spacing-slider */ "./src/helper/spacing-slider.ts");
/* harmony import */ var _helper_callback__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helper/callback */ "./src/helper/callback.ts");
// This plugin will open a modal to prompt the user to enter a number, and
// it will then create that many rectangles on the screen.
// This file holds the main code for the plugins. It has access to the *document*.
// You can access browser APIs in the <script> tag inside "ui.html" which has a
// full browser enviroment (see documentation).
// import { SpacingDefault } from "./helper/spacing-default";






// This shows the HTML page in "ui.html".
figma.showUI(__html__);
// Calls to "parent.postMessage" from within the HTML page will trigger this
// callback. The callback will be passed the "pluginMessage" property of the
// posted message.
figma.ui.resize(300, 800);
figma.on("selectionchange", () => {
    let thisSelection = figma.currentPage.selection[0];
    Object(_helper_callback__WEBPACK_IMPORTED_MODULE_5__["onSelectionChange"])(thisSelection);
});
figma.ui.onmessage = (msg) => {
    if (msg.type === "dark-theme") {
        Object(_helper_theme_swap__WEBPACK_IMPORTED_MODULE_0__["DarkThemeTraverse"])(figma.currentPage.selection[0]);
    }
    else if (msg.type === "light-theme") {
        Object(_helper_theme_swap__WEBPACK_IMPORTED_MODULE_0__["LightThemeTraverse"])(figma.currentPage.selection[0]);
    }
    else if (msg.type === "color-checker") {
        Object(_helper_color_check__WEBPACK_IMPORTED_MODULE_2__["ColorCheckTraverse"])(figma.currentPage.selection[0]);
    }
    else if (msg.type === "spacing-checker") {
        Object(_helper_spacing_check__WEBPACK_IMPORTED_MODULE_1__["SpacingCheckTraverse"])(figma.currentPage.selection);
    }
    else if (msg.type === "padding-horizontal-slider") {
        Object(_helper_spacing_slider__WEBPACK_IMPORTED_MODULE_4__["PaddingHorizontalSlider"])(figma.currentPage.selection, msg);
    }
    else if (msg.type === "padding-vertical-slider") {
        Object(_helper_spacing_slider__WEBPACK_IMPORTED_MODULE_4__["PaddingVerticalSlider"])(figma.currentPage.selection, msg);
    }
    else if (msg.type === "item-spacing-slider") {
        Object(_helper_spacing_slider__WEBPACK_IMPORTED_MODULE_4__["ItemSpacing"])(figma.currentPage.selection, msg);
    }
    else if (msg.type === "force-auto-layout-horizontal") {
        Object(_helper_force_auto_layout__WEBPACK_IMPORTED_MODULE_3__["ForceAutoLayoutHorizontal"])(figma.currentPage.selection);
    }
    else if (msg.type === "force-auto-layout-vertical") {
        Object(_helper_force_auto_layout__WEBPACK_IMPORTED_MODULE_3__["ForceAutoLayoutVertical"])(figma.currentPage.selection);
    }
    // Make sure to close the plugin when you're done. Otherwise the plugin will
    // keep running, which shows the cancel button at the bottom of the screen.
    // figma.closePlugin();
};


/***/ }),

/***/ "./src/helper/callback.ts":
/*!********************************!*\
  !*** ./src/helper/callback.ts ***!
  \********************************/
/*! exports provided: onSelectionChange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onSelectionChange", function() { return onSelectionChange; });
const onSelectionChange = (node) => {
    if (node) {
        // console.log("yes");
        let horizontalPadding = node.horizontalPadding;
        let verticalPadding = node.verticalPadding;
        let itemSpacing = node.itemSpacing;
        let layoutMode = node.layoutMode;
        let obj = {
            horizontalPadding: horizontalPadding,
            verticalPadding: verticalPadding,
            itemSpacing: itemSpacing,
            layoutMode: layoutMode,
        };
        figma.ui.postMessage(obj);
    }
    else {
        // console.log("no");
        figma.ui.postMessage("nothing selected");
    }
};



/***/ }),

/***/ "./src/helper/color-check.ts":
/*!***********************************!*\
  !*** ./src/helper/color-check.ts ***!
  \***********************************/
/*! exports provided: ColorCheckTraverse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorCheckTraverse", function() { return ColorCheckTraverse; });
function clone(val) {
    return JSON.parse(JSON.stringify(val));
}
// Check object equality helper
function isEquivalent(a, b) {
    // Create arrays of property names
    var aProps = Object.getOwnPropertyNames(a);
    var bProps = Object.getOwnPropertyNames(b);
    // If number of properties is different,
    // objects are not equivalent
    if (aProps.length != bProps.length) {
        return false;
    }
    for (var i = 0; i < aProps.length; i++) {
        var propName = aProps[i];
        // If values of same property are not equal,
        // objects are not equivalent
        if (a[propName] !== b[propName]) {
            return false;
        }
    }
    // If we made it this far, objects
    // are considered equivalent
    return true;
}
let strayFill = 0;
let strayStroke = 0;
const ColorCheckTraverse = (node) => {
    if ( true && "strokes" in node) {
        // Filter warning stroke function
        let filterWarningStroke = function (stroke) {
            console.log("clear out");
            if (stroke.type == "SOLID" &&
                isEquivalent(stroke.color, { r: 1, g: 0, b: 0 })) {
                console.log("yes");
                return false;
            }
            else {
                console.log("no");
                return true;
            }
        };
        let oldStrokes = clone(node.strokes);
        let newStrokes = oldStrokes.filter(filterWarningStroke);
        if (node.strokeStyleId.length > 0) {
            // do nothing
        }
        else {
            node.strokes = newStrokes;
        }
        // // Add warning stroke function
        let addWarningStroke = function (node) {
            let strokes = clone(node.strokes);
            let warningStrokeProperty = {
                color: { r: 1, g: 0, b: 0 },
                opacity: 1,
                type: "SOLID",
                blendMode: "NORMAL",
                visible: true,
            };
            strokes.push(warningStrokeProperty);
            node.strokes = strokes;
            // node.strokeAlign = "OUTSIDE";
        };
        // Check Fill
        if (node.fills.length > 0) {
            if (node.fillStyleId.length > 0) {
                console.log("✅ Good fill");
            }
            else {
                console.log("❌ Bad fill");
                // Add warning stroke
                addWarningStroke(node);
                strayFill++;
            }
        }
        else {
            console.log("no fill");
        }
        // Check Stroke
        if (node.strokes.length > 0) {
            if (node.strokeStyleId.length > 0) {
                console.log("✅ Good stroke");
            }
            else {
                console.log("❌ Bad stroke");
                // // Add warning stroke
                addWarningStroke(node);
                strayStroke++;
            }
        }
        else {
            console.log("no stroke");
        }
        // asdf
    }
    else {
        console.log("No fill & stroke property");
    }
    if ("children" in node) {
        for (const child of node.children) {
            ColorCheckTraverse(child);
        }
    }
    else {
        // do nothing
    }
};



/***/ }),

/***/ "./src/helper/force-auto-layout.ts":
/*!*****************************************!*\
  !*** ./src/helper/force-auto-layout.ts ***!
  \*****************************************/
/*! exports provided: ForceAutoLayoutHorizontal, ForceAutoLayoutVertical */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForceAutoLayoutHorizontal", function() { return ForceAutoLayoutHorizontal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForceAutoLayoutVertical", function() { return ForceAutoLayoutVertical; });
const ForceAutoLayoutHorizontal = (nodes) => {
    for (const node of nodes) {
        node.layoutMode = "HORIZONTAL";
    }
};
const ForceAutoLayoutVertical = (nodes) => {
    for (const node of nodes) {
        node.layoutMode = "VERTICAL";
    }
};



/***/ }),

/***/ "./src/helper/spacing-check.ts":
/*!*************************************!*\
  !*** ./src/helper/spacing-check.ts ***!
  \*************************************/
/*! exports provided: SpacingCheckTraverse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpacingCheckTraverse", function() { return SpacingCheckTraverse; });
const SpacingCheckTraverse = (nodes) => {
    for (const node of nodes) {
        let name = node.name;
        let paddingAllRegex = /\b(?:pa-xxs|pa-xs|pa-s|pa-m|pa-l|pa-xl|pa-xxl|pa-none)\b/g;
        let paddingHorizontalRegex = /\b(?:ph-xxs|ph-xs|ph-s|ph-m|ph-l|ph-xl|ph-xxl|ph-none)\b/g;
        let paddingVerticalRegex = /\b(?:pv-xxs|pv-xs|pv-s|pv-m|pv-l|pv-xl|pv-xxl|pv-none)\b/g;
        let itemSpacingAllRegex = /\b(?:sp-xxs|sp-xs|sp-s|sp-m|sp-l|sp-xl|sp-xxl|sp-none)\b/g;
        let autolayoutRegex = /\b(?:vertical|horizontal)\b/g;
        let matchPaddingAll = name.match(paddingAllRegex);
        let matchPaddingHorizontal = name.match(paddingHorizontalRegex);
        let matchPaddingVertical = name.match(paddingVerticalRegex);
        let matchItemSpacing = name.match(itemSpacingAllRegex);
        let matchAutoLayoutDirection = name.match(autolayoutRegex);
        if (matchAutoLayoutDirection == null) {
            node.layoutMode = "VERTICAL";
        }
        else {
            console.log("enable auto layout");
            switch (matchAutoLayoutDirection[0]) {
                case "vertical":
                    node.layoutMode = "VERTICAL";
                    break;
                case "horizontal":
                    node.layoutMode = "HORIZONTAL";
            }
        }
        if (matchItemSpacing == null) {
        }
        else {
            console.log("has spacing");
            switch (matchItemSpacing[0]) {
                case "sp-none":
                    node.itemSpacing = 0;
                    break;
                case "sp-xxs":
                    node.itemSpacing = 4;
                    break;
                case "sp-xs":
                    node.itemSpacing = 8;
                    break;
                case "sp-s":
                    node.itemSpacing = 16;
                    break;
                case "sp-m":
                    node.itemSpacing = 24;
                    break;
                case "sp-l":
                    node.itemSpacing = 32;
                    break;
                case "sp-xl":
                    node.itemSpacing = 40;
                    break;
                case "sp-xxl":
                    node.itemSpacing = 48;
                    break;
            }
        }
        if (matchPaddingAll == null) {
            // console.log("no");
        }
        else {
            console.log("has padding all");
            switch (matchPaddingAll[0]) {
                case "pa-none":
                    node.horizontalPadding = 0;
                    node.verticalPadding = 0;
                    break;
                case "pa-xxs":
                    node.horizontalPadding = 4;
                    node.verticalPadding = 4;
                    break;
                case "pa-xs":
                    node.horizontalPadding = 8;
                    node.verticalPadding = 8;
                    break;
                case "pa-s":
                    node.horizontalPadding = 16;
                    node.verticalPadding = 16;
                    break;
                case "pa-m":
                    node.horizontalPadding = 24;
                    node.verticalPadding = 24;
                    break;
                case "pa-l":
                    node.horizontalPadding = 32;
                    node.verticalPadding = 32;
                    break;
                case "pa-xl":
                    node.horizontalPadding = 40;
                    node.verticalPadding = 40;
                    break;
                case "pa-xxl":
                    node.horizontalPadding = 48;
                    node.verticalPadding = 48;
                    break;
            }
        }
        if (matchPaddingHorizontal == null) {
            // console.log("no");
        }
        else {
            console.log("has padding horizontal");
            switch (matchPaddingHorizontal[0]) {
                case "ph-none":
                    node.horizontalPadding = 0;
                    break;
                case "ph-xxs":
                    node.horizontalPadding = 4;
                    break;
                case "ph-xs":
                    node.horizontalPadding = 8;
                    break;
                case "ph-s":
                    node.horizontalPadding = 16;
                    break;
                case "ph-m":
                    node.horizontalPadding = 24;
                    break;
                case "ph-l":
                    node.horizontalPadding = 32;
                    break;
                case "ph-xl":
                    node.horizontalPadding = 40;
                    break;
                case "ph-xxl":
                    node.horizontalPadding = 48;
                    break;
            }
        }
        if (matchPaddingVertical == null) {
            // console.log("no");
        }
        else {
            console.log("has padding horizontal");
            switch (matchPaddingVertical[0]) {
                case "pv-none":
                    node.verticalPadding = 0;
                    break;
                case "pv-xxs":
                    node.verticalPadding = 4;
                    break;
                case "pv-xs":
                    node.verticalPadding = 8;
                    break;
                case "pv-s":
                    node.verticalPadding = 16;
                    break;
                case "pv-m":
                    node.verticalPadding = 24;
                    break;
                case "pv-l":
                    node.verticalPadding = 32;
                    break;
                case "pv-xl":
                    node.verticalPadding = 40;
                    break;
                case "pv-xxl":
                    node.verticalPadding = 48;
                    break;
            }
        }
        // SpacingCheckTraverse(node);
    }
    // if ("children" in nodes) {
    //   for (const child of node.children) {
    //     SpacingCheckTraverse(child);
    //   }
    // } else {
    //   // do nothing
    // }
};



/***/ }),

/***/ "./src/helper/spacing-slider.ts":
/*!**************************************!*\
  !*** ./src/helper/spacing-slider.ts ***!
  \**************************************/
/*! exports provided: PaddingHorizontalSlider, PaddingVerticalSlider, ItemSpacing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaddingHorizontalSlider", function() { return PaddingHorizontalSlider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaddingVerticalSlider", function() { return PaddingVerticalSlider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemSpacing", function() { return ItemSpacing; });
function clone(val) {
    return JSON.parse(JSON.stringify(val));
}
let phName = null;
let pvName = null;
let spName = null;
let nameProp = {
    horizontal: "ph-none",
    vertical: "pv-none",
    spacing: "sp-none",
};
function updateName(val, node) {
    if (val.type === "horizontal") {
        nameProp.horizontal = val.value;
    }
    else if (val.type === "vertical") {
        nameProp.vertical = val.value;
    }
    else if (val.type === "spacing") {
        nameProp.spacing = val.value;
    }
    node.name =
        nameProp.horizontal + " " + nameProp.vertical + " " + nameProp.spacing;
}
const PaddingHorizontalSlider = (nodes, msg) => {
    let sliderValue = msg.sliderValue;
    let spacing = null;
    let spacingName = null;
    switch (sliderValue) {
        default:
            spacing = 0;
            spacingName = "none";
            break;
        case "1":
            spacing = 4;
            spacingName = "xxs";
            break;
        case "2":
            spacing = 8;
            spacingName = "xs";
            break;
        case "3":
            spacing = 16;
            spacingName = "s";
            break;
        case "4":
            spacing = 24;
            spacingName = "m";
            break;
        case "5":
            spacing = 32;
            spacingName = "l";
            break;
        case "6":
            spacing = 40;
            spacingName = "xl";
            break;
        case "7":
            spacing = 48;
            spacingName = "xxl";
            break;
    }
    for (const node of nodes) {
        if (node) {
            phName = "ph-" + spacingName;
            updateName({ type: "horizontal", value: phName }, node);
            if (node.type === "GROUP") {
                node.horizontalPadding = spacing;
                node.layoutMode = "NONE";
                if ("children" in node) {
                    let group = node.children[0];
                }
            }
            else {
                let setAutoLayout = new Promise(function (resolve, reject) {
                    node.horizontalPadding = spacing;
                    setTimeout(() => resolve("done"), 5);
                });
            }
        }
    }
};
const PaddingVerticalSlider = (nodes, msg) => {
    let sliderValue = msg.sliderValue;
    let spacing = null;
    let spacingName = null;
    switch (sliderValue) {
        default:
            spacing = 0;
            spacingName = "none";
            break;
        case "1":
            spacing = 4;
            spacingName = "xxs";
            break;
        case "2":
            spacing = 8;
            spacingName = "xs";
            break;
        case "3":
            spacing = 16;
            spacingName = "s";
            break;
        case "4":
            spacing = 24;
            spacingName = "m";
            break;
        case "5":
            spacing = 32;
            spacingName = "l";
            break;
        case "6":
            spacing = 40;
            spacingName = "xl";
            break;
        case "7":
            spacing = 48;
            spacingName = "xxl";
            break;
    }
    for (const node of nodes) {
        if (node) {
            pvName = "pv-" + spacingName;
            updateName({ type: "vertical", value: pvName }, node);
            if (node.type === "GROUP") {
                node.verticalPadding = spacing;
            }
            else {
                let setAutoLayout = new Promise(function (resolve, reject) {
                    node.verticalPadding = spacing;
                    setTimeout(() => resolve("done"), 5);
                });
            }
        }
    }
};
const ItemSpacing = (nodes, msg) => {
    let sliderValue = msg.sliderValue;
    let spacing = null;
    let spacingName = null;
    switch (sliderValue) {
        default:
            spacing = 0;
            spacingName = "none";
            break;
        case "1":
            spacing = 4;
            spacingName = "xxs";
            break;
        case "2":
            spacing = 8;
            spacingName = "xs";
            break;
        case "3":
            spacing = 16;
            spacingName = "s";
            break;
        case "4":
            spacing = 24;
            spacingName = "m";
            break;
        case "5":
            spacing = 32;
            spacingName = "l";
            break;
        case "6":
            spacing = 40;
            spacingName = "xl";
            break;
        case "7":
            spacing = 48;
            spacingName = "xxl";
            break;
    }
    for (const node of nodes) {
        node.itemSpacing = spacing;
        spName = "sp-" + spacingName;
        updateName({ type: "spacing", value: spName }, node);
    }
};



/***/ }),

/***/ "./src/helper/theme-swap.ts":
/*!**********************************!*\
  !*** ./src/helper/theme-swap.ts ***!
  \**********************************/
/*! exports provided: LightThemeTraverse, DarkThemeTraverse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LightThemeTraverse", function() { return LightThemeTraverse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DarkThemeTraverse", function() { return DarkThemeTraverse; });
/* harmony import */ var _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../theme-styles/colors */ "./src/theme-styles/colors.js");
/* harmony import */ var _theme_styles_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../theme-styles/effects */ "./src/theme-styles/effects.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


const LightThemeTraverse = (node) => __awaiter(undefined, void 0, void 0, function* () {
    let darkUIBody = yield _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].darkUI.body;
    let darkUISurface = yield _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].darkUI.surface;
    let darkUIKeyline = yield _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].darkUI.keyline;
    let darkUIKeylineAlternative = yield _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].darkUI.keylineAlternative;
    let darkUIAccent = yield _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].darkUI.accent;
    let darkUIError = yield _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].darkUI.error;
    let darkUIOnAccent = yield _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].darkUI.onAccent;
    let darkUIOnSurfaceHigh = yield _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].darkUI.onSurfaceHigh;
    let darkUIOnSurfaceMedium = yield _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].darkUI.onSurfaceMedium;
    let darkUIOnSurfaceDisabled = yield _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].darkUI.onSurfaceDisabled;
    let darkUIShadowLow = yield _theme_styles_effects__WEBPACK_IMPORTED_MODULE_1__["EffectsStyleId"].darkUI.shadowLow;
    let darkUIShadowHigh = yield _theme_styles_effects__WEBPACK_IMPORTED_MODULE_1__["EffectsStyleId"].darkUI.shadowHigh;
    let darkUIBorderTop = yield _theme_styles_effects__WEBPACK_IMPORTED_MODULE_1__["EffectsStyleId"].darkUI.borderTop;
    let darkUIBorderRight = yield _theme_styles_effects__WEBPACK_IMPORTED_MODULE_1__["EffectsStyleId"].darkUI.borderRight;
    let darkUIBorderBottom = yield _theme_styles_effects__WEBPACK_IMPORTED_MODULE_1__["EffectsStyleId"].darkUI.borderBottom;
    let darkUIBorderLeft = yield _theme_styles_effects__WEBPACK_IMPORTED_MODULE_1__["EffectsStyleId"].darkUI.borderLeft;
    let darkUIBorderTopBottom = yield _theme_styles_effects__WEBPACK_IMPORTED_MODULE_1__["EffectsStyleId"].darkUI.borderTopBottom;
    let darkUIBorderLeftRight = yield _theme_styles_effects__WEBPACK_IMPORTED_MODULE_1__["EffectsStyleId"].darkUI.borderLeftRight;
    // Strokes
    switch (node.strokeStyleId) {
        case darkUIAccent.id:
            _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].lightUI.accent.then((resp) => {
                node.strokeStyleId = resp.id;
            });
            break;
        case darkUIError.id:
            _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].lightUI.error.then((resp) => {
                node.strokeStyleId = resp.id;
            });
            break;
        case darkUIKeyline.id:
            _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].lightUI.keyline.then((resp) => {
                node.strokeStyleId = resp.id;
            });
            break;
        case darkUIKeylineAlternative.id:
            _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].lightUI.keylineAlternative.then((resp) => {
                node.strokeStyleId = resp.id;
            });
            break;
        case darkUIAccent.id:
            _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].lightUI.accent.then((resp) => {
                node.strokeStyleId = resp.id;
            });
            break;
    }
    // Fills
    switch (node.fillStyleId) {
        case darkUIBody.id:
            _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].lightUI.body.then((resp) => {
                node.fillStyleId = resp.id;
            });
            break;
        case darkUISurface.id:
            _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].lightUI.surface.then((resp) => {
                node.fillStyleId = resp.id;
            });
            break;
        case darkUIKeyline.id:
            _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].lightUI.keyline.then((resp) => {
                node.fillStyleId = resp.id;
            });
            break;
        case darkUIKeylineAlternative.id:
            _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].lightUI.keylineAlternative.then((resp) => {
                node.fillStyleId = resp.id;
            });
            break;
        case darkUIAccent.id:
            _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].lightUI.accent.then((resp) => {
                node.fillStyleId = resp.id;
            });
            break;
        case darkUIError.id:
            _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].lightUI.error.then((resp) => {
                node.fillStyleId = resp.id;
            });
            break;
        case darkUIOnAccent.id:
            _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].lightUI.onAccent.then((resp) => {
                node.fillStyleId = resp.id;
            });
            break;
        case darkUIOnSurfaceHigh.id:
            _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].lightUI.onSurfaceHigh.then((resp) => {
                node.fillStyleId = resp.id;
            });
            break;
        case darkUIOnSurfaceMedium.id:
            _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].lightUI.onSurfaceMedium.then((resp) => {
                node.fillStyleId = resp.id;
            });
            break;
        case darkUIOnSurfaceDisabled.id:
            _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].lightUI.onSurfaceDisabled.then((resp) => {
                node.fillStyleId = resp.id;
            });
            break;
    }
    // Effects
    switch (node.effectStyleId) {
        case darkUIShadowLow.id:
            _theme_styles_effects__WEBPACK_IMPORTED_MODULE_1__["EffectsStyleId"].lightUI.shadowLow.then((resp) => {
                node.effectStyleId = resp.id;
            });
            break;
        case darkUIShadowHigh.id:
            _theme_styles_effects__WEBPACK_IMPORTED_MODULE_1__["EffectsStyleId"].lightUI.shadowHigh.then((resp) => {
                node.effectStyleId = resp.id;
            });
            break;
        case darkUIBorderTop.id:
            _theme_styles_effects__WEBPACK_IMPORTED_MODULE_1__["EffectsStyleId"].lightUI.borderTop.then((resp) => {
                node.effectStyleId = resp.id;
            });
            break;
        case darkUIBorderRight.id:
            _theme_styles_effects__WEBPACK_IMPORTED_MODULE_1__["EffectsStyleId"].lightUI.borderRight.then((resp) => {
                node.effectStyleId = resp.id;
            });
            break;
        case darkUIBorderBottom.id:
            _theme_styles_effects__WEBPACK_IMPORTED_MODULE_1__["EffectsStyleId"].lightUI.borderBottom.then((resp) => {
                node.effectStyleId = resp.id;
            });
            break;
        case darkUIBorderLeft.id:
            _theme_styles_effects__WEBPACK_IMPORTED_MODULE_1__["EffectsStyleId"].lightUI.borderLeft.then((resp) => {
                node.effectStyleId = resp.id;
            });
            break;
        case darkUIBorderTopBottom.id:
            _theme_styles_effects__WEBPACK_IMPORTED_MODULE_1__["EffectsStyleId"].lightUI.borderTopBottom.then((resp) => {
                node.effectStyleId = resp.id;
            });
            break;
        case darkUIBorderLeftRight.id:
            _theme_styles_effects__WEBPACK_IMPORTED_MODULE_1__["EffectsStyleId"].lightUI.borderLeftRight.then((resp) => {
                node.effectStyleId = resp.id;
            });
            break;
    }
    // do nothing below
    if ("children" in node) {
        for (const child of node.children) {
            LightThemeTraverse(child);
        }
    }
    else {
        // do nothing
    }
});
const DarkThemeTraverse = (node) => __awaiter(undefined, void 0, void 0, function* () {
    let lightUIBody = yield _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].lightUI.body;
    let lightUISurface = yield _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].lightUI.surface;
    let lightUIKeyline = yield _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].lightUI.keyline;
    let lightUIKeylineAlternative = yield _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].lightUI.keylineAlternative;
    let lightUIAccent = yield _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].lightUI.accent;
    let lightUIError = yield _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].lightUI.error;
    let lightUIOnAccent = yield _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].lightUI.onAccent;
    let lightUIOnSurfaceHigh = yield _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].lightUI.onSurfaceHigh;
    let lightUIOnSurfaceMedium = yield _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].lightUI.onSurfaceMedium;
    let lightUIOnSurfaceDisabled = yield _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].lightUI.onSurfaceDisabled;
    let lightUIShadowLow = yield _theme_styles_effects__WEBPACK_IMPORTED_MODULE_1__["EffectsStyleId"].lightUI.shadowLow;
    let lightUIShadowHigh = yield _theme_styles_effects__WEBPACK_IMPORTED_MODULE_1__["EffectsStyleId"].lightUI.shadowHigh;
    let lightUIBorderTop = yield _theme_styles_effects__WEBPACK_IMPORTED_MODULE_1__["EffectsStyleId"].lightUI.borderTop;
    let lightUIBorderRight = yield _theme_styles_effects__WEBPACK_IMPORTED_MODULE_1__["EffectsStyleId"].lightUI.borderRight;
    let lightUIBorderBottom = yield _theme_styles_effects__WEBPACK_IMPORTED_MODULE_1__["EffectsStyleId"].lightUI.borderBottom;
    let lightUIBorderLeft = yield _theme_styles_effects__WEBPACK_IMPORTED_MODULE_1__["EffectsStyleId"].lightUI.borderLeft;
    let lightUIBorderTopBottom = yield _theme_styles_effects__WEBPACK_IMPORTED_MODULE_1__["EffectsStyleId"].lightUI.borderTopBottom;
    let lightUIBorderLeftRight = yield _theme_styles_effects__WEBPACK_IMPORTED_MODULE_1__["EffectsStyleId"].lightUI.borderLeftRight;
    // Stroke
    switch (node.strokeStyleId) {
        case lightUIAccent.id:
            _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].darkUI.accent.then((resp) => {
                node.strokeStyleId = resp.id;
            });
            break;
        case lightUIError.id:
            _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].darkUI.error.then((resp) => {
                node.strokeStyleId = resp.id;
            });
            break;
        case lightUIKeyline.id:
            _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].darkUI.keyline.then((resp) => {
                node.strokeStyleId = resp.id;
            });
            break;
        case lightUIKeylineAlternative.id:
            _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].darkUI.keylineAlternative.then((resp) => {
                node.strokeStyleId = resp.id;
            });
            break;
        case lightUIAccent.id:
            _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].darkUI.accent.then((resp) => {
                node.strokeStyleId = resp.id;
            });
            break;
    }
    // Fill
    switch (node.fillStyleId) {
        case lightUIBody.id:
            _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].darkUI.body.then((resp) => {
                node.fillStyleId = resp.id;
            });
            break;
        case lightUISurface.id:
            _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].darkUI.surface.then((resp) => {
                node.fillStyleId = resp.id;
            });
            break;
        case lightUIKeyline.id:
            _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].darkUI.keyline.then((resp) => {
                node.fillStyleId = resp.id;
            });
            break;
        case lightUIKeylineAlternative.id:
            _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].darkUI.keylineAlternative.then((resp) => {
                node.fillStyleId = resp.id;
            });
            break;
        case lightUIAccent.id:
            _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].darkUI.accent.then((resp) => {
                node.fillStyleId = resp.id;
            });
            break;
        case lightUIError.id:
            _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].darkUI.error.then((resp) => {
                node.fillStyleId = resp.id;
            });
            break;
        case lightUIOnAccent.id:
            _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].darkUI.onAccent.then((resp) => {
                node.fillStyleId = resp.id;
            });
            break;
        case lightUIOnSurfaceHigh.id:
            _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].darkUI.onSurfaceHigh.then((resp) => {
                node.fillStyleId = resp.id;
            });
            break;
        case lightUIOnSurfaceMedium.id:
            _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].darkUI.onSurfaceMedium.then((resp) => {
                node.fillStyleId = resp.id;
            });
            break;
        case lightUIOnSurfaceDisabled.id:
            _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].darkUI.onSurfaceDisabled.then((resp) => {
                node.fillStyleId = resp.id;
            });
            break;
    }
    // Effects
    switch (node.effectStyleId) {
        case lightUIShadowLow.id:
            _theme_styles_effects__WEBPACK_IMPORTED_MODULE_1__["EffectsStyleId"].darkUI.shadowLow.then((resp) => {
                node.effectStyleId = resp.id;
            });
            break;
        case lightUIShadowHigh.id:
            _theme_styles_effects__WEBPACK_IMPORTED_MODULE_1__["EffectsStyleId"].darkUI.shadowHigh.then((resp) => {
                node.effectStyleId = resp.id;
            });
            break;
        case lightUIBorderTop.id:
            _theme_styles_effects__WEBPACK_IMPORTED_MODULE_1__["EffectsStyleId"].darkUI.borderTop.then((resp) => {
                node.effectStyleId = resp.id;
            });
            break;
        case lightUIBorderRight.id:
            _theme_styles_effects__WEBPACK_IMPORTED_MODULE_1__["EffectsStyleId"].darkUI.borderRight.then((resp) => {
                node.effectStyleId = resp.id;
            });
            break;
        case lightUIBorderBottom.id:
            _theme_styles_effects__WEBPACK_IMPORTED_MODULE_1__["EffectsStyleId"].darkUI.borderBottom.then((resp) => {
                node.effectStyleId = resp.id;
            });
            break;
        case lightUIBorderLeft.id:
            _theme_styles_effects__WEBPACK_IMPORTED_MODULE_1__["EffectsStyleId"].darkUI.borderLeft.then((resp) => {
                node.effectStyleId = resp.id;
            });
            break;
        case lightUIBorderTopBottom.id:
            _theme_styles_effects__WEBPACK_IMPORTED_MODULE_1__["EffectsStyleId"].darkUI.borderTopBottom.then((resp) => {
                node.effectStyleId = resp.id;
            });
            break;
        case lightUIBorderLeftRight.id:
            _theme_styles_effects__WEBPACK_IMPORTED_MODULE_1__["EffectsStyleId"].darkUI.borderLeftRight.then((resp) => {
                node.effectStyleId = resp.id;
            });
            break;
    }
    // do nothing below
    if ("children" in node) {
        for (const child of node.children) {
            DarkThemeTraverse(child);
        }
    }
    else {
        // do nothing
    }
});



/***/ }),

/***/ "./src/theme-styles/colors.js":
/*!************************************!*\
  !*** ./src/theme-styles/colors.js ***!
  \************************************/
/*! exports provided: ColorStyleId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorStyleId", function() { return ColorStyleId; });
const ColorStyleId = {
  lightUI: {
    body: figma.importStyleByKeyAsync(
      "fb8c4bd281795afa9dc89334a4e51d8074377875"
    ),
    surface: figma.importStyleByKeyAsync(
      "a92dc99c84ddd59822f873e0a69539a4a3ff1387"
    ),
    keyline: figma.importStyleByKeyAsync(
      "035e2f818df36b0e4f75ff6c529d54b3ca7082cc"
    ),
    keylineAlternative: figma.importStyleByKeyAsync(
      "139c3c1e0c69fc9583292b787af895d0148a9939"
    ),
    accent: figma.importStyleByKeyAsync(
      "38935c8773bab5e7b2c9db832b2bcc84b075b24c"
    ),
    error: figma.importStyleByKeyAsync(
      "4096eb67f6718f300119597d8fd6c82d47936ea0"
    ),
    onAccent: figma.importStyleByKeyAsync(
      "a4ced9ccbdeb78146fa1b7d24fff6b7384c84784"
    ),
    onSurfaceHigh: figma.importStyleByKeyAsync(
      "346e73b97981c4166f24c3c3b0008fc2a18ad662"
    ),
    onSurfaceMedium: figma.importStyleByKeyAsync(
      "3774208f54aa6405db7c1b7d936a17525f5b1a77"
    ),
    onSurfaceDisabled: figma.importStyleByKeyAsync(
      "bc1e389de2ce73a54f8a692f489650ef52667f30"
    ),
  },
  darkUI: {
    body: figma.importStyleByKeyAsync(
      "2f060e7422a8ad17a037a250d368cf671adc0468"
    ),
    surface: figma.importStyleByKeyAsync(
      "15f5ffac3ec91b24089813439ffadd1f9994b29c"
    ),
    keyline: figma.importStyleByKeyAsync(
      "84ab0f298ea8fcd0b82ac89298ad51140ca7b75a"
    ),
    keylineAlternative: figma.importStyleByKeyAsync(
      "bffe20f9729acb525d8861288f0d844137698c55"
    ),
    accent: figma.importStyleByKeyAsync(
      "1b038ec600d2a14b6cce35f7b4090c6ad2dd2c7d"
    ),
    error: figma.importStyleByKeyAsync(
      "00e4381cfb851f7f7c87084c5cfad11efb80cc23"
    ),
    onAccent: figma.importStyleByKeyAsync(
      "3fdbd43dd2463c64b94e0b81a916a606c08b0f1c"
    ),
    onSurfaceHigh: figma.importStyleByKeyAsync(
      "5e8e492598c4f6e18d86d87b3ad10e8567fa7fd1"
    ),
    onSurfaceMedium: figma.importStyleByKeyAsync(
      "9d2e511d9a31ebd76e302ab25d1e995e6a83ac1c"
    ),
    onSurfaceDisabled: figma.importStyleByKeyAsync(
      "c98883e07be80be6bcd18814eb29a87797a99c6a"
    ),
    EffectShadowLow: figma.importStyleByKeyAsync(
      "8ccea9d523cf9dc13fee68f392f3f9cc3187a457"
    ),
    EffectShadowHigh: figma.importStyleByKeyAsync(
      "c61253c38f6d0d9f3b302a77a3807e052e9c3f91"
    ),
  },
};




/***/ }),

/***/ "./src/theme-styles/effects.js":
/*!*************************************!*\
  !*** ./src/theme-styles/effects.js ***!
  \*************************************/
/*! exports provided: EffectsStyleId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EffectsStyleId", function() { return EffectsStyleId; });
const EffectsStyleId = {
  lightUI: {
    shadowLow: figma.importStyleByKeyAsync(
      "8ccea9d523cf9dc13fee68f392f3f9cc3187a457"
    ),
    shadowHigh: figma.importStyleByKeyAsync(
      "c61253c38f6d0d9f3b302a77a3807e052e9c3f91"
    ),
    borderTop: figma.importStyleByKeyAsync(
      "b48722d61648d7c6565fea640361853ec53639d1"
    ),
    borderRight: figma.importStyleByKeyAsync(
      "3394fee8e3f08edc7d60d6aab29f0f3f8ee1b1b2"
    ),
    borderBottom: figma.importStyleByKeyAsync(
      "f63fff39ae021f0779b6d46dc975bc578dd3b7c5"
    ),
    borderLeft: figma.importStyleByKeyAsync(
      "9edddf780bf44515d95e2a4bff6036e247da5af5"
    ),
    borderTopBottom: figma.importStyleByKeyAsync(
      "23c11916e6af413ef220acfcc40195d82fe303b5"
    ),
    borderLeftRight: figma.importStyleByKeyAsync(
      "a6447b7210901bca45b98fe918ac55540fa8354e"
    ),
  },
  darkUI: {
    shadowLow: figma.importStyleByKeyAsync(
      "98761904bcc9d38c81ee23e7b432d8c97e29f0c1"
    ),
    shadowHigh: figma.importStyleByKeyAsync(
      "209b451e4f68f5bf3ade24ef36a10a609cdae239"
    ),
    borderTop: figma.importStyleByKeyAsync(
      "d394c6ff78a94c900f344b53f1d7e0e7ecdccd79"
    ),
    borderRight: figma.importStyleByKeyAsync(
      "433c605f34e9a88d0350f22fe58c9afc8f0e7dd7"
    ),
    borderBottom: figma.importStyleByKeyAsync(
      "3e46748105106b65440c24f1b9e41c994fdac402"
    ),
    borderLeft: figma.importStyleByKeyAsync(
      "f88b227dd6d6b4f8285b2e179a7c7d4277f0fb31"
    ),
    borderTopBottom: figma.importStyleByKeyAsync(
      "a34f3d0a22c2459cfc626f178c47d9bb1ba8b2a5"
    ),
    borderLeftRight: figma.importStyleByKeyAsync(
      "fc06b8e7032fc9b1fa07af5e39293df2150ff4dc"
    ),
  },
};




/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvZGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlci9jYWxsYmFjay50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVyL2NvbG9yLWNoZWNrLnRzIiwid2VicGFjazovLy8uL3NyYy9oZWxwZXIvZm9yY2UtYXV0by1sYXlvdXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlci9zcGFjaW5nLWNoZWNrLnRzIiwid2VicGFjazovLy8uL3NyYy9oZWxwZXIvc3BhY2luZy1zbGlkZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlci90aGVtZS1zd2FwLnRzIiwid2VicGFjazovLy8uL3NyYy90aGVtZS1zdHlsZXMvY29sb3JzLmpzIiwid2VicGFjazovLy8uL3NyYy90aGVtZS1zdHlsZXMvZWZmZWN0cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsaUJBQWlCO0FBQ2dEO0FBQ2Q7QUFDSjtBQUN1QztBQUNNO0FBQ2pEO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDBFQUFpQjtBQUNyQixDQUFDO0FBQ0Q7QUFDQTtBQUNBLFFBQVEsNEVBQWlCO0FBQ3pCO0FBQ0E7QUFDQSxRQUFRLDZFQUFrQjtBQUMxQjtBQUNBO0FBQ0EsUUFBUSw4RUFBa0I7QUFDMUI7QUFDQTtBQUNBLFFBQVEsa0ZBQW9CO0FBQzVCO0FBQ0E7QUFDQSxRQUFRLHNGQUF1QjtBQUMvQjtBQUNBO0FBQ0EsUUFBUSxvRkFBcUI7QUFDN0I7QUFDQTtBQUNBLFFBQVEsMEVBQVc7QUFDbkI7QUFDQTtBQUNBLFFBQVEsMkZBQXlCO0FBQ2pDO0FBQ0E7QUFDQSxRQUFRLHlGQUF1QjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDckRBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzZCOzs7Ozs7Ozs7Ozs7O0FDcEI3QjtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsbUJBQW1CO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLEtBQU87QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBbUI7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixtQkFBbUI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUM4Qjs7Ozs7Ozs7Ozs7OztBQzVHOUI7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDOEQ7Ozs7Ozs7Ozs7Ozs7QUNWOUQ7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ2dDOzs7Ozs7Ozs7Ozs7O0FDM0toQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isb0NBQW9DO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGtDQUFrQztBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsaUNBQWlDO0FBQ3JEO0FBQ0E7QUFDdUU7Ozs7Ozs7Ozs7Ozs7QUNwTHZFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBaUIsU0FBSSxJQUFJLFNBQUk7QUFDN0I7QUFDQSxtQ0FBbUMsTUFBTSw2QkFBNkIsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNqRyxrQ0FBa0MsTUFBTSxpQ0FBaUMsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNwRywrQkFBK0IsaUVBQWlFLHVCQUF1QixFQUFFLDRCQUE0QjtBQUNySjtBQUNBLEtBQUs7QUFDTDtBQUNzRDtBQUNHO0FBQ3pELCtDQUErQyxTQUFJO0FBQ25ELDJCQUEyQixpRUFBWTtBQUN2Qyw4QkFBOEIsaUVBQVk7QUFDMUMsOEJBQThCLGlFQUFZO0FBQzFDLHlDQUF5QyxpRUFBWTtBQUNyRCw2QkFBNkIsaUVBQVk7QUFDekMsNEJBQTRCLGlFQUFZO0FBQ3hDLCtCQUErQixpRUFBWTtBQUMzQyxvQ0FBb0MsaUVBQVk7QUFDaEQsc0NBQXNDLGlFQUFZO0FBQ2xELHdDQUF3QyxpRUFBWTtBQUNwRCxnQ0FBZ0Msb0VBQWM7QUFDOUMsaUNBQWlDLG9FQUFjO0FBQy9DLGdDQUFnQyxvRUFBYztBQUM5QyxrQ0FBa0Msb0VBQWM7QUFDaEQsbUNBQW1DLG9FQUFjO0FBQ2pELGlDQUFpQyxvRUFBYztBQUMvQyxzQ0FBc0Msb0VBQWM7QUFDcEQsc0NBQXNDLG9FQUFjO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBLFlBQVksaUVBQVk7QUFDeEI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFlBQVksaUVBQVk7QUFDeEI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFlBQVksaUVBQVk7QUFDeEI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFlBQVksaUVBQVk7QUFDeEI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFlBQVksaUVBQVk7QUFDeEI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksaUVBQVk7QUFDeEI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFlBQVksaUVBQVk7QUFDeEI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFlBQVksaUVBQVk7QUFDeEI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFlBQVksaUVBQVk7QUFDeEI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFlBQVksaUVBQVk7QUFDeEI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFlBQVksaUVBQVk7QUFDeEI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFlBQVksaUVBQVk7QUFDeEI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFlBQVksaUVBQVk7QUFDeEI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFlBQVksaUVBQVk7QUFDeEI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFlBQVksaUVBQVk7QUFDeEI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksb0VBQWM7QUFDMUI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFlBQVksb0VBQWM7QUFDMUI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFlBQVksb0VBQWM7QUFDMUI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFlBQVksb0VBQWM7QUFDMUI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFlBQVksb0VBQWM7QUFDMUI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFlBQVksb0VBQWM7QUFDMUI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFlBQVksb0VBQWM7QUFDMUI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFlBQVksb0VBQWM7QUFDMUI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCw4Q0FBOEMsU0FBSTtBQUNsRCw0QkFBNEIsaUVBQVk7QUFDeEMsK0JBQStCLGlFQUFZO0FBQzNDLCtCQUErQixpRUFBWTtBQUMzQywwQ0FBMEMsaUVBQVk7QUFDdEQsOEJBQThCLGlFQUFZO0FBQzFDLDZCQUE2QixpRUFBWTtBQUN6QyxnQ0FBZ0MsaUVBQVk7QUFDNUMscUNBQXFDLGlFQUFZO0FBQ2pELHVDQUF1QyxpRUFBWTtBQUNuRCx5Q0FBeUMsaUVBQVk7QUFDckQsaUNBQWlDLG9FQUFjO0FBQy9DLGtDQUFrQyxvRUFBYztBQUNoRCxpQ0FBaUMsb0VBQWM7QUFDL0MsbUNBQW1DLG9FQUFjO0FBQ2pELG9DQUFvQyxvRUFBYztBQUNsRCxrQ0FBa0Msb0VBQWM7QUFDaEQsdUNBQXVDLG9FQUFjO0FBQ3JELHVDQUF1QyxvRUFBYztBQUNyRDtBQUNBO0FBQ0E7QUFDQSxZQUFZLGlFQUFZO0FBQ3hCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxZQUFZLGlFQUFZO0FBQ3hCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxZQUFZLGlFQUFZO0FBQ3hCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxZQUFZLGlFQUFZO0FBQ3hCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxZQUFZLGlFQUFZO0FBQ3hCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGlFQUFZO0FBQ3hCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxZQUFZLGlFQUFZO0FBQ3hCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxZQUFZLGlFQUFZO0FBQ3hCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxZQUFZLGlFQUFZO0FBQ3hCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxZQUFZLGlFQUFZO0FBQ3hCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxZQUFZLGlFQUFZO0FBQ3hCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxZQUFZLGlFQUFZO0FBQ3hCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxZQUFZLGlFQUFZO0FBQ3hCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxZQUFZLGlFQUFZO0FBQ3hCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxZQUFZLGlFQUFZO0FBQ3hCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLG9FQUFjO0FBQzFCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxZQUFZLG9FQUFjO0FBQzFCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxZQUFZLG9FQUFjO0FBQzFCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxZQUFZLG9FQUFjO0FBQzFCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxZQUFZLG9FQUFjO0FBQzFCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxZQUFZLG9FQUFjO0FBQzFCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxZQUFZLG9FQUFjO0FBQzFCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxZQUFZLG9FQUFjO0FBQzFCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ2dEOzs7Ozs7Ozs7Ozs7O0FDNVRqRDtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFd0I7Ozs7Ozs7Ozs7Ozs7QUN6RXhCO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUUwQiIsImZpbGUiOiJjb2RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvY29kZS50c1wiKTtcbiIsIi8vIFRoaXMgcGx1Z2luIHdpbGwgb3BlbiBhIG1vZGFsIHRvIHByb21wdCB0aGUgdXNlciB0byBlbnRlciBhIG51bWJlciwgYW5kXG4vLyBpdCB3aWxsIHRoZW4gY3JlYXRlIHRoYXQgbWFueSByZWN0YW5nbGVzIG9uIHRoZSBzY3JlZW4uXG4vLyBUaGlzIGZpbGUgaG9sZHMgdGhlIG1haW4gY29kZSBmb3IgdGhlIHBsdWdpbnMuIEl0IGhhcyBhY2Nlc3MgdG8gdGhlICpkb2N1bWVudCouXG4vLyBZb3UgY2FuIGFjY2VzcyBicm93c2VyIEFQSXMgaW4gdGhlIDxzY3JpcHQ+IHRhZyBpbnNpZGUgXCJ1aS5odG1sXCIgd2hpY2ggaGFzIGFcbi8vIGZ1bGwgYnJvd3NlciBlbnZpcm9tZW50IChzZWUgZG9jdW1lbnRhdGlvbikuXG4vLyBpbXBvcnQgeyBTcGFjaW5nRGVmYXVsdCB9IGZyb20gXCIuL2hlbHBlci9zcGFjaW5nLWRlZmF1bHRcIjtcbmltcG9ydCB7IExpZ2h0VGhlbWVUcmF2ZXJzZSwgRGFya1RoZW1lVHJhdmVyc2UgfSBmcm9tIFwiLi9oZWxwZXIvdGhlbWUtc3dhcFwiO1xuaW1wb3J0IHsgU3BhY2luZ0NoZWNrVHJhdmVyc2UgfSBmcm9tIFwiLi9oZWxwZXIvc3BhY2luZy1jaGVja1wiO1xuaW1wb3J0IHsgQ29sb3JDaGVja1RyYXZlcnNlIH0gZnJvbSBcIi4vaGVscGVyL2NvbG9yLWNoZWNrXCI7XG5pbXBvcnQgeyBGb3JjZUF1dG9MYXlvdXRIb3Jpem9udGFsLCBGb3JjZUF1dG9MYXlvdXRWZXJ0aWNhbCwgfSBmcm9tIFwiLi9oZWxwZXIvZm9yY2UtYXV0by1sYXlvdXRcIjtcbmltcG9ydCB7IFBhZGRpbmdIb3Jpem9udGFsU2xpZGVyLCBQYWRkaW5nVmVydGljYWxTbGlkZXIsIEl0ZW1TcGFjaW5nLCB9IGZyb20gXCIuL2hlbHBlci9zcGFjaW5nLXNsaWRlclwiO1xuaW1wb3J0IHsgb25TZWxlY3Rpb25DaGFuZ2UgfSBmcm9tIFwiLi9oZWxwZXIvY2FsbGJhY2tcIjtcbi8vIFRoaXMgc2hvd3MgdGhlIEhUTUwgcGFnZSBpbiBcInVpLmh0bWxcIi5cbmZpZ21hLnNob3dVSShfX2h0bWxfXyk7XG4vLyBDYWxscyB0byBcInBhcmVudC5wb3N0TWVzc2FnZVwiIGZyb20gd2l0aGluIHRoZSBIVE1MIHBhZ2Ugd2lsbCB0cmlnZ2VyIHRoaXNcbi8vIGNhbGxiYWNrLiBUaGUgY2FsbGJhY2sgd2lsbCBiZSBwYXNzZWQgdGhlIFwicGx1Z2luTWVzc2FnZVwiIHByb3BlcnR5IG9mIHRoZVxuLy8gcG9zdGVkIG1lc3NhZ2UuXG5maWdtYS51aS5yZXNpemUoMzAwLCA4MDApO1xuZmlnbWEub24oXCJzZWxlY3Rpb25jaGFuZ2VcIiwgKCkgPT4ge1xuICAgIGxldCB0aGlzU2VsZWN0aW9uID0gZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uWzBdO1xuICAgIG9uU2VsZWN0aW9uQ2hhbmdlKHRoaXNTZWxlY3Rpb24pO1xufSk7XG5maWdtYS51aS5vbm1lc3NhZ2UgPSAobXNnKSA9PiB7XG4gICAgaWYgKG1zZy50eXBlID09PSBcImRhcmstdGhlbWVcIikge1xuICAgICAgICBEYXJrVGhlbWVUcmF2ZXJzZShmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb25bMF0pO1xuICAgIH1cbiAgICBlbHNlIGlmIChtc2cudHlwZSA9PT0gXCJsaWdodC10aGVtZVwiKSB7XG4gICAgICAgIExpZ2h0VGhlbWVUcmF2ZXJzZShmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb25bMF0pO1xuICAgIH1cbiAgICBlbHNlIGlmIChtc2cudHlwZSA9PT0gXCJjb2xvci1jaGVja2VyXCIpIHtcbiAgICAgICAgQ29sb3JDaGVja1RyYXZlcnNlKGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvblswXSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKG1zZy50eXBlID09PSBcInNwYWNpbmctY2hlY2tlclwiKSB7XG4gICAgICAgIFNwYWNpbmdDaGVja1RyYXZlcnNlKGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbik7XG4gICAgfVxuICAgIGVsc2UgaWYgKG1zZy50eXBlID09PSBcInBhZGRpbmctaG9yaXpvbnRhbC1zbGlkZXJcIikge1xuICAgICAgICBQYWRkaW5nSG9yaXpvbnRhbFNsaWRlcihmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb24sIG1zZyk7XG4gICAgfVxuICAgIGVsc2UgaWYgKG1zZy50eXBlID09PSBcInBhZGRpbmctdmVydGljYWwtc2xpZGVyXCIpIHtcbiAgICAgICAgUGFkZGluZ1ZlcnRpY2FsU2xpZGVyKGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbiwgbXNnKTtcbiAgICB9XG4gICAgZWxzZSBpZiAobXNnLnR5cGUgPT09IFwiaXRlbS1zcGFjaW5nLXNsaWRlclwiKSB7XG4gICAgICAgIEl0ZW1TcGFjaW5nKGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbiwgbXNnKTtcbiAgICB9XG4gICAgZWxzZSBpZiAobXNnLnR5cGUgPT09IFwiZm9yY2UtYXV0by1sYXlvdXQtaG9yaXpvbnRhbFwiKSB7XG4gICAgICAgIEZvcmNlQXV0b0xheW91dEhvcml6b250YWwoZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uKTtcbiAgICB9XG4gICAgZWxzZSBpZiAobXNnLnR5cGUgPT09IFwiZm9yY2UtYXV0by1sYXlvdXQtdmVydGljYWxcIikge1xuICAgICAgICBGb3JjZUF1dG9MYXlvdXRWZXJ0aWNhbChmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb24pO1xuICAgIH1cbiAgICAvLyBNYWtlIHN1cmUgdG8gY2xvc2UgdGhlIHBsdWdpbiB3aGVuIHlvdSdyZSBkb25lLiBPdGhlcndpc2UgdGhlIHBsdWdpbiB3aWxsXG4gICAgLy8ga2VlcCBydW5uaW5nLCB3aGljaCBzaG93cyB0aGUgY2FuY2VsIGJ1dHRvbiBhdCB0aGUgYm90dG9tIG9mIHRoZSBzY3JlZW4uXG4gICAgLy8gZmlnbWEuY2xvc2VQbHVnaW4oKTtcbn07XG4iLCJjb25zdCBvblNlbGVjdGlvbkNoYW5nZSA9IChub2RlKSA9PiB7XG4gICAgaWYgKG5vZGUpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJ5ZXNcIik7XG4gICAgICAgIGxldCBob3Jpem9udGFsUGFkZGluZyA9IG5vZGUuaG9yaXpvbnRhbFBhZGRpbmc7XG4gICAgICAgIGxldCB2ZXJ0aWNhbFBhZGRpbmcgPSBub2RlLnZlcnRpY2FsUGFkZGluZztcbiAgICAgICAgbGV0IGl0ZW1TcGFjaW5nID0gbm9kZS5pdGVtU3BhY2luZztcbiAgICAgICAgbGV0IGxheW91dE1vZGUgPSBub2RlLmxheW91dE1vZGU7XG4gICAgICAgIGxldCBvYmogPSB7XG4gICAgICAgICAgICBob3Jpem9udGFsUGFkZGluZzogaG9yaXpvbnRhbFBhZGRpbmcsXG4gICAgICAgICAgICB2ZXJ0aWNhbFBhZGRpbmc6IHZlcnRpY2FsUGFkZGluZyxcbiAgICAgICAgICAgIGl0ZW1TcGFjaW5nOiBpdGVtU3BhY2luZyxcbiAgICAgICAgICAgIGxheW91dE1vZGU6IGxheW91dE1vZGUsXG4gICAgICAgIH07XG4gICAgICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKG9iaik7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIm5vXCIpO1xuICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZShcIm5vdGhpbmcgc2VsZWN0ZWRcIik7XG4gICAgfVxufTtcbmV4cG9ydCB7IG9uU2VsZWN0aW9uQ2hhbmdlIH07XG4iLCJmdW5jdGlvbiBjbG9uZSh2YWwpIHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh2YWwpKTtcbn1cbi8vIENoZWNrIG9iamVjdCBlcXVhbGl0eSBoZWxwZXJcbmZ1bmN0aW9uIGlzRXF1aXZhbGVudChhLCBiKSB7XG4gICAgLy8gQ3JlYXRlIGFycmF5cyBvZiBwcm9wZXJ0eSBuYW1lc1xuICAgIHZhciBhUHJvcHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhhKTtcbiAgICB2YXIgYlByb3BzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoYik7XG4gICAgLy8gSWYgbnVtYmVyIG9mIHByb3BlcnRpZXMgaXMgZGlmZmVyZW50LFxuICAgIC8vIG9iamVjdHMgYXJlIG5vdCBlcXVpdmFsZW50XG4gICAgaWYgKGFQcm9wcy5sZW5ndGggIT0gYlByb3BzLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYVByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBwcm9wTmFtZSA9IGFQcm9wc1tpXTtcbiAgICAgICAgLy8gSWYgdmFsdWVzIG9mIHNhbWUgcHJvcGVydHkgYXJlIG5vdCBlcXVhbCxcbiAgICAgICAgLy8gb2JqZWN0cyBhcmUgbm90IGVxdWl2YWxlbnRcbiAgICAgICAgaWYgKGFbcHJvcE5hbWVdICE9PSBiW3Byb3BOYW1lXSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIElmIHdlIG1hZGUgaXQgdGhpcyBmYXIsIG9iamVjdHNcbiAgICAvLyBhcmUgY29uc2lkZXJlZCBlcXVpdmFsZW50XG4gICAgcmV0dXJuIHRydWU7XG59XG5sZXQgc3RyYXlGaWxsID0gMDtcbmxldCBzdHJheVN0cm9rZSA9IDA7XG5jb25zdCBDb2xvckNoZWNrVHJhdmVyc2UgPSAobm9kZSkgPT4ge1xuICAgIGlmIChcImZpbGxzXCIgJiYgXCJzdHJva2VzXCIgaW4gbm9kZSkge1xuICAgICAgICAvLyBGaWx0ZXIgd2FybmluZyBzdHJva2UgZnVuY3Rpb25cbiAgICAgICAgbGV0IGZpbHRlcldhcm5pbmdTdHJva2UgPSBmdW5jdGlvbiAoc3Ryb2tlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImNsZWFyIG91dFwiKTtcbiAgICAgICAgICAgIGlmIChzdHJva2UudHlwZSA9PSBcIlNPTElEXCIgJiZcbiAgICAgICAgICAgICAgICBpc0VxdWl2YWxlbnQoc3Ryb2tlLmNvbG9yLCB7IHI6IDEsIGc6IDAsIGI6IDAgfSkpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInllc1wiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIm5vXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBsZXQgb2xkU3Ryb2tlcyA9IGNsb25lKG5vZGUuc3Ryb2tlcyk7XG4gICAgICAgIGxldCBuZXdTdHJva2VzID0gb2xkU3Ryb2tlcy5maWx0ZXIoZmlsdGVyV2FybmluZ1N0cm9rZSk7XG4gICAgICAgIGlmIChub2RlLnN0cm9rZVN0eWxlSWQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgLy8gZG8gbm90aGluZ1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbm9kZS5zdHJva2VzID0gbmV3U3Ryb2tlcztcbiAgICAgICAgfVxuICAgICAgICAvLyAvLyBBZGQgd2FybmluZyBzdHJva2UgZnVuY3Rpb25cbiAgICAgICAgbGV0IGFkZFdhcm5pbmdTdHJva2UgPSBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgbGV0IHN0cm9rZXMgPSBjbG9uZShub2RlLnN0cm9rZXMpO1xuICAgICAgICAgICAgbGV0IHdhcm5pbmdTdHJva2VQcm9wZXJ0eSA9IHtcbiAgICAgICAgICAgICAgICBjb2xvcjogeyByOiAxLCBnOiAwLCBiOiAwIH0sXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICAgICAgICB0eXBlOiBcIlNPTElEXCIsXG4gICAgICAgICAgICAgICAgYmxlbmRNb2RlOiBcIk5PUk1BTFwiLFxuICAgICAgICAgICAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgc3Ryb2tlcy5wdXNoKHdhcm5pbmdTdHJva2VQcm9wZXJ0eSk7XG4gICAgICAgICAgICBub2RlLnN0cm9rZXMgPSBzdHJva2VzO1xuICAgICAgICAgICAgLy8gbm9kZS5zdHJva2VBbGlnbiA9IFwiT1VUU0lERVwiO1xuICAgICAgICB9O1xuICAgICAgICAvLyBDaGVjayBGaWxsXG4gICAgICAgIGlmIChub2RlLmZpbGxzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGlmIChub2RlLmZpbGxTdHlsZUlkLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuKchSBHb29kIGZpbGxcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuKdjCBCYWQgZmlsbFwiKTtcbiAgICAgICAgICAgICAgICAvLyBBZGQgd2FybmluZyBzdHJva2VcbiAgICAgICAgICAgICAgICBhZGRXYXJuaW5nU3Ryb2tlKG5vZGUpO1xuICAgICAgICAgICAgICAgIHN0cmF5RmlsbCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJubyBmaWxsXCIpO1xuICAgICAgICB9XG4gICAgICAgIC8vIENoZWNrIFN0cm9rZVxuICAgICAgICBpZiAobm9kZS5zdHJva2VzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGlmIChub2RlLnN0cm9rZVN0eWxlSWQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi4pyFIEdvb2Qgc3Ryb2tlXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLinYwgQmFkIHN0cm9rZVwiKTtcbiAgICAgICAgICAgICAgICAvLyAvLyBBZGQgd2FybmluZyBzdHJva2VcbiAgICAgICAgICAgICAgICBhZGRXYXJuaW5nU3Ryb2tlKG5vZGUpO1xuICAgICAgICAgICAgICAgIHN0cmF5U3Ryb2tlKys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIm5vIHN0cm9rZVwiKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBhc2RmXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZyhcIk5vIGZpbGwgJiBzdHJva2UgcHJvcGVydHlcIik7XG4gICAgfVxuICAgIGlmIChcImNoaWxkcmVuXCIgaW4gbm9kZSkge1xuICAgICAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIG5vZGUuY2hpbGRyZW4pIHtcbiAgICAgICAgICAgIENvbG9yQ2hlY2tUcmF2ZXJzZShjaGlsZCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIC8vIGRvIG5vdGhpbmdcbiAgICB9XG59O1xuZXhwb3J0IHsgQ29sb3JDaGVja1RyYXZlcnNlIH07XG4iLCJjb25zdCBGb3JjZUF1dG9MYXlvdXRIb3Jpem9udGFsID0gKG5vZGVzKSA9PiB7XG4gICAgZm9yIChjb25zdCBub2RlIG9mIG5vZGVzKSB7XG4gICAgICAgIG5vZGUubGF5b3V0TW9kZSA9IFwiSE9SSVpPTlRBTFwiO1xuICAgIH1cbn07XG5jb25zdCBGb3JjZUF1dG9MYXlvdXRWZXJ0aWNhbCA9IChub2RlcykgPT4ge1xuICAgIGZvciAoY29uc3Qgbm9kZSBvZiBub2Rlcykge1xuICAgICAgICBub2RlLmxheW91dE1vZGUgPSBcIlZFUlRJQ0FMXCI7XG4gICAgfVxufTtcbmV4cG9ydCB7IEZvcmNlQXV0b0xheW91dEhvcml6b250YWwsIEZvcmNlQXV0b0xheW91dFZlcnRpY2FsIH07XG4iLCJjb25zdCBTcGFjaW5nQ2hlY2tUcmF2ZXJzZSA9IChub2RlcykgPT4ge1xuICAgIGZvciAoY29uc3Qgbm9kZSBvZiBub2Rlcykge1xuICAgICAgICBsZXQgbmFtZSA9IG5vZGUubmFtZTtcbiAgICAgICAgbGV0IHBhZGRpbmdBbGxSZWdleCA9IC9cXGIoPzpwYS14eHN8cGEteHN8cGEtc3xwYS1tfHBhLWx8cGEteGx8cGEteHhsfHBhLW5vbmUpXFxiL2c7XG4gICAgICAgIGxldCBwYWRkaW5nSG9yaXpvbnRhbFJlZ2V4ID0gL1xcYig/OnBoLXh4c3xwaC14c3xwaC1zfHBoLW18cGgtbHxwaC14bHxwaC14eGx8cGgtbm9uZSlcXGIvZztcbiAgICAgICAgbGV0IHBhZGRpbmdWZXJ0aWNhbFJlZ2V4ID0gL1xcYig/OnB2LXh4c3xwdi14c3xwdi1zfHB2LW18cHYtbHxwdi14bHxwdi14eGx8cHYtbm9uZSlcXGIvZztcbiAgICAgICAgbGV0IGl0ZW1TcGFjaW5nQWxsUmVnZXggPSAvXFxiKD86c3AteHhzfHNwLXhzfHNwLXN8c3AtbXxzcC1sfHNwLXhsfHNwLXh4bHxzcC1ub25lKVxcYi9nO1xuICAgICAgICBsZXQgYXV0b2xheW91dFJlZ2V4ID0gL1xcYig/OnZlcnRpY2FsfGhvcml6b250YWwpXFxiL2c7XG4gICAgICAgIGxldCBtYXRjaFBhZGRpbmdBbGwgPSBuYW1lLm1hdGNoKHBhZGRpbmdBbGxSZWdleCk7XG4gICAgICAgIGxldCBtYXRjaFBhZGRpbmdIb3Jpem9udGFsID0gbmFtZS5tYXRjaChwYWRkaW5nSG9yaXpvbnRhbFJlZ2V4KTtcbiAgICAgICAgbGV0IG1hdGNoUGFkZGluZ1ZlcnRpY2FsID0gbmFtZS5tYXRjaChwYWRkaW5nVmVydGljYWxSZWdleCk7XG4gICAgICAgIGxldCBtYXRjaEl0ZW1TcGFjaW5nID0gbmFtZS5tYXRjaChpdGVtU3BhY2luZ0FsbFJlZ2V4KTtcbiAgICAgICAgbGV0IG1hdGNoQXV0b0xheW91dERpcmVjdGlvbiA9IG5hbWUubWF0Y2goYXV0b2xheW91dFJlZ2V4KTtcbiAgICAgICAgaWYgKG1hdGNoQXV0b0xheW91dERpcmVjdGlvbiA9PSBudWxsKSB7XG4gICAgICAgICAgICBub2RlLmxheW91dE1vZGUgPSBcIlZFUlRJQ0FMXCI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImVuYWJsZSBhdXRvIGxheW91dFwiKTtcbiAgICAgICAgICAgIHN3aXRjaCAobWF0Y2hBdXRvTGF5b3V0RGlyZWN0aW9uWzBdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcInZlcnRpY2FsXCI6XG4gICAgICAgICAgICAgICAgICAgIG5vZGUubGF5b3V0TW9kZSA9IFwiVkVSVElDQUxcIjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcImhvcml6b250YWxcIjpcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5sYXlvdXRNb2RlID0gXCJIT1JJWk9OVEFMXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1hdGNoSXRlbVNwYWNpbmcgPT0gbnVsbCkge1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJoYXMgc3BhY2luZ1wiKTtcbiAgICAgICAgICAgIHN3aXRjaCAobWF0Y2hJdGVtU3BhY2luZ1swXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJzcC1ub25lXCI6XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuaXRlbVNwYWNpbmcgPSAwO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwic3AteHhzXCI6XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuaXRlbVNwYWNpbmcgPSA0O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwic3AteHNcIjpcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5pdGVtU3BhY2luZyA9IDg7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJzcC1zXCI6XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuaXRlbVNwYWNpbmcgPSAxNjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInNwLW1cIjpcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5pdGVtU3BhY2luZyA9IDI0O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwic3AtbFwiOlxuICAgICAgICAgICAgICAgICAgICBub2RlLml0ZW1TcGFjaW5nID0gMzI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJzcC14bFwiOlxuICAgICAgICAgICAgICAgICAgICBub2RlLml0ZW1TcGFjaW5nID0gNDA7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJzcC14eGxcIjpcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5pdGVtU3BhY2luZyA9IDQ4O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAobWF0Y2hQYWRkaW5nQWxsID09IG51bGwpIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwibm9cIik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImhhcyBwYWRkaW5nIGFsbFwiKTtcbiAgICAgICAgICAgIHN3aXRjaCAobWF0Y2hQYWRkaW5nQWxsWzBdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcInBhLW5vbmVcIjpcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5ob3Jpem9udGFsUGFkZGluZyA9IDA7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUudmVydGljYWxQYWRkaW5nID0gMDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInBhLXh4c1wiOlxuICAgICAgICAgICAgICAgICAgICBub2RlLmhvcml6b250YWxQYWRkaW5nID0gNDtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS52ZXJ0aWNhbFBhZGRpbmcgPSA0O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwicGEteHNcIjpcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5ob3Jpem9udGFsUGFkZGluZyA9IDg7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUudmVydGljYWxQYWRkaW5nID0gODtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInBhLXNcIjpcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5ob3Jpem9udGFsUGFkZGluZyA9IDE2O1xuICAgICAgICAgICAgICAgICAgICBub2RlLnZlcnRpY2FsUGFkZGluZyA9IDE2O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwicGEtbVwiOlxuICAgICAgICAgICAgICAgICAgICBub2RlLmhvcml6b250YWxQYWRkaW5nID0gMjQ7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUudmVydGljYWxQYWRkaW5nID0gMjQ7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJwYS1sXCI6XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuaG9yaXpvbnRhbFBhZGRpbmcgPSAzMjtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS52ZXJ0aWNhbFBhZGRpbmcgPSAzMjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInBhLXhsXCI6XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuaG9yaXpvbnRhbFBhZGRpbmcgPSA0MDtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS52ZXJ0aWNhbFBhZGRpbmcgPSA0MDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInBhLXh4bFwiOlxuICAgICAgICAgICAgICAgICAgICBub2RlLmhvcml6b250YWxQYWRkaW5nID0gNDg7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUudmVydGljYWxQYWRkaW5nID0gNDg7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChtYXRjaFBhZGRpbmdIb3Jpem9udGFsID09IG51bGwpIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwibm9cIik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImhhcyBwYWRkaW5nIGhvcml6b250YWxcIik7XG4gICAgICAgICAgICBzd2l0Y2ggKG1hdGNoUGFkZGluZ0hvcml6b250YWxbMF0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIFwicGgtbm9uZVwiOlxuICAgICAgICAgICAgICAgICAgICBub2RlLmhvcml6b250YWxQYWRkaW5nID0gMDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInBoLXh4c1wiOlxuICAgICAgICAgICAgICAgICAgICBub2RlLmhvcml6b250YWxQYWRkaW5nID0gNDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInBoLXhzXCI6XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuaG9yaXpvbnRhbFBhZGRpbmcgPSA4O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwicGgtc1wiOlxuICAgICAgICAgICAgICAgICAgICBub2RlLmhvcml6b250YWxQYWRkaW5nID0gMTY7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJwaC1tXCI6XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuaG9yaXpvbnRhbFBhZGRpbmcgPSAyNDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInBoLWxcIjpcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5ob3Jpem9udGFsUGFkZGluZyA9IDMyO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwicGgteGxcIjpcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5ob3Jpem9udGFsUGFkZGluZyA9IDQwO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwicGgteHhsXCI6XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuaG9yaXpvbnRhbFBhZGRpbmcgPSA0ODtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1hdGNoUGFkZGluZ1ZlcnRpY2FsID09IG51bGwpIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwibm9cIik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImhhcyBwYWRkaW5nIGhvcml6b250YWxcIik7XG4gICAgICAgICAgICBzd2l0Y2ggKG1hdGNoUGFkZGluZ1ZlcnRpY2FsWzBdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcInB2LW5vbmVcIjpcbiAgICAgICAgICAgICAgICAgICAgbm9kZS52ZXJ0aWNhbFBhZGRpbmcgPSAwO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwicHYteHhzXCI6XG4gICAgICAgICAgICAgICAgICAgIG5vZGUudmVydGljYWxQYWRkaW5nID0gNDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInB2LXhzXCI6XG4gICAgICAgICAgICAgICAgICAgIG5vZGUudmVydGljYWxQYWRkaW5nID0gODtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInB2LXNcIjpcbiAgICAgICAgICAgICAgICAgICAgbm9kZS52ZXJ0aWNhbFBhZGRpbmcgPSAxNjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInB2LW1cIjpcbiAgICAgICAgICAgICAgICAgICAgbm9kZS52ZXJ0aWNhbFBhZGRpbmcgPSAyNDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInB2LWxcIjpcbiAgICAgICAgICAgICAgICAgICAgbm9kZS52ZXJ0aWNhbFBhZGRpbmcgPSAzMjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInB2LXhsXCI6XG4gICAgICAgICAgICAgICAgICAgIG5vZGUudmVydGljYWxQYWRkaW5nID0gNDA7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJwdi14eGxcIjpcbiAgICAgICAgICAgICAgICAgICAgbm9kZS52ZXJ0aWNhbFBhZGRpbmcgPSA0ODtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gU3BhY2luZ0NoZWNrVHJhdmVyc2Uobm9kZSk7XG4gICAgfVxuICAgIC8vIGlmIChcImNoaWxkcmVuXCIgaW4gbm9kZXMpIHtcbiAgICAvLyAgIGZvciAoY29uc3QgY2hpbGQgb2Ygbm9kZS5jaGlsZHJlbikge1xuICAgIC8vICAgICBTcGFjaW5nQ2hlY2tUcmF2ZXJzZShjaGlsZCk7XG4gICAgLy8gICB9XG4gICAgLy8gfSBlbHNlIHtcbiAgICAvLyAgIC8vIGRvIG5vdGhpbmdcbiAgICAvLyB9XG59O1xuZXhwb3J0IHsgU3BhY2luZ0NoZWNrVHJhdmVyc2UgfTtcbiIsImZ1bmN0aW9uIGNsb25lKHZhbCkge1xuICAgIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHZhbCkpO1xufVxubGV0IHBoTmFtZSA9IG51bGw7XG5sZXQgcHZOYW1lID0gbnVsbDtcbmxldCBzcE5hbWUgPSBudWxsO1xubGV0IG5hbWVQcm9wID0ge1xuICAgIGhvcml6b250YWw6IFwicGgtbm9uZVwiLFxuICAgIHZlcnRpY2FsOiBcInB2LW5vbmVcIixcbiAgICBzcGFjaW5nOiBcInNwLW5vbmVcIixcbn07XG5mdW5jdGlvbiB1cGRhdGVOYW1lKHZhbCwgbm9kZSkge1xuICAgIGlmICh2YWwudHlwZSA9PT0gXCJob3Jpem9udGFsXCIpIHtcbiAgICAgICAgbmFtZVByb3AuaG9yaXpvbnRhbCA9IHZhbC52YWx1ZTtcbiAgICB9XG4gICAgZWxzZSBpZiAodmFsLnR5cGUgPT09IFwidmVydGljYWxcIikge1xuICAgICAgICBuYW1lUHJvcC52ZXJ0aWNhbCA9IHZhbC52YWx1ZTtcbiAgICB9XG4gICAgZWxzZSBpZiAodmFsLnR5cGUgPT09IFwic3BhY2luZ1wiKSB7XG4gICAgICAgIG5hbWVQcm9wLnNwYWNpbmcgPSB2YWwudmFsdWU7XG4gICAgfVxuICAgIG5vZGUubmFtZSA9XG4gICAgICAgIG5hbWVQcm9wLmhvcml6b250YWwgKyBcIiBcIiArIG5hbWVQcm9wLnZlcnRpY2FsICsgXCIgXCIgKyBuYW1lUHJvcC5zcGFjaW5nO1xufVxuY29uc3QgUGFkZGluZ0hvcml6b250YWxTbGlkZXIgPSAobm9kZXMsIG1zZykgPT4ge1xuICAgIGxldCBzbGlkZXJWYWx1ZSA9IG1zZy5zbGlkZXJWYWx1ZTtcbiAgICBsZXQgc3BhY2luZyA9IG51bGw7XG4gICAgbGV0IHNwYWNpbmdOYW1lID0gbnVsbDtcbiAgICBzd2l0Y2ggKHNsaWRlclZhbHVlKSB7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBzcGFjaW5nID0gMDtcbiAgICAgICAgICAgIHNwYWNpbmdOYW1lID0gXCJub25lXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIjFcIjpcbiAgICAgICAgICAgIHNwYWNpbmcgPSA0O1xuICAgICAgICAgICAgc3BhY2luZ05hbWUgPSBcInh4c1wiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCIyXCI6XG4gICAgICAgICAgICBzcGFjaW5nID0gODtcbiAgICAgICAgICAgIHNwYWNpbmdOYW1lID0gXCJ4c1wiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCIzXCI6XG4gICAgICAgICAgICBzcGFjaW5nID0gMTY7XG4gICAgICAgICAgICBzcGFjaW5nTmFtZSA9IFwic1wiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCI0XCI6XG4gICAgICAgICAgICBzcGFjaW5nID0gMjQ7XG4gICAgICAgICAgICBzcGFjaW5nTmFtZSA9IFwibVwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCI1XCI6XG4gICAgICAgICAgICBzcGFjaW5nID0gMzI7XG4gICAgICAgICAgICBzcGFjaW5nTmFtZSA9IFwibFwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCI2XCI6XG4gICAgICAgICAgICBzcGFjaW5nID0gNDA7XG4gICAgICAgICAgICBzcGFjaW5nTmFtZSA9IFwieGxcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiN1wiOlxuICAgICAgICAgICAgc3BhY2luZyA9IDQ4O1xuICAgICAgICAgICAgc3BhY2luZ05hbWUgPSBcInh4bFwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGZvciAoY29uc3Qgbm9kZSBvZiBub2Rlcykge1xuICAgICAgICBpZiAobm9kZSkge1xuICAgICAgICAgICAgcGhOYW1lID0gXCJwaC1cIiArIHNwYWNpbmdOYW1lO1xuICAgICAgICAgICAgdXBkYXRlTmFtZSh7IHR5cGU6IFwiaG9yaXpvbnRhbFwiLCB2YWx1ZTogcGhOYW1lIH0sIG5vZGUpO1xuICAgICAgICAgICAgaWYgKG5vZGUudHlwZSA9PT0gXCJHUk9VUFwiKSB7XG4gICAgICAgICAgICAgICAgbm9kZS5ob3Jpem9udGFsUGFkZGluZyA9IHNwYWNpbmc7XG4gICAgICAgICAgICAgICAgbm9kZS5sYXlvdXRNb2RlID0gXCJOT05FXCI7XG4gICAgICAgICAgICAgICAgaWYgKFwiY2hpbGRyZW5cIiBpbiBub2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBncm91cCA9IG5vZGUuY2hpbGRyZW5bMF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IHNldEF1dG9MYXlvdXQgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuaG9yaXpvbnRhbFBhZGRpbmcgPSBzcGFjaW5nO1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHJlc29sdmUoXCJkb25lXCIpLCA1KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn07XG5jb25zdCBQYWRkaW5nVmVydGljYWxTbGlkZXIgPSAobm9kZXMsIG1zZykgPT4ge1xuICAgIGxldCBzbGlkZXJWYWx1ZSA9IG1zZy5zbGlkZXJWYWx1ZTtcbiAgICBsZXQgc3BhY2luZyA9IG51bGw7XG4gICAgbGV0IHNwYWNpbmdOYW1lID0gbnVsbDtcbiAgICBzd2l0Y2ggKHNsaWRlclZhbHVlKSB7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBzcGFjaW5nID0gMDtcbiAgICAgICAgICAgIHNwYWNpbmdOYW1lID0gXCJub25lXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIjFcIjpcbiAgICAgICAgICAgIHNwYWNpbmcgPSA0O1xuICAgICAgICAgICAgc3BhY2luZ05hbWUgPSBcInh4c1wiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCIyXCI6XG4gICAgICAgICAgICBzcGFjaW5nID0gODtcbiAgICAgICAgICAgIHNwYWNpbmdOYW1lID0gXCJ4c1wiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCIzXCI6XG4gICAgICAgICAgICBzcGFjaW5nID0gMTY7XG4gICAgICAgICAgICBzcGFjaW5nTmFtZSA9IFwic1wiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCI0XCI6XG4gICAgICAgICAgICBzcGFjaW5nID0gMjQ7XG4gICAgICAgICAgICBzcGFjaW5nTmFtZSA9IFwibVwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCI1XCI6XG4gICAgICAgICAgICBzcGFjaW5nID0gMzI7XG4gICAgICAgICAgICBzcGFjaW5nTmFtZSA9IFwibFwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCI2XCI6XG4gICAgICAgICAgICBzcGFjaW5nID0gNDA7XG4gICAgICAgICAgICBzcGFjaW5nTmFtZSA9IFwieGxcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiN1wiOlxuICAgICAgICAgICAgc3BhY2luZyA9IDQ4O1xuICAgICAgICAgICAgc3BhY2luZ05hbWUgPSBcInh4bFwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGZvciAoY29uc3Qgbm9kZSBvZiBub2Rlcykge1xuICAgICAgICBpZiAobm9kZSkge1xuICAgICAgICAgICAgcHZOYW1lID0gXCJwdi1cIiArIHNwYWNpbmdOYW1lO1xuICAgICAgICAgICAgdXBkYXRlTmFtZSh7IHR5cGU6IFwidmVydGljYWxcIiwgdmFsdWU6IHB2TmFtZSB9LCBub2RlKTtcbiAgICAgICAgICAgIGlmIChub2RlLnR5cGUgPT09IFwiR1JPVVBcIikge1xuICAgICAgICAgICAgICAgIG5vZGUudmVydGljYWxQYWRkaW5nID0gc3BhY2luZztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGxldCBzZXRBdXRvTGF5b3V0ID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgICAgICAgICBub2RlLnZlcnRpY2FsUGFkZGluZyA9IHNwYWNpbmc7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gcmVzb2x2ZShcImRvbmVcIiksIDUpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufTtcbmNvbnN0IEl0ZW1TcGFjaW5nID0gKG5vZGVzLCBtc2cpID0+IHtcbiAgICBsZXQgc2xpZGVyVmFsdWUgPSBtc2cuc2xpZGVyVmFsdWU7XG4gICAgbGV0IHNwYWNpbmcgPSBudWxsO1xuICAgIGxldCBzcGFjaW5nTmFtZSA9IG51bGw7XG4gICAgc3dpdGNoIChzbGlkZXJWYWx1ZSkge1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgc3BhY2luZyA9IDA7XG4gICAgICAgICAgICBzcGFjaW5nTmFtZSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCIxXCI6XG4gICAgICAgICAgICBzcGFjaW5nID0gNDtcbiAgICAgICAgICAgIHNwYWNpbmdOYW1lID0gXCJ4eHNcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiMlwiOlxuICAgICAgICAgICAgc3BhY2luZyA9IDg7XG4gICAgICAgICAgICBzcGFjaW5nTmFtZSA9IFwieHNcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiM1wiOlxuICAgICAgICAgICAgc3BhY2luZyA9IDE2O1xuICAgICAgICAgICAgc3BhY2luZ05hbWUgPSBcInNcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiNFwiOlxuICAgICAgICAgICAgc3BhY2luZyA9IDI0O1xuICAgICAgICAgICAgc3BhY2luZ05hbWUgPSBcIm1cIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiNVwiOlxuICAgICAgICAgICAgc3BhY2luZyA9IDMyO1xuICAgICAgICAgICAgc3BhY2luZ05hbWUgPSBcImxcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiNlwiOlxuICAgICAgICAgICAgc3BhY2luZyA9IDQwO1xuICAgICAgICAgICAgc3BhY2luZ05hbWUgPSBcInhsXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIjdcIjpcbiAgICAgICAgICAgIHNwYWNpbmcgPSA0ODtcbiAgICAgICAgICAgIHNwYWNpbmdOYW1lID0gXCJ4eGxcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IG5vZGUgb2Ygbm9kZXMpIHtcbiAgICAgICAgbm9kZS5pdGVtU3BhY2luZyA9IHNwYWNpbmc7XG4gICAgICAgIHNwTmFtZSA9IFwic3AtXCIgKyBzcGFjaW5nTmFtZTtcbiAgICAgICAgdXBkYXRlTmFtZSh7IHR5cGU6IFwic3BhY2luZ1wiLCB2YWx1ZTogc3BOYW1lIH0sIG5vZGUpO1xuICAgIH1cbn07XG5leHBvcnQgeyBQYWRkaW5nSG9yaXpvbnRhbFNsaWRlciwgUGFkZGluZ1ZlcnRpY2FsU2xpZGVyLCBJdGVtU3BhY2luZyB9O1xuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgeyBDb2xvclN0eWxlSWQgfSBmcm9tIFwiLi4vdGhlbWUtc3R5bGVzL2NvbG9yc1wiO1xuaW1wb3J0IHsgRWZmZWN0c1N0eWxlSWQgfSBmcm9tIFwiLi4vdGhlbWUtc3R5bGVzL2VmZmVjdHNcIjtcbmNvbnN0IExpZ2h0VGhlbWVUcmF2ZXJzZSA9IChub2RlKSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgbGV0IGRhcmtVSUJvZHkgPSB5aWVsZCBDb2xvclN0eWxlSWQuZGFya1VJLmJvZHk7XG4gICAgbGV0IGRhcmtVSVN1cmZhY2UgPSB5aWVsZCBDb2xvclN0eWxlSWQuZGFya1VJLnN1cmZhY2U7XG4gICAgbGV0IGRhcmtVSUtleWxpbmUgPSB5aWVsZCBDb2xvclN0eWxlSWQuZGFya1VJLmtleWxpbmU7XG4gICAgbGV0IGRhcmtVSUtleWxpbmVBbHRlcm5hdGl2ZSA9IHlpZWxkIENvbG9yU3R5bGVJZC5kYXJrVUkua2V5bGluZUFsdGVybmF0aXZlO1xuICAgIGxldCBkYXJrVUlBY2NlbnQgPSB5aWVsZCBDb2xvclN0eWxlSWQuZGFya1VJLmFjY2VudDtcbiAgICBsZXQgZGFya1VJRXJyb3IgPSB5aWVsZCBDb2xvclN0eWxlSWQuZGFya1VJLmVycm9yO1xuICAgIGxldCBkYXJrVUlPbkFjY2VudCA9IHlpZWxkIENvbG9yU3R5bGVJZC5kYXJrVUkub25BY2NlbnQ7XG4gICAgbGV0IGRhcmtVSU9uU3VyZmFjZUhpZ2ggPSB5aWVsZCBDb2xvclN0eWxlSWQuZGFya1VJLm9uU3VyZmFjZUhpZ2g7XG4gICAgbGV0IGRhcmtVSU9uU3VyZmFjZU1lZGl1bSA9IHlpZWxkIENvbG9yU3R5bGVJZC5kYXJrVUkub25TdXJmYWNlTWVkaXVtO1xuICAgIGxldCBkYXJrVUlPblN1cmZhY2VEaXNhYmxlZCA9IHlpZWxkIENvbG9yU3R5bGVJZC5kYXJrVUkub25TdXJmYWNlRGlzYWJsZWQ7XG4gICAgbGV0IGRhcmtVSVNoYWRvd0xvdyA9IHlpZWxkIEVmZmVjdHNTdHlsZUlkLmRhcmtVSS5zaGFkb3dMb3c7XG4gICAgbGV0IGRhcmtVSVNoYWRvd0hpZ2ggPSB5aWVsZCBFZmZlY3RzU3R5bGVJZC5kYXJrVUkuc2hhZG93SGlnaDtcbiAgICBsZXQgZGFya1VJQm9yZGVyVG9wID0geWllbGQgRWZmZWN0c1N0eWxlSWQuZGFya1VJLmJvcmRlclRvcDtcbiAgICBsZXQgZGFya1VJQm9yZGVyUmlnaHQgPSB5aWVsZCBFZmZlY3RzU3R5bGVJZC5kYXJrVUkuYm9yZGVyUmlnaHQ7XG4gICAgbGV0IGRhcmtVSUJvcmRlckJvdHRvbSA9IHlpZWxkIEVmZmVjdHNTdHlsZUlkLmRhcmtVSS5ib3JkZXJCb3R0b207XG4gICAgbGV0IGRhcmtVSUJvcmRlckxlZnQgPSB5aWVsZCBFZmZlY3RzU3R5bGVJZC5kYXJrVUkuYm9yZGVyTGVmdDtcbiAgICBsZXQgZGFya1VJQm9yZGVyVG9wQm90dG9tID0geWllbGQgRWZmZWN0c1N0eWxlSWQuZGFya1VJLmJvcmRlclRvcEJvdHRvbTtcbiAgICBsZXQgZGFya1VJQm9yZGVyTGVmdFJpZ2h0ID0geWllbGQgRWZmZWN0c1N0eWxlSWQuZGFya1VJLmJvcmRlckxlZnRSaWdodDtcbiAgICAvLyBTdHJva2VzXG4gICAgc3dpdGNoIChub2RlLnN0cm9rZVN0eWxlSWQpIHtcbiAgICAgICAgY2FzZSBkYXJrVUlBY2NlbnQuaWQ6XG4gICAgICAgICAgICBDb2xvclN0eWxlSWQubGlnaHRVSS5hY2NlbnQudGhlbigocmVzcCkgPT4ge1xuICAgICAgICAgICAgICAgIG5vZGUuc3Ryb2tlU3R5bGVJZCA9IHJlc3AuaWQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIGRhcmtVSUVycm9yLmlkOlxuICAgICAgICAgICAgQ29sb3JTdHlsZUlkLmxpZ2h0VUkuZXJyb3IudGhlbigocmVzcCkgPT4ge1xuICAgICAgICAgICAgICAgIG5vZGUuc3Ryb2tlU3R5bGVJZCA9IHJlc3AuaWQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIGRhcmtVSUtleWxpbmUuaWQ6XG4gICAgICAgICAgICBDb2xvclN0eWxlSWQubGlnaHRVSS5rZXlsaW5lLnRoZW4oKHJlc3ApID0+IHtcbiAgICAgICAgICAgICAgICBub2RlLnN0cm9rZVN0eWxlSWQgPSByZXNwLmlkO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBkYXJrVUlLZXlsaW5lQWx0ZXJuYXRpdmUuaWQ6XG4gICAgICAgICAgICBDb2xvclN0eWxlSWQubGlnaHRVSS5rZXlsaW5lQWx0ZXJuYXRpdmUudGhlbigocmVzcCkgPT4ge1xuICAgICAgICAgICAgICAgIG5vZGUuc3Ryb2tlU3R5bGVJZCA9IHJlc3AuaWQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIGRhcmtVSUFjY2VudC5pZDpcbiAgICAgICAgICAgIENvbG9yU3R5bGVJZC5saWdodFVJLmFjY2VudC50aGVuKChyZXNwKSA9PiB7XG4gICAgICAgICAgICAgICAgbm9kZS5zdHJva2VTdHlsZUlkID0gcmVzcC5pZDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIC8vIEZpbGxzXG4gICAgc3dpdGNoIChub2RlLmZpbGxTdHlsZUlkKSB7XG4gICAgICAgIGNhc2UgZGFya1VJQm9keS5pZDpcbiAgICAgICAgICAgIENvbG9yU3R5bGVJZC5saWdodFVJLmJvZHkudGhlbigocmVzcCkgPT4ge1xuICAgICAgICAgICAgICAgIG5vZGUuZmlsbFN0eWxlSWQgPSByZXNwLmlkO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBkYXJrVUlTdXJmYWNlLmlkOlxuICAgICAgICAgICAgQ29sb3JTdHlsZUlkLmxpZ2h0VUkuc3VyZmFjZS50aGVuKChyZXNwKSA9PiB7XG4gICAgICAgICAgICAgICAgbm9kZS5maWxsU3R5bGVJZCA9IHJlc3AuaWQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIGRhcmtVSUtleWxpbmUuaWQ6XG4gICAgICAgICAgICBDb2xvclN0eWxlSWQubGlnaHRVSS5rZXlsaW5lLnRoZW4oKHJlc3ApID0+IHtcbiAgICAgICAgICAgICAgICBub2RlLmZpbGxTdHlsZUlkID0gcmVzcC5pZDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgZGFya1VJS2V5bGluZUFsdGVybmF0aXZlLmlkOlxuICAgICAgICAgICAgQ29sb3JTdHlsZUlkLmxpZ2h0VUkua2V5bGluZUFsdGVybmF0aXZlLnRoZW4oKHJlc3ApID0+IHtcbiAgICAgICAgICAgICAgICBub2RlLmZpbGxTdHlsZUlkID0gcmVzcC5pZDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgZGFya1VJQWNjZW50LmlkOlxuICAgICAgICAgICAgQ29sb3JTdHlsZUlkLmxpZ2h0VUkuYWNjZW50LnRoZW4oKHJlc3ApID0+IHtcbiAgICAgICAgICAgICAgICBub2RlLmZpbGxTdHlsZUlkID0gcmVzcC5pZDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgZGFya1VJRXJyb3IuaWQ6XG4gICAgICAgICAgICBDb2xvclN0eWxlSWQubGlnaHRVSS5lcnJvci50aGVuKChyZXNwKSA9PiB7XG4gICAgICAgICAgICAgICAgbm9kZS5maWxsU3R5bGVJZCA9IHJlc3AuaWQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIGRhcmtVSU9uQWNjZW50LmlkOlxuICAgICAgICAgICAgQ29sb3JTdHlsZUlkLmxpZ2h0VUkub25BY2NlbnQudGhlbigocmVzcCkgPT4ge1xuICAgICAgICAgICAgICAgIG5vZGUuZmlsbFN0eWxlSWQgPSByZXNwLmlkO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBkYXJrVUlPblN1cmZhY2VIaWdoLmlkOlxuICAgICAgICAgICAgQ29sb3JTdHlsZUlkLmxpZ2h0VUkub25TdXJmYWNlSGlnaC50aGVuKChyZXNwKSA9PiB7XG4gICAgICAgICAgICAgICAgbm9kZS5maWxsU3R5bGVJZCA9IHJlc3AuaWQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIGRhcmtVSU9uU3VyZmFjZU1lZGl1bS5pZDpcbiAgICAgICAgICAgIENvbG9yU3R5bGVJZC5saWdodFVJLm9uU3VyZmFjZU1lZGl1bS50aGVuKChyZXNwKSA9PiB7XG4gICAgICAgICAgICAgICAgbm9kZS5maWxsU3R5bGVJZCA9IHJlc3AuaWQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIGRhcmtVSU9uU3VyZmFjZURpc2FibGVkLmlkOlxuICAgICAgICAgICAgQ29sb3JTdHlsZUlkLmxpZ2h0VUkub25TdXJmYWNlRGlzYWJsZWQudGhlbigocmVzcCkgPT4ge1xuICAgICAgICAgICAgICAgIG5vZGUuZmlsbFN0eWxlSWQgPSByZXNwLmlkO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG4gICAgLy8gRWZmZWN0c1xuICAgIHN3aXRjaCAobm9kZS5lZmZlY3RTdHlsZUlkKSB7XG4gICAgICAgIGNhc2UgZGFya1VJU2hhZG93TG93LmlkOlxuICAgICAgICAgICAgRWZmZWN0c1N0eWxlSWQubGlnaHRVSS5zaGFkb3dMb3cudGhlbigocmVzcCkgPT4ge1xuICAgICAgICAgICAgICAgIG5vZGUuZWZmZWN0U3R5bGVJZCA9IHJlc3AuaWQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIGRhcmtVSVNoYWRvd0hpZ2guaWQ6XG4gICAgICAgICAgICBFZmZlY3RzU3R5bGVJZC5saWdodFVJLnNoYWRvd0hpZ2gudGhlbigocmVzcCkgPT4ge1xuICAgICAgICAgICAgICAgIG5vZGUuZWZmZWN0U3R5bGVJZCA9IHJlc3AuaWQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIGRhcmtVSUJvcmRlclRvcC5pZDpcbiAgICAgICAgICAgIEVmZmVjdHNTdHlsZUlkLmxpZ2h0VUkuYm9yZGVyVG9wLnRoZW4oKHJlc3ApID0+IHtcbiAgICAgICAgICAgICAgICBub2RlLmVmZmVjdFN0eWxlSWQgPSByZXNwLmlkO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBkYXJrVUlCb3JkZXJSaWdodC5pZDpcbiAgICAgICAgICAgIEVmZmVjdHNTdHlsZUlkLmxpZ2h0VUkuYm9yZGVyUmlnaHQudGhlbigocmVzcCkgPT4ge1xuICAgICAgICAgICAgICAgIG5vZGUuZWZmZWN0U3R5bGVJZCA9IHJlc3AuaWQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIGRhcmtVSUJvcmRlckJvdHRvbS5pZDpcbiAgICAgICAgICAgIEVmZmVjdHNTdHlsZUlkLmxpZ2h0VUkuYm9yZGVyQm90dG9tLnRoZW4oKHJlc3ApID0+IHtcbiAgICAgICAgICAgICAgICBub2RlLmVmZmVjdFN0eWxlSWQgPSByZXNwLmlkO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBkYXJrVUlCb3JkZXJMZWZ0LmlkOlxuICAgICAgICAgICAgRWZmZWN0c1N0eWxlSWQubGlnaHRVSS5ib3JkZXJMZWZ0LnRoZW4oKHJlc3ApID0+IHtcbiAgICAgICAgICAgICAgICBub2RlLmVmZmVjdFN0eWxlSWQgPSByZXNwLmlkO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBkYXJrVUlCb3JkZXJUb3BCb3R0b20uaWQ6XG4gICAgICAgICAgICBFZmZlY3RzU3R5bGVJZC5saWdodFVJLmJvcmRlclRvcEJvdHRvbS50aGVuKChyZXNwKSA9PiB7XG4gICAgICAgICAgICAgICAgbm9kZS5lZmZlY3RTdHlsZUlkID0gcmVzcC5pZDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgZGFya1VJQm9yZGVyTGVmdFJpZ2h0LmlkOlxuICAgICAgICAgICAgRWZmZWN0c1N0eWxlSWQubGlnaHRVSS5ib3JkZXJMZWZ0UmlnaHQudGhlbigocmVzcCkgPT4ge1xuICAgICAgICAgICAgICAgIG5vZGUuZWZmZWN0U3R5bGVJZCA9IHJlc3AuaWQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICAvLyBkbyBub3RoaW5nIGJlbG93XG4gICAgaWYgKFwiY2hpbGRyZW5cIiBpbiBub2RlKSB7XG4gICAgICAgIGZvciAoY29uc3QgY2hpbGQgb2Ygbm9kZS5jaGlsZHJlbikge1xuICAgICAgICAgICAgTGlnaHRUaGVtZVRyYXZlcnNlKGNoaWxkKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgLy8gZG8gbm90aGluZ1xuICAgIH1cbn0pO1xuY29uc3QgRGFya1RoZW1lVHJhdmVyc2UgPSAobm9kZSkgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIGxldCBsaWdodFVJQm9keSA9IHlpZWxkIENvbG9yU3R5bGVJZC5saWdodFVJLmJvZHk7XG4gICAgbGV0IGxpZ2h0VUlTdXJmYWNlID0geWllbGQgQ29sb3JTdHlsZUlkLmxpZ2h0VUkuc3VyZmFjZTtcbiAgICBsZXQgbGlnaHRVSUtleWxpbmUgPSB5aWVsZCBDb2xvclN0eWxlSWQubGlnaHRVSS5rZXlsaW5lO1xuICAgIGxldCBsaWdodFVJS2V5bGluZUFsdGVybmF0aXZlID0geWllbGQgQ29sb3JTdHlsZUlkLmxpZ2h0VUkua2V5bGluZUFsdGVybmF0aXZlO1xuICAgIGxldCBsaWdodFVJQWNjZW50ID0geWllbGQgQ29sb3JTdHlsZUlkLmxpZ2h0VUkuYWNjZW50O1xuICAgIGxldCBsaWdodFVJRXJyb3IgPSB5aWVsZCBDb2xvclN0eWxlSWQubGlnaHRVSS5lcnJvcjtcbiAgICBsZXQgbGlnaHRVSU9uQWNjZW50ID0geWllbGQgQ29sb3JTdHlsZUlkLmxpZ2h0VUkub25BY2NlbnQ7XG4gICAgbGV0IGxpZ2h0VUlPblN1cmZhY2VIaWdoID0geWllbGQgQ29sb3JTdHlsZUlkLmxpZ2h0VUkub25TdXJmYWNlSGlnaDtcbiAgICBsZXQgbGlnaHRVSU9uU3VyZmFjZU1lZGl1bSA9IHlpZWxkIENvbG9yU3R5bGVJZC5saWdodFVJLm9uU3VyZmFjZU1lZGl1bTtcbiAgICBsZXQgbGlnaHRVSU9uU3VyZmFjZURpc2FibGVkID0geWllbGQgQ29sb3JTdHlsZUlkLmxpZ2h0VUkub25TdXJmYWNlRGlzYWJsZWQ7XG4gICAgbGV0IGxpZ2h0VUlTaGFkb3dMb3cgPSB5aWVsZCBFZmZlY3RzU3R5bGVJZC5saWdodFVJLnNoYWRvd0xvdztcbiAgICBsZXQgbGlnaHRVSVNoYWRvd0hpZ2ggPSB5aWVsZCBFZmZlY3RzU3R5bGVJZC5saWdodFVJLnNoYWRvd0hpZ2g7XG4gICAgbGV0IGxpZ2h0VUlCb3JkZXJUb3AgPSB5aWVsZCBFZmZlY3RzU3R5bGVJZC5saWdodFVJLmJvcmRlclRvcDtcbiAgICBsZXQgbGlnaHRVSUJvcmRlclJpZ2h0ID0geWllbGQgRWZmZWN0c1N0eWxlSWQubGlnaHRVSS5ib3JkZXJSaWdodDtcbiAgICBsZXQgbGlnaHRVSUJvcmRlckJvdHRvbSA9IHlpZWxkIEVmZmVjdHNTdHlsZUlkLmxpZ2h0VUkuYm9yZGVyQm90dG9tO1xuICAgIGxldCBsaWdodFVJQm9yZGVyTGVmdCA9IHlpZWxkIEVmZmVjdHNTdHlsZUlkLmxpZ2h0VUkuYm9yZGVyTGVmdDtcbiAgICBsZXQgbGlnaHRVSUJvcmRlclRvcEJvdHRvbSA9IHlpZWxkIEVmZmVjdHNTdHlsZUlkLmxpZ2h0VUkuYm9yZGVyVG9wQm90dG9tO1xuICAgIGxldCBsaWdodFVJQm9yZGVyTGVmdFJpZ2h0ID0geWllbGQgRWZmZWN0c1N0eWxlSWQubGlnaHRVSS5ib3JkZXJMZWZ0UmlnaHQ7XG4gICAgLy8gU3Ryb2tlXG4gICAgc3dpdGNoIChub2RlLnN0cm9rZVN0eWxlSWQpIHtcbiAgICAgICAgY2FzZSBsaWdodFVJQWNjZW50LmlkOlxuICAgICAgICAgICAgQ29sb3JTdHlsZUlkLmRhcmtVSS5hY2NlbnQudGhlbigocmVzcCkgPT4ge1xuICAgICAgICAgICAgICAgIG5vZGUuc3Ryb2tlU3R5bGVJZCA9IHJlc3AuaWQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIGxpZ2h0VUlFcnJvci5pZDpcbiAgICAgICAgICAgIENvbG9yU3R5bGVJZC5kYXJrVUkuZXJyb3IudGhlbigocmVzcCkgPT4ge1xuICAgICAgICAgICAgICAgIG5vZGUuc3Ryb2tlU3R5bGVJZCA9IHJlc3AuaWQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIGxpZ2h0VUlLZXlsaW5lLmlkOlxuICAgICAgICAgICAgQ29sb3JTdHlsZUlkLmRhcmtVSS5rZXlsaW5lLnRoZW4oKHJlc3ApID0+IHtcbiAgICAgICAgICAgICAgICBub2RlLnN0cm9rZVN0eWxlSWQgPSByZXNwLmlkO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBsaWdodFVJS2V5bGluZUFsdGVybmF0aXZlLmlkOlxuICAgICAgICAgICAgQ29sb3JTdHlsZUlkLmRhcmtVSS5rZXlsaW5lQWx0ZXJuYXRpdmUudGhlbigocmVzcCkgPT4ge1xuICAgICAgICAgICAgICAgIG5vZGUuc3Ryb2tlU3R5bGVJZCA9IHJlc3AuaWQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIGxpZ2h0VUlBY2NlbnQuaWQ6XG4gICAgICAgICAgICBDb2xvclN0eWxlSWQuZGFya1VJLmFjY2VudC50aGVuKChyZXNwKSA9PiB7XG4gICAgICAgICAgICAgICAgbm9kZS5zdHJva2VTdHlsZUlkID0gcmVzcC5pZDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIC8vIEZpbGxcbiAgICBzd2l0Y2ggKG5vZGUuZmlsbFN0eWxlSWQpIHtcbiAgICAgICAgY2FzZSBsaWdodFVJQm9keS5pZDpcbiAgICAgICAgICAgIENvbG9yU3R5bGVJZC5kYXJrVUkuYm9keS50aGVuKChyZXNwKSA9PiB7XG4gICAgICAgICAgICAgICAgbm9kZS5maWxsU3R5bGVJZCA9IHJlc3AuaWQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIGxpZ2h0VUlTdXJmYWNlLmlkOlxuICAgICAgICAgICAgQ29sb3JTdHlsZUlkLmRhcmtVSS5zdXJmYWNlLnRoZW4oKHJlc3ApID0+IHtcbiAgICAgICAgICAgICAgICBub2RlLmZpbGxTdHlsZUlkID0gcmVzcC5pZDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgbGlnaHRVSUtleWxpbmUuaWQ6XG4gICAgICAgICAgICBDb2xvclN0eWxlSWQuZGFya1VJLmtleWxpbmUudGhlbigocmVzcCkgPT4ge1xuICAgICAgICAgICAgICAgIG5vZGUuZmlsbFN0eWxlSWQgPSByZXNwLmlkO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBsaWdodFVJS2V5bGluZUFsdGVybmF0aXZlLmlkOlxuICAgICAgICAgICAgQ29sb3JTdHlsZUlkLmRhcmtVSS5rZXlsaW5lQWx0ZXJuYXRpdmUudGhlbigocmVzcCkgPT4ge1xuICAgICAgICAgICAgICAgIG5vZGUuZmlsbFN0eWxlSWQgPSByZXNwLmlkO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBsaWdodFVJQWNjZW50LmlkOlxuICAgICAgICAgICAgQ29sb3JTdHlsZUlkLmRhcmtVSS5hY2NlbnQudGhlbigocmVzcCkgPT4ge1xuICAgICAgICAgICAgICAgIG5vZGUuZmlsbFN0eWxlSWQgPSByZXNwLmlkO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBsaWdodFVJRXJyb3IuaWQ6XG4gICAgICAgICAgICBDb2xvclN0eWxlSWQuZGFya1VJLmVycm9yLnRoZW4oKHJlc3ApID0+IHtcbiAgICAgICAgICAgICAgICBub2RlLmZpbGxTdHlsZUlkID0gcmVzcC5pZDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgbGlnaHRVSU9uQWNjZW50LmlkOlxuICAgICAgICAgICAgQ29sb3JTdHlsZUlkLmRhcmtVSS5vbkFjY2VudC50aGVuKChyZXNwKSA9PiB7XG4gICAgICAgICAgICAgICAgbm9kZS5maWxsU3R5bGVJZCA9IHJlc3AuaWQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIGxpZ2h0VUlPblN1cmZhY2VIaWdoLmlkOlxuICAgICAgICAgICAgQ29sb3JTdHlsZUlkLmRhcmtVSS5vblN1cmZhY2VIaWdoLnRoZW4oKHJlc3ApID0+IHtcbiAgICAgICAgICAgICAgICBub2RlLmZpbGxTdHlsZUlkID0gcmVzcC5pZDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgbGlnaHRVSU9uU3VyZmFjZU1lZGl1bS5pZDpcbiAgICAgICAgICAgIENvbG9yU3R5bGVJZC5kYXJrVUkub25TdXJmYWNlTWVkaXVtLnRoZW4oKHJlc3ApID0+IHtcbiAgICAgICAgICAgICAgICBub2RlLmZpbGxTdHlsZUlkID0gcmVzcC5pZDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgbGlnaHRVSU9uU3VyZmFjZURpc2FibGVkLmlkOlxuICAgICAgICAgICAgQ29sb3JTdHlsZUlkLmRhcmtVSS5vblN1cmZhY2VEaXNhYmxlZC50aGVuKChyZXNwKSA9PiB7XG4gICAgICAgICAgICAgICAgbm9kZS5maWxsU3R5bGVJZCA9IHJlc3AuaWQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICAvLyBFZmZlY3RzXG4gICAgc3dpdGNoIChub2RlLmVmZmVjdFN0eWxlSWQpIHtcbiAgICAgICAgY2FzZSBsaWdodFVJU2hhZG93TG93LmlkOlxuICAgICAgICAgICAgRWZmZWN0c1N0eWxlSWQuZGFya1VJLnNoYWRvd0xvdy50aGVuKChyZXNwKSA9PiB7XG4gICAgICAgICAgICAgICAgbm9kZS5lZmZlY3RTdHlsZUlkID0gcmVzcC5pZDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgbGlnaHRVSVNoYWRvd0hpZ2guaWQ6XG4gICAgICAgICAgICBFZmZlY3RzU3R5bGVJZC5kYXJrVUkuc2hhZG93SGlnaC50aGVuKChyZXNwKSA9PiB7XG4gICAgICAgICAgICAgICAgbm9kZS5lZmZlY3RTdHlsZUlkID0gcmVzcC5pZDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgbGlnaHRVSUJvcmRlclRvcC5pZDpcbiAgICAgICAgICAgIEVmZmVjdHNTdHlsZUlkLmRhcmtVSS5ib3JkZXJUb3AudGhlbigocmVzcCkgPT4ge1xuICAgICAgICAgICAgICAgIG5vZGUuZWZmZWN0U3R5bGVJZCA9IHJlc3AuaWQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIGxpZ2h0VUlCb3JkZXJSaWdodC5pZDpcbiAgICAgICAgICAgIEVmZmVjdHNTdHlsZUlkLmRhcmtVSS5ib3JkZXJSaWdodC50aGVuKChyZXNwKSA9PiB7XG4gICAgICAgICAgICAgICAgbm9kZS5lZmZlY3RTdHlsZUlkID0gcmVzcC5pZDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgbGlnaHRVSUJvcmRlckJvdHRvbS5pZDpcbiAgICAgICAgICAgIEVmZmVjdHNTdHlsZUlkLmRhcmtVSS5ib3JkZXJCb3R0b20udGhlbigocmVzcCkgPT4ge1xuICAgICAgICAgICAgICAgIG5vZGUuZWZmZWN0U3R5bGVJZCA9IHJlc3AuaWQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIGxpZ2h0VUlCb3JkZXJMZWZ0LmlkOlxuICAgICAgICAgICAgRWZmZWN0c1N0eWxlSWQuZGFya1VJLmJvcmRlckxlZnQudGhlbigocmVzcCkgPT4ge1xuICAgICAgICAgICAgICAgIG5vZGUuZWZmZWN0U3R5bGVJZCA9IHJlc3AuaWQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIGxpZ2h0VUlCb3JkZXJUb3BCb3R0b20uaWQ6XG4gICAgICAgICAgICBFZmZlY3RzU3R5bGVJZC5kYXJrVUkuYm9yZGVyVG9wQm90dG9tLnRoZW4oKHJlc3ApID0+IHtcbiAgICAgICAgICAgICAgICBub2RlLmVmZmVjdFN0eWxlSWQgPSByZXNwLmlkO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBsaWdodFVJQm9yZGVyTGVmdFJpZ2h0LmlkOlxuICAgICAgICAgICAgRWZmZWN0c1N0eWxlSWQuZGFya1VJLmJvcmRlckxlZnRSaWdodC50aGVuKChyZXNwKSA9PiB7XG4gICAgICAgICAgICAgICAgbm9kZS5lZmZlY3RTdHlsZUlkID0gcmVzcC5pZDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIC8vIGRvIG5vdGhpbmcgYmVsb3dcbiAgICBpZiAoXCJjaGlsZHJlblwiIGluIG5vZGUpIHtcbiAgICAgICAgZm9yIChjb25zdCBjaGlsZCBvZiBub2RlLmNoaWxkcmVuKSB7XG4gICAgICAgICAgICBEYXJrVGhlbWVUcmF2ZXJzZShjaGlsZCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIC8vIGRvIG5vdGhpbmdcbiAgICB9XG59KTtcbmV4cG9ydCB7IExpZ2h0VGhlbWVUcmF2ZXJzZSwgRGFya1RoZW1lVHJhdmVyc2UgfTtcbiIsImNvbnN0IENvbG9yU3R5bGVJZCA9IHtcbiAgbGlnaHRVSToge1xuICAgIGJvZHk6IGZpZ21hLmltcG9ydFN0eWxlQnlLZXlBc3luYyhcbiAgICAgIFwiZmI4YzRiZDI4MTc5NWFmYTlkYzg5MzM0YTRlNTFkODA3NDM3Nzg3NVwiXG4gICAgKSxcbiAgICBzdXJmYWNlOiBmaWdtYS5pbXBvcnRTdHlsZUJ5S2V5QXN5bmMoXG4gICAgICBcImE5MmRjOTljODRkZGQ1OTgyMmY4NzNlMGE2OTUzOWE0YTNmZjEzODdcIlxuICAgICksXG4gICAga2V5bGluZTogZmlnbWEuaW1wb3J0U3R5bGVCeUtleUFzeW5jKFxuICAgICAgXCIwMzVlMmY4MThkZjM2YjBlNGY3NWZmNmM1MjlkNTRiM2NhNzA4MmNjXCJcbiAgICApLFxuICAgIGtleWxpbmVBbHRlcm5hdGl2ZTogZmlnbWEuaW1wb3J0U3R5bGVCeUtleUFzeW5jKFxuICAgICAgXCIxMzljM2MxZTBjNjlmYzk1ODMyOTJiNzg3YWY4OTVkMDE0OGE5OTM5XCJcbiAgICApLFxuICAgIGFjY2VudDogZmlnbWEuaW1wb3J0U3R5bGVCeUtleUFzeW5jKFxuICAgICAgXCIzODkzNWM4NzczYmFiNWU3YjJjOWRiODMyYjJiY2M4NGIwNzViMjRjXCJcbiAgICApLFxuICAgIGVycm9yOiBmaWdtYS5pbXBvcnRTdHlsZUJ5S2V5QXN5bmMoXG4gICAgICBcIjQwOTZlYjY3ZjY3MThmMzAwMTE5NTk3ZDhmZDZjODJkNDc5MzZlYTBcIlxuICAgICksXG4gICAgb25BY2NlbnQ6IGZpZ21hLmltcG9ydFN0eWxlQnlLZXlBc3luYyhcbiAgICAgIFwiYTRjZWQ5Y2NiZGViNzgxNDZmYTFiN2QyNGZmZjZiNzM4NGM4NDc4NFwiXG4gICAgKSxcbiAgICBvblN1cmZhY2VIaWdoOiBmaWdtYS5pbXBvcnRTdHlsZUJ5S2V5QXN5bmMoXG4gICAgICBcIjM0NmU3M2I5Nzk4MWM0MTY2ZjI0YzNjM2IwMDA4ZmMyYTE4YWQ2NjJcIlxuICAgICksXG4gICAgb25TdXJmYWNlTWVkaXVtOiBmaWdtYS5pbXBvcnRTdHlsZUJ5S2V5QXN5bmMoXG4gICAgICBcIjM3NzQyMDhmNTRhYTY0MDVkYjdjMWI3ZDkzNmExNzUyNWY1YjFhNzdcIlxuICAgICksXG4gICAgb25TdXJmYWNlRGlzYWJsZWQ6IGZpZ21hLmltcG9ydFN0eWxlQnlLZXlBc3luYyhcbiAgICAgIFwiYmMxZTM4OWRlMmNlNzNhNTRmOGE2OTJmNDg5NjUwZWY1MjY2N2YzMFwiXG4gICAgKSxcbiAgfSxcbiAgZGFya1VJOiB7XG4gICAgYm9keTogZmlnbWEuaW1wb3J0U3R5bGVCeUtleUFzeW5jKFxuICAgICAgXCIyZjA2MGU3NDIyYThhZDE3YTAzN2EyNTBkMzY4Y2Y2NzFhZGMwNDY4XCJcbiAgICApLFxuICAgIHN1cmZhY2U6IGZpZ21hLmltcG9ydFN0eWxlQnlLZXlBc3luYyhcbiAgICAgIFwiMTVmNWZmYWMzZWM5MWIyNDA4OTgxMzQzOWZmYWRkMWY5OTk0YjI5Y1wiXG4gICAgKSxcbiAgICBrZXlsaW5lOiBmaWdtYS5pbXBvcnRTdHlsZUJ5S2V5QXN5bmMoXG4gICAgICBcIjg0YWIwZjI5OGVhOGZjZDBiODJhYzg5Mjk4YWQ1MTE0MGNhN2I3NWFcIlxuICAgICksXG4gICAga2V5bGluZUFsdGVybmF0aXZlOiBmaWdtYS5pbXBvcnRTdHlsZUJ5S2V5QXN5bmMoXG4gICAgICBcImJmZmUyMGY5NzI5YWNiNTI1ZDg4NjEyODhmMGQ4NDQxMzc2OThjNTVcIlxuICAgICksXG4gICAgYWNjZW50OiBmaWdtYS5pbXBvcnRTdHlsZUJ5S2V5QXN5bmMoXG4gICAgICBcIjFiMDM4ZWM2MDBkMmExNGI2Y2NlMzVmN2I0MDkwYzZhZDJkZDJjN2RcIlxuICAgICksXG4gICAgZXJyb3I6IGZpZ21hLmltcG9ydFN0eWxlQnlLZXlBc3luYyhcbiAgICAgIFwiMDBlNDM4MWNmYjg1MWY3ZjdjODcwODRjNWNmYWQxMWVmYjgwY2MyM1wiXG4gICAgKSxcbiAgICBvbkFjY2VudDogZmlnbWEuaW1wb3J0U3R5bGVCeUtleUFzeW5jKFxuICAgICAgXCIzZmRiZDQzZGQyNDYzYzY0Yjk0ZTBiODFhOTE2YTYwNmMwOGIwZjFjXCJcbiAgICApLFxuICAgIG9uU3VyZmFjZUhpZ2g6IGZpZ21hLmltcG9ydFN0eWxlQnlLZXlBc3luYyhcbiAgICAgIFwiNWU4ZTQ5MjU5OGM0ZjZlMThkODZkODdiM2FkMTBlODU2N2ZhN2ZkMVwiXG4gICAgKSxcbiAgICBvblN1cmZhY2VNZWRpdW06IGZpZ21hLmltcG9ydFN0eWxlQnlLZXlBc3luYyhcbiAgICAgIFwiOWQyZTUxMWQ5YTMxZWJkNzZlMzAyYWIyNWQxZTk5NWU2YTgzYWMxY1wiXG4gICAgKSxcbiAgICBvblN1cmZhY2VEaXNhYmxlZDogZmlnbWEuaW1wb3J0U3R5bGVCeUtleUFzeW5jKFxuICAgICAgXCJjOTg4ODNlMDdiZTgwYmU2YmNkMTg4MTRlYjI5YTg3Nzk3YTk5YzZhXCJcbiAgICApLFxuICAgIEVmZmVjdFNoYWRvd0xvdzogZmlnbWEuaW1wb3J0U3R5bGVCeUtleUFzeW5jKFxuICAgICAgXCI4Y2NlYTlkNTIzY2Y5ZGMxM2ZlZTY4ZjM5MmYzZjljYzMxODdhNDU3XCJcbiAgICApLFxuICAgIEVmZmVjdFNoYWRvd0hpZ2g6IGZpZ21hLmltcG9ydFN0eWxlQnlLZXlBc3luYyhcbiAgICAgIFwiYzYxMjUzYzM4ZjZkMGQ5ZjNiMzAyYTc3YTM4MDdlMDUyZTljM2Y5MVwiXG4gICAgKSxcbiAgfSxcbn07XG5cbmV4cG9ydCB7IENvbG9yU3R5bGVJZCB9O1xuIiwiY29uc3QgRWZmZWN0c1N0eWxlSWQgPSB7XG4gIGxpZ2h0VUk6IHtcbiAgICBzaGFkb3dMb3c6IGZpZ21hLmltcG9ydFN0eWxlQnlLZXlBc3luYyhcbiAgICAgIFwiOGNjZWE5ZDUyM2NmOWRjMTNmZWU2OGYzOTJmM2Y5Y2MzMTg3YTQ1N1wiXG4gICAgKSxcbiAgICBzaGFkb3dIaWdoOiBmaWdtYS5pbXBvcnRTdHlsZUJ5S2V5QXN5bmMoXG4gICAgICBcImM2MTI1M2MzOGY2ZDBkOWYzYjMwMmE3N2EzODA3ZTA1MmU5YzNmOTFcIlxuICAgICksXG4gICAgYm9yZGVyVG9wOiBmaWdtYS5pbXBvcnRTdHlsZUJ5S2V5QXN5bmMoXG4gICAgICBcImI0ODcyMmQ2MTY0OGQ3YzY1NjVmZWE2NDAzNjE4NTNlYzUzNjM5ZDFcIlxuICAgICksXG4gICAgYm9yZGVyUmlnaHQ6IGZpZ21hLmltcG9ydFN0eWxlQnlLZXlBc3luYyhcbiAgICAgIFwiMzM5NGZlZThlM2YwOGVkYzdkNjBkNmFhYjI5ZjBmM2Y4ZWUxYjFiMlwiXG4gICAgKSxcbiAgICBib3JkZXJCb3R0b206IGZpZ21hLmltcG9ydFN0eWxlQnlLZXlBc3luYyhcbiAgICAgIFwiZjYzZmZmMzlhZTAyMWYwNzc5YjZkNDZkYzk3NWJjNTc4ZGQzYjdjNVwiXG4gICAgKSxcbiAgICBib3JkZXJMZWZ0OiBmaWdtYS5pbXBvcnRTdHlsZUJ5S2V5QXN5bmMoXG4gICAgICBcIjllZGRkZjc4MGJmNDQ1MTVkOTVlMmE0YmZmNjAzNmUyNDdkYTVhZjVcIlxuICAgICksXG4gICAgYm9yZGVyVG9wQm90dG9tOiBmaWdtYS5pbXBvcnRTdHlsZUJ5S2V5QXN5bmMoXG4gICAgICBcIjIzYzExOTE2ZTZhZjQxM2VmMjIwYWNmY2M0MDE5NWQ4MmZlMzAzYjVcIlxuICAgICksXG4gICAgYm9yZGVyTGVmdFJpZ2h0OiBmaWdtYS5pbXBvcnRTdHlsZUJ5S2V5QXN5bmMoXG4gICAgICBcImE2NDQ3YjcyMTA5MDFiY2E0NWI5OGZlOTE4YWM1NTU0MGZhODM1NGVcIlxuICAgICksXG4gIH0sXG4gIGRhcmtVSToge1xuICAgIHNoYWRvd0xvdzogZmlnbWEuaW1wb3J0U3R5bGVCeUtleUFzeW5jKFxuICAgICAgXCI5ODc2MTkwNGJjYzlkMzhjODFlZTIzZTdiNDMyZDhjOTdlMjlmMGMxXCJcbiAgICApLFxuICAgIHNoYWRvd0hpZ2g6IGZpZ21hLmltcG9ydFN0eWxlQnlLZXlBc3luYyhcbiAgICAgIFwiMjA5YjQ1MWU0ZjY4ZjViZjNhZGUyNGVmMzZhMTBhNjA5Y2RhZTIzOVwiXG4gICAgKSxcbiAgICBib3JkZXJUb3A6IGZpZ21hLmltcG9ydFN0eWxlQnlLZXlBc3luYyhcbiAgICAgIFwiZDM5NGM2ZmY3OGE5NGM5MDBmMzQ0YjUzZjFkN2UwZTdlY2RjY2Q3OVwiXG4gICAgKSxcbiAgICBib3JkZXJSaWdodDogZmlnbWEuaW1wb3J0U3R5bGVCeUtleUFzeW5jKFxuICAgICAgXCI0MzNjNjA1ZjM0ZTlhODhkMDM1MGYyMmZlNThjOWFmYzhmMGU3ZGQ3XCJcbiAgICApLFxuICAgIGJvcmRlckJvdHRvbTogZmlnbWEuaW1wb3J0U3R5bGVCeUtleUFzeW5jKFxuICAgICAgXCIzZTQ2NzQ4MTA1MTA2YjY1NDQwYzI0ZjFiOWU0MWM5OTRmZGFjNDAyXCJcbiAgICApLFxuICAgIGJvcmRlckxlZnQ6IGZpZ21hLmltcG9ydFN0eWxlQnlLZXlBc3luYyhcbiAgICAgIFwiZjg4YjIyN2RkNmQ2YjRmODI4NWIyZTE3OWE3YzdkNDI3N2YwZmIzMVwiXG4gICAgKSxcbiAgICBib3JkZXJUb3BCb3R0b206IGZpZ21hLmltcG9ydFN0eWxlQnlLZXlBc3luYyhcbiAgICAgIFwiYTM0ZjNkMGEyMmMyNDU5Y2ZjNjI2ZjE3OGM0N2Q5YmIxYmE4YjJhNVwiXG4gICAgKSxcbiAgICBib3JkZXJMZWZ0UmlnaHQ6IGZpZ21hLmltcG9ydFN0eWxlQnlLZXlBc3luYyhcbiAgICAgIFwiZmMwNmI4ZTcwMzJmYzliMWZhMDdhZjVlMzkyOTNkZjIxNTBmZjRkY1wiXG4gICAgKSxcbiAgfSxcbn07XG5cbmV4cG9ydCB7IEVmZmVjdHNTdHlsZUlkIH07XG4iXSwic291cmNlUm9vdCI6IiJ9