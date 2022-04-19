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
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


// Fill
const swapFill = (node, allLightTokens, allDarkTokens) => __awaiter(void 0, void 0, void 0, function* () {
    let hasFillStyle = node.fillStyleId && node.fillStyleId.length > 0;
    // console.log(node, allLightTokens, allDarkTokens);
    if (hasFillStyle) {
        let nodeFillStyleId = node.fillStyleId;
        let nodeFillPaintStyle = figma.getStyleById(nodeFillStyleId);
        let nodeFillPaintName = nodeFillPaintStyle.name;
        let swappedNodeFillName;
        let nodeFillPaintIsLightMode = nodeFillPaintName.includes("light theme");
        if (nodeFillPaintIsLightMode) {
            swappedNodeFillName = nodeFillPaintName.replace("light theme/", "dark theme/");
            let filtered = allDarkTokens.find((item) => item.name === swappedNodeFillName);
            node.fillStyleId = filtered.id;
        }
        else {
            swappedNodeFillName = nodeFillPaintName.replace("dark theme/", "light theme/");
            let filtered = allLightTokens.find((item) => item.name === swappedNodeFillName);
            node.fillStyleId = filtered.id;
        }
    }
    else {
        return;
    }
});
// Strokes
const swapStroke = (node, allLightTokens, allDarkTokens) => __awaiter(void 0, void 0, void 0, function* () {
    let hasStrokeStyle = node.strokeStyleId && node.strokeStyleId.length > 0;
    if (hasStrokeStyle) {
        let nodeStrokeStyleId = node.strokeStyleId;
        let nodeStrokePaintStyle = figma.getStyleById(nodeStrokeStyleId);
        let nodeStrokePaintName = nodeStrokePaintStyle.name;
        let swappedNodeStrokeName;
        let nodeStrokePaintIsLightMode = nodeStrokePaintName.includes("light theme");
        if (nodeStrokePaintIsLightMode) {
            swappedNodeStrokeName = nodeStrokePaintName.replace("light theme/", "dark theme/");
            let filtered = allDarkTokens.find((item) => item.name === swappedNodeStrokeName);
            node.strokeStyleId = filtered.id;
        }
        else {
            swappedNodeStrokeName = nodeStrokePaintName.replace("dark theme/", "light theme/");
            let filtered = allLightTokens.find((item) => item.name === swappedNodeStrokeName);
            node.strokeStyleId = filtered.id;
        }
    }
    else {
        return;
    }
});
// Effects
const swapEffects = (node, allLightEffects, allDarkEffects) => __awaiter(void 0, void 0, void 0, function* () {
    let hasEffects = node.effectStyleId && node.effectStyleId.length > 0;
    if (hasEffects) {
        let nodeEffectStyleId = node.effectStyleId;
        let nodeEffectStyle = figma.getStyleById(nodeEffectStyleId);
        let nodeEffectStyleName = nodeEffectStyle.name;
        let swappedNodeEffectName;
        let nodeEffectStyleNameIsLight = nodeEffectStyleName.includes("light theme");
        console.log(swappedNodeEffectName);
        if (nodeEffectStyleNameIsLight) {
            swappedNodeEffectName = nodeEffectStyleName.replace("light theme/", "dark theme/");
            let filtered = allDarkEffects.find((item) => item.name === swappedNodeEffectName);
            console.log(filtered);
            node.effectStyleId = filtered.id;
        }
        else {
            swappedNodeEffectName = nodeEffectStyleName.replace("dark theme/", "light theme/");
            let filtered = allLightEffects.find((item) => item.name === swappedNodeEffectName);
            node.effectStyleId = filtered.id;
        }
    }
    else {
        return;
    }
});
// Theme Swap
const ThemeSwap = (node) => __awaiter(void 0, void 0, void 0, function* () {
    GetAllLocalPaintStyles();
    let allLightTokens = yield fetchAllLightTokens();
    let allDarkTokens = yield fetchAllDarkTokens();
    let allLightEffects = yield fetchAllLightEffects();
    let allDarkEffects = yield fetchAllDarkEffects();
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
            // rgba: rgba,
            styleKey: paintStyle.key,
        });
    }
    console.log(allStylesArray);
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
const fetchAllLightTokens = () => __awaiter(void 0, void 0, void 0, function* () {
    return Promise.all(_theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["LightUiColors"].map((item) => figma.importStyleByKeyAsync(item.styleKey)));
});
const fetchAllLightEffects = () => __awaiter(void 0, void 0, void 0, function* () {
    return Promise.all(_theme_styles_effects__WEBPACK_IMPORTED_MODULE_1__["LightUiEffects"].map((item) => figma.importStyleByKeyAsync(item.styleKey)));
});
const fetchAllDarkTokens = () => __awaiter(void 0, void 0, void 0, function* () {
    return Promise.all(_theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["DarkUiColors"].map((item) => figma.importStyleByKeyAsync(item.styleKey)));
});
const fetchAllDarkEffects = () => __awaiter(void 0, void 0, void 0, function* () {
    return Promise.all(_theme_styles_effects__WEBPACK_IMPORTED_MODULE_1__["DarkUiEffects"].map((item) => figma.importStyleByKeyAsync(item.styleKey)));
});


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
    name: "light theme/intentions/intentions.primary.light",
    styleKey: "0e2abe38c19501bedba067074b9ff59ca3a4914b",
  },
  {
    name: "light theme/intentions/intentions.primary.main",
    styleKey: "cf0c8e88eb65b8049feca60ac83e1de3d3ab6e8b",
  },
  {
    name: "light theme/intentions/intentions.primary.hover",
    styleKey: "7b735b5edf2b02c5d2f8612aa60860c393b08808",
  },
  {
    name: "light theme/intentions/intentions.primary.pressed",
    styleKey: "ab198d9c236dabee4f930145c5e59a30faf341be",
  },
  {
    name: "light theme/intentions/intentions.primary.dark",
    styleKey: "da938698c9d223221d63c7c5501a9057a0d5f6fb",
  },
  {
    name: "light theme/intentions/intentions.primary.contrastText",
    styleKey: "b28a7fcdd247323d7ba99961c9608cf8378bada1",
  },
  {
    name: "light theme/intentions/intentions.error.light",
    styleKey: "d35dabc3ee7f5be18ac0d2aeb74c72baaa8bbca7",
  },
  {
    name: "light theme/intentions/intentions.error.main",
    styleKey: "798cb8f898ab2a508a7ba491d899011fda896577",
  },
  {
    name: "light theme/intentions/intentions.error.hover",
    styleKey: "a2f495e9c02100bd025146968dfbfd7c9408d8ed",
  },
  {
    name: "light theme/intentions/intentions.error.pressed",
    styleKey: "c9c550806a4ba2a47f303f8f8f31d518d2584f5c",
  },
  {
    name: "light theme/intentions/intentions.error.dark",
    styleKey: "12776456e68adf4ab5e391797c3c84e92b0f86c2",
  },
  {
    name: "light theme/intentions/intentions.error.contrastText",
    styleKey: "c42c5f1990390c413ae62925e9af0d51bf32c945",
  },
  {
    name: "light theme/intentions/intentions.warning.light",
    styleKey: "d4c30135f4c12c7df4442222116a9eb7cebf65be",
  },
  {
    name: "light theme/intentions/intentions.warning.main",
    styleKey: "f27a60df8c162185ea2472a801b271ef662c0429",
  },
  {
    name: "light theme/intentions/intentions.warning.hover",
    styleKey: "d656dd558bae9c73da336b6fb77e2a67a85d65ee",
  },
  {
    name: "light theme/intentions/intentions.warning.pressed",
    styleKey: "5644d312af5289595c9fd08b5e52467165e75f12",
  },
  {
    name: "light theme/intentions/intentions.warning.dark",
    styleKey: "615d6d5cac4855e981c8b942b986ee705b568b28",
  },
  {
    name: "light theme/intentions/intentions.warning.contrastText",
    styleKey: "eecd82ccaae988624c45f28296564037da85cc1a",
  },
  {
    name: "light theme/intentions/intentions.success.light",
    styleKey: "527f68ce7ccbad814564f47f88bdeada80775377",
  },
  {
    name: "light theme/intentions/intentions.success.main",
    styleKey: "e4aa41e8bf52f94ef5fce3669f510af3cb79c5a7",
  },
  {
    name: "light theme/intentions/intentions.success.hover",
    styleKey: "3baacc5cd7744805df243cb1ff3f431c6811f4c8",
  },
  {
    name: "light theme/intentions/intentions.success.pressed",
    styleKey: "462dd55529fb3c5cc63433be192c4cb6ce09018c",
  },
  {
    name: "light theme/intentions/intentions.success.dark",
    styleKey: "d9883b53c2539bf1e1068205fe1d059d58315e4f",
  },
  {
    name: "light theme/intentions/intentions.success.contrastText",
    styleKey: "d7dbaef66a932ff276f6f4aa51985a059dedfbf8",
  },
  {
    name: "light theme/text/text.primary",
    styleKey: "8f05c63de7f100b2bd8fad7b8bd71489b637c067",
  },
  {
    name: "light theme/text/text.secondary",
    styleKey: "97063a5f62c354e6ae0919d50b68d0badb4a122e",
  },
  {
    name: "light theme/text/text.disabled",
    styleKey: "a809f75e14fbe6296272e8531106f6cc4c692553",
  },
  {
    name: "light theme/background/background.default",
    styleKey: "903e5bf274139eeb9f4968a9ef08ec05eaf0b274",
  },
  {
    name: "light theme/background/background.default.hover",
    styleKey: "56db417b3a4e66381e6a049802e0b3a01e93e56d",
  },
  {
    name: "light theme/background/background.default.pressed",
    styleKey: "deb4feb0aad31b75688a85ea982eca276ab5cd2d",
  },
  {
    name: "light theme/background/background.paper",
    styleKey: "23e94fceed9accbda4db9c672c43d21b4d286e4c",
  },
  {
    name: "light theme/background/background.paper.hover",
    styleKey: "b8a4ede39427fa4666a4812216e819baf013f942",
  },
  {
    name: "light theme/background/background.paper.pressed",
    styleKey: "41691d6da77a678c853da12cc1ff27bf5632ccbd",
  },
  {
    name: "light theme/navigation/navigation.background",
    styleKey: "49cf77f03e90b406a953a6b429dbbbbb0e72d778",
  },
  {
    name: "light theme/navigation/navigation.hover",
    styleKey: "b7886cf7af2e378cf3ad3140cf9584c8f077bb46",
  },
  {
    name: "light theme/navigation/navigation.pressed",
    styleKey: "59241d393da6d997c328c334071f4dbdb6c3488d",
  },
  {
    name: "light theme/navigation/navigation.contrastText",
    styleKey: "a6f078b789041a26e0f098cae0d640957f1555ee",
  },
  {
    name: "light theme/navigation/navigation.divider",
    styleKey: "cfdf68e140d326306e182d7cfd4c1bc89cd7b133",
  },
  {
    name: "light theme/message/message.background",
    styleKey: "c85a9b846349a3a7d3eed358acbc32c2715c982d",
  },
  {
    name: "light theme/message/message.contrastText",
    styleKey: "83be2d1d6f50b396264710e07be1001867e49825",
  },
  {
    name: "light theme/utility/utility.divider",
    styleKey: "ee4ddce2e56ad47c4216d5827a283b943a794c78",
  },
  {
    name: "light theme/utility/utility.divider.strong",
    styleKey: "17adbe4e27ba9b087f61af142deeb07fc0c01540",
  },
  {
    name: "light theme/utility/utility.placeholder",
    styleKey: "4c309c25f98886062c528b1df73c5bc9e2c6fe32",
  },
  {
    name: "light theme/utility/utility.overlay",
    styleKey: "11a4778018c8bb236abe0d847c731a217e2d6d48",
  },
  {
    name: "light theme/4DP/4dp.nm",
    styleKey: "ddcbf68fa5c1eaa72077164272b7ae5b9e5e4ed7",
  },
  {
    name: "light theme/4DP/4dp.ac",
    styleKey: "220d3493747cd8d8bdc5d4a0e7965c36a3c52349",
  },
  {
    name: "light theme/4DP/4dp.map",
    styleKey: "aaa3a531a124fa854e09d398f98fb47b989a8a72",
  },
  {
    name: "light theme/4DP/4dp.ftp",
    styleKey: "224e4912027be9f75685fd40b2528ba9f34fe958",
  },
  {
    name: "light theme/data/data.power",
    styleKey: "07834e0145e1c01546593462006128fa6a51d6ac",
  },
  {
    name: "light theme/data/data.heartRate",
    styleKey: "5a33b8b4a05f18996035425e2ba6af81791211cd",
  },
  {
    name: "light theme/data/data.cadence",
    styleKey: "7d28be638709626b59f280208696fb8130624c0a",
  },
  {
    name: "light theme/data/data.speed",
    styleKey: "e9eaf6b844fd1f6f17d6cb3e8e84b19ec5097adc",
  },
  {
    name: "light theme/data/data.pace",
    styleKey: "9c0ef6c7579653cf3632836b2227bb72bb78e67e",
  },
  {
    name: "light theme/compliance/compliance.scheduled",
    styleKey: "6da88c50bdb2c4a6cde8acdceb4d94f7e935dcd0",
  },
  {
    name: "light theme/compliance/compliance.compliant",
    styleKey: "b5807b72ac4c76852140a9ca68b4698567053f11",
  },
  {
    name: "light theme/compliance/compliance.compliant.contrastText",
    styleKey: "ca8e869592bd0c3b96806bc1240c5f4bdff38b1d",
  },
  {
    name: "light theme/compliance/compliance.nonCompliant",
    styleKey: "8f9d1bf5b0d1ce3753b10e8cde620aeb6ccaff11",
  },
  {
    name: "light theme/compliance/compliance.nonCompliant.contrastText",
    styleKey: "6cd62889c6bea67fa6e2f84fa5814f1f217de3b8",
  },
  {
    name: "light theme/compliance/compliance.missed",
    styleKey: "d44465ff68b5fed196d2170570d7285f52015b26",
  },
  {
    name: "light theme/compliance/compliance.missed.contrastText",
    styleKey: "72d59c899182b464713078ae8cbca6c7c45917c7",
  },
  {
    name: "light theme/special use/specialUse.titleBar",
    styleKey: "876343714d147d23d41a18ceba7efd14b9753e17",
  },
  {
    name: "light theme/special use/specialUse.premium",
    styleKey: "78cf4018e5bc9fad67698c9a9a3c65fde8f127f6",
  },
  {
    name: "light theme/special use/specialUse.premium.hover",
    styleKey: "d9eab59563e524b3410717fd3d33b83f35281c68",
  },
  {
    name: "light theme/special use/specialUse.premium.pressed",
    styleKey: "a27ec30746cfd6ed444a73561397806085de7c35",
  },
  {
    name: "light theme/special use/specialUse.premium.contrastText",
    styleKey: "1f0638ad6772a5b5055b22582ca4e7cfcf400869",
  },
];

