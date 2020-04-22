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


const LightThemeTraverse = (node) => __awaiter(void 0, void 0, void 0, function* () {
    let darkUIBackgroundDefault = yield _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].darkUI.backgroundDefault;
    let darkUIBackgroundSurface = yield _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].darkUI.backgroundSurface;
    let darkUIDivider = yield _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].darkUI.divider;
    let darkUIPrimary = yield _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].darkUI.primary;
    let darkUIPrimaryHover = yield _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].darkUI.primaryHover;
    let darkUIDanger = yield _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].darkUI.danger;
    let darkUISuccess = yield _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].darkUI.success;
    let darkUIWarning = yield _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].darkUI.warning;
    let darkUIOnPrimary = yield _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].darkUI.onPrimary;
    let darkUIOnDanger = yield _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].darkUI.onDanger;
    let darkUIOnSuccess = yield _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].darkUI.onSuccess;
    let darkUIOnWarning = yield _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].darkUI.onWarning;
    let darkUIOnBackgroundHigh = yield _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].darkUI.onBackgroundHigh;
    let darkUIOnBackgroundMedium = yield _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].darkUI.onBackgroundMedium;
    let darkUIOnBackgroundDisabled = yield _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].darkUI
        .onBackgroundDisabled;
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
        case darkUIDivider.id:
            _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].lightUI.divider.then((resp) => {
                node.strokeStyleId = resp.id;
            });
            break;
        case darkUIPrimary.id:
            _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].lightUI.primary.then((resp) => {
                node.strokeStyleId = resp.id;
            });
            break;
        case darkUIDanger.id:
            _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].lightUI.danger.then((resp) => {
                node.strokeStyleId = resp.id;
            });
            break;
        case darkUISuccess.id:
            _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].lightUI.success.then((resp) => {
                node.strokeStyleId = resp.id;
            });
            break;
        case darkUIWarning.id:
            _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].lightUI.warning.then((resp) => {
                node.strokeStyleId = resp.id;
            });
            break;
        case darkUIOnBackgroundHigh.id:
            _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].lightUI.onBackgroundHigh.then((resp) => {
                node.strokeStyleId = resp.id;
            });
            break;
        case darkUIOnBackgroundMedium.id:
            _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].lightUI.onBackgroundMedium.then((resp) => {
                node.strokeStyleId = resp.id;
            });
            break;
        case darkUIOnBackgroundDisabled.id:
            _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].lightUI.onBackgroundDisabled.then((resp) => {
                node.strokeStyleId = resp.id;
            });
            break;
        case darkUIOnWarning.id:
            _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].lightUI.onWarning.then((resp) => {
                node.strokeStyleId = resp.id;
            });
            break;
    }
    // Fills
    switch (node.fillStyleId) {
        case darkUIBackgroundDefault.id:
            _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].lightUI.backgroundDefault.then((resp) => {
                node.fillStyleId = resp.id;
            });
            break;
        case darkUIBackgroundSurface.id:
            _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].lightUI.backgroundSurface.then((resp) => {
                node.fillStyleId = resp.id;
            });
            break;
        case darkUIDivider.id:
            _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].lightUI.divider.then((resp) => {
                node.fillStyleId = resp.id;
            });
            break;
        case darkUIPrimary.id:
            _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].lightUI.primary.then((resp) => {
                node.fillStyleId = resp.id;
            });
            break;
        case darkUIPrimaryHover.id:
            _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].lightUI.primaryHover.then((resp) => {
                node.fillStyleId = resp.id;
            });
            break;
        case darkUIDanger.id:
            _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].lightUI.danger.then((resp) => {
                node.fillStyleId = resp.id;
            });
            break;
        case darkUISuccess.id:
            _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].lightUI.success.then((resp) => {
                node.fillStyleId = resp.id;
            });
            break;
        case darkUIWarning.id:
            _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].lightUI.warning.then((resp) => {
                node.fillStyleId = resp.id;
            });
            break;
        case darkUIOnPrimary.id:
            _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].lightUI.onPrimary.then((resp) => {
                node.fillStyleId = resp.id;
            });
            break;
        case darkUIOnDanger.id:
            _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].lightUI.onDanger.then((resp) => {
                node.fillStyleId = resp.id;
            });
            break;
        case darkUIOnSuccess.id:
            _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].lightUI.onSuccess.then((resp) => {
                node.fillStyleId = resp.id;
            });
            break;
        case darkUIOnWarning.id:
            _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].lightUI.onWarning.then((resp) => {
                node.fillStyleId = resp.id;
            });
            break;
        case darkUIOnBackgroundHigh.id:
            _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].lightUI.onBackgroundHigh.then((resp) => {
                node.fillStyleId = resp.id;
            });
            break;
        case darkUIOnBackgroundMedium.id:
            _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].lightUI.onBackgroundMedium.then((resp) => {
                node.fillStyleId = resp.id;
            });
            break;
        case darkUIOnBackgroundDisabled.id:
            _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].lightUI.onBackgroundDisabled.then((resp) => {
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
const DarkThemeTraverse = (node) => __awaiter(void 0, void 0, void 0, function* () {
    let lightUIBackgroundDefault = yield _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].lightUI.backgroundDefault;
    let lightUIBackgroundSurface = yield _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].lightUI.backgroundSurface;
    let lightUIDivider = yield _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].lightUI.divider;
    let lightUIPrimary = yield _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].lightUI.primary;
    let lightUIPrimaryHover = yield _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].lightUI.primaryHover;
    let lightUIDanger = yield _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].lightUI.danger;
    let lightUISuccess = yield _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].lightUI.success;
    let lightUIWarning = yield _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].lightUI.warning;
    let lightUIOnPrimary = yield _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].lightUI.onPrimary;
    let lightUIOnDanger = yield _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].lightUI.onDanger;
    let lightUIOnSuccess = yield _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].lightUI.onSuccess;
    let lightUIOnWarning = yield _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].lightUI.onWarning;
    let lightUIonBackgroundHigh = yield _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].lightUI.onBackgroundHigh;
    let lightUIOnBackgroundMedium = yield _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].lightUI.onBackgroundMedium;
    let lightUIOnBackgroundDisabled = yield _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].lightUI
        .onBackgroundDisabled;
    // Effects
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
        case lightUIDivider.id:
            _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].darkUI.divider.then((resp) => {
                node.strokeStyleId = resp.id;
            });
            break;
        case lightUIPrimary.id:
            _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].darkUI.primary.then((resp) => {
                node.strokeStyleId = resp.id;
            });
            break;
        case lightUIDanger.id:
            _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].darkUI.danger.then((resp) => {
                node.strokeStyleId = resp.id;
            });
            break;
        case lightUIWarning.id:
            _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].darkUI.warning.then((resp) => {
                node.strokeStyleId = resp.id;
            });
            break;
        case lightUISuccess.id:
            _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].darkUI.success.then((resp) => {
                node.strokeStyleId = resp.id;
            });
            break;
        case lightUIonBackgroundHigh.id:
            _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].darkUI.onBackgroundHigh.then((resp) => {
                node.strokeStyleId = resp.id;
            });
            break;
        case lightUIOnBackgroundMedium.id:
            _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].darkUI.onBackgroundMedium.then((resp) => {
                node.strokeStyleId = resp.id;
            });
            break;
        case lightUIOnBackgroundDisabled.id:
            _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].darkUI.onBackgroundDisabled.then((resp) => {
                node.strokeStyleId = resp.id;
            });
            break;
    }
    // Fill
    switch (node.fillStyleId) {
        case lightUIBackgroundDefault.id:
            _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].darkUI.backgroundDefault.then((resp) => {
                node.fillStyleId = resp.id;
            });
            break;
        case lightUIBackgroundSurface.id:
            _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].darkUI.backgroundSurface.then((resp) => {
                node.fillStyleId = resp.id;
            });
            break;
        case lightUIDivider.id:
            _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].darkUI.divider.then((resp) => {
                node.fillStyleId = resp.id;
            });
            break;
        case lightUIPrimary.id:
            _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].darkUI.primary.then((resp) => {
                node.fillStyleId = resp.id;
            });
            break;
        case lightUIPrimaryHover.id:
            _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].darkUI.primaryHover.then((resp) => {
                node.fillStyleId = resp.id;
            });
            break;
        case lightUIDanger.id:
            _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].darkUI.danger.then((resp) => {
                node.fillStyleId = resp.id;
            });
            break;
        case lightUISuccess.id:
            _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].darkUI.success.then((resp) => {
                node.fillStyleId = resp.id;
            });
            break;
        case lightUIWarning.id:
            _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].darkUI.warning.then((resp) => {
                node.fillStyleId = resp.id;
            });
            break;
        case lightUIOnPrimary.id:
            _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].darkUI.onPrimary.then((resp) => {
                node.fillStyleId = resp.id;
            });
            break;
        case lightUIOnDanger.id:
            _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].darkUI.onDanger.then((resp) => {
                node.fillStyleId = resp.id;
            });
            break;
        case lightUIOnSuccess.id:
            _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].darkUI.onSuccess.then((resp) => {
                node.fillStyleId = resp.id;
            });
            break;
        case lightUIOnWarning.id:
            _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].darkUI.onWarning.then((resp) => {
                node.fillStyleId = resp.id;
            });
            break;
        case lightUIonBackgroundHigh.id:
            _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].darkUI.onBackgroundHigh.then((resp) => {
                node.fillStyleId = resp.id;
            });
            break;
        case lightUIOnBackgroundMedium.id:
            _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].darkUI.onBackgroundMedium.then((resp) => {
                node.fillStyleId = resp.id;
            });
            break;
        case lightUIOnBackgroundDisabled.id:
            _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].darkUI.onBackgroundDisabled.then((resp) => {
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
    backgroundDefault: figma.importStyleByKeyAsync(
      "23e94fceed9accbda4db9c672c43d21b4d286e4c"
    ),
    backgroundSurface: figma.importStyleByKeyAsync(
      "903e5bf274139eeb9f4968a9ef08ec05eaf0b274"
    ),
    divider: figma.importStyleByKeyAsync(
      "ee4ddce2e56ad47c4216d5827a283b943a794c78"
    ),
    primary: figma.importStyleByKeyAsync(
      "cf0c8e88eb65b8049feca60ac83e1de3d3ab6e8b"
    ),
    primaryHover: figma.importStyleByKeyAsync(
      "da938698c9d223221d63c7c5501a9057a0d5f6fb"
    ),
    danger: figma.importStyleByKeyAsync(
      "798cb8f898ab2a508a7ba491d899011fda896577"
    ),
    success: figma.importStyleByKeyAsync(
      "e4aa41e8bf52f94ef5fce3669f510af3cb79c5a7"
    ),
    warning: figma.importStyleByKeyAsync(
      "f27a60df8c162185ea2472a801b271ef662c0429"
    ),
    onPrimary: figma.importStyleByKeyAsync(
      "5de7892ca442a33bfa46252bd38be6cbf54ab43c"
    ),
    onDanger: figma.importStyleByKeyAsync(
      "2afe54245c38fff1b1ba81385e98ffde50701c39"
    ),
    onSuccess: figma.importStyleByKeyAsync(
      "f0820b6f7ce1a372d08e3173a4f86a121165560c"
    ),
    onWarning: figma.importStyleByKeyAsync(
      "5933b83ef4273295e2152e49fe46698dd29eef95"
    ),
    onBackgroundHigh: figma.importStyleByKeyAsync(
      "8f05c63de7f100b2bd8fad7b8bd71489b637c067"
    ),
    onBackgroundMedium: figma.importStyleByKeyAsync(
      "97063a5f62c354e6ae0919d50b68d0badb4a122e"
    ),
    onBackgroundDisabled: figma.importStyleByKeyAsync(
      "a809f75e14fbe6296272e8531106f6cc4c692553"
    ),
  },
  darkUI: {
    backgroundDefault: figma.importStyleByKeyAsync(
      "2f060e7422a8ad17a037a250d368cf671adc0468"
    ),
    backgroundSurface: figma.importStyleByKeyAsync(
      "15f5ffac3ec91b24089813439ffadd1f9994b29c"
    ),
    divider: figma.importStyleByKeyAsync(
      "84ab0f298ea8fcd0b82ac89298ad51140ca7b75a"
    ),
    primary: figma.importStyleByKeyAsync(
      "1b038ec600d2a14b6cce35f7b4090c6ad2dd2c7d"
    ),
    primaryHover: figma.importStyleByKeyAsync(
      "e57defa9753fa55dc8712d9172e7e471c5600ac6"
    ),
    danger: figma.importStyleByKeyAsync(
      "00e4381cfb851f7f7c87084c5cfad11efb80cc23"
    ),
    success: figma.importStyleByKeyAsync(
      "8bea2a030cb741daf2691d23981bed0e8853f62b"
    ),
    warning: figma.importStyleByKeyAsync(
      "563a4405b1a838676ab54f98af6f83625df87b9c"
    ),
    onPrimary: figma.importStyleByKeyAsync(
      "3fdbd43dd2463c64b94e0b81a916a606c08b0f1c"
    ),
    onDanger: figma.importStyleByKeyAsync(
      "7adcf2e59e31881a1ca5d1e9d6a8e305027ae1fe"
    ),
    onSuccess: figma.importStyleByKeyAsync(
      "88a0fbcc68d3ac9a7c88f5bc4ebdbd3e9d5aa644"
    ),
    onWarning: figma.importStyleByKeyAsync(
      "0c6b70cb814872105978874e2bf91c1a5a95965d"
    ),
    onBackgroundHigh: figma.importStyleByKeyAsync(
      "5e8e492598c4f6e18d86d87b3ad10e8567fa7fd1"
    ),
    onBackgroundMedium: figma.importStyleByKeyAsync(
      "9d2e511d9a31ebd76e302ab25d1e995e6a83ac1c"
    ),
    onBackgroundDisabled: figma.importStyleByKeyAsync(
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvZGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlci9jYWxsYmFjay50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVyL2NvbG9yLWNoZWNrLnRzIiwid2VicGFjazovLy8uL3NyYy9oZWxwZXIvZm9yY2UtYXV0by1sYXlvdXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlci9zcGFjaW5nLWNoZWNrLnRzIiwid2VicGFjazovLy8uL3NyYy9oZWxwZXIvc3BhY2luZy1zbGlkZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlci90aGVtZS1zd2FwLnRzIiwid2VicGFjazovLy8uL3NyYy90aGVtZS1zdHlsZXMvY29sb3JzLmpzIiwid2VicGFjazovLy8uL3NyYy90aGVtZS1zdHlsZXMvZWZmZWN0cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsaUJBQWlCO0FBQ2dEO0FBQ2Q7QUFDSjtBQUN1QztBQUNNO0FBQ2pEO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDBFQUFpQjtBQUNyQixDQUFDO0FBQ0Q7QUFDQTtBQUNBLFFBQVEsNEVBQWlCO0FBQ3pCO0FBQ0E7QUFDQSxRQUFRLDZFQUFrQjtBQUMxQjtBQUNBO0FBQ0EsUUFBUSw4RUFBa0I7QUFDMUI7QUFDQTtBQUNBLFFBQVEsa0ZBQW9CO0FBQzVCO0FBQ0E7QUFDQSxRQUFRLHNGQUF1QjtBQUMvQjtBQUNBO0FBQ0EsUUFBUSxvRkFBcUI7QUFDN0I7QUFDQTtBQUNBLFFBQVEsMEVBQVc7QUFDbkI7QUFDQTtBQUNBLFFBQVEsMkZBQXlCO0FBQ2pDO0FBQ0E7QUFDQSxRQUFRLHlGQUF1QjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDckRBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzZCOzs7Ozs7Ozs7Ozs7O0FDcEI3QjtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsbUJBQW1CO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLEtBQU87QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBbUI7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixtQkFBbUI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxlQUFlO0FBQ2xEO0FBQ0E7QUFDQSxxREFBcUQsZUFBZTtBQUNwRTtBQUNBO0FBQzhCOzs7Ozs7Ozs7Ozs7O0FDN0g5QjtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUM4RDs7Ozs7Ozs7Ozs7OztBQ1Y5RDtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDZ0M7Ozs7Ozs7Ozs7Ozs7QUMzS2hDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixvQ0FBb0M7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isa0NBQWtDO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixpQ0FBaUM7QUFDckQ7QUFDQTtBQUN1RTs7Ozs7Ozs7Ozs7OztBQ3BMdkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFpQixTQUFJLElBQUksU0FBSTtBQUM3QiwyQkFBMkIsK0RBQStELGdCQUFnQixFQUFFLEVBQUU7QUFDOUc7QUFDQSxtQ0FBbUMsTUFBTSw2QkFBNkIsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNqRyxrQ0FBa0MsTUFBTSxpQ0FBaUMsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNwRywrQkFBK0IscUZBQXFGO0FBQ3BIO0FBQ0EsS0FBSztBQUNMO0FBQ3NEO0FBQ0c7QUFDekQ7QUFDQSx3Q0FBd0MsaUVBQVk7QUFDcEQsd0NBQXdDLGlFQUFZO0FBQ3BELDhCQUE4QixpRUFBWTtBQUMxQyw4QkFBOEIsaUVBQVk7QUFDMUMsbUNBQW1DLGlFQUFZO0FBQy9DLDZCQUE2QixpRUFBWTtBQUN6Qyw4QkFBOEIsaUVBQVk7QUFDMUMsOEJBQThCLGlFQUFZO0FBQzFDLGdDQUFnQyxpRUFBWTtBQUM1QywrQkFBK0IsaUVBQVk7QUFDM0MsZ0NBQWdDLGlFQUFZO0FBQzVDLGdDQUFnQyxpRUFBWTtBQUM1Qyx1Q0FBdUMsaUVBQVk7QUFDbkQseUNBQXlDLGlFQUFZO0FBQ3JELDJDQUEyQyxpRUFBWTtBQUN2RDtBQUNBLGdDQUFnQyxvRUFBYztBQUM5QyxpQ0FBaUMsb0VBQWM7QUFDL0MsZ0NBQWdDLG9FQUFjO0FBQzlDLGtDQUFrQyxvRUFBYztBQUNoRCxtQ0FBbUMsb0VBQWM7QUFDakQsaUNBQWlDLG9FQUFjO0FBQy9DLHNDQUFzQyxvRUFBYztBQUNwRCxzQ0FBc0Msb0VBQWM7QUFDcEQ7QUFDQTtBQUNBO0FBQ0EsWUFBWSxpRUFBWTtBQUN4QjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsWUFBWSxpRUFBWTtBQUN4QjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsWUFBWSxpRUFBWTtBQUN4QjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsWUFBWSxpRUFBWTtBQUN4QjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsWUFBWSxpRUFBWTtBQUN4QjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsWUFBWSxpRUFBWTtBQUN4QjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsWUFBWSxpRUFBWTtBQUN4QjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsWUFBWSxpRUFBWTtBQUN4QjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsWUFBWSxpRUFBWTtBQUN4QjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxpRUFBWTtBQUN4QjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsWUFBWSxpRUFBWTtBQUN4QjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsWUFBWSxpRUFBWTtBQUN4QjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsWUFBWSxpRUFBWTtBQUN4QjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsWUFBWSxpRUFBWTtBQUN4QjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsWUFBWSxpRUFBWTtBQUN4QjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsWUFBWSxpRUFBWTtBQUN4QjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsWUFBWSxpRUFBWTtBQUN4QjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsWUFBWSxpRUFBWTtBQUN4QjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsWUFBWSxpRUFBWTtBQUN4QjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsWUFBWSxpRUFBWTtBQUN4QjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsWUFBWSxpRUFBWTtBQUN4QjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsWUFBWSxpRUFBWTtBQUN4QjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsWUFBWSxpRUFBWTtBQUN4QjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsWUFBWSxpRUFBWTtBQUN4QjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxvRUFBYztBQUMxQjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsWUFBWSxvRUFBYztBQUMxQjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsWUFBWSxvRUFBYztBQUMxQjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsWUFBWSxvRUFBYztBQUMxQjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsWUFBWSxvRUFBYztBQUMxQjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsWUFBWSxvRUFBYztBQUMxQjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsWUFBWSxvRUFBYztBQUMxQjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsWUFBWSxvRUFBYztBQUMxQjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EseUNBQXlDLGlFQUFZO0FBQ3JELHlDQUF5QyxpRUFBWTtBQUNyRCwrQkFBK0IsaUVBQVk7QUFDM0MsK0JBQStCLGlFQUFZO0FBQzNDLG9DQUFvQyxpRUFBWTtBQUNoRCw4QkFBOEIsaUVBQVk7QUFDMUMsK0JBQStCLGlFQUFZO0FBQzNDLCtCQUErQixpRUFBWTtBQUMzQyxpQ0FBaUMsaUVBQVk7QUFDN0MsZ0NBQWdDLGlFQUFZO0FBQzVDLGlDQUFpQyxpRUFBWTtBQUM3QyxpQ0FBaUMsaUVBQVk7QUFDN0Msd0NBQXdDLGlFQUFZO0FBQ3BELDBDQUEwQyxpRUFBWTtBQUN0RCw0Q0FBNEMsaUVBQVk7QUFDeEQ7QUFDQTtBQUNBLGlDQUFpQyxvRUFBYztBQUMvQyxrQ0FBa0Msb0VBQWM7QUFDaEQsaUNBQWlDLG9FQUFjO0FBQy9DLG1DQUFtQyxvRUFBYztBQUNqRCxvQ0FBb0Msb0VBQWM7QUFDbEQsa0NBQWtDLG9FQUFjO0FBQ2hELHVDQUF1QyxvRUFBYztBQUNyRCx1Q0FBdUMsb0VBQWM7QUFDckQ7QUFDQTtBQUNBO0FBQ0EsWUFBWSxpRUFBWTtBQUN4QjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsWUFBWSxpRUFBWTtBQUN4QjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsWUFBWSxpRUFBWTtBQUN4QjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsWUFBWSxpRUFBWTtBQUN4QjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsWUFBWSxpRUFBWTtBQUN4QjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsWUFBWSxpRUFBWTtBQUN4QjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsWUFBWSxpRUFBWTtBQUN4QjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsWUFBWSxpRUFBWTtBQUN4QjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxpRUFBWTtBQUN4QjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsWUFBWSxpRUFBWTtBQUN4QjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsWUFBWSxpRUFBWTtBQUN4QjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsWUFBWSxpRUFBWTtBQUN4QjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsWUFBWSxpRUFBWTtBQUN4QjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsWUFBWSxpRUFBWTtBQUN4QjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsWUFBWSxpRUFBWTtBQUN4QjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsWUFBWSxpRUFBWTtBQUN4QjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsWUFBWSxpRUFBWTtBQUN4QjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsWUFBWSxpRUFBWTtBQUN4QjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsWUFBWSxpRUFBWTtBQUN4QjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsWUFBWSxpRUFBWTtBQUN4QjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsWUFBWSxpRUFBWTtBQUN4QjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsWUFBWSxpRUFBWTtBQUN4QjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsWUFBWSxpRUFBWTtBQUN4QjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxvRUFBYztBQUMxQjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsWUFBWSxvRUFBYztBQUMxQjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsWUFBWSxvRUFBYztBQUMxQjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsWUFBWSxvRUFBYztBQUMxQjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsWUFBWSxvRUFBYztBQUMxQjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsWUFBWSxvRUFBYztBQUMxQjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsWUFBWSxvRUFBYztBQUMxQjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsWUFBWSxvRUFBYztBQUMxQjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNnRDs7Ozs7Ozs7Ozs7OztBQy9aakQ7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRXdCOzs7Ozs7Ozs7Ozs7O0FDdkd4QjtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFMEIiLCJmaWxlIjoiY29kZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2NvZGUudHNcIik7XG4iLCIvLyBUaGlzIHBsdWdpbiB3aWxsIG9wZW4gYSBtb2RhbCB0byBwcm9tcHQgdGhlIHVzZXIgdG8gZW50ZXIgYSBudW1iZXIsIGFuZFxuLy8gaXQgd2lsbCB0aGVuIGNyZWF0ZSB0aGF0IG1hbnkgcmVjdGFuZ2xlcyBvbiB0aGUgc2NyZWVuLlxuLy8gVGhpcyBmaWxlIGhvbGRzIHRoZSBtYWluIGNvZGUgZm9yIHRoZSBwbHVnaW5zLiBJdCBoYXMgYWNjZXNzIHRvIHRoZSAqZG9jdW1lbnQqLlxuLy8gWW91IGNhbiBhY2Nlc3MgYnJvd3NlciBBUElzIGluIHRoZSA8c2NyaXB0PiB0YWcgaW5zaWRlIFwidWkuaHRtbFwiIHdoaWNoIGhhcyBhXG4vLyBmdWxsIGJyb3dzZXIgZW52aXJvbWVudCAoc2VlIGRvY3VtZW50YXRpb24pLlxuLy8gaW1wb3J0IHsgU3BhY2luZ0RlZmF1bHQgfSBmcm9tIFwiLi9oZWxwZXIvc3BhY2luZy1kZWZhdWx0XCI7XG5pbXBvcnQgeyBMaWdodFRoZW1lVHJhdmVyc2UsIERhcmtUaGVtZVRyYXZlcnNlIH0gZnJvbSBcIi4vaGVscGVyL3RoZW1lLXN3YXBcIjtcbmltcG9ydCB7IFNwYWNpbmdDaGVja1RyYXZlcnNlIH0gZnJvbSBcIi4vaGVscGVyL3NwYWNpbmctY2hlY2tcIjtcbmltcG9ydCB7IENvbG9yQ2hlY2tUcmF2ZXJzZSB9IGZyb20gXCIuL2hlbHBlci9jb2xvci1jaGVja1wiO1xuaW1wb3J0IHsgRm9yY2VBdXRvTGF5b3V0SG9yaXpvbnRhbCwgRm9yY2VBdXRvTGF5b3V0VmVydGljYWwsIH0gZnJvbSBcIi4vaGVscGVyL2ZvcmNlLWF1dG8tbGF5b3V0XCI7XG5pbXBvcnQgeyBQYWRkaW5nSG9yaXpvbnRhbFNsaWRlciwgUGFkZGluZ1ZlcnRpY2FsU2xpZGVyLCBJdGVtU3BhY2luZywgfSBmcm9tIFwiLi9oZWxwZXIvc3BhY2luZy1zbGlkZXJcIjtcbmltcG9ydCB7IG9uU2VsZWN0aW9uQ2hhbmdlIH0gZnJvbSBcIi4vaGVscGVyL2NhbGxiYWNrXCI7XG4vLyBUaGlzIHNob3dzIHRoZSBIVE1MIHBhZ2UgaW4gXCJ1aS5odG1sXCIuXG5maWdtYS5zaG93VUkoX19odG1sX18pO1xuLy8gQ2FsbHMgdG8gXCJwYXJlbnQucG9zdE1lc3NhZ2VcIiBmcm9tIHdpdGhpbiB0aGUgSFRNTCBwYWdlIHdpbGwgdHJpZ2dlciB0aGlzXG4vLyBjYWxsYmFjay4gVGhlIGNhbGxiYWNrIHdpbGwgYmUgcGFzc2VkIHRoZSBcInBsdWdpbk1lc3NhZ2VcIiBwcm9wZXJ0eSBvZiB0aGVcbi8vIHBvc3RlZCBtZXNzYWdlLlxuZmlnbWEudWkucmVzaXplKDI1MCwgNjAwKTtcbmZpZ21hLm9uKFwic2VsZWN0aW9uY2hhbmdlXCIsICgpID0+IHtcbiAgICBsZXQgdGhpc1NlbGVjdGlvbiA9IGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvblswXTtcbiAgICBvblNlbGVjdGlvbkNoYW5nZSh0aGlzU2VsZWN0aW9uKTtcbn0pO1xuZmlnbWEudWkub25tZXNzYWdlID0gKG1zZykgPT4ge1xuICAgIGlmIChtc2cudHlwZSA9PT0gXCJkYXJrLXRoZW1lXCIpIHtcbiAgICAgICAgRGFya1RoZW1lVHJhdmVyc2UoZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uWzBdKTtcbiAgICB9XG4gICAgZWxzZSBpZiAobXNnLnR5cGUgPT09IFwibGlnaHQtdGhlbWVcIikge1xuICAgICAgICBMaWdodFRoZW1lVHJhdmVyc2UoZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uWzBdKTtcbiAgICB9XG4gICAgZWxzZSBpZiAobXNnLnR5cGUgPT09IFwiY29sb3ItY2hlY2tlclwiKSB7XG4gICAgICAgIENvbG9yQ2hlY2tUcmF2ZXJzZShmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb25bMF0pO1xuICAgIH1cbiAgICBlbHNlIGlmIChtc2cudHlwZSA9PT0gXCJzcGFjaW5nLWNoZWNrZXJcIikge1xuICAgICAgICBTcGFjaW5nQ2hlY2tUcmF2ZXJzZShmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb24pO1xuICAgIH1cbiAgICBlbHNlIGlmIChtc2cudHlwZSA9PT0gXCJwYWRkaW5nLWhvcml6b250YWwtc2xpZGVyXCIpIHtcbiAgICAgICAgUGFkZGluZ0hvcml6b250YWxTbGlkZXIoZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uLCBtc2cpO1xuICAgIH1cbiAgICBlbHNlIGlmIChtc2cudHlwZSA9PT0gXCJwYWRkaW5nLXZlcnRpY2FsLXNsaWRlclwiKSB7XG4gICAgICAgIFBhZGRpbmdWZXJ0aWNhbFNsaWRlcihmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb24sIG1zZyk7XG4gICAgfVxuICAgIGVsc2UgaWYgKG1zZy50eXBlID09PSBcIml0ZW0tc3BhY2luZy1zbGlkZXJcIikge1xuICAgICAgICBJdGVtU3BhY2luZyhmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb24sIG1zZyk7XG4gICAgfVxuICAgIGVsc2UgaWYgKG1zZy50eXBlID09PSBcImZvcmNlLWF1dG8tbGF5b3V0LWhvcml6b250YWxcIikge1xuICAgICAgICBGb3JjZUF1dG9MYXlvdXRIb3Jpem9udGFsKGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbik7XG4gICAgfVxuICAgIGVsc2UgaWYgKG1zZy50eXBlID09PSBcImZvcmNlLWF1dG8tbGF5b3V0LXZlcnRpY2FsXCIpIHtcbiAgICAgICAgRm9yY2VBdXRvTGF5b3V0VmVydGljYWwoZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uKTtcbiAgICB9XG4gICAgLy8gTWFrZSBzdXJlIHRvIGNsb3NlIHRoZSBwbHVnaW4gd2hlbiB5b3UncmUgZG9uZS4gT3RoZXJ3aXNlIHRoZSBwbHVnaW4gd2lsbFxuICAgIC8vIGtlZXAgcnVubmluZywgd2hpY2ggc2hvd3MgdGhlIGNhbmNlbCBidXR0b24gYXQgdGhlIGJvdHRvbSBvZiB0aGUgc2NyZWVuLlxuICAgIC8vIGZpZ21hLmNsb3NlUGx1Z2luKCk7XG59O1xuIiwiY29uc3Qgb25TZWxlY3Rpb25DaGFuZ2UgPSAobm9kZSkgPT4ge1xuICAgIGlmIChub2RlKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwieWVzXCIpO1xuICAgICAgICBsZXQgaG9yaXpvbnRhbFBhZGRpbmcgPSBub2RlLmhvcml6b250YWxQYWRkaW5nO1xuICAgICAgICBsZXQgdmVydGljYWxQYWRkaW5nID0gbm9kZS52ZXJ0aWNhbFBhZGRpbmc7XG4gICAgICAgIGxldCBpdGVtU3BhY2luZyA9IG5vZGUuaXRlbVNwYWNpbmc7XG4gICAgICAgIGxldCBsYXlvdXRNb2RlID0gbm9kZS5sYXlvdXRNb2RlO1xuICAgICAgICBsZXQgb2JqID0ge1xuICAgICAgICAgICAgaG9yaXpvbnRhbFBhZGRpbmc6IGhvcml6b250YWxQYWRkaW5nLFxuICAgICAgICAgICAgdmVydGljYWxQYWRkaW5nOiB2ZXJ0aWNhbFBhZGRpbmcsXG4gICAgICAgICAgICBpdGVtU3BhY2luZzogaXRlbVNwYWNpbmcsXG4gICAgICAgICAgICBsYXlvdXRNb2RlOiBsYXlvdXRNb2RlLFxuICAgICAgICB9O1xuICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZShvYmopO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJub1wiKTtcbiAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2UoXCJub3RoaW5nIHNlbGVjdGVkXCIpO1xuICAgIH1cbn07XG5leHBvcnQgeyBvblNlbGVjdGlvbkNoYW5nZSB9O1xuIiwiZnVuY3Rpb24gY2xvbmUodmFsKSB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodmFsKSk7XG59XG4vLyBDaGVjayBvYmplY3QgZXF1YWxpdHkgaGVscGVyXG5mdW5jdGlvbiBpc0VxdWl2YWxlbnQoYSwgYikge1xuICAgIC8vIENyZWF0ZSBhcnJheXMgb2YgcHJvcGVydHkgbmFtZXNcbiAgICB2YXIgYVByb3BzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoYSk7XG4gICAgdmFyIGJQcm9wcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGIpO1xuICAgIC8vIElmIG51bWJlciBvZiBwcm9wZXJ0aWVzIGlzIGRpZmZlcmVudCxcbiAgICAvLyBvYmplY3RzIGFyZSBub3QgZXF1aXZhbGVudFxuICAgIGlmIChhUHJvcHMubGVuZ3RoICE9IGJQcm9wcy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFQcm9wcy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgcHJvcE5hbWUgPSBhUHJvcHNbaV07XG4gICAgICAgIC8vIElmIHZhbHVlcyBvZiBzYW1lIHByb3BlcnR5IGFyZSBub3QgZXF1YWwsXG4gICAgICAgIC8vIG9iamVjdHMgYXJlIG5vdCBlcXVpdmFsZW50XG4gICAgICAgIGlmIChhW3Byb3BOYW1lXSAhPT0gYltwcm9wTmFtZV0pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBJZiB3ZSBtYWRlIGl0IHRoaXMgZmFyLCBvYmplY3RzXG4gICAgLy8gYXJlIGNvbnNpZGVyZWQgZXF1aXZhbGVudFxuICAgIHJldHVybiB0cnVlO1xufVxuY29uc3QgQ29sb3JDaGVja1RyYXZlcnNlID0gKG5vZGUpID0+IHtcbiAgICBsZXQgc3RyYXlGaWxsID0gMDtcbiAgICBsZXQgc3RyYXlTdHJva2UgPSAwO1xuICAgIGlmIChcImZpbGxzXCIgJiYgXCJzdHJva2VzXCIgaW4gbm9kZSkge1xuICAgICAgICAvLyBGaWx0ZXIgd2FybmluZyBzdHJva2UgZnVuY3Rpb25cbiAgICAgICAgbGV0IGZpbHRlcldhcm5pbmdTdHJva2UgPSBmdW5jdGlvbiAoc3Ryb2tlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImNsZWFyIG91dFwiKTtcbiAgICAgICAgICAgIGlmIChzdHJva2UudHlwZSA9PSBcIlNPTElEXCIgJiZcbiAgICAgICAgICAgICAgICBpc0VxdWl2YWxlbnQoc3Ryb2tlLmNvbG9yLCB7IHI6IDEsIGc6IDAsIGI6IDAgfSkpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInllc1wiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIm5vXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBsZXQgb2xkU3Ryb2tlcyA9IGNsb25lKG5vZGUuc3Ryb2tlcyk7XG4gICAgICAgIGxldCBuZXdTdHJva2VzID0gb2xkU3Ryb2tlcy5maWx0ZXIoZmlsdGVyV2FybmluZ1N0cm9rZSk7XG4gICAgICAgIGlmIChub2RlLnN0cm9rZVN0eWxlSWQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgLy8gZG8gbm90aGluZ1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbm9kZS5zdHJva2VzID0gbmV3U3Ryb2tlcztcbiAgICAgICAgfVxuICAgICAgICAvLyAvLyBBZGQgd2FybmluZyBzdHJva2UgZnVuY3Rpb25cbiAgICAgICAgbGV0IGFkZFdhcm5pbmdTdHJva2UgPSBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgbGV0IHN0cm9rZXMgPSBjbG9uZShub2RlLnN0cm9rZXMpO1xuICAgICAgICAgICAgbGV0IHdhcm5pbmdTdHJva2VQcm9wZXJ0eSA9IHtcbiAgICAgICAgICAgICAgICBjb2xvcjogeyByOiAxLCBnOiAwLCBiOiAwIH0sXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICAgICAgICB0eXBlOiBcIlNPTElEXCIsXG4gICAgICAgICAgICAgICAgYmxlbmRNb2RlOiBcIk5PUk1BTFwiLFxuICAgICAgICAgICAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgc3Ryb2tlcy5wdXNoKHdhcm5pbmdTdHJva2VQcm9wZXJ0eSk7XG4gICAgICAgICAgICBub2RlLnN0cm9rZXMgPSBzdHJva2VzO1xuICAgICAgICAgICAgLy8gbm9kZS5zdHJva2VBbGlnbiA9IFwiT1VUU0lERVwiO1xuICAgICAgICB9O1xuICAgICAgICAvLyBDaGVjayBGaWxsXG4gICAgICAgIGNvbnN0IGhhc0ltYWdlID0gKGZpbGwpID0+IGZpbGwudHlwZSA9PT0gXCJJTUFHRVwiO1xuICAgICAgICBpZiAobm9kZS5maWxscy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAvLyBpZiAobm9kZS5maWxscy5zb21lKGhhc0ltYWdlKSkge1xuICAgICAgICAgICAgLy8gICBjb25zb2xlLmxvZyhcImZpbGwgaXMgaW1hZ2VcIik7XG4gICAgICAgICAgICAvLyB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gICBjb25zb2xlLmxvZyhcImZpbGwgaXMgTk9UIGltYWdlXCIpO1xuICAgICAgICAgICAgLy8gICAvLyBub3RoaW5nXG4gICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICBpZiAobm9kZS5maWxsU3R5bGVJZC5sZW5ndGggPiAwIHx8IG5vZGUuZmlsbHMuc29tZShoYXNJbWFnZSkpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuKchSBHb29kIGZpbGxcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuKdjCBCYWQgZmlsbFwiKTtcbiAgICAgICAgICAgICAgICAvLyBBZGQgd2FybmluZyBzdHJva2VcbiAgICAgICAgICAgICAgICBhZGRXYXJuaW5nU3Ryb2tlKG5vZGUpO1xuICAgICAgICAgICAgICAgIHN0cmF5RmlsbCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJubyBmaWxsXCIpO1xuICAgICAgICB9XG4gICAgICAgIC8vIENoZWNrIFN0cm9rZVxuICAgICAgICBpZiAobm9kZS5zdHJva2VzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGlmIChub2RlLnN0cm9rZVN0eWxlSWQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi4pyFIEdvb2Qgc3Ryb2tlXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLinYwgQmFkIHN0cm9rZVwiKTtcbiAgICAgICAgICAgICAgICAvLyAvLyBBZGQgd2FybmluZyBzdHJva2VcbiAgICAgICAgICAgICAgICBhZGRXYXJuaW5nU3Ryb2tlKG5vZGUpO1xuICAgICAgICAgICAgICAgIHN0cmF5U3Ryb2tlKys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIm5vIHN0cm9rZVwiKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJObyBmaWxsICYgc3Ryb2tlIHByb3BlcnR5XCIpO1xuICAgIH1cbiAgICBpZiAoXCJjaGlsZHJlblwiIGluIG5vZGUpIHtcbiAgICAgICAgZm9yIChjb25zdCBjaGlsZCBvZiBub2RlLmNoaWxkcmVuKSB7XG4gICAgICAgICAgICBDb2xvckNoZWNrVHJhdmVyc2UoY2hpbGQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICAvLyBkbyBub3RoaW5nXG4gICAgfVxuICAgIGlmIChzdHJheUZpbGwgPiAwIHx8IHN0cmF5U3Ryb2tlID4gMCkge1xuICAgICAgICBsZXQgZXJyb3JTdHJpbmcgPSBcIllvdSBoYXZlIFwiICtcbiAgICAgICAgICAgIHN0cmF5RmlsbCArXG4gICAgICAgICAgICBcIiBmaWxscyBhbmQgXCIgK1xuICAgICAgICAgICAgc3RyYXlTdHJva2UgK1xuICAgICAgICAgICAgXCIgc3Ryb2tlcyBub3QgdXNpbmcgY29sb3VycyBmcm9tIG91ciBsaWJyYXJ5IVwiO1xuICAgICAgICBmaWdtYS5ub3RpZnkoZXJyb3JTdHJpbmcsIHsgdGltZW91dDogMC41IH0pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZmlnbWEubm90aWZ5KFwi8J+RjyBBbGwgaXMgZ29vZCBpbiB0aGUgaG9vZCFcIiwgeyB0aW1lb3V0OiAwLjUgfSk7XG4gICAgfVxufTtcbmV4cG9ydCB7IENvbG9yQ2hlY2tUcmF2ZXJzZSB9O1xuIiwiY29uc3QgRm9yY2VBdXRvTGF5b3V0SG9yaXpvbnRhbCA9IChub2RlcykgPT4ge1xuICAgIGZvciAoY29uc3Qgbm9kZSBvZiBub2Rlcykge1xuICAgICAgICBub2RlLmxheW91dE1vZGUgPSBcIkhPUklaT05UQUxcIjtcbiAgICB9XG59O1xuY29uc3QgRm9yY2VBdXRvTGF5b3V0VmVydGljYWwgPSAobm9kZXMpID0+IHtcbiAgICBmb3IgKGNvbnN0IG5vZGUgb2Ygbm9kZXMpIHtcbiAgICAgICAgbm9kZS5sYXlvdXRNb2RlID0gXCJWRVJUSUNBTFwiO1xuICAgIH1cbn07XG5leHBvcnQgeyBGb3JjZUF1dG9MYXlvdXRIb3Jpem9udGFsLCBGb3JjZUF1dG9MYXlvdXRWZXJ0aWNhbCB9O1xuIiwiY29uc3QgU3BhY2luZ0NoZWNrVHJhdmVyc2UgPSAobm9kZXMpID0+IHtcbiAgICBmb3IgKGNvbnN0IG5vZGUgb2Ygbm9kZXMpIHtcbiAgICAgICAgbGV0IG5hbWUgPSBub2RlLm5hbWU7XG4gICAgICAgIGxldCBwYWRkaW5nQWxsUmVnZXggPSAvXFxiKD86cGEteHhzfHBhLXhzfHBhLXN8cGEtbXxwYS1sfHBhLXhsfHBhLXh4bHxwYS1ub25lKVxcYi9nO1xuICAgICAgICBsZXQgcGFkZGluZ0hvcml6b250YWxSZWdleCA9IC9cXGIoPzpwaC14eHN8cGgteHN8cGgtc3xwaC1tfHBoLWx8cGgteGx8cGgteHhsfHBoLW5vbmUpXFxiL2c7XG4gICAgICAgIGxldCBwYWRkaW5nVmVydGljYWxSZWdleCA9IC9cXGIoPzpwdi14eHN8cHYteHN8cHYtc3xwdi1tfHB2LWx8cHYteGx8cHYteHhsfHB2LW5vbmUpXFxiL2c7XG4gICAgICAgIGxldCBpdGVtU3BhY2luZ0FsbFJlZ2V4ID0gL1xcYig/OnNwLXh4c3xzcC14c3xzcC1zfHNwLW18c3AtbHxzcC14bHxzcC14eGx8c3Atbm9uZSlcXGIvZztcbiAgICAgICAgbGV0IGF1dG9sYXlvdXRSZWdleCA9IC9cXGIoPzp2ZXJ0aWNhbHxob3Jpem9udGFsKVxcYi9nO1xuICAgICAgICBsZXQgbWF0Y2hQYWRkaW5nQWxsID0gbmFtZS5tYXRjaChwYWRkaW5nQWxsUmVnZXgpO1xuICAgICAgICBsZXQgbWF0Y2hQYWRkaW5nSG9yaXpvbnRhbCA9IG5hbWUubWF0Y2gocGFkZGluZ0hvcml6b250YWxSZWdleCk7XG4gICAgICAgIGxldCBtYXRjaFBhZGRpbmdWZXJ0aWNhbCA9IG5hbWUubWF0Y2gocGFkZGluZ1ZlcnRpY2FsUmVnZXgpO1xuICAgICAgICBsZXQgbWF0Y2hJdGVtU3BhY2luZyA9IG5hbWUubWF0Y2goaXRlbVNwYWNpbmdBbGxSZWdleCk7XG4gICAgICAgIGxldCBtYXRjaEF1dG9MYXlvdXREaXJlY3Rpb24gPSBuYW1lLm1hdGNoKGF1dG9sYXlvdXRSZWdleCk7XG4gICAgICAgIGlmIChtYXRjaEF1dG9MYXlvdXREaXJlY3Rpb24gPT0gbnVsbCkge1xuICAgICAgICAgICAgbm9kZS5sYXlvdXRNb2RlID0gXCJWRVJUSUNBTFwiO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJlbmFibGUgYXV0byBsYXlvdXRcIik7XG4gICAgICAgICAgICBzd2l0Y2ggKG1hdGNoQXV0b0xheW91dERpcmVjdGlvblswXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJ2ZXJ0aWNhbFwiOlxuICAgICAgICAgICAgICAgICAgICBub2RlLmxheW91dE1vZGUgPSBcIlZFUlRJQ0FMXCI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJob3Jpem9udGFsXCI6XG4gICAgICAgICAgICAgICAgICAgIG5vZGUubGF5b3V0TW9kZSA9IFwiSE9SSVpPTlRBTFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChtYXRjaEl0ZW1TcGFjaW5nID09IG51bGwpIHtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaGFzIHNwYWNpbmdcIik7XG4gICAgICAgICAgICBzd2l0Y2ggKG1hdGNoSXRlbVNwYWNpbmdbMF0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIFwic3Atbm9uZVwiOlxuICAgICAgICAgICAgICAgICAgICBub2RlLml0ZW1TcGFjaW5nID0gMDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInNwLXh4c1wiOlxuICAgICAgICAgICAgICAgICAgICBub2RlLml0ZW1TcGFjaW5nID0gNDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInNwLXhzXCI6XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuaXRlbVNwYWNpbmcgPSA4O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwic3Atc1wiOlxuICAgICAgICAgICAgICAgICAgICBub2RlLml0ZW1TcGFjaW5nID0gMTY7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJzcC1tXCI6XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuaXRlbVNwYWNpbmcgPSAyNDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInNwLWxcIjpcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5pdGVtU3BhY2luZyA9IDMyO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwic3AteGxcIjpcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5pdGVtU3BhY2luZyA9IDQwO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwic3AteHhsXCI6XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuaXRlbVNwYWNpbmcgPSA0ODtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1hdGNoUGFkZGluZ0FsbCA9PSBudWxsKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIm5vXCIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJoYXMgcGFkZGluZyBhbGxcIik7XG4gICAgICAgICAgICBzd2l0Y2ggKG1hdGNoUGFkZGluZ0FsbFswXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJwYS1ub25lXCI6XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuaG9yaXpvbnRhbFBhZGRpbmcgPSAwO1xuICAgICAgICAgICAgICAgICAgICBub2RlLnZlcnRpY2FsUGFkZGluZyA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJwYS14eHNcIjpcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5ob3Jpem9udGFsUGFkZGluZyA9IDQ7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUudmVydGljYWxQYWRkaW5nID0gNDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInBhLXhzXCI6XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuaG9yaXpvbnRhbFBhZGRpbmcgPSA4O1xuICAgICAgICAgICAgICAgICAgICBub2RlLnZlcnRpY2FsUGFkZGluZyA9IDg7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJwYS1zXCI6XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuaG9yaXpvbnRhbFBhZGRpbmcgPSAxNjtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS52ZXJ0aWNhbFBhZGRpbmcgPSAxNjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInBhLW1cIjpcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5ob3Jpem9udGFsUGFkZGluZyA9IDI0O1xuICAgICAgICAgICAgICAgICAgICBub2RlLnZlcnRpY2FsUGFkZGluZyA9IDI0O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwicGEtbFwiOlxuICAgICAgICAgICAgICAgICAgICBub2RlLmhvcml6b250YWxQYWRkaW5nID0gMzI7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUudmVydGljYWxQYWRkaW5nID0gMzI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJwYS14bFwiOlxuICAgICAgICAgICAgICAgICAgICBub2RlLmhvcml6b250YWxQYWRkaW5nID0gNDA7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUudmVydGljYWxQYWRkaW5nID0gNDA7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJwYS14eGxcIjpcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5ob3Jpem9udGFsUGFkZGluZyA9IDQ4O1xuICAgICAgICAgICAgICAgICAgICBub2RlLnZlcnRpY2FsUGFkZGluZyA9IDQ4O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAobWF0Y2hQYWRkaW5nSG9yaXpvbnRhbCA9PSBudWxsKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIm5vXCIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJoYXMgcGFkZGluZyBob3Jpem9udGFsXCIpO1xuICAgICAgICAgICAgc3dpdGNoIChtYXRjaFBhZGRpbmdIb3Jpem9udGFsWzBdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcInBoLW5vbmVcIjpcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5ob3Jpem9udGFsUGFkZGluZyA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJwaC14eHNcIjpcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5ob3Jpem9udGFsUGFkZGluZyA9IDQ7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJwaC14c1wiOlxuICAgICAgICAgICAgICAgICAgICBub2RlLmhvcml6b250YWxQYWRkaW5nID0gODtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInBoLXNcIjpcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5ob3Jpem9udGFsUGFkZGluZyA9IDE2O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwicGgtbVwiOlxuICAgICAgICAgICAgICAgICAgICBub2RlLmhvcml6b250YWxQYWRkaW5nID0gMjQ7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJwaC1sXCI6XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuaG9yaXpvbnRhbFBhZGRpbmcgPSAzMjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInBoLXhsXCI6XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuaG9yaXpvbnRhbFBhZGRpbmcgPSA0MDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInBoLXh4bFwiOlxuICAgICAgICAgICAgICAgICAgICBub2RlLmhvcml6b250YWxQYWRkaW5nID0gNDg7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChtYXRjaFBhZGRpbmdWZXJ0aWNhbCA9PSBudWxsKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIm5vXCIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJoYXMgcGFkZGluZyBob3Jpem9udGFsXCIpO1xuICAgICAgICAgICAgc3dpdGNoIChtYXRjaFBhZGRpbmdWZXJ0aWNhbFswXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJwdi1ub25lXCI6XG4gICAgICAgICAgICAgICAgICAgIG5vZGUudmVydGljYWxQYWRkaW5nID0gMDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInB2LXh4c1wiOlxuICAgICAgICAgICAgICAgICAgICBub2RlLnZlcnRpY2FsUGFkZGluZyA9IDQ7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJwdi14c1wiOlxuICAgICAgICAgICAgICAgICAgICBub2RlLnZlcnRpY2FsUGFkZGluZyA9IDg7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJwdi1zXCI6XG4gICAgICAgICAgICAgICAgICAgIG5vZGUudmVydGljYWxQYWRkaW5nID0gMTY7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJwdi1tXCI6XG4gICAgICAgICAgICAgICAgICAgIG5vZGUudmVydGljYWxQYWRkaW5nID0gMjQ7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJwdi1sXCI6XG4gICAgICAgICAgICAgICAgICAgIG5vZGUudmVydGljYWxQYWRkaW5nID0gMzI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJwdi14bFwiOlxuICAgICAgICAgICAgICAgICAgICBub2RlLnZlcnRpY2FsUGFkZGluZyA9IDQwO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwicHYteHhsXCI6XG4gICAgICAgICAgICAgICAgICAgIG5vZGUudmVydGljYWxQYWRkaW5nID0gNDg7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIFNwYWNpbmdDaGVja1RyYXZlcnNlKG5vZGUpO1xuICAgIH1cbiAgICAvLyBpZiAoXCJjaGlsZHJlblwiIGluIG5vZGVzKSB7XG4gICAgLy8gICBmb3IgKGNvbnN0IGNoaWxkIG9mIG5vZGUuY2hpbGRyZW4pIHtcbiAgICAvLyAgICAgU3BhY2luZ0NoZWNrVHJhdmVyc2UoY2hpbGQpO1xuICAgIC8vICAgfVxuICAgIC8vIH0gZWxzZSB7XG4gICAgLy8gICAvLyBkbyBub3RoaW5nXG4gICAgLy8gfVxufTtcbmV4cG9ydCB7IFNwYWNpbmdDaGVja1RyYXZlcnNlIH07XG4iLCJmdW5jdGlvbiBjbG9uZSh2YWwpIHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh2YWwpKTtcbn1cbmxldCBwaE5hbWUgPSBudWxsO1xubGV0IHB2TmFtZSA9IG51bGw7XG5sZXQgc3BOYW1lID0gbnVsbDtcbmxldCBuYW1lUHJvcCA9IHtcbiAgICBob3Jpem9udGFsOiBcInBoLW5vbmVcIixcbiAgICB2ZXJ0aWNhbDogXCJwdi1ub25lXCIsXG4gICAgc3BhY2luZzogXCJzcC1ub25lXCIsXG59O1xuZnVuY3Rpb24gdXBkYXRlTmFtZSh2YWwsIG5vZGUpIHtcbiAgICBpZiAodmFsLnR5cGUgPT09IFwiaG9yaXpvbnRhbFwiKSB7XG4gICAgICAgIG5hbWVQcm9wLmhvcml6b250YWwgPSB2YWwudmFsdWU7XG4gICAgfVxuICAgIGVsc2UgaWYgKHZhbC50eXBlID09PSBcInZlcnRpY2FsXCIpIHtcbiAgICAgICAgbmFtZVByb3AudmVydGljYWwgPSB2YWwudmFsdWU7XG4gICAgfVxuICAgIGVsc2UgaWYgKHZhbC50eXBlID09PSBcInNwYWNpbmdcIikge1xuICAgICAgICBuYW1lUHJvcC5zcGFjaW5nID0gdmFsLnZhbHVlO1xuICAgIH1cbiAgICBub2RlLm5hbWUgPVxuICAgICAgICBuYW1lUHJvcC5ob3Jpem9udGFsICsgXCIgXCIgKyBuYW1lUHJvcC52ZXJ0aWNhbCArIFwiIFwiICsgbmFtZVByb3Auc3BhY2luZztcbn1cbmNvbnN0IFBhZGRpbmdIb3Jpem9udGFsU2xpZGVyID0gKG5vZGVzLCBtc2cpID0+IHtcbiAgICBsZXQgc2xpZGVyVmFsdWUgPSBtc2cuc2xpZGVyVmFsdWU7XG4gICAgbGV0IHNwYWNpbmcgPSBudWxsO1xuICAgIGxldCBzcGFjaW5nTmFtZSA9IG51bGw7XG4gICAgc3dpdGNoIChzbGlkZXJWYWx1ZSkge1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgc3BhY2luZyA9IDA7XG4gICAgICAgICAgICBzcGFjaW5nTmFtZSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCIxXCI6XG4gICAgICAgICAgICBzcGFjaW5nID0gNDtcbiAgICAgICAgICAgIHNwYWNpbmdOYW1lID0gXCJ4eHNcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiMlwiOlxuICAgICAgICAgICAgc3BhY2luZyA9IDg7XG4gICAgICAgICAgICBzcGFjaW5nTmFtZSA9IFwieHNcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiM1wiOlxuICAgICAgICAgICAgc3BhY2luZyA9IDE2O1xuICAgICAgICAgICAgc3BhY2luZ05hbWUgPSBcInNcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiNFwiOlxuICAgICAgICAgICAgc3BhY2luZyA9IDI0O1xuICAgICAgICAgICAgc3BhY2luZ05hbWUgPSBcIm1cIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiNVwiOlxuICAgICAgICAgICAgc3BhY2luZyA9IDMyO1xuICAgICAgICAgICAgc3BhY2luZ05hbWUgPSBcImxcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiNlwiOlxuICAgICAgICAgICAgc3BhY2luZyA9IDQwO1xuICAgICAgICAgICAgc3BhY2luZ05hbWUgPSBcInhsXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIjdcIjpcbiAgICAgICAgICAgIHNwYWNpbmcgPSA0ODtcbiAgICAgICAgICAgIHNwYWNpbmdOYW1lID0gXCJ4eGxcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IG5vZGUgb2Ygbm9kZXMpIHtcbiAgICAgICAgaWYgKG5vZGUpIHtcbiAgICAgICAgICAgIHBoTmFtZSA9IFwicGgtXCIgKyBzcGFjaW5nTmFtZTtcbiAgICAgICAgICAgIHVwZGF0ZU5hbWUoeyB0eXBlOiBcImhvcml6b250YWxcIiwgdmFsdWU6IHBoTmFtZSB9LCBub2RlKTtcbiAgICAgICAgICAgIGlmIChub2RlLnR5cGUgPT09IFwiR1JPVVBcIikge1xuICAgICAgICAgICAgICAgIG5vZGUuaG9yaXpvbnRhbFBhZGRpbmcgPSBzcGFjaW5nO1xuICAgICAgICAgICAgICAgIG5vZGUubGF5b3V0TW9kZSA9IFwiTk9ORVwiO1xuICAgICAgICAgICAgICAgIGlmIChcImNoaWxkcmVuXCIgaW4gbm9kZSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgZ3JvdXAgPSBub2RlLmNoaWxkcmVuWzBdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGxldCBzZXRBdXRvTGF5b3V0ID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgICAgICAgICBub2RlLmhvcml6b250YWxQYWRkaW5nID0gc3BhY2luZztcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiByZXNvbHZlKFwiZG9uZVwiKSwgNSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59O1xuY29uc3QgUGFkZGluZ1ZlcnRpY2FsU2xpZGVyID0gKG5vZGVzLCBtc2cpID0+IHtcbiAgICBsZXQgc2xpZGVyVmFsdWUgPSBtc2cuc2xpZGVyVmFsdWU7XG4gICAgbGV0IHNwYWNpbmcgPSBudWxsO1xuICAgIGxldCBzcGFjaW5nTmFtZSA9IG51bGw7XG4gICAgc3dpdGNoIChzbGlkZXJWYWx1ZSkge1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgc3BhY2luZyA9IDA7XG4gICAgICAgICAgICBzcGFjaW5nTmFtZSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCIxXCI6XG4gICAgICAgICAgICBzcGFjaW5nID0gNDtcbiAgICAgICAgICAgIHNwYWNpbmdOYW1lID0gXCJ4eHNcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiMlwiOlxuICAgICAgICAgICAgc3BhY2luZyA9IDg7XG4gICAgICAgICAgICBzcGFjaW5nTmFtZSA9IFwieHNcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiM1wiOlxuICAgICAgICAgICAgc3BhY2luZyA9IDE2O1xuICAgICAgICAgICAgc3BhY2luZ05hbWUgPSBcInNcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiNFwiOlxuICAgICAgICAgICAgc3BhY2luZyA9IDI0O1xuICAgICAgICAgICAgc3BhY2luZ05hbWUgPSBcIm1cIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiNVwiOlxuICAgICAgICAgICAgc3BhY2luZyA9IDMyO1xuICAgICAgICAgICAgc3BhY2luZ05hbWUgPSBcImxcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiNlwiOlxuICAgICAgICAgICAgc3BhY2luZyA9IDQwO1xuICAgICAgICAgICAgc3BhY2luZ05hbWUgPSBcInhsXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIjdcIjpcbiAgICAgICAgICAgIHNwYWNpbmcgPSA0ODtcbiAgICAgICAgICAgIHNwYWNpbmdOYW1lID0gXCJ4eGxcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IG5vZGUgb2Ygbm9kZXMpIHtcbiAgICAgICAgaWYgKG5vZGUpIHtcbiAgICAgICAgICAgIHB2TmFtZSA9IFwicHYtXCIgKyBzcGFjaW5nTmFtZTtcbiAgICAgICAgICAgIHVwZGF0ZU5hbWUoeyB0eXBlOiBcInZlcnRpY2FsXCIsIHZhbHVlOiBwdk5hbWUgfSwgbm9kZSk7XG4gICAgICAgICAgICBpZiAobm9kZS50eXBlID09PSBcIkdST1VQXCIpIHtcbiAgICAgICAgICAgICAgICBub2RlLnZlcnRpY2FsUGFkZGluZyA9IHNwYWNpbmc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBsZXQgc2V0QXV0b0xheW91dCA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS52ZXJ0aWNhbFBhZGRpbmcgPSBzcGFjaW5nO1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHJlc29sdmUoXCJkb25lXCIpLCA1KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn07XG5jb25zdCBJdGVtU3BhY2luZyA9IChub2RlcywgbXNnKSA9PiB7XG4gICAgbGV0IHNsaWRlclZhbHVlID0gbXNnLnNsaWRlclZhbHVlO1xuICAgIGxldCBzcGFjaW5nID0gbnVsbDtcbiAgICBsZXQgc3BhY2luZ05hbWUgPSBudWxsO1xuICAgIHN3aXRjaCAoc2xpZGVyVmFsdWUpIHtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHNwYWNpbmcgPSAwO1xuICAgICAgICAgICAgc3BhY2luZ05hbWUgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiMVwiOlxuICAgICAgICAgICAgc3BhY2luZyA9IDQ7XG4gICAgICAgICAgICBzcGFjaW5nTmFtZSA9IFwieHhzXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIjJcIjpcbiAgICAgICAgICAgIHNwYWNpbmcgPSA4O1xuICAgICAgICAgICAgc3BhY2luZ05hbWUgPSBcInhzXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIjNcIjpcbiAgICAgICAgICAgIHNwYWNpbmcgPSAxNjtcbiAgICAgICAgICAgIHNwYWNpbmdOYW1lID0gXCJzXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIjRcIjpcbiAgICAgICAgICAgIHNwYWNpbmcgPSAyNDtcbiAgICAgICAgICAgIHNwYWNpbmdOYW1lID0gXCJtXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIjVcIjpcbiAgICAgICAgICAgIHNwYWNpbmcgPSAzMjtcbiAgICAgICAgICAgIHNwYWNpbmdOYW1lID0gXCJsXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIjZcIjpcbiAgICAgICAgICAgIHNwYWNpbmcgPSA0MDtcbiAgICAgICAgICAgIHNwYWNpbmdOYW1lID0gXCJ4bFwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCI3XCI6XG4gICAgICAgICAgICBzcGFjaW5nID0gNDg7XG4gICAgICAgICAgICBzcGFjaW5nTmFtZSA9IFwieHhsXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG4gICAgZm9yIChjb25zdCBub2RlIG9mIG5vZGVzKSB7XG4gICAgICAgIG5vZGUuaXRlbVNwYWNpbmcgPSBzcGFjaW5nO1xuICAgICAgICBzcE5hbWUgPSBcInNwLVwiICsgc3BhY2luZ05hbWU7XG4gICAgICAgIHVwZGF0ZU5hbWUoeyB0eXBlOiBcInNwYWNpbmdcIiwgdmFsdWU6IHNwTmFtZSB9LCBub2RlKTtcbiAgICB9XG59O1xuZXhwb3J0IHsgUGFkZGluZ0hvcml6b250YWxTbGlkZXIsIFBhZGRpbmdWZXJ0aWNhbFNsaWRlciwgSXRlbVNwYWNpbmcgfTtcbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IHsgQ29sb3JTdHlsZUlkIH0gZnJvbSBcIi4uL3RoZW1lLXN0eWxlcy9jb2xvcnNcIjtcbmltcG9ydCB7IEVmZmVjdHNTdHlsZUlkIH0gZnJvbSBcIi4uL3RoZW1lLXN0eWxlcy9lZmZlY3RzXCI7XG5jb25zdCBMaWdodFRoZW1lVHJhdmVyc2UgPSAobm9kZSkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgbGV0IGRhcmtVSUJhY2tncm91bmREZWZhdWx0ID0geWllbGQgQ29sb3JTdHlsZUlkLmRhcmtVSS5iYWNrZ3JvdW5kRGVmYXVsdDtcbiAgICBsZXQgZGFya1VJQmFja2dyb3VuZFN1cmZhY2UgPSB5aWVsZCBDb2xvclN0eWxlSWQuZGFya1VJLmJhY2tncm91bmRTdXJmYWNlO1xuICAgIGxldCBkYXJrVUlEaXZpZGVyID0geWllbGQgQ29sb3JTdHlsZUlkLmRhcmtVSS5kaXZpZGVyO1xuICAgIGxldCBkYXJrVUlQcmltYXJ5ID0geWllbGQgQ29sb3JTdHlsZUlkLmRhcmtVSS5wcmltYXJ5O1xuICAgIGxldCBkYXJrVUlQcmltYXJ5SG92ZXIgPSB5aWVsZCBDb2xvclN0eWxlSWQuZGFya1VJLnByaW1hcnlIb3ZlcjtcbiAgICBsZXQgZGFya1VJRGFuZ2VyID0geWllbGQgQ29sb3JTdHlsZUlkLmRhcmtVSS5kYW5nZXI7XG4gICAgbGV0IGRhcmtVSVN1Y2Nlc3MgPSB5aWVsZCBDb2xvclN0eWxlSWQuZGFya1VJLnN1Y2Nlc3M7XG4gICAgbGV0IGRhcmtVSVdhcm5pbmcgPSB5aWVsZCBDb2xvclN0eWxlSWQuZGFya1VJLndhcm5pbmc7XG4gICAgbGV0IGRhcmtVSU9uUHJpbWFyeSA9IHlpZWxkIENvbG9yU3R5bGVJZC5kYXJrVUkub25QcmltYXJ5O1xuICAgIGxldCBkYXJrVUlPbkRhbmdlciA9IHlpZWxkIENvbG9yU3R5bGVJZC5kYXJrVUkub25EYW5nZXI7XG4gICAgbGV0IGRhcmtVSU9uU3VjY2VzcyA9IHlpZWxkIENvbG9yU3R5bGVJZC5kYXJrVUkub25TdWNjZXNzO1xuICAgIGxldCBkYXJrVUlPbldhcm5pbmcgPSB5aWVsZCBDb2xvclN0eWxlSWQuZGFya1VJLm9uV2FybmluZztcbiAgICBsZXQgZGFya1VJT25CYWNrZ3JvdW5kSGlnaCA9IHlpZWxkIENvbG9yU3R5bGVJZC5kYXJrVUkub25CYWNrZ3JvdW5kSGlnaDtcbiAgICBsZXQgZGFya1VJT25CYWNrZ3JvdW5kTWVkaXVtID0geWllbGQgQ29sb3JTdHlsZUlkLmRhcmtVSS5vbkJhY2tncm91bmRNZWRpdW07XG4gICAgbGV0IGRhcmtVSU9uQmFja2dyb3VuZERpc2FibGVkID0geWllbGQgQ29sb3JTdHlsZUlkLmRhcmtVSVxuICAgICAgICAub25CYWNrZ3JvdW5kRGlzYWJsZWQ7XG4gICAgbGV0IGRhcmtVSVNoYWRvd0xvdyA9IHlpZWxkIEVmZmVjdHNTdHlsZUlkLmRhcmtVSS5zaGFkb3dMb3c7XG4gICAgbGV0IGRhcmtVSVNoYWRvd0hpZ2ggPSB5aWVsZCBFZmZlY3RzU3R5bGVJZC5kYXJrVUkuc2hhZG93SGlnaDtcbiAgICBsZXQgZGFya1VJQm9yZGVyVG9wID0geWllbGQgRWZmZWN0c1N0eWxlSWQuZGFya1VJLmJvcmRlclRvcDtcbiAgICBsZXQgZGFya1VJQm9yZGVyUmlnaHQgPSB5aWVsZCBFZmZlY3RzU3R5bGVJZC5kYXJrVUkuYm9yZGVyUmlnaHQ7XG4gICAgbGV0IGRhcmtVSUJvcmRlckJvdHRvbSA9IHlpZWxkIEVmZmVjdHNTdHlsZUlkLmRhcmtVSS5ib3JkZXJCb3R0b207XG4gICAgbGV0IGRhcmtVSUJvcmRlckxlZnQgPSB5aWVsZCBFZmZlY3RzU3R5bGVJZC5kYXJrVUkuYm9yZGVyTGVmdDtcbiAgICBsZXQgZGFya1VJQm9yZGVyVG9wQm90dG9tID0geWllbGQgRWZmZWN0c1N0eWxlSWQuZGFya1VJLmJvcmRlclRvcEJvdHRvbTtcbiAgICBsZXQgZGFya1VJQm9yZGVyTGVmdFJpZ2h0ID0geWllbGQgRWZmZWN0c1N0eWxlSWQuZGFya1VJLmJvcmRlckxlZnRSaWdodDtcbiAgICAvLyBTdHJva2VzXG4gICAgc3dpdGNoIChub2RlLnN0cm9rZVN0eWxlSWQpIHtcbiAgICAgICAgY2FzZSBkYXJrVUlEaXZpZGVyLmlkOlxuICAgICAgICAgICAgQ29sb3JTdHlsZUlkLmxpZ2h0VUkuZGl2aWRlci50aGVuKChyZXNwKSA9PiB7XG4gICAgICAgICAgICAgICAgbm9kZS5zdHJva2VTdHlsZUlkID0gcmVzcC5pZDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgZGFya1VJUHJpbWFyeS5pZDpcbiAgICAgICAgICAgIENvbG9yU3R5bGVJZC5saWdodFVJLnByaW1hcnkudGhlbigocmVzcCkgPT4ge1xuICAgICAgICAgICAgICAgIG5vZGUuc3Ryb2tlU3R5bGVJZCA9IHJlc3AuaWQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIGRhcmtVSURhbmdlci5pZDpcbiAgICAgICAgICAgIENvbG9yU3R5bGVJZC5saWdodFVJLmRhbmdlci50aGVuKChyZXNwKSA9PiB7XG4gICAgICAgICAgICAgICAgbm9kZS5zdHJva2VTdHlsZUlkID0gcmVzcC5pZDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgZGFya1VJU3VjY2Vzcy5pZDpcbiAgICAgICAgICAgIENvbG9yU3R5bGVJZC5saWdodFVJLnN1Y2Nlc3MudGhlbigocmVzcCkgPT4ge1xuICAgICAgICAgICAgICAgIG5vZGUuc3Ryb2tlU3R5bGVJZCA9IHJlc3AuaWQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIGRhcmtVSVdhcm5pbmcuaWQ6XG4gICAgICAgICAgICBDb2xvclN0eWxlSWQubGlnaHRVSS53YXJuaW5nLnRoZW4oKHJlc3ApID0+IHtcbiAgICAgICAgICAgICAgICBub2RlLnN0cm9rZVN0eWxlSWQgPSByZXNwLmlkO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBkYXJrVUlPbkJhY2tncm91bmRIaWdoLmlkOlxuICAgICAgICAgICAgQ29sb3JTdHlsZUlkLmxpZ2h0VUkub25CYWNrZ3JvdW5kSGlnaC50aGVuKChyZXNwKSA9PiB7XG4gICAgICAgICAgICAgICAgbm9kZS5zdHJva2VTdHlsZUlkID0gcmVzcC5pZDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgZGFya1VJT25CYWNrZ3JvdW5kTWVkaXVtLmlkOlxuICAgICAgICAgICAgQ29sb3JTdHlsZUlkLmxpZ2h0VUkub25CYWNrZ3JvdW5kTWVkaXVtLnRoZW4oKHJlc3ApID0+IHtcbiAgICAgICAgICAgICAgICBub2RlLnN0cm9rZVN0eWxlSWQgPSByZXNwLmlkO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBkYXJrVUlPbkJhY2tncm91bmREaXNhYmxlZC5pZDpcbiAgICAgICAgICAgIENvbG9yU3R5bGVJZC5saWdodFVJLm9uQmFja2dyb3VuZERpc2FibGVkLnRoZW4oKHJlc3ApID0+IHtcbiAgICAgICAgICAgICAgICBub2RlLnN0cm9rZVN0eWxlSWQgPSByZXNwLmlkO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBkYXJrVUlPbldhcm5pbmcuaWQ6XG4gICAgICAgICAgICBDb2xvclN0eWxlSWQubGlnaHRVSS5vbldhcm5pbmcudGhlbigocmVzcCkgPT4ge1xuICAgICAgICAgICAgICAgIG5vZGUuc3Ryb2tlU3R5bGVJZCA9IHJlc3AuaWQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICAvLyBGaWxsc1xuICAgIHN3aXRjaCAobm9kZS5maWxsU3R5bGVJZCkge1xuICAgICAgICBjYXNlIGRhcmtVSUJhY2tncm91bmREZWZhdWx0LmlkOlxuICAgICAgICAgICAgQ29sb3JTdHlsZUlkLmxpZ2h0VUkuYmFja2dyb3VuZERlZmF1bHQudGhlbigocmVzcCkgPT4ge1xuICAgICAgICAgICAgICAgIG5vZGUuZmlsbFN0eWxlSWQgPSByZXNwLmlkO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBkYXJrVUlCYWNrZ3JvdW5kU3VyZmFjZS5pZDpcbiAgICAgICAgICAgIENvbG9yU3R5bGVJZC5saWdodFVJLmJhY2tncm91bmRTdXJmYWNlLnRoZW4oKHJlc3ApID0+IHtcbiAgICAgICAgICAgICAgICBub2RlLmZpbGxTdHlsZUlkID0gcmVzcC5pZDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgZGFya1VJRGl2aWRlci5pZDpcbiAgICAgICAgICAgIENvbG9yU3R5bGVJZC5saWdodFVJLmRpdmlkZXIudGhlbigocmVzcCkgPT4ge1xuICAgICAgICAgICAgICAgIG5vZGUuZmlsbFN0eWxlSWQgPSByZXNwLmlkO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBkYXJrVUlQcmltYXJ5LmlkOlxuICAgICAgICAgICAgQ29sb3JTdHlsZUlkLmxpZ2h0VUkucHJpbWFyeS50aGVuKChyZXNwKSA9PiB7XG4gICAgICAgICAgICAgICAgbm9kZS5maWxsU3R5bGVJZCA9IHJlc3AuaWQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIGRhcmtVSVByaW1hcnlIb3Zlci5pZDpcbiAgICAgICAgICAgIENvbG9yU3R5bGVJZC5saWdodFVJLnByaW1hcnlIb3Zlci50aGVuKChyZXNwKSA9PiB7XG4gICAgICAgICAgICAgICAgbm9kZS5maWxsU3R5bGVJZCA9IHJlc3AuaWQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIGRhcmtVSURhbmdlci5pZDpcbiAgICAgICAgICAgIENvbG9yU3R5bGVJZC5saWdodFVJLmRhbmdlci50aGVuKChyZXNwKSA9PiB7XG4gICAgICAgICAgICAgICAgbm9kZS5maWxsU3R5bGVJZCA9IHJlc3AuaWQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIGRhcmtVSVN1Y2Nlc3MuaWQ6XG4gICAgICAgICAgICBDb2xvclN0eWxlSWQubGlnaHRVSS5zdWNjZXNzLnRoZW4oKHJlc3ApID0+IHtcbiAgICAgICAgICAgICAgICBub2RlLmZpbGxTdHlsZUlkID0gcmVzcC5pZDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgZGFya1VJV2FybmluZy5pZDpcbiAgICAgICAgICAgIENvbG9yU3R5bGVJZC5saWdodFVJLndhcm5pbmcudGhlbigocmVzcCkgPT4ge1xuICAgICAgICAgICAgICAgIG5vZGUuZmlsbFN0eWxlSWQgPSByZXNwLmlkO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBkYXJrVUlPblByaW1hcnkuaWQ6XG4gICAgICAgICAgICBDb2xvclN0eWxlSWQubGlnaHRVSS5vblByaW1hcnkudGhlbigocmVzcCkgPT4ge1xuICAgICAgICAgICAgICAgIG5vZGUuZmlsbFN0eWxlSWQgPSByZXNwLmlkO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBkYXJrVUlPbkRhbmdlci5pZDpcbiAgICAgICAgICAgIENvbG9yU3R5bGVJZC5saWdodFVJLm9uRGFuZ2VyLnRoZW4oKHJlc3ApID0+IHtcbiAgICAgICAgICAgICAgICBub2RlLmZpbGxTdHlsZUlkID0gcmVzcC5pZDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgZGFya1VJT25TdWNjZXNzLmlkOlxuICAgICAgICAgICAgQ29sb3JTdHlsZUlkLmxpZ2h0VUkub25TdWNjZXNzLnRoZW4oKHJlc3ApID0+IHtcbiAgICAgICAgICAgICAgICBub2RlLmZpbGxTdHlsZUlkID0gcmVzcC5pZDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgZGFya1VJT25XYXJuaW5nLmlkOlxuICAgICAgICAgICAgQ29sb3JTdHlsZUlkLmxpZ2h0VUkub25XYXJuaW5nLnRoZW4oKHJlc3ApID0+IHtcbiAgICAgICAgICAgICAgICBub2RlLmZpbGxTdHlsZUlkID0gcmVzcC5pZDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgZGFya1VJT25CYWNrZ3JvdW5kSGlnaC5pZDpcbiAgICAgICAgICAgIENvbG9yU3R5bGVJZC5saWdodFVJLm9uQmFja2dyb3VuZEhpZ2gudGhlbigocmVzcCkgPT4ge1xuICAgICAgICAgICAgICAgIG5vZGUuZmlsbFN0eWxlSWQgPSByZXNwLmlkO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBkYXJrVUlPbkJhY2tncm91bmRNZWRpdW0uaWQ6XG4gICAgICAgICAgICBDb2xvclN0eWxlSWQubGlnaHRVSS5vbkJhY2tncm91bmRNZWRpdW0udGhlbigocmVzcCkgPT4ge1xuICAgICAgICAgICAgICAgIG5vZGUuZmlsbFN0eWxlSWQgPSByZXNwLmlkO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBkYXJrVUlPbkJhY2tncm91bmREaXNhYmxlZC5pZDpcbiAgICAgICAgICAgIENvbG9yU3R5bGVJZC5saWdodFVJLm9uQmFja2dyb3VuZERpc2FibGVkLnRoZW4oKHJlc3ApID0+IHtcbiAgICAgICAgICAgICAgICBub2RlLmZpbGxTdHlsZUlkID0gcmVzcC5pZDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIC8vIEVmZmVjdHNcbiAgICBzd2l0Y2ggKG5vZGUuZWZmZWN0U3R5bGVJZCkge1xuICAgICAgICBjYXNlIGRhcmtVSVNoYWRvd0xvdy5pZDpcbiAgICAgICAgICAgIEVmZmVjdHNTdHlsZUlkLmxpZ2h0VUkuc2hhZG93TG93LnRoZW4oKHJlc3ApID0+IHtcbiAgICAgICAgICAgICAgICBub2RlLmVmZmVjdFN0eWxlSWQgPSByZXNwLmlkO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBkYXJrVUlTaGFkb3dIaWdoLmlkOlxuICAgICAgICAgICAgRWZmZWN0c1N0eWxlSWQubGlnaHRVSS5zaGFkb3dIaWdoLnRoZW4oKHJlc3ApID0+IHtcbiAgICAgICAgICAgICAgICBub2RlLmVmZmVjdFN0eWxlSWQgPSByZXNwLmlkO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBkYXJrVUlCb3JkZXJUb3AuaWQ6XG4gICAgICAgICAgICBFZmZlY3RzU3R5bGVJZC5saWdodFVJLmJvcmRlclRvcC50aGVuKChyZXNwKSA9PiB7XG4gICAgICAgICAgICAgICAgbm9kZS5lZmZlY3RTdHlsZUlkID0gcmVzcC5pZDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgZGFya1VJQm9yZGVyUmlnaHQuaWQ6XG4gICAgICAgICAgICBFZmZlY3RzU3R5bGVJZC5saWdodFVJLmJvcmRlclJpZ2h0LnRoZW4oKHJlc3ApID0+IHtcbiAgICAgICAgICAgICAgICBub2RlLmVmZmVjdFN0eWxlSWQgPSByZXNwLmlkO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBkYXJrVUlCb3JkZXJCb3R0b20uaWQ6XG4gICAgICAgICAgICBFZmZlY3RzU3R5bGVJZC5saWdodFVJLmJvcmRlckJvdHRvbS50aGVuKChyZXNwKSA9PiB7XG4gICAgICAgICAgICAgICAgbm9kZS5lZmZlY3RTdHlsZUlkID0gcmVzcC5pZDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgZGFya1VJQm9yZGVyTGVmdC5pZDpcbiAgICAgICAgICAgIEVmZmVjdHNTdHlsZUlkLmxpZ2h0VUkuYm9yZGVyTGVmdC50aGVuKChyZXNwKSA9PiB7XG4gICAgICAgICAgICAgICAgbm9kZS5lZmZlY3RTdHlsZUlkID0gcmVzcC5pZDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgZGFya1VJQm9yZGVyVG9wQm90dG9tLmlkOlxuICAgICAgICAgICAgRWZmZWN0c1N0eWxlSWQubGlnaHRVSS5ib3JkZXJUb3BCb3R0b20udGhlbigocmVzcCkgPT4ge1xuICAgICAgICAgICAgICAgIG5vZGUuZWZmZWN0U3R5bGVJZCA9IHJlc3AuaWQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIGRhcmtVSUJvcmRlckxlZnRSaWdodC5pZDpcbiAgICAgICAgICAgIEVmZmVjdHNTdHlsZUlkLmxpZ2h0VUkuYm9yZGVyTGVmdFJpZ2h0LnRoZW4oKHJlc3ApID0+IHtcbiAgICAgICAgICAgICAgICBub2RlLmVmZmVjdFN0eWxlSWQgPSByZXNwLmlkO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG4gICAgLy8gZG8gbm90aGluZyBiZWxvd1xuICAgIGlmIChcImNoaWxkcmVuXCIgaW4gbm9kZSkge1xuICAgICAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIG5vZGUuY2hpbGRyZW4pIHtcbiAgICAgICAgICAgIExpZ2h0VGhlbWVUcmF2ZXJzZShjaGlsZCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIC8vIGRvIG5vdGhpbmdcbiAgICB9XG59KTtcbmNvbnN0IERhcmtUaGVtZVRyYXZlcnNlID0gKG5vZGUpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIGxldCBsaWdodFVJQmFja2dyb3VuZERlZmF1bHQgPSB5aWVsZCBDb2xvclN0eWxlSWQubGlnaHRVSS5iYWNrZ3JvdW5kRGVmYXVsdDtcbiAgICBsZXQgbGlnaHRVSUJhY2tncm91bmRTdXJmYWNlID0geWllbGQgQ29sb3JTdHlsZUlkLmxpZ2h0VUkuYmFja2dyb3VuZFN1cmZhY2U7XG4gICAgbGV0IGxpZ2h0VUlEaXZpZGVyID0geWllbGQgQ29sb3JTdHlsZUlkLmxpZ2h0VUkuZGl2aWRlcjtcbiAgICBsZXQgbGlnaHRVSVByaW1hcnkgPSB5aWVsZCBDb2xvclN0eWxlSWQubGlnaHRVSS5wcmltYXJ5O1xuICAgIGxldCBsaWdodFVJUHJpbWFyeUhvdmVyID0geWllbGQgQ29sb3JTdHlsZUlkLmxpZ2h0VUkucHJpbWFyeUhvdmVyO1xuICAgIGxldCBsaWdodFVJRGFuZ2VyID0geWllbGQgQ29sb3JTdHlsZUlkLmxpZ2h0VUkuZGFuZ2VyO1xuICAgIGxldCBsaWdodFVJU3VjY2VzcyA9IHlpZWxkIENvbG9yU3R5bGVJZC5saWdodFVJLnN1Y2Nlc3M7XG4gICAgbGV0IGxpZ2h0VUlXYXJuaW5nID0geWllbGQgQ29sb3JTdHlsZUlkLmxpZ2h0VUkud2FybmluZztcbiAgICBsZXQgbGlnaHRVSU9uUHJpbWFyeSA9IHlpZWxkIENvbG9yU3R5bGVJZC5saWdodFVJLm9uUHJpbWFyeTtcbiAgICBsZXQgbGlnaHRVSU9uRGFuZ2VyID0geWllbGQgQ29sb3JTdHlsZUlkLmxpZ2h0VUkub25EYW5nZXI7XG4gICAgbGV0IGxpZ2h0VUlPblN1Y2Nlc3MgPSB5aWVsZCBDb2xvclN0eWxlSWQubGlnaHRVSS5vblN1Y2Nlc3M7XG4gICAgbGV0IGxpZ2h0VUlPbldhcm5pbmcgPSB5aWVsZCBDb2xvclN0eWxlSWQubGlnaHRVSS5vbldhcm5pbmc7XG4gICAgbGV0IGxpZ2h0VUlvbkJhY2tncm91bmRIaWdoID0geWllbGQgQ29sb3JTdHlsZUlkLmxpZ2h0VUkub25CYWNrZ3JvdW5kSGlnaDtcbiAgICBsZXQgbGlnaHRVSU9uQmFja2dyb3VuZE1lZGl1bSA9IHlpZWxkIENvbG9yU3R5bGVJZC5saWdodFVJLm9uQmFja2dyb3VuZE1lZGl1bTtcbiAgICBsZXQgbGlnaHRVSU9uQmFja2dyb3VuZERpc2FibGVkID0geWllbGQgQ29sb3JTdHlsZUlkLmxpZ2h0VUlcbiAgICAgICAgLm9uQmFja2dyb3VuZERpc2FibGVkO1xuICAgIC8vIEVmZmVjdHNcbiAgICBsZXQgbGlnaHRVSVNoYWRvd0xvdyA9IHlpZWxkIEVmZmVjdHNTdHlsZUlkLmxpZ2h0VUkuc2hhZG93TG93O1xuICAgIGxldCBsaWdodFVJU2hhZG93SGlnaCA9IHlpZWxkIEVmZmVjdHNTdHlsZUlkLmxpZ2h0VUkuc2hhZG93SGlnaDtcbiAgICBsZXQgbGlnaHRVSUJvcmRlclRvcCA9IHlpZWxkIEVmZmVjdHNTdHlsZUlkLmxpZ2h0VUkuYm9yZGVyVG9wO1xuICAgIGxldCBsaWdodFVJQm9yZGVyUmlnaHQgPSB5aWVsZCBFZmZlY3RzU3R5bGVJZC5saWdodFVJLmJvcmRlclJpZ2h0O1xuICAgIGxldCBsaWdodFVJQm9yZGVyQm90dG9tID0geWllbGQgRWZmZWN0c1N0eWxlSWQubGlnaHRVSS5ib3JkZXJCb3R0b207XG4gICAgbGV0IGxpZ2h0VUlCb3JkZXJMZWZ0ID0geWllbGQgRWZmZWN0c1N0eWxlSWQubGlnaHRVSS5ib3JkZXJMZWZ0O1xuICAgIGxldCBsaWdodFVJQm9yZGVyVG9wQm90dG9tID0geWllbGQgRWZmZWN0c1N0eWxlSWQubGlnaHRVSS5ib3JkZXJUb3BCb3R0b207XG4gICAgbGV0IGxpZ2h0VUlCb3JkZXJMZWZ0UmlnaHQgPSB5aWVsZCBFZmZlY3RzU3R5bGVJZC5saWdodFVJLmJvcmRlckxlZnRSaWdodDtcbiAgICAvLyBTdHJva2VcbiAgICBzd2l0Y2ggKG5vZGUuc3Ryb2tlU3R5bGVJZCkge1xuICAgICAgICBjYXNlIGxpZ2h0VUlEaXZpZGVyLmlkOlxuICAgICAgICAgICAgQ29sb3JTdHlsZUlkLmRhcmtVSS5kaXZpZGVyLnRoZW4oKHJlc3ApID0+IHtcbiAgICAgICAgICAgICAgICBub2RlLnN0cm9rZVN0eWxlSWQgPSByZXNwLmlkO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBsaWdodFVJUHJpbWFyeS5pZDpcbiAgICAgICAgICAgIENvbG9yU3R5bGVJZC5kYXJrVUkucHJpbWFyeS50aGVuKChyZXNwKSA9PiB7XG4gICAgICAgICAgICAgICAgbm9kZS5zdHJva2VTdHlsZUlkID0gcmVzcC5pZDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgbGlnaHRVSURhbmdlci5pZDpcbiAgICAgICAgICAgIENvbG9yU3R5bGVJZC5kYXJrVUkuZGFuZ2VyLnRoZW4oKHJlc3ApID0+IHtcbiAgICAgICAgICAgICAgICBub2RlLnN0cm9rZVN0eWxlSWQgPSByZXNwLmlkO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBsaWdodFVJV2FybmluZy5pZDpcbiAgICAgICAgICAgIENvbG9yU3R5bGVJZC5kYXJrVUkud2FybmluZy50aGVuKChyZXNwKSA9PiB7XG4gICAgICAgICAgICAgICAgbm9kZS5zdHJva2VTdHlsZUlkID0gcmVzcC5pZDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgbGlnaHRVSVN1Y2Nlc3MuaWQ6XG4gICAgICAgICAgICBDb2xvclN0eWxlSWQuZGFya1VJLnN1Y2Nlc3MudGhlbigocmVzcCkgPT4ge1xuICAgICAgICAgICAgICAgIG5vZGUuc3Ryb2tlU3R5bGVJZCA9IHJlc3AuaWQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIGxpZ2h0VUlvbkJhY2tncm91bmRIaWdoLmlkOlxuICAgICAgICAgICAgQ29sb3JTdHlsZUlkLmRhcmtVSS5vbkJhY2tncm91bmRIaWdoLnRoZW4oKHJlc3ApID0+IHtcbiAgICAgICAgICAgICAgICBub2RlLnN0cm9rZVN0eWxlSWQgPSByZXNwLmlkO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBsaWdodFVJT25CYWNrZ3JvdW5kTWVkaXVtLmlkOlxuICAgICAgICAgICAgQ29sb3JTdHlsZUlkLmRhcmtVSS5vbkJhY2tncm91bmRNZWRpdW0udGhlbigocmVzcCkgPT4ge1xuICAgICAgICAgICAgICAgIG5vZGUuc3Ryb2tlU3R5bGVJZCA9IHJlc3AuaWQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIGxpZ2h0VUlPbkJhY2tncm91bmREaXNhYmxlZC5pZDpcbiAgICAgICAgICAgIENvbG9yU3R5bGVJZC5kYXJrVUkub25CYWNrZ3JvdW5kRGlzYWJsZWQudGhlbigocmVzcCkgPT4ge1xuICAgICAgICAgICAgICAgIG5vZGUuc3Ryb2tlU3R5bGVJZCA9IHJlc3AuaWQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICAvLyBGaWxsXG4gICAgc3dpdGNoIChub2RlLmZpbGxTdHlsZUlkKSB7XG4gICAgICAgIGNhc2UgbGlnaHRVSUJhY2tncm91bmREZWZhdWx0LmlkOlxuICAgICAgICAgICAgQ29sb3JTdHlsZUlkLmRhcmtVSS5iYWNrZ3JvdW5kRGVmYXVsdC50aGVuKChyZXNwKSA9PiB7XG4gICAgICAgICAgICAgICAgbm9kZS5maWxsU3R5bGVJZCA9IHJlc3AuaWQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIGxpZ2h0VUlCYWNrZ3JvdW5kU3VyZmFjZS5pZDpcbiAgICAgICAgICAgIENvbG9yU3R5bGVJZC5kYXJrVUkuYmFja2dyb3VuZFN1cmZhY2UudGhlbigocmVzcCkgPT4ge1xuICAgICAgICAgICAgICAgIG5vZGUuZmlsbFN0eWxlSWQgPSByZXNwLmlkO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBsaWdodFVJRGl2aWRlci5pZDpcbiAgICAgICAgICAgIENvbG9yU3R5bGVJZC5kYXJrVUkuZGl2aWRlci50aGVuKChyZXNwKSA9PiB7XG4gICAgICAgICAgICAgICAgbm9kZS5maWxsU3R5bGVJZCA9IHJlc3AuaWQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIGxpZ2h0VUlQcmltYXJ5LmlkOlxuICAgICAgICAgICAgQ29sb3JTdHlsZUlkLmRhcmtVSS5wcmltYXJ5LnRoZW4oKHJlc3ApID0+IHtcbiAgICAgICAgICAgICAgICBub2RlLmZpbGxTdHlsZUlkID0gcmVzcC5pZDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgbGlnaHRVSVByaW1hcnlIb3Zlci5pZDpcbiAgICAgICAgICAgIENvbG9yU3R5bGVJZC5kYXJrVUkucHJpbWFyeUhvdmVyLnRoZW4oKHJlc3ApID0+IHtcbiAgICAgICAgICAgICAgICBub2RlLmZpbGxTdHlsZUlkID0gcmVzcC5pZDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgbGlnaHRVSURhbmdlci5pZDpcbiAgICAgICAgICAgIENvbG9yU3R5bGVJZC5kYXJrVUkuZGFuZ2VyLnRoZW4oKHJlc3ApID0+IHtcbiAgICAgICAgICAgICAgICBub2RlLmZpbGxTdHlsZUlkID0gcmVzcC5pZDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgbGlnaHRVSVN1Y2Nlc3MuaWQ6XG4gICAgICAgICAgICBDb2xvclN0eWxlSWQuZGFya1VJLnN1Y2Nlc3MudGhlbigocmVzcCkgPT4ge1xuICAgICAgICAgICAgICAgIG5vZGUuZmlsbFN0eWxlSWQgPSByZXNwLmlkO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBsaWdodFVJV2FybmluZy5pZDpcbiAgICAgICAgICAgIENvbG9yU3R5bGVJZC5kYXJrVUkud2FybmluZy50aGVuKChyZXNwKSA9PiB7XG4gICAgICAgICAgICAgICAgbm9kZS5maWxsU3R5bGVJZCA9IHJlc3AuaWQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIGxpZ2h0VUlPblByaW1hcnkuaWQ6XG4gICAgICAgICAgICBDb2xvclN0eWxlSWQuZGFya1VJLm9uUHJpbWFyeS50aGVuKChyZXNwKSA9PiB7XG4gICAgICAgICAgICAgICAgbm9kZS5maWxsU3R5bGVJZCA9IHJlc3AuaWQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIGxpZ2h0VUlPbkRhbmdlci5pZDpcbiAgICAgICAgICAgIENvbG9yU3R5bGVJZC5kYXJrVUkub25EYW5nZXIudGhlbigocmVzcCkgPT4ge1xuICAgICAgICAgICAgICAgIG5vZGUuZmlsbFN0eWxlSWQgPSByZXNwLmlkO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBsaWdodFVJT25TdWNjZXNzLmlkOlxuICAgICAgICAgICAgQ29sb3JTdHlsZUlkLmRhcmtVSS5vblN1Y2Nlc3MudGhlbigocmVzcCkgPT4ge1xuICAgICAgICAgICAgICAgIG5vZGUuZmlsbFN0eWxlSWQgPSByZXNwLmlkO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBsaWdodFVJT25XYXJuaW5nLmlkOlxuICAgICAgICAgICAgQ29sb3JTdHlsZUlkLmRhcmtVSS5vbldhcm5pbmcudGhlbigocmVzcCkgPT4ge1xuICAgICAgICAgICAgICAgIG5vZGUuZmlsbFN0eWxlSWQgPSByZXNwLmlkO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBsaWdodFVJb25CYWNrZ3JvdW5kSGlnaC5pZDpcbiAgICAgICAgICAgIENvbG9yU3R5bGVJZC5kYXJrVUkub25CYWNrZ3JvdW5kSGlnaC50aGVuKChyZXNwKSA9PiB7XG4gICAgICAgICAgICAgICAgbm9kZS5maWxsU3R5bGVJZCA9IHJlc3AuaWQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIGxpZ2h0VUlPbkJhY2tncm91bmRNZWRpdW0uaWQ6XG4gICAgICAgICAgICBDb2xvclN0eWxlSWQuZGFya1VJLm9uQmFja2dyb3VuZE1lZGl1bS50aGVuKChyZXNwKSA9PiB7XG4gICAgICAgICAgICAgICAgbm9kZS5maWxsU3R5bGVJZCA9IHJlc3AuaWQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIGxpZ2h0VUlPbkJhY2tncm91bmREaXNhYmxlZC5pZDpcbiAgICAgICAgICAgIENvbG9yU3R5bGVJZC5kYXJrVUkub25CYWNrZ3JvdW5kRGlzYWJsZWQudGhlbigocmVzcCkgPT4ge1xuICAgICAgICAgICAgICAgIG5vZGUuZmlsbFN0eWxlSWQgPSByZXNwLmlkO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG4gICAgLy8gRWZmZWN0c1xuICAgIHN3aXRjaCAobm9kZS5lZmZlY3RTdHlsZUlkKSB7XG4gICAgICAgIGNhc2UgbGlnaHRVSVNoYWRvd0xvdy5pZDpcbiAgICAgICAgICAgIEVmZmVjdHNTdHlsZUlkLmRhcmtVSS5zaGFkb3dMb3cudGhlbigocmVzcCkgPT4ge1xuICAgICAgICAgICAgICAgIG5vZGUuZWZmZWN0U3R5bGVJZCA9IHJlc3AuaWQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIGxpZ2h0VUlTaGFkb3dIaWdoLmlkOlxuICAgICAgICAgICAgRWZmZWN0c1N0eWxlSWQuZGFya1VJLnNoYWRvd0hpZ2gudGhlbigocmVzcCkgPT4ge1xuICAgICAgICAgICAgICAgIG5vZGUuZWZmZWN0U3R5bGVJZCA9IHJlc3AuaWQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIGxpZ2h0VUlCb3JkZXJUb3AuaWQ6XG4gICAgICAgICAgICBFZmZlY3RzU3R5bGVJZC5kYXJrVUkuYm9yZGVyVG9wLnRoZW4oKHJlc3ApID0+IHtcbiAgICAgICAgICAgICAgICBub2RlLmVmZmVjdFN0eWxlSWQgPSByZXNwLmlkO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBsaWdodFVJQm9yZGVyUmlnaHQuaWQ6XG4gICAgICAgICAgICBFZmZlY3RzU3R5bGVJZC5kYXJrVUkuYm9yZGVyUmlnaHQudGhlbigocmVzcCkgPT4ge1xuICAgICAgICAgICAgICAgIG5vZGUuZWZmZWN0U3R5bGVJZCA9IHJlc3AuaWQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIGxpZ2h0VUlCb3JkZXJCb3R0b20uaWQ6XG4gICAgICAgICAgICBFZmZlY3RzU3R5bGVJZC5kYXJrVUkuYm9yZGVyQm90dG9tLnRoZW4oKHJlc3ApID0+IHtcbiAgICAgICAgICAgICAgICBub2RlLmVmZmVjdFN0eWxlSWQgPSByZXNwLmlkO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBsaWdodFVJQm9yZGVyTGVmdC5pZDpcbiAgICAgICAgICAgIEVmZmVjdHNTdHlsZUlkLmRhcmtVSS5ib3JkZXJMZWZ0LnRoZW4oKHJlc3ApID0+IHtcbiAgICAgICAgICAgICAgICBub2RlLmVmZmVjdFN0eWxlSWQgPSByZXNwLmlkO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBsaWdodFVJQm9yZGVyVG9wQm90dG9tLmlkOlxuICAgICAgICAgICAgRWZmZWN0c1N0eWxlSWQuZGFya1VJLmJvcmRlclRvcEJvdHRvbS50aGVuKChyZXNwKSA9PiB7XG4gICAgICAgICAgICAgICAgbm9kZS5lZmZlY3RTdHlsZUlkID0gcmVzcC5pZDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgbGlnaHRVSUJvcmRlckxlZnRSaWdodC5pZDpcbiAgICAgICAgICAgIEVmZmVjdHNTdHlsZUlkLmRhcmtVSS5ib3JkZXJMZWZ0UmlnaHQudGhlbigocmVzcCkgPT4ge1xuICAgICAgICAgICAgICAgIG5vZGUuZWZmZWN0U3R5bGVJZCA9IHJlc3AuaWQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICAvLyBkbyBub3RoaW5nIGJlbG93XG4gICAgaWYgKFwiY2hpbGRyZW5cIiBpbiBub2RlKSB7XG4gICAgICAgIGZvciAoY29uc3QgY2hpbGQgb2Ygbm9kZS5jaGlsZHJlbikge1xuICAgICAgICAgICAgRGFya1RoZW1lVHJhdmVyc2UoY2hpbGQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICAvLyBkbyBub3RoaW5nXG4gICAgfVxufSk7XG5leHBvcnQgeyBMaWdodFRoZW1lVHJhdmVyc2UsIERhcmtUaGVtZVRyYXZlcnNlIH07XG4iLCJjb25zdCBDb2xvclN0eWxlSWQgPSB7XG4gIGxpZ2h0VUk6IHtcbiAgICBiYWNrZ3JvdW5kRGVmYXVsdDogZmlnbWEuaW1wb3J0U3R5bGVCeUtleUFzeW5jKFxuICAgICAgXCIyM2U5NGZjZWVkOWFjY2JkYTRkYjljNjcyYzQzZDIxYjRkMjg2ZTRjXCJcbiAgICApLFxuICAgIGJhY2tncm91bmRTdXJmYWNlOiBmaWdtYS5pbXBvcnRTdHlsZUJ5S2V5QXN5bmMoXG4gICAgICBcIjkwM2U1YmYyNzQxMzllZWI5ZjQ5NjhhOWVmMDhlYzA1ZWFmMGIyNzRcIlxuICAgICksXG4gICAgZGl2aWRlcjogZmlnbWEuaW1wb3J0U3R5bGVCeUtleUFzeW5jKFxuICAgICAgXCJlZTRkZGNlMmU1NmFkNDdjNDIxNmQ1ODI3YTI4M2I5NDNhNzk0Yzc4XCJcbiAgICApLFxuICAgIHByaW1hcnk6IGZpZ21hLmltcG9ydFN0eWxlQnlLZXlBc3luYyhcbiAgICAgIFwiY2YwYzhlODhlYjY1YjgwNDlmZWNhNjBhYzgzZTFkZTNkM2FiNmU4YlwiXG4gICAgKSxcbiAgICBwcmltYXJ5SG92ZXI6IGZpZ21hLmltcG9ydFN0eWxlQnlLZXlBc3luYyhcbiAgICAgIFwiZGE5Mzg2OThjOWQyMjMyMjFkNjNjN2M1NTAxYTkwNTdhMGQ1ZjZmYlwiXG4gICAgKSxcbiAgICBkYW5nZXI6IGZpZ21hLmltcG9ydFN0eWxlQnlLZXlBc3luYyhcbiAgICAgIFwiNzk4Y2I4Zjg5OGFiMmE1MDhhN2JhNDkxZDg5OTAxMWZkYTg5NjU3N1wiXG4gICAgKSxcbiAgICBzdWNjZXNzOiBmaWdtYS5pbXBvcnRTdHlsZUJ5S2V5QXN5bmMoXG4gICAgICBcImU0YWE0MWU4YmY1MmY5NGVmNWZjZTM2NjlmNTEwYWYzY2I3OWM1YTdcIlxuICAgICksXG4gICAgd2FybmluZzogZmlnbWEuaW1wb3J0U3R5bGVCeUtleUFzeW5jKFxuICAgICAgXCJmMjdhNjBkZjhjMTYyMTg1ZWEyNDcyYTgwMWIyNzFlZjY2MmMwNDI5XCJcbiAgICApLFxuICAgIG9uUHJpbWFyeTogZmlnbWEuaW1wb3J0U3R5bGVCeUtleUFzeW5jKFxuICAgICAgXCI1ZGU3ODkyY2E0NDJhMzNiZmE0NjI1MmJkMzhiZTZjYmY1NGFiNDNjXCJcbiAgICApLFxuICAgIG9uRGFuZ2VyOiBmaWdtYS5pbXBvcnRTdHlsZUJ5S2V5QXN5bmMoXG4gICAgICBcIjJhZmU1NDI0NWMzOGZmZjFiMWJhODEzODVlOThmZmRlNTA3MDFjMzlcIlxuICAgICksXG4gICAgb25TdWNjZXNzOiBmaWdtYS5pbXBvcnRTdHlsZUJ5S2V5QXN5bmMoXG4gICAgICBcImYwODIwYjZmN2NlMWEzNzJkMDhlMzE3M2E0Zjg2YTEyMTE2NTU2MGNcIlxuICAgICksXG4gICAgb25XYXJuaW5nOiBmaWdtYS5pbXBvcnRTdHlsZUJ5S2V5QXN5bmMoXG4gICAgICBcIjU5MzNiODNlZjQyNzMyOTVlMjE1MmU0OWZlNDY2OThkZDI5ZWVmOTVcIlxuICAgICksXG4gICAgb25CYWNrZ3JvdW5kSGlnaDogZmlnbWEuaW1wb3J0U3R5bGVCeUtleUFzeW5jKFxuICAgICAgXCI4ZjA1YzYzZGU3ZjEwMGIyYmQ4ZmFkN2I4YmQ3MTQ4OWI2MzdjMDY3XCJcbiAgICApLFxuICAgIG9uQmFja2dyb3VuZE1lZGl1bTogZmlnbWEuaW1wb3J0U3R5bGVCeUtleUFzeW5jKFxuICAgICAgXCI5NzA2M2E1ZjYyYzM1NGU2YWUwOTE5ZDUwYjY4ZDBiYWRiNGExMjJlXCJcbiAgICApLFxuICAgIG9uQmFja2dyb3VuZERpc2FibGVkOiBmaWdtYS5pbXBvcnRTdHlsZUJ5S2V5QXN5bmMoXG4gICAgICBcImE4MDlmNzVlMTRmYmU2Mjk2MjcyZTg1MzExMDZmNmNjNGM2OTI1NTNcIlxuICAgICksXG4gIH0sXG4gIGRhcmtVSToge1xuICAgIGJhY2tncm91bmREZWZhdWx0OiBmaWdtYS5pbXBvcnRTdHlsZUJ5S2V5QXN5bmMoXG4gICAgICBcIjJmMDYwZTc0MjJhOGFkMTdhMDM3YTI1MGQzNjhjZjY3MWFkYzA0NjhcIlxuICAgICksXG4gICAgYmFja2dyb3VuZFN1cmZhY2U6IGZpZ21hLmltcG9ydFN0eWxlQnlLZXlBc3luYyhcbiAgICAgIFwiMTVmNWZmYWMzZWM5MWIyNDA4OTgxMzQzOWZmYWRkMWY5OTk0YjI5Y1wiXG4gICAgKSxcbiAgICBkaXZpZGVyOiBmaWdtYS5pbXBvcnRTdHlsZUJ5S2V5QXN5bmMoXG4gICAgICBcIjg0YWIwZjI5OGVhOGZjZDBiODJhYzg5Mjk4YWQ1MTE0MGNhN2I3NWFcIlxuICAgICksXG4gICAgcHJpbWFyeTogZmlnbWEuaW1wb3J0U3R5bGVCeUtleUFzeW5jKFxuICAgICAgXCIxYjAzOGVjNjAwZDJhMTRiNmNjZTM1ZjdiNDA5MGM2YWQyZGQyYzdkXCJcbiAgICApLFxuICAgIHByaW1hcnlIb3ZlcjogZmlnbWEuaW1wb3J0U3R5bGVCeUtleUFzeW5jKFxuICAgICAgXCJlNTdkZWZhOTc1M2ZhNTVkYzg3MTJkOTE3MmU3ZTQ3MWM1NjAwYWM2XCJcbiAgICApLFxuICAgIGRhbmdlcjogZmlnbWEuaW1wb3J0U3R5bGVCeUtleUFzeW5jKFxuICAgICAgXCIwMGU0MzgxY2ZiODUxZjdmN2M4NzA4NGM1Y2ZhZDExZWZiODBjYzIzXCJcbiAgICApLFxuICAgIHN1Y2Nlc3M6IGZpZ21hLmltcG9ydFN0eWxlQnlLZXlBc3luYyhcbiAgICAgIFwiOGJlYTJhMDMwY2I3NDFkYWYyNjkxZDIzOTgxYmVkMGU4ODUzZjYyYlwiXG4gICAgKSxcbiAgICB3YXJuaW5nOiBmaWdtYS5pbXBvcnRTdHlsZUJ5S2V5QXN5bmMoXG4gICAgICBcIjU2M2E0NDA1YjFhODM4Njc2YWI1NGY5OGFmNmY4MzYyNWRmODdiOWNcIlxuICAgICksXG4gICAgb25QcmltYXJ5OiBmaWdtYS5pbXBvcnRTdHlsZUJ5S2V5QXN5bmMoXG4gICAgICBcIjNmZGJkNDNkZDI0NjNjNjRiOTRlMGI4MWE5MTZhNjA2YzA4YjBmMWNcIlxuICAgICksXG4gICAgb25EYW5nZXI6IGZpZ21hLmltcG9ydFN0eWxlQnlLZXlBc3luYyhcbiAgICAgIFwiN2FkY2YyZTU5ZTMxODgxYTFjYTVkMWU5ZDZhOGUzMDUwMjdhZTFmZVwiXG4gICAgKSxcbiAgICBvblN1Y2Nlc3M6IGZpZ21hLmltcG9ydFN0eWxlQnlLZXlBc3luYyhcbiAgICAgIFwiODhhMGZiY2M2OGQzYWM5YTdjODhmNWJjNGViZGJkM2U5ZDVhYTY0NFwiXG4gICAgKSxcbiAgICBvbldhcm5pbmc6IGZpZ21hLmltcG9ydFN0eWxlQnlLZXlBc3luYyhcbiAgICAgIFwiMGM2YjcwY2I4MTQ4NzIxMDU5Nzg4NzRlMmJmOTFjMWE1YTk1OTY1ZFwiXG4gICAgKSxcbiAgICBvbkJhY2tncm91bmRIaWdoOiBmaWdtYS5pbXBvcnRTdHlsZUJ5S2V5QXN5bmMoXG4gICAgICBcIjVlOGU0OTI1OThjNGY2ZTE4ZDg2ZDg3YjNhZDEwZTg1NjdmYTdmZDFcIlxuICAgICksXG4gICAgb25CYWNrZ3JvdW5kTWVkaXVtOiBmaWdtYS5pbXBvcnRTdHlsZUJ5S2V5QXN5bmMoXG4gICAgICBcIjlkMmU1MTFkOWEzMWViZDc2ZTMwMmFiMjVkMWU5OTVlNmE4M2FjMWNcIlxuICAgICksXG4gICAgb25CYWNrZ3JvdW5kRGlzYWJsZWQ6IGZpZ21hLmltcG9ydFN0eWxlQnlLZXlBc3luYyhcbiAgICAgIFwiYzk4ODgzZTA3YmU4MGJlNmJjZDE4ODE0ZWIyOWE4Nzc5N2E5OWM2YVwiXG4gICAgKSxcbiAgICBFZmZlY3RTaGFkb3dMb3c6IGZpZ21hLmltcG9ydFN0eWxlQnlLZXlBc3luYyhcbiAgICAgIFwiOGNjZWE5ZDUyM2NmOWRjMTNmZWU2OGYzOTJmM2Y5Y2MzMTg3YTQ1N1wiXG4gICAgKSxcbiAgICBFZmZlY3RTaGFkb3dIaWdoOiBmaWdtYS5pbXBvcnRTdHlsZUJ5S2V5QXN5bmMoXG4gICAgICBcImM2MTI1M2MzOGY2ZDBkOWYzYjMwMmE3N2EzODA3ZTA1MmU5YzNmOTFcIlxuICAgICksXG4gIH0sXG59O1xuXG5leHBvcnQgeyBDb2xvclN0eWxlSWQgfTtcbiIsImNvbnN0IEVmZmVjdHNTdHlsZUlkID0ge1xuICBsaWdodFVJOiB7XG4gICAgc2hhZG93TG93OiBmaWdtYS5pbXBvcnRTdHlsZUJ5S2V5QXN5bmMoXG4gICAgICBcIjhjY2VhOWQ1MjNjZjlkYzEzZmVlNjhmMzkyZjNmOWNjMzE4N2E0NTdcIlxuICAgICksXG4gICAgc2hhZG93SGlnaDogZmlnbWEuaW1wb3J0U3R5bGVCeUtleUFzeW5jKFxuICAgICAgXCJjNjEyNTNjMzhmNmQwZDlmM2IzMDJhNzdhMzgwN2UwNTJlOWMzZjkxXCJcbiAgICApLFxuICAgIGJvcmRlclRvcDogZmlnbWEuaW1wb3J0U3R5bGVCeUtleUFzeW5jKFxuICAgICAgXCJiNDg3MjJkNjE2NDhkN2M2NTY1ZmVhNjQwMzYxODUzZWM1MzYzOWQxXCJcbiAgICApLFxuICAgIGJvcmRlclJpZ2h0OiBmaWdtYS5pbXBvcnRTdHlsZUJ5S2V5QXN5bmMoXG4gICAgICBcIjMzOTRmZWU4ZTNmMDhlZGM3ZDYwZDZhYWIyOWYwZjNmOGVlMWIxYjJcIlxuICAgICksXG4gICAgYm9yZGVyQm90dG9tOiBmaWdtYS5pbXBvcnRTdHlsZUJ5S2V5QXN5bmMoXG4gICAgICBcImY2M2ZmZjM5YWUwMjFmMDc3OWI2ZDQ2ZGM5NzViYzU3OGRkM2I3YzVcIlxuICAgICksXG4gICAgYm9yZGVyTGVmdDogZmlnbWEuaW1wb3J0U3R5bGVCeUtleUFzeW5jKFxuICAgICAgXCI5ZWRkZGY3ODBiZjQ0NTE1ZDk1ZTJhNGJmZjYwMzZlMjQ3ZGE1YWY1XCJcbiAgICApLFxuICAgIGJvcmRlclRvcEJvdHRvbTogZmlnbWEuaW1wb3J0U3R5bGVCeUtleUFzeW5jKFxuICAgICAgXCIyM2MxMTkxNmU2YWY0MTNlZjIyMGFjZmNjNDAxOTVkODJmZTMwM2I1XCJcbiAgICApLFxuICAgIGJvcmRlckxlZnRSaWdodDogZmlnbWEuaW1wb3J0U3R5bGVCeUtleUFzeW5jKFxuICAgICAgXCJhNjQ0N2I3MjEwOTAxYmNhNDViOThmZTkxOGFjNTU1NDBmYTgzNTRlXCJcbiAgICApLFxuICB9LFxuICBkYXJrVUk6IHtcbiAgICBzaGFkb3dMb3c6IGZpZ21hLmltcG9ydFN0eWxlQnlLZXlBc3luYyhcbiAgICAgIFwiOTg3NjE5MDRiY2M5ZDM4YzgxZWUyM2U3YjQzMmQ4Yzk3ZTI5ZjBjMVwiXG4gICAgKSxcbiAgICBzaGFkb3dIaWdoOiBmaWdtYS5pbXBvcnRTdHlsZUJ5S2V5QXN5bmMoXG4gICAgICBcIjIwOWI0NTFlNGY2OGY1YmYzYWRlMjRlZjM2YTEwYTYwOWNkYWUyMzlcIlxuICAgICksXG4gICAgYm9yZGVyVG9wOiBmaWdtYS5pbXBvcnRTdHlsZUJ5S2V5QXN5bmMoXG4gICAgICBcImQzOTRjNmZmNzhhOTRjOTAwZjM0NGI1M2YxZDdlMGU3ZWNkY2NkNzlcIlxuICAgICksXG4gICAgYm9yZGVyUmlnaHQ6IGZpZ21hLmltcG9ydFN0eWxlQnlLZXlBc3luYyhcbiAgICAgIFwiNDMzYzYwNWYzNGU5YTg4ZDAzNTBmMjJmZTU4YzlhZmM4ZjBlN2RkN1wiXG4gICAgKSxcbiAgICBib3JkZXJCb3R0b206IGZpZ21hLmltcG9ydFN0eWxlQnlLZXlBc3luYyhcbiAgICAgIFwiM2U0Njc0ODEwNTEwNmI2NTQ0MGMyNGYxYjllNDFjOTk0ZmRhYzQwMlwiXG4gICAgKSxcbiAgICBib3JkZXJMZWZ0OiBmaWdtYS5pbXBvcnRTdHlsZUJ5S2V5QXN5bmMoXG4gICAgICBcImY4OGIyMjdkZDZkNmI0ZjgyODViMmUxNzlhN2M3ZDQyNzdmMGZiMzFcIlxuICAgICksXG4gICAgYm9yZGVyVG9wQm90dG9tOiBmaWdtYS5pbXBvcnRTdHlsZUJ5S2V5QXN5bmMoXG4gICAgICBcImEzNGYzZDBhMjJjMjQ1OWNmYzYyNmYxNzhjNDdkOWJiMWJhOGIyYTVcIlxuICAgICksXG4gICAgYm9yZGVyTGVmdFJpZ2h0OiBmaWdtYS5pbXBvcnRTdHlsZUJ5S2V5QXN5bmMoXG4gICAgICBcImZjMDZiOGU3MDMyZmM5YjFmYTA3YWY1ZTM5MjkzZGYyMTUwZmY0ZGNcIlxuICAgICksXG4gIH0sXG59O1xuXG5leHBvcnQgeyBFZmZlY3RzU3R5bGVJZCB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==