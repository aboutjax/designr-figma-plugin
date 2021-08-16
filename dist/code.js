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
/* harmony import */ var _helper_layout_grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helper/layout-grid */ "./src/helper/layout-grid.ts");
/* harmony import */ var _helper_callback__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./helper/callback */ "./src/helper/callback.ts");
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
figma.ui.resize(280, 560);
figma.on("selectionchange", () => {
    let thisSelection = figma.currentPage.selection[0];
    Object(_helper_callback__WEBPACK_IMPORTED_MODULE_6__["onSelectionChange"])(thisSelection);
});
figma.ui.onmessage = (msg) => {
    if (msg.type === "swap-theme") {
        Object(_helper_theme_swap__WEBPACK_IMPORTED_MODULE_0__["ThemeSwap"])(figma.currentPage.selection[0]);
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
    else if (msg.type === "set-layout-grid") {
        Object(_helper_layout_grid__WEBPACK_IMPORTED_MODULE_5__["SetLayoutGrid"])(figma.currentPage.selection, msg);
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
        console.log(node);
        let horizontalPadding = node.horizontalPadding;
        let verticalPadding = node.verticalPadding;
        let itemSpacing = node.itemSpacing;
        let layoutMode = node.layoutMode;
        let type = node.type;
        let layoutGrids = node.layoutGrids;
        let obj = {
            horizontalPadding: horizontalPadding,
            verticalPadding: verticalPadding,
            itemSpacing: itemSpacing,
            layoutMode: layoutMode,
            type: type,
            layoutGrids: layoutGrids,
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

/***/ "./src/helper/layout-grid.ts":
/*!***********************************!*\
  !*** ./src/helper/layout-grid.ts ***!
  \***********************************/
/*! exports provided: SetLayoutGrid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetLayoutGrid", function() { return SetLayoutGrid; });
/* harmony import */ var _theme_styles_LayoutGrids__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../theme-styles/LayoutGrids */ "./src/theme-styles/LayoutGrids.js");

const SetLayoutGrid = (nodes, msg) => {
    // console.log(msg.layoutGridOptions);
    for (const node of nodes) {
        // node.layoutGrids = [];
        const horizontalPaddingSliderValue = msg.layoutGridOptions[0].value;
        const verticalPaddingSliderValue = msg.layoutGridOptions[1].value;
        const showBaselineRows = msg.layoutGridOptions[2].value;
        const showMaxWidth = msg.layoutGridOptions[3].value;
        const showColumns = msg.layoutGridOptions[4].value;
        const showMaxWidthLeftAligned = msg.layoutGridOptions[5].value;
        let allGrids = [];
        let spacingHorizontal = 0;
        let spacingVertical = 0;
        switch (horizontalPaddingSliderValue) {
            default:
                spacingHorizontal = 0;
                break;
            case "0":
                spacingHorizontal = 0;
                break;
            case "1":
                spacingHorizontal = 4;
                break;
            case "2":
                spacingHorizontal = 8;
                break;
            case "3":
                spacingHorizontal = 12;
                break;
            case "4":
                spacingHorizontal = 16;
                break;
            case "5":
                spacingHorizontal = 24;
                break;
            case "6":
                spacingHorizontal = 32;
                break;
            case "7":
                spacingHorizontal = 40;
                break;
            case "8":
                spacingHorizontal = 48;
                break;
        }
        switch (verticalPaddingSliderValue) {
            default:
                spacingVertical = 0;
                break;
            case "0":
                spacingVertical = 0;
                break;
            case "1":
                spacingVertical = 4;
                break;
            case "2":
                spacingVertical = 8;
                break;
            case "3":
                spacingVertical = 12;
                break;
            case "4":
                spacingVertical = 16;
                break;
            case "5":
                spacingVertical = 24;
                break;
            case "6":
                spacingVertical = 32;
                break;
            case "7":
                spacingVertical = 40;
                break;
            case "8":
                spacingVertical = 48;
                break;
        }
        Object(_theme_styles_LayoutGrids__WEBPACK_IMPORTED_MODULE_0__["paddingHorizontal"])(spacingHorizontal).then((val) => {
            if (val.length == 0) {
                // do nothing
            }
            else {
                for (const grid of val) {
                    allGrids.push(grid);
                    // console.log(allGrids);
                    node.layoutGrids = allGrids;
                }
            }
        });
        Object(_theme_styles_LayoutGrids__WEBPACK_IMPORTED_MODULE_0__["paddingVertical"])(spacingVertical).then((val) => {
            if (val.length == 0) {
                // do nothing
            }
            else {
                for (const grid of val) {
                    allGrids.push(grid);
                    // console.log(allGrids);
                    node.layoutGrids = allGrids;
                }
            }
        });
        if (showMaxWidth) {
            for (const grid of _theme_styles_LayoutGrids__WEBPACK_IMPORTED_MODULE_0__["maxWidthGrids"]) {
                // console.log(grid);
                allGrids.push(grid);
                node.layoutGrids = allGrids;
            }
        }
        else {
            node.layoutGrids = allGrids;
        }
        if (showMaxWidthLeftAligned) {
            for (const grid of _theme_styles_LayoutGrids__WEBPACK_IMPORTED_MODULE_0__["maxWidthLeftAlignedGrids"]) {
                allGrids.push(grid);
                node.layoutGrids = allGrids;
            }
        }
        else {
            node.layoutGrids = allGrids;
        }
        if (showColumns) {
            for (const grid of _theme_styles_LayoutGrids__WEBPACK_IMPORTED_MODULE_0__["columnGrids"]) {
                // console.log(grid);
                allGrids.push(grid);
                node.layoutGrids = allGrids;
            }
        }
        else {
            node.layoutGrids = allGrids;
        }
        if (showBaselineRows) {
            // console.log("show");
            allGrids.push(_theme_styles_LayoutGrids__WEBPACK_IMPORTED_MODULE_0__["baselineGrids"]);
            node.layoutGrids = allGrids;
            // console.log(allGrids);
        }
        else {
            node.layoutGrids = allGrids;
            // console.log(allGrids);
        }
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
        let paddingAllRegex = /\b(?:pa-1|pa-2|pa-3|pa-4|pa-5|pa-6|pa-7|pa-none)\b/g;
        let paddingHorizontalRegex = /\b(?:ph-1|ph-2|ph-3|ph-4|ph-5|ph-6|ph-7|ph-none)\b/g;
        let paddingVerticalRegex = /\b(?:pv-1|pv-2|pv-3|pv-4|pv-5|pv-6|pv-7|pv-none)\b/g;
        let itemSpacingAllRegex = /\b(?:sp-1|sp-2|sp-3|sp-4|sp-5|sp-6|sp-7|sp-none)\b/g;
        let autolayoutRegex = /\b(?:vertical|horizontal)\b/g;
        let matchPaddingAll = name.match(paddingAllRegex);
        let matchPaddingHorizontal = name.match(paddingHorizontalRegex);
        let matchPaddingVertical = name.match(paddingVerticalRegex);
        let matchItemSpacing = name.match(itemSpacingAllRegex);
        let matchAutoLayoutDirection = name.match(autolayoutRegex);
        console.log(matchPaddingAll);
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
                case "sp-0":
                    node.itemSpacing = 0;
                    break;
                case "sp-1":
                    node.itemSpacing = 4;
                    break;
                case "sp-2":
                    node.itemSpacing = 8;
                    break;
                case "sp-3":
                    node.itemSpacing = 12;
                    break;
                case "sp-4":
                    node.itemSpacing = 16;
                    break;
                case "sp-5":
                    node.itemSpacing = 24;
                    break;
                case "sp-6":
                    node.itemSpacing = 32;
                    break;
                case "sp-7":
                    node.itemSpacing = 40;
                    break;
                case "sp-8":
                    node.itemSpacing = 48;
                    break;
            }
        }
        if (matchPaddingAll == null) {
            console.log("no");
        }
        else {
            console.log("has padding all");
            switch (matchPaddingAll[0]) {
                case "pa-none":
                    node.horizontalPadding = 0;
                    node.verticalPadding = 0;
                    break;
                case "pa-1":
                    node.horizontalPadding = 4;
                    node.verticalPadding = 4;
                    break;
                case "pa-2":
                    node.horizontalPadding = 8;
                    node.verticalPadding = 8;
                    break;
                case "pa-3":
                    node.horizontalPadding = 12;
                    node.verticalPadding = 12;
                    break;
                case "pa-4":
                    node.horizontalPadding = 16;
                    node.verticalPadding = 16;
                    break;
                case "pa-5":
                    node.horizontalPadding = 24;
                    node.verticalPadding = 24;
                    break;
                case "pa-6":
                    node.horizontalPadding = 32;
                    node.verticalPadding = 32;
                    break;
                case "pa-7":
                    node.horizontalPadding = 40;
                    node.verticalPadding = 40;
                    break;
                case "pa-8":
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
                case "ph-1":
                    node.horizontalPadding = 4;
                    break;
                case "ph-2":
                    node.horizontalPadding = 8;
                    break;
                case "ph-3":
                    node.horizontalPadding = 12;
                    break;
                case "ph-4":
                    node.horizontalPadding = 16;
                    break;
                case "ph-5":
                    node.horizontalPadding = 24;
                    break;
                case "ph-6":
                    node.horizontalPadding = 32;
                    break;
                case "ph-7":
                    node.horizontalPadding = 40;
                    break;
                case "ph-8":
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
                case "pv-1":
                    node.verticalPadding = 4;
                    break;
                case "pv-2":
                    node.verticalPadding = 8;
                    break;
                case "pv-3":
                    node.verticalPadding = 12;
                    break;
                case "pv-4":
                    node.verticalPadding = 16;
                    break;
                case "pv-5":
                    node.verticalPadding = 24;
                    break;
                case "pv-6":
                    node.verticalPadding = 32;
                    break;
                case "pv-7":
                    node.verticalPadding = 40;
                    break;
                case "pv-8":
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
            spacingName = "1";
            break;
        case "2":
            spacing = 8;
            spacingName = "2";
            break;
        case "3":
            spacing = 12;
            spacingName = "3";
            break;
        case "4":
            spacing = 16;
            spacingName = "4";
            break;
        case "5":
            spacing = 24;
            spacingName = "5";
            break;
        case "6":
            spacing = 32;
            spacingName = "6";
            break;
        case "7":
            spacing = 40;
            spacingName = "7";
            break;
        case "8":
            spacing = 48;
            spacingName = "8";
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
            spacingName = "1";
            break;
        case "2":
            spacing = 8;
            spacingName = "2";
            break;
        case "3":
            spacing = 12;
            spacingName = "3";
            break;
        case "4":
            spacing = 16;
            spacingName = "4";
            break;
        case "5":
            spacing = 24;
            spacingName = "5";
            break;
        case "6":
            spacing = 32;
            spacingName = "6";
            break;
        case "7":
            spacing = 40;
            spacingName = "7";
            break;
        case "8":
            spacing = 48;
            spacingName = "8";
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
            spacingName = "1";
            break;
        case "2":
            spacing = 8;
            spacingName = "2";
            break;
        case "3":
            spacing = 12;
            spacingName = "3";
            break;
        case "4":
            spacing = 12;
            spacingName = "4";
            break;
        case "5":
            spacing = 24;
            spacingName = "5";
            break;
        case "6":
            spacing = 32;
            spacingName = "6";
            break;
        case "7":
            spacing = 40;
            spacingName = "7";
            break;
        case "8":
            spacing = 48;
            spacingName = "8";
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
/*! exports provided: ThemeSwap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeSwap", function() { return ThemeSwap; });
/* harmony import */ var _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../theme-styles/colors */ "./src/theme-styles/colors.js");
/* harmony import */ var _theme_styles_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../theme-styles/effects */ "./src/theme-styles/effects.js");


// Fill
const swapFill = async (node, allLightTokens, allDarkTokens) => {
    let hasFillStyle = node.fillStyleId && node.fillStyleId.length > 0;
    if (hasFillStyle) {
        let nodeFillStyleId = node.fillStyleId;
        let nodeFillPaintStyle = figma.getStyleById(nodeFillStyleId);
        let nodeFillPaintName = nodeFillPaintStyle.name;
        let swappedNodeFillName;
        let nodeFillPaintIsLightMode = nodeFillPaintName.includes("light ui");
        if (nodeFillPaintIsLightMode) {
            swappedNodeFillName = nodeFillPaintName.replace("light ui/", "dark ui/");
            let filtered = allDarkTokens.find((item) => item.name === swappedNodeFillName);
            node.fillStyleId = filtered.id;
        }
        else {
            swappedNodeFillName = nodeFillPaintName.replace("dark ui/", "light ui/");
            let filtered = allLightTokens.find((item) => item.name === swappedNodeFillName);
            node.fillStyleId = filtered.id;
        }
    }
    else {
        return;
    }
};
// Strokes
const swapStroke = async (node, allLightTokens, allDarkTokens) => {
    let hasStrokeStyle = node.strokeStyleId && node.strokeStyleId.length > 0;
    if (hasStrokeStyle) {
        let nodeStrokeStyleId = node.strokeStyleId;
        let nodeStrokePaintStyle = figma.getStyleById(nodeStrokeStyleId);
        let nodeStrokePaintName = nodeStrokePaintStyle.name;
        let swappedNodeStrokeName;
        let nodeStrokePaintIsLightMode = nodeStrokePaintName.includes("light ui");
        if (nodeStrokePaintIsLightMode) {
            swappedNodeStrokeName = nodeStrokePaintName.replace("light ui/", "dark ui/");
            let filtered = allDarkTokens.find((item) => item.name === swappedNodeStrokeName);
            node.strokeStyleId = filtered.id;
        }
        else {
            swappedNodeStrokeName = nodeStrokePaintName.replace("dark ui/", "light ui/");
            let filtered = allLightTokens.find((item) => item.name === swappedNodeStrokeName);
            node.strokeStyleId = filtered.id;
        }
    }
    else {
        return;
    }
};
// Effects
const swapEffects = async (node, allLightEffects, allDarkEffects) => {
    let hasEffects = node.effectStyleId && node.effectStyleId.length > 0;
    if (hasEffects) {
        let nodeEffectStyleId = node.effectStyleId;
        let nodeEffectStyle = figma.getStyleById(nodeEffectStyleId);
        let nodeEffectStyleName = nodeEffectStyle.name;
        let swappedNodeEffectName;
        let nodeEffectStyleNameIsLight = nodeEffectStyleName.includes("light ui");
        console.log(swappedNodeEffectName);
        if (nodeEffectStyleNameIsLight) {
            swappedNodeEffectName = nodeEffectStyleName.replace("light ui/", "dark ui/");
            let filtered = allDarkEffects.find((item) => item.name === swappedNodeEffectName);
            console.log(filtered);
            node.effectStyleId = filtered.id;
        }
        else {
            swappedNodeEffectName = nodeEffectStyleName.replace("dark ui/", "light ui/");
            let filtered = allLightEffects.find((item) => item.name === swappedNodeEffectName);
            node.effectStyleId = filtered.id;
        }
    }
    else {
        return;
    }
    // if (nodeEffectStyleNameIsLight) {
    //   swappedNodeEffectName = nodeEffectStyleName.replace(
    //     "light ui/",
    //     "dark ui/"
    //   );
    //   for (const item of DarkUiEffects) {
    //     if (item.name === swappedNodeEffectName) {
    //       figma.importStyleByKeyAsync(item.styleKey).then((resp) => {
    //         node.effectStyleId = resp.id;
    //       });
    //     } else {
    //       // do nothing
    //     }
    //   }
    // } else {
    //   swappedNodeEffectName = nodeEffectStyleName.replace(
    //     "dark ui/",
    //     "light ui/"
    //   );
    //   for (const item of LightUiEffects) {
    //     if (item.name === swappedNodeEffectName) {
    //       figma.importStyleByKeyAsync(item.styleKey).then((resp) => {
    //         node.effectStyleId = resp.id;
    //       });
    //     } else {
    //       // Do nothing
    //     }
    //   }
    // }
};
// Theme Swap
const ThemeSwap = async (node) => {
    // GetAllLocalPaintStyles();
    let allLightTokens = await fetchAllLightTokens();
    let allDarkTokens = await fetchAllDarkTokens();
    let allLightEffects = await fetchAllLightEffects();
    let allDarkEffects = await fetchAllDarkEffects();
    const Swap = (node) => {
        swapFill(node, allLightTokens, allDarkTokens);
        swapStroke(node, allLightTokens, allDarkTokens);
        swapEffects(node, allLightEffects, allDarkEffects);
        if ("children" in node) {
            for (const child of node.children) {
                if (child.locked) {
                }
                else {
                    Swap(child);
                }
            }
        }
        else {
            // do nothing
        }
    };
    Swap(node);
    // swapStroke(node);
    // swapEffects(node);
};

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
        let rgbToInt = (value) => {
            return Math.ceil(value * 255);
        };
        let rgba = {
            r: rgbToInt(colorRGB.r),
            g: rgbToInt(colorRGB.g),
            b: rgbToInt(colorRGB.b),
            a: color.opacity,
        };
        allStylesArray.push({
            name: paintStyle.name,
            styleKey: paintStyle.key,
        });
        console.log(allStylesArray);
    }
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
const fetchAllLightTokens = async () => {
    return Promise.all(_theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["LightUiColors"].map((item) => figma.importStyleByKeyAsync(item.styleKey)));
};
const fetchAllLightEffects = async () => {
    return Promise.all(_theme_styles_effects__WEBPACK_IMPORTED_MODULE_1__["LightUiEffects"].map((item) => figma.importStyleByKeyAsync(item.styleKey)));
};
const fetchAllDarkTokens = async () => {
    return Promise.all(_theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["DarkUiColors"].map((item) => figma.importStyleByKeyAsync(item.styleKey)));
};
const fetchAllDarkEffects = async () => {
    return Promise.all(_theme_styles_effects__WEBPACK_IMPORTED_MODULE_1__["DarkUiEffects"].map((item) => figma.importStyleByKeyAsync(item.styleKey)));
};


/***/ }),

/***/ "./src/theme-styles/LayoutGrids.js":
/*!*****************************************!*\
  !*** ./src/theme-styles/LayoutGrids.js ***!
  \*****************************************/