const DarkUiColors = [
  {
    name: "dark theme/intentions/intentions.primary.light",
    styleKey: "f377e775c84f27825f8ac801e78d8708c05f8df1",
  },
  {
    name: "dark theme/intentions/intentions.primary.main",
    styleKey: "2b792d84c9ddb5bb54b4e7ce000c595c79d748ca",
  },
  {
    name: "dark theme/intentions/intentions.primary.hover",
    styleKey: "99687d1365def72e70d41b03e536f70c1d33d956",
  },
  {
    name: "dark theme/intentions/intentions.primary.pressed",
    styleKey: "dab9928da4b1a98b5e435611f01b34bc51fec18a",
  },
  {
    name: "dark theme/intentions/intentions.primary.dark",
    styleKey: "b43bd111250ce74d48cfd71ac00c1c1b558b02f0",
  },
  {
    name: "dark theme/intentions/intentions.primary.contrastText",
    styleKey: "5b622d9b5f16ff471b666ee8d95a35eb5e7e464b",
  },
  {
    name: "dark theme/intentions/intentions.error.light",
    styleKey: "957620e54d15afce55314ca589c7a1e93435a201",
  },
  {
    name: "dark theme/intentions/intentions.error.main",
    styleKey: "767c2a9897062dee0d0f6300406f6e5585f684c7",
  },
  {
    name: "dark theme/intentions/intentions.error.hover",
    styleKey: "4bf67774e600f12a09a810dd3dd4133634d1af92",
  },
  {
    name: "dark theme/intentions/intentions.error.pressed",
    styleKey: "112dda92cd515c320ed92cf23c5bda582e3b19c1",
  },
  {
    name: "dark theme/intentions/intentions.error.dark",
    styleKey: "34a9a344c25416d1a7ea6d6732db13e7bc6cc397",
  },
  {
    name: "dark theme/intentions/intentions.error.contrastText",
    styleKey: "ac36b60a67f36ed8070caaedd0456012a10c22d6",
  },
  {
    name: "dark theme/intentions/intentions.warning.light",
    styleKey: "acc88b7919792a2132c35ded6004d1df03ea7bbb",
  },
  {
    name: "dark theme/intentions/intentions.warning.main",
    styleKey: "894fbd335d8b0f6b1cee4ec5ac7a0479397a6b4c",
  },
  {
    name: "dark theme/intentions/intentions.warning.hover",
    styleKey: "d33407d6805f3dbabf34b97878e942e10582fcea",
  },
  {
    name: "dark theme/intentions/intentions.warning.pressed",
    styleKey: "8a666ecef0121d5479e8cf107e697d3e76d3fe6d",
  },
  {
    name: "dark theme/intentions/intentions.warning.dark",
    styleKey: "44b42a85052841387bc677c5719874cf0207cab5",
  },
  {
    name: "dark theme/intentions/intentions.warning.contrastText",
    styleKey: "59c9bf2a4d6c04fd93c1b9abcc4cf501fcadbb22",
  },
  {
    name: "dark theme/intentions/intentions.success.light",
    styleKey: "5363c170923adfe09332c2ab95f46856fd56b72e",
  },
  {
    name: "dark theme/intentions/intentions.success.main",
    styleKey: "2d44f3a0c60878cef5dbd10c59a417aa90c0c1bf",
  },
  {
    name: "dark theme/intentions/intentions.success.hover",
    styleKey: "a4f1ba66f12a699f4c68acdbea7fd0a9613a45de",
  },
  {
    name: "dark theme/intentions/intentions.success.pressed",
    styleKey: "0062d53341773222ffd614eab148e529219579f2",
  },
  {
    name: "dark theme/intentions/intentions.success.dark",
    styleKey: "43222791f7d5afde8b84bdb7a7c75a6a8cc9d334",
  },
  {
    name: "dark theme/intentions/intentions.success.contrastText",
    styleKey: "1972dc001d31dec326c8e937f8302ee35fbb853f",
  },
  {
    name: "dark theme/text/text.primary",
    styleKey: "3fdbd43dd2463c64b94e0b81a916a606c08b0f1c",
  },
  {
    name: "dark theme/text/text.secondary",
    styleKey: "9d2e511d9a31ebd76e302ab25d1e995e6a83ac1c",
  },
  {
    name: "dark theme/text/text.disabled",
    styleKey: "c98883e07be80be6bcd18814eb29a87797a99c6a",
  },
  {
    name: "dark theme/background/background.default",
    styleKey: "15f5ffac3ec91b24089813439ffadd1f9994b29c",
  },
  {
    name: "dark theme/background/background.default.hover",
    styleKey: "d751009f68affab8e170a7d4001356b1772f0e50",
  },
  {
    name: "dark theme/background/background.default.pressed",
    styleKey: "cd047796e952873d8fc8998586c130e416d30631",
  },
  {
    name: "dark theme/background/background.paper",
    styleKey: "2f060e7422a8ad17a037a250d368cf671adc0468",
  },
  {
    name: "dark theme/background/background.paper.hover",
    styleKey: "b330badc6cea02b9012a3f581df6f00f1ff48777",
  },
  {
    name: "dark theme/background/background.paper.pressed",
    styleKey: "65c58c7b03a8381a12983bcd0adea1ee184613a0",
  },
  {
    name: "dark theme/navigation/navigation.background",
    styleKey: "835d0b920b5997c0b97f7390a043e94b6534a506",
  },
  {
    name: "dark theme/navigation/navigation.hover",
    styleKey: "852d4f3fd1c1f95af1f218a78e9aa3e8a86c62f2",
  },
  {
    name: "dark theme/navigation/navigation.pressed",
    styleKey: "20183081538fefd7029008005e45f75059235fa2",
  },
  {
    name: "dark theme/navigation/navigation.contrastText",
    styleKey: "eb93c909ecbfff220ee593d8fb6eacb6a1d817cb",
  },
  {
    name: "dark theme/navigation/navigation.divider",
    styleKey: "cb86001ae7a9ff1781f96ee34e3bfd0009d92fed",
  },
  {
    name: "dark theme/message/message.background",
    styleKey: "9b62610976846cb3933d20dd52ff668454678af7",
  },
  {
    name: "dark theme/message/message.contrastText",
    styleKey: "8a6e947c20e0381e06e28b1af8f487b770fc03c1",
  },
  {
    name: "dark theme/utility/utility.divider",
    styleKey: "84ab0f298ea8fcd0b82ac89298ad51140ca7b75a",
  },
  {
    name: "dark theme/utility/utility.divider.strong",
    styleKey: "e9360a13f84514ee4b3977d4b6949f9bab63cb4f",
  },
  {
    name: "dark theme/utility/utility.placeholder",
    styleKey: "61a3d5ea1466ca58a70b9950f9f2b41bcb896ce7",
  },
  {
    name: "dark theme/utility/utility.overlay",
    styleKey: "2b3836ded382e33a9704ef0f2f6b16fbfba2d3ce",
  },
  {
    name: "dark theme/4DP/4dp.nm",
    styleKey: "82d50f3011d815902ed430df6d7345ecdf94761b",
  },
  {
    name: "dark theme/4DP/4dp.ac",
    styleKey: "e8193abfd2f715e48b9cc7ce4bc6b95c897aa04d",
  },
  {
    name: "dark theme/4DP/4dp.map",
    styleKey: "df57febc8ef77dd2c35be2d1b940afb8331668b4",
  },
  {
    name: "dark theme/4DP/4dp.ftp",
    styleKey: "7bb028ff7d873486678b7c6764fc50f39e571eb6",
  },
  {
    name: "dark theme/data/data.power",
    styleKey: "73d228b465788c8ef2d16b9991512cb72c014043",
  },
  {
    name: "dark theme/data/data.heartRate",
    styleKey: "c3f3d0917340d9cb12db3448c267ac55da63d715",
  },
  {
    name: "dark theme/data/data.cadence",
    styleKey: "2fa915b2945e8a76a71438681137d28c61fe4214",
  },
  {
    name: "dark theme/data/data.speed",
    styleKey: "b979fcb104c296f78f40b63a9e74be17e2bbba53",
  },
  {
    name: "dark theme/data/data.pace",
    styleKey: "6998aca2d5ad31999e5bcbdebb7e396e8a84ca7d",
  },
  {
    name: "dark theme/compliance/compliance.scheduled",
    styleKey: "bcc3269ebb317ebd45d494dfdce89cb92cc8caf4",
  },
  {
    name: "dark theme/compliance/compliance.compliant",
    styleKey: "8091e7ec107056784644628db1736bcfac62fed1",
  },
  {
    name: "dark theme/compliance/compliance.compliant.contrastText",
    styleKey: "bfb1ca68ae0a73a054390b6af0a56c91271b8852",
  },
  {
    name: "dark theme/compliance/compliance.nonCompliant",
    styleKey: "14ec4bdb4c4b698cfb7c548f7382b748e25020d2",
  },
  {
    name: "dark theme/compliance/compliance.nonCompliant.contrastText",
    styleKey: "c2cd21f55e232e72655a27dcf5de06d0da44bf4e",
  },
  {
    name: "dark theme/compliance/compliance.missed",
    styleKey: "65795aaeadace278c5f8600c30322b927136c023",
  },
  {
    name: "dark theme/compliance/compliance.missed.contrastText",
    styleKey: "7b5f8d319715104bb3d4a107788ec5bfa6ea31d4",
  },
  {
    name: "dark theme/special use/specialUse.titleBar",
    styleKey: "62993f294e35f67bcf54b517d5133305624d8b9b",
  },
  {
    name: "dark theme/special use/specialUse.premium",
    styleKey: "3f8d2d81a0abb5bc0b8a4d5212f48c113a98f10e",
  },
  {
    name: "dark theme/special use/specialUse.premium.hover",
    styleKey: "48c8bc314df223e1a8de4e10d0099cd971093d1a",
  },
  {
    name: "dark theme/special use/specialUse.premium.pressed",
    styleKey: "5def46e9e443aa9adda425be14ca4aaab1fcd109",
  },
  {
    name: "dark theme/special use/specialUse.premium.contrastText",
    styleKey: "9911089620bad2ac7f7d95e956d99e4936bbcaf8",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvZGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlci9jYWxsYmFjay50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVyL2NvbG9yLWNoZWNrLnRzIiwid2VicGFjazovLy8uL3NyYy9oZWxwZXIvZm9yY2UtYXV0by1sYXlvdXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlci9sYXlvdXQtZ3JpZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVyL3NwYWNpbmctY2hlY2sudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlci9zcGFjaW5nLXNsaWRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVyL3RoZW1lLXN3YXAudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RoZW1lLXN0eWxlcy9MYXlvdXRHcmlkcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGhlbWUtc3R5bGVzL2NvbG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGhlbWUtc3R5bGVzL2VmZmVjdHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsaUJBQWlCO0FBQ29CO0FBQ2M7QUFDSjtBQUN1QztBQUNNO0FBQ2xEO0FBQ0M7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksMEVBQWlCO0FBQ3JCLENBQUM7QUFDRDtBQUNBO0FBQ0EsUUFBUSxvRUFBUztBQUNqQjtBQUNBO0FBQ0EsUUFBUSw4RUFBa0I7QUFDMUI7QUFDQTtBQUNBLFFBQVEsa0ZBQW9CO0FBQzVCO0FBQ0E7QUFDQSxRQUFRLHNGQUF1QjtBQUMvQjtBQUNBO0FBQ0EsUUFBUSxvRkFBcUI7QUFDN0I7QUFDQTtBQUNBLFFBQVEsMEVBQVc7QUFDbkI7QUFDQTtBQUNBLFFBQVEsMkZBQXlCO0FBQ2pDO0FBQ0E7QUFDQSxRQUFRLHlGQUF1QjtBQUMvQjtBQUNBO0FBQ0EsUUFBUSx5RUFBYTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDdERBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDNkI7Ozs7Ozs7Ozs7Ozs7QUN4QjdCO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixtQkFBbUI7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsS0FBTztBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLG1CQUFtQjtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLG1CQUFtQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLGVBQWU7QUFDbEQ7QUFDQTtBQUNBLHFEQUFxRCxlQUFlO0FBQ3BFO0FBQ0E7QUFDOEI7Ozs7Ozs7Ozs7Ozs7QUM3SDlCO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzhEOzs7Ozs7Ozs7Ozs7O0FDVjlEO0FBQUE7QUFBQTtBQUF1SjtBQUN2SjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxtRkFBaUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsUUFBUSxpRkFBZTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLCtCQUErQix1RUFBYTtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0Isa0ZBQXdCO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IscUVBQVc7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsdUVBQWE7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ3lCOzs7Ozs7Ozs7Ozs7O0FDL0l6QjtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ2dDOzs7Ozs7Ozs7Ozs7O0FDekxoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixvQ0FBb0M7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixrQ0FBa0M7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsaUNBQWlDO0FBQ3JEO0FBQ0E7QUFDdUU7Ozs7Ozs7Ozs7Ozs7QUNoTXZFO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQWlCLFNBQUksSUFBSSxTQUFJO0FBQzdCLDJCQUEyQiwrREFBK0QsZ0JBQWdCLEVBQUUsRUFBRTtBQUM5RztBQUNBLG1DQUFtQyxNQUFNLDZCQUE2QixFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ2pHLGtDQUFrQyxNQUFNLGlDQUFpQyxFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ3BHLCtCQUErQixxRkFBcUY7QUFDcEg7QUFDQSxLQUFLO0FBQ0w7QUFDcUU7QUFDRztBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ29CO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsb0RBQW9EO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGtFQUFhO0FBQ3BDLENBQUM7QUFDRDtBQUNBLHVCQUF1QixvRUFBYztBQUNyQyxDQUFDO0FBQ0Q7QUFDQSx1QkFBdUIsaUVBQVk7QUFDbkMsQ0FBQztBQUNEO0FBQ0EsdUJBQXVCLG1FQUFhO0FBQ3BDLENBQUM7Ozs7Ozs7Ozs7Ozs7QUNwS0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRU87QUFDUDs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFTztBQUNQO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7O0FDNU1BO0FBQUE7QUFBQTtBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7QUM1Z0JBO0FBQUE7QUFBQTtBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIIiwiZmlsZSI6ImNvZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9jb2RlLnRzXCIpO1xuIiwiLy8gVGhpcyBwbHVnaW4gd2lsbCBvcGVuIGEgbW9kYWwgdG8gcHJvbXB0IHRoZSB1c2VyIHRvIGVudGVyIGEgbnVtYmVyLCBhbmRcbi8vIGl0IHdpbGwgdGhlbiBjcmVhdGUgdGhhdCBtYW55IHJlY3RhbmdsZXMgb24gdGhlIHNjcmVlbi5cbi8vIFRoaXMgZmlsZSBob2xkcyB0aGUgbWFpbiBjb2RlIGZvciB0aGUgcGx1Z2lucy4gSXQgaGFzIGFjY2VzcyB0byB0aGUgKmRvY3VtZW50Ki5cbi8vIFlvdSBjYW4gYWNjZXNzIGJyb3dzZXIgQVBJcyBpbiB0aGUgPHNjcmlwdD4gdGFnIGluc2lkZSBcInVpLmh0bWxcIiB3aGljaCBoYXMgYVxuLy8gZnVsbCBicm93c2VyIGVudmlyb21lbnQgKHNlZSBkb2N1bWVudGF0aW9uKS5cbi8vIGltcG9ydCB7IFNwYWNpbmdEZWZhdWx0IH0gZnJvbSBcIi4vaGVscGVyL3NwYWNpbmctZGVmYXVsdFwiO1xuaW1wb3J0IHsgVGhlbWVTd2FwIH0gZnJvbSBcIi4vaGVscGVyL3RoZW1lLXN3YXBcIjtcbmltcG9ydCB7IFNwYWNpbmdDaGVja1RyYXZlcnNlIH0gZnJvbSBcIi4vaGVscGVyL3NwYWNpbmctY2hlY2tcIjtcbmltcG9ydCB7IENvbG9yQ2hlY2tUcmF2ZXJzZSB9IGZyb20gXCIuL2hlbHBlci9jb2xvci1jaGVja1wiO1xuaW1wb3J0IHsgRm9yY2VBdXRvTGF5b3V0SG9yaXpvbnRhbCwgRm9yY2VBdXRvTGF5b3V0VmVydGljYWwsIH0gZnJvbSBcIi4vaGVscGVyL2ZvcmNlLWF1dG8tbGF5b3V0XCI7XG5pbXBvcnQgeyBQYWRkaW5nSG9yaXpvbnRhbFNsaWRlciwgUGFkZGluZ1ZlcnRpY2FsU2xpZGVyLCBJdGVtU3BhY2luZywgfSBmcm9tIFwiLi9oZWxwZXIvc3BhY2luZy1zbGlkZXJcIjtcbmltcG9ydCB7IFNldExheW91dEdyaWQgfSBmcm9tIFwiLi9oZWxwZXIvbGF5b3V0LWdyaWRcIjtcbmltcG9ydCB7IG9uU2VsZWN0aW9uQ2hhbmdlIH0gZnJvbSBcIi4vaGVscGVyL2NhbGxiYWNrXCI7XG4vLyBUaGlzIHNob3dzIHRoZSBIVE1MIHBhZ2UgaW4gXCJ1aS5odG1sXCIuXG5maWdtYS5zaG93VUkoX19odG1sX18pO1xuLy8gQ2FsbHMgdG8gXCJwYXJlbnQucG9zdE1lc3NhZ2VcIiBmcm9tIHdpdGhpbiB0aGUgSFRNTCBwYWdlIHdpbGwgdHJpZ2dlciB0aGlzXG4vLyBjYWxsYmFjay4gVGhlIGNhbGxiYWNrIHdpbGwgYmUgcGFzc2VkIHRoZSBcInBsdWdpbk1lc3NhZ2VcIiBwcm9wZXJ0eSBvZiB0aGVcbi8vIHBvc3RlZCBtZXNzYWdlLlxuZmlnbWEudWkucmVzaXplKDI4MCwgNTYwKTtcbmZpZ21hLm9uKFwic2VsZWN0aW9uY2hhbmdlXCIsICgpID0+IHtcbiAgICBsZXQgdGhpc1NlbGVjdGlvbiA9IGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvblswXTtcbiAgICBvblNlbGVjdGlvbkNoYW5nZSh0aGlzU2VsZWN0aW9uKTtcbn0pO1xuZmlnbWEudWkub25tZXNzYWdlID0gKG1zZykgPT4ge1xuICAgIGlmIChtc2cudHlwZSA9PT0gXCJzd2FwLXRoZW1lXCIpIHtcbiAgICAgICAgVGhlbWVTd2FwKGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvblswXSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKG1zZy50eXBlID09PSBcImNvbG9yLWNoZWNrZXJcIikge1xuICAgICAgICBDb2xvckNoZWNrVHJhdmVyc2UoZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uWzBdKTtcbiAgICB9XG4gICAgZWxzZSBpZiAobXNnLnR5cGUgPT09IFwic3BhY2luZy1jaGVja2VyXCIpIHtcbiAgICAgICAgU3BhY2luZ0NoZWNrVHJhdmVyc2UoZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uKTtcbiAgICB9XG4gICAgZWxzZSBpZiAobXNnLnR5cGUgPT09IFwicGFkZGluZy1ob3Jpem9udGFsLXNsaWRlclwiKSB7XG4gICAgICAgIFBhZGRpbmdIb3Jpem9udGFsU2xpZGVyKGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbiwgbXNnKTtcbiAgICB9XG4gICAgZWxzZSBpZiAobXNnLnR5cGUgPT09IFwicGFkZGluZy12ZXJ0aWNhbC1zbGlkZXJcIikge1xuICAgICAgICBQYWRkaW5nVmVydGljYWxTbGlkZXIoZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uLCBtc2cpO1xuICAgIH1cbiAgICBlbHNlIGlmIChtc2cudHlwZSA9PT0gXCJpdGVtLXNwYWNpbmctc2xpZGVyXCIpIHtcbiAgICAgICAgSXRlbVNwYWNpbmcoZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uLCBtc2cpO1xuICAgIH1cbiAgICBlbHNlIGlmIChtc2cudHlwZSA9PT0gXCJmb3JjZS1hdXRvLWxheW91dC1ob3Jpem9udGFsXCIpIHtcbiAgICAgICAgRm9yY2VBdXRvTGF5b3V0SG9yaXpvbnRhbChmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb24pO1xuICAgIH1cbiAgICBlbHNlIGlmIChtc2cudHlwZSA9PT0gXCJmb3JjZS1hdXRvLWxheW91dC12ZXJ0aWNhbFwiKSB7XG4gICAgICAgIEZvcmNlQXV0b0xheW91dFZlcnRpY2FsKGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbik7XG4gICAgfVxuICAgIGVsc2UgaWYgKG1zZy50eXBlID09PSBcInNldC1sYXlvdXQtZ3JpZFwiKSB7XG4gICAgICAgIFNldExheW91dEdyaWQoZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uLCBtc2cpO1xuICAgIH1cbiAgICAvLyBNYWtlIHN1cmUgdG8gY2xvc2UgdGhlIHBsdWdpbiB3aGVuIHlvdSdyZSBkb25lLiBPdGhlcndpc2UgdGhlIHBsdWdpbiB3aWxsXG4gICAgLy8ga2VlcCBydW5uaW5nLCB3aGljaCBzaG93cyB0aGUgY2FuY2VsIGJ1dHRvbiBhdCB0aGUgYm90dG9tIG9mIHRoZSBzY3JlZW4uXG4gICAgLy8gZmlnbWEuY2xvc2VQbHVnaW4oKTtcbn07XG4iLCJjb25zdCBvblNlbGVjdGlvbkNoYW5nZSA9IChub2RlKSA9PiB7XG4gICAgaWYgKG5vZGUpIHtcbiAgICAgICAgY29uc29sZS5sb2cobm9kZSk7XG4gICAgICAgIGxldCBob3Jpem9udGFsUGFkZGluZyA9IG5vZGUuaG9yaXpvbnRhbFBhZGRpbmc7XG4gICAgICAgIGxldCB2ZXJ0aWNhbFBhZGRpbmcgPSBub2RlLnZlcnRpY2FsUGFkZGluZztcbiAgICAgICAgbGV0IGl0ZW1TcGFjaW5nID0gbm9kZS5pdGVtU3BhY2luZztcbiAgICAgICAgbGV0IGxheW91dE1vZGUgPSBub2RlLmxheW91dE1vZGU7XG4gICAgICAgIGxldCB0eXBlID0gbm9kZS50eXBlO1xuICAgICAgICBsZXQgbGF5b3V0R3JpZHMgPSBub2RlLmxheW91dEdyaWRzO1xuICAgICAgICBsZXQgb2JqID0ge1xuICAgICAgICAgICAgaG9yaXpvbnRhbFBhZGRpbmc6IGhvcml6b250YWxQYWRkaW5nLFxuICAgICAgICAgICAgdmVydGljYWxQYWRkaW5nOiB2ZXJ0aWNhbFBhZGRpbmcsXG4gICAgICAgICAgICBpdGVtU3BhY2luZzogaXRlbVNwYWNpbmcsXG4gICAgICAgICAgICBsYXlvdXRNb2RlOiBsYXlvdXRNb2RlLFxuICAgICAgICAgICAgdHlwZTogdHlwZSxcbiAgICAgICAgICAgIGxheW91dEdyaWRzOiBsYXlvdXRHcmlkcyxcbiAgICAgICAgfTtcbiAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2Uob2JqKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwibm9cIik7XG4gICAgICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKFwibm90aGluZyBzZWxlY3RlZFwiKTtcbiAgICB9XG59O1xuZXhwb3J0IHsgb25TZWxlY3Rpb25DaGFuZ2UgfTtcbiIsImZ1bmN0aW9uIGNsb25lKHZhbCkge1xuICAgIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHZhbCkpO1xufVxuLy8gQ2hlY2sgb2JqZWN0IGVxdWFsaXR5IGhlbHBlclxuZnVuY3Rpb24gaXNFcXVpdmFsZW50KGEsIGIpIHtcbiAgICAvLyBDcmVhdGUgYXJyYXlzIG9mIHByb3BlcnR5IG5hbWVzXG4gICAgdmFyIGFQcm9wcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGEpO1xuICAgIHZhciBiUHJvcHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhiKTtcbiAgICAvLyBJZiBudW1iZXIgb2YgcHJvcGVydGllcyBpcyBkaWZmZXJlbnQsXG4gICAgLy8gb2JqZWN0cyBhcmUgbm90IGVxdWl2YWxlbnRcbiAgICBpZiAoYVByb3BzLmxlbmd0aCAhPSBiUHJvcHMubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhUHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIHByb3BOYW1lID0gYVByb3BzW2ldO1xuICAgICAgICAvLyBJZiB2YWx1ZXMgb2Ygc2FtZSBwcm9wZXJ0eSBhcmUgbm90IGVxdWFsLFxuICAgICAgICAvLyBvYmplY3RzIGFyZSBub3QgZXF1aXZhbGVudFxuICAgICAgICBpZiAoYVtwcm9wTmFtZV0gIT09IGJbcHJvcE5hbWVdKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gSWYgd2UgbWFkZSBpdCB0aGlzIGZhciwgb2JqZWN0c1xuICAgIC8vIGFyZSBjb25zaWRlcmVkIGVxdWl2YWxlbnRcbiAgICByZXR1cm4gdHJ1ZTtcbn1cbmNvbnN0IENvbG9yQ2hlY2tUcmF2ZXJzZSA9IChub2RlKSA9PiB7XG4gICAgbGV0IHN0cmF5RmlsbCA9IDA7XG4gICAgbGV0IHN0cmF5U3Ryb2tlID0gMDtcbiAgICBpZiAoXCJmaWxsc1wiICYmIFwic3Ryb2tlc1wiIGluIG5vZGUpIHtcbiAgICAgICAgLy8gRmlsdGVyIHdhcm5pbmcgc3Ryb2tlIGZ1bmN0aW9uXG4gICAgICAgIGxldCBmaWx0ZXJXYXJuaW5nU3Ryb2tlID0gZnVuY3Rpb24gKHN0cm9rZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJjbGVhciBvdXRcIik7XG4gICAgICAgICAgICBpZiAoc3Ryb2tlLnR5cGUgPT0gXCJTT0xJRFwiICYmXG4gICAgICAgICAgICAgICAgaXNFcXVpdmFsZW50KHN0cm9rZS5jb2xvciwgeyByOiAxLCBnOiAwLCBiOiAwIH0pKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ5ZXNcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJub1wiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgbGV0IG9sZFN0cm9rZXMgPSBjbG9uZShub2RlLnN0cm9rZXMpO1xuICAgICAgICBsZXQgbmV3U3Ryb2tlcyA9IG9sZFN0cm9rZXMuZmlsdGVyKGZpbHRlcldhcm5pbmdTdHJva2UpO1xuICAgICAgICBpZiAobm9kZS5zdHJva2VTdHlsZUlkLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIC8vIGRvIG5vdGhpbmdcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG5vZGUuc3Ryb2tlcyA9IG5ld1N0cm9rZXM7XG4gICAgICAgIH1cbiAgICAgICAgLy8gLy8gQWRkIHdhcm5pbmcgc3Ryb2tlIGZ1bmN0aW9uXG4gICAgICAgIGxldCBhZGRXYXJuaW5nU3Ryb2tlID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgIGxldCBzdHJva2VzID0gY2xvbmUobm9kZS5zdHJva2VzKTtcbiAgICAgICAgICAgIGxldCB3YXJuaW5nU3Ryb2tlUHJvcGVydHkgPSB7XG4gICAgICAgICAgICAgICAgY29sb3I6IHsgcjogMSwgZzogMCwgYjogMCB9LFxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgICAgICAgdHlwZTogXCJTT0xJRFwiLFxuICAgICAgICAgICAgICAgIGJsZW5kTW9kZTogXCJOT1JNQUxcIixcbiAgICAgICAgICAgICAgICB2aXNpYmxlOiB0cnVlLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHN0cm9rZXMucHVzaCh3YXJuaW5nU3Ryb2tlUHJvcGVydHkpO1xuICAgICAgICAgICAgbm9kZS5zdHJva2VzID0gc3Ryb2tlcztcbiAgICAgICAgICAgIC8vIG5vZGUuc3Ryb2tlQWxpZ24gPSBcIk9VVFNJREVcIjtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gQ2hlY2sgRmlsbFxuICAgICAgICBjb25zdCBoYXNJbWFnZSA9IChmaWxsKSA9PiBmaWxsLnR5cGUgPT09IFwiSU1BR0VcIjtcbiAgICAgICAgaWYgKG5vZGUuZmlsbHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgLy8gaWYgKG5vZGUuZmlsbHMuc29tZShoYXNJbWFnZSkpIHtcbiAgICAgICAgICAgIC8vICAgY29uc29sZS5sb2coXCJmaWxsIGlzIGltYWdlXCIpO1xuICAgICAgICAgICAgLy8gfSBlbHNlIHtcbiAgICAgICAgICAgIC8vICAgY29uc29sZS5sb2coXCJmaWxsIGlzIE5PVCBpbWFnZVwiKTtcbiAgICAgICAgICAgIC8vICAgLy8gbm90aGluZ1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgaWYgKG5vZGUuZmlsbFN0eWxlSWQubGVuZ3RoID4gMCB8fCBub2RlLmZpbGxzLnNvbWUoaGFzSW1hZ2UpKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLinIUgR29vZCBmaWxsXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLinYwgQmFkIGZpbGxcIik7XG4gICAgICAgICAgICAgICAgLy8gQWRkIHdhcm5pbmcgc3Ryb2tlXG4gICAgICAgICAgICAgICAgYWRkV2FybmluZ1N0cm9rZShub2RlKTtcbiAgICAgICAgICAgICAgICBzdHJheUZpbGwrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibm8gZmlsbFwiKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBDaGVjayBTdHJva2VcbiAgICAgICAgaWYgKG5vZGUuc3Ryb2tlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBpZiAobm9kZS5zdHJva2VTdHlsZUlkLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuKchSBHb29kIHN0cm9rZVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi4p2MIEJhZCBzdHJva2VcIik7XG4gICAgICAgICAgICAgICAgLy8gLy8gQWRkIHdhcm5pbmcgc3Ryb2tlXG4gICAgICAgICAgICAgICAgYWRkV2FybmluZ1N0cm9rZShub2RlKTtcbiAgICAgICAgICAgICAgICBzdHJheVN0cm9rZSsrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJubyBzdHJva2VcIik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiTm8gZmlsbCAmIHN0cm9rZSBwcm9wZXJ0eVwiKTtcbiAgICB9XG4gICAgaWYgKFwiY2hpbGRyZW5cIiBpbiBub2RlKSB7XG4gICAgICAgIGZvciAoY29uc3QgY2hpbGQgb2Ygbm9kZS5jaGlsZHJlbikge1xuICAgICAgICAgICAgQ29sb3JDaGVja1RyYXZlcnNlKGNoaWxkKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgLy8gZG8gbm90aGluZ1xuICAgIH1cbiAgICBpZiAoc3RyYXlGaWxsID4gMCB8fCBzdHJheVN0cm9rZSA+IDApIHtcbiAgICAgICAgbGV0IGVycm9yU3RyaW5nID0gXCJZb3UgaGF2ZSBcIiArXG4gICAgICAgICAgICBzdHJheUZpbGwgK1xuICAgICAgICAgICAgXCIgZmlsbHMgYW5kIFwiICtcbiAgICAgICAgICAgIHN0cmF5U3Ryb2tlICtcbiAgICAgICAgICAgIFwiIHN0cm9rZXMgbm90IHVzaW5nIGNvbG91cnMgZnJvbSBvdXIgbGlicmFyeSFcIjtcbiAgICAgICAgZmlnbWEubm90aWZ5KGVycm9yU3RyaW5nLCB7IHRpbWVvdXQ6IDAuNSB9KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGZpZ21hLm5vdGlmeShcIvCfkY8gQWxsIGlzIGdvb2QgaW4gdGhlIGhvb2QhXCIsIHsgdGltZW91dDogMC41IH0pO1xuICAgIH1cbn07XG5leHBvcnQgeyBDb2xvckNoZWNrVHJhdmVyc2UgfTtcbiIsImNvbnN0IEZvcmNlQXV0b0xheW91dEhvcml6b250YWwgPSAobm9kZXMpID0+IHtcbiAgICBmb3IgKGNvbnN0IG5vZGUgb2Ygbm9kZXMpIHtcbiAgICAgICAgbm9kZS5sYXlvdXRNb2RlID0gXCJIT1JJWk9OVEFMXCI7XG4gICAgfVxufTtcbmNvbnN0IEZvcmNlQXV0b0xheW91dFZlcnRpY2FsID0gKG5vZGVzKSA9PiB7XG4gICAgZm9yIChjb25zdCBub2RlIG9mIG5vZGVzKSB7XG4gICAgICAgIG5vZGUubGF5b3V0TW9kZSA9IFwiVkVSVElDQUxcIjtcbiAgICB9XG59O1xuZXhwb3J0IHsgRm9yY2VBdXRvTGF5b3V0SG9yaXpvbnRhbCwgRm9yY2VBdXRvTGF5b3V0VmVydGljYWwgfTtcbiIsImltcG9ydCB7IHBhZGRpbmdIb3Jpem9udGFsLCBwYWRkaW5nVmVydGljYWwsIGJhc2VsaW5lR3JpZHMsIG1heFdpZHRoR3JpZHMsIGNvbHVtbkdyaWRzLCBtYXhXaWR0aExlZnRBbGlnbmVkR3JpZHMsIH0gZnJvbSBcIi4uL3RoZW1lLXN0eWxlcy9MYXlvdXRHcmlkc1wiO1xuY29uc3QgU2V0TGF5b3V0R3JpZCA9IChub2RlcywgbXNnKSA9PiB7XG4gICAgLy8gY29uc29sZS5sb2cobXNnLmxheW91dEdyaWRPcHRpb25zKTtcbiAgICBmb3IgKGNvbnN0IG5vZGUgb2Ygbm9kZXMpIHtcbiAgICAgICAgLy8gbm9kZS5sYXlvdXRHcmlkcyA9IFtdO1xuICAgICAgICBjb25zdCBob3Jpem9udGFsUGFkZGluZ1NsaWRlclZhbHVlID0gbXNnLmxheW91dEdyaWRPcHRpb25zWzBdLnZhbHVlO1xuICAgICAgICBjb25zdCB2ZXJ0aWNhbFBhZGRpbmdTbGlkZXJWYWx1ZSA9IG1zZy5sYXlvdXRHcmlkT3B0aW9uc1sxXS52YWx1ZTtcbiAgICAgICAgY29uc3Qgc2hvd0Jhc2VsaW5lUm93cyA9IG1zZy5sYXlvdXRHcmlkT3B0aW9uc1syXS52YWx1ZTtcbiAgICAgICAgY29uc3Qgc2hvd01heFdpZHRoID0gbXNnLmxheW91dEdyaWRPcHRpb25zWzNdLnZhbHVlO1xuICAgICAgICBjb25zdCBzaG93Q29sdW1ucyA9IG1zZy5sYXlvdXRHcmlkT3B0aW9uc1s0XS52YWx1ZTtcbiAgICAgICAgY29uc3Qgc2hvd01heFdpZHRoTGVmdEFsaWduZWQgPSBtc2cubGF5b3V0R3JpZE9wdGlvbnNbNV0udmFsdWU7XG4gICAgICAgIGxldCBhbGxHcmlkcyA9IFtdO1xuICAgICAgICBsZXQgc3BhY2luZ0hvcml6b250YWwgPSAwO1xuICAgICAgICBsZXQgc3BhY2luZ1ZlcnRpY2FsID0gMDtcbiAgICAgICAgc3dpdGNoIChob3Jpem9udGFsUGFkZGluZ1NsaWRlclZhbHVlKSB7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHNwYWNpbmdIb3Jpem9udGFsID0gMDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCIwXCI6XG4gICAgICAgICAgICAgICAgc3BhY2luZ0hvcml6b250YWwgPSAwO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIjFcIjpcbiAgICAgICAgICAgICAgICBzcGFjaW5nSG9yaXpvbnRhbCA9IDQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiMlwiOlxuICAgICAgICAgICAgICAgIHNwYWNpbmdIb3Jpem9udGFsID0gODtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCIzXCI6XG4gICAgICAgICAgICAgICAgc3BhY2luZ0hvcml6b250YWwgPSAxMjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCI0XCI6XG4gICAgICAgICAgICAgICAgc3BhY2luZ0hvcml6b250YWwgPSAxNjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCI1XCI6XG4gICAgICAgICAgICAgICAgc3BhY2luZ0hvcml6b250YWwgPSAyNDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCI2XCI6XG4gICAgICAgICAgICAgICAgc3BhY2luZ0hvcml6b250YWwgPSAzMjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCI3XCI6XG4gICAgICAgICAgICAgICAgc3BhY2luZ0hvcml6b250YWwgPSA0MDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCI4XCI6XG4gICAgICAgICAgICAgICAgc3BhY2luZ0hvcml6b250YWwgPSA0ODtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBzd2l0Y2ggKHZlcnRpY2FsUGFkZGluZ1NsaWRlclZhbHVlKSB7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHNwYWNpbmdWZXJ0aWNhbCA9IDA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiMFwiOlxuICAgICAgICAgICAgICAgIHNwYWNpbmdWZXJ0aWNhbCA9IDA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiMVwiOlxuICAgICAgICAgICAgICAgIHNwYWNpbmdWZXJ0aWNhbCA9IDQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiMlwiOlxuICAgICAgICAgICAgICAgIHNwYWNpbmdWZXJ0aWNhbCA9IDg7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiM1wiOlxuICAgICAgICAgICAgICAgIHNwYWNpbmdWZXJ0aWNhbCA9IDEyO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIjRcIjpcbiAgICAgICAgICAgICAgICBzcGFjaW5nVmVydGljYWwgPSAxNjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCI1XCI6XG4gICAgICAgICAgICAgICAgc3BhY2luZ1ZlcnRpY2FsID0gMjQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiNlwiOlxuICAgICAgICAgICAgICAgIHNwYWNpbmdWZXJ0aWNhbCA9IDMyO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIjdcIjpcbiAgICAgICAgICAgICAgICBzcGFjaW5nVmVydGljYWwgPSA0MDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCI4XCI6XG4gICAgICAgICAgICAgICAgc3BhY2luZ1ZlcnRpY2FsID0gNDg7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgcGFkZGluZ0hvcml6b250YWwoc3BhY2luZ0hvcml6b250YWwpLnRoZW4oKHZhbCkgPT4ge1xuICAgICAgICAgICAgaWYgKHZhbC5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgICAgIC8vIGRvIG5vdGhpbmdcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgZ3JpZCBvZiB2YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgYWxsR3JpZHMucHVzaChncmlkKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYWxsR3JpZHMpO1xuICAgICAgICAgICAgICAgICAgICBub2RlLmxheW91dEdyaWRzID0gYWxsR3JpZHM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcGFkZGluZ1ZlcnRpY2FsKHNwYWNpbmdWZXJ0aWNhbCkudGhlbigodmFsKSA9PiB7XG4gICAgICAgICAgICBpZiAodmFsLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgLy8gZG8gbm90aGluZ1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBncmlkIG9mIHZhbCkge1xuICAgICAgICAgICAgICAgICAgICBhbGxHcmlkcy5wdXNoKGdyaWQpO1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhhbGxHcmlkcyk7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUubGF5b3V0R3JpZHMgPSBhbGxHcmlkcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoc2hvd01heFdpZHRoKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGdyaWQgb2YgbWF4V2lkdGhHcmlkcykge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGdyaWQpO1xuICAgICAgICAgICAgICAgIGFsbEdyaWRzLnB1c2goZ3JpZCk7XG4gICAgICAgICAgICAgICAgbm9kZS5sYXlvdXRHcmlkcyA9IGFsbEdyaWRzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbm9kZS5sYXlvdXRHcmlkcyA9IGFsbEdyaWRzO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzaG93TWF4V2lkdGhMZWZ0QWxpZ25lZCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBncmlkIG9mIG1heFdpZHRoTGVmdEFsaWduZWRHcmlkcykge1xuICAgICAgICAgICAgICAgIGFsbEdyaWRzLnB1c2goZ3JpZCk7XG4gICAgICAgICAgICAgICAgbm9kZS5sYXlvdXRHcmlkcyA9IGFsbEdyaWRzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbm9kZS5sYXlvdXRHcmlkcyA9IGFsbEdyaWRzO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzaG93Q29sdW1ucykge1xuICAgICAgICAgICAgZm9yIChjb25zdCBncmlkIG9mIGNvbHVtbkdyaWRzKSB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZ3JpZCk7XG4gICAgICAgICAgICAgICAgYWxsR3JpZHMucHVzaChncmlkKTtcbiAgICAgICAgICAgICAgICBub2RlLmxheW91dEdyaWRzID0gYWxsR3JpZHM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBub2RlLmxheW91dEdyaWRzID0gYWxsR3JpZHM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNob3dCYXNlbGluZVJvd3MpIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwic2hvd1wiKTtcbiAgICAgICAgICAgIGFsbEdyaWRzLnB1c2goYmFzZWxpbmVHcmlkcyk7XG4gICAgICAgICAgICBub2RlLmxheW91dEdyaWRzID0gYWxsR3JpZHM7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhhbGxHcmlkcyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBub2RlLmxheW91dEdyaWRzID0gYWxsR3JpZHM7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhhbGxHcmlkcyk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuZXhwb3J0IHsgU2V0TGF5b3V0R3JpZCB9O1xuIiwiY29uc3QgU3BhY2luZ0NoZWNrVHJhdmVyc2UgPSAobm9kZXMpID0+IHtcbiAgICBmb3IgKGNvbnN0IG5vZGUgb2Ygbm9kZXMpIHtcbiAgICAgICAgbGV0IG5hbWUgPSBub2RlLm5hbWU7XG4gICAgICAgIGxldCBwYWRkaW5nQWxsUmVnZXggPSAvXFxiKD86cGEtMXxwYS0yfHBhLTN8cGEtNHxwYS01fHBhLTZ8cGEtN3xwYS1ub25lKVxcYi9nO1xuICAgICAgICBsZXQgcGFkZGluZ0hvcml6b250YWxSZWdleCA9IC9cXGIoPzpwaC0xfHBoLTJ8cGgtM3xwaC00fHBoLTV8cGgtNnxwaC03fHBoLW5vbmUpXFxiL2c7XG4gICAgICAgIGxldCBwYWRkaW5nVmVydGljYWxSZWdleCA9IC9cXGIoPzpwdi0xfHB2LTJ8cHYtM3xwdi00fHB2LTV8cHYtNnxwdi03fHB2LW5vbmUpXFxiL2c7XG4gICAgICAgIGxldCBpdGVtU3BhY2luZ0FsbFJlZ2V4ID0gL1xcYig/OnNwLTF8c3AtMnxzcC0zfHNwLTR8c3AtNXxzcC02fHNwLTd8c3Atbm9uZSlcXGIvZztcbiAgICAgICAgbGV0IGF1dG9sYXlvdXRSZWdleCA9IC9cXGIoPzp2ZXJ0aWNhbHxob3Jpem9udGFsKVxcYi9nO1xuICAgICAgICBsZXQgbWF0Y2hQYWRkaW5nQWxsID0gbmFtZS5tYXRjaChwYWRkaW5nQWxsUmVnZXgpO1xuICAgICAgICBsZXQgbWF0Y2hQYWRkaW5nSG9yaXpvbnRhbCA9IG5hbWUubWF0Y2gocGFkZGluZ0hvcml6b250YWxSZWdleCk7XG4gICAgICAgIGxldCBtYXRjaFBhZGRpbmdWZXJ0aWNhbCA9IG5hbWUubWF0Y2gocGFkZGluZ1ZlcnRpY2FsUmVnZXgpO1xuICAgICAgICBsZXQgbWF0Y2hJdGVtU3BhY2luZyA9IG5hbWUubWF0Y2goaXRlbVNwYWNpbmdBbGxSZWdleCk7XG4gICAgICAgIGxldCBtYXRjaEF1dG9MYXlvdXREaXJlY3Rpb24gPSBuYW1lLm1hdGNoKGF1dG9sYXlvdXRSZWdleCk7XG4gICAgICAgIGNvbnNvbGUubG9nKG1hdGNoUGFkZGluZ0FsbCk7XG4gICAgICAgIGlmIChtYXRjaEF1dG9MYXlvdXREaXJlY3Rpb24gPT0gbnVsbCkge1xuICAgICAgICAgICAgbm9kZS5sYXlvdXRNb2RlID0gXCJWRVJUSUNBTFwiO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJlbmFibGUgYXV0byBsYXlvdXRcIik7XG4gICAgICAgICAgICBzd2l0Y2ggKG1hdGNoQXV0b0xheW91dERpcmVjdGlvblswXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJ2ZXJ0aWNhbFwiOlxuICAgICAgICAgICAgICAgICAgICBub2RlLmxheW91dE1vZGUgPSBcIlZFUlRJQ0FMXCI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJob3Jpem9udGFsXCI6XG4gICAgICAgICAgICAgICAgICAgIG5vZGUubGF5b3V0TW9kZSA9IFwiSE9SSVpPTlRBTFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChtYXRjaEl0ZW1TcGFjaW5nID09IG51bGwpIHtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaGFzIHNwYWNpbmdcIik7XG4gICAgICAgICAgICBzd2l0Y2ggKG1hdGNoSXRlbVNwYWNpbmdbMF0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIFwic3AtMFwiOlxuICAgICAgICAgICAgICAgICAgICBub2RlLml0ZW1TcGFjaW5nID0gMDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInNwLTFcIjpcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5pdGVtU3BhY2luZyA9IDQ7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJzcC0yXCI6XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuaXRlbVNwYWNpbmcgPSA4O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwic3AtM1wiOlxuICAgICAgICAgICAgICAgICAgICBub2RlLml0ZW1TcGFjaW5nID0gMTI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJzcC00XCI6XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuaXRlbVNwYWNpbmcgPSAxNjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInNwLTVcIjpcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5pdGVtU3BhY2luZyA9IDI0O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwic3AtNlwiOlxuICAgICAgICAgICAgICAgICAgICBub2RlLml0ZW1TcGFjaW5nID0gMzI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJzcC03XCI6XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuaXRlbVNwYWNpbmcgPSA0MDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInNwLThcIjpcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5pdGVtU3BhY2luZyA9IDQ4O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAobWF0Y2hQYWRkaW5nQWxsID09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibm9cIik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImhhcyBwYWRkaW5nIGFsbFwiKTtcbiAgICAgICAgICAgIHN3aXRjaCAobWF0Y2hQYWRkaW5nQWxsWzBdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcInBhLW5vbmVcIjpcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5ob3Jpem9udGFsUGFkZGluZyA9IDA7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUudmVydGljYWxQYWRkaW5nID0gMDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInBhLTFcIjpcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5ob3Jpem9udGFsUGFkZGluZyA9IDQ7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUudmVydGljYWxQYWRkaW5nID0gNDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInBhLTJcIjpcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5ob3Jpem9udGFsUGFkZGluZyA9IDg7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUudmVydGljYWxQYWRkaW5nID0gODtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInBhLTNcIjpcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5ob3Jpem9udGFsUGFkZGluZyA9IDEyO1xuICAgICAgICAgICAgICAgICAgICBub2RlLnZlcnRpY2FsUGFkZGluZyA9IDEyO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwicGEtNFwiOlxuICAgICAgICAgICAgICAgICAgICBub2RlLmhvcml6b250YWxQYWRkaW5nID0gMTY7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUudmVydGljYWxQYWRkaW5nID0gMTY7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJwYS01XCI6XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuaG9yaXpvbnRhbFBhZGRpbmcgPSAyNDtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS52ZXJ0aWNhbFBhZGRpbmcgPSAyNDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInBhLTZcIjpcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5ob3Jpem9udGFsUGFkZGluZyA9IDMyO1xuICAgICAgICAgICAgICAgICAgICBub2RlLnZlcnRpY2FsUGFkZGluZyA9IDMyO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwicGEtN1wiOlxuICAgICAgICAgICAgICAgICAgICBub2RlLmhvcml6b250YWxQYWRkaW5nID0gNDA7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUudmVydGljYWxQYWRkaW5nID0gNDA7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJwYS04XCI6XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuaG9yaXpvbnRhbFBhZGRpbmcgPSA0ODtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS52ZXJ0aWNhbFBhZGRpbmcgPSA0ODtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1hdGNoUGFkZGluZ0hvcml6b250YWwgPT0gbnVsbCkge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJub1wiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaGFzIHBhZGRpbmcgaG9yaXpvbnRhbFwiKTtcbiAgICAgICAgICAgIHN3aXRjaCAobWF0Y2hQYWRkaW5nSG9yaXpvbnRhbFswXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJwaC1ub25lXCI6XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuaG9yaXpvbnRhbFBhZGRpbmcgPSAwO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwicGgtMVwiOlxuICAgICAgICAgICAgICAgICAgICBub2RlLmhvcml6b250YWxQYWRkaW5nID0gNDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInBoLTJcIjpcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5ob3Jpem9udGFsUGFkZGluZyA9IDg7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJwaC0zXCI6XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuaG9yaXpvbnRhbFBhZGRpbmcgPSAxMjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInBoLTRcIjpcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5ob3Jpem9udGFsUGFkZGluZyA9IDE2O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwicGgtNVwiOlxuICAgICAgICAgICAgICAgICAgICBub2RlLmhvcml6b250YWxQYWRkaW5nID0gMjQ7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJwaC02XCI6XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuaG9yaXpvbnRhbFBhZGRpbmcgPSAzMjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInBoLTdcIjpcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5ob3Jpem9udGFsUGFkZGluZyA9IDQwO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwicGgtOFwiOlxuICAgICAgICAgICAgICAgICAgICBub2RlLmhvcml6b250YWxQYWRkaW5nID0gNDg7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChtYXRjaFBhZGRpbmdWZXJ0aWNhbCA9PSBudWxsKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIm5vXCIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJoYXMgcGFkZGluZyBob3Jpem9udGFsXCIpO1xuICAgICAgICAgICAgc3dpdGNoIChtYXRjaFBhZGRpbmdWZXJ0aWNhbFswXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJwdi1ub25lXCI6XG4gICAgICAgICAgICAgICAgICAgIG5vZGUudmVydGljYWxQYWRkaW5nID0gMDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInB2LTFcIjpcbiAgICAgICAgICAgICAgICAgICAgbm9kZS52ZXJ0aWNhbFBhZGRpbmcgPSA0O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwicHYtMlwiOlxuICAgICAgICAgICAgICAgICAgICBub2RlLnZlcnRpY2FsUGFkZGluZyA9IDg7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJwdi0zXCI6XG4gICAgICAgICAgICAgICAgICAgIG5vZGUudmVydGljYWxQYWRkaW5nID0gMTI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJwdi00XCI6XG4gICAgICAgICAgICAgICAgICAgIG5vZGUudmVydGljYWxQYWRkaW5nID0gMTY7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJwdi01XCI6XG4gICAgICAgICAgICAgICAgICAgIG5vZGUudmVydGljYWxQYWRkaW5nID0gMjQ7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJwdi02XCI6XG4gICAgICAgICAgICAgICAgICAgIG5vZGUudmVydGljYWxQYWRkaW5nID0gMzI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJwdi03XCI6XG4gICAgICAgICAgICAgICAgICAgIG5vZGUudmVydGljYWxQYWRkaW5nID0gNDA7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJwdi04XCI6XG4gICAgICAgICAgICAgICAgICAgIG5vZGUudmVydGljYWxQYWRkaW5nID0gNDg7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIFNwYWNpbmdDaGVja1RyYXZlcnNlKG5vZGUpO1xuICAgIH1cbiAgICAvLyBpZiAoXCJjaGlsZHJlblwiIGluIG5vZGVzKSB7XG4gICAgLy8gICBmb3IgKGNvbnN0IGNoaWxkIG9mIG5vZGUuY2hpbGRyZW4pIHtcbiAgICAvLyAgICAgU3BhY2luZ0NoZWNrVHJhdmVyc2UoY2hpbGQpO1xuICAgIC8vICAgfVxuICAgIC8vIH0gZWxzZSB7XG4gICAgLy8gICAvLyBkbyBub3RoaW5nXG4gICAgLy8gfVxufTtcbmV4cG9ydCB7IFNwYWNpbmdDaGVja1RyYXZlcnNlIH07XG4iLCJmdW5jdGlvbiBjbG9uZSh2YWwpIHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh2YWwpKTtcbn1cbmxldCBwaE5hbWUgPSBudWxsO1xubGV0IHB2TmFtZSA9IG51bGw7XG5sZXQgc3BOYW1lID0gbnVsbDtcbmxldCBuYW1lUHJvcCA9IHtcbiAgICBob3Jpem9udGFsOiBcInBoLW5vbmVcIixcbiAgICB2ZXJ0aWNhbDogXCJwdi1ub25lXCIsXG4gICAgc3BhY2luZzogXCJzcC1ub25lXCIsXG59O1xuZnVuY3Rpb24gdXBkYXRlTmFtZSh2YWwsIG5vZGUpIHtcbiAgICBpZiAodmFsLnR5cGUgPT09IFwiaG9yaXpvbnRhbFwiKSB7XG4gICAgICAgIG5hbWVQcm9wLmhvcml6b250YWwgPSB2YWwudmFsdWU7XG4gICAgfVxuICAgIGVsc2UgaWYgKHZhbC50eXBlID09PSBcInZlcnRpY2FsXCIpIHtcbiAgICAgICAgbmFtZVByb3AudmVydGljYWwgPSB2YWwudmFsdWU7XG4gICAgfVxuICAgIGVsc2UgaWYgKHZhbC50eXBlID09PSBcInNwYWNpbmdcIikge1xuICAgICAgICBuYW1lUHJvcC5zcGFjaW5nID0gdmFsLnZhbHVlO1xuICAgIH1cbiAgICBub2RlLm5hbWUgPVxuICAgICAgICBuYW1lUHJvcC5ob3Jpem9udGFsICsgXCIgXCIgKyBuYW1lUHJvcC52ZXJ0aWNhbCArIFwiIFwiICsgbmFtZVByb3Auc3BhY2luZztcbn1cbmNvbnN0IFBhZGRpbmdIb3Jpem9udGFsU2xpZGVyID0gKG5vZGVzLCBtc2cpID0+IHtcbiAgICBsZXQgc2xpZGVyVmFsdWUgPSBtc2cuc2xpZGVyVmFsdWU7XG4gICAgbGV0IHNwYWNpbmcgPSBudWxsO1xuICAgIGxldCBzcGFjaW5nTmFtZSA9IG51bGw7XG4gICAgc3dpdGNoIChzbGlkZXJWYWx1ZSkge1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgc3BhY2luZyA9IDA7XG4gICAgICAgICAgICBzcGFjaW5nTmFtZSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCIxXCI6XG4gICAgICAgICAgICBzcGFjaW5nID0gNDtcbiAgICAgICAgICAgIHNwYWNpbmdOYW1lID0gXCIxXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIjJcIjpcbiAgICAgICAgICAgIHNwYWNpbmcgPSA4O1xuICAgICAgICAgICAgc3BhY2luZ05hbWUgPSBcIjJcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiM1wiOlxuICAgICAgICAgICAgc3BhY2luZyA9IDEyO1xuICAgICAgICAgICAgc3BhY2luZ05hbWUgPSBcIjNcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiNFwiOlxuICAgICAgICAgICAgc3BhY2luZyA9IDE2O1xuICAgICAgICAgICAgc3BhY2luZ05hbWUgPSBcIjRcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiNVwiOlxuICAgICAgICAgICAgc3BhY2luZyA9IDI0O1xuICAgICAgICAgICAgc3BhY2luZ05hbWUgPSBcIjVcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiNlwiOlxuICAgICAgICAgICAgc3BhY2luZyA9IDMyO1xuICAgICAgICAgICAgc3BhY2luZ05hbWUgPSBcIjZcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiN1wiOlxuICAgICAgICAgICAgc3BhY2luZyA9IDQwO1xuICAgICAgICAgICAgc3BhY2luZ05hbWUgPSBcIjdcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiOFwiOlxuICAgICAgICAgICAgc3BhY2luZyA9IDQ4O1xuICAgICAgICAgICAgc3BhY2luZ05hbWUgPSBcIjhcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IG5vZGUgb2Ygbm9kZXMpIHtcbiAgICAgICAgaWYgKG5vZGUpIHtcbiAgICAgICAgICAgIHBoTmFtZSA9IFwicGgtXCIgKyBzcGFjaW5nTmFtZTtcbiAgICAgICAgICAgIHVwZGF0ZU5hbWUoeyB0eXBlOiBcImhvcml6b250YWxcIiwgdmFsdWU6IHBoTmFtZSB9LCBub2RlKTtcbiAgICAgICAgICAgIGlmIChub2RlLnR5cGUgPT09IFwiR1JPVVBcIikge1xuICAgICAgICAgICAgICAgIG5vZGUuaG9yaXpvbnRhbFBhZGRpbmcgPSBzcGFjaW5nO1xuICAgICAgICAgICAgICAgIG5vZGUubGF5b3V0TW9kZSA9IFwiTk9ORVwiO1xuICAgICAgICAgICAgICAgIGlmIChcImNoaWxkcmVuXCIgaW4gbm9kZSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgZ3JvdXAgPSBub2RlLmNoaWxkcmVuWzBdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGxldCBzZXRBdXRvTGF5b3V0ID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgICAgICAgICBub2RlLmhvcml6b250YWxQYWRkaW5nID0gc3BhY2luZztcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiByZXNvbHZlKFwiZG9uZVwiKSwgNSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59O1xuY29uc3QgUGFkZGluZ1ZlcnRpY2FsU2xpZGVyID0gKG5vZGVzLCBtc2cpID0+IHtcbiAgICBsZXQgc2xpZGVyVmFsdWUgPSBtc2cuc2xpZGVyVmFsdWU7XG4gICAgbGV0IHNwYWNpbmcgPSBudWxsO1xuICAgIGxldCBzcGFjaW5nTmFtZSA9IG51bGw7XG4gICAgc3dpdGNoIChzbGlkZXJWYWx1ZSkge1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgc3BhY2luZyA9IDA7XG4gICAgICAgICAgICBzcGFjaW5nTmFtZSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCIxXCI6XG4gICAgICAgICAgICBzcGFjaW5nID0gNDtcbiAgICAgICAgICAgIHNwYWNpbmdOYW1lID0gXCIxXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIjJcIjpcbiAgICAgICAgICAgIHNwYWNpbmcgPSA4O1xuICAgICAgICAgICAgc3BhY2luZ05hbWUgPSBcIjJcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiM1wiOlxuICAgICAgICAgICAgc3BhY2luZyA9IDEyO1xuICAgICAgICAgICAgc3BhY2luZ05hbWUgPSBcIjNcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiNFwiOlxuICAgICAgICAgICAgc3BhY2luZyA9IDE2O1xuICAgICAgICAgICAgc3BhY2luZ05hbWUgPSBcIjRcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiNVwiOlxuICAgICAgICAgICAgc3BhY2luZyA9IDI0O1xuICAgICAgICAgICAgc3BhY2luZ05hbWUgPSBcIjVcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiNlwiOlxuICAgICAgICAgICAgc3BhY2luZyA9IDMyO1xuICAgICAgICAgICAgc3BhY2luZ05hbWUgPSBcIjZcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiN1wiOlxuICAgICAgICAgICAgc3BhY2luZyA9IDQwO1xuICAgICAgICAgICAgc3BhY2luZ05hbWUgPSBcIjdcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiOFwiOlxuICAgICAgICAgICAgc3BhY2luZyA9IDQ4O1xuICAgICAgICAgICAgc3BhY2luZ05hbWUgPSBcIjhcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IG5vZGUgb2Ygbm9kZXMpIHtcbiAgICAgICAgaWYgKG5vZGUpIHtcbiAgICAgICAgICAgIHB2TmFtZSA9IFwicHYtXCIgKyBzcGFjaW5nTmFtZTtcbiAgICAgICAgICAgIHVwZGF0ZU5hbWUoeyB0eXBlOiBcInZlcnRpY2FsXCIsIHZhbHVlOiBwdk5hbWUgfSwgbm9kZSk7XG4gICAgICAgICAgICBpZiAobm9kZS50eXBlID09PSBcIkdST1VQXCIpIHtcbiAgICAgICAgICAgICAgICBub2RlLnZlcnRpY2FsUGFkZGluZyA9IHNwYWNpbmc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBsZXQgc2V0QXV0b0xheW91dCA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS52ZXJ0aWNhbFBhZGRpbmcgPSBzcGFjaW5nO1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHJlc29sdmUoXCJkb25lXCIpLCA1KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn07XG5jb25zdCBJdGVtU3BhY2luZyA9IChub2RlcywgbXNnKSA9PiB7XG4gICAgbGV0IHNsaWRlclZhbHVlID0gbXNnLnNsaWRlclZhbHVlO1xuICAgIGxldCBzcGFjaW5nID0gbnVsbDtcbiAgICBsZXQgc3BhY2luZ05hbWUgPSBudWxsO1xuICAgIHN3aXRjaCAoc2xpZGVyVmFsdWUpIHtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHNwYWNpbmcgPSAwO1xuICAgICAgICAgICAgc3BhY2luZ05hbWUgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiMVwiOlxuICAgICAgICAgICAgc3BhY2luZyA9IDQ7XG4gICAgICAgICAgICBzcGFjaW5nTmFtZSA9IFwiMVwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCIyXCI6XG4gICAgICAgICAgICBzcGFjaW5nID0gODtcbiAgICAgICAgICAgIHNwYWNpbmdOYW1lID0gXCIyXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIjNcIjpcbiAgICAgICAgICAgIHNwYWNpbmcgPSAxMjtcbiAgICAgICAgICAgIHNwYWNpbmdOYW1lID0gXCIzXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIjRcIjpcbiAgICAgICAgICAgIHNwYWNpbmcgPSAxMjtcbiAgICAgICAgICAgIHNwYWNpbmdOYW1lID0gXCI0XCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIjVcIjpcbiAgICAgICAgICAgIHNwYWNpbmcgPSAyNDtcbiAgICAgICAgICAgIHNwYWNpbmdOYW1lID0gXCI1XCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIjZcIjpcbiAgICAgICAgICAgIHNwYWNpbmcgPSAzMjtcbiAgICAgICAgICAgIHNwYWNpbmdOYW1lID0gXCI2XCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIjdcIjpcbiAgICAgICAgICAgIHNwYWNpbmcgPSA0MDtcbiAgICAgICAgICAgIHNwYWNpbmdOYW1lID0gXCI3XCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIjhcIjpcbiAgICAgICAgICAgIHNwYWNpbmcgPSA0ODtcbiAgICAgICAgICAgIHNwYWNpbmdOYW1lID0gXCI4XCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG4gICAgZm9yIChjb25zdCBub2RlIG9mIG5vZGVzKSB7XG4gICAgICAgIG5vZGUuaXRlbVNwYWNpbmcgPSBzcGFjaW5nO1xuICAgICAgICBzcE5hbWUgPSBcInNwLVwiICsgc3BhY2luZ05hbWU7XG4gICAgICAgIHVwZGF0ZU5hbWUoeyB0eXBlOiBcInNwYWNpbmdcIiwgdmFsdWU6IHNwTmFtZSB9LCBub2RlKTtcbiAgICB9XG59O1xuZXhwb3J0IHsgUGFkZGluZ0hvcml6b250YWxTbGlkZXIsIFBhZGRpbmdWZXJ0aWNhbFNsaWRlciwgSXRlbVNwYWNpbmcgfTtcbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IHsgRGFya1VpQ29sb3JzLCBMaWdodFVpQ29sb3JzIH0gZnJvbSBcIi4uL3RoZW1lLXN0eWxlcy9jb2xvcnNcIjtcbmltcG9ydCB7IERhcmtVaUVmZmVjdHMsIExpZ2h0VWlFZmZlY3RzIH0gZnJvbSBcIi4uL3RoZW1lLXN0eWxlcy9lZmZlY3RzXCI7XG4vLyBGaWxsXG5jb25zdCBzd2FwRmlsbCA9IChub2RlLCBhbGxMaWdodFRva2VucywgYWxsRGFya1Rva2VucykgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgbGV0IGhhc0ZpbGxTdHlsZSA9IG5vZGUuZmlsbFN0eWxlSWQgJiYgbm9kZS5maWxsU3R5bGVJZC5sZW5ndGggPiAwO1xuICAgIC8vIGNvbnNvbGUubG9nKG5vZGUsIGFsbExpZ2h0VG9rZW5zLCBhbGxEYXJrVG9rZW5zKTtcbiAgICBpZiAoaGFzRmlsbFN0eWxlKSB7XG4gICAgICAgIGxldCBub2RlRmlsbFN0eWxlSWQgPSBub2RlLmZpbGxTdHlsZUlkO1xuICAgICAgICBsZXQgbm9kZUZpbGxQYWludFN0eWxlID0gZmlnbWEuZ2V0U3R5bGVCeUlkKG5vZGVGaWxsU3R5bGVJZCk7XG4gICAgICAgIGxldCBub2RlRmlsbFBhaW50TmFtZSA9IG5vZGVGaWxsUGFpbnRTdHlsZS5uYW1lO1xuICAgICAgICBsZXQgc3dhcHBlZE5vZGVGaWxsTmFtZTtcbiAgICAgICAgbGV0IG5vZGVGaWxsUGFpbnRJc0xpZ2h0TW9kZSA9IG5vZGVGaWxsUGFpbnROYW1lLmluY2x1ZGVzKFwibGlnaHQgdGhlbWVcIik7XG4gICAgICAgIGlmIChub2RlRmlsbFBhaW50SXNMaWdodE1vZGUpIHtcbiAgICAgICAgICAgIHN3YXBwZWROb2RlRmlsbE5hbWUgPSBub2RlRmlsbFBhaW50TmFtZS5yZXBsYWNlKFwibGlnaHQgdGhlbWUvXCIsIFwiZGFyayB0aGVtZS9cIik7XG4gICAgICAgICAgICBsZXQgZmlsdGVyZWQgPSBhbGxEYXJrVG9rZW5zLmZpbmQoKGl0ZW0pID0+IGl0ZW0ubmFtZSA9PT0gc3dhcHBlZE5vZGVGaWxsTmFtZSk7XG4gICAgICAgICAgICBub2RlLmZpbGxTdHlsZUlkID0gZmlsdGVyZWQuaWQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzd2FwcGVkTm9kZUZpbGxOYW1lID0gbm9kZUZpbGxQYWludE5hbWUucmVwbGFjZShcImRhcmsgdGhlbWUvXCIsIFwibGlnaHQgdGhlbWUvXCIpO1xuICAgICAgICAgICAgbGV0IGZpbHRlcmVkID0gYWxsTGlnaHRUb2tlbnMuZmluZCgoaXRlbSkgPT4gaXRlbS5uYW1lID09PSBzd2FwcGVkTm9kZUZpbGxOYW1lKTtcbiAgICAgICAgICAgIG5vZGUuZmlsbFN0eWxlSWQgPSBmaWx0ZXJlZC5pZDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbn0pO1xuLy8gU3Ryb2tlc1xuY29uc3Qgc3dhcFN0cm9rZSA9IChub2RlLCBhbGxMaWdodFRva2VucywgYWxsRGFya1Rva2VucykgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgbGV0IGhhc1N0cm9rZVN0eWxlID0gbm9kZS5zdHJva2VTdHlsZUlkICYmIG5vZGUuc3Ryb2tlU3R5bGVJZC5sZW5ndGggPiAwO1xuICAgIGlmIChoYXNTdHJva2VTdHlsZSkge1xuICAgICAgICBsZXQgbm9kZVN0cm9rZVN0eWxlSWQgPSBub2RlLnN0cm9rZVN0eWxlSWQ7XG4gICAgICAgIGxldCBub2RlU3Ryb2tlUGFpbnRTdHlsZSA9IGZpZ21hLmdldFN0eWxlQnlJZChub2RlU3Ryb2tlU3R5bGVJZCk7XG4gICAgICAgIGxldCBub2RlU3Ryb2tlUGFpbnROYW1lID0gbm9kZVN0cm9rZVBhaW50U3R5bGUubmFtZTtcbiAgICAgICAgbGV0IHN3YXBwZWROb2RlU3Ryb2tlTmFtZTtcbiAgICAgICAgbGV0IG5vZGVTdHJva2VQYWludElzTGlnaHRNb2RlID0gbm9kZVN0cm9rZVBhaW50TmFtZS5pbmNsdWRlcyhcImxpZ2h0IHRoZW1lXCIpO1xuICAgICAgICBpZiAobm9kZVN0cm9rZVBhaW50SXNMaWdodE1vZGUpIHtcbiAgICAgICAgICAgIHN3YXBwZWROb2RlU3Ryb2tlTmFtZSA9IG5vZGVTdHJva2VQYWludE5hbWUucmVwbGFjZShcImxpZ2h0IHRoZW1lL1wiLCBcImRhcmsgdGhlbWUvXCIpO1xuICAgICAgICAgICAgbGV0IGZpbHRlcmVkID0gYWxsRGFya1Rva2Vucy5maW5kKChpdGVtKSA9PiBpdGVtLm5hbWUgPT09IHN3YXBwZWROb2RlU3Ryb2tlTmFtZSk7XG4gICAgICAgICAgICBub2RlLnN0cm9rZVN0eWxlSWQgPSBmaWx0ZXJlZC5pZDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHN3YXBwZWROb2RlU3Ryb2tlTmFtZSA9IG5vZGVTdHJva2VQYWludE5hbWUucmVwbGFjZShcImRhcmsgdGhlbWUvXCIsIFwibGlnaHQgdGhlbWUvXCIpO1xuICAgICAgICAgICAgbGV0IGZpbHRlcmVkID0gYWxsTGlnaHRUb2tlbnMuZmluZCgoaXRlbSkgPT4gaXRlbS5uYW1lID09PSBzd2FwcGVkTm9kZVN0cm9rZU5hbWUpO1xuICAgICAgICAgICAgbm9kZS5zdHJva2VTdHlsZUlkID0gZmlsdGVyZWQuaWQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG59KTtcbi8vIEVmZmVjdHNcbmNvbnN0IHN3YXBFZmZlY3RzID0gKG5vZGUsIGFsbExpZ2h0RWZmZWN0cywgYWxsRGFya0VmZmVjdHMpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIGxldCBoYXNFZmZlY3RzID0gbm9kZS5lZmZlY3RTdHlsZUlkICYmIG5vZGUuZWZmZWN0U3R5bGVJZC5sZW5ndGggPiAwO1xuICAgIGlmIChoYXNFZmZlY3RzKSB7XG4gICAgICAgIGxldCBub2RlRWZmZWN0U3R5bGVJZCA9IG5vZGUuZWZmZWN0U3R5bGVJZDtcbiAgICAgICAgbGV0IG5vZGVFZmZlY3RTdHlsZSA9IGZpZ21hLmdldFN0eWxlQnlJZChub2RlRWZmZWN0U3R5bGVJZCk7XG4gICAgICAgIGxldCBub2RlRWZmZWN0U3R5bGVOYW1lID0gbm9kZUVmZmVjdFN0eWxlLm5hbWU7XG4gICAgICAgIGxldCBzd2FwcGVkTm9kZUVmZmVjdE5hbWU7XG4gICAgICAgIGxldCBub2RlRWZmZWN0U3R5bGVOYW1lSXNMaWdodCA9IG5vZGVFZmZlY3RTdHlsZU5hbWUuaW5jbHVkZXMoXCJsaWdodCB0aGVtZVwiKTtcbiAgICAgICAgY29uc29sZS5sb2coc3dhcHBlZE5vZGVFZmZlY3ROYW1lKTtcbiAgICAgICAgaWYgKG5vZGVFZmZlY3RTdHlsZU5hbWVJc0xpZ2h0KSB7XG4gICAgICAgICAgICBzd2FwcGVkTm9kZUVmZmVjdE5hbWUgPSBub2RlRWZmZWN0U3R5bGVOYW1lLnJlcGxhY2UoXCJsaWdodCB0aGVtZS9cIiwgXCJkYXJrIHRoZW1lL1wiKTtcbiAgICAgICAgICAgIGxldCBmaWx0ZXJlZCA9IGFsbERhcmtFZmZlY3RzLmZpbmQoKGl0ZW0pID0+IGl0ZW0ubmFtZSA9PT0gc3dhcHBlZE5vZGVFZmZlY3ROYW1lKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGZpbHRlcmVkKTtcbiAgICAgICAgICAgIG5vZGUuZWZmZWN0U3R5bGVJZCA9IGZpbHRlcmVkLmlkO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc3dhcHBlZE5vZGVFZmZlY3ROYW1lID0gbm9kZUVmZmVjdFN0eWxlTmFtZS5yZXBsYWNlKFwiZGFyayB0aGVtZS9cIiwgXCJsaWdodCB0aGVtZS9cIik7XG4gICAgICAgICAgICBsZXQgZmlsdGVyZWQgPSBhbGxMaWdodEVmZmVjdHMuZmluZCgoaXRlbSkgPT4gaXRlbS5uYW1lID09PSBzd2FwcGVkTm9kZUVmZmVjdE5hbWUpO1xuICAgICAgICAgICAgbm9kZS5lZmZlY3RTdHlsZUlkID0gZmlsdGVyZWQuaWQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG59KTtcbi8vIFRoZW1lIFN3YXBcbmNvbnN0IFRoZW1lU3dhcCA9IChub2RlKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICBHZXRBbGxMb2NhbFBhaW50U3R5bGVzKCk7XG4gICAgbGV0IGFsbExpZ2h0VG9rZW5zID0geWllbGQgZmV0Y2hBbGxMaWdodFRva2VucygpO1xuICAgIGxldCBhbGxEYXJrVG9rZW5zID0geWllbGQgZmV0Y2hBbGxEYXJrVG9rZW5zKCk7XG4gICAgbGV0IGFsbExpZ2h0RWZmZWN0cyA9IHlpZWxkIGZldGNoQWxsTGlnaHRFZmZlY3RzKCk7XG4gICAgbGV0IGFsbERhcmtFZmZlY3RzID0geWllbGQgZmV0Y2hBbGxEYXJrRWZmZWN0cygpO1xuICAgIGNvbnN0IFN3YXAgPSAobm9kZSkgPT4ge1xuICAgICAgICBzd2FwRmlsbChub2RlLCBhbGxMaWdodFRva2VucywgYWxsRGFya1Rva2Vucyk7XG4gICAgICAgIHN3YXBTdHJva2Uobm9kZSwgYWxsTGlnaHRUb2tlbnMsIGFsbERhcmtUb2tlbnMpO1xuICAgICAgICBzd2FwRWZmZWN0cyhub2RlLCBhbGxMaWdodEVmZmVjdHMsIGFsbERhcmtFZmZlY3RzKTtcbiAgICAgICAgaWYgKFwiY2hpbGRyZW5cIiBpbiBub2RlKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIG5vZGUuY2hpbGRyZW4pIHtcbiAgICAgICAgICAgICAgICBpZiAoY2hpbGQubG9ja2VkKSB7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBTd2FwKGNoaWxkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBkbyBub3RoaW5nXG4gICAgICAgIH1cbiAgICB9O1xuICAgIFN3YXAobm9kZSk7XG4gICAgLy8gc3dhcFN0cm9rZShub2RlKTtcbiAgICAvLyBzd2FwRWZmZWN0cyhub2RlKTtcbn0pO1xuZXhwb3J0IHsgVGhlbWVTd2FwIH07XG4vLyBSdW4gdGhpcyBpbiB0b2tlbnMgZmlsZVxuY29uc3QgR2V0QWxsTG9jYWxQYWludFN0eWxlcyA9ICgpID0+IHtcbiAgICBmdW5jdGlvbiBjbG9uZSh2YWwpIHtcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodmFsKSk7XG4gICAgfVxuICAgIGxldCBhbGxQYWludFN0eWxlcyA9IGZpZ21hLmdldExvY2FsUGFpbnRTdHlsZXMoKTtcbiAgICAvLyBjb25zb2xlLmxvZyhhbGxQYWludFN0eWxlcyk7XG4gICAgbGV0IGFsbFN0eWxlc0FycmF5ID0gW107XG4gICAgZm9yIChjb25zdCBwYWludFN0eWxlIG9mIGFsbFBhaW50U3R5bGVzKSB7XG4gICAgICAgIGxldCBjb2xvciA9IGNsb25lKHBhaW50U3R5bGUucGFpbnRzWzBdKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coY29sb3IpO1xuICAgICAgICBsZXQgY29sb3JSR0IgPSBjb2xvci5jb2xvcjtcbiAgICAgICAgbGV0IHJnYlRvSW50ID0gKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5jZWlsKHZhbHVlICogMjU1KTtcbiAgICAgICAgfTtcbiAgICAgICAgbGV0IHJnYmEgPSB7XG4gICAgICAgICAgICByOiByZ2JUb0ludChjb2xvclJHQi5yKSxcbiAgICAgICAgICAgIGc6IHJnYlRvSW50KGNvbG9yUkdCLmcpLFxuICAgICAgICAgICAgYjogcmdiVG9JbnQoY29sb3JSR0IuYiksXG4gICAgICAgICAgICBhOiBjb2xvci5vcGFjaXR5LFxuICAgICAgICB9O1xuICAgICAgICBhbGxTdHlsZXNBcnJheS5wdXNoKHtcbiAgICAgICAgICAgIG5hbWU6IHBhaW50U3R5bGUubmFtZSxcbiAgICAgICAgICAgIC8vIHJnYmE6IHJnYmEsXG4gICAgICAgICAgICBzdHlsZUtleTogcGFpbnRTdHlsZS5rZXksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhhbGxTdHlsZXNBcnJheSk7XG59O1xuLy8gUnVuIHRoaXMgaW4gdG9rZW5zIGZpbGVcbmNvbnN0IEdldEFsbExvY2FsRWZmZWN0U3R5bGVzID0gKCkgPT4ge1xuICAgIGxldCBhbGxFZmZlY3RTdHlsZXMgPSBmaWdtYS5nZXRMb2NhbEVmZmVjdFN0eWxlcygpO1xuICAgIGxldCBhbGxFZmZlY3RzID0gW107XG4gICAgZm9yIChjb25zdCBlZmZlY3RTdHlsZSBvZiBhbGxFZmZlY3RTdHlsZXMpIHtcbiAgICAgICAgYWxsRWZmZWN0cy5wdXNoKHsgbmFtZTogZWZmZWN0U3R5bGUubmFtZSwgc3R5bGVLZXk6IGVmZmVjdFN0eWxlLmtleSB9KTtcbiAgICB9XG4gICAgY29uc29sZS5sb2coYWxsRWZmZWN0cyk7XG59O1xuY29uc3QgZmV0Y2hBbGxMaWdodFRva2VucyA9ICgpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIHJldHVybiBQcm9taXNlLmFsbChMaWdodFVpQ29sb3JzLm1hcCgoaXRlbSkgPT4gZmlnbWEuaW1wb3J0U3R5bGVCeUtleUFzeW5jKGl0ZW0uc3R5bGVLZXkpKSk7XG59KTtcbmNvbnN0IGZldGNoQWxsTGlnaHRFZmZlY3RzID0gKCkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgcmV0dXJuIFByb21pc2UuYWxsKExpZ2h0VWlFZmZlY3RzLm1hcCgoaXRlbSkgPT4gZmlnbWEuaW1wb3J0U3R5bGVCeUtleUFzeW5jKGl0ZW0uc3R5bGVLZXkpKSk7XG59KTtcbmNvbnN0IGZldGNoQWxsRGFya1Rva2VucyA9ICgpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIHJldHVybiBQcm9taXNlLmFsbChEYXJrVWlDb2xvcnMubWFwKChpdGVtKSA9PiBmaWdtYS5pbXBvcnRTdHlsZUJ5S2V5QXN5bmMoaXRlbS5zdHlsZUtleSkpKTtcbn0pO1xuY29uc3QgZmV0Y2hBbGxEYXJrRWZmZWN0cyA9ICgpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIHJldHVybiBQcm9taXNlLmFsbChEYXJrVWlFZmZlY3RzLm1hcCgoaXRlbSkgPT4gZmlnbWEuaW1wb3J0U3R5bGVCeUtleUFzeW5jKGl0ZW0uc3R5bGVLZXkpKSk7XG59KTtcbiIsImV4cG9ydCBjb25zdCBwYWRkaW5nSG9yaXpvbnRhbCA9IChzcGFjaW5nKSA9PiB7XG4gIGxldCBncmlkcztcblxuICBpZiAoc3BhY2luZyA9PSAwKSB7XG4gICAgZ3JpZHMgPSBbXTtcbiAgfSBlbHNlIHtcbiAgICBncmlkcyA9IFtcbiAgICAgIHtcbiAgICAgICAgcGF0dGVybjogXCJDT0xVTU5TXCIsXG4gICAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICAgIGNvbG9yOiB7XG4gICAgICAgICAgcjogMCxcbiAgICAgICAgICBnOiAwLjUsXG4gICAgICAgICAgYjogMSxcbiAgICAgICAgICBhOiAwLjA1LFxuICAgICAgICB9LFxuICAgICAgICBndXR0ZXJTaXplOiAxLFxuICAgICAgICBhbGlnbm1lbnQ6IFwiU1RSRVRDSFwiLFxuICAgICAgICBjb3VudDogMSxcbiAgICAgICAgb2Zmc2V0OiBzcGFjaW5nLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0dGVybjogXCJDT0xVTU5TXCIsXG4gICAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICAgIGNvbG9yOiB7XG4gICAgICAgICAgcjogMCxcbiAgICAgICAgICBnOiAxLFxuICAgICAgICAgIGI6IDAsXG4gICAgICAgICAgYTogMC4yLFxuICAgICAgICB9LFxuICAgICAgICBndXR0ZXJTaXplOiAxLFxuICAgICAgICBhbGlnbm1lbnQ6IFwiTUFYXCIsXG4gICAgICAgIGNvdW50OiAxLFxuICAgICAgICBzZWN0aW9uU2l6ZTogc3BhY2luZyxcbiAgICAgICAgb2Zmc2V0OiAwLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0dGVybjogXCJDT0xVTU5TXCIsXG4gICAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICAgIGNvbG9yOiB7XG4gICAgICAgICAgcjogMCxcbiAgICAgICAgICBnOiAxLFxuICAgICAgICAgIGI6IDAsXG4gICAgICAgICAgYTogMC4yLFxuICAgICAgICB9LFxuICAgICAgICBndXR0ZXJTaXplOiAxLFxuICAgICAgICBhbGlnbm1lbnQ6IFwiTUlOXCIsXG4gICAgICAgIGNvdW50OiAxLFxuICAgICAgICBzZWN0aW9uU2l6ZTogc3BhY2luZyxcbiAgICAgICAgb2Zmc2V0OiAwLFxuICAgICAgfSxcbiAgICBdO1xuICB9XG5cbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICByZXNvbHZlKGdyaWRzKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgcGFkZGluZ1ZlcnRpY2FsID0gKHNwYWNpbmcpID0+IHtcbiAgbGV0IGdyaWRzO1xuXG4gIGlmIChzcGFjaW5nID09IDApIHtcbiAgICBncmlkcyA9IFtdO1xuICB9IGVsc2Uge1xuICAgIGdyaWRzID0gW1xuICAgICAge1xuICAgICAgICBwYXR0ZXJuOiBcIlJPV1NcIixcbiAgICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgICAgY29sb3I6IHtcbiAgICAgICAgICByOiAwLFxuICAgICAgICAgIGc6IDAuNSxcbiAgICAgICAgICBiOiAxLFxuICAgICAgICAgIGE6IDAuMDUsXG4gICAgICAgIH0sXG4gICAgICAgIGd1dHRlclNpemU6IDEsXG4gICAgICAgIGFsaWdubWVudDogXCJTVFJFVENIXCIsXG4gICAgICAgIGNvdW50OiAxLFxuICAgICAgICBvZmZzZXQ6IHNwYWNpbmcsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXR0ZXJuOiBcIlJPV1NcIixcbiAgICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgICAgY29sb3I6IHtcbiAgICAgICAgICByOiAwLFxuICAgICAgICAgIGc6IDEsXG4gICAgICAgICAgYjogMCxcbiAgICAgICAgICBhOiAwLjIsXG4gICAgICAgIH0sXG4gICAgICAgIGd1dHRlclNpemU6IDEsXG4gICAgICAgIGFsaWdubWVudDogXCJNQVhcIixcbiAgICAgICAgY291bnQ6IDEsXG4gICAgICAgIHNlY3Rpb25TaXplOiBzcGFjaW5nLFxuICAgICAgICBvZmZzZXQ6IDAsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXR0ZXJuOiBcIlJPV1NcIixcbiAgICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgICAgY29sb3I6IHtcbiAgICAgICAgICByOiAwLFxuICAgICAgICAgIGc6IDEsXG4gICAgICAgICAgYjogMCxcbiAgICAgICAgICBhOiAwLjIsXG4gICAgICAgIH0sXG4gICAgICAgIGd1dHRlclNpemU6IDEsXG4gICAgICAgIGFsaWdubWVudDogXCJNSU5cIixcbiAgICAgICAgY291bnQ6IDEsXG4gICAgICAgIHNlY3Rpb25TaXplOiBzcGFjaW5nLFxuICAgICAgICBvZmZzZXQ6IDAsXG4gICAgICB9LFxuICAgIF07XG4gIH1cblxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIHJlc29sdmUoZ3JpZHMpO1xuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBiYXNlbGluZUdyaWRzID0ge1xuICBwYXR0ZXJuOiBcIlJPV1NcIixcbiAgdmlzaWJsZTogdHJ1ZSxcbiAgY29sb3I6IHtcbiAgICByOiAxLFxuICAgIGc6IDAsXG4gICAgYjogMCxcbiAgICBhOiAwLjEwMDAwMDAwMTQ5MDExNjEyLFxuICB9LFxuICBndXR0ZXJTaXplOiA0LFxuICBhbGlnbm1lbnQ6IFwiTUlOXCIsXG4gIGNvdW50OiBJbmZpbml0eSxcbiAgc2VjdGlvblNpemU6IDQsXG4gIG9mZnNldDogMCxcbn07XG5cbmV4cG9ydCBjb25zdCBtYXhXaWR0aEdyaWRzID0gW1xuICB7XG4gICAgcGF0dGVybjogXCJDT0xVTU5TXCIsXG4gICAgdmlzaWJsZTogdHJ1ZSxcbiAgICBjb2xvcjoge1xuICAgICAgcjogMSxcbiAgICAgIGc6IDAuNzE5OTk5OTY5MDA1NTg0NyxcbiAgICAgIGI6IDAsXG4gICAgICBhOiAwLjIwMDAwMDAwMjk4MDIzMjI0LFxuICAgIH0sXG4gICAgZ3V0dGVyU2l6ZTogMTAyNSxcbiAgICBhbGlnbm1lbnQ6IFwiU1RSRVRDSFwiLFxuICAgIGNvdW50OiAyLFxuICAgIG9mZnNldDogMCxcbiAgfSxcbiAge1xuICAgIHBhdHRlcm46IFwiQ09MVU1OU1wiLFxuICAgIHZpc2libGU6IHRydWUsXG4gICAgY29sb3I6IHtcbiAgICAgIHI6IDAsXG4gICAgICBnOiAwLjUsXG4gICAgICBiOiAxLFxuICAgICAgYTogMC4xLFxuICAgIH0sXG4gICAgZ3V0dGVyU2l6ZTogMSxcbiAgICBhbGlnbm1lbnQ6IFwiQ0VOVEVSXCIsXG4gICAgY291bnQ6IDEsXG4gICAgc2VjdGlvblNpemU6IDEwMjUsXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgbWF4V2lkdGhMZWZ0QWxpZ25lZEdyaWRzID0gW1xuICB7XG4gICAgcGF0dGVybjogXCJDT0xVTU5TXCIsXG4gICAgdmlzaWJsZTogdHJ1ZSxcbiAgICBjb2xvcjoge1xuICAgICAgcjogMCxcbiAgICAgIGc6IDAuNSxcbiAgICAgIGI6IDEsXG4gICAgICBhOiAwLjA1LFxuICAgIH0sXG4gICAgZ3V0dGVyU2l6ZTogMSxcbiAgICBhbGlnbm1lbnQ6IFwiTUlOXCIsXG4gICAgY291bnQ6IDEsXG4gICAgc2VjdGlvblNpemU6IDEwMjUsXG4gICAgb2Zmc2V0OiAwLFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IGdldE1heFdpZHRoR3JpZHMgPSAoKSA9PiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgcmVzb2x2ZShtYXhXaWR0aEdyaWRzKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgY29sdW1uR3JpZHMgPSBbXG4gIHtcbiAgICBwYXR0ZXJuOiBcIkNPTFVNTlNcIixcbiAgICB2aXNpYmxlOiB0cnVlLFxuICAgIGNvbG9yOiB7XG4gICAgICByOiAwLjgyOTk5OTkyMzcwNjA1NDcsXG4gICAgICBnOiAwLFxuICAgICAgYjogMSxcbiAgICAgIGE6IDAuMSxcbiAgICB9LFxuICAgIGd1dHRlclNpemU6IDE2LFxuICAgIGFsaWdubWVudDogXCJTVFJFVENIXCIsXG4gICAgY291bnQ6IDEyLFxuICAgIG9mZnNldDogMCxcbiAgfSxcbl07XG4iLCJleHBvcnQgY29uc3QgTGlnaHRVaUNvbG9ycyA9IFtcbiAge1xuICAgIG5hbWU6IFwibGlnaHQgdGhlbWUvaW50ZW50aW9ucy9pbnRlbnRpb25zLnByaW1hcnkubGlnaHRcIixcbiAgICBzdHlsZUtleTogXCIwZTJhYmUzOGMxOTUwMWJlZGJhMDY3MDc0YjlmZjU5Y2EzYTQ5MTRiXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImxpZ2h0IHRoZW1lL2ludGVudGlvbnMvaW50ZW50aW9ucy5wcmltYXJ5Lm1haW5cIixcbiAgICBzdHlsZUtleTogXCJjZjBjOGU4OGViNjViODA0OWZlY2E2MGFjODNlMWRlM2QzYWI2ZThiXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImxpZ2h0IHRoZW1lL2ludGVudGlvbnMvaW50ZW50aW9ucy5wcmltYXJ5LmhvdmVyXCIsXG4gICAgc3R5bGVLZXk6IFwiN2I3MzViNWVkZjJiMDJjNWQyZjg2MTJhYTYwODYwYzM5M2IwODgwOFwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJsaWdodCB0aGVtZS9pbnRlbnRpb25zL2ludGVudGlvbnMucHJpbWFyeS5wcmVzc2VkXCIsXG4gICAgc3R5bGVLZXk6IFwiYWIxOThkOWMyMzZkYWJlZTRmOTMwMTQ1YzVlNTlhMzBmYWYzNDFiZVwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJsaWdodCB0aGVtZS9pbnRlbnRpb25zL2ludGVudGlvbnMucHJpbWFyeS5kYXJrXCIsXG4gICAgc3R5bGVLZXk6IFwiZGE5Mzg2OThjOWQyMjMyMjFkNjNjN2M1NTAxYTkwNTdhMGQ1ZjZmYlwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJsaWdodCB0aGVtZS9pbnRlbnRpb25zL2ludGVudGlvbnMucHJpbWFyeS5jb250cmFzdFRleHRcIixcbiAgICBzdHlsZUtleTogXCJiMjhhN2ZjZGQyNDczMjNkN2JhOTk5NjFjOTYwOGNmODM3OGJhZGExXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImxpZ2h0IHRoZW1lL2ludGVudGlvbnMvaW50ZW50aW9ucy5lcnJvci5saWdodFwiLFxuICAgIHN0eWxlS2V5OiBcImQzNWRhYmMzZWU3ZjViZTE4YWMwZDJhZWI3NGM3MmJhYWE4YmJjYTdcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwibGlnaHQgdGhlbWUvaW50ZW50aW9ucy9pbnRlbnRpb25zLmVycm9yLm1haW5cIixcbiAgICBzdHlsZUtleTogXCI3OThjYjhmODk4YWIyYTUwOGE3YmE0OTFkODk5MDExZmRhODk2NTc3XCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImxpZ2h0IHRoZW1lL2ludGVudGlvbnMvaW50ZW50aW9ucy5lcnJvci5ob3ZlclwiLFxuICAgIHN0eWxlS2V5OiBcImEyZjQ5NWU5YzAyMTAwYmQwMjUxNDY5NjhkZmJmZDdjOTQwOGQ4ZWRcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwibGlnaHQgdGhlbWUvaW50ZW50aW9ucy9pbnRlbnRpb25zLmVycm9yLnByZXNzZWRcIixcbiAgICBzdHlsZUtleTogXCJjOWM1NTA4MDZhNGJhMmE0N2YzMDNmOGY4ZjMxZDUxOGQyNTg0ZjVjXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImxpZ2h0IHRoZW1lL2ludGVudGlvbnMvaW50ZW50aW9ucy5lcnJvci5kYXJrXCIsXG4gICAgc3R5bGVLZXk6IFwiMTI3NzY0NTZlNjhhZGY0YWI1ZTM5MTc5N2MzYzg0ZTkyYjBmODZjMlwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJsaWdodCB0aGVtZS9pbnRlbnRpb25zL2ludGVudGlvbnMuZXJyb3IuY29udHJhc3RUZXh0XCIsXG4gICAgc3R5bGVLZXk6IFwiYzQyYzVmMTk5MDM5MGM0MTNhZTYyOTI1ZTlhZjBkNTFiZjMyYzk0NVwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJsaWdodCB0aGVtZS9pbnRlbnRpb25zL2ludGVudGlvbnMud2FybmluZy5saWdodFwiLFxuICAgIHN0eWxlS2V5OiBcImQ0YzMwMTM1ZjRjMTJjN2RmNDQ0MjIyMjExNmE5ZWI3Y2ViZjY1YmVcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwibGlnaHQgdGhlbWUvaW50ZW50aW9ucy9pbnRlbnRpb25zLndhcm5pbmcubWFpblwiLFxuICAgIHN0eWxlS2V5OiBcImYyN2E2MGRmOGMxNjIxODVlYTI0NzJhODAxYjI3MWVmNjYyYzA0MjlcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwibGlnaHQgdGhlbWUvaW50ZW50aW9ucy9pbnRlbnRpb25zLndhcm5pbmcuaG92ZXJcIixcbiAgICBzdHlsZUtleTogXCJkNjU2ZGQ1NThiYWU5YzczZGEzMzZiNmZiNzdlMmE2N2E4NWQ2NWVlXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImxpZ2h0IHRoZW1lL2ludGVudGlvbnMvaW50ZW50aW9ucy53YXJuaW5nLnByZXNzZWRcIixcbiAgICBzdHlsZUtleTogXCI1NjQ0ZDMxMmFmNTI4OTU5NWM5ZmQwOGI1ZTUyNDY3MTY1ZTc1ZjEyXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImxpZ2h0IHRoZW1lL2ludGVudGlvbnMvaW50ZW50aW9ucy53YXJuaW5nLmRhcmtcIixcbiAgICBzdHlsZUtleTogXCI2MTVkNmQ1Y2FjNDg1NWU5ODFjOGI5NDJiOTg2ZWU3MDViNTY4YjI4XCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImxpZ2h0IHRoZW1lL2ludGVudGlvbnMvaW50ZW50aW9ucy53YXJuaW5nLmNvbnRyYXN0VGV4dFwiLFxuICAgIHN0eWxlS2V5OiBcImVlY2Q4MmNjYWFlOTg4NjI0YzQ1ZjI4Mjk2NTY0MDM3ZGE4NWNjMWFcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwibGlnaHQgdGhlbWUvaW50ZW50aW9ucy9pbnRlbnRpb25zLnN1Y2Nlc3MubGlnaHRcIixcbiAgICBzdHlsZUtleTogXCI1MjdmNjhjZTdjY2JhZDgxNDU2NGY0N2Y4OGJkZWFkYTgwNzc1Mzc3XCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImxpZ2h0IHRoZW1lL2ludGVudGlvbnMvaW50ZW50aW9ucy5zdWNjZXNzLm1haW5cIixcbiAgICBzdHlsZUtleTogXCJlNGFhNDFlOGJmNTJmOTRlZjVmY2UzNjY5ZjUxMGFmM2NiNzljNWE3XCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImxpZ2h0IHRoZW1lL2ludGVudGlvbnMvaW50ZW50aW9ucy5zdWNjZXNzLmhvdmVyXCIsXG4gICAgc3R5bGVLZXk6IFwiM2JhYWNjNWNkNzc0NDgwNWRmMjQzY2IxZmYzZjQzMWM2ODExZjRjOFwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJsaWdodCB0aGVtZS9pbnRlbnRpb25zL2ludGVudGlvbnMuc3VjY2Vzcy5wcmVzc2VkXCIsXG4gICAgc3R5bGVLZXk6IFwiNDYyZGQ1NTUyOWZiM2M1Y2M2MzQzM2JlMTkyYzRjYjZjZTA5MDE4Y1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJsaWdodCB0aGVtZS9pbnRlbnRpb25zL2ludGVudGlvbnMuc3VjY2Vzcy5kYXJrXCIsXG4gICAgc3R5bGVLZXk6IFwiZDk4ODNiNTNjMjUzOWJmMWUxMDY4MjA1ZmUxZDA1OWQ1ODMxNWU0ZlwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJsaWdodCB0aGVtZS9pbnRlbnRpb25zL2ludGVudGlvbnMuc3VjY2Vzcy5jb250cmFzdFRleHRcIixcbiAgICBzdHlsZUtleTogXCJkN2RiYWVmNjZhOTMyZmYyNzZmNmY0YWE1MTk4NWEwNTlkZWRmYmY4XCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImxpZ2h0IHRoZW1lL3RleHQvdGV4dC5wcmltYXJ5XCIsXG4gICAgc3R5bGVLZXk6IFwiOGYwNWM2M2RlN2YxMDBiMmJkOGZhZDdiOGJkNzE0ODliNjM3YzA2N1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJsaWdodCB0aGVtZS90ZXh0L3RleHQuc2Vjb25kYXJ5XCIsXG4gICAgc3R5bGVLZXk6IFwiOTcwNjNhNWY2MmMzNTRlNmFlMDkxOWQ1MGI2OGQwYmFkYjRhMTIyZVwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJsaWdodCB0aGVtZS90ZXh0L3RleHQuZGlzYWJsZWRcIixcbiAgICBzdHlsZUtleTogXCJhODA5Zjc1ZTE0ZmJlNjI5NjI3MmU4NTMxMTA2ZjZjYzRjNjkyNTUzXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImxpZ2h0IHRoZW1lL2JhY2tncm91bmQvYmFja2dyb3VuZC5kZWZhdWx0XCIsXG4gICAgc3R5bGVLZXk6IFwiOTAzZTViZjI3NDEzOWVlYjlmNDk2OGE5ZWYwOGVjMDVlYWYwYjI3NFwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJsaWdodCB0aGVtZS9iYWNrZ3JvdW5kL2JhY2tncm91bmQuZGVmYXVsdC5ob3ZlclwiLFxuICAgIHN0eWxlS2V5OiBcIjU2ZGI0MTdiM2E0ZTY2MzgxZTZhMDQ5ODAyZTBiM2EwMWU5M2U1NmRcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwibGlnaHQgdGhlbWUvYmFja2dyb3VuZC9iYWNrZ3JvdW5kLmRlZmF1bHQucHJlc3NlZFwiLFxuICAgIHN0eWxlS2V5OiBcImRlYjRmZWIwYWFkMzFiNzU2ODhhODVlYTk4MmVjYTI3NmFiNWNkMmRcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwibGlnaHQgdGhlbWUvYmFja2dyb3VuZC9iYWNrZ3JvdW5kLnBhcGVyXCIsXG4gICAgc3R5bGVLZXk6IFwiMjNlOTRmY2VlZDlhY2NiZGE0ZGI5YzY3MmM0M2QyMWI0ZDI4NmU0Y1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJsaWdodCB0aGVtZS9iYWNrZ3JvdW5kL2JhY2tncm91bmQucGFwZXIuaG92ZXJcIixcbiAgICBzdHlsZUtleTogXCJiOGE0ZWRlMzk0MjdmYTQ2NjZhNDgxMjIxNmU4MTliYWYwMTNmOTQyXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImxpZ2h0IHRoZW1lL2JhY2tncm91bmQvYmFja2dyb3VuZC5wYXBlci5wcmVzc2VkXCIsXG4gICAgc3R5bGVLZXk6IFwiNDE2OTFkNmRhNzdhNjc4Yzg1M2RhMTJjYzFmZjI3YmY1NjMyY2NiZFwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJsaWdodCB0aGVtZS9uYXZpZ2F0aW9uL25hdmlnYXRpb24uYmFja2dyb3VuZFwiLFxuICAgIHN0eWxlS2V5OiBcIjQ5Y2Y3N2YwM2U5MGI0MDZhOTUzYTZiNDI5ZGJiYmJiMGU3MmQ3NzhcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwibGlnaHQgdGhlbWUvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmhvdmVyXCIsXG4gICAgc3R5bGVLZXk6IFwiYjc4ODZjZjdhZjJlMzc4Y2YzYWQzMTQwY2Y5NTg0YzhmMDc3YmI0NlwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJsaWdodCB0aGVtZS9uYXZpZ2F0aW9uL25hdmlnYXRpb24ucHJlc3NlZFwiLFxuICAgIHN0eWxlS2V5OiBcIjU5MjQxZDM5M2RhNmQ5OTdjMzI4YzMzNDA3MWY0ZGJkYjZjMzQ4OGRcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwibGlnaHQgdGhlbWUvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbnRyYXN0VGV4dFwiLFxuICAgIHN0eWxlS2V5OiBcImE2ZjA3OGI3ODkwNDFhMjZlMGYwOThjYWUwZDY0MDk1N2YxNTU1ZWVcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwibGlnaHQgdGhlbWUvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmRpdmlkZXJcIixcbiAgICBzdHlsZUtleTogXCJjZmRmNjhlMTQwZDMyNjMwNmUxODJkN2NmZDRjMWJjODljZDdiMTMzXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImxpZ2h0IHRoZW1lL21lc3NhZ2UvbWVzc2FnZS5iYWNrZ3JvdW5kXCIsXG4gICAgc3R5bGVLZXk6IFwiYzg1YTliODQ2MzQ5YTNhN2QzZWVkMzU4YWNiYzMyYzI3MTVjOTgyZFwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJsaWdodCB0aGVtZS9tZXNzYWdlL21lc3NhZ2UuY29udHJhc3RUZXh0XCIsXG4gICAgc3R5bGVLZXk6IFwiODNiZTJkMWQ2ZjUwYjM5NjI2NDcxMGUwN2JlMTAwMTg2N2U0OTgyNVwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJsaWdodCB0aGVtZS91dGlsaXR5L3V0aWxpdHkuZGl2aWRlclwiLFxuICAgIHN0eWxlS2V5OiBcImVlNGRkY2UyZTU2YWQ0N2M0MjE2ZDU4MjdhMjgzYjk0M2E3OTRjNzhcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwibGlnaHQgdGhlbWUvdXRpbGl0eS91dGlsaXR5LmRpdmlkZXIuc3Ryb25nXCIsXG4gICAgc3R5bGVLZXk6IFwiMTdhZGJlNGUyN2JhOWIwODdmNjFhZjE0MmRlZWIwN2ZjMGMwMTU0MFwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJsaWdodCB0aGVtZS91dGlsaXR5L3V0aWxpdHkucGxhY2Vob2xkZXJcIixcbiAgICBzdHlsZUtleTogXCI0YzMwOWMyNWY5ODg4NjA2MmM1MjhiMWRmNzNjNWJjOWUyYzZmZTMyXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImxpZ2h0IHRoZW1lL3V0aWxpdHkvdXRpbGl0eS5vdmVybGF5XCIsXG4gICAgc3R5bGVLZXk6IFwiMTFhNDc3ODAxOGM4YmIyMzZhYmUwZDg0N2M3MzFhMjE3ZTJkNmQ0OFwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJsaWdodCB0aGVtZS80RFAvNGRwLm5tXCIsXG4gICAgc3R5bGVLZXk6IFwiZGRjYmY2OGZhNWMxZWFhNzIwNzcxNjQyNzJiN2FlNWI5ZTVlNGVkN1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJsaWdodCB0aGVtZS80RFAvNGRwLmFjXCIsXG4gICAgc3R5bGVLZXk6IFwiMjIwZDM0OTM3NDdjZDhkOGJkYzVkNGEwZTc5NjVjMzZhM2M1MjM0OVwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJsaWdodCB0aGVtZS80RFAvNGRwLm1hcFwiLFxuICAgIHN0eWxlS2V5OiBcImFhYTNhNTMxYTEyNGZhODU0ZTA5ZDM5OGY5OGZiNDdiOTg5YThhNzJcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwibGlnaHQgdGhlbWUvNERQLzRkcC5mdHBcIixcbiAgICBzdHlsZUtleTogXCIyMjRlNDkxMjAyN2JlOWY3NTY4NWZkNDBiMjUyOGJhOWYzNGZlOTU4XCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImxpZ2h0IHRoZW1lL2RhdGEvZGF0YS5wb3dlclwiLFxuICAgIHN0eWxlS2V5OiBcIjA3ODM0ZTAxNDVlMWMwMTU0NjU5MzQ2MjAwNjEyOGZhNmE1MWQ2YWNcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwibGlnaHQgdGhlbWUvZGF0YS9kYXRhLmhlYXJ0UmF0ZVwiLFxuICAgIHN0eWxlS2V5OiBcIjVhMzNiOGI0YTA1ZjE4OTk2MDM1NDI1ZTJiYTZhZjgxNzkxMjExY2RcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwibGlnaHQgdGhlbWUvZGF0YS9kYXRhLmNhZGVuY2VcIixcbiAgICBzdHlsZUtleTogXCI3ZDI4YmU2Mzg3MDk2MjZiNTlmMjgwMjA4Njk2ZmI4MTMwNjI0YzBhXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImxpZ2h0IHRoZW1lL2RhdGEvZGF0YS5zcGVlZFwiLFxuICAgIHN0eWxlS2V5OiBcImU5ZWFmNmI4NDRmZDFmNmYxN2Q2Y2IzZThlODRiMTllYzUwOTdhZGNcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwibGlnaHQgdGhlbWUvZGF0YS9kYXRhLnBhY2VcIixcbiAgICBzdHlsZUtleTogXCI5YzBlZjZjNzU3OTY1M2NmMzYzMjgzNmIyMjI3YmI3MmJiNzhlNjdlXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImxpZ2h0IHRoZW1lL2NvbXBsaWFuY2UvY29tcGxpYW5jZS5zY2hlZHVsZWRcIixcbiAgICBzdHlsZUtleTogXCI2ZGE4OGM1MGJkYjJjNGE2Y2RlOGFjZGNlYjRkOTRmN2U5MzVkY2QwXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImxpZ2h0IHRoZW1lL2NvbXBsaWFuY2UvY29tcGxpYW5jZS5jb21wbGlhbnRcIixcbiAgICBzdHlsZUtleTogXCJiNTgwN2I3MmFjNGM3Njg1MjE0MGE5Y2E2OGI0Njk4NTY3MDUzZjExXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImxpZ2h0IHRoZW1lL2NvbXBsaWFuY2UvY29tcGxpYW5jZS5jb21wbGlhbnQuY29udHJhc3RUZXh0XCIsXG4gICAgc3R5bGVLZXk6IFwiY2E4ZTg2OTU5MmJkMGMzYjk2ODA2YmMxMjQwYzVmNGJkZmYzOGIxZFwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJsaWdodCB0aGVtZS9jb21wbGlhbmNlL2NvbXBsaWFuY2Uubm9uQ29tcGxpYW50XCIsXG4gICAgc3R5bGVLZXk6IFwiOGY5ZDFiZjViMGQxY2UzNzUzYjEwZThjZGU2MjBhZWI2Y2NhZmYxMVwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJsaWdodCB0aGVtZS9jb21wbGlhbmNlL2NvbXBsaWFuY2Uubm9uQ29tcGxpYW50LmNvbnRyYXN0VGV4dFwiLFxuICAgIHN0eWxlS2V5OiBcIjZjZDYyODg5YzZiZWE2N2ZhNmUyZjg0ZmE1ODE0ZjFmMjE3ZGUzYjhcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwibGlnaHQgdGhlbWUvY29tcGxpYW5jZS9jb21wbGlhbmNlLm1pc3NlZFwiLFxuICAgIHN0eWxlS2V5OiBcImQ0NDQ2NWZmNjhiNWZlZDE5NmQyMTcwNTcwZDcyODVmNTIwMTViMjZcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwibGlnaHQgdGhlbWUvY29tcGxpYW5jZS9jb21wbGlhbmNlLm1pc3NlZC5jb250cmFzdFRleHRcIixcbiAgICBzdHlsZUtleTogXCI3MmQ1OWM4OTkxODJiNDY0NzEzMDc4YWU4Y2JjYTZjN2M0NTkxN2M3XCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImxpZ2h0IHRoZW1lL3NwZWNpYWwgdXNlL3NwZWNpYWxVc2UudGl0bGVCYXJcIixcbiAgICBzdHlsZUtleTogXCI4NzYzNDM3MTRkMTQ3ZDIzZDQxYTE4Y2ViYTdlZmQxNGI5NzUzZTE3XCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImxpZ2h0IHRoZW1lL3NwZWNpYWwgdXNlL3NwZWNpYWxVc2UucHJlbWl1bVwiLFxuICAgIHN0eWxlS2V5OiBcIjc4Y2Y0MDE4ZTViYzlmYWQ2NzY5OGM5YTlhM2M2NWZkZThmMTI3ZjZcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwibGlnaHQgdGhlbWUvc3BlY2lhbCB1c2Uvc3BlY2lhbFVzZS5wcmVtaXVtLmhvdmVyXCIsXG4gICAgc3R5bGVLZXk6IFwiZDllYWI1OTU2M2U1MjRiMzQxMDcxN2ZkM2QzM2I4M2YzNTI4MWM2OFwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJsaWdodCB0aGVtZS9zcGVjaWFsIHVzZS9zcGVjaWFsVXNlLnByZW1pdW0ucHJlc3NlZFwiLFxuICAgIHN0eWxlS2V5OiBcImEyN2VjMzA3NDZjZmQ2ZWQ0NDRhNzM1NjEzOTc4MDYwODVkZTdjMzVcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwibGlnaHQgdGhlbWUvc3BlY2lhbCB1c2Uvc3BlY2lhbFVzZS5wcmVtaXVtLmNvbnRyYXN0VGV4dFwiLFxuICAgIHN0eWxlS2V5OiBcIjFmMDYzOGFkNjc3MmE1YjUwNTViMjI1ODJjYTRlN2NmY2Y0MDA4NjlcIixcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBEYXJrVWlDb2xvcnMgPSBbXG4gIHtcbiAgICBuYW1lOiBcImRhcmsgdGhlbWUvaW50ZW50aW9ucy9pbnRlbnRpb25zLnByaW1hcnkubGlnaHRcIixcbiAgICBzdHlsZUtleTogXCJmMzc3ZTc3NWM4NGYyNzgyNWY4YWM4MDFlNzhkODcwOGMwNWY4ZGYxXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImRhcmsgdGhlbWUvaW50ZW50aW9ucy9pbnRlbnRpb25zLnByaW1hcnkubWFpblwiLFxuICAgIHN0eWxlS2V5OiBcIjJiNzkyZDg0YzlkZGI1YmI1NGI0ZTdjZTAwMGM1OTVjNzlkNzQ4Y2FcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiZGFyayB0aGVtZS9pbnRlbnRpb25zL2ludGVudGlvbnMucHJpbWFyeS5ob3ZlclwiLFxuICAgIHN0eWxlS2V5OiBcIjk5Njg3ZDEzNjVkZWY3MmU3MGQ0MWIwM2U1MzZmNzBjMWQzM2Q5NTZcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiZGFyayB0aGVtZS9pbnRlbnRpb25zL2ludGVudGlvbnMucHJpbWFyeS5wcmVzc2VkXCIsXG4gICAgc3R5bGVLZXk6IFwiZGFiOTkyOGRhNGIxYTk4YjVlNDM1NjExZjAxYjM0YmM1MWZlYzE4YVwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJkYXJrIHRoZW1lL2ludGVudGlvbnMvaW50ZW50aW9ucy5wcmltYXJ5LmRhcmtcIixcbiAgICBzdHlsZUtleTogXCJiNDNiZDExMTI1MGNlNzRkNDhjZmQ3MWFjMDBjMWMxYjU1OGIwMmYwXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImRhcmsgdGhlbWUvaW50ZW50aW9ucy9pbnRlbnRpb25zLnByaW1hcnkuY29udHJhc3RUZXh0XCIsXG4gICAgc3R5bGVLZXk6IFwiNWI2MjJkOWI1ZjE2ZmY0NzFiNjY2ZWU4ZDk1YTM1ZWI1ZTdlNDY0YlwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJkYXJrIHRoZW1lL2ludGVudGlvbnMvaW50ZW50aW9ucy5lcnJvci5saWdodFwiLFxuICAgIHN0eWxlS2V5OiBcIjk1NzYyMGU1NGQxNWFmY2U1NTMxNGNhNTg5YzdhMWU5MzQzNWEyMDFcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiZGFyayB0aGVtZS9pbnRlbnRpb25zL2ludGVudGlvbnMuZXJyb3IubWFpblwiLFxuICAgIHN0eWxlS2V5OiBcIjc2N2MyYTk4OTcwNjJkZWUwZDBmNjMwMDQwNmY2ZTU1ODVmNjg0YzdcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiZGFyayB0aGVtZS9pbnRlbnRpb25zL2ludGVudGlvbnMuZXJyb3IuaG92ZXJcIixcbiAgICBzdHlsZUtleTogXCI0YmY2Nzc3NGU2MDBmMTJhMDlhODEwZGQzZGQ0MTMzNjM0ZDFhZjkyXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImRhcmsgdGhlbWUvaW50ZW50aW9ucy9pbnRlbnRpb25zLmVycm9yLnByZXNzZWRcIixcbiAgICBzdHlsZUtleTogXCIxMTJkZGE5MmNkNTE1YzMyMGVkOTJjZjIzYzViZGE1ODJlM2IxOWMxXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImRhcmsgdGhlbWUvaW50ZW50aW9ucy9pbnRlbnRpb25zLmVycm9yLmRhcmtcIixcbiAgICBzdHlsZUtleTogXCIzNGE5YTM0NGMyNTQxNmQxYTdlYTZkNjczMmRiMTNlN2JjNmNjMzk3XCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImRhcmsgdGhlbWUvaW50ZW50aW9ucy9pbnRlbnRpb25zLmVycm9yLmNvbnRyYXN0VGV4dFwiLFxuICAgIHN0eWxlS2V5OiBcImFjMzZiNjBhNjdmMzZlZDgwNzBjYWFlZGQwNDU2MDEyYTEwYzIyZDZcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiZGFyayB0aGVtZS9pbnRlbnRpb25zL2ludGVudGlvbnMud2FybmluZy5saWdodFwiLFxuICAgIHN0eWxlS2V5OiBcImFjYzg4Yjc5MTk3OTJhMjEzMmMzNWRlZDYwMDRkMWRmMDNlYTdiYmJcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiZGFyayB0aGVtZS9pbnRlbnRpb25zL2ludGVudGlvbnMud2FybmluZy5tYWluXCIsXG4gICAgc3R5bGVLZXk6IFwiODk0ZmJkMzM1ZDhiMGY2YjFjZWU0ZWM1YWM3YTA0NzkzOTdhNmI0Y1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJkYXJrIHRoZW1lL2ludGVudGlvbnMvaW50ZW50aW9ucy53YXJuaW5nLmhvdmVyXCIsXG4gICAgc3R5bGVLZXk6IFwiZDMzNDA3ZDY4MDVmM2RiYWJmMzRiOTc4NzhlOTQyZTEwNTgyZmNlYVwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJkYXJrIHRoZW1lL2ludGVudGlvbnMvaW50ZW50aW9ucy53YXJuaW5nLnByZXNzZWRcIixcbiAgICBzdHlsZUtleTogXCI4YTY2NmVjZWYwMTIxZDU0NzllOGNmMTA3ZTY5N2QzZTc2ZDNmZTZkXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImRhcmsgdGhlbWUvaW50ZW50aW9ucy9pbnRlbnRpb25zLndhcm5pbmcuZGFya1wiLFxuICAgIHN0eWxlS2V5OiBcIjQ0YjQyYTg1MDUyODQxMzg3YmM2NzdjNTcxOTg3NGNmMDIwN2NhYjVcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiZGFyayB0aGVtZS9pbnRlbnRpb25zL2ludGVudGlvbnMud2FybmluZy5jb250cmFzdFRleHRcIixcbiAgICBzdHlsZUtleTogXCI1OWM5YmYyYTRkNmMwNGZkOTNjMWI5YWJjYzRjZjUwMWZjYWRiYjIyXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImRhcmsgdGhlbWUvaW50ZW50aW9ucy9pbnRlbnRpb25zLnN1Y2Nlc3MubGlnaHRcIixcbiAgICBzdHlsZUtleTogXCI1MzYzYzE3MDkyM2FkZmUwOTMzMmMyYWI5NWY0Njg1NmZkNTZiNzJlXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImRhcmsgdGhlbWUvaW50ZW50aW9ucy9pbnRlbnRpb25zLnN1Y2Nlc3MubWFpblwiLFxuICAgIHN0eWxlS2V5OiBcIjJkNDRmM2EwYzYwODc4Y2VmNWRiZDEwYzU5YTQxN2FhOTBjMGMxYmZcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiZGFyayB0aGVtZS9pbnRlbnRpb25zL2ludGVudGlvbnMuc3VjY2Vzcy5ob3ZlclwiLFxuICAgIHN0eWxlS2V5OiBcImE0ZjFiYTY2ZjEyYTY5OWY0YzY4YWNkYmVhN2ZkMGE5NjEzYTQ1ZGVcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiZGFyayB0aGVtZS9pbnRlbnRpb25zL2ludGVudGlvbnMuc3VjY2Vzcy5wcmVzc2VkXCIsXG4gICAgc3R5bGVLZXk6IFwiMDA2MmQ1MzM0MTc3MzIyMmZmZDYxNGVhYjE0OGU1MjkyMTk1NzlmMlwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJkYXJrIHRoZW1lL2ludGVudGlvbnMvaW50ZW50aW9ucy5zdWNjZXNzLmRhcmtcIixcbiAgICBzdHlsZUtleTogXCI0MzIyMjc5MWY3ZDVhZmRlOGI4NGJkYjdhN2M3NWE2YThjYzlkMzM0XCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImRhcmsgdGhlbWUvaW50ZW50aW9ucy9pbnRlbnRpb25zLnN1Y2Nlc3MuY29udHJhc3RUZXh0XCIsXG4gICAgc3R5bGVLZXk6IFwiMTk3MmRjMDAxZDMxZGVjMzI2YzhlOTM3ZjgzMDJlZTM1ZmJiODUzZlwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJkYXJrIHRoZW1lL3RleHQvdGV4dC5wcmltYXJ5XCIsXG4gICAgc3R5bGVLZXk6IFwiM2ZkYmQ0M2RkMjQ2M2M2NGI5NGUwYjgxYTkxNmE2MDZjMDhiMGYxY1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJkYXJrIHRoZW1lL3RleHQvdGV4dC5zZWNvbmRhcnlcIixcbiAgICBzdHlsZUtleTogXCI5ZDJlNTExZDlhMzFlYmQ3NmUzMDJhYjI1ZDFlOTk1ZTZhODNhYzFjXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImRhcmsgdGhlbWUvdGV4dC90ZXh0LmRpc2FibGVkXCIsXG4gICAgc3R5bGVLZXk6IFwiYzk4ODgzZTA3YmU4MGJlNmJjZDE4ODE0ZWIyOWE4Nzc5N2E5OWM2YVwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJkYXJrIHRoZW1lL2JhY2tncm91bmQvYmFja2dyb3VuZC5kZWZhdWx0XCIsXG4gICAgc3R5bGVLZXk6IFwiMTVmNWZmYWMzZWM5MWIyNDA4OTgxMzQzOWZmYWRkMWY5OTk0YjI5Y1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJkYXJrIHRoZW1lL2JhY2tncm91bmQvYmFja2dyb3VuZC5kZWZhdWx0LmhvdmVyXCIsXG4gICAgc3R5bGVLZXk6IFwiZDc1MTAwOWY2OGFmZmFiOGUxNzBhN2Q0MDAxMzU2YjE3NzJmMGU1MFwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJkYXJrIHRoZW1lL2JhY2tncm91bmQvYmFja2dyb3VuZC5kZWZhdWx0LnByZXNzZWRcIixcbiAgICBzdHlsZUtleTogXCJjZDA0Nzc5NmU5NTI4NzNkOGZjODk5ODU4NmMxMzBlNDE2ZDMwNjMxXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImRhcmsgdGhlbWUvYmFja2dyb3VuZC9iYWNrZ3JvdW5kLnBhcGVyXCIsXG4gICAgc3R5bGVLZXk6IFwiMmYwNjBlNzQyMmE4YWQxN2EwMzdhMjUwZDM2OGNmNjcxYWRjMDQ2OFwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJkYXJrIHRoZW1lL2JhY2tncm91bmQvYmFja2dyb3VuZC5wYXBlci5ob3ZlclwiLFxuICAgIHN0eWxlS2V5OiBcImIzMzBiYWRjNmNlYTAyYjkwMTJhM2Y1ODFkZjZmMDBmMWZmNDg3NzdcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiZGFyayB0aGVtZS9iYWNrZ3JvdW5kL2JhY2tncm91bmQucGFwZXIucHJlc3NlZFwiLFxuICAgIHN0eWxlS2V5OiBcIjY1YzU4YzdiMDNhODM4MWExMjk4M2JjZDBhZGVhMWVlMTg0NjEzYTBcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiZGFyayB0aGVtZS9uYXZpZ2F0aW9uL25hdmlnYXRpb24uYmFja2dyb3VuZFwiLFxuICAgIHN0eWxlS2V5OiBcIjgzNWQwYjkyMGI1OTk3YzBiOTdmNzM5MGEwNDNlOTRiNjUzNGE1MDZcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiZGFyayB0aGVtZS9uYXZpZ2F0aW9uL25hdmlnYXRpb24uaG92ZXJcIixcbiAgICBzdHlsZUtleTogXCI4NTJkNGYzZmQxYzFmOTVhZjFmMjE4YTc4ZTlhYTNlOGE4NmM2MmYyXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImRhcmsgdGhlbWUvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLnByZXNzZWRcIixcbiAgICBzdHlsZUtleTogXCIyMDE4MzA4MTUzOGZlZmQ3MDI5MDA4MDA1ZTQ1Zjc1MDU5MjM1ZmEyXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImRhcmsgdGhlbWUvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbnRyYXN0VGV4dFwiLFxuICAgIHN0eWxlS2V5OiBcImViOTNjOTA5ZWNiZmZmMjIwZWU1OTNkOGZiNmVhY2I2YTFkODE3Y2JcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiZGFyayB0aGVtZS9uYXZpZ2F0aW9uL25hdmlnYXRpb24uZGl2aWRlclwiLFxuICAgIHN0eWxlS2V5OiBcImNiODYwMDFhZTdhOWZmMTc4MWY5NmVlMzRlM2JmZDAwMDlkOTJmZWRcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiZGFyayB0aGVtZS9tZXNzYWdlL21lc3NhZ2UuYmFja2dyb3VuZFwiLFxuICAgIHN0eWxlS2V5OiBcIjliNjI2MTA5NzY4NDZjYjM5MzNkMjBkZDUyZmY2Njg0NTQ2NzhhZjdcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiZGFyayB0aGVtZS9tZXNzYWdlL21lc3NhZ2UuY29udHJhc3RUZXh0XCIsXG4gICAgc3R5bGVLZXk6IFwiOGE2ZTk0N2MyMGUwMzgxZTA2ZTI4YjFhZjhmNDg3Yjc3MGZjMDNjMVwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJkYXJrIHRoZW1lL3V0aWxpdHkvdXRpbGl0eS5kaXZpZGVyXCIsXG4gICAgc3R5bGVLZXk6IFwiODRhYjBmMjk4ZWE4ZmNkMGI4MmFjODkyOThhZDUxMTQwY2E3Yjc1YVwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJkYXJrIHRoZW1lL3V0aWxpdHkvdXRpbGl0eS5kaXZpZGVyLnN0cm9uZ1wiLFxuICAgIHN0eWxlS2V5OiBcImU5MzYwYTEzZjg0NTE0ZWU0YjM5NzdkNGI2OTQ5ZjliYWI2M2NiNGZcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiZGFyayB0aGVtZS91dGlsaXR5L3V0aWxpdHkucGxhY2Vob2xkZXJcIixcbiAgICBzdHlsZUtleTogXCI2MWEzZDVlYTE0NjZjYTU4YTcwYjk5NTBmOWYyYjQxYmNiODk2Y2U3XCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImRhcmsgdGhlbWUvdXRpbGl0eS91dGlsaXR5Lm92ZXJsYXlcIixcbiAgICBzdHlsZUtleTogXCIyYjM4MzZkZWQzODJlMzNhOTcwNGVmMGYyZjZiMTZmYmZiYTJkM2NlXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImRhcmsgdGhlbWUvNERQLzRkcC5ubVwiLFxuICAgIHN0eWxlS2V5OiBcIjgyZDUwZjMwMTFkODE1OTAyZWQ0MzBkZjZkNzM0NWVjZGY5NDc2MWJcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiZGFyayB0aGVtZS80RFAvNGRwLmFjXCIsXG4gICAgc3R5bGVLZXk6IFwiZTgxOTNhYmZkMmY3MTVlNDhiOWNjN2NlNGJjNmI5NWM4OTdhYTA0ZFwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJkYXJrIHRoZW1lLzREUC80ZHAubWFwXCIsXG4gICAgc3R5bGVLZXk6IFwiZGY1N2ZlYmM4ZWY3N2RkMmMzNWJlMmQxYjk0MGFmYjgzMzE2NjhiNFwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJkYXJrIHRoZW1lLzREUC80ZHAuZnRwXCIsXG4gICAgc3R5bGVLZXk6IFwiN2JiMDI4ZmY3ZDg3MzQ4NjY3OGI3YzY3NjRmYzUwZjM5ZTU3MWViNlwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJkYXJrIHRoZW1lL2RhdGEvZGF0YS5wb3dlclwiLFxuICAgIHN0eWxlS2V5OiBcIjczZDIyOGI0NjU3ODhjOGVmMmQxNmI5OTkxNTEyY2I3MmMwMTQwNDNcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiZGFyayB0aGVtZS9kYXRhL2RhdGEuaGVhcnRSYXRlXCIsXG4gICAgc3R5bGVLZXk6IFwiYzNmM2QwOTE3MzQwZDljYjEyZGIzNDQ4YzI2N2FjNTVkYTYzZDcxNVwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJkYXJrIHRoZW1lL2RhdGEvZGF0YS5jYWRlbmNlXCIsXG4gICAgc3R5bGVLZXk6IFwiMmZhOTE1YjI5NDVlOGE3NmE3MTQzODY4MTEzN2QyOGM2MWZlNDIxNFwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJkYXJrIHRoZW1lL2RhdGEvZGF0YS5zcGVlZFwiLFxuICAgIHN0eWxlS2V5OiBcImI5NzlmY2IxMDRjMjk2Zjc4ZjQwYjYzYTllNzRiZTE3ZTJiYmJhNTNcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiZGFyayB0aGVtZS9kYXRhL2RhdGEucGFjZVwiLFxuICAgIHN0eWxlS2V5OiBcIjY5OThhY2EyZDVhZDMxOTk5ZTViY2JkZWJiN2UzOTZlOGE4NGNhN2RcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiZGFyayB0aGVtZS9jb21wbGlhbmNlL2NvbXBsaWFuY2Uuc2NoZWR1bGVkXCIsXG4gICAgc3R5bGVLZXk6IFwiYmNjMzI2OWViYjMxN2ViZDQ1ZDQ5NGRmZGNlODljYjkyY2M4Y2FmNFwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJkYXJrIHRoZW1lL2NvbXBsaWFuY2UvY29tcGxpYW5jZS5jb21wbGlhbnRcIixcbiAgICBzdHlsZUtleTogXCI4MDkxZTdlYzEwNzA1Njc4NDY0NDYyOGRiMTczNmJjZmFjNjJmZWQxXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImRhcmsgdGhlbWUvY29tcGxpYW5jZS9jb21wbGlhbmNlLmNvbXBsaWFudC5jb250cmFzdFRleHRcIixcbiAgICBzdHlsZUtleTogXCJiZmIxY2E2OGFlMGE3M2EwNTQzOTBiNmFmMGE1NmM5MTI3MWI4ODUyXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImRhcmsgdGhlbWUvY29tcGxpYW5jZS9jb21wbGlhbmNlLm5vbkNvbXBsaWFudFwiLFxuICAgIHN0eWxlS2V5OiBcIjE0ZWM0YmRiNGM0YjY5OGNmYjdjNTQ4ZjczODJiNzQ4ZTI1MDIwZDJcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiZGFyayB0aGVtZS9jb21wbGlhbmNlL2NvbXBsaWFuY2Uubm9uQ29tcGxpYW50LmNvbnRyYXN0VGV4dFwiLFxuICAgIHN0eWxlS2V5OiBcImMyY2QyMWY1NWUyMzJlNzI2NTVhMjdkY2Y1ZGUwNmQwZGE0NGJmNGVcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiZGFyayB0aGVtZS9jb21wbGlhbmNlL2NvbXBsaWFuY2UubWlzc2VkXCIsXG4gICAgc3R5bGVLZXk6IFwiNjU3OTVhYWVhZGFjZTI3OGM1Zjg2MDBjMzAzMjJiOTI3MTM2YzAyM1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJkYXJrIHRoZW1lL2NvbXBsaWFuY2UvY29tcGxpYW5jZS5taXNzZWQuY29udHJhc3RUZXh0XCIsXG4gICAgc3R5bGVLZXk6IFwiN2I1ZjhkMzE5NzE1MTA0YmIzZDRhMTA3Nzg4ZWM1YmZhNmVhMzFkNFwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJkYXJrIHRoZW1lL3NwZWNpYWwgdXNlL3NwZWNpYWxVc2UudGl0bGVCYXJcIixcbiAgICBzdHlsZUtleTogXCI2Mjk5M2YyOTRlMzVmNjdiY2Y1NGI1MTdkNTEzMzMwNTYyNGQ4YjliXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImRhcmsgdGhlbWUvc3BlY2lhbCB1c2Uvc3BlY2lhbFVzZS5wcmVtaXVtXCIsXG4gICAgc3R5bGVLZXk6IFwiM2Y4ZDJkODFhMGFiYjViYzBiOGE0ZDUyMTJmNDhjMTEzYTk4ZjEwZVwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJkYXJrIHRoZW1lL3NwZWNpYWwgdXNlL3NwZWNpYWxVc2UucHJlbWl1bS5ob3ZlclwiLFxuICAgIHN0eWxlS2V5OiBcIjQ4YzhiYzMxNGRmMjIzZTFhOGRlNGUxMGQwMDk5Y2Q5NzEwOTNkMWFcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiZGFyayB0aGVtZS9zcGVjaWFsIHVzZS9zcGVjaWFsVXNlLnByZW1pdW0ucHJlc3NlZFwiLFxuICAgIHN0eWxlS2V5OiBcIjVkZWY0NmU5ZTQ0M2FhOWFkZGE0MjViZTE0Y2E0YWFhYjFmY2QxMDlcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiZGFyayB0aGVtZS9zcGVjaWFsIHVzZS9zcGVjaWFsVXNlLnByZW1pdW0uY29udHJhc3RUZXh0XCIsXG4gICAgc3R5bGVLZXk6IFwiOTkxMTA4OTYyMGJhZDJhYzdmN2Q5NWU5NTZkOTllNDkzNmJiY2FmOFwiLFxuICB9LFxuXTtcbiIsImV4cG9ydCBjb25zdCBMaWdodFVpRWZmZWN0cyA9IFtcbiAge1xuICAgIG5hbWU6IFwibGlnaHQgdWkvc2hhZG93L2VsZXZhdGlvbiA0XCIsXG4gICAgc3R5bGVLZXk6IFwiNjkyMDJmYThjYzRmNmNjMDUxNWNjMDhmZGNjOTg4NDU5YWYyODczMVwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJsaWdodCB1aS9zaGFkb3cvZWxldmF0aW9uIDlcIixcbiAgICBzdHlsZUtleTogXCI4Y2NlYTlkNTIzY2Y5ZGMxM2ZlZTY4ZjM5MmYzZjljYzMxODdhNDU3XCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImxpZ2h0IHVpL3NoYWRvdy9lbGV2YXRpb24gMTRcIixcbiAgICBzdHlsZUtleTogXCJjNjEyNTNjMzhmNmQwZDlmM2IzMDJhNzdhMzgwN2UwNTJlOWMzZjkxXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImxpZ2h0IHVpL2ZvY3VzXCIsXG4gICAgc3R5bGVLZXk6IFwiZjlkNTM5ZjY3MDJiNzExMTY2Yjg5NzQzZTU5NzEwMWJlNjE1M2I5Y1wiLFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IERhcmtVaUVmZmVjdHMgPSBbXG4gIHtcbiAgICBuYW1lOiBcImRhcmsgdWkvc2hhZG93L2VsZXZhdGlvbiA0XCIsXG4gICAgc3R5bGVLZXk6IFwiYTg5YWJiZTZkNjRmODI0ZjYyZWJiMWY1NGY2ZjI4YTkxMDQ5MDE5NVwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJkYXJrIHVpL3NoYWRvdy9lbGV2YXRpb24gOVwiLFxuICAgIHN0eWxlS2V5OiBcIjk4NzYxOTA0YmNjOWQzOGM4MWVlMjNlN2I0MzJkOGM5N2UyOWYwYzFcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiZGFyayB1aS9zaGFkb3cvZWxldmF0aW9uIDE0XCIsXG4gICAgc3R5bGVLZXk6IFwiMjA5YjQ1MWU0ZjY4ZjViZjNhZGUyNGVmMzZhMTBhNjA5Y2RhZTIzOVwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJkYXJrIHVpL2ZvY3VzXCIsXG4gICAgc3R5bGVLZXk6IFwiOTJjYmUzNmQ0NDgwZWZlNGI5NjE4ZWM2ZWMxYTQ0NDkyNDFmYmRkNlwiLFxuICB9LFxuXTtcbiJdLCJzb3VyY2VSb290IjoiIn0=