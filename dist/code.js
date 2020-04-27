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
figma.ui.resize(250, 350);
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
        // figma.ui.postMessage("nothing selected");
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
        const hasImage = (fill) => fill.type === "IMAGE";
        if (node.fills.length > 0) {
            // if (node.fills.some(hasImage)) {
            //   console.log("fill is image");
            // } else {
            //   console.log("fill is NOT image");
            //   // nothing
            // }
            if (node.fillStyleId.length > 0 || node.fills.some(hasImage)) {
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
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


// Light Mode
const LightThemeTraverse = (node) => __awaiter(void 0, void 0, void 0, function* () {
    // do nothing below
    if ("children" in node) {
        for (const child of node.children) {
            LightThemeTraverse(child);
        }
    }
    else {
        // do nothing
    }
    function replaceNodeWithLightPalette(val) {
        // Fills
        let nodeFillStyleId = val.fillStyleId;
        let nodeFillPaintStyle = figma.getStyleById(nodeFillStyleId);
        let nodeFillName = nodeFillPaintStyle.name;
        let lightNodeFillName = nodeFillName.replace("dark ui / ", "light ui / ");
        for (const item of _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["LightUiColors"]) {
            if (item.name === lightNodeFillName) {
                figma.importStyleByKeyAsync(item.styleKey).then((resp) => {
                    node.fillStyleId = resp.id;
                });
            }
            else {
                // Do nothing
            }
        }
        // Strokes
        let nodeStrokeStyleId = val.strokeStyleId;
        let nodeStrokePaintStyle = figma.getStyleById(nodeStrokeStyleId);
        let nodeStrokeName = nodeStrokePaintStyle.name;
        let lightNodeStrokeName = nodeStrokeName.replace("dark ui / ", "light ui / ");
        for (const item of _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["LightUiColors"]) {
            if (item.name === lightNodeStrokeName) {
                figma.importStyleByKeyAsync(item.styleKey).then((resp) => {
                    node.strokeStyleId = resp.id;
                });
            }
            else {
                // Do nothing
            }
        }
        // Effects
        let nodeEffectStyleId = val.effectStyleId;
        console.log(nodeEffectStyleId);
        let nodeEffectStyle = figma.getStyleById(nodeEffectStyleId);
        let nodeEffectName = nodeEffectStyle.name;
        let lightNodeEffectName = nodeEffectName.replace("dark ui / ", "light ui / ");
        for (const item of _theme_styles_effects__WEBPACK_IMPORTED_MODULE_1__["LightUiEffects"]) {
            if (item.name === lightNodeEffectName) {
                figma.importStyleByKeyAsync(item.styleKey).then((resp) => {
                    node.effectStyleId = resp.id;
                });
            }
            else {
                // Do nothing
            }
        }
    }
    // Replace nodes
    replaceNodeWithLightPalette(node);
});
// Dark Mode
const DarkThemeTraverse = (node) => __awaiter(void 0, void 0, void 0, function* () {
    // GetAllLocalEffectStyles();
    // GetAllLocalPaintStyles()
    // do nothing below
    if ("children" in node) {
        for (const child of node.children) {
            DarkThemeTraverse(child);
        }
    }
    else {
        // do nothing
    }
    function replaceNodeWithDarkPalette(val) {
        // Fills
        let nodeFillStyleId = val.fillStyleId;
        let nodeFillPaintStyle = figma.getStyleById(nodeFillStyleId);
        let nodeFillName = nodeFillPaintStyle.name;
        let darkNodeFillName = nodeFillName.replace("light ui / ", "dark ui / ");
        for (const item of _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["DarkUiColors"]) {
            if (item.name === darkNodeFillName) {
                figma.importStyleByKeyAsync(item.styleKey).then((resp) => {
                    node.fillStyleId = resp.id;
                });
            }
            else {
                // Do nothing
            }
        }
        // Strokes
        let nodeStrokeStyleId = val.strokeStyleId;
        let nodeStrokePaintStyle = figma.getStyleById(nodeStrokeStyleId);
        let nodeStrokeName = nodeStrokePaintStyle.name;
        let darkNodeStrokeName = nodeStrokeName.replace("light ui / ", "dark ui / ");
        for (const item of _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["DarkUiColors"]) {
            if (item.name === darkNodeStrokeName) {
                figma.importStyleByKeyAsync(item.styleKey).then((resp) => {
                    node.strokeStyleId = resp.id;
                });
            }
            else {
                // Do nothing
            }
        }
        // Effects
        let nodeEffectStyleId = val.effectStyleId;
        console.log(nodeEffectStyleId);
        let nodeEffectStyle = figma.getStyleById(nodeEffectStyleId);
        let nodeEffectName = nodeEffectStyle.name;
        let DarkNodeEffectName = nodeEffectName.replace("light ui / ", "dark ui / ");
        for (const item of _theme_styles_effects__WEBPACK_IMPORTED_MODULE_1__["DarkUiEffects"]) {
            if (item.name === DarkNodeEffectName) {
                figma.importStyleByKeyAsync(item.styleKey).then((resp) => {
                    node.effectStyleId = resp.id;
                });
            }
            else {
                // Do nothing
            }
        }
    }
    // Replace nodes
    replaceNodeWithDarkPalette(node);
});

// Run this in tokens file
const GetAllLocalPaintStyles = () => {
    function clone(val) {
        return JSON.parse(JSON.stringify(val));
    }
    let allPaintStyles = figma.getLocalPaintStyles();
    // console.log(allPaintStyles);
    let allStylesArray = [];
    for (const paintStyle of allPaintStyles) {
        let color = clone(paintStyle.paints[0]);
        // console.log(color);
        let colorRGB = color.color;
        let rgbToInt = (value) => { return Math.ceil(value * 255); };
        let rgba = {
            r: rgbToInt(colorRGB.r),
            g: rgbToInt(colorRGB.g),
            b: rgbToInt(colorRGB.b),
            a: color.opacity
        };
        allStylesArray.push({ name: paintStyle.name, styleKey: paintStyle.key, rgba: rgba });
        console.log(allStylesArray);
    }
    // console.log(allStylesArray);
};
// Run this in tokens file
const GetAllLocalEffectStyles = () => {
    let allEffectStyles = figma.getLocalEffectStyles();
    let allEffects = [];
    for (const effectStyle of allEffectStyles) {
        allEffects.push({ name: effectStyle.name, styleKey: effectStyle.key });
    }
    console.log(allEffects);
};


/***/ }),

/***/ "./src/theme-styles/colors.js":
/*!************************************!*\
  !*** ./src/theme-styles/colors.js ***!
  \************************************/
/*! exports provided: DarkUiColors, LightUiColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DarkUiColors", function() { return DarkUiColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LightUiColors", function() { return LightUiColors; });
const DarkUiColors = [
  {
    name: "dark ui / intentions / primary.main",
    styleKey: "2b792d84c9ddb5bb54b4e7ce000c595c79d748ca",
  },
  {
    name: "dark ui / intentions / primary.dark",
    styleKey: "b43bd111250ce74d48cfd71ac00c1c1b558b02f0",
  },
  {
    name: "dark ui / intentions / error.main",
    styleKey: "767c2a9897062dee0d0f6300406f6e5585f684c7",
  },
  {
    name: "dark ui / intentions / error.dark",
    styleKey: "34a9a344c25416d1a7ea6d6732db13e7bc6cc397",
  },
  {
    name: "dark ui / intentions / warning.main",
    styleKey: "894fbd335d8b0f6b1cee4ec5ac7a0479397a6b4c",
  },
  {
    name: "dark ui / intentions / warning.dark",
    styleKey: "44b42a85052841387bc677c5719874cf0207cab5",
  },
  {
    name: "dark ui / intentions / success.main",
    styleKey: "2d44f3a0c60878cef5dbd10c59a417aa90c0c1bf",
  },
  {
    name: "dark ui / intentions / success.dark",
    styleKey: "43222791f7d5afde8b84bdb7a7c75a6a8cc9d334",
  },
  {
    name: "dark ui / typography / text.primary",
    styleKey: "3fdbd43dd2463c64b94e0b81a916a606c08b0f1c",
  },
  {
    name: "dark ui / typography / text.secondary",
    styleKey: "9d2e511d9a31ebd76e302ab25d1e995e6a83ac1c",
  },
  {
    name: "dark ui / typography / text.disabled",
    styleKey: "c98883e07be80be6bcd18814eb29a87797a99c6a",
  },
  {
    name: "dark ui / typography / text.contrastText.primary",
    styleKey: "5b622d9b5f16ff471b666ee8d95a35eb5e7e464b",
  },
  {
    name: "dark ui / typography / text.contrastText.error",
    styleKey: "ac36b60a67f36ed8070caaedd0456012a10c22d6",
  },
  {
    name: "dark ui / typography / text.contrastText.warning",
    styleKey: "59c9bf2a4d6c04fd93c1b9abcc4cf501fcadbb22",
  },
  {
    name: "dark ui / typography / text.contrastText.success",
    styleKey: "1972dc001d31dec326c8e937f8302ee35fbb853f",
  },
  {
    name: "dark ui / typography / text.action.disabled",
    styleKey: "7f7a4ee1fbcb6529e6fb564a0f488188b0dc2b37",
  },
  {
    name: "dark ui / buttons / action.disabledBackground",
    styleKey: "214ac4df796b51c0f426028d0f4268efa6ee3685",
  },
  {
    name: "dark ui / background / background.default",
    styleKey: "2f060e7422a8ad17a037a250d368cf671adc0468",
  },
  {
    name: "dark ui / background / background.paper",
    styleKey: "15f5ffac3ec91b24089813439ffadd1f9994b29c",
  },
  {
    name: "dark ui / divider / divider",
    styleKey: "84ab0f298ea8fcd0b82ac89298ad51140ca7b75a",
  },
  {
    name: "dark ui / 4DP / FTP",
    styleKey: "7bb028ff7d873486678b7c6764fc50f39e571eb6",
  },
  {
    name: "dark ui / 4DP / MAP",
    styleKey: "df57febc8ef77dd2c35be2d1b940afb8331668b4",
  },
  {
    name: "dark ui / 4DP / AC",
    styleKey: "e8193abfd2f715e48b9cc7ce4bc6b95c897aa04d",
  },
  {
    name: "dark ui / 4DP / NM",
    styleKey: "82d50f3011d815902ed430df6d7345ecdf94761b",
  },
];

const LightUiColors = [
  {
    name: "light ui / intentions / primary.main",
    styleKey: "cf0c8e88eb65b8049feca60ac83e1de3d3ab6e8b",
  },
  {
    name: "light ui / intentions / primary.dark",
    styleKey: "da938698c9d223221d63c7c5501a9057a0d5f6fb",
  },
  {
    name: "light ui / intentions / error.main",
    styleKey: "798cb8f898ab2a508a7ba491d899011fda896577",
  },
  {
    name: "light ui / intentions / error.dark",
    styleKey: "12776456e68adf4ab5e391797c3c84e92b0f86c2",
  },
  {
    name: "light ui / intentions / warning.main",
    styleKey: "f27a60df8c162185ea2472a801b271ef662c0429",
  },
  {
    name: "light ui / intentions / warning.dark",
    styleKey: "615d6d5cac4855e981c8b942b986ee705b568b28",
  },
  {
    name: "light ui / intentions / success.main",
    styleKey: "e4aa41e8bf52f94ef5fce3669f510af3cb79c5a7",
  },
  {
    name: "light ui / intentions / success.dark",
    styleKey: "d9883b53c2539bf1e1068205fe1d059d58315e4f",
  },
  {
    name: "light ui / typography / text.primary",
    styleKey: "8f05c63de7f100b2bd8fad7b8bd71489b637c067",
  },
  {
    name: "light ui / typography / text.secondary",
    styleKey: "97063a5f62c354e6ae0919d50b68d0badb4a122e",
  },
  {
    name: "light ui / typography / text.disabled",
    styleKey: "a809f75e14fbe6296272e8531106f6cc4c692553",
  },
  {
    name: "light ui / typography / text.contrastText.primary",
    styleKey: "b28a7fcdd247323d7ba99961c9608cf8378bada1",
  },
  {
    name: "light ui / typography / text.contrastText.error",
    styleKey: "c42c5f1990390c413ae62925e9af0d51bf32c945",
  },
  {
    name: "light ui / typography / text.contrastText.warning",
    styleKey: "eecd82ccaae988624c45f28296564037da85cc1a",
  },
  {
    name: "light ui / typography / text.contrastText.success",
    styleKey: "d7dbaef66a932ff276f6f4aa51985a059dedfbf8",
  },
  {
    name: "light ui / typography / text.action.disabled",
    styleKey: "f81a1f7487031698d15c2394e4c74fcc9eccc299",
  },
  {
    name: "light ui / buttons / action.disabledBackground",
    styleKey: "73b15e3a79eeea757283a44cf71131305cba2399",
  },
  {
    name: "light ui / background / background.default",
    styleKey: "23e94fceed9accbda4db9c672c43d21b4d286e4c",
  },
  {
    name: "light ui / background / background.paper",
    styleKey: "903e5bf274139eeb9f4968a9ef08ec05eaf0b274",
  },
  {
    name: "light ui / divider / divider",
    styleKey: "ee4ddce2e56ad47c4216d5827a283b943a794c78",
  },
  {
    name: "light ui / 4DP / FTP",
    styleKey: "224e4912027be9f75685fd40b2528ba9f34fe958",
  },
  {
    name: "light ui / 4DP / MAP",
    styleKey: "aaa3a531a124fa854e09d398f98fb47b989a8a72",
  },
  {
    name: "light ui / 4DP / AC",
    styleKey: "220d3493747cd8d8bdc5d4a0e7965c36a3c52349",
  },
  {
    name: "light ui / 4DP / NM",
    styleKey: "ddcbf68fa5c1eaa72077164272b7ae5b9e5e4ed7",
  },
  {
    name: "utility / mask",
    styleKey: "d04db26bf897352f5cc49b3854fa6b7e981b18e6",
  },
];


/***/ }),

