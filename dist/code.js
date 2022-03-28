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
/* harmony import */ var _helper_layout_grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./helper/layout-grid */ "./src/helper/layout-grid.ts");
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
        Object(_helper_layout_grid__WEBPACK_IMPORTED_MODULE_7__["SetLayoutGrid"])(figma.currentPage.selection, msg);
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
});
// Strokes
const swapStroke = (node, allLightTokens, allDarkTokens) => __awaiter(void 0, void 0, void 0, function* () {
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
});
// Effects
const swapEffects = (node, allLightEffects, allDarkEffects) => __awaiter(void 0, void 0, void 0, function* () {
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
    name: "light ui/typography/text.contrastText.navigation",
    styleKey: "a6f078b789041a26e0f098cae0d640957f1555ee",
  },
  {
    name: "light ui/buttons/action.disabledBackground",
    styleKey: "73b15e3a79eeea757283a44cf71131305cba2399",
  },
  {
    name: "light ui/background/background.default",
    styleKey: "903e5bf274139eeb9f4968a9ef08ec05eaf0b274",
  },
  {
    name: "light ui/background/background.paper",
    styleKey: "23e94fceed9accbda4db9c672c43d21b4d286e4c",
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
    name: "light ui/interaction/special use/navigation.hover",
    styleKey: "ac57f055a755ea5dee0e80126a4a515591bd934f",
  },
  {
    name: "light ui/interaction/special use/navigation.pressed",
    styleKey: "a021a40267b62f69428b45f8bc338ddd86875dd2",
  },
  {
    name: "light ui/special use/premium",
    styleKey: "78cf4018e5bc9fad67698c9a9a3c65fde8f127f6",
  },
  {
    name: "light ui/special use/message",
    styleKey: "c85a9b846349a3a7d3eed358acbc32c2715c982d",
  },
  {
    name: "light ui/special use/navigation",
    styleKey: "49cf77f03e90b406a953a6b429dbbbbb0e72d778",
  },
  {
    name: "light ui/special use/titleBar",
    styleKey: "876343714d147d23d41a18ceba7efd14b9753e17",
  },
];

