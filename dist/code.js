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
figma.ui.resize(320, 850);
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
const swapFill = (node) => __awaiter(void 0, void 0, void 0, function* () {
    let nodeFillStyleId = node.fillStyleId;
    let nodeFillPaintStyle = figma.getStyleById(nodeFillStyleId);
    let nodeFillPaintName = nodeFillPaintStyle.name;
    let swappedNodeFillName = null;
    let nodeFillPaintIsLightMode = nodeFillPaintName.includes("light ui");
    if (nodeFillPaintIsLightMode) {
        swappedNodeFillName = nodeFillPaintName.replace("light ui/", "dark ui/");
        for (const item of _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["DarkUiColors"]) {
            if (item.name === swappedNodeFillName) {
                figma.importStyleByKeyAsync(item.styleKey).then((resp) => {
                    node.fillStyleId = resp.id;
                });
            }
        }
    }
    else {
        swappedNodeFillName = nodeFillPaintName.replace("dark ui/", "light ui/");
        for (const item of _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["LightUiColors"]) {
            if (item.name === swappedNodeFillName) {
                figma.importStyleByKeyAsync(item.styleKey).then((resp) => {
                    node.fillStyleId = resp.id;
                });
            }
        }
    }
});
// Strokes
const swapStroke = (node) => __awaiter(void 0, void 0, void 0, function* () {
    let nodeStrokeStyleId = node.strokeStyleId;
    let nodeStrokePaintStyle = figma.getStyleById(nodeStrokeStyleId);
    let nodeStrokePaintName = nodeStrokePaintStyle.name;
    let swappedNodeStrokeName = null;
    let nodeStrokePaintIsLightMode = nodeStrokePaintName.includes("light ui");
    console.log("Stroke: " + nodeStrokePaintName);
    if (nodeStrokePaintIsLightMode) {
        swappedNodeStrokeName = nodeStrokePaintName.replace("light ui/", "dark ui/");
        for (const item of _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["DarkUiColors"]) {
            if (item.name === swappedNodeStrokeName) {
                figma.importStyleByKeyAsync(item.styleKey).then((resp) => {
                    node.strokeStyleId = resp.id;
                });
            }
            else {
                // Do nothing
            }
        }
    }
    else {
        swappedNodeStrokeName = nodeStrokePaintName.replace("dark ui/", "light ui/");
        for (const item of _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["LightUiColors"]) {
            if (item.name === swappedNodeStrokeName) {
                figma.importStyleByKeyAsync(item.styleKey).then((resp) => {
                    node.strokeStyleId = resp.id;
                });
            }
            else {
                // Do nothing
            }
        }
    }
});
// Effects
const swapEffects = (node) => __awaiter(void 0, void 0, void 0, function* () {
    let nodeEffectStyleId = node.effectStyleId;
    let nodeEffectStyle = figma.getStyleById(nodeEffectStyleId);
    let nodeEffectStyleName = nodeEffectStyle.name;
    let swappedNodeEffectName = null;
    let nodeEffectStyleNameIsLight = nodeEffectStyleName.includes("light ui");
    console.log("Effect: " + nodeEffectStyleName);
    if (nodeEffectStyleNameIsLight) {
        swappedNodeEffectName = nodeEffectStyleName.replace("light ui/", "dark ui/");
        for (const item of _theme_styles_effects__WEBPACK_IMPORTED_MODULE_1__["DarkUiEffects"]) {
            if (item.name === swappedNodeEffectName) {
                figma.importStyleByKeyAsync(item.styleKey).then((resp) => {
                    node.effectStyleId = resp.id;
                });
            }
            else {
                // do nothing
            }
        }
    }
    else {
        swappedNodeEffectName = nodeEffectStyleName.replace("dark ui/", "light ui/");
        for (const item of _theme_styles_effects__WEBPACK_IMPORTED_MODULE_1__["LightUiEffects"]) {
            if (item.name === swappedNodeEffectName) {
                figma.importStyleByKeyAsync(item.styleKey).then((resp) => {
                    node.effectStyleId = resp.id;
                });
            }
            else {
                // Do nothing
            }
        }
    }
});
// Theme Swap
const ThemeSwap = (node) => __awaiter(void 0, void 0, void 0, function* () {
    GetAllLocalPaintStyles();
    // GetAllLocalEffectStyles();
    // do nothing below
    if ("children" in node) {
        for (const child of node.children) {
            if (child.locked) {
            }
            else {
                ThemeSwap(child);
            }
        }
    }
    else {
        // do nothing
    }
    swapFill(node);
    swapStroke(node);
    swapEffects(node);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvZGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlci9jYWxsYmFjay50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVyL2NvbG9yLWNoZWNrLnRzIiwid2VicGFjazovLy8uL3NyYy9oZWxwZXIvZm9yY2UtYXV0by1sYXlvdXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlci9sYXlvdXQtZ3JpZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVyL3NwYWNpbmctY2hlY2sudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlci9zcGFjaW5nLXNsaWRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVyL3RoZW1lLXN3YXAudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RoZW1lLXN0eWxlcy9MYXlvdXRHcmlkcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGhlbWUtc3R5bGVzL2NvbG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGhlbWUtc3R5bGVzL2VmZmVjdHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsaUJBQWlCO0FBQ29CO0FBQ2M7QUFDSjtBQUN1QztBQUNNO0FBQ2xEO0FBQ0M7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksMEVBQWlCO0FBQ3JCLENBQUM7QUFDRDtBQUNBO0FBQ0EsUUFBUSxvRUFBUztBQUNqQjtBQUNBO0FBQ0EsUUFBUSw4RUFBa0I7QUFDMUI7QUFDQTtBQUNBLFFBQVEsa0ZBQW9CO0FBQzVCO0FBQ0E7QUFDQSxRQUFRLHNGQUF1QjtBQUMvQjtBQUNBO0FBQ0EsUUFBUSxvRkFBcUI7QUFDN0I7QUFDQTtBQUNBLFFBQVEsMEVBQVc7QUFDbkI7QUFDQTtBQUNBLFFBQVEsMkZBQXlCO0FBQ2pDO0FBQ0E7QUFDQSxRQUFRLHlGQUF1QjtBQUMvQjtBQUNBO0FBQ0EsUUFBUSx5RUFBYTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDdERBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDNkI7Ozs7Ozs7Ozs7Ozs7QUN4QjdCO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixtQkFBbUI7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsS0FBTztBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLG1CQUFtQjtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLG1CQUFtQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLGVBQWU7QUFDbEQ7QUFDQTtBQUNBLHFEQUFxRCxlQUFlO0FBQ3BFO0FBQ0E7QUFDOEI7Ozs7Ozs7Ozs7Ozs7QUM3SDlCO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzhEOzs7Ozs7Ozs7Ozs7O0FDVjlEO0FBQUE7QUFBQTtBQUF1SjtBQUN2SjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxtRkFBaUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsUUFBUSxpRkFBZTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLCtCQUErQix1RUFBYTtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0Isa0ZBQXdCO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IscUVBQVc7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsdUVBQWE7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ3lCOzs7Ozs7Ozs7Ozs7O0FDL0l6QjtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ2dDOzs7Ozs7Ozs7Ozs7O0FDekxoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixvQ0FBb0M7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixrQ0FBa0M7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsaUNBQWlDO0FBQ3JEO0FBQ0E7QUFDdUU7Ozs7Ozs7Ozs7Ozs7QUNoTXZFO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQWlCLFNBQUksSUFBSSxTQUFJO0FBQzdCLDJCQUEyQiwrREFBK0QsZ0JBQWdCLEVBQUUsRUFBRTtBQUM5RztBQUNBLG1DQUFtQyxNQUFNLDZCQUE2QixFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ2pHLGtDQUFrQyxNQUFNLGlDQUFpQyxFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ3BHLCtCQUErQixxRkFBcUY7QUFDcEg7QUFDQSxLQUFLO0FBQ0w7QUFDcUU7QUFDRztBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsaUVBQVk7QUFDdkM7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsa0VBQWE7QUFDeEM7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixpRUFBWTtBQUN2QztBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixrRUFBYTtBQUN4QztBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLG1FQUFhO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLG9FQUFjO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDb0I7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsb0RBQW9EO0FBQzdFO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3ZLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFTztBQUNQOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVPO0FBQ1A7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7QUM1TUE7QUFBQTtBQUFBO0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7OztBQ3BmQTtBQUFBO0FBQUE7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCIsImZpbGUiOiJjb2RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvY29kZS50c1wiKTtcbiIsIi8vIFRoaXMgcGx1Z2luIHdpbGwgb3BlbiBhIG1vZGFsIHRvIHByb21wdCB0aGUgdXNlciB0byBlbnRlciBhIG51bWJlciwgYW5kXG4vLyBpdCB3aWxsIHRoZW4gY3JlYXRlIHRoYXQgbWFueSByZWN0YW5nbGVzIG9uIHRoZSBzY3JlZW4uXG4vLyBUaGlzIGZpbGUgaG9sZHMgdGhlIG1haW4gY29kZSBmb3IgdGhlIHBsdWdpbnMuIEl0IGhhcyBhY2Nlc3MgdG8gdGhlICpkb2N1bWVudCouXG4vLyBZb3UgY2FuIGFjY2VzcyBicm93c2VyIEFQSXMgaW4gdGhlIDxzY3JpcHQ+IHRhZyBpbnNpZGUgXCJ1aS5odG1sXCIgd2hpY2ggaGFzIGFcbi8vIGZ1bGwgYnJvd3NlciBlbnZpcm9tZW50IChzZWUgZG9jdW1lbnRhdGlvbikuXG4vLyBpbXBvcnQgeyBTcGFjaW5nRGVmYXVsdCB9IGZyb20gXCIuL2hlbHBlci9zcGFjaW5nLWRlZmF1bHRcIjtcbmltcG9ydCB7IFRoZW1lU3dhcCB9IGZyb20gXCIuL2hlbHBlci90aGVtZS1zd2FwXCI7XG5pbXBvcnQgeyBTcGFjaW5nQ2hlY2tUcmF2ZXJzZSB9IGZyb20gXCIuL2hlbHBlci9zcGFjaW5nLWNoZWNrXCI7XG5pbXBvcnQgeyBDb2xvckNoZWNrVHJhdmVyc2UgfSBmcm9tIFwiLi9oZWxwZXIvY29sb3ItY2hlY2tcIjtcbmltcG9ydCB7IEZvcmNlQXV0b0xheW91dEhvcml6b250YWwsIEZvcmNlQXV0b0xheW91dFZlcnRpY2FsLCB9IGZyb20gXCIuL2hlbHBlci9mb3JjZS1hdXRvLWxheW91dFwiO1xuaW1wb3J0IHsgUGFkZGluZ0hvcml6b250YWxTbGlkZXIsIFBhZGRpbmdWZXJ0aWNhbFNsaWRlciwgSXRlbVNwYWNpbmcsIH0gZnJvbSBcIi4vaGVscGVyL3NwYWNpbmctc2xpZGVyXCI7XG5pbXBvcnQgeyBTZXRMYXlvdXRHcmlkIH0gZnJvbSBcIi4vaGVscGVyL2xheW91dC1ncmlkXCI7XG5pbXBvcnQgeyBvblNlbGVjdGlvbkNoYW5nZSB9IGZyb20gXCIuL2hlbHBlci9jYWxsYmFja1wiO1xuLy8gVGhpcyBzaG93cyB0aGUgSFRNTCBwYWdlIGluIFwidWkuaHRtbFwiLlxuZmlnbWEuc2hvd1VJKF9faHRtbF9fKTtcbi8vIENhbGxzIHRvIFwicGFyZW50LnBvc3RNZXNzYWdlXCIgZnJvbSB3aXRoaW4gdGhlIEhUTUwgcGFnZSB3aWxsIHRyaWdnZXIgdGhpc1xuLy8gY2FsbGJhY2suIFRoZSBjYWxsYmFjayB3aWxsIGJlIHBhc3NlZCB0aGUgXCJwbHVnaW5NZXNzYWdlXCIgcHJvcGVydHkgb2YgdGhlXG4vLyBwb3N0ZWQgbWVzc2FnZS5cbmZpZ21hLnVpLnJlc2l6ZSgzMjAsIDg1MCk7XG5maWdtYS5vbihcInNlbGVjdGlvbmNoYW5nZVwiLCAoKSA9PiB7XG4gICAgbGV0IHRoaXNTZWxlY3Rpb24gPSBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb25bMF07XG4gICAgb25TZWxlY3Rpb25DaGFuZ2UodGhpc1NlbGVjdGlvbik7XG59KTtcbmZpZ21hLnVpLm9ubWVzc2FnZSA9IChtc2cpID0+IHtcbiAgICBpZiAobXNnLnR5cGUgPT09IFwic3dhcC10aGVtZVwiKSB7XG4gICAgICAgIFRoZW1lU3dhcChmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb25bMF0pO1xuICAgIH1cbiAgICBlbHNlIGlmIChtc2cudHlwZSA9PT0gXCJjb2xvci1jaGVja2VyXCIpIHtcbiAgICAgICAgQ29sb3JDaGVja1RyYXZlcnNlKGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvblswXSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKG1zZy50eXBlID09PSBcInNwYWNpbmctY2hlY2tlclwiKSB7XG4gICAgICAgIFNwYWNpbmdDaGVja1RyYXZlcnNlKGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbik7XG4gICAgfVxuICAgIGVsc2UgaWYgKG1zZy50eXBlID09PSBcInBhZGRpbmctaG9yaXpvbnRhbC1zbGlkZXJcIikge1xuICAgICAgICBQYWRkaW5nSG9yaXpvbnRhbFNsaWRlcihmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb24sIG1zZyk7XG4gICAgfVxuICAgIGVsc2UgaWYgKG1zZy50eXBlID09PSBcInBhZGRpbmctdmVydGljYWwtc2xpZGVyXCIpIHtcbiAgICAgICAgUGFkZGluZ1ZlcnRpY2FsU2xpZGVyKGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbiwgbXNnKTtcbiAgICB9XG4gICAgZWxzZSBpZiAobXNnLnR5cGUgPT09IFwiaXRlbS1zcGFjaW5nLXNsaWRlclwiKSB7XG4gICAgICAgIEl0ZW1TcGFjaW5nKGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbiwgbXNnKTtcbiAgICB9XG4gICAgZWxzZSBpZiAobXNnLnR5cGUgPT09IFwiZm9yY2UtYXV0by1sYXlvdXQtaG9yaXpvbnRhbFwiKSB7XG4gICAgICAgIEZvcmNlQXV0b0xheW91dEhvcml6b250YWwoZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uKTtcbiAgICB9XG4gICAgZWxzZSBpZiAobXNnLnR5cGUgPT09IFwiZm9yY2UtYXV0by1sYXlvdXQtdmVydGljYWxcIikge1xuICAgICAgICBGb3JjZUF1dG9MYXlvdXRWZXJ0aWNhbChmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb24pO1xuICAgIH1cbiAgICBlbHNlIGlmIChtc2cudHlwZSA9PT0gXCJzZXQtbGF5b3V0LWdyaWRcIikge1xuICAgICAgICBTZXRMYXlvdXRHcmlkKGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbiwgbXNnKTtcbiAgICB9XG4gICAgLy8gTWFrZSBzdXJlIHRvIGNsb3NlIHRoZSBwbHVnaW4gd2hlbiB5b3UncmUgZG9uZS4gT3RoZXJ3aXNlIHRoZSBwbHVnaW4gd2lsbFxuICAgIC8vIGtlZXAgcnVubmluZywgd2hpY2ggc2hvd3MgdGhlIGNhbmNlbCBidXR0b24gYXQgdGhlIGJvdHRvbSBvZiB0aGUgc2NyZWVuLlxuICAgIC8vIGZpZ21hLmNsb3NlUGx1Z2luKCk7XG59O1xuIiwiY29uc3Qgb25TZWxlY3Rpb25DaGFuZ2UgPSAobm9kZSkgPT4ge1xuICAgIGlmIChub2RlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKG5vZGUpO1xuICAgICAgICBsZXQgaG9yaXpvbnRhbFBhZGRpbmcgPSBub2RlLmhvcml6b250YWxQYWRkaW5nO1xuICAgICAgICBsZXQgdmVydGljYWxQYWRkaW5nID0gbm9kZS52ZXJ0aWNhbFBhZGRpbmc7XG4gICAgICAgIGxldCBpdGVtU3BhY2luZyA9IG5vZGUuaXRlbVNwYWNpbmc7XG4gICAgICAgIGxldCBsYXlvdXRNb2RlID0gbm9kZS5sYXlvdXRNb2RlO1xuICAgICAgICBsZXQgdHlwZSA9IG5vZGUudHlwZTtcbiAgICAgICAgbGV0IGxheW91dEdyaWRzID0gbm9kZS5sYXlvdXRHcmlkcztcbiAgICAgICAgbGV0IG9iaiA9IHtcbiAgICAgICAgICAgIGhvcml6b250YWxQYWRkaW5nOiBob3Jpem9udGFsUGFkZGluZyxcbiAgICAgICAgICAgIHZlcnRpY2FsUGFkZGluZzogdmVydGljYWxQYWRkaW5nLFxuICAgICAgICAgICAgaXRlbVNwYWNpbmc6IGl0ZW1TcGFjaW5nLFxuICAgICAgICAgICAgbGF5b3V0TW9kZTogbGF5b3V0TW9kZSxcbiAgICAgICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgICAgICBsYXlvdXRHcmlkczogbGF5b3V0R3JpZHMsXG4gICAgICAgIH07XG4gICAgICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKG9iaik7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIm5vXCIpO1xuICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZShcIm5vdGhpbmcgc2VsZWN0ZWRcIik7XG4gICAgfVxufTtcbmV4cG9ydCB7IG9uU2VsZWN0aW9uQ2hhbmdlIH07XG4iLCJmdW5jdGlvbiBjbG9uZSh2YWwpIHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh2YWwpKTtcbn1cbi8vIENoZWNrIG9iamVjdCBlcXVhbGl0eSBoZWxwZXJcbmZ1bmN0aW9uIGlzRXF1aXZhbGVudChhLCBiKSB7XG4gICAgLy8gQ3JlYXRlIGFycmF5cyBvZiBwcm9wZXJ0eSBuYW1lc1xuICAgIHZhciBhUHJvcHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhhKTtcbiAgICB2YXIgYlByb3BzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoYik7XG4gICAgLy8gSWYgbnVtYmVyIG9mIHByb3BlcnRpZXMgaXMgZGlmZmVyZW50LFxuICAgIC8vIG9iamVjdHMgYXJlIG5vdCBlcXVpdmFsZW50XG4gICAgaWYgKGFQcm9wcy5sZW5ndGggIT0gYlByb3BzLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYVByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBwcm9wTmFtZSA9IGFQcm9wc1tpXTtcbiAgICAgICAgLy8gSWYgdmFsdWVzIG9mIHNhbWUgcHJvcGVydHkgYXJlIG5vdCBlcXVhbCxcbiAgICAgICAgLy8gb2JqZWN0cyBhcmUgbm90IGVxdWl2YWxlbnRcbiAgICAgICAgaWYgKGFbcHJvcE5hbWVdICE9PSBiW3Byb3BOYW1lXSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIElmIHdlIG1hZGUgaXQgdGhpcyBmYXIsIG9iamVjdHNcbiAgICAvLyBhcmUgY29uc2lkZXJlZCBlcXVpdmFsZW50XG4gICAgcmV0dXJuIHRydWU7XG59XG5jb25zdCBDb2xvckNoZWNrVHJhdmVyc2UgPSAobm9kZSkgPT4ge1xuICAgIGxldCBzdHJheUZpbGwgPSAwO1xuICAgIGxldCBzdHJheVN0cm9rZSA9IDA7XG4gICAgaWYgKFwiZmlsbHNcIiAmJiBcInN0cm9rZXNcIiBpbiBub2RlKSB7XG4gICAgICAgIC8vIEZpbHRlciB3YXJuaW5nIHN0cm9rZSBmdW5jdGlvblxuICAgICAgICBsZXQgZmlsdGVyV2FybmluZ1N0cm9rZSA9IGZ1bmN0aW9uIChzdHJva2UpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2xlYXIgb3V0XCIpO1xuICAgICAgICAgICAgaWYgKHN0cm9rZS50eXBlID09IFwiU09MSURcIiAmJlxuICAgICAgICAgICAgICAgIGlzRXF1aXZhbGVudChzdHJva2UuY29sb3IsIHsgcjogMSwgZzogMCwgYjogMCB9KSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwieWVzXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibm9cIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGxldCBvbGRTdHJva2VzID0gY2xvbmUobm9kZS5zdHJva2VzKTtcbiAgICAgICAgbGV0IG5ld1N0cm9rZXMgPSBvbGRTdHJva2VzLmZpbHRlcihmaWx0ZXJXYXJuaW5nU3Ryb2tlKTtcbiAgICAgICAgaWYgKG5vZGUuc3Ryb2tlU3R5bGVJZC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAvLyBkbyBub3RoaW5nXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBub2RlLnN0cm9rZXMgPSBuZXdTdHJva2VzO1xuICAgICAgICB9XG4gICAgICAgIC8vIC8vIEFkZCB3YXJuaW5nIHN0cm9rZSBmdW5jdGlvblxuICAgICAgICBsZXQgYWRkV2FybmluZ1N0cm9rZSA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICBsZXQgc3Ryb2tlcyA9IGNsb25lKG5vZGUuc3Ryb2tlcyk7XG4gICAgICAgICAgICBsZXQgd2FybmluZ1N0cm9rZVByb3BlcnR5ID0ge1xuICAgICAgICAgICAgICAgIGNvbG9yOiB7IHI6IDEsIGc6IDAsIGI6IDAgfSxcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgICAgICAgIHR5cGU6IFwiU09MSURcIixcbiAgICAgICAgICAgICAgICBibGVuZE1vZGU6IFwiTk9STUFMXCIsXG4gICAgICAgICAgICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBzdHJva2VzLnB1c2god2FybmluZ1N0cm9rZVByb3BlcnR5KTtcbiAgICAgICAgICAgIG5vZGUuc3Ryb2tlcyA9IHN0cm9rZXM7XG4gICAgICAgICAgICAvLyBub2RlLnN0cm9rZUFsaWduID0gXCJPVVRTSURFXCI7XG4gICAgICAgIH07XG4gICAgICAgIC8vIENoZWNrIEZpbGxcbiAgICAgICAgY29uc3QgaGFzSW1hZ2UgPSAoZmlsbCkgPT4gZmlsbC50eXBlID09PSBcIklNQUdFXCI7XG4gICAgICAgIGlmIChub2RlLmZpbGxzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIC8vIGlmIChub2RlLmZpbGxzLnNvbWUoaGFzSW1hZ2UpKSB7XG4gICAgICAgICAgICAvLyAgIGNvbnNvbGUubG9nKFwiZmlsbCBpcyBpbWFnZVwiKTtcbiAgICAgICAgICAgIC8vIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyAgIGNvbnNvbGUubG9nKFwiZmlsbCBpcyBOT1QgaW1hZ2VcIik7XG4gICAgICAgICAgICAvLyAgIC8vIG5vdGhpbmdcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIGlmIChub2RlLmZpbGxTdHlsZUlkLmxlbmd0aCA+IDAgfHwgbm9kZS5maWxscy5zb21lKGhhc0ltYWdlKSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi4pyFIEdvb2QgZmlsbFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi4p2MIEJhZCBmaWxsXCIpO1xuICAgICAgICAgICAgICAgIC8vIEFkZCB3YXJuaW5nIHN0cm9rZVxuICAgICAgICAgICAgICAgIGFkZFdhcm5pbmdTdHJva2Uobm9kZSk7XG4gICAgICAgICAgICAgICAgc3RyYXlGaWxsKys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIm5vIGZpbGxcIik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQ2hlY2sgU3Ryb2tlXG4gICAgICAgIGlmIChub2RlLnN0cm9rZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgaWYgKG5vZGUuc3Ryb2tlU3R5bGVJZC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLinIUgR29vZCBzdHJva2VcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuKdjCBCYWQgc3Ryb2tlXCIpO1xuICAgICAgICAgICAgICAgIC8vIC8vIEFkZCB3YXJuaW5nIHN0cm9rZVxuICAgICAgICAgICAgICAgIGFkZFdhcm5pbmdTdHJva2Uobm9kZSk7XG4gICAgICAgICAgICAgICAgc3RyYXlTdHJva2UrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibm8gc3Ryb2tlXCIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZyhcIk5vIGZpbGwgJiBzdHJva2UgcHJvcGVydHlcIik7XG4gICAgfVxuICAgIGlmIChcImNoaWxkcmVuXCIgaW4gbm9kZSkge1xuICAgICAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIG5vZGUuY2hpbGRyZW4pIHtcbiAgICAgICAgICAgIENvbG9yQ2hlY2tUcmF2ZXJzZShjaGlsZCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIC8vIGRvIG5vdGhpbmdcbiAgICB9XG4gICAgaWYgKHN0cmF5RmlsbCA+IDAgfHwgc3RyYXlTdHJva2UgPiAwKSB7XG4gICAgICAgIGxldCBlcnJvclN0cmluZyA9IFwiWW91IGhhdmUgXCIgK1xuICAgICAgICAgICAgc3RyYXlGaWxsICtcbiAgICAgICAgICAgIFwiIGZpbGxzIGFuZCBcIiArXG4gICAgICAgICAgICBzdHJheVN0cm9rZSArXG4gICAgICAgICAgICBcIiBzdHJva2VzIG5vdCB1c2luZyBjb2xvdXJzIGZyb20gb3VyIGxpYnJhcnkhXCI7XG4gICAgICAgIGZpZ21hLm5vdGlmeShlcnJvclN0cmluZywgeyB0aW1lb3V0OiAwLjUgfSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBmaWdtYS5ub3RpZnkoXCLwn5GPIEFsbCBpcyBnb29kIGluIHRoZSBob29kIVwiLCB7IHRpbWVvdXQ6IDAuNSB9KTtcbiAgICB9XG59O1xuZXhwb3J0IHsgQ29sb3JDaGVja1RyYXZlcnNlIH07XG4iLCJjb25zdCBGb3JjZUF1dG9MYXlvdXRIb3Jpem9udGFsID0gKG5vZGVzKSA9PiB7XG4gICAgZm9yIChjb25zdCBub2RlIG9mIG5vZGVzKSB7XG4gICAgICAgIG5vZGUubGF5b3V0TW9kZSA9IFwiSE9SSVpPTlRBTFwiO1xuICAgIH1cbn07XG5jb25zdCBGb3JjZUF1dG9MYXlvdXRWZXJ0aWNhbCA9IChub2RlcykgPT4ge1xuICAgIGZvciAoY29uc3Qgbm9kZSBvZiBub2Rlcykge1xuICAgICAgICBub2RlLmxheW91dE1vZGUgPSBcIlZFUlRJQ0FMXCI7XG4gICAgfVxufTtcbmV4cG9ydCB7IEZvcmNlQXV0b0xheW91dEhvcml6b250YWwsIEZvcmNlQXV0b0xheW91dFZlcnRpY2FsIH07XG4iLCJpbXBvcnQgeyBwYWRkaW5nSG9yaXpvbnRhbCwgcGFkZGluZ1ZlcnRpY2FsLCBiYXNlbGluZUdyaWRzLCBtYXhXaWR0aEdyaWRzLCBjb2x1bW5HcmlkcywgbWF4V2lkdGhMZWZ0QWxpZ25lZEdyaWRzLCB9IGZyb20gXCIuLi90aGVtZS1zdHlsZXMvTGF5b3V0R3JpZHNcIjtcbmNvbnN0IFNldExheW91dEdyaWQgPSAobm9kZXMsIG1zZykgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKG1zZy5sYXlvdXRHcmlkT3B0aW9ucyk7XG4gICAgZm9yIChjb25zdCBub2RlIG9mIG5vZGVzKSB7XG4gICAgICAgIC8vIG5vZGUubGF5b3V0R3JpZHMgPSBbXTtcbiAgICAgICAgY29uc3QgaG9yaXpvbnRhbFBhZGRpbmdTbGlkZXJWYWx1ZSA9IG1zZy5sYXlvdXRHcmlkT3B0aW9uc1swXS52YWx1ZTtcbiAgICAgICAgY29uc3QgdmVydGljYWxQYWRkaW5nU2xpZGVyVmFsdWUgPSBtc2cubGF5b3V0R3JpZE9wdGlvbnNbMV0udmFsdWU7XG4gICAgICAgIGNvbnN0IHNob3dCYXNlbGluZVJvd3MgPSBtc2cubGF5b3V0R3JpZE9wdGlvbnNbMl0udmFsdWU7XG4gICAgICAgIGNvbnN0IHNob3dNYXhXaWR0aCA9IG1zZy5sYXlvdXRHcmlkT3B0aW9uc1szXS52YWx1ZTtcbiAgICAgICAgY29uc3Qgc2hvd0NvbHVtbnMgPSBtc2cubGF5b3V0R3JpZE9wdGlvbnNbNF0udmFsdWU7XG4gICAgICAgIGNvbnN0IHNob3dNYXhXaWR0aExlZnRBbGlnbmVkID0gbXNnLmxheW91dEdyaWRPcHRpb25zWzVdLnZhbHVlO1xuICAgICAgICBsZXQgYWxsR3JpZHMgPSBbXTtcbiAgICAgICAgbGV0IHNwYWNpbmdIb3Jpem9udGFsID0gMDtcbiAgICAgICAgbGV0IHNwYWNpbmdWZXJ0aWNhbCA9IDA7XG4gICAgICAgIHN3aXRjaCAoaG9yaXpvbnRhbFBhZGRpbmdTbGlkZXJWYWx1ZSkge1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBzcGFjaW5nSG9yaXpvbnRhbCA9IDA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiMFwiOlxuICAgICAgICAgICAgICAgIHNwYWNpbmdIb3Jpem9udGFsID0gMDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCIxXCI6XG4gICAgICAgICAgICAgICAgc3BhY2luZ0hvcml6b250YWwgPSA0O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIjJcIjpcbiAgICAgICAgICAgICAgICBzcGFjaW5nSG9yaXpvbnRhbCA9IDg7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiM1wiOlxuICAgICAgICAgICAgICAgIHNwYWNpbmdIb3Jpem9udGFsID0gMTI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiNFwiOlxuICAgICAgICAgICAgICAgIHNwYWNpbmdIb3Jpem9udGFsID0gMTY7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiNVwiOlxuICAgICAgICAgICAgICAgIHNwYWNpbmdIb3Jpem9udGFsID0gMjQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiNlwiOlxuICAgICAgICAgICAgICAgIHNwYWNpbmdIb3Jpem9udGFsID0gMzI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiN1wiOlxuICAgICAgICAgICAgICAgIHNwYWNpbmdIb3Jpem9udGFsID0gNDA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiOFwiOlxuICAgICAgICAgICAgICAgIHNwYWNpbmdIb3Jpem9udGFsID0gNDg7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgc3dpdGNoICh2ZXJ0aWNhbFBhZGRpbmdTbGlkZXJWYWx1ZSkge1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBzcGFjaW5nVmVydGljYWwgPSAwO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIjBcIjpcbiAgICAgICAgICAgICAgICBzcGFjaW5nVmVydGljYWwgPSAwO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIjFcIjpcbiAgICAgICAgICAgICAgICBzcGFjaW5nVmVydGljYWwgPSA0O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIjJcIjpcbiAgICAgICAgICAgICAgICBzcGFjaW5nVmVydGljYWwgPSA4O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIjNcIjpcbiAgICAgICAgICAgICAgICBzcGFjaW5nVmVydGljYWwgPSAxMjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCI0XCI6XG4gICAgICAgICAgICAgICAgc3BhY2luZ1ZlcnRpY2FsID0gMTY7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiNVwiOlxuICAgICAgICAgICAgICAgIHNwYWNpbmdWZXJ0aWNhbCA9IDI0O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIjZcIjpcbiAgICAgICAgICAgICAgICBzcGFjaW5nVmVydGljYWwgPSAzMjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCI3XCI6XG4gICAgICAgICAgICAgICAgc3BhY2luZ1ZlcnRpY2FsID0gNDA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiOFwiOlxuICAgICAgICAgICAgICAgIHNwYWNpbmdWZXJ0aWNhbCA9IDQ4O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHBhZGRpbmdIb3Jpem9udGFsKHNwYWNpbmdIb3Jpem9udGFsKS50aGVuKCh2YWwpID0+IHtcbiAgICAgICAgICAgIGlmICh2YWwubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgICAgICAvLyBkbyBub3RoaW5nXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGdyaWQgb2YgdmFsKSB7XG4gICAgICAgICAgICAgICAgICAgIGFsbEdyaWRzLnB1c2goZ3JpZCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGFsbEdyaWRzKTtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5sYXlvdXRHcmlkcyA9IGFsbEdyaWRzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHBhZGRpbmdWZXJ0aWNhbChzcGFjaW5nVmVydGljYWwpLnRoZW4oKHZhbCkgPT4ge1xuICAgICAgICAgICAgaWYgKHZhbC5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgICAgIC8vIGRvIG5vdGhpbmdcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgZ3JpZCBvZiB2YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgYWxsR3JpZHMucHVzaChncmlkKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYWxsR3JpZHMpO1xuICAgICAgICAgICAgICAgICAgICBub2RlLmxheW91dEdyaWRzID0gYWxsR3JpZHM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHNob3dNYXhXaWR0aCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBncmlkIG9mIG1heFdpZHRoR3JpZHMpIHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhncmlkKTtcbiAgICAgICAgICAgICAgICBhbGxHcmlkcy5wdXNoKGdyaWQpO1xuICAgICAgICAgICAgICAgIG5vZGUubGF5b3V0R3JpZHMgPSBhbGxHcmlkcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG5vZGUubGF5b3V0R3JpZHMgPSBhbGxHcmlkcztcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2hvd01heFdpZHRoTGVmdEFsaWduZWQpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgZ3JpZCBvZiBtYXhXaWR0aExlZnRBbGlnbmVkR3JpZHMpIHtcbiAgICAgICAgICAgICAgICBhbGxHcmlkcy5wdXNoKGdyaWQpO1xuICAgICAgICAgICAgICAgIG5vZGUubGF5b3V0R3JpZHMgPSBhbGxHcmlkcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG5vZGUubGF5b3V0R3JpZHMgPSBhbGxHcmlkcztcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2hvd0NvbHVtbnMpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgZ3JpZCBvZiBjb2x1bW5Hcmlkcykge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGdyaWQpO1xuICAgICAgICAgICAgICAgIGFsbEdyaWRzLnB1c2goZ3JpZCk7XG4gICAgICAgICAgICAgICAgbm9kZS5sYXlvdXRHcmlkcyA9IGFsbEdyaWRzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbm9kZS5sYXlvdXRHcmlkcyA9IGFsbEdyaWRzO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzaG93QmFzZWxpbmVSb3dzKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInNob3dcIik7XG4gICAgICAgICAgICBhbGxHcmlkcy5wdXNoKGJhc2VsaW5lR3JpZHMpO1xuICAgICAgICAgICAgbm9kZS5sYXlvdXRHcmlkcyA9IGFsbEdyaWRzO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYWxsR3JpZHMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbm9kZS5sYXlvdXRHcmlkcyA9IGFsbEdyaWRzO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYWxsR3JpZHMpO1xuICAgICAgICB9XG4gICAgfVxufTtcbmV4cG9ydCB7IFNldExheW91dEdyaWQgfTtcbiIsImNvbnN0IFNwYWNpbmdDaGVja1RyYXZlcnNlID0gKG5vZGVzKSA9PiB7XG4gICAgZm9yIChjb25zdCBub2RlIG9mIG5vZGVzKSB7XG4gICAgICAgIGxldCBuYW1lID0gbm9kZS5uYW1lO1xuICAgICAgICBsZXQgcGFkZGluZ0FsbFJlZ2V4ID0gL1xcYig/OnBhLTF8cGEtMnxwYS0zfHBhLTR8cGEtNXxwYS02fHBhLTd8cGEtbm9uZSlcXGIvZztcbiAgICAgICAgbGV0IHBhZGRpbmdIb3Jpem9udGFsUmVnZXggPSAvXFxiKD86cGgtMXxwaC0yfHBoLTN8cGgtNHxwaC01fHBoLTZ8cGgtN3xwaC1ub25lKVxcYi9nO1xuICAgICAgICBsZXQgcGFkZGluZ1ZlcnRpY2FsUmVnZXggPSAvXFxiKD86cHYtMXxwdi0yfHB2LTN8cHYtNHxwdi01fHB2LTZ8cHYtN3xwdi1ub25lKVxcYi9nO1xuICAgICAgICBsZXQgaXRlbVNwYWNpbmdBbGxSZWdleCA9IC9cXGIoPzpzcC0xfHNwLTJ8c3AtM3xzcC00fHNwLTV8c3AtNnxzcC03fHNwLW5vbmUpXFxiL2c7XG4gICAgICAgIGxldCBhdXRvbGF5b3V0UmVnZXggPSAvXFxiKD86dmVydGljYWx8aG9yaXpvbnRhbClcXGIvZztcbiAgICAgICAgbGV0IG1hdGNoUGFkZGluZ0FsbCA9IG5hbWUubWF0Y2gocGFkZGluZ0FsbFJlZ2V4KTtcbiAgICAgICAgbGV0IG1hdGNoUGFkZGluZ0hvcml6b250YWwgPSBuYW1lLm1hdGNoKHBhZGRpbmdIb3Jpem9udGFsUmVnZXgpO1xuICAgICAgICBsZXQgbWF0Y2hQYWRkaW5nVmVydGljYWwgPSBuYW1lLm1hdGNoKHBhZGRpbmdWZXJ0aWNhbFJlZ2V4KTtcbiAgICAgICAgbGV0IG1hdGNoSXRlbVNwYWNpbmcgPSBuYW1lLm1hdGNoKGl0ZW1TcGFjaW5nQWxsUmVnZXgpO1xuICAgICAgICBsZXQgbWF0Y2hBdXRvTGF5b3V0RGlyZWN0aW9uID0gbmFtZS5tYXRjaChhdXRvbGF5b3V0UmVnZXgpO1xuICAgICAgICBjb25zb2xlLmxvZyhtYXRjaFBhZGRpbmdBbGwpO1xuICAgICAgICBpZiAobWF0Y2hBdXRvTGF5b3V0RGlyZWN0aW9uID09IG51bGwpIHtcbiAgICAgICAgICAgIG5vZGUubGF5b3V0TW9kZSA9IFwiVkVSVElDQUxcIjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZW5hYmxlIGF1dG8gbGF5b3V0XCIpO1xuICAgICAgICAgICAgc3dpdGNoIChtYXRjaEF1dG9MYXlvdXREaXJlY3Rpb25bMF0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIFwidmVydGljYWxcIjpcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5sYXlvdXRNb2RlID0gXCJWRVJUSUNBTFwiO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwiaG9yaXpvbnRhbFwiOlxuICAgICAgICAgICAgICAgICAgICBub2RlLmxheW91dE1vZGUgPSBcIkhPUklaT05UQUxcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAobWF0Y2hJdGVtU3BhY2luZyA9PSBudWxsKSB7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImhhcyBzcGFjaW5nXCIpO1xuICAgICAgICAgICAgc3dpdGNoIChtYXRjaEl0ZW1TcGFjaW5nWzBdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcInNwLTBcIjpcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5pdGVtU3BhY2luZyA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJzcC0xXCI6XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuaXRlbVNwYWNpbmcgPSA0O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwic3AtMlwiOlxuICAgICAgICAgICAgICAgICAgICBub2RlLml0ZW1TcGFjaW5nID0gODtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInNwLTNcIjpcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5pdGVtU3BhY2luZyA9IDEyO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwic3AtNFwiOlxuICAgICAgICAgICAgICAgICAgICBub2RlLml0ZW1TcGFjaW5nID0gMTY7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJzcC01XCI6XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuaXRlbVNwYWNpbmcgPSAyNDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInNwLTZcIjpcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5pdGVtU3BhY2luZyA9IDMyO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwic3AtN1wiOlxuICAgICAgICAgICAgICAgICAgICBub2RlLml0ZW1TcGFjaW5nID0gNDA7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJzcC04XCI6XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuaXRlbVNwYWNpbmcgPSA0ODtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1hdGNoUGFkZGluZ0FsbCA9PSBudWxsKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIm5vXCIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJoYXMgcGFkZGluZyBhbGxcIik7XG4gICAgICAgICAgICBzd2l0Y2ggKG1hdGNoUGFkZGluZ0FsbFswXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJwYS1ub25lXCI6XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuaG9yaXpvbnRhbFBhZGRpbmcgPSAwO1xuICAgICAgICAgICAgICAgICAgICBub2RlLnZlcnRpY2FsUGFkZGluZyA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJwYS0xXCI6XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuaG9yaXpvbnRhbFBhZGRpbmcgPSA0O1xuICAgICAgICAgICAgICAgICAgICBub2RlLnZlcnRpY2FsUGFkZGluZyA9IDQ7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJwYS0yXCI6XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuaG9yaXpvbnRhbFBhZGRpbmcgPSA4O1xuICAgICAgICAgICAgICAgICAgICBub2RlLnZlcnRpY2FsUGFkZGluZyA9IDg7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJwYS0zXCI6XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuaG9yaXpvbnRhbFBhZGRpbmcgPSAxMjtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS52ZXJ0aWNhbFBhZGRpbmcgPSAxMjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInBhLTRcIjpcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5ob3Jpem9udGFsUGFkZGluZyA9IDE2O1xuICAgICAgICAgICAgICAgICAgICBub2RlLnZlcnRpY2FsUGFkZGluZyA9IDE2O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwicGEtNVwiOlxuICAgICAgICAgICAgICAgICAgICBub2RlLmhvcml6b250YWxQYWRkaW5nID0gMjQ7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUudmVydGljYWxQYWRkaW5nID0gMjQ7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJwYS02XCI6XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuaG9yaXpvbnRhbFBhZGRpbmcgPSAzMjtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS52ZXJ0aWNhbFBhZGRpbmcgPSAzMjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInBhLTdcIjpcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5ob3Jpem9udGFsUGFkZGluZyA9IDQwO1xuICAgICAgICAgICAgICAgICAgICBub2RlLnZlcnRpY2FsUGFkZGluZyA9IDQwO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwicGEtOFwiOlxuICAgICAgICAgICAgICAgICAgICBub2RlLmhvcml6b250YWxQYWRkaW5nID0gNDg7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUudmVydGljYWxQYWRkaW5nID0gNDg7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChtYXRjaFBhZGRpbmdIb3Jpem9udGFsID09IG51bGwpIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwibm9cIik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImhhcyBwYWRkaW5nIGhvcml6b250YWxcIik7XG4gICAgICAgICAgICBzd2l0Y2ggKG1hdGNoUGFkZGluZ0hvcml6b250YWxbMF0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIFwicGgtbm9uZVwiOlxuICAgICAgICAgICAgICAgICAgICBub2RlLmhvcml6b250YWxQYWRkaW5nID0gMDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInBoLTFcIjpcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5ob3Jpem9udGFsUGFkZGluZyA9IDQ7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJwaC0yXCI6XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuaG9yaXpvbnRhbFBhZGRpbmcgPSA4O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwicGgtM1wiOlxuICAgICAgICAgICAgICAgICAgICBub2RlLmhvcml6b250YWxQYWRkaW5nID0gMTI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJwaC00XCI6XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuaG9yaXpvbnRhbFBhZGRpbmcgPSAxNjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInBoLTVcIjpcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5ob3Jpem9udGFsUGFkZGluZyA9IDI0O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwicGgtNlwiOlxuICAgICAgICAgICAgICAgICAgICBub2RlLmhvcml6b250YWxQYWRkaW5nID0gMzI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJwaC03XCI6XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuaG9yaXpvbnRhbFBhZGRpbmcgPSA0MDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInBoLThcIjpcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5ob3Jpem9udGFsUGFkZGluZyA9IDQ4O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAobWF0Y2hQYWRkaW5nVmVydGljYWwgPT0gbnVsbCkge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJub1wiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaGFzIHBhZGRpbmcgaG9yaXpvbnRhbFwiKTtcbiAgICAgICAgICAgIHN3aXRjaCAobWF0Y2hQYWRkaW5nVmVydGljYWxbMF0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIFwicHYtbm9uZVwiOlxuICAgICAgICAgICAgICAgICAgICBub2RlLnZlcnRpY2FsUGFkZGluZyA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJwdi0xXCI6XG4gICAgICAgICAgICAgICAgICAgIG5vZGUudmVydGljYWxQYWRkaW5nID0gNDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInB2LTJcIjpcbiAgICAgICAgICAgICAgICAgICAgbm9kZS52ZXJ0aWNhbFBhZGRpbmcgPSA4O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwicHYtM1wiOlxuICAgICAgICAgICAgICAgICAgICBub2RlLnZlcnRpY2FsUGFkZGluZyA9IDEyO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwicHYtNFwiOlxuICAgICAgICAgICAgICAgICAgICBub2RlLnZlcnRpY2FsUGFkZGluZyA9IDE2O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwicHYtNVwiOlxuICAgICAgICAgICAgICAgICAgICBub2RlLnZlcnRpY2FsUGFkZGluZyA9IDI0O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwicHYtNlwiOlxuICAgICAgICAgICAgICAgICAgICBub2RlLnZlcnRpY2FsUGFkZGluZyA9IDMyO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwicHYtN1wiOlxuICAgICAgICAgICAgICAgICAgICBub2RlLnZlcnRpY2FsUGFkZGluZyA9IDQwO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwicHYtOFwiOlxuICAgICAgICAgICAgICAgICAgICBub2RlLnZlcnRpY2FsUGFkZGluZyA9IDQ4O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBTcGFjaW5nQ2hlY2tUcmF2ZXJzZShub2RlKTtcbiAgICB9XG4gICAgLy8gaWYgKFwiY2hpbGRyZW5cIiBpbiBub2Rlcykge1xuICAgIC8vICAgZm9yIChjb25zdCBjaGlsZCBvZiBub2RlLmNoaWxkcmVuKSB7XG4gICAgLy8gICAgIFNwYWNpbmdDaGVja1RyYXZlcnNlKGNoaWxkKTtcbiAgICAvLyAgIH1cbiAgICAvLyB9IGVsc2Uge1xuICAgIC8vICAgLy8gZG8gbm90aGluZ1xuICAgIC8vIH1cbn07XG5leHBvcnQgeyBTcGFjaW5nQ2hlY2tUcmF2ZXJzZSB9O1xuIiwiZnVuY3Rpb24gY2xvbmUodmFsKSB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodmFsKSk7XG59XG5sZXQgcGhOYW1lID0gbnVsbDtcbmxldCBwdk5hbWUgPSBudWxsO1xubGV0IHNwTmFtZSA9IG51bGw7XG5sZXQgbmFtZVByb3AgPSB7XG4gICAgaG9yaXpvbnRhbDogXCJwaC1ub25lXCIsXG4gICAgdmVydGljYWw6IFwicHYtbm9uZVwiLFxuICAgIHNwYWNpbmc6IFwic3Atbm9uZVwiLFxufTtcbmZ1bmN0aW9uIHVwZGF0ZU5hbWUodmFsLCBub2RlKSB7XG4gICAgaWYgKHZhbC50eXBlID09PSBcImhvcml6b250YWxcIikge1xuICAgICAgICBuYW1lUHJvcC5ob3Jpem9udGFsID0gdmFsLnZhbHVlO1xuICAgIH1cbiAgICBlbHNlIGlmICh2YWwudHlwZSA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICAgIG5hbWVQcm9wLnZlcnRpY2FsID0gdmFsLnZhbHVlO1xuICAgIH1cbiAgICBlbHNlIGlmICh2YWwudHlwZSA9PT0gXCJzcGFjaW5nXCIpIHtcbiAgICAgICAgbmFtZVByb3Auc3BhY2luZyA9IHZhbC52YWx1ZTtcbiAgICB9XG4gICAgbm9kZS5uYW1lID1cbiAgICAgICAgbmFtZVByb3AuaG9yaXpvbnRhbCArIFwiIFwiICsgbmFtZVByb3AudmVydGljYWwgKyBcIiBcIiArIG5hbWVQcm9wLnNwYWNpbmc7XG59XG5jb25zdCBQYWRkaW5nSG9yaXpvbnRhbFNsaWRlciA9IChub2RlcywgbXNnKSA9PiB7XG4gICAgbGV0IHNsaWRlclZhbHVlID0gbXNnLnNsaWRlclZhbHVlO1xuICAgIGxldCBzcGFjaW5nID0gbnVsbDtcbiAgICBsZXQgc3BhY2luZ05hbWUgPSBudWxsO1xuICAgIHN3aXRjaCAoc2xpZGVyVmFsdWUpIHtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHNwYWNpbmcgPSAwO1xuICAgICAgICAgICAgc3BhY2luZ05hbWUgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiMVwiOlxuICAgICAgICAgICAgc3BhY2luZyA9IDQ7XG4gICAgICAgICAgICBzcGFjaW5nTmFtZSA9IFwiMVwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCIyXCI6XG4gICAgICAgICAgICBzcGFjaW5nID0gODtcbiAgICAgICAgICAgIHNwYWNpbmdOYW1lID0gXCIyXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIjNcIjpcbiAgICAgICAgICAgIHNwYWNpbmcgPSAxMjtcbiAgICAgICAgICAgIHNwYWNpbmdOYW1lID0gXCIzXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIjRcIjpcbiAgICAgICAgICAgIHNwYWNpbmcgPSAxNjtcbiAgICAgICAgICAgIHNwYWNpbmdOYW1lID0gXCI0XCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIjVcIjpcbiAgICAgICAgICAgIHNwYWNpbmcgPSAyNDtcbiAgICAgICAgICAgIHNwYWNpbmdOYW1lID0gXCI1XCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIjZcIjpcbiAgICAgICAgICAgIHNwYWNpbmcgPSAzMjtcbiAgICAgICAgICAgIHNwYWNpbmdOYW1lID0gXCI2XCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIjdcIjpcbiAgICAgICAgICAgIHNwYWNpbmcgPSA0MDtcbiAgICAgICAgICAgIHNwYWNpbmdOYW1lID0gXCI3XCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIjhcIjpcbiAgICAgICAgICAgIHNwYWNpbmcgPSA0ODtcbiAgICAgICAgICAgIHNwYWNpbmdOYW1lID0gXCI4XCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG4gICAgZm9yIChjb25zdCBub2RlIG9mIG5vZGVzKSB7XG4gICAgICAgIGlmIChub2RlKSB7XG4gICAgICAgICAgICBwaE5hbWUgPSBcInBoLVwiICsgc3BhY2luZ05hbWU7XG4gICAgICAgICAgICB1cGRhdGVOYW1lKHsgdHlwZTogXCJob3Jpem9udGFsXCIsIHZhbHVlOiBwaE5hbWUgfSwgbm9kZSk7XG4gICAgICAgICAgICBpZiAobm9kZS50eXBlID09PSBcIkdST1VQXCIpIHtcbiAgICAgICAgICAgICAgICBub2RlLmhvcml6b250YWxQYWRkaW5nID0gc3BhY2luZztcbiAgICAgICAgICAgICAgICBub2RlLmxheW91dE1vZGUgPSBcIk5PTkVcIjtcbiAgICAgICAgICAgICAgICBpZiAoXCJjaGlsZHJlblwiIGluIG5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGdyb3VwID0gbm9kZS5jaGlsZHJlblswXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBsZXQgc2V0QXV0b0xheW91dCA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5ob3Jpem9udGFsUGFkZGluZyA9IHNwYWNpbmc7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gcmVzb2x2ZShcImRvbmVcIiksIDUpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufTtcbmNvbnN0IFBhZGRpbmdWZXJ0aWNhbFNsaWRlciA9IChub2RlcywgbXNnKSA9PiB7XG4gICAgbGV0IHNsaWRlclZhbHVlID0gbXNnLnNsaWRlclZhbHVlO1xuICAgIGxldCBzcGFjaW5nID0gbnVsbDtcbiAgICBsZXQgc3BhY2luZ05hbWUgPSBudWxsO1xuICAgIHN3aXRjaCAoc2xpZGVyVmFsdWUpIHtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHNwYWNpbmcgPSAwO1xuICAgICAgICAgICAgc3BhY2luZ05hbWUgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiMVwiOlxuICAgICAgICAgICAgc3BhY2luZyA9IDQ7XG4gICAgICAgICAgICBzcGFjaW5nTmFtZSA9IFwiMVwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCIyXCI6XG4gICAgICAgICAgICBzcGFjaW5nID0gODtcbiAgICAgICAgICAgIHNwYWNpbmdOYW1lID0gXCIyXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIjNcIjpcbiAgICAgICAgICAgIHNwYWNpbmcgPSAxMjtcbiAgICAgICAgICAgIHNwYWNpbmdOYW1lID0gXCIzXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIjRcIjpcbiAgICAgICAgICAgIHNwYWNpbmcgPSAxNjtcbiAgICAgICAgICAgIHNwYWNpbmdOYW1lID0gXCI0XCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIjVcIjpcbiAgICAgICAgICAgIHNwYWNpbmcgPSAyNDtcbiAgICAgICAgICAgIHNwYWNpbmdOYW1lID0gXCI1XCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIjZcIjpcbiAgICAgICAgICAgIHNwYWNpbmcgPSAzMjtcbiAgICAgICAgICAgIHNwYWNpbmdOYW1lID0gXCI2XCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIjdcIjpcbiAgICAgICAgICAgIHNwYWNpbmcgPSA0MDtcbiAgICAgICAgICAgIHNwYWNpbmdOYW1lID0gXCI3XCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIjhcIjpcbiAgICAgICAgICAgIHNwYWNpbmcgPSA0ODtcbiAgICAgICAgICAgIHNwYWNpbmdOYW1lID0gXCI4XCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG4gICAgZm9yIChjb25zdCBub2RlIG9mIG5vZGVzKSB7XG4gICAgICAgIGlmIChub2RlKSB7XG4gICAgICAgICAgICBwdk5hbWUgPSBcInB2LVwiICsgc3BhY2luZ05hbWU7XG4gICAgICAgICAgICB1cGRhdGVOYW1lKHsgdHlwZTogXCJ2ZXJ0aWNhbFwiLCB2YWx1ZTogcHZOYW1lIH0sIG5vZGUpO1xuICAgICAgICAgICAgaWYgKG5vZGUudHlwZSA9PT0gXCJHUk9VUFwiKSB7XG4gICAgICAgICAgICAgICAgbm9kZS52ZXJ0aWNhbFBhZGRpbmcgPSBzcGFjaW5nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IHNldEF1dG9MYXlvdXQgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUudmVydGljYWxQYWRkaW5nID0gc3BhY2luZztcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiByZXNvbHZlKFwiZG9uZVwiKSwgNSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59O1xuY29uc3QgSXRlbVNwYWNpbmcgPSAobm9kZXMsIG1zZykgPT4ge1xuICAgIGxldCBzbGlkZXJWYWx1ZSA9IG1zZy5zbGlkZXJWYWx1ZTtcbiAgICBsZXQgc3BhY2luZyA9IG51bGw7XG4gICAgbGV0IHNwYWNpbmdOYW1lID0gbnVsbDtcbiAgICBzd2l0Y2ggKHNsaWRlclZhbHVlKSB7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBzcGFjaW5nID0gMDtcbiAgICAgICAgICAgIHNwYWNpbmdOYW1lID0gXCJub25lXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIjFcIjpcbiAgICAgICAgICAgIHNwYWNpbmcgPSA0O1xuICAgICAgICAgICAgc3BhY2luZ05hbWUgPSBcIjFcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiMlwiOlxuICAgICAgICAgICAgc3BhY2luZyA9IDg7XG4gICAgICAgICAgICBzcGFjaW5nTmFtZSA9IFwiMlwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCIzXCI6XG4gICAgICAgICAgICBzcGFjaW5nID0gMTI7XG4gICAgICAgICAgICBzcGFjaW5nTmFtZSA9IFwiM1wiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCI0XCI6XG4gICAgICAgICAgICBzcGFjaW5nID0gMTI7XG4gICAgICAgICAgICBzcGFjaW5nTmFtZSA9IFwiNFwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCI1XCI6XG4gICAgICAgICAgICBzcGFjaW5nID0gMjQ7XG4gICAgICAgICAgICBzcGFjaW5nTmFtZSA9IFwiNVwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCI2XCI6XG4gICAgICAgICAgICBzcGFjaW5nID0gMzI7XG4gICAgICAgICAgICBzcGFjaW5nTmFtZSA9IFwiNlwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCI3XCI6XG4gICAgICAgICAgICBzcGFjaW5nID0gNDA7XG4gICAgICAgICAgICBzcGFjaW5nTmFtZSA9IFwiN1wiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCI4XCI6XG4gICAgICAgICAgICBzcGFjaW5nID0gNDg7XG4gICAgICAgICAgICBzcGFjaW5nTmFtZSA9IFwiOFwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGZvciAoY29uc3Qgbm9kZSBvZiBub2Rlcykge1xuICAgICAgICBub2RlLml0ZW1TcGFjaW5nID0gc3BhY2luZztcbiAgICAgICAgc3BOYW1lID0gXCJzcC1cIiArIHNwYWNpbmdOYW1lO1xuICAgICAgICB1cGRhdGVOYW1lKHsgdHlwZTogXCJzcGFjaW5nXCIsIHZhbHVlOiBzcE5hbWUgfSwgbm9kZSk7XG4gICAgfVxufTtcbmV4cG9ydCB7IFBhZGRpbmdIb3Jpem9udGFsU2xpZGVyLCBQYWRkaW5nVmVydGljYWxTbGlkZXIsIEl0ZW1TcGFjaW5nIH07XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB7IERhcmtVaUNvbG9ycywgTGlnaHRVaUNvbG9ycyB9IGZyb20gXCIuLi90aGVtZS1zdHlsZXMvY29sb3JzXCI7XG5pbXBvcnQgeyBEYXJrVWlFZmZlY3RzLCBMaWdodFVpRWZmZWN0cyB9IGZyb20gXCIuLi90aGVtZS1zdHlsZXMvZWZmZWN0c1wiO1xuLy8gRmlsbFxuY29uc3Qgc3dhcEZpbGwgPSAobm9kZSkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgbGV0IG5vZGVGaWxsU3R5bGVJZCA9IG5vZGUuZmlsbFN0eWxlSWQ7XG4gICAgbGV0IG5vZGVGaWxsUGFpbnRTdHlsZSA9IGZpZ21hLmdldFN0eWxlQnlJZChub2RlRmlsbFN0eWxlSWQpO1xuICAgIGxldCBub2RlRmlsbFBhaW50TmFtZSA9IG5vZGVGaWxsUGFpbnRTdHlsZS5uYW1lO1xuICAgIGxldCBzd2FwcGVkTm9kZUZpbGxOYW1lID0gbnVsbDtcbiAgICBsZXQgbm9kZUZpbGxQYWludElzTGlnaHRNb2RlID0gbm9kZUZpbGxQYWludE5hbWUuaW5jbHVkZXMoXCJsaWdodCB1aVwiKTtcbiAgICBpZiAobm9kZUZpbGxQYWludElzTGlnaHRNb2RlKSB7XG4gICAgICAgIHN3YXBwZWROb2RlRmlsbE5hbWUgPSBub2RlRmlsbFBhaW50TmFtZS5yZXBsYWNlKFwibGlnaHQgdWkvXCIsIFwiZGFyayB1aS9cIik7XG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBEYXJrVWlDb2xvcnMpIHtcbiAgICAgICAgICAgIGlmIChpdGVtLm5hbWUgPT09IHN3YXBwZWROb2RlRmlsbE5hbWUpIHtcbiAgICAgICAgICAgICAgICBmaWdtYS5pbXBvcnRTdHlsZUJ5S2V5QXN5bmMoaXRlbS5zdHlsZUtleSkudGhlbigocmVzcCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBub2RlLmZpbGxTdHlsZUlkID0gcmVzcC5pZDtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgc3dhcHBlZE5vZGVGaWxsTmFtZSA9IG5vZGVGaWxsUGFpbnROYW1lLnJlcGxhY2UoXCJkYXJrIHVpL1wiLCBcImxpZ2h0IHVpL1wiKTtcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIExpZ2h0VWlDb2xvcnMpIHtcbiAgICAgICAgICAgIGlmIChpdGVtLm5hbWUgPT09IHN3YXBwZWROb2RlRmlsbE5hbWUpIHtcbiAgICAgICAgICAgICAgICBmaWdtYS5pbXBvcnRTdHlsZUJ5S2V5QXN5bmMoaXRlbS5zdHlsZUtleSkudGhlbigocmVzcCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBub2RlLmZpbGxTdHlsZUlkID0gcmVzcC5pZDtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0pO1xuLy8gU3Ryb2tlc1xuY29uc3Qgc3dhcFN0cm9rZSA9IChub2RlKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICBsZXQgbm9kZVN0cm9rZVN0eWxlSWQgPSBub2RlLnN0cm9rZVN0eWxlSWQ7XG4gICAgbGV0IG5vZGVTdHJva2VQYWludFN0eWxlID0gZmlnbWEuZ2V0U3R5bGVCeUlkKG5vZGVTdHJva2VTdHlsZUlkKTtcbiAgICBsZXQgbm9kZVN0cm9rZVBhaW50TmFtZSA9IG5vZGVTdHJva2VQYWludFN0eWxlLm5hbWU7XG4gICAgbGV0IHN3YXBwZWROb2RlU3Ryb2tlTmFtZSA9IG51bGw7XG4gICAgbGV0IG5vZGVTdHJva2VQYWludElzTGlnaHRNb2RlID0gbm9kZVN0cm9rZVBhaW50TmFtZS5pbmNsdWRlcyhcImxpZ2h0IHVpXCIpO1xuICAgIGNvbnNvbGUubG9nKFwiU3Ryb2tlOiBcIiArIG5vZGVTdHJva2VQYWludE5hbWUpO1xuICAgIGlmIChub2RlU3Ryb2tlUGFpbnRJc0xpZ2h0TW9kZSkge1xuICAgICAgICBzd2FwcGVkTm9kZVN0cm9rZU5hbWUgPSBub2RlU3Ryb2tlUGFpbnROYW1lLnJlcGxhY2UoXCJsaWdodCB1aS9cIiwgXCJkYXJrIHVpL1wiKTtcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIERhcmtVaUNvbG9ycykge1xuICAgICAgICAgICAgaWYgKGl0ZW0ubmFtZSA9PT0gc3dhcHBlZE5vZGVTdHJva2VOYW1lKSB7XG4gICAgICAgICAgICAgICAgZmlnbWEuaW1wb3J0U3R5bGVCeUtleUFzeW5jKGl0ZW0uc3R5bGVLZXkpLnRoZW4oKHJlc3ApID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5zdHJva2VTdHlsZUlkID0gcmVzcC5pZDtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIERvIG5vdGhpbmdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgc3dhcHBlZE5vZGVTdHJva2VOYW1lID0gbm9kZVN0cm9rZVBhaW50TmFtZS5yZXBsYWNlKFwiZGFyayB1aS9cIiwgXCJsaWdodCB1aS9cIik7XG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBMaWdodFVpQ29sb3JzKSB7XG4gICAgICAgICAgICBpZiAoaXRlbS5uYW1lID09PSBzd2FwcGVkTm9kZVN0cm9rZU5hbWUpIHtcbiAgICAgICAgICAgICAgICBmaWdtYS5pbXBvcnRTdHlsZUJ5S2V5QXN5bmMoaXRlbS5zdHlsZUtleSkudGhlbigocmVzcCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBub2RlLnN0cm9rZVN0eWxlSWQgPSByZXNwLmlkO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gRG8gbm90aGluZ1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSk7XG4vLyBFZmZlY3RzXG5jb25zdCBzd2FwRWZmZWN0cyA9IChub2RlKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICBsZXQgbm9kZUVmZmVjdFN0eWxlSWQgPSBub2RlLmVmZmVjdFN0eWxlSWQ7XG4gICAgbGV0IG5vZGVFZmZlY3RTdHlsZSA9IGZpZ21hLmdldFN0eWxlQnlJZChub2RlRWZmZWN0U3R5bGVJZCk7XG4gICAgbGV0IG5vZGVFZmZlY3RTdHlsZU5hbWUgPSBub2RlRWZmZWN0U3R5bGUubmFtZTtcbiAgICBsZXQgc3dhcHBlZE5vZGVFZmZlY3ROYW1lID0gbnVsbDtcbiAgICBsZXQgbm9kZUVmZmVjdFN0eWxlTmFtZUlzTGlnaHQgPSBub2RlRWZmZWN0U3R5bGVOYW1lLmluY2x1ZGVzKFwibGlnaHQgdWlcIik7XG4gICAgY29uc29sZS5sb2coXCJFZmZlY3Q6IFwiICsgbm9kZUVmZmVjdFN0eWxlTmFtZSk7XG4gICAgaWYgKG5vZGVFZmZlY3RTdHlsZU5hbWVJc0xpZ2h0KSB7XG4gICAgICAgIHN3YXBwZWROb2RlRWZmZWN0TmFtZSA9IG5vZGVFZmZlY3RTdHlsZU5hbWUucmVwbGFjZShcImxpZ2h0IHVpL1wiLCBcImRhcmsgdWkvXCIpO1xuICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgRGFya1VpRWZmZWN0cykge1xuICAgICAgICAgICAgaWYgKGl0ZW0ubmFtZSA9PT0gc3dhcHBlZE5vZGVFZmZlY3ROYW1lKSB7XG4gICAgICAgICAgICAgICAgZmlnbWEuaW1wb3J0U3R5bGVCeUtleUFzeW5jKGl0ZW0uc3R5bGVLZXkpLnRoZW4oKHJlc3ApID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5lZmZlY3RTdHlsZUlkID0gcmVzcC5pZDtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIGRvIG5vdGhpbmdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgc3dhcHBlZE5vZGVFZmZlY3ROYW1lID0gbm9kZUVmZmVjdFN0eWxlTmFtZS5yZXBsYWNlKFwiZGFyayB1aS9cIiwgXCJsaWdodCB1aS9cIik7XG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBMaWdodFVpRWZmZWN0cykge1xuICAgICAgICAgICAgaWYgKGl0ZW0ubmFtZSA9PT0gc3dhcHBlZE5vZGVFZmZlY3ROYW1lKSB7XG4gICAgICAgICAgICAgICAgZmlnbWEuaW1wb3J0U3R5bGVCeUtleUFzeW5jKGl0ZW0uc3R5bGVLZXkpLnRoZW4oKHJlc3ApID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5lZmZlY3RTdHlsZUlkID0gcmVzcC5pZDtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIERvIG5vdGhpbmdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0pO1xuLy8gVGhlbWUgU3dhcFxuY29uc3QgVGhlbWVTd2FwID0gKG5vZGUpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIEdldEFsbExvY2FsUGFpbnRTdHlsZXMoKTtcbiAgICAvLyBHZXRBbGxMb2NhbEVmZmVjdFN0eWxlcygpO1xuICAgIC8vIGRvIG5vdGhpbmcgYmVsb3dcbiAgICBpZiAoXCJjaGlsZHJlblwiIGluIG5vZGUpIHtcbiAgICAgICAgZm9yIChjb25zdCBjaGlsZCBvZiBub2RlLmNoaWxkcmVuKSB7XG4gICAgICAgICAgICBpZiAoY2hpbGQubG9ja2VkKSB7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBUaGVtZVN3YXAoY2hpbGQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICAvLyBkbyBub3RoaW5nXG4gICAgfVxuICAgIHN3YXBGaWxsKG5vZGUpO1xuICAgIHN3YXBTdHJva2Uobm9kZSk7XG4gICAgc3dhcEVmZmVjdHMobm9kZSk7XG59KTtcbmV4cG9ydCB7IFRoZW1lU3dhcCB9O1xuLy8gUnVuIHRoaXMgaW4gdG9rZW5zIGZpbGVcbmNvbnN0IEdldEFsbExvY2FsUGFpbnRTdHlsZXMgPSAoKSA9PiB7XG4gICAgZnVuY3Rpb24gY2xvbmUodmFsKSB7XG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHZhbCkpO1xuICAgIH1cbiAgICBsZXQgYWxsUGFpbnRTdHlsZXMgPSBmaWdtYS5nZXRMb2NhbFBhaW50U3R5bGVzKCk7XG4gICAgLy8gY29uc29sZS5sb2coYWxsUGFpbnRTdHlsZXMpO1xuICAgIGxldCBhbGxTdHlsZXNBcnJheSA9IFtdO1xuICAgIGZvciAoY29uc3QgcGFpbnRTdHlsZSBvZiBhbGxQYWludFN0eWxlcykge1xuICAgICAgICBsZXQgY29sb3IgPSBjbG9uZShwYWludFN0eWxlLnBhaW50c1swXSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGNvbG9yKTtcbiAgICAgICAgbGV0IGNvbG9yUkdCID0gY29sb3IuY29sb3I7XG4gICAgICAgIGxldCByZ2JUb0ludCA9ICh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIE1hdGguY2VpbCh2YWx1ZSAqIDI1NSk7XG4gICAgICAgIH07XG4gICAgICAgIGxldCByZ2JhID0ge1xuICAgICAgICAgICAgcjogcmdiVG9JbnQoY29sb3JSR0IuciksXG4gICAgICAgICAgICBnOiByZ2JUb0ludChjb2xvclJHQi5nKSxcbiAgICAgICAgICAgIGI6IHJnYlRvSW50KGNvbG9yUkdCLmIpLFxuICAgICAgICAgICAgYTogY29sb3Iub3BhY2l0eSxcbiAgICAgICAgfTtcbiAgICAgICAgYWxsU3R5bGVzQXJyYXkucHVzaCh7XG4gICAgICAgICAgICBuYW1lOiBwYWludFN0eWxlLm5hbWUsXG4gICAgICAgICAgICBzdHlsZUtleTogcGFpbnRTdHlsZS5rZXksXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zb2xlLmxvZyhhbGxTdHlsZXNBcnJheSk7XG4gICAgfVxufTtcbi8vIFJ1biB0aGlzIGluIHRva2VucyBmaWxlXG5jb25zdCBHZXRBbGxMb2NhbEVmZmVjdFN0eWxlcyA9ICgpID0+IHtcbiAgICBsZXQgYWxsRWZmZWN0U3R5bGVzID0gZmlnbWEuZ2V0TG9jYWxFZmZlY3RTdHlsZXMoKTtcbiAgICBsZXQgYWxsRWZmZWN0cyA9IFtdO1xuICAgIGZvciAoY29uc3QgZWZmZWN0U3R5bGUgb2YgYWxsRWZmZWN0U3R5bGVzKSB7XG4gICAgICAgIGFsbEVmZmVjdHMucHVzaCh7IG5hbWU6IGVmZmVjdFN0eWxlLm5hbWUsIHN0eWxlS2V5OiBlZmZlY3RTdHlsZS5rZXkgfSk7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKGFsbEVmZmVjdHMpO1xufTtcbiIsImV4cG9ydCBjb25zdCBwYWRkaW5nSG9yaXpvbnRhbCA9IChzcGFjaW5nKSA9PiB7XG4gIGxldCBncmlkcztcblxuICBpZiAoc3BhY2luZyA9PSAwKSB7XG4gICAgZ3JpZHMgPSBbXTtcbiAgfSBlbHNlIHtcbiAgICBncmlkcyA9IFtcbiAgICAgIHtcbiAgICAgICAgcGF0dGVybjogXCJDT0xVTU5TXCIsXG4gICAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICAgIGNvbG9yOiB7XG4gICAgICAgICAgcjogMCxcbiAgICAgICAgICBnOiAwLjUsXG4gICAgICAgICAgYjogMSxcbiAgICAgICAgICBhOiAwLjA1LFxuICAgICAgICB9LFxuICAgICAgICBndXR0ZXJTaXplOiAxLFxuICAgICAgICBhbGlnbm1lbnQ6IFwiU1RSRVRDSFwiLFxuICAgICAgICBjb3VudDogMSxcbiAgICAgICAgb2Zmc2V0OiBzcGFjaW5nLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0dGVybjogXCJDT0xVTU5TXCIsXG4gICAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICAgIGNvbG9yOiB7XG4gICAgICAgICAgcjogMCxcbiAgICAgICAgICBnOiAxLFxuICAgICAgICAgIGI6IDAsXG4gICAgICAgICAgYTogMC4yLFxuICAgICAgICB9LFxuICAgICAgICBndXR0ZXJTaXplOiAxLFxuICAgICAgICBhbGlnbm1lbnQ6IFwiTUFYXCIsXG4gICAgICAgIGNvdW50OiAxLFxuICAgICAgICBzZWN0aW9uU2l6ZTogc3BhY2luZyxcbiAgICAgICAgb2Zmc2V0OiAwLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0dGVybjogXCJDT0xVTU5TXCIsXG4gICAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICAgIGNvbG9yOiB7XG4gICAgICAgICAgcjogMCxcbiAgICAgICAgICBnOiAxLFxuICAgICAgICAgIGI6IDAsXG4gICAgICAgICAgYTogMC4yLFxuICAgICAgICB9LFxuICAgICAgICBndXR0ZXJTaXplOiAxLFxuICAgICAgICBhbGlnbm1lbnQ6IFwiTUlOXCIsXG4gICAgICAgIGNvdW50OiAxLFxuICAgICAgICBzZWN0aW9uU2l6ZTogc3BhY2luZyxcbiAgICAgICAgb2Zmc2V0OiAwLFxuICAgICAgfSxcbiAgICBdO1xuICB9XG5cbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICByZXNvbHZlKGdyaWRzKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgcGFkZGluZ1ZlcnRpY2FsID0gKHNwYWNpbmcpID0+IHtcbiAgbGV0IGdyaWRzO1xuXG4gIGlmIChzcGFjaW5nID09IDApIHtcbiAgICBncmlkcyA9IFtdO1xuICB9IGVsc2Uge1xuICAgIGdyaWRzID0gW1xuICAgICAge1xuICAgICAgICBwYXR0ZXJuOiBcIlJPV1NcIixcbiAgICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgICAgY29sb3I6IHtcbiAgICAgICAgICByOiAwLFxuICAgICAgICAgIGc6IDAuNSxcbiAgICAgICAgICBiOiAxLFxuICAgICAgICAgIGE6IDAuMDUsXG4gICAgICAgIH0sXG4gICAgICAgIGd1dHRlclNpemU6IDEsXG4gICAgICAgIGFsaWdubWVudDogXCJTVFJFVENIXCIsXG4gICAgICAgIGNvdW50OiAxLFxuICAgICAgICBvZmZzZXQ6IHNwYWNpbmcsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXR0ZXJuOiBcIlJPV1NcIixcbiAgICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgICAgY29sb3I6IHtcbiAgICAgICAgICByOiAwLFxuICAgICAgICAgIGc6IDEsXG4gICAgICAgICAgYjogMCxcbiAgICAgICAgICBhOiAwLjIsXG4gICAgICAgIH0sXG4gICAgICAgIGd1dHRlclNpemU6IDEsXG4gICAgICAgIGFsaWdubWVudDogXCJNQVhcIixcbiAgICAgICAgY291bnQ6IDEsXG4gICAgICAgIHNlY3Rpb25TaXplOiBzcGFjaW5nLFxuICAgICAgICBvZmZzZXQ6IDAsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXR0ZXJuOiBcIlJPV1NcIixcbiAgICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgICAgY29sb3I6IHtcbiAgICAgICAgICByOiAwLFxuICAgICAgICAgIGc6IDEsXG4gICAgICAgICAgYjogMCxcbiAgICAgICAgICBhOiAwLjIsXG4gICAgICAgIH0sXG4gICAgICAgIGd1dHRlclNpemU6IDEsXG4gICAgICAgIGFsaWdubWVudDogXCJNSU5cIixcbiAgICAgICAgY291bnQ6IDEsXG4gICAgICAgIHNlY3Rpb25TaXplOiBzcGFjaW5nLFxuICAgICAgICBvZmZzZXQ6IDAsXG4gICAgICB9LFxuICAgIF07XG4gIH1cblxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIHJlc29sdmUoZ3JpZHMpO1xuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBiYXNlbGluZUdyaWRzID0ge1xuICBwYXR0ZXJuOiBcIlJPV1NcIixcbiAgdmlzaWJsZTogdHJ1ZSxcbiAgY29sb3I6IHtcbiAgICByOiAxLFxuICAgIGc6IDAsXG4gICAgYjogMCxcbiAgICBhOiAwLjEwMDAwMDAwMTQ5MDExNjEyLFxuICB9LFxuICBndXR0ZXJTaXplOiA0LFxuICBhbGlnbm1lbnQ6IFwiTUlOXCIsXG4gIGNvdW50OiBJbmZpbml0eSxcbiAgc2VjdGlvblNpemU6IDQsXG4gIG9mZnNldDogMCxcbn07XG5cbmV4cG9ydCBjb25zdCBtYXhXaWR0aEdyaWRzID0gW1xuICB7XG4gICAgcGF0dGVybjogXCJDT0xVTU5TXCIsXG4gICAgdmlzaWJsZTogdHJ1ZSxcbiAgICBjb2xvcjoge1xuICAgICAgcjogMSxcbiAgICAgIGc6IDAuNzE5OTk5OTY5MDA1NTg0NyxcbiAgICAgIGI6IDAsXG4gICAgICBhOiAwLjIwMDAwMDAwMjk4MDIzMjI0LFxuICAgIH0sXG4gICAgZ3V0dGVyU2l6ZTogMTAyNSxcbiAgICBhbGlnbm1lbnQ6IFwiU1RSRVRDSFwiLFxuICAgIGNvdW50OiAyLFxuICAgIG9mZnNldDogMCxcbiAgfSxcbiAge1xuICAgIHBhdHRlcm46IFwiQ09MVU1OU1wiLFxuICAgIHZpc2libGU6IHRydWUsXG4gICAgY29sb3I6IHtcbiAgICAgIHI6IDAsXG4gICAgICBnOiAwLjUsXG4gICAgICBiOiAxLFxuICAgICAgYTogMC4xLFxuICAgIH0sXG4gICAgZ3V0dGVyU2l6ZTogMSxcbiAgICBhbGlnbm1lbnQ6IFwiQ0VOVEVSXCIsXG4gICAgY291bnQ6IDEsXG4gICAgc2VjdGlvblNpemU6IDEwMjUsXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgbWF4V2lkdGhMZWZ0QWxpZ25lZEdyaWRzID0gW1xuICB7XG4gICAgcGF0dGVybjogXCJDT0xVTU5TXCIsXG4gICAgdmlzaWJsZTogdHJ1ZSxcbiAgICBjb2xvcjoge1xuICAgICAgcjogMCxcbiAgICAgIGc6IDAuNSxcbiAgICAgIGI6IDEsXG4gICAgICBhOiAwLjA1LFxuICAgIH0sXG4gICAgZ3V0dGVyU2l6ZTogMSxcbiAgICBhbGlnbm1lbnQ6IFwiTUlOXCIsXG4gICAgY291bnQ6IDEsXG4gICAgc2VjdGlvblNpemU6IDEwMjUsXG4gICAgb2Zmc2V0OiAwLFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IGdldE1heFdpZHRoR3JpZHMgPSAoKSA9PiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgcmVzb2x2ZShtYXhXaWR0aEdyaWRzKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgY29sdW1uR3JpZHMgPSBbXG4gIHtcbiAgICBwYXR0ZXJuOiBcIkNPTFVNTlNcIixcbiAgICB2aXNpYmxlOiB0cnVlLFxuICAgIGNvbG9yOiB7XG4gICAgICByOiAwLjgyOTk5OTkyMzcwNjA1NDcsXG4gICAgICBnOiAwLFxuICAgICAgYjogMSxcbiAgICAgIGE6IDAuMSxcbiAgICB9LFxuICAgIGd1dHRlclNpemU6IDE2LFxuICAgIGFsaWdubWVudDogXCJTVFJFVENIXCIsXG4gICAgY291bnQ6IDEyLFxuICAgIG9mZnNldDogMCxcbiAgfSxcbl07XG4iLCJleHBvcnQgY29uc3QgTGlnaHRVaUNvbG9ycyA9IFtcbiAge1xuICAgIG5hbWU6IFwibGlnaHQgdWkvaW50ZW50aW9ucy9wcmltYXJ5Lm1haW5cIixcbiAgICBzdHlsZUtleTogXCJjZjBjOGU4OGViNjViODA0OWZlY2E2MGFjODNlMWRlM2QzYWI2ZThiXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImxpZ2h0IHVpL2ludGVudGlvbnMvcHJpbWFyeS5tYWluLjUwXCIsXG4gICAgc3R5bGVLZXk6IFwiYTNlZWViYWQ1ZjlmMDM3YWM5M2E5NWM5NzhhYzhjYzhiN2NjZmEzN1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJsaWdodCB1aS9pbnRlbnRpb25zL3ByaW1hcnkuZGFya1wiLFxuICAgIHN0eWxlS2V5OiBcImRhOTM4Njk4YzlkMjIzMjIxZDYzYzdjNTUwMWE5MDU3YTBkNWY2ZmJcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwibGlnaHQgdWkvaW50ZW50aW9ucy9wcmltYXJ5LmxpZ2h0XCIsXG4gICAgc3R5bGVLZXk6IFwiMGUyYWJlMzhjMTk1MDFiZWRiYTA2NzA3NGI5ZmY1OWNhM2E0OTE0YlwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJsaWdodCB1aS9pbnRlbnRpb25zL2Vycm9yLm1haW5cIixcbiAgICBzdHlsZUtleTogXCI3OThjYjhmODk4YWIyYTUwOGE3YmE0OTFkODk5MDExZmRhODk2NTc3XCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImxpZ2h0IHVpL2ludGVudGlvbnMvZXJyb3IubWFpbi41MFwiLFxuICAgIHN0eWxlS2V5OiBcIjY1MTAwOTAyZTczMTkyYTMwNTRmNmFiZTU4YTdjNDQxN2EwNjM5ODRcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwibGlnaHQgdWkvaW50ZW50aW9ucy9lcnJvci5kYXJrXCIsXG4gICAgc3R5bGVLZXk6IFwiMTI3NzY0NTZlNjhhZGY0YWI1ZTM5MTc5N2MzYzg0ZTkyYjBmODZjMlwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJsaWdodCB1aS9pbnRlbnRpb25zL2Vycm9yLmxpZ2h0XCIsXG4gICAgc3R5bGVLZXk6IFwiZDM1ZGFiYzNlZTdmNWJlMThhYzBkMmFlYjc0YzcyYmFhYThiYmNhN1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJsaWdodCB1aS9pbnRlbnRpb25zL3dhcm5pbmcubWFpblwiLFxuICAgIHN0eWxlS2V5OiBcImYyN2E2MGRmOGMxNjIxODVlYTI0NzJhODAxYjI3MWVmNjYyYzA0MjlcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwibGlnaHQgdWkvaW50ZW50aW9ucy93YXJuaW5nLm1haW4uNTBcIixcbiAgICBzdHlsZUtleTogXCJkNmYwOTRiNGFhZGQzM2RjNjQyMDk1ODI5N2M0Yjg4YmMyOTQ5MTM1XCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImxpZ2h0IHVpL2ludGVudGlvbnMvd2FybmluZy5kYXJrXCIsXG4gICAgc3R5bGVLZXk6IFwiNjE1ZDZkNWNhYzQ4NTVlOTgxYzhiOTQyYjk4NmVlNzA1YjU2OGIyOFwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJsaWdodCB1aS9pbnRlbnRpb25zL3dhcm5pbmcubGlnaHRcIixcbiAgICBzdHlsZUtleTogXCJkNGMzMDEzNWY0YzEyYzdkZjQ0NDIyMjIxMTZhOWViN2NlYmY2NWJlXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImxpZ2h0IHVpL2ludGVudGlvbnMvc3VjY2Vzcy5tYWluXCIsXG4gICAgc3R5bGVLZXk6IFwiZTRhYTQxZThiZjUyZjk0ZWY1ZmNlMzY2OWY1MTBhZjNjYjc5YzVhN1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJsaWdodCB1aS9pbnRlbnRpb25zL3N1Y2Nlc3MubWFpbi41MFwiLFxuICAgIHN0eWxlS2V5OiBcIjkzZjhjYjBhYzU0MDJjOTI4NmYyMGU5NGEyZWExZDBiMDRhMDBkOWZcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwibGlnaHQgdWkvaW50ZW50aW9ucy9zdWNjZXNzLmRhcmtcIixcbiAgICBzdHlsZUtleTogXCJkOTg4M2I1M2MyNTM5YmYxZTEwNjgyMDVmZTFkMDU5ZDU4MzE1ZTRmXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImxpZ2h0IHVpL2ludGVudGlvbnMvc3VjY2Vzcy5saWdodFwiLFxuICAgIHN0eWxlS2V5OiBcIjUyN2Y2OGNlN2NjYmFkODE0NTY0ZjQ3Zjg4YmRlYWRhODA3NzUzNzdcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwibGlnaHQgdWkvdHlwb2dyYXBoeS90ZXh0LnByaW1hcnlcIixcbiAgICBzdHlsZUtleTogXCI4ZjA1YzYzZGU3ZjEwMGIyYmQ4ZmFkN2I4YmQ3MTQ4OWI2MzdjMDY3XCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImxpZ2h0IHVpL3R5cG9ncmFwaHkvdGV4dC5zZWNvbmRhcnlcIixcbiAgICBzdHlsZUtleTogXCI5NzA2M2E1ZjYyYzM1NGU2YWUwOTE5ZDUwYjY4ZDBiYWRiNGExMjJlXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImxpZ2h0IHVpL3R5cG9ncmFwaHkvdGV4dC5kaXNhYmxlZFwiLFxuICAgIHN0eWxlS2V5OiBcImE4MDlmNzVlMTRmYmU2Mjk2MjcyZTg1MzExMDZmNmNjNGM2OTI1NTNcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwibGlnaHQgdWkvdHlwb2dyYXBoeS90ZXh0LmNvbnRyYXN0VGV4dC5wcmltYXJ5XCIsXG4gICAgc3R5bGVLZXk6IFwiYjI4YTdmY2RkMjQ3MzIzZDdiYTk5OTYxYzk2MDhjZjgzNzhiYWRhMVwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJsaWdodCB1aS90eXBvZ3JhcGh5L3RleHQuY29udHJhc3RUZXh0LmVycm9yXCIsXG4gICAgc3R5bGVLZXk6IFwiYzQyYzVmMTk5MDM5MGM0MTNhZTYyOTI1ZTlhZjBkNTFiZjMyYzk0NVwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJsaWdodCB1aS90eXBvZ3JhcGh5L3RleHQuY29udHJhc3RUZXh0Lndhcm5pbmdcIixcbiAgICBzdHlsZUtleTogXCJlZWNkODJjY2FhZTk4ODYyNGM0NWYyODI5NjU2NDAzN2RhODVjYzFhXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImxpZ2h0IHVpL3R5cG9ncmFwaHkvdGV4dC5jb250cmFzdFRleHQuc3VjY2Vzc1wiLFxuICAgIHN0eWxlS2V5OiBcImQ3ZGJhZWY2NmE5MzJmZjI3NmY2ZjRhYTUxOTg1YTA1OWRlZGZiZjhcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwibGlnaHQgdWkvdHlwb2dyYXBoeS90ZXh0LmFjdGlvbi5kaXNhYmxlZFwiLFxuICAgIHN0eWxlS2V5OiBcImY4MWExZjc0ODcwMzE2OThkMTVjMjM5NGU0Yzc0ZmNjOWVjY2MyOTlcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwibGlnaHQgdWkvdHlwb2dyYXBoeS90ZXh0LmNvbnRyYXN0VGV4dC5jb21wbGlhbnRcIixcbiAgICBzdHlsZUtleTogXCJjYThlODY5NTkyYmQwYzNiOTY4MDZiYzEyNDBjNWY0YmRmZjM4YjFkXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImxpZ2h0IHVpL3R5cG9ncmFwaHkvdGV4dC5jb250cmFzdFRleHQubm9uQ29tcGxpYW50XCIsXG4gICAgc3R5bGVLZXk6IFwiNmNkNjI4ODljNmJlYTY3ZmE2ZTJmODRmYTU4MTRmMWYyMTdkZTNiOFwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJsaWdodCB1aS90eXBvZ3JhcGh5L3RleHQuY29udHJhc3RUZXh0Lm1pc3NlZFwiLFxuICAgIHN0eWxlS2V5OiBcIjcyZDU5Yzg5OTE4MmI0NjQ3MTMwNzhhZThjYmNhNmM3YzQ1OTE3YzdcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwibGlnaHQgdWkvdHlwb2dyYXBoeS90ZXh0LmNvbnRyYXN0VGV4dC5wcmVtaXVtXCIsXG4gICAgc3R5bGVLZXk6IFwiMWYwNjM4YWQ2NzcyYTViNTA1NWIyMjU4MmNhNGU3Y2ZjZjQwMDg2OVwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJsaWdodCB1aS9idXR0b25zL2FjdGlvbi5kaXNhYmxlZEJhY2tncm91bmRcIixcbiAgICBzdHlsZUtleTogXCI3M2IxNWUzYTc5ZWVlYTc1NzI4M2E0NGNmNzExMzEzMDVjYmEyMzk5XCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImxpZ2h0IHVpL2JhY2tncm91bmQvYmFja2dyb3VuZC5wYXBlclwiLFxuICAgIHN0eWxlS2V5OiBcIjIzZTk0ZmNlZWQ5YWNjYmRhNGRiOWM2NzJjNDNkMjFiNGQyODZlNGNcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwibGlnaHQgdWkvYmFja2dyb3VuZC9iYWNrZ3JvdW5kLmRlZmF1bHRcIixcbiAgICBzdHlsZUtleTogXCI5MDNlNWJmMjc0MTM5ZWViOWY0OTY4YTllZjA4ZWMwNWVhZjBiMjc0XCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImxpZ2h0IHVpL3V0aWxpdHkvZGl2aWRlclwiLFxuICAgIHN0eWxlS2V5OiBcImVlNGRkY2UyZTU2YWQ0N2M0MjE2ZDU4MjdhMjgzYjk0M2E3OTRjNzhcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwibGlnaHQgdWkvdXRpbGl0eS9kaXZpZGVyLnN0cm9uZ1wiLFxuICAgIHN0eWxlS2V5OiBcIjE3YWRiZTRlMjdiYTliMDg3ZjYxYWYxNDJkZWViMDdmYzBjMDE1NDBcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwibGlnaHQgdWkvdXRpbGl0eS9vdmVybGF5XCIsXG4gICAgc3R5bGVLZXk6IFwiMTFhNDc3ODAxOGM4YmIyMzZhYmUwZDg0N2M3MzFhMjE3ZTJkNmQ0OFwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJsaWdodCB1aS80RFAvTk1cIixcbiAgICBzdHlsZUtleTogXCJkZGNiZjY4ZmE1YzFlYWE3MjA3NzE2NDI3MmI3YWU1YjllNWU0ZWQ3XCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImxpZ2h0IHVpLzREUC9BQ1wiLFxuICAgIHN0eWxlS2V5OiBcIjIyMGQzNDkzNzQ3Y2Q4ZDhiZGM1ZDRhMGU3OTY1YzM2YTNjNTIzNDlcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwibGlnaHQgdWkvNERQL01BUFwiLFxuICAgIHN0eWxlS2V5OiBcImFhYTNhNTMxYTEyNGZhODU0ZTA5ZDM5OGY5OGZiNDdiOTg5YThhNzJcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwibGlnaHQgdWkvNERQL0ZUUFwiLFxuICAgIHN0eWxlS2V5OiBcIjIyNGU0OTEyMDI3YmU5Zjc1Njg1ZmQ0MGIyNTI4YmE5ZjM0ZmU5NThcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwibGlnaHQgdWkvZGF0YS9wb3dlclwiLFxuICAgIHN0eWxlS2V5OiBcIjA3ODM0ZTAxNDVlMWMwMTU0NjU5MzQ2MjAwNjEyOGZhNmE1MWQ2YWNcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwibGlnaHQgdWkvZGF0YS9oZWFydCByYXRlXCIsXG4gICAgc3R5bGVLZXk6IFwiNWEzM2I4YjRhMDVmMTg5OTYwMzU0MjVlMmJhNmFmODE3OTEyMTFjZFwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJsaWdodCB1aS9kYXRhL2NhZGVuY2VcIixcbiAgICBzdHlsZUtleTogXCI3ZDI4YmU2Mzg3MDk2MjZiNTlmMjgwMjA4Njk2ZmI4MTMwNjI0YzBhXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImxpZ2h0IHVpL2RhdGEvc3BlZWRcIixcbiAgICBzdHlsZUtleTogXCJlOWVhZjZiODQ0ZmQxZjZmMTdkNmNiM2U4ZTg0YjE5ZWM1MDk3YWRjXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImxpZ2h0IHVpL2NvbXBsaWFuY2UvY29tcGxpYW50XCIsXG4gICAgc3R5bGVLZXk6IFwiYjU4MDdiNzJhYzRjNzY4NTIxNDBhOWNhNjhiNDY5ODU2NzA1M2YxMVwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJsaWdodCB1aS9jb21wbGlhbmNlL25vbkNvbXBsaWFudFwiLFxuICAgIHN0eWxlS2V5OiBcIjhmOWQxYmY1YjBkMWNlMzc1M2IxMGU4Y2RlNjIwYWViNmNjYWZmMTFcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwibGlnaHQgdWkvY29tcGxpYW5jZS9taXNzZWRcIixcbiAgICBzdHlsZUtleTogXCJkNDQ0NjVmZjY4YjVmZWQxOTZkMjE3MDU3MGQ3Mjg1ZjUyMDE1YjI2XCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImxpZ2h0IHVpL2NvbXBsaWFuY2UvdW5wYWlyZWRcIixcbiAgICBzdHlsZUtleTogXCIxOGE3NzNiZDNjMjM2ZGI2Zjc2NTZkMDY4M2JiZGU4YjRhZGNlZjI2XCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImxpZ2h0IHVpL2NvbXBsaWFuY2Uvc2NoZWR1bGVkXCIsXG4gICAgc3R5bGVLZXk6IFwiNmRhODhjNTBiZGIyYzRhNmNkZThhY2RjZWI0ZDk0ZjdlOTM1ZGNkMFwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJsaWdodCB1aS9pbnRlcmFjdGlvbi9pbnRlbnRpb25zL3ByaW1hcnkubWFpbi5ob3ZlclwiLFxuICAgIHN0eWxlS2V5OiBcIjMxNDRhOWFmYjU0MTk2NTU4YzUzMGFiNzM2YWFjMTE0MjFmYzQyNTRcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwibGlnaHQgdWkvaW50ZXJhY3Rpb24vaW50ZW50aW9ucy9wcmltYXJ5Lm1haW4ucHJlc3NlZFwiLFxuICAgIHN0eWxlS2V5OiBcIjRlYmUwZTIwOWUzNmI1YjViZmNlMDQxNTJlOWYxNDkyODU0MmJhZGJcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwibGlnaHQgdWkvaW50ZXJhY3Rpb24vaW50ZW50aW9ucy9lcnJvci5tYWluLmhvdmVyXCIsXG4gICAgc3R5bGVLZXk6IFwiZGE1MWFkMjM3ZmIxOWIxMDZiODhmNWEyOWQ5ODkzN2FkZGMzYTBiMFwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJsaWdodCB1aS9pbnRlcmFjdGlvbi9pbnRlbnRpb25zL2Vycm9yLm1haW4ucHJlc3NlZFwiLFxuICAgIHN0eWxlS2V5OiBcIjc4ZmJiOTgxZTJlNWU4YjM3ZmQzZTZjZTJhOWU1YTg4YjkyNGVkNzhcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwibGlnaHQgdWkvaW50ZXJhY3Rpb24vaW50ZW50aW9ucy93YXJuaW5nLm1haW4uaG92ZXJcIixcbiAgICBzdHlsZUtleTogXCJhNjgyY2I3MzNjZGU0MjMzM2Q5MDdlN2E0YjBhYzljZThlZjIyNjQyXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImxpZ2h0IHVpL2ludGVyYWN0aW9uL2ludGVudGlvbnMvd2FybmluZy5tYWluLnByZXNzZWRcIixcbiAgICBzdHlsZUtleTogXCJmMjExYjgwYWRiNjc5YmMxYjIwODYwYjc1MjlmOTA0ZjMwOTgyNzgwXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImxpZ2h0IHVpL2ludGVyYWN0aW9uL2ludGVudGlvbnMvc3VjY2Vzcy5tYWluLmhvdmVyXCIsXG4gICAgc3R5bGVLZXk6IFwiM2JhMWJhZTNjYzAxZmIyNGY1M2E0MTg2YWUzNDU5YTc3NDk0ZmU2YVwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJsaWdodCB1aS9pbnRlcmFjdGlvbi9pbnRlbnRpb25zL3N1Y2Nlc3MubWFpbi5wcmVzc2VkXCIsXG4gICAgc3R5bGVLZXk6IFwiN2M2YmNmZDFkYTlmYmJmNmM1ZTJiZGVkNjk1OGM3MGVmNWFmOGQwZlwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJsaWdodCB1aS9pbnRlcmFjdGlvbi9iYWNrZ3JvdW5kL2RlZmF1bHQuaG92ZXJcIixcbiAgICBzdHlsZUtleTogXCI3NjRlNTgxNTk4ZGRlMmFmMzU0NDYwODFmYzIzYmVhZjFkN2Q0MmUxXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImxpZ2h0IHVpL2ludGVyYWN0aW9uL2JhY2tncm91bmQvZGVmYXVsdC5wcmVzc2VkXCIsXG4gICAgc3R5bGVLZXk6IFwiNTBhNzNlYmNiMDYxMmFkNWQxNzJiZWFiMjI3OWM5ZDUzMzBiYzEwYVwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJsaWdodCB1aS9pbnRlcmFjdGlvbi9iYWNrZ3JvdW5kL3BhcGVyLmhvdmVyXCIsXG4gICAgc3R5bGVLZXk6IFwiMjJlM2QwMmQ1ZjhiMWQ5MmJlYTNjYTBjY2FlZGViYzgzNGQ3NGQ4NFwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJsaWdodCB1aS9pbnRlcmFjdGlvbi9iYWNrZ3JvdW5kL3BhcGVyLnByZXNzZWRcIixcbiAgICBzdHlsZUtleTogXCJjNGNmZTFmMzczMDQzZWNiMGZjYWNjYmYyMjgwOTY0YjUzMjM3YjAwXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImxpZ2h0IHVpL2ludGVyYWN0aW9uL3NwZWNpYWwgdXNlL3ByZW1pdW0uaG92ZXJcIixcbiAgICBzdHlsZUtleTogXCI5YTYxMmE3Zjk5YWNhZWFhODgyNTA4YjI1NDZjZTE2YmEwZTJkZmVmXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImxpZ2h0IHVpL2ludGVyYWN0aW9uL3NwZWNpYWwgdXNlL3ByZW1pdW0ucHJlc3NlZFwiLFxuICAgIHN0eWxlS2V5OiBcImY1YzI0ZjQ0YWQ0MGI5MGJmZTFhNDJmYWYxOTQzYWMxYTBiYTBlZTFcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwibGlnaHQgdWkvc3BlY2lhbCB1c2UvcHJlbWl1bVwiLFxuICAgIHN0eWxlS2V5OiBcIjc4Y2Y0MDE4ZTViYzlmYWQ2NzY5OGM5YTlhM2M2NWZkZThmMTI3ZjZcIixcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBEYXJrVWlDb2xvcnMgPSBbXG4gIHtcbiAgICBuYW1lOiBcImRhcmsgdWkvaW50ZW50aW9ucy9wcmltYXJ5Lm1haW5cIixcbiAgICBzdHlsZUtleTogXCIyYjc5MmQ4NGM5ZGRiNWJiNTRiNGU3Y2UwMDBjNTk1Yzc5ZDc0OGNhXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImRhcmsgdWkvaW50ZW50aW9ucy9wcmltYXJ5Lm1haW4uNTBcIixcbiAgICBzdHlsZUtleTogXCJiMzcxYWFiNzQ1MjJiMDFhYjBiYTg3MGE5ZTI2YzNiN2U2ZTQ4Mjg3XCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImRhcmsgdWkvaW50ZW50aW9ucy9wcmltYXJ5LmRhcmtcIixcbiAgICBzdHlsZUtleTogXCJiNDNiZDExMTI1MGNlNzRkNDhjZmQ3MWFjMDBjMWMxYjU1OGIwMmYwXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImRhcmsgdWkvaW50ZW50aW9ucy9wcmltYXJ5LmxpZ2h0XCIsXG4gICAgc3R5bGVLZXk6IFwiZjM3N2U3NzVjODRmMjc4MjVmOGFjODAxZTc4ZDg3MDhjMDVmOGRmMVwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJkYXJrIHVpL2ludGVudGlvbnMvZXJyb3IubWFpblwiLFxuICAgIHN0eWxlS2V5OiBcIjc2N2MyYTk4OTcwNjJkZWUwZDBmNjMwMDQwNmY2ZTU1ODVmNjg0YzdcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiZGFyayB1aS9pbnRlbnRpb25zL2Vycm9yLm1haW4uNTBcIixcbiAgICBzdHlsZUtleTogXCI3NmQ2OGM5NzM3MTMwYjMxM2RmZTZkNmUxODIwMmU1NmRiZmNkZjBiXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImRhcmsgdWkvaW50ZW50aW9ucy9lcnJvci5kYXJrXCIsXG4gICAgc3R5bGVLZXk6IFwiMzRhOWEzNDRjMjU0MTZkMWE3ZWE2ZDY3MzJkYjEzZTdiYzZjYzM5N1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJkYXJrIHVpL2ludGVudGlvbnMvZXJyb3IubGlnaHRcIixcbiAgICBzdHlsZUtleTogXCI5NTc2MjBlNTRkMTVhZmNlNTUzMTRjYTU4OWM3YTFlOTM0MzVhMjAxXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImRhcmsgdWkvaW50ZW50aW9ucy93YXJuaW5nLm1haW5cIixcbiAgICBzdHlsZUtleTogXCI4OTRmYmQzMzVkOGIwZjZiMWNlZTRlYzVhYzdhMDQ3OTM5N2E2YjRjXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImRhcmsgdWkvaW50ZW50aW9ucy93YXJuaW5nLm1haW4uNTBcIixcbiAgICBzdHlsZUtleTogXCI3ZTVjOTgyNzBhYzhkNmQwNGQ4YjYxM2U4MjllOWU3MDdmZTQyMzE2XCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImRhcmsgdWkvaW50ZW50aW9ucy93YXJuaW5nLmRhcmtcIixcbiAgICBzdHlsZUtleTogXCI0NGI0MmE4NTA1Mjg0MTM4N2JjNjc3YzU3MTk4NzRjZjAyMDdjYWI1XCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImRhcmsgdWkvaW50ZW50aW9ucy93YXJuaW5nLmxpZ2h0XCIsXG4gICAgc3R5bGVLZXk6IFwiYWNjODhiNzkxOTc5MmEyMTMyYzM1ZGVkNjAwNGQxZGYwM2VhN2JiYlwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJkYXJrIHVpL2ludGVudGlvbnMvc3VjY2Vzcy5tYWluXCIsXG4gICAgc3R5bGVLZXk6IFwiMmQ0NGYzYTBjNjA4NzhjZWY1ZGJkMTBjNTlhNDE3YWE5MGMwYzFiZlwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJkYXJrIHVpL2ludGVudGlvbnMvc3VjY2Vzcy5tYWluLjUwXCIsXG4gICAgc3R5bGVLZXk6IFwiZjgxNGNiYzViMzYzMGE1ZTIyYzk1MDU2NmFlNDYyNzIzYTg0ZGM1OFwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJkYXJrIHVpL2ludGVudGlvbnMvc3VjY2Vzcy5kYXJrXCIsXG4gICAgc3R5bGVLZXk6IFwiNDMyMjI3OTFmN2Q1YWZkZThiODRiZGI3YTdjNzVhNmE4Y2M5ZDMzNFwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJkYXJrIHVpL2ludGVudGlvbnMvc3VjY2Vzcy5saWdodFwiLFxuICAgIHN0eWxlS2V5OiBcIjUzNjNjMTcwOTIzYWRmZTA5MzMyYzJhYjk1ZjQ2ODU2ZmQ1NmI3MmVcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiZGFyayB1aS90eXBvZ3JhcGh5L3RleHQucHJpbWFyeVwiLFxuICAgIHN0eWxlS2V5OiBcIjNmZGJkNDNkZDI0NjNjNjRiOTRlMGI4MWE5MTZhNjA2YzA4YjBmMWNcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiZGFyayB1aS90eXBvZ3JhcGh5L3RleHQuc2Vjb25kYXJ5XCIsXG4gICAgc3R5bGVLZXk6IFwiOWQyZTUxMWQ5YTMxZWJkNzZlMzAyYWIyNWQxZTk5NWU2YTgzYWMxY1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJkYXJrIHVpL3R5cG9ncmFwaHkvdGV4dC5kaXNhYmxlZFwiLFxuICAgIHN0eWxlS2V5OiBcImM5ODg4M2UwN2JlODBiZTZiY2QxODgxNGViMjlhODc3OTdhOTljNmFcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiZGFyayB1aS90eXBvZ3JhcGh5L3RleHQuY29udHJhc3RUZXh0LnByaW1hcnlcIixcbiAgICBzdHlsZUtleTogXCI1YjYyMmQ5YjVmMTZmZjQ3MWI2NjZlZThkOTVhMzVlYjVlN2U0NjRiXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImRhcmsgdWkvdHlwb2dyYXBoeS90ZXh0LmNvbnRyYXN0VGV4dC5lcnJvclwiLFxuICAgIHN0eWxlS2V5OiBcImFjMzZiNjBhNjdmMzZlZDgwNzBjYWFlZGQwNDU2MDEyYTEwYzIyZDZcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiZGFyayB1aS90eXBvZ3JhcGh5L3RleHQuY29udHJhc3RUZXh0Lndhcm5pbmdcIixcbiAgICBzdHlsZUtleTogXCI1OWM5YmYyYTRkNmMwNGZkOTNjMWI5YWJjYzRjZjUwMWZjYWRiYjIyXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImRhcmsgdWkvdHlwb2dyYXBoeS90ZXh0LmNvbnRyYXN0VGV4dC5zdWNjZXNzXCIsXG4gICAgc3R5bGVLZXk6IFwiMTk3MmRjMDAxZDMxZGVjMzI2YzhlOTM3ZjgzMDJlZTM1ZmJiODUzZlwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJkYXJrIHVpL3R5cG9ncmFwaHkvdGV4dC5hY3Rpb24uZGlzYWJsZWRcIixcbiAgICBzdHlsZUtleTogXCI3ZjdhNGVlMWZiY2I2NTI5ZTZmYjU2NGEwZjQ4ODE4OGIwZGMyYjM3XCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImRhcmsgdWkvdHlwb2dyYXBoeS90ZXh0LmNvbnRyYXN0VGV4dC5jb21wbGlhbnRcIixcbiAgICBzdHlsZUtleTogXCJiZmIxY2E2OGFlMGE3M2EwNTQzOTBiNmFmMGE1NmM5MTI3MWI4ODUyXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImRhcmsgdWkvdHlwb2dyYXBoeS90ZXh0LmNvbnRyYXN0VGV4dC5ub25Db21wbGlhbnRcIixcbiAgICBzdHlsZUtleTogXCJjMmNkMjFmNTVlMjMyZTcyNjU1YTI3ZGNmNWRlMDZkMGRhNDRiZjRlXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImRhcmsgdWkvdHlwb2dyYXBoeS90ZXh0LmNvbnRyYXN0VGV4dC5taXNzZWRcIixcbiAgICBzdHlsZUtleTogXCI3YjVmOGQzMTk3MTUxMDRiYjNkNGExMDc3ODhlYzViZmE2ZWEzMWQ0XCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImRhcmsgdWkvdHlwb2dyYXBoeS90ZXh0LmNvbnRyYXN0VGV4dC5wcmVtaXVtXCIsXG4gICAgc3R5bGVLZXk6IFwiOTkxMTA4OTYyMGJhZDJhYzdmN2Q5NWU5NTZkOTllNDkzNmJiY2FmOFwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJkYXJrIHVpL2J1dHRvbnMvYWN0aW9uLmRpc2FibGVkQmFja2dyb3VuZFwiLFxuICAgIHN0eWxlS2V5OiBcIjIxNGFjNGRmNzk2YjUxYzBmNDI2MDI4ZDBmNDI2OGVmYTZlZTM2ODVcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiZGFyayB1aS9iYWNrZ3JvdW5kL2JhY2tncm91bmQucGFwZXJcIixcbiAgICBzdHlsZUtleTogXCIyZjA2MGU3NDIyYThhZDE3YTAzN2EyNTBkMzY4Y2Y2NzFhZGMwNDY4XCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImRhcmsgdWkvYmFja2dyb3VuZC9iYWNrZ3JvdW5kLmRlZmF1bHRcIixcbiAgICBzdHlsZUtleTogXCIxNWY1ZmZhYzNlYzkxYjI0MDg5ODEzNDM5ZmZhZGQxZjk5OTRiMjljXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImRhcmsgdWkvdXRpbGl0eS9kaXZpZGVyXCIsXG4gICAgc3R5bGVLZXk6IFwiODRhYjBmMjk4ZWE4ZmNkMGI4MmFjODkyOThhZDUxMTQwY2E3Yjc1YVwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJkYXJrIHVpL3V0aWxpdHkvZGl2aWRlci5zdHJvbmdcIixcbiAgICBzdHlsZUtleTogXCJlOTM2MGExM2Y4NDUxNGVlNGIzOTc3ZDRiNjk0OWY5YmFiNjNjYjRmXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImRhcmsgdWkvdXRpbGl0eS9vdmVybGF5XCIsXG4gICAgc3R5bGVLZXk6IFwiMmIzODM2ZGVkMzgyZTMzYTk3MDRlZjBmMmY2YjE2ZmJmYmEyZDNjZVwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJkYXJrIHVpLzREUC9OTVwiLFxuICAgIHN0eWxlS2V5OiBcIjgyZDUwZjMwMTFkODE1OTAyZWQ0MzBkZjZkNzM0NWVjZGY5NDc2MWJcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiZGFyayB1aS80RFAvQUNcIixcbiAgICBzdHlsZUtleTogXCJlODE5M2FiZmQyZjcxNWU0OGI5Y2M3Y2U0YmM2Yjk1Yzg5N2FhMDRkXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImRhcmsgdWkvNERQL01BUFwiLFxuICAgIHN0eWxlS2V5OiBcImRmNTdmZWJjOGVmNzdkZDJjMzViZTJkMWI5NDBhZmI4MzMxNjY4YjRcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiZGFyayB1aS80RFAvRlRQXCIsXG4gICAgc3R5bGVLZXk6IFwiN2JiMDI4ZmY3ZDg3MzQ4NjY3OGI3YzY3NjRmYzUwZjM5ZTU3MWViNlwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJkYXJrIHVpL2RhdGEvcG93ZXJcIixcbiAgICBzdHlsZUtleTogXCI3M2QyMjhiNDY1Nzg4YzhlZjJkMTZiOTk5MTUxMmNiNzJjMDE0MDQzXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImRhcmsgdWkvZGF0YS9oZWFydCByYXRlXCIsXG4gICAgc3R5bGVLZXk6IFwiYzNmM2QwOTE3MzQwZDljYjEyZGIzNDQ4YzI2N2FjNTVkYTYzZDcxNVwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJkYXJrIHVpL2RhdGEvY2FkZW5jZVwiLFxuICAgIHN0eWxlS2V5OiBcIjJmYTkxNWIyOTQ1ZThhNzZhNzE0Mzg2ODExMzdkMjhjNjFmZTQyMTRcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiZGFyayB1aS9kYXRhL3NwZWVkXCIsXG4gICAgc3R5bGVLZXk6IFwiYjk3OWZjYjEwNGMyOTZmNzhmNDBiNjNhOWU3NGJlMTdlMmJiYmE1M1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJkYXJrIHVpL2NvbXBsaWFuY2UvY29tcGxpYW50XCIsXG4gICAgc3R5bGVLZXk6IFwiODA5MWU3ZWMxMDcwNTY3ODQ2NDQ2MjhkYjE3MzZiY2ZhYzYyZmVkMVwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJkYXJrIHVpL2NvbXBsaWFuY2Uvbm9uQ29tcGxpYW50XCIsXG4gICAgc3R5bGVLZXk6IFwiMTRlYzRiZGI0YzRiNjk4Y2ZiN2M1NDhmNzM4MmI3NDhlMjUwMjBkMlwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJkYXJrIHVpL2NvbXBsaWFuY2UvbWlzc2VkXCIsXG4gICAgc3R5bGVLZXk6IFwiNjU3OTVhYWVhZGFjZTI3OGM1Zjg2MDBjMzAzMjJiOTI3MTM2YzAyM1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJkYXJrIHVpL2NvbXBsaWFuY2UvdW5wYWlyZWRcIixcbiAgICBzdHlsZUtleTogXCIyYjNiMjk3YWVmMzk3NWNmNTZiOTBlY2JhZDMwZjk1NTFjYjhiNTRjXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImRhcmsgdWkvY29tcGxpYW5jZS9zY2hlZHVsZWRcIixcbiAgICBzdHlsZUtleTogXCJiY2MzMjY5ZWJiMzE3ZWJkNDVkNDk0ZGZkY2U4OWNiOTJjYzhjYWY0XCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImRhcmsgdWkvaW50ZXJhY3Rpb24vaW50ZW50aW9ucy9wcmltYXJ5Lm1haW4uaG92ZXJcIixcbiAgICBzdHlsZUtleTogXCI5OTY4N2QxMzY1ZGVmNzJlNzBkNDFiMDNlNTM2ZjcwYzFkMzNkOTU2XCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImRhcmsgdWkvaW50ZXJhY3Rpb24vaW50ZW50aW9ucy9wcmltYXJ5Lm1haW4ucHJlc3NlZFwiLFxuICAgIHN0eWxlS2V5OiBcImRhYjk5MjhkYTRiMWE5OGI1ZTQzNTYxMWYwMWIzNGJjNTFmZWMxOGFcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiZGFyayB1aS9pbnRlcmFjdGlvbi9pbnRlbnRpb25zL2Vycm9yLm1haW4uaG92ZXJcIixcbiAgICBzdHlsZUtleTogXCI0YmY2Nzc3NGU2MDBmMTJhMDlhODEwZGQzZGQ0MTMzNjM0ZDFhZjkyXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImRhcmsgdWkvaW50ZXJhY3Rpb24vaW50ZW50aW9ucy9lcnJvci5tYWluLnByZXNzZWRcIixcbiAgICBzdHlsZUtleTogXCIxMTJkZGE5MmNkNTE1YzMyMGVkOTJjZjIzYzViZGE1ODJlM2IxOWMxXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImRhcmsgdWkvaW50ZXJhY3Rpb24vaW50ZW50aW9ucy93YXJuaW5nLm1haW4ucHJlc3NlZFwiLFxuICAgIHN0eWxlS2V5OiBcIjhhNjY2ZWNlZjAxMjFkNTQ3OWU4Y2YxMDdlNjk3ZDNlNzZkM2ZlNmRcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiZGFyayB1aS9pbnRlcmFjdGlvbi9pbnRlbnRpb25zL3dhcm5pbmcubWFpbi5ob3ZlclwiLFxuICAgIHN0eWxlS2V5OiBcImQzMzQwN2Q2ODA1ZjNkYmFiZjM0Yjk3ODc4ZTk0MmUxMDU4MmZjZWFcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiZGFyayB1aS9pbnRlcmFjdGlvbi9pbnRlbnRpb25zL3N1Y2Nlc3MubWFpbi5ob3ZlclwiLFxuICAgIHN0eWxlS2V5OiBcImE0ZjFiYTY2ZjEyYTY5OWY0YzY4YWNkYmVhN2ZkMGE5NjEzYTQ1ZGVcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiZGFyayB1aS9pbnRlcmFjdGlvbi9pbnRlbnRpb25zL3N1Y2Nlc3MubWFpbi5wcmVzc2VkXCIsXG4gICAgc3R5bGVLZXk6IFwiMDA2MmQ1MzM0MTc3MzIyMmZmZDYxNGVhYjE0OGU1MjkyMTk1NzlmMlwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJkYXJrIHVpL2ludGVyYWN0aW9uL2JhY2tncm91bmQvZGVmYXVsdC5ob3ZlclwiLFxuICAgIHN0eWxlS2V5OiBcImQ3NTEwMDlmNjhhZmZhYjhlMTcwYTdkNDAwMTM1NmIxNzcyZjBlNTBcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiZGFyayB1aS9pbnRlcmFjdGlvbi9iYWNrZ3JvdW5kL2RlZmF1bHQucHJlc3NlZFwiLFxuICAgIHN0eWxlS2V5OiBcImNkMDQ3Nzk2ZTk1Mjg3M2Q4ZmM4OTk4NTg2YzEzMGU0MTZkMzA2MzFcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiZGFyayB1aS9pbnRlcmFjdGlvbi9iYWNrZ3JvdW5kL3BhcGVyLmhvdmVyXCIsXG4gICAgc3R5bGVLZXk6IFwiYjMzMGJhZGM2Y2VhMDJiOTAxMmEzZjU4MWRmNmYwMGYxZmY0ODc3N1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJkYXJrIHVpL2ludGVyYWN0aW9uL2JhY2tncm91bmQvcGFwZXIucHJlc3NlZFwiLFxuICAgIHN0eWxlS2V5OiBcIjY1YzU4YzdiMDNhODM4MWExMjk4M2JjZDBhZGVhMWVlMTg0NjEzYTBcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiZGFyayB1aS9pbnRlcmFjdGlvbi9zcGVjaWFsIHVzZS9wcmVtaXVtLmhvdmVyXCIsXG4gICAgc3R5bGVLZXk6IFwiNDhjOGJjMzE0ZGYyMjNlMWE4ZGU0ZTEwZDAwOTljZDk3MTA5M2QxYVwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJkYXJrIHVpL2ludGVyYWN0aW9uL3NwZWNpYWwgdXNlL3ByZW1pdW0ucHJlc3NlZFwiLFxuICAgIHN0eWxlS2V5OiBcIjVkZWY0NmU5ZTQ0M2FhOWFkZGE0MjViZTE0Y2E0YWFhYjFmY2QxMDlcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiZGFyayB1aS9zcGVjaWFsIHVzZS9wcmVtaXVtXCIsXG4gICAgc3R5bGVLZXk6IFwiM2Y4ZDJkODFhMGFiYjViYzBiOGE0ZDUyMTJmNDhjMTEzYTk4ZjEwZVwiLFxuICB9LFxuXTtcbiIsImV4cG9ydCBjb25zdCBMaWdodFVpRWZmZWN0cyA9IFtcbiAge1xuICAgIG5hbWU6IFwibGlnaHQgdWkvc2hhZG93L2VsZXZhdGlvbiA0XCIsXG4gICAgc3R5bGVLZXk6IFwiNjkyMDJmYThjYzRmNmNjMDUxNWNjMDhmZGNjOTg4NDU5YWYyODczMVwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJsaWdodCB1aS9zaGFkb3cvZWxldmF0aW9uIDlcIixcbiAgICBzdHlsZUtleTogXCI4Y2NlYTlkNTIzY2Y5ZGMxM2ZlZTY4ZjM5MmYzZjljYzMxODdhNDU3XCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImxpZ2h0IHVpL3NoYWRvdy9lbGV2YXRpb24gMTRcIixcbiAgICBzdHlsZUtleTogXCJjNjEyNTNjMzhmNmQwZDlmM2IzMDJhNzdhMzgwN2UwNTJlOWMzZjkxXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImxpZ2h0IHVpL2ZvY3VzXCIsXG4gICAgc3R5bGVLZXk6IFwiZjlkNTM5ZjY3MDJiNzExMTY2Yjg5NzQzZTU5NzEwMWJlNjE1M2I5Y1wiLFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IERhcmtVaUVmZmVjdHMgPSBbXG4gIHtcbiAgICBuYW1lOiBcImRhcmsgdWkvc2hhZG93L2VsZXZhdGlvbiA0XCIsXG4gICAgc3R5bGVLZXk6IFwiYTg5YWJiZTZkNjRmODI0ZjYyZWJiMWY1NGY2ZjI4YTkxMDQ5MDE5NVwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJkYXJrIHVpL3NoYWRvdy9lbGV2YXRpb24gOVwiLFxuICAgIHN0eWxlS2V5OiBcIjk4NzYxOTA0YmNjOWQzOGM4MWVlMjNlN2I0MzJkOGM5N2UyOWYwYzFcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiZGFyayB1aS9zaGFkb3cvZWxldmF0aW9uIDE0XCIsXG4gICAgc3R5bGVLZXk6IFwiMjA5YjQ1MWU0ZjY4ZjViZjNhZGUyNGVmMzZhMTBhNjA5Y2RhZTIzOVwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJkYXJrIHVpL2ZvY3VzXCIsXG4gICAgc3R5bGVLZXk6IFwiOTJjYmUzNmQ0NDgwZWZlNGI5NjE4ZWM2ZWMxYTQ0NDkyNDFmYmRkNlwiLFxuICB9LFxuXTtcbiJdLCJzb3VyY2VSb290IjoiIn0=