/***/ "./src/theme-styles/effects.js":
/*!*************************************!*\
  !*** ./src/theme-styles/effects.js ***!
  \*************************************/
/*! exports provided: LightUiEffects, DarkUiEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LightUiEffects", function() { return LightUiEffects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DarkUiEffects", function() { return DarkUiEffects; });
const LightUiEffects = [
  {
    name: "light ui / border / top",
    styleKey: "b48722d61648d7c6565fea640361853ec53639d1",
  },
  {
    name: "light ui / border / right",
    styleKey: "3394fee8e3f08edc7d60d6aab29f0f3f8ee1b1b2",
  },
  {
    name: "light ui / border / bottom",
    styleKey: "f63fff39ae021f0779b6d46dc975bc578dd3b7c5",
  },
  {
    name: "light ui / border / left",
    styleKey: "9edddf780bf44515d95e2a4bff6036e247da5af5",
  },
  {
    name: "light ui / border / top & bottom",
    styleKey: "23c11916e6af413ef220acfcc40195d82fe303b5",
  },
  {
    name: "light ui / border / left & right",
    styleKey: "a6447b7210901bca45b98fe918ac55540fa8354e",
  },
  {
    name: "light ui / shadow / low",
    styleKey: "8ccea9d523cf9dc13fee68f392f3f9cc3187a457",
  },
  {
    name: "light ui / shadow / high",
    styleKey: "c61253c38f6d0d9f3b302a77a3807e052e9c3f91",
  },
];

const DarkUiEffects = [
  {
    name: "dark ui / border / top",
    styleKey: "d394c6ff78a94c900f344b53f1d7e0e7ecdccd79",
  },
  {
    name: "dark ui / border / right",
    styleKey: "433c605f34e9a88d0350f22fe58c9afc8f0e7dd7",
  },
  {
    name: "dark ui / border / bottom",
    styleKey: "3e46748105106b65440c24f1b9e41c994fdac402",
  },
  {
    name: "dark ui / border / left",
    styleKey: "f88b227dd6d6b4f8285b2e179a7c7d4277f0fb31",
  },
  {
    name: "dark ui / border / top & bottom",
    styleKey: "a34f3d0a22c2459cfc626f178c47d9bb1ba8b2a5",
  },
  {
    name: "dark ui / border / left & right",
    styleKey: "fc06b8e7032fc9b1fa07af5e39293df2150ff4dc",
  },
  {
    name: "dark ui / shadow / low",
    styleKey: "98761904bcc9d38c81ee23e7b432d8c97e29f0c1",
  },
  {
    name: "dark ui / shadow / high",
    styleKey: "209b451e4f68f5bf3ade24ef36a10a609cdae239",
  },
];


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvZGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlci9jYWxsYmFjay50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVyL2NvbG9yLWNoZWNrLnRzIiwid2VicGFjazovLy8uL3NyYy9oZWxwZXIvZm9yY2UtYXV0by1sYXlvdXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlci9zcGFjaW5nLWNoZWNrLnRzIiwid2VicGFjazovLy8uL3NyYy9oZWxwZXIvc3BhY2luZy1zbGlkZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlci90aGVtZS1zd2FwLnRzIiwid2VicGFjazovLy8uL3NyYy90aGVtZS1zdHlsZXMvY29sb3JzLmpzIiwid2VicGFjazovLy8uL3NyYy90aGVtZS1zdHlsZXMvZWZmZWN0cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztR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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDZ0M7Ozs7Ozs7Ozs7Ozs7QUMzS2hDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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M0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLG9EQUFvRDtBQUM3RTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUMxS0E7QUFBQTtBQUFBO0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7OztBQ3hNQTtBQUFBO0FBQUE7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIIiwiZmlsZSI6ImNvZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9jb2RlLnRzXCIpO1xuIiwiLy8gVGhpcyBwbHVnaW4gd2lsbCBvcGVuIGEgbW9kYWwgdG8gcHJvbXB0IHRoZSB1c2VyIHRvIGVudGVyIGEgbnVtYmVyLCBhbmRcbi8vIGl0IHdpbGwgdGhlbiBjcmVhdGUgdGhhdCBtYW55IHJlY3RhbmdsZXMgb24gdGhlIHNjcmVlbi5cbi8vIFRoaXMgZmlsZSBob2xkcyB0aGUgbWFpbiBjb2RlIGZvciB0aGUgcGx1Z2lucy4gSXQgaGFzIGFjY2VzcyB0byB0aGUgKmRvY3VtZW50Ki5cbi8vIFlvdSBjYW4gYWNjZXNzIGJyb3dzZXIgQVBJcyBpbiB0aGUgPHNjcmlwdD4gdGFnIGluc2lkZSBcInVpLmh0bWxcIiB3aGljaCBoYXMgYVxuLy8gZnVsbCBicm93c2VyIGVudmlyb21lbnQgKHNlZSBkb2N1bWVudGF0aW9uKS5cbi8vIGltcG9ydCB7IFNwYWNpbmdEZWZhdWx0IH0gZnJvbSBcIi4vaGVscGVyL3NwYWNpbmctZGVmYXVsdFwiO1xuaW1wb3J0IHsgTGlnaHRUaGVtZVRyYXZlcnNlLCBEYXJrVGhlbWVUcmF2ZXJzZSB9IGZyb20gXCIuL2hlbHBlci90aGVtZS1zd2FwXCI7XG5pbXBvcnQgeyBTcGFjaW5nQ2hlY2tUcmF2ZXJzZSB9IGZyb20gXCIuL2hlbHBlci9zcGFjaW5nLWNoZWNrXCI7XG5pbXBvcnQgeyBDb2xvckNoZWNrVHJhdmVyc2UgfSBmcm9tIFwiLi9oZWxwZXIvY29sb3ItY2hlY2tcIjtcbmltcG9ydCB7IEZvcmNlQXV0b0xheW91dEhvcml6b250YWwsIEZvcmNlQXV0b0xheW91dFZlcnRpY2FsLCB9IGZyb20gXCIuL2hlbHBlci9mb3JjZS1hdXRvLWxheW91dFwiO1xuaW1wb3J0IHsgUGFkZGluZ0hvcml6b250YWxTbGlkZXIsIFBhZGRpbmdWZXJ0aWNhbFNsaWRlciwgSXRlbVNwYWNpbmcsIH0gZnJvbSBcIi4vaGVscGVyL3NwYWNpbmctc2xpZGVyXCI7XG5pbXBvcnQgeyBvblNlbGVjdGlvbkNoYW5nZSB9IGZyb20gXCIuL2hlbHBlci9jYWxsYmFja1wiO1xuLy8gVGhpcyBzaG93cyB0aGUgSFRNTCBwYWdlIGluIFwidWkuaHRtbFwiLlxuZmlnbWEuc2hvd1VJKF9faHRtbF9fKTtcbi8vIENhbGxzIHRvIFwicGFyZW50LnBvc3RNZXNzYWdlXCIgZnJvbSB3aXRoaW4gdGhlIEhUTUwgcGFnZSB3aWxsIHRyaWdnZXIgdGhpc1xuLy8gY2FsbGJhY2suIFRoZSBjYWxsYmFjayB3aWxsIGJlIHBhc3NlZCB0aGUgXCJwbHVnaW5NZXNzYWdlXCIgcHJvcGVydHkgb2YgdGhlXG4vLyBwb3N0ZWQgbWVzc2FnZS5cbmZpZ21hLnVpLnJlc2l6ZSgyNTAsIDM1MCk7XG5maWdtYS5vbihcInNlbGVjdGlvbmNoYW5nZVwiLCAoKSA9PiB7XG4gICAgbGV0IHRoaXNTZWxlY3Rpb24gPSBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb25bMF07XG4gICAgb25TZWxlY3Rpb25DaGFuZ2UodGhpc1NlbGVjdGlvbik7XG59KTtcbmZpZ21hLnVpLm9ubWVzc2FnZSA9IChtc2cpID0+IHtcbiAgICBpZiAobXNnLnR5cGUgPT09IFwiZGFyay10aGVtZVwiKSB7XG4gICAgICAgIERhcmtUaGVtZVRyYXZlcnNlKGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvblswXSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKG1zZy50eXBlID09PSBcImxpZ2h0LXRoZW1lXCIpIHtcbiAgICAgICAgTGlnaHRUaGVtZVRyYXZlcnNlKGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvblswXSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKG1zZy50eXBlID09PSBcImNvbG9yLWNoZWNrZXJcIikge1xuICAgICAgICBDb2xvckNoZWNrVHJhdmVyc2UoZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uWzBdKTtcbiAgICB9XG4gICAgZWxzZSBpZiAobXNnLnR5cGUgPT09IFwic3BhY2luZy1jaGVja2VyXCIpIHtcbiAgICAgICAgU3BhY2luZ0NoZWNrVHJhdmVyc2UoZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uKTtcbiAgICB9XG4gICAgZWxzZSBpZiAobXNnLnR5cGUgPT09IFwicGFkZGluZy1ob3Jpem9udGFsLXNsaWRlclwiKSB7XG4gICAgICAgIFBhZGRpbmdIb3Jpem9udGFsU2xpZGVyKGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbiwgbXNnKTtcbiAgICB9XG4gICAgZWxzZSBpZiAobXNnLnR5cGUgPT09IFwicGFkZGluZy12ZXJ0aWNhbC1zbGlkZXJcIikge1xuICAgICAgICBQYWRkaW5nVmVydGljYWxTbGlkZXIoZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uLCBtc2cpO1xuICAgIH1cbiAgICBlbHNlIGlmIChtc2cudHlwZSA9PT0gXCJpdGVtLXNwYWNpbmctc2xpZGVyXCIpIHtcbiAgICAgICAgSXRlbVNwYWNpbmcoZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uLCBtc2cpO1xuICAgIH1cbiAgICBlbHNlIGlmIChtc2cudHlwZSA9PT0gXCJmb3JjZS1hdXRvLWxheW91dC1ob3Jpem9udGFsXCIpIHtcbiAgICAgICAgRm9yY2VBdXRvTGF5b3V0SG9yaXpvbnRhbChmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb24pO1xuICAgIH1cbiAgICBlbHNlIGlmIChtc2cudHlwZSA9PT0gXCJmb3JjZS1hdXRvLWxheW91dC12ZXJ0aWNhbFwiKSB7XG4gICAgICAgIEZvcmNlQXV0b0xheW91dFZlcnRpY2FsKGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbik7XG4gICAgfVxuICAgIC8vIE1ha2Ugc3VyZSB0byBjbG9zZSB0aGUgcGx1Z2luIHdoZW4geW91J3JlIGRvbmUuIE90aGVyd2lzZSB0aGUgcGx1Z2luIHdpbGxcbiAgICAvLyBrZWVwIHJ1bm5pbmcsIHdoaWNoIHNob3dzIHRoZSBjYW5jZWwgYnV0dG9uIGF0IHRoZSBib3R0b20gb2YgdGhlIHNjcmVlbi5cbiAgICAvLyBmaWdtYS5jbG9zZVBsdWdpbigpO1xufTtcbiIsImNvbnN0IG9uU2VsZWN0aW9uQ2hhbmdlID0gKG5vZGUpID0+IHtcbiAgICBpZiAobm9kZSkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInllc1wiKTtcbiAgICAgICAgbGV0IGhvcml6b250YWxQYWRkaW5nID0gbm9kZS5ob3Jpem9udGFsUGFkZGluZztcbiAgICAgICAgbGV0IHZlcnRpY2FsUGFkZGluZyA9IG5vZGUudmVydGljYWxQYWRkaW5nO1xuICAgICAgICBsZXQgaXRlbVNwYWNpbmcgPSBub2RlLml0ZW1TcGFjaW5nO1xuICAgICAgICBsZXQgbGF5b3V0TW9kZSA9IG5vZGUubGF5b3V0TW9kZTtcbiAgICAgICAgbGV0IG9iaiA9IHtcbiAgICAgICAgICAgIGhvcml6b250YWxQYWRkaW5nOiBob3Jpem9udGFsUGFkZGluZyxcbiAgICAgICAgICAgIHZlcnRpY2FsUGFkZGluZzogdmVydGljYWxQYWRkaW5nLFxuICAgICAgICAgICAgaXRlbVNwYWNpbmc6IGl0ZW1TcGFjaW5nLFxuICAgICAgICAgICAgbGF5b3V0TW9kZTogbGF5b3V0TW9kZSxcbiAgICAgICAgfTtcbiAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2Uob2JqKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwibm9cIik7XG4gICAgICAgIC8vIGZpZ21hLnVpLnBvc3RNZXNzYWdlKFwibm90aGluZyBzZWxlY3RlZFwiKTtcbiAgICB9XG59O1xuZXhwb3J0IHsgb25TZWxlY3Rpb25DaGFuZ2UgfTtcbiIsImZ1bmN0aW9uIGNsb25lKHZhbCkge1xuICAgIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHZhbCkpO1xufVxuLy8gQ2hlY2sgb2JqZWN0IGVxdWFsaXR5IGhlbHBlclxuZnVuY3Rpb24gaXNFcXVpdmFsZW50KGEsIGIpIHtcbiAgICAvLyBDcmVhdGUgYXJyYXlzIG9mIHByb3BlcnR5IG5hbWVzXG4gICAgdmFyIGFQcm9wcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGEpO1xuICAgIHZhciBiUHJvcHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhiKTtcbiAgICAvLyBJZiBudW1iZXIgb2YgcHJvcGVydGllcyBpcyBkaWZmZXJlbnQsXG4gICAgLy8gb2JqZWN0cyBhcmUgbm90IGVxdWl2YWxlbnRcbiAgICBpZiAoYVByb3BzLmxlbmd0aCAhPSBiUHJvcHMubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhUHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIHByb3BOYW1lID0gYVByb3BzW2ldO1xuICAgICAgICAvLyBJZiB2YWx1ZXMgb2Ygc2FtZSBwcm9wZXJ0eSBhcmUgbm90IGVxdWFsLFxuICAgICAgICAvLyBvYmplY3RzIGFyZSBub3QgZXF1aXZhbGVudFxuICAgICAgICBpZiAoYVtwcm9wTmFtZV0gIT09IGJbcHJvcE5hbWVdKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gSWYgd2UgbWFkZSBpdCB0aGlzIGZhciwgb2JqZWN0c1xuICAgIC8vIGFyZSBjb25zaWRlcmVkIGVxdWl2YWxlbnRcbiAgICByZXR1cm4gdHJ1ZTtcbn1cbmNvbnN0IENvbG9yQ2hlY2tUcmF2ZXJzZSA9IChub2RlKSA9PiB7XG4gICAgbGV0IHN0cmF5RmlsbCA9IDA7XG4gICAgbGV0IHN0cmF5U3Ryb2tlID0gMDtcbiAgICBpZiAoXCJmaWxsc1wiICYmIFwic3Ryb2tlc1wiIGluIG5vZGUpIHtcbiAgICAgICAgLy8gRmlsdGVyIHdhcm5pbmcgc3Ryb2tlIGZ1bmN0aW9uXG4gICAgICAgIGxldCBmaWx0ZXJXYXJuaW5nU3Ryb2tlID0gZnVuY3Rpb24gKHN0cm9rZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJjbGVhciBvdXRcIik7XG4gICAgICAgICAgICBpZiAoc3Ryb2tlLnR5cGUgPT0gXCJTT0xJRFwiICYmXG4gICAgICAgICAgICAgICAgaXNFcXVpdmFsZW50KHN0cm9rZS5jb2xvciwgeyByOiAxLCBnOiAwLCBiOiAwIH0pKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ5ZXNcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJub1wiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgbGV0IG9sZFN0cm9rZXMgPSBjbG9uZShub2RlLnN0cm9rZXMpO1xuICAgICAgICBsZXQgbmV3U3Ryb2tlcyA9IG9sZFN0cm9rZXMuZmlsdGVyKGZpbHRlcldhcm5pbmdTdHJva2UpO1xuICAgICAgICBpZiAobm9kZS5zdHJva2VTdHlsZUlkLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIC8vIGRvIG5vdGhpbmdcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG5vZGUuc3Ryb2tlcyA9IG5ld1N0cm9rZXM7XG4gICAgICAgIH1cbiAgICAgICAgLy8gLy8gQWRkIHdhcm5pbmcgc3Ryb2tlIGZ1bmN0aW9uXG4gICAgICAgIGxldCBhZGRXYXJuaW5nU3Ryb2tlID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgIGxldCBzdHJva2VzID0gY2xvbmUobm9kZS5zdHJva2VzKTtcbiAgICAgICAgICAgIGxldCB3YXJuaW5nU3Ryb2tlUHJvcGVydHkgPSB7XG4gICAgICAgICAgICAgICAgY29sb3I6IHsgcjogMSwgZzogMCwgYjogMCB9LFxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgICAgICAgdHlwZTogXCJTT0xJRFwiLFxuICAgICAgICAgICAgICAgIGJsZW5kTW9kZTogXCJOT1JNQUxcIixcbiAgICAgICAgICAgICAgICB2aXNpYmxlOiB0cnVlLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHN0cm9rZXMucHVzaCh3YXJuaW5nU3Ryb2tlUHJvcGVydHkpO1xuICAgICAgICAgICAgbm9kZS5zdHJva2VzID0gc3Ryb2tlcztcbiAgICAgICAgICAgIC8vIG5vZGUuc3Ryb2tlQWxpZ24gPSBcIk9VVFNJREVcIjtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gQ2hlY2sgRmlsbFxuICAgICAgICBjb25zdCBoYXNJbWFnZSA9IChmaWxsKSA9PiBmaWxsLnR5cGUgPT09IFwiSU1BR0VcIjtcbiAgICAgICAgaWYgKG5vZGUuZmlsbHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgLy8gaWYgKG5vZGUuZmlsbHMuc29tZShoYXNJbWFnZSkpIHtcbiAgICAgICAgICAgIC8vICAgY29uc29sZS5sb2coXCJmaWxsIGlzIGltYWdlXCIpO1xuICAgICAgICAgICAgLy8gfSBlbHNlIHtcbiAgICAgICAgICAgIC8vICAgY29uc29sZS5sb2coXCJmaWxsIGlzIE5PVCBpbWFnZVwiKTtcbiAgICAgICAgICAgIC8vICAgLy8gbm90aGluZ1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgaWYgKG5vZGUuZmlsbFN0eWxlSWQubGVuZ3RoID4gMCB8fCBub2RlLmZpbGxzLnNvbWUoaGFzSW1hZ2UpKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLinIUgR29vZCBmaWxsXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLinYwgQmFkIGZpbGxcIik7XG4gICAgICAgICAgICAgICAgLy8gQWRkIHdhcm5pbmcgc3Ryb2tlXG4gICAgICAgICAgICAgICAgYWRkV2FybmluZ1N0cm9rZShub2RlKTtcbiAgICAgICAgICAgICAgICBzdHJheUZpbGwrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibm8gZmlsbFwiKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBDaGVjayBTdHJva2VcbiAgICAgICAgaWYgKG5vZGUuc3Ryb2tlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBpZiAobm9kZS5zdHJva2VTdHlsZUlkLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuKchSBHb29kIHN0cm9rZVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi4p2MIEJhZCBzdHJva2VcIik7XG4gICAgICAgICAgICAgICAgLy8gLy8gQWRkIHdhcm5pbmcgc3Ryb2tlXG4gICAgICAgICAgICAgICAgYWRkV2FybmluZ1N0cm9rZShub2RlKTtcbiAgICAgICAgICAgICAgICBzdHJheVN0cm9rZSsrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJubyBzdHJva2VcIik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiTm8gZmlsbCAmIHN0cm9rZSBwcm9wZXJ0eVwiKTtcbiAgICB9XG4gICAgaWYgKFwiY2hpbGRyZW5cIiBpbiBub2RlKSB7XG4gICAgICAgIGZvciAoY29uc3QgY2hpbGQgb2Ygbm9kZS5jaGlsZHJlbikge1xuICAgICAgICAgICAgQ29sb3JDaGVja1RyYXZlcnNlKGNoaWxkKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgLy8gZG8gbm90aGluZ1xuICAgIH1cbiAgICBpZiAoc3RyYXlGaWxsID4gMCB8fCBzdHJheVN0cm9rZSA+IDApIHtcbiAgICAgICAgbGV0IGVycm9yU3RyaW5nID0gXCJZb3UgaGF2ZSBcIiArXG4gICAgICAgICAgICBzdHJheUZpbGwgK1xuICAgICAgICAgICAgXCIgZmlsbHMgYW5kIFwiICtcbiAgICAgICAgICAgIHN0cmF5U3Ryb2tlICtcbiAgICAgICAgICAgIFwiIHN0cm9rZXMgbm90IHVzaW5nIGNvbG91cnMgZnJvbSBvdXIgbGlicmFyeSFcIjtcbiAgICAgICAgZmlnbWEubm90aWZ5KGVycm9yU3RyaW5nLCB7IHRpbWVvdXQ6IDAuNSB9KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGZpZ21hLm5vdGlmeShcIvCfkY8gQWxsIGlzIGdvb2QgaW4gdGhlIGhvb2QhXCIsIHsgdGltZW91dDogMC41IH0pO1xuICAgIH1cbn07XG5leHBvcnQgeyBDb2xvckNoZWNrVHJhdmVyc2UgfTtcbiIsImNvbnN0IEZvcmNlQXV0b0xheW91dEhvcml6b250YWwgPSAobm9kZXMpID0+IHtcbiAgICBmb3IgKGNvbnN0IG5vZGUgb2Ygbm9kZXMpIHtcbiAgICAgICAgbm9kZS5sYXlvdXRNb2RlID0gXCJIT1JJWk9OVEFMXCI7XG4gICAgfVxufTtcbmNvbnN0IEZvcmNlQXV0b0xheW91dFZlcnRpY2FsID0gKG5vZGVzKSA9PiB7XG4gICAgZm9yIChjb25zdCBub2RlIG9mIG5vZGVzKSB7XG4gICAgICAgIG5vZGUubGF5b3V0TW9kZSA9IFwiVkVSVElDQUxcIjtcbiAgICB9XG59O1xuZXhwb3J0IHsgRm9yY2VBdXRvTGF5b3V0SG9yaXpvbnRhbCwgRm9yY2VBdXRvTGF5b3V0VmVydGljYWwgfTtcbiIsImNvbnN0IFNwYWNpbmdDaGVja1RyYXZlcnNlID0gKG5vZGVzKSA9PiB7XG4gICAgZm9yIChjb25zdCBub2RlIG9mIG5vZGVzKSB7XG4gICAgICAgIGxldCBuYW1lID0gbm9kZS5uYW1lO1xuICAgICAgICBsZXQgcGFkZGluZ0FsbFJlZ2V4ID0gL1xcYig/OnBhLXh4c3xwYS14c3xwYS1zfHBhLW18cGEtbHxwYS14bHxwYS14eGx8cGEtbm9uZSlcXGIvZztcbiAgICAgICAgbGV0IHBhZGRpbmdIb3Jpem9udGFsUmVnZXggPSAvXFxiKD86cGgteHhzfHBoLXhzfHBoLXN8cGgtbXxwaC1sfHBoLXhsfHBoLXh4bHxwaC1ub25lKVxcYi9nO1xuICAgICAgICBsZXQgcGFkZGluZ1ZlcnRpY2FsUmVnZXggPSAvXFxiKD86cHYteHhzfHB2LXhzfHB2LXN8cHYtbXxwdi1sfHB2LXhsfHB2LXh4bHxwdi1ub25lKVxcYi9nO1xuICAgICAgICBsZXQgaXRlbVNwYWNpbmdBbGxSZWdleCA9IC9cXGIoPzpzcC14eHN8c3AteHN8c3Atc3xzcC1tfHNwLWx8c3AteGx8c3AteHhsfHNwLW5vbmUpXFxiL2c7XG4gICAgICAgIGxldCBhdXRvbGF5b3V0UmVnZXggPSAvXFxiKD86dmVydGljYWx8aG9yaXpvbnRhbClcXGIvZztcbiAgICAgICAgbGV0IG1hdGNoUGFkZGluZ0FsbCA9IG5hbWUubWF0Y2gocGFkZGluZ0FsbFJlZ2V4KTtcbiAgICAgICAgbGV0IG1hdGNoUGFkZGluZ0hvcml6b250YWwgPSBuYW1lLm1hdGNoKHBhZGRpbmdIb3Jpem9udGFsUmVnZXgpO1xuICAgICAgICBsZXQgbWF0Y2hQYWRkaW5nVmVydGljYWwgPSBuYW1lLm1hdGNoKHBhZGRpbmdWZXJ0aWNhbFJlZ2V4KTtcbiAgICAgICAgbGV0IG1hdGNoSXRlbVNwYWNpbmcgPSBuYW1lLm1hdGNoKGl0ZW1TcGFjaW5nQWxsUmVnZXgpO1xuICAgICAgICBsZXQgbWF0Y2hBdXRvTGF5b3V0RGlyZWN0aW9uID0gbmFtZS5tYXRjaChhdXRvbGF5b3V0UmVnZXgpO1xuICAgICAgICBpZiAobWF0Y2hBdXRvTGF5b3V0RGlyZWN0aW9uID09IG51bGwpIHtcbiAgICAgICAgICAgIG5vZGUubGF5b3V0TW9kZSA9IFwiVkVSVElDQUxcIjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZW5hYmxlIGF1dG8gbGF5b3V0XCIpO1xuICAgICAgICAgICAgc3dpdGNoIChtYXRjaEF1dG9MYXlvdXREaXJlY3Rpb25bMF0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIFwidmVydGljYWxcIjpcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5sYXlvdXRNb2RlID0gXCJWRVJUSUNBTFwiO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwiaG9yaXpvbnRhbFwiOlxuICAgICAgICAgICAgICAgICAgICBub2RlLmxheW91dE1vZGUgPSBcIkhPUklaT05UQUxcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAobWF0Y2hJdGVtU3BhY2luZyA9PSBudWxsKSB7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImhhcyBzcGFjaW5nXCIpO1xuICAgICAgICAgICAgc3dpdGNoIChtYXRjaEl0ZW1TcGFjaW5nWzBdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcInNwLW5vbmVcIjpcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5pdGVtU3BhY2luZyA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJzcC14eHNcIjpcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5pdGVtU3BhY2luZyA9IDQ7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJzcC14c1wiOlxuICAgICAgICAgICAgICAgICAgICBub2RlLml0ZW1TcGFjaW5nID0gODtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInNwLXNcIjpcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5pdGVtU3BhY2luZyA9IDE2O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwic3AtbVwiOlxuICAgICAgICAgICAgICAgICAgICBub2RlLml0ZW1TcGFjaW5nID0gMjQ7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJzcC1sXCI6XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuaXRlbVNwYWNpbmcgPSAzMjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInNwLXhsXCI6XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuaXRlbVNwYWNpbmcgPSA0MDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInNwLXh4bFwiOlxuICAgICAgICAgICAgICAgICAgICBub2RlLml0ZW1TcGFjaW5nID0gNDg7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChtYXRjaFBhZGRpbmdBbGwgPT0gbnVsbCkge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJub1wiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaGFzIHBhZGRpbmcgYWxsXCIpO1xuICAgICAgICAgICAgc3dpdGNoIChtYXRjaFBhZGRpbmdBbGxbMF0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIFwicGEtbm9uZVwiOlxuICAgICAgICAgICAgICAgICAgICBub2RlLmhvcml6b250YWxQYWRkaW5nID0gMDtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS52ZXJ0aWNhbFBhZGRpbmcgPSAwO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwicGEteHhzXCI6XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuaG9yaXpvbnRhbFBhZGRpbmcgPSA0O1xuICAgICAgICAgICAgICAgICAgICBub2RlLnZlcnRpY2FsUGFkZGluZyA9IDQ7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJwYS14c1wiOlxuICAgICAgICAgICAgICAgICAgICBub2RlLmhvcml6b250YWxQYWRkaW5nID0gODtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS52ZXJ0aWNhbFBhZGRpbmcgPSA4O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwicGEtc1wiOlxuICAgICAgICAgICAgICAgICAgICBub2RlLmhvcml6b250YWxQYWRkaW5nID0gMTY7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUudmVydGljYWxQYWRkaW5nID0gMTY7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJwYS1tXCI6XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuaG9yaXpvbnRhbFBhZGRpbmcgPSAyNDtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS52ZXJ0aWNhbFBhZGRpbmcgPSAyNDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInBhLWxcIjpcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5ob3Jpem9udGFsUGFkZGluZyA9IDMyO1xuICAgICAgICAgICAgICAgICAgICBub2RlLnZlcnRpY2FsUGFkZGluZyA9IDMyO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwicGEteGxcIjpcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5ob3Jpem9udGFsUGFkZGluZyA9IDQwO1xuICAgICAgICAgICAgICAgICAgICBub2RlLnZlcnRpY2FsUGFkZGluZyA9IDQwO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwicGEteHhsXCI6XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuaG9yaXpvbnRhbFBhZGRpbmcgPSA0ODtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS52ZXJ0aWNhbFBhZGRpbmcgPSA0ODtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1hdGNoUGFkZGluZ0hvcml6b250YWwgPT0gbnVsbCkge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJub1wiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaGFzIHBhZGRpbmcgaG9yaXpvbnRhbFwiKTtcbiAgICAgICAgICAgIHN3aXRjaCAobWF0Y2hQYWRkaW5nSG9yaXpvbnRhbFswXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJwaC1ub25lXCI6XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuaG9yaXpvbnRhbFBhZGRpbmcgPSAwO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwicGgteHhzXCI6XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuaG9yaXpvbnRhbFBhZGRpbmcgPSA0O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwicGgteHNcIjpcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5ob3Jpem9udGFsUGFkZGluZyA9IDg7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJwaC1zXCI6XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuaG9yaXpvbnRhbFBhZGRpbmcgPSAxNjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInBoLW1cIjpcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5ob3Jpem9udGFsUGFkZGluZyA9IDI0O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwicGgtbFwiOlxuICAgICAgICAgICAgICAgICAgICBub2RlLmhvcml6b250YWxQYWRkaW5nID0gMzI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJwaC14bFwiOlxuICAgICAgICAgICAgICAgICAgICBub2RlLmhvcml6b250YWxQYWRkaW5nID0gNDA7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJwaC14eGxcIjpcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5ob3Jpem9udGFsUGFkZGluZyA9IDQ4O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAobWF0Y2hQYWRkaW5nVmVydGljYWwgPT0gbnVsbCkge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJub1wiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaGFzIHBhZGRpbmcgaG9yaXpvbnRhbFwiKTtcbiAgICAgICAgICAgIHN3aXRjaCAobWF0Y2hQYWRkaW5nVmVydGljYWxbMF0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIFwicHYtbm9uZVwiOlxuICAgICAgICAgICAgICAgICAgICBub2RlLnZlcnRpY2FsUGFkZGluZyA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJwdi14eHNcIjpcbiAgICAgICAgICAgICAgICAgICAgbm9kZS52ZXJ0aWNhbFBhZGRpbmcgPSA0O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwicHYteHNcIjpcbiAgICAgICAgICAgICAgICAgICAgbm9kZS52ZXJ0aWNhbFBhZGRpbmcgPSA4O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwicHYtc1wiOlxuICAgICAgICAgICAgICAgICAgICBub2RlLnZlcnRpY2FsUGFkZGluZyA9IDE2O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwicHYtbVwiOlxuICAgICAgICAgICAgICAgICAgICBub2RlLnZlcnRpY2FsUGFkZGluZyA9IDI0O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwicHYtbFwiOlxuICAgICAgICAgICAgICAgICAgICBub2RlLnZlcnRpY2FsUGFkZGluZyA9IDMyO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwicHYteGxcIjpcbiAgICAgICAgICAgICAgICAgICAgbm9kZS52ZXJ0aWNhbFBhZGRpbmcgPSA0MDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInB2LXh4bFwiOlxuICAgICAgICAgICAgICAgICAgICBub2RlLnZlcnRpY2FsUGFkZGluZyA9IDQ4O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBTcGFjaW5nQ2hlY2tUcmF2ZXJzZShub2RlKTtcbiAgICB9XG4gICAgLy8gaWYgKFwiY2hpbGRyZW5cIiBpbiBub2Rlcykge1xuICAgIC8vICAgZm9yIChjb25zdCBjaGlsZCBvZiBub2RlLmNoaWxkcmVuKSB7XG4gICAgLy8gICAgIFNwYWNpbmdDaGVja1RyYXZlcnNlKGNoaWxkKTtcbiAgICAvLyAgIH1cbiAgICAvLyB9IGVsc2Uge1xuICAgIC8vICAgLy8gZG8gbm90aGluZ1xuICAgIC8vIH1cbn07XG5leHBvcnQgeyBTcGFjaW5nQ2hlY2tUcmF2ZXJzZSB9O1xuIiwiZnVuY3Rpb24gY2xvbmUodmFsKSB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodmFsKSk7XG59XG5sZXQgcGhOYW1lID0gbnVsbDtcbmxldCBwdk5hbWUgPSBudWxsO1xubGV0IHNwTmFtZSA9IG51bGw7XG5sZXQgbmFtZVByb3AgPSB7XG4gICAgaG9yaXpvbnRhbDogXCJwaC1ub25lXCIsXG4gICAgdmVydGljYWw6IFwicHYtbm9uZVwiLFxuICAgIHNwYWNpbmc6IFwic3Atbm9uZVwiLFxufTtcbmZ1bmN0aW9uIHVwZGF0ZU5hbWUodmFsLCBub2RlKSB7XG4gICAgaWYgKHZhbC50eXBlID09PSBcImhvcml6b250YWxcIikge1xuICAgICAgICBuYW1lUHJvcC5ob3Jpem9udGFsID0gdmFsLnZhbHVlO1xuICAgIH1cbiAgICBlbHNlIGlmICh2YWwudHlwZSA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICAgIG5hbWVQcm9wLnZlcnRpY2FsID0gdmFsLnZhbHVlO1xuICAgIH1cbiAgICBlbHNlIGlmICh2YWwudHlwZSA9PT0gXCJzcGFjaW5nXCIpIHtcbiAgICAgICAgbmFtZVByb3Auc3BhY2luZyA9IHZhbC52YWx1ZTtcbiAgICB9XG4gICAgbm9kZS5uYW1lID1cbiAgICAgICAgbmFtZVByb3AuaG9yaXpvbnRhbCArIFwiIFwiICsgbmFtZVByb3AudmVydGljYWwgKyBcIiBcIiArIG5hbWVQcm9wLnNwYWNpbmc7XG59XG5jb25zdCBQYWRkaW5nSG9yaXpvbnRhbFNsaWRlciA9IChub2RlcywgbXNnKSA9PiB7XG4gICAgbGV0IHNsaWRlclZhbHVlID0gbXNnLnNsaWRlclZhbHVlO1xuICAgIGxldCBzcGFjaW5nID0gbnVsbDtcbiAgICBsZXQgc3BhY2luZ05hbWUgPSBudWxsO1xuICAgIHN3aXRjaCAoc2xpZGVyVmFsdWUpIHtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHNwYWNpbmcgPSAwO1xuICAgICAgICAgICAgc3BhY2luZ05hbWUgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiMVwiOlxuICAgICAgICAgICAgc3BhY2luZyA9IDQ7XG4gICAgICAgICAgICBzcGFjaW5nTmFtZSA9IFwieHhzXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIjJcIjpcbiAgICAgICAgICAgIHNwYWNpbmcgPSA4O1xuICAgICAgICAgICAgc3BhY2luZ05hbWUgPSBcInhzXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIjNcIjpcbiAgICAgICAgICAgIHNwYWNpbmcgPSAxNjtcbiAgICAgICAgICAgIHNwYWNpbmdOYW1lID0gXCJzXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIjRcIjpcbiAgICAgICAgICAgIHNwYWNpbmcgPSAyNDtcbiAgICAgICAgICAgIHNwYWNpbmdOYW1lID0gXCJtXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIjVcIjpcbiAgICAgICAgICAgIHNwYWNpbmcgPSAzMjtcbiAgICAgICAgICAgIHNwYWNpbmdOYW1lID0gXCJsXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIjZcIjpcbiAgICAgICAgICAgIHNwYWNpbmcgPSA0MDtcbiAgICAgICAgICAgIHNwYWNpbmdOYW1lID0gXCJ4bFwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCI3XCI6XG4gICAgICAgICAgICBzcGFjaW5nID0gNDg7XG4gICAgICAgICAgICBzcGFjaW5nTmFtZSA9IFwieHhsXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG4gICAgZm9yIChjb25zdCBub2RlIG9mIG5vZGVzKSB7XG4gICAgICAgIGlmIChub2RlKSB7XG4gICAgICAgICAgICBwaE5hbWUgPSBcInBoLVwiICsgc3BhY2luZ05hbWU7XG4gICAgICAgICAgICB1cGRhdGVOYW1lKHsgdHlwZTogXCJob3Jpem9udGFsXCIsIHZhbHVlOiBwaE5hbWUgfSwgbm9kZSk7XG4gICAgICAgICAgICBpZiAobm9kZS50eXBlID09PSBcIkdST1VQXCIpIHtcbiAgICAgICAgICAgICAgICBub2RlLmhvcml6b250YWxQYWRkaW5nID0gc3BhY2luZztcbiAgICAgICAgICAgICAgICBub2RlLmxheW91dE1vZGUgPSBcIk5PTkVcIjtcbiAgICAgICAgICAgICAgICBpZiAoXCJjaGlsZHJlblwiIGluIG5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGdyb3VwID0gbm9kZS5jaGlsZHJlblswXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBsZXQgc2V0QXV0b0xheW91dCA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5ob3Jpem9udGFsUGFkZGluZyA9IHNwYWNpbmc7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gcmVzb2x2ZShcImRvbmVcIiksIDUpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufTtcbmNvbnN0IFBhZGRpbmdWZXJ0aWNhbFNsaWRlciA9IChub2RlcywgbXNnKSA9PiB7XG4gICAgbGV0IHNsaWRlclZhbHVlID0gbXNnLnNsaWRlclZhbHVlO1xuICAgIGxldCBzcGFjaW5nID0gbnVsbDtcbiAgICBsZXQgc3BhY2luZ05hbWUgPSBudWxsO1xuICAgIHN3aXRjaCAoc2xpZGVyVmFsdWUpIHtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHNwYWNpbmcgPSAwO1xuICAgICAgICAgICAgc3BhY2luZ05hbWUgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiMVwiOlxuICAgICAgICAgICAgc3BhY2luZyA9IDQ7XG4gICAgICAgICAgICBzcGFjaW5nTmFtZSA9IFwieHhzXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIjJcIjpcbiAgICAgICAgICAgIHNwYWNpbmcgPSA4O1xuICAgICAgICAgICAgc3BhY2luZ05hbWUgPSBcInhzXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIjNcIjpcbiAgICAgICAgICAgIHNwYWNpbmcgPSAxNjtcbiAgICAgICAgICAgIHNwYWNpbmdOYW1lID0gXCJzXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIjRcIjpcbiAgICAgICAgICAgIHNwYWNpbmcgPSAyNDtcbiAgICAgICAgICAgIHNwYWNpbmdOYW1lID0gXCJtXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIjVcIjpcbiAgICAgICAgICAgIHNwYWNpbmcgPSAzMjtcbiAgICAgICAgICAgIHNwYWNpbmdOYW1lID0gXCJsXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIjZcIjpcbiAgICAgICAgICAgIHNwYWNpbmcgPSA0MDtcbiAgICAgICAgICAgIHNwYWNpbmdOYW1lID0gXCJ4bFwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCI3XCI6XG4gICAgICAgICAgICBzcGFjaW5nID0gNDg7XG4gICAgICAgICAgICBzcGFjaW5nTmFtZSA9IFwieHhsXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG4gICAgZm9yIChjb25zdCBub2RlIG9mIG5vZGVzKSB7XG4gICAgICAgIGlmIChub2RlKSB7XG4gICAgICAgICAgICBwdk5hbWUgPSBcInB2LVwiICsgc3BhY2luZ05hbWU7XG4gICAgICAgICAgICB1cGRhdGVOYW1lKHsgdHlwZTogXCJ2ZXJ0aWNhbFwiLCB2YWx1ZTogcHZOYW1lIH0sIG5vZGUpO1xuICAgICAgICAgICAgaWYgKG5vZGUudHlwZSA9PT0gXCJHUk9VUFwiKSB7XG4gICAgICAgICAgICAgICAgbm9kZS52ZXJ0aWNhbFBhZGRpbmcgPSBzcGFjaW5nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IHNldEF1dG9MYXlvdXQgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUudmVydGljYWxQYWRkaW5nID0gc3BhY2luZztcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiByZXNvbHZlKFwiZG9uZVwiKSwgNSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59O1xuY29uc3QgSXRlbVNwYWNpbmcgPSAobm9kZXMsIG1zZykgPT4ge1xuICAgIGxldCBzbGlkZXJWYWx1ZSA9IG1zZy5zbGlkZXJWYWx1ZTtcbiAgICBsZXQgc3BhY2luZyA9IG51bGw7XG4gICAgbGV0IHNwYWNpbmdOYW1lID0gbnVsbDtcbiAgICBzd2l0Y2ggKHNsaWRlclZhbHVlKSB7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBzcGFjaW5nID0gMDtcbiAgICAgICAgICAgIHNwYWNpbmdOYW1lID0gXCJub25lXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIjFcIjpcbiAgICAgICAgICAgIHNwYWNpbmcgPSA0O1xuICAgICAgICAgICAgc3BhY2luZ05hbWUgPSBcInh4c1wiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCIyXCI6XG4gICAgICAgICAgICBzcGFjaW5nID0gODtcbiAgICAgICAgICAgIHNwYWNpbmdOYW1lID0gXCJ4c1wiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCIzXCI6XG4gICAgICAgICAgICBzcGFjaW5nID0gMTY7XG4gICAgICAgICAgICBzcGFjaW5nTmFtZSA9IFwic1wiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCI0XCI6XG4gICAgICAgICAgICBzcGFjaW5nID0gMjQ7XG4gICAgICAgICAgICBzcGFjaW5nTmFtZSA9IFwibVwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCI1XCI6XG4gICAgICAgICAgICBzcGFjaW5nID0gMzI7XG4gICAgICAgICAgICBzcGFjaW5nTmFtZSA9IFwibFwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCI2XCI6XG4gICAgICAgICAgICBzcGFjaW5nID0gNDA7XG4gICAgICAgICAgICBzcGFjaW5nTmFtZSA9IFwieGxcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiN1wiOlxuICAgICAgICAgICAgc3BhY2luZyA9IDQ4O1xuICAgICAgICAgICAgc3BhY2luZ05hbWUgPSBcInh4bFwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGZvciAoY29uc3Qgbm9kZSBvZiBub2Rlcykge1xuICAgICAgICBub2RlLml0ZW1TcGFjaW5nID0gc3BhY2luZztcbiAgICAgICAgc3BOYW1lID0gXCJzcC1cIiArIHNwYWNpbmdOYW1lO1xuICAgICAgICB1cGRhdGVOYW1lKHsgdHlwZTogXCJzcGFjaW5nXCIsIHZhbHVlOiBzcE5hbWUgfSwgbm9kZSk7XG4gICAgfVxufTtcbmV4cG9ydCB7IFBhZGRpbmdIb3Jpem9udGFsU2xpZGVyLCBQYWRkaW5nVmVydGljYWxTbGlkZXIsIEl0ZW1TcGFjaW5nIH07XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB7IERhcmtVaUNvbG9ycywgTGlnaHRVaUNvbG9ycyB9IGZyb20gXCIuLi90aGVtZS1zdHlsZXMvY29sb3JzXCI7XG5pbXBvcnQgeyBEYXJrVWlFZmZlY3RzLCBMaWdodFVpRWZmZWN0cyB9IGZyb20gXCIuLi90aGVtZS1zdHlsZXMvZWZmZWN0c1wiO1xuLy8gTGlnaHQgTW9kZVxuY29uc3QgTGlnaHRUaGVtZVRyYXZlcnNlID0gKG5vZGUpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIC8vIGRvIG5vdGhpbmcgYmVsb3dcbiAgICBpZiAoXCJjaGlsZHJlblwiIGluIG5vZGUpIHtcbiAgICAgICAgZm9yIChjb25zdCBjaGlsZCBvZiBub2RlLmNoaWxkcmVuKSB7XG4gICAgICAgICAgICBMaWdodFRoZW1lVHJhdmVyc2UoY2hpbGQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICAvLyBkbyBub3RoaW5nXG4gICAgfVxuICAgIGZ1bmN0aW9uIHJlcGxhY2VOb2RlV2l0aExpZ2h0UGFsZXR0ZSh2YWwpIHtcbiAgICAgICAgLy8gRmlsbHNcbiAgICAgICAgbGV0IG5vZGVGaWxsU3R5bGVJZCA9IHZhbC5maWxsU3R5bGVJZDtcbiAgICAgICAgbGV0IG5vZGVGaWxsUGFpbnRTdHlsZSA9IGZpZ21hLmdldFN0eWxlQnlJZChub2RlRmlsbFN0eWxlSWQpO1xuICAgICAgICBsZXQgbm9kZUZpbGxOYW1lID0gbm9kZUZpbGxQYWludFN0eWxlLm5hbWU7XG4gICAgICAgIGxldCBsaWdodE5vZGVGaWxsTmFtZSA9IG5vZGVGaWxsTmFtZS5yZXBsYWNlKFwiZGFyayB1aSAvIFwiLCBcImxpZ2h0IHVpIC8gXCIpO1xuICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgTGlnaHRVaUNvbG9ycykge1xuICAgICAgICAgICAgaWYgKGl0ZW0ubmFtZSA9PT0gbGlnaHROb2RlRmlsbE5hbWUpIHtcbiAgICAgICAgICAgICAgICBmaWdtYS5pbXBvcnRTdHlsZUJ5S2V5QXN5bmMoaXRlbS5zdHlsZUtleSkudGhlbigocmVzcCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBub2RlLmZpbGxTdHlsZUlkID0gcmVzcC5pZDtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIERvIG5vdGhpbmdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBTdHJva2VzXG4gICAgICAgIGxldCBub2RlU3Ryb2tlU3R5bGVJZCA9IHZhbC5zdHJva2VTdHlsZUlkO1xuICAgICAgICBsZXQgbm9kZVN0cm9rZVBhaW50U3R5bGUgPSBmaWdtYS5nZXRTdHlsZUJ5SWQobm9kZVN0cm9rZVN0eWxlSWQpO1xuICAgICAgICBsZXQgbm9kZVN0cm9rZU5hbWUgPSBub2RlU3Ryb2tlUGFpbnRTdHlsZS5uYW1lO1xuICAgICAgICBsZXQgbGlnaHROb2RlU3Ryb2tlTmFtZSA9IG5vZGVTdHJva2VOYW1lLnJlcGxhY2UoXCJkYXJrIHVpIC8gXCIsIFwibGlnaHQgdWkgLyBcIik7XG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBMaWdodFVpQ29sb3JzKSB7XG4gICAgICAgICAgICBpZiAoaXRlbS5uYW1lID09PSBsaWdodE5vZGVTdHJva2VOYW1lKSB7XG4gICAgICAgICAgICAgICAgZmlnbWEuaW1wb3J0U3R5bGVCeUtleUFzeW5jKGl0ZW0uc3R5bGVLZXkpLnRoZW4oKHJlc3ApID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5zdHJva2VTdHlsZUlkID0gcmVzcC5pZDtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIERvIG5vdGhpbmdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBFZmZlY3RzXG4gICAgICAgIGxldCBub2RlRWZmZWN0U3R5bGVJZCA9IHZhbC5lZmZlY3RTdHlsZUlkO1xuICAgICAgICBjb25zb2xlLmxvZyhub2RlRWZmZWN0U3R5bGVJZCk7XG4gICAgICAgIGxldCBub2RlRWZmZWN0U3R5bGUgPSBmaWdtYS5nZXRTdHlsZUJ5SWQobm9kZUVmZmVjdFN0eWxlSWQpO1xuICAgICAgICBsZXQgbm9kZUVmZmVjdE5hbWUgPSBub2RlRWZmZWN0U3R5bGUubmFtZTtcbiAgICAgICAgbGV0IGxpZ2h0Tm9kZUVmZmVjdE5hbWUgPSBub2RlRWZmZWN0TmFtZS5yZXBsYWNlKFwiZGFyayB1aSAvIFwiLCBcImxpZ2h0IHVpIC8gXCIpO1xuICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgTGlnaHRVaUVmZmVjdHMpIHtcbiAgICAgICAgICAgIGlmIChpdGVtLm5hbWUgPT09IGxpZ2h0Tm9kZUVmZmVjdE5hbWUpIHtcbiAgICAgICAgICAgICAgICBmaWdtYS5pbXBvcnRTdHlsZUJ5S2V5QXN5bmMoaXRlbS5zdHlsZUtleSkudGhlbigocmVzcCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBub2RlLmVmZmVjdFN0eWxlSWQgPSByZXNwLmlkO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gRG8gbm90aGluZ1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8vIFJlcGxhY2Ugbm9kZXNcbiAgICByZXBsYWNlTm9kZVdpdGhMaWdodFBhbGV0dGUobm9kZSk7XG59KTtcbi8vIERhcmsgTW9kZVxuY29uc3QgRGFya1RoZW1lVHJhdmVyc2UgPSAobm9kZSkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgLy8gR2V0QWxsTG9jYWxFZmZlY3RTdHlsZXMoKTtcbiAgICAvLyBHZXRBbGxMb2NhbFBhaW50U3R5bGVzKClcbiAgICAvLyBkbyBub3RoaW5nIGJlbG93XG4gICAgaWYgKFwiY2hpbGRyZW5cIiBpbiBub2RlKSB7XG4gICAgICAgIGZvciAoY29uc3QgY2hpbGQgb2Ygbm9kZS5jaGlsZHJlbikge1xuICAgICAgICAgICAgRGFya1RoZW1lVHJhdmVyc2UoY2hpbGQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICAvLyBkbyBub3RoaW5nXG4gICAgfVxuICAgIGZ1bmN0aW9uIHJlcGxhY2VOb2RlV2l0aERhcmtQYWxldHRlKHZhbCkge1xuICAgICAgICAvLyBGaWxsc1xuICAgICAgICBsZXQgbm9kZUZpbGxTdHlsZUlkID0gdmFsLmZpbGxTdHlsZUlkO1xuICAgICAgICBsZXQgbm9kZUZpbGxQYWludFN0eWxlID0gZmlnbWEuZ2V0U3R5bGVCeUlkKG5vZGVGaWxsU3R5bGVJZCk7XG4gICAgICAgIGxldCBub2RlRmlsbE5hbWUgPSBub2RlRmlsbFBhaW50U3R5bGUubmFtZTtcbiAgICAgICAgbGV0IGRhcmtOb2RlRmlsbE5hbWUgPSBub2RlRmlsbE5hbWUucmVwbGFjZShcImxpZ2h0IHVpIC8gXCIsIFwiZGFyayB1aSAvIFwiKTtcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIERhcmtVaUNvbG9ycykge1xuICAgICAgICAgICAgaWYgKGl0ZW0ubmFtZSA9PT0gZGFya05vZGVGaWxsTmFtZSkge1xuICAgICAgICAgICAgICAgIGZpZ21hLmltcG9ydFN0eWxlQnlLZXlBc3luYyhpdGVtLnN0eWxlS2V5KS50aGVuKChyZXNwKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuZmlsbFN0eWxlSWQgPSByZXNwLmlkO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gRG8gbm90aGluZ1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIFN0cm9rZXNcbiAgICAgICAgbGV0IG5vZGVTdHJva2VTdHlsZUlkID0gdmFsLnN0cm9rZVN0eWxlSWQ7XG4gICAgICAgIGxldCBub2RlU3Ryb2tlUGFpbnRTdHlsZSA9IGZpZ21hLmdldFN0eWxlQnlJZChub2RlU3Ryb2tlU3R5bGVJZCk7XG4gICAgICAgIGxldCBub2RlU3Ryb2tlTmFtZSA9IG5vZGVTdHJva2VQYWludFN0eWxlLm5hbWU7XG4gICAgICAgIGxldCBkYXJrTm9kZVN0cm9rZU5hbWUgPSBub2RlU3Ryb2tlTmFtZS5yZXBsYWNlKFwibGlnaHQgdWkgLyBcIiwgXCJkYXJrIHVpIC8gXCIpO1xuICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgRGFya1VpQ29sb3JzKSB7XG4gICAgICAgICAgICBpZiAoaXRlbS5uYW1lID09PSBkYXJrTm9kZVN0cm9rZU5hbWUpIHtcbiAgICAgICAgICAgICAgICBmaWdtYS5pbXBvcnRTdHlsZUJ5S2V5QXN5bmMoaXRlbS5zdHlsZUtleSkudGhlbigocmVzcCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBub2RlLnN0cm9rZVN0eWxlSWQgPSByZXNwLmlkO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gRG8gbm90aGluZ1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIEVmZmVjdHNcbiAgICAgICAgbGV0IG5vZGVFZmZlY3RTdHlsZUlkID0gdmFsLmVmZmVjdFN0eWxlSWQ7XG4gICAgICAgIGNvbnNvbGUubG9nKG5vZGVFZmZlY3RTdHlsZUlkKTtcbiAgICAgICAgbGV0IG5vZGVFZmZlY3RTdHlsZSA9IGZpZ21hLmdldFN0eWxlQnlJZChub2RlRWZmZWN0U3R5bGVJZCk7XG4gICAgICAgIGxldCBub2RlRWZmZWN0TmFtZSA9IG5vZGVFZmZlY3RTdHlsZS5uYW1lO1xuICAgICAgICBsZXQgRGFya05vZGVFZmZlY3ROYW1lID0gbm9kZUVmZmVjdE5hbWUucmVwbGFjZShcImxpZ2h0IHVpIC8gXCIsIFwiZGFyayB1aSAvIFwiKTtcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIERhcmtVaUVmZmVjdHMpIHtcbiAgICAgICAgICAgIGlmIChpdGVtLm5hbWUgPT09IERhcmtOb2RlRWZmZWN0TmFtZSkge1xuICAgICAgICAgICAgICAgIGZpZ21hLmltcG9ydFN0eWxlQnlLZXlBc3luYyhpdGVtLnN0eWxlS2V5KS50aGVuKChyZXNwKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuZWZmZWN0U3R5bGVJZCA9IHJlc3AuaWQ7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBEbyBub3RoaW5nXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gUmVwbGFjZSBub2Rlc1xuICAgIHJlcGxhY2VOb2RlV2l0aERhcmtQYWxldHRlKG5vZGUpO1xufSk7XG5leHBvcnQgeyBMaWdodFRoZW1lVHJhdmVyc2UsIERhcmtUaGVtZVRyYXZlcnNlIH07XG4vLyBSdW4gdGhpcyBpbiB0b2tlbnMgZmlsZVxuY29uc3QgR2V0QWxsTG9jYWxQYWludFN0eWxlcyA9ICgpID0+IHtcbiAgICBmdW5jdGlvbiBjbG9uZSh2YWwpIHtcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodmFsKSk7XG4gICAgfVxuICAgIGxldCBhbGxQYWludFN0eWxlcyA9IGZpZ21hLmdldExvY2FsUGFpbnRTdHlsZXMoKTtcbiAgICAvLyBjb25zb2xlLmxvZyhhbGxQYWludFN0eWxlcyk7XG4gICAgbGV0IGFsbFN0eWxlc0FycmF5ID0gW107XG4gICAgZm9yIChjb25zdCBwYWludFN0eWxlIG9mIGFsbFBhaW50U3R5bGVzKSB7XG4gICAgICAgIGxldCBjb2xvciA9IGNsb25lKHBhaW50U3R5bGUucGFpbnRzWzBdKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coY29sb3IpO1xuICAgICAgICBsZXQgY29sb3JSR0IgPSBjb2xvci5jb2xvcjtcbiAgICAgICAgbGV0IHJnYlRvSW50ID0gKHZhbHVlKSA9PiB7IHJldHVybiBNYXRoLmNlaWwodmFsdWUgKiAyNTUpOyB9O1xuICAgICAgICBsZXQgcmdiYSA9IHtcbiAgICAgICAgICAgIHI6IHJnYlRvSW50KGNvbG9yUkdCLnIpLFxuICAgICAgICAgICAgZzogcmdiVG9JbnQoY29sb3JSR0IuZyksXG4gICAgICAgICAgICBiOiByZ2JUb0ludChjb2xvclJHQi5iKSxcbiAgICAgICAgICAgIGE6IGNvbG9yLm9wYWNpdHlcbiAgICAgICAgfTtcbiAgICAgICAgYWxsU3R5bGVzQXJyYXkucHVzaCh7IG5hbWU6IHBhaW50U3R5bGUubmFtZSwgc3R5bGVLZXk6IHBhaW50U3R5bGUua2V5LCByZ2JhOiByZ2JhIH0pO1xuICAgICAgICBjb25zb2xlLmxvZyhhbGxTdHlsZXNBcnJheSk7XG4gICAgfVxuICAgIC8vIGNvbnNvbGUubG9nKGFsbFN0eWxlc0FycmF5KTtcbn07XG4vLyBSdW4gdGhpcyBpbiB0b2tlbnMgZmlsZVxuY29uc3QgR2V0QWxsTG9jYWxFZmZlY3RTdHlsZXMgPSAoKSA9PiB7XG4gICAgbGV0IGFsbEVmZmVjdFN0eWxlcyA9IGZpZ21hLmdldExvY2FsRWZmZWN0U3R5bGVzKCk7XG4gICAgbGV0IGFsbEVmZmVjdHMgPSBbXTtcbiAgICBmb3IgKGNvbnN0IGVmZmVjdFN0eWxlIG9mIGFsbEVmZmVjdFN0eWxlcykge1xuICAgICAgICBhbGxFZmZlY3RzLnB1c2goeyBuYW1lOiBlZmZlY3RTdHlsZS5uYW1lLCBzdHlsZUtleTogZWZmZWN0U3R5bGUua2V5IH0pO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhhbGxFZmZlY3RzKTtcbn07XG4iLCJleHBvcnQgY29uc3QgRGFya1VpQ29sb3JzID0gW1xuICB7XG4gICAgbmFtZTogXCJkYXJrIHVpIC8gaW50ZW50aW9ucyAvIHByaW1hcnkubWFpblwiLFxuICAgIHN0eWxlS2V5OiBcIjJiNzkyZDg0YzlkZGI1YmI1NGI0ZTdjZTAwMGM1OTVjNzlkNzQ4Y2FcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiZGFyayB1aSAvIGludGVudGlvbnMgLyBwcmltYXJ5LmRhcmtcIixcbiAgICBzdHlsZUtleTogXCJiNDNiZDExMTI1MGNlNzRkNDhjZmQ3MWFjMDBjMWMxYjU1OGIwMmYwXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImRhcmsgdWkgLyBpbnRlbnRpb25zIC8gZXJyb3IubWFpblwiLFxuICAgIHN0eWxlS2V5OiBcIjc2N2MyYTk4OTcwNjJkZWUwZDBmNjMwMDQwNmY2ZTU1ODVmNjg0YzdcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiZGFyayB1aSAvIGludGVudGlvbnMgLyBlcnJvci5kYXJrXCIsXG4gICAgc3R5bGVLZXk6IFwiMzRhOWEzNDRjMjU0MTZkMWE3ZWE2ZDY3MzJkYjEzZTdiYzZjYzM5N1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJkYXJrIHVpIC8gaW50ZW50aW9ucyAvIHdhcm5pbmcubWFpblwiLFxuICAgIHN0eWxlS2V5OiBcIjg5NGZiZDMzNWQ4YjBmNmIxY2VlNGVjNWFjN2EwNDc5Mzk3YTZiNGNcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiZGFyayB1aSAvIGludGVudGlvbnMgLyB3YXJuaW5nLmRhcmtcIixcbiAgICBzdHlsZUtleTogXCI0NGI0MmE4NTA1Mjg0MTM4N2JjNjc3YzU3MTk4NzRjZjAyMDdjYWI1XCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImRhcmsgdWkgLyBpbnRlbnRpb25zIC8gc3VjY2Vzcy5tYWluXCIsXG4gICAgc3R5bGVLZXk6IFwiMmQ0NGYzYTBjNjA4NzhjZWY1ZGJkMTBjNTlhNDE3YWE5MGMwYzFiZlwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJkYXJrIHVpIC8gaW50ZW50aW9ucyAvIHN1Y2Nlc3MuZGFya1wiLFxuICAgIHN0eWxlS2V5OiBcIjQzMjIyNzkxZjdkNWFmZGU4Yjg0YmRiN2E3Yzc1YTZhOGNjOWQzMzRcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiZGFyayB1aSAvIHR5cG9ncmFwaHkgLyB0ZXh0LnByaW1hcnlcIixcbiAgICBzdHlsZUtleTogXCIzZmRiZDQzZGQyNDYzYzY0Yjk0ZTBiODFhOTE2YTYwNmMwOGIwZjFjXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImRhcmsgdWkgLyB0eXBvZ3JhcGh5IC8gdGV4dC5zZWNvbmRhcnlcIixcbiAgICBzdHlsZUtleTogXCI5ZDJlNTExZDlhMzFlYmQ3NmUzMDJhYjI1ZDFlOTk1ZTZhODNhYzFjXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImRhcmsgdWkgLyB0eXBvZ3JhcGh5IC8gdGV4dC5kaXNhYmxlZFwiLFxuICAgIHN0eWxlS2V5OiBcImM5ODg4M2UwN2JlODBiZTZiY2QxODgxNGViMjlhODc3OTdhOTljNmFcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiZGFyayB1aSAvIHR5cG9ncmFwaHkgLyB0ZXh0LmNvbnRyYXN0VGV4dC5wcmltYXJ5XCIsXG4gICAgc3R5bGVLZXk6IFwiNWI2MjJkOWI1ZjE2ZmY0NzFiNjY2ZWU4ZDk1YTM1ZWI1ZTdlNDY0YlwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJkYXJrIHVpIC8gdHlwb2dyYXBoeSAvIHRleHQuY29udHJhc3RUZXh0LmVycm9yXCIsXG4gICAgc3R5bGVLZXk6IFwiYWMzNmI2MGE2N2YzNmVkODA3MGNhYWVkZDA0NTYwMTJhMTBjMjJkNlwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJkYXJrIHVpIC8gdHlwb2dyYXBoeSAvIHRleHQuY29udHJhc3RUZXh0Lndhcm5pbmdcIixcbiAgICBzdHlsZUtleTogXCI1OWM5YmYyYTRkNmMwNGZkOTNjMWI5YWJjYzRjZjUwMWZjYWRiYjIyXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImRhcmsgdWkgLyB0eXBvZ3JhcGh5IC8gdGV4dC5jb250cmFzdFRleHQuc3VjY2Vzc1wiLFxuICAgIHN0eWxlS2V5OiBcIjE5NzJkYzAwMWQzMWRlYzMyNmM4ZTkzN2Y4MzAyZWUzNWZiYjg1M2ZcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiZGFyayB1aSAvIHR5cG9ncmFwaHkgLyB0ZXh0LmFjdGlvbi5kaXNhYmxlZFwiLFxuICAgIHN0eWxlS2V5OiBcIjdmN2E0ZWUxZmJjYjY1MjllNmZiNTY0YTBmNDg4MTg4YjBkYzJiMzdcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiZGFyayB1aSAvIGJ1dHRvbnMgLyBhY3Rpb24uZGlzYWJsZWRCYWNrZ3JvdW5kXCIsXG4gICAgc3R5bGVLZXk6IFwiMjE0YWM0ZGY3OTZiNTFjMGY0MjYwMjhkMGY0MjY4ZWZhNmVlMzY4NVwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJkYXJrIHVpIC8gYmFja2dyb3VuZCAvIGJhY2tncm91bmQuZGVmYXVsdFwiLFxuICAgIHN0eWxlS2V5OiBcIjJmMDYwZTc0MjJhOGFkMTdhMDM3YTI1MGQzNjhjZjY3MWFkYzA0NjhcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiZGFyayB1aSAvIGJhY2tncm91bmQgLyBiYWNrZ3JvdW5kLnBhcGVyXCIsXG4gICAgc3R5bGVLZXk6IFwiMTVmNWZmYWMzZWM5MWIyNDA4OTgxMzQzOWZmYWRkMWY5OTk0YjI5Y1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJkYXJrIHVpIC8gZGl2aWRlciAvIGRpdmlkZXJcIixcbiAgICBzdHlsZUtleTogXCI4NGFiMGYyOThlYThmY2QwYjgyYWM4OTI5OGFkNTExNDBjYTdiNzVhXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImRhcmsgdWkgLyA0RFAgLyBGVFBcIixcbiAgICBzdHlsZUtleTogXCI3YmIwMjhmZjdkODczNDg2Njc4YjdjNjc2NGZjNTBmMzllNTcxZWI2XCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImRhcmsgdWkgLyA0RFAgLyBNQVBcIixcbiAgICBzdHlsZUtleTogXCJkZjU3ZmViYzhlZjc3ZGQyYzM1YmUyZDFiOTQwYWZiODMzMTY2OGI0XCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImRhcmsgdWkgLyA0RFAgLyBBQ1wiLFxuICAgIHN0eWxlS2V5OiBcImU4MTkzYWJmZDJmNzE1ZTQ4YjljYzdjZTRiYzZiOTVjODk3YWEwNGRcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiZGFyayB1aSAvIDREUCAvIE5NXCIsXG4gICAgc3R5bGVLZXk6IFwiODJkNTBmMzAxMWQ4MTU5MDJlZDQzMGRmNmQ3MzQ1ZWNkZjk0NzYxYlwiLFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IExpZ2h0VWlDb2xvcnMgPSBbXG4gIHtcbiAgICBuYW1lOiBcImxpZ2h0IHVpIC8gaW50ZW50aW9ucyAvIHByaW1hcnkubWFpblwiLFxuICAgIHN0eWxlS2V5OiBcImNmMGM4ZTg4ZWI2NWI4MDQ5ZmVjYTYwYWM4M2UxZGUzZDNhYjZlOGJcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwibGlnaHQgdWkgLyBpbnRlbnRpb25zIC8gcHJpbWFyeS5kYXJrXCIsXG4gICAgc3R5bGVLZXk6IFwiZGE5Mzg2OThjOWQyMjMyMjFkNjNjN2M1NTAxYTkwNTdhMGQ1ZjZmYlwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJsaWdodCB1aSAvIGludGVudGlvbnMgLyBlcnJvci5tYWluXCIsXG4gICAgc3R5bGVLZXk6IFwiNzk4Y2I4Zjg5OGFiMmE1MDhhN2JhNDkxZDg5OTAxMWZkYTg5NjU3N1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJsaWdodCB1aSAvIGludGVudGlvbnMgLyBlcnJvci5kYXJrXCIsXG4gICAgc3R5bGVLZXk6IFwiMTI3NzY0NTZlNjhhZGY0YWI1ZTM5MTc5N2MzYzg0ZTkyYjBmODZjMlwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJsaWdodCB1aSAvIGludGVudGlvbnMgLyB3YXJuaW5nLm1haW5cIixcbiAgICBzdHlsZUtleTogXCJmMjdhNjBkZjhjMTYyMTg1ZWEyNDcyYTgwMWIyNzFlZjY2MmMwNDI5XCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImxpZ2h0IHVpIC8gaW50ZW50aW9ucyAvIHdhcm5pbmcuZGFya1wiLFxuICAgIHN0eWxlS2V5OiBcIjYxNWQ2ZDVjYWM0ODU1ZTk4MWM4Yjk0MmI5ODZlZTcwNWI1NjhiMjhcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwibGlnaHQgdWkgLyBpbnRlbnRpb25zIC8gc3VjY2Vzcy5tYWluXCIsXG4gICAgc3R5bGVLZXk6IFwiZTRhYTQxZThiZjUyZjk0ZWY1ZmNlMzY2OWY1MTBhZjNjYjc5YzVhN1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJsaWdodCB1aSAvIGludGVudGlvbnMgLyBzdWNjZXNzLmRhcmtcIixcbiAgICBzdHlsZUtleTogXCJkOTg4M2I1M2MyNTM5YmYxZTEwNjgyMDVmZTFkMDU5ZDU4MzE1ZTRmXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImxpZ2h0IHVpIC8gdHlwb2dyYXBoeSAvIHRleHQucHJpbWFyeVwiLFxuICAgIHN0eWxlS2V5OiBcIjhmMDVjNjNkZTdmMTAwYjJiZDhmYWQ3YjhiZDcxNDg5YjYzN2MwNjdcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwibGlnaHQgdWkgLyB0eXBvZ3JhcGh5IC8gdGV4dC5zZWNvbmRhcnlcIixcbiAgICBzdHlsZUtleTogXCI5NzA2M2E1ZjYyYzM1NGU2YWUwOTE5ZDUwYjY4ZDBiYWRiNGExMjJlXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImxpZ2h0IHVpIC8gdHlwb2dyYXBoeSAvIHRleHQuZGlzYWJsZWRcIixcbiAgICBzdHlsZUtleTogXCJhODA5Zjc1ZTE0ZmJlNjI5NjI3MmU4NTMxMTA2ZjZjYzRjNjkyNTUzXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImxpZ2h0IHVpIC8gdHlwb2dyYXBoeSAvIHRleHQuY29udHJhc3RUZXh0LnByaW1hcnlcIixcbiAgICBzdHlsZUtleTogXCJiMjhhN2ZjZGQyNDczMjNkN2JhOTk5NjFjOTYwOGNmODM3OGJhZGExXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImxpZ2h0IHVpIC8gdHlwb2dyYXBoeSAvIHRleHQuY29udHJhc3RUZXh0LmVycm9yXCIsXG4gICAgc3R5bGVLZXk6IFwiYzQyYzVmMTk5MDM5MGM0MTNhZTYyOTI1ZTlhZjBkNTFiZjMyYzk0NVwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJsaWdodCB1aSAvIHR5cG9ncmFwaHkgLyB0ZXh0LmNvbnRyYXN0VGV4dC53YXJuaW5nXCIsXG4gICAgc3R5bGVLZXk6IFwiZWVjZDgyY2NhYWU5ODg2MjRjNDVmMjgyOTY1NjQwMzdkYTg1Y2MxYVwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJsaWdodCB1aSAvIHR5cG9ncmFwaHkgLyB0ZXh0LmNvbnRyYXN0VGV4dC5zdWNjZXNzXCIsXG4gICAgc3R5bGVLZXk6IFwiZDdkYmFlZjY2YTkzMmZmMjc2ZjZmNGFhNTE5ODVhMDU5ZGVkZmJmOFwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJsaWdodCB1aSAvIHR5cG9ncmFwaHkgLyB0ZXh0LmFjdGlvbi5kaXNhYmxlZFwiLFxuICAgIHN0eWxlS2V5OiBcImY4MWExZjc0ODcwMzE2OThkMTVjMjM5NGU0Yzc0ZmNjOWVjY2MyOTlcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwibGlnaHQgdWkgLyBidXR0b25zIC8gYWN0aW9uLmRpc2FibGVkQmFja2dyb3VuZFwiLFxuICAgIHN0eWxlS2V5OiBcIjczYjE1ZTNhNzllZWVhNzU3MjgzYTQ0Y2Y3MTEzMTMwNWNiYTIzOTlcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwibGlnaHQgdWkgLyBiYWNrZ3JvdW5kIC8gYmFja2dyb3VuZC5kZWZhdWx0XCIsXG4gICAgc3R5bGVLZXk6IFwiMjNlOTRmY2VlZDlhY2NiZGE0ZGI5YzY3MmM0M2QyMWI0ZDI4NmU0Y1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJsaWdodCB1aSAvIGJhY2tncm91bmQgLyBiYWNrZ3JvdW5kLnBhcGVyXCIsXG4gICAgc3R5bGVLZXk6IFwiOTAzZTViZjI3NDEzOWVlYjlmNDk2OGE5ZWYwOGVjMDVlYWYwYjI3NFwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJsaWdodCB1aSAvIGRpdmlkZXIgLyBkaXZpZGVyXCIsXG4gICAgc3R5bGVLZXk6IFwiZWU0ZGRjZTJlNTZhZDQ3YzQyMTZkNTgyN2EyODNiOTQzYTc5NGM3OFwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJsaWdodCB1aSAvIDREUCAvIEZUUFwiLFxuICAgIHN0eWxlS2V5OiBcIjIyNGU0OTEyMDI3YmU5Zjc1Njg1ZmQ0MGIyNTI4YmE5ZjM0ZmU5NThcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwibGlnaHQgdWkgLyA0RFAgLyBNQVBcIixcbiAgICBzdHlsZUtleTogXCJhYWEzYTUzMWExMjRmYTg1NGUwOWQzOThmOThmYjQ3Yjk4OWE4YTcyXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImxpZ2h0IHVpIC8gNERQIC8gQUNcIixcbiAgICBzdHlsZUtleTogXCIyMjBkMzQ5Mzc0N2NkOGQ4YmRjNWQ0YTBlNzk2NWMzNmEzYzUyMzQ5XCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImxpZ2h0IHVpIC8gNERQIC8gTk1cIixcbiAgICBzdHlsZUtleTogXCJkZGNiZjY4ZmE1YzFlYWE3MjA3NzE2NDI3MmI3YWU1YjllNWU0ZWQ3XCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcInV0aWxpdHkgLyBtYXNrXCIsXG4gICAgc3R5bGVLZXk6IFwiZDA0ZGIyNmJmODk3MzUyZjVjYzQ5YjM4NTRmYTZiN2U5ODFiMThlNlwiLFxuICB9LFxuXTtcbiIsImV4cG9ydCBjb25zdCBMaWdodFVpRWZmZWN0cyA9IFtcbiAge1xuICAgIG5hbWU6IFwibGlnaHQgdWkgLyBib3JkZXIgLyB0b3BcIixcbiAgICBzdHlsZUtleTogXCJiNDg3MjJkNjE2NDhkN2M2NTY1ZmVhNjQwMzYxODUzZWM1MzYzOWQxXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImxpZ2h0IHVpIC8gYm9yZGVyIC8gcmlnaHRcIixcbiAgICBzdHlsZUtleTogXCIzMzk0ZmVlOGUzZjA4ZWRjN2Q2MGQ2YWFiMjlmMGYzZjhlZTFiMWIyXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImxpZ2h0IHVpIC8gYm9yZGVyIC8gYm90dG9tXCIsXG4gICAgc3R5bGVLZXk6IFwiZjYzZmZmMzlhZTAyMWYwNzc5YjZkNDZkYzk3NWJjNTc4ZGQzYjdjNVwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJsaWdodCB1aSAvIGJvcmRlciAvIGxlZnRcIixcbiAgICBzdHlsZUtleTogXCI5ZWRkZGY3ODBiZjQ0NTE1ZDk1ZTJhNGJmZjYwMzZlMjQ3ZGE1YWY1XCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImxpZ2h0IHVpIC8gYm9yZGVyIC8gdG9wICYgYm90dG9tXCIsXG4gICAgc3R5bGVLZXk6IFwiMjNjMTE5MTZlNmFmNDEzZWYyMjBhY2ZjYzQwMTk1ZDgyZmUzMDNiNVwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJsaWdodCB1aSAvIGJvcmRlciAvIGxlZnQgJiByaWdodFwiLFxuICAgIHN0eWxlS2V5OiBcImE2NDQ3YjcyMTA5MDFiY2E0NWI5OGZlOTE4YWM1NTU0MGZhODM1NGVcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwibGlnaHQgdWkgLyBzaGFkb3cgLyBsb3dcIixcbiAgICBzdHlsZUtleTogXCI4Y2NlYTlkNTIzY2Y5ZGMxM2ZlZTY4ZjM5MmYzZjljYzMxODdhNDU3XCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImxpZ2h0IHVpIC8gc2hhZG93IC8gaGlnaFwiLFxuICAgIHN0eWxlS2V5OiBcImM2MTI1M2MzOGY2ZDBkOWYzYjMwMmE3N2EzODA3ZTA1MmU5YzNmOTFcIixcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBEYXJrVWlFZmZlY3RzID0gW1xuICB7XG4gICAgbmFtZTogXCJkYXJrIHVpIC8gYm9yZGVyIC8gdG9wXCIsXG4gICAgc3R5bGVLZXk6IFwiZDM5NGM2ZmY3OGE5NGM5MDBmMzQ0YjUzZjFkN2UwZTdlY2RjY2Q3OVwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJkYXJrIHVpIC8gYm9yZGVyIC8gcmlnaHRcIixcbiAgICBzdHlsZUtleTogXCI0MzNjNjA1ZjM0ZTlhODhkMDM1MGYyMmZlNThjOWFmYzhmMGU3ZGQ3XCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImRhcmsgdWkgLyBib3JkZXIgLyBib3R0b21cIixcbiAgICBzdHlsZUtleTogXCIzZTQ2NzQ4MTA1MTA2YjY1NDQwYzI0ZjFiOWU0MWM5OTRmZGFjNDAyXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImRhcmsgdWkgLyBib3JkZXIgLyBsZWZ0XCIsXG4gICAgc3R5bGVLZXk6IFwiZjg4YjIyN2RkNmQ2YjRmODI4NWIyZTE3OWE3YzdkNDI3N2YwZmIzMVwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJkYXJrIHVpIC8gYm9yZGVyIC8gdG9wICYgYm90dG9tXCIsXG4gICAgc3R5bGVLZXk6IFwiYTM0ZjNkMGEyMmMyNDU5Y2ZjNjI2ZjE3OGM0N2Q5YmIxYmE4YjJhNVwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJkYXJrIHVpIC8gYm9yZGVyIC8gbGVmdCAmIHJpZ2h0XCIsXG4gICAgc3R5bGVLZXk6IFwiZmMwNmI4ZTcwMzJmYzliMWZhMDdhZjVlMzkyOTNkZjIxNTBmZjRkY1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJkYXJrIHVpIC8gc2hhZG93IC8gbG93XCIsXG4gICAgc3R5bGVLZXk6IFwiOTg3NjE5MDRiY2M5ZDM4YzgxZWUyM2U3YjQzMmQ4Yzk3ZTI5ZjBjMVwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJkYXJrIHVpIC8gc2hhZG93IC8gaGlnaFwiLFxuICAgIHN0eWxlS2V5OiBcIjIwOWI0NTFlNGY2OGY1YmYzYWRlMjRlZjM2YTEwYTYwOWNkYWUyMzlcIixcbiAgfSxcbl07XG4iXSwic291cmNlUm9vdCI6IiJ9