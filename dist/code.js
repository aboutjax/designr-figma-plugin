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
figma.ui.resize(300, 850);
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
                spacingHorizontal = 16;
                break;
            case "4":
                spacingHorizontal = 24;
                break;
            case "5":
                spacingHorizontal = 32;
                break;
            case "6":
                spacingHorizontal = 40;
                break;
            case "7":
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
                spacingVertical = 16;
                break;
            case "4":
                spacingVertical = 24;
                break;
            case "5":
                spacingVertical = 32;
                break;
            case "6":
                spacingVertical = 40;
                break;
            case "7":
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
                    node.itemSpacing = 16;
                    break;
                case "sp-4":
                    node.itemSpacing = 24;
                    break;
                case "sp-5":
                    node.itemSpacing = 32;
                    break;
                case "sp-6":
                    node.itemSpacing = 40;
                    break;
                case "sp-7":
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
                    node.horizontalPadding = 16;
                    node.verticalPadding = 16;
                    break;
                case "pa-4":
                    node.horizontalPadding = 24;
                    node.verticalPadding = 24;
                    break;
                case "pa-5":
                    node.horizontalPadding = 32;
                    node.verticalPadding = 32;
                    break;
                case "pa-6":
                    node.horizontalPadding = 40;
                    node.verticalPadding = 40;
                    break;
                case "pa-7":
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
                    node.horizontalPadding = 16;
                    break;
                case "ph-4":
                    node.horizontalPadding = 24;
                    break;
                case "ph-5":
                    node.horizontalPadding = 32;
                    break;
                case "ph-6":
                    node.horizontalPadding = 40;
                    break;
                case "ph-7":
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
                    node.verticalPadding = 16;
                    break;
                case "pv-4":
                    node.verticalPadding = 24;
                    break;
                case "pv-5":
                    node.verticalPadding = 32;
                    break;
                case "pv-6":
                    node.verticalPadding = 40;
                    break;
                case "pv-7":
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
            spacing = 16;
            spacingName = "3";
            break;
        case "4":
            spacing = 24;
            spacingName = "4";
            break;
        case "5":
            spacing = 32;
            spacingName = "5";
            break;
        case "6":
            spacing = 40;
            spacingName = "6";
            break;
        case "7":
            spacing = 48;
            spacingName = "7";
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
            spacing = 16;
            spacingName = "3";
            break;
        case "4":
            spacing = 24;
            spacingName = "4";
            break;
        case "5":
            spacing = 32;
            spacingName = "5";
            break;
        case "6":
            spacing = 40;
            spacingName = "6";
            break;
        case "7":
            spacing = 48;
            spacingName = "7";
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
            spacing = 16;
            spacingName = "3";
            break;
        case "4":
            spacing = 24;
            spacingName = "4";
            break;
        case "5":
            spacing = 32;
            spacingName = "5";
            break;
        case "6":
            spacing = 40;
            spacingName = "6";
            break;
        case "7":
            spacing = 48;
            spacingName = "7";
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
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