/*! exports provided: paddingHorizontal, paddingVertical, baselineGrids, maxWidthGrids, maxWidthLeftAlignedGrids, getMaxWidthGrids, columnGrids */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "paddingHorizontal", function() { return paddingHorizontal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "paddingVertical", function() { return paddingVertical; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "baselineGrids", function() { return baselineGrids; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maxWidthGrids", function() { return maxWidthGrids; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maxWidthLeftAlignedGrids", function() { return maxWidthLeftAlignedGrids; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMaxWidthGrids", function() { return getMaxWidthGrids; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "columnGrids", function() { return columnGrids; });
const paddingHorizontal = (spacing) => {
  let grids;

  if (spacing == 0) {
    grids = [];
  } else {
    grids = [
      {
        pattern: "COLUMNS",
        visible: true,
        color: {
          r: 0,
          g: 0.5,
          b: 1,
          a: 0.05,
        },
        gutterSize: 1,
        alignment: "STRETCH",
        count: 1,
        offset: spacing,
      },
      {
        pattern: "COLUMNS",
        visible: true,
        color: {
          r: 0,
          g: 1,
          b: 0,
          a: 0.2,
        },
        gutterSize: 1,
        alignment: "MAX",
        count: 1,
        sectionSize: spacing,
        offset: 0,
      },
      {
        pattern: "COLUMNS",
        visible: true,
        color: {
          r: 0,
          g: 1,
          b: 0,
          a: 0.2,
        },
        gutterSize: 1,
        alignment: "MIN",
        count: 1,
        sectionSize: spacing,
        offset: 0,
      },
    ];
  }

  return new Promise((resolve, reject) => {
    resolve(grids);
  });
};

const paddingVertical = (spacing) => {
  let grids;

  if (spacing == 0) {
    grids = [];
  } else {
    grids = [
      {
        pattern: "ROWS",
        visible: true,
        color: {
          r: 0,
          g: 0.5,
          b: 1,
          a: 0.05,
        },
        gutterSize: 1,
        alignment: "STRETCH",
        count: 1,
        offset: spacing,
      },
      {
        pattern: "ROWS",
        visible: true,
        color: {
          r: 0,
          g: 1,
          b: 0,
          a: 0.2,
        },
        gutterSize: 1,
        alignment: "MAX",
        count: 1,
        sectionSize: spacing,
        offset: 0,
      },
      {
        pattern: "ROWS",
        visible: true,
        color: {
          r: 0,
          g: 1,
          b: 0,
          a: 0.2,
        },
        gutterSize: 1,
        alignment: "MIN",
        count: 1,
        sectionSize: spacing,
        offset: 0,
      },
    ];
  }

  return new Promise((resolve, reject) => {
    resolve(grids);
  });
};

const baselineGrids = {
  pattern: "ROWS",
  visible: true,
  color: {
    r: 1,
    g: 0,
    b: 0,
    a: 0.10000000149011612,
  },
  gutterSize: 4,
  alignment: "MIN",
  count: Infinity,
  sectionSize: 4,
  offset: 0,
};

const maxWidthGrids = [
  {
    pattern: "COLUMNS",
    visible: true,
    color: {
      r: 1,
      g: 0.7199999690055847,
      b: 0,
      a: 0.20000000298023224,
    },
    gutterSize: 1025,
    alignment: "STRETCH",
    count: 2,
    offset: 0,
  },
  {
    pattern: "COLUMNS",
    visible: true,
    color: {
      r: 0,
      g: 0.5,
      b: 1,
      a: 0.1,
    },
    gutterSize: 1,
    alignment: "CENTER",
    count: 1,
    sectionSize: 1025,
  },
];

const maxWidthLeftAlignedGrids = [
  {
    pattern: "COLUMNS",
    visible: true,
    color: {
      r: 0,
      g: 0.5,
      b: 1,
      a: 0.05,
    },
    gutterSize: 1,
    alignment: "MIN",
    count: 1,
    sectionSize: 1025,
    offset: 0,
  },
];

const getMaxWidthGrids = () => {
  return new Promise((resolve, reject) => {
    resolve(maxWidthGrids);
  });
};

const columnGrids = [
  {
    pattern: "COLUMNS",
    visible: true,
    color: {
      r: 0.8299999237060547,
      g: 0,
      b: 1,
      a: 0.1,
    },
    gutterSize: 16,
    alignment: "STRETCH",
    count: 12,
    offset: 0,
  },
];


/***/ }),

/***/ "./src/theme-styles/colors.js":
/*!************************************!*\
  !*** ./src/theme-styles/colors.js ***!
  \************************************/
/*! exports provided: LightUiColors, DarkUiColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LightUiColors", function() { return LightUiColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DarkUiColors", function() { return DarkUiColors; });
const LightUiColors = [
  {
    name: "light ui/intentions/primary.main",
    styleKey: "cf0c8e88eb65b8049feca60ac83e1de3d3ab6e8b",
  },
  {
    name: "light ui/intentions/primary.main.50",
    styleKey: "a3eeebad5f9f037ac93a95c978ac8cc8b7ccfa37",
  },
  {
    name: "light ui/intentions/primary.dark",
    styleKey: "da938698c9d223221d63c7c5501a9057a0d5f6fb",
  },
  {
    name: "light ui/intentions/primary.light",
    styleKey: "0e2abe38c19501bedba067074b9ff59ca3a4914b",
  },
  {
    name: "light ui/intentions/error.main",
    styleKey: "798cb8f898ab2a508a7ba491d899011fda896577",
  },
  {
    name: "light ui/intentions/error.main.50",
    styleKey: "65100902e73192a3054f6abe58a7c4417a063984",
  },
  {
    name: "light ui/intentions/error.dark",
    styleKey: "12776456e68adf4ab5e391797c3c84e92b0f86c2",
  },
  {
    name: "light ui/intentions/error.light",
    styleKey: "d35dabc3ee7f5be18ac0d2aeb74c72baaa8bbca7",
  },
  {
    name: "light ui/intentions/warning.main",
    styleKey: "f27a60df8c162185ea2472a801b271ef662c0429",
  },
  {
    name: "light ui/intentions/warning.main.50",
    styleKey: "d6f094b4aadd33dc6420958297c4b88bc2949135",
  },
  {
    name: "light ui/intentions/warning.dark",
    styleKey: "615d6d5cac4855e981c8b942b986ee705b568b28",
  },
  {
    name: "light ui/intentions/warning.light",
    styleKey: "d4c30135f4c12c7df4442222116a9eb7cebf65be",
  },
  {
    name: "light ui/intentions/success.main",
    styleKey: "e4aa41e8bf52f94ef5fce3669f510af3cb79c5a7",
  },
  {
    name: "light ui/intentions/success.main.50",
    styleKey: "93f8cb0ac5402c9286f20e94a2ea1d0b04a00d9f",
  },
  {
    name: "light ui/intentions/success.dark",
    styleKey: "d9883b53c2539bf1e1068205fe1d059d58315e4f",
  },
  {
    name: "light ui/intentions/success.light",
    styleKey: "527f68ce7ccbad814564f47f88bdeada80775377",
  },
  {
    name: "light ui/typography/text.primary",
    styleKey: "8f05c63de7f100b2bd8fad7b8bd71489b637c067",
  },
  {
    name: "light ui/typography/text.secondary",
    styleKey: "97063a5f62c354e6ae0919d50b68d0badb4a122e",
  },
  {
    name: "light ui/typography/text.disabled",
    styleKey: "a809f75e14fbe6296272e8531106f6cc4c692553",
  },
  {
    name: "light ui/typography/text.contrastText.primary",
    styleKey: "b28a7fcdd247323d7ba99961c9608cf8378bada1",
  },
  {
    name: "light ui/typography/text.contrastText.error",
    styleKey: "c42c5f1990390c413ae62925e9af0d51bf32c945",
  },
  {
    name: "light ui/typography/text.contrastText.warning",
    styleKey: "eecd82ccaae988624c45f28296564037da85cc1a",
  },
  {
    name: "light ui/typography/text.contrastText.success",
    styleKey: "d7dbaef66a932ff276f6f4aa51985a059dedfbf8",
  },
  {
    name: "light ui/typography/text.action.disabled",
    styleKey: "f81a1f7487031698d15c2394e4c74fcc9eccc299",
  },
  {
    name: "light ui/typography/text.contrastText.compliant",
    styleKey: "ca8e869592bd0c3b96806bc1240c5f4bdff38b1d",
  },
  {
    name: "light ui/typography/text.contrastText.nonCompliant",
    styleKey: "6cd62889c6bea67fa6e2f84fa5814f1f217de3b8",
  },
  {
    name: "light ui/typography/text.contrastText.missed",
    styleKey: "72d59c899182b464713078ae8cbca6c7c45917c7",
  },
  {
    name: "light ui/typography/text.contrastText.premium",
    styleKey: "1f0638ad6772a5b5055b22582ca4e7cfcf400869",
  },
  {
    name: "light ui/typography/text.contrastText.message",
    styleKey: "83be2d1d6f50b396264710e07be1001867e49825",
  },
  {
    name: "light ui/buttons/action.disabledBackground",
    styleKey: "73b15e3a79eeea757283a44cf71131305cba2399",
  },
  {
    name: "light ui/background/background.paper",
    styleKey: "23e94fceed9accbda4db9c672c43d21b4d286e4c",
  },
  {
    name: "light ui/background/background.default",
    styleKey: "903e5bf274139eeb9f4968a9ef08ec05eaf0b274",
  },
  {
    name: "light ui/utility/divider",
    styleKey: "ee4ddce2e56ad47c4216d5827a283b943a794c78",
  },
  {
    name: "light ui/utility/divider.strong",
    styleKey: "17adbe4e27ba9b087f61af142deeb07fc0c01540",
  },
  {
    name: "light ui/utility/overlay",
    styleKey: "11a4778018c8bb236abe0d847c731a217e2d6d48",
  },
  {
    name: "light ui/4DP/NM",
    styleKey: "ddcbf68fa5c1eaa72077164272b7ae5b9e5e4ed7",
  },
  {
    name: "light ui/4DP/AC",
    styleKey: "220d3493747cd8d8bdc5d4a0e7965c36a3c52349",
  },
  {
    name: "light ui/4DP/MAP",
    styleKey: "aaa3a531a124fa854e09d398f98fb47b989a8a72",
  },
  {
    name: "light ui/4DP/FTP",
    styleKey: "224e4912027be9f75685fd40b2528ba9f34fe958",
  },
  {
    name: "light ui/data/power",
    styleKey: "07834e0145e1c01546593462006128fa6a51d6ac",
  },
  {
    name: "light ui/data/heart rate",
    styleKey: "5a33b8b4a05f18996035425e2ba6af81791211cd",
  },
  {
    name: "light ui/data/cadence",
    styleKey: "7d28be638709626b59f280208696fb8130624c0a",
  },
  {
    name: "light ui/data/speed",
    styleKey: "e9eaf6b844fd1f6f17d6cb3e8e84b19ec5097adc",
  },
  {
    name: "light ui/compliance/compliant",
    styleKey: "b5807b72ac4c76852140a9ca68b4698567053f11",
  },
  {
    name: "light ui/compliance/nonCompliant",
    styleKey: "8f9d1bf5b0d1ce3753b10e8cde620aeb6ccaff11",
  },
  {
    name: "light ui/compliance/missed",
    styleKey: "d44465ff68b5fed196d2170570d7285f52015b26",
  },
  {
    name: "light ui/compliance/unpaired",
    styleKey: "18a773bd3c236db6f7656d0683bbde8b4adcef26",
  },
  {
    name: "light ui/compliance/scheduled",
    styleKey: "6da88c50bdb2c4a6cde8acdceb4d94f7e935dcd0",
  },
  {
    name: "light ui/interaction/intentions/primary.main.hover",
    styleKey: "3144a9afb54196558c530ab736aac11421fc4254",
  },
  {
    name: "light ui/interaction/intentions/primary.main.pressed",
    styleKey: "4ebe0e209e36b5b5bfce04152e9f14928542badb",
  },
  {
    name: "light ui/interaction/intentions/error.main.hover",
    styleKey: "da51ad237fb19b106b88f5a29d98937addc3a0b0",
  },
  {
    name: "light ui/interaction/intentions/error.main.pressed",
    styleKey: "78fbb981e2e5e8b37fd3e6ce2a9e5a88b924ed78",
  },
  {
    name: "light ui/interaction/intentions/warning.main.hover",
    styleKey: "a682cb733cde42333d907e7a4b0ac9ce8ef22642",
  },
  {
    name: "light ui/interaction/intentions/warning.main.pressed",
    styleKey: "f211b80adb679bc1b20860b7529f904f30982780",
  },
  {
    name: "light ui/interaction/intentions/success.main.hover",
    styleKey: "3ba1bae3cc01fb24f53a4186ae3459a77494fe6a",
  },
  {
    name: "light ui/interaction/intentions/success.main.pressed",
    styleKey: "7c6bcfd1da9fbbf6c5e2bded6958c70ef5af8d0f",
  },
  {
    name: "light ui/interaction/background/default.hover",
    styleKey: "764e581598dde2af35446081fc23beaf1d7d42e1",
  },
  {
    name: "light ui/interaction/background/default.pressed",
    styleKey: "50a73ebcb0612ad5d172beab2279c9d5330bc10a",
  },
  {
    name: "light ui/interaction/background/paper.hover",
    styleKey: "22e3d02d5f8b1d92bea3ca0ccaedebc834d74d84",
  },
  {
    name: "light ui/interaction/background/paper.pressed",
    styleKey: "c4cfe1f373043ecb0fcaccbf2280964b53237b00",
  },
  {
    name: "light ui/interaction/special use/premium.hover",
    styleKey: "9a612a7f99acaeaa882508b2546ce16ba0e2dfef",
  },
  {
    name: "light ui/interaction/special use/premium.pressed",
    styleKey: "f5c24f44ad40b90bfe1a42faf1943ac1a0ba0ee1",
  },
  {
    name: "light ui/special use/premium",
    styleKey: "78cf4018e5bc9fad67698c9a9a3c65fde8f127f6",
  },
  {
    name: "light ui/special use/message",
    styleKey: "c85a9b846349a3a7d3eed358acbc32c2715c982d",
  },
];

const DarkUiColors = [
  {
    name: "dark ui/intentions/primary.main",
    styleKey: "2b792d84c9ddb5bb54b4e7ce000c595c79d748ca",
  },
  {
    name: "dark ui/intentions/primary.main.50",
    styleKey: "b371aab74522b01ab0ba870a9e26c3b7e6e48287",
  },
  {
    name: "dark ui/intentions/primary.dark",
    styleKey: "b43bd111250ce74d48cfd71ac00c1c1b558b02f0",
  },
  {
    name: "dark ui/intentions/primary.light",
    styleKey: "f377e775c84f27825f8ac801e78d8708c05f8df1",
  },
  {
    name: "dark ui/intentions/error.main",
    styleKey: "767c2a9897062dee0d0f6300406f6e5585f684c7",
  },
  {
    name: "dark ui/intentions/error.main.50",
    styleKey: "76d68c9737130b313dfe6d6e18202e56dbfcdf0b",
  },
  {
    name: "dark ui/intentions/error.dark",
    styleKey: "34a9a344c25416d1a7ea6d6732db13e7bc6cc397",
  },
  {
    name: "dark ui/intentions/error.light",
    styleKey: "957620e54d15afce55314ca589c7a1e93435a201",
  },
  {
    name: "dark ui/intentions/warning.main",
    styleKey: "894fbd335d8b0f6b1cee4ec5ac7a0479397a6b4c",
  },
  {
    name: "dark ui/intentions/warning.main.50",
    styleKey: "7e5c98270ac8d6d04d8b613e829e9e707fe42316",
  },
  {
    name: "dark ui/intentions/warning.dark",
    styleKey: "44b42a85052841387bc677c5719874cf0207cab5",
  },
  {
    name: "dark ui/intentions/warning.light",
    styleKey: "acc88b7919792a2132c35ded6004d1df03ea7bbb",
  },
  {
    name: "dark ui/intentions/success.main",
    styleKey: "2d44f3a0c60878cef5dbd10c59a417aa90c0c1bf",
  },
  {
    name: "dark ui/intentions/success.main.50",
    styleKey: "f814cbc5b3630a5e22c950566ae462723a84dc58",
  },
  {
    name: "dark ui/intentions/success.dark",
    styleKey: "43222791f7d5afde8b84bdb7a7c75a6a8cc9d334",
  },
  {
    name: "dark ui/intentions/success.light",
    styleKey: "5363c170923adfe09332c2ab95f46856fd56b72e",
  },
  {
    name: "dark ui/typography/text.primary",
    styleKey: "3fdbd43dd2463c64b94e0b81a916a606c08b0f1c",
  },
  {
    name: "dark ui/typography/text.secondary",
    styleKey: "9d2e511d9a31ebd76e302ab25d1e995e6a83ac1c",
  },
  {
    name: "dark ui/typography/text.disabled",
    styleKey: "c98883e07be80be6bcd18814eb29a87797a99c6a",
  },
  {
    name: "dark ui/typography/text.contrastText.primary",
    styleKey: "5b622d9b5f16ff471b666ee8d95a35eb5e7e464b",
  },
  {
    name: "dark ui/typography/text.contrastText.error",
    styleKey: "ac36b60a67f36ed8070caaedd0456012a10c22d6",
  },
  {
    name: "dark ui/typography/text.contrastText.warning",
    styleKey: "59c9bf2a4d6c04fd93c1b9abcc4cf501fcadbb22",
  },
  {
    name: "dark ui/typography/text.contrastText.success",
    styleKey: "1972dc001d31dec326c8e937f8302ee35fbb853f",
  },
  {
    name: "dark ui/typography/text.action.disabled",
    styleKey: "7f7a4ee1fbcb6529e6fb564a0f488188b0dc2b37",
  },
  {
    name: "dark ui/typography/text.contrastText.compliant",
    styleKey: "bfb1ca68ae0a73a054390b6af0a56c91271b8852",
  },
  {
    name: "dark ui/typography/text.contrastText.nonCompliant",
    styleKey: "c2cd21f55e232e72655a27dcf5de06d0da44bf4e",
  },
  {
    name: "dark ui/typography/text.contrastText.missed",
    styleKey: "7b5f8d319715104bb3d4a107788ec5bfa6ea31d4",
  },
  {
    name: "dark ui/typography/text.contrastText.premium",
    styleKey: "9911089620bad2ac7f7d95e956d99e4936bbcaf8",
  },
  {
    name: "dark ui/typography/text.contrastText.message",
    styleKey: "d098a757f54437897865872a16ffeb9b99ab95ae",
  },
  {
    name: "dark ui/buttons/action.disabledBackground",
    styleKey: "214ac4df796b51c0f426028d0f4268efa6ee3685",
  },
  {
    name: "dark ui/background/background.paper",
    styleKey: "2f060e7422a8ad17a037a250d368cf671adc0468",
  },
  {
    name: "dark ui/background/background.default",
    styleKey: "15f5ffac3ec91b24089813439ffadd1f9994b29c",
  },
  {
    name: "dark ui/utility/divider",
    styleKey: "84ab0f298ea8fcd0b82ac89298ad51140ca7b75a",
  },
  {
    name: "dark ui/utility/divider.strong",
    styleKey: "e9360a13f84514ee4b3977d4b6949f9bab63cb4f",
  },
  {
    name: "dark ui/utility/overlay",
    styleKey: "2b3836ded382e33a9704ef0f2f6b16fbfba2d3ce",
  },
  {
    name: "dark ui/4DP/NM",
    styleKey: "82d50f3011d815902ed430df6d7345ecdf94761b",
  },
  {
    name: "dark ui/4DP/AC",
    styleKey: "e8193abfd2f715e48b9cc7ce4bc6b95c897aa04d",
  },
  {
    name: "dark ui/4DP/MAP",
    styleKey: "df57febc8ef77dd2c35be2d1b940afb8331668b4",
  },
  {
    name: "dark ui/4DP/FTP",
    styleKey: "7bb028ff7d873486678b7c6764fc50f39e571eb6",
  },
  {
    name: "dark ui/data/power",
    styleKey: "73d228b465788c8ef2d16b9991512cb72c014043",
  },
  {
    name: "dark ui/data/heart rate",
    styleKey: "c3f3d0917340d9cb12db3448c267ac55da63d715",
  },
  {
    name: "dark ui/data/cadence",
    styleKey: "2fa915b2945e8a76a71438681137d28c61fe4214",
  },
  {
    name: "dark ui/data/speed",
    styleKey: "b979fcb104c296f78f40b63a9e74be17e2bbba53",
  },
  {
    name: "dark ui/compliance/compliant",
    styleKey: "8091e7ec107056784644628db1736bcfac62fed1",
  },
  {
    name: "dark ui/compliance/nonCompliant",
    styleKey: "14ec4bdb4c4b698cfb7c548f7382b748e25020d2",
  },
  {
    name: "dark ui/compliance/missed",
    styleKey: "65795aaeadace278c5f8600c30322b927136c023",
  },
  {
    name: "dark ui/compliance/unpaired",
    styleKey: "2b3b297aef3975cf56b90ecbad30f9551cb8b54c",
  },
  {
    name: "dark ui/compliance/scheduled",
    styleKey: "bcc3269ebb317ebd45d494dfdce89cb92cc8caf4",
  },
  {
    name: "dark ui/interaction/intentions/primary.main.hover",
    styleKey: "99687d1365def72e70d41b03e536f70c1d33d956",
  },
  {
    name: "dark ui/interaction/intentions/primary.main.pressed",
    styleKey: "dab9928da4b1a98b5e435611f01b34bc51fec18a",
  },
  {
    name: "dark ui/interaction/intentions/error.main.hover",
    styleKey: "4bf67774e600f12a09a810dd3dd4133634d1af92",
  },
  {
    name: "dark ui/interaction/intentions/error.main.pressed",
    styleKey: "112dda92cd515c320ed92cf23c5bda582e3b19c1",
  },
  {
    name: "dark ui/interaction/intentions/warning.main.pressed",
    styleKey: "8a666ecef0121d5479e8cf107e697d3e76d3fe6d",
  },
  {
    name: "dark ui/interaction/intentions/warning.main.hover",
    styleKey: "d33407d6805f3dbabf34b97878e942e10582fcea",
  },
  {
    name: "dark ui/interaction/intentions/success.main.hover",
    styleKey: "a4f1ba66f12a699f4c68acdbea7fd0a9613a45de",
  },
  {
    name: "dark ui/interaction/intentions/success.main.pressed",
    styleKey: "0062d53341773222ffd614eab148e529219579f2",
  },
  {
    name: "dark ui/interaction/background/default.hover",
    styleKey: "d751009f68affab8e170a7d4001356b1772f0e50",
  },
  {
    name: "dark ui/interaction/background/default.pressed",
    styleKey: "cd047796e952873d8fc8998586c130e416d30631",
  },
  {
    name: "dark ui/interaction/background/paper.hover",
    styleKey: "b330badc6cea02b9012a3f581df6f00f1ff48777",
  },
  {
    name: "dark ui/interaction/background/paper.pressed",
    styleKey: "65c58c7b03a8381a12983bcd0adea1ee184613a0",
  },
  {
    name: "dark ui/interaction/special use/premium.hover",
    styleKey: "48c8bc314df223e1a8de4e10d0099cd971093d1a",
  },
  {
    name: "dark ui/interaction/special use/premium.pressed",
    styleKey: "5def46e9e443aa9adda425be14ca4aaab1fcd109",
  },
  {
    name: "dark ui/special use/premium",
    styleKey: "3f8d2d81a0abb5bc0b8a4d5212f48c113a98f10e",
  },
  {
    name: "dark ui/special use/message",
    styleKey: "9b62610976846cb3933d20dd52ff668454678af7",
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
    name: "light ui/shadow/elevation 4",
    styleKey: "69202fa8cc4f6cc0515cc08fdcc988459af28731",
  },
  {
    name: "light ui/shadow/elevation 9",
    styleKey: "8ccea9d523cf9dc13fee68f392f3f9cc3187a457",
  },
  {
    name: "light ui/shadow/elevation 14",
    styleKey: "c61253c38f6d0d9f3b302a77a3807e052e9c3f91",
  },
  {
    name: "light ui/focus",
    styleKey: "f9d539f6702b711166b89743e597101be6153b9c",
  },
];

const DarkUiEffects = [
  {
    name: "dark ui/shadow/elevation 4",
    styleKey: "a89abbe6d64f824f62ebb1f54f6f28a910490195",
  },
  {
    name: "dark ui/shadow/elevation 9",
    styleKey: "98761904bcc9d38c81ee23e7b432d8c97e29f0c1",
  },
  {
    name: "dark ui/shadow/elevation 14",
    styleKey: "209b451e4f68f5bf3ade24ef36a10a609cdae239",
  },
  {
    name: "dark ui/focus",
    styleKey: "92cbe36d4480efe4b9618ec6ec1a4449241fbdd6",
  },
];


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvZGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlci9jYWxsYmFjay50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVyL2NvbG9yLWNoZWNrLnRzIiwid2VicGFjazovLy8uL3NyYy9oZWxwZXIvZm9yY2UtYXV0by1sYXlvdXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlci9sYXlvdXQtZ3JpZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVyL3NwYWNpbmctY2hlY2sudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlci9zcGFjaW5nLXNsaWRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVyL3RoZW1lLXN3YXAudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RoZW1lLXN0eWxlcy9MYXlvdXRHcmlkcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGhlbWUtc3R5bGVzL2NvbG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGhlbWUtc3R5bGVzL2VmZmVjdHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsaUJBQWlCO0FBQ29CO0FBQ2M7QUFDSjtBQUN1QztBQUNNO0FBQ2xEO0FBQ0M7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksMEVBQWlCO0FBQ3JCLENBQUM7QUFDRDtBQUNBO0FBQ0EsUUFBUSxvRUFBUztBQUNqQjtBQUNBO0FBQ0EsUUFBUSw4RUFBa0I7QUFDMUI7QUFDQTtBQUNBLFFBQVEsa0ZBQW9CO0FBQzVCO0FBQ0E7QUFDQSxRQUFRLHNGQUF1QjtBQUMvQjtBQUNBO0FBQ0EsUUFBUSxvRkFBcUI7QUFDN0I7QUFDQTtBQUNBLFFBQVEsMEVBQVc7QUFDbkI7QUFDQTtBQUNBLFFBQVEsMkZBQXlCO0FBQ2pDO0FBQ0E7QUFDQSxRQUFRLHlGQUF1QjtBQUMvQjtBQUNBO0FBQ0EsUUFBUSx5RUFBYTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDdERBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDNkI7Ozs7Ozs7Ozs7Ozs7QUN4QjdCO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixtQkFBbUI7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsS0FBTztBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLG1CQUFtQjtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLG1CQUFtQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLGVBQWU7QUFDbEQ7QUFDQTtBQUNBLHFEQUFxRCxlQUFlO0FBQ3BFO0FBQ0E7QUFDOEI7Ozs7Ozs7Ozs7Ozs7QUM3SDlCO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzhEOzs7Ozs7Ozs7Ozs7O0FDVjlEO0FBQUE7QUFBQTtBQUF1SjtBQUN2SjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxtRkFBaUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsUUFBUSxpRkFBZTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLCtCQUErQix1RUFBYTtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0Isa0ZBQXdCO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IscUVBQVc7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsdUVBQWE7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ3lCOzs7Ozs7Ozs7Ozs7O0FDL0l6QjtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ2dDOzs7Ozs7Ozs7Ozs7O0FDekxoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixvQ0FBb0M7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixrQ0FBa0M7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsaUNBQWlDO0FBQ3JEO0FBQ0E7QUFDdUU7Ozs7Ozs7Ozs7Ozs7QUNoTXZFO0FBQUE7QUFBQTtBQUFBO0FBQXFFO0FBQ0c7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2QsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsb0RBQW9EO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGtFQUFhO0FBQ3BDO0FBQ0E7QUFDQSx1QkFBdUIsb0VBQWM7QUFDckM7QUFDQTtBQUNBLHVCQUF1QixpRUFBWTtBQUNuQztBQUNBO0FBQ0EsdUJBQXVCLG1FQUFhO0FBQ3BDOzs7Ozs7Ozs7Ozs7O0FDdExBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBTztBQUNQOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRU87QUFDUDtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7OztBQzVNQTtBQUFBO0FBQUE7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7OztBQ3BnQkE7QUFBQTtBQUFBO0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0giLCJmaWxlIjoiY29kZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2NvZGUudHNcIik7XG4iLCIvLyBUaGlzIHBsdWdpbiB3aWxsIG9wZW4gYSBtb2RhbCB0byBwcm9tcHQgdGhlIHVzZXIgdG8gZW50ZXIgYSBudW1iZXIsIGFuZFxuLy8gaXQgd2lsbCB0aGVuIGNyZWF0ZSB0aGF0IG1hbnkgcmVjdGFuZ2xlcyBvbiB0aGUgc2NyZWVuLlxuLy8gVGhpcyBmaWxlIGhvbGRzIHRoZSBtYWluIGNvZGUgZm9yIHRoZSBwbHVnaW5zLiBJdCBoYXMgYWNjZXNzIHRvIHRoZSAqZG9jdW1lbnQqLlxuLy8gWW91IGNhbiBhY2Nlc3MgYnJvd3NlciBBUElzIGluIHRoZSA8c2NyaXB0PiB0YWcgaW5zaWRlIFwidWkuaHRtbFwiIHdoaWNoIGhhcyBhXG4vLyBmdWxsIGJyb3dzZXIgZW52aXJvbWVudCAoc2VlIGRvY3VtZW50YXRpb24pLlxuLy8gaW1wb3J0IHsgU3BhY2luZ0RlZmF1bHQgfSBmcm9tIFwiLi9oZWxwZXIvc3BhY2luZy1kZWZhdWx0XCI7XG5pbXBvcnQgeyBUaGVtZVN3YXAgfSBmcm9tIFwiLi9oZWxwZXIvdGhlbWUtc3dhcFwiO1xuaW1wb3J0IHsgU3BhY2luZ0NoZWNrVHJhdmVyc2UgfSBmcm9tIFwiLi9oZWxwZXIvc3BhY2luZy1jaGVja1wiO1xuaW1wb3J0IHsgQ29sb3JDaGVja1RyYXZlcnNlIH0gZnJvbSBcIi4vaGVscGVyL2NvbG9yLWNoZWNrXCI7XG5pbXBvcnQgeyBGb3JjZUF1dG9MYXlvdXRIb3Jpem9udGFsLCBGb3JjZUF1dG9MYXlvdXRWZXJ0aWNhbCwgfSBmcm9tIFwiLi9oZWxwZXIvZm9yY2UtYXV0by1sYXlvdXRcIjtcbmltcG9ydCB7IFBhZGRpbmdIb3Jpem9udGFsU2xpZGVyLCBQYWRkaW5nVmVydGljYWxTbGlkZXIsIEl0ZW1TcGFjaW5nLCB9IGZyb20gXCIuL2hlbHBlci9zcGFjaW5nLXNsaWRlclwiO1xuaW1wb3J0IHsgU2V0TGF5b3V0R3JpZCB9IGZyb20gXCIuL2hlbHBlci9sYXlvdXQtZ3JpZFwiO1xuaW1wb3J0IHsgb25TZWxlY3Rpb25DaGFuZ2UgfSBmcm9tIFwiLi9oZWxwZXIvY2FsbGJhY2tcIjtcbi8vIFRoaXMgc2hvd3MgdGhlIEhUTUwgcGFnZSBpbiBcInVpLmh0bWxcIi5cbmZpZ21hLnNob3dVSShfX2h0bWxfXyk7XG4vLyBDYWxscyB0byBcInBhcmVudC5wb3N0TWVzc2FnZVwiIGZyb20gd2l0aGluIHRoZSBIVE1MIHBhZ2Ugd2lsbCB0cmlnZ2VyIHRoaXNcbi8vIGNhbGxiYWNrLiBUaGUgY2FsbGJhY2sgd2lsbCBiZSBwYXNzZWQgdGhlIFwicGx1Z2luTWVzc2FnZVwiIHByb3BlcnR5IG9mIHRoZVxuLy8gcG9zdGVkIG1lc3NhZ2UuXG5maWdtYS51aS5yZXNpemUoMjgwLCA1NjApO1xuZmlnbWEub24oXCJzZWxlY3Rpb25jaGFuZ2VcIiwgKCkgPT4ge1xuICAgIGxldCB0aGlzU2VsZWN0aW9uID0gZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uWzBdO1xuICAgIG9uU2VsZWN0aW9uQ2hhbmdlKHRoaXNTZWxlY3Rpb24pO1xufSk7XG5maWdtYS51aS5vbm1lc3NhZ2UgPSAobXNnKSA9PiB7XG4gICAgaWYgKG1zZy50eXBlID09PSBcInN3YXAtdGhlbWVcIikge1xuICAgICAgICBUaGVtZVN3YXAoZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uWzBdKTtcbiAgICB9XG4gICAgZWxzZSBpZiAobXNnLnR5cGUgPT09IFwiY29sb3ItY2hlY2tlclwiKSB7XG4gICAgICAgIENvbG9yQ2hlY2tUcmF2ZXJzZShmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb25bMF0pO1xuICAgIH1cbiAgICBlbHNlIGlmIChtc2cudHlwZSA9PT0gXCJzcGFjaW5nLWNoZWNrZXJcIikge1xuICAgICAgICBTcGFjaW5nQ2hlY2tUcmF2ZXJzZShmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb24pO1xuICAgIH1cbiAgICBlbHNlIGlmIChtc2cudHlwZSA9PT0gXCJwYWRkaW5nLWhvcml6b250YWwtc2xpZGVyXCIpIHtcbiAgICAgICAgUGFkZGluZ0hvcml6b250YWxTbGlkZXIoZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uLCBtc2cpO1xuICAgIH1cbiAgICBlbHNlIGlmIChtc2cudHlwZSA9PT0gXCJwYWRkaW5nLXZlcnRpY2FsLXNsaWRlclwiKSB7XG4gICAgICAgIFBhZGRpbmdWZXJ0aWNhbFNsaWRlcihmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb24sIG1zZyk7XG4gICAgfVxuICAgIGVsc2UgaWYgKG1zZy50eXBlID09PSBcIml0ZW0tc3BhY2luZy1zbGlkZXJcIikge1xuICAgICAgICBJdGVtU3BhY2luZyhmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb24sIG1zZyk7XG4gICAgfVxuICAgIGVsc2UgaWYgKG1zZy50eXBlID09PSBcImZvcmNlLWF1dG8tbGF5b3V0LWhvcml6b250YWxcIikge1xuICAgICAgICBGb3JjZUF1dG9MYXlvdXRIb3Jpem9udGFsKGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbik7XG4gICAgfVxuICAgIGVsc2UgaWYgKG1zZy50eXBlID09PSBcImZvcmNlLWF1dG8tbGF5b3V0LXZlcnRpY2FsXCIpIHtcbiAgICAgICAgRm9yY2VBdXRvTGF5b3V0VmVydGljYWwoZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uKTtcbiAgICB9XG4gICAgZWxzZSBpZiAobXNnLnR5cGUgPT09IFwic2V0LWxheW91dC1ncmlkXCIpIHtcbiAgICAgICAgU2V0TGF5b3V0R3JpZChmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb24sIG1zZyk7XG4gICAgfVxuICAgIC8vIE1ha2Ugc3VyZSB0byBjbG9zZSB0aGUgcGx1Z2luIHdoZW4geW91J3JlIGRvbmUuIE90aGVyd2lzZSB0aGUgcGx1Z2luIHdpbGxcbiAgICAvLyBrZWVwIHJ1bm5pbmcsIHdoaWNoIHNob3dzIHRoZSBjYW5jZWwgYnV0dG9uIGF0IHRoZSBib3R0b20gb2YgdGhlIHNjcmVlbi5cbiAgICAvLyBmaWdtYS5jbG9zZVBsdWdpbigpO1xufTtcbiIsImNvbnN0IG9uU2VsZWN0aW9uQ2hhbmdlID0gKG5vZGUpID0+IHtcbiAgICBpZiAobm9kZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhub2RlKTtcbiAgICAgICAgbGV0IGhvcml6b250YWxQYWRkaW5nID0gbm9kZS5ob3Jpem9udGFsUGFkZGluZztcbiAgICAgICAgbGV0IHZlcnRpY2FsUGFkZGluZyA9IG5vZGUudmVydGljYWxQYWRkaW5nO1xuICAgICAgICBsZXQgaXRlbVNwYWNpbmcgPSBub2RlLml0ZW1TcGFjaW5nO1xuICAgICAgICBsZXQgbGF5b3V0TW9kZSA9IG5vZGUubGF5b3V0TW9kZTtcbiAgICAgICAgbGV0IHR5cGUgPSBub2RlLnR5cGU7XG4gICAgICAgIGxldCBsYXlvdXRHcmlkcyA9IG5vZGUubGF5b3V0R3JpZHM7XG4gICAgICAgIGxldCBvYmogPSB7XG4gICAgICAgICAgICBob3Jpem9udGFsUGFkZGluZzogaG9yaXpvbnRhbFBhZGRpbmcsXG4gICAgICAgICAgICB2ZXJ0aWNhbFBhZGRpbmc6IHZlcnRpY2FsUGFkZGluZyxcbiAgICAgICAgICAgIGl0ZW1TcGFjaW5nOiBpdGVtU3BhY2luZyxcbiAgICAgICAgICAgIGxheW91dE1vZGU6IGxheW91dE1vZGUsXG4gICAgICAgICAgICB0eXBlOiB0eXBlLFxuICAgICAgICAgICAgbGF5b3V0R3JpZHM6IGxheW91dEdyaWRzLFxuICAgICAgICB9O1xuICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZShvYmopO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJub1wiKTtcbiAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2UoXCJub3RoaW5nIHNlbGVjdGVkXCIpO1xuICAgIH1cbn07XG5leHBvcnQgeyBvblNlbGVjdGlvbkNoYW5nZSB9O1xuIiwiZnVuY3Rpb24gY2xvbmUodmFsKSB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodmFsKSk7XG59XG4vLyBDaGVjayBvYmplY3QgZXF1YWxpdHkgaGVscGVyXG5mdW5jdGlvbiBpc0VxdWl2YWxlbnQoYSwgYikge1xuICAgIC8vIENyZWF0ZSBhcnJheXMgb2YgcHJvcGVydHkgbmFtZXNcbiAgICB2YXIgYVByb3BzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoYSk7XG4gICAgdmFyIGJQcm9wcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGIpO1xuICAgIC8vIElmIG51bWJlciBvZiBwcm9wZXJ0aWVzIGlzIGRpZmZlcmVudCxcbiAgICAvLyBvYmplY3RzIGFyZSBub3QgZXF1aXZhbGVudFxuICAgIGlmIChhUHJvcHMubGVuZ3RoICE9IGJQcm9wcy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFQcm9wcy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgcHJvcE5hbWUgPSBhUHJvcHNbaV07XG4gICAgICAgIC8vIElmIHZhbHVlcyBvZiBzYW1lIHByb3BlcnR5IGFyZSBub3QgZXF1YWwsXG4gICAgICAgIC8vIG9iamVjdHMgYXJlIG5vdCBlcXVpdmFsZW50XG4gICAgICAgIGlmIChhW3Byb3BOYW1lXSAhPT0gYltwcm9wTmFtZV0pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBJZiB3ZSBtYWRlIGl0IHRoaXMgZmFyLCBvYmplY3RzXG4gICAgLy8gYXJlIGNvbnNpZGVyZWQgZXF1aXZhbGVudFxuICAgIHJldHVybiB0cnVlO1xufVxuY29uc3QgQ29sb3JDaGVja1RyYXZlcnNlID0gKG5vZGUpID0+IHtcbiAgICBsZXQgc3RyYXlGaWxsID0gMDtcbiAgICBsZXQgc3RyYXlTdHJva2UgPSAwO1xuICAgIGlmIChcImZpbGxzXCIgJiYgXCJzdHJva2VzXCIgaW4gbm9kZSkge1xuICAgICAgICAvLyBGaWx0ZXIgd2FybmluZyBzdHJva2UgZnVuY3Rpb25cbiAgICAgICAgbGV0IGZpbHRlcldhcm5pbmdTdHJva2UgPSBmdW5jdGlvbiAoc3Ryb2tlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImNsZWFyIG91dFwiKTtcbiAgICAgICAgICAgIGlmIChzdHJva2UudHlwZSA9PSBcIlNPTElEXCIgJiZcbiAgICAgICAgICAgICAgICBpc0VxdWl2YWxlbnQoc3Ryb2tlLmNvbG9yLCB7IHI6IDEsIGc6IDAsIGI6IDAgfSkpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInllc1wiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIm5vXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBsZXQgb2xkU3Ryb2tlcyA9IGNsb25lKG5vZGUuc3Ryb2tlcyk7XG4gICAgICAgIGxldCBuZXdTdHJva2VzID0gb2xkU3Ryb2tlcy5maWx0ZXIoZmlsdGVyV2FybmluZ1N0cm9rZSk7XG4gICAgICAgIGlmIChub2RlLnN0cm9rZVN0eWxlSWQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgLy8gZG8gbm90aGluZ1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbm9kZS5zdHJva2VzID0gbmV3U3Ryb2tlcztcbiAgICAgICAgfVxuICAgICAgICAvLyAvLyBBZGQgd2FybmluZyBzdHJva2UgZnVuY3Rpb25cbiAgICAgICAgbGV0IGFkZFdhcm5pbmdTdHJva2UgPSBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgbGV0IHN0cm9rZXMgPSBjbG9uZShub2RlLnN0cm9rZXMpO1xuICAgICAgICAgICAgbGV0IHdhcm5pbmdTdHJva2VQcm9wZXJ0eSA9IHtcbiAgICAgICAgICAgICAgICBjb2xvcjogeyByOiAxLCBnOiAwLCBiOiAwIH0sXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICAgICAgICB0eXBlOiBcIlNPTElEXCIsXG4gICAgICAgICAgICAgICAgYmxlbmRNb2RlOiBcIk5PUk1BTFwiLFxuICAgICAgICAgICAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgc3Ryb2tlcy5wdXNoKHdhcm5pbmdTdHJva2VQcm9wZXJ0eSk7XG4gICAgICAgICAgICBub2RlLnN0cm9rZXMgPSBzdHJva2VzO1xuICAgICAgICAgICAgLy8gbm9kZS5zdHJva2VBbGlnbiA9IFwiT1VUU0lERVwiO1xuICAgICAgICB9O1xuICAgICAgICAvLyBDaGVjayBGaWxsXG4gICAgICAgIGNvbnN0IGhhc0ltYWdlID0gKGZpbGwpID0+IGZpbGwudHlwZSA9PT0gXCJJTUFHRVwiO1xuICAgICAgICBpZiAobm9kZS5maWxscy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAvLyBpZiAobm9kZS5maWxscy5zb21lKGhhc0ltYWdlKSkge1xuICAgICAgICAgICAgLy8gICBjb25zb2xlLmxvZyhcImZpbGwgaXMgaW1hZ2VcIik7XG4gICAgICAgICAgICAvLyB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gICBjb25zb2xlLmxvZyhcImZpbGwgaXMgTk9UIGltYWdlXCIpO1xuICAgICAgICAgICAgLy8gICAvLyBub3RoaW5nXG4gICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICBpZiAobm9kZS5maWxsU3R5bGVJZC5sZW5ndGggPiAwIHx8IG5vZGUuZmlsbHMuc29tZShoYXNJbWFnZSkpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuKchSBHb29kIGZpbGxcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuKdjCBCYWQgZmlsbFwiKTtcbiAgICAgICAgICAgICAgICAvLyBBZGQgd2FybmluZyBzdHJva2VcbiAgICAgICAgICAgICAgICBhZGRXYXJuaW5nU3Ryb2tlKG5vZGUpO1xuICAgICAgICAgICAgICAgIHN0cmF5RmlsbCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJubyBmaWxsXCIpO1xuICAgICAgICB9XG4gICAgICAgIC8vIENoZWNrIFN0cm9rZVxuICAgICAgICBpZiAobm9kZS5zdHJva2VzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGlmIChub2RlLnN0cm9rZVN0eWxlSWQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi4pyFIEdvb2Qgc3Ryb2tlXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLinYwgQmFkIHN0cm9rZVwiKTtcbiAgICAgICAgICAgICAgICAvLyAvLyBBZGQgd2FybmluZyBzdHJva2VcbiAgICAgICAgICAgICAgICBhZGRXYXJuaW5nU3Ryb2tlKG5vZGUpO1xuICAgICAgICAgICAgICAgIHN0cmF5U3Ryb2tlKys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIm5vIHN0cm9rZVwiKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJObyBmaWxsICYgc3Ryb2tlIHByb3BlcnR5XCIpO1xuICAgIH1cbiAgICBpZiAoXCJjaGlsZHJlblwiIGluIG5vZGUpIHtcbiAgICAgICAgZm9yIChjb25zdCBjaGlsZCBvZiBub2RlLmNoaWxkcmVuKSB7XG4gICAgICAgICAgICBDb2xvckNoZWNrVHJhdmVyc2UoY2hpbGQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICAvLyBkbyBub3RoaW5nXG4gICAgfVxuICAgIGlmIChzdHJheUZpbGwgPiAwIHx8IHN0cmF5U3Ryb2tlID4gMCkge1xuICAgICAgICBsZXQgZXJyb3JTdHJpbmcgPSBcIllvdSBoYXZlIFwiICtcbiAgICAgICAgICAgIHN0cmF5RmlsbCArXG4gICAgICAgICAgICBcIiBmaWxscyBhbmQgXCIgK1xuICAgICAgICAgICAgc3RyYXlTdHJva2UgK1xuICAgICAgICAgICAgXCIgc3Ryb2tlcyBub3QgdXNpbmcgY29sb3VycyBmcm9tIG91ciBsaWJyYXJ5IVwiO1xuICAgICAgICBmaWdtYS5ub3RpZnkoZXJyb3JTdHJpbmcsIHsgdGltZW91dDogMC41IH0pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZmlnbWEubm90aWZ5KFwi8J+RjyBBbGwgaXMgZ29vZCBpbiB0aGUgaG9vZCFcIiwgeyB0aW1lb3V0OiAwLjUgfSk7XG4gICAgfVxufTtcbmV4cG9ydCB7IENvbG9yQ2hlY2tUcmF2ZXJzZSB9O1xuIiwiY29uc3QgRm9yY2VBdXRvTGF5b3V0SG9yaXpvbnRhbCA9IChub2RlcykgPT4ge1xuICAgIGZvciAoY29uc3Qgbm9kZSBvZiBub2Rlcykge1xuICAgICAgICBub2RlLmxheW91dE1vZGUgPSBcIkhPUklaT05UQUxcIjtcbiAgICB9XG59O1xuY29uc3QgRm9yY2VBdXRvTGF5b3V0VmVydGljYWwgPSAobm9kZXMpID0+IHtcbiAgICBmb3IgKGNvbnN0IG5vZGUgb2Ygbm9kZXMpIHtcbiAgICAgICAgbm9kZS5sYXlvdXRNb2RlID0gXCJWRVJUSUNBTFwiO1xuICAgIH1cbn07XG5leHBvcnQgeyBGb3JjZUF1dG9MYXlvdXRIb3Jpem9udGFsLCBGb3JjZUF1dG9MYXlvdXRWZXJ0aWNhbCB9O1xuIiwiaW1wb3J0IHsgcGFkZGluZ0hvcml6b250YWwsIHBhZGRpbmdWZXJ0aWNhbCwgYmFzZWxpbmVHcmlkcywgbWF4V2lkdGhHcmlkcywgY29sdW1uR3JpZHMsIG1heFdpZHRoTGVmdEFsaWduZWRHcmlkcywgfSBmcm9tIFwiLi4vdGhlbWUtc3R5bGVzL0xheW91dEdyaWRzXCI7XG5jb25zdCBTZXRMYXlvdXRHcmlkID0gKG5vZGVzLCBtc2cpID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZyhtc2cubGF5b3V0R3JpZE9wdGlvbnMpO1xuICAgIGZvciAoY29uc3Qgbm9kZSBvZiBub2Rlcykge1xuICAgICAgICAvLyBub2RlLmxheW91dEdyaWRzID0gW107XG4gICAgICAgIGNvbnN0IGhvcml6b250YWxQYWRkaW5nU2xpZGVyVmFsdWUgPSBtc2cubGF5b3V0R3JpZE9wdGlvbnNbMF0udmFsdWU7XG4gICAgICAgIGNvbnN0IHZlcnRpY2FsUGFkZGluZ1NsaWRlclZhbHVlID0gbXNnLmxheW91dEdyaWRPcHRpb25zWzFdLnZhbHVlO1xuICAgICAgICBjb25zdCBzaG93QmFzZWxpbmVSb3dzID0gbXNnLmxheW91dEdyaWRPcHRpb25zWzJdLnZhbHVlO1xuICAgICAgICBjb25zdCBzaG93TWF4V2lkdGggPSBtc2cubGF5b3V0R3JpZE9wdGlvbnNbM10udmFsdWU7XG4gICAgICAgIGNvbnN0IHNob3dDb2x1bW5zID0gbXNnLmxheW91dEdyaWRPcHRpb25zWzRdLnZhbHVlO1xuICAgICAgICBjb25zdCBzaG93TWF4V2lkdGhMZWZ0QWxpZ25lZCA9IG1zZy5sYXlvdXRHcmlkT3B0aW9uc1s1XS52YWx1ZTtcbiAgICAgICAgbGV0IGFsbEdyaWRzID0gW107XG4gICAgICAgIGxldCBzcGFjaW5nSG9yaXpvbnRhbCA9IDA7XG4gICAgICAgIGxldCBzcGFjaW5nVmVydGljYWwgPSAwO1xuICAgICAgICBzd2l0Y2ggKGhvcml6b250YWxQYWRkaW5nU2xpZGVyVmFsdWUpIHtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgc3BhY2luZ0hvcml6b250YWwgPSAwO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIjBcIjpcbiAgICAgICAgICAgICAgICBzcGFjaW5nSG9yaXpvbnRhbCA9IDA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiMVwiOlxuICAgICAgICAgICAgICAgIHNwYWNpbmdIb3Jpem9udGFsID0gNDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCIyXCI6XG4gICAgICAgICAgICAgICAgc3BhY2luZ0hvcml6b250YWwgPSA4O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIjNcIjpcbiAgICAgICAgICAgICAgICBzcGFjaW5nSG9yaXpvbnRhbCA9IDEyO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIjRcIjpcbiAgICAgICAgICAgICAgICBzcGFjaW5nSG9yaXpvbnRhbCA9IDE2O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIjVcIjpcbiAgICAgICAgICAgICAgICBzcGFjaW5nSG9yaXpvbnRhbCA9IDI0O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIjZcIjpcbiAgICAgICAgICAgICAgICBzcGFjaW5nSG9yaXpvbnRhbCA9IDMyO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIjdcIjpcbiAgICAgICAgICAgICAgICBzcGFjaW5nSG9yaXpvbnRhbCA9IDQwO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIjhcIjpcbiAgICAgICAgICAgICAgICBzcGFjaW5nSG9yaXpvbnRhbCA9IDQ4O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHN3aXRjaCAodmVydGljYWxQYWRkaW5nU2xpZGVyVmFsdWUpIHtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgc3BhY2luZ1ZlcnRpY2FsID0gMDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCIwXCI6XG4gICAgICAgICAgICAgICAgc3BhY2luZ1ZlcnRpY2FsID0gMDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCIxXCI6XG4gICAgICAgICAgICAgICAgc3BhY2luZ1ZlcnRpY2FsID0gNDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCIyXCI6XG4gICAgICAgICAgICAgICAgc3BhY2luZ1ZlcnRpY2FsID0gODtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCIzXCI6XG4gICAgICAgICAgICAgICAgc3BhY2luZ1ZlcnRpY2FsID0gMTI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiNFwiOlxuICAgICAgICAgICAgICAgIHNwYWNpbmdWZXJ0aWNhbCA9IDE2O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIjVcIjpcbiAgICAgICAgICAgICAgICBzcGFjaW5nVmVydGljYWwgPSAyNDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCI2XCI6XG4gICAgICAgICAgICAgICAgc3BhY2luZ1ZlcnRpY2FsID0gMzI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiN1wiOlxuICAgICAgICAgICAgICAgIHNwYWNpbmdWZXJ0aWNhbCA9IDQwO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIjhcIjpcbiAgICAgICAgICAgICAgICBzcGFjaW5nVmVydGljYWwgPSA0ODtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBwYWRkaW5nSG9yaXpvbnRhbChzcGFjaW5nSG9yaXpvbnRhbCkudGhlbigodmFsKSA9PiB7XG4gICAgICAgICAgICBpZiAodmFsLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgLy8gZG8gbm90aGluZ1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBncmlkIG9mIHZhbCkge1xuICAgICAgICAgICAgICAgICAgICBhbGxHcmlkcy5wdXNoKGdyaWQpO1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhhbGxHcmlkcyk7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUubGF5b3V0R3JpZHMgPSBhbGxHcmlkcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBwYWRkaW5nVmVydGljYWwoc3BhY2luZ1ZlcnRpY2FsKS50aGVuKCh2YWwpID0+IHtcbiAgICAgICAgICAgIGlmICh2YWwubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgICAgICAvLyBkbyBub3RoaW5nXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGdyaWQgb2YgdmFsKSB7XG4gICAgICAgICAgICAgICAgICAgIGFsbEdyaWRzLnB1c2goZ3JpZCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGFsbEdyaWRzKTtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5sYXlvdXRHcmlkcyA9IGFsbEdyaWRzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChzaG93TWF4V2lkdGgpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgZ3JpZCBvZiBtYXhXaWR0aEdyaWRzKSB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZ3JpZCk7XG4gICAgICAgICAgICAgICAgYWxsR3JpZHMucHVzaChncmlkKTtcbiAgICAgICAgICAgICAgICBub2RlLmxheW91dEdyaWRzID0gYWxsR3JpZHM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBub2RlLmxheW91dEdyaWRzID0gYWxsR3JpZHM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNob3dNYXhXaWR0aExlZnRBbGlnbmVkKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGdyaWQgb2YgbWF4V2lkdGhMZWZ0QWxpZ25lZEdyaWRzKSB7XG4gICAgICAgICAgICAgICAgYWxsR3JpZHMucHVzaChncmlkKTtcbiAgICAgICAgICAgICAgICBub2RlLmxheW91dEdyaWRzID0gYWxsR3JpZHM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBub2RlLmxheW91dEdyaWRzID0gYWxsR3JpZHM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNob3dDb2x1bW5zKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGdyaWQgb2YgY29sdW1uR3JpZHMpIHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhncmlkKTtcbiAgICAgICAgICAgICAgICBhbGxHcmlkcy5wdXNoKGdyaWQpO1xuICAgICAgICAgICAgICAgIG5vZGUubGF5b3V0R3JpZHMgPSBhbGxHcmlkcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG5vZGUubGF5b3V0R3JpZHMgPSBhbGxHcmlkcztcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2hvd0Jhc2VsaW5lUm93cykge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJzaG93XCIpO1xuICAgICAgICAgICAgYWxsR3JpZHMucHVzaChiYXNlbGluZUdyaWRzKTtcbiAgICAgICAgICAgIG5vZGUubGF5b3V0R3JpZHMgPSBhbGxHcmlkcztcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGFsbEdyaWRzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG5vZGUubGF5b3V0R3JpZHMgPSBhbGxHcmlkcztcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGFsbEdyaWRzKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5leHBvcnQgeyBTZXRMYXlvdXRHcmlkIH07XG4iLCJjb25zdCBTcGFjaW5nQ2hlY2tUcmF2ZXJzZSA9IChub2RlcykgPT4ge1xuICAgIGZvciAoY29uc3Qgbm9kZSBvZiBub2Rlcykge1xuICAgICAgICBsZXQgbmFtZSA9IG5vZGUubmFtZTtcbiAgICAgICAgbGV0IHBhZGRpbmdBbGxSZWdleCA9IC9cXGIoPzpwYS0xfHBhLTJ8cGEtM3xwYS00fHBhLTV8cGEtNnxwYS03fHBhLW5vbmUpXFxiL2c7XG4gICAgICAgIGxldCBwYWRkaW5nSG9yaXpvbnRhbFJlZ2V4ID0gL1xcYig/OnBoLTF8cGgtMnxwaC0zfHBoLTR8cGgtNXxwaC02fHBoLTd8cGgtbm9uZSlcXGIvZztcbiAgICAgICAgbGV0IHBhZGRpbmdWZXJ0aWNhbFJlZ2V4ID0gL1xcYig/OnB2LTF8cHYtMnxwdi0zfHB2LTR8cHYtNXxwdi02fHB2LTd8cHYtbm9uZSlcXGIvZztcbiAgICAgICAgbGV0IGl0ZW1TcGFjaW5nQWxsUmVnZXggPSAvXFxiKD86c3AtMXxzcC0yfHNwLTN8c3AtNHxzcC01fHNwLTZ8c3AtN3xzcC1ub25lKVxcYi9nO1xuICAgICAgICBsZXQgYXV0b2xheW91dFJlZ2V4ID0gL1xcYig/OnZlcnRpY2FsfGhvcml6b250YWwpXFxiL2c7XG4gICAgICAgIGxldCBtYXRjaFBhZGRpbmdBbGwgPSBuYW1lLm1hdGNoKHBhZGRpbmdBbGxSZWdleCk7XG4gICAgICAgIGxldCBtYXRjaFBhZGRpbmdIb3Jpem9udGFsID0gbmFtZS5tYXRjaChwYWRkaW5nSG9yaXpvbnRhbFJlZ2V4KTtcbiAgICAgICAgbGV0IG1hdGNoUGFkZGluZ1ZlcnRpY2FsID0gbmFtZS5tYXRjaChwYWRkaW5nVmVydGljYWxSZWdleCk7XG4gICAgICAgIGxldCBtYXRjaEl0ZW1TcGFjaW5nID0gbmFtZS5tYXRjaChpdGVtU3BhY2luZ0FsbFJlZ2V4KTtcbiAgICAgICAgbGV0IG1hdGNoQXV0b0xheW91dERpcmVjdGlvbiA9IG5hbWUubWF0Y2goYXV0b2xheW91dFJlZ2V4KTtcbiAgICAgICAgY29uc29sZS5sb2cobWF0Y2hQYWRkaW5nQWxsKTtcbiAgICAgICAgaWYgKG1hdGNoQXV0b0xheW91dERpcmVjdGlvbiA9PSBudWxsKSB7XG4gICAgICAgICAgICBub2RlLmxheW91dE1vZGUgPSBcIlZFUlRJQ0FMXCI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImVuYWJsZSBhdXRvIGxheW91dFwiKTtcbiAgICAgICAgICAgIHN3aXRjaCAobWF0Y2hBdXRvTGF5b3V0RGlyZWN0aW9uWzBdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcInZlcnRpY2FsXCI6XG4gICAgICAgICAgICAgICAgICAgIG5vZGUubGF5b3V0TW9kZSA9IFwiVkVSVElDQUxcIjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcImhvcml6b250YWxcIjpcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5sYXlvdXRNb2RlID0gXCJIT1JJWk9OVEFMXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1hdGNoSXRlbVNwYWNpbmcgPT0gbnVsbCkge1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJoYXMgc3BhY2luZ1wiKTtcbiAgICAgICAgICAgIHN3aXRjaCAobWF0Y2hJdGVtU3BhY2luZ1swXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJzcC0wXCI6XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuaXRlbVNwYWNpbmcgPSAwO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwic3AtMVwiOlxuICAgICAgICAgICAgICAgICAgICBub2RlLml0ZW1TcGFjaW5nID0gNDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInNwLTJcIjpcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5pdGVtU3BhY2luZyA9IDg7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJzcC0zXCI6XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuaXRlbVNwYWNpbmcgPSAxMjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInNwLTRcIjpcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5pdGVtU3BhY2luZyA9IDE2O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwic3AtNVwiOlxuICAgICAgICAgICAgICAgICAgICBub2RlLml0ZW1TcGFjaW5nID0gMjQ7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJzcC02XCI6XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuaXRlbVNwYWNpbmcgPSAzMjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInNwLTdcIjpcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5pdGVtU3BhY2luZyA9IDQwO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwic3AtOFwiOlxuICAgICAgICAgICAgICAgICAgICBub2RlLml0ZW1TcGFjaW5nID0gNDg7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChtYXRjaFBhZGRpbmdBbGwgPT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJub1wiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaGFzIHBhZGRpbmcgYWxsXCIpO1xuICAgICAgICAgICAgc3dpdGNoIChtYXRjaFBhZGRpbmdBbGxbMF0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIFwicGEtbm9uZVwiOlxuICAgICAgICAgICAgICAgICAgICBub2RlLmhvcml6b250YWxQYWRkaW5nID0gMDtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS52ZXJ0aWNhbFBhZGRpbmcgPSAwO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwicGEtMVwiOlxuICAgICAgICAgICAgICAgICAgICBub2RlLmhvcml6b250YWxQYWRkaW5nID0gNDtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS52ZXJ0aWNhbFBhZGRpbmcgPSA0O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwicGEtMlwiOlxuICAgICAgICAgICAgICAgICAgICBub2RlLmhvcml6b250YWxQYWRkaW5nID0gODtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS52ZXJ0aWNhbFBhZGRpbmcgPSA4O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwicGEtM1wiOlxuICAgICAgICAgICAgICAgICAgICBub2RlLmhvcml6b250YWxQYWRkaW5nID0gMTI7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUudmVydGljYWxQYWRkaW5nID0gMTI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJwYS00XCI6XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuaG9yaXpvbnRhbFBhZGRpbmcgPSAxNjtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS52ZXJ0aWNhbFBhZGRpbmcgPSAxNjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInBhLTVcIjpcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5ob3Jpem9udGFsUGFkZGluZyA9IDI0O1xuICAgICAgICAgICAgICAgICAgICBub2RlLnZlcnRpY2FsUGFkZGluZyA9IDI0O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwicGEtNlwiOlxuICAgICAgICAgICAgICAgICAgICBub2RlLmhvcml6b250YWxQYWRkaW5nID0gMzI7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUudmVydGljYWxQYWRkaW5nID0gMzI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJwYS03XCI6XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuaG9yaXpvbnRhbFBhZGRpbmcgPSA0MDtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS52ZXJ0aWNhbFBhZGRpbmcgPSA0MDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInBhLThcIjpcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5ob3Jpem9udGFsUGFkZGluZyA9IDQ4O1xuICAgICAgICAgICAgICAgICAgICBub2RlLnZlcnRpY2FsUGFkZGluZyA9IDQ4O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAobWF0Y2hQYWRkaW5nSG9yaXpvbnRhbCA9PSBudWxsKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIm5vXCIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJoYXMgcGFkZGluZyBob3Jpem9udGFsXCIpO1xuICAgICAgICAgICAgc3dpdGNoIChtYXRjaFBhZGRpbmdIb3Jpem9udGFsWzBdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcInBoLW5vbmVcIjpcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5ob3Jpem9udGFsUGFkZGluZyA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJwaC0xXCI6XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuaG9yaXpvbnRhbFBhZGRpbmcgPSA0O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwicGgtMlwiOlxuICAgICAgICAgICAgICAgICAgICBub2RlLmhvcml6b250YWxQYWRkaW5nID0gODtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInBoLTNcIjpcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5ob3Jpem9udGFsUGFkZGluZyA9IDEyO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwicGgtNFwiOlxuICAgICAgICAgICAgICAgICAgICBub2RlLmhvcml6b250YWxQYWRkaW5nID0gMTY7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJwaC01XCI6XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuaG9yaXpvbnRhbFBhZGRpbmcgPSAyNDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInBoLTZcIjpcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5ob3Jpem9udGFsUGFkZGluZyA9IDMyO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwicGgtN1wiOlxuICAgICAgICAgICAgICAgICAgICBub2RlLmhvcml6b250YWxQYWRkaW5nID0gNDA7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJwaC04XCI6XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuaG9yaXpvbnRhbFBhZGRpbmcgPSA0ODtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1hdGNoUGFkZGluZ1ZlcnRpY2FsID09IG51bGwpIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwibm9cIik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImhhcyBwYWRkaW5nIGhvcml6b250YWxcIik7XG4gICAgICAgICAgICBzd2l0Y2ggKG1hdGNoUGFkZGluZ1ZlcnRpY2FsWzBdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcInB2LW5vbmVcIjpcbiAgICAgICAgICAgICAgICAgICAgbm9kZS52ZXJ0aWNhbFBhZGRpbmcgPSAwO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwicHYtMVwiOlxuICAgICAgICAgICAgICAgICAgICBub2RlLnZlcnRpY2FsUGFkZGluZyA9IDQ7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJwdi0yXCI6XG4gICAgICAgICAgICAgICAgICAgIG5vZGUudmVydGljYWxQYWRkaW5nID0gODtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInB2LTNcIjpcbiAgICAgICAgICAgICAgICAgICAgbm9kZS52ZXJ0aWNhbFBhZGRpbmcgPSAxMjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInB2LTRcIjpcbiAgICAgICAgICAgICAgICAgICAgbm9kZS52ZXJ0aWNhbFBhZGRpbmcgPSAxNjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInB2LTVcIjpcbiAgICAgICAgICAgICAgICAgICAgbm9kZS52ZXJ0aWNhbFBhZGRpbmcgPSAyNDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInB2LTZcIjpcbiAgICAgICAgICAgICAgICAgICAgbm9kZS52ZXJ0aWNhbFBhZGRpbmcgPSAzMjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInB2LTdcIjpcbiAgICAgICAgICAgICAgICAgICAgbm9kZS52ZXJ0aWNhbFBhZGRpbmcgPSA0MDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInB2LThcIjpcbiAgICAgICAgICAgICAgICAgICAgbm9kZS52ZXJ0aWNhbFBhZGRpbmcgPSA0ODtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gU3BhY2luZ0NoZWNrVHJhdmVyc2Uobm9kZSk7XG4gICAgfVxuICAgIC8vIGlmIChcImNoaWxkcmVuXCIgaW4gbm9kZXMpIHtcbiAgICAvLyAgIGZvciAoY29uc3QgY2hpbGQgb2Ygbm9kZS5jaGlsZHJlbikge1xuICAgIC8vICAgICBTcGFjaW5nQ2hlY2tUcmF2ZXJzZShjaGlsZCk7XG4gICAgLy8gICB9XG4gICAgLy8gfSBlbHNlIHtcbiAgICAvLyAgIC8vIGRvIG5vdGhpbmdcbiAgICAvLyB9XG59O1xuZXhwb3J0IHsgU3BhY2luZ0NoZWNrVHJhdmVyc2UgfTtcbiIsImZ1bmN0aW9uIGNsb25lKHZhbCkge1xuICAgIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHZhbCkpO1xufVxubGV0IHBoTmFtZSA9IG51bGw7XG5sZXQgcHZOYW1lID0gbnVsbDtcbmxldCBzcE5hbWUgPSBudWxsO1xubGV0IG5hbWVQcm9wID0ge1xuICAgIGhvcml6b250YWw6IFwicGgtbm9uZVwiLFxuICAgIHZlcnRpY2FsOiBcInB2LW5vbmVcIixcbiAgICBzcGFjaW5nOiBcInNwLW5vbmVcIixcbn07XG5mdW5jdGlvbiB1cGRhdGVOYW1lKHZhbCwgbm9kZSkge1xuICAgIGlmICh2YWwudHlwZSA9PT0gXCJob3Jpem9udGFsXCIpIHtcbiAgICAgICAgbmFtZVByb3AuaG9yaXpvbnRhbCA9IHZhbC52YWx1ZTtcbiAgICB9XG4gICAgZWxzZSBpZiAodmFsLnR5cGUgPT09IFwidmVydGljYWxcIikge1xuICAgICAgICBuYW1lUHJvcC52ZXJ0aWNhbCA9IHZhbC52YWx1ZTtcbiAgICB9XG4gICAgZWxzZSBpZiAodmFsLnR5cGUgPT09IFwic3BhY2luZ1wiKSB7XG4gICAgICAgIG5hbWVQcm9wLnNwYWNpbmcgPSB2YWwudmFsdWU7XG4gICAgfVxuICAgIG5vZGUubmFtZSA9XG4gICAgICAgIG5hbWVQcm9wLmhvcml6b250YWwgKyBcIiBcIiArIG5hbWVQcm9wLnZlcnRpY2FsICsgXCIgXCIgKyBuYW1lUHJvcC5zcGFjaW5nO1xufVxuY29uc3QgUGFkZGluZ0hvcml6b250YWxTbGlkZXIgPSAobm9kZXMsIG1zZykgPT4ge1xuICAgIGxldCBzbGlkZXJWYWx1ZSA9IG1zZy5zbGlkZXJWYWx1ZTtcbiAgICBsZXQgc3BhY2luZyA9IG51bGw7XG4gICAgbGV0IHNwYWNpbmdOYW1lID0gbnVsbDtcbiAgICBzd2l0Y2ggKHNsaWRlclZhbHVlKSB7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBzcGFjaW5nID0gMDtcbiAgICAgICAgICAgIHNwYWNpbmdOYW1lID0gXCJub25lXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIjFcIjpcbiAgICAgICAgICAgIHNwYWNpbmcgPSA0O1xuICAgICAgICAgICAgc3BhY2luZ05hbWUgPSBcIjFcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiMlwiOlxuICAgICAgICAgICAgc3BhY2luZyA9IDg7XG4gICAgICAgICAgICBzcGFjaW5nTmFtZSA9IFwiMlwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCIzXCI6XG4gICAgICAgICAgICBzcGFjaW5nID0gMTI7XG4gICAgICAgICAgICBzcGFjaW5nTmFtZSA9IFwiM1wiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCI0XCI6XG4gICAgICAgICAgICBzcGFjaW5nID0gMTY7XG4gICAgICAgICAgICBzcGFjaW5nTmFtZSA9IFwiNFwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCI1XCI6XG4gICAgICAgICAgICBzcGFjaW5nID0gMjQ7XG4gICAgICAgICAgICBzcGFjaW5nTmFtZSA9IFwiNVwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCI2XCI6XG4gICAgICAgICAgICBzcGFjaW5nID0gMzI7XG4gICAgICAgICAgICBzcGFjaW5nTmFtZSA9IFwiNlwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCI3XCI6XG4gICAgICAgICAgICBzcGFjaW5nID0gNDA7XG4gICAgICAgICAgICBzcGFjaW5nTmFtZSA9IFwiN1wiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCI4XCI6XG4gICAgICAgICAgICBzcGFjaW5nID0gNDg7XG4gICAgICAgICAgICBzcGFjaW5nTmFtZSA9IFwiOFwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGZvciAoY29uc3Qgbm9kZSBvZiBub2Rlcykge1xuICAgICAgICBpZiAobm9kZSkge1xuICAgICAgICAgICAgcGhOYW1lID0gXCJwaC1cIiArIHNwYWNpbmdOYW1lO1xuICAgICAgICAgICAgdXBkYXRlTmFtZSh7IHR5cGU6IFwiaG9yaXpvbnRhbFwiLCB2YWx1ZTogcGhOYW1lIH0sIG5vZGUpO1xuICAgICAgICAgICAgaWYgKG5vZGUudHlwZSA9PT0gXCJHUk9VUFwiKSB7XG4gICAgICAgICAgICAgICAgbm9kZS5ob3Jpem9udGFsUGFkZGluZyA9IHNwYWNpbmc7XG4gICAgICAgICAgICAgICAgbm9kZS5sYXlvdXRNb2RlID0gXCJOT05FXCI7XG4gICAgICAgICAgICAgICAgaWYgKFwiY2hpbGRyZW5cIiBpbiBub2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBncm91cCA9IG5vZGUuY2hpbGRyZW5bMF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IHNldEF1dG9MYXlvdXQgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuaG9yaXpvbnRhbFBhZGRpbmcgPSBzcGFjaW5nO1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHJlc29sdmUoXCJkb25lXCIpLCA1KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn07XG5jb25zdCBQYWRkaW5nVmVydGljYWxTbGlkZXIgPSAobm9kZXMsIG1zZykgPT4ge1xuICAgIGxldCBzbGlkZXJWYWx1ZSA9IG1zZy5zbGlkZXJWYWx1ZTtcbiAgICBsZXQgc3BhY2luZyA9IG51bGw7XG4gICAgbGV0IHNwYWNpbmdOYW1lID0gbnVsbDtcbiAgICBzd2l0Y2ggKHNsaWRlclZhbHVlKSB7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBzcGFjaW5nID0gMDtcbiAgICAgICAgICAgIHNwYWNpbmdOYW1lID0gXCJub25lXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIjFcIjpcbiAgICAgICAgICAgIHNwYWNpbmcgPSA0O1xuICAgICAgICAgICAgc3BhY2luZ05hbWUgPSBcIjFcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiMlwiOlxuICAgICAgICAgICAgc3BhY2luZyA9IDg7XG4gICAgICAgICAgICBzcGFjaW5nTmFtZSA9IFwiMlwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCIzXCI6XG4gICAgICAgICAgICBzcGFjaW5nID0gMTI7XG4gICAgICAgICAgICBzcGFjaW5nTmFtZSA9IFwiM1wiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCI0XCI6XG4gICAgICAgICAgICBzcGFjaW5nID0gMTY7XG4gICAgICAgICAgICBzcGFjaW5nTmFtZSA9IFwiNFwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCI1XCI6XG4gICAgICAgICAgICBzcGFjaW5nID0gMjQ7XG4gICAgICAgICAgICBzcGFjaW5nTmFtZSA9IFwiNVwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCI2XCI6XG4gICAgICAgICAgICBzcGFjaW5nID0gMzI7XG4gICAgICAgICAgICBzcGFjaW5nTmFtZSA9IFwiNlwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCI3XCI6XG4gICAgICAgICAgICBzcGFjaW5nID0gNDA7XG4gICAgICAgICAgICBzcGFjaW5nTmFtZSA9IFwiN1wiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCI4XCI6XG4gICAgICAgICAgICBzcGFjaW5nID0gNDg7XG4gICAgICAgICAgICBzcGFjaW5nTmFtZSA9IFwiOFwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGZvciAoY29uc3Qgbm9kZSBvZiBub2Rlcykge1xuICAgICAgICBpZiAobm9kZSkge1xuICAgICAgICAgICAgcHZOYW1lID0gXCJwdi1cIiArIHNwYWNpbmdOYW1lO1xuICAgICAgICAgICAgdXBkYXRlTmFtZSh7IHR5cGU6IFwidmVydGljYWxcIiwgdmFsdWU6IHB2TmFtZSB9LCBub2RlKTtcbiAgICAgICAgICAgIGlmIChub2RlLnR5cGUgPT09IFwiR1JPVVBcIikge1xuICAgICAgICAgICAgICAgIG5vZGUudmVydGljYWxQYWRkaW5nID0gc3BhY2luZztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGxldCBzZXRBdXRvTGF5b3V0ID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgICAgICAgICBub2RlLnZlcnRpY2FsUGFkZGluZyA9IHNwYWNpbmc7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gcmVzb2x2ZShcImRvbmVcIiksIDUpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufTtcbmNvbnN0IEl0ZW1TcGFjaW5nID0gKG5vZGVzLCBtc2cpID0+IHtcbiAgICBsZXQgc2xpZGVyVmFsdWUgPSBtc2cuc2xpZGVyVmFsdWU7XG4gICAgbGV0IHNwYWNpbmcgPSBudWxsO1xuICAgIGxldCBzcGFjaW5nTmFtZSA9IG51bGw7XG4gICAgc3dpdGNoIChzbGlkZXJWYWx1ZSkge1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgc3BhY2luZyA9IDA7XG4gICAgICAgICAgICBzcGFjaW5nTmFtZSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCIxXCI6XG4gICAgICAgICAgICBzcGFjaW5nID0gNDtcbiAgICAgICAgICAgIHNwYWNpbmdOYW1lID0gXCIxXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIjJcIjpcbiAgICAgICAgICAgIHNwYWNpbmcgPSA4O1xuICAgICAgICAgICAgc3BhY2luZ05hbWUgPSBcIjJcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiM1wiOlxuICAgICAgICAgICAgc3BhY2luZyA9IDEyO1xuICAgICAgICAgICAgc3BhY2luZ05hbWUgPSBcIjNcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiNFwiOlxuICAgICAgICAgICAgc3BhY2luZyA9IDEyO1xuICAgICAgICAgICAgc3BhY2luZ05hbWUgPSBcIjRcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiNVwiOlxuICAgICAgICAgICAgc3BhY2luZyA9IDI0O1xuICAgICAgICAgICAgc3BhY2luZ05hbWUgPSBcIjVcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiNlwiOlxuICAgICAgICAgICAgc3BhY2luZyA9IDMyO1xuICAgICAgICAgICAgc3BhY2luZ05hbWUgPSBcIjZcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiN1wiOlxuICAgICAgICAgICAgc3BhY2luZyA9IDQwO1xuICAgICAgICAgICAgc3BhY2luZ05hbWUgPSBcIjdcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiOFwiOlxuICAgICAgICAgICAgc3BhY2luZyA9IDQ4O1xuICAgICAgICAgICAgc3BhY2luZ05hbWUgPSBcIjhcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IG5vZGUgb2Ygbm9kZXMpIHtcbiAgICAgICAgbm9kZS5pdGVtU3BhY2luZyA9IHNwYWNpbmc7XG4gICAgICAgIHNwTmFtZSA9IFwic3AtXCIgKyBzcGFjaW5nTmFtZTtcbiAgICAgICAgdXBkYXRlTmFtZSh7IHR5cGU6IFwic3BhY2luZ1wiLCB2YWx1ZTogc3BOYW1lIH0sIG5vZGUpO1xuICAgIH1cbn07XG5leHBvcnQgeyBQYWRkaW5nSG9yaXpvbnRhbFNsaWRlciwgUGFkZGluZ1ZlcnRpY2FsU2xpZGVyLCBJdGVtU3BhY2luZyB9O1xuIiwiaW1wb3J0IHsgRGFya1VpQ29sb3JzLCBMaWdodFVpQ29sb3JzIH0gZnJvbSBcIi4uL3RoZW1lLXN0eWxlcy9jb2xvcnNcIjtcbmltcG9ydCB7IERhcmtVaUVmZmVjdHMsIExpZ2h0VWlFZmZlY3RzIH0gZnJvbSBcIi4uL3RoZW1lLXN0eWxlcy9lZmZlY3RzXCI7XG4vLyBGaWxsXG5jb25zdCBzd2FwRmlsbCA9IGFzeW5jIChub2RlLCBhbGxMaWdodFRva2VucywgYWxsRGFya1Rva2VucykgPT4ge1xuICAgIGxldCBoYXNGaWxsU3R5bGUgPSBub2RlLmZpbGxTdHlsZUlkICYmIG5vZGUuZmlsbFN0eWxlSWQubGVuZ3RoID4gMDtcbiAgICBpZiAoaGFzRmlsbFN0eWxlKSB7XG4gICAgICAgIGxldCBub2RlRmlsbFN0eWxlSWQgPSBub2RlLmZpbGxTdHlsZUlkO1xuICAgICAgICBsZXQgbm9kZUZpbGxQYWludFN0eWxlID0gZmlnbWEuZ2V0U3R5bGVCeUlkKG5vZGVGaWxsU3R5bGVJZCk7XG4gICAgICAgIGxldCBub2RlRmlsbFBhaW50TmFtZSA9IG5vZGVGaWxsUGFpbnRTdHlsZS5uYW1lO1xuICAgICAgICBsZXQgc3dhcHBlZE5vZGVGaWxsTmFtZTtcbiAgICAgICAgbGV0IG5vZGVGaWxsUGFpbnRJc0xpZ2h0TW9kZSA9IG5vZGVGaWxsUGFpbnROYW1lLmluY2x1ZGVzKFwibGlnaHQgdWlcIik7XG4gICAgICAgIGlmIChub2RlRmlsbFBhaW50SXNMaWdodE1vZGUpIHtcbiAgICAgICAgICAgIHN3YXBwZWROb2RlRmlsbE5hbWUgPSBub2RlRmlsbFBhaW50TmFtZS5yZXBsYWNlKFwibGlnaHQgdWkvXCIsIFwiZGFyayB1aS9cIik7XG4gICAgICAgICAgICBsZXQgZmlsdGVyZWQgPSBhbGxEYXJrVG9rZW5zLmZpbmQoKGl0ZW0pID0+IGl0ZW0ubmFtZSA9PT0gc3dhcHBlZE5vZGVGaWxsTmFtZSk7XG4gICAgICAgICAgICBub2RlLmZpbGxTdHlsZUlkID0gZmlsdGVyZWQuaWQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzd2FwcGVkTm9kZUZpbGxOYW1lID0gbm9kZUZpbGxQYWludE5hbWUucmVwbGFjZShcImRhcmsgdWkvXCIsIFwibGlnaHQgdWkvXCIpO1xuICAgICAgICAgICAgbGV0IGZpbHRlcmVkID0gYWxsTGlnaHRUb2tlbnMuZmluZCgoaXRlbSkgPT4gaXRlbS5uYW1lID09PSBzd2FwcGVkTm9kZUZpbGxOYW1lKTtcbiAgICAgICAgICAgIG5vZGUuZmlsbFN0eWxlSWQgPSBmaWx0ZXJlZC5pZDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbn07XG4vLyBTdHJva2VzXG5jb25zdCBzd2FwU3Ryb2tlID0gYXN5bmMgKG5vZGUsIGFsbExpZ2h0VG9rZW5zLCBhbGxEYXJrVG9rZW5zKSA9PiB7XG4gICAgbGV0IGhhc1N0cm9rZVN0eWxlID0gbm9kZS5zdHJva2VTdHlsZUlkICYmIG5vZGUuc3Ryb2tlU3R5bGVJZC5sZW5ndGggPiAwO1xuICAgIGlmIChoYXNTdHJva2VTdHlsZSkge1xuICAgICAgICBsZXQgbm9kZVN0cm9rZVN0eWxlSWQgPSBub2RlLnN0cm9rZVN0eWxlSWQ7XG4gICAgICAgIGxldCBub2RlU3Ryb2tlUGFpbnRTdHlsZSA9IGZpZ21hLmdldFN0eWxlQnlJZChub2RlU3Ryb2tlU3R5bGVJZCk7XG4gICAgICAgIGxldCBub2RlU3Ryb2tlUGFpbnROYW1lID0gbm9kZVN0cm9rZVBhaW50U3R5bGUubmFtZTtcbiAgICAgICAgbGV0IHN3YXBwZWROb2RlU3Ryb2tlTmFtZTtcbiAgICAgICAgbGV0IG5vZGVTdHJva2VQYWludElzTGlnaHRNb2RlID0gbm9kZVN0cm9rZVBhaW50TmFtZS5pbmNsdWRlcyhcImxpZ2h0IHVpXCIpO1xuICAgICAgICBpZiAobm9kZVN0cm9rZVBhaW50SXNMaWdodE1vZGUpIHtcbiAgICAgICAgICAgIHN3YXBwZWROb2RlU3Ryb2tlTmFtZSA9IG5vZGVTdHJva2VQYWludE5hbWUucmVwbGFjZShcImxpZ2h0IHVpL1wiLCBcImRhcmsgdWkvXCIpO1xuICAgICAgICAgICAgbGV0IGZpbHRlcmVkID0gYWxsRGFya1Rva2Vucy5maW5kKChpdGVtKSA9PiBpdGVtLm5hbWUgPT09IHN3YXBwZWROb2RlU3Ryb2tlTmFtZSk7XG4gICAgICAgICAgICBub2RlLnN0cm9rZVN0eWxlSWQgPSBmaWx0ZXJlZC5pZDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHN3YXBwZWROb2RlU3Ryb2tlTmFtZSA9IG5vZGVTdHJva2VQYWludE5hbWUucmVwbGFjZShcImRhcmsgdWkvXCIsIFwibGlnaHQgdWkvXCIpO1xuICAgICAgICAgICAgbGV0IGZpbHRlcmVkID0gYWxsTGlnaHRUb2tlbnMuZmluZCgoaXRlbSkgPT4gaXRlbS5uYW1lID09PSBzd2FwcGVkTm9kZVN0cm9rZU5hbWUpO1xuICAgICAgICAgICAgbm9kZS5zdHJva2VTdHlsZUlkID0gZmlsdGVyZWQuaWQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG59O1xuLy8gRWZmZWN0c1xuY29uc3Qgc3dhcEVmZmVjdHMgPSBhc3luYyAobm9kZSwgYWxsTGlnaHRFZmZlY3RzLCBhbGxEYXJrRWZmZWN0cykgPT4ge1xuICAgIGxldCBoYXNFZmZlY3RzID0gbm9kZS5lZmZlY3RTdHlsZUlkICYmIG5vZGUuZWZmZWN0U3R5bGVJZC5sZW5ndGggPiAwO1xuICAgIGlmIChoYXNFZmZlY3RzKSB7XG4gICAgICAgIGxldCBub2RlRWZmZWN0U3R5bGVJZCA9IG5vZGUuZWZmZWN0U3R5bGVJZDtcbiAgICAgICAgbGV0IG5vZGVFZmZlY3RTdHlsZSA9IGZpZ21hLmdldFN0eWxlQnlJZChub2RlRWZmZWN0U3R5bGVJZCk7XG4gICAgICAgIGxldCBub2RlRWZmZWN0U3R5bGVOYW1lID0gbm9kZUVmZmVjdFN0eWxlLm5hbWU7XG4gICAgICAgIGxldCBzd2FwcGVkTm9kZUVmZmVjdE5hbWU7XG4gICAgICAgIGxldCBub2RlRWZmZWN0U3R5bGVOYW1lSXNMaWdodCA9IG5vZGVFZmZlY3RTdHlsZU5hbWUuaW5jbHVkZXMoXCJsaWdodCB1aVwiKTtcbiAgICAgICAgY29uc29sZS5sb2coc3dhcHBlZE5vZGVFZmZlY3ROYW1lKTtcbiAgICAgICAgaWYgKG5vZGVFZmZlY3RTdHlsZU5hbWVJc0xpZ2h0KSB7XG4gICAgICAgICAgICBzd2FwcGVkTm9kZUVmZmVjdE5hbWUgPSBub2RlRWZmZWN0U3R5bGVOYW1lLnJlcGxhY2UoXCJsaWdodCB1aS9cIiwgXCJkYXJrIHVpL1wiKTtcbiAgICAgICAgICAgIGxldCBmaWx0ZXJlZCA9IGFsbERhcmtFZmZlY3RzLmZpbmQoKGl0ZW0pID0+IGl0ZW0ubmFtZSA9PT0gc3dhcHBlZE5vZGVFZmZlY3ROYW1lKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGZpbHRlcmVkKTtcbiAgICAgICAgICAgIG5vZGUuZWZmZWN0U3R5bGVJZCA9IGZpbHRlcmVkLmlkO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc3dhcHBlZE5vZGVFZmZlY3ROYW1lID0gbm9kZUVmZmVjdFN0eWxlTmFtZS5yZXBsYWNlKFwiZGFyayB1aS9cIiwgXCJsaWdodCB1aS9cIik7XG4gICAgICAgICAgICBsZXQgZmlsdGVyZWQgPSBhbGxMaWdodEVmZmVjdHMuZmluZCgoaXRlbSkgPT4gaXRlbS5uYW1lID09PSBzd2FwcGVkTm9kZUVmZmVjdE5hbWUpO1xuICAgICAgICAgICAgbm9kZS5lZmZlY3RTdHlsZUlkID0gZmlsdGVyZWQuaWQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gaWYgKG5vZGVFZmZlY3RTdHlsZU5hbWVJc0xpZ2h0KSB7XG4gICAgLy8gICBzd2FwcGVkTm9kZUVmZmVjdE5hbWUgPSBub2RlRWZmZWN0U3R5bGVOYW1lLnJlcGxhY2UoXG4gICAgLy8gICAgIFwibGlnaHQgdWkvXCIsXG4gICAgLy8gICAgIFwiZGFyayB1aS9cIlxuICAgIC8vICAgKTtcbiAgICAvLyAgIGZvciAoY29uc3QgaXRlbSBvZiBEYXJrVWlFZmZlY3RzKSB7XG4gICAgLy8gICAgIGlmIChpdGVtLm5hbWUgPT09IHN3YXBwZWROb2RlRWZmZWN0TmFtZSkge1xuICAgIC8vICAgICAgIGZpZ21hLmltcG9ydFN0eWxlQnlLZXlBc3luYyhpdGVtLnN0eWxlS2V5KS50aGVuKChyZXNwKSA9PiB7XG4gICAgLy8gICAgICAgICBub2RlLmVmZmVjdFN0eWxlSWQgPSByZXNwLmlkO1xuICAgIC8vICAgICAgIH0pO1xuICAgIC8vICAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgIC8vIGRvIG5vdGhpbmdcbiAgICAvLyAgICAgfVxuICAgIC8vICAgfVxuICAgIC8vIH0gZWxzZSB7XG4gICAgLy8gICBzd2FwcGVkTm9kZUVmZmVjdE5hbWUgPSBub2RlRWZmZWN0U3R5bGVOYW1lLnJlcGxhY2UoXG4gICAgLy8gICAgIFwiZGFyayB1aS9cIixcbiAgICAvLyAgICAgXCJsaWdodCB1aS9cIlxuICAgIC8vICAgKTtcbiAgICAvLyAgIGZvciAoY29uc3QgaXRlbSBvZiBMaWdodFVpRWZmZWN0cykge1xuICAgIC8vICAgICBpZiAoaXRlbS5uYW1lID09PSBzd2FwcGVkTm9kZUVmZmVjdE5hbWUpIHtcbiAgICAvLyAgICAgICBmaWdtYS5pbXBvcnRTdHlsZUJ5S2V5QXN5bmMoaXRlbS5zdHlsZUtleSkudGhlbigocmVzcCkgPT4ge1xuICAgIC8vICAgICAgICAgbm9kZS5lZmZlY3RTdHlsZUlkID0gcmVzcC5pZDtcbiAgICAvLyAgICAgICB9KTtcbiAgICAvLyAgICAgfSBlbHNlIHtcbiAgICAvLyAgICAgICAvLyBEbyBub3RoaW5nXG4gICAgLy8gICAgIH1cbiAgICAvLyAgIH1cbiAgICAvLyB9XG59O1xuLy8gVGhlbWUgU3dhcFxuY29uc3QgVGhlbWVTd2FwID0gYXN5bmMgKG5vZGUpID0+IHtcbiAgICAvLyBHZXRBbGxMb2NhbFBhaW50U3R5bGVzKCk7XG4gICAgbGV0IGFsbExpZ2h0VG9rZW5zID0gYXdhaXQgZmV0Y2hBbGxMaWdodFRva2VucygpO1xuICAgIGxldCBhbGxEYXJrVG9rZW5zID0gYXdhaXQgZmV0Y2hBbGxEYXJrVG9rZW5zKCk7XG4gICAgbGV0IGFsbExpZ2h0RWZmZWN0cyA9IGF3YWl0IGZldGNoQWxsTGlnaHRFZmZlY3RzKCk7XG4gICAgbGV0IGFsbERhcmtFZmZlY3RzID0gYXdhaXQgZmV0Y2hBbGxEYXJrRWZmZWN0cygpO1xuICAgIGNvbnN0IFN3YXAgPSAobm9kZSkgPT4ge1xuICAgICAgICBzd2FwRmlsbChub2RlLCBhbGxMaWdodFRva2VucywgYWxsRGFya1Rva2Vucyk7XG4gICAgICAgIHN3YXBTdHJva2Uobm9kZSwgYWxsTGlnaHRUb2tlbnMsIGFsbERhcmtUb2tlbnMpO1xuICAgICAgICBzd2FwRWZmZWN0cyhub2RlLCBhbGxMaWdodEVmZmVjdHMsIGFsbERhcmtFZmZlY3RzKTtcbiAgICAgICAgaWYgKFwiY2hpbGRyZW5cIiBpbiBub2RlKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIG5vZGUuY2hpbGRyZW4pIHtcbiAgICAgICAgICAgICAgICBpZiAoY2hpbGQubG9ja2VkKSB7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBTd2FwKGNoaWxkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBkbyBub3RoaW5nXG4gICAgICAgIH1cbiAgICB9O1xuICAgIFN3YXAobm9kZSk7XG4gICAgLy8gc3dhcFN0cm9rZShub2RlKTtcbiAgICAvLyBzd2FwRWZmZWN0cyhub2RlKTtcbn07XG5leHBvcnQgeyBUaGVtZVN3YXAgfTtcbi8vIFJ1biB0aGlzIGluIHRva2VucyBmaWxlXG5jb25zdCBHZXRBbGxMb2NhbFBhaW50U3R5bGVzID0gKCkgPT4ge1xuICAgIGZ1bmN0aW9uIGNsb25lKHZhbCkge1xuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh2YWwpKTtcbiAgICB9XG4gICAgbGV0IGFsbFBhaW50U3R5bGVzID0gZmlnbWEuZ2V0TG9jYWxQYWludFN0eWxlcygpO1xuICAgIC8vIGNvbnNvbGUubG9nKGFsbFBhaW50U3R5bGVzKTtcbiAgICBsZXQgYWxsU3R5bGVzQXJyYXkgPSBbXTtcbiAgICBmb3IgKGNvbnN0IHBhaW50U3R5bGUgb2YgYWxsUGFpbnRTdHlsZXMpIHtcbiAgICAgICAgbGV0IGNvbG9yID0gY2xvbmUocGFpbnRTdHlsZS5wYWludHNbMF0pO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhjb2xvcik7XG4gICAgICAgIGxldCBjb2xvclJHQiA9IGNvbG9yLmNvbG9yO1xuICAgICAgICBsZXQgcmdiVG9JbnQgPSAodmFsdWUpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLmNlaWwodmFsdWUgKiAyNTUpO1xuICAgICAgICB9O1xuICAgICAgICBsZXQgcmdiYSA9IHtcbiAgICAgICAgICAgIHI6IHJnYlRvSW50KGNvbG9yUkdCLnIpLFxuICAgICAgICAgICAgZzogcmdiVG9JbnQoY29sb3JSR0IuZyksXG4gICAgICAgICAgICBiOiByZ2JUb0ludChjb2xvclJHQi5iKSxcbiAgICAgICAgICAgIGE6IGNvbG9yLm9wYWNpdHksXG4gICAgICAgIH07XG4gICAgICAgIGFsbFN0eWxlc0FycmF5LnB1c2goe1xuICAgICAgICAgICAgbmFtZTogcGFpbnRTdHlsZS5uYW1lLFxuICAgICAgICAgICAgc3R5bGVLZXk6IHBhaW50U3R5bGUua2V5LFxuICAgICAgICB9KTtcbiAgICAgICAgY29uc29sZS5sb2coYWxsU3R5bGVzQXJyYXkpO1xuICAgIH1cbn07XG4vLyBSdW4gdGhpcyBpbiB0b2tlbnMgZmlsZVxuY29uc3QgR2V0QWxsTG9jYWxFZmZlY3RTdHlsZXMgPSAoKSA9PiB7XG4gICAgbGV0IGFsbEVmZmVjdFN0eWxlcyA9IGZpZ21hLmdldExvY2FsRWZmZWN0U3R5bGVzKCk7XG4gICAgbGV0IGFsbEVmZmVjdHMgPSBbXTtcbiAgICBmb3IgKGNvbnN0IGVmZmVjdFN0eWxlIG9mIGFsbEVmZmVjdFN0eWxlcykge1xuICAgICAgICBhbGxFZmZlY3RzLnB1c2goeyBuYW1lOiBlZmZlY3RTdHlsZS5uYW1lLCBzdHlsZUtleTogZWZmZWN0U3R5bGUua2V5IH0pO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhhbGxFZmZlY3RzKTtcbn07XG5jb25zdCBmZXRjaEFsbExpZ2h0VG9rZW5zID0gYXN5bmMgKCkgPT4ge1xuICAgIHJldHVybiBQcm9taXNlLmFsbChMaWdodFVpQ29sb3JzLm1hcCgoaXRlbSkgPT4gZmlnbWEuaW1wb3J0U3R5bGVCeUtleUFzeW5jKGl0ZW0uc3R5bGVLZXkpKSk7XG59O1xuY29uc3QgZmV0Y2hBbGxMaWdodEVmZmVjdHMgPSBhc3luYyAoKSA9PiB7XG4gICAgcmV0dXJuIFByb21pc2UuYWxsKExpZ2h0VWlFZmZlY3RzLm1hcCgoaXRlbSkgPT4gZmlnbWEuaW1wb3J0U3R5bGVCeUtleUFzeW5jKGl0ZW0uc3R5bGVLZXkpKSk7XG59O1xuY29uc3QgZmV0Y2hBbGxEYXJrVG9rZW5zID0gYXN5bmMgKCkgPT4ge1xuICAgIHJldHVybiBQcm9taXNlLmFsbChEYXJrVWlDb2xvcnMubWFwKChpdGVtKSA9PiBmaWdtYS5pbXBvcnRTdHlsZUJ5S2V5QXN5bmMoaXRlbS5zdHlsZUtleSkpKTtcbn07XG5jb25zdCBmZXRjaEFsbERhcmtFZmZlY3RzID0gYXN5bmMgKCkgPT4ge1xuICAgIHJldHVybiBQcm9taXNlLmFsbChEYXJrVWlFZmZlY3RzLm1hcCgoaXRlbSkgPT4gZmlnbWEuaW1wb3J0U3R5bGVCeUtleUFzeW5jKGl0ZW0uc3R5bGVLZXkpKSk7XG59O1xuIiwiZXhwb3J0IGNvbnN0IHBhZGRpbmdIb3Jpem9udGFsID0gKHNwYWNpbmcpID0+IHtcbiAgbGV0IGdyaWRzO1xuXG4gIGlmIChzcGFjaW5nID09IDApIHtcbiAgICBncmlkcyA9IFtdO1xuICB9IGVsc2Uge1xuICAgIGdyaWRzID0gW1xuICAgICAge1xuICAgICAgICBwYXR0ZXJuOiBcIkNPTFVNTlNcIixcbiAgICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgICAgY29sb3I6IHtcbiAgICAgICAgICByOiAwLFxuICAgICAgICAgIGc6IDAuNSxcbiAgICAgICAgICBiOiAxLFxuICAgICAgICAgIGE6IDAuMDUsXG4gICAgICAgIH0sXG4gICAgICAgIGd1dHRlclNpemU6IDEsXG4gICAgICAgIGFsaWdubWVudDogXCJTVFJFVENIXCIsXG4gICAgICAgIGNvdW50OiAxLFxuICAgICAgICBvZmZzZXQ6IHNwYWNpbmcsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXR0ZXJuOiBcIkNPTFVNTlNcIixcbiAgICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgICAgY29sb3I6IHtcbiAgICAgICAgICByOiAwLFxuICAgICAgICAgIGc6IDEsXG4gICAgICAgICAgYjogMCxcbiAgICAgICAgICBhOiAwLjIsXG4gICAgICAgIH0sXG4gICAgICAgIGd1dHRlclNpemU6IDEsXG4gICAgICAgIGFsaWdubWVudDogXCJNQVhcIixcbiAgICAgICAgY291bnQ6IDEsXG4gICAgICAgIHNlY3Rpb25TaXplOiBzcGFjaW5nLFxuICAgICAgICBvZmZzZXQ6IDAsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXR0ZXJuOiBcIkNPTFVNTlNcIixcbiAgICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgICAgY29sb3I6IHtcbiAgICAgICAgICByOiAwLFxuICAgICAgICAgIGc6IDEsXG4gICAgICAgICAgYjogMCxcbiAgICAgICAgICBhOiAwLjIsXG4gICAgICAgIH0sXG4gICAgICAgIGd1dHRlclNpemU6IDEsXG4gICAgICAgIGFsaWdubWVudDogXCJNSU5cIixcbiAgICAgICAgY291bnQ6IDEsXG4gICAgICAgIHNlY3Rpb25TaXplOiBzcGFjaW5nLFxuICAgICAgICBvZmZzZXQ6IDAsXG4gICAgICB9LFxuICAgIF07XG4gIH1cblxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIHJlc29sdmUoZ3JpZHMpO1xuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBwYWRkaW5nVmVydGljYWwgPSAoc3BhY2luZykgPT4ge1xuICBsZXQgZ3JpZHM7XG5cbiAgaWYgKHNwYWNpbmcgPT0gMCkge1xuICAgIGdyaWRzID0gW107XG4gIH0gZWxzZSB7XG4gICAgZ3JpZHMgPSBbXG4gICAgICB7XG4gICAgICAgIHBhdHRlcm46IFwiUk9XU1wiLFxuICAgICAgICB2aXNpYmxlOiB0cnVlLFxuICAgICAgICBjb2xvcjoge1xuICAgICAgICAgIHI6IDAsXG4gICAgICAgICAgZzogMC41LFxuICAgICAgICAgIGI6IDEsXG4gICAgICAgICAgYTogMC4wNSxcbiAgICAgICAgfSxcbiAgICAgICAgZ3V0dGVyU2l6ZTogMSxcbiAgICAgICAgYWxpZ25tZW50OiBcIlNUUkVUQ0hcIixcbiAgICAgICAgY291bnQ6IDEsXG4gICAgICAgIG9mZnNldDogc3BhY2luZyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdHRlcm46IFwiUk9XU1wiLFxuICAgICAgICB2aXNpYmxlOiB0cnVlLFxuICAgICAgICBjb2xvcjoge1xuICAgICAgICAgIHI6IDAsXG4gICAgICAgICAgZzogMSxcbiAgICAgICAgICBiOiAwLFxuICAgICAgICAgIGE6IDAuMixcbiAgICAgICAgfSxcbiAgICAgICAgZ3V0dGVyU2l6ZTogMSxcbiAgICAgICAgYWxpZ25tZW50OiBcIk1BWFwiLFxuICAgICAgICBjb3VudDogMSxcbiAgICAgICAgc2VjdGlvblNpemU6IHNwYWNpbmcsXG4gICAgICAgIG9mZnNldDogMCxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdHRlcm46IFwiUk9XU1wiLFxuICAgICAgICB2aXNpYmxlOiB0cnVlLFxuICAgICAgICBjb2xvcjoge1xuICAgICAgICAgIHI6IDAsXG4gICAgICAgICAgZzogMSxcbiAgICAgICAgICBiOiAwLFxuICAgICAgICAgIGE6IDAuMixcbiAgICAgICAgfSxcbiAgICAgICAgZ3V0dGVyU2l6ZTogMSxcbiAgICAgICAgYWxpZ25tZW50OiBcIk1JTlwiLFxuICAgICAgICBjb3VudDogMSxcbiAgICAgICAgc2VjdGlvblNpemU6IHNwYWNpbmcsXG4gICAgICAgIG9mZnNldDogMCxcbiAgICAgIH0sXG4gICAgXTtcbiAgfVxuXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgcmVzb2x2ZShncmlkcyk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGJhc2VsaW5lR3JpZHMgPSB7XG4gIHBhdHRlcm46IFwiUk9XU1wiLFxuICB2aXNpYmxlOiB0cnVlLFxuICBjb2xvcjoge1xuICAgIHI6IDEsXG4gICAgZzogMCxcbiAgICBiOiAwLFxuICAgIGE6IDAuMTAwMDAwMDAxNDkwMTE2MTIsXG4gIH0sXG4gIGd1dHRlclNpemU6IDQsXG4gIGFsaWdubWVudDogXCJNSU5cIixcbiAgY291bnQ6IEluZmluaXR5LFxuICBzZWN0aW9uU2l6ZTogNCxcbiAgb2Zmc2V0OiAwLFxufTtcblxuZXhwb3J0IGNvbnN0IG1heFdpZHRoR3JpZHMgPSBbXG4gIHtcbiAgICBwYXR0ZXJuOiBcIkNPTFVNTlNcIixcbiAgICB2aXNpYmxlOiB0cnVlLFxuICAgIGNvbG9yOiB7XG4gICAgICByOiAxLFxuICAgICAgZzogMC43MTk5OTk5NjkwMDU1ODQ3LFxuICAgICAgYjogMCxcbiAgICAgIGE6IDAuMjAwMDAwMDAyOTgwMjMyMjQsXG4gICAgfSxcbiAgICBndXR0ZXJTaXplOiAxMDI1LFxuICAgIGFsaWdubWVudDogXCJTVFJFVENIXCIsXG4gICAgY291bnQ6IDIsXG4gICAgb2Zmc2V0OiAwLFxuICB9LFxuICB7XG4gICAgcGF0dGVybjogXCJDT0xVTU5TXCIsXG4gICAgdmlzaWJsZTogdHJ1ZSxcbiAgICBjb2xvcjoge1xuICAgICAgcjogMCxcbiAgICAgIGc6IDAuNSxcbiAgICAgIGI6IDEsXG4gICAgICBhOiAwLjEsXG4gICAgfSxcbiAgICBndXR0ZXJTaXplOiAxLFxuICAgIGFsaWdubWVudDogXCJDRU5URVJcIixcbiAgICBjb3VudDogMSxcbiAgICBzZWN0aW9uU2l6ZTogMTAyNSxcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBtYXhXaWR0aExlZnRBbGlnbmVkR3JpZHMgPSBbXG4gIHtcbiAgICBwYXR0ZXJuOiBcIkNPTFVNTlNcIixcbiAgICB2aXNpYmxlOiB0cnVlLFxuICAgIGNvbG9yOiB7XG4gICAgICByOiAwLFxuICAgICAgZzogMC41LFxuICAgICAgYjogMSxcbiAgICAgIGE6IDAuMDUsXG4gICAgfSxcbiAgICBndXR0ZXJTaXplOiAxLFxuICAgIGFsaWdubWVudDogXCJNSU5cIixcbiAgICBjb3VudDogMSxcbiAgICBzZWN0aW9uU2l6ZTogMTAyNSxcbiAgICBvZmZzZXQ6IDAsXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgZ2V0TWF4V2lkdGhHcmlkcyA9ICgpID0+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICByZXNvbHZlKG1heFdpZHRoR3JpZHMpO1xuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBjb2x1bW5HcmlkcyA9IFtcbiAge1xuICAgIHBhdHRlcm46IFwiQ09MVU1OU1wiLFxuICAgIHZpc2libGU6IHRydWUsXG4gICAgY29sb3I6IHtcbiAgICAgIHI6IDAuODI5OTk5OTIzNzA2MDU0NyxcbiAgICAgIGc6IDAsXG4gICAgICBiOiAxLFxuICAgICAgYTogMC4xLFxuICAgIH0sXG4gICAgZ3V0dGVyU2l6ZTogMTYsXG4gICAgYWxpZ25tZW50OiBcIlNUUkVUQ0hcIixcbiAgICBjb3VudDogMTIsXG4gICAgb2Zmc2V0OiAwLFxuICB9LFxuXTtcbiIsImV4cG9ydCBjb25zdCBMaWdodFVpQ29sb3JzID0gW1xuICB7XG4gICAgbmFtZTogXCJsaWdodCB1aS9pbnRlbnRpb25zL3ByaW1hcnkubWFpblwiLFxuICAgIHN0eWxlS2V5OiBcImNmMGM4ZTg4ZWI2NWI4MDQ5ZmVjYTYwYWM4M2UxZGUzZDNhYjZlOGJcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwibGlnaHQgdWkvaW50ZW50aW9ucy9wcmltYXJ5Lm1haW4uNTBcIixcbiAgICBzdHlsZUtleTogXCJhM2VlZWJhZDVmOWYwMzdhYzkzYTk1Yzk3OGFjOGNjOGI3Y2NmYTM3XCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImxpZ2h0IHVpL2ludGVudGlvbnMvcHJpbWFyeS5kYXJrXCIsXG4gICAgc3R5bGVLZXk6IFwiZGE5Mzg2OThjOWQyMjMyMjFkNjNjN2M1NTAxYTkwNTdhMGQ1ZjZmYlwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJsaWdodCB1aS9pbnRlbnRpb25zL3ByaW1hcnkubGlnaHRcIixcbiAgICBzdHlsZUtleTogXCIwZTJhYmUzOGMxOTUwMWJlZGJhMDY3MDc0YjlmZjU5Y2EzYTQ5MTRiXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImxpZ2h0IHVpL2ludGVudGlvbnMvZXJyb3IubWFpblwiLFxuICAgIHN0eWxlS2V5OiBcIjc5OGNiOGY4OThhYjJhNTA4YTdiYTQ5MWQ4OTkwMTFmZGE4OTY1NzdcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwibGlnaHQgdWkvaW50ZW50aW9ucy9lcnJvci5tYWluLjUwXCIsXG4gICAgc3R5bGVLZXk6IFwiNjUxMDA5MDJlNzMxOTJhMzA1NGY2YWJlNThhN2M0NDE3YTA2Mzk4NFwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJsaWdodCB1aS9pbnRlbnRpb25zL2Vycm9yLmRhcmtcIixcbiAgICBzdHlsZUtleTogXCIxMjc3NjQ1NmU2OGFkZjRhYjVlMzkxNzk3YzNjODRlOTJiMGY4NmMyXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImxpZ2h0IHVpL2ludGVudGlvbnMvZXJyb3IubGlnaHRcIixcbiAgICBzdHlsZUtleTogXCJkMzVkYWJjM2VlN2Y1YmUxOGFjMGQyYWViNzRjNzJiYWFhOGJiY2E3XCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImxpZ2h0IHVpL2ludGVudGlvbnMvd2FybmluZy5tYWluXCIsXG4gICAgc3R5bGVLZXk6IFwiZjI3YTYwZGY4YzE2MjE4NWVhMjQ3MmE4MDFiMjcxZWY2NjJjMDQyOVwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJsaWdodCB1aS9pbnRlbnRpb25zL3dhcm5pbmcubWFpbi41MFwiLFxuICAgIHN0eWxlS2V5OiBcImQ2ZjA5NGI0YWFkZDMzZGM2NDIwOTU4Mjk3YzRiODhiYzI5NDkxMzVcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwibGlnaHQgdWkvaW50ZW50aW9ucy93YXJuaW5nLmRhcmtcIixcbiAgICBzdHlsZUtleTogXCI2MTVkNmQ1Y2FjNDg1NWU5ODFjOGI5NDJiOTg2ZWU3MDViNTY4YjI4XCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImxpZ2h0IHVpL2ludGVudGlvbnMvd2FybmluZy5saWdodFwiLFxuICAgIHN0eWxlS2V5OiBcImQ0YzMwMTM1ZjRjMTJjN2RmNDQ0MjIyMjExNmE5ZWI3Y2ViZjY1YmVcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwibGlnaHQgdWkvaW50ZW50aW9ucy9zdWNjZXNzLm1haW5cIixcbiAgICBzdHlsZUtleTogXCJlNGFhNDFlOGJmNTJmOTRlZjVmY2UzNjY5ZjUxMGFmM2NiNzljNWE3XCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImxpZ2h0IHVpL2ludGVudGlvbnMvc3VjY2Vzcy5tYWluLjUwXCIsXG4gICAgc3R5bGVLZXk6IFwiOTNmOGNiMGFjNTQwMmM5Mjg2ZjIwZTk0YTJlYTFkMGIwNGEwMGQ5ZlwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJsaWdodCB1aS9pbnRlbnRpb25zL3N1Y2Nlc3MuZGFya1wiLFxuICAgIHN0eWxlS2V5OiBcImQ5ODgzYjUzYzI1MzliZjFlMTA2ODIwNWZlMWQwNTlkNTgzMTVlNGZcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwibGlnaHQgdWkvaW50ZW50aW9ucy9zdWNjZXNzLmxpZ2h0XCIsXG4gICAgc3R5bGVLZXk6IFwiNTI3ZjY4Y2U3Y2NiYWQ4MTQ1NjRmNDdmODhiZGVhZGE4MDc3NTM3N1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJsaWdodCB1aS90eXBvZ3JhcGh5L3RleHQucHJpbWFyeVwiLFxuICAgIHN0eWxlS2V5OiBcIjhmMDVjNjNkZTdmMTAwYjJiZDhmYWQ3YjhiZDcxNDg5YjYzN2MwNjdcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwibGlnaHQgdWkvdHlwb2dyYXBoeS90ZXh0LnNlY29uZGFyeVwiLFxuICAgIHN0eWxlS2V5OiBcIjk3MDYzYTVmNjJjMzU0ZTZhZTA5MTlkNTBiNjhkMGJhZGI0YTEyMmVcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwibGlnaHQgdWkvdHlwb2dyYXBoeS90ZXh0LmRpc2FibGVkXCIsXG4gICAgc3R5bGVLZXk6IFwiYTgwOWY3NWUxNGZiZTYyOTYyNzJlODUzMTEwNmY2Y2M0YzY5MjU1M1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJsaWdodCB1aS90eXBvZ3JhcGh5L3RleHQuY29udHJhc3RUZXh0LnByaW1hcnlcIixcbiAgICBzdHlsZUtleTogXCJiMjhhN2ZjZGQyNDczMjNkN2JhOTk5NjFjOTYwOGNmODM3OGJhZGExXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImxpZ2h0IHVpL3R5cG9ncmFwaHkvdGV4dC5jb250cmFzdFRleHQuZXJyb3JcIixcbiAgICBzdHlsZUtleTogXCJjNDJjNWYxOTkwMzkwYzQxM2FlNjI5MjVlOWFmMGQ1MWJmMzJjOTQ1XCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImxpZ2h0IHVpL3R5cG9ncmFwaHkvdGV4dC5jb250cmFzdFRleHQud2FybmluZ1wiLFxuICAgIHN0eWxlS2V5OiBcImVlY2Q4MmNjYWFlOTg4NjI0YzQ1ZjI4Mjk2NTY0MDM3ZGE4NWNjMWFcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwibGlnaHQgdWkvdHlwb2dyYXBoeS90ZXh0LmNvbnRyYXN0VGV4dC5zdWNjZXNzXCIsXG4gICAgc3R5bGVLZXk6IFwiZDdkYmFlZjY2YTkzMmZmMjc2ZjZmNGFhNTE5ODVhMDU5ZGVkZmJmOFwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJsaWdodCB1aS90eXBvZ3JhcGh5L3RleHQuYWN0aW9uLmRpc2FibGVkXCIsXG4gICAgc3R5bGVLZXk6IFwiZjgxYTFmNzQ4NzAzMTY5OGQxNWMyMzk0ZTRjNzRmY2M5ZWNjYzI5OVwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJsaWdodCB1aS90eXBvZ3JhcGh5L3RleHQuY29udHJhc3RUZXh0LmNvbXBsaWFudFwiLFxuICAgIHN0eWxlS2V5OiBcImNhOGU4Njk1OTJiZDBjM2I5NjgwNmJjMTI0MGM1ZjRiZGZmMzhiMWRcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwibGlnaHQgdWkvdHlwb2dyYXBoeS90ZXh0LmNvbnRyYXN0VGV4dC5ub25Db21wbGlhbnRcIixcbiAgICBzdHlsZUtleTogXCI2Y2Q2Mjg4OWM2YmVhNjdmYTZlMmY4NGZhNTgxNGYxZjIxN2RlM2I4XCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImxpZ2h0IHVpL3R5cG9ncmFwaHkvdGV4dC5jb250cmFzdFRleHQubWlzc2VkXCIsXG4gICAgc3R5bGVLZXk6IFwiNzJkNTljODk5MTgyYjQ2NDcxMzA3OGFlOGNiY2E2YzdjNDU5MTdjN1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJsaWdodCB1aS90eXBvZ3JhcGh5L3RleHQuY29udHJhc3RUZXh0LnByZW1pdW1cIixcbiAgICBzdHlsZUtleTogXCIxZjA2MzhhZDY3NzJhNWI1MDU1YjIyNTgyY2E0ZTdjZmNmNDAwODY5XCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImxpZ2h0IHVpL3R5cG9ncmFwaHkvdGV4dC5jb250cmFzdFRleHQubWVzc2FnZVwiLFxuICAgIHN0eWxlS2V5OiBcIjgzYmUyZDFkNmY1MGIzOTYyNjQ3MTBlMDdiZTEwMDE4NjdlNDk4MjVcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwibGlnaHQgdWkvYnV0dG9ucy9hY3Rpb24uZGlzYWJsZWRCYWNrZ3JvdW5kXCIsXG4gICAgc3R5bGVLZXk6IFwiNzNiMTVlM2E3OWVlZWE3NTcyODNhNDRjZjcxMTMxMzA1Y2JhMjM5OVwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJsaWdodCB1aS9iYWNrZ3JvdW5kL2JhY2tncm91bmQucGFwZXJcIixcbiAgICBzdHlsZUtleTogXCIyM2U5NGZjZWVkOWFjY2JkYTRkYjljNjcyYzQzZDIxYjRkMjg2ZTRjXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImxpZ2h0IHVpL2JhY2tncm91bmQvYmFja2dyb3VuZC5kZWZhdWx0XCIsXG4gICAgc3R5bGVLZXk6IFwiOTAzZTViZjI3NDEzOWVlYjlmNDk2OGE5ZWYwOGVjMDVlYWYwYjI3NFwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJsaWdodCB1aS91dGlsaXR5L2RpdmlkZXJcIixcbiAgICBzdHlsZUtleTogXCJlZTRkZGNlMmU1NmFkNDdjNDIxNmQ1ODI3YTI4M2I5NDNhNzk0Yzc4XCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImxpZ2h0IHVpL3V0aWxpdHkvZGl2aWRlci5zdHJvbmdcIixcbiAgICBzdHlsZUtleTogXCIxN2FkYmU0ZTI3YmE5YjA4N2Y2MWFmMTQyZGVlYjA3ZmMwYzAxNTQwXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImxpZ2h0IHVpL3V0aWxpdHkvb3ZlcmxheVwiLFxuICAgIHN0eWxlS2V5OiBcIjExYTQ3NzgwMThjOGJiMjM2YWJlMGQ4NDdjNzMxYTIxN2UyZDZkNDhcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwibGlnaHQgdWkvNERQL05NXCIsXG4gICAgc3R5bGVLZXk6IFwiZGRjYmY2OGZhNWMxZWFhNzIwNzcxNjQyNzJiN2FlNWI5ZTVlNGVkN1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJsaWdodCB1aS80RFAvQUNcIixcbiAgICBzdHlsZUtleTogXCIyMjBkMzQ5Mzc0N2NkOGQ4YmRjNWQ0YTBlNzk2NWMzNmEzYzUyMzQ5XCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImxpZ2h0IHVpLzREUC9NQVBcIixcbiAgICBzdHlsZUtleTogXCJhYWEzYTUzMWExMjRmYTg1NGUwOWQzOThmOThmYjQ3Yjk4OWE4YTcyXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImxpZ2h0IHVpLzREUC9GVFBcIixcbiAgICBzdHlsZUtleTogXCIyMjRlNDkxMjAyN2JlOWY3NTY4NWZkNDBiMjUyOGJhOWYzNGZlOTU4XCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImxpZ2h0IHVpL2RhdGEvcG93ZXJcIixcbiAgICBzdHlsZUtleTogXCIwNzgzNGUwMTQ1ZTFjMDE1NDY1OTM0NjIwMDYxMjhmYTZhNTFkNmFjXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImxpZ2h0IHVpL2RhdGEvaGVhcnQgcmF0ZVwiLFxuICAgIHN0eWxlS2V5OiBcIjVhMzNiOGI0YTA1ZjE4OTk2MDM1NDI1ZTJiYTZhZjgxNzkxMjExY2RcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwibGlnaHQgdWkvZGF0YS9jYWRlbmNlXCIsXG4gICAgc3R5bGVLZXk6IFwiN2QyOGJlNjM4NzA5NjI2YjU5ZjI4MDIwODY5NmZiODEzMDYyNGMwYVwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJsaWdodCB1aS9kYXRhL3NwZWVkXCIsXG4gICAgc3R5bGVLZXk6IFwiZTllYWY2Yjg0NGZkMWY2ZjE3ZDZjYjNlOGU4NGIxOWVjNTA5N2FkY1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJsaWdodCB1aS9jb21wbGlhbmNlL2NvbXBsaWFudFwiLFxuICAgIHN0eWxlS2V5OiBcImI1ODA3YjcyYWM0Yzc2ODUyMTQwYTljYTY4YjQ2OTg1NjcwNTNmMTFcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwibGlnaHQgdWkvY29tcGxpYW5jZS9ub25Db21wbGlhbnRcIixcbiAgICBzdHlsZUtleTogXCI4ZjlkMWJmNWIwZDFjZTM3NTNiMTBlOGNkZTYyMGFlYjZjY2FmZjExXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImxpZ2h0IHVpL2NvbXBsaWFuY2UvbWlzc2VkXCIsXG4gICAgc3R5bGVLZXk6IFwiZDQ0NDY1ZmY2OGI1ZmVkMTk2ZDIxNzA1NzBkNzI4NWY1MjAxNWIyNlwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJsaWdodCB1aS9jb21wbGlhbmNlL3VucGFpcmVkXCIsXG4gICAgc3R5bGVLZXk6IFwiMThhNzczYmQzYzIzNmRiNmY3NjU2ZDA2ODNiYmRlOGI0YWRjZWYyNlwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJsaWdodCB1aS9jb21wbGlhbmNlL3NjaGVkdWxlZFwiLFxuICAgIHN0eWxlS2V5OiBcIjZkYTg4YzUwYmRiMmM0YTZjZGU4YWNkY2ViNGQ5NGY3ZTkzNWRjZDBcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwibGlnaHQgdWkvaW50ZXJhY3Rpb24vaW50ZW50aW9ucy9wcmltYXJ5Lm1haW4uaG92ZXJcIixcbiAgICBzdHlsZUtleTogXCIzMTQ0YTlhZmI1NDE5NjU1OGM1MzBhYjczNmFhYzExNDIxZmM0MjU0XCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImxpZ2h0IHVpL2ludGVyYWN0aW9uL2ludGVudGlvbnMvcHJpbWFyeS5tYWluLnByZXNzZWRcIixcbiAgICBzdHlsZUtleTogXCI0ZWJlMGUyMDllMzZiNWI1YmZjZTA0MTUyZTlmMTQ5Mjg1NDJiYWRiXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImxpZ2h0IHVpL2ludGVyYWN0aW9uL2ludGVudGlvbnMvZXJyb3IubWFpbi5ob3ZlclwiLFxuICAgIHN0eWxlS2V5OiBcImRhNTFhZDIzN2ZiMTliMTA2Yjg4ZjVhMjlkOTg5MzdhZGRjM2EwYjBcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwibGlnaHQgdWkvaW50ZXJhY3Rpb24vaW50ZW50aW9ucy9lcnJvci5tYWluLnByZXNzZWRcIixcbiAgICBzdHlsZUtleTogXCI3OGZiYjk4MWUyZTVlOGIzN2ZkM2U2Y2UyYTllNWE4OGI5MjRlZDc4XCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImxpZ2h0IHVpL2ludGVyYWN0aW9uL2ludGVudGlvbnMvd2FybmluZy5tYWluLmhvdmVyXCIsXG4gICAgc3R5bGVLZXk6IFwiYTY4MmNiNzMzY2RlNDIzMzNkOTA3ZTdhNGIwYWM5Y2U4ZWYyMjY0MlwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJsaWdodCB1aS9pbnRlcmFjdGlvbi9pbnRlbnRpb25zL3dhcm5pbmcubWFpbi5wcmVzc2VkXCIsXG4gICAgc3R5bGVLZXk6IFwiZjIxMWI4MGFkYjY3OWJjMWIyMDg2MGI3NTI5ZjkwNGYzMDk4Mjc4MFwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJsaWdodCB1aS9pbnRlcmFjdGlvbi9pbnRlbnRpb25zL3N1Y2Nlc3MubWFpbi5ob3ZlclwiLFxuICAgIHN0eWxlS2V5OiBcIjNiYTFiYWUzY2MwMWZiMjRmNTNhNDE4NmFlMzQ1OWE3NzQ5NGZlNmFcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwibGlnaHQgdWkvaW50ZXJhY3Rpb24vaW50ZW50aW9ucy9zdWNjZXNzLm1haW4ucHJlc3NlZFwiLFxuICAgIHN0eWxlS2V5OiBcIjdjNmJjZmQxZGE5ZmJiZjZjNWUyYmRlZDY5NThjNzBlZjVhZjhkMGZcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwibGlnaHQgdWkvaW50ZXJhY3Rpb24vYmFja2dyb3VuZC9kZWZhdWx0LmhvdmVyXCIsXG4gICAgc3R5bGVLZXk6IFwiNzY0ZTU4MTU5OGRkZTJhZjM1NDQ2MDgxZmMyM2JlYWYxZDdkNDJlMVwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJsaWdodCB1aS9pbnRlcmFjdGlvbi9iYWNrZ3JvdW5kL2RlZmF1bHQucHJlc3NlZFwiLFxuICAgIHN0eWxlS2V5OiBcIjUwYTczZWJjYjA2MTJhZDVkMTcyYmVhYjIyNzljOWQ1MzMwYmMxMGFcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwibGlnaHQgdWkvaW50ZXJhY3Rpb24vYmFja2dyb3VuZC9wYXBlci5ob3ZlclwiLFxuICAgIHN0eWxlS2V5OiBcIjIyZTNkMDJkNWY4YjFkOTJiZWEzY2EwY2NhZWRlYmM4MzRkNzRkODRcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwibGlnaHQgdWkvaW50ZXJhY3Rpb24vYmFja2dyb3VuZC9wYXBlci5wcmVzc2VkXCIsXG4gICAgc3R5bGVLZXk6IFwiYzRjZmUxZjM3MzA0M2VjYjBmY2FjY2JmMjI4MDk2NGI1MzIzN2IwMFwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJsaWdodCB1aS9pbnRlcmFjdGlvbi9zcGVjaWFsIHVzZS9wcmVtaXVtLmhvdmVyXCIsXG4gICAgc3R5bGVLZXk6IFwiOWE2MTJhN2Y5OWFjYWVhYTg4MjUwOGIyNTQ2Y2UxNmJhMGUyZGZlZlwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJsaWdodCB1aS9pbnRlcmFjdGlvbi9zcGVjaWFsIHVzZS9wcmVtaXVtLnByZXNzZWRcIixcbiAgICBzdHlsZUtleTogXCJmNWMyNGY0NGFkNDBiOTBiZmUxYTQyZmFmMTk0M2FjMWEwYmEwZWUxXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImxpZ2h0IHVpL3NwZWNpYWwgdXNlL3ByZW1pdW1cIixcbiAgICBzdHlsZUtleTogXCI3OGNmNDAxOGU1YmM5ZmFkNjc2OThjOWE5YTNjNjVmZGU4ZjEyN2Y2XCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImxpZ2h0IHVpL3NwZWNpYWwgdXNlL21lc3NhZ2VcIixcbiAgICBzdHlsZUtleTogXCJjODVhOWI4NDYzNDlhM2E3ZDNlZWQzNThhY2JjMzJjMjcxNWM5ODJkXCIsXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgRGFya1VpQ29sb3JzID0gW1xuICB7XG4gICAgbmFtZTogXCJkYXJrIHVpL2ludGVudGlvbnMvcHJpbWFyeS5tYWluXCIsXG4gICAgc3R5bGVLZXk6IFwiMmI3OTJkODRjOWRkYjViYjU0YjRlN2NlMDAwYzU5NWM3OWQ3NDhjYVwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJkYXJrIHVpL2ludGVudGlvbnMvcHJpbWFyeS5tYWluLjUwXCIsXG4gICAgc3R5bGVLZXk6IFwiYjM3MWFhYjc0NTIyYjAxYWIwYmE4NzBhOWUyNmMzYjdlNmU0ODI4N1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJkYXJrIHVpL2ludGVudGlvbnMvcHJpbWFyeS5kYXJrXCIsXG4gICAgc3R5bGVLZXk6IFwiYjQzYmQxMTEyNTBjZTc0ZDQ4Y2ZkNzFhYzAwYzFjMWI1NThiMDJmMFwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJkYXJrIHVpL2ludGVudGlvbnMvcHJpbWFyeS5saWdodFwiLFxuICAgIHN0eWxlS2V5OiBcImYzNzdlNzc1Yzg0ZjI3ODI1ZjhhYzgwMWU3OGQ4NzA4YzA1ZjhkZjFcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiZGFyayB1aS9pbnRlbnRpb25zL2Vycm9yLm1haW5cIixcbiAgICBzdHlsZUtleTogXCI3NjdjMmE5ODk3MDYyZGVlMGQwZjYzMDA0MDZmNmU1NTg1ZjY4NGM3XCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImRhcmsgdWkvaW50ZW50aW9ucy9lcnJvci5tYWluLjUwXCIsXG4gICAgc3R5bGVLZXk6IFwiNzZkNjhjOTczNzEzMGIzMTNkZmU2ZDZlMTgyMDJlNTZkYmZjZGYwYlwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJkYXJrIHVpL2ludGVudGlvbnMvZXJyb3IuZGFya1wiLFxuICAgIHN0eWxlS2V5OiBcIjM0YTlhMzQ0YzI1NDE2ZDFhN2VhNmQ2NzMyZGIxM2U3YmM2Y2MzOTdcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiZGFyayB1aS9pbnRlbnRpb25zL2Vycm9yLmxpZ2h0XCIsXG4gICAgc3R5bGVLZXk6IFwiOTU3NjIwZTU0ZDE1YWZjZTU1MzE0Y2E1ODljN2ExZTkzNDM1YTIwMVwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJkYXJrIHVpL2ludGVudGlvbnMvd2FybmluZy5tYWluXCIsXG4gICAgc3R5bGVLZXk6IFwiODk0ZmJkMzM1ZDhiMGY2YjFjZWU0ZWM1YWM3YTA0NzkzOTdhNmI0Y1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJkYXJrIHVpL2ludGVudGlvbnMvd2FybmluZy5tYWluLjUwXCIsXG4gICAgc3R5bGVLZXk6IFwiN2U1Yzk4MjcwYWM4ZDZkMDRkOGI2MTNlODI5ZTllNzA3ZmU0MjMxNlwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJkYXJrIHVpL2ludGVudGlvbnMvd2FybmluZy5kYXJrXCIsXG4gICAgc3R5bGVLZXk6IFwiNDRiNDJhODUwNTI4NDEzODdiYzY3N2M1NzE5ODc0Y2YwMjA3Y2FiNVwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJkYXJrIHVpL2ludGVudGlvbnMvd2FybmluZy5saWdodFwiLFxuICAgIHN0eWxlS2V5OiBcImFjYzg4Yjc5MTk3OTJhMjEzMmMzNWRlZDYwMDRkMWRmMDNlYTdiYmJcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiZGFyayB1aS9pbnRlbnRpb25zL3N1Y2Nlc3MubWFpblwiLFxuICAgIHN0eWxlS2V5OiBcIjJkNDRmM2EwYzYwODc4Y2VmNWRiZDEwYzU5YTQxN2FhOTBjMGMxYmZcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiZGFyayB1aS9pbnRlbnRpb25zL3N1Y2Nlc3MubWFpbi41MFwiLFxuICAgIHN0eWxlS2V5OiBcImY4MTRjYmM1YjM2MzBhNWUyMmM5NTA1NjZhZTQ2MjcyM2E4NGRjNThcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiZGFyayB1aS9pbnRlbnRpb25zL3N1Y2Nlc3MuZGFya1wiLFxuICAgIHN0eWxlS2V5OiBcIjQzMjIyNzkxZjdkNWFmZGU4Yjg0YmRiN2E3Yzc1YTZhOGNjOWQzMzRcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiZGFyayB1aS9pbnRlbnRpb25zL3N1Y2Nlc3MubGlnaHRcIixcbiAgICBzdHlsZUtleTogXCI1MzYzYzE3MDkyM2FkZmUwOTMzMmMyYWI5NWY0Njg1NmZkNTZiNzJlXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImRhcmsgdWkvdHlwb2dyYXBoeS90ZXh0LnByaW1hcnlcIixcbiAgICBzdHlsZUtleTogXCIzZmRiZDQzZGQyNDYzYzY0Yjk0ZTBiODFhOTE2YTYwNmMwOGIwZjFjXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImRhcmsgdWkvdHlwb2dyYXBoeS90ZXh0LnNlY29uZGFyeVwiLFxuICAgIHN0eWxlS2V5OiBcIjlkMmU1MTFkOWEzMWViZDc2ZTMwMmFiMjVkMWU5OTVlNmE4M2FjMWNcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiZGFyayB1aS90eXBvZ3JhcGh5L3RleHQuZGlzYWJsZWRcIixcbiAgICBzdHlsZUtleTogXCJjOTg4ODNlMDdiZTgwYmU2YmNkMTg4MTRlYjI5YTg3Nzk3YTk5YzZhXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImRhcmsgdWkvdHlwb2dyYXBoeS90ZXh0LmNvbnRyYXN0VGV4dC5wcmltYXJ5XCIsXG4gICAgc3R5bGVLZXk6IFwiNWI2MjJkOWI1ZjE2ZmY0NzFiNjY2ZWU4ZDk1YTM1ZWI1ZTdlNDY0YlwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJkYXJrIHVpL3R5cG9ncmFwaHkvdGV4dC5jb250cmFzdFRleHQuZXJyb3JcIixcbiAgICBzdHlsZUtleTogXCJhYzM2YjYwYTY3ZjM2ZWQ4MDcwY2FhZWRkMDQ1NjAxMmExMGMyMmQ2XCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImRhcmsgdWkvdHlwb2dyYXBoeS90ZXh0LmNvbnRyYXN0VGV4dC53YXJuaW5nXCIsXG4gICAgc3R5bGVLZXk6IFwiNTljOWJmMmE0ZDZjMDRmZDkzYzFiOWFiY2M0Y2Y1MDFmY2FkYmIyMlwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJkYXJrIHVpL3R5cG9ncmFwaHkvdGV4dC5jb250cmFzdFRleHQuc3VjY2Vzc1wiLFxuICAgIHN0eWxlS2V5OiBcIjE5NzJkYzAwMWQzMWRlYzMyNmM4ZTkzN2Y4MzAyZWUzNWZiYjg1M2ZcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiZGFyayB1aS90eXBvZ3JhcGh5L3RleHQuYWN0aW9uLmRpc2FibGVkXCIsXG4gICAgc3R5bGVLZXk6IFwiN2Y3YTRlZTFmYmNiNjUyOWU2ZmI1NjRhMGY0ODgxODhiMGRjMmIzN1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJkYXJrIHVpL3R5cG9ncmFwaHkvdGV4dC5jb250cmFzdFRleHQuY29tcGxpYW50XCIsXG4gICAgc3R5bGVLZXk6IFwiYmZiMWNhNjhhZTBhNzNhMDU0MzkwYjZhZjBhNTZjOTEyNzFiODg1MlwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJkYXJrIHVpL3R5cG9ncmFwaHkvdGV4dC5jb250cmFzdFRleHQubm9uQ29tcGxpYW50XCIsXG4gICAgc3R5bGVLZXk6IFwiYzJjZDIxZjU1ZTIzMmU3MjY1NWEyN2RjZjVkZTA2ZDBkYTQ0YmY0ZVwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJkYXJrIHVpL3R5cG9ncmFwaHkvdGV4dC5jb250cmFzdFRleHQubWlzc2VkXCIsXG4gICAgc3R5bGVLZXk6IFwiN2I1ZjhkMzE5NzE1MTA0YmIzZDRhMTA3Nzg4ZWM1YmZhNmVhMzFkNFwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJkYXJrIHVpL3R5cG9ncmFwaHkvdGV4dC5jb250cmFzdFRleHQucHJlbWl1bVwiLFxuICAgIHN0eWxlS2V5OiBcIjk5MTEwODk2MjBiYWQyYWM3ZjdkOTVlOTU2ZDk5ZTQ5MzZiYmNhZjhcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiZGFyayB1aS90eXBvZ3JhcGh5L3RleHQuY29udHJhc3RUZXh0Lm1lc3NhZ2VcIixcbiAgICBzdHlsZUtleTogXCJkMDk4YTc1N2Y1NDQzNzg5Nzg2NTg3MmExNmZmZWI5Yjk5YWI5NWFlXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImRhcmsgdWkvYnV0dG9ucy9hY3Rpb24uZGlzYWJsZWRCYWNrZ3JvdW5kXCIsXG4gICAgc3R5bGVLZXk6IFwiMjE0YWM0ZGY3OTZiNTFjMGY0MjYwMjhkMGY0MjY4ZWZhNmVlMzY4NVwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJkYXJrIHVpL2JhY2tncm91bmQvYmFja2dyb3VuZC5wYXBlclwiLFxuICAgIHN0eWxlS2V5OiBcIjJmMDYwZTc0MjJhOGFkMTdhMDM3YTI1MGQzNjhjZjY3MWFkYzA0NjhcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiZGFyayB1aS9iYWNrZ3JvdW5kL2JhY2tncm91bmQuZGVmYXVsdFwiLFxuICAgIHN0eWxlS2V5OiBcIjE1ZjVmZmFjM2VjOTFiMjQwODk4MTM0MzlmZmFkZDFmOTk5NGIyOWNcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiZGFyayB1aS91dGlsaXR5L2RpdmlkZXJcIixcbiAgICBzdHlsZUtleTogXCI4NGFiMGYyOThlYThmY2QwYjgyYWM4OTI5OGFkNTExNDBjYTdiNzVhXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImRhcmsgdWkvdXRpbGl0eS9kaXZpZGVyLnN0cm9uZ1wiLFxuICAgIHN0eWxlS2V5OiBcImU5MzYwYTEzZjg0NTE0ZWU0YjM5NzdkNGI2OTQ5ZjliYWI2M2NiNGZcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiZGFyayB1aS91dGlsaXR5L292ZXJsYXlcIixcbiAgICBzdHlsZUtleTogXCIyYjM4MzZkZWQzODJlMzNhOTcwNGVmMGYyZjZiMTZmYmZiYTJkM2NlXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImRhcmsgdWkvNERQL05NXCIsXG4gICAgc3R5bGVLZXk6IFwiODJkNTBmMzAxMWQ4MTU5MDJlZDQzMGRmNmQ3MzQ1ZWNkZjk0NzYxYlwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJkYXJrIHVpLzREUC9BQ1wiLFxuICAgIHN0eWxlS2V5OiBcImU4MTkzYWJmZDJmNzE1ZTQ4YjljYzdjZTRiYzZiOTVjODk3YWEwNGRcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiZGFyayB1aS80RFAvTUFQXCIsXG4gICAgc3R5bGVLZXk6IFwiZGY1N2ZlYmM4ZWY3N2RkMmMzNWJlMmQxYjk0MGFmYjgzMzE2NjhiNFwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJkYXJrIHVpLzREUC9GVFBcIixcbiAgICBzdHlsZUtleTogXCI3YmIwMjhmZjdkODczNDg2Njc4YjdjNjc2NGZjNTBmMzllNTcxZWI2XCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImRhcmsgdWkvZGF0YS9wb3dlclwiLFxuICAgIHN0eWxlS2V5OiBcIjczZDIyOGI0NjU3ODhjOGVmMmQxNmI5OTkxNTEyY2I3MmMwMTQwNDNcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiZGFyayB1aS9kYXRhL2hlYXJ0IHJhdGVcIixcbiAgICBzdHlsZUtleTogXCJjM2YzZDA5MTczNDBkOWNiMTJkYjM0NDhjMjY3YWM1NWRhNjNkNzE1XCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImRhcmsgdWkvZGF0YS9jYWRlbmNlXCIsXG4gICAgc3R5bGVLZXk6IFwiMmZhOTE1YjI5NDVlOGE3NmE3MTQzODY4MTEzN2QyOGM2MWZlNDIxNFwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJkYXJrIHVpL2RhdGEvc3BlZWRcIixcbiAgICBzdHlsZUtleTogXCJiOTc5ZmNiMTA0YzI5NmY3OGY0MGI2M2E5ZTc0YmUxN2UyYmJiYTUzXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImRhcmsgdWkvY29tcGxpYW5jZS9jb21wbGlhbnRcIixcbiAgICBzdHlsZUtleTogXCI4MDkxZTdlYzEwNzA1Njc4NDY0NDYyOGRiMTczNmJjZmFjNjJmZWQxXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImRhcmsgdWkvY29tcGxpYW5jZS9ub25Db21wbGlhbnRcIixcbiAgICBzdHlsZUtleTogXCIxNGVjNGJkYjRjNGI2OThjZmI3YzU0OGY3MzgyYjc0OGUyNTAyMGQyXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImRhcmsgdWkvY29tcGxpYW5jZS9taXNzZWRcIixcbiAgICBzdHlsZUtleTogXCI2NTc5NWFhZWFkYWNlMjc4YzVmODYwMGMzMDMyMmI5MjcxMzZjMDIzXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImRhcmsgdWkvY29tcGxpYW5jZS91bnBhaXJlZFwiLFxuICAgIHN0eWxlS2V5OiBcIjJiM2IyOTdhZWYzOTc1Y2Y1NmI5MGVjYmFkMzBmOTU1MWNiOGI1NGNcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiZGFyayB1aS9jb21wbGlhbmNlL3NjaGVkdWxlZFwiLFxuICAgIHN0eWxlS2V5OiBcImJjYzMyNjllYmIzMTdlYmQ0NWQ0OTRkZmRjZTg5Y2I5MmNjOGNhZjRcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiZGFyayB1aS9pbnRlcmFjdGlvbi9pbnRlbnRpb25zL3ByaW1hcnkubWFpbi5ob3ZlclwiLFxuICAgIHN0eWxlS2V5OiBcIjk5Njg3ZDEzNjVkZWY3MmU3MGQ0MWIwM2U1MzZmNzBjMWQzM2Q5NTZcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiZGFyayB1aS9pbnRlcmFjdGlvbi9pbnRlbnRpb25zL3ByaW1hcnkubWFpbi5wcmVzc2VkXCIsXG4gICAgc3R5bGVLZXk6IFwiZGFiOTkyOGRhNGIxYTk4YjVlNDM1NjExZjAxYjM0YmM1MWZlYzE4YVwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJkYXJrIHVpL2ludGVyYWN0aW9uL2ludGVudGlvbnMvZXJyb3IubWFpbi5ob3ZlclwiLFxuICAgIHN0eWxlS2V5OiBcIjRiZjY3Nzc0ZTYwMGYxMmEwOWE4MTBkZDNkZDQxMzM2MzRkMWFmOTJcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiZGFyayB1aS9pbnRlcmFjdGlvbi9pbnRlbnRpb25zL2Vycm9yLm1haW4ucHJlc3NlZFwiLFxuICAgIHN0eWxlS2V5OiBcIjExMmRkYTkyY2Q1MTVjMzIwZWQ5MmNmMjNjNWJkYTU4MmUzYjE5YzFcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiZGFyayB1aS9pbnRlcmFjdGlvbi9pbnRlbnRpb25zL3dhcm5pbmcubWFpbi5wcmVzc2VkXCIsXG4gICAgc3R5bGVLZXk6IFwiOGE2NjZlY2VmMDEyMWQ1NDc5ZThjZjEwN2U2OTdkM2U3NmQzZmU2ZFwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJkYXJrIHVpL2ludGVyYWN0aW9uL2ludGVudGlvbnMvd2FybmluZy5tYWluLmhvdmVyXCIsXG4gICAgc3R5bGVLZXk6IFwiZDMzNDA3ZDY4MDVmM2RiYWJmMzRiOTc4NzhlOTQyZTEwNTgyZmNlYVwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJkYXJrIHVpL2ludGVyYWN0aW9uL2ludGVudGlvbnMvc3VjY2Vzcy5tYWluLmhvdmVyXCIsXG4gICAgc3R5bGVLZXk6IFwiYTRmMWJhNjZmMTJhNjk5ZjRjNjhhY2RiZWE3ZmQwYTk2MTNhNDVkZVwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJkYXJrIHVpL2ludGVyYWN0aW9uL2ludGVudGlvbnMvc3VjY2Vzcy5tYWluLnByZXNzZWRcIixcbiAgICBzdHlsZUtleTogXCIwMDYyZDUzMzQxNzczMjIyZmZkNjE0ZWFiMTQ4ZTUyOTIxOTU3OWYyXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImRhcmsgdWkvaW50ZXJhY3Rpb24vYmFja2dyb3VuZC9kZWZhdWx0LmhvdmVyXCIsXG4gICAgc3R5bGVLZXk6IFwiZDc1MTAwOWY2OGFmZmFiOGUxNzBhN2Q0MDAxMzU2YjE3NzJmMGU1MFwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJkYXJrIHVpL2ludGVyYWN0aW9uL2JhY2tncm91bmQvZGVmYXVsdC5wcmVzc2VkXCIsXG4gICAgc3R5bGVLZXk6IFwiY2QwNDc3OTZlOTUyODczZDhmYzg5OTg1ODZjMTMwZTQxNmQzMDYzMVwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJkYXJrIHVpL2ludGVyYWN0aW9uL2JhY2tncm91bmQvcGFwZXIuaG92ZXJcIixcbiAgICBzdHlsZUtleTogXCJiMzMwYmFkYzZjZWEwMmI5MDEyYTNmNTgxZGY2ZjAwZjFmZjQ4Nzc3XCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImRhcmsgdWkvaW50ZXJhY3Rpb24vYmFja2dyb3VuZC9wYXBlci5wcmVzc2VkXCIsXG4gICAgc3R5bGVLZXk6IFwiNjVjNThjN2IwM2E4MzgxYTEyOTgzYmNkMGFkZWExZWUxODQ2MTNhMFwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJkYXJrIHVpL2ludGVyYWN0aW9uL3NwZWNpYWwgdXNlL3ByZW1pdW0uaG92ZXJcIixcbiAgICBzdHlsZUtleTogXCI0OGM4YmMzMTRkZjIyM2UxYThkZTRlMTBkMDA5OWNkOTcxMDkzZDFhXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImRhcmsgdWkvaW50ZXJhY3Rpb24vc3BlY2lhbCB1c2UvcHJlbWl1bS5wcmVzc2VkXCIsXG4gICAgc3R5bGVLZXk6IFwiNWRlZjQ2ZTllNDQzYWE5YWRkYTQyNWJlMTRjYTRhYWFiMWZjZDEwOVwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJkYXJrIHVpL3NwZWNpYWwgdXNlL3ByZW1pdW1cIixcbiAgICBzdHlsZUtleTogXCIzZjhkMmQ4MWEwYWJiNWJjMGI4YTRkNTIxMmY0OGMxMTNhOThmMTBlXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImRhcmsgdWkvc3BlY2lhbCB1c2UvbWVzc2FnZVwiLFxuICAgIHN0eWxlS2V5OiBcIjliNjI2MTA5NzY4NDZjYjM5MzNkMjBkZDUyZmY2Njg0NTQ2NzhhZjdcIixcbiAgfSxcbl07XG4iLCJleHBvcnQgY29uc3QgTGlnaHRVaUVmZmVjdHMgPSBbXG4gIHtcbiAgICBuYW1lOiBcImxpZ2h0IHVpL3NoYWRvdy9lbGV2YXRpb24gNFwiLFxuICAgIHN0eWxlS2V5OiBcIjY5MjAyZmE4Y2M0ZjZjYzA1MTVjYzA4ZmRjYzk4ODQ1OWFmMjg3MzFcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwibGlnaHQgdWkvc2hhZG93L2VsZXZhdGlvbiA5XCIsXG4gICAgc3R5bGVLZXk6IFwiOGNjZWE5ZDUyM2NmOWRjMTNmZWU2OGYzOTJmM2Y5Y2MzMTg3YTQ1N1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJsaWdodCB1aS9zaGFkb3cvZWxldmF0aW9uIDE0XCIsXG4gICAgc3R5bGVLZXk6IFwiYzYxMjUzYzM4ZjZkMGQ5ZjNiMzAyYTc3YTM4MDdlMDUyZTljM2Y5MVwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJsaWdodCB1aS9mb2N1c1wiLFxuICAgIHN0eWxlS2V5OiBcImY5ZDUzOWY2NzAyYjcxMTE2NmI4OTc0M2U1OTcxMDFiZTYxNTNiOWNcIixcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBEYXJrVWlFZmZlY3RzID0gW1xuICB7XG4gICAgbmFtZTogXCJkYXJrIHVpL3NoYWRvdy9lbGV2YXRpb24gNFwiLFxuICAgIHN0eWxlS2V5OiBcImE4OWFiYmU2ZDY0ZjgyNGY2MmViYjFmNTRmNmYyOGE5MTA0OTAxOTVcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiZGFyayB1aS9zaGFkb3cvZWxldmF0aW9uIDlcIixcbiAgICBzdHlsZUtleTogXCI5ODc2MTkwNGJjYzlkMzhjODFlZTIzZTdiNDMyZDhjOTdlMjlmMGMxXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImRhcmsgdWkvc2hhZG93L2VsZXZhdGlvbiAxNFwiLFxuICAgIHN0eWxlS2V5OiBcIjIwOWI0NTFlNGY2OGY1YmYzYWRlMjRlZjM2YTEwYTYwOWNkYWUyMzlcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiZGFyayB1aS9mb2N1c1wiLFxuICAgIHN0eWxlS2V5OiBcIjkyY2JlMzZkNDQ4MGVmZTRiOTYxOGVjNmVjMWE0NDQ5MjQxZmJkZDZcIixcbiAgfSxcbl07XG4iXSwic291cmNlUm9vdCI6IiJ9