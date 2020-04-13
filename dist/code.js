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
    let darkUIKeylineSupplementary = yield _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].darkUI
        .keylineSupplementary;
    let darkUIAccent = yield _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].darkUI.accent;
    let darkUIAccentHover = yield _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].darkUI.accentHover;
    let darkUIDanger = yield _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].darkUI.danger;
    let darkUISuccess = yield _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].darkUI.success;
    let darkUIOnAccent = yield _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].darkUI.onAccent;
    let darkUIOnDanger = yield _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].darkUI.onDanger;
    let darkUIOnSuccess = yield _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].darkUI.onSuccess;
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
        case darkUIDanger.id:
            _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].lightUI.danger.then((resp) => {
                node.strokeStyleId = resp.id;
            });
            break;
        case darkUIKeyline.id:
            _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].lightUI.keyline.then((resp) => {
                node.strokeStyleId = resp.id;
            });
            break;
        case darkUIKeylineSupplementary.id:
            _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].lightUI.keylineSupplementary.then((resp) => {
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
        case darkUIKeylineSupplementary.id:
            _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].lightUI.keylineSupplementary.then((resp) => {
                node.fillStyleId = resp.id;
            });
            break;
        case darkUIAccent.id:
            _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].lightUI.accent.then((resp) => {
                node.fillStyleId = resp.id;
            });
            break;
        case darkUIAccentHover.id:
            _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].lightUI.accentHover.then((resp) => {
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
        case darkUIOnAccent.id:
            _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].lightUI.onAccent.then((resp) => {
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
    let lightUIKeylineSupplementary = yield _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].lightUI
        .keylineSupplementary;
    let lightUIAccent = yield _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].lightUI.accent;
    let lightUIAccentHover = yield _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].lightUI.accentHover;
    let lightUIDanger = yield _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].lightUI.danger;
    let lightUISuccess = yield _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].lightUI.success;
    let lightUIOnAccent = yield _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].lightUI.onAccent;
    let lightUIOnDanger = yield _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].lightUI.onDanger;
    let lightUIOnSuccess = yield _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].lightUI.onSuccess;
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
        case lightUIDanger.id:
            _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].darkUI.danger.then((resp) => {
                node.strokeStyleId = resp.id;
            });
            break;
        case lightUIKeyline.id:
            _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].darkUI.keyline.then((resp) => {
                node.strokeStyleId = resp.id;
            });
            break;
        case lightUIKeylineSupplementary.id:
            _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].darkUI.keylineSupplementary.then((resp) => {
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
        case lightUIKeylineSupplementary.id:
            _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].darkUI.keylineSupplementary.then((resp) => {
                node.fillStyleId = resp.id;
            });
            break;
        case lightUIAccent.id:
            _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].darkUI.accent.then((resp) => {
                node.fillStyleId = resp.id;
            });
            break;
        case lightUIAccentHover.id:
            _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].darkUI.accentHover.then((resp) => {
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
        case lightUIOnAccent.id:
            _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["ColorStyleId"].darkUI.onAccent.then((resp) => {
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
    keylineSupplementary: figma.importStyleByKeyAsync(
      "4c23ec3401af47c4044b9157cc65549dabd207d9"
    ),
    accent: figma.importStyleByKeyAsync(
      "cf0c8e88eb65b8049feca60ac83e1de3d3ab6e8b"
    ),
    accentHover: figma.importStyleByKeyAsync(
      "da938698c9d223221d63c7c5501a9057a0d5f6fb"
    ),
    danger: figma.importStyleByKeyAsync(
      "798cb8f898ab2a508a7ba491d899011fda896577"
    ),
    success: figma.importStyleByKeyAsync(
      "e4aa41e8bf52f94ef5fce3669f510af3cb79c5a7"
    ),
    onAccent: figma.importStyleByKeyAsync(
      "5de7892ca442a33bfa46252bd38be6cbf54ab43c"
    ),
    onDanger: figma.importStyleByKeyAsync(
      "2afe54245c38fff1b1ba81385e98ffde50701c39"
    ),
    onSuccess: figma.importStyleByKeyAsync(
      "f0820b6f7ce1a372d08e3173a4f86a121165560c"
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
    keylineSupplementary: figma.importStyleByKeyAsync(
      "bffe20f9729acb525d8861288f0d844137698c55"
    ),
    accent: figma.importStyleByKeyAsync(
      "1b038ec600d2a14b6cce35f7b4090c6ad2dd2c7d"
    ),
    accentHover: figma.importStyleByKeyAsync(
      "e57defa9753fa55dc8712d9172e7e471c5600ac6"
    ),
    danger: figma.importStyleByKeyAsync(
      "00e4381cfb851f7f7c87084c5cfad11efb80cc23"
    ),
    success: figma.importStyleByKeyAsync(
      "8bea2a030cb741daf2691d23981bed0e8853f62b"
    ),
    onAccent: figma.importStyleByKeyAsync(
      "3fdbd43dd2463c64b94e0b81a916a606c08b0f1c"
    ),
    onDanger: figma.importStyleByKeyAsync(
      "7adcf2e59e31881a1ca5d1e9d6a8e305027ae1fe"
    ),
    onSuccess: figma.importStyleByKeyAsync(
      "88a0fbcc68d3ac9a7c88f5bc4ebdbd3e9d5aa644"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvZGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlci9jYWxsYmFjay50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVyL2NvbG9yLWNoZWNrLnRzIiwid2VicGFjazovLy8uL3NyYy9oZWxwZXIvZm9yY2UtYXV0by1sYXlvdXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlci9zcGFjaW5nLWNoZWNrLnRzIiwid2VicGFjazovLy8uL3NyYy9oZWxwZXIvc3BhY2luZy1zbGlkZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlci90aGVtZS1zd2FwLnRzIiwid2VicGFjazovLy8uL3NyYy90aGVtZS1zdHlsZXMvY29sb3JzLmpzIiwid2VicGFjazovLy8uL3NyYy90aGVtZS1zdHlsZXMvZWZmZWN0cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDZ0M7Ozs7Ozs7Ozs7Ozs7QUMzS2hDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixvQ0FBb0M7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isa0NBQWtDO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixpQ0FBaUM7QUFDckQ7QUFDQTtBQUN1RTs7Ozs7Ozs7Ozs7OztBQ3BMdkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFpQixTQUFJLElBQUksU0FBSTtBQUM3QjtBQUNBLG1DQUFtQyxNQUFNLDZCQUE2QixFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ2pHLGtDQUFrQyxNQUFNLGlDQUFpQyxFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ3BHLCtCQUErQixpRUFBaUUsdUJBQXVCLEVBQUUsNEJBQTRCO0FBQ3JKO0FBQ0EsS0FBSztBQUNMO0FBQ3NEO0FBQ0c7QUFDekQsK0NBQStDLFNBQUk7QUFDbkQsMkJBQTJCLGlFQUFZO0FBQ3ZDLDhCQUE4QixpRUFBWTtBQUMxQyw4QkFBOEIsaUVBQVk7QUFDMUMsMkNBQTJDLGlFQUFZO0FBQ3ZEO0FBQ0EsNkJBQTZCLGlFQUFZO0FBQ3pDLGtDQUFrQyxpRUFBWTtBQUM5Qyw2QkFBNkIsaUVBQVk7QUFDekMsOEJBQThCLGlFQUFZO0FBQzFDLCtCQUErQixpRUFBWTtBQUMzQywrQkFBK0IsaUVBQVk7QUFDM0MsZ0NBQWdDLGlFQUFZO0FBQzVDLG9DQUFvQyxpRUFBWTtBQUNoRCxzQ0FBc0MsaUVBQVk7QUFDbEQsd0NBQXdDLGlFQUFZO0FBQ3BELGdDQUFnQyxvRUFBYztBQUM5QyxpQ0FBaUMsb0VBQWM7QUFDL0MsZ0NBQWdDLG9FQUFjO0FBQzlDLGtDQUFrQyxvRUFBYztBQUNoRCxtQ0FBbUMsb0VBQWM7QUFDakQsaUNBQWlDLG9FQUFjO0FBQy9DLHNDQUFzQyxvRUFBYztBQUNwRCxzQ0FBc0Msb0VBQWM7QUFDcEQ7QUFDQTtBQUNBO0FBQ0EsWUFBWSxpRUFBWTtBQUN4QjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsWUFBWSxpRUFBWTtBQUN4QjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsWUFBWSxpRUFBWTtBQUN4QjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsWUFBWSxpRUFBWTtBQUN4QjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsWUFBWSxpRUFBWTtBQUN4QjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxpRUFBWTtBQUN4QjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsWUFBWSxpRUFBWTtBQUN4QjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsWUFBWSxpRUFBWTtBQUN4QjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsWUFBWSxpRUFBWTtBQUN4QjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsWUFBWSxpRUFBWTtBQUN4QjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsWUFBWSxpRUFBWTtBQUN4QjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsWUFBWSxpRUFBWTtBQUN4QjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsWUFBWSxpRUFBWTtBQUN4QjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsWUFBWSxpRUFBWTtBQUN4QjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsWUFBWSxpRUFBWTtBQUN4QjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsWUFBWSxpRUFBWTtBQUN4QjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsWUFBWSxpRUFBWTtBQUN4QjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsWUFBWSxpRUFBWTtBQUN4QjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsWUFBWSxpRUFBWTtBQUN4QjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxvRUFBYztBQUMxQjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsWUFBWSxvRUFBYztBQUMxQjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsWUFBWSxvRUFBYztBQUMxQjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsWUFBWSxvRUFBYztBQUMxQjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsWUFBWSxvRUFBYztBQUMxQjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsWUFBWSxvRUFBYztBQUMxQjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsWUFBWSxvRUFBYztBQUMxQjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsWUFBWSxvRUFBYztBQUMxQjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELDhDQUE4QyxTQUFJO0FBQ2xELDRCQUE0QixpRUFBWTtBQUN4QywrQkFBK0IsaUVBQVk7QUFDM0MsK0JBQStCLGlFQUFZO0FBQzNDLDRDQUE0QyxpRUFBWTtBQUN4RDtBQUNBLDhCQUE4QixpRUFBWTtBQUMxQyxtQ0FBbUMsaUVBQVk7QUFDL0MsOEJBQThCLGlFQUFZO0FBQzFDLCtCQUErQixpRUFBWTtBQUMzQyxnQ0FBZ0MsaUVBQVk7QUFDNUMsZ0NBQWdDLGlFQUFZO0FBQzVDLGlDQUFpQyxpRUFBWTtBQUM3QyxxQ0FBcUMsaUVBQVk7QUFDakQsdUNBQXVDLGlFQUFZO0FBQ25ELHlDQUF5QyxpRUFBWTtBQUNyRCxpQ0FBaUMsb0VBQWM7QUFDL0Msa0NBQWtDLG9FQUFjO0FBQ2hELGlDQUFpQyxvRUFBYztBQUMvQyxtQ0FBbUMsb0VBQWM7QUFDakQsb0NBQW9DLG9FQUFjO0FBQ2xELGtDQUFrQyxvRUFBYztBQUNoRCx1Q0FBdUMsb0VBQWM7QUFDckQsdUNBQXVDLG9FQUFjO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBLFlBQVksaUVBQVk7QUFDeEI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFlBQVksaUVBQVk7QUFDeEI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFlBQVksaUVBQVk7QUFDeEI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFlBQVksaUVBQVk7QUFDeEI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFlBQVksaUVBQVk7QUFDeEI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksaUVBQVk7QUFDeEI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFlBQVksaUVBQVk7QUFDeEI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFlBQVksaUVBQVk7QUFDeEI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFlBQVksaUVBQVk7QUFDeEI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFlBQVksaUVBQVk7QUFDeEI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFlBQVksaUVBQVk7QUFDeEI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFlBQVksaUVBQVk7QUFDeEI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFlBQVksaUVBQVk7QUFDeEI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFlBQVksaUVBQVk7QUFDeEI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFlBQVksaUVBQVk7QUFDeEI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFlBQVksaUVBQVk7QUFDeEI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFlBQVksaUVBQVk7QUFDeEI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFlBQVksaUVBQVk7QUFDeEI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFlBQVksaUVBQVk7QUFDeEI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksb0VBQWM7QUFDMUI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFlBQVksb0VBQWM7QUFDMUI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFlBQVksb0VBQWM7QUFDMUI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFlBQVksb0VBQWM7QUFDMUI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFlBQVksb0VBQWM7QUFDMUI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFlBQVksb0VBQWM7QUFDMUI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFlBQVksb0VBQWM7QUFDMUI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFlBQVksb0VBQWM7QUFDMUI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDZ0Q7Ozs7Ozs7Ozs7Ozs7QUM5V2pEO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUV3Qjs7Ozs7Ozs7Ozs7OztBQ2pHeEI7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRTBCIiwiZmlsZSI6ImNvZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9jb2RlLnRzXCIpO1xuIiwiLy8gVGhpcyBwbHVnaW4gd2lsbCBvcGVuIGEgbW9kYWwgdG8gcHJvbXB0IHRoZSB1c2VyIHRvIGVudGVyIGEgbnVtYmVyLCBhbmRcbi8vIGl0IHdpbGwgdGhlbiBjcmVhdGUgdGhhdCBtYW55IHJlY3RhbmdsZXMgb24gdGhlIHNjcmVlbi5cbi8vIFRoaXMgZmlsZSBob2xkcyB0aGUgbWFpbiBjb2RlIGZvciB0aGUgcGx1Z2lucy4gSXQgaGFzIGFjY2VzcyB0byB0aGUgKmRvY3VtZW50Ki5cbi8vIFlvdSBjYW4gYWNjZXNzIGJyb3dzZXIgQVBJcyBpbiB0aGUgPHNjcmlwdD4gdGFnIGluc2lkZSBcInVpLmh0bWxcIiB3aGljaCBoYXMgYVxuLy8gZnVsbCBicm93c2VyIGVudmlyb21lbnQgKHNlZSBkb2N1bWVudGF0aW9uKS5cbi8vIGltcG9ydCB7IFNwYWNpbmdEZWZhdWx0IH0gZnJvbSBcIi4vaGVscGVyL3NwYWNpbmctZGVmYXVsdFwiO1xuaW1wb3J0IHsgTGlnaHRUaGVtZVRyYXZlcnNlLCBEYXJrVGhlbWVUcmF2ZXJzZSB9IGZyb20gXCIuL2hlbHBlci90aGVtZS1zd2FwXCI7XG5pbXBvcnQgeyBTcGFjaW5nQ2hlY2tUcmF2ZXJzZSB9IGZyb20gXCIuL2hlbHBlci9zcGFjaW5nLWNoZWNrXCI7XG5pbXBvcnQgeyBDb2xvckNoZWNrVHJhdmVyc2UgfSBmcm9tIFwiLi9oZWxwZXIvY29sb3ItY2hlY2tcIjtcbmltcG9ydCB7IEZvcmNlQXV0b0xheW91dEhvcml6b250YWwsIEZvcmNlQXV0b0xheW91dFZlcnRpY2FsLCB9IGZyb20gXCIuL2hlbHBlci9mb3JjZS1hdXRvLWxheW91dFwiO1xuaW1wb3J0IHsgUGFkZGluZ0hvcml6b250YWxTbGlkZXIsIFBhZGRpbmdWZXJ0aWNhbFNsaWRlciwgSXRlbVNwYWNpbmcsIH0gZnJvbSBcIi4vaGVscGVyL3NwYWNpbmctc2xpZGVyXCI7XG5pbXBvcnQgeyBvblNlbGVjdGlvbkNoYW5nZSB9IGZyb20gXCIuL2hlbHBlci9jYWxsYmFja1wiO1xuLy8gVGhpcyBzaG93cyB0aGUgSFRNTCBwYWdlIGluIFwidWkuaHRtbFwiLlxuZmlnbWEuc2hvd1VJKF9faHRtbF9fKTtcbi8vIENhbGxzIHRvIFwicGFyZW50LnBvc3RNZXNzYWdlXCIgZnJvbSB3aXRoaW4gdGhlIEhUTUwgcGFnZSB3aWxsIHRyaWdnZXIgdGhpc1xuLy8gY2FsbGJhY2suIFRoZSBjYWxsYmFjayB3aWxsIGJlIHBhc3NlZCB0aGUgXCJwbHVnaW5NZXNzYWdlXCIgcHJvcGVydHkgb2YgdGhlXG4vLyBwb3N0ZWQgbWVzc2FnZS5cbmZpZ21hLnVpLnJlc2l6ZSgyNTAsIDYwMCk7XG5maWdtYS5vbihcInNlbGVjdGlvbmNoYW5nZVwiLCAoKSA9PiB7XG4gICAgbGV0IHRoaXNTZWxlY3Rpb24gPSBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb25bMF07XG4gICAgb25TZWxlY3Rpb25DaGFuZ2UodGhpc1NlbGVjdGlvbik7XG59KTtcbmZpZ21hLnVpLm9ubWVzc2FnZSA9IChtc2cpID0+IHtcbiAgICBpZiAobXNnLnR5cGUgPT09IFwiZGFyay10aGVtZVwiKSB7XG4gICAgICAgIERhcmtUaGVtZVRyYXZlcnNlKGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvblswXSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKG1zZy50eXBlID09PSBcImxpZ2h0LXRoZW1lXCIpIHtcbiAgICAgICAgTGlnaHRUaGVtZVRyYXZlcnNlKGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvblswXSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKG1zZy50eXBlID09PSBcImNvbG9yLWNoZWNrZXJcIikge1xuICAgICAgICBDb2xvckNoZWNrVHJhdmVyc2UoZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uWzBdKTtcbiAgICB9XG4gICAgZWxzZSBpZiAobXNnLnR5cGUgPT09IFwic3BhY2luZy1jaGVja2VyXCIpIHtcbiAgICAgICAgU3BhY2luZ0NoZWNrVHJhdmVyc2UoZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uKTtcbiAgICB9XG4gICAgZWxzZSBpZiAobXNnLnR5cGUgPT09IFwicGFkZGluZy1ob3Jpem9udGFsLXNsaWRlclwiKSB7XG4gICAgICAgIFBhZGRpbmdIb3Jpem9udGFsU2xpZGVyKGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbiwgbXNnKTtcbiAgICB9XG4gICAgZWxzZSBpZiAobXNnLnR5cGUgPT09IFwicGFkZGluZy12ZXJ0aWNhbC1zbGlkZXJcIikge1xuICAgICAgICBQYWRkaW5nVmVydGljYWxTbGlkZXIoZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uLCBtc2cpO1xuICAgIH1cbiAgICBlbHNlIGlmIChtc2cudHlwZSA9PT0gXCJpdGVtLXNwYWNpbmctc2xpZGVyXCIpIHtcbiAgICAgICAgSXRlbVNwYWNpbmcoZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uLCBtc2cpO1xuICAgIH1cbiAgICBlbHNlIGlmIChtc2cudHlwZSA9PT0gXCJmb3JjZS1hdXRvLWxheW91dC1ob3Jpem9udGFsXCIpIHtcbiAgICAgICAgRm9yY2VBdXRvTGF5b3V0SG9yaXpvbnRhbChmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb24pO1xuICAgIH1cbiAgICBlbHNlIGlmIChtc2cudHlwZSA9PT0gXCJmb3JjZS1hdXRvLWxheW91dC12ZXJ0aWNhbFwiKSB7XG4gICAgICAgIEZvcmNlQXV0b0xheW91dFZlcnRpY2FsKGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbik7XG4gICAgfVxuICAgIC8vIE1ha2Ugc3VyZSB0byBjbG9zZSB0aGUgcGx1Z2luIHdoZW4geW91J3JlIGRvbmUuIE90aGVyd2lzZSB0aGUgcGx1Z2luIHdpbGxcbiAgICAvLyBrZWVwIHJ1bm5pbmcsIHdoaWNoIHNob3dzIHRoZSBjYW5jZWwgYnV0dG9uIGF0IHRoZSBib3R0b20gb2YgdGhlIHNjcmVlbi5cbiAgICAvLyBmaWdtYS5jbG9zZVBsdWdpbigpO1xufTtcbiIsImNvbnN0IG9uU2VsZWN0aW9uQ2hhbmdlID0gKG5vZGUpID0+IHtcbiAgICBpZiAobm9kZSkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInllc1wiKTtcbiAgICAgICAgbGV0IGhvcml6b250YWxQYWRkaW5nID0gbm9kZS5ob3Jpem9udGFsUGFkZGluZztcbiAgICAgICAgbGV0IHZlcnRpY2FsUGFkZGluZyA9IG5vZGUudmVydGljYWxQYWRkaW5nO1xuICAgICAgICBsZXQgaXRlbVNwYWNpbmcgPSBub2RlLml0ZW1TcGFjaW5nO1xuICAgICAgICBsZXQgbGF5b3V0TW9kZSA9IG5vZGUubGF5b3V0TW9kZTtcbiAgICAgICAgbGV0IG9iaiA9IHtcbiAgICAgICAgICAgIGhvcml6b250YWxQYWRkaW5nOiBob3Jpem9udGFsUGFkZGluZyxcbiAgICAgICAgICAgIHZlcnRpY2FsUGFkZGluZzogdmVydGljYWxQYWRkaW5nLFxuICAgICAgICAgICAgaXRlbVNwYWNpbmc6IGl0ZW1TcGFjaW5nLFxuICAgICAgICAgICAgbGF5b3V0TW9kZTogbGF5b3V0TW9kZSxcbiAgICAgICAgfTtcbiAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2Uob2JqKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwibm9cIik7XG4gICAgICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKFwibm90aGluZyBzZWxlY3RlZFwiKTtcbiAgICB9XG59O1xuZXhwb3J0IHsgb25TZWxlY3Rpb25DaGFuZ2UgfTtcbiIsImZ1bmN0aW9uIGNsb25lKHZhbCkge1xuICAgIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHZhbCkpO1xufVxuLy8gQ2hlY2sgb2JqZWN0IGVxdWFsaXR5IGhlbHBlclxuZnVuY3Rpb24gaXNFcXVpdmFsZW50KGEsIGIpIHtcbiAgICAvLyBDcmVhdGUgYXJyYXlzIG9mIHByb3BlcnR5IG5hbWVzXG4gICAgdmFyIGFQcm9wcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGEpO1xuICAgIHZhciBiUHJvcHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhiKTtcbiAgICAvLyBJZiBudW1iZXIgb2YgcHJvcGVydGllcyBpcyBkaWZmZXJlbnQsXG4gICAgLy8gb2JqZWN0cyBhcmUgbm90IGVxdWl2YWxlbnRcbiAgICBpZiAoYVByb3BzLmxlbmd0aCAhPSBiUHJvcHMubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhUHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIHByb3BOYW1lID0gYVByb3BzW2ldO1xuICAgICAgICAvLyBJZiB2YWx1ZXMgb2Ygc2FtZSBwcm9wZXJ0eSBhcmUgbm90IGVxdWFsLFxuICAgICAgICAvLyBvYmplY3RzIGFyZSBub3QgZXF1aXZhbGVudFxuICAgICAgICBpZiAoYVtwcm9wTmFtZV0gIT09IGJbcHJvcE5hbWVdKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gSWYgd2UgbWFkZSBpdCB0aGlzIGZhciwgb2JqZWN0c1xuICAgIC8vIGFyZSBjb25zaWRlcmVkIGVxdWl2YWxlbnRcbiAgICByZXR1cm4gdHJ1ZTtcbn1cbmNvbnN0IENvbG9yQ2hlY2tUcmF2ZXJzZSA9IChub2RlKSA9PiB7XG4gICAgbGV0IHN0cmF5RmlsbCA9IDA7XG4gICAgbGV0IHN0cmF5U3Ryb2tlID0gMDtcbiAgICBpZiAoXCJmaWxsc1wiICYmIFwic3Ryb2tlc1wiIGluIG5vZGUpIHtcbiAgICAgICAgLy8gRmlsdGVyIHdhcm5pbmcgc3Ryb2tlIGZ1bmN0aW9uXG4gICAgICAgIGxldCBmaWx0ZXJXYXJuaW5nU3Ryb2tlID0gZnVuY3Rpb24gKHN0cm9rZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJjbGVhciBvdXRcIik7XG4gICAgICAgICAgICBpZiAoc3Ryb2tlLnR5cGUgPT0gXCJTT0xJRFwiICYmXG4gICAgICAgICAgICAgICAgaXNFcXVpdmFsZW50KHN0cm9rZS5jb2xvciwgeyByOiAxLCBnOiAwLCBiOiAwIH0pKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ5ZXNcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJub1wiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgbGV0IG9sZFN0cm9rZXMgPSBjbG9uZShub2RlLnN0cm9rZXMpO1xuICAgICAgICBsZXQgbmV3U3Ryb2tlcyA9IG9sZFN0cm9rZXMuZmlsdGVyKGZpbHRlcldhcm5pbmdTdHJva2UpO1xuICAgICAgICBpZiAobm9kZS5zdHJva2VTdHlsZUlkLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIC8vIGRvIG5vdGhpbmdcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG5vZGUuc3Ryb2tlcyA9IG5ld1N0cm9rZXM7XG4gICAgICAgIH1cbiAgICAgICAgLy8gLy8gQWRkIHdhcm5pbmcgc3Ryb2tlIGZ1bmN0aW9uXG4gICAgICAgIGxldCBhZGRXYXJuaW5nU3Ryb2tlID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgIGxldCBzdHJva2VzID0gY2xvbmUobm9kZS5zdHJva2VzKTtcbiAgICAgICAgICAgIGxldCB3YXJuaW5nU3Ryb2tlUHJvcGVydHkgPSB7XG4gICAgICAgICAgICAgICAgY29sb3I6IHsgcjogMSwgZzogMCwgYjogMCB9LFxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgICAgICAgdHlwZTogXCJTT0xJRFwiLFxuICAgICAgICAgICAgICAgIGJsZW5kTW9kZTogXCJOT1JNQUxcIixcbiAgICAgICAgICAgICAgICB2aXNpYmxlOiB0cnVlLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHN0cm9rZXMucHVzaCh3YXJuaW5nU3Ryb2tlUHJvcGVydHkpO1xuICAgICAgICAgICAgbm9kZS5zdHJva2VzID0gc3Ryb2tlcztcbiAgICAgICAgICAgIC8vIG5vZGUuc3Ryb2tlQWxpZ24gPSBcIk9VVFNJREVcIjtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gQ2hlY2sgRmlsbFxuICAgICAgICBjb25zdCBoYXNJbWFnZSA9IChmaWxsKSA9PiBmaWxsLnR5cGUgPT09IFwiSU1BR0VcIjtcbiAgICAgICAgaWYgKG5vZGUuZmlsbHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgLy8gaWYgKG5vZGUuZmlsbHMuc29tZShoYXNJbWFnZSkpIHtcbiAgICAgICAgICAgIC8vICAgY29uc29sZS5sb2coXCJmaWxsIGlzIGltYWdlXCIpO1xuICAgICAgICAgICAgLy8gfSBlbHNlIHtcbiAgICAgICAgICAgIC8vICAgY29uc29sZS5sb2coXCJmaWxsIGlzIE5PVCBpbWFnZVwiKTtcbiAgICAgICAgICAgIC8vICAgLy8gbm90aGluZ1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgaWYgKG5vZGUuZmlsbFN0eWxlSWQubGVuZ3RoID4gMCB8fCBub2RlLmZpbGxzLnNvbWUoaGFzSW1hZ2UpKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLinIUgR29vZCBmaWxsXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLinYwgQmFkIGZpbGxcIik7XG4gICAgICAgICAgICAgICAgLy8gQWRkIHdhcm5pbmcgc3Ryb2tlXG4gICAgICAgICAgICAgICAgYWRkV2FybmluZ1N0cm9rZShub2RlKTtcbiAgICAgICAgICAgICAgICBzdHJheUZpbGwrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibm8gZmlsbFwiKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBDaGVjayBTdHJva2VcbiAgICAgICAgaWYgKG5vZGUuc3Ryb2tlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBpZiAobm9kZS5zdHJva2VTdHlsZUlkLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuKchSBHb29kIHN0cm9rZVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi4p2MIEJhZCBzdHJva2VcIik7XG4gICAgICAgICAgICAgICAgLy8gLy8gQWRkIHdhcm5pbmcgc3Ryb2tlXG4gICAgICAgICAgICAgICAgYWRkV2FybmluZ1N0cm9rZShub2RlKTtcbiAgICAgICAgICAgICAgICBzdHJheVN0cm9rZSsrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJubyBzdHJva2VcIik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiTm8gZmlsbCAmIHN0cm9rZSBwcm9wZXJ0eVwiKTtcbiAgICB9XG4gICAgaWYgKFwiY2hpbGRyZW5cIiBpbiBub2RlKSB7XG4gICAgICAgIGZvciAoY29uc3QgY2hpbGQgb2Ygbm9kZS5jaGlsZHJlbikge1xuICAgICAgICAgICAgQ29sb3JDaGVja1RyYXZlcnNlKGNoaWxkKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgLy8gZG8gbm90aGluZ1xuICAgIH1cbiAgICBpZiAoc3RyYXlGaWxsID4gMCB8fCBzdHJheVN0cm9rZSA+IDApIHtcbiAgICAgICAgbGV0IGVycm9yU3RyaW5nID0gXCJZb3UgaGF2ZSBcIiArXG4gICAgICAgICAgICBzdHJheUZpbGwgK1xuICAgICAgICAgICAgXCIgZmlsbHMgYW5kIFwiICtcbiAgICAgICAgICAgIHN0cmF5U3Ryb2tlICtcbiAgICAgICAgICAgIFwiIHN0cm9rZXMgbm90IHVzaW5nIGNvbG91cnMgZnJvbSBvdXIgbGlicmFyeSFcIjtcbiAgICAgICAgZmlnbWEubm90aWZ5KGVycm9yU3RyaW5nLCB7IHRpbWVvdXQ6IDAuNSB9KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGZpZ21hLm5vdGlmeShcIvCfkY8gQWxsIGlzIGdvb2QgaW4gdGhlIGhvb2QhXCIsIHsgdGltZW91dDogMC41IH0pO1xuICAgIH1cbn07XG5leHBvcnQgeyBDb2xvckNoZWNrVHJhdmVyc2UgfTtcbiIsImNvbnN0IEZvcmNlQXV0b0xheW91dEhvcml6b250YWwgPSAobm9kZXMpID0+IHtcbiAgICBmb3IgKGNvbnN0IG5vZGUgb2Ygbm9kZXMpIHtcbiAgICAgICAgbm9kZS5sYXlvdXRNb2RlID0gXCJIT1JJWk9OVEFMXCI7XG4gICAgfVxufTtcbmNvbnN0IEZvcmNlQXV0b0xheW91dFZlcnRpY2FsID0gKG5vZGVzKSA9PiB7XG4gICAgZm9yIChjb25zdCBub2RlIG9mIG5vZGVzKSB7XG4gICAgICAgIG5vZGUubGF5b3V0TW9kZSA9IFwiVkVSVElDQUxcIjtcbiAgICB9XG59O1xuZXhwb3J0IHsgRm9yY2VBdXRvTGF5b3V0SG9yaXpvbnRhbCwgRm9yY2VBdXRvTGF5b3V0VmVydGljYWwgfTtcbiIsImNvbnN0IFNwYWNpbmdDaGVja1RyYXZlcnNlID0gKG5vZGVzKSA9PiB7XG4gICAgZm9yIChjb25zdCBub2RlIG9mIG5vZGVzKSB7XG4gICAgICAgIGxldCBuYW1lID0gbm9kZS5uYW1lO1xuICAgICAgICBsZXQgcGFkZGluZ0FsbFJlZ2V4ID0gL1xcYig/OnBhLXh4c3xwYS14c3xwYS1zfHBhLW18cGEtbHxwYS14bHxwYS14eGx8cGEtbm9uZSlcXGIvZztcbiAgICAgICAgbGV0IHBhZGRpbmdIb3Jpem9udGFsUmVnZXggPSAvXFxiKD86cGgteHhzfHBoLXhzfHBoLXN8cGgtbXxwaC1sfHBoLXhsfHBoLXh4bHxwaC1ub25lKVxcYi9nO1xuICAgICAgICBsZXQgcGFkZGluZ1ZlcnRpY2FsUmVnZXggPSAvXFxiKD86cHYteHhzfHB2LXhzfHB2LXN8cHYtbXxwdi1sfHB2LXhsfHB2LXh4bHxwdi1ub25lKVxcYi9nO1xuICAgICAgICBsZXQgaXRlbVNwYWNpbmdBbGxSZWdleCA9IC9cXGIoPzpzcC14eHN8c3AteHN8c3Atc3xzcC1tfHNwLWx8c3AteGx8c3AteHhsfHNwLW5vbmUpXFxiL2c7XG4gICAgICAgIGxldCBhdXRvbGF5b3V0UmVnZXggPSAvXFxiKD86dmVydGljYWx8aG9yaXpvbnRhbClcXGIvZztcbiAgICAgICAgbGV0IG1hdGNoUGFkZGluZ0FsbCA9IG5hbWUubWF0Y2gocGFkZGluZ0FsbFJlZ2V4KTtcbiAgICAgICAgbGV0IG1hdGNoUGFkZGluZ0hvcml6b250YWwgPSBuYW1lLm1hdGNoKHBhZGRpbmdIb3Jpem9udGFsUmVnZXgpO1xuICAgICAgICBsZXQgbWF0Y2hQYWRkaW5nVmVydGljYWwgPSBuYW1lLm1hdGNoKHBhZGRpbmdWZXJ0aWNhbFJlZ2V4KTtcbiAgICAgICAgbGV0IG1hdGNoSXRlbVNwYWNpbmcgPSBuYW1lLm1hdGNoKGl0ZW1TcGFjaW5nQWxsUmVnZXgpO1xuICAgICAgICBsZXQgbWF0Y2hBdXRvTGF5b3V0RGlyZWN0aW9uID0gbmFtZS5tYXRjaChhdXRvbGF5b3V0UmVnZXgpO1xuICAgICAgICBpZiAobWF0Y2hBdXRvTGF5b3V0RGlyZWN0aW9uID09IG51bGwpIHtcbiAgICAgICAgICAgIG5vZGUubGF5b3V0TW9kZSA9IFwiVkVSVElDQUxcIjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZW5hYmxlIGF1dG8gbGF5b3V0XCIpO1xuICAgICAgICAgICAgc3dpdGNoIChtYXRjaEF1dG9MYXlvdXREaXJlY3Rpb25bMF0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIFwidmVydGljYWxcIjpcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5sYXlvdXRNb2RlID0gXCJWRVJUSUNBTFwiO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwiaG9yaXpvbnRhbFwiOlxuICAgICAgICAgICAgICAgICAgICBub2RlLmxheW91dE1vZGUgPSBcIkhPUklaT05UQUxcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAobWF0Y2hJdGVtU3BhY2luZyA9PSBudWxsKSB7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImhhcyBzcGFjaW5nXCIpO1xuICAgICAgICAgICAgc3dpdGNoIChtYXRjaEl0ZW1TcGFjaW5nWzBdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcInNwLW5vbmVcIjpcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5pdGVtU3BhY2luZyA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJzcC14eHNcIjpcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5pdGVtU3BhY2luZyA9IDQ7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJzcC14c1wiOlxuICAgICAgICAgICAgICAgICAgICBub2RlLml0ZW1TcGFjaW5nID0gODtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInNwLXNcIjpcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5pdGVtU3BhY2luZyA9IDE2O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwic3AtbVwiOlxuICAgICAgICAgICAgICAgICAgICBub2RlLml0ZW1TcGFjaW5nID0gMjQ7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJzcC1sXCI6XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuaXRlbVNwYWNpbmcgPSAzMjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInNwLXhsXCI6XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuaXRlbVNwYWNpbmcgPSA0MDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInNwLXh4bFwiOlxuICAgICAgICAgICAgICAgICAgICBub2RlLml0ZW1TcGFjaW5nID0gNDg7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChtYXRjaFBhZGRpbmdBbGwgPT0gbnVsbCkge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJub1wiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaGFzIHBhZGRpbmcgYWxsXCIpO1xuICAgICAgICAgICAgc3dpdGNoIChtYXRjaFBhZGRpbmdBbGxbMF0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIFwicGEtbm9uZVwiOlxuICAgICAgICAgICAgICAgICAgICBub2RlLmhvcml6b250YWxQYWRkaW5nID0gMDtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS52ZXJ0aWNhbFBhZGRpbmcgPSAwO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwicGEteHhzXCI6XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuaG9yaXpvbnRhbFBhZGRpbmcgPSA0O1xuICAgICAgICAgICAgICAgICAgICBub2RlLnZlcnRpY2FsUGFkZGluZyA9IDQ7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJwYS14c1wiOlxuICAgICAgICAgICAgICAgICAgICBub2RlLmhvcml6b250YWxQYWRkaW5nID0gODtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS52ZXJ0aWNhbFBhZGRpbmcgPSA4O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwicGEtc1wiOlxuICAgICAgICAgICAgICAgICAgICBub2RlLmhvcml6b250YWxQYWRkaW5nID0gMTY7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUudmVydGljYWxQYWRkaW5nID0gMTY7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJwYS1tXCI6XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuaG9yaXpvbnRhbFBhZGRpbmcgPSAyNDtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS52ZXJ0aWNhbFBhZGRpbmcgPSAyNDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInBhLWxcIjpcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5ob3Jpem9udGFsUGFkZGluZyA9IDMyO1xuICAgICAgICAgICAgICAgICAgICBub2RlLnZlcnRpY2FsUGFkZGluZyA9IDMyO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwicGEteGxcIjpcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5ob3Jpem9udGFsUGFkZGluZyA9IDQwO1xuICAgICAgICAgICAgICAgICAgICBub2RlLnZlcnRpY2FsUGFkZGluZyA9IDQwO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwicGEteHhsXCI6XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuaG9yaXpvbnRhbFBhZGRpbmcgPSA0ODtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS52ZXJ0aWNhbFBhZGRpbmcgPSA0ODtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1hdGNoUGFkZGluZ0hvcml6b250YWwgPT0gbnVsbCkge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJub1wiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaGFzIHBhZGRpbmcgaG9yaXpvbnRhbFwiKTtcbiAgICAgICAgICAgIHN3aXRjaCAobWF0Y2hQYWRkaW5nSG9yaXpvbnRhbFswXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJwaC1ub25lXCI6XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuaG9yaXpvbnRhbFBhZGRpbmcgPSAwO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwicGgteHhzXCI6XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuaG9yaXpvbnRhbFBhZGRpbmcgPSA0O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwicGgteHNcIjpcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5ob3Jpem9udGFsUGFkZGluZyA9IDg7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJwaC1zXCI6XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuaG9yaXpvbnRhbFBhZGRpbmcgPSAxNjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInBoLW1cIjpcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5ob3Jpem9udGFsUGFkZGluZyA9IDI0O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwicGgtbFwiOlxuICAgICAgICAgICAgICAgICAgICBub2RlLmhvcml6b250YWxQYWRkaW5nID0gMzI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJwaC14bFwiOlxuICAgICAgICAgICAgICAgICAgICBub2RlLmhvcml6b250YWxQYWRkaW5nID0gNDA7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJwaC14eGxcIjpcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5ob3Jpem9udGFsUGFkZGluZyA9IDQ4O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAobWF0Y2hQYWRkaW5nVmVydGljYWwgPT0gbnVsbCkge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJub1wiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaGFzIHBhZGRpbmcgaG9yaXpvbnRhbFwiKTtcbiAgICAgICAgICAgIHN3aXRjaCAobWF0Y2hQYWRkaW5nVmVydGljYWxbMF0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIFwicHYtbm9uZVwiOlxuICAgICAgICAgICAgICAgICAgICBub2RlLnZlcnRpY2FsUGFkZGluZyA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJwdi14eHNcIjpcbiAgICAgICAgICAgICAgICAgICAgbm9kZS52ZXJ0aWNhbFBhZGRpbmcgPSA0O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwicHYteHNcIjpcbiAgICAgICAgICAgICAgICAgICAgbm9kZS52ZXJ0aWNhbFBhZGRpbmcgPSA4O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwicHYtc1wiOlxuICAgICAgICAgICAgICAgICAgICBub2RlLnZlcnRpY2FsUGFkZGluZyA9IDE2O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwicHYtbVwiOlxuICAgICAgICAgICAgICAgICAgICBub2RlLnZlcnRpY2FsUGFkZGluZyA9IDI0O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwicHYtbFwiOlxuICAgICAgICAgICAgICAgICAgICBub2RlLnZlcnRpY2FsUGFkZGluZyA9IDMyO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwicHYteGxcIjpcbiAgICAgICAgICAgICAgICAgICAgbm9kZS52ZXJ0aWNhbFBhZGRpbmcgPSA0MDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInB2LXh4bFwiOlxuICAgICAgICAgICAgICAgICAgICBub2RlLnZlcnRpY2FsUGFkZGluZyA9IDQ4O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBTcGFjaW5nQ2hlY2tUcmF2ZXJzZShub2RlKTtcbiAgICB9XG4gICAgLy8gaWYgKFwiY2hpbGRyZW5cIiBpbiBub2Rlcykge1xuICAgIC8vICAgZm9yIChjb25zdCBjaGlsZCBvZiBub2RlLmNoaWxkcmVuKSB7XG4gICAgLy8gICAgIFNwYWNpbmdDaGVja1RyYXZlcnNlKGNoaWxkKTtcbiAgICAvLyAgIH1cbiAgICAvLyB9IGVsc2Uge1xuICAgIC8vICAgLy8gZG8gbm90aGluZ1xuICAgIC8vIH1cbn07XG5leHBvcnQgeyBTcGFjaW5nQ2hlY2tUcmF2ZXJzZSB9O1xuIiwiZnVuY3Rpb24gY2xvbmUodmFsKSB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodmFsKSk7XG59XG5sZXQgcGhOYW1lID0gbnVsbDtcbmxldCBwdk5hbWUgPSBudWxsO1xubGV0IHNwTmFtZSA9IG51bGw7XG5sZXQgbmFtZVByb3AgPSB7XG4gICAgaG9yaXpvbnRhbDogXCJwaC1ub25lXCIsXG4gICAgdmVydGljYWw6IFwicHYtbm9uZVwiLFxuICAgIHNwYWNpbmc6IFwic3Atbm9uZVwiLFxufTtcbmZ1bmN0aW9uIHVwZGF0ZU5hbWUodmFsLCBub2RlKSB7XG4gICAgaWYgKHZhbC50eXBlID09PSBcImhvcml6b250YWxcIikge1xuICAgICAgICBuYW1lUHJvcC5ob3Jpem9udGFsID0gdmFsLnZhbHVlO1xuICAgIH1cbiAgICBlbHNlIGlmICh2YWwudHlwZSA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICAgIG5hbWVQcm9wLnZlcnRpY2FsID0gdmFsLnZhbHVlO1xuICAgIH1cbiAgICBlbHNlIGlmICh2YWwudHlwZSA9PT0gXCJzcGFjaW5nXCIpIHtcbiAgICAgICAgbmFtZVByb3Auc3BhY2luZyA9IHZhbC52YWx1ZTtcbiAgICB9XG4gICAgbm9kZS5uYW1lID1cbiAgICAgICAgbmFtZVByb3AuaG9yaXpvbnRhbCArIFwiIFwiICsgbmFtZVByb3AudmVydGljYWwgKyBcIiBcIiArIG5hbWVQcm9wLnNwYWNpbmc7XG59XG5jb25zdCBQYWRkaW5nSG9yaXpvbnRhbFNsaWRlciA9IChub2RlcywgbXNnKSA9PiB7XG4gICAgbGV0IHNsaWRlclZhbHVlID0gbXNnLnNsaWRlclZhbHVlO1xuICAgIGxldCBzcGFjaW5nID0gbnVsbDtcbiAgICBsZXQgc3BhY2luZ05hbWUgPSBudWxsO1xuICAgIHN3aXRjaCAoc2xpZGVyVmFsdWUpIHtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHNwYWNpbmcgPSAwO1xuICAgICAgICAgICAgc3BhY2luZ05hbWUgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiMVwiOlxuICAgICAgICAgICAgc3BhY2luZyA9IDQ7XG4gICAgICAgICAgICBzcGFjaW5nTmFtZSA9IFwieHhzXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIjJcIjpcbiAgICAgICAgICAgIHNwYWNpbmcgPSA4O1xuICAgICAgICAgICAgc3BhY2luZ05hbWUgPSBcInhzXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIjNcIjpcbiAgICAgICAgICAgIHNwYWNpbmcgPSAxNjtcbiAgICAgICAgICAgIHNwYWNpbmdOYW1lID0gXCJzXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIjRcIjpcbiAgICAgICAgICAgIHNwYWNpbmcgPSAyNDtcbiAgICAgICAgICAgIHNwYWNpbmdOYW1lID0gXCJtXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIjVcIjpcbiAgICAgICAgICAgIHNwYWNpbmcgPSAzMjtcbiAgICAgICAgICAgIHNwYWNpbmdOYW1lID0gXCJsXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIjZcIjpcbiAgICAgICAgICAgIHNwYWNpbmcgPSA0MDtcbiAgICAgICAgICAgIHNwYWNpbmdOYW1lID0gXCJ4bFwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCI3XCI6XG4gICAgICAgICAgICBzcGFjaW5nID0gNDg7XG4gICAgICAgICAgICBzcGFjaW5nTmFtZSA9IFwieHhsXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG4gICAgZm9yIChjb25zdCBub2RlIG9mIG5vZGVzKSB7XG4gICAgICAgIGlmIChub2RlKSB7XG4gICAgICAgICAgICBwaE5hbWUgPSBcInBoLVwiICsgc3BhY2luZ05hbWU7XG4gICAgICAgICAgICB1cGRhdGVOYW1lKHsgdHlwZTogXCJob3Jpem9udGFsXCIsIHZhbHVlOiBwaE5hbWUgfSwgbm9kZSk7XG4gICAgICAgICAgICBpZiAobm9kZS50eXBlID09PSBcIkdST1VQXCIpIHtcbiAgICAgICAgICAgICAgICBub2RlLmhvcml6b250YWxQYWRkaW5nID0gc3BhY2luZztcbiAgICAgICAgICAgICAgICBub2RlLmxheW91dE1vZGUgPSBcIk5PTkVcIjtcbiAgICAgICAgICAgICAgICBpZiAoXCJjaGlsZHJlblwiIGluIG5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGdyb3VwID0gbm9kZS5jaGlsZHJlblswXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBsZXQgc2V0QXV0b0xheW91dCA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5ob3Jpem9udGFsUGFkZGluZyA9IHNwYWNpbmc7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gcmVzb2x2ZShcImRvbmVcIiksIDUpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufTtcbmNvbnN0IFBhZGRpbmdWZXJ0aWNhbFNsaWRlciA9IChub2RlcywgbXNnKSA9PiB7XG4gICAgbGV0IHNsaWRlclZhbHVlID0gbXNnLnNsaWRlclZhbHVlO1xuICAgIGxldCBzcGFjaW5nID0gbnVsbDtcbiAgICBsZXQgc3BhY2luZ05hbWUgPSBudWxsO1xuICAgIHN3aXRjaCAoc2xpZGVyVmFsdWUpIHtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHNwYWNpbmcgPSAwO1xuICAgICAgICAgICAgc3BhY2luZ05hbWUgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiMVwiOlxuICAgICAgICAgICAgc3BhY2luZyA9IDQ7XG4gICAgICAgICAgICBzcGFjaW5nTmFtZSA9IFwieHhzXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIjJcIjpcbiAgICAgICAgICAgIHNwYWNpbmcgPSA4O1xuICAgICAgICAgICAgc3BhY2luZ05hbWUgPSBcInhzXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIjNcIjpcbiAgICAgICAgICAgIHNwYWNpbmcgPSAxNjtcbiAgICAgICAgICAgIHNwYWNpbmdOYW1lID0gXCJzXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIjRcIjpcbiAgICAgICAgICAgIHNwYWNpbmcgPSAyNDtcbiAgICAgICAgICAgIHNwYWNpbmdOYW1lID0gXCJtXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIjVcIjpcbiAgICAgICAgICAgIHNwYWNpbmcgPSAzMjtcbiAgICAgICAgICAgIHNwYWNpbmdOYW1lID0gXCJsXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIjZcIjpcbiAgICAgICAgICAgIHNwYWNpbmcgPSA0MDtcbiAgICAgICAgICAgIHNwYWNpbmdOYW1lID0gXCJ4bFwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCI3XCI6XG4gICAgICAgICAgICBzcGFjaW5nID0gNDg7XG4gICAgICAgICAgICBzcGFjaW5nTmFtZSA9IFwieHhsXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG4gICAgZm9yIChjb25zdCBub2RlIG9mIG5vZGVzKSB7XG4gICAgICAgIGlmIChub2RlKSB7XG4gICAgICAgICAgICBwdk5hbWUgPSBcInB2LVwiICsgc3BhY2luZ05hbWU7XG4gICAgICAgICAgICB1cGRhdGVOYW1lKHsgdHlwZTogXCJ2ZXJ0aWNhbFwiLCB2YWx1ZTogcHZOYW1lIH0sIG5vZGUpO1xuICAgICAgICAgICAgaWYgKG5vZGUudHlwZSA9PT0gXCJHUk9VUFwiKSB7XG4gICAgICAgICAgICAgICAgbm9kZS52ZXJ0aWNhbFBhZGRpbmcgPSBzcGFjaW5nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IHNldEF1dG9MYXlvdXQgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUudmVydGljYWxQYWRkaW5nID0gc3BhY2luZztcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiByZXNvbHZlKFwiZG9uZVwiKSwgNSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59O1xuY29uc3QgSXRlbVNwYWNpbmcgPSAobm9kZXMsIG1zZykgPT4ge1xuICAgIGxldCBzbGlkZXJWYWx1ZSA9IG1zZy5zbGlkZXJWYWx1ZTtcbiAgICBsZXQgc3BhY2luZyA9IG51bGw7XG4gICAgbGV0IHNwYWNpbmdOYW1lID0gbnVsbDtcbiAgICBzd2l0Y2ggKHNsaWRlclZhbHVlKSB7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBzcGFjaW5nID0gMDtcbiAgICAgICAgICAgIHNwYWNpbmdOYW1lID0gXCJub25lXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIjFcIjpcbiAgICAgICAgICAgIHNwYWNpbmcgPSA0O1xuICAgICAgICAgICAgc3BhY2luZ05hbWUgPSBcInh4c1wiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCIyXCI6XG4gICAgICAgICAgICBzcGFjaW5nID0gODtcbiAgICAgICAgICAgIHNwYWNpbmdOYW1lID0gXCJ4c1wiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCIzXCI6XG4gICAgICAgICAgICBzcGFjaW5nID0gMTY7XG4gICAgICAgICAgICBzcGFjaW5nTmFtZSA9IFwic1wiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCI0XCI6XG4gICAgICAgICAgICBzcGFjaW5nID0gMjQ7XG4gICAgICAgICAgICBzcGFjaW5nTmFtZSA9IFwibVwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCI1XCI6XG4gICAgICAgICAgICBzcGFjaW5nID0gMzI7XG4gICAgICAgICAgICBzcGFjaW5nTmFtZSA9IFwibFwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCI2XCI6XG4gICAgICAgICAgICBzcGFjaW5nID0gNDA7XG4gICAgICAgICAgICBzcGFjaW5nTmFtZSA9IFwieGxcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiN1wiOlxuICAgICAgICAgICAgc3BhY2luZyA9IDQ4O1xuICAgICAgICAgICAgc3BhY2luZ05hbWUgPSBcInh4bFwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGZvciAoY29uc3Qgbm9kZSBvZiBub2Rlcykge1xuICAgICAgICBub2RlLml0ZW1TcGFjaW5nID0gc3BhY2luZztcbiAgICAgICAgc3BOYW1lID0gXCJzcC1cIiArIHNwYWNpbmdOYW1lO1xuICAgICAgICB1cGRhdGVOYW1lKHsgdHlwZTogXCJzcGFjaW5nXCIsIHZhbHVlOiBzcE5hbWUgfSwgbm9kZSk7XG4gICAgfVxufTtcbmV4cG9ydCB7IFBhZGRpbmdIb3Jpem9udGFsU2xpZGVyLCBQYWRkaW5nVmVydGljYWxTbGlkZXIsIEl0ZW1TcGFjaW5nIH07XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB7IENvbG9yU3R5bGVJZCB9IGZyb20gXCIuLi90aGVtZS1zdHlsZXMvY29sb3JzXCI7XG5pbXBvcnQgeyBFZmZlY3RzU3R5bGVJZCB9IGZyb20gXCIuLi90aGVtZS1zdHlsZXMvZWZmZWN0c1wiO1xuY29uc3QgTGlnaHRUaGVtZVRyYXZlcnNlID0gKG5vZGUpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICBsZXQgZGFya1VJQm9keSA9IHlpZWxkIENvbG9yU3R5bGVJZC5kYXJrVUkuYm9keTtcbiAgICBsZXQgZGFya1VJU3VyZmFjZSA9IHlpZWxkIENvbG9yU3R5bGVJZC5kYXJrVUkuc3VyZmFjZTtcbiAgICBsZXQgZGFya1VJS2V5bGluZSA9IHlpZWxkIENvbG9yU3R5bGVJZC5kYXJrVUkua2V5bGluZTtcbiAgICBsZXQgZGFya1VJS2V5bGluZVN1cHBsZW1lbnRhcnkgPSB5aWVsZCBDb2xvclN0eWxlSWQuZGFya1VJXG4gICAgICAgIC5rZXlsaW5lU3VwcGxlbWVudGFyeTtcbiAgICBsZXQgZGFya1VJQWNjZW50ID0geWllbGQgQ29sb3JTdHlsZUlkLmRhcmtVSS5hY2NlbnQ7XG4gICAgbGV0IGRhcmtVSUFjY2VudEhvdmVyID0geWllbGQgQ29sb3JTdHlsZUlkLmRhcmtVSS5hY2NlbnRIb3ZlcjtcbiAgICBsZXQgZGFya1VJRGFuZ2VyID0geWllbGQgQ29sb3JTdHlsZUlkLmRhcmtVSS5kYW5nZXI7XG4gICAgbGV0IGRhcmtVSVN1Y2Nlc3MgPSB5aWVsZCBDb2xvclN0eWxlSWQuZGFya1VJLnN1Y2Nlc3M7XG4gICAgbGV0IGRhcmtVSU9uQWNjZW50ID0geWllbGQgQ29sb3JTdHlsZUlkLmRhcmtVSS5vbkFjY2VudDtcbiAgICBsZXQgZGFya1VJT25EYW5nZXIgPSB5aWVsZCBDb2xvclN0eWxlSWQuZGFya1VJLm9uRGFuZ2VyO1xuICAgIGxldCBkYXJrVUlPblN1Y2Nlc3MgPSB5aWVsZCBDb2xvclN0eWxlSWQuZGFya1VJLm9uU3VjY2VzcztcbiAgICBsZXQgZGFya1VJT25TdXJmYWNlSGlnaCA9IHlpZWxkIENvbG9yU3R5bGVJZC5kYXJrVUkub25TdXJmYWNlSGlnaDtcbiAgICBsZXQgZGFya1VJT25TdXJmYWNlTWVkaXVtID0geWllbGQgQ29sb3JTdHlsZUlkLmRhcmtVSS5vblN1cmZhY2VNZWRpdW07XG4gICAgbGV0IGRhcmtVSU9uU3VyZmFjZURpc2FibGVkID0geWllbGQgQ29sb3JTdHlsZUlkLmRhcmtVSS5vblN1cmZhY2VEaXNhYmxlZDtcbiAgICBsZXQgZGFya1VJU2hhZG93TG93ID0geWllbGQgRWZmZWN0c1N0eWxlSWQuZGFya1VJLnNoYWRvd0xvdztcbiAgICBsZXQgZGFya1VJU2hhZG93SGlnaCA9IHlpZWxkIEVmZmVjdHNTdHlsZUlkLmRhcmtVSS5zaGFkb3dIaWdoO1xuICAgIGxldCBkYXJrVUlCb3JkZXJUb3AgPSB5aWVsZCBFZmZlY3RzU3R5bGVJZC5kYXJrVUkuYm9yZGVyVG9wO1xuICAgIGxldCBkYXJrVUlCb3JkZXJSaWdodCA9IHlpZWxkIEVmZmVjdHNTdHlsZUlkLmRhcmtVSS5ib3JkZXJSaWdodDtcbiAgICBsZXQgZGFya1VJQm9yZGVyQm90dG9tID0geWllbGQgRWZmZWN0c1N0eWxlSWQuZGFya1VJLmJvcmRlckJvdHRvbTtcbiAgICBsZXQgZGFya1VJQm9yZGVyTGVmdCA9IHlpZWxkIEVmZmVjdHNTdHlsZUlkLmRhcmtVSS5ib3JkZXJMZWZ0O1xuICAgIGxldCBkYXJrVUlCb3JkZXJUb3BCb3R0b20gPSB5aWVsZCBFZmZlY3RzU3R5bGVJZC5kYXJrVUkuYm9yZGVyVG9wQm90dG9tO1xuICAgIGxldCBkYXJrVUlCb3JkZXJMZWZ0UmlnaHQgPSB5aWVsZCBFZmZlY3RzU3R5bGVJZC5kYXJrVUkuYm9yZGVyTGVmdFJpZ2h0O1xuICAgIC8vIFN0cm9rZXNcbiAgICBzd2l0Y2ggKG5vZGUuc3Ryb2tlU3R5bGVJZCkge1xuICAgICAgICBjYXNlIGRhcmtVSUFjY2VudC5pZDpcbiAgICAgICAgICAgIENvbG9yU3R5bGVJZC5saWdodFVJLmFjY2VudC50aGVuKChyZXNwKSA9PiB7XG4gICAgICAgICAgICAgICAgbm9kZS5zdHJva2VTdHlsZUlkID0gcmVzcC5pZDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgZGFya1VJRGFuZ2VyLmlkOlxuICAgICAgICAgICAgQ29sb3JTdHlsZUlkLmxpZ2h0VUkuZGFuZ2VyLnRoZW4oKHJlc3ApID0+IHtcbiAgICAgICAgICAgICAgICBub2RlLnN0cm9rZVN0eWxlSWQgPSByZXNwLmlkO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBkYXJrVUlLZXlsaW5lLmlkOlxuICAgICAgICAgICAgQ29sb3JTdHlsZUlkLmxpZ2h0VUkua2V5bGluZS50aGVuKChyZXNwKSA9PiB7XG4gICAgICAgICAgICAgICAgbm9kZS5zdHJva2VTdHlsZUlkID0gcmVzcC5pZDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgZGFya1VJS2V5bGluZVN1cHBsZW1lbnRhcnkuaWQ6XG4gICAgICAgICAgICBDb2xvclN0eWxlSWQubGlnaHRVSS5rZXlsaW5lU3VwcGxlbWVudGFyeS50aGVuKChyZXNwKSA9PiB7XG4gICAgICAgICAgICAgICAgbm9kZS5zdHJva2VTdHlsZUlkID0gcmVzcC5pZDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgZGFya1VJQWNjZW50LmlkOlxuICAgICAgICAgICAgQ29sb3JTdHlsZUlkLmxpZ2h0VUkuYWNjZW50LnRoZW4oKHJlc3ApID0+IHtcbiAgICAgICAgICAgICAgICBub2RlLnN0cm9rZVN0eWxlSWQgPSByZXNwLmlkO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG4gICAgLy8gRmlsbHNcbiAgICBzd2l0Y2ggKG5vZGUuZmlsbFN0eWxlSWQpIHtcbiAgICAgICAgY2FzZSBkYXJrVUlCb2R5LmlkOlxuICAgICAgICAgICAgQ29sb3JTdHlsZUlkLmxpZ2h0VUkuYm9keS50aGVuKChyZXNwKSA9PiB7XG4gICAgICAgICAgICAgICAgbm9kZS5maWxsU3R5bGVJZCA9IHJlc3AuaWQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIGRhcmtVSVN1cmZhY2UuaWQ6XG4gICAgICAgICAgICBDb2xvclN0eWxlSWQubGlnaHRVSS5zdXJmYWNlLnRoZW4oKHJlc3ApID0+IHtcbiAgICAgICAgICAgICAgICBub2RlLmZpbGxTdHlsZUlkID0gcmVzcC5pZDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgZGFya1VJS2V5bGluZS5pZDpcbiAgICAgICAgICAgIENvbG9yU3R5bGVJZC5saWdodFVJLmtleWxpbmUudGhlbigocmVzcCkgPT4ge1xuICAgICAgICAgICAgICAgIG5vZGUuZmlsbFN0eWxlSWQgPSByZXNwLmlkO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBkYXJrVUlLZXlsaW5lU3VwcGxlbWVudGFyeS5pZDpcbiAgICAgICAgICAgIENvbG9yU3R5bGVJZC5saWdodFVJLmtleWxpbmVTdXBwbGVtZW50YXJ5LnRoZW4oKHJlc3ApID0+IHtcbiAgICAgICAgICAgICAgICBub2RlLmZpbGxTdHlsZUlkID0gcmVzcC5pZDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgZGFya1VJQWNjZW50LmlkOlxuICAgICAgICAgICAgQ29sb3JTdHlsZUlkLmxpZ2h0VUkuYWNjZW50LnRoZW4oKHJlc3ApID0+IHtcbiAgICAgICAgICAgICAgICBub2RlLmZpbGxTdHlsZUlkID0gcmVzcC5pZDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgZGFya1VJQWNjZW50SG92ZXIuaWQ6XG4gICAgICAgICAgICBDb2xvclN0eWxlSWQubGlnaHRVSS5hY2NlbnRIb3Zlci50aGVuKChyZXNwKSA9PiB7XG4gICAgICAgICAgICAgICAgbm9kZS5maWxsU3R5bGVJZCA9IHJlc3AuaWQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIGRhcmtVSURhbmdlci5pZDpcbiAgICAgICAgICAgIENvbG9yU3R5bGVJZC5saWdodFVJLmRhbmdlci50aGVuKChyZXNwKSA9PiB7XG4gICAgICAgICAgICAgICAgbm9kZS5maWxsU3R5bGVJZCA9IHJlc3AuaWQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIGRhcmtVSVN1Y2Nlc3MuaWQ6XG4gICAgICAgICAgICBDb2xvclN0eWxlSWQubGlnaHRVSS5zdWNjZXNzLnRoZW4oKHJlc3ApID0+IHtcbiAgICAgICAgICAgICAgICBub2RlLmZpbGxTdHlsZUlkID0gcmVzcC5pZDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgZGFya1VJT25BY2NlbnQuaWQ6XG4gICAgICAgICAgICBDb2xvclN0eWxlSWQubGlnaHRVSS5vbkFjY2VudC50aGVuKChyZXNwKSA9PiB7XG4gICAgICAgICAgICAgICAgbm9kZS5maWxsU3R5bGVJZCA9IHJlc3AuaWQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIGRhcmtVSU9uRGFuZ2VyLmlkOlxuICAgICAgICAgICAgQ29sb3JTdHlsZUlkLmxpZ2h0VUkub25EYW5nZXIudGhlbigocmVzcCkgPT4ge1xuICAgICAgICAgICAgICAgIG5vZGUuZmlsbFN0eWxlSWQgPSByZXNwLmlkO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBkYXJrVUlPblN1Y2Nlc3MuaWQ6XG4gICAgICAgICAgICBDb2xvclN0eWxlSWQubGlnaHRVSS5vblN1Y2Nlc3MudGhlbigocmVzcCkgPT4ge1xuICAgICAgICAgICAgICAgIG5vZGUuZmlsbFN0eWxlSWQgPSByZXNwLmlkO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBkYXJrVUlPblN1cmZhY2VIaWdoLmlkOlxuICAgICAgICAgICAgQ29sb3JTdHlsZUlkLmxpZ2h0VUkub25TdXJmYWNlSGlnaC50aGVuKChyZXNwKSA9PiB7XG4gICAgICAgICAgICAgICAgbm9kZS5maWxsU3R5bGVJZCA9IHJlc3AuaWQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIGRhcmtVSU9uU3VyZmFjZU1lZGl1bS5pZDpcbiAgICAgICAgICAgIENvbG9yU3R5bGVJZC5saWdodFVJLm9uU3VyZmFjZU1lZGl1bS50aGVuKChyZXNwKSA9PiB7XG4gICAgICAgICAgICAgICAgbm9kZS5maWxsU3R5bGVJZCA9IHJlc3AuaWQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIGRhcmtVSU9uU3VyZmFjZURpc2FibGVkLmlkOlxuICAgICAgICAgICAgQ29sb3JTdHlsZUlkLmxpZ2h0VUkub25TdXJmYWNlRGlzYWJsZWQudGhlbigocmVzcCkgPT4ge1xuICAgICAgICAgICAgICAgIG5vZGUuZmlsbFN0eWxlSWQgPSByZXNwLmlkO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG4gICAgLy8gRWZmZWN0c1xuICAgIHN3aXRjaCAobm9kZS5lZmZlY3RTdHlsZUlkKSB7XG4gICAgICAgIGNhc2UgZGFya1VJU2hhZG93TG93LmlkOlxuICAgICAgICAgICAgRWZmZWN0c1N0eWxlSWQubGlnaHRVSS5zaGFkb3dMb3cudGhlbigocmVzcCkgPT4ge1xuICAgICAgICAgICAgICAgIG5vZGUuZWZmZWN0U3R5bGVJZCA9IHJlc3AuaWQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIGRhcmtVSVNoYWRvd0hpZ2guaWQ6XG4gICAgICAgICAgICBFZmZlY3RzU3R5bGVJZC5saWdodFVJLnNoYWRvd0hpZ2gudGhlbigocmVzcCkgPT4ge1xuICAgICAgICAgICAgICAgIG5vZGUuZWZmZWN0U3R5bGVJZCA9IHJlc3AuaWQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIGRhcmtVSUJvcmRlclRvcC5pZDpcbiAgICAgICAgICAgIEVmZmVjdHNTdHlsZUlkLmxpZ2h0VUkuYm9yZGVyVG9wLnRoZW4oKHJlc3ApID0+IHtcbiAgICAgICAgICAgICAgICBub2RlLmVmZmVjdFN0eWxlSWQgPSByZXNwLmlkO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBkYXJrVUlCb3JkZXJSaWdodC5pZDpcbiAgICAgICAgICAgIEVmZmVjdHNTdHlsZUlkLmxpZ2h0VUkuYm9yZGVyUmlnaHQudGhlbigocmVzcCkgPT4ge1xuICAgICAgICAgICAgICAgIG5vZGUuZWZmZWN0U3R5bGVJZCA9IHJlc3AuaWQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIGRhcmtVSUJvcmRlckJvdHRvbS5pZDpcbiAgICAgICAgICAgIEVmZmVjdHNTdHlsZUlkLmxpZ2h0VUkuYm9yZGVyQm90dG9tLnRoZW4oKHJlc3ApID0+IHtcbiAgICAgICAgICAgICAgICBub2RlLmVmZmVjdFN0eWxlSWQgPSByZXNwLmlkO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBkYXJrVUlCb3JkZXJMZWZ0LmlkOlxuICAgICAgICAgICAgRWZmZWN0c1N0eWxlSWQubGlnaHRVSS5ib3JkZXJMZWZ0LnRoZW4oKHJlc3ApID0+IHtcbiAgICAgICAgICAgICAgICBub2RlLmVmZmVjdFN0eWxlSWQgPSByZXNwLmlkO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBkYXJrVUlCb3JkZXJUb3BCb3R0b20uaWQ6XG4gICAgICAgICAgICBFZmZlY3RzU3R5bGVJZC5saWdodFVJLmJvcmRlclRvcEJvdHRvbS50aGVuKChyZXNwKSA9PiB7XG4gICAgICAgICAgICAgICAgbm9kZS5lZmZlY3RTdHlsZUlkID0gcmVzcC5pZDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgZGFya1VJQm9yZGVyTGVmdFJpZ2h0LmlkOlxuICAgICAgICAgICAgRWZmZWN0c1N0eWxlSWQubGlnaHRVSS5ib3JkZXJMZWZ0UmlnaHQudGhlbigocmVzcCkgPT4ge1xuICAgICAgICAgICAgICAgIG5vZGUuZWZmZWN0U3R5bGVJZCA9IHJlc3AuaWQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICAvLyBkbyBub3RoaW5nIGJlbG93XG4gICAgaWYgKFwiY2hpbGRyZW5cIiBpbiBub2RlKSB7XG4gICAgICAgIGZvciAoY29uc3QgY2hpbGQgb2Ygbm9kZS5jaGlsZHJlbikge1xuICAgICAgICAgICAgTGlnaHRUaGVtZVRyYXZlcnNlKGNoaWxkKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgLy8gZG8gbm90aGluZ1xuICAgIH1cbn0pO1xuY29uc3QgRGFya1RoZW1lVHJhdmVyc2UgPSAobm9kZSkgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIGxldCBsaWdodFVJQm9keSA9IHlpZWxkIENvbG9yU3R5bGVJZC5saWdodFVJLmJvZHk7XG4gICAgbGV0IGxpZ2h0VUlTdXJmYWNlID0geWllbGQgQ29sb3JTdHlsZUlkLmxpZ2h0VUkuc3VyZmFjZTtcbiAgICBsZXQgbGlnaHRVSUtleWxpbmUgPSB5aWVsZCBDb2xvclN0eWxlSWQubGlnaHRVSS5rZXlsaW5lO1xuICAgIGxldCBsaWdodFVJS2V5bGluZVN1cHBsZW1lbnRhcnkgPSB5aWVsZCBDb2xvclN0eWxlSWQubGlnaHRVSVxuICAgICAgICAua2V5bGluZVN1cHBsZW1lbnRhcnk7XG4gICAgbGV0IGxpZ2h0VUlBY2NlbnQgPSB5aWVsZCBDb2xvclN0eWxlSWQubGlnaHRVSS5hY2NlbnQ7XG4gICAgbGV0IGxpZ2h0VUlBY2NlbnRIb3ZlciA9IHlpZWxkIENvbG9yU3R5bGVJZC5saWdodFVJLmFjY2VudEhvdmVyO1xuICAgIGxldCBsaWdodFVJRGFuZ2VyID0geWllbGQgQ29sb3JTdHlsZUlkLmxpZ2h0VUkuZGFuZ2VyO1xuICAgIGxldCBsaWdodFVJU3VjY2VzcyA9IHlpZWxkIENvbG9yU3R5bGVJZC5saWdodFVJLnN1Y2Nlc3M7XG4gICAgbGV0IGxpZ2h0VUlPbkFjY2VudCA9IHlpZWxkIENvbG9yU3R5bGVJZC5saWdodFVJLm9uQWNjZW50O1xuICAgIGxldCBsaWdodFVJT25EYW5nZXIgPSB5aWVsZCBDb2xvclN0eWxlSWQubGlnaHRVSS5vbkRhbmdlcjtcbiAgICBsZXQgbGlnaHRVSU9uU3VjY2VzcyA9IHlpZWxkIENvbG9yU3R5bGVJZC5saWdodFVJLm9uU3VjY2VzcztcbiAgICBsZXQgbGlnaHRVSU9uU3VyZmFjZUhpZ2ggPSB5aWVsZCBDb2xvclN0eWxlSWQubGlnaHRVSS5vblN1cmZhY2VIaWdoO1xuICAgIGxldCBsaWdodFVJT25TdXJmYWNlTWVkaXVtID0geWllbGQgQ29sb3JTdHlsZUlkLmxpZ2h0VUkub25TdXJmYWNlTWVkaXVtO1xuICAgIGxldCBsaWdodFVJT25TdXJmYWNlRGlzYWJsZWQgPSB5aWVsZCBDb2xvclN0eWxlSWQubGlnaHRVSS5vblN1cmZhY2VEaXNhYmxlZDtcbiAgICBsZXQgbGlnaHRVSVNoYWRvd0xvdyA9IHlpZWxkIEVmZmVjdHNTdHlsZUlkLmxpZ2h0VUkuc2hhZG93TG93O1xuICAgIGxldCBsaWdodFVJU2hhZG93SGlnaCA9IHlpZWxkIEVmZmVjdHNTdHlsZUlkLmxpZ2h0VUkuc2hhZG93SGlnaDtcbiAgICBsZXQgbGlnaHRVSUJvcmRlclRvcCA9IHlpZWxkIEVmZmVjdHNTdHlsZUlkLmxpZ2h0VUkuYm9yZGVyVG9wO1xuICAgIGxldCBsaWdodFVJQm9yZGVyUmlnaHQgPSB5aWVsZCBFZmZlY3RzU3R5bGVJZC5saWdodFVJLmJvcmRlclJpZ2h0O1xuICAgIGxldCBsaWdodFVJQm9yZGVyQm90dG9tID0geWllbGQgRWZmZWN0c1N0eWxlSWQubGlnaHRVSS5ib3JkZXJCb3R0b207XG4gICAgbGV0IGxpZ2h0VUlCb3JkZXJMZWZ0ID0geWllbGQgRWZmZWN0c1N0eWxlSWQubGlnaHRVSS5ib3JkZXJMZWZ0O1xuICAgIGxldCBsaWdodFVJQm9yZGVyVG9wQm90dG9tID0geWllbGQgRWZmZWN0c1N0eWxlSWQubGlnaHRVSS5ib3JkZXJUb3BCb3R0b207XG4gICAgbGV0IGxpZ2h0VUlCb3JkZXJMZWZ0UmlnaHQgPSB5aWVsZCBFZmZlY3RzU3R5bGVJZC5saWdodFVJLmJvcmRlckxlZnRSaWdodDtcbiAgICAvLyBTdHJva2VcbiAgICBzd2l0Y2ggKG5vZGUuc3Ryb2tlU3R5bGVJZCkge1xuICAgICAgICBjYXNlIGxpZ2h0VUlBY2NlbnQuaWQ6XG4gICAgICAgICAgICBDb2xvclN0eWxlSWQuZGFya1VJLmFjY2VudC50aGVuKChyZXNwKSA9PiB7XG4gICAgICAgICAgICAgICAgbm9kZS5zdHJva2VTdHlsZUlkID0gcmVzcC5pZDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgbGlnaHRVSURhbmdlci5pZDpcbiAgICAgICAgICAgIENvbG9yU3R5bGVJZC5kYXJrVUkuZGFuZ2VyLnRoZW4oKHJlc3ApID0+IHtcbiAgICAgICAgICAgICAgICBub2RlLnN0cm9rZVN0eWxlSWQgPSByZXNwLmlkO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBsaWdodFVJS2V5bGluZS5pZDpcbiAgICAgICAgICAgIENvbG9yU3R5bGVJZC5kYXJrVUkua2V5bGluZS50aGVuKChyZXNwKSA9PiB7XG4gICAgICAgICAgICAgICAgbm9kZS5zdHJva2VTdHlsZUlkID0gcmVzcC5pZDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgbGlnaHRVSUtleWxpbmVTdXBwbGVtZW50YXJ5LmlkOlxuICAgICAgICAgICAgQ29sb3JTdHlsZUlkLmRhcmtVSS5rZXlsaW5lU3VwcGxlbWVudGFyeS50aGVuKChyZXNwKSA9PiB7XG4gICAgICAgICAgICAgICAgbm9kZS5zdHJva2VTdHlsZUlkID0gcmVzcC5pZDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgbGlnaHRVSUFjY2VudC5pZDpcbiAgICAgICAgICAgIENvbG9yU3R5bGVJZC5kYXJrVUkuYWNjZW50LnRoZW4oKHJlc3ApID0+IHtcbiAgICAgICAgICAgICAgICBub2RlLnN0cm9rZVN0eWxlSWQgPSByZXNwLmlkO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG4gICAgLy8gRmlsbFxuICAgIHN3aXRjaCAobm9kZS5maWxsU3R5bGVJZCkge1xuICAgICAgICBjYXNlIGxpZ2h0VUlCb2R5LmlkOlxuICAgICAgICAgICAgQ29sb3JTdHlsZUlkLmRhcmtVSS5ib2R5LnRoZW4oKHJlc3ApID0+IHtcbiAgICAgICAgICAgICAgICBub2RlLmZpbGxTdHlsZUlkID0gcmVzcC5pZDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgbGlnaHRVSVN1cmZhY2UuaWQ6XG4gICAgICAgICAgICBDb2xvclN0eWxlSWQuZGFya1VJLnN1cmZhY2UudGhlbigocmVzcCkgPT4ge1xuICAgICAgICAgICAgICAgIG5vZGUuZmlsbFN0eWxlSWQgPSByZXNwLmlkO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBsaWdodFVJS2V5bGluZS5pZDpcbiAgICAgICAgICAgIENvbG9yU3R5bGVJZC5kYXJrVUkua2V5bGluZS50aGVuKChyZXNwKSA9PiB7XG4gICAgICAgICAgICAgICAgbm9kZS5maWxsU3R5bGVJZCA9IHJlc3AuaWQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIGxpZ2h0VUlLZXlsaW5lU3VwcGxlbWVudGFyeS5pZDpcbiAgICAgICAgICAgIENvbG9yU3R5bGVJZC5kYXJrVUkua2V5bGluZVN1cHBsZW1lbnRhcnkudGhlbigocmVzcCkgPT4ge1xuICAgICAgICAgICAgICAgIG5vZGUuZmlsbFN0eWxlSWQgPSByZXNwLmlkO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBsaWdodFVJQWNjZW50LmlkOlxuICAgICAgICAgICAgQ29sb3JTdHlsZUlkLmRhcmtVSS5hY2NlbnQudGhlbigocmVzcCkgPT4ge1xuICAgICAgICAgICAgICAgIG5vZGUuZmlsbFN0eWxlSWQgPSByZXNwLmlkO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBsaWdodFVJQWNjZW50SG92ZXIuaWQ6XG4gICAgICAgICAgICBDb2xvclN0eWxlSWQuZGFya1VJLmFjY2VudEhvdmVyLnRoZW4oKHJlc3ApID0+IHtcbiAgICAgICAgICAgICAgICBub2RlLmZpbGxTdHlsZUlkID0gcmVzcC5pZDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgbGlnaHRVSURhbmdlci5pZDpcbiAgICAgICAgICAgIENvbG9yU3R5bGVJZC5kYXJrVUkuZGFuZ2VyLnRoZW4oKHJlc3ApID0+IHtcbiAgICAgICAgICAgICAgICBub2RlLmZpbGxTdHlsZUlkID0gcmVzcC5pZDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgbGlnaHRVSVN1Y2Nlc3MuaWQ6XG4gICAgICAgICAgICBDb2xvclN0eWxlSWQuZGFya1VJLnN1Y2Nlc3MudGhlbigocmVzcCkgPT4ge1xuICAgICAgICAgICAgICAgIG5vZGUuZmlsbFN0eWxlSWQgPSByZXNwLmlkO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBsaWdodFVJT25BY2NlbnQuaWQ6XG4gICAgICAgICAgICBDb2xvclN0eWxlSWQuZGFya1VJLm9uQWNjZW50LnRoZW4oKHJlc3ApID0+IHtcbiAgICAgICAgICAgICAgICBub2RlLmZpbGxTdHlsZUlkID0gcmVzcC5pZDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgbGlnaHRVSU9uRGFuZ2VyLmlkOlxuICAgICAgICAgICAgQ29sb3JTdHlsZUlkLmRhcmtVSS5vbkRhbmdlci50aGVuKChyZXNwKSA9PiB7XG4gICAgICAgICAgICAgICAgbm9kZS5maWxsU3R5bGVJZCA9IHJlc3AuaWQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIGxpZ2h0VUlPblN1Y2Nlc3MuaWQ6XG4gICAgICAgICAgICBDb2xvclN0eWxlSWQuZGFya1VJLm9uU3VjY2Vzcy50aGVuKChyZXNwKSA9PiB7XG4gICAgICAgICAgICAgICAgbm9kZS5maWxsU3R5bGVJZCA9IHJlc3AuaWQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIGxpZ2h0VUlPblN1cmZhY2VIaWdoLmlkOlxuICAgICAgICAgICAgQ29sb3JTdHlsZUlkLmRhcmtVSS5vblN1cmZhY2VIaWdoLnRoZW4oKHJlc3ApID0+IHtcbiAgICAgICAgICAgICAgICBub2RlLmZpbGxTdHlsZUlkID0gcmVzcC5pZDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgbGlnaHRVSU9uU3VyZmFjZU1lZGl1bS5pZDpcbiAgICAgICAgICAgIENvbG9yU3R5bGVJZC5kYXJrVUkub25TdXJmYWNlTWVkaXVtLnRoZW4oKHJlc3ApID0+IHtcbiAgICAgICAgICAgICAgICBub2RlLmZpbGxTdHlsZUlkID0gcmVzcC5pZDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgbGlnaHRVSU9uU3VyZmFjZURpc2FibGVkLmlkOlxuICAgICAgICAgICAgQ29sb3JTdHlsZUlkLmRhcmtVSS5vblN1cmZhY2VEaXNhYmxlZC50aGVuKChyZXNwKSA9PiB7XG4gICAgICAgICAgICAgICAgbm9kZS5maWxsU3R5bGVJZCA9IHJlc3AuaWQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICAvLyBFZmZlY3RzXG4gICAgc3dpdGNoIChub2RlLmVmZmVjdFN0eWxlSWQpIHtcbiAgICAgICAgY2FzZSBsaWdodFVJU2hhZG93TG93LmlkOlxuICAgICAgICAgICAgRWZmZWN0c1N0eWxlSWQuZGFya1VJLnNoYWRvd0xvdy50aGVuKChyZXNwKSA9PiB7XG4gICAgICAgICAgICAgICAgbm9kZS5lZmZlY3RTdHlsZUlkID0gcmVzcC5pZDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgbGlnaHRVSVNoYWRvd0hpZ2guaWQ6XG4gICAgICAgICAgICBFZmZlY3RzU3R5bGVJZC5kYXJrVUkuc2hhZG93SGlnaC50aGVuKChyZXNwKSA9PiB7XG4gICAgICAgICAgICAgICAgbm9kZS5lZmZlY3RTdHlsZUlkID0gcmVzcC5pZDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgbGlnaHRVSUJvcmRlclRvcC5pZDpcbiAgICAgICAgICAgIEVmZmVjdHNTdHlsZUlkLmRhcmtVSS5ib3JkZXJUb3AudGhlbigocmVzcCkgPT4ge1xuICAgICAgICAgICAgICAgIG5vZGUuZWZmZWN0U3R5bGVJZCA9IHJlc3AuaWQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIGxpZ2h0VUlCb3JkZXJSaWdodC5pZDpcbiAgICAgICAgICAgIEVmZmVjdHNTdHlsZUlkLmRhcmtVSS5ib3JkZXJSaWdodC50aGVuKChyZXNwKSA9PiB7XG4gICAgICAgICAgICAgICAgbm9kZS5lZmZlY3RTdHlsZUlkID0gcmVzcC5pZDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgbGlnaHRVSUJvcmRlckJvdHRvbS5pZDpcbiAgICAgICAgICAgIEVmZmVjdHNTdHlsZUlkLmRhcmtVSS5ib3JkZXJCb3R0b20udGhlbigocmVzcCkgPT4ge1xuICAgICAgICAgICAgICAgIG5vZGUuZWZmZWN0U3R5bGVJZCA9IHJlc3AuaWQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIGxpZ2h0VUlCb3JkZXJMZWZ0LmlkOlxuICAgICAgICAgICAgRWZmZWN0c1N0eWxlSWQuZGFya1VJLmJvcmRlckxlZnQudGhlbigocmVzcCkgPT4ge1xuICAgICAgICAgICAgICAgIG5vZGUuZWZmZWN0U3R5bGVJZCA9IHJlc3AuaWQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIGxpZ2h0VUlCb3JkZXJUb3BCb3R0b20uaWQ6XG4gICAgICAgICAgICBFZmZlY3RzU3R5bGVJZC5kYXJrVUkuYm9yZGVyVG9wQm90dG9tLnRoZW4oKHJlc3ApID0+IHtcbiAgICAgICAgICAgICAgICBub2RlLmVmZmVjdFN0eWxlSWQgPSByZXNwLmlkO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBsaWdodFVJQm9yZGVyTGVmdFJpZ2h0LmlkOlxuICAgICAgICAgICAgRWZmZWN0c1N0eWxlSWQuZGFya1VJLmJvcmRlckxlZnRSaWdodC50aGVuKChyZXNwKSA9PiB7XG4gICAgICAgICAgICAgICAgbm9kZS5lZmZlY3RTdHlsZUlkID0gcmVzcC5pZDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIC8vIGRvIG5vdGhpbmcgYmVsb3dcbiAgICBpZiAoXCJjaGlsZHJlblwiIGluIG5vZGUpIHtcbiAgICAgICAgZm9yIChjb25zdCBjaGlsZCBvZiBub2RlLmNoaWxkcmVuKSB7XG4gICAgICAgICAgICBEYXJrVGhlbWVUcmF2ZXJzZShjaGlsZCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIC8vIGRvIG5vdGhpbmdcbiAgICB9XG59KTtcbmV4cG9ydCB7IExpZ2h0VGhlbWVUcmF2ZXJzZSwgRGFya1RoZW1lVHJhdmVyc2UgfTtcbiIsImNvbnN0IENvbG9yU3R5bGVJZCA9IHtcbiAgbGlnaHRVSToge1xuICAgIGJvZHk6IGZpZ21hLmltcG9ydFN0eWxlQnlLZXlBc3luYyhcbiAgICAgIFwiMjNlOTRmY2VlZDlhY2NiZGE0ZGI5YzY3MmM0M2QyMWI0ZDI4NmU0Y1wiXG4gICAgKSxcbiAgICBzdXJmYWNlOiBmaWdtYS5pbXBvcnRTdHlsZUJ5S2V5QXN5bmMoXG4gICAgICBcIjkwM2U1YmYyNzQxMzllZWI5ZjQ5NjhhOWVmMDhlYzA1ZWFmMGIyNzRcIlxuICAgICksXG4gICAga2V5bGluZTogZmlnbWEuaW1wb3J0U3R5bGVCeUtleUFzeW5jKFxuICAgICAgXCJlZTRkZGNlMmU1NmFkNDdjNDIxNmQ1ODI3YTI4M2I5NDNhNzk0Yzc4XCJcbiAgICApLFxuICAgIGtleWxpbmVTdXBwbGVtZW50YXJ5OiBmaWdtYS5pbXBvcnRTdHlsZUJ5S2V5QXN5bmMoXG4gICAgICBcIjRjMjNlYzM0MDFhZjQ3YzQwNDRiOTE1N2NjNjU1NDlkYWJkMjA3ZDlcIlxuICAgICksXG4gICAgYWNjZW50OiBmaWdtYS5pbXBvcnRTdHlsZUJ5S2V5QXN5bmMoXG4gICAgICBcImNmMGM4ZTg4ZWI2NWI4MDQ5ZmVjYTYwYWM4M2UxZGUzZDNhYjZlOGJcIlxuICAgICksXG4gICAgYWNjZW50SG92ZXI6IGZpZ21hLmltcG9ydFN0eWxlQnlLZXlBc3luYyhcbiAgICAgIFwiZGE5Mzg2OThjOWQyMjMyMjFkNjNjN2M1NTAxYTkwNTdhMGQ1ZjZmYlwiXG4gICAgKSxcbiAgICBkYW5nZXI6IGZpZ21hLmltcG9ydFN0eWxlQnlLZXlBc3luYyhcbiAgICAgIFwiNzk4Y2I4Zjg5OGFiMmE1MDhhN2JhNDkxZDg5OTAxMWZkYTg5NjU3N1wiXG4gICAgKSxcbiAgICBzdWNjZXNzOiBmaWdtYS5pbXBvcnRTdHlsZUJ5S2V5QXN5bmMoXG4gICAgICBcImU0YWE0MWU4YmY1MmY5NGVmNWZjZTM2NjlmNTEwYWYzY2I3OWM1YTdcIlxuICAgICksXG4gICAgb25BY2NlbnQ6IGZpZ21hLmltcG9ydFN0eWxlQnlLZXlBc3luYyhcbiAgICAgIFwiNWRlNzg5MmNhNDQyYTMzYmZhNDYyNTJiZDM4YmU2Y2JmNTRhYjQzY1wiXG4gICAgKSxcbiAgICBvbkRhbmdlcjogZmlnbWEuaW1wb3J0U3R5bGVCeUtleUFzeW5jKFxuICAgICAgXCIyYWZlNTQyNDVjMzhmZmYxYjFiYTgxMzg1ZTk4ZmZkZTUwNzAxYzM5XCJcbiAgICApLFxuICAgIG9uU3VjY2VzczogZmlnbWEuaW1wb3J0U3R5bGVCeUtleUFzeW5jKFxuICAgICAgXCJmMDgyMGI2ZjdjZTFhMzcyZDA4ZTMxNzNhNGY4NmExMjExNjU1NjBjXCJcbiAgICApLFxuICAgIG9uU3VyZmFjZUhpZ2g6IGZpZ21hLmltcG9ydFN0eWxlQnlLZXlBc3luYyhcbiAgICAgIFwiOGYwNWM2M2RlN2YxMDBiMmJkOGZhZDdiOGJkNzE0ODliNjM3YzA2N1wiXG4gICAgKSxcbiAgICBvblN1cmZhY2VNZWRpdW06IGZpZ21hLmltcG9ydFN0eWxlQnlLZXlBc3luYyhcbiAgICAgIFwiOTcwNjNhNWY2MmMzNTRlNmFlMDkxOWQ1MGI2OGQwYmFkYjRhMTIyZVwiXG4gICAgKSxcbiAgICBvblN1cmZhY2VEaXNhYmxlZDogZmlnbWEuaW1wb3J0U3R5bGVCeUtleUFzeW5jKFxuICAgICAgXCJhODA5Zjc1ZTE0ZmJlNjI5NjI3MmU4NTMxMTA2ZjZjYzRjNjkyNTUzXCJcbiAgICApLFxuICB9LFxuICBkYXJrVUk6IHtcbiAgICBib2R5OiBmaWdtYS5pbXBvcnRTdHlsZUJ5S2V5QXN5bmMoXG4gICAgICBcIjJmMDYwZTc0MjJhOGFkMTdhMDM3YTI1MGQzNjhjZjY3MWFkYzA0NjhcIlxuICAgICksXG4gICAgc3VyZmFjZTogZmlnbWEuaW1wb3J0U3R5bGVCeUtleUFzeW5jKFxuICAgICAgXCIxNWY1ZmZhYzNlYzkxYjI0MDg5ODEzNDM5ZmZhZGQxZjk5OTRiMjljXCJcbiAgICApLFxuICAgIGtleWxpbmU6IGZpZ21hLmltcG9ydFN0eWxlQnlLZXlBc3luYyhcbiAgICAgIFwiODRhYjBmMjk4ZWE4ZmNkMGI4MmFjODkyOThhZDUxMTQwY2E3Yjc1YVwiXG4gICAgKSxcbiAgICBrZXlsaW5lU3VwcGxlbWVudGFyeTogZmlnbWEuaW1wb3J0U3R5bGVCeUtleUFzeW5jKFxuICAgICAgXCJiZmZlMjBmOTcyOWFjYjUyNWQ4ODYxMjg4ZjBkODQ0MTM3Njk4YzU1XCJcbiAgICApLFxuICAgIGFjY2VudDogZmlnbWEuaW1wb3J0U3R5bGVCeUtleUFzeW5jKFxuICAgICAgXCIxYjAzOGVjNjAwZDJhMTRiNmNjZTM1ZjdiNDA5MGM2YWQyZGQyYzdkXCJcbiAgICApLFxuICAgIGFjY2VudEhvdmVyOiBmaWdtYS5pbXBvcnRTdHlsZUJ5S2V5QXN5bmMoXG4gICAgICBcImU1N2RlZmE5NzUzZmE1NWRjODcxMmQ5MTcyZTdlNDcxYzU2MDBhYzZcIlxuICAgICksXG4gICAgZGFuZ2VyOiBmaWdtYS5pbXBvcnRTdHlsZUJ5S2V5QXN5bmMoXG4gICAgICBcIjAwZTQzODFjZmI4NTFmN2Y3Yzg3MDg0YzVjZmFkMTFlZmI4MGNjMjNcIlxuICAgICksXG4gICAgc3VjY2VzczogZmlnbWEuaW1wb3J0U3R5bGVCeUtleUFzeW5jKFxuICAgICAgXCI4YmVhMmEwMzBjYjc0MWRhZjI2OTFkMjM5ODFiZWQwZTg4NTNmNjJiXCJcbiAgICApLFxuICAgIG9uQWNjZW50OiBmaWdtYS5pbXBvcnRTdHlsZUJ5S2V5QXN5bmMoXG4gICAgICBcIjNmZGJkNDNkZDI0NjNjNjRiOTRlMGI4MWE5MTZhNjA2YzA4YjBmMWNcIlxuICAgICksXG4gICAgb25EYW5nZXI6IGZpZ21hLmltcG9ydFN0eWxlQnlLZXlBc3luYyhcbiAgICAgIFwiN2FkY2YyZTU5ZTMxODgxYTFjYTVkMWU5ZDZhOGUzMDUwMjdhZTFmZVwiXG4gICAgKSxcbiAgICBvblN1Y2Nlc3M6IGZpZ21hLmltcG9ydFN0eWxlQnlLZXlBc3luYyhcbiAgICAgIFwiODhhMGZiY2M2OGQzYWM5YTdjODhmNWJjNGViZGJkM2U5ZDVhYTY0NFwiXG4gICAgKSxcbiAgICBvblN1cmZhY2VIaWdoOiBmaWdtYS5pbXBvcnRTdHlsZUJ5S2V5QXN5bmMoXG4gICAgICBcIjVlOGU0OTI1OThjNGY2ZTE4ZDg2ZDg3YjNhZDEwZTg1NjdmYTdmZDFcIlxuICAgICksXG4gICAgb25TdXJmYWNlTWVkaXVtOiBmaWdtYS5pbXBvcnRTdHlsZUJ5S2V5QXN5bmMoXG4gICAgICBcIjlkMmU1MTFkOWEzMWViZDc2ZTMwMmFiMjVkMWU5OTVlNmE4M2FjMWNcIlxuICAgICksXG4gICAgb25TdXJmYWNlRGlzYWJsZWQ6IGZpZ21hLmltcG9ydFN0eWxlQnlLZXlBc3luYyhcbiAgICAgIFwiYzk4ODgzZTA3YmU4MGJlNmJjZDE4ODE0ZWIyOWE4Nzc5N2E5OWM2YVwiXG4gICAgKSxcbiAgICBFZmZlY3RTaGFkb3dMb3c6IGZpZ21hLmltcG9ydFN0eWxlQnlLZXlBc3luYyhcbiAgICAgIFwiOGNjZWE5ZDUyM2NmOWRjMTNmZWU2OGYzOTJmM2Y5Y2MzMTg3YTQ1N1wiXG4gICAgKSxcbiAgICBFZmZlY3RTaGFkb3dIaWdoOiBmaWdtYS5pbXBvcnRTdHlsZUJ5S2V5QXN5bmMoXG4gICAgICBcImM2MTI1M2MzOGY2ZDBkOWYzYjMwMmE3N2EzODA3ZTA1MmU5YzNmOTFcIlxuICAgICksXG4gIH0sXG59O1xuXG5leHBvcnQgeyBDb2xvclN0eWxlSWQgfTtcbiIsImNvbnN0IEVmZmVjdHNTdHlsZUlkID0ge1xuICBsaWdodFVJOiB7XG4gICAgc2hhZG93TG93OiBmaWdtYS5pbXBvcnRTdHlsZUJ5S2V5QXN5bmMoXG4gICAgICBcIjhjY2VhOWQ1MjNjZjlkYzEzZmVlNjhmMzkyZjNmOWNjMzE4N2E0NTdcIlxuICAgICksXG4gICAgc2hhZG93SGlnaDogZmlnbWEuaW1wb3J0U3R5bGVCeUtleUFzeW5jKFxuICAgICAgXCJjNjEyNTNjMzhmNmQwZDlmM2IzMDJhNzdhMzgwN2UwNTJlOWMzZjkxXCJcbiAgICApLFxuICAgIGJvcmRlclRvcDogZmlnbWEuaW1wb3J0U3R5bGVCeUtleUFzeW5jKFxuICAgICAgXCJiNDg3MjJkNjE2NDhkN2M2NTY1ZmVhNjQwMzYxODUzZWM1MzYzOWQxXCJcbiAgICApLFxuICAgIGJvcmRlclJpZ2h0OiBmaWdtYS5pbXBvcnRTdHlsZUJ5S2V5QXN5bmMoXG4gICAgICBcIjMzOTRmZWU4ZTNmMDhlZGM3ZDYwZDZhYWIyOWYwZjNmOGVlMWIxYjJcIlxuICAgICksXG4gICAgYm9yZGVyQm90dG9tOiBmaWdtYS5pbXBvcnRTdHlsZUJ5S2V5QXN5bmMoXG4gICAgICBcImY2M2ZmZjM5YWUwMjFmMDc3OWI2ZDQ2ZGM5NzViYzU3OGRkM2I3YzVcIlxuICAgICksXG4gICAgYm9yZGVyTGVmdDogZmlnbWEuaW1wb3J0U3R5bGVCeUtleUFzeW5jKFxuICAgICAgXCI5ZWRkZGY3ODBiZjQ0NTE1ZDk1ZTJhNGJmZjYwMzZlMjQ3ZGE1YWY1XCJcbiAgICApLFxuICAgIGJvcmRlclRvcEJvdHRvbTogZmlnbWEuaW1wb3J0U3R5bGVCeUtleUFzeW5jKFxuICAgICAgXCIyM2MxMTkxNmU2YWY0MTNlZjIyMGFjZmNjNDAxOTVkODJmZTMwM2I1XCJcbiAgICApLFxuICAgIGJvcmRlckxlZnRSaWdodDogZmlnbWEuaW1wb3J0U3R5bGVCeUtleUFzeW5jKFxuICAgICAgXCJhNjQ0N2I3MjEwOTAxYmNhNDViOThmZTkxOGFjNTU1NDBmYTgzNTRlXCJcbiAgICApLFxuICB9LFxuICBkYXJrVUk6IHtcbiAgICBzaGFkb3dMb3c6IGZpZ21hLmltcG9ydFN0eWxlQnlLZXlBc3luYyhcbiAgICAgIFwiOTg3NjE5MDRiY2M5ZDM4YzgxZWUyM2U3YjQzMmQ4Yzk3ZTI5ZjBjMVwiXG4gICAgKSxcbiAgICBzaGFkb3dIaWdoOiBmaWdtYS5pbXBvcnRTdHlsZUJ5S2V5QXN5bmMoXG4gICAgICBcIjIwOWI0NTFlNGY2OGY1YmYzYWRlMjRlZjM2YTEwYTYwOWNkYWUyMzlcIlxuICAgICksXG4gICAgYm9yZGVyVG9wOiBmaWdtYS5pbXBvcnRTdHlsZUJ5S2V5QXN5bmMoXG4gICAgICBcImQzOTRjNmZmNzhhOTRjOTAwZjM0NGI1M2YxZDdlMGU3ZWNkY2NkNzlcIlxuICAgICksXG4gICAgYm9yZGVyUmlnaHQ6IGZpZ21hLmltcG9ydFN0eWxlQnlLZXlBc3luYyhcbiAgICAgIFwiNDMzYzYwNWYzNGU5YTg4ZDAzNTBmMjJmZTU4YzlhZmM4ZjBlN2RkN1wiXG4gICAgKSxcbiAgICBib3JkZXJCb3R0b206IGZpZ21hLmltcG9ydFN0eWxlQnlLZXlBc3luYyhcbiAgICAgIFwiM2U0Njc0ODEwNTEwNmI2NTQ0MGMyNGYxYjllNDFjOTk0ZmRhYzQwMlwiXG4gICAgKSxcbiAgICBib3JkZXJMZWZ0OiBmaWdtYS5pbXBvcnRTdHlsZUJ5S2V5QXN5bmMoXG4gICAgICBcImY4OGIyMjdkZDZkNmI0ZjgyODViMmUxNzlhN2M3ZDQyNzdmMGZiMzFcIlxuICAgICksXG4gICAgYm9yZGVyVG9wQm90dG9tOiBmaWdtYS5pbXBvcnRTdHlsZUJ5S2V5QXN5bmMoXG4gICAgICBcImEzNGYzZDBhMjJjMjQ1OWNmYzYyNmYxNzhjNDdkOWJiMWJhOGIyYTVcIlxuICAgICksXG4gICAgYm9yZGVyTGVmdFJpZ2h0OiBmaWdtYS5pbXBvcnRTdHlsZUJ5S2V5QXN5bmMoXG4gICAgICBcImZjMDZiOGU3MDMyZmM5YjFmYTA3YWY1ZTM5MjkzZGYyMTUwZmY0ZGNcIlxuICAgICksXG4gIH0sXG59O1xuXG5leHBvcnQgeyBFZmZlY3RzU3R5bGVJZCB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==