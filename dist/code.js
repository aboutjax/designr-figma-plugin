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
figma.ui.resize(250, 600);
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
const ColorCheckTraverse = (node) => {
    let strayFill = 0;
    let strayStroke = 0;
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
    if (strayFill > 0 || strayStroke > 0) {
        let errorString = "You have " +
            strayFill +
            " fills and " +
            strayStroke +
            " strokes not using colours from our library!";
        figma.notify(errorString, { timeout: 0.5 });
    }
    else {
        figma.notify("👏 All is good in the hood!", { timeout: 0.5 });
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
      "23e94fceed9accbda4db9c672c43d21b4d286e4c"
    ),
    surface: figma.importStyleByKeyAsync(
      "903e5bf274139eeb9f4968a9ef08ec05eaf0b274"
    ),
    keyline: figma.importStyleByKeyAsync(
      "ee4ddce2e56ad47c4216d5827a283b943a794c78"
    ),
    keylineAlternative: figma.importStyleByKeyAsync(
      "4c23ec3401af47c4044b9157cc65549dabd207d9"
    ),
    accent: figma.importStyleByKeyAsync(
      "cf0c8e88eb65b8049feca60ac83e1de3d3ab6e8b"
    ),
    error: figma.importStyleByKeyAsync(
      "798cb8f898ab2a508a7ba491d899011fda896577"
    ),
    onAccent: figma.importStyleByKeyAsync(
      "5de7892ca442a33bfa46252bd38be6cbf54ab43c"
    ),
    onSurfaceHigh: figma.importStyleByKeyAsync(
      "8f05c63de7f100b2bd8fad7b8bd71489b637c067"
    ),
    onSurfaceMedium: figma.importStyleByKeyAsync(
      "97063a5f62c354e6ae0919d50b68d0badb4a122e"
    ),
    onSurfaceDisabled: figma.importStyleByKeyAsync(
      "a809f75e14fbe6296272e8531106f6cc4c692553"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvZGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlci9jYWxsYmFjay50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVyL2NvbG9yLWNoZWNrLnRzIiwid2VicGFjazovLy8uL3NyYy9oZWxwZXIvZm9yY2UtYXV0by1sYXlvdXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlci9zcGFjaW5nLWNoZWNrLnRzIiwid2VicGFjazovLy8uL3NyYy9oZWxwZXIvc3BhY2luZy1zbGlkZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlci90aGVtZS1zd2FwLnRzIiwid2VicGFjazovLy8uL3NyYy90aGVtZS1zdHlsZXMvY29sb3JzLmpzIiwid2VicGFjazovLy8uL3NyYy90aGVtZS1zdHlsZXMvZWZmZWN0cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsaUJBQWlCO0FBQ2dEO0FBQ2Q7QUFDSjtBQUN1QztBQUNNO0FBQ2pEO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDBFQUFpQjtBQUNyQixDQUFDO0FBQ0Q7QUFDQTtBQUNBLFFBQVEsNEVBQWlCO0FBQ3pCO0FBQ0E7QUFDQSxRQUFRLDZFQUFrQjtBQUMxQjtBQUNBO0FBQ0EsUUFBUSw4RUFBa0I7QUFDMUI7QUFDQTtBQUNBLFFBQVEsa0ZBQW9CO0FBQzVCO0FBQ0E7QUFDQSxRQUFRLHNGQUF1QjtBQUMvQjtBQUNBO0FBQ0EsUUFBUSxvRkFBcUI7QUFDN0I7QUFDQTtBQUNBLFFBQVEsMEVBQVc7QUFDbkI7QUFDQTtBQUNBLFFBQVEsMkZBQXlCO0FBQ2pDO0FBQ0E7QUFDQSxRQUFRLHlGQUF1QjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDckRBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzZCOzs7Ozs7Ozs7Ozs7O0FDcEI3QjtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsbUJBQW1CO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLEtBQU87QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBbUI7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixtQkFBbUI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLGVBQWU7QUFDbEQ7QUFDQTtBQUNBLHFEQUFxRCxlQUFlO0FBQ3BFO0FBQ0E7QUFDOEI7Ozs7Ozs7Ozs7Ozs7QUN0SDlCO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzhEOzs7Ozs7Ozs7Ozs7O0FDVjlEO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNnQzs7Ozs7Ozs7Ozs7OztBQzNLaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLG9DQUFvQztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixrQ0FBa0M7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGlDQUFpQztBQUNyRDtBQUNBO0FBQ3VFOzs7Ozs7Ozs7Ozs7O0FDcEx2RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQWlCLFNBQUksSUFBSSxTQUFJO0FBQzdCO0FBQ0EsbUNBQW1DLE1BQU0sNkJBQTZCLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDakcsa0NBQWtDLE1BQU0saUNBQWlDLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDcEcsK0JBQStCLGlFQUFpRSx1QkFBdUIsRUFBRSw0QkFBNEI7QUFDcko7QUFDQSxLQUFLO0FBQ0w7QUFDc0Q7QUFDRztBQUN6RCwrQ0FBK0MsU0FBSTtBQUNuRCwyQkFBMkIsaUVBQVk7QUFDdkMsOEJBQThCLGlFQUFZO0FBQzFDLDhCQUE4QixpRUFBWTtBQUMxQyx5Q0FBeUMsaUVBQVk7QUFDckQsNkJBQTZCLGlFQUFZO0FBQ3pDLDRCQUE0QixpRUFBWTtBQUN4QywrQkFBK0IsaUVBQVk7QUFDM0Msb0NBQW9DLGlFQUFZO0FBQ2hELHNDQUFzQyxpRUFBWTtBQUNsRCx3Q0FBd0MsaUVBQVk7QUFDcEQsZ0NBQWdDLG9FQUFjO0FBQzlDLGlDQUFpQyxvRUFBYztBQUMvQyxnQ0FBZ0Msb0VBQWM7QUFDOUMsa0NBQWtDLG9FQUFjO0FBQ2hELG1DQUFtQyxvRUFBYztBQUNqRCxpQ0FBaUMsb0VBQWM7QUFDL0Msc0NBQXNDLG9FQUFjO0FBQ3BELHNDQUFzQyxvRUFBYztBQUNwRDtBQUNBO0FBQ0E7QUFDQSxZQUFZLGlFQUFZO0FBQ3hCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxZQUFZLGlFQUFZO0FBQ3hCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxZQUFZLGlFQUFZO0FBQ3hCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxZQUFZLGlFQUFZO0FBQ3hCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxZQUFZLGlFQUFZO0FBQ3hCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGlFQUFZO0FBQ3hCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxZQUFZLGlFQUFZO0FBQ3hCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxZQUFZLGlFQUFZO0FBQ3hCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxZQUFZLGlFQUFZO0FBQ3hCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxZQUFZLGlFQUFZO0FBQ3hCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxZQUFZLGlFQUFZO0FBQ3hCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxZQUFZLGlFQUFZO0FBQ3hCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxZQUFZLGlFQUFZO0FBQ3hCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxZQUFZLGlFQUFZO0FBQ3hCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxZQUFZLGlFQUFZO0FBQ3hCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLG9FQUFjO0FBQzFCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxZQUFZLG9FQUFjO0FBQzFCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxZQUFZLG9FQUFjO0FBQzFCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxZQUFZLG9FQUFjO0FBQzFCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxZQUFZLG9FQUFjO0FBQzFCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxZQUFZLG9FQUFjO0FBQzFCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxZQUFZLG9FQUFjO0FBQzFCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxZQUFZLG9FQUFjO0FBQzFCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsOENBQThDLFNBQUk7QUFDbEQsNEJBQTRCLGlFQUFZO0FBQ3hDLCtCQUErQixpRUFBWTtBQUMzQywrQkFBK0IsaUVBQVk7QUFDM0MsMENBQTBDLGlFQUFZO0FBQ3RELDhCQUE4QixpRUFBWTtBQUMxQyw2QkFBNkIsaUVBQVk7QUFDekMsZ0NBQWdDLGlFQUFZO0FBQzVDLHFDQUFxQyxpRUFBWTtBQUNqRCx1Q0FBdUMsaUVBQVk7QUFDbkQseUNBQXlDLGlFQUFZO0FBQ3JELGlDQUFpQyxvRUFBYztBQUMvQyxrQ0FBa0Msb0VBQWM7QUFDaEQsaUNBQWlDLG9FQUFjO0FBQy9DLG1DQUFtQyxvRUFBYztBQUNqRCxvQ0FBb0Msb0VBQWM7QUFDbEQsa0NBQWtDLG9FQUFjO0FBQ2hELHVDQUF1QyxvRUFBYztBQUNyRCx1Q0FBdUMsb0VBQWM7QUFDckQ7QUFDQTtBQUNBO0FBQ0EsWUFBWSxpRUFBWTtBQUN4QjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsWUFBWSxpRUFBWTtBQUN4QjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsWUFBWSxpRUFBWTtBQUN4QjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsWUFBWSxpRUFBWTtBQUN4QjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsWUFBWSxpRUFBWTtBQUN4QjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxpRUFBWTtBQUN4QjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsWUFBWSxpRUFBWTtBQUN4QjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsWUFBWSxpRUFBWTtBQUN4QjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsWUFBWSxpRUFBWTtBQUN4QjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsWUFBWSxpRUFBWTtBQUN4QjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsWUFBWSxpRUFBWTtBQUN4QjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsWUFBWSxpRUFBWTtBQUN4QjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsWUFBWSxpRUFBWTtBQUN4QjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsWUFBWSxpRUFBWTtBQUN4QjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsWUFBWSxpRUFBWTtBQUN4QjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxvRUFBYztBQUMxQjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsWUFBWSxvRUFBYztBQUMxQjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsWUFBWSxvRUFBYztBQUMxQjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsWUFBWSxvRUFBYztBQUMxQjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsWUFBWSxvRUFBYztBQUMxQjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsWUFBWSxvRUFBYztBQUMxQjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsWUFBWSxvRUFBYztBQUMxQjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsWUFBWSxvRUFBYztBQUMxQjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNnRDs7Ozs7Ozs7Ozs7OztBQzVUakQ7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRXdCOzs7Ozs7Ozs7Ozs7O0FDekV4QjtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFMEIiLCJmaWxlIjoiY29kZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2NvZGUudHNcIik7XG4iLCIvLyBUaGlzIHBsdWdpbiB3aWxsIG9wZW4gYSBtb2RhbCB0byBwcm9tcHQgdGhlIHVzZXIgdG8gZW50ZXIgYSBudW1iZXIsIGFuZFxuLy8gaXQgd2lsbCB0aGVuIGNyZWF0ZSB0aGF0IG1hbnkgcmVjdGFuZ2xlcyBvbiB0aGUgc2NyZWVuLlxuLy8gVGhpcyBmaWxlIGhvbGRzIHRoZSBtYWluIGNvZGUgZm9yIHRoZSBwbHVnaW5zLiBJdCBoYXMgYWNjZXNzIHRvIHRoZSAqZG9jdW1lbnQqLlxuLy8gWW91IGNhbiBhY2Nlc3MgYnJvd3NlciBBUElzIGluIHRoZSA8c2NyaXB0PiB0YWcgaW5zaWRlIFwidWkuaHRtbFwiIHdoaWNoIGhhcyBhXG4vLyBmdWxsIGJyb3dzZXIgZW52aXJvbWVudCAoc2VlIGRvY3VtZW50YXRpb24pLlxuLy8gaW1wb3J0IHsgU3BhY2luZ0RlZmF1bHQgfSBmcm9tIFwiLi9oZWxwZXIvc3BhY2luZy1kZWZhdWx0XCI7XG5pbXBvcnQgeyBMaWdodFRoZW1lVHJhdmVyc2UsIERhcmtUaGVtZVRyYXZlcnNlIH0gZnJvbSBcIi4vaGVscGVyL3RoZW1lLXN3YXBcIjtcbmltcG9ydCB7IFNwYWNpbmdDaGVja1RyYXZlcnNlIH0gZnJvbSBcIi4vaGVscGVyL3NwYWNpbmctY2hlY2tcIjtcbmltcG9ydCB7IENvbG9yQ2hlY2tUcmF2ZXJzZSB9IGZyb20gXCIuL2hlbHBlci9jb2xvci1jaGVja1wiO1xuaW1wb3J0IHsgRm9yY2VBdXRvTGF5b3V0SG9yaXpvbnRhbCwgRm9yY2VBdXRvTGF5b3V0VmVydGljYWwsIH0gZnJvbSBcIi4vaGVscGVyL2ZvcmNlLWF1dG8tbGF5b3V0XCI7XG5pbXBvcnQgeyBQYWRkaW5nSG9yaXpvbnRhbFNsaWRlciwgUGFkZGluZ1ZlcnRpY2FsU2xpZGVyLCBJdGVtU3BhY2luZywgfSBmcm9tIFwiLi9oZWxwZXIvc3BhY2luZy1zbGlkZXJcIjtcbmltcG9ydCB7IG9uU2VsZWN0aW9uQ2hhbmdlIH0gZnJvbSBcIi4vaGVscGVyL2NhbGxiYWNrXCI7XG4vLyBUaGlzIHNob3dzIHRoZSBIVE1MIHBhZ2UgaW4gXCJ1aS5odG1sXCIuXG5maWdtYS5zaG93VUkoX19odG1sX18pO1xuLy8gQ2FsbHMgdG8gXCJwYXJlbnQucG9zdE1lc3NhZ2VcIiBmcm9tIHdpdGhpbiB0aGUgSFRNTCBwYWdlIHdpbGwgdHJpZ2dlciB0aGlzXG4vLyBjYWxsYmFjay4gVGhlIGNhbGxiYWNrIHdpbGwgYmUgcGFzc2VkIHRoZSBcInBsdWdpbk1lc3NhZ2VcIiBwcm9wZXJ0eSBvZiB0aGVcbi8vIHBvc3RlZCBtZXNzYWdlLlxuZmlnbWEudWkucmVzaXplKDI1MCwgNjAwKTtcbmZpZ21hLm9uKFwic2VsZWN0aW9uY2hhbmdlXCIsICgpID0+IHtcbiAgICBsZXQgdGhpc1NlbGVjdGlvbiA9IGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvblswXTtcbiAgICBvblNlbGVjdGlvbkNoYW5nZSh0aGlzU2VsZWN0aW9uKTtcbn0pO1xuZmlnbWEudWkub25tZXNzYWdlID0gKG1zZykgPT4ge1xuICAgIGlmIChtc2cudHlwZSA9PT0gXCJkYXJrLXRoZW1lXCIpIHtcbiAgICAgICAgRGFya1RoZW1lVHJhdmVyc2UoZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uWzBdKTtcbiAgICB9XG4gICAgZWxzZSBpZiAobXNnLnR5cGUgPT09IFwibGlnaHQtdGhlbWVcIikge1xuICAgICAgICBMaWdodFRoZW1lVHJhdmVyc2UoZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uWzBdKTtcbiAgICB9XG4gICAgZWxzZSBpZiAobXNnLnR5cGUgPT09IFwiY29sb3ItY2hlY2tlclwiKSB7XG4gICAgICAgIENvbG9yQ2hlY2tUcmF2ZXJzZShmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb25bMF0pO1xuICAgIH1cbiAgICBlbHNlIGlmIChtc2cudHlwZSA9PT0gXCJzcGFjaW5nLWNoZWNrZXJcIikge1xuICAgICAgICBTcGFjaW5nQ2hlY2tUcmF2ZXJzZShmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb24pO1xuICAgIH1cbiAgICBlbHNlIGlmIChtc2cudHlwZSA9PT0gXCJwYWRkaW5nLWhvcml6b250YWwtc2xpZGVyXCIpIHtcbiAgICAgICAgUGFkZGluZ0hvcml6b250YWxTbGlkZXIoZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uLCBtc2cpO1xuICAgIH1cbiAgICBlbHNlIGlmIChtc2cudHlwZSA9PT0gXCJwYWRkaW5nLXZlcnRpY2FsLXNsaWRlclwiKSB7XG4gICAgICAgIFBhZGRpbmdWZXJ0aWNhbFNsaWRlcihmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb24sIG1zZyk7XG4gICAgfVxuICAgIGVsc2UgaWYgKG1zZy50eXBlID09PSBcIml0ZW0tc3BhY2luZy1zbGlkZXJcIikge1xuICAgICAgICBJdGVtU3BhY2luZyhmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb24sIG1zZyk7XG4gICAgfVxuICAgIGVsc2UgaWYgKG1zZy50eXBlID09PSBcImZvcmNlLWF1dG8tbGF5b3V0LWhvcml6b250YWxcIikge1xuICAgICAgICBGb3JjZUF1dG9MYXlvdXRIb3Jpem9udGFsKGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbik7XG4gICAgfVxuICAgIGVsc2UgaWYgKG1zZy50eXBlID09PSBcImZvcmNlLWF1dG8tbGF5b3V0LXZlcnRpY2FsXCIpIHtcbiAgICAgICAgRm9yY2VBdXRvTGF5b3V0VmVydGljYWwoZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uKTtcbiAgICB9XG4gICAgLy8gTWFrZSBzdXJlIHRvIGNsb3NlIHRoZSBwbHVnaW4gd2hlbiB5b3UncmUgZG9uZS4gT3RoZXJ3aXNlIHRoZSBwbHVnaW4gd2lsbFxuICAgIC8vIGtlZXAgcnVubmluZywgd2hpY2ggc2hvd3MgdGhlIGNhbmNlbCBidXR0b24gYXQgdGhlIGJvdHRvbSBvZiB0aGUgc2NyZWVuLlxuICAgIC8vIGZpZ21hLmNsb3NlUGx1Z2luKCk7XG59O1xuIiwiY29uc3Qgb25TZWxlY3Rpb25DaGFuZ2UgPSAobm9kZSkgPT4ge1xuICAgIGlmIChub2RlKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwieWVzXCIpO1xuICAgICAgICBsZXQgaG9yaXpvbnRhbFBhZGRpbmcgPSBub2RlLmhvcml6b250YWxQYWRkaW5nO1xuICAgICAgICBsZXQgdmVydGljYWxQYWRkaW5nID0gbm9kZS52ZXJ0aWNhbFBhZGRpbmc7XG4gICAgICAgIGxldCBpdGVtU3BhY2luZyA9IG5vZGUuaXRlbVNwYWNpbmc7XG4gICAgICAgIGxldCBsYXlvdXRNb2RlID0gbm9kZS5sYXlvdXRNb2RlO1xuICAgICAgICBsZXQgb2JqID0ge1xuICAgICAgICAgICAgaG9yaXpvbnRhbFBhZGRpbmc6IGhvcml6b250YWxQYWRkaW5nLFxuICAgICAgICAgICAgdmVydGljYWxQYWRkaW5nOiB2ZXJ0aWNhbFBhZGRpbmcsXG4gICAgICAgICAgICBpdGVtU3BhY2luZzogaXRlbVNwYWNpbmcsXG4gICAgICAgICAgICBsYXlvdXRNb2RlOiBsYXlvdXRNb2RlLFxuICAgICAgICB9O1xuICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZShvYmopO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJub1wiKTtcbiAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2UoXCJub3RoaW5nIHNlbGVjdGVkXCIpO1xuICAgIH1cbn07XG5leHBvcnQgeyBvblNlbGVjdGlvbkNoYW5nZSB9O1xuIiwiZnVuY3Rpb24gY2xvbmUodmFsKSB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodmFsKSk7XG59XG4vLyBDaGVjayBvYmplY3QgZXF1YWxpdHkgaGVscGVyXG5mdW5jdGlvbiBpc0VxdWl2YWxlbnQoYSwgYikge1xuICAgIC8vIENyZWF0ZSBhcnJheXMgb2YgcHJvcGVydHkgbmFtZXNcbiAgICB2YXIgYVByb3BzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoYSk7XG4gICAgdmFyIGJQcm9wcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGIpO1xuICAgIC8vIElmIG51bWJlciBvZiBwcm9wZXJ0aWVzIGlzIGRpZmZlcmVudCxcbiAgICAvLyBvYmplY3RzIGFyZSBub3QgZXF1aXZhbGVudFxuICAgIGlmIChhUHJvcHMubGVuZ3RoICE9IGJQcm9wcy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFQcm9wcy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgcHJvcE5hbWUgPSBhUHJvcHNbaV07XG4gICAgICAgIC8vIElmIHZhbHVlcyBvZiBzYW1lIHByb3BlcnR5IGFyZSBub3QgZXF1YWwsXG4gICAgICAgIC8vIG9iamVjdHMgYXJlIG5vdCBlcXVpdmFsZW50XG4gICAgICAgIGlmIChhW3Byb3BOYW1lXSAhPT0gYltwcm9wTmFtZV0pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBJZiB3ZSBtYWRlIGl0IHRoaXMgZmFyLCBvYmplY3RzXG4gICAgLy8gYXJlIGNvbnNpZGVyZWQgZXF1aXZhbGVudFxuICAgIHJldHVybiB0cnVlO1xufVxuY29uc3QgQ29sb3JDaGVja1RyYXZlcnNlID0gKG5vZGUpID0+IHtcbiAgICBsZXQgc3RyYXlGaWxsID0gMDtcbiAgICBsZXQgc3RyYXlTdHJva2UgPSAwO1xuICAgIGlmIChcImZpbGxzXCIgJiYgXCJzdHJva2VzXCIgaW4gbm9kZSkge1xuICAgICAgICAvLyBGaWx0ZXIgd2FybmluZyBzdHJva2UgZnVuY3Rpb25cbiAgICAgICAgbGV0IGZpbHRlcldhcm5pbmdTdHJva2UgPSBmdW5jdGlvbiAoc3Ryb2tlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImNsZWFyIG91dFwiKTtcbiAgICAgICAgICAgIGlmIChzdHJva2UudHlwZSA9PSBcIlNPTElEXCIgJiZcbiAgICAgICAgICAgICAgICBpc0VxdWl2YWxlbnQoc3Ryb2tlLmNvbG9yLCB7IHI6IDEsIGc6IDAsIGI6IDAgfSkpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInllc1wiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIm5vXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBsZXQgb2xkU3Ryb2tlcyA9IGNsb25lKG5vZGUuc3Ryb2tlcyk7XG4gICAgICAgIGxldCBuZXdTdHJva2VzID0gb2xkU3Ryb2tlcy5maWx0ZXIoZmlsdGVyV2FybmluZ1N0cm9rZSk7XG4gICAgICAgIGlmIChub2RlLnN0cm9rZVN0eWxlSWQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgLy8gZG8gbm90aGluZ1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbm9kZS5zdHJva2VzID0gbmV3U3Ryb2tlcztcbiAgICAgICAgfVxuICAgICAgICAvLyAvLyBBZGQgd2FybmluZyBzdHJva2UgZnVuY3Rpb25cbiAgICAgICAgbGV0IGFkZFdhcm5pbmdTdHJva2UgPSBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgbGV0IHN0cm9rZXMgPSBjbG9uZShub2RlLnN0cm9rZXMpO1xuICAgICAgICAgICAgbGV0IHdhcm5pbmdTdHJva2VQcm9wZXJ0eSA9IHtcbiAgICAgICAgICAgICAgICBjb2xvcjogeyByOiAxLCBnOiAwLCBiOiAwIH0sXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICAgICAgICB0eXBlOiBcIlNPTElEXCIsXG4gICAgICAgICAgICAgICAgYmxlbmRNb2RlOiBcIk5PUk1BTFwiLFxuICAgICAgICAgICAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgc3Ryb2tlcy5wdXNoKHdhcm5pbmdTdHJva2VQcm9wZXJ0eSk7XG4gICAgICAgICAgICBub2RlLnN0cm9rZXMgPSBzdHJva2VzO1xuICAgICAgICAgICAgLy8gbm9kZS5zdHJva2VBbGlnbiA9IFwiT1VUU0lERVwiO1xuICAgICAgICB9O1xuICAgICAgICAvLyBDaGVjayBGaWxsXG4gICAgICAgIGlmIChub2RlLmZpbGxzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGlmIChub2RlLmZpbGxTdHlsZUlkLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuKchSBHb29kIGZpbGxcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuKdjCBCYWQgZmlsbFwiKTtcbiAgICAgICAgICAgICAgICAvLyBBZGQgd2FybmluZyBzdHJva2VcbiAgICAgICAgICAgICAgICBhZGRXYXJuaW5nU3Ryb2tlKG5vZGUpO1xuICAgICAgICAgICAgICAgIHN0cmF5RmlsbCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJubyBmaWxsXCIpO1xuICAgICAgICB9XG4gICAgICAgIC8vIENoZWNrIFN0cm9rZVxuICAgICAgICBpZiAobm9kZS5zdHJva2VzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGlmIChub2RlLnN0cm9rZVN0eWxlSWQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi4pyFIEdvb2Qgc3Ryb2tlXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLinYwgQmFkIHN0cm9rZVwiKTtcbiAgICAgICAgICAgICAgICAvLyAvLyBBZGQgd2FybmluZyBzdHJva2VcbiAgICAgICAgICAgICAgICBhZGRXYXJuaW5nU3Ryb2tlKG5vZGUpO1xuICAgICAgICAgICAgICAgIHN0cmF5U3Ryb2tlKys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIm5vIHN0cm9rZVwiKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJObyBmaWxsICYgc3Ryb2tlIHByb3BlcnR5XCIpO1xuICAgIH1cbiAgICBpZiAoXCJjaGlsZHJlblwiIGluIG5vZGUpIHtcbiAgICAgICAgZm9yIChjb25zdCBjaGlsZCBvZiBub2RlLmNoaWxkcmVuKSB7XG4gICAgICAgICAgICBDb2xvckNoZWNrVHJhdmVyc2UoY2hpbGQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICAvLyBkbyBub3RoaW5nXG4gICAgfVxuICAgIGlmIChzdHJheUZpbGwgPiAwIHx8IHN0cmF5U3Ryb2tlID4gMCkge1xuICAgICAgICBsZXQgZXJyb3JTdHJpbmcgPSBcIllvdSBoYXZlIFwiICtcbiAgICAgICAgICAgIHN0cmF5RmlsbCArXG4gICAgICAgICAgICBcIiBmaWxscyBhbmQgXCIgK1xuICAgICAgICAgICAgc3RyYXlTdHJva2UgK1xuICAgICAgICAgICAgXCIgc3Ryb2tlcyBub3QgdXNpbmcgY29sb3VycyBmcm9tIG91ciBsaWJyYXJ5IVwiO1xuICAgICAgICBmaWdtYS5ub3RpZnkoZXJyb3JTdHJpbmcsIHsgdGltZW91dDogMC41IH0pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZmlnbWEubm90aWZ5KFwi8J+RjyBBbGwgaXMgZ29vZCBpbiB0aGUgaG9vZCFcIiwgeyB0aW1lb3V0OiAwLjUgfSk7XG4gICAgfVxufTtcbmV4cG9ydCB7IENvbG9yQ2hlY2tUcmF2ZXJzZSB9O1xuIiwiY29uc3QgRm9yY2VBdXRvTGF5b3V0SG9yaXpvbnRhbCA9IChub2RlcykgPT4ge1xuICAgIGZvciAoY29uc3Qgbm9kZSBvZiBub2Rlcykge1xuICAgICAgICBub2RlLmxheW91dE1vZGUgPSBcIkhPUklaT05UQUxcIjtcbiAgICB9XG59O1xuY29uc3QgRm9yY2VBdXRvTGF5b3V0VmVydGljYWwgPSAobm9kZXMpID0+IHtcbiAgICBmb3IgKGNvbnN0IG5vZGUgb2Ygbm9kZXMpIHtcbiAgICAgICAgbm9kZS5sYXlvdXRNb2RlID0gXCJWRVJUSUNBTFwiO1xuICAgIH1cbn07XG5leHBvcnQgeyBGb3JjZUF1dG9MYXlvdXRIb3Jpem9udGFsLCBGb3JjZUF1dG9MYXlvdXRWZXJ0aWNhbCB9O1xuIiwiY29uc3QgU3BhY2luZ0NoZWNrVHJhdmVyc2UgPSAobm9kZXMpID0+IHtcbiAgICBmb3IgKGNvbnN0IG5vZGUgb2Ygbm9kZXMpIHtcbiAgICAgICAgbGV0IG5hbWUgPSBub2RlLm5hbWU7XG4gICAgICAgIGxldCBwYWRkaW5nQWxsUmVnZXggPSAvXFxiKD86cGEteHhzfHBhLXhzfHBhLXN8cGEtbXxwYS1sfHBhLXhsfHBhLXh4bHxwYS1ub25lKVxcYi9nO1xuICAgICAgICBsZXQgcGFkZGluZ0hvcml6b250YWxSZWdleCA9IC9cXGIoPzpwaC14eHN8cGgteHN8cGgtc3xwaC1tfHBoLWx8cGgteGx8cGgteHhsfHBoLW5vbmUpXFxiL2c7XG4gICAgICAgIGxldCBwYWRkaW5nVmVydGljYWxSZWdleCA9IC9cXGIoPzpwdi14eHN8cHYteHN8cHYtc3xwdi1tfHB2LWx8cHYteGx8cHYteHhsfHB2LW5vbmUpXFxiL2c7XG4gICAgICAgIGxldCBpdGVtU3BhY2luZ0FsbFJlZ2V4ID0gL1xcYig/OnNwLXh4c3xzcC14c3xzcC1zfHNwLW18c3AtbHxzcC14bHxzcC14eGx8c3Atbm9uZSlcXGIvZztcbiAgICAgICAgbGV0IGF1dG9sYXlvdXRSZWdleCA9IC9cXGIoPzp2ZXJ0aWNhbHxob3Jpem9udGFsKVxcYi9nO1xuICAgICAgICBsZXQgbWF0Y2hQYWRkaW5nQWxsID0gbmFtZS5tYXRjaChwYWRkaW5nQWxsUmVnZXgpO1xuICAgICAgICBsZXQgbWF0Y2hQYWRkaW5nSG9yaXpvbnRhbCA9IG5hbWUubWF0Y2gocGFkZGluZ0hvcml6b250YWxSZWdleCk7XG4gICAgICAgIGxldCBtYXRjaFBhZGRpbmdWZXJ0aWNhbCA9IG5hbWUubWF0Y2gocGFkZGluZ1ZlcnRpY2FsUmVnZXgpO1xuICAgICAgICBsZXQgbWF0Y2hJdGVtU3BhY2luZyA9IG5hbWUubWF0Y2goaXRlbVNwYWNpbmdBbGxSZWdleCk7XG4gICAgICAgIGxldCBtYXRjaEF1dG9MYXlvdXREaXJlY3Rpb24gPSBuYW1lLm1hdGNoKGF1dG9sYXlvdXRSZWdleCk7XG4gICAgICAgIGlmIChtYXRjaEF1dG9MYXlvdXREaXJlY3Rpb24gPT0gbnVsbCkge1xuICAgICAgICAgICAgbm9kZS5sYXlvdXRNb2RlID0gXCJWRVJUSUNBTFwiO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJlbmFibGUgYXV0byBsYXlvdXRcIik7XG4gICAgICAgICAgICBzd2l0Y2ggKG1hdGNoQXV0b0xheW91dERpcmVjdGlvblswXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJ2ZXJ0aWNhbFwiOlxuICAgICAgICAgICAgICAgICAgICBub2RlLmxheW91dE1vZGUgPSBcIlZFUlRJQ0FMXCI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJob3Jpem9udGFsXCI6XG4gICAgICAgICAgICAgICAgICAgIG5vZGUubGF5b3V0TW9kZSA9IFwiSE9SSVpPTlRBTFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChtYXRjaEl0ZW1TcGFjaW5nID09IG51bGwpIHtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaGFzIHNwYWNpbmdcIik7XG4gICAgICAgICAgICBzd2l0Y2ggKG1hdGNoSXRlbVNwYWNpbmdbMF0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIFwic3Atbm9uZVwiOlxuICAgICAgICAgICAgICAgICAgICBub2RlLml0ZW1TcGFjaW5nID0gMDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInNwLXh4c1wiOlxuICAgICAgICAgICAgICAgICAgICBub2RlLml0ZW1TcGFjaW5nID0gNDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInNwLXhzXCI6XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuaXRlbVNwYWNpbmcgPSA4O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwic3Atc1wiOlxuICAgICAgICAgICAgICAgICAgICBub2RlLml0ZW1TcGFjaW5nID0gMTY7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJzcC1tXCI6XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuaXRlbVNwYWNpbmcgPSAyNDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInNwLWxcIjpcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5pdGVtU3BhY2luZyA9IDMyO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwic3AteGxcIjpcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5pdGVtU3BhY2luZyA9IDQwO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwic3AteHhsXCI6XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuaXRlbVNwYWNpbmcgPSA0ODtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1hdGNoUGFkZGluZ0FsbCA9PSBudWxsKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIm5vXCIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJoYXMgcGFkZGluZyBhbGxcIik7XG4gICAgICAgICAgICBzd2l0Y2ggKG1hdGNoUGFkZGluZ0FsbFswXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJwYS1ub25lXCI6XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuaG9yaXpvbnRhbFBhZGRpbmcgPSAwO1xuICAgICAgICAgICAgICAgICAgICBub2RlLnZlcnRpY2FsUGFkZGluZyA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJwYS14eHNcIjpcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5ob3Jpem9udGFsUGFkZGluZyA9IDQ7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUudmVydGljYWxQYWRkaW5nID0gNDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInBhLXhzXCI6XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuaG9yaXpvbnRhbFBhZGRpbmcgPSA4O1xuICAgICAgICAgICAgICAgICAgICBub2RlLnZlcnRpY2FsUGFkZGluZyA9IDg7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJwYS1zXCI6XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuaG9yaXpvbnRhbFBhZGRpbmcgPSAxNjtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS52ZXJ0aWNhbFBhZGRpbmcgPSAxNjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInBhLW1cIjpcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5ob3Jpem9udGFsUGFkZGluZyA9IDI0O1xuICAgICAgICAgICAgICAgICAgICBub2RlLnZlcnRpY2FsUGFkZGluZyA9IDI0O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwicGEtbFwiOlxuICAgICAgICAgICAgICAgICAgICBub2RlLmhvcml6b250YWxQYWRkaW5nID0gMzI7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUudmVydGljYWxQYWRkaW5nID0gMzI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJwYS14bFwiOlxuICAgICAgICAgICAgICAgICAgICBub2RlLmhvcml6b250YWxQYWRkaW5nID0gNDA7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUudmVydGljYWxQYWRkaW5nID0gNDA7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJwYS14eGxcIjpcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5ob3Jpem9udGFsUGFkZGluZyA9IDQ4O1xuICAgICAgICAgICAgICAgICAgICBub2RlLnZlcnRpY2FsUGFkZGluZyA9IDQ4O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAobWF0Y2hQYWRkaW5nSG9yaXpvbnRhbCA9PSBudWxsKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIm5vXCIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJoYXMgcGFkZGluZyBob3Jpem9udGFsXCIpO1xuICAgICAgICAgICAgc3dpdGNoIChtYXRjaFBhZGRpbmdIb3Jpem9udGFsWzBdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcInBoLW5vbmVcIjpcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5ob3Jpem9udGFsUGFkZGluZyA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJwaC14eHNcIjpcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5ob3Jpem9udGFsUGFkZGluZyA9IDQ7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJwaC14c1wiOlxuICAgICAgICAgICAgICAgICAgICBub2RlLmhvcml6b250YWxQYWRkaW5nID0gODtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInBoLXNcIjpcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5ob3Jpem9udGFsUGFkZGluZyA9IDE2O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwicGgtbVwiOlxuICAgICAgICAgICAgICAgICAgICBub2RlLmhvcml6b250YWxQYWRkaW5nID0gMjQ7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJwaC1sXCI6XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuaG9yaXpvbnRhbFBhZGRpbmcgPSAzMjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInBoLXhsXCI6XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuaG9yaXpvbnRhbFBhZGRpbmcgPSA0MDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInBoLXh4bFwiOlxuICAgICAgICAgICAgICAgICAgICBub2RlLmhvcml6b250YWxQYWRkaW5nID0gNDg7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChtYXRjaFBhZGRpbmdWZXJ0aWNhbCA9PSBudWxsKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIm5vXCIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJoYXMgcGFkZGluZyBob3Jpem9udGFsXCIpO1xuICAgICAgICAgICAgc3dpdGNoIChtYXRjaFBhZGRpbmdWZXJ0aWNhbFswXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJwdi1ub25lXCI6XG4gICAgICAgICAgICAgICAgICAgIG5vZGUudmVydGljYWxQYWRkaW5nID0gMDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInB2LXh4c1wiOlxuICAgICAgICAgICAgICAgICAgICBub2RlLnZlcnRpY2FsUGFkZGluZyA9IDQ7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJwdi14c1wiOlxuICAgICAgICAgICAgICAgICAgICBub2RlLnZlcnRpY2FsUGFkZGluZyA9IDg7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJwdi1zXCI6XG4gICAgICAgICAgICAgICAgICAgIG5vZGUudmVydGljYWxQYWRkaW5nID0gMTY7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJwdi1tXCI6XG4gICAgICAgICAgICAgICAgICAgIG5vZGUudmVydGljYWxQYWRkaW5nID0gMjQ7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJwdi1sXCI6XG4gICAgICAgICAgICAgICAgICAgIG5vZGUudmVydGljYWxQYWRkaW5nID0gMzI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJwdi14bFwiOlxuICAgICAgICAgICAgICAgICAgICBub2RlLnZlcnRpY2FsUGFkZGluZyA9IDQwO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwicHYteHhsXCI6XG4gICAgICAgICAgICAgICAgICAgIG5vZGUudmVydGljYWxQYWRkaW5nID0gNDg7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIFNwYWNpbmdDaGVja1RyYXZlcnNlKG5vZGUpO1xuICAgIH1cbiAgICAvLyBpZiAoXCJjaGlsZHJlblwiIGluIG5vZGVzKSB7XG4gICAgLy8gICBmb3IgKGNvbnN0IGNoaWxkIG9mIG5vZGUuY2hpbGRyZW4pIHtcbiAgICAvLyAgICAgU3BhY2luZ0NoZWNrVHJhdmVyc2UoY2hpbGQpO1xuICAgIC8vICAgfVxuICAgIC8vIH0gZWxzZSB7XG4gICAgLy8gICAvLyBkbyBub3RoaW5nXG4gICAgLy8gfVxufTtcbmV4cG9ydCB7IFNwYWNpbmdDaGVja1RyYXZlcnNlIH07XG4iLCJmdW5jdGlvbiBjbG9uZSh2YWwpIHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh2YWwpKTtcbn1cbmxldCBwaE5hbWUgPSBudWxsO1xubGV0IHB2TmFtZSA9IG51bGw7XG5sZXQgc3BOYW1lID0gbnVsbDtcbmxldCBuYW1lUHJvcCA9IHtcbiAgICBob3Jpem9udGFsOiBcInBoLW5vbmVcIixcbiAgICB2ZXJ0aWNhbDogXCJwdi1ub25lXCIsXG4gICAgc3BhY2luZzogXCJzcC1ub25lXCIsXG59O1xuZnVuY3Rpb24gdXBkYXRlTmFtZSh2YWwsIG5vZGUpIHtcbiAgICBpZiAodmFsLnR5cGUgPT09IFwiaG9yaXpvbnRhbFwiKSB7XG4gICAgICAgIG5hbWVQcm9wLmhvcml6b250YWwgPSB2YWwudmFsdWU7XG4gICAgfVxuICAgIGVsc2UgaWYgKHZhbC50eXBlID09PSBcInZlcnRpY2FsXCIpIHtcbiAgICAgICAgbmFtZVByb3AudmVydGljYWwgPSB2YWwudmFsdWU7XG4gICAgfVxuICAgIGVsc2UgaWYgKHZhbC50eXBlID09PSBcInNwYWNpbmdcIikge1xuICAgICAgICBuYW1lUHJvcC5zcGFjaW5nID0gdmFsLnZhbHVlO1xuICAgIH1cbiAgICBub2RlLm5hbWUgPVxuICAgICAgICBuYW1lUHJvcC5ob3Jpem9udGFsICsgXCIgXCIgKyBuYW1lUHJvcC52ZXJ0aWNhbCArIFwiIFwiICsgbmFtZVByb3Auc3BhY2luZztcbn1cbmNvbnN0IFBhZGRpbmdIb3Jpem9udGFsU2xpZGVyID0gKG5vZGVzLCBtc2cpID0+IHtcbiAgICBsZXQgc2xpZGVyVmFsdWUgPSBtc2cuc2xpZGVyVmFsdWU7XG4gICAgbGV0IHNwYWNpbmcgPSBudWxsO1xuICAgIGxldCBzcGFjaW5nTmFtZSA9IG51bGw7XG4gICAgc3dpdGNoIChzbGlkZXJWYWx1ZSkge1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgc3BhY2luZyA9IDA7XG4gICAgICAgICAgICBzcGFjaW5nTmFtZSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCIxXCI6XG4gICAgICAgICAgICBzcGFjaW5nID0gNDtcbiAgICAgICAgICAgIHNwYWNpbmdOYW1lID0gXCJ4eHNcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiMlwiOlxuICAgICAgICAgICAgc3BhY2luZyA9IDg7XG4gICAgICAgICAgICBzcGFjaW5nTmFtZSA9IFwieHNcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiM1wiOlxuICAgICAgICAgICAgc3BhY2luZyA9IDE2O1xuICAgICAgICAgICAgc3BhY2luZ05hbWUgPSBcInNcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiNFwiOlxuICAgICAgICAgICAgc3BhY2luZyA9IDI0O1xuICAgICAgICAgICAgc3BhY2luZ05hbWUgPSBcIm1cIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiNVwiOlxuICAgICAgICAgICAgc3BhY2luZyA9IDMyO1xuICAgICAgICAgICAgc3BhY2luZ05hbWUgPSBcImxcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiNlwiOlxuICAgICAgICAgICAgc3BhY2luZyA9IDQwO1xuICAgICAgICAgICAgc3BhY2luZ05hbWUgPSBcInhsXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIjdcIjpcbiAgICAgICAgICAgIHNwYWNpbmcgPSA0ODtcbiAgICAgICAgICAgIHNwYWNpbmdOYW1lID0gXCJ4eGxcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IG5vZGUgb2Ygbm9kZXMpIHtcbiAgICAgICAgaWYgKG5vZGUpIHtcbiAgICAgICAgICAgIHBoTmFtZSA9IFwicGgtXCIgKyBzcGFjaW5nTmFtZTtcbiAgICAgICAgICAgIHVwZGF0ZU5hbWUoeyB0eXBlOiBcImhvcml6b250YWxcIiwgdmFsdWU6IHBoTmFtZSB9LCBub2RlKTtcbiAgICAgICAgICAgIGlmIChub2RlLnR5cGUgPT09IFwiR1JPVVBcIikge1xuICAgICAgICAgICAgICAgIG5vZGUuaG9yaXpvbnRhbFBhZGRpbmcgPSBzcGFjaW5nO1xuICAgICAgICAgICAgICAgIG5vZGUubGF5b3V0TW9kZSA9IFwiTk9ORVwiO1xuICAgICAgICAgICAgICAgIGlmIChcImNoaWxkcmVuXCIgaW4gbm9kZSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgZ3JvdXAgPSBub2RlLmNoaWxkcmVuWzBdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGxldCBzZXRBdXRvTGF5b3V0ID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgICAgICAgICBub2RlLmhvcml6b250YWxQYWRkaW5nID0gc3BhY2luZztcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiByZXNvbHZlKFwiZG9uZVwiKSwgNSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59O1xuY29uc3QgUGFkZGluZ1ZlcnRpY2FsU2xpZGVyID0gKG5vZGVzLCBtc2cpID0+IHtcbiAgICBsZXQgc2xpZGVyVmFsdWUgPSBtc2cuc2xpZGVyVmFsdWU7XG4gICAgbGV0IHNwYWNpbmcgPSBudWxsO1xuICAgIGxldCBzcGFjaW5nTmFtZSA9IG51bGw7XG4gICAgc3dpdGNoIChzbGlkZXJWYWx1ZSkge1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgc3BhY2luZyA9IDA7XG4gICAgICAgICAgICBzcGFjaW5nTmFtZSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCIxXCI6XG4gICAgICAgICAgICBzcGFjaW5nID0gNDtcbiAgICAgICAgICAgIHNwYWNpbmdOYW1lID0gXCJ4eHNcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiMlwiOlxuICAgICAgICAgICAgc3BhY2luZyA9IDg7XG4gICAgICAgICAgICBzcGFjaW5nTmFtZSA9IFwieHNcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiM1wiOlxuICAgICAgICAgICAgc3BhY2luZyA9IDE2O1xuICAgICAgICAgICAgc3BhY2luZ05hbWUgPSBcInNcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiNFwiOlxuICAgICAgICAgICAgc3BhY2luZyA9IDI0O1xuICAgICAgICAgICAgc3BhY2luZ05hbWUgPSBcIm1cIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiNVwiOlxuICAgICAgICAgICAgc3BhY2luZyA9IDMyO1xuICAgICAgICAgICAgc3BhY2luZ05hbWUgPSBcImxcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiNlwiOlxuICAgICAgICAgICAgc3BhY2luZyA9IDQwO1xuICAgICAgICAgICAgc3BhY2luZ05hbWUgPSBcInhsXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIjdcIjpcbiAgICAgICAgICAgIHNwYWNpbmcgPSA0ODtcbiAgICAgICAgICAgIHNwYWNpbmdOYW1lID0gXCJ4eGxcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IG5vZGUgb2Ygbm9kZXMpIHtcbiAgICAgICAgaWYgKG5vZGUpIHtcbiAgICAgICAgICAgIHB2TmFtZSA9IFwicHYtXCIgKyBzcGFjaW5nTmFtZTtcbiAgICAgICAgICAgIHVwZGF0ZU5hbWUoeyB0eXBlOiBcInZlcnRpY2FsXCIsIHZhbHVlOiBwdk5hbWUgfSwgbm9kZSk7XG4gICAgICAgICAgICBpZiAobm9kZS50eXBlID09PSBcIkdST1VQXCIpIHtcbiAgICAgICAgICAgICAgICBub2RlLnZlcnRpY2FsUGFkZGluZyA9IHNwYWNpbmc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBsZXQgc2V0QXV0b0xheW91dCA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS52ZXJ0aWNhbFBhZGRpbmcgPSBzcGFjaW5nO1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHJlc29sdmUoXCJkb25lXCIpLCA1KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn07XG5jb25zdCBJdGVtU3BhY2luZyA9IChub2RlcywgbXNnKSA9PiB7XG4gICAgbGV0IHNsaWRlclZhbHVlID0gbXNnLnNsaWRlclZhbHVlO1xuICAgIGxldCBzcGFjaW5nID0gbnVsbDtcbiAgICBsZXQgc3BhY2luZ05hbWUgPSBudWxsO1xuICAgIHN3aXRjaCAoc2xpZGVyVmFsdWUpIHtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHNwYWNpbmcgPSAwO1xuICAgICAgICAgICAgc3BhY2luZ05hbWUgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiMVwiOlxuICAgICAgICAgICAgc3BhY2luZyA9IDQ7XG4gICAgICAgICAgICBzcGFjaW5nTmFtZSA9IFwieHhzXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIjJcIjpcbiAgICAgICAgICAgIHNwYWNpbmcgPSA4O1xuICAgICAgICAgICAgc3BhY2luZ05hbWUgPSBcInhzXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIjNcIjpcbiAgICAgICAgICAgIHNwYWNpbmcgPSAxNjtcbiAgICAgICAgICAgIHNwYWNpbmdOYW1lID0gXCJzXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIjRcIjpcbiAgICAgICAgICAgIHNwYWNpbmcgPSAyNDtcbiAgICAgICAgICAgIHNwYWNpbmdOYW1lID0gXCJtXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIjVcIjpcbiAgICAgICAgICAgIHNwYWNpbmcgPSAzMjtcbiAgICAgICAgICAgIHNwYWNpbmdOYW1lID0gXCJsXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIjZcIjpcbiAgICAgICAgICAgIHNwYWNpbmcgPSA0MDtcbiAgICAgICAgICAgIHNwYWNpbmdOYW1lID0gXCJ4bFwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCI3XCI6XG4gICAgICAgICAgICBzcGFjaW5nID0gNDg7XG4gICAgICAgICAgICBzcGFjaW5nTmFtZSA9IFwieHhsXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG4gICAgZm9yIChjb25zdCBub2RlIG9mIG5vZGVzKSB7XG4gICAgICAgIG5vZGUuaXRlbVNwYWNpbmcgPSBzcGFjaW5nO1xuICAgICAgICBzcE5hbWUgPSBcInNwLVwiICsgc3BhY2luZ05hbWU7XG4gICAgICAgIHVwZGF0ZU5hbWUoeyB0eXBlOiBcInNwYWNpbmdcIiwgdmFsdWU6IHNwTmFtZSB9LCBub2RlKTtcbiAgICB9XG59O1xuZXhwb3J0IHsgUGFkZGluZ0hvcml6b250YWxTbGlkZXIsIFBhZGRpbmdWZXJ0aWNhbFNsaWRlciwgSXRlbVNwYWNpbmcgfTtcbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IHsgQ29sb3JTdHlsZUlkIH0gZnJvbSBcIi4uL3RoZW1lLXN0eWxlcy9jb2xvcnNcIjtcbmltcG9ydCB7IEVmZmVjdHNTdHlsZUlkIH0gZnJvbSBcIi4uL3RoZW1lLXN0eWxlcy9lZmZlY3RzXCI7XG5jb25zdCBMaWdodFRoZW1lVHJhdmVyc2UgPSAobm9kZSkgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIGxldCBkYXJrVUlCb2R5ID0geWllbGQgQ29sb3JTdHlsZUlkLmRhcmtVSS5ib2R5O1xuICAgIGxldCBkYXJrVUlTdXJmYWNlID0geWllbGQgQ29sb3JTdHlsZUlkLmRhcmtVSS5zdXJmYWNlO1xuICAgIGxldCBkYXJrVUlLZXlsaW5lID0geWllbGQgQ29sb3JTdHlsZUlkLmRhcmtVSS5rZXlsaW5lO1xuICAgIGxldCBkYXJrVUlLZXlsaW5lQWx0ZXJuYXRpdmUgPSB5aWVsZCBDb2xvclN0eWxlSWQuZGFya1VJLmtleWxpbmVBbHRlcm5hdGl2ZTtcbiAgICBsZXQgZGFya1VJQWNjZW50ID0geWllbGQgQ29sb3JTdHlsZUlkLmRhcmtVSS5hY2NlbnQ7XG4gICAgbGV0IGRhcmtVSUVycm9yID0geWllbGQgQ29sb3JTdHlsZUlkLmRhcmtVSS5lcnJvcjtcbiAgICBsZXQgZGFya1VJT25BY2NlbnQgPSB5aWVsZCBDb2xvclN0eWxlSWQuZGFya1VJLm9uQWNjZW50O1xuICAgIGxldCBkYXJrVUlPblN1cmZhY2VIaWdoID0geWllbGQgQ29sb3JTdHlsZUlkLmRhcmtVSS5vblN1cmZhY2VIaWdoO1xuICAgIGxldCBkYXJrVUlPblN1cmZhY2VNZWRpdW0gPSB5aWVsZCBDb2xvclN0eWxlSWQuZGFya1VJLm9uU3VyZmFjZU1lZGl1bTtcbiAgICBsZXQgZGFya1VJT25TdXJmYWNlRGlzYWJsZWQgPSB5aWVsZCBDb2xvclN0eWxlSWQuZGFya1VJLm9uU3VyZmFjZURpc2FibGVkO1xuICAgIGxldCBkYXJrVUlTaGFkb3dMb3cgPSB5aWVsZCBFZmZlY3RzU3R5bGVJZC5kYXJrVUkuc2hhZG93TG93O1xuICAgIGxldCBkYXJrVUlTaGFkb3dIaWdoID0geWllbGQgRWZmZWN0c1N0eWxlSWQuZGFya1VJLnNoYWRvd0hpZ2g7XG4gICAgbGV0IGRhcmtVSUJvcmRlclRvcCA9IHlpZWxkIEVmZmVjdHNTdHlsZUlkLmRhcmtVSS5ib3JkZXJUb3A7XG4gICAgbGV0IGRhcmtVSUJvcmRlclJpZ2h0ID0geWllbGQgRWZmZWN0c1N0eWxlSWQuZGFya1VJLmJvcmRlclJpZ2h0O1xuICAgIGxldCBkYXJrVUlCb3JkZXJCb3R0b20gPSB5aWVsZCBFZmZlY3RzU3R5bGVJZC5kYXJrVUkuYm9yZGVyQm90dG9tO1xuICAgIGxldCBkYXJrVUlCb3JkZXJMZWZ0ID0geWllbGQgRWZmZWN0c1N0eWxlSWQuZGFya1VJLmJvcmRlckxlZnQ7XG4gICAgbGV0IGRhcmtVSUJvcmRlclRvcEJvdHRvbSA9IHlpZWxkIEVmZmVjdHNTdHlsZUlkLmRhcmtVSS5ib3JkZXJUb3BCb3R0b207XG4gICAgbGV0IGRhcmtVSUJvcmRlckxlZnRSaWdodCA9IHlpZWxkIEVmZmVjdHNTdHlsZUlkLmRhcmtVSS5ib3JkZXJMZWZ0UmlnaHQ7XG4gICAgLy8gU3Ryb2tlc1xuICAgIHN3aXRjaCAobm9kZS5zdHJva2VTdHlsZUlkKSB7XG4gICAgICAgIGNhc2UgZGFya1VJQWNjZW50LmlkOlxuICAgICAgICAgICAgQ29sb3JTdHlsZUlkLmxpZ2h0VUkuYWNjZW50LnRoZW4oKHJlc3ApID0+IHtcbiAgICAgICAgICAgICAgICBub2RlLnN0cm9rZVN0eWxlSWQgPSByZXNwLmlkO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBkYXJrVUlFcnJvci5pZDpcbiAgICAgICAgICAgIENvbG9yU3R5bGVJZC5saWdodFVJLmVycm9yLnRoZW4oKHJlc3ApID0+IHtcbiAgICAgICAgICAgICAgICBub2RlLnN0cm9rZVN0eWxlSWQgPSByZXNwLmlkO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBkYXJrVUlLZXlsaW5lLmlkOlxuICAgICAgICAgICAgQ29sb3JTdHlsZUlkLmxpZ2h0VUkua2V5bGluZS50aGVuKChyZXNwKSA9PiB7XG4gICAgICAgICAgICAgICAgbm9kZS5zdHJva2VTdHlsZUlkID0gcmVzcC5pZDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgZGFya1VJS2V5bGluZUFsdGVybmF0aXZlLmlkOlxuICAgICAgICAgICAgQ29sb3JTdHlsZUlkLmxpZ2h0VUkua2V5bGluZUFsdGVybmF0aXZlLnRoZW4oKHJlc3ApID0+IHtcbiAgICAgICAgICAgICAgICBub2RlLnN0cm9rZVN0eWxlSWQgPSByZXNwLmlkO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBkYXJrVUlBY2NlbnQuaWQ6XG4gICAgICAgICAgICBDb2xvclN0eWxlSWQubGlnaHRVSS5hY2NlbnQudGhlbigocmVzcCkgPT4ge1xuICAgICAgICAgICAgICAgIG5vZGUuc3Ryb2tlU3R5bGVJZCA9IHJlc3AuaWQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICAvLyBGaWxsc1xuICAgIHN3aXRjaCAobm9kZS5maWxsU3R5bGVJZCkge1xuICAgICAgICBjYXNlIGRhcmtVSUJvZHkuaWQ6XG4gICAgICAgICAgICBDb2xvclN0eWxlSWQubGlnaHRVSS5ib2R5LnRoZW4oKHJlc3ApID0+IHtcbiAgICAgICAgICAgICAgICBub2RlLmZpbGxTdHlsZUlkID0gcmVzcC5pZDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgZGFya1VJU3VyZmFjZS5pZDpcbiAgICAgICAgICAgIENvbG9yU3R5bGVJZC5saWdodFVJLnN1cmZhY2UudGhlbigocmVzcCkgPT4ge1xuICAgICAgICAgICAgICAgIG5vZGUuZmlsbFN0eWxlSWQgPSByZXNwLmlkO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBkYXJrVUlLZXlsaW5lLmlkOlxuICAgICAgICAgICAgQ29sb3JTdHlsZUlkLmxpZ2h0VUkua2V5bGluZS50aGVuKChyZXNwKSA9PiB7XG4gICAgICAgICAgICAgICAgbm9kZS5maWxsU3R5bGVJZCA9IHJlc3AuaWQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIGRhcmtVSUtleWxpbmVBbHRlcm5hdGl2ZS5pZDpcbiAgICAgICAgICAgIENvbG9yU3R5bGVJZC5saWdodFVJLmtleWxpbmVBbHRlcm5hdGl2ZS50aGVuKChyZXNwKSA9PiB7XG4gICAgICAgICAgICAgICAgbm9kZS5maWxsU3R5bGVJZCA9IHJlc3AuaWQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIGRhcmtVSUFjY2VudC5pZDpcbiAgICAgICAgICAgIENvbG9yU3R5bGVJZC5saWdodFVJLmFjY2VudC50aGVuKChyZXNwKSA9PiB7XG4gICAgICAgICAgICAgICAgbm9kZS5maWxsU3R5bGVJZCA9IHJlc3AuaWQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIGRhcmtVSUVycm9yLmlkOlxuICAgICAgICAgICAgQ29sb3JTdHlsZUlkLmxpZ2h0VUkuZXJyb3IudGhlbigocmVzcCkgPT4ge1xuICAgICAgICAgICAgICAgIG5vZGUuZmlsbFN0eWxlSWQgPSByZXNwLmlkO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBkYXJrVUlPbkFjY2VudC5pZDpcbiAgICAgICAgICAgIENvbG9yU3R5bGVJZC5saWdodFVJLm9uQWNjZW50LnRoZW4oKHJlc3ApID0+IHtcbiAgICAgICAgICAgICAgICBub2RlLmZpbGxTdHlsZUlkID0gcmVzcC5pZDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgZGFya1VJT25TdXJmYWNlSGlnaC5pZDpcbiAgICAgICAgICAgIENvbG9yU3R5bGVJZC5saWdodFVJLm9uU3VyZmFjZUhpZ2gudGhlbigocmVzcCkgPT4ge1xuICAgICAgICAgICAgICAgIG5vZGUuZmlsbFN0eWxlSWQgPSByZXNwLmlkO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBkYXJrVUlPblN1cmZhY2VNZWRpdW0uaWQ6XG4gICAgICAgICAgICBDb2xvclN0eWxlSWQubGlnaHRVSS5vblN1cmZhY2VNZWRpdW0udGhlbigocmVzcCkgPT4ge1xuICAgICAgICAgICAgICAgIG5vZGUuZmlsbFN0eWxlSWQgPSByZXNwLmlkO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBkYXJrVUlPblN1cmZhY2VEaXNhYmxlZC5pZDpcbiAgICAgICAgICAgIENvbG9yU3R5bGVJZC5saWdodFVJLm9uU3VyZmFjZURpc2FibGVkLnRoZW4oKHJlc3ApID0+IHtcbiAgICAgICAgICAgICAgICBub2RlLmZpbGxTdHlsZUlkID0gcmVzcC5pZDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIC8vIEVmZmVjdHNcbiAgICBzd2l0Y2ggKG5vZGUuZWZmZWN0U3R5bGVJZCkge1xuICAgICAgICBjYXNlIGRhcmtVSVNoYWRvd0xvdy5pZDpcbiAgICAgICAgICAgIEVmZmVjdHNTdHlsZUlkLmxpZ2h0VUkuc2hhZG93TG93LnRoZW4oKHJlc3ApID0+IHtcbiAgICAgICAgICAgICAgICBub2RlLmVmZmVjdFN0eWxlSWQgPSByZXNwLmlkO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBkYXJrVUlTaGFkb3dIaWdoLmlkOlxuICAgICAgICAgICAgRWZmZWN0c1N0eWxlSWQubGlnaHRVSS5zaGFkb3dIaWdoLnRoZW4oKHJlc3ApID0+IHtcbiAgICAgICAgICAgICAgICBub2RlLmVmZmVjdFN0eWxlSWQgPSByZXNwLmlkO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBkYXJrVUlCb3JkZXJUb3AuaWQ6XG4gICAgICAgICAgICBFZmZlY3RzU3R5bGVJZC5saWdodFVJLmJvcmRlclRvcC50aGVuKChyZXNwKSA9PiB7XG4gICAgICAgICAgICAgICAgbm9kZS5lZmZlY3RTdHlsZUlkID0gcmVzcC5pZDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgZGFya1VJQm9yZGVyUmlnaHQuaWQ6XG4gICAgICAgICAgICBFZmZlY3RzU3R5bGVJZC5saWdodFVJLmJvcmRlclJpZ2h0LnRoZW4oKHJlc3ApID0+IHtcbiAgICAgICAgICAgICAgICBub2RlLmVmZmVjdFN0eWxlSWQgPSByZXNwLmlkO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBkYXJrVUlCb3JkZXJCb3R0b20uaWQ6XG4gICAgICAgICAgICBFZmZlY3RzU3R5bGVJZC5saWdodFVJLmJvcmRlckJvdHRvbS50aGVuKChyZXNwKSA9PiB7XG4gICAgICAgICAgICAgICAgbm9kZS5lZmZlY3RTdHlsZUlkID0gcmVzcC5pZDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgZGFya1VJQm9yZGVyTGVmdC5pZDpcbiAgICAgICAgICAgIEVmZmVjdHNTdHlsZUlkLmxpZ2h0VUkuYm9yZGVyTGVmdC50aGVuKChyZXNwKSA9PiB7XG4gICAgICAgICAgICAgICAgbm9kZS5lZmZlY3RTdHlsZUlkID0gcmVzcC5pZDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgZGFya1VJQm9yZGVyVG9wQm90dG9tLmlkOlxuICAgICAgICAgICAgRWZmZWN0c1N0eWxlSWQubGlnaHRVSS5ib3JkZXJUb3BCb3R0b20udGhlbigocmVzcCkgPT4ge1xuICAgICAgICAgICAgICAgIG5vZGUuZWZmZWN0U3R5bGVJZCA9IHJlc3AuaWQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIGRhcmtVSUJvcmRlckxlZnRSaWdodC5pZDpcbiAgICAgICAgICAgIEVmZmVjdHNTdHlsZUlkLmxpZ2h0VUkuYm9yZGVyTGVmdFJpZ2h0LnRoZW4oKHJlc3ApID0+IHtcbiAgICAgICAgICAgICAgICBub2RlLmVmZmVjdFN0eWxlSWQgPSByZXNwLmlkO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG4gICAgLy8gZG8gbm90aGluZyBiZWxvd1xuICAgIGlmIChcImNoaWxkcmVuXCIgaW4gbm9kZSkge1xuICAgICAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIG5vZGUuY2hpbGRyZW4pIHtcbiAgICAgICAgICAgIExpZ2h0VGhlbWVUcmF2ZXJzZShjaGlsZCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIC8vIGRvIG5vdGhpbmdcbiAgICB9XG59KTtcbmNvbnN0IERhcmtUaGVtZVRyYXZlcnNlID0gKG5vZGUpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICBsZXQgbGlnaHRVSUJvZHkgPSB5aWVsZCBDb2xvclN0eWxlSWQubGlnaHRVSS5ib2R5O1xuICAgIGxldCBsaWdodFVJU3VyZmFjZSA9IHlpZWxkIENvbG9yU3R5bGVJZC5saWdodFVJLnN1cmZhY2U7XG4gICAgbGV0IGxpZ2h0VUlLZXlsaW5lID0geWllbGQgQ29sb3JTdHlsZUlkLmxpZ2h0VUkua2V5bGluZTtcbiAgICBsZXQgbGlnaHRVSUtleWxpbmVBbHRlcm5hdGl2ZSA9IHlpZWxkIENvbG9yU3R5bGVJZC5saWdodFVJLmtleWxpbmVBbHRlcm5hdGl2ZTtcbiAgICBsZXQgbGlnaHRVSUFjY2VudCA9IHlpZWxkIENvbG9yU3R5bGVJZC5saWdodFVJLmFjY2VudDtcbiAgICBsZXQgbGlnaHRVSUVycm9yID0geWllbGQgQ29sb3JTdHlsZUlkLmxpZ2h0VUkuZXJyb3I7XG4gICAgbGV0IGxpZ2h0VUlPbkFjY2VudCA9IHlpZWxkIENvbG9yU3R5bGVJZC5saWdodFVJLm9uQWNjZW50O1xuICAgIGxldCBsaWdodFVJT25TdXJmYWNlSGlnaCA9IHlpZWxkIENvbG9yU3R5bGVJZC5saWdodFVJLm9uU3VyZmFjZUhpZ2g7XG4gICAgbGV0IGxpZ2h0VUlPblN1cmZhY2VNZWRpdW0gPSB5aWVsZCBDb2xvclN0eWxlSWQubGlnaHRVSS5vblN1cmZhY2VNZWRpdW07XG4gICAgbGV0IGxpZ2h0VUlPblN1cmZhY2VEaXNhYmxlZCA9IHlpZWxkIENvbG9yU3R5bGVJZC5saWdodFVJLm9uU3VyZmFjZURpc2FibGVkO1xuICAgIGxldCBsaWdodFVJU2hhZG93TG93ID0geWllbGQgRWZmZWN0c1N0eWxlSWQubGlnaHRVSS5zaGFkb3dMb3c7XG4gICAgbGV0IGxpZ2h0VUlTaGFkb3dIaWdoID0geWllbGQgRWZmZWN0c1N0eWxlSWQubGlnaHRVSS5zaGFkb3dIaWdoO1xuICAgIGxldCBsaWdodFVJQm9yZGVyVG9wID0geWllbGQgRWZmZWN0c1N0eWxlSWQubGlnaHRVSS5ib3JkZXJUb3A7XG4gICAgbGV0IGxpZ2h0VUlCb3JkZXJSaWdodCA9IHlpZWxkIEVmZmVjdHNTdHlsZUlkLmxpZ2h0VUkuYm9yZGVyUmlnaHQ7XG4gICAgbGV0IGxpZ2h0VUlCb3JkZXJCb3R0b20gPSB5aWVsZCBFZmZlY3RzU3R5bGVJZC5saWdodFVJLmJvcmRlckJvdHRvbTtcbiAgICBsZXQgbGlnaHRVSUJvcmRlckxlZnQgPSB5aWVsZCBFZmZlY3RzU3R5bGVJZC5saWdodFVJLmJvcmRlckxlZnQ7XG4gICAgbGV0IGxpZ2h0VUlCb3JkZXJUb3BCb3R0b20gPSB5aWVsZCBFZmZlY3RzU3R5bGVJZC5saWdodFVJLmJvcmRlclRvcEJvdHRvbTtcbiAgICBsZXQgbGlnaHRVSUJvcmRlckxlZnRSaWdodCA9IHlpZWxkIEVmZmVjdHNTdHlsZUlkLmxpZ2h0VUkuYm9yZGVyTGVmdFJpZ2h0O1xuICAgIC8vIFN0cm9rZVxuICAgIHN3aXRjaCAobm9kZS5zdHJva2VTdHlsZUlkKSB7XG4gICAgICAgIGNhc2UgbGlnaHRVSUFjY2VudC5pZDpcbiAgICAgICAgICAgIENvbG9yU3R5bGVJZC5kYXJrVUkuYWNjZW50LnRoZW4oKHJlc3ApID0+IHtcbiAgICAgICAgICAgICAgICBub2RlLnN0cm9rZVN0eWxlSWQgPSByZXNwLmlkO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBsaWdodFVJRXJyb3IuaWQ6XG4gICAgICAgICAgICBDb2xvclN0eWxlSWQuZGFya1VJLmVycm9yLnRoZW4oKHJlc3ApID0+IHtcbiAgICAgICAgICAgICAgICBub2RlLnN0cm9rZVN0eWxlSWQgPSByZXNwLmlkO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBsaWdodFVJS2V5bGluZS5pZDpcbiAgICAgICAgICAgIENvbG9yU3R5bGVJZC5kYXJrVUkua2V5bGluZS50aGVuKChyZXNwKSA9PiB7XG4gICAgICAgICAgICAgICAgbm9kZS5zdHJva2VTdHlsZUlkID0gcmVzcC5pZDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgbGlnaHRVSUtleWxpbmVBbHRlcm5hdGl2ZS5pZDpcbiAgICAgICAgICAgIENvbG9yU3R5bGVJZC5kYXJrVUkua2V5bGluZUFsdGVybmF0aXZlLnRoZW4oKHJlc3ApID0+IHtcbiAgICAgICAgICAgICAgICBub2RlLnN0cm9rZVN0eWxlSWQgPSByZXNwLmlkO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBsaWdodFVJQWNjZW50LmlkOlxuICAgICAgICAgICAgQ29sb3JTdHlsZUlkLmRhcmtVSS5hY2NlbnQudGhlbigocmVzcCkgPT4ge1xuICAgICAgICAgICAgICAgIG5vZGUuc3Ryb2tlU3R5bGVJZCA9IHJlc3AuaWQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICAvLyBGaWxsXG4gICAgc3dpdGNoIChub2RlLmZpbGxTdHlsZUlkKSB7XG4gICAgICAgIGNhc2UgbGlnaHRVSUJvZHkuaWQ6XG4gICAgICAgICAgICBDb2xvclN0eWxlSWQuZGFya1VJLmJvZHkudGhlbigocmVzcCkgPT4ge1xuICAgICAgICAgICAgICAgIG5vZGUuZmlsbFN0eWxlSWQgPSByZXNwLmlkO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBsaWdodFVJU3VyZmFjZS5pZDpcbiAgICAgICAgICAgIENvbG9yU3R5bGVJZC5kYXJrVUkuc3VyZmFjZS50aGVuKChyZXNwKSA9PiB7XG4gICAgICAgICAgICAgICAgbm9kZS5maWxsU3R5bGVJZCA9IHJlc3AuaWQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIGxpZ2h0VUlLZXlsaW5lLmlkOlxuICAgICAgICAgICAgQ29sb3JTdHlsZUlkLmRhcmtVSS5rZXlsaW5lLnRoZW4oKHJlc3ApID0+IHtcbiAgICAgICAgICAgICAgICBub2RlLmZpbGxTdHlsZUlkID0gcmVzcC5pZDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgbGlnaHRVSUtleWxpbmVBbHRlcm5hdGl2ZS5pZDpcbiAgICAgICAgICAgIENvbG9yU3R5bGVJZC5kYXJrVUkua2V5bGluZUFsdGVybmF0aXZlLnRoZW4oKHJlc3ApID0+IHtcbiAgICAgICAgICAgICAgICBub2RlLmZpbGxTdHlsZUlkID0gcmVzcC5pZDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgbGlnaHRVSUFjY2VudC5pZDpcbiAgICAgICAgICAgIENvbG9yU3R5bGVJZC5kYXJrVUkuYWNjZW50LnRoZW4oKHJlc3ApID0+IHtcbiAgICAgICAgICAgICAgICBub2RlLmZpbGxTdHlsZUlkID0gcmVzcC5pZDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgbGlnaHRVSUVycm9yLmlkOlxuICAgICAgICAgICAgQ29sb3JTdHlsZUlkLmRhcmtVSS5lcnJvci50aGVuKChyZXNwKSA9PiB7XG4gICAgICAgICAgICAgICAgbm9kZS5maWxsU3R5bGVJZCA9IHJlc3AuaWQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIGxpZ2h0VUlPbkFjY2VudC5pZDpcbiAgICAgICAgICAgIENvbG9yU3R5bGVJZC5kYXJrVUkub25BY2NlbnQudGhlbigocmVzcCkgPT4ge1xuICAgICAgICAgICAgICAgIG5vZGUuZmlsbFN0eWxlSWQgPSByZXNwLmlkO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBsaWdodFVJT25TdXJmYWNlSGlnaC5pZDpcbiAgICAgICAgICAgIENvbG9yU3R5bGVJZC5kYXJrVUkub25TdXJmYWNlSGlnaC50aGVuKChyZXNwKSA9PiB7XG4gICAgICAgICAgICAgICAgbm9kZS5maWxsU3R5bGVJZCA9IHJlc3AuaWQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIGxpZ2h0VUlPblN1cmZhY2VNZWRpdW0uaWQ6XG4gICAgICAgICAgICBDb2xvclN0eWxlSWQuZGFya1VJLm9uU3VyZmFjZU1lZGl1bS50aGVuKChyZXNwKSA9PiB7XG4gICAgICAgICAgICAgICAgbm9kZS5maWxsU3R5bGVJZCA9IHJlc3AuaWQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIGxpZ2h0VUlPblN1cmZhY2VEaXNhYmxlZC5pZDpcbiAgICAgICAgICAgIENvbG9yU3R5bGVJZC5kYXJrVUkub25TdXJmYWNlRGlzYWJsZWQudGhlbigocmVzcCkgPT4ge1xuICAgICAgICAgICAgICAgIG5vZGUuZmlsbFN0eWxlSWQgPSByZXNwLmlkO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG4gICAgLy8gRWZmZWN0c1xuICAgIHN3aXRjaCAobm9kZS5lZmZlY3RTdHlsZUlkKSB7XG4gICAgICAgIGNhc2UgbGlnaHRVSVNoYWRvd0xvdy5pZDpcbiAgICAgICAgICAgIEVmZmVjdHNTdHlsZUlkLmRhcmtVSS5zaGFkb3dMb3cudGhlbigocmVzcCkgPT4ge1xuICAgICAgICAgICAgICAgIG5vZGUuZWZmZWN0U3R5bGVJZCA9IHJlc3AuaWQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIGxpZ2h0VUlTaGFkb3dIaWdoLmlkOlxuICAgICAgICAgICAgRWZmZWN0c1N0eWxlSWQuZGFya1VJLnNoYWRvd0hpZ2gudGhlbigocmVzcCkgPT4ge1xuICAgICAgICAgICAgICAgIG5vZGUuZWZmZWN0U3R5bGVJZCA9IHJlc3AuaWQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIGxpZ2h0VUlCb3JkZXJUb3AuaWQ6XG4gICAgICAgICAgICBFZmZlY3RzU3R5bGVJZC5kYXJrVUkuYm9yZGVyVG9wLnRoZW4oKHJlc3ApID0+IHtcbiAgICAgICAgICAgICAgICBub2RlLmVmZmVjdFN0eWxlSWQgPSByZXNwLmlkO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBsaWdodFVJQm9yZGVyUmlnaHQuaWQ6XG4gICAgICAgICAgICBFZmZlY3RzU3R5bGVJZC5kYXJrVUkuYm9yZGVyUmlnaHQudGhlbigocmVzcCkgPT4ge1xuICAgICAgICAgICAgICAgIG5vZGUuZWZmZWN0U3R5bGVJZCA9IHJlc3AuaWQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIGxpZ2h0VUlCb3JkZXJCb3R0b20uaWQ6XG4gICAgICAgICAgICBFZmZlY3RzU3R5bGVJZC5kYXJrVUkuYm9yZGVyQm90dG9tLnRoZW4oKHJlc3ApID0+IHtcbiAgICAgICAgICAgICAgICBub2RlLmVmZmVjdFN0eWxlSWQgPSByZXNwLmlkO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBsaWdodFVJQm9yZGVyTGVmdC5pZDpcbiAgICAgICAgICAgIEVmZmVjdHNTdHlsZUlkLmRhcmtVSS5ib3JkZXJMZWZ0LnRoZW4oKHJlc3ApID0+IHtcbiAgICAgICAgICAgICAgICBub2RlLmVmZmVjdFN0eWxlSWQgPSByZXNwLmlkO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBsaWdodFVJQm9yZGVyVG9wQm90dG9tLmlkOlxuICAgICAgICAgICAgRWZmZWN0c1N0eWxlSWQuZGFya1VJLmJvcmRlclRvcEJvdHRvbS50aGVuKChyZXNwKSA9PiB7XG4gICAgICAgICAgICAgICAgbm9kZS5lZmZlY3RTdHlsZUlkID0gcmVzcC5pZDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgbGlnaHRVSUJvcmRlckxlZnRSaWdodC5pZDpcbiAgICAgICAgICAgIEVmZmVjdHNTdHlsZUlkLmRhcmtVSS5ib3JkZXJMZWZ0UmlnaHQudGhlbigocmVzcCkgPT4ge1xuICAgICAgICAgICAgICAgIG5vZGUuZWZmZWN0U3R5bGVJZCA9IHJlc3AuaWQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICAvLyBkbyBub3RoaW5nIGJlbG93XG4gICAgaWYgKFwiY2hpbGRyZW5cIiBpbiBub2RlKSB7XG4gICAgICAgIGZvciAoY29uc3QgY2hpbGQgb2Ygbm9kZS5jaGlsZHJlbikge1xuICAgICAgICAgICAgRGFya1RoZW1lVHJhdmVyc2UoY2hpbGQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICAvLyBkbyBub3RoaW5nXG4gICAgfVxufSk7XG5leHBvcnQgeyBMaWdodFRoZW1lVHJhdmVyc2UsIERhcmtUaGVtZVRyYXZlcnNlIH07XG4iLCJjb25zdCBDb2xvclN0eWxlSWQgPSB7XG4gIGxpZ2h0VUk6IHtcbiAgICBib2R5OiBmaWdtYS5pbXBvcnRTdHlsZUJ5S2V5QXN5bmMoXG4gICAgICBcIjIzZTk0ZmNlZWQ5YWNjYmRhNGRiOWM2NzJjNDNkMjFiNGQyODZlNGNcIlxuICAgICksXG4gICAgc3VyZmFjZTogZmlnbWEuaW1wb3J0U3R5bGVCeUtleUFzeW5jKFxuICAgICAgXCI5MDNlNWJmMjc0MTM5ZWViOWY0OTY4YTllZjA4ZWMwNWVhZjBiMjc0XCJcbiAgICApLFxuICAgIGtleWxpbmU6IGZpZ21hLmltcG9ydFN0eWxlQnlLZXlBc3luYyhcbiAgICAgIFwiZWU0ZGRjZTJlNTZhZDQ3YzQyMTZkNTgyN2EyODNiOTQzYTc5NGM3OFwiXG4gICAgKSxcbiAgICBrZXlsaW5lQWx0ZXJuYXRpdmU6IGZpZ21hLmltcG9ydFN0eWxlQnlLZXlBc3luYyhcbiAgICAgIFwiNGMyM2VjMzQwMWFmNDdjNDA0NGI5MTU3Y2M2NTU0OWRhYmQyMDdkOVwiXG4gICAgKSxcbiAgICBhY2NlbnQ6IGZpZ21hLmltcG9ydFN0eWxlQnlLZXlBc3luYyhcbiAgICAgIFwiY2YwYzhlODhlYjY1YjgwNDlmZWNhNjBhYzgzZTFkZTNkM2FiNmU4YlwiXG4gICAgKSxcbiAgICBlcnJvcjogZmlnbWEuaW1wb3J0U3R5bGVCeUtleUFzeW5jKFxuICAgICAgXCI3OThjYjhmODk4YWIyYTUwOGE3YmE0OTFkODk5MDExZmRhODk2NTc3XCJcbiAgICApLFxuICAgIG9uQWNjZW50OiBmaWdtYS5pbXBvcnRTdHlsZUJ5S2V5QXN5bmMoXG4gICAgICBcIjVkZTc4OTJjYTQ0MmEzM2JmYTQ2MjUyYmQzOGJlNmNiZjU0YWI0M2NcIlxuICAgICksXG4gICAgb25TdXJmYWNlSGlnaDogZmlnbWEuaW1wb3J0U3R5bGVCeUtleUFzeW5jKFxuICAgICAgXCI4ZjA1YzYzZGU3ZjEwMGIyYmQ4ZmFkN2I4YmQ3MTQ4OWI2MzdjMDY3XCJcbiAgICApLFxuICAgIG9uU3VyZmFjZU1lZGl1bTogZmlnbWEuaW1wb3J0U3R5bGVCeUtleUFzeW5jKFxuICAgICAgXCI5NzA2M2E1ZjYyYzM1NGU2YWUwOTE5ZDUwYjY4ZDBiYWRiNGExMjJlXCJcbiAgICApLFxuICAgIG9uU3VyZmFjZURpc2FibGVkOiBmaWdtYS5pbXBvcnRTdHlsZUJ5S2V5QXN5bmMoXG4gICAgICBcImE4MDlmNzVlMTRmYmU2Mjk2MjcyZTg1MzExMDZmNmNjNGM2OTI1NTNcIlxuICAgICksXG4gIH0sXG4gIGRhcmtVSToge1xuICAgIGJvZHk6IGZpZ21hLmltcG9ydFN0eWxlQnlLZXlBc3luYyhcbiAgICAgIFwiMmYwNjBlNzQyMmE4YWQxN2EwMzdhMjUwZDM2OGNmNjcxYWRjMDQ2OFwiXG4gICAgKSxcbiAgICBzdXJmYWNlOiBmaWdtYS5pbXBvcnRTdHlsZUJ5S2V5QXN5bmMoXG4gICAgICBcIjE1ZjVmZmFjM2VjOTFiMjQwODk4MTM0MzlmZmFkZDFmOTk5NGIyOWNcIlxuICAgICksXG4gICAga2V5bGluZTogZmlnbWEuaW1wb3J0U3R5bGVCeUtleUFzeW5jKFxuICAgICAgXCI4NGFiMGYyOThlYThmY2QwYjgyYWM4OTI5OGFkNTExNDBjYTdiNzVhXCJcbiAgICApLFxuICAgIGtleWxpbmVBbHRlcm5hdGl2ZTogZmlnbWEuaW1wb3J0U3R5bGVCeUtleUFzeW5jKFxuICAgICAgXCJiZmZlMjBmOTcyOWFjYjUyNWQ4ODYxMjg4ZjBkODQ0MTM3Njk4YzU1XCJcbiAgICApLFxuICAgIGFjY2VudDogZmlnbWEuaW1wb3J0U3R5bGVCeUtleUFzeW5jKFxuICAgICAgXCIxYjAzOGVjNjAwZDJhMTRiNmNjZTM1ZjdiNDA5MGM2YWQyZGQyYzdkXCJcbiAgICApLFxuICAgIGVycm9yOiBmaWdtYS5pbXBvcnRTdHlsZUJ5S2V5QXN5bmMoXG4gICAgICBcIjAwZTQzODFjZmI4NTFmN2Y3Yzg3MDg0YzVjZmFkMTFlZmI4MGNjMjNcIlxuICAgICksXG4gICAgb25BY2NlbnQ6IGZpZ21hLmltcG9ydFN0eWxlQnlLZXlBc3luYyhcbiAgICAgIFwiM2ZkYmQ0M2RkMjQ2M2M2NGI5NGUwYjgxYTkxNmE2MDZjMDhiMGYxY1wiXG4gICAgKSxcbiAgICBvblN1cmZhY2VIaWdoOiBmaWdtYS5pbXBvcnRTdHlsZUJ5S2V5QXN5bmMoXG4gICAgICBcIjVlOGU0OTI1OThjNGY2ZTE4ZDg2ZDg3YjNhZDEwZTg1NjdmYTdmZDFcIlxuICAgICksXG4gICAgb25TdXJmYWNlTWVkaXVtOiBmaWdtYS5pbXBvcnRTdHlsZUJ5S2V5QXN5bmMoXG4gICAgICBcIjlkMmU1MTFkOWEzMWViZDc2ZTMwMmFiMjVkMWU5OTVlNmE4M2FjMWNcIlxuICAgICksXG4gICAgb25TdXJmYWNlRGlzYWJsZWQ6IGZpZ21hLmltcG9ydFN0eWxlQnlLZXlBc3luYyhcbiAgICAgIFwiYzk4ODgzZTA3YmU4MGJlNmJjZDE4ODE0ZWIyOWE4Nzc5N2E5OWM2YVwiXG4gICAgKSxcbiAgICBFZmZlY3RTaGFkb3dMb3c6IGZpZ21hLmltcG9ydFN0eWxlQnlLZXlBc3luYyhcbiAgICAgIFwiOGNjZWE5ZDUyM2NmOWRjMTNmZWU2OGYzOTJmM2Y5Y2MzMTg3YTQ1N1wiXG4gICAgKSxcbiAgICBFZmZlY3RTaGFkb3dIaWdoOiBmaWdtYS5pbXBvcnRTdHlsZUJ5S2V5QXN5bmMoXG4gICAgICBcImM2MTI1M2MzOGY2ZDBkOWYzYjMwMmE3N2EzODA3ZTA1MmU5YzNmOTFcIlxuICAgICksXG4gIH0sXG59O1xuXG5leHBvcnQgeyBDb2xvclN0eWxlSWQgfTtcbiIsImNvbnN0IEVmZmVjdHNTdHlsZUlkID0ge1xuICBsaWdodFVJOiB7XG4gICAgc2hhZG93TG93OiBmaWdtYS5pbXBvcnRTdHlsZUJ5S2V5QXN5bmMoXG4gICAgICBcIjhjY2VhOWQ1MjNjZjlkYzEzZmVlNjhmMzkyZjNmOWNjMzE4N2E0NTdcIlxuICAgICksXG4gICAgc2hhZG93SGlnaDogZmlnbWEuaW1wb3J0U3R5bGVCeUtleUFzeW5jKFxuICAgICAgXCJjNjEyNTNjMzhmNmQwZDlmM2IzMDJhNzdhMzgwN2UwNTJlOWMzZjkxXCJcbiAgICApLFxuICAgIGJvcmRlclRvcDogZmlnbWEuaW1wb3J0U3R5bGVCeUtleUFzeW5jKFxuICAgICAgXCJiNDg3MjJkNjE2NDhkN2M2NTY1ZmVhNjQwMzYxODUzZWM1MzYzOWQxXCJcbiAgICApLFxuICAgIGJvcmRlclJpZ2h0OiBmaWdtYS5pbXBvcnRTdHlsZUJ5S2V5QXN5bmMoXG4gICAgICBcIjMzOTRmZWU4ZTNmMDhlZGM3ZDYwZDZhYWIyOWYwZjNmOGVlMWIxYjJcIlxuICAgICksXG4gICAgYm9yZGVyQm90dG9tOiBmaWdtYS5pbXBvcnRTdHlsZUJ5S2V5QXN5bmMoXG4gICAgICBcImY2M2ZmZjM5YWUwMjFmMDc3OWI2ZDQ2ZGM5NzViYzU3OGRkM2I3YzVcIlxuICAgICksXG4gICAgYm9yZGVyTGVmdDogZmlnbWEuaW1wb3J0U3R5bGVCeUtleUFzeW5jKFxuICAgICAgXCI5ZWRkZGY3ODBiZjQ0NTE1ZDk1ZTJhNGJmZjYwMzZlMjQ3ZGE1YWY1XCJcbiAgICApLFxuICAgIGJvcmRlclRvcEJvdHRvbTogZmlnbWEuaW1wb3J0U3R5bGVCeUtleUFzeW5jKFxuICAgICAgXCIyM2MxMTkxNmU2YWY0MTNlZjIyMGFjZmNjNDAxOTVkODJmZTMwM2I1XCJcbiAgICApLFxuICAgIGJvcmRlckxlZnRSaWdodDogZmlnbWEuaW1wb3J0U3R5bGVCeUtleUFzeW5jKFxuICAgICAgXCJhNjQ0N2I3MjEwOTAxYmNhNDViOThmZTkxOGFjNTU1NDBmYTgzNTRlXCJcbiAgICApLFxuICB9LFxuICBkYXJrVUk6IHtcbiAgICBzaGFkb3dMb3c6IGZpZ21hLmltcG9ydFN0eWxlQnlLZXlBc3luYyhcbiAgICAgIFwiOTg3NjE5MDRiY2M5ZDM4YzgxZWUyM2U3YjQzMmQ4Yzk3ZTI5ZjBjMVwiXG4gICAgKSxcbiAgICBzaGFkb3dIaWdoOiBmaWdtYS5pbXBvcnRTdHlsZUJ5S2V5QXN5bmMoXG4gICAgICBcIjIwOWI0NTFlNGY2OGY1YmYzYWRlMjRlZjM2YTEwYTYwOWNkYWUyMzlcIlxuICAgICksXG4gICAgYm9yZGVyVG9wOiBmaWdtYS5pbXBvcnRTdHlsZUJ5S2V5QXN5bmMoXG4gICAgICBcImQzOTRjNmZmNzhhOTRjOTAwZjM0NGI1M2YxZDdlMGU3ZWNkY2NkNzlcIlxuICAgICksXG4gICAgYm9yZGVyUmlnaHQ6IGZpZ21hLmltcG9ydFN0eWxlQnlLZXlBc3luYyhcbiAgICAgIFwiNDMzYzYwNWYzNGU5YTg4ZDAzNTBmMjJmZTU4YzlhZmM4ZjBlN2RkN1wiXG4gICAgKSxcbiAgICBib3JkZXJCb3R0b206IGZpZ21hLmltcG9ydFN0eWxlQnlLZXlBc3luYyhcbiAgICAgIFwiM2U0Njc0ODEwNTEwNmI2NTQ0MGMyNGYxYjllNDFjOTk0ZmRhYzQwMlwiXG4gICAgKSxcbiAgICBib3JkZXJMZWZ0OiBmaWdtYS5pbXBvcnRTdHlsZUJ5S2V5QXN5bmMoXG4gICAgICBcImY4OGIyMjdkZDZkNmI0ZjgyODViMmUxNzlhN2M3ZDQyNzdmMGZiMzFcIlxuICAgICksXG4gICAgYm9yZGVyVG9wQm90dG9tOiBmaWdtYS5pbXBvcnRTdHlsZUJ5S2V5QXN5bmMoXG4gICAgICBcImEzNGYzZDBhMjJjMjQ1OWNmYzYyNmYxNzhjNDdkOWJiMWJhOGIyYTVcIlxuICAgICksXG4gICAgYm9yZGVyTGVmdFJpZ2h0OiBmaWdtYS5pbXBvcnRTdHlsZUJ5S2V5QXN5bmMoXG4gICAgICBcImZjMDZiOGU3MDMyZmM5YjFmYTA3YWY1ZTM5MjkzZGYyMTUwZmY0ZGNcIlxuICAgICksXG4gIH0sXG59O1xuXG5leHBvcnQgeyBFZmZlY3RzU3R5bGVJZCB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==