const DarkUiColors = [
  {
    name: "dark ui/intentions/primary.main",
    styleKey: "2b792d84c9ddb5bb54b4e7ce000c595c79d748ca",
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
    name: "dark ui/typography/text.contrastText.navigation",
    styleKey: "eb93c909ecbfff220ee593d8fb6eacb6a1d817cb",
  },
  {
    name: "dark ui/buttons/action.disabledBackground",
    styleKey: "214ac4df796b51c0f426028d0f4268efa6ee3685",
  },
  {
    name: "dark ui/background/background.default",
    styleKey: "15f5ffac3ec91b24089813439ffadd1f9994b29c",
  },
  {
    name: "dark ui/background/background.paper",
    styleKey: "2f060e7422a8ad17a037a250d368cf671adc0468",
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
    name: "dark ui/interaction/special use/navigation.hover",
    styleKey: "852d4f3fd1c1f95af1f218a78e9aa3e8a86c62f2",
  },
  {
    name: "dark ui/interaction/special use/navigation.pressed",
    styleKey: "20183081538fefd7029008005e45f75059235fa2",
  },
  {
    name: "dark ui/special use/premium",
    styleKey: "3f8d2d81a0abb5bc0b8a4d5212f48c113a98f10e",
  },
  {
    name: "dark ui/special use/message",
    styleKey: "9b62610976846cb3933d20dd52ff668454678af7",
  },
  {
    name: "dark ui/special use/navigation",
    styleKey: "835d0b920b5997c0b97f7390a043e94b6534a506",
  },
  {
    name: "dark ui/special use/titleBar",
    styleKey: "62993f294e35f67bcf54b517d5133305624d8b9b",
  },
  {
    name: "utility/mask",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvZGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlci9jYWxsYmFjay50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVyL2NvbG9yLWNoZWNrLnRzIiwid2VicGFjazovLy8uL3NyYy9oZWxwZXIvZm9yY2UtYXV0by1sYXlvdXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlci9sYXlvdXQtZ3JpZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVyL3NwYWNpbmctY2hlY2sudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlci9zcGFjaW5nLXNsaWRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVyL3RoZW1lLXN3YXAudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RoZW1lLXN0eWxlcy9MYXlvdXRHcmlkcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGhlbWUtc3R5bGVzL2NvbG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGhlbWUtc3R5bGVzL2VmZmVjdHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsaUJBQWlCO0FBQ29CO0FBQ2M7QUFDSjtBQUN1QztBQUNNO0FBQ2xEO0FBQ0M7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksMEVBQWlCO0FBQ3JCLENBQUM7QUFDRDtBQUNBO0FBQ0EsUUFBUSxvRUFBUztBQUNqQjtBQUNBO0FBQ0EsUUFBUSw4RUFBa0I7QUFDMUI7QUFDQTtBQUNBLFFBQVEsa0ZBQW9CO0FBQzVCO0FBQ0E7QUFDQSxRQUFRLHNGQUF1QjtBQUMvQjtBQUNBO0FBQ0EsUUFBUSxvRkFBcUI7QUFDN0I7QUFDQTtBQUNBLFFBQVEsMEVBQVc7QUFDbkI7QUFDQTtBQUNBLFFBQVEsMkZBQXlCO0FBQ2pDO0FBQ0E7QUFDQSxRQUFRLHlGQUF1QjtBQUMvQjtBQUNBO0FBQ0EsUUFBUSx5RUFBYTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDdERBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDNkI7Ozs7Ozs7Ozs7Ozs7QUN4QjdCO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixtQkFBbUI7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsS0FBTztBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLG1CQUFtQjtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLG1CQUFtQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLGVBQWU7QUFDbEQ7QUFDQTtBQUNBLHFEQUFxRCxlQUFlO0FBQ3BFO0FBQ0E7QUFDOEI7Ozs7Ozs7Ozs7Ozs7QUM3SDlCO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzhEOzs7Ozs7Ozs7Ozs7O0FDVjlEO0FBQUE7QUFBQTtBQUF1SjtBQUN2SjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxtRkFBaUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsUUFBUSxpRkFBZTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLCtCQUErQix1RUFBYTtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0Isa0ZBQXdCO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IscUVBQVc7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsdUVBQWE7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ3lCOzs7Ozs7Ozs7Ozs7O0FDL0l6QjtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ2dDOzs7Ozs7Ozs7Ozs7O0FDekxoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixvQ0FBb0M7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixrQ0FBa0M7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsaUNBQWlDO0FBQ3JEO0FBQ0E7QUFDdUU7Ozs7Ozs7Ozs7Ozs7QUNoTXZFO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQWlCLFNBQUksSUFBSSxTQUFJO0FBQzdCLDJCQUEyQiwrREFBK0QsZ0JBQWdCLEVBQUUsRUFBRTtBQUM5RztBQUNBLG1DQUFtQyxNQUFNLDZCQUE2QixFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ2pHLGtDQUFrQyxNQUFNLGlDQUFpQyxFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ3BHLCtCQUErQixxRkFBcUY7QUFDcEg7QUFDQSxLQUFLO0FBQ0w7QUFDcUU7QUFDRztBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNvQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixvREFBb0Q7QUFDN0U7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsa0VBQWE7QUFDcEMsQ0FBQztBQUNEO0FBQ0EsdUJBQXVCLG9FQUFjO0FBQ3JDLENBQUM7QUFDRDtBQUNBLHVCQUF1QixpRUFBWTtBQUNuQyxDQUFDO0FBQ0Q7QUFDQSx1QkFBdUIsbUVBQWE7QUFDcEMsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ2xLRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFTztBQUNQOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVPO0FBQ1A7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7QUM1TUE7QUFBQTtBQUFBO0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7QUM1aEJBO0FBQUE7QUFBQTtBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIIiwiZmlsZSI6ImNvZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9jb2RlLnRzXCIpO1xuIiwiLy8gVGhpcyBwbHVnaW4gd2lsbCBvcGVuIGEgbW9kYWwgdG8gcHJvbXB0IHRoZSB1c2VyIHRvIGVudGVyIGEgbnVtYmVyLCBhbmRcbi8vIGl0IHdpbGwgdGhlbiBjcmVhdGUgdGhhdCBtYW55IHJlY3RhbmdsZXMgb24gdGhlIHNjcmVlbi5cbi8vIFRoaXMgZmlsZSBob2xkcyB0aGUgbWFpbiBjb2RlIGZvciB0aGUgcGx1Z2lucy4gSXQgaGFzIGFjY2VzcyB0byB0aGUgKmRvY3VtZW50Ki5cbi8vIFlvdSBjYW4gYWNjZXNzIGJyb3dzZXIgQVBJcyBpbiB0aGUgPHNjcmlwdD4gdGFnIGluc2lkZSBcInVpLmh0bWxcIiB3aGljaCBoYXMgYVxuLy8gZnVsbCBicm93c2VyIGVudmlyb21lbnQgKHNlZSBkb2N1bWVudGF0aW9uKS5cbi8vIGltcG9ydCB7IFNwYWNpbmdEZWZhdWx0IH0gZnJvbSBcIi4vaGVscGVyL3NwYWNpbmctZGVmYXVsdFwiO1xuaW1wb3J0IHsgVGhlbWVTd2FwIH0gZnJvbSBcIi4vaGVscGVyL3RoZW1lLXN3YXBcIjtcbmltcG9ydCB7IFNwYWNpbmdDaGVja1RyYXZlcnNlIH0gZnJvbSBcIi4vaGVscGVyL3NwYWNpbmctY2hlY2tcIjtcbmltcG9ydCB7IENvbG9yQ2hlY2tUcmF2ZXJzZSB9IGZyb20gXCIuL2hlbHBlci9jb2xvci1jaGVja1wiO1xuaW1wb3J0IHsgRm9yY2VBdXRvTGF5b3V0SG9yaXpvbnRhbCwgRm9yY2VBdXRvTGF5b3V0VmVydGljYWwsIH0gZnJvbSBcIi4vaGVscGVyL2ZvcmNlLWF1dG8tbGF5b3V0XCI7XG5pbXBvcnQgeyBQYWRkaW5nSG9yaXpvbnRhbFNsaWRlciwgUGFkZGluZ1ZlcnRpY2FsU2xpZGVyLCBJdGVtU3BhY2luZywgfSBmcm9tIFwiLi9oZWxwZXIvc3BhY2luZy1zbGlkZXJcIjtcbmltcG9ydCB7IFNldExheW91dEdyaWQgfSBmcm9tIFwiLi9oZWxwZXIvbGF5b3V0LWdyaWRcIjtcbmltcG9ydCB7IG9uU2VsZWN0aW9uQ2hhbmdlIH0gZnJvbSBcIi4vaGVscGVyL2NhbGxiYWNrXCI7XG4vLyBUaGlzIHNob3dzIHRoZSBIVE1MIHBhZ2UgaW4gXCJ1aS5odG1sXCIuXG5maWdtYS5zaG93VUkoX19odG1sX18pO1xuLy8gQ2FsbHMgdG8gXCJwYXJlbnQucG9zdE1lc3NhZ2VcIiBmcm9tIHdpdGhpbiB0aGUgSFRNTCBwYWdlIHdpbGwgdHJpZ2dlciB0aGlzXG4vLyBjYWxsYmFjay4gVGhlIGNhbGxiYWNrIHdpbGwgYmUgcGFzc2VkIHRoZSBcInBsdWdpbk1lc3NhZ2VcIiBwcm9wZXJ0eSBvZiB0aGVcbi8vIHBvc3RlZCBtZXNzYWdlLlxuZmlnbWEudWkucmVzaXplKDI4MCwgNTYwKTtcbmZpZ21hLm9uKFwic2VsZWN0aW9uY2hhbmdlXCIsICgpID0+IHtcbiAgICBsZXQgdGhpc1NlbGVjdGlvbiA9IGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvblswXTtcbiAgICBvblNlbGVjdGlvbkNoYW5nZSh0aGlzU2VsZWN0aW9uKTtcbn0pO1xuZmlnbWEudWkub25tZXNzYWdlID0gKG1zZykgPT4ge1xuICAgIGlmIChtc2cudHlwZSA9PT0gXCJzd2FwLXRoZW1lXCIpIHtcbiAgICAgICAgVGhlbWVTd2FwKGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvblswXSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKG1zZy50eXBlID09PSBcImNvbG9yLWNoZWNrZXJcIikge1xuICAgICAgICBDb2xvckNoZWNrVHJhdmVyc2UoZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uWzBdKTtcbiAgICB9XG4gICAgZWxzZSBpZiAobXNnLnR5cGUgPT09IFwic3BhY2luZy1jaGVja2VyXCIpIHtcbiAgICAgICAgU3BhY2luZ0NoZWNrVHJhdmVyc2UoZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uKTtcbiAgICB9XG4gICAgZWxzZSBpZiAobXNnLnR5cGUgPT09IFwicGFkZGluZy1ob3Jpem9udGFsLXNsaWRlclwiKSB7XG4gICAgICAgIFBhZGRpbmdIb3Jpem9udGFsU2xpZGVyKGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbiwgbXNnKTtcbiAgICB9XG4gICAgZWxzZSBpZiAobXNnLnR5cGUgPT09IFwicGFkZGluZy12ZXJ0aWNhbC1zbGlkZXJcIikge1xuICAgICAgICBQYWRkaW5nVmVydGljYWxTbGlkZXIoZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uLCBtc2cpO1xuICAgIH1cbiAgICBlbHNlIGlmIChtc2cudHlwZSA9PT0gXCJpdGVtLXNwYWNpbmctc2xpZGVyXCIpIHtcbiAgICAgICAgSXRlbVNwYWNpbmcoZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uLCBtc2cpO1xuICAgIH1cbiAgICBlbHNlIGlmIChtc2cudHlwZSA9PT0gXCJmb3JjZS1hdXRvLWxheW91dC1ob3Jpem9udGFsXCIpIHtcbiAgICAgICAgRm9yY2VBdXRvTGF5b3V0SG9yaXpvbnRhbChmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb24pO1xuICAgIH1cbiAgICBlbHNlIGlmIChtc2cudHlwZSA9PT0gXCJmb3JjZS1hdXRvLWxheW91dC12ZXJ0aWNhbFwiKSB7XG4gICAgICAgIEZvcmNlQXV0b0xheW91dFZlcnRpY2FsKGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbik7XG4gICAgfVxuICAgIGVsc2UgaWYgKG1zZy50eXBlID09PSBcInNldC1sYXlvdXQtZ3JpZFwiKSB7XG4gICAgICAgIFNldExheW91dEdyaWQoZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uLCBtc2cpO1xuICAgIH1cbiAgICAvLyBNYWtlIHN1cmUgdG8gY2xvc2UgdGhlIHBsdWdpbiB3aGVuIHlvdSdyZSBkb25lLiBPdGhlcndpc2UgdGhlIHBsdWdpbiB3aWxsXG4gICAgLy8ga2VlcCBydW5uaW5nLCB3aGljaCBzaG93cyB0aGUgY2FuY2VsIGJ1dHRvbiBhdCB0aGUgYm90dG9tIG9mIHRoZSBzY3JlZW4uXG4gICAgLy8gZmlnbWEuY2xvc2VQbHVnaW4oKTtcbn07XG4iLCJjb25zdCBvblNlbGVjdGlvbkNoYW5nZSA9IChub2RlKSA9PiB7XG4gICAgaWYgKG5vZGUpIHtcbiAgICAgICAgY29uc29sZS5sb2cobm9kZSk7XG4gICAgICAgIGxldCBob3Jpem9udGFsUGFkZGluZyA9IG5vZGUuaG9yaXpvbnRhbFBhZGRpbmc7XG4gICAgICAgIGxldCB2ZXJ0aWNhbFBhZGRpbmcgPSBub2RlLnZlcnRpY2FsUGFkZGluZztcbiAgICAgICAgbGV0IGl0ZW1TcGFjaW5nID0gbm9kZS5pdGVtU3BhY2luZztcbiAgICAgICAgbGV0IGxheW91dE1vZGUgPSBub2RlLmxheW91dE1vZGU7XG4gICAgICAgIGxldCB0eXBlID0gbm9kZS50eXBlO1xuICAgICAgICBsZXQgbGF5b3V0R3JpZHMgPSBub2RlLmxheW91dEdyaWRzO1xuICAgICAgICBsZXQgb2JqID0ge1xuICAgICAgICAgICAgaG9yaXpvbnRhbFBhZGRpbmc6IGhvcml6b250YWxQYWRkaW5nLFxuICAgICAgICAgICAgdmVydGljYWxQYWRkaW5nOiB2ZXJ0aWNhbFBhZGRpbmcsXG4gICAgICAgICAgICBpdGVtU3BhY2luZzogaXRlbVNwYWNpbmcsXG4gICAgICAgICAgICBsYXlvdXRNb2RlOiBsYXlvdXRNb2RlLFxuICAgICAgICAgICAgdHlwZTogdHlwZSxcbiAgICAgICAgICAgIGxheW91dEdyaWRzOiBsYXlvdXRHcmlkcyxcbiAgICAgICAgfTtcbiAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2Uob2JqKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwibm9cIik7XG4gICAgICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKFwibm90aGluZyBzZWxlY3RlZFwiKTtcbiAgICB9XG59O1xuZXhwb3J0IHsgb25TZWxlY3Rpb25DaGFuZ2UgfTtcbiIsImZ1bmN0aW9uIGNsb25lKHZhbCkge1xuICAgIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHZhbCkpO1xufVxuLy8gQ2hlY2sgb2JqZWN0IGVxdWFsaXR5IGhlbHBlclxuZnVuY3Rpb24gaXNFcXVpdmFsZW50KGEsIGIpIHtcbiAgICAvLyBDcmVhdGUgYXJyYXlzIG9mIHByb3BlcnR5IG5hbWVzXG4gICAgdmFyIGFQcm9wcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGEpO1xuICAgIHZhciBiUHJvcHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhiKTtcbiAgICAvLyBJZiBudW1iZXIgb2YgcHJvcGVydGllcyBpcyBkaWZmZXJlbnQsXG4gICAgLy8gb2JqZWN0cyBhcmUgbm90IGVxdWl2YWxlbnRcbiAgICBpZiAoYVByb3BzLmxlbmd0aCAhPSBiUHJvcHMubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhUHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIHByb3BOYW1lID0gYVByb3BzW2ldO1xuICAgICAgICAvLyBJZiB2YWx1ZXMgb2Ygc2FtZSBwcm9wZXJ0eSBhcmUgbm90IGVxdWFsLFxuICAgICAgICAvLyBvYmplY3RzIGFyZSBub3QgZXF1aXZhbGVudFxuICAgICAgICBpZiAoYVtwcm9wTmFtZV0gIT09IGJbcHJvcE5hbWVdKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gSWYgd2UgbWFkZSBpdCB0aGlzIGZhciwgb2JqZWN0c1xuICAgIC8vIGFyZSBjb25zaWRlcmVkIGVxdWl2YWxlbnRcbiAgICByZXR1cm4gdHJ1ZTtcbn1cbmNvbnN0IENvbG9yQ2hlY2tUcmF2ZXJzZSA9IChub2RlKSA9PiB7XG4gICAgbGV0IHN0cmF5RmlsbCA9IDA7XG4gICAgbGV0IHN0cmF5U3Ryb2tlID0gMDtcbiAgICBpZiAoXCJmaWxsc1wiICYmIFwic3Ryb2tlc1wiIGluIG5vZGUpIHtcbiAgICAgICAgLy8gRmlsdGVyIHdhcm5pbmcgc3Ryb2tlIGZ1bmN0aW9uXG4gICAgICAgIGxldCBmaWx0ZXJXYXJuaW5nU3Ryb2tlID0gZnVuY3Rpb24gKHN0cm9rZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJjbGVhciBvdXRcIik7XG4gICAgICAgICAgICBpZiAoc3Ryb2tlLnR5cGUgPT0gXCJTT0xJRFwiICYmXG4gICAgICAgICAgICAgICAgaXNFcXVpdmFsZW50KHN0cm9rZS5jb2xvciwgeyByOiAxLCBnOiAwLCBiOiAwIH0pKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ5ZXNcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJub1wiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgbGV0IG9sZFN0cm9rZXMgPSBjbG9uZShub2RlLnN0cm9rZXMpO1xuICAgICAgICBsZXQgbmV3U3Ryb2tlcyA9IG9sZFN0cm9rZXMuZmlsdGVyKGZpbHRlcldhcm5pbmdTdHJva2UpO1xuICAgICAgICBpZiAobm9kZS5zdHJva2VTdHlsZUlkLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIC8vIGRvIG5vdGhpbmdcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG5vZGUuc3Ryb2tlcyA9IG5ld1N0cm9rZXM7XG4gICAgICAgIH1cbiAgICAgICAgLy8gLy8gQWRkIHdhcm5pbmcgc3Ryb2tlIGZ1bmN0aW9uXG4gICAgICAgIGxldCBhZGRXYXJuaW5nU3Ryb2tlID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgIGxldCBzdHJva2VzID0gY2xvbmUobm9kZS5zdHJva2VzKTtcbiAgICAgICAgICAgIGxldCB3YXJuaW5nU3Ryb2tlUHJvcGVydHkgPSB7XG4gICAgICAgICAgICAgICAgY29sb3I6IHsgcjogMSwgZzogMCwgYjogMCB9LFxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgICAgICAgdHlwZTogXCJTT0xJRFwiLFxuICAgICAgICAgICAgICAgIGJsZW5kTW9kZTogXCJOT1JNQUxcIixcbiAgICAgICAgICAgICAgICB2aXNpYmxlOiB0cnVlLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHN0cm9rZXMucHVzaCh3YXJuaW5nU3Ryb2tlUHJvcGVydHkpO1xuICAgICAgICAgICAgbm9kZS5zdHJva2VzID0gc3Ryb2tlcztcbiAgICAgICAgICAgIC8vIG5vZGUuc3Ryb2tlQWxpZ24gPSBcIk9VVFNJREVcIjtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gQ2hlY2sgRmlsbFxuICAgICAgICBjb25zdCBoYXNJbWFnZSA9IChmaWxsKSA9PiBmaWxsLnR5cGUgPT09IFwiSU1BR0VcIjtcbiAgICAgICAgaWYgKG5vZGUuZmlsbHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgLy8gaWYgKG5vZGUuZmlsbHMuc29tZShoYXNJbWFnZSkpIHtcbiAgICAgICAgICAgIC8vICAgY29uc29sZS5sb2coXCJmaWxsIGlzIGltYWdlXCIpO1xuICAgICAgICAgICAgLy8gfSBlbHNlIHtcbiAgICAgICAgICAgIC8vICAgY29uc29sZS5sb2coXCJmaWxsIGlzIE5PVCBpbWFnZVwiKTtcbiAgICAgICAgICAgIC8vICAgLy8gbm90aGluZ1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgaWYgKG5vZGUuZmlsbFN0eWxlSWQubGVuZ3RoID4gMCB8fCBub2RlLmZpbGxzLnNvbWUoaGFzSW1hZ2UpKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLinIUgR29vZCBmaWxsXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLinYwgQmFkIGZpbGxcIik7XG4gICAgICAgICAgICAgICAgLy8gQWRkIHdhcm5pbmcgc3Ryb2tlXG4gICAgICAgICAgICAgICAgYWRkV2FybmluZ1N0cm9rZShub2RlKTtcbiAgICAgICAgICAgICAgICBzdHJheUZpbGwrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibm8gZmlsbFwiKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBDaGVjayBTdHJva2VcbiAgICAgICAgaWYgKG5vZGUuc3Ryb2tlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBpZiAobm9kZS5zdHJva2VTdHlsZUlkLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuKchSBHb29kIHN0cm9rZVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi4p2MIEJhZCBzdHJva2VcIik7XG4gICAgICAgICAgICAgICAgLy8gLy8gQWRkIHdhcm5pbmcgc3Ryb2tlXG4gICAgICAgICAgICAgICAgYWRkV2FybmluZ1N0cm9rZShub2RlKTtcbiAgICAgICAgICAgICAgICBzdHJheVN0cm9rZSsrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJubyBzdHJva2VcIik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiTm8gZmlsbCAmIHN0cm9rZSBwcm9wZXJ0eVwiKTtcbiAgICB9XG4gICAgaWYgKFwiY2hpbGRyZW5cIiBpbiBub2RlKSB7XG4gICAgICAgIGZvciAoY29uc3QgY2hpbGQgb2Ygbm9kZS5jaGlsZHJlbikge1xuICAgICAgICAgICAgQ29sb3JDaGVja1RyYXZlcnNlKGNoaWxkKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgLy8gZG8gbm90aGluZ1xuICAgIH1cbiAgICBpZiAoc3RyYXlGaWxsID4gMCB8fCBzdHJheVN0cm9rZSA+IDApIHtcbiAgICAgICAgbGV0IGVycm9yU3RyaW5nID0gXCJZb3UgaGF2ZSBcIiArXG4gICAgICAgICAgICBzdHJheUZpbGwgK1xuICAgICAgICAgICAgXCIgZmlsbHMgYW5kIFwiICtcbiAgICAgICAgICAgIHN0cmF5U3Ryb2tlICtcbiAgICAgICAgICAgIFwiIHN0cm9rZXMgbm90IHVzaW5nIGNvbG91cnMgZnJvbSBvdXIgbGlicmFyeSFcIjtcbiAgICAgICAgZmlnbWEubm90aWZ5KGVycm9yU3RyaW5nLCB7IHRpbWVvdXQ6IDAuNSB9KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGZpZ21hLm5vdGlmeShcIvCfkY8gQWxsIGlzIGdvb2QgaW4gdGhlIGhvb2QhXCIsIHsgdGltZW91dDogMC41IH0pO1xuICAgIH1cbn07XG5leHBvcnQgeyBDb2xvckNoZWNrVHJhdmVyc2UgfTtcbiIsImNvbnN0IEZvcmNlQXV0b0xheW91dEhvcml6b250YWwgPSAobm9kZXMpID0+IHtcbiAgICBmb3IgKGNvbnN0IG5vZGUgb2Ygbm9kZXMpIHtcbiAgICAgICAgbm9kZS5sYXlvdXRNb2RlID0gXCJIT1JJWk9OVEFMXCI7XG4gICAgfVxufTtcbmNvbnN0IEZvcmNlQXV0b0xheW91dFZlcnRpY2FsID0gKG5vZGVzKSA9PiB7XG4gICAgZm9yIChjb25zdCBub2RlIG9mIG5vZGVzKSB7XG4gICAgICAgIG5vZGUubGF5b3V0TW9kZSA9IFwiVkVSVElDQUxcIjtcbiAgICB9XG59O1xuZXhwb3J0IHsgRm9yY2VBdXRvTGF5b3V0SG9yaXpvbnRhbCwgRm9yY2VBdXRvTGF5b3V0VmVydGljYWwgfTtcbiIsImltcG9ydCB7IHBhZGRpbmdIb3Jpem9udGFsLCBwYWRkaW5nVmVydGljYWwsIGJhc2VsaW5lR3JpZHMsIG1heFdpZHRoR3JpZHMsIGNvbHVtbkdyaWRzLCBtYXhXaWR0aExlZnRBbGlnbmVkR3JpZHMsIH0gZnJvbSBcIi4uL3RoZW1lLXN0eWxlcy9MYXlvdXRHcmlkc1wiO1xuY29uc3QgU2V0TGF5b3V0R3JpZCA9IChub2RlcywgbXNnKSA9PiB7XG4gICAgLy8gY29uc29sZS5sb2cobXNnLmxheW91dEdyaWRPcHRpb25zKTtcbiAgICBmb3IgKGNvbnN0IG5vZGUgb2Ygbm9kZXMpIHtcbiAgICAgICAgLy8gbm9kZS5sYXlvdXRHcmlkcyA9IFtdO1xuICAgICAgICBjb25zdCBob3Jpem9udGFsUGFkZGluZ1NsaWRlclZhbHVlID0gbXNnLmxheW91dEdyaWRPcHRpb25zWzBdLnZhbHVlO1xuICAgICAgICBjb25zdCB2ZXJ0aWNhbFBhZGRpbmdTbGlkZXJWYWx1ZSA9IG1zZy5sYXlvdXRHcmlkT3B0aW9uc1sxXS52YWx1ZTtcbiAgICAgICAgY29uc3Qgc2hvd0Jhc2VsaW5lUm93cyA9IG1zZy5sYXlvdXRHcmlkT3B0aW9uc1syXS52YWx1ZTtcbiAgICAgICAgY29uc3Qgc2hvd01heFdpZHRoID0gbXNnLmxheW91dEdyaWRPcHRpb25zWzNdLnZhbHVlO1xuICAgICAgICBjb25zdCBzaG93Q29sdW1ucyA9IG1zZy5sYXlvdXRHcmlkT3B0aW9uc1s0XS52YWx1ZTtcbiAgICAgICAgY29uc3Qgc2hvd01heFdpZHRoTGVmdEFsaWduZWQgPSBtc2cubGF5b3V0R3JpZE9wdGlvbnNbNV0udmFsdWU7XG4gICAgICAgIGxldCBhbGxHcmlkcyA9IFtdO1xuICAgICAgICBsZXQgc3BhY2luZ0hvcml6b250YWwgPSAwO1xuICAgICAgICBsZXQgc3BhY2luZ1ZlcnRpY2FsID0gMDtcbiAgICAgICAgc3dpdGNoIChob3Jpem9udGFsUGFkZGluZ1NsaWRlclZhbHVlKSB7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHNwYWNpbmdIb3Jpem9udGFsID0gMDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCIwXCI6XG4gICAgICAgICAgICAgICAgc3BhY2luZ0hvcml6b250YWwgPSAwO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIjFcIjpcbiAgICAgICAgICAgICAgICBzcGFjaW5nSG9yaXpvbnRhbCA9IDQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiMlwiOlxuICAgICAgICAgICAgICAgIHNwYWNpbmdIb3Jpem9udGFsID0gODtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCIzXCI6XG4gICAgICAgICAgICAgICAgc3BhY2luZ0hvcml6b250YWwgPSAxMjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCI0XCI6XG4gICAgICAgICAgICAgICAgc3BhY2luZ0hvcml6b250YWwgPSAxNjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCI1XCI6XG4gICAgICAgICAgICAgICAgc3BhY2luZ0hvcml6b250YWwgPSAyNDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCI2XCI6XG4gICAgICAgICAgICAgICAgc3BhY2luZ0hvcml6b250YWwgPSAzMjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCI3XCI6XG4gICAgICAgICAgICAgICAgc3BhY2luZ0hvcml6b250YWwgPSA0MDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCI4XCI6XG4gICAgICAgICAgICAgICAgc3BhY2luZ0hvcml6b250YWwgPSA0ODtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBzd2l0Y2ggKHZlcnRpY2FsUGFkZGluZ1NsaWRlclZhbHVlKSB7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHNwYWNpbmdWZXJ0aWNhbCA9IDA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiMFwiOlxuICAgICAgICAgICAgICAgIHNwYWNpbmdWZXJ0aWNhbCA9IDA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiMVwiOlxuICAgICAgICAgICAgICAgIHNwYWNpbmdWZXJ0aWNhbCA9IDQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiMlwiOlxuICAgICAgICAgICAgICAgIHNwYWNpbmdWZXJ0aWNhbCA9IDg7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiM1wiOlxuICAgICAgICAgICAgICAgIHNwYWNpbmdWZXJ0aWNhbCA9IDEyO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIjRcIjpcbiAgICAgICAgICAgICAgICBzcGFjaW5nVmVydGljYWwgPSAxNjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCI1XCI6XG4gICAgICAgICAgICAgICAgc3BhY2luZ1ZlcnRpY2FsID0gMjQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiNlwiOlxuICAgICAgICAgICAgICAgIHNwYWNpbmdWZXJ0aWNhbCA9IDMyO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIjdcIjpcbiAgICAgICAgICAgICAgICBzcGFjaW5nVmVydGljYWwgPSA0MDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCI4XCI6XG4gICAgICAgICAgICAgICAgc3BhY2luZ1ZlcnRpY2FsID0gNDg7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgcGFkZGluZ0hvcml6b250YWwoc3BhY2luZ0hvcml6b250YWwpLnRoZW4oKHZhbCkgPT4ge1xuICAgICAgICAgICAgaWYgKHZhbC5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgICAgIC8vIGRvIG5vdGhpbmdcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgZ3JpZCBvZiB2YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgYWxsR3JpZHMucHVzaChncmlkKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYWxsR3JpZHMpO1xuICAgICAgICAgICAgICAgICAgICBub2RlLmxheW91dEdyaWRzID0gYWxsR3JpZHM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcGFkZGluZ1ZlcnRpY2FsKHNwYWNpbmdWZXJ0aWNhbCkudGhlbigodmFsKSA9PiB7XG4gICAgICAgICAgICBpZiAodmFsLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgLy8gZG8gbm90aGluZ1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBncmlkIG9mIHZhbCkge1xuICAgICAgICAgICAgICAgICAgICBhbGxHcmlkcy5wdXNoKGdyaWQpO1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhhbGxHcmlkcyk7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUubGF5b3V0R3JpZHMgPSBhbGxHcmlkcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoc2hvd01heFdpZHRoKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGdyaWQgb2YgbWF4V2lkdGhHcmlkcykge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGdyaWQpO1xuICAgICAgICAgICAgICAgIGFsbEdyaWRzLnB1c2goZ3JpZCk7XG4gICAgICAgICAgICAgICAgbm9kZS5sYXlvdXRHcmlkcyA9IGFsbEdyaWRzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbm9kZS5sYXlvdXRHcmlkcyA9IGFsbEdyaWRzO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzaG93TWF4V2lkdGhMZWZ0QWxpZ25lZCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBncmlkIG9mIG1heFdpZHRoTGVmdEFsaWduZWRHcmlkcykge1xuICAgICAgICAgICAgICAgIGFsbEdyaWRzLnB1c2goZ3JpZCk7XG4gICAgICAgICAgICAgICAgbm9kZS5sYXlvdXRHcmlkcyA9IGFsbEdyaWRzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbm9kZS5sYXlvdXRHcmlkcyA9IGFsbEdyaWRzO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzaG93Q29sdW1ucykge1xuICAgICAgICAgICAgZm9yIChjb25zdCBncmlkIG9mIGNvbHVtbkdyaWRzKSB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZ3JpZCk7XG4gICAgICAgICAgICAgICAgYWxsR3JpZHMucHVzaChncmlkKTtcbiAgICAgICAgICAgICAgICBub2RlLmxheW91dEdyaWRzID0gYWxsR3JpZHM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBub2RlLmxheW91dEdyaWRzID0gYWxsR3JpZHM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNob3dCYXNlbGluZVJvd3MpIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwic2hvd1wiKTtcbiAgICAgICAgICAgIGFsbEdyaWRzLnB1c2goYmFzZWxpbmVHcmlkcyk7XG4gICAgICAgICAgICBub2RlLmxheW91dEdyaWRzID0gYWxsR3JpZHM7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhhbGxHcmlkcyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBub2RlLmxheW91dEdyaWRzID0gYWxsR3JpZHM7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhhbGxHcmlkcyk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuZXhwb3J0IHsgU2V0TGF5b3V0R3JpZCB9O1xuIiwiY29uc3QgU3BhY2luZ0NoZWNrVHJhdmVyc2UgPSAobm9kZXMpID0+IHtcbiAgICBmb3IgKGNvbnN0IG5vZGUgb2Ygbm9kZXMpIHtcbiAgICAgICAgbGV0IG5hbWUgPSBub2RlLm5hbWU7XG4gICAgICAgIGxldCBwYWRkaW5nQWxsUmVnZXggPSAvXFxiKD86cGEtMXxwYS0yfHBhLTN8cGEtNHxwYS01fHBhLTZ8cGEtN3xwYS1ub25lKVxcYi9nO1xuICAgICAgICBsZXQgcGFkZGluZ0hvcml6b250YWxSZWdleCA9IC9cXGIoPzpwaC0xfHBoLTJ8cGgtM3xwaC00fHBoLTV8cGgtNnxwaC03fHBoLW5vbmUpXFxiL2c7XG4gICAgICAgIGxldCBwYWRkaW5nVmVydGljYWxSZWdleCA9IC9cXGIoPzpwdi0xfHB2LTJ8cHYtM3xwdi00fHB2LTV8cHYtNnxwdi03fHB2LW5vbmUpXFxiL2c7XG4gICAgICAgIGxldCBpdGVtU3BhY2luZ0FsbFJlZ2V4ID0gL1xcYig/OnNwLTF8c3AtMnxzcC0zfHNwLTR8c3AtNXxzcC02fHNwLTd8c3Atbm9uZSlcXGIvZztcbiAgICAgICAgbGV0IGF1dG9sYXlvdXRSZWdleCA9IC9cXGIoPzp2ZXJ0aWNhbHxob3Jpem9udGFsKVxcYi9nO1xuICAgICAgICBsZXQgbWF0Y2hQYWRkaW5nQWxsID0gbmFtZS5tYXRjaChwYWRkaW5nQWxsUmVnZXgpO1xuICAgICAgICBsZXQgbWF0Y2hQYWRkaW5nSG9yaXpvbnRhbCA9IG5hbWUubWF0Y2gocGFkZGluZ0hvcml6b250YWxSZWdleCk7XG4gICAgICAgIGxldCBtYXRjaFBhZGRpbmdWZXJ0aWNhbCA9IG5hbWUubWF0Y2gocGFkZGluZ1ZlcnRpY2FsUmVnZXgpO1xuICAgICAgICBsZXQgbWF0Y2hJdGVtU3BhY2luZyA9IG5hbWUubWF0Y2goaXRlbVNwYWNpbmdBbGxSZWdleCk7XG4gICAgICAgIGxldCBtYXRjaEF1dG9MYXlvdXREaXJlY3Rpb24gPSBuYW1lLm1hdGNoKGF1dG9sYXlvdXRSZWdleCk7XG4gICAgICAgIGNvbnNvbGUubG9nKG1hdGNoUGFkZGluZ0FsbCk7XG4gICAgICAgIGlmIChtYXRjaEF1dG9MYXlvdXREaXJlY3Rpb24gPT0gbnVsbCkge1xuICAgICAgICAgICAgbm9kZS5sYXlvdXRNb2RlID0gXCJWRVJUSUNBTFwiO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJlbmFibGUgYXV0byBsYXlvdXRcIik7XG4gICAgICAgICAgICBzd2l0Y2ggKG1hdGNoQXV0b0xheW91dERpcmVjdGlvblswXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJ2ZXJ0aWNhbFwiOlxuICAgICAgICAgICAgICAgICAgICBub2RlLmxheW91dE1vZGUgPSBcIlZFUlRJQ0FMXCI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJob3Jpem9udGFsXCI6XG4gICAgICAgICAgICAgICAgICAgIG5vZGUubGF5b3V0TW9kZSA9IFwiSE9SSVpPTlRBTFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChtYXRjaEl0ZW1TcGFjaW5nID09IG51bGwpIHtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaGFzIHNwYWNpbmdcIik7XG4gICAgICAgICAgICBzd2l0Y2ggKG1hdGNoSXRlbVNwYWNpbmdbMF0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIFwic3AtMFwiOlxuICAgICAgICAgICAgICAgICAgICBub2RlLml0ZW1TcGFjaW5nID0gMDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInNwLTFcIjpcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5pdGVtU3BhY2luZyA9IDQ7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJzcC0yXCI6XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuaXRlbVNwYWNpbmcgPSA4O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwic3AtM1wiOlxuICAgICAgICAgICAgICAgICAgICBub2RlLml0ZW1TcGFjaW5nID0gMTI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJzcC00XCI6XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuaXRlbVNwYWNpbmcgPSAxNjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInNwLTVcIjpcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5pdGVtU3BhY2luZyA9IDI0O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwic3AtNlwiOlxuICAgICAgICAgICAgICAgICAgICBub2RlLml0ZW1TcGFjaW5nID0gMzI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJzcC03XCI6XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuaXRlbVNwYWNpbmcgPSA0MDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInNwLThcIjpcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5pdGVtU3BhY2luZyA9IDQ4O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAobWF0Y2hQYWRkaW5nQWxsID09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibm9cIik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImhhcyBwYWRkaW5nIGFsbFwiKTtcbiAgICAgICAgICAgIHN3aXRjaCAobWF0Y2hQYWRkaW5nQWxsWzBdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcInBhLW5vbmVcIjpcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5ob3Jpem9udGFsUGFkZGluZyA9IDA7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUudmVydGljYWxQYWRkaW5nID0gMDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInBhLTFcIjpcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5ob3Jpem9udGFsUGFkZGluZyA9IDQ7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUudmVydGljYWxQYWRkaW5nID0gNDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInBhLTJcIjpcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5ob3Jpem9udGFsUGFkZGluZyA9IDg7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUudmVydGljYWxQYWRkaW5nID0gODtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInBhLTNcIjpcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5ob3Jpem9udGFsUGFkZGluZyA9IDEyO1xuICAgICAgICAgICAgICAgICAgICBub2RlLnZlcnRpY2FsUGFkZGluZyA9IDEyO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwicGEtNFwiOlxuICAgICAgICAgICAgICAgICAgICBub2RlLmhvcml6b250YWxQYWRkaW5nID0gMTY7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUudmVydGljYWxQYWRkaW5nID0gMTY7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJwYS01XCI6XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuaG9yaXpvbnRhbFBhZGRpbmcgPSAyNDtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS52ZXJ0aWNhbFBhZGRpbmcgPSAyNDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInBhLTZcIjpcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5ob3Jpem9udGFsUGFkZGluZyA9IDMyO1xuICAgICAgICAgICAgICAgICAgICBub2RlLnZlcnRpY2FsUGFkZGluZyA9IDMyO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwicGEtN1wiOlxuICAgICAgICAgICAgICAgICAgICBub2RlLmhvcml6b250YWxQYWRkaW5nID0gNDA7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUudmVydGljYWxQYWRkaW5nID0gNDA7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJwYS04XCI6XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuaG9yaXpvbnRhbFBhZGRpbmcgPSA0ODtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS52ZXJ0aWNhbFBhZGRpbmcgPSA0ODtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1hdGNoUGFkZGluZ0hvcml6b250YWwgPT0gbnVsbCkge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJub1wiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaGFzIHBhZGRpbmcgaG9yaXpvbnRhbFwiKTtcbiAgICAgICAgICAgIHN3aXRjaCAobWF0Y2hQYWRkaW5nSG9yaXpvbnRhbFswXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJwaC1ub25lXCI6XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuaG9yaXpvbnRhbFBhZGRpbmcgPSAwO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwicGgtMVwiOlxuICAgICAgICAgICAgICAgICAgICBub2RlLmhvcml6b250YWxQYWRkaW5nID0gNDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInBoLTJcIjpcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5ob3Jpem9udGFsUGFkZGluZyA9IDg7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJwaC0zXCI6XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuaG9yaXpvbnRhbFBhZGRpbmcgPSAxMjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInBoLTRcIjpcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5ob3Jpem9udGFsUGFkZGluZyA9IDE2O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwicGgtNVwiOlxuICAgICAgICAgICAgICAgICAgICBub2RlLmhvcml6b250YWxQYWRkaW5nID0gMjQ7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJwaC02XCI6XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuaG9yaXpvbnRhbFBhZGRpbmcgPSAzMjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInBoLTdcIjpcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5ob3Jpem9udGFsUGFkZGluZyA9IDQwO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwicGgtOFwiOlxuICAgICAgICAgICAgICAgICAgICBub2RlLmhvcml6b250YWxQYWRkaW5nID0gNDg7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChtYXRjaFBhZGRpbmdWZXJ0aWNhbCA9PSBudWxsKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIm5vXCIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJoYXMgcGFkZGluZyBob3Jpem9udGFsXCIpO1xuICAgICAgICAgICAgc3dpdGNoIChtYXRjaFBhZGRpbmdWZXJ0aWNhbFswXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJwdi1ub25lXCI6XG4gICAgICAgICAgICAgICAgICAgIG5vZGUudmVydGljYWxQYWRkaW5nID0gMDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInB2LTFcIjpcbiAgICAgICAgICAgICAgICAgICAgbm9kZS52ZXJ0aWNhbFBhZGRpbmcgPSA0O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwicHYtMlwiOlxuICAgICAgICAgICAgICAgICAgICBub2RlLnZlcnRpY2FsUGFkZGluZyA9IDg7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJwdi0zXCI6XG4gICAgICAgICAgICAgICAgICAgIG5vZGUudmVydGljYWxQYWRkaW5nID0gMTI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJwdi00XCI6XG4gICAgICAgICAgICAgICAgICAgIG5vZGUudmVydGljYWxQYWRkaW5nID0gMTY7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJwdi01XCI6XG4gICAgICAgICAgICAgICAgICAgIG5vZGUudmVydGljYWxQYWRkaW5nID0gMjQ7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJwdi02XCI6XG4gICAgICAgICAgICAgICAgICAgIG5vZGUudmVydGljYWxQYWRkaW5nID0gMzI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJwdi03XCI6XG4gICAgICAgICAgICAgICAgICAgIG5vZGUudmVydGljYWxQYWRkaW5nID0gNDA7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJwdi04XCI6XG4gICAgICAgICAgICAgICAgICAgIG5vZGUudmVydGljYWxQYWRkaW5nID0gNDg7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIFNwYWNpbmdDaGVja1RyYXZlcnNlKG5vZGUpO1xuICAgIH1cbiAgICAvLyBpZiAoXCJjaGlsZHJlblwiIGluIG5vZGVzKSB7XG4gICAgLy8gICBmb3IgKGNvbnN0IGNoaWxkIG9mIG5vZGUuY2hpbGRyZW4pIHtcbiAgICAvLyAgICAgU3BhY2luZ0NoZWNrVHJhdmVyc2UoY2hpbGQpO1xuICAgIC8vICAgfVxuICAgIC8vIH0gZWxzZSB7XG4gICAgLy8gICAvLyBkbyBub3RoaW5nXG4gICAgLy8gfVxufTtcbmV4cG9ydCB7IFNwYWNpbmdDaGVja1RyYXZlcnNlIH07XG4iLCJmdW5jdGlvbiBjbG9uZSh2YWwpIHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh2YWwpKTtcbn1cbmxldCBwaE5hbWUgPSBudWxsO1xubGV0IHB2TmFtZSA9IG51bGw7XG5sZXQgc3BOYW1lID0gbnVsbDtcbmxldCBuYW1lUHJvcCA9IHtcbiAgICBob3Jpem9udGFsOiBcInBoLW5vbmVcIixcbiAgICB2ZXJ0aWNhbDogXCJwdi1ub25lXCIsXG4gICAgc3BhY2luZzogXCJzcC1ub25lXCIsXG59O1xuZnVuY3Rpb24gdXBkYXRlTmFtZSh2YWwsIG5vZGUpIHtcbiAgICBpZiAodmFsLnR5cGUgPT09IFwiaG9yaXpvbnRhbFwiKSB7XG4gICAgICAgIG5hbWVQcm9wLmhvcml6b250YWwgPSB2YWwudmFsdWU7XG4gICAgfVxuICAgIGVsc2UgaWYgKHZhbC50eXBlID09PSBcInZlcnRpY2FsXCIpIHtcbiAgICAgICAgbmFtZVByb3AudmVydGljYWwgPSB2YWwudmFsdWU7XG4gICAgfVxuICAgIGVsc2UgaWYgKHZhbC50eXBlID09PSBcInNwYWNpbmdcIikge1xuICAgICAgICBuYW1lUHJvcC5zcGFjaW5nID0gdmFsLnZhbHVlO1xuICAgIH1cbiAgICBub2RlLm5hbWUgPVxuICAgICAgICBuYW1lUHJvcC5ob3Jpem9udGFsICsgXCIgXCIgKyBuYW1lUHJvcC52ZXJ0aWNhbCArIFwiIFwiICsgbmFtZVByb3Auc3BhY2luZztcbn1cbmNvbnN0IFBhZGRpbmdIb3Jpem9udGFsU2xpZGVyID0gKG5vZGVzLCBtc2cpID0+IHtcbiAgICBsZXQgc2xpZGVyVmFsdWUgPSBtc2cuc2xpZGVyVmFsdWU7XG4gICAgbGV0IHNwYWNpbmcgPSBudWxsO1xuICAgIGxldCBzcGFjaW5nTmFtZSA9IG51bGw7XG4gICAgc3dpdGNoIChzbGlkZXJWYWx1ZSkge1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgc3BhY2luZyA9IDA7XG4gICAgICAgICAgICBzcGFjaW5nTmFtZSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCIxXCI6XG4gICAgICAgICAgICBzcGFjaW5nID0gNDtcbiAgICAgICAgICAgIHNwYWNpbmdOYW1lID0gXCIxXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIjJcIjpcbiAgICAgICAgICAgIHNwYWNpbmcgPSA4O1xuICAgICAgICAgICAgc3BhY2luZ05hbWUgPSBcIjJcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiM1wiOlxuICAgICAgICAgICAgc3BhY2luZyA9IDEyO1xuICAgICAgICAgICAgc3BhY2luZ05hbWUgPSBcIjNcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiNFwiOlxuICAgICAgICAgICAgc3BhY2luZyA9IDE2O1xuICAgICAgICAgICAgc3BhY2luZ05hbWUgPSBcIjRcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiNVwiOlxuICAgICAgICAgICAgc3BhY2luZyA9IDI0O1xuICAgICAgICAgICAgc3BhY2luZ05hbWUgPSBcIjVcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiNlwiOlxuICAgICAgICAgICAgc3BhY2luZyA9IDMyO1xuICAgICAgICAgICAgc3BhY2luZ05hbWUgPSBcIjZcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiN1wiOlxuICAgICAgICAgICAgc3BhY2luZyA9IDQwO1xuICAgICAgICAgICAgc3BhY2luZ05hbWUgPSBcIjdcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiOFwiOlxuICAgICAgICAgICAgc3BhY2luZyA9IDQ4O1xuICAgICAgICAgICAgc3BhY2luZ05hbWUgPSBcIjhcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IG5vZGUgb2Ygbm9kZXMpIHtcbiAgICAgICAgaWYgKG5vZGUpIHtcbiAgICAgICAgICAgIHBoTmFtZSA9IFwicGgtXCIgKyBzcGFjaW5nTmFtZTtcbiAgICAgICAgICAgIHVwZGF0ZU5hbWUoeyB0eXBlOiBcImhvcml6b250YWxcIiwgdmFsdWU6IHBoTmFtZSB9LCBub2RlKTtcbiAgICAgICAgICAgIGlmIChub2RlLnR5cGUgPT09IFwiR1JPVVBcIikge1xuICAgICAgICAgICAgICAgIG5vZGUuaG9yaXpvbnRhbFBhZGRpbmcgPSBzcGFjaW5nO1xuICAgICAgICAgICAgICAgIG5vZGUubGF5b3V0TW9kZSA9IFwiTk9ORVwiO1xuICAgICAgICAgICAgICAgIGlmIChcImNoaWxkcmVuXCIgaW4gbm9kZSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgZ3JvdXAgPSBub2RlLmNoaWxkcmVuWzBdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGxldCBzZXRBdXRvTGF5b3V0ID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgICAgICAgICBub2RlLmhvcml6b250YWxQYWRkaW5nID0gc3BhY2luZztcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiByZXNvbHZlKFwiZG9uZVwiKSwgNSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59O1xuY29uc3QgUGFkZGluZ1ZlcnRpY2FsU2xpZGVyID0gKG5vZGVzLCBtc2cpID0+IHtcbiAgICBsZXQgc2xpZGVyVmFsdWUgPSBtc2cuc2xpZGVyVmFsdWU7XG4gICAgbGV0IHNwYWNpbmcgPSBudWxsO1xuICAgIGxldCBzcGFjaW5nTmFtZSA9IG51bGw7XG4gICAgc3dpdGNoIChzbGlkZXJWYWx1ZSkge1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgc3BhY2luZyA9IDA7XG4gICAgICAgICAgICBzcGFjaW5nTmFtZSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCIxXCI6XG4gICAgICAgICAgICBzcGFjaW5nID0gNDtcbiAgICAgICAgICAgIHNwYWNpbmdOYW1lID0gXCIxXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIjJcIjpcbiAgICAgICAgICAgIHNwYWNpbmcgPSA4O1xuICAgICAgICAgICAgc3BhY2luZ05hbWUgPSBcIjJcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiM1wiOlxuICAgICAgICAgICAgc3BhY2luZyA9IDEyO1xuICAgICAgICAgICAgc3BhY2luZ05hbWUgPSBcIjNcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiNFwiOlxuICAgICAgICAgICAgc3BhY2luZyA9IDE2O1xuICAgICAgICAgICAgc3BhY2luZ05hbWUgPSBcIjRcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiNVwiOlxuICAgICAgICAgICAgc3BhY2luZyA9IDI0O1xuICAgICAgICAgICAgc3BhY2luZ05hbWUgPSBcIjVcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiNlwiOlxuICAgICAgICAgICAgc3BhY2luZyA9IDMyO1xuICAgICAgICAgICAgc3BhY2luZ05hbWUgPSBcIjZcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiN1wiOlxuICAgICAgICAgICAgc3BhY2luZyA9IDQwO1xuICAgICAgICAgICAgc3BhY2luZ05hbWUgPSBcIjdcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiOFwiOlxuICAgICAgICAgICAgc3BhY2luZyA9IDQ4O1xuICAgICAgICAgICAgc3BhY2luZ05hbWUgPSBcIjhcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IG5vZGUgb2Ygbm9kZXMpIHtcbiAgICAgICAgaWYgKG5vZGUpIHtcbiAgICAgICAgICAgIHB2TmFtZSA9IFwicHYtXCIgKyBzcGFjaW5nTmFtZTtcbiAgICAgICAgICAgIHVwZGF0ZU5hbWUoeyB0eXBlOiBcInZlcnRpY2FsXCIsIHZhbHVlOiBwdk5hbWUgfSwgbm9kZSk7XG4gICAgICAgICAgICBpZiAobm9kZS50eXBlID09PSBcIkdST1VQXCIpIHtcbiAgICAgICAgICAgICAgICBub2RlLnZlcnRpY2FsUGFkZGluZyA9IHNwYWNpbmc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBsZXQgc2V0QXV0b0xheW91dCA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS52ZXJ0aWNhbFBhZGRpbmcgPSBzcGFjaW5nO1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHJlc29sdmUoXCJkb25lXCIpLCA1KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn07XG5jb25zdCBJdGVtU3BhY2luZyA9IChub2RlcywgbXNnKSA9PiB7XG4gICAgbGV0IHNsaWRlclZhbHVlID0gbXNnLnNsaWRlclZhbHVlO1xuICAgIGxldCBzcGFjaW5nID0gbnVsbDtcbiAgICBsZXQgc3BhY2luZ05hbWUgPSBudWxsO1xuICAgIHN3aXRjaCAoc2xpZGVyVmFsdWUpIHtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHNwYWNpbmcgPSAwO1xuICAgICAgICAgICAgc3BhY2luZ05hbWUgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiMVwiOlxuICAgICAgICAgICAgc3BhY2luZyA9IDQ7XG4gICAgICAgICAgICBzcGFjaW5nTmFtZSA9IFwiMVwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCIyXCI6XG4gICAgICAgICAgICBzcGFjaW5nID0gODtcbiAgICAgICAgICAgIHNwYWNpbmdOYW1lID0gXCIyXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIjNcIjpcbiAgICAgICAgICAgIHNwYWNpbmcgPSAxMjtcbiAgICAgICAgICAgIHNwYWNpbmdOYW1lID0gXCIzXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIjRcIjpcbiAgICAgICAgICAgIHNwYWNpbmcgPSAxMjtcbiAgICAgICAgICAgIHNwYWNpbmdOYW1lID0gXCI0XCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIjVcIjpcbiAgICAgICAgICAgIHNwYWNpbmcgPSAyNDtcbiAgICAgICAgICAgIHNwYWNpbmdOYW1lID0gXCI1XCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIjZcIjpcbiAgICAgICAgICAgIHNwYWNpbmcgPSAzMjtcbiAgICAgICAgICAgIHNwYWNpbmdOYW1lID0gXCI2XCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIjdcIjpcbiAgICAgICAgICAgIHNwYWNpbmcgPSA0MDtcbiAgICAgICAgICAgIHNwYWNpbmdOYW1lID0gXCI3XCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIjhcIjpcbiAgICAgICAgICAgIHNwYWNpbmcgPSA0ODtcbiAgICAgICAgICAgIHNwYWNpbmdOYW1lID0gXCI4XCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG4gICAgZm9yIChjb25zdCBub2RlIG9mIG5vZGVzKSB7XG4gICAgICAgIG5vZGUuaXRlbVNwYWNpbmcgPSBzcGFjaW5nO1xuICAgICAgICBzcE5hbWUgPSBcInNwLVwiICsgc3BhY2luZ05hbWU7XG4gICAgICAgIHVwZGF0ZU5hbWUoeyB0eXBlOiBcInNwYWNpbmdcIiwgdmFsdWU6IHNwTmFtZSB9LCBub2RlKTtcbiAgICB9XG59O1xuZXhwb3J0IHsgUGFkZGluZ0hvcml6b250YWxTbGlkZXIsIFBhZGRpbmdWZXJ0aWNhbFNsaWRlciwgSXRlbVNwYWNpbmcgfTtcbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IHsgRGFya1VpQ29sb3JzLCBMaWdodFVpQ29sb3JzIH0gZnJvbSBcIi4uL3RoZW1lLXN0eWxlcy9jb2xvcnNcIjtcbmltcG9ydCB7IERhcmtVaUVmZmVjdHMsIExpZ2h0VWlFZmZlY3RzIH0gZnJvbSBcIi4uL3RoZW1lLXN0eWxlcy9lZmZlY3RzXCI7XG4vLyBGaWxsXG5jb25zdCBzd2FwRmlsbCA9IChub2RlLCBhbGxMaWdodFRva2VucywgYWxsRGFya1Rva2VucykgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgbGV0IGhhc0ZpbGxTdHlsZSA9IG5vZGUuZmlsbFN0eWxlSWQgJiYgbm9kZS5maWxsU3R5bGVJZC5sZW5ndGggPiAwO1xuICAgIGlmIChoYXNGaWxsU3R5bGUpIHtcbiAgICAgICAgbGV0IG5vZGVGaWxsU3R5bGVJZCA9IG5vZGUuZmlsbFN0eWxlSWQ7XG4gICAgICAgIGxldCBub2RlRmlsbFBhaW50U3R5bGUgPSBmaWdtYS5nZXRTdHlsZUJ5SWQobm9kZUZpbGxTdHlsZUlkKTtcbiAgICAgICAgbGV0IG5vZGVGaWxsUGFpbnROYW1lID0gbm9kZUZpbGxQYWludFN0eWxlLm5hbWU7XG4gICAgICAgIGxldCBzd2FwcGVkTm9kZUZpbGxOYW1lO1xuICAgICAgICBsZXQgbm9kZUZpbGxQYWludElzTGlnaHRNb2RlID0gbm9kZUZpbGxQYWludE5hbWUuaW5jbHVkZXMoXCJsaWdodCB1aVwiKTtcbiAgICAgICAgaWYgKG5vZGVGaWxsUGFpbnRJc0xpZ2h0TW9kZSkge1xuICAgICAgICAgICAgc3dhcHBlZE5vZGVGaWxsTmFtZSA9IG5vZGVGaWxsUGFpbnROYW1lLnJlcGxhY2UoXCJsaWdodCB1aS9cIiwgXCJkYXJrIHVpL1wiKTtcbiAgICAgICAgICAgIGxldCBmaWx0ZXJlZCA9IGFsbERhcmtUb2tlbnMuZmluZCgoaXRlbSkgPT4gaXRlbS5uYW1lID09PSBzd2FwcGVkTm9kZUZpbGxOYW1lKTtcbiAgICAgICAgICAgIG5vZGUuZmlsbFN0eWxlSWQgPSBmaWx0ZXJlZC5pZDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHN3YXBwZWROb2RlRmlsbE5hbWUgPSBub2RlRmlsbFBhaW50TmFtZS5yZXBsYWNlKFwiZGFyayB1aS9cIiwgXCJsaWdodCB1aS9cIik7XG4gICAgICAgICAgICBsZXQgZmlsdGVyZWQgPSBhbGxMaWdodFRva2Vucy5maW5kKChpdGVtKSA9PiBpdGVtLm5hbWUgPT09IHN3YXBwZWROb2RlRmlsbE5hbWUpO1xuICAgICAgICAgICAgbm9kZS5maWxsU3R5bGVJZCA9IGZpbHRlcmVkLmlkO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm47XG4gICAgfVxufSk7XG4vLyBTdHJva2VzXG5jb25zdCBzd2FwU3Ryb2tlID0gKG5vZGUsIGFsbExpZ2h0VG9rZW5zLCBhbGxEYXJrVG9rZW5zKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICBsZXQgaGFzU3Ryb2tlU3R5bGUgPSBub2RlLnN0cm9rZVN0eWxlSWQgJiYgbm9kZS5zdHJva2VTdHlsZUlkLmxlbmd0aCA+IDA7XG4gICAgaWYgKGhhc1N0cm9rZVN0eWxlKSB7XG4gICAgICAgIGxldCBub2RlU3Ryb2tlU3R5bGVJZCA9IG5vZGUuc3Ryb2tlU3R5bGVJZDtcbiAgICAgICAgbGV0IG5vZGVTdHJva2VQYWludFN0eWxlID0gZmlnbWEuZ2V0U3R5bGVCeUlkKG5vZGVTdHJva2VTdHlsZUlkKTtcbiAgICAgICAgbGV0IG5vZGVTdHJva2VQYWludE5hbWUgPSBub2RlU3Ryb2tlUGFpbnRTdHlsZS5uYW1lO1xuICAgICAgICBsZXQgc3dhcHBlZE5vZGVTdHJva2VOYW1lO1xuICAgICAgICBsZXQgbm9kZVN0cm9rZVBhaW50SXNMaWdodE1vZGUgPSBub2RlU3Ryb2tlUGFpbnROYW1lLmluY2x1ZGVzKFwibGlnaHQgdWlcIik7XG4gICAgICAgIGlmIChub2RlU3Ryb2tlUGFpbnRJc0xpZ2h0TW9kZSkge1xuICAgICAgICAgICAgc3dhcHBlZE5vZGVTdHJva2VOYW1lID0gbm9kZVN0cm9rZVBhaW50TmFtZS5yZXBsYWNlKFwibGlnaHQgdWkvXCIsIFwiZGFyayB1aS9cIik7XG4gICAgICAgICAgICBsZXQgZmlsdGVyZWQgPSBhbGxEYXJrVG9rZW5zLmZpbmQoKGl0ZW0pID0+IGl0ZW0ubmFtZSA9PT0gc3dhcHBlZE5vZGVTdHJva2VOYW1lKTtcbiAgICAgICAgICAgIG5vZGUuc3Ryb2tlU3R5bGVJZCA9IGZpbHRlcmVkLmlkO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc3dhcHBlZE5vZGVTdHJva2VOYW1lID0gbm9kZVN0cm9rZVBhaW50TmFtZS5yZXBsYWNlKFwiZGFyayB1aS9cIiwgXCJsaWdodCB1aS9cIik7XG4gICAgICAgICAgICBsZXQgZmlsdGVyZWQgPSBhbGxMaWdodFRva2Vucy5maW5kKChpdGVtKSA9PiBpdGVtLm5hbWUgPT09IHN3YXBwZWROb2RlU3Ryb2tlTmFtZSk7XG4gICAgICAgICAgICBub2RlLnN0cm9rZVN0eWxlSWQgPSBmaWx0ZXJlZC5pZDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbn0pO1xuLy8gRWZmZWN0c1xuY29uc3Qgc3dhcEVmZmVjdHMgPSAobm9kZSwgYWxsTGlnaHRFZmZlY3RzLCBhbGxEYXJrRWZmZWN0cykgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgbGV0IGhhc0VmZmVjdHMgPSBub2RlLmVmZmVjdFN0eWxlSWQgJiYgbm9kZS5lZmZlY3RTdHlsZUlkLmxlbmd0aCA+IDA7XG4gICAgaWYgKGhhc0VmZmVjdHMpIHtcbiAgICAgICAgbGV0IG5vZGVFZmZlY3RTdHlsZUlkID0gbm9kZS5lZmZlY3RTdHlsZUlkO1xuICAgICAgICBsZXQgbm9kZUVmZmVjdFN0eWxlID0gZmlnbWEuZ2V0U3R5bGVCeUlkKG5vZGVFZmZlY3RTdHlsZUlkKTtcbiAgICAgICAgbGV0IG5vZGVFZmZlY3RTdHlsZU5hbWUgPSBub2RlRWZmZWN0U3R5bGUubmFtZTtcbiAgICAgICAgbGV0IHN3YXBwZWROb2RlRWZmZWN0TmFtZTtcbiAgICAgICAgbGV0IG5vZGVFZmZlY3RTdHlsZU5hbWVJc0xpZ2h0ID0gbm9kZUVmZmVjdFN0eWxlTmFtZS5pbmNsdWRlcyhcImxpZ2h0IHVpXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhzd2FwcGVkTm9kZUVmZmVjdE5hbWUpO1xuICAgICAgICBpZiAobm9kZUVmZmVjdFN0eWxlTmFtZUlzTGlnaHQpIHtcbiAgICAgICAgICAgIHN3YXBwZWROb2RlRWZmZWN0TmFtZSA9IG5vZGVFZmZlY3RTdHlsZU5hbWUucmVwbGFjZShcImxpZ2h0IHVpL1wiLCBcImRhcmsgdWkvXCIpO1xuICAgICAgICAgICAgbGV0IGZpbHRlcmVkID0gYWxsRGFya0VmZmVjdHMuZmluZCgoaXRlbSkgPT4gaXRlbS5uYW1lID09PSBzd2FwcGVkTm9kZUVmZmVjdE5hbWUpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZmlsdGVyZWQpO1xuICAgICAgICAgICAgbm9kZS5lZmZlY3RTdHlsZUlkID0gZmlsdGVyZWQuaWQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzd2FwcGVkTm9kZUVmZmVjdE5hbWUgPSBub2RlRWZmZWN0U3R5bGVOYW1lLnJlcGxhY2UoXCJkYXJrIHVpL1wiLCBcImxpZ2h0IHVpL1wiKTtcbiAgICAgICAgICAgIGxldCBmaWx0ZXJlZCA9IGFsbExpZ2h0RWZmZWN0cy5maW5kKChpdGVtKSA9PiBpdGVtLm5hbWUgPT09IHN3YXBwZWROb2RlRWZmZWN0TmFtZSk7XG4gICAgICAgICAgICBub2RlLmVmZmVjdFN0eWxlSWQgPSBmaWx0ZXJlZC5pZDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbn0pO1xuLy8gVGhlbWUgU3dhcFxuY29uc3QgVGhlbWVTd2FwID0gKG5vZGUpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIEdldEFsbExvY2FsUGFpbnRTdHlsZXMoKTtcbiAgICBsZXQgYWxsTGlnaHRUb2tlbnMgPSB5aWVsZCBmZXRjaEFsbExpZ2h0VG9rZW5zKCk7XG4gICAgbGV0IGFsbERhcmtUb2tlbnMgPSB5aWVsZCBmZXRjaEFsbERhcmtUb2tlbnMoKTtcbiAgICBsZXQgYWxsTGlnaHRFZmZlY3RzID0geWllbGQgZmV0Y2hBbGxMaWdodEVmZmVjdHMoKTtcbiAgICBsZXQgYWxsRGFya0VmZmVjdHMgPSB5aWVsZCBmZXRjaEFsbERhcmtFZmZlY3RzKCk7XG4gICAgY29uc3QgU3dhcCA9IChub2RlKSA9PiB7XG4gICAgICAgIHN3YXBGaWxsKG5vZGUsIGFsbExpZ2h0VG9rZW5zLCBhbGxEYXJrVG9rZW5zKTtcbiAgICAgICAgc3dhcFN0cm9rZShub2RlLCBhbGxMaWdodFRva2VucywgYWxsRGFya1Rva2Vucyk7XG4gICAgICAgIHN3YXBFZmZlY3RzKG5vZGUsIGFsbExpZ2h0RWZmZWN0cywgYWxsRGFya0VmZmVjdHMpO1xuICAgICAgICBpZiAoXCJjaGlsZHJlblwiIGluIG5vZGUpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgY2hpbGQgb2Ygbm9kZS5jaGlsZHJlbikge1xuICAgICAgICAgICAgICAgIGlmIChjaGlsZC5sb2NrZWQpIHtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIFN3YXAoY2hpbGQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIGRvIG5vdGhpbmdcbiAgICAgICAgfVxuICAgIH07XG4gICAgU3dhcChub2RlKTtcbiAgICAvLyBzd2FwU3Ryb2tlKG5vZGUpO1xuICAgIC8vIHN3YXBFZmZlY3RzKG5vZGUpO1xufSk7XG5leHBvcnQgeyBUaGVtZVN3YXAgfTtcbi8vIFJ1biB0aGlzIGluIHRva2VucyBmaWxlXG5jb25zdCBHZXRBbGxMb2NhbFBhaW50U3R5bGVzID0gKCkgPT4ge1xuICAgIGZ1bmN0aW9uIGNsb25lKHZhbCkge1xuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh2YWwpKTtcbiAgICB9XG4gICAgbGV0IGFsbFBhaW50U3R5bGVzID0gZmlnbWEuZ2V0TG9jYWxQYWludFN0eWxlcygpO1xuICAgIC8vIGNvbnNvbGUubG9nKGFsbFBhaW50U3R5bGVzKTtcbiAgICBsZXQgYWxsU3R5bGVzQXJyYXkgPSBbXTtcbiAgICBmb3IgKGNvbnN0IHBhaW50U3R5bGUgb2YgYWxsUGFpbnRTdHlsZXMpIHtcbiAgICAgICAgbGV0IGNvbG9yID0gY2xvbmUocGFpbnRTdHlsZS5wYWludHNbMF0pO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhjb2xvcik7XG4gICAgICAgIGxldCBjb2xvclJHQiA9IGNvbG9yLmNvbG9yO1xuICAgICAgICBsZXQgcmdiVG9JbnQgPSAodmFsdWUpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLmNlaWwodmFsdWUgKiAyNTUpO1xuICAgICAgICB9O1xuICAgICAgICBsZXQgcmdiYSA9IHtcbiAgICAgICAgICAgIHI6IHJnYlRvSW50KGNvbG9yUkdCLnIpLFxuICAgICAgICAgICAgZzogcmdiVG9JbnQoY29sb3JSR0IuZyksXG4gICAgICAgICAgICBiOiByZ2JUb0ludChjb2xvclJHQi5iKSxcbiAgICAgICAgICAgIGE6IGNvbG9yLm9wYWNpdHksXG4gICAgICAgIH07XG4gICAgICAgIGFsbFN0eWxlc0FycmF5LnB1c2goe1xuICAgICAgICAgICAgbmFtZTogcGFpbnRTdHlsZS5uYW1lLFxuICAgICAgICAgICAgc3R5bGVLZXk6IHBhaW50U3R5bGUua2V5LFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgY29uc29sZS5sb2coYWxsU3R5bGVzQXJyYXkpO1xufTtcbi8vIFJ1biB0aGlzIGluIHRva2VucyBmaWxlXG5jb25zdCBHZXRBbGxMb2NhbEVmZmVjdFN0eWxlcyA9ICgpID0+IHtcbiAgICBsZXQgYWxsRWZmZWN0U3R5bGVzID0gZmlnbWEuZ2V0TG9jYWxFZmZlY3RTdHlsZXMoKTtcbiAgICBsZXQgYWxsRWZmZWN0cyA9IFtdO1xuICAgIGZvciAoY29uc3QgZWZmZWN0U3R5bGUgb2YgYWxsRWZmZWN0U3R5bGVzKSB7XG4gICAgICAgIGFsbEVmZmVjdHMucHVzaCh7IG5hbWU6IGVmZmVjdFN0eWxlLm5hbWUsIHN0eWxlS2V5OiBlZmZlY3RTdHlsZS5rZXkgfSk7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKGFsbEVmZmVjdHMpO1xufTtcbmNvbnN0IGZldGNoQWxsTGlnaHRUb2tlbnMgPSAoKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5hbGwoTGlnaHRVaUNvbG9ycy5tYXAoKGl0ZW0pID0+IGZpZ21hLmltcG9ydFN0eWxlQnlLZXlBc3luYyhpdGVtLnN0eWxlS2V5KSkpO1xufSk7XG5jb25zdCBmZXRjaEFsbExpZ2h0RWZmZWN0cyA9ICgpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIHJldHVybiBQcm9taXNlLmFsbChMaWdodFVpRWZmZWN0cy5tYXAoKGl0ZW0pID0+IGZpZ21hLmltcG9ydFN0eWxlQnlLZXlBc3luYyhpdGVtLnN0eWxlS2V5KSkpO1xufSk7XG5jb25zdCBmZXRjaEFsbERhcmtUb2tlbnMgPSAoKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5hbGwoRGFya1VpQ29sb3JzLm1hcCgoaXRlbSkgPT4gZmlnbWEuaW1wb3J0U3R5bGVCeUtleUFzeW5jKGl0ZW0uc3R5bGVLZXkpKSk7XG59KTtcbmNvbnN0IGZldGNoQWxsRGFya0VmZmVjdHMgPSAoKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5hbGwoRGFya1VpRWZmZWN0cy5tYXAoKGl0ZW0pID0+IGZpZ21hLmltcG9ydFN0eWxlQnlLZXlBc3luYyhpdGVtLnN0eWxlS2V5KSkpO1xufSk7XG4iLCJleHBvcnQgY29uc3QgcGFkZGluZ0hvcml6b250YWwgPSAoc3BhY2luZykgPT4ge1xuICBsZXQgZ3JpZHM7XG5cbiAgaWYgKHNwYWNpbmcgPT0gMCkge1xuICAgIGdyaWRzID0gW107XG4gIH0gZWxzZSB7XG4gICAgZ3JpZHMgPSBbXG4gICAgICB7XG4gICAgICAgIHBhdHRlcm46IFwiQ09MVU1OU1wiLFxuICAgICAgICB2aXNpYmxlOiB0cnVlLFxuICAgICAgICBjb2xvcjoge1xuICAgICAgICAgIHI6IDAsXG4gICAgICAgICAgZzogMC41LFxuICAgICAgICAgIGI6IDEsXG4gICAgICAgICAgYTogMC4wNSxcbiAgICAgICAgfSxcbiAgICAgICAgZ3V0dGVyU2l6ZTogMSxcbiAgICAgICAgYWxpZ25tZW50OiBcIlNUUkVUQ0hcIixcbiAgICAgICAgY291bnQ6IDEsXG4gICAgICAgIG9mZnNldDogc3BhY2luZyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdHRlcm46IFwiQ09MVU1OU1wiLFxuICAgICAgICB2aXNpYmxlOiB0cnVlLFxuICAgICAgICBjb2xvcjoge1xuICAgICAgICAgIHI6IDAsXG4gICAgICAgICAgZzogMSxcbiAgICAgICAgICBiOiAwLFxuICAgICAgICAgIGE6IDAuMixcbiAgICAgICAgfSxcbiAgICAgICAgZ3V0dGVyU2l6ZTogMSxcbiAgICAgICAgYWxpZ25tZW50OiBcIk1BWFwiLFxuICAgICAgICBjb3VudDogMSxcbiAgICAgICAgc2VjdGlvblNpemU6IHNwYWNpbmcsXG4gICAgICAgIG9mZnNldDogMCxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdHRlcm46IFwiQ09MVU1OU1wiLFxuICAgICAgICB2aXNpYmxlOiB0cnVlLFxuICAgICAgICBjb2xvcjoge1xuICAgICAgICAgIHI6IDAsXG4gICAgICAgICAgZzogMSxcbiAgICAgICAgICBiOiAwLFxuICAgICAgICAgIGE6IDAuMixcbiAgICAgICAgfSxcbiAgICAgICAgZ3V0dGVyU2l6ZTogMSxcbiAgICAgICAgYWxpZ25tZW50OiBcIk1JTlwiLFxuICAgICAgICBjb3VudDogMSxcbiAgICAgICAgc2VjdGlvblNpemU6IHNwYWNpbmcsXG4gICAgICAgIG9mZnNldDogMCxcbiAgICAgIH0sXG4gICAgXTtcbiAgfVxuXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgcmVzb2x2ZShncmlkcyk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IHBhZGRpbmdWZXJ0aWNhbCA9IChzcGFjaW5nKSA9PiB7XG4gIGxldCBncmlkcztcblxuICBpZiAoc3BhY2luZyA9PSAwKSB7XG4gICAgZ3JpZHMgPSBbXTtcbiAgfSBlbHNlIHtcbiAgICBncmlkcyA9IFtcbiAgICAgIHtcbiAgICAgICAgcGF0dGVybjogXCJST1dTXCIsXG4gICAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICAgIGNvbG9yOiB7XG4gICAgICAgICAgcjogMCxcbiAgICAgICAgICBnOiAwLjUsXG4gICAgICAgICAgYjogMSxcbiAgICAgICAgICBhOiAwLjA1LFxuICAgICAgICB9LFxuICAgICAgICBndXR0ZXJTaXplOiAxLFxuICAgICAgICBhbGlnbm1lbnQ6IFwiU1RSRVRDSFwiLFxuICAgICAgICBjb3VudDogMSxcbiAgICAgICAgb2Zmc2V0OiBzcGFjaW5nLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0dGVybjogXCJST1dTXCIsXG4gICAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICAgIGNvbG9yOiB7XG4gICAgICAgICAgcjogMCxcbiAgICAgICAgICBnOiAxLFxuICAgICAgICAgIGI6IDAsXG4gICAgICAgICAgYTogMC4yLFxuICAgICAgICB9LFxuICAgICAgICBndXR0ZXJTaXplOiAxLFxuICAgICAgICBhbGlnbm1lbnQ6IFwiTUFYXCIsXG4gICAgICAgIGNvdW50OiAxLFxuICAgICAgICBzZWN0aW9uU2l6ZTogc3BhY2luZyxcbiAgICAgICAgb2Zmc2V0OiAwLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0dGVybjogXCJST1dTXCIsXG4gICAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICAgIGNvbG9yOiB7XG4gICAgICAgICAgcjogMCxcbiAgICAgICAgICBnOiAxLFxuICAgICAgICAgIGI6IDAsXG4gICAgICAgICAgYTogMC4yLFxuICAgICAgICB9LFxuICAgICAgICBndXR0ZXJTaXplOiAxLFxuICAgICAgICBhbGlnbm1lbnQ6IFwiTUlOXCIsXG4gICAgICAgIGNvdW50OiAxLFxuICAgICAgICBzZWN0aW9uU2l6ZTogc3BhY2luZyxcbiAgICAgICAgb2Zmc2V0OiAwLFxuICAgICAgfSxcbiAgICBdO1xuICB9XG5cbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICByZXNvbHZlKGdyaWRzKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgYmFzZWxpbmVHcmlkcyA9IHtcbiAgcGF0dGVybjogXCJST1dTXCIsXG4gIHZpc2libGU6IHRydWUsXG4gIGNvbG9yOiB7XG4gICAgcjogMSxcbiAgICBnOiAwLFxuICAgIGI6IDAsXG4gICAgYTogMC4xMDAwMDAwMDE0OTAxMTYxMixcbiAgfSxcbiAgZ3V0dGVyU2l6ZTogNCxcbiAgYWxpZ25tZW50OiBcIk1JTlwiLFxuICBjb3VudDogSW5maW5pdHksXG4gIHNlY3Rpb25TaXplOiA0LFxuICBvZmZzZXQ6IDAsXG59O1xuXG5leHBvcnQgY29uc3QgbWF4V2lkdGhHcmlkcyA9IFtcbiAge1xuICAgIHBhdHRlcm46IFwiQ09MVU1OU1wiLFxuICAgIHZpc2libGU6IHRydWUsXG4gICAgY29sb3I6IHtcbiAgICAgIHI6IDEsXG4gICAgICBnOiAwLjcxOTk5OTk2OTAwNTU4NDcsXG4gICAgICBiOiAwLFxuICAgICAgYTogMC4yMDAwMDAwMDI5ODAyMzIyNCxcbiAgICB9LFxuICAgIGd1dHRlclNpemU6IDEwMjUsXG4gICAgYWxpZ25tZW50OiBcIlNUUkVUQ0hcIixcbiAgICBjb3VudDogMixcbiAgICBvZmZzZXQ6IDAsXG4gIH0sXG4gIHtcbiAgICBwYXR0ZXJuOiBcIkNPTFVNTlNcIixcbiAgICB2aXNpYmxlOiB0cnVlLFxuICAgIGNvbG9yOiB7XG4gICAgICByOiAwLFxuICAgICAgZzogMC41LFxuICAgICAgYjogMSxcbiAgICAgIGE6IDAuMSxcbiAgICB9LFxuICAgIGd1dHRlclNpemU6IDEsXG4gICAgYWxpZ25tZW50OiBcIkNFTlRFUlwiLFxuICAgIGNvdW50OiAxLFxuICAgIHNlY3Rpb25TaXplOiAxMDI1LFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IG1heFdpZHRoTGVmdEFsaWduZWRHcmlkcyA9IFtcbiAge1xuICAgIHBhdHRlcm46IFwiQ09MVU1OU1wiLFxuICAgIHZpc2libGU6IHRydWUsXG4gICAgY29sb3I6IHtcbiAgICAgIHI6IDAsXG4gICAgICBnOiAwLjUsXG4gICAgICBiOiAxLFxuICAgICAgYTogMC4wNSxcbiAgICB9LFxuICAgIGd1dHRlclNpemU6IDEsXG4gICAgYWxpZ25tZW50OiBcIk1JTlwiLFxuICAgIGNvdW50OiAxLFxuICAgIHNlY3Rpb25TaXplOiAxMDI1LFxuICAgIG9mZnNldDogMCxcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBnZXRNYXhXaWR0aEdyaWRzID0gKCkgPT4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIHJlc29sdmUobWF4V2lkdGhHcmlkcyk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGNvbHVtbkdyaWRzID0gW1xuICB7XG4gICAgcGF0dGVybjogXCJDT0xVTU5TXCIsXG4gICAgdmlzaWJsZTogdHJ1ZSxcbiAgICBjb2xvcjoge1xuICAgICAgcjogMC44Mjk5OTk5MjM3MDYwNTQ3LFxuICAgICAgZzogMCxcbiAgICAgIGI6IDEsXG4gICAgICBhOiAwLjEsXG4gICAgfSxcbiAgICBndXR0ZXJTaXplOiAxNixcbiAgICBhbGlnbm1lbnQ6IFwiU1RSRVRDSFwiLFxuICAgIGNvdW50OiAxMixcbiAgICBvZmZzZXQ6IDAsXG4gIH0sXG5dO1xuIiwiZXhwb3J0IGNvbnN0IExpZ2h0VWlDb2xvcnMgPSBbXG4gIHtcbiAgICBuYW1lOiBcImxpZ2h0IHVpL2ludGVudGlvbnMvcHJpbWFyeS5tYWluXCIsXG4gICAgc3R5bGVLZXk6IFwiY2YwYzhlODhlYjY1YjgwNDlmZWNhNjBhYzgzZTFkZTNkM2FiNmU4YlwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJsaWdodCB1aS9pbnRlbnRpb25zL3ByaW1hcnkubWFpbi41MFwiLFxuICAgIHN0eWxlS2V5OiBcImEzZWVlYmFkNWY5ZjAzN2FjOTNhOTVjOTc4YWM4Y2M4YjdjY2ZhMzdcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwibGlnaHQgdWkvaW50ZW50aW9ucy9wcmltYXJ5LmRhcmtcIixcbiAgICBzdHlsZUtleTogXCJkYTkzODY5OGM5ZDIyMzIyMWQ2M2M3YzU1MDFhOTA1N2EwZDVmNmZiXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImxpZ2h0IHVpL2ludGVudGlvbnMvcHJpbWFyeS5saWdodFwiLFxuICAgIHN0eWxlS2V5OiBcIjBlMmFiZTM4YzE5NTAxYmVkYmEwNjcwNzRiOWZmNTljYTNhNDkxNGJcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwibGlnaHQgdWkvaW50ZW50aW9ucy9lcnJvci5tYWluXCIsXG4gICAgc3R5bGVLZXk6IFwiNzk4Y2I4Zjg5OGFiMmE1MDhhN2JhNDkxZDg5OTAxMWZkYTg5NjU3N1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJsaWdodCB1aS9pbnRlbnRpb25zL2Vycm9yLm1haW4uNTBcIixcbiAgICBzdHlsZUtleTogXCI2NTEwMDkwMmU3MzE5MmEzMDU0ZjZhYmU1OGE3YzQ0MTdhMDYzOTg0XCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImxpZ2h0IHVpL2ludGVudGlvbnMvZXJyb3IuZGFya1wiLFxuICAgIHN0eWxlS2V5OiBcIjEyNzc2NDU2ZTY4YWRmNGFiNWUzOTE3OTdjM2M4NGU5MmIwZjg2YzJcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwibGlnaHQgdWkvaW50ZW50aW9ucy9lcnJvci5saWdodFwiLFxuICAgIHN0eWxlS2V5OiBcImQzNWRhYmMzZWU3ZjViZTE4YWMwZDJhZWI3NGM3MmJhYWE4YmJjYTdcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwibGlnaHQgdWkvaW50ZW50aW9ucy93YXJuaW5nLm1haW5cIixcbiAgICBzdHlsZUtleTogXCJmMjdhNjBkZjhjMTYyMTg1ZWEyNDcyYTgwMWIyNzFlZjY2MmMwNDI5XCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImxpZ2h0IHVpL2ludGVudGlvbnMvd2FybmluZy5tYWluLjUwXCIsXG4gICAgc3R5bGVLZXk6IFwiZDZmMDk0YjRhYWRkMzNkYzY0MjA5NTgyOTdjNGI4OGJjMjk0OTEzNVwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJsaWdodCB1aS9pbnRlbnRpb25zL3dhcm5pbmcuZGFya1wiLFxuICAgIHN0eWxlS2V5OiBcIjYxNWQ2ZDVjYWM0ODU1ZTk4MWM4Yjk0MmI5ODZlZTcwNWI1NjhiMjhcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwibGlnaHQgdWkvaW50ZW50aW9ucy93YXJuaW5nLmxpZ2h0XCIsXG4gICAgc3R5bGVLZXk6IFwiZDRjMzAxMzVmNGMxMmM3ZGY0NDQyMjIyMTE2YTllYjdjZWJmNjViZVwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJsaWdodCB1aS9pbnRlbnRpb25zL3N1Y2Nlc3MubWFpblwiLFxuICAgIHN0eWxlS2V5OiBcImU0YWE0MWU4YmY1MmY5NGVmNWZjZTM2NjlmNTEwYWYzY2I3OWM1YTdcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwibGlnaHQgdWkvaW50ZW50aW9ucy9zdWNjZXNzLm1haW4uNTBcIixcbiAgICBzdHlsZUtleTogXCI5M2Y4Y2IwYWM1NDAyYzkyODZmMjBlOTRhMmVhMWQwYjA0YTAwZDlmXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImxpZ2h0IHVpL2ludGVudGlvbnMvc3VjY2Vzcy5kYXJrXCIsXG4gICAgc3R5bGVLZXk6IFwiZDk4ODNiNTNjMjUzOWJmMWUxMDY4MjA1ZmUxZDA1OWQ1ODMxNWU0ZlwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJsaWdodCB1aS9pbnRlbnRpb25zL3N1Y2Nlc3MubGlnaHRcIixcbiAgICBzdHlsZUtleTogXCI1MjdmNjhjZTdjY2JhZDgxNDU2NGY0N2Y4OGJkZWFkYTgwNzc1Mzc3XCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImxpZ2h0IHVpL3R5cG9ncmFwaHkvdGV4dC5wcmltYXJ5XCIsXG4gICAgc3R5bGVLZXk6IFwiOGYwNWM2M2RlN2YxMDBiMmJkOGZhZDdiOGJkNzE0ODliNjM3YzA2N1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJsaWdodCB1aS90eXBvZ3JhcGh5L3RleHQuc2Vjb25kYXJ5XCIsXG4gICAgc3R5bGVLZXk6IFwiOTcwNjNhNWY2MmMzNTRlNmFlMDkxOWQ1MGI2OGQwYmFkYjRhMTIyZVwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJsaWdodCB1aS90eXBvZ3JhcGh5L3RleHQuZGlzYWJsZWRcIixcbiAgICBzdHlsZUtleTogXCJhODA5Zjc1ZTE0ZmJlNjI5NjI3MmU4NTMxMTA2ZjZjYzRjNjkyNTUzXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImxpZ2h0IHVpL3R5cG9ncmFwaHkvdGV4dC5jb250cmFzdFRleHQucHJpbWFyeVwiLFxuICAgIHN0eWxlS2V5OiBcImIyOGE3ZmNkZDI0NzMyM2Q3YmE5OTk2MWM5NjA4Y2Y4Mzc4YmFkYTFcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwibGlnaHQgdWkvdHlwb2dyYXBoeS90ZXh0LmNvbnRyYXN0VGV4dC5lcnJvclwiLFxuICAgIHN0eWxlS2V5OiBcImM0MmM1ZjE5OTAzOTBjNDEzYWU2MjkyNWU5YWYwZDUxYmYzMmM5NDVcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwibGlnaHQgdWkvdHlwb2dyYXBoeS90ZXh0LmNvbnRyYXN0VGV4dC53YXJuaW5nXCIsXG4gICAgc3R5bGVLZXk6IFwiZWVjZDgyY2NhYWU5ODg2MjRjNDVmMjgyOTY1NjQwMzdkYTg1Y2MxYVwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJsaWdodCB1aS90eXBvZ3JhcGh5L3RleHQuY29udHJhc3RUZXh0LnN1Y2Nlc3NcIixcbiAgICBzdHlsZUtleTogXCJkN2RiYWVmNjZhOTMyZmYyNzZmNmY0YWE1MTk4NWEwNTlkZWRmYmY4XCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImxpZ2h0IHVpL3R5cG9ncmFwaHkvdGV4dC5hY3Rpb24uZGlzYWJsZWRcIixcbiAgICBzdHlsZUtleTogXCJmODFhMWY3NDg3MDMxNjk4ZDE1YzIzOTRlNGM3NGZjYzllY2NjMjk5XCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImxpZ2h0IHVpL3R5cG9ncmFwaHkvdGV4dC5jb250cmFzdFRleHQuY29tcGxpYW50XCIsXG4gICAgc3R5bGVLZXk6IFwiY2E4ZTg2OTU5MmJkMGMzYjk2ODA2YmMxMjQwYzVmNGJkZmYzOGIxZFwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJsaWdodCB1aS90eXBvZ3JhcGh5L3RleHQuY29udHJhc3RUZXh0Lm5vbkNvbXBsaWFudFwiLFxuICAgIHN0eWxlS2V5OiBcIjZjZDYyODg5YzZiZWE2N2ZhNmUyZjg0ZmE1ODE0ZjFmMjE3ZGUzYjhcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwibGlnaHQgdWkvdHlwb2dyYXBoeS90ZXh0LmNvbnRyYXN0VGV4dC5taXNzZWRcIixcbiAgICBzdHlsZUtleTogXCI3MmQ1OWM4OTkxODJiNDY0NzEzMDc4YWU4Y2JjYTZjN2M0NTkxN2M3XCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImxpZ2h0IHVpL3R5cG9ncmFwaHkvdGV4dC5jb250cmFzdFRleHQucHJlbWl1bVwiLFxuICAgIHN0eWxlS2V5OiBcIjFmMDYzOGFkNjc3MmE1YjUwNTViMjI1ODJjYTRlN2NmY2Y0MDA4NjlcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwibGlnaHQgdWkvdHlwb2dyYXBoeS90ZXh0LmNvbnRyYXN0VGV4dC5tZXNzYWdlXCIsXG4gICAgc3R5bGVLZXk6IFwiODNiZTJkMWQ2ZjUwYjM5NjI2NDcxMGUwN2JlMTAwMTg2N2U0OTgyNVwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJsaWdodCB1aS90eXBvZ3JhcGh5L3RleHQuY29udHJhc3RUZXh0Lm5hdmlnYXRpb25cIixcbiAgICBzdHlsZUtleTogXCJhNmYwNzhiNzg5MDQxYTI2ZTBmMDk4Y2FlMGQ2NDA5NTdmMTU1NWVlXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImxpZ2h0IHVpL2J1dHRvbnMvYWN0aW9uLmRpc2FibGVkQmFja2dyb3VuZFwiLFxuICAgIHN0eWxlS2V5OiBcIjczYjE1ZTNhNzllZWVhNzU3MjgzYTQ0Y2Y3MTEzMTMwNWNiYTIzOTlcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwibGlnaHQgdWkvYmFja2dyb3VuZC9iYWNrZ3JvdW5kLmRlZmF1bHRcIixcbiAgICBzdHlsZUtleTogXCI5MDNlNWJmMjc0MTM5ZWViOWY0OTY4YTllZjA4ZWMwNWVhZjBiMjc0XCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImxpZ2h0IHVpL2JhY2tncm91bmQvYmFja2dyb3VuZC5wYXBlclwiLFxuICAgIHN0eWxlS2V5OiBcIjIzZTk0ZmNlZWQ5YWNjYmRhNGRiOWM2NzJjNDNkMjFiNGQyODZlNGNcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwibGlnaHQgdWkvdXRpbGl0eS9kaXZpZGVyXCIsXG4gICAgc3R5bGVLZXk6IFwiZWU0ZGRjZTJlNTZhZDQ3YzQyMTZkNTgyN2EyODNiOTQzYTc5NGM3OFwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJsaWdodCB1aS91dGlsaXR5L2RpdmlkZXIuc3Ryb25nXCIsXG4gICAgc3R5bGVLZXk6IFwiMTdhZGJlNGUyN2JhOWIwODdmNjFhZjE0MmRlZWIwN2ZjMGMwMTU0MFwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJsaWdodCB1aS91dGlsaXR5L292ZXJsYXlcIixcbiAgICBzdHlsZUtleTogXCIxMWE0Nzc4MDE4YzhiYjIzNmFiZTBkODQ3YzczMWEyMTdlMmQ2ZDQ4XCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImxpZ2h0IHVpLzREUC9OTVwiLFxuICAgIHN0eWxlS2V5OiBcImRkY2JmNjhmYTVjMWVhYTcyMDc3MTY0MjcyYjdhZTViOWU1ZTRlZDdcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwibGlnaHQgdWkvNERQL0FDXCIsXG4gICAgc3R5bGVLZXk6IFwiMjIwZDM0OTM3NDdjZDhkOGJkYzVkNGEwZTc5NjVjMzZhM2M1MjM0OVwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJsaWdodCB1aS80RFAvTUFQXCIsXG4gICAgc3R5bGVLZXk6IFwiYWFhM2E1MzFhMTI0ZmE4NTRlMDlkMzk4Zjk4ZmI0N2I5ODlhOGE3MlwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJsaWdodCB1aS80RFAvRlRQXCIsXG4gICAgc3R5bGVLZXk6IFwiMjI0ZTQ5MTIwMjdiZTlmNzU2ODVmZDQwYjI1MjhiYTlmMzRmZTk1OFwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJsaWdodCB1aS9kYXRhL3Bvd2VyXCIsXG4gICAgc3R5bGVLZXk6IFwiMDc4MzRlMDE0NWUxYzAxNTQ2NTkzNDYyMDA2MTI4ZmE2YTUxZDZhY1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJsaWdodCB1aS9kYXRhL2hlYXJ0IHJhdGVcIixcbiAgICBzdHlsZUtleTogXCI1YTMzYjhiNGEwNWYxODk5NjAzNTQyNWUyYmE2YWY4MTc5MTIxMWNkXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImxpZ2h0IHVpL2RhdGEvY2FkZW5jZVwiLFxuICAgIHN0eWxlS2V5OiBcIjdkMjhiZTYzODcwOTYyNmI1OWYyODAyMDg2OTZmYjgxMzA2MjRjMGFcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwibGlnaHQgdWkvZGF0YS9zcGVlZFwiLFxuICAgIHN0eWxlS2V5OiBcImU5ZWFmNmI4NDRmZDFmNmYxN2Q2Y2IzZThlODRiMTllYzUwOTdhZGNcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwibGlnaHQgdWkvY29tcGxpYW5jZS9jb21wbGlhbnRcIixcbiAgICBzdHlsZUtleTogXCJiNTgwN2I3MmFjNGM3Njg1MjE0MGE5Y2E2OGI0Njk4NTY3MDUzZjExXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImxpZ2h0IHVpL2NvbXBsaWFuY2Uvbm9uQ29tcGxpYW50XCIsXG4gICAgc3R5bGVLZXk6IFwiOGY5ZDFiZjViMGQxY2UzNzUzYjEwZThjZGU2MjBhZWI2Y2NhZmYxMVwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJsaWdodCB1aS9jb21wbGlhbmNlL21pc3NlZFwiLFxuICAgIHN0eWxlS2V5OiBcImQ0NDQ2NWZmNjhiNWZlZDE5NmQyMTcwNTcwZDcyODVmNTIwMTViMjZcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwibGlnaHQgdWkvY29tcGxpYW5jZS91bnBhaXJlZFwiLFxuICAgIHN0eWxlS2V5OiBcIjE4YTc3M2JkM2MyMzZkYjZmNzY1NmQwNjgzYmJkZThiNGFkY2VmMjZcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwibGlnaHQgdWkvY29tcGxpYW5jZS9zY2hlZHVsZWRcIixcbiAgICBzdHlsZUtleTogXCI2ZGE4OGM1MGJkYjJjNGE2Y2RlOGFjZGNlYjRkOTRmN2U5MzVkY2QwXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImxpZ2h0IHVpL2ludGVyYWN0aW9uL2ludGVudGlvbnMvcHJpbWFyeS5tYWluLmhvdmVyXCIsXG4gICAgc3R5bGVLZXk6IFwiMzE0NGE5YWZiNTQxOTY1NThjNTMwYWI3MzZhYWMxMTQyMWZjNDI1NFwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJsaWdodCB1aS9pbnRlcmFjdGlvbi9pbnRlbnRpb25zL3ByaW1hcnkubWFpbi5wcmVzc2VkXCIsXG4gICAgc3R5bGVLZXk6IFwiNGViZTBlMjA5ZTM2YjViNWJmY2UwNDE1MmU5ZjE0OTI4NTQyYmFkYlwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJsaWdodCB1aS9pbnRlcmFjdGlvbi9pbnRlbnRpb25zL2Vycm9yLm1haW4uaG92ZXJcIixcbiAgICBzdHlsZUtleTogXCJkYTUxYWQyMzdmYjE5YjEwNmI4OGY1YTI5ZDk4OTM3YWRkYzNhMGIwXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImxpZ2h0IHVpL2ludGVyYWN0aW9uL2ludGVudGlvbnMvZXJyb3IubWFpbi5wcmVzc2VkXCIsXG4gICAgc3R5bGVLZXk6IFwiNzhmYmI5ODFlMmU1ZThiMzdmZDNlNmNlMmE5ZTVhODhiOTI0ZWQ3OFwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJsaWdodCB1aS9pbnRlcmFjdGlvbi9pbnRlbnRpb25zL3dhcm5pbmcubWFpbi5ob3ZlclwiLFxuICAgIHN0eWxlS2V5OiBcImE2ODJjYjczM2NkZTQyMzMzZDkwN2U3YTRiMGFjOWNlOGVmMjI2NDJcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwibGlnaHQgdWkvaW50ZXJhY3Rpb24vaW50ZW50aW9ucy93YXJuaW5nLm1haW4ucHJlc3NlZFwiLFxuICAgIHN0eWxlS2V5OiBcImYyMTFiODBhZGI2NzliYzFiMjA4NjBiNzUyOWY5MDRmMzA5ODI3ODBcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwibGlnaHQgdWkvaW50ZXJhY3Rpb24vaW50ZW50aW9ucy9zdWNjZXNzLm1haW4uaG92ZXJcIixcbiAgICBzdHlsZUtleTogXCIzYmExYmFlM2NjMDFmYjI0ZjUzYTQxODZhZTM0NTlhNzc0OTRmZTZhXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImxpZ2h0IHVpL2ludGVyYWN0aW9uL2ludGVudGlvbnMvc3VjY2Vzcy5tYWluLnByZXNzZWRcIixcbiAgICBzdHlsZUtleTogXCI3YzZiY2ZkMWRhOWZiYmY2YzVlMmJkZWQ2OTU4YzcwZWY1YWY4ZDBmXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImxpZ2h0IHVpL2ludGVyYWN0aW9uL2JhY2tncm91bmQvZGVmYXVsdC5ob3ZlclwiLFxuICAgIHN0eWxlS2V5OiBcIjc2NGU1ODE1OThkZGUyYWYzNTQ0NjA4MWZjMjNiZWFmMWQ3ZDQyZTFcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwibGlnaHQgdWkvaW50ZXJhY3Rpb24vYmFja2dyb3VuZC9kZWZhdWx0LnByZXNzZWRcIixcbiAgICBzdHlsZUtleTogXCI1MGE3M2ViY2IwNjEyYWQ1ZDE3MmJlYWIyMjc5YzlkNTMzMGJjMTBhXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImxpZ2h0IHVpL2ludGVyYWN0aW9uL2JhY2tncm91bmQvcGFwZXIuaG92ZXJcIixcbiAgICBzdHlsZUtleTogXCIyMmUzZDAyZDVmOGIxZDkyYmVhM2NhMGNjYWVkZWJjODM0ZDc0ZDg0XCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImxpZ2h0IHVpL2ludGVyYWN0aW9uL2JhY2tncm91bmQvcGFwZXIucHJlc3NlZFwiLFxuICAgIHN0eWxlS2V5OiBcImM0Y2ZlMWYzNzMwNDNlY2IwZmNhY2NiZjIyODA5NjRiNTMyMzdiMDBcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwibGlnaHQgdWkvaW50ZXJhY3Rpb24vc3BlY2lhbCB1c2UvcHJlbWl1bS5ob3ZlclwiLFxuICAgIHN0eWxlS2V5OiBcIjlhNjEyYTdmOTlhY2FlYWE4ODI1MDhiMjU0NmNlMTZiYTBlMmRmZWZcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwibGlnaHQgdWkvaW50ZXJhY3Rpb24vc3BlY2lhbCB1c2UvcHJlbWl1bS5wcmVzc2VkXCIsXG4gICAgc3R5bGVLZXk6IFwiZjVjMjRmNDRhZDQwYjkwYmZlMWE0MmZhZjE5NDNhYzFhMGJhMGVlMVwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJsaWdodCB1aS9pbnRlcmFjdGlvbi9zcGVjaWFsIHVzZS9uYXZpZ2F0aW9uLmhvdmVyXCIsXG4gICAgc3R5bGVLZXk6IFwiYWM1N2YwNTVhNzU1ZWE1ZGVlMGU4MDEyNmE0YTUxNTU5MWJkOTM0ZlwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJsaWdodCB1aS9pbnRlcmFjdGlvbi9zcGVjaWFsIHVzZS9uYXZpZ2F0aW9uLnByZXNzZWRcIixcbiAgICBzdHlsZUtleTogXCJhMDIxYTQwMjY3YjYyZjY5NDI4YjQ1ZjhiYzMzOGRkZDg2ODc1ZGQyXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImxpZ2h0IHVpL3NwZWNpYWwgdXNlL3ByZW1pdW1cIixcbiAgICBzdHlsZUtleTogXCI3OGNmNDAxOGU1YmM5ZmFkNjc2OThjOWE5YTNjNjVmZGU4ZjEyN2Y2XCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImxpZ2h0IHVpL3NwZWNpYWwgdXNlL21lc3NhZ2VcIixcbiAgICBzdHlsZUtleTogXCJjODVhOWI4NDYzNDlhM2E3ZDNlZWQzNThhY2JjMzJjMjcxNWM5ODJkXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImxpZ2h0IHVpL3NwZWNpYWwgdXNlL25hdmlnYXRpb25cIixcbiAgICBzdHlsZUtleTogXCI0OWNmNzdmMDNlOTBiNDA2YTk1M2E2YjQyOWRiYmJiYjBlNzJkNzc4XCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImxpZ2h0IHVpL3NwZWNpYWwgdXNlL3RpdGxlQmFyXCIsXG4gICAgc3R5bGVLZXk6IFwiODc2MzQzNzE0ZDE0N2QyM2Q0MWExOGNlYmE3ZWZkMTRiOTc1M2UxN1wiLFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IERhcmtVaUNvbG9ycyA9IFtcbiAge1xuICAgIG5hbWU6IFwiZGFyayB1aS9pbnRlbnRpb25zL3ByaW1hcnkubWFpblwiLFxuICAgIHN0eWxlS2V5OiBcIjJiNzkyZDg0YzlkZGI1YmI1NGI0ZTdjZTAwMGM1OTVjNzlkNzQ4Y2FcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiZGFyayB1aS9pbnRlbnRpb25zL3ByaW1hcnkuZGFya1wiLFxuICAgIHN0eWxlS2V5OiBcImI0M2JkMTExMjUwY2U3NGQ0OGNmZDcxYWMwMGMxYzFiNTU4YjAyZjBcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiZGFyayB1aS9pbnRlbnRpb25zL3ByaW1hcnkubGlnaHRcIixcbiAgICBzdHlsZUtleTogXCJmMzc3ZTc3NWM4NGYyNzgyNWY4YWM4MDFlNzhkODcwOGMwNWY4ZGYxXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImRhcmsgdWkvaW50ZW50aW9ucy9lcnJvci5tYWluXCIsXG4gICAgc3R5bGVLZXk6IFwiNzY3YzJhOTg5NzA2MmRlZTBkMGY2MzAwNDA2ZjZlNTU4NWY2ODRjN1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJkYXJrIHVpL2ludGVudGlvbnMvZXJyb3IuZGFya1wiLFxuICAgIHN0eWxlS2V5OiBcIjM0YTlhMzQ0YzI1NDE2ZDFhN2VhNmQ2NzMyZGIxM2U3YmM2Y2MzOTdcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiZGFyayB1aS9pbnRlbnRpb25zL2Vycm9yLmxpZ2h0XCIsXG4gICAgc3R5bGVLZXk6IFwiOTU3NjIwZTU0ZDE1YWZjZTU1MzE0Y2E1ODljN2ExZTkzNDM1YTIwMVwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJkYXJrIHVpL2ludGVudGlvbnMvd2FybmluZy5tYWluXCIsXG4gICAgc3R5bGVLZXk6IFwiODk0ZmJkMzM1ZDhiMGY2YjFjZWU0ZWM1YWM3YTA0NzkzOTdhNmI0Y1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJkYXJrIHVpL2ludGVudGlvbnMvd2FybmluZy5kYXJrXCIsXG4gICAgc3R5bGVLZXk6IFwiNDRiNDJhODUwNTI4NDEzODdiYzY3N2M1NzE5ODc0Y2YwMjA3Y2FiNVwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJkYXJrIHVpL2ludGVudGlvbnMvd2FybmluZy5saWdodFwiLFxuICAgIHN0eWxlS2V5OiBcImFjYzg4Yjc5MTk3OTJhMjEzMmMzNWRlZDYwMDRkMWRmMDNlYTdiYmJcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiZGFyayB1aS9pbnRlbnRpb25zL3N1Y2Nlc3MubWFpblwiLFxuICAgIHN0eWxlS2V5OiBcIjJkNDRmM2EwYzYwODc4Y2VmNWRiZDEwYzU5YTQxN2FhOTBjMGMxYmZcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiZGFyayB1aS9pbnRlbnRpb25zL3N1Y2Nlc3MuZGFya1wiLFxuICAgIHN0eWxlS2V5OiBcIjQzMjIyNzkxZjdkNWFmZGU4Yjg0YmRiN2E3Yzc1YTZhOGNjOWQzMzRcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiZGFyayB1aS9pbnRlbnRpb25zL3N1Y2Nlc3MubGlnaHRcIixcbiAgICBzdHlsZUtleTogXCI1MzYzYzE3MDkyM2FkZmUwOTMzMmMyYWI5NWY0Njg1NmZkNTZiNzJlXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImRhcmsgdWkvdHlwb2dyYXBoeS90ZXh0LnByaW1hcnlcIixcbiAgICBzdHlsZUtleTogXCIzZmRiZDQzZGQyNDYzYzY0Yjk0ZTBiODFhOTE2YTYwNmMwOGIwZjFjXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImRhcmsgdWkvdHlwb2dyYXBoeS90ZXh0LnNlY29uZGFyeVwiLFxuICAgIHN0eWxlS2V5OiBcIjlkMmU1MTFkOWEzMWViZDc2ZTMwMmFiMjVkMWU5OTVlNmE4M2FjMWNcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiZGFyayB1aS90eXBvZ3JhcGh5L3RleHQuZGlzYWJsZWRcIixcbiAgICBzdHlsZUtleTogXCJjOTg4ODNlMDdiZTgwYmU2YmNkMTg4MTRlYjI5YTg3Nzk3YTk5YzZhXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImRhcmsgdWkvdHlwb2dyYXBoeS90ZXh0LmNvbnRyYXN0VGV4dC5wcmltYXJ5XCIsXG4gICAgc3R5bGVLZXk6IFwiNWI2MjJkOWI1ZjE2ZmY0NzFiNjY2ZWU4ZDk1YTM1ZWI1ZTdlNDY0YlwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJkYXJrIHVpL3R5cG9ncmFwaHkvdGV4dC5jb250cmFzdFRleHQuZXJyb3JcIixcbiAgICBzdHlsZUtleTogXCJhYzM2YjYwYTY3ZjM2ZWQ4MDcwY2FhZWRkMDQ1NjAxMmExMGMyMmQ2XCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImRhcmsgdWkvdHlwb2dyYXBoeS90ZXh0LmNvbnRyYXN0VGV4dC53YXJuaW5nXCIsXG4gICAgc3R5bGVLZXk6IFwiNTljOWJmMmE0ZDZjMDRmZDkzYzFiOWFiY2M0Y2Y1MDFmY2FkYmIyMlwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJkYXJrIHVpL3R5cG9ncmFwaHkvdGV4dC5jb250cmFzdFRleHQuc3VjY2Vzc1wiLFxuICAgIHN0eWxlS2V5OiBcIjE5NzJkYzAwMWQzMWRlYzMyNmM4ZTkzN2Y4MzAyZWUzNWZiYjg1M2ZcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiZGFyayB1aS90eXBvZ3JhcGh5L3RleHQuYWN0aW9uLmRpc2FibGVkXCIsXG4gICAgc3R5bGVLZXk6IFwiN2Y3YTRlZTFmYmNiNjUyOWU2ZmI1NjRhMGY0ODgxODhiMGRjMmIzN1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJkYXJrIHVpL3R5cG9ncmFwaHkvdGV4dC5jb250cmFzdFRleHQuY29tcGxpYW50XCIsXG4gICAgc3R5bGVLZXk6IFwiYmZiMWNhNjhhZTBhNzNhMDU0MzkwYjZhZjBhNTZjOTEyNzFiODg1MlwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJkYXJrIHVpL3R5cG9ncmFwaHkvdGV4dC5jb250cmFzdFRleHQubm9uQ29tcGxpYW50XCIsXG4gICAgc3R5bGVLZXk6IFwiYzJjZDIxZjU1ZTIzMmU3MjY1NWEyN2RjZjVkZTA2ZDBkYTQ0YmY0ZVwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJkYXJrIHVpL3R5cG9ncmFwaHkvdGV4dC5jb250cmFzdFRleHQubWlzc2VkXCIsXG4gICAgc3R5bGVLZXk6IFwiN2I1ZjhkMzE5NzE1MTA0YmIzZDRhMTA3Nzg4ZWM1YmZhNmVhMzFkNFwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJkYXJrIHVpL3R5cG9ncmFwaHkvdGV4dC5jb250cmFzdFRleHQucHJlbWl1bVwiLFxuICAgIHN0eWxlS2V5OiBcIjk5MTEwODk2MjBiYWQyYWM3ZjdkOTVlOTU2ZDk5ZTQ5MzZiYmNhZjhcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiZGFyayB1aS90eXBvZ3JhcGh5L3RleHQuY29udHJhc3RUZXh0Lm1lc3NhZ2VcIixcbiAgICBzdHlsZUtleTogXCJkMDk4YTc1N2Y1NDQzNzg5Nzg2NTg3MmExNmZmZWI5Yjk5YWI5NWFlXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImRhcmsgdWkvdHlwb2dyYXBoeS90ZXh0LmNvbnRyYXN0VGV4dC5uYXZpZ2F0aW9uXCIsXG4gICAgc3R5bGVLZXk6IFwiZWI5M2M5MDllY2JmZmYyMjBlZTU5M2Q4ZmI2ZWFjYjZhMWQ4MTdjYlwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJkYXJrIHVpL2J1dHRvbnMvYWN0aW9uLmRpc2FibGVkQmFja2dyb3VuZFwiLFxuICAgIHN0eWxlS2V5OiBcIjIxNGFjNGRmNzk2YjUxYzBmNDI2MDI4ZDBmNDI2OGVmYTZlZTM2ODVcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiZGFyayB1aS9iYWNrZ3JvdW5kL2JhY2tncm91bmQuZGVmYXVsdFwiLFxuICAgIHN0eWxlS2V5OiBcIjE1ZjVmZmFjM2VjOTFiMjQwODk4MTM0MzlmZmFkZDFmOTk5NGIyOWNcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiZGFyayB1aS9iYWNrZ3JvdW5kL2JhY2tncm91bmQucGFwZXJcIixcbiAgICBzdHlsZUtleTogXCIyZjA2MGU3NDIyYThhZDE3YTAzN2EyNTBkMzY4Y2Y2NzFhZGMwNDY4XCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImRhcmsgdWkvdXRpbGl0eS9kaXZpZGVyXCIsXG4gICAgc3R5bGVLZXk6IFwiODRhYjBmMjk4ZWE4ZmNkMGI4MmFjODkyOThhZDUxMTQwY2E3Yjc1YVwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJkYXJrIHVpL3V0aWxpdHkvZGl2aWRlci5zdHJvbmdcIixcbiAgICBzdHlsZUtleTogXCJlOTM2MGExM2Y4NDUxNGVlNGIzOTc3ZDRiNjk0OWY5YmFiNjNjYjRmXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImRhcmsgdWkvdXRpbGl0eS9vdmVybGF5XCIsXG4gICAgc3R5bGVLZXk6IFwiMmIzODM2ZGVkMzgyZTMzYTk3MDRlZjBmMmY2YjE2ZmJmYmEyZDNjZVwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJkYXJrIHVpLzREUC9OTVwiLFxuICAgIHN0eWxlS2V5OiBcIjgyZDUwZjMwMTFkODE1OTAyZWQ0MzBkZjZkNzM0NWVjZGY5NDc2MWJcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiZGFyayB1aS80RFAvQUNcIixcbiAgICBzdHlsZUtleTogXCJlODE5M2FiZmQyZjcxNWU0OGI5Y2M3Y2U0YmM2Yjk1Yzg5N2FhMDRkXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImRhcmsgdWkvNERQL01BUFwiLFxuICAgIHN0eWxlS2V5OiBcImRmNTdmZWJjOGVmNzdkZDJjMzViZTJkMWI5NDBhZmI4MzMxNjY4YjRcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiZGFyayB1aS80RFAvRlRQXCIsXG4gICAgc3R5bGVLZXk6IFwiN2JiMDI4ZmY3ZDg3MzQ4NjY3OGI3YzY3NjRmYzUwZjM5ZTU3MWViNlwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJkYXJrIHVpL2RhdGEvcG93ZXJcIixcbiAgICBzdHlsZUtleTogXCI3M2QyMjhiNDY1Nzg4YzhlZjJkMTZiOTk5MTUxMmNiNzJjMDE0MDQzXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImRhcmsgdWkvZGF0YS9oZWFydCByYXRlXCIsXG4gICAgc3R5bGVLZXk6IFwiYzNmM2QwOTE3MzQwZDljYjEyZGIzNDQ4YzI2N2FjNTVkYTYzZDcxNVwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJkYXJrIHVpL2RhdGEvY2FkZW5jZVwiLFxuICAgIHN0eWxlS2V5OiBcIjJmYTkxNWIyOTQ1ZThhNzZhNzE0Mzg2ODExMzdkMjhjNjFmZTQyMTRcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiZGFyayB1aS9kYXRhL3NwZWVkXCIsXG4gICAgc3R5bGVLZXk6IFwiYjk3OWZjYjEwNGMyOTZmNzhmNDBiNjNhOWU3NGJlMTdlMmJiYmE1M1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJkYXJrIHVpL2NvbXBsaWFuY2UvY29tcGxpYW50XCIsXG4gICAgc3R5bGVLZXk6IFwiODA5MWU3ZWMxMDcwNTY3ODQ2NDQ2MjhkYjE3MzZiY2ZhYzYyZmVkMVwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJkYXJrIHVpL2NvbXBsaWFuY2Uvbm9uQ29tcGxpYW50XCIsXG4gICAgc3R5bGVLZXk6IFwiMTRlYzRiZGI0YzRiNjk4Y2ZiN2M1NDhmNzM4MmI3NDhlMjUwMjBkMlwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJkYXJrIHVpL2NvbXBsaWFuY2UvbWlzc2VkXCIsXG4gICAgc3R5bGVLZXk6IFwiNjU3OTVhYWVhZGFjZTI3OGM1Zjg2MDBjMzAzMjJiOTI3MTM2YzAyM1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJkYXJrIHVpL2NvbXBsaWFuY2Uvc2NoZWR1bGVkXCIsXG4gICAgc3R5bGVLZXk6IFwiYmNjMzI2OWViYjMxN2ViZDQ1ZDQ5NGRmZGNlODljYjkyY2M4Y2FmNFwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJkYXJrIHVpL2ludGVyYWN0aW9uL2ludGVudGlvbnMvcHJpbWFyeS5tYWluLmhvdmVyXCIsXG4gICAgc3R5bGVLZXk6IFwiOTk2ODdkMTM2NWRlZjcyZTcwZDQxYjAzZTUzNmY3MGMxZDMzZDk1NlwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJkYXJrIHVpL2ludGVyYWN0aW9uL2ludGVudGlvbnMvcHJpbWFyeS5tYWluLnByZXNzZWRcIixcbiAgICBzdHlsZUtleTogXCJkYWI5OTI4ZGE0YjFhOThiNWU0MzU2MTFmMDFiMzRiYzUxZmVjMThhXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImRhcmsgdWkvaW50ZXJhY3Rpb24vaW50ZW50aW9ucy9lcnJvci5tYWluLmhvdmVyXCIsXG4gICAgc3R5bGVLZXk6IFwiNGJmNjc3NzRlNjAwZjEyYTA5YTgxMGRkM2RkNDEzMzYzNGQxYWY5MlwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJkYXJrIHVpL2ludGVyYWN0aW9uL2ludGVudGlvbnMvZXJyb3IubWFpbi5wcmVzc2VkXCIsXG4gICAgc3R5bGVLZXk6IFwiMTEyZGRhOTJjZDUxNWMzMjBlZDkyY2YyM2M1YmRhNTgyZTNiMTljMVwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJkYXJrIHVpL2ludGVyYWN0aW9uL2ludGVudGlvbnMvd2FybmluZy5tYWluLnByZXNzZWRcIixcbiAgICBzdHlsZUtleTogXCI4YTY2NmVjZWYwMTIxZDU0NzllOGNmMTA3ZTY5N2QzZTc2ZDNmZTZkXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImRhcmsgdWkvaW50ZXJhY3Rpb24vaW50ZW50aW9ucy93YXJuaW5nLm1haW4uaG92ZXJcIixcbiAgICBzdHlsZUtleTogXCJkMzM0MDdkNjgwNWYzZGJhYmYzNGI5Nzg3OGU5NDJlMTA1ODJmY2VhXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImRhcmsgdWkvaW50ZXJhY3Rpb24vaW50ZW50aW9ucy9zdWNjZXNzLm1haW4uaG92ZXJcIixcbiAgICBzdHlsZUtleTogXCJhNGYxYmE2NmYxMmE2OTlmNGM2OGFjZGJlYTdmZDBhOTYxM2E0NWRlXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImRhcmsgdWkvaW50ZXJhY3Rpb24vaW50ZW50aW9ucy9zdWNjZXNzLm1haW4ucHJlc3NlZFwiLFxuICAgIHN0eWxlS2V5OiBcIjAwNjJkNTMzNDE3NzMyMjJmZmQ2MTRlYWIxNDhlNTI5MjE5NTc5ZjJcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiZGFyayB1aS9pbnRlcmFjdGlvbi9iYWNrZ3JvdW5kL2RlZmF1bHQuaG92ZXJcIixcbiAgICBzdHlsZUtleTogXCJkNzUxMDA5ZjY4YWZmYWI4ZTE3MGE3ZDQwMDEzNTZiMTc3MmYwZTUwXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImRhcmsgdWkvaW50ZXJhY3Rpb24vYmFja2dyb3VuZC9kZWZhdWx0LnByZXNzZWRcIixcbiAgICBzdHlsZUtleTogXCJjZDA0Nzc5NmU5NTI4NzNkOGZjODk5ODU4NmMxMzBlNDE2ZDMwNjMxXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImRhcmsgdWkvaW50ZXJhY3Rpb24vYmFja2dyb3VuZC9wYXBlci5ob3ZlclwiLFxuICAgIHN0eWxlS2V5OiBcImIzMzBiYWRjNmNlYTAyYjkwMTJhM2Y1ODFkZjZmMDBmMWZmNDg3NzdcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiZGFyayB1aS9pbnRlcmFjdGlvbi9iYWNrZ3JvdW5kL3BhcGVyLnByZXNzZWRcIixcbiAgICBzdHlsZUtleTogXCI2NWM1OGM3YjAzYTgzODFhMTI5ODNiY2QwYWRlYTFlZTE4NDYxM2EwXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImRhcmsgdWkvaW50ZXJhY3Rpb24vc3BlY2lhbCB1c2UvcHJlbWl1bS5ob3ZlclwiLFxuICAgIHN0eWxlS2V5OiBcIjQ4YzhiYzMxNGRmMjIzZTFhOGRlNGUxMGQwMDk5Y2Q5NzEwOTNkMWFcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiZGFyayB1aS9pbnRlcmFjdGlvbi9zcGVjaWFsIHVzZS9wcmVtaXVtLnByZXNzZWRcIixcbiAgICBzdHlsZUtleTogXCI1ZGVmNDZlOWU0NDNhYTlhZGRhNDI1YmUxNGNhNGFhYWIxZmNkMTA5XCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImRhcmsgdWkvaW50ZXJhY3Rpb24vc3BlY2lhbCB1c2UvbmF2aWdhdGlvbi5ob3ZlclwiLFxuICAgIHN0eWxlS2V5OiBcIjg1MmQ0ZjNmZDFjMWY5NWFmMWYyMThhNzhlOWFhM2U4YTg2YzYyZjJcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiZGFyayB1aS9pbnRlcmFjdGlvbi9zcGVjaWFsIHVzZS9uYXZpZ2F0aW9uLnByZXNzZWRcIixcbiAgICBzdHlsZUtleTogXCIyMDE4MzA4MTUzOGZlZmQ3MDI5MDA4MDA1ZTQ1Zjc1MDU5MjM1ZmEyXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImRhcmsgdWkvc3BlY2lhbCB1c2UvcHJlbWl1bVwiLFxuICAgIHN0eWxlS2V5OiBcIjNmOGQyZDgxYTBhYmI1YmMwYjhhNGQ1MjEyZjQ4YzExM2E5OGYxMGVcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiZGFyayB1aS9zcGVjaWFsIHVzZS9tZXNzYWdlXCIsXG4gICAgc3R5bGVLZXk6IFwiOWI2MjYxMDk3Njg0NmNiMzkzM2QyMGRkNTJmZjY2ODQ1NDY3OGFmN1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJkYXJrIHVpL3NwZWNpYWwgdXNlL25hdmlnYXRpb25cIixcbiAgICBzdHlsZUtleTogXCI4MzVkMGI5MjBiNTk5N2MwYjk3ZjczOTBhMDQzZTk0YjY1MzRhNTA2XCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImRhcmsgdWkvc3BlY2lhbCB1c2UvdGl0bGVCYXJcIixcbiAgICBzdHlsZUtleTogXCI2Mjk5M2YyOTRlMzVmNjdiY2Y1NGI1MTdkNTEzMzMwNTYyNGQ4YjliXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcInV0aWxpdHkvbWFza1wiLFxuICAgIHN0eWxlS2V5OiBcImQwNGRiMjZiZjg5NzM1MmY1Y2M0OWIzODU0ZmE2YjdlOTgxYjE4ZTZcIixcbiAgfSxcbl07XG4iLCJleHBvcnQgY29uc3QgTGlnaHRVaUVmZmVjdHMgPSBbXG4gIHtcbiAgICBuYW1lOiBcImxpZ2h0IHVpL3NoYWRvdy9lbGV2YXRpb24gNFwiLFxuICAgIHN0eWxlS2V5OiBcIjY5MjAyZmE4Y2M0ZjZjYzA1MTVjYzA4ZmRjYzk4ODQ1OWFmMjg3MzFcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwibGlnaHQgdWkvc2hhZG93L2VsZXZhdGlvbiA5XCIsXG4gICAgc3R5bGVLZXk6IFwiOGNjZWE5ZDUyM2NmOWRjMTNmZWU2OGYzOTJmM2Y5Y2MzMTg3YTQ1N1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJsaWdodCB1aS9zaGFkb3cvZWxldmF0aW9uIDE0XCIsXG4gICAgc3R5bGVLZXk6IFwiYzYxMjUzYzM4ZjZkMGQ5ZjNiMzAyYTc3YTM4MDdlMDUyZTljM2Y5MVwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJsaWdodCB1aS9mb2N1c1wiLFxuICAgIHN0eWxlS2V5OiBcImY5ZDUzOWY2NzAyYjcxMTE2NmI4OTc0M2U1OTcxMDFiZTYxNTNiOWNcIixcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBEYXJrVWlFZmZlY3RzID0gW1xuICB7XG4gICAgbmFtZTogXCJkYXJrIHVpL3NoYWRvdy9lbGV2YXRpb24gNFwiLFxuICAgIHN0eWxlS2V5OiBcImE4OWFiYmU2ZDY0ZjgyNGY2MmViYjFmNTRmNmYyOGE5MTA0OTAxOTVcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiZGFyayB1aS9zaGFkb3cvZWxldmF0aW9uIDlcIixcbiAgICBzdHlsZUtleTogXCI5ODc2MTkwNGJjYzlkMzhjODFlZTIzZTdiNDMyZDhjOTdlMjlmMGMxXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImRhcmsgdWkvc2hhZG93L2VsZXZhdGlvbiAxNFwiLFxuICAgIHN0eWxlS2V5OiBcIjIwOWI0NTFlNGY2OGY1YmYzYWRlMjRlZjM2YTEwYTYwOWNkYWUyMzlcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiZGFyayB1aS9mb2N1c1wiLFxuICAgIHN0eWxlS2V5OiBcIjkyY2JlMzZkNDQ4MGVmZTRiOTYxOGVjNmVjMWE0NDQ5MjQxZmJkZDZcIixcbiAgfSxcbl07XG4iXSwic291cmNlUm9vdCI6IiJ9