// Fill
const swapFill = (node) => __awaiter(undefined, void 0, void 0, function* () {
    let nodeFillStyleId = node.fillStyleId;
    let nodeFillPaintStyle = figma.getStyleById(nodeFillStyleId);
    let nodeFillPaintName = nodeFillPaintStyle.name;
    let swappedNodeFillName = null;
    let nodeFillPaintIsLightMode = nodeFillPaintName.includes("light ui");
    if (nodeFillPaintIsLightMode) {
        swappedNodeFillName = nodeFillPaintName.replace("light ui / ", "dark ui / ");
        for (const item of _theme_styles_colors__WEBPACK_IMPORTED_MODULE_0__["DarkUiColors"]) {
            if (item.name === swappedNodeFillName) {
                figma.importStyleByKeyAsync(item.styleKey).then((resp) => {
                    node.fillStyleId = resp.id;
                });
            }
        }
    }
    else {
        swappedNodeFillName = nodeFillPaintName.replace("dark ui / ", "light ui / ");
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
const swapStroke = (node) => __awaiter(undefined, void 0, void 0, function* () {
    let nodeStrokeStyleId = node.strokeStyleId;
    let nodeStrokePaintStyle = figma.getStyleById(nodeStrokeStyleId);
    let nodeStrokePaintName = nodeStrokePaintStyle.name;
    let swappedNodeStrokeName = null;
    let nodeStrokePaintIsLightMode = nodeStrokePaintName.includes("light ui");
    console.log("Stroke: " + nodeStrokePaintName);
    if (nodeStrokePaintIsLightMode) {
        swappedNodeStrokeName = nodeStrokePaintName.replace("light ui / ", "dark ui / ");
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
        swappedNodeStrokeName = nodeStrokePaintName.replace("dark ui / ", "light ui / ");
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
const swapEffects = (node) => __awaiter(undefined, void 0, void 0, function* () {
    let nodeEffectStyleId = node.effectStyleId;
    let nodeEffectStyle = figma.getStyleById(nodeEffectStyleId);
    let nodeEffectStyleName = nodeEffectStyle.name;
    let swappedNodeEffectName = null;
    let nodeEffectStyleNameIsLight = nodeEffectStyleName.includes("light ui");
    console.log("Effect: " + nodeEffectStyleName);
    if (nodeEffectStyleNameIsLight) {
        swappedNodeEffectName = nodeEffectStyleName.replace("light ui / ", "dark ui / ");
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
        swappedNodeEffectName = nodeEffectStyleName.replace("dark ui / ", "light ui / ");
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
const ThemeSwap = (node) => __awaiter(undefined, void 0, void 0, function* () {
    // do nothing below
    if ("children" in node) {
        for (const child of node.children) {
            ThemeSwap(child);
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
            rgba: rgba,
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
    gutterSize: 960,
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
    sectionSize: 960,
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
    sectionSize: 960,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvZGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlci9jYWxsYmFjay50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVyL2NvbG9yLWNoZWNrLnRzIiwid2VicGFjazovLy8uL3NyYy9oZWxwZXIvZm9yY2UtYXV0by1sYXlvdXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlci9sYXlvdXQtZ3JpZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVyL3NwYWNpbmctY2hlY2sudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlci9zcGFjaW5nLXNsaWRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVyL3RoZW1lLXN3YXAudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RoZW1lLXN0eWxlcy9MYXlvdXRHcmlkcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGhlbWUtc3R5bGVzL2NvbG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGhlbWUtc3R5bGVzL2VmZmVjdHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsaUJBQWlCO0FBQ29CO0FBQ2M7QUFDSjtBQUN1QztBQUNNO0FBQ2xEO0FBQ0M7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksMEVBQWlCO0FBQ3JCLENBQUM7QUFDRDtBQUNBO0FBQ0EsUUFBUSxvRUFBUztBQUNqQjtBQUNBO0FBQ0EsUUFBUSw4RUFBa0I7QUFDMUI7QUFDQTtBQUNBLFFBQVEsa0ZBQW9CO0FBQzVCO0FBQ0E7QUFDQSxRQUFRLHNGQUF1QjtBQUMvQjtBQUNBO0FBQ0EsUUFBUSxvRkFBcUI7QUFDN0I7QUFDQTtBQUNBLFFBQVEsMEVBQVc7QUFDbkI7QUFDQTtBQUNBLFFBQVEsMkZBQXlCO0FBQ2pDO0FBQ0E7QUFDQSxRQUFRLHlGQUF1QjtBQUMvQjtBQUNBO0FBQ0EsUUFBUSx5RUFBYTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDdERBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDNkI7Ozs7Ozs7Ozs7Ozs7QUN4QjdCO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixtQkFBbUI7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsS0FBTztBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLG1CQUFtQjtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLG1CQUFtQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLGVBQWU7QUFDbEQ7QUFDQTtBQUNBLHFEQUFxRCxlQUFlO0FBQ3BFO0FBQ0E7QUFDOEI7Ozs7Ozs7Ozs7Ozs7QUM3SDlCO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzhEOzs7Ozs7Ozs7Ozs7O0FDVjlEO0FBQUE7QUFBQTtBQUF1SjtBQUN2SjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxtRkFBaUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsUUFBUSxpRkFBZTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLCtCQUErQix1RUFBYTtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0Isa0ZBQXdCO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IscUVBQVc7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsdUVBQWE7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ3lCOzs7Ozs7Ozs7Ozs7O0FDekl6QjtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNnQzs7Ozs7Ozs7Ozs7OztBQzVLaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLG9DQUFvQztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixrQ0FBa0M7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGlDQUFpQztBQUNyRDtBQUNBO0FBQ3VFOzs7Ozs7Ozs7Ozs7O0FDcEx2RTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFpQixTQUFJLElBQUksU0FBSTtBQUM3QjtBQUNBLG1DQUFtQyxNQUFNLDZCQUE2QixFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ2pHLGtDQUFrQyxNQUFNLGlDQUFpQyxFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ3BHLCtCQUErQixpRUFBaUUsdUJBQXVCLEVBQUUsNEJBQTRCO0FBQ3JKO0FBQ0EsS0FBSztBQUNMO0FBQ3FFO0FBQ0c7QUFDeEU7QUFDQSxxQ0FBcUMsU0FBSTtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixpRUFBWTtBQUN2QztBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixrRUFBYTtBQUN4QztBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsdUNBQXVDLFNBQUk7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixpRUFBWTtBQUN2QztBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixrRUFBYTtBQUN4QztBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0Esd0NBQXdDLFNBQUk7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixtRUFBYTtBQUN4QztBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixvRUFBYztBQUN6QztBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0Esc0NBQXNDLFNBQUk7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNvQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLG9EQUFvRDtBQUM3RTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNqS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRU87QUFDUDs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFTztBQUNQO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7O0FDNU1BO0FBQUE7QUFBQTtBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7QUN4TUE7QUFBQTtBQUFBO0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCIsImZpbGUiOiJjb2RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvY29kZS50c1wiKTtcbiIsIi8vIFRoaXMgcGx1Z2luIHdpbGwgb3BlbiBhIG1vZGFsIHRvIHByb21wdCB0aGUgdXNlciB0byBlbnRlciBhIG51bWJlciwgYW5kXG4vLyBpdCB3aWxsIHRoZW4gY3JlYXRlIHRoYXQgbWFueSByZWN0YW5nbGVzIG9uIHRoZSBzY3JlZW4uXG4vLyBUaGlzIGZpbGUgaG9sZHMgdGhlIG1haW4gY29kZSBmb3IgdGhlIHBsdWdpbnMuIEl0IGhhcyBhY2Nlc3MgdG8gdGhlICpkb2N1bWVudCouXG4vLyBZb3UgY2FuIGFjY2VzcyBicm93c2VyIEFQSXMgaW4gdGhlIDxzY3JpcHQ+IHRhZyBpbnNpZGUgXCJ1aS5odG1sXCIgd2hpY2ggaGFzIGFcbi8vIGZ1bGwgYnJvd3NlciBlbnZpcm9tZW50IChzZWUgZG9jdW1lbnRhdGlvbikuXG4vLyBpbXBvcnQgeyBTcGFjaW5nRGVmYXVsdCB9IGZyb20gXCIuL2hlbHBlci9zcGFjaW5nLWRlZmF1bHRcIjtcbmltcG9ydCB7IFRoZW1lU3dhcCB9IGZyb20gXCIuL2hlbHBlci90aGVtZS1zd2FwXCI7XG5pbXBvcnQgeyBTcGFjaW5nQ2hlY2tUcmF2ZXJzZSB9IGZyb20gXCIuL2hlbHBlci9zcGFjaW5nLWNoZWNrXCI7XG5pbXBvcnQgeyBDb2xvckNoZWNrVHJhdmVyc2UgfSBmcm9tIFwiLi9oZWxwZXIvY29sb3ItY2hlY2tcIjtcbmltcG9ydCB7IEZvcmNlQXV0b0xheW91dEhvcml6b250YWwsIEZvcmNlQXV0b0xheW91dFZlcnRpY2FsLCB9IGZyb20gXCIuL2hlbHBlci9mb3JjZS1hdXRvLWxheW91dFwiO1xuaW1wb3J0IHsgUGFkZGluZ0hvcml6b250YWxTbGlkZXIsIFBhZGRpbmdWZXJ0aWNhbFNsaWRlciwgSXRlbVNwYWNpbmcsIH0gZnJvbSBcIi4vaGVscGVyL3NwYWNpbmctc2xpZGVyXCI7XG5pbXBvcnQgeyBTZXRMYXlvdXRHcmlkIH0gZnJvbSBcIi4vaGVscGVyL2xheW91dC1ncmlkXCI7XG5pbXBvcnQgeyBvblNlbGVjdGlvbkNoYW5nZSB9IGZyb20gXCIuL2hlbHBlci9jYWxsYmFja1wiO1xuLy8gVGhpcyBzaG93cyB0aGUgSFRNTCBwYWdlIGluIFwidWkuaHRtbFwiLlxuZmlnbWEuc2hvd1VJKF9faHRtbF9fKTtcbi8vIENhbGxzIHRvIFwicGFyZW50LnBvc3RNZXNzYWdlXCIgZnJvbSB3aXRoaW4gdGhlIEhUTUwgcGFnZSB3aWxsIHRyaWdnZXIgdGhpc1xuLy8gY2FsbGJhY2suIFRoZSBjYWxsYmFjayB3aWxsIGJlIHBhc3NlZCB0aGUgXCJwbHVnaW5NZXNzYWdlXCIgcHJvcGVydHkgb2YgdGhlXG4vLyBwb3N0ZWQgbWVzc2FnZS5cbmZpZ21hLnVpLnJlc2l6ZSgzMDAsIDg1MCk7XG5maWdtYS5vbihcInNlbGVjdGlvbmNoYW5nZVwiLCAoKSA9PiB7XG4gICAgbGV0IHRoaXNTZWxlY3Rpb24gPSBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb25bMF07XG4gICAgb25TZWxlY3Rpb25DaGFuZ2UodGhpc1NlbGVjdGlvbik7XG59KTtcbmZpZ21hLnVpLm9ubWVzc2FnZSA9IChtc2cpID0+IHtcbiAgICBpZiAobXNnLnR5cGUgPT09IFwic3dhcC10aGVtZVwiKSB7XG4gICAgICAgIFRoZW1lU3dhcChmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb25bMF0pO1xuICAgIH1cbiAgICBlbHNlIGlmIChtc2cudHlwZSA9PT0gXCJjb2xvci1jaGVja2VyXCIpIHtcbiAgICAgICAgQ29sb3JDaGVja1RyYXZlcnNlKGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvblswXSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKG1zZy50eXBlID09PSBcInNwYWNpbmctY2hlY2tlclwiKSB7XG4gICAgICAgIFNwYWNpbmdDaGVja1RyYXZlcnNlKGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbik7XG4gICAgfVxuICAgIGVsc2UgaWYgKG1zZy50eXBlID09PSBcInBhZGRpbmctaG9yaXpvbnRhbC1zbGlkZXJcIikge1xuICAgICAgICBQYWRkaW5nSG9yaXpvbnRhbFNsaWRlcihmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb24sIG1zZyk7XG4gICAgfVxuICAgIGVsc2UgaWYgKG1zZy50eXBlID09PSBcInBhZGRpbmctdmVydGljYWwtc2xpZGVyXCIpIHtcbiAgICAgICAgUGFkZGluZ1ZlcnRpY2FsU2xpZGVyKGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbiwgbXNnKTtcbiAgICB9XG4gICAgZWxzZSBpZiAobXNnLnR5cGUgPT09IFwiaXRlbS1zcGFjaW5nLXNsaWRlclwiKSB7XG4gICAgICAgIEl0ZW1TcGFjaW5nKGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbiwgbXNnKTtcbiAgICB9XG4gICAgZWxzZSBpZiAobXNnLnR5cGUgPT09IFwiZm9yY2UtYXV0by1sYXlvdXQtaG9yaXpvbnRhbFwiKSB7XG4gICAgICAgIEZvcmNlQXV0b0xheW91dEhvcml6b250YWwoZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uKTtcbiAgICB9XG4gICAgZWxzZSBpZiAobXNnLnR5cGUgPT09IFwiZm9yY2UtYXV0by1sYXlvdXQtdmVydGljYWxcIikge1xuICAgICAgICBGb3JjZUF1dG9MYXlvdXRWZXJ0aWNhbChmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb24pO1xuICAgIH1cbiAgICBlbHNlIGlmIChtc2cudHlwZSA9PT0gXCJzZXQtbGF5b3V0LWdyaWRcIikge1xuICAgICAgICBTZXRMYXlvdXRHcmlkKGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbiwgbXNnKTtcbiAgICB9XG4gICAgLy8gTWFrZSBzdXJlIHRvIGNsb3NlIHRoZSBwbHVnaW4gd2hlbiB5b3UncmUgZG9uZS4gT3RoZXJ3aXNlIHRoZSBwbHVnaW4gd2lsbFxuICAgIC8vIGtlZXAgcnVubmluZywgd2hpY2ggc2hvd3MgdGhlIGNhbmNlbCBidXR0b24gYXQgdGhlIGJvdHRvbSBvZiB0aGUgc2NyZWVuLlxuICAgIC8vIGZpZ21hLmNsb3NlUGx1Z2luKCk7XG59O1xuIiwiY29uc3Qgb25TZWxlY3Rpb25DaGFuZ2UgPSAobm9kZSkgPT4ge1xuICAgIGlmIChub2RlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKG5vZGUpO1xuICAgICAgICBsZXQgaG9yaXpvbnRhbFBhZGRpbmcgPSBub2RlLmhvcml6b250YWxQYWRkaW5nO1xuICAgICAgICBsZXQgdmVydGljYWxQYWRkaW5nID0gbm9kZS52ZXJ0aWNhbFBhZGRpbmc7XG4gICAgICAgIGxldCBpdGVtU3BhY2luZyA9IG5vZGUuaXRlbVNwYWNpbmc7XG4gICAgICAgIGxldCBsYXlvdXRNb2RlID0gbm9kZS5sYXlvdXRNb2RlO1xuICAgICAgICBsZXQgdHlwZSA9IG5vZGUudHlwZTtcbiAgICAgICAgbGV0IGxheW91dEdyaWRzID0gbm9kZS5sYXlvdXRHcmlkcztcbiAgICAgICAgbGV0IG9iaiA9IHtcbiAgICAgICAgICAgIGhvcml6b250YWxQYWRkaW5nOiBob3Jpem9udGFsUGFkZGluZyxcbiAgICAgICAgICAgIHZlcnRpY2FsUGFkZGluZzogdmVydGljYWxQYWRkaW5nLFxuICAgICAgICAgICAgaXRlbVNwYWNpbmc6IGl0ZW1TcGFjaW5nLFxuICAgICAgICAgICAgbGF5b3V0TW9kZTogbGF5b3V0TW9kZSxcbiAgICAgICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgICAgICBsYXlvdXRHcmlkczogbGF5b3V0R3JpZHMsXG4gICAgICAgIH07XG4gICAgICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKG9iaik7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIm5vXCIpO1xuICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZShcIm5vdGhpbmcgc2VsZWN0ZWRcIik7XG4gICAgfVxufTtcbmV4cG9ydCB7IG9uU2VsZWN0aW9uQ2hhbmdlIH07XG4iLCJmdW5jdGlvbiBjbG9uZSh2YWwpIHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh2YWwpKTtcbn1cbi8vIENoZWNrIG9iamVjdCBlcXVhbGl0eSBoZWxwZXJcbmZ1bmN0aW9uIGlzRXF1aXZhbGVudChhLCBiKSB7XG4gICAgLy8gQ3JlYXRlIGFycmF5cyBvZiBwcm9wZXJ0eSBuYW1lc1xuICAgIHZhciBhUHJvcHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhhKTtcbiAgICB2YXIgYlByb3BzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoYik7XG4gICAgLy8gSWYgbnVtYmVyIG9mIHByb3BlcnRpZXMgaXMgZGlmZmVyZW50LFxuICAgIC8vIG9iamVjdHMgYXJlIG5vdCBlcXVpdmFsZW50XG4gICAgaWYgKGFQcm9wcy5sZW5ndGggIT0gYlByb3BzLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYVByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBwcm9wTmFtZSA9IGFQcm9wc1tpXTtcbiAgICAgICAgLy8gSWYgdmFsdWVzIG9mIHNhbWUgcHJvcGVydHkgYXJlIG5vdCBlcXVhbCxcbiAgICAgICAgLy8gb2JqZWN0cyBhcmUgbm90IGVxdWl2YWxlbnRcbiAgICAgICAgaWYgKGFbcHJvcE5hbWVdICE9PSBiW3Byb3BOYW1lXSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIElmIHdlIG1hZGUgaXQgdGhpcyBmYXIsIG9iamVjdHNcbiAgICAvLyBhcmUgY29uc2lkZXJlZCBlcXVpdmFsZW50XG4gICAgcmV0dXJuIHRydWU7XG59XG5jb25zdCBDb2xvckNoZWNrVHJhdmVyc2UgPSAobm9kZSkgPT4ge1xuICAgIGxldCBzdHJheUZpbGwgPSAwO1xuICAgIGxldCBzdHJheVN0cm9rZSA9IDA7XG4gICAgaWYgKFwiZmlsbHNcIiAmJiBcInN0cm9rZXNcIiBpbiBub2RlKSB7XG4gICAgICAgIC8vIEZpbHRlciB3YXJuaW5nIHN0cm9rZSBmdW5jdGlvblxuICAgICAgICBsZXQgZmlsdGVyV2FybmluZ1N0cm9rZSA9IGZ1bmN0aW9uIChzdHJva2UpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2xlYXIgb3V0XCIpO1xuICAgICAgICAgICAgaWYgKHN0cm9rZS50eXBlID09IFwiU09MSURcIiAmJlxuICAgICAgICAgICAgICAgIGlzRXF1aXZhbGVudChzdHJva2UuY29sb3IsIHsgcjogMSwgZzogMCwgYjogMCB9KSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwieWVzXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibm9cIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGxldCBvbGRTdHJva2VzID0gY2xvbmUobm9kZS5zdHJva2VzKTtcbiAgICAgICAgbGV0IG5ld1N0cm9rZXMgPSBvbGRTdHJva2VzLmZpbHRlcihmaWx0ZXJXYXJuaW5nU3Ryb2tlKTtcbiAgICAgICAgaWYgKG5vZGUuc3Ryb2tlU3R5bGVJZC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAvLyBkbyBub3RoaW5nXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBub2RlLnN0cm9rZXMgPSBuZXdTdHJva2VzO1xuICAgICAgICB9XG4gICAgICAgIC8vIC8vIEFkZCB3YXJuaW5nIHN0cm9rZSBmdW5jdGlvblxuICAgICAgICBsZXQgYWRkV2FybmluZ1N0cm9rZSA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICBsZXQgc3Ryb2tlcyA9IGNsb25lKG5vZGUuc3Ryb2tlcyk7XG4gICAgICAgICAgICBsZXQgd2FybmluZ1N0cm9rZVByb3BlcnR5ID0ge1xuICAgICAgICAgICAgICAgIGNvbG9yOiB7IHI6IDEsIGc6IDAsIGI6IDAgfSxcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgICAgICAgIHR5cGU6IFwiU09MSURcIixcbiAgICAgICAgICAgICAgICBibGVuZE1vZGU6IFwiTk9STUFMXCIsXG4gICAgICAgICAgICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBzdHJva2VzLnB1c2god2FybmluZ1N0cm9rZVByb3BlcnR5KTtcbiAgICAgICAgICAgIG5vZGUuc3Ryb2tlcyA9IHN0cm9rZXM7XG4gICAgICAgICAgICAvLyBub2RlLnN0cm9rZUFsaWduID0gXCJPVVRTSURFXCI7XG4gICAgICAgIH07XG4gICAgICAgIC8vIENoZWNrIEZpbGxcbiAgICAgICAgY29uc3QgaGFzSW1hZ2UgPSAoZmlsbCkgPT4gZmlsbC50eXBlID09PSBcIklNQUdFXCI7XG4gICAgICAgIGlmIChub2RlLmZpbGxzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIC8vIGlmIChub2RlLmZpbGxzLnNvbWUoaGFzSW1hZ2UpKSB7XG4gICAgICAgICAgICAvLyAgIGNvbnNvbGUubG9nKFwiZmlsbCBpcyBpbWFnZVwiKTtcbiAgICAgICAgICAgIC8vIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyAgIGNvbnNvbGUubG9nKFwiZmlsbCBpcyBOT1QgaW1hZ2VcIik7XG4gICAgICAgICAgICAvLyAgIC8vIG5vdGhpbmdcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIGlmIChub2RlLmZpbGxTdHlsZUlkLmxlbmd0aCA+IDAgfHwgbm9kZS5maWxscy5zb21lKGhhc0ltYWdlKSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi4pyFIEdvb2QgZmlsbFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi4p2MIEJhZCBmaWxsXCIpO1xuICAgICAgICAgICAgICAgIC8vIEFkZCB3YXJuaW5nIHN0cm9rZVxuICAgICAgICAgICAgICAgIGFkZFdhcm5pbmdTdHJva2Uobm9kZSk7XG4gICAgICAgICAgICAgICAgc3RyYXlGaWxsKys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIm5vIGZpbGxcIik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQ2hlY2sgU3Ryb2tlXG4gICAgICAgIGlmIChub2RlLnN0cm9rZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgaWYgKG5vZGUuc3Ryb2tlU3R5bGVJZC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLinIUgR29vZCBzdHJva2VcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuKdjCBCYWQgc3Ryb2tlXCIpO1xuICAgICAgICAgICAgICAgIC8vIC8vIEFkZCB3YXJuaW5nIHN0cm9rZVxuICAgICAgICAgICAgICAgIGFkZFdhcm5pbmdTdHJva2Uobm9kZSk7XG4gICAgICAgICAgICAgICAgc3RyYXlTdHJva2UrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibm8gc3Ryb2tlXCIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZyhcIk5vIGZpbGwgJiBzdHJva2UgcHJvcGVydHlcIik7XG4gICAgfVxuICAgIGlmIChcImNoaWxkcmVuXCIgaW4gbm9kZSkge1xuICAgICAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIG5vZGUuY2hpbGRyZW4pIHtcbiAgICAgICAgICAgIENvbG9yQ2hlY2tUcmF2ZXJzZShjaGlsZCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIC8vIGRvIG5vdGhpbmdcbiAgICB9XG4gICAgaWYgKHN0cmF5RmlsbCA+IDAgfHwgc3RyYXlTdHJva2UgPiAwKSB7XG4gICAgICAgIGxldCBlcnJvclN0cmluZyA9IFwiWW91IGhhdmUgXCIgK1xuICAgICAgICAgICAgc3RyYXlGaWxsICtcbiAgICAgICAgICAgIFwiIGZpbGxzIGFuZCBcIiArXG4gICAgICAgICAgICBzdHJheVN0cm9rZSArXG4gICAgICAgICAgICBcIiBzdHJva2VzIG5vdCB1c2luZyBjb2xvdXJzIGZyb20gb3VyIGxpYnJhcnkhXCI7XG4gICAgICAgIGZpZ21hLm5vdGlmeShlcnJvclN0cmluZywgeyB0aW1lb3V0OiAwLjUgfSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBmaWdtYS5ub3RpZnkoXCLwn5GPIEFsbCBpcyBnb29kIGluIHRoZSBob29kIVwiLCB7IHRpbWVvdXQ6IDAuNSB9KTtcbiAgICB9XG59O1xuZXhwb3J0IHsgQ29sb3JDaGVja1RyYXZlcnNlIH07XG4iLCJjb25zdCBGb3JjZUF1dG9MYXlvdXRIb3Jpem9udGFsID0gKG5vZGVzKSA9PiB7XG4gICAgZm9yIChjb25zdCBub2RlIG9mIG5vZGVzKSB7XG4gICAgICAgIG5vZGUubGF5b3V0TW9kZSA9IFwiSE9SSVpPTlRBTFwiO1xuICAgIH1cbn07XG5jb25zdCBGb3JjZUF1dG9MYXlvdXRWZXJ0aWNhbCA9IChub2RlcykgPT4ge1xuICAgIGZvciAoY29uc3Qgbm9kZSBvZiBub2Rlcykge1xuICAgICAgICBub2RlLmxheW91dE1vZGUgPSBcIlZFUlRJQ0FMXCI7XG4gICAgfVxufTtcbmV4cG9ydCB7IEZvcmNlQXV0b0xheW91dEhvcml6b250YWwsIEZvcmNlQXV0b0xheW91dFZlcnRpY2FsIH07XG4iLCJpbXBvcnQgeyBwYWRkaW5nSG9yaXpvbnRhbCwgcGFkZGluZ1ZlcnRpY2FsLCBiYXNlbGluZUdyaWRzLCBtYXhXaWR0aEdyaWRzLCBjb2x1bW5HcmlkcywgbWF4V2lkdGhMZWZ0QWxpZ25lZEdyaWRzLCB9IGZyb20gXCIuLi90aGVtZS1zdHlsZXMvTGF5b3V0R3JpZHNcIjtcbmNvbnN0IFNldExheW91dEdyaWQgPSAobm9kZXMsIG1zZykgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKG1zZy5sYXlvdXRHcmlkT3B0aW9ucyk7XG4gICAgZm9yIChjb25zdCBub2RlIG9mIG5vZGVzKSB7XG4gICAgICAgIC8vIG5vZGUubGF5b3V0R3JpZHMgPSBbXTtcbiAgICAgICAgY29uc3QgaG9yaXpvbnRhbFBhZGRpbmdTbGlkZXJWYWx1ZSA9IG1zZy5sYXlvdXRHcmlkT3B0aW9uc1swXS52YWx1ZTtcbiAgICAgICAgY29uc3QgdmVydGljYWxQYWRkaW5nU2xpZGVyVmFsdWUgPSBtc2cubGF5b3V0R3JpZE9wdGlvbnNbMV0udmFsdWU7XG4gICAgICAgIGNvbnN0IHNob3dCYXNlbGluZVJvd3MgPSBtc2cubGF5b3V0R3JpZE9wdGlvbnNbMl0udmFsdWU7XG4gICAgICAgIGNvbnN0IHNob3dNYXhXaWR0aCA9IG1zZy5sYXlvdXRHcmlkT3B0aW9uc1szXS52YWx1ZTtcbiAgICAgICAgY29uc3Qgc2hvd0NvbHVtbnMgPSBtc2cubGF5b3V0R3JpZE9wdGlvbnNbNF0udmFsdWU7XG4gICAgICAgIGNvbnN0IHNob3dNYXhXaWR0aExlZnRBbGlnbmVkID0gbXNnLmxheW91dEdyaWRPcHRpb25zWzVdLnZhbHVlO1xuICAgICAgICBsZXQgYWxsR3JpZHMgPSBbXTtcbiAgICAgICAgbGV0IHNwYWNpbmdIb3Jpem9udGFsID0gMDtcbiAgICAgICAgbGV0IHNwYWNpbmdWZXJ0aWNhbCA9IDA7XG4gICAgICAgIHN3aXRjaCAoaG9yaXpvbnRhbFBhZGRpbmdTbGlkZXJWYWx1ZSkge1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBzcGFjaW5nSG9yaXpvbnRhbCA9IDA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiMFwiOlxuICAgICAgICAgICAgICAgIHNwYWNpbmdIb3Jpem9udGFsID0gMDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCIxXCI6XG4gICAgICAgICAgICAgICAgc3BhY2luZ0hvcml6b250YWwgPSA0O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIjJcIjpcbiAgICAgICAgICAgICAgICBzcGFjaW5nSG9yaXpvbnRhbCA9IDg7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiM1wiOlxuICAgICAgICAgICAgICAgIHNwYWNpbmdIb3Jpem9udGFsID0gMTY7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiNFwiOlxuICAgICAgICAgICAgICAgIHNwYWNpbmdIb3Jpem9udGFsID0gMjQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiNVwiOlxuICAgICAgICAgICAgICAgIHNwYWNpbmdIb3Jpem9udGFsID0gMzI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiNlwiOlxuICAgICAgICAgICAgICAgIHNwYWNpbmdIb3Jpem9udGFsID0gNDA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiN1wiOlxuICAgICAgICAgICAgICAgIHNwYWNpbmdIb3Jpem9udGFsID0gNDg7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgc3dpdGNoICh2ZXJ0aWNhbFBhZGRpbmdTbGlkZXJWYWx1ZSkge1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBzcGFjaW5nVmVydGljYWwgPSAwO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIjBcIjpcbiAgICAgICAgICAgICAgICBzcGFjaW5nVmVydGljYWwgPSAwO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIjFcIjpcbiAgICAgICAgICAgICAgICBzcGFjaW5nVmVydGljYWwgPSA0O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIjJcIjpcbiAgICAgICAgICAgICAgICBzcGFjaW5nVmVydGljYWwgPSA4O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIjNcIjpcbiAgICAgICAgICAgICAgICBzcGFjaW5nVmVydGljYWwgPSAxNjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCI0XCI6XG4gICAgICAgICAgICAgICAgc3BhY2luZ1ZlcnRpY2FsID0gMjQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiNVwiOlxuICAgICAgICAgICAgICAgIHNwYWNpbmdWZXJ0aWNhbCA9IDMyO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIjZcIjpcbiAgICAgICAgICAgICAgICBzcGFjaW5nVmVydGljYWwgPSA0MDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCI3XCI6XG4gICAgICAgICAgICAgICAgc3BhY2luZ1ZlcnRpY2FsID0gNDg7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgcGFkZGluZ0hvcml6b250YWwoc3BhY2luZ0hvcml6b250YWwpLnRoZW4oKHZhbCkgPT4ge1xuICAgICAgICAgICAgaWYgKHZhbC5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgICAgIC8vIGRvIG5vdGhpbmdcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgZ3JpZCBvZiB2YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgYWxsR3JpZHMucHVzaChncmlkKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYWxsR3JpZHMpO1xuICAgICAgICAgICAgICAgICAgICBub2RlLmxheW91dEdyaWRzID0gYWxsR3JpZHM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcGFkZGluZ1ZlcnRpY2FsKHNwYWNpbmdWZXJ0aWNhbCkudGhlbigodmFsKSA9PiB7XG4gICAgICAgICAgICBpZiAodmFsLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgLy8gZG8gbm90aGluZ1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBncmlkIG9mIHZhbCkge1xuICAgICAgICAgICAgICAgICAgICBhbGxHcmlkcy5wdXNoKGdyaWQpO1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhhbGxHcmlkcyk7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUubGF5b3V0R3JpZHMgPSBhbGxHcmlkcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoc2hvd01heFdpZHRoKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGdyaWQgb2YgbWF4V2lkdGhHcmlkcykge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGdyaWQpO1xuICAgICAgICAgICAgICAgIGFsbEdyaWRzLnB1c2goZ3JpZCk7XG4gICAgICAgICAgICAgICAgbm9kZS5sYXlvdXRHcmlkcyA9IGFsbEdyaWRzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbm9kZS5sYXlvdXRHcmlkcyA9IGFsbEdyaWRzO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzaG93TWF4V2lkdGhMZWZ0QWxpZ25lZCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBncmlkIG9mIG1heFdpZHRoTGVmdEFsaWduZWRHcmlkcykge1xuICAgICAgICAgICAgICAgIGFsbEdyaWRzLnB1c2goZ3JpZCk7XG4gICAgICAgICAgICAgICAgbm9kZS5sYXlvdXRHcmlkcyA9IGFsbEdyaWRzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbm9kZS5sYXlvdXRHcmlkcyA9IGFsbEdyaWRzO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzaG93Q29sdW1ucykge1xuICAgICAgICAgICAgZm9yIChjb25zdCBncmlkIG9mIGNvbHVtbkdyaWRzKSB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZ3JpZCk7XG4gICAgICAgICAgICAgICAgYWxsR3JpZHMucHVzaChncmlkKTtcbiAgICAgICAgICAgICAgICBub2RlLmxheW91dEdyaWRzID0gYWxsR3JpZHM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBub2RlLmxheW91dEdyaWRzID0gYWxsR3JpZHM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNob3dCYXNlbGluZVJvd3MpIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwic2hvd1wiKTtcbiAgICAgICAgICAgIGFsbEdyaWRzLnB1c2goYmFzZWxpbmVHcmlkcyk7XG4gICAgICAgICAgICBub2RlLmxheW91dEdyaWRzID0gYWxsR3JpZHM7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhhbGxHcmlkcyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBub2RlLmxheW91dEdyaWRzID0gYWxsR3JpZHM7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhhbGxHcmlkcyk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuZXhwb3J0IHsgU2V0TGF5b3V0R3JpZCB9O1xuIiwiY29uc3QgU3BhY2luZ0NoZWNrVHJhdmVyc2UgPSAobm9kZXMpID0+IHtcbiAgICBmb3IgKGNvbnN0IG5vZGUgb2Ygbm9kZXMpIHtcbiAgICAgICAgbGV0IG5hbWUgPSBub2RlLm5hbWU7XG4gICAgICAgIGxldCBwYWRkaW5nQWxsUmVnZXggPSAvXFxiKD86cGEtMXxwYS0yfHBhLTN8cGEtNHxwYS01fHBhLTZ8cGEtN3xwYS1ub25lKVxcYi9nO1xuICAgICAgICBsZXQgcGFkZGluZ0hvcml6b250YWxSZWdleCA9IC9cXGIoPzpwaC0xfHBoLTJ8cGgtM3xwaC00fHBoLTV8cGgtNnxwaC03fHBoLW5vbmUpXFxiL2c7XG4gICAgICAgIGxldCBwYWRkaW5nVmVydGljYWxSZWdleCA9IC9cXGIoPzpwdi0xfHB2LTJ8cHYtM3xwdi00fHB2LTV8cHYtNnxwdi03fHB2LW5vbmUpXFxiL2c7XG4gICAgICAgIGxldCBpdGVtU3BhY2luZ0FsbFJlZ2V4ID0gL1xcYig/OnNwLTF8c3AtMnxzcC0zfHNwLTR8c3AtNXxzcC02fHNwLTd8c3Atbm9uZSlcXGIvZztcbiAgICAgICAgbGV0IGF1dG9sYXlvdXRSZWdleCA9IC9cXGIoPzp2ZXJ0aWNhbHxob3Jpem9udGFsKVxcYi9nO1xuICAgICAgICBsZXQgbWF0Y2hQYWRkaW5nQWxsID0gbmFtZS5tYXRjaChwYWRkaW5nQWxsUmVnZXgpO1xuICAgICAgICBsZXQgbWF0Y2hQYWRkaW5nSG9yaXpvbnRhbCA9IG5hbWUubWF0Y2gocGFkZGluZ0hvcml6b250YWxSZWdleCk7XG4gICAgICAgIGxldCBtYXRjaFBhZGRpbmdWZXJ0aWNhbCA9IG5hbWUubWF0Y2gocGFkZGluZ1ZlcnRpY2FsUmVnZXgpO1xuICAgICAgICBsZXQgbWF0Y2hJdGVtU3BhY2luZyA9IG5hbWUubWF0Y2goaXRlbVNwYWNpbmdBbGxSZWdleCk7XG4gICAgICAgIGxldCBtYXRjaEF1dG9MYXlvdXREaXJlY3Rpb24gPSBuYW1lLm1hdGNoKGF1dG9sYXlvdXRSZWdleCk7XG4gICAgICAgIGNvbnNvbGUubG9nKG1hdGNoUGFkZGluZ0FsbCk7XG4gICAgICAgIGlmIChtYXRjaEF1dG9MYXlvdXREaXJlY3Rpb24gPT0gbnVsbCkge1xuICAgICAgICAgICAgbm9kZS5sYXlvdXRNb2RlID0gXCJWRVJUSUNBTFwiO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJlbmFibGUgYXV0byBsYXlvdXRcIik7XG4gICAgICAgICAgICBzd2l0Y2ggKG1hdGNoQXV0b0xheW91dERpcmVjdGlvblswXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJ2ZXJ0aWNhbFwiOlxuICAgICAgICAgICAgICAgICAgICBub2RlLmxheW91dE1vZGUgPSBcIlZFUlRJQ0FMXCI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJob3Jpem9udGFsXCI6XG4gICAgICAgICAgICAgICAgICAgIG5vZGUubGF5b3V0TW9kZSA9IFwiSE9SSVpPTlRBTFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChtYXRjaEl0ZW1TcGFjaW5nID09IG51bGwpIHtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaGFzIHNwYWNpbmdcIik7XG4gICAgICAgICAgICBzd2l0Y2ggKG1hdGNoSXRlbVNwYWNpbmdbMF0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIFwic3AtMFwiOlxuICAgICAgICAgICAgICAgICAgICBub2RlLml0ZW1TcGFjaW5nID0gMDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInNwLTFcIjpcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5pdGVtU3BhY2luZyA9IDQ7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJzcC0yXCI6XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuaXRlbVNwYWNpbmcgPSA4O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwic3AtM1wiOlxuICAgICAgICAgICAgICAgICAgICBub2RlLml0ZW1TcGFjaW5nID0gMTY7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJzcC00XCI6XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuaXRlbVNwYWNpbmcgPSAyNDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInNwLTVcIjpcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5pdGVtU3BhY2luZyA9IDMyO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwic3AtNlwiOlxuICAgICAgICAgICAgICAgICAgICBub2RlLml0ZW1TcGFjaW5nID0gNDA7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJzcC03XCI6XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuaXRlbVNwYWNpbmcgPSA0ODtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1hdGNoUGFkZGluZ0FsbCA9PSBudWxsKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIm5vXCIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJoYXMgcGFkZGluZyBhbGxcIik7XG4gICAgICAgICAgICBzd2l0Y2ggKG1hdGNoUGFkZGluZ0FsbFswXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJwYS1ub25lXCI6XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuaG9yaXpvbnRhbFBhZGRpbmcgPSAwO1xuICAgICAgICAgICAgICAgICAgICBub2RlLnZlcnRpY2FsUGFkZGluZyA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJwYS0xXCI6XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuaG9yaXpvbnRhbFBhZGRpbmcgPSA0O1xuICAgICAgICAgICAgICAgICAgICBub2RlLnZlcnRpY2FsUGFkZGluZyA9IDQ7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJwYS0yXCI6XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuaG9yaXpvbnRhbFBhZGRpbmcgPSA4O1xuICAgICAgICAgICAgICAgICAgICBub2RlLnZlcnRpY2FsUGFkZGluZyA9IDg7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJwYS0zXCI6XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuaG9yaXpvbnRhbFBhZGRpbmcgPSAxNjtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS52ZXJ0aWNhbFBhZGRpbmcgPSAxNjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInBhLTRcIjpcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5ob3Jpem9udGFsUGFkZGluZyA9IDI0O1xuICAgICAgICAgICAgICAgICAgICBub2RlLnZlcnRpY2FsUGFkZGluZyA9IDI0O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwicGEtNVwiOlxuICAgICAgICAgICAgICAgICAgICBub2RlLmhvcml6b250YWxQYWRkaW5nID0gMzI7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUudmVydGljYWxQYWRkaW5nID0gMzI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJwYS02XCI6XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuaG9yaXpvbnRhbFBhZGRpbmcgPSA0MDtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS52ZXJ0aWNhbFBhZGRpbmcgPSA0MDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInBhLTdcIjpcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5ob3Jpem9udGFsUGFkZGluZyA9IDQ4O1xuICAgICAgICAgICAgICAgICAgICBub2RlLnZlcnRpY2FsUGFkZGluZyA9IDQ4O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAobWF0Y2hQYWRkaW5nSG9yaXpvbnRhbCA9PSBudWxsKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIm5vXCIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJoYXMgcGFkZGluZyBob3Jpem9udGFsXCIpO1xuICAgICAgICAgICAgc3dpdGNoIChtYXRjaFBhZGRpbmdIb3Jpem9udGFsWzBdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcInBoLW5vbmVcIjpcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5ob3Jpem9udGFsUGFkZGluZyA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJwaC0xXCI6XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuaG9yaXpvbnRhbFBhZGRpbmcgPSA0O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwicGgtMlwiOlxuICAgICAgICAgICAgICAgICAgICBub2RlLmhvcml6b250YWxQYWRkaW5nID0gODtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInBoLTNcIjpcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5ob3Jpem9udGFsUGFkZGluZyA9IDE2O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwicGgtNFwiOlxuICAgICAgICAgICAgICAgICAgICBub2RlLmhvcml6b250YWxQYWRkaW5nID0gMjQ7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJwaC01XCI6XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuaG9yaXpvbnRhbFBhZGRpbmcgPSAzMjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInBoLTZcIjpcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5ob3Jpem9udGFsUGFkZGluZyA9IDQwO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwicGgtN1wiOlxuICAgICAgICAgICAgICAgICAgICBub2RlLmhvcml6b250YWxQYWRkaW5nID0gNDg7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChtYXRjaFBhZGRpbmdWZXJ0aWNhbCA9PSBudWxsKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIm5vXCIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJoYXMgcGFkZGluZyBob3Jpem9udGFsXCIpO1xuICAgICAgICAgICAgc3dpdGNoIChtYXRjaFBhZGRpbmdWZXJ0aWNhbFswXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJwdi1ub25lXCI6XG4gICAgICAgICAgICAgICAgICAgIG5vZGUudmVydGljYWxQYWRkaW5nID0gMDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInB2LTFcIjpcbiAgICAgICAgICAgICAgICAgICAgbm9kZS52ZXJ0aWNhbFBhZGRpbmcgPSA0O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwicHYtMlwiOlxuICAgICAgICAgICAgICAgICAgICBub2RlLnZlcnRpY2FsUGFkZGluZyA9IDg7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJwdi0zXCI6XG4gICAgICAgICAgICAgICAgICAgIG5vZGUudmVydGljYWxQYWRkaW5nID0gMTY7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJwdi00XCI6XG4gICAgICAgICAgICAgICAgICAgIG5vZGUudmVydGljYWxQYWRkaW5nID0gMjQ7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJwdi01XCI6XG4gICAgICAgICAgICAgICAgICAgIG5vZGUudmVydGljYWxQYWRkaW5nID0gMzI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJwdi02XCI6XG4gICAgICAgICAgICAgICAgICAgIG5vZGUudmVydGljYWxQYWRkaW5nID0gNDA7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJwdi03XCI6XG4gICAgICAgICAgICAgICAgICAgIG5vZGUudmVydGljYWxQYWRkaW5nID0gNDg7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIFNwYWNpbmdDaGVja1RyYXZlcnNlKG5vZGUpO1xuICAgIH1cbiAgICAvLyBpZiAoXCJjaGlsZHJlblwiIGluIG5vZGVzKSB7XG4gICAgLy8gICBmb3IgKGNvbnN0IGNoaWxkIG9mIG5vZGUuY2hpbGRyZW4pIHtcbiAgICAvLyAgICAgU3BhY2luZ0NoZWNrVHJhdmVyc2UoY2hpbGQpO1xuICAgIC8vICAgfVxuICAgIC8vIH0gZWxzZSB7XG4gICAgLy8gICAvLyBkbyBub3RoaW5nXG4gICAgLy8gfVxufTtcbmV4cG9ydCB7IFNwYWNpbmdDaGVja1RyYXZlcnNlIH07XG4iLCJmdW5jdGlvbiBjbG9uZSh2YWwpIHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh2YWwpKTtcbn1cbmxldCBwaE5hbWUgPSBudWxsO1xubGV0IHB2TmFtZSA9IG51bGw7XG5sZXQgc3BOYW1lID0gbnVsbDtcbmxldCBuYW1lUHJvcCA9IHtcbiAgICBob3Jpem9udGFsOiBcInBoLW5vbmVcIixcbiAgICB2ZXJ0aWNhbDogXCJwdi1ub25lXCIsXG4gICAgc3BhY2luZzogXCJzcC1ub25lXCIsXG59O1xuZnVuY3Rpb24gdXBkYXRlTmFtZSh2YWwsIG5vZGUpIHtcbiAgICBpZiAodmFsLnR5cGUgPT09IFwiaG9yaXpvbnRhbFwiKSB7XG4gICAgICAgIG5hbWVQcm9wLmhvcml6b250YWwgPSB2YWwudmFsdWU7XG4gICAgfVxuICAgIGVsc2UgaWYgKHZhbC50eXBlID09PSBcInZlcnRpY2FsXCIpIHtcbiAgICAgICAgbmFtZVByb3AudmVydGljYWwgPSB2YWwudmFsdWU7XG4gICAgfVxuICAgIGVsc2UgaWYgKHZhbC50eXBlID09PSBcInNwYWNpbmdcIikge1xuICAgICAgICBuYW1lUHJvcC5zcGFjaW5nID0gdmFsLnZhbHVlO1xuICAgIH1cbiAgICBub2RlLm5hbWUgPVxuICAgICAgICBuYW1lUHJvcC5ob3Jpem9udGFsICsgXCIgXCIgKyBuYW1lUHJvcC52ZXJ0aWNhbCArIFwiIFwiICsgbmFtZVByb3Auc3BhY2luZztcbn1cbmNvbnN0IFBhZGRpbmdIb3Jpem9udGFsU2xpZGVyID0gKG5vZGVzLCBtc2cpID0+IHtcbiAgICBsZXQgc2xpZGVyVmFsdWUgPSBtc2cuc2xpZGVyVmFsdWU7XG4gICAgbGV0IHNwYWNpbmcgPSBudWxsO1xuICAgIGxldCBzcGFjaW5nTmFtZSA9IG51bGw7XG4gICAgc3dpdGNoIChzbGlkZXJWYWx1ZSkge1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgc3BhY2luZyA9IDA7XG4gICAgICAgICAgICBzcGFjaW5nTmFtZSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCIxXCI6XG4gICAgICAgICAgICBzcGFjaW5nID0gNDtcbiAgICAgICAgICAgIHNwYWNpbmdOYW1lID0gXCIxXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIjJcIjpcbiAgICAgICAgICAgIHNwYWNpbmcgPSA4O1xuICAgICAgICAgICAgc3BhY2luZ05hbWUgPSBcIjJcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiM1wiOlxuICAgICAgICAgICAgc3BhY2luZyA9IDE2O1xuICAgICAgICAgICAgc3BhY2luZ05hbWUgPSBcIjNcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiNFwiOlxuICAgICAgICAgICAgc3BhY2luZyA9IDI0O1xuICAgICAgICAgICAgc3BhY2luZ05hbWUgPSBcIjRcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiNVwiOlxuICAgICAgICAgICAgc3BhY2luZyA9IDMyO1xuICAgICAgICAgICAgc3BhY2luZ05hbWUgPSBcIjVcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiNlwiOlxuICAgICAgICAgICAgc3BhY2luZyA9IDQwO1xuICAgICAgICAgICAgc3BhY2luZ05hbWUgPSBcIjZcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiN1wiOlxuICAgICAgICAgICAgc3BhY2luZyA9IDQ4O1xuICAgICAgICAgICAgc3BhY2luZ05hbWUgPSBcIjdcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IG5vZGUgb2Ygbm9kZXMpIHtcbiAgICAgICAgaWYgKG5vZGUpIHtcbiAgICAgICAgICAgIHBoTmFtZSA9IFwicGgtXCIgKyBzcGFjaW5nTmFtZTtcbiAgICAgICAgICAgIHVwZGF0ZU5hbWUoeyB0eXBlOiBcImhvcml6b250YWxcIiwgdmFsdWU6IHBoTmFtZSB9LCBub2RlKTtcbiAgICAgICAgICAgIGlmIChub2RlLnR5cGUgPT09IFwiR1JPVVBcIikge1xuICAgICAgICAgICAgICAgIG5vZGUuaG9yaXpvbnRhbFBhZGRpbmcgPSBzcGFjaW5nO1xuICAgICAgICAgICAgICAgIG5vZGUubGF5b3V0TW9kZSA9IFwiTk9ORVwiO1xuICAgICAgICAgICAgICAgIGlmIChcImNoaWxkcmVuXCIgaW4gbm9kZSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgZ3JvdXAgPSBub2RlLmNoaWxkcmVuWzBdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGxldCBzZXRBdXRvTGF5b3V0ID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgICAgICAgICBub2RlLmhvcml6b250YWxQYWRkaW5nID0gc3BhY2luZztcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiByZXNvbHZlKFwiZG9uZVwiKSwgNSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59O1xuY29uc3QgUGFkZGluZ1ZlcnRpY2FsU2xpZGVyID0gKG5vZGVzLCBtc2cpID0+IHtcbiAgICBsZXQgc2xpZGVyVmFsdWUgPSBtc2cuc2xpZGVyVmFsdWU7XG4gICAgbGV0IHNwYWNpbmcgPSBudWxsO1xuICAgIGxldCBzcGFjaW5nTmFtZSA9IG51bGw7XG4gICAgc3dpdGNoIChzbGlkZXJWYWx1ZSkge1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgc3BhY2luZyA9IDA7XG4gICAgICAgICAgICBzcGFjaW5nTmFtZSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCIxXCI6XG4gICAgICAgICAgICBzcGFjaW5nID0gNDtcbiAgICAgICAgICAgIHNwYWNpbmdOYW1lID0gXCIxXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIjJcIjpcbiAgICAgICAgICAgIHNwYWNpbmcgPSA4O1xuICAgICAgICAgICAgc3BhY2luZ05hbWUgPSBcIjJcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiM1wiOlxuICAgICAgICAgICAgc3BhY2luZyA9IDE2O1xuICAgICAgICAgICAgc3BhY2luZ05hbWUgPSBcIjNcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiNFwiOlxuICAgICAgICAgICAgc3BhY2luZyA9IDI0O1xuICAgICAgICAgICAgc3BhY2luZ05hbWUgPSBcIjRcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiNVwiOlxuICAgICAgICAgICAgc3BhY2luZyA9IDMyO1xuICAgICAgICAgICAgc3BhY2luZ05hbWUgPSBcIjVcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiNlwiOlxuICAgICAgICAgICAgc3BhY2luZyA9IDQwO1xuICAgICAgICAgICAgc3BhY2luZ05hbWUgPSBcIjZcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiN1wiOlxuICAgICAgICAgICAgc3BhY2luZyA9IDQ4O1xuICAgICAgICAgICAgc3BhY2luZ05hbWUgPSBcIjdcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IG5vZGUgb2Ygbm9kZXMpIHtcbiAgICAgICAgaWYgKG5vZGUpIHtcbiAgICAgICAgICAgIHB2TmFtZSA9IFwicHYtXCIgKyBzcGFjaW5nTmFtZTtcbiAgICAgICAgICAgIHVwZGF0ZU5hbWUoeyB0eXBlOiBcInZlcnRpY2FsXCIsIHZhbHVlOiBwdk5hbWUgfSwgbm9kZSk7XG4gICAgICAgICAgICBpZiAobm9kZS50eXBlID09PSBcIkdST1VQXCIpIHtcbiAgICAgICAgICAgICAgICBub2RlLnZlcnRpY2FsUGFkZGluZyA9IHNwYWNpbmc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBsZXQgc2V0QXV0b0xheW91dCA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS52ZXJ0aWNhbFBhZGRpbmcgPSBzcGFjaW5nO1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHJlc29sdmUoXCJkb25lXCIpLCA1KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn07XG5jb25zdCBJdGVtU3BhY2luZyA9IChub2RlcywgbXNnKSA9PiB7XG4gICAgbGV0IHNsaWRlclZhbHVlID0gbXNnLnNsaWRlclZhbHVlO1xuICAgIGxldCBzcGFjaW5nID0gbnVsbDtcbiAgICBsZXQgc3BhY2luZ05hbWUgPSBudWxsO1xuICAgIHN3aXRjaCAoc2xpZGVyVmFsdWUpIHtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHNwYWNpbmcgPSAwO1xuICAgICAgICAgICAgc3BhY2luZ05hbWUgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiMVwiOlxuICAgICAgICAgICAgc3BhY2luZyA9IDQ7XG4gICAgICAgICAgICBzcGFjaW5nTmFtZSA9IFwiMVwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCIyXCI6XG4gICAgICAgICAgICBzcGFjaW5nID0gODtcbiAgICAgICAgICAgIHNwYWNpbmdOYW1lID0gXCIyXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIjNcIjpcbiAgICAgICAgICAgIHNwYWNpbmcgPSAxNjtcbiAgICAgICAgICAgIHNwYWNpbmdOYW1lID0gXCIzXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIjRcIjpcbiAgICAgICAgICAgIHNwYWNpbmcgPSAyNDtcbiAgICAgICAgICAgIHNwYWNpbmdOYW1lID0gXCI0XCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIjVcIjpcbiAgICAgICAgICAgIHNwYWNpbmcgPSAzMjtcbiAgICAgICAgICAgIHNwYWNpbmdOYW1lID0gXCI1XCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIjZcIjpcbiAgICAgICAgICAgIHNwYWNpbmcgPSA0MDtcbiAgICAgICAgICAgIHNwYWNpbmdOYW1lID0gXCI2XCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIjdcIjpcbiAgICAgICAgICAgIHNwYWNpbmcgPSA0ODtcbiAgICAgICAgICAgIHNwYWNpbmdOYW1lID0gXCI3XCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG4gICAgZm9yIChjb25zdCBub2RlIG9mIG5vZGVzKSB7XG4gICAgICAgIG5vZGUuaXRlbVNwYWNpbmcgPSBzcGFjaW5nO1xuICAgICAgICBzcE5hbWUgPSBcInNwLVwiICsgc3BhY2luZ05hbWU7XG4gICAgICAgIHVwZGF0ZU5hbWUoeyB0eXBlOiBcInNwYWNpbmdcIiwgdmFsdWU6IHNwTmFtZSB9LCBub2RlKTtcbiAgICB9XG59O1xuZXhwb3J0IHsgUGFkZGluZ0hvcml6b250YWxTbGlkZXIsIFBhZGRpbmdWZXJ0aWNhbFNsaWRlciwgSXRlbVNwYWNpbmcgfTtcbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IHsgRGFya1VpQ29sb3JzLCBMaWdodFVpQ29sb3JzIH0gZnJvbSBcIi4uL3RoZW1lLXN0eWxlcy9jb2xvcnNcIjtcbmltcG9ydCB7IERhcmtVaUVmZmVjdHMsIExpZ2h0VWlFZmZlY3RzIH0gZnJvbSBcIi4uL3RoZW1lLXN0eWxlcy9lZmZlY3RzXCI7XG4vLyBGaWxsXG5jb25zdCBzd2FwRmlsbCA9IChub2RlKSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgbGV0IG5vZGVGaWxsU3R5bGVJZCA9IG5vZGUuZmlsbFN0eWxlSWQ7XG4gICAgbGV0IG5vZGVGaWxsUGFpbnRTdHlsZSA9IGZpZ21hLmdldFN0eWxlQnlJZChub2RlRmlsbFN0eWxlSWQpO1xuICAgIGxldCBub2RlRmlsbFBhaW50TmFtZSA9IG5vZGVGaWxsUGFpbnRTdHlsZS5uYW1lO1xuICAgIGxldCBzd2FwcGVkTm9kZUZpbGxOYW1lID0gbnVsbDtcbiAgICBsZXQgbm9kZUZpbGxQYWludElzTGlnaHRNb2RlID0gbm9kZUZpbGxQYWludE5hbWUuaW5jbHVkZXMoXCJsaWdodCB1aVwiKTtcbiAgICBpZiAobm9kZUZpbGxQYWludElzTGlnaHRNb2RlKSB7XG4gICAgICAgIHN3YXBwZWROb2RlRmlsbE5hbWUgPSBub2RlRmlsbFBhaW50TmFtZS5yZXBsYWNlKFwibGlnaHQgdWkgLyBcIiwgXCJkYXJrIHVpIC8gXCIpO1xuICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgRGFya1VpQ29sb3JzKSB7XG4gICAgICAgICAgICBpZiAoaXRlbS5uYW1lID09PSBzd2FwcGVkTm9kZUZpbGxOYW1lKSB7XG4gICAgICAgICAgICAgICAgZmlnbWEuaW1wb3J0U3R5bGVCeUtleUFzeW5jKGl0ZW0uc3R5bGVLZXkpLnRoZW4oKHJlc3ApID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5maWxsU3R5bGVJZCA9IHJlc3AuaWQ7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHN3YXBwZWROb2RlRmlsbE5hbWUgPSBub2RlRmlsbFBhaW50TmFtZS5yZXBsYWNlKFwiZGFyayB1aSAvIFwiLCBcImxpZ2h0IHVpIC8gXCIpO1xuICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgTGlnaHRVaUNvbG9ycykge1xuICAgICAgICAgICAgaWYgKGl0ZW0ubmFtZSA9PT0gc3dhcHBlZE5vZGVGaWxsTmFtZSkge1xuICAgICAgICAgICAgICAgIGZpZ21hLmltcG9ydFN0eWxlQnlLZXlBc3luYyhpdGVtLnN0eWxlS2V5KS50aGVuKChyZXNwKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuZmlsbFN0eWxlSWQgPSByZXNwLmlkO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSk7XG4vLyBTdHJva2VzXG5jb25zdCBzd2FwU3Ryb2tlID0gKG5vZGUpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICBsZXQgbm9kZVN0cm9rZVN0eWxlSWQgPSBub2RlLnN0cm9rZVN0eWxlSWQ7XG4gICAgbGV0IG5vZGVTdHJva2VQYWludFN0eWxlID0gZmlnbWEuZ2V0U3R5bGVCeUlkKG5vZGVTdHJva2VTdHlsZUlkKTtcbiAgICBsZXQgbm9kZVN0cm9rZVBhaW50TmFtZSA9IG5vZGVTdHJva2VQYWludFN0eWxlLm5hbWU7XG4gICAgbGV0IHN3YXBwZWROb2RlU3Ryb2tlTmFtZSA9IG51bGw7XG4gICAgbGV0IG5vZGVTdHJva2VQYWludElzTGlnaHRNb2RlID0gbm9kZVN0cm9rZVBhaW50TmFtZS5pbmNsdWRlcyhcImxpZ2h0IHVpXCIpO1xuICAgIGNvbnNvbGUubG9nKFwiU3Ryb2tlOiBcIiArIG5vZGVTdHJva2VQYWludE5hbWUpO1xuICAgIGlmIChub2RlU3Ryb2tlUGFpbnRJc0xpZ2h0TW9kZSkge1xuICAgICAgICBzd2FwcGVkTm9kZVN0cm9rZU5hbWUgPSBub2RlU3Ryb2tlUGFpbnROYW1lLnJlcGxhY2UoXCJsaWdodCB1aSAvIFwiLCBcImRhcmsgdWkgLyBcIik7XG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBEYXJrVWlDb2xvcnMpIHtcbiAgICAgICAgICAgIGlmIChpdGVtLm5hbWUgPT09IHN3YXBwZWROb2RlU3Ryb2tlTmFtZSkge1xuICAgICAgICAgICAgICAgIGZpZ21hLmltcG9ydFN0eWxlQnlLZXlBc3luYyhpdGVtLnN0eWxlS2V5KS50aGVuKChyZXNwKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuc3Ryb2tlU3R5bGVJZCA9IHJlc3AuaWQ7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBEbyBub3RoaW5nXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHN3YXBwZWROb2RlU3Ryb2tlTmFtZSA9IG5vZGVTdHJva2VQYWludE5hbWUucmVwbGFjZShcImRhcmsgdWkgLyBcIiwgXCJsaWdodCB1aSAvIFwiKTtcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIExpZ2h0VWlDb2xvcnMpIHtcbiAgICAgICAgICAgIGlmIChpdGVtLm5hbWUgPT09IHN3YXBwZWROb2RlU3Ryb2tlTmFtZSkge1xuICAgICAgICAgICAgICAgIGZpZ21hLmltcG9ydFN0eWxlQnlLZXlBc3luYyhpdGVtLnN0eWxlS2V5KS50aGVuKChyZXNwKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuc3Ryb2tlU3R5bGVJZCA9IHJlc3AuaWQ7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBEbyBub3RoaW5nXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59KTtcbi8vIEVmZmVjdHNcbmNvbnN0IHN3YXBFZmZlY3RzID0gKG5vZGUpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICBsZXQgbm9kZUVmZmVjdFN0eWxlSWQgPSBub2RlLmVmZmVjdFN0eWxlSWQ7XG4gICAgbGV0IG5vZGVFZmZlY3RTdHlsZSA9IGZpZ21hLmdldFN0eWxlQnlJZChub2RlRWZmZWN0U3R5bGVJZCk7XG4gICAgbGV0IG5vZGVFZmZlY3RTdHlsZU5hbWUgPSBub2RlRWZmZWN0U3R5bGUubmFtZTtcbiAgICBsZXQgc3dhcHBlZE5vZGVFZmZlY3ROYW1lID0gbnVsbDtcbiAgICBsZXQgbm9kZUVmZmVjdFN0eWxlTmFtZUlzTGlnaHQgPSBub2RlRWZmZWN0U3R5bGVOYW1lLmluY2x1ZGVzKFwibGlnaHQgdWlcIik7XG4gICAgY29uc29sZS5sb2coXCJFZmZlY3Q6IFwiICsgbm9kZUVmZmVjdFN0eWxlTmFtZSk7XG4gICAgaWYgKG5vZGVFZmZlY3RTdHlsZU5hbWVJc0xpZ2h0KSB7XG4gICAgICAgIHN3YXBwZWROb2RlRWZmZWN0TmFtZSA9IG5vZGVFZmZlY3RTdHlsZU5hbWUucmVwbGFjZShcImxpZ2h0IHVpIC8gXCIsIFwiZGFyayB1aSAvIFwiKTtcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIERhcmtVaUVmZmVjdHMpIHtcbiAgICAgICAgICAgIGlmIChpdGVtLm5hbWUgPT09IHN3YXBwZWROb2RlRWZmZWN0TmFtZSkge1xuICAgICAgICAgICAgICAgIGZpZ21hLmltcG9ydFN0eWxlQnlLZXlBc3luYyhpdGVtLnN0eWxlS2V5KS50aGVuKChyZXNwKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuZWZmZWN0U3R5bGVJZCA9IHJlc3AuaWQ7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBkbyBub3RoaW5nXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHN3YXBwZWROb2RlRWZmZWN0TmFtZSA9IG5vZGVFZmZlY3RTdHlsZU5hbWUucmVwbGFjZShcImRhcmsgdWkgLyBcIiwgXCJsaWdodCB1aSAvIFwiKTtcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIExpZ2h0VWlFZmZlY3RzKSB7XG4gICAgICAgICAgICBpZiAoaXRlbS5uYW1lID09PSBzd2FwcGVkTm9kZUVmZmVjdE5hbWUpIHtcbiAgICAgICAgICAgICAgICBmaWdtYS5pbXBvcnRTdHlsZUJ5S2V5QXN5bmMoaXRlbS5zdHlsZUtleSkudGhlbigocmVzcCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBub2RlLmVmZmVjdFN0eWxlSWQgPSByZXNwLmlkO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gRG8gbm90aGluZ1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSk7XG4vLyBUaGVtZSBTd2FwXG5jb25zdCBUaGVtZVN3YXAgPSAobm9kZSkgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIC8vIGRvIG5vdGhpbmcgYmVsb3dcbiAgICBpZiAoXCJjaGlsZHJlblwiIGluIG5vZGUpIHtcbiAgICAgICAgZm9yIChjb25zdCBjaGlsZCBvZiBub2RlLmNoaWxkcmVuKSB7XG4gICAgICAgICAgICBUaGVtZVN3YXAoY2hpbGQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICAvLyBkbyBub3RoaW5nXG4gICAgfVxuICAgIHN3YXBGaWxsKG5vZGUpO1xuICAgIHN3YXBTdHJva2Uobm9kZSk7XG4gICAgc3dhcEVmZmVjdHMobm9kZSk7XG59KTtcbmV4cG9ydCB7IFRoZW1lU3dhcCB9O1xuLy8gUnVuIHRoaXMgaW4gdG9rZW5zIGZpbGVcbmNvbnN0IEdldEFsbExvY2FsUGFpbnRTdHlsZXMgPSAoKSA9PiB7XG4gICAgZnVuY3Rpb24gY2xvbmUodmFsKSB7XG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHZhbCkpO1xuICAgIH1cbiAgICBsZXQgYWxsUGFpbnRTdHlsZXMgPSBmaWdtYS5nZXRMb2NhbFBhaW50U3R5bGVzKCk7XG4gICAgLy8gY29uc29sZS5sb2coYWxsUGFpbnRTdHlsZXMpO1xuICAgIGxldCBhbGxTdHlsZXNBcnJheSA9IFtdO1xuICAgIGZvciAoY29uc3QgcGFpbnRTdHlsZSBvZiBhbGxQYWludFN0eWxlcykge1xuICAgICAgICBsZXQgY29sb3IgPSBjbG9uZShwYWludFN0eWxlLnBhaW50c1swXSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGNvbG9yKTtcbiAgICAgICAgbGV0IGNvbG9yUkdCID0gY29sb3IuY29sb3I7XG4gICAgICAgIGxldCByZ2JUb0ludCA9ICh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIE1hdGguY2VpbCh2YWx1ZSAqIDI1NSk7XG4gICAgICAgIH07XG4gICAgICAgIGxldCByZ2JhID0ge1xuICAgICAgICAgICAgcjogcmdiVG9JbnQoY29sb3JSR0IuciksXG4gICAgICAgICAgICBnOiByZ2JUb0ludChjb2xvclJHQi5nKSxcbiAgICAgICAgICAgIGI6IHJnYlRvSW50KGNvbG9yUkdCLmIpLFxuICAgICAgICAgICAgYTogY29sb3Iub3BhY2l0eSxcbiAgICAgICAgfTtcbiAgICAgICAgYWxsU3R5bGVzQXJyYXkucHVzaCh7XG4gICAgICAgICAgICBuYW1lOiBwYWludFN0eWxlLm5hbWUsXG4gICAgICAgICAgICBzdHlsZUtleTogcGFpbnRTdHlsZS5rZXksXG4gICAgICAgICAgICByZ2JhOiByZ2JhLFxuICAgICAgICB9KTtcbiAgICAgICAgY29uc29sZS5sb2coYWxsU3R5bGVzQXJyYXkpO1xuICAgIH1cbn07XG4vLyBSdW4gdGhpcyBpbiB0b2tlbnMgZmlsZVxuY29uc3QgR2V0QWxsTG9jYWxFZmZlY3RTdHlsZXMgPSAoKSA9PiB7XG4gICAgbGV0IGFsbEVmZmVjdFN0eWxlcyA9IGZpZ21hLmdldExvY2FsRWZmZWN0U3R5bGVzKCk7XG4gICAgbGV0IGFsbEVmZmVjdHMgPSBbXTtcbiAgICBmb3IgKGNvbnN0IGVmZmVjdFN0eWxlIG9mIGFsbEVmZmVjdFN0eWxlcykge1xuICAgICAgICBhbGxFZmZlY3RzLnB1c2goeyBuYW1lOiBlZmZlY3RTdHlsZS5uYW1lLCBzdHlsZUtleTogZWZmZWN0U3R5bGUua2V5IH0pO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhhbGxFZmZlY3RzKTtcbn07XG4iLCJleHBvcnQgY29uc3QgcGFkZGluZ0hvcml6b250YWwgPSAoc3BhY2luZykgPT4ge1xuICBsZXQgZ3JpZHM7XG5cbiAgaWYgKHNwYWNpbmcgPT0gMCkge1xuICAgIGdyaWRzID0gW107XG4gIH0gZWxzZSB7XG4gICAgZ3JpZHMgPSBbXG4gICAgICB7XG4gICAgICAgIHBhdHRlcm46IFwiQ09MVU1OU1wiLFxuICAgICAgICB2aXNpYmxlOiB0cnVlLFxuICAgICAgICBjb2xvcjoge1xuICAgICAgICAgIHI6IDAsXG4gICAgICAgICAgZzogMC41LFxuICAgICAgICAgIGI6IDEsXG4gICAgICAgICAgYTogMC4wNSxcbiAgICAgICAgfSxcbiAgICAgICAgZ3V0dGVyU2l6ZTogMSxcbiAgICAgICAgYWxpZ25tZW50OiBcIlNUUkVUQ0hcIixcbiAgICAgICAgY291bnQ6IDEsXG4gICAgICAgIG9mZnNldDogc3BhY2luZyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdHRlcm46IFwiQ09MVU1OU1wiLFxuICAgICAgICB2aXNpYmxlOiB0cnVlLFxuICAgICAgICBjb2xvcjoge1xuICAgICAgICAgIHI6IDAsXG4gICAgICAgICAgZzogMSxcbiAgICAgICAgICBiOiAwLFxuICAgICAgICAgIGE6IDAuMixcbiAgICAgICAgfSxcbiAgICAgICAgZ3V0dGVyU2l6ZTogMSxcbiAgICAgICAgYWxpZ25tZW50OiBcIk1BWFwiLFxuICAgICAgICBjb3VudDogMSxcbiAgICAgICAgc2VjdGlvblNpemU6IHNwYWNpbmcsXG4gICAgICAgIG9mZnNldDogMCxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdHRlcm46IFwiQ09MVU1OU1wiLFxuICAgICAgICB2aXNpYmxlOiB0cnVlLFxuICAgICAgICBjb2xvcjoge1xuICAgICAgICAgIHI6IDAsXG4gICAgICAgICAgZzogMSxcbiAgICAgICAgICBiOiAwLFxuICAgICAgICAgIGE6IDAuMixcbiAgICAgICAgfSxcbiAgICAgICAgZ3V0dGVyU2l6ZTogMSxcbiAgICAgICAgYWxpZ25tZW50OiBcIk1JTlwiLFxuICAgICAgICBjb3VudDogMSxcbiAgICAgICAgc2VjdGlvblNpemU6IHNwYWNpbmcsXG4gICAgICAgIG9mZnNldDogMCxcbiAgICAgIH0sXG4gICAgXTtcbiAgfVxuXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgcmVzb2x2ZShncmlkcyk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IHBhZGRpbmdWZXJ0aWNhbCA9IChzcGFjaW5nKSA9PiB7XG4gIGxldCBncmlkcztcblxuICBpZiAoc3BhY2luZyA9PSAwKSB7XG4gICAgZ3JpZHMgPSBbXTtcbiAgfSBlbHNlIHtcbiAgICBncmlkcyA9IFtcbiAgICAgIHtcbiAgICAgICAgcGF0dGVybjogXCJST1dTXCIsXG4gICAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICAgIGNvbG9yOiB7XG4gICAgICAgICAgcjogMCxcbiAgICAgICAgICBnOiAwLjUsXG4gICAgICAgICAgYjogMSxcbiAgICAgICAgICBhOiAwLjA1LFxuICAgICAgICB9LFxuICAgICAgICBndXR0ZXJTaXplOiAxLFxuICAgICAgICBhbGlnbm1lbnQ6IFwiU1RSRVRDSFwiLFxuICAgICAgICBjb3VudDogMSxcbiAgICAgICAgb2Zmc2V0OiBzcGFjaW5nLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0dGVybjogXCJST1dTXCIsXG4gICAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICAgIGNvbG9yOiB7XG4gICAgICAgICAgcjogMCxcbiAgICAgICAgICBnOiAxLFxuICAgICAgICAgIGI6IDAsXG4gICAgICAgICAgYTogMC4yLFxuICAgICAgICB9LFxuICAgICAgICBndXR0ZXJTaXplOiAxLFxuICAgICAgICBhbGlnbm1lbnQ6IFwiTUFYXCIsXG4gICAgICAgIGNvdW50OiAxLFxuICAgICAgICBzZWN0aW9uU2l6ZTogc3BhY2luZyxcbiAgICAgICAgb2Zmc2V0OiAwLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0dGVybjogXCJST1dTXCIsXG4gICAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICAgIGNvbG9yOiB7XG4gICAgICAgICAgcjogMCxcbiAgICAgICAgICBnOiAxLFxuICAgICAgICAgIGI6IDAsXG4gICAgICAgICAgYTogMC4yLFxuICAgICAgICB9LFxuICAgICAgICBndXR0ZXJTaXplOiAxLFxuICAgICAgICBhbGlnbm1lbnQ6IFwiTUlOXCIsXG4gICAgICAgIGNvdW50OiAxLFxuICAgICAgICBzZWN0aW9uU2l6ZTogc3BhY2luZyxcbiAgICAgICAgb2Zmc2V0OiAwLFxuICAgICAgfSxcbiAgICBdO1xuICB9XG5cbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICByZXNvbHZlKGdyaWRzKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgYmFzZWxpbmVHcmlkcyA9IHtcbiAgcGF0dGVybjogXCJST1dTXCIsXG4gIHZpc2libGU6IHRydWUsXG4gIGNvbG9yOiB7XG4gICAgcjogMSxcbiAgICBnOiAwLFxuICAgIGI6IDAsXG4gICAgYTogMC4xMDAwMDAwMDE0OTAxMTYxMixcbiAgfSxcbiAgZ3V0dGVyU2l6ZTogNCxcbiAgYWxpZ25tZW50OiBcIk1JTlwiLFxuICBjb3VudDogSW5maW5pdHksXG4gIHNlY3Rpb25TaXplOiA0LFxuICBvZmZzZXQ6IDAsXG59O1xuXG5leHBvcnQgY29uc3QgbWF4V2lkdGhHcmlkcyA9IFtcbiAge1xuICAgIHBhdHRlcm46IFwiQ09MVU1OU1wiLFxuICAgIHZpc2libGU6IHRydWUsXG4gICAgY29sb3I6IHtcbiAgICAgIHI6IDEsXG4gICAgICBnOiAwLjcxOTk5OTk2OTAwNTU4NDcsXG4gICAgICBiOiAwLFxuICAgICAgYTogMC4yMDAwMDAwMDI5ODAyMzIyNCxcbiAgICB9LFxuICAgIGd1dHRlclNpemU6IDk2MCxcbiAgICBhbGlnbm1lbnQ6IFwiU1RSRVRDSFwiLFxuICAgIGNvdW50OiAyLFxuICAgIG9mZnNldDogMCxcbiAgfSxcbiAge1xuICAgIHBhdHRlcm46IFwiQ09MVU1OU1wiLFxuICAgIHZpc2libGU6IHRydWUsXG4gICAgY29sb3I6IHtcbiAgICAgIHI6IDAsXG4gICAgICBnOiAwLjUsXG4gICAgICBiOiAxLFxuICAgICAgYTogMC4xLFxuICAgIH0sXG4gICAgZ3V0dGVyU2l6ZTogMSxcbiAgICBhbGlnbm1lbnQ6IFwiQ0VOVEVSXCIsXG4gICAgY291bnQ6IDEsXG4gICAgc2VjdGlvblNpemU6IDk2MCxcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBtYXhXaWR0aExlZnRBbGlnbmVkR3JpZHMgPSBbXG4gIHtcbiAgICBwYXR0ZXJuOiBcIkNPTFVNTlNcIixcbiAgICB2aXNpYmxlOiB0cnVlLFxuICAgIGNvbG9yOiB7XG4gICAgICByOiAwLFxuICAgICAgZzogMC41LFxuICAgICAgYjogMSxcbiAgICAgIGE6IDAuMDUsXG4gICAgfSxcbiAgICBndXR0ZXJTaXplOiAxLFxuICAgIGFsaWdubWVudDogXCJNSU5cIixcbiAgICBjb3VudDogMSxcbiAgICBzZWN0aW9uU2l6ZTogOTYwLFxuICAgIG9mZnNldDogMCxcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBnZXRNYXhXaWR0aEdyaWRzID0gKCkgPT4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIHJlc29sdmUobWF4V2lkdGhHcmlkcyk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGNvbHVtbkdyaWRzID0gW1xuICB7XG4gICAgcGF0dGVybjogXCJDT0xVTU5TXCIsXG4gICAgdmlzaWJsZTogdHJ1ZSxcbiAgICBjb2xvcjoge1xuICAgICAgcjogMC44Mjk5OTk5MjM3MDYwNTQ3LFxuICAgICAgZzogMCxcbiAgICAgIGI6IDEsXG4gICAgICBhOiAwLjEsXG4gICAgfSxcbiAgICBndXR0ZXJTaXplOiAxNixcbiAgICBhbGlnbm1lbnQ6IFwiU1RSRVRDSFwiLFxuICAgIGNvdW50OiAxMixcbiAgICBvZmZzZXQ6IDAsXG4gIH0sXG5dO1xuIiwiZXhwb3J0IGNvbnN0IERhcmtVaUNvbG9ycyA9IFtcbiAge1xuICAgIG5hbWU6IFwiZGFyayB1aSAvIGludGVudGlvbnMgLyBwcmltYXJ5Lm1haW5cIixcbiAgICBzdHlsZUtleTogXCIyYjc5MmQ4NGM5ZGRiNWJiNTRiNGU3Y2UwMDBjNTk1Yzc5ZDc0OGNhXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImRhcmsgdWkgLyBpbnRlbnRpb25zIC8gcHJpbWFyeS5kYXJrXCIsXG4gICAgc3R5bGVLZXk6IFwiYjQzYmQxMTEyNTBjZTc0ZDQ4Y2ZkNzFhYzAwYzFjMWI1NThiMDJmMFwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJkYXJrIHVpIC8gaW50ZW50aW9ucyAvIGVycm9yLm1haW5cIixcbiAgICBzdHlsZUtleTogXCI3NjdjMmE5ODk3MDYyZGVlMGQwZjYzMDA0MDZmNmU1NTg1ZjY4NGM3XCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImRhcmsgdWkgLyBpbnRlbnRpb25zIC8gZXJyb3IuZGFya1wiLFxuICAgIHN0eWxlS2V5OiBcIjM0YTlhMzQ0YzI1NDE2ZDFhN2VhNmQ2NzMyZGIxM2U3YmM2Y2MzOTdcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiZGFyayB1aSAvIGludGVudGlvbnMgLyB3YXJuaW5nLm1haW5cIixcbiAgICBzdHlsZUtleTogXCI4OTRmYmQzMzVkOGIwZjZiMWNlZTRlYzVhYzdhMDQ3OTM5N2E2YjRjXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImRhcmsgdWkgLyBpbnRlbnRpb25zIC8gd2FybmluZy5kYXJrXCIsXG4gICAgc3R5bGVLZXk6IFwiNDRiNDJhODUwNTI4NDEzODdiYzY3N2M1NzE5ODc0Y2YwMjA3Y2FiNVwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJkYXJrIHVpIC8gaW50ZW50aW9ucyAvIHN1Y2Nlc3MubWFpblwiLFxuICAgIHN0eWxlS2V5OiBcIjJkNDRmM2EwYzYwODc4Y2VmNWRiZDEwYzU5YTQxN2FhOTBjMGMxYmZcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiZGFyayB1aSAvIGludGVudGlvbnMgLyBzdWNjZXNzLmRhcmtcIixcbiAgICBzdHlsZUtleTogXCI0MzIyMjc5MWY3ZDVhZmRlOGI4NGJkYjdhN2M3NWE2YThjYzlkMzM0XCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImRhcmsgdWkgLyB0eXBvZ3JhcGh5IC8gdGV4dC5wcmltYXJ5XCIsXG4gICAgc3R5bGVLZXk6IFwiM2ZkYmQ0M2RkMjQ2M2M2NGI5NGUwYjgxYTkxNmE2MDZjMDhiMGYxY1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJkYXJrIHVpIC8gdHlwb2dyYXBoeSAvIHRleHQuc2Vjb25kYXJ5XCIsXG4gICAgc3R5bGVLZXk6IFwiOWQyZTUxMWQ5YTMxZWJkNzZlMzAyYWIyNWQxZTk5NWU2YTgzYWMxY1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJkYXJrIHVpIC8gdHlwb2dyYXBoeSAvIHRleHQuZGlzYWJsZWRcIixcbiAgICBzdHlsZUtleTogXCJjOTg4ODNlMDdiZTgwYmU2YmNkMTg4MTRlYjI5YTg3Nzk3YTk5YzZhXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImRhcmsgdWkgLyB0eXBvZ3JhcGh5IC8gdGV4dC5jb250cmFzdFRleHQucHJpbWFyeVwiLFxuICAgIHN0eWxlS2V5OiBcIjViNjIyZDliNWYxNmZmNDcxYjY2NmVlOGQ5NWEzNWViNWU3ZTQ2NGJcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiZGFyayB1aSAvIHR5cG9ncmFwaHkgLyB0ZXh0LmNvbnRyYXN0VGV4dC5lcnJvclwiLFxuICAgIHN0eWxlS2V5OiBcImFjMzZiNjBhNjdmMzZlZDgwNzBjYWFlZGQwNDU2MDEyYTEwYzIyZDZcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiZGFyayB1aSAvIHR5cG9ncmFwaHkgLyB0ZXh0LmNvbnRyYXN0VGV4dC53YXJuaW5nXCIsXG4gICAgc3R5bGVLZXk6IFwiNTljOWJmMmE0ZDZjMDRmZDkzYzFiOWFiY2M0Y2Y1MDFmY2FkYmIyMlwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJkYXJrIHVpIC8gdHlwb2dyYXBoeSAvIHRleHQuY29udHJhc3RUZXh0LnN1Y2Nlc3NcIixcbiAgICBzdHlsZUtleTogXCIxOTcyZGMwMDFkMzFkZWMzMjZjOGU5MzdmODMwMmVlMzVmYmI4NTNmXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImRhcmsgdWkgLyB0eXBvZ3JhcGh5IC8gdGV4dC5hY3Rpb24uZGlzYWJsZWRcIixcbiAgICBzdHlsZUtleTogXCI3ZjdhNGVlMWZiY2I2NTI5ZTZmYjU2NGEwZjQ4ODE4OGIwZGMyYjM3XCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImRhcmsgdWkgLyBidXR0b25zIC8gYWN0aW9uLmRpc2FibGVkQmFja2dyb3VuZFwiLFxuICAgIHN0eWxlS2V5OiBcIjIxNGFjNGRmNzk2YjUxYzBmNDI2MDI4ZDBmNDI2OGVmYTZlZTM2ODVcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiZGFyayB1aSAvIGJhY2tncm91bmQgLyBiYWNrZ3JvdW5kLmRlZmF1bHRcIixcbiAgICBzdHlsZUtleTogXCIyZjA2MGU3NDIyYThhZDE3YTAzN2EyNTBkMzY4Y2Y2NzFhZGMwNDY4XCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImRhcmsgdWkgLyBiYWNrZ3JvdW5kIC8gYmFja2dyb3VuZC5wYXBlclwiLFxuICAgIHN0eWxlS2V5OiBcIjE1ZjVmZmFjM2VjOTFiMjQwODk4MTM0MzlmZmFkZDFmOTk5NGIyOWNcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiZGFyayB1aSAvIGRpdmlkZXIgLyBkaXZpZGVyXCIsXG4gICAgc3R5bGVLZXk6IFwiODRhYjBmMjk4ZWE4ZmNkMGI4MmFjODkyOThhZDUxMTQwY2E3Yjc1YVwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJkYXJrIHVpIC8gNERQIC8gRlRQXCIsXG4gICAgc3R5bGVLZXk6IFwiN2JiMDI4ZmY3ZDg3MzQ4NjY3OGI3YzY3NjRmYzUwZjM5ZTU3MWViNlwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJkYXJrIHVpIC8gNERQIC8gTUFQXCIsXG4gICAgc3R5bGVLZXk6IFwiZGY1N2ZlYmM4ZWY3N2RkMmMzNWJlMmQxYjk0MGFmYjgzMzE2NjhiNFwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJkYXJrIHVpIC8gNERQIC8gQUNcIixcbiAgICBzdHlsZUtleTogXCJlODE5M2FiZmQyZjcxNWU0OGI5Y2M3Y2U0YmM2Yjk1Yzg5N2FhMDRkXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImRhcmsgdWkgLyA0RFAgLyBOTVwiLFxuICAgIHN0eWxlS2V5OiBcIjgyZDUwZjMwMTFkODE1OTAyZWQ0MzBkZjZkNzM0NWVjZGY5NDc2MWJcIixcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBMaWdodFVpQ29sb3JzID0gW1xuICB7XG4gICAgbmFtZTogXCJsaWdodCB1aSAvIGludGVudGlvbnMgLyBwcmltYXJ5Lm1haW5cIixcbiAgICBzdHlsZUtleTogXCJjZjBjOGU4OGViNjViODA0OWZlY2E2MGFjODNlMWRlM2QzYWI2ZThiXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImxpZ2h0IHVpIC8gaW50ZW50aW9ucyAvIHByaW1hcnkuZGFya1wiLFxuICAgIHN0eWxlS2V5OiBcImRhOTM4Njk4YzlkMjIzMjIxZDYzYzdjNTUwMWE5MDU3YTBkNWY2ZmJcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwibGlnaHQgdWkgLyBpbnRlbnRpb25zIC8gZXJyb3IubWFpblwiLFxuICAgIHN0eWxlS2V5OiBcIjc5OGNiOGY4OThhYjJhNTA4YTdiYTQ5MWQ4OTkwMTFmZGE4OTY1NzdcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwibGlnaHQgdWkgLyBpbnRlbnRpb25zIC8gZXJyb3IuZGFya1wiLFxuICAgIHN0eWxlS2V5OiBcIjEyNzc2NDU2ZTY4YWRmNGFiNWUzOTE3OTdjM2M4NGU5MmIwZjg2YzJcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwibGlnaHQgdWkgLyBpbnRlbnRpb25zIC8gd2FybmluZy5tYWluXCIsXG4gICAgc3R5bGVLZXk6IFwiZjI3YTYwZGY4YzE2MjE4NWVhMjQ3MmE4MDFiMjcxZWY2NjJjMDQyOVwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJsaWdodCB1aSAvIGludGVudGlvbnMgLyB3YXJuaW5nLmRhcmtcIixcbiAgICBzdHlsZUtleTogXCI2MTVkNmQ1Y2FjNDg1NWU5ODFjOGI5NDJiOTg2ZWU3MDViNTY4YjI4XCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImxpZ2h0IHVpIC8gaW50ZW50aW9ucyAvIHN1Y2Nlc3MubWFpblwiLFxuICAgIHN0eWxlS2V5OiBcImU0YWE0MWU4YmY1MmY5NGVmNWZjZTM2NjlmNTEwYWYzY2I3OWM1YTdcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwibGlnaHQgdWkgLyBpbnRlbnRpb25zIC8gc3VjY2Vzcy5kYXJrXCIsXG4gICAgc3R5bGVLZXk6IFwiZDk4ODNiNTNjMjUzOWJmMWUxMDY4MjA1ZmUxZDA1OWQ1ODMxNWU0ZlwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJsaWdodCB1aSAvIHR5cG9ncmFwaHkgLyB0ZXh0LnByaW1hcnlcIixcbiAgICBzdHlsZUtleTogXCI4ZjA1YzYzZGU3ZjEwMGIyYmQ4ZmFkN2I4YmQ3MTQ4OWI2MzdjMDY3XCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImxpZ2h0IHVpIC8gdHlwb2dyYXBoeSAvIHRleHQuc2Vjb25kYXJ5XCIsXG4gICAgc3R5bGVLZXk6IFwiOTcwNjNhNWY2MmMzNTRlNmFlMDkxOWQ1MGI2OGQwYmFkYjRhMTIyZVwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJsaWdodCB1aSAvIHR5cG9ncmFwaHkgLyB0ZXh0LmRpc2FibGVkXCIsXG4gICAgc3R5bGVLZXk6IFwiYTgwOWY3NWUxNGZiZTYyOTYyNzJlODUzMTEwNmY2Y2M0YzY5MjU1M1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJsaWdodCB1aSAvIHR5cG9ncmFwaHkgLyB0ZXh0LmNvbnRyYXN0VGV4dC5wcmltYXJ5XCIsXG4gICAgc3R5bGVLZXk6IFwiYjI4YTdmY2RkMjQ3MzIzZDdiYTk5OTYxYzk2MDhjZjgzNzhiYWRhMVwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJsaWdodCB1aSAvIHR5cG9ncmFwaHkgLyB0ZXh0LmNvbnRyYXN0VGV4dC5lcnJvclwiLFxuICAgIHN0eWxlS2V5OiBcImM0MmM1ZjE5OTAzOTBjNDEzYWU2MjkyNWU5YWYwZDUxYmYzMmM5NDVcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwibGlnaHQgdWkgLyB0eXBvZ3JhcGh5IC8gdGV4dC5jb250cmFzdFRleHQud2FybmluZ1wiLFxuICAgIHN0eWxlS2V5OiBcImVlY2Q4MmNjYWFlOTg4NjI0YzQ1ZjI4Mjk2NTY0MDM3ZGE4NWNjMWFcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwibGlnaHQgdWkgLyB0eXBvZ3JhcGh5IC8gdGV4dC5jb250cmFzdFRleHQuc3VjY2Vzc1wiLFxuICAgIHN0eWxlS2V5OiBcImQ3ZGJhZWY2NmE5MzJmZjI3NmY2ZjRhYTUxOTg1YTA1OWRlZGZiZjhcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwibGlnaHQgdWkgLyB0eXBvZ3JhcGh5IC8gdGV4dC5hY3Rpb24uZGlzYWJsZWRcIixcbiAgICBzdHlsZUtleTogXCJmODFhMWY3NDg3MDMxNjk4ZDE1YzIzOTRlNGM3NGZjYzllY2NjMjk5XCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImxpZ2h0IHVpIC8gYnV0dG9ucyAvIGFjdGlvbi5kaXNhYmxlZEJhY2tncm91bmRcIixcbiAgICBzdHlsZUtleTogXCI3M2IxNWUzYTc5ZWVlYTc1NzI4M2E0NGNmNzExMzEzMDVjYmEyMzk5XCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImxpZ2h0IHVpIC8gYmFja2dyb3VuZCAvIGJhY2tncm91bmQuZGVmYXVsdFwiLFxuICAgIHN0eWxlS2V5OiBcIjIzZTk0ZmNlZWQ5YWNjYmRhNGRiOWM2NzJjNDNkMjFiNGQyODZlNGNcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwibGlnaHQgdWkgLyBiYWNrZ3JvdW5kIC8gYmFja2dyb3VuZC5wYXBlclwiLFxuICAgIHN0eWxlS2V5OiBcIjkwM2U1YmYyNzQxMzllZWI5ZjQ5NjhhOWVmMDhlYzA1ZWFmMGIyNzRcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwibGlnaHQgdWkgLyBkaXZpZGVyIC8gZGl2aWRlclwiLFxuICAgIHN0eWxlS2V5OiBcImVlNGRkY2UyZTU2YWQ0N2M0MjE2ZDU4MjdhMjgzYjk0M2E3OTRjNzhcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwibGlnaHQgdWkgLyA0RFAgLyBGVFBcIixcbiAgICBzdHlsZUtleTogXCIyMjRlNDkxMjAyN2JlOWY3NTY4NWZkNDBiMjUyOGJhOWYzNGZlOTU4XCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImxpZ2h0IHVpIC8gNERQIC8gTUFQXCIsXG4gICAgc3R5bGVLZXk6IFwiYWFhM2E1MzFhMTI0ZmE4NTRlMDlkMzk4Zjk4ZmI0N2I5ODlhOGE3MlwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJsaWdodCB1aSAvIDREUCAvIEFDXCIsXG4gICAgc3R5bGVLZXk6IFwiMjIwZDM0OTM3NDdjZDhkOGJkYzVkNGEwZTc5NjVjMzZhM2M1MjM0OVwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJsaWdodCB1aSAvIDREUCAvIE5NXCIsXG4gICAgc3R5bGVLZXk6IFwiZGRjYmY2OGZhNWMxZWFhNzIwNzcxNjQyNzJiN2FlNWI5ZTVlNGVkN1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJ1dGlsaXR5IC8gbWFza1wiLFxuICAgIHN0eWxlS2V5OiBcImQwNGRiMjZiZjg5NzM1MmY1Y2M0OWIzODU0ZmE2YjdlOTgxYjE4ZTZcIixcbiAgfSxcbl07XG4iLCJleHBvcnQgY29uc3QgTGlnaHRVaUVmZmVjdHMgPSBbXG4gIHtcbiAgICBuYW1lOiBcImxpZ2h0IHVpIC8gYm9yZGVyIC8gdG9wXCIsXG4gICAgc3R5bGVLZXk6IFwiYjQ4NzIyZDYxNjQ4ZDdjNjU2NWZlYTY0MDM2MTg1M2VjNTM2MzlkMVwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJsaWdodCB1aSAvIGJvcmRlciAvIHJpZ2h0XCIsXG4gICAgc3R5bGVLZXk6IFwiMzM5NGZlZThlM2YwOGVkYzdkNjBkNmFhYjI5ZjBmM2Y4ZWUxYjFiMlwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJsaWdodCB1aSAvIGJvcmRlciAvIGJvdHRvbVwiLFxuICAgIHN0eWxlS2V5OiBcImY2M2ZmZjM5YWUwMjFmMDc3OWI2ZDQ2ZGM5NzViYzU3OGRkM2I3YzVcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwibGlnaHQgdWkgLyBib3JkZXIgLyBsZWZ0XCIsXG4gICAgc3R5bGVLZXk6IFwiOWVkZGRmNzgwYmY0NDUxNWQ5NWUyYTRiZmY2MDM2ZTI0N2RhNWFmNVwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJsaWdodCB1aSAvIGJvcmRlciAvIHRvcCAmIGJvdHRvbVwiLFxuICAgIHN0eWxlS2V5OiBcIjIzYzExOTE2ZTZhZjQxM2VmMjIwYWNmY2M0MDE5NWQ4MmZlMzAzYjVcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwibGlnaHQgdWkgLyBib3JkZXIgLyBsZWZ0ICYgcmlnaHRcIixcbiAgICBzdHlsZUtleTogXCJhNjQ0N2I3MjEwOTAxYmNhNDViOThmZTkxOGFjNTU1NDBmYTgzNTRlXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImxpZ2h0IHVpIC8gc2hhZG93IC8gbG93XCIsXG4gICAgc3R5bGVLZXk6IFwiOGNjZWE5ZDUyM2NmOWRjMTNmZWU2OGYzOTJmM2Y5Y2MzMTg3YTQ1N1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJsaWdodCB1aSAvIHNoYWRvdyAvIGhpZ2hcIixcbiAgICBzdHlsZUtleTogXCJjNjEyNTNjMzhmNmQwZDlmM2IzMDJhNzdhMzgwN2UwNTJlOWMzZjkxXCIsXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgRGFya1VpRWZmZWN0cyA9IFtcbiAge1xuICAgIG5hbWU6IFwiZGFyayB1aSAvIGJvcmRlciAvIHRvcFwiLFxuICAgIHN0eWxlS2V5OiBcImQzOTRjNmZmNzhhOTRjOTAwZjM0NGI1M2YxZDdlMGU3ZWNkY2NkNzlcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiZGFyayB1aSAvIGJvcmRlciAvIHJpZ2h0XCIsXG4gICAgc3R5bGVLZXk6IFwiNDMzYzYwNWYzNGU5YTg4ZDAzNTBmMjJmZTU4YzlhZmM4ZjBlN2RkN1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJkYXJrIHVpIC8gYm9yZGVyIC8gYm90dG9tXCIsXG4gICAgc3R5bGVLZXk6IFwiM2U0Njc0ODEwNTEwNmI2NTQ0MGMyNGYxYjllNDFjOTk0ZmRhYzQwMlwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJkYXJrIHVpIC8gYm9yZGVyIC8gbGVmdFwiLFxuICAgIHN0eWxlS2V5OiBcImY4OGIyMjdkZDZkNmI0ZjgyODViMmUxNzlhN2M3ZDQyNzdmMGZiMzFcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiZGFyayB1aSAvIGJvcmRlciAvIHRvcCAmIGJvdHRvbVwiLFxuICAgIHN0eWxlS2V5OiBcImEzNGYzZDBhMjJjMjQ1OWNmYzYyNmYxNzhjNDdkOWJiMWJhOGIyYTVcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiZGFyayB1aSAvIGJvcmRlciAvIGxlZnQgJiByaWdodFwiLFxuICAgIHN0eWxlS2V5OiBcImZjMDZiOGU3MDMyZmM5YjFmYTA3YWY1ZTM5MjkzZGYyMTUwZmY0ZGNcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiZGFyayB1aSAvIHNoYWRvdyAvIGxvd1wiLFxuICAgIHN0eWxlS2V5OiBcIjk4NzYxOTA0YmNjOWQzOGM4MWVlMjNlN2I0MzJkOGM5N2UyOWYwYzFcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiZGFyayB1aSAvIHNoYWRvdyAvIGhpZ2hcIixcbiAgICBzdHlsZUtleTogXCIyMDliNDUxZTRmNjhmNWJmM2FkZTI0ZWYzNmExMGE2MDljZGFlMjM5XCIsXG4gIH0sXG5dO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==