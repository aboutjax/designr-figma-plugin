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
        let obj = {
            horizontalPadding: horizontalPadding,
            verticalPadding: verticalPadding,
            itemSpacing: itemSpacing,
            layoutMode: layoutMode,
            type: type,
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
    console.log(msg.layoutGridOptions);
    for (const node of nodes) {
        node.layoutGrids = [];
        const horizontalPaddingSliderValue = msg.layoutGridOptions[0].value;
        const verticalPaddingSliderValue = msg.layoutGridOptions[1].value;
        const showBaselineRows = msg.layoutGridOptions[2].value;
        const showMaxWidth = msg.layoutGridOptions[3].value;
        const showColumns = msg.layoutGridOptions[4].value;
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
                console.log(grid);
                allGrids.push(grid);
                node.layoutGrids = allGrids;
            }
        }
        else {
            node.layoutGrids = allGrids;
        }
        if (showColumns) {
            for (const grid of _theme_styles_LayoutGrids__WEBPACK_IMPORTED_MODULE_0__["columnGrids"]) {
                console.log(grid);
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
/*! exports provided: paddingHorizontal, paddingVertical, baselineGrids, maxWidthGrids, getMaxWidthGrids, columnGrids */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "paddingHorizontal", function() { return paddingHorizontal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "paddingVertical", function() { return paddingVertical; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "baselineGrids", function() { return baselineGrids; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maxWidthGrids", function() { return maxWidthGrids; });
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
          g: 0.46000003814697266,
          b: 1,
          a: 0.2,
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
          a: 0.20000000298023224,
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
          a: 0.20000000298023224,
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
          g: 0.46000003814697266,
          b: 1,
          a: 0.20000000298023224,
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
          a: 0.20000000298023224,
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
          a: 0.20000000298023224,
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
      g: 0.4588235318660736,
      b: 1,
      a: 0.20000000298023224,
    },
    gutterSize: 1,
    alignment: "CENTER",
    count: 1,
    sectionSize: 960,
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
      a: 0.20000000298023224,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvZGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlci9jYWxsYmFjay50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVyL2NvbG9yLWNoZWNrLnRzIiwid2VicGFjazovLy8uL3NyYy9oZWxwZXIvZm9yY2UtYXV0by1sYXlvdXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlci9sYXlvdXQtZ3JpZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVyL3NwYWNpbmctY2hlY2sudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlci9zcGFjaW5nLXNsaWRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVyL3RoZW1lLXN3YXAudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RoZW1lLXN0eWxlcy9MYXlvdXRHcmlkcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGhlbWUtc3R5bGVzL2NvbG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGhlbWUtc3R5bGVzL2VmZmVjdHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNnQzs7Ozs7Ozs7Ozs7OztBQzVLaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLG9DQUFvQztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNB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RTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNqS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBTztBQUNQOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRU87QUFDUDtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7OztBQzFMQTtBQUFBO0FBQUE7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7O0FDeE1BO0FBQUE7QUFBQTtBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0giLCJmaWxlIjoiY29kZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2NvZGUudHNcIik7XG4iLCIvLyBUaGlzIHBsdWdpbiB3aWxsIG9wZW4gYSBtb2RhbCB0byBwcm9tcHQgdGhlIHVzZXIgdG8gZW50ZXIgYSBudW1iZXIsIGFuZFxuLy8gaXQgd2lsbCB0aGVuIGNyZWF0ZSB0aGF0IG1hbnkgcmVjdGFuZ2xlcyBvbiB0aGUgc2NyZWVuLlxuLy8gVGhpcyBmaWxlIGhvbGRzIHRoZSBtYWluIGNvZGUgZm9yIHRoZSBwbHVnaW5zLiBJdCBoYXMgYWNjZXNzIHRvIHRoZSAqZG9jdW1lbnQqLlxuLy8gWW91IGNhbiBhY2Nlc3MgYnJvd3NlciBBUElzIGluIHRoZSA8c2NyaXB0PiB0YWcgaW5zaWRlIFwidWkuaHRtbFwiIHdoaWNoIGhhcyBhXG4vLyBmdWxsIGJyb3dzZXIgZW52aXJvbWVudCAoc2VlIGRvY3VtZW50YXRpb24pLlxuLy8gaW1wb3J0IHsgU3BhY2luZ0RlZmF1bHQgfSBmcm9tIFwiLi9oZWxwZXIvc3BhY2luZy1kZWZhdWx0XCI7XG5pbXBvcnQgeyBUaGVtZVN3YXAgfSBmcm9tIFwiLi9oZWxwZXIvdGhlbWUtc3dhcFwiO1xuaW1wb3J0IHsgU3BhY2luZ0NoZWNrVHJhdmVyc2UgfSBmcm9tIFwiLi9oZWxwZXIvc3BhY2luZy1jaGVja1wiO1xuaW1wb3J0IHsgQ29sb3JDaGVja1RyYXZlcnNlIH0gZnJvbSBcIi4vaGVscGVyL2NvbG9yLWNoZWNrXCI7XG5pbXBvcnQgeyBGb3JjZUF1dG9MYXlvdXRIb3Jpem9udGFsLCBGb3JjZUF1dG9MYXlvdXRWZXJ0aWNhbCwgfSBmcm9tIFwiLi9oZWxwZXIvZm9yY2UtYXV0by1sYXlvdXRcIjtcbmltcG9ydCB7IFBhZGRpbmdIb3Jpem9udGFsU2xpZGVyLCBQYWRkaW5nVmVydGljYWxTbGlkZXIsIEl0ZW1TcGFjaW5nLCB9IGZyb20gXCIuL2hlbHBlci9zcGFjaW5nLXNsaWRlclwiO1xuaW1wb3J0IHsgU2V0TGF5b3V0R3JpZCB9IGZyb20gXCIuL2hlbHBlci9sYXlvdXQtZ3JpZFwiO1xuaW1wb3J0IHsgb25TZWxlY3Rpb25DaGFuZ2UgfSBmcm9tIFwiLi9oZWxwZXIvY2FsbGJhY2tcIjtcbi8vIFRoaXMgc2hvd3MgdGhlIEhUTUwgcGFnZSBpbiBcInVpLmh0bWxcIi5cbmZpZ21hLnNob3dVSShfX2h0bWxfXyk7XG4vLyBDYWxscyB0byBcInBhcmVudC5wb3N0TWVzc2FnZVwiIGZyb20gd2l0aGluIHRoZSBIVE1MIHBhZ2Ugd2lsbCB0cmlnZ2VyIHRoaXNcbi8vIGNhbGxiYWNrLiBUaGUgY2FsbGJhY2sgd2lsbCBiZSBwYXNzZWQgdGhlIFwicGx1Z2luTWVzc2FnZVwiIHByb3BlcnR5IG9mIHRoZVxuLy8gcG9zdGVkIG1lc3NhZ2UuXG5maWdtYS51aS5yZXNpemUoMzAwLCA4NTApO1xuZmlnbWEub24oXCJzZWxlY3Rpb25jaGFuZ2VcIiwgKCkgPT4ge1xuICAgIGxldCB0aGlzU2VsZWN0aW9uID0gZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uWzBdO1xuICAgIG9uU2VsZWN0aW9uQ2hhbmdlKHRoaXNTZWxlY3Rpb24pO1xufSk7XG5maWdtYS51aS5vbm1lc3NhZ2UgPSAobXNnKSA9PiB7XG4gICAgaWYgKG1zZy50eXBlID09PSBcInN3YXAtdGhlbWVcIikge1xuICAgICAgICBUaGVtZVN3YXAoZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uWzBdKTtcbiAgICB9XG4gICAgZWxzZSBpZiAobXNnLnR5cGUgPT09IFwiY29sb3ItY2hlY2tlclwiKSB7XG4gICAgICAgIENvbG9yQ2hlY2tUcmF2ZXJzZShmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb25bMF0pO1xuICAgIH1cbiAgICBlbHNlIGlmIChtc2cudHlwZSA9PT0gXCJzcGFjaW5nLWNoZWNrZXJcIikge1xuICAgICAgICBTcGFjaW5nQ2hlY2tUcmF2ZXJzZShmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb24pO1xuICAgIH1cbiAgICBlbHNlIGlmIChtc2cudHlwZSA9PT0gXCJwYWRkaW5nLWhvcml6b250YWwtc2xpZGVyXCIpIHtcbiAgICAgICAgUGFkZGluZ0hvcml6b250YWxTbGlkZXIoZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uLCBtc2cpO1xuICAgIH1cbiAgICBlbHNlIGlmIChtc2cudHlwZSA9PT0gXCJwYWRkaW5nLXZlcnRpY2FsLXNsaWRlclwiKSB7XG4gICAgICAgIFBhZGRpbmdWZXJ0aWNhbFNsaWRlcihmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb24sIG1zZyk7XG4gICAgfVxuICAgIGVsc2UgaWYgKG1zZy50eXBlID09PSBcIml0ZW0tc3BhY2luZy1zbGlkZXJcIikge1xuICAgICAgICBJdGVtU3BhY2luZyhmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb24sIG1zZyk7XG4gICAgfVxuICAgIGVsc2UgaWYgKG1zZy50eXBlID09PSBcImZvcmNlLWF1dG8tbGF5b3V0LWhvcml6b250YWxcIikge1xuICAgICAgICBGb3JjZUF1dG9MYXlvdXRIb3Jpem9udGFsKGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbik7XG4gICAgfVxuICAgIGVsc2UgaWYgKG1zZy50eXBlID09PSBcImZvcmNlLWF1dG8tbGF5b3V0LXZlcnRpY2FsXCIpIHtcbiAgICAgICAgRm9yY2VBdXRvTGF5b3V0VmVydGljYWwoZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uKTtcbiAgICB9XG4gICAgZWxzZSBpZiAobXNnLnR5cGUgPT09IFwic2V0LWxheW91dC1ncmlkXCIpIHtcbiAgICAgICAgU2V0TGF5b3V0R3JpZChmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb24sIG1zZyk7XG4gICAgfVxuICAgIC8vIE1ha2Ugc3VyZSB0byBjbG9zZSB0aGUgcGx1Z2luIHdoZW4geW91J3JlIGRvbmUuIE90aGVyd2lzZSB0aGUgcGx1Z2luIHdpbGxcbiAgICAvLyBrZWVwIHJ1bm5pbmcsIHdoaWNoIHNob3dzIHRoZSBjYW5jZWwgYnV0dG9uIGF0IHRoZSBib3R0b20gb2YgdGhlIHNjcmVlbi5cbiAgICAvLyBmaWdtYS5jbG9zZVBsdWdpbigpO1xufTtcbiIsImNvbnN0IG9uU2VsZWN0aW9uQ2hhbmdlID0gKG5vZGUpID0+IHtcbiAgICBpZiAobm9kZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhub2RlKTtcbiAgICAgICAgbGV0IGhvcml6b250YWxQYWRkaW5nID0gbm9kZS5ob3Jpem9udGFsUGFkZGluZztcbiAgICAgICAgbGV0IHZlcnRpY2FsUGFkZGluZyA9IG5vZGUudmVydGljYWxQYWRkaW5nO1xuICAgICAgICBsZXQgaXRlbVNwYWNpbmcgPSBub2RlLml0ZW1TcGFjaW5nO1xuICAgICAgICBsZXQgbGF5b3V0TW9kZSA9IG5vZGUubGF5b3V0TW9kZTtcbiAgICAgICAgbGV0IHR5cGUgPSBub2RlLnR5cGU7XG4gICAgICAgIGxldCBvYmogPSB7XG4gICAgICAgICAgICBob3Jpem9udGFsUGFkZGluZzogaG9yaXpvbnRhbFBhZGRpbmcsXG4gICAgICAgICAgICB2ZXJ0aWNhbFBhZGRpbmc6IHZlcnRpY2FsUGFkZGluZyxcbiAgICAgICAgICAgIGl0ZW1TcGFjaW5nOiBpdGVtU3BhY2luZyxcbiAgICAgICAgICAgIGxheW91dE1vZGU6IGxheW91dE1vZGUsXG4gICAgICAgICAgICB0eXBlOiB0eXBlLFxuICAgICAgICB9O1xuICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZShvYmopO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJub1wiKTtcbiAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2UoXCJub3RoaW5nIHNlbGVjdGVkXCIpO1xuICAgIH1cbn07XG5leHBvcnQgeyBvblNlbGVjdGlvbkNoYW5nZSB9O1xuIiwiZnVuY3Rpb24gY2xvbmUodmFsKSB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodmFsKSk7XG59XG4vLyBDaGVjayBvYmplY3QgZXF1YWxpdHkgaGVscGVyXG5mdW5jdGlvbiBpc0VxdWl2YWxlbnQoYSwgYikge1xuICAgIC8vIENyZWF0ZSBhcnJheXMgb2YgcHJvcGVydHkgbmFtZXNcbiAgICB2YXIgYVByb3BzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoYSk7XG4gICAgdmFyIGJQcm9wcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGIpO1xuICAgIC8vIElmIG51bWJlciBvZiBwcm9wZXJ0aWVzIGlzIGRpZmZlcmVudCxcbiAgICAvLyBvYmplY3RzIGFyZSBub3QgZXF1aXZhbGVudFxuICAgIGlmIChhUHJvcHMubGVuZ3RoICE9IGJQcm9wcy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFQcm9wcy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgcHJvcE5hbWUgPSBhUHJvcHNbaV07XG4gICAgICAgIC8vIElmIHZhbHVlcyBvZiBzYW1lIHByb3BlcnR5IGFyZSBub3QgZXF1YWwsXG4gICAgICAgIC8vIG9iamVjdHMgYXJlIG5vdCBlcXVpdmFsZW50XG4gICAgICAgIGlmIChhW3Byb3BOYW1lXSAhPT0gYltwcm9wTmFtZV0pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBJZiB3ZSBtYWRlIGl0IHRoaXMgZmFyLCBvYmplY3RzXG4gICAgLy8gYXJlIGNvbnNpZGVyZWQgZXF1aXZhbGVudFxuICAgIHJldHVybiB0cnVlO1xufVxuY29uc3QgQ29sb3JDaGVja1RyYXZlcnNlID0gKG5vZGUpID0+IHtcbiAgICBsZXQgc3RyYXlGaWxsID0gMDtcbiAgICBsZXQgc3RyYXlTdHJva2UgPSAwO1xuICAgIGlmIChcImZpbGxzXCIgJiYgXCJzdHJva2VzXCIgaW4gbm9kZSkge1xuICAgICAgICAvLyBGaWx0ZXIgd2FybmluZyBzdHJva2UgZnVuY3Rpb25cbiAgICAgICAgbGV0IGZpbHRlcldhcm5pbmdTdHJva2UgPSBmdW5jdGlvbiAoc3Ryb2tlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImNsZWFyIG91dFwiKTtcbiAgICAgICAgICAgIGlmIChzdHJva2UudHlwZSA9PSBcIlNPTElEXCIgJiZcbiAgICAgICAgICAgICAgICBpc0VxdWl2YWxlbnQoc3Ryb2tlLmNvbG9yLCB7IHI6IDEsIGc6IDAsIGI6IDAgfSkpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInllc1wiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIm5vXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBsZXQgb2xkU3Ryb2tlcyA9IGNsb25lKG5vZGUuc3Ryb2tlcyk7XG4gICAgICAgIGxldCBuZXdTdHJva2VzID0gb2xkU3Ryb2tlcy5maWx0ZXIoZmlsdGVyV2FybmluZ1N0cm9rZSk7XG4gICAgICAgIGlmIChub2RlLnN0cm9rZVN0eWxlSWQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgLy8gZG8gbm90aGluZ1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbm9kZS5zdHJva2VzID0gbmV3U3Ryb2tlcztcbiAgICAgICAgfVxuICAgICAgICAvLyAvLyBBZGQgd2FybmluZyBzdHJva2UgZnVuY3Rpb25cbiAgICAgICAgbGV0IGFkZFdhcm5pbmdTdHJva2UgPSBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgbGV0IHN0cm9rZXMgPSBjbG9uZShub2RlLnN0cm9rZXMpO1xuICAgICAgICAgICAgbGV0IHdhcm5pbmdTdHJva2VQcm9wZXJ0eSA9IHtcbiAgICAgICAgICAgICAgICBjb2xvcjogeyByOiAxLCBnOiAwLCBiOiAwIH0sXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICAgICAgICB0eXBlOiBcIlNPTElEXCIsXG4gICAgICAgICAgICAgICAgYmxlbmRNb2RlOiBcIk5PUk1BTFwiLFxuICAgICAgICAgICAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgc3Ryb2tlcy5wdXNoKHdhcm5pbmdTdHJva2VQcm9wZXJ0eSk7XG4gICAgICAgICAgICBub2RlLnN0cm9rZXMgPSBzdHJva2VzO1xuICAgICAgICAgICAgLy8gbm9kZS5zdHJva2VBbGlnbiA9IFwiT1VUU0lERVwiO1xuICAgICAgICB9O1xuICAgICAgICAvLyBDaGVjayBGaWxsXG4gICAgICAgIGNvbnN0IGhhc0ltYWdlID0gKGZpbGwpID0+IGZpbGwudHlwZSA9PT0gXCJJTUFHRVwiO1xuICAgICAgICBpZiAobm9kZS5maWxscy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAvLyBpZiAobm9kZS5maWxscy5zb21lKGhhc0ltYWdlKSkge1xuICAgICAgICAgICAgLy8gICBjb25zb2xlLmxvZyhcImZpbGwgaXMgaW1hZ2VcIik7XG4gICAgICAgICAgICAvLyB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gICBjb25zb2xlLmxvZyhcImZpbGwgaXMgTk9UIGltYWdlXCIpO1xuICAgICAgICAgICAgLy8gICAvLyBub3RoaW5nXG4gICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICBpZiAobm9kZS5maWxsU3R5bGVJZC5sZW5ndGggPiAwIHx8IG5vZGUuZmlsbHMuc29tZShoYXNJbWFnZSkpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuKchSBHb29kIGZpbGxcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuKdjCBCYWQgZmlsbFwiKTtcbiAgICAgICAgICAgICAgICAvLyBBZGQgd2FybmluZyBzdHJva2VcbiAgICAgICAgICAgICAgICBhZGRXYXJuaW5nU3Ryb2tlKG5vZGUpO1xuICAgICAgICAgICAgICAgIHN0cmF5RmlsbCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJubyBmaWxsXCIpO1xuICAgICAgICB9XG4gICAgICAgIC8vIENoZWNrIFN0cm9rZVxuICAgICAgICBpZiAobm9kZS5zdHJva2VzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGlmIChub2RlLnN0cm9rZVN0eWxlSWQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi4pyFIEdvb2Qgc3Ryb2tlXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLinYwgQmFkIHN0cm9rZVwiKTtcbiAgICAgICAgICAgICAgICAvLyAvLyBBZGQgd2FybmluZyBzdHJva2VcbiAgICAgICAgICAgICAgICBhZGRXYXJuaW5nU3Ryb2tlKG5vZGUpO1xuICAgICAgICAgICAgICAgIHN0cmF5U3Ryb2tlKys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIm5vIHN0cm9rZVwiKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJObyBmaWxsICYgc3Ryb2tlIHByb3BlcnR5XCIpO1xuICAgIH1cbiAgICBpZiAoXCJjaGlsZHJlblwiIGluIG5vZGUpIHtcbiAgICAgICAgZm9yIChjb25zdCBjaGlsZCBvZiBub2RlLmNoaWxkcmVuKSB7XG4gICAgICAgICAgICBDb2xvckNoZWNrVHJhdmVyc2UoY2hpbGQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICAvLyBkbyBub3RoaW5nXG4gICAgfVxuICAgIGlmIChzdHJheUZpbGwgPiAwIHx8IHN0cmF5U3Ryb2tlID4gMCkge1xuICAgICAgICBsZXQgZXJyb3JTdHJpbmcgPSBcIllvdSBoYXZlIFwiICtcbiAgICAgICAgICAgIHN0cmF5RmlsbCArXG4gICAgICAgICAgICBcIiBmaWxscyBhbmQgXCIgK1xuICAgICAgICAgICAgc3RyYXlTdHJva2UgK1xuICAgICAgICAgICAgXCIgc3Ryb2tlcyBub3QgdXNpbmcgY29sb3VycyBmcm9tIG91ciBsaWJyYXJ5IVwiO1xuICAgICAgICBmaWdtYS5ub3RpZnkoZXJyb3JTdHJpbmcsIHsgdGltZW91dDogMC41IH0pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZmlnbWEubm90aWZ5KFwi8J+RjyBBbGwgaXMgZ29vZCBpbiB0aGUgaG9vZCFcIiwgeyB0aW1lb3V0OiAwLjUgfSk7XG4gICAgfVxufTtcbmV4cG9ydCB7IENvbG9yQ2hlY2tUcmF2ZXJzZSB9O1xuIiwiY29uc3QgRm9yY2VBdXRvTGF5b3V0SG9yaXpvbnRhbCA9IChub2RlcykgPT4ge1xuICAgIGZvciAoY29uc3Qgbm9kZSBvZiBub2Rlcykge1xuICAgICAgICBub2RlLmxheW91dE1vZGUgPSBcIkhPUklaT05UQUxcIjtcbiAgICB9XG59O1xuY29uc3QgRm9yY2VBdXRvTGF5b3V0VmVydGljYWwgPSAobm9kZXMpID0+IHtcbiAgICBmb3IgKGNvbnN0IG5vZGUgb2Ygbm9kZXMpIHtcbiAgICAgICAgbm9kZS5sYXlvdXRNb2RlID0gXCJWRVJUSUNBTFwiO1xuICAgIH1cbn07XG5leHBvcnQgeyBGb3JjZUF1dG9MYXlvdXRIb3Jpem9udGFsLCBGb3JjZUF1dG9MYXlvdXRWZXJ0aWNhbCB9O1xuIiwiaW1wb3J0IHsgcGFkZGluZ0hvcml6b250YWwsIHBhZGRpbmdWZXJ0aWNhbCwgYmFzZWxpbmVHcmlkcywgbWF4V2lkdGhHcmlkcywgY29sdW1uR3JpZHMsIH0gZnJvbSBcIi4uL3RoZW1lLXN0eWxlcy9MYXlvdXRHcmlkc1wiO1xuY29uc3QgU2V0TGF5b3V0R3JpZCA9IChub2RlcywgbXNnKSA9PiB7XG4gICAgY29uc29sZS5sb2cobXNnLmxheW91dEdyaWRPcHRpb25zKTtcbiAgICBmb3IgKGNvbnN0IG5vZGUgb2Ygbm9kZXMpIHtcbiAgICAgICAgbm9kZS5sYXlvdXRHcmlkcyA9IFtdO1xuICAgICAgICBjb25zdCBob3Jpem9udGFsUGFkZGluZ1NsaWRlclZhbHVlID0gbXNnLmxheW91dEdyaWRPcHRpb25zWzBdLnZhbHVlO1xuICAgICAgICBjb25zdCB2ZXJ0aWNhbFBhZGRpbmdTbGlkZXJWYWx1ZSA9IG1zZy5sYXlvdXRHcmlkT3B0aW9uc1sxXS52YWx1ZTtcbiAgICAgICAgY29uc3Qgc2hvd0Jhc2VsaW5lUm93cyA9IG1zZy5sYXlvdXRHcmlkT3B0aW9uc1syXS52YWx1ZTtcbiAgICAgICAgY29uc3Qgc2hvd01heFdpZHRoID0gbXNnLmxheW91dEdyaWRPcHRpb25zWzNdLnZhbHVlO1xuICAgICAgICBjb25zdCBzaG93Q29sdW1ucyA9IG1zZy5sYXlvdXRHcmlkT3B0aW9uc1s0XS52YWx1ZTtcbiAgICAgICAgbGV0IGFsbEdyaWRzID0gW107XG4gICAgICAgIGxldCBzcGFjaW5nSG9yaXpvbnRhbCA9IDA7XG4gICAgICAgIGxldCBzcGFjaW5nVmVydGljYWwgPSAwO1xuICAgICAgICBzd2l0Y2ggKGhvcml6b250YWxQYWRkaW5nU2xpZGVyVmFsdWUpIHtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgc3BhY2luZ0hvcml6b250YWwgPSAwO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIjBcIjpcbiAgICAgICAgICAgICAgICBzcGFjaW5nSG9yaXpvbnRhbCA9IDA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiMVwiOlxuICAgICAgICAgICAgICAgIHNwYWNpbmdIb3Jpem9udGFsID0gNDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCIyXCI6XG4gICAgICAgICAgICAgICAgc3BhY2luZ0hvcml6b250YWwgPSA4O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIjNcIjpcbiAgICAgICAgICAgICAgICBzcGFjaW5nSG9yaXpvbnRhbCA9IDE2O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIjRcIjpcbiAgICAgICAgICAgICAgICBzcGFjaW5nSG9yaXpvbnRhbCA9IDI0O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIjVcIjpcbiAgICAgICAgICAgICAgICBzcGFjaW5nSG9yaXpvbnRhbCA9IDMyO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIjZcIjpcbiAgICAgICAgICAgICAgICBzcGFjaW5nSG9yaXpvbnRhbCA9IDQwO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIjdcIjpcbiAgICAgICAgICAgICAgICBzcGFjaW5nSG9yaXpvbnRhbCA9IDQ4O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHN3aXRjaCAodmVydGljYWxQYWRkaW5nU2xpZGVyVmFsdWUpIHtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgc3BhY2luZ1ZlcnRpY2FsID0gMDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCIwXCI6XG4gICAgICAgICAgICAgICAgc3BhY2luZ1ZlcnRpY2FsID0gMDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCIxXCI6XG4gICAgICAgICAgICAgICAgc3BhY2luZ1ZlcnRpY2FsID0gNDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCIyXCI6XG4gICAgICAgICAgICAgICAgc3BhY2luZ1ZlcnRpY2FsID0gODtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCIzXCI6XG4gICAgICAgICAgICAgICAgc3BhY2luZ1ZlcnRpY2FsID0gMTY7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiNFwiOlxuICAgICAgICAgICAgICAgIHNwYWNpbmdWZXJ0aWNhbCA9IDI0O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIjVcIjpcbiAgICAgICAgICAgICAgICBzcGFjaW5nVmVydGljYWwgPSAzMjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCI2XCI6XG4gICAgICAgICAgICAgICAgc3BhY2luZ1ZlcnRpY2FsID0gNDA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiN1wiOlxuICAgICAgICAgICAgICAgIHNwYWNpbmdWZXJ0aWNhbCA9IDQ4O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHBhZGRpbmdIb3Jpem9udGFsKHNwYWNpbmdIb3Jpem9udGFsKS50aGVuKCh2YWwpID0+IHtcbiAgICAgICAgICAgIGlmICh2YWwubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgICAgICAvLyBkbyBub3RoaW5nXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGdyaWQgb2YgdmFsKSB7XG4gICAgICAgICAgICAgICAgICAgIGFsbEdyaWRzLnB1c2goZ3JpZCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGFsbEdyaWRzKTtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5sYXlvdXRHcmlkcyA9IGFsbEdyaWRzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHBhZGRpbmdWZXJ0aWNhbChzcGFjaW5nVmVydGljYWwpLnRoZW4oKHZhbCkgPT4ge1xuICAgICAgICAgICAgaWYgKHZhbC5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgICAgIC8vIGRvIG5vdGhpbmdcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgZ3JpZCBvZiB2YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgYWxsR3JpZHMucHVzaChncmlkKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYWxsR3JpZHMpO1xuICAgICAgICAgICAgICAgICAgICBub2RlLmxheW91dEdyaWRzID0gYWxsR3JpZHM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHNob3dNYXhXaWR0aCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBncmlkIG9mIG1heFdpZHRoR3JpZHMpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhncmlkKTtcbiAgICAgICAgICAgICAgICBhbGxHcmlkcy5wdXNoKGdyaWQpO1xuICAgICAgICAgICAgICAgIG5vZGUubGF5b3V0R3JpZHMgPSBhbGxHcmlkcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG5vZGUubGF5b3V0R3JpZHMgPSBhbGxHcmlkcztcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2hvd0NvbHVtbnMpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgZ3JpZCBvZiBjb2x1bW5Hcmlkcykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGdyaWQpO1xuICAgICAgICAgICAgICAgIGFsbEdyaWRzLnB1c2goZ3JpZCk7XG4gICAgICAgICAgICAgICAgbm9kZS5sYXlvdXRHcmlkcyA9IGFsbEdyaWRzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbm9kZS5sYXlvdXRHcmlkcyA9IGFsbEdyaWRzO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzaG93QmFzZWxpbmVSb3dzKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInNob3dcIik7XG4gICAgICAgICAgICBhbGxHcmlkcy5wdXNoKGJhc2VsaW5lR3JpZHMpO1xuICAgICAgICAgICAgbm9kZS5sYXlvdXRHcmlkcyA9IGFsbEdyaWRzO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYWxsR3JpZHMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbm9kZS5sYXlvdXRHcmlkcyA9IGFsbEdyaWRzO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYWxsR3JpZHMpO1xuICAgICAgICB9XG4gICAgfVxufTtcbmV4cG9ydCB7IFNldExheW91dEdyaWQgfTtcbiIsImNvbnN0IFNwYWNpbmdDaGVja1RyYXZlcnNlID0gKG5vZGVzKSA9PiB7XG4gICAgZm9yIChjb25zdCBub2RlIG9mIG5vZGVzKSB7XG4gICAgICAgIGxldCBuYW1lID0gbm9kZS5uYW1lO1xuICAgICAgICBsZXQgcGFkZGluZ0FsbFJlZ2V4ID0gL1xcYig/OnBhLTF8cGEtMnxwYS0zfHBhLTR8cGEtNXxwYS02fHBhLTd8cGEtbm9uZSlcXGIvZztcbiAgICAgICAgbGV0IHBhZGRpbmdIb3Jpem9udGFsUmVnZXggPSAvXFxiKD86cGgtMXxwaC0yfHBoLTN8cGgtNHxwaC01fHBoLTZ8cGgtN3xwaC1ub25lKVxcYi9nO1xuICAgICAgICBsZXQgcGFkZGluZ1ZlcnRpY2FsUmVnZXggPSAvXFxiKD86cHYtMXxwdi0yfHB2LTN8cHYtNHxwdi01fHB2LTZ8cHYtN3xwdi1ub25lKVxcYi9nO1xuICAgICAgICBsZXQgaXRlbVNwYWNpbmdBbGxSZWdleCA9IC9cXGIoPzpzcC0xfHNwLTJ8c3AtM3xzcC00fHNwLTV8c3AtNnxzcC03fHNwLW5vbmUpXFxiL2c7XG4gICAgICAgIGxldCBhdXRvbGF5b3V0UmVnZXggPSAvXFxiKD86dmVydGljYWx8aG9yaXpvbnRhbClcXGIvZztcbiAgICAgICAgbGV0IG1hdGNoUGFkZGluZ0FsbCA9IG5hbWUubWF0Y2gocGFkZGluZ0FsbFJlZ2V4KTtcbiAgICAgICAgbGV0IG1hdGNoUGFkZGluZ0hvcml6b250YWwgPSBuYW1lLm1hdGNoKHBhZGRpbmdIb3Jpem9udGFsUmVnZXgpO1xuICAgICAgICBsZXQgbWF0Y2hQYWRkaW5nVmVydGljYWwgPSBuYW1lLm1hdGNoKHBhZGRpbmdWZXJ0aWNhbFJlZ2V4KTtcbiAgICAgICAgbGV0IG1hdGNoSXRlbVNwYWNpbmcgPSBuYW1lLm1hdGNoKGl0ZW1TcGFjaW5nQWxsUmVnZXgpO1xuICAgICAgICBsZXQgbWF0Y2hBdXRvTGF5b3V0RGlyZWN0aW9uID0gbmFtZS5tYXRjaChhdXRvbGF5b3V0UmVnZXgpO1xuICAgICAgICBjb25zb2xlLmxvZyhtYXRjaFBhZGRpbmdBbGwpO1xuICAgICAgICBpZiAobWF0Y2hBdXRvTGF5b3V0RGlyZWN0aW9uID09IG51bGwpIHtcbiAgICAgICAgICAgIG5vZGUubGF5b3V0TW9kZSA9IFwiVkVSVElDQUxcIjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZW5hYmxlIGF1dG8gbGF5b3V0XCIpO1xuICAgICAgICAgICAgc3dpdGNoIChtYXRjaEF1dG9MYXlvdXREaXJlY3Rpb25bMF0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIFwidmVydGljYWxcIjpcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5sYXlvdXRNb2RlID0gXCJWRVJUSUNBTFwiO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwiaG9yaXpvbnRhbFwiOlxuICAgICAgICAgICAgICAgICAgICBub2RlLmxheW91dE1vZGUgPSBcIkhPUklaT05UQUxcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAobWF0Y2hJdGVtU3BhY2luZyA9PSBudWxsKSB7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImhhcyBzcGFjaW5nXCIpO1xuICAgICAgICAgICAgc3dpdGNoIChtYXRjaEl0ZW1TcGFjaW5nWzBdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcInNwLTBcIjpcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5pdGVtU3BhY2luZyA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJzcC0xXCI6XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuaXRlbVNwYWNpbmcgPSA0O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwic3AtMlwiOlxuICAgICAgICAgICAgICAgICAgICBub2RlLml0ZW1TcGFjaW5nID0gODtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInNwLTNcIjpcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5pdGVtU3BhY2luZyA9IDE2O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwic3AtNFwiOlxuICAgICAgICAgICAgICAgICAgICBub2RlLml0ZW1TcGFjaW5nID0gMjQ7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJzcC01XCI6XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuaXRlbVNwYWNpbmcgPSAzMjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInNwLTZcIjpcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5pdGVtU3BhY2luZyA9IDQwO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwic3AtN1wiOlxuICAgICAgICAgICAgICAgICAgICBub2RlLml0ZW1TcGFjaW5nID0gNDg7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChtYXRjaFBhZGRpbmdBbGwgPT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJub1wiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaGFzIHBhZGRpbmcgYWxsXCIpO1xuICAgICAgICAgICAgc3dpdGNoIChtYXRjaFBhZGRpbmdBbGxbMF0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIFwicGEtbm9uZVwiOlxuICAgICAgICAgICAgICAgICAgICBub2RlLmhvcml6b250YWxQYWRkaW5nID0gMDtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS52ZXJ0aWNhbFBhZGRpbmcgPSAwO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwicGEtMVwiOlxuICAgICAgICAgICAgICAgICAgICBub2RlLmhvcml6b250YWxQYWRkaW5nID0gNDtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS52ZXJ0aWNhbFBhZGRpbmcgPSA0O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwicGEtMlwiOlxuICAgICAgICAgICAgICAgICAgICBub2RlLmhvcml6b250YWxQYWRkaW5nID0gODtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS52ZXJ0aWNhbFBhZGRpbmcgPSA4O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwicGEtM1wiOlxuICAgICAgICAgICAgICAgICAgICBub2RlLmhvcml6b250YWxQYWRkaW5nID0gMTY7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUudmVydGljYWxQYWRkaW5nID0gMTY7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJwYS00XCI6XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuaG9yaXpvbnRhbFBhZGRpbmcgPSAyNDtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS52ZXJ0aWNhbFBhZGRpbmcgPSAyNDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInBhLTVcIjpcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5ob3Jpem9udGFsUGFkZGluZyA9IDMyO1xuICAgICAgICAgICAgICAgICAgICBub2RlLnZlcnRpY2FsUGFkZGluZyA9IDMyO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwicGEtNlwiOlxuICAgICAgICAgICAgICAgICAgICBub2RlLmhvcml6b250YWxQYWRkaW5nID0gNDA7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUudmVydGljYWxQYWRkaW5nID0gNDA7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJwYS03XCI6XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuaG9yaXpvbnRhbFBhZGRpbmcgPSA0ODtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS52ZXJ0aWNhbFBhZGRpbmcgPSA0ODtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1hdGNoUGFkZGluZ0hvcml6b250YWwgPT0gbnVsbCkge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJub1wiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaGFzIHBhZGRpbmcgaG9yaXpvbnRhbFwiKTtcbiAgICAgICAgICAgIHN3aXRjaCAobWF0Y2hQYWRkaW5nSG9yaXpvbnRhbFswXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJwaC1ub25lXCI6XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuaG9yaXpvbnRhbFBhZGRpbmcgPSAwO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwicGgtMVwiOlxuICAgICAgICAgICAgICAgICAgICBub2RlLmhvcml6b250YWxQYWRkaW5nID0gNDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInBoLTJcIjpcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5ob3Jpem9udGFsUGFkZGluZyA9IDg7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJwaC0zXCI6XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuaG9yaXpvbnRhbFBhZGRpbmcgPSAxNjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInBoLTRcIjpcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5ob3Jpem9udGFsUGFkZGluZyA9IDI0O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwicGgtNVwiOlxuICAgICAgICAgICAgICAgICAgICBub2RlLmhvcml6b250YWxQYWRkaW5nID0gMzI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJwaC02XCI6XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuaG9yaXpvbnRhbFBhZGRpbmcgPSA0MDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInBoLTdcIjpcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5ob3Jpem9udGFsUGFkZGluZyA9IDQ4O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAobWF0Y2hQYWRkaW5nVmVydGljYWwgPT0gbnVsbCkge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJub1wiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaGFzIHBhZGRpbmcgaG9yaXpvbnRhbFwiKTtcbiAgICAgICAgICAgIHN3aXRjaCAobWF0Y2hQYWRkaW5nVmVydGljYWxbMF0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIFwicHYtbm9uZVwiOlxuICAgICAgICAgICAgICAgICAgICBub2RlLnZlcnRpY2FsUGFkZGluZyA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJwdi0xXCI6XG4gICAgICAgICAgICAgICAgICAgIG5vZGUudmVydGljYWxQYWRkaW5nID0gNDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInB2LTJcIjpcbiAgICAgICAgICAgICAgICAgICAgbm9kZS52ZXJ0aWNhbFBhZGRpbmcgPSA4O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwicHYtM1wiOlxuICAgICAgICAgICAgICAgICAgICBub2RlLnZlcnRpY2FsUGFkZGluZyA9IDE2O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwicHYtNFwiOlxuICAgICAgICAgICAgICAgICAgICBub2RlLnZlcnRpY2FsUGFkZGluZyA9IDI0O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwicHYtNVwiOlxuICAgICAgICAgICAgICAgICAgICBub2RlLnZlcnRpY2FsUGFkZGluZyA9IDMyO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwicHYtNlwiOlxuICAgICAgICAgICAgICAgICAgICBub2RlLnZlcnRpY2FsUGFkZGluZyA9IDQwO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwicHYtN1wiOlxuICAgICAgICAgICAgICAgICAgICBub2RlLnZlcnRpY2FsUGFkZGluZyA9IDQ4O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBTcGFjaW5nQ2hlY2tUcmF2ZXJzZShub2RlKTtcbiAgICB9XG4gICAgLy8gaWYgKFwiY2hpbGRyZW5cIiBpbiBub2Rlcykge1xuICAgIC8vICAgZm9yIChjb25zdCBjaGlsZCBvZiBub2RlLmNoaWxkcmVuKSB7XG4gICAgLy8gICAgIFNwYWNpbmdDaGVja1RyYXZlcnNlKGNoaWxkKTtcbiAgICAvLyAgIH1cbiAgICAvLyB9IGVsc2Uge1xuICAgIC8vICAgLy8gZG8gbm90aGluZ1xuICAgIC8vIH1cbn07XG5leHBvcnQgeyBTcGFjaW5nQ2hlY2tUcmF2ZXJzZSB9O1xuIiwiZnVuY3Rpb24gY2xvbmUodmFsKSB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodmFsKSk7XG59XG5sZXQgcGhOYW1lID0gbnVsbDtcbmxldCBwdk5hbWUgPSBudWxsO1xubGV0IHNwTmFtZSA9IG51bGw7XG5sZXQgbmFtZVByb3AgPSB7XG4gICAgaG9yaXpvbnRhbDogXCJwaC1ub25lXCIsXG4gICAgdmVydGljYWw6IFwicHYtbm9uZVwiLFxuICAgIHNwYWNpbmc6IFwic3Atbm9uZVwiLFxufTtcbmZ1bmN0aW9uIHVwZGF0ZU5hbWUodmFsLCBub2RlKSB7XG4gICAgaWYgKHZhbC50eXBlID09PSBcImhvcml6b250YWxcIikge1xuICAgICAgICBuYW1lUHJvcC5ob3Jpem9udGFsID0gdmFsLnZhbHVlO1xuICAgIH1cbiAgICBlbHNlIGlmICh2YWwudHlwZSA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICAgIG5hbWVQcm9wLnZlcnRpY2FsID0gdmFsLnZhbHVlO1xuICAgIH1cbiAgICBlbHNlIGlmICh2YWwudHlwZSA9PT0gXCJzcGFjaW5nXCIpIHtcbiAgICAgICAgbmFtZVByb3Auc3BhY2luZyA9IHZhbC52YWx1ZTtcbiAgICB9XG4gICAgbm9kZS5uYW1lID1cbiAgICAgICAgbmFtZVByb3AuaG9yaXpvbnRhbCArIFwiIFwiICsgbmFtZVByb3AudmVydGljYWwgKyBcIiBcIiArIG5hbWVQcm9wLnNwYWNpbmc7XG59XG5jb25zdCBQYWRkaW5nSG9yaXpvbnRhbFNsaWRlciA9IChub2RlcywgbXNnKSA9PiB7XG4gICAgbGV0IHNsaWRlclZhbHVlID0gbXNnLnNsaWRlclZhbHVlO1xuICAgIGxldCBzcGFjaW5nID0gbnVsbDtcbiAgICBsZXQgc3BhY2luZ05hbWUgPSBudWxsO1xuICAgIHN3aXRjaCAoc2xpZGVyVmFsdWUpIHtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHNwYWNpbmcgPSAwO1xuICAgICAgICAgICAgc3BhY2luZ05hbWUgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiMVwiOlxuICAgICAgICAgICAgc3BhY2luZyA9IDQ7XG4gICAgICAgICAgICBzcGFjaW5nTmFtZSA9IFwiMVwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCIyXCI6XG4gICAgICAgICAgICBzcGFjaW5nID0gODtcbiAgICAgICAgICAgIHNwYWNpbmdOYW1lID0gXCIyXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIjNcIjpcbiAgICAgICAgICAgIHNwYWNpbmcgPSAxNjtcbiAgICAgICAgICAgIHNwYWNpbmdOYW1lID0gXCIzXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIjRcIjpcbiAgICAgICAgICAgIHNwYWNpbmcgPSAyNDtcbiAgICAgICAgICAgIHNwYWNpbmdOYW1lID0gXCI0XCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIjVcIjpcbiAgICAgICAgICAgIHNwYWNpbmcgPSAzMjtcbiAgICAgICAgICAgIHNwYWNpbmdOYW1lID0gXCI1XCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIjZcIjpcbiAgICAgICAgICAgIHNwYWNpbmcgPSA0MDtcbiAgICAgICAgICAgIHNwYWNpbmdOYW1lID0gXCI2XCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIjdcIjpcbiAgICAgICAgICAgIHNwYWNpbmcgPSA0ODtcbiAgICAgICAgICAgIHNwYWNpbmdOYW1lID0gXCI3XCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG4gICAgZm9yIChjb25zdCBub2RlIG9mIG5vZGVzKSB7XG4gICAgICAgIGlmIChub2RlKSB7XG4gICAgICAgICAgICBwaE5hbWUgPSBcInBoLVwiICsgc3BhY2luZ05hbWU7XG4gICAgICAgICAgICB1cGRhdGVOYW1lKHsgdHlwZTogXCJob3Jpem9udGFsXCIsIHZhbHVlOiBwaE5hbWUgfSwgbm9kZSk7XG4gICAgICAgICAgICBpZiAobm9kZS50eXBlID09PSBcIkdST1VQXCIpIHtcbiAgICAgICAgICAgICAgICBub2RlLmhvcml6b250YWxQYWRkaW5nID0gc3BhY2luZztcbiAgICAgICAgICAgICAgICBub2RlLmxheW91dE1vZGUgPSBcIk5PTkVcIjtcbiAgICAgICAgICAgICAgICBpZiAoXCJjaGlsZHJlblwiIGluIG5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGdyb3VwID0gbm9kZS5jaGlsZHJlblswXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBsZXQgc2V0QXV0b0xheW91dCA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5ob3Jpem9udGFsUGFkZGluZyA9IHNwYWNpbmc7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gcmVzb2x2ZShcImRvbmVcIiksIDUpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufTtcbmNvbnN0IFBhZGRpbmdWZXJ0aWNhbFNsaWRlciA9IChub2RlcywgbXNnKSA9PiB7XG4gICAgbGV0IHNsaWRlclZhbHVlID0gbXNnLnNsaWRlclZhbHVlO1xuICAgIGxldCBzcGFjaW5nID0gbnVsbDtcbiAgICBsZXQgc3BhY2luZ05hbWUgPSBudWxsO1xuICAgIHN3aXRjaCAoc2xpZGVyVmFsdWUpIHtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHNwYWNpbmcgPSAwO1xuICAgICAgICAgICAgc3BhY2luZ05hbWUgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiMVwiOlxuICAgICAgICAgICAgc3BhY2luZyA9IDQ7XG4gICAgICAgICAgICBzcGFjaW5nTmFtZSA9IFwiMVwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCIyXCI6XG4gICAgICAgICAgICBzcGFjaW5nID0gODtcbiAgICAgICAgICAgIHNwYWNpbmdOYW1lID0gXCIyXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIjNcIjpcbiAgICAgICAgICAgIHNwYWNpbmcgPSAxNjtcbiAgICAgICAgICAgIHNwYWNpbmdOYW1lID0gXCIzXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIjRcIjpcbiAgICAgICAgICAgIHNwYWNpbmcgPSAyNDtcbiAgICAgICAgICAgIHNwYWNpbmdOYW1lID0gXCI0XCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIjVcIjpcbiAgICAgICAgICAgIHNwYWNpbmcgPSAzMjtcbiAgICAgICAgICAgIHNwYWNpbmdOYW1lID0gXCI1XCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIjZcIjpcbiAgICAgICAgICAgIHNwYWNpbmcgPSA0MDtcbiAgICAgICAgICAgIHNwYWNpbmdOYW1lID0gXCI2XCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIjdcIjpcbiAgICAgICAgICAgIHNwYWNpbmcgPSA0ODtcbiAgICAgICAgICAgIHNwYWNpbmdOYW1lID0gXCI3XCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG4gICAgZm9yIChjb25zdCBub2RlIG9mIG5vZGVzKSB7XG4gICAgICAgIGlmIChub2RlKSB7XG4gICAgICAgICAgICBwdk5hbWUgPSBcInB2LVwiICsgc3BhY2luZ05hbWU7XG4gICAgICAgICAgICB1cGRhdGVOYW1lKHsgdHlwZTogXCJ2ZXJ0aWNhbFwiLCB2YWx1ZTogcHZOYW1lIH0sIG5vZGUpO1xuICAgICAgICAgICAgaWYgKG5vZGUudHlwZSA9PT0gXCJHUk9VUFwiKSB7XG4gICAgICAgICAgICAgICAgbm9kZS52ZXJ0aWNhbFBhZGRpbmcgPSBzcGFjaW5nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IHNldEF1dG9MYXlvdXQgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUudmVydGljYWxQYWRkaW5nID0gc3BhY2luZztcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiByZXNvbHZlKFwiZG9uZVwiKSwgNSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59O1xuY29uc3QgSXRlbVNwYWNpbmcgPSAobm9kZXMsIG1zZykgPT4ge1xuICAgIGxldCBzbGlkZXJWYWx1ZSA9IG1zZy5zbGlkZXJWYWx1ZTtcbiAgICBsZXQgc3BhY2luZyA9IG51bGw7XG4gICAgbGV0IHNwYWNpbmdOYW1lID0gbnVsbDtcbiAgICBzd2l0Y2ggKHNsaWRlclZhbHVlKSB7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBzcGFjaW5nID0gMDtcbiAgICAgICAgICAgIHNwYWNpbmdOYW1lID0gXCJub25lXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIjFcIjpcbiAgICAgICAgICAgIHNwYWNpbmcgPSA0O1xuICAgICAgICAgICAgc3BhY2luZ05hbWUgPSBcIjFcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiMlwiOlxuICAgICAgICAgICAgc3BhY2luZyA9IDg7XG4gICAgICAgICAgICBzcGFjaW5nTmFtZSA9IFwiMlwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCIzXCI6XG4gICAgICAgICAgICBzcGFjaW5nID0gMTY7XG4gICAgICAgICAgICBzcGFjaW5nTmFtZSA9IFwiM1wiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCI0XCI6XG4gICAgICAgICAgICBzcGFjaW5nID0gMjQ7XG4gICAgICAgICAgICBzcGFjaW5nTmFtZSA9IFwiNFwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCI1XCI6XG4gICAgICAgICAgICBzcGFjaW5nID0gMzI7XG4gICAgICAgICAgICBzcGFjaW5nTmFtZSA9IFwiNVwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCI2XCI6XG4gICAgICAgICAgICBzcGFjaW5nID0gNDA7XG4gICAgICAgICAgICBzcGFjaW5nTmFtZSA9IFwiNlwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCI3XCI6XG4gICAgICAgICAgICBzcGFjaW5nID0gNDg7XG4gICAgICAgICAgICBzcGFjaW5nTmFtZSA9IFwiN1wiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGZvciAoY29uc3Qgbm9kZSBvZiBub2Rlcykge1xuICAgICAgICBub2RlLml0ZW1TcGFjaW5nID0gc3BhY2luZztcbiAgICAgICAgc3BOYW1lID0gXCJzcC1cIiArIHNwYWNpbmdOYW1lO1xuICAgICAgICB1cGRhdGVOYW1lKHsgdHlwZTogXCJzcGFjaW5nXCIsIHZhbHVlOiBzcE5hbWUgfSwgbm9kZSk7XG4gICAgfVxufTtcbmV4cG9ydCB7IFBhZGRpbmdIb3Jpem9udGFsU2xpZGVyLCBQYWRkaW5nVmVydGljYWxTbGlkZXIsIEl0ZW1TcGFjaW5nIH07XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB7IERhcmtVaUNvbG9ycywgTGlnaHRVaUNvbG9ycyB9IGZyb20gXCIuLi90aGVtZS1zdHlsZXMvY29sb3JzXCI7XG5pbXBvcnQgeyBEYXJrVWlFZmZlY3RzLCBMaWdodFVpRWZmZWN0cyB9IGZyb20gXCIuLi90aGVtZS1zdHlsZXMvZWZmZWN0c1wiO1xuLy8gRmlsbFxuY29uc3Qgc3dhcEZpbGwgPSAobm9kZSkgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIGxldCBub2RlRmlsbFN0eWxlSWQgPSBub2RlLmZpbGxTdHlsZUlkO1xuICAgIGxldCBub2RlRmlsbFBhaW50U3R5bGUgPSBmaWdtYS5nZXRTdHlsZUJ5SWQobm9kZUZpbGxTdHlsZUlkKTtcbiAgICBsZXQgbm9kZUZpbGxQYWludE5hbWUgPSBub2RlRmlsbFBhaW50U3R5bGUubmFtZTtcbiAgICBsZXQgc3dhcHBlZE5vZGVGaWxsTmFtZSA9IG51bGw7XG4gICAgbGV0IG5vZGVGaWxsUGFpbnRJc0xpZ2h0TW9kZSA9IG5vZGVGaWxsUGFpbnROYW1lLmluY2x1ZGVzKFwibGlnaHQgdWlcIik7XG4gICAgaWYgKG5vZGVGaWxsUGFpbnRJc0xpZ2h0TW9kZSkge1xuICAgICAgICBzd2FwcGVkTm9kZUZpbGxOYW1lID0gbm9kZUZpbGxQYWludE5hbWUucmVwbGFjZShcImxpZ2h0IHVpIC8gXCIsIFwiZGFyayB1aSAvIFwiKTtcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIERhcmtVaUNvbG9ycykge1xuICAgICAgICAgICAgaWYgKGl0ZW0ubmFtZSA9PT0gc3dhcHBlZE5vZGVGaWxsTmFtZSkge1xuICAgICAgICAgICAgICAgIGZpZ21hLmltcG9ydFN0eWxlQnlLZXlBc3luYyhpdGVtLnN0eWxlS2V5KS50aGVuKChyZXNwKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuZmlsbFN0eWxlSWQgPSByZXNwLmlkO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBzd2FwcGVkTm9kZUZpbGxOYW1lID0gbm9kZUZpbGxQYWludE5hbWUucmVwbGFjZShcImRhcmsgdWkgLyBcIiwgXCJsaWdodCB1aSAvIFwiKTtcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIExpZ2h0VWlDb2xvcnMpIHtcbiAgICAgICAgICAgIGlmIChpdGVtLm5hbWUgPT09IHN3YXBwZWROb2RlRmlsbE5hbWUpIHtcbiAgICAgICAgICAgICAgICBmaWdtYS5pbXBvcnRTdHlsZUJ5S2V5QXN5bmMoaXRlbS5zdHlsZUtleSkudGhlbigocmVzcCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBub2RlLmZpbGxTdHlsZUlkID0gcmVzcC5pZDtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0pO1xuLy8gU3Ryb2tlc1xuY29uc3Qgc3dhcFN0cm9rZSA9IChub2RlKSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgbGV0IG5vZGVTdHJva2VTdHlsZUlkID0gbm9kZS5zdHJva2VTdHlsZUlkO1xuICAgIGxldCBub2RlU3Ryb2tlUGFpbnRTdHlsZSA9IGZpZ21hLmdldFN0eWxlQnlJZChub2RlU3Ryb2tlU3R5bGVJZCk7XG4gICAgbGV0IG5vZGVTdHJva2VQYWludE5hbWUgPSBub2RlU3Ryb2tlUGFpbnRTdHlsZS5uYW1lO1xuICAgIGxldCBzd2FwcGVkTm9kZVN0cm9rZU5hbWUgPSBudWxsO1xuICAgIGxldCBub2RlU3Ryb2tlUGFpbnRJc0xpZ2h0TW9kZSA9IG5vZGVTdHJva2VQYWludE5hbWUuaW5jbHVkZXMoXCJsaWdodCB1aVwiKTtcbiAgICBjb25zb2xlLmxvZyhcIlN0cm9rZTogXCIgKyBub2RlU3Ryb2tlUGFpbnROYW1lKTtcbiAgICBpZiAobm9kZVN0cm9rZVBhaW50SXNMaWdodE1vZGUpIHtcbiAgICAgICAgc3dhcHBlZE5vZGVTdHJva2VOYW1lID0gbm9kZVN0cm9rZVBhaW50TmFtZS5yZXBsYWNlKFwibGlnaHQgdWkgLyBcIiwgXCJkYXJrIHVpIC8gXCIpO1xuICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgRGFya1VpQ29sb3JzKSB7XG4gICAgICAgICAgICBpZiAoaXRlbS5uYW1lID09PSBzd2FwcGVkTm9kZVN0cm9rZU5hbWUpIHtcbiAgICAgICAgICAgICAgICBmaWdtYS5pbXBvcnRTdHlsZUJ5S2V5QXN5bmMoaXRlbS5zdHlsZUtleSkudGhlbigocmVzcCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBub2RlLnN0cm9rZVN0eWxlSWQgPSByZXNwLmlkO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gRG8gbm90aGluZ1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBzd2FwcGVkTm9kZVN0cm9rZU5hbWUgPSBub2RlU3Ryb2tlUGFpbnROYW1lLnJlcGxhY2UoXCJkYXJrIHVpIC8gXCIsIFwibGlnaHQgdWkgLyBcIik7XG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBMaWdodFVpQ29sb3JzKSB7XG4gICAgICAgICAgICBpZiAoaXRlbS5uYW1lID09PSBzd2FwcGVkTm9kZVN0cm9rZU5hbWUpIHtcbiAgICAgICAgICAgICAgICBmaWdtYS5pbXBvcnRTdHlsZUJ5S2V5QXN5bmMoaXRlbS5zdHlsZUtleSkudGhlbigocmVzcCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBub2RlLnN0cm9rZVN0eWxlSWQgPSByZXNwLmlkO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gRG8gbm90aGluZ1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSk7XG4vLyBFZmZlY3RzXG5jb25zdCBzd2FwRWZmZWN0cyA9IChub2RlKSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgbGV0IG5vZGVFZmZlY3RTdHlsZUlkID0gbm9kZS5lZmZlY3RTdHlsZUlkO1xuICAgIGxldCBub2RlRWZmZWN0U3R5bGUgPSBmaWdtYS5nZXRTdHlsZUJ5SWQobm9kZUVmZmVjdFN0eWxlSWQpO1xuICAgIGxldCBub2RlRWZmZWN0U3R5bGVOYW1lID0gbm9kZUVmZmVjdFN0eWxlLm5hbWU7XG4gICAgbGV0IHN3YXBwZWROb2RlRWZmZWN0TmFtZSA9IG51bGw7XG4gICAgbGV0IG5vZGVFZmZlY3RTdHlsZU5hbWVJc0xpZ2h0ID0gbm9kZUVmZmVjdFN0eWxlTmFtZS5pbmNsdWRlcyhcImxpZ2h0IHVpXCIpO1xuICAgIGNvbnNvbGUubG9nKFwiRWZmZWN0OiBcIiArIG5vZGVFZmZlY3RTdHlsZU5hbWUpO1xuICAgIGlmIChub2RlRWZmZWN0U3R5bGVOYW1lSXNMaWdodCkge1xuICAgICAgICBzd2FwcGVkTm9kZUVmZmVjdE5hbWUgPSBub2RlRWZmZWN0U3R5bGVOYW1lLnJlcGxhY2UoXCJsaWdodCB1aSAvIFwiLCBcImRhcmsgdWkgLyBcIik7XG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBEYXJrVWlFZmZlY3RzKSB7XG4gICAgICAgICAgICBpZiAoaXRlbS5uYW1lID09PSBzd2FwcGVkTm9kZUVmZmVjdE5hbWUpIHtcbiAgICAgICAgICAgICAgICBmaWdtYS5pbXBvcnRTdHlsZUJ5S2V5QXN5bmMoaXRlbS5zdHlsZUtleSkudGhlbigocmVzcCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBub2RlLmVmZmVjdFN0eWxlSWQgPSByZXNwLmlkO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gZG8gbm90aGluZ1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBzd2FwcGVkTm9kZUVmZmVjdE5hbWUgPSBub2RlRWZmZWN0U3R5bGVOYW1lLnJlcGxhY2UoXCJkYXJrIHVpIC8gXCIsIFwibGlnaHQgdWkgLyBcIik7XG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBMaWdodFVpRWZmZWN0cykge1xuICAgICAgICAgICAgaWYgKGl0ZW0ubmFtZSA9PT0gc3dhcHBlZE5vZGVFZmZlY3ROYW1lKSB7XG4gICAgICAgICAgICAgICAgZmlnbWEuaW1wb3J0U3R5bGVCeUtleUFzeW5jKGl0ZW0uc3R5bGVLZXkpLnRoZW4oKHJlc3ApID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5lZmZlY3RTdHlsZUlkID0gcmVzcC5pZDtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIERvIG5vdGhpbmdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0pO1xuLy8gVGhlbWUgU3dhcFxuY29uc3QgVGhlbWVTd2FwID0gKG5vZGUpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAvLyBkbyBub3RoaW5nIGJlbG93XG4gICAgaWYgKFwiY2hpbGRyZW5cIiBpbiBub2RlKSB7XG4gICAgICAgIGZvciAoY29uc3QgY2hpbGQgb2Ygbm9kZS5jaGlsZHJlbikge1xuICAgICAgICAgICAgVGhlbWVTd2FwKGNoaWxkKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgLy8gZG8gbm90aGluZ1xuICAgIH1cbiAgICBzd2FwRmlsbChub2RlKTtcbiAgICBzd2FwU3Ryb2tlKG5vZGUpO1xuICAgIHN3YXBFZmZlY3RzKG5vZGUpO1xufSk7XG5leHBvcnQgeyBUaGVtZVN3YXAgfTtcbi8vIFJ1biB0aGlzIGluIHRva2VucyBmaWxlXG5jb25zdCBHZXRBbGxMb2NhbFBhaW50U3R5bGVzID0gKCkgPT4ge1xuICAgIGZ1bmN0aW9uIGNsb25lKHZhbCkge1xuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh2YWwpKTtcbiAgICB9XG4gICAgbGV0IGFsbFBhaW50U3R5bGVzID0gZmlnbWEuZ2V0TG9jYWxQYWludFN0eWxlcygpO1xuICAgIC8vIGNvbnNvbGUubG9nKGFsbFBhaW50U3R5bGVzKTtcbiAgICBsZXQgYWxsU3R5bGVzQXJyYXkgPSBbXTtcbiAgICBmb3IgKGNvbnN0IHBhaW50U3R5bGUgb2YgYWxsUGFpbnRTdHlsZXMpIHtcbiAgICAgICAgbGV0IGNvbG9yID0gY2xvbmUocGFpbnRTdHlsZS5wYWludHNbMF0pO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhjb2xvcik7XG4gICAgICAgIGxldCBjb2xvclJHQiA9IGNvbG9yLmNvbG9yO1xuICAgICAgICBsZXQgcmdiVG9JbnQgPSAodmFsdWUpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLmNlaWwodmFsdWUgKiAyNTUpO1xuICAgICAgICB9O1xuICAgICAgICBsZXQgcmdiYSA9IHtcbiAgICAgICAgICAgIHI6IHJnYlRvSW50KGNvbG9yUkdCLnIpLFxuICAgICAgICAgICAgZzogcmdiVG9JbnQoY29sb3JSR0IuZyksXG4gICAgICAgICAgICBiOiByZ2JUb0ludChjb2xvclJHQi5iKSxcbiAgICAgICAgICAgIGE6IGNvbG9yLm9wYWNpdHksXG4gICAgICAgIH07XG4gICAgICAgIGFsbFN0eWxlc0FycmF5LnB1c2goe1xuICAgICAgICAgICAgbmFtZTogcGFpbnRTdHlsZS5uYW1lLFxuICAgICAgICAgICAgc3R5bGVLZXk6IHBhaW50U3R5bGUua2V5LFxuICAgICAgICAgICAgcmdiYTogcmdiYSxcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGFsbFN0eWxlc0FycmF5KTtcbiAgICB9XG59O1xuLy8gUnVuIHRoaXMgaW4gdG9rZW5zIGZpbGVcbmNvbnN0IEdldEFsbExvY2FsRWZmZWN0U3R5bGVzID0gKCkgPT4ge1xuICAgIGxldCBhbGxFZmZlY3RTdHlsZXMgPSBmaWdtYS5nZXRMb2NhbEVmZmVjdFN0eWxlcygpO1xuICAgIGxldCBhbGxFZmZlY3RzID0gW107XG4gICAgZm9yIChjb25zdCBlZmZlY3RTdHlsZSBvZiBhbGxFZmZlY3RTdHlsZXMpIHtcbiAgICAgICAgYWxsRWZmZWN0cy5wdXNoKHsgbmFtZTogZWZmZWN0U3R5bGUubmFtZSwgc3R5bGVLZXk6IGVmZmVjdFN0eWxlLmtleSB9KTtcbiAgICB9XG4gICAgY29uc29sZS5sb2coYWxsRWZmZWN0cyk7XG59O1xuIiwiZXhwb3J0IGNvbnN0IHBhZGRpbmdIb3Jpem9udGFsID0gKHNwYWNpbmcpID0+IHtcbiAgbGV0IGdyaWRzO1xuXG4gIGlmIChzcGFjaW5nID09IDApIHtcbiAgICBncmlkcyA9IFtdO1xuICB9IGVsc2Uge1xuICAgIGdyaWRzID0gW1xuICAgICAge1xuICAgICAgICBwYXR0ZXJuOiBcIkNPTFVNTlNcIixcbiAgICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgICAgY29sb3I6IHtcbiAgICAgICAgICByOiAwLFxuICAgICAgICAgIGc6IDAuNDYwMDAwMDM4MTQ2OTcyNjYsXG4gICAgICAgICAgYjogMSxcbiAgICAgICAgICBhOiAwLjIsXG4gICAgICAgIH0sXG4gICAgICAgIGd1dHRlclNpemU6IDEsXG4gICAgICAgIGFsaWdubWVudDogXCJTVFJFVENIXCIsXG4gICAgICAgIGNvdW50OiAxLFxuICAgICAgICBvZmZzZXQ6IHNwYWNpbmcsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXR0ZXJuOiBcIkNPTFVNTlNcIixcbiAgICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgICAgY29sb3I6IHtcbiAgICAgICAgICByOiAwLFxuICAgICAgICAgIGc6IDEsXG4gICAgICAgICAgYjogMCxcbiAgICAgICAgICBhOiAwLjIwMDAwMDAwMjk4MDIzMjI0LFxuICAgICAgICB9LFxuICAgICAgICBndXR0ZXJTaXplOiAxLFxuICAgICAgICBhbGlnbm1lbnQ6IFwiTUFYXCIsXG4gICAgICAgIGNvdW50OiAxLFxuICAgICAgICBzZWN0aW9uU2l6ZTogc3BhY2luZyxcbiAgICAgICAgb2Zmc2V0OiAwLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0dGVybjogXCJDT0xVTU5TXCIsXG4gICAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICAgIGNvbG9yOiB7XG4gICAgICAgICAgcjogMCxcbiAgICAgICAgICBnOiAxLFxuICAgICAgICAgIGI6IDAsXG4gICAgICAgICAgYTogMC4yMDAwMDAwMDI5ODAyMzIyNCxcbiAgICAgICAgfSxcbiAgICAgICAgZ3V0dGVyU2l6ZTogMSxcbiAgICAgICAgYWxpZ25tZW50OiBcIk1JTlwiLFxuICAgICAgICBjb3VudDogMSxcbiAgICAgICAgc2VjdGlvblNpemU6IHNwYWNpbmcsXG4gICAgICAgIG9mZnNldDogMCxcbiAgICAgIH0sXG4gICAgXTtcbiAgfVxuXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgcmVzb2x2ZShncmlkcyk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IHBhZGRpbmdWZXJ0aWNhbCA9IChzcGFjaW5nKSA9PiB7XG4gIGxldCBncmlkcztcblxuICBpZiAoc3BhY2luZyA9PSAwKSB7XG4gICAgZ3JpZHMgPSBbXTtcbiAgfSBlbHNlIHtcbiAgICBncmlkcyA9IFtcbiAgICAgIHtcbiAgICAgICAgcGF0dGVybjogXCJST1dTXCIsXG4gICAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICAgIGNvbG9yOiB7XG4gICAgICAgICAgcjogMCxcbiAgICAgICAgICBnOiAwLjQ2MDAwMDAzODE0Njk3MjY2LFxuICAgICAgICAgIGI6IDEsXG4gICAgICAgICAgYTogMC4yMDAwMDAwMDI5ODAyMzIyNCxcbiAgICAgICAgfSxcbiAgICAgICAgZ3V0dGVyU2l6ZTogMSxcbiAgICAgICAgYWxpZ25tZW50OiBcIlNUUkVUQ0hcIixcbiAgICAgICAgY291bnQ6IDEsXG4gICAgICAgIG9mZnNldDogc3BhY2luZyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdHRlcm46IFwiUk9XU1wiLFxuICAgICAgICB2aXNpYmxlOiB0cnVlLFxuICAgICAgICBjb2xvcjoge1xuICAgICAgICAgIHI6IDAsXG4gICAgICAgICAgZzogMSxcbiAgICAgICAgICBiOiAwLFxuICAgICAgICAgIGE6IDAuMjAwMDAwMDAyOTgwMjMyMjQsXG4gICAgICAgIH0sXG4gICAgICAgIGd1dHRlclNpemU6IDEsXG4gICAgICAgIGFsaWdubWVudDogXCJNQVhcIixcbiAgICAgICAgY291bnQ6IDEsXG4gICAgICAgIHNlY3Rpb25TaXplOiBzcGFjaW5nLFxuICAgICAgICBvZmZzZXQ6IDAsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXR0ZXJuOiBcIlJPV1NcIixcbiAgICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgICAgY29sb3I6IHtcbiAgICAgICAgICByOiAwLFxuICAgICAgICAgIGc6IDEsXG4gICAgICAgICAgYjogMCxcbiAgICAgICAgICBhOiAwLjIwMDAwMDAwMjk4MDIzMjI0LFxuICAgICAgICB9LFxuICAgICAgICBndXR0ZXJTaXplOiAxLFxuICAgICAgICBhbGlnbm1lbnQ6IFwiTUlOXCIsXG4gICAgICAgIGNvdW50OiAxLFxuICAgICAgICBzZWN0aW9uU2l6ZTogc3BhY2luZyxcbiAgICAgICAgb2Zmc2V0OiAwLFxuICAgICAgfSxcbiAgICBdO1xuICB9XG5cbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICByZXNvbHZlKGdyaWRzKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgYmFzZWxpbmVHcmlkcyA9IHtcbiAgcGF0dGVybjogXCJST1dTXCIsXG4gIHZpc2libGU6IHRydWUsXG4gIGNvbG9yOiB7XG4gICAgcjogMSxcbiAgICBnOiAwLFxuICAgIGI6IDAsXG4gICAgYTogMC4xMDAwMDAwMDE0OTAxMTYxMixcbiAgfSxcbiAgZ3V0dGVyU2l6ZTogNCxcbiAgYWxpZ25tZW50OiBcIk1JTlwiLFxuICBjb3VudDogSW5maW5pdHksXG4gIHNlY3Rpb25TaXplOiA0LFxuICBvZmZzZXQ6IDAsXG59O1xuXG5leHBvcnQgY29uc3QgbWF4V2lkdGhHcmlkcyA9IFtcbiAge1xuICAgIHBhdHRlcm46IFwiQ09MVU1OU1wiLFxuICAgIHZpc2libGU6IHRydWUsXG4gICAgY29sb3I6IHtcbiAgICAgIHI6IDEsXG4gICAgICBnOiAwLjcxOTk5OTk2OTAwNTU4NDcsXG4gICAgICBiOiAwLFxuICAgICAgYTogMC4yMDAwMDAwMDI5ODAyMzIyNCxcbiAgICB9LFxuICAgIGd1dHRlclNpemU6IDk2MCxcbiAgICBhbGlnbm1lbnQ6IFwiU1RSRVRDSFwiLFxuICAgIGNvdW50OiAyLFxuICAgIG9mZnNldDogMCxcbiAgfSxcbiAge1xuICAgIHBhdHRlcm46IFwiQ09MVU1OU1wiLFxuICAgIHZpc2libGU6IHRydWUsXG4gICAgY29sb3I6IHtcbiAgICAgIHI6IDAsXG4gICAgICBnOiAwLjQ1ODgyMzUzMTg2NjA3MzYsXG4gICAgICBiOiAxLFxuICAgICAgYTogMC4yMDAwMDAwMDI5ODAyMzIyNCxcbiAgICB9LFxuICAgIGd1dHRlclNpemU6IDEsXG4gICAgYWxpZ25tZW50OiBcIkNFTlRFUlwiLFxuICAgIGNvdW50OiAxLFxuICAgIHNlY3Rpb25TaXplOiA5NjAsXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgZ2V0TWF4V2lkdGhHcmlkcyA9ICgpID0+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICByZXNvbHZlKG1heFdpZHRoR3JpZHMpO1xuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBjb2x1bW5HcmlkcyA9IFtcbiAge1xuICAgIHBhdHRlcm46IFwiQ09MVU1OU1wiLFxuICAgIHZpc2libGU6IHRydWUsXG4gICAgY29sb3I6IHtcbiAgICAgIHI6IDAuODI5OTk5OTIzNzA2MDU0NyxcbiAgICAgIGc6IDAsXG4gICAgICBiOiAxLFxuICAgICAgYTogMC4yMDAwMDAwMDI5ODAyMzIyNCxcbiAgICB9LFxuICAgIGd1dHRlclNpemU6IDE2LFxuICAgIGFsaWdubWVudDogXCJTVFJFVENIXCIsXG4gICAgY291bnQ6IDEyLFxuICAgIG9mZnNldDogMCxcbiAgfSxcbl07XG4iLCJleHBvcnQgY29uc3QgRGFya1VpQ29sb3JzID0gW1xuICB7XG4gICAgbmFtZTogXCJkYXJrIHVpIC8gaW50ZW50aW9ucyAvIHByaW1hcnkubWFpblwiLFxuICAgIHN0eWxlS2V5OiBcIjJiNzkyZDg0YzlkZGI1YmI1NGI0ZTdjZTAwMGM1OTVjNzlkNzQ4Y2FcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiZGFyayB1aSAvIGludGVudGlvbnMgLyBwcmltYXJ5LmRhcmtcIixcbiAgICBzdHlsZUtleTogXCJiNDNiZDExMTI1MGNlNzRkNDhjZmQ3MWFjMDBjMWMxYjU1OGIwMmYwXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImRhcmsgdWkgLyBpbnRlbnRpb25zIC8gZXJyb3IubWFpblwiLFxuICAgIHN0eWxlS2V5OiBcIjc2N2MyYTk4OTcwNjJkZWUwZDBmNjMwMDQwNmY2ZTU1ODVmNjg0YzdcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiZGFyayB1aSAvIGludGVudGlvbnMgLyBlcnJvci5kYXJrXCIsXG4gICAgc3R5bGVLZXk6IFwiMzRhOWEzNDRjMjU0MTZkMWE3ZWE2ZDY3MzJkYjEzZTdiYzZjYzM5N1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJkYXJrIHVpIC8gaW50ZW50aW9ucyAvIHdhcm5pbmcubWFpblwiLFxuICAgIHN0eWxlS2V5OiBcIjg5NGZiZDMzNWQ4YjBmNmIxY2VlNGVjNWFjN2EwNDc5Mzk3YTZiNGNcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiZGFyayB1aSAvIGludGVudGlvbnMgLyB3YXJuaW5nLmRhcmtcIixcbiAgICBzdHlsZUtleTogXCI0NGI0MmE4NTA1Mjg0MTM4N2JjNjc3YzU3MTk4NzRjZjAyMDdjYWI1XCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImRhcmsgdWkgLyBpbnRlbnRpb25zIC8gc3VjY2Vzcy5tYWluXCIsXG4gICAgc3R5bGVLZXk6IFwiMmQ0NGYzYTBjNjA4NzhjZWY1ZGJkMTBjNTlhNDE3YWE5MGMwYzFiZlwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJkYXJrIHVpIC8gaW50ZW50aW9ucyAvIHN1Y2Nlc3MuZGFya1wiLFxuICAgIHN0eWxlS2V5OiBcIjQzMjIyNzkxZjdkNWFmZGU4Yjg0YmRiN2E3Yzc1YTZhOGNjOWQzMzRcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiZGFyayB1aSAvIHR5cG9ncmFwaHkgLyB0ZXh0LnByaW1hcnlcIixcbiAgICBzdHlsZUtleTogXCIzZmRiZDQzZGQyNDYzYzY0Yjk0ZTBiODFhOTE2YTYwNmMwOGIwZjFjXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImRhcmsgdWkgLyB0eXBvZ3JhcGh5IC8gdGV4dC5zZWNvbmRhcnlcIixcbiAgICBzdHlsZUtleTogXCI5ZDJlNTExZDlhMzFlYmQ3NmUzMDJhYjI1ZDFlOTk1ZTZhODNhYzFjXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImRhcmsgdWkgLyB0eXBvZ3JhcGh5IC8gdGV4dC5kaXNhYmxlZFwiLFxuICAgIHN0eWxlS2V5OiBcImM5ODg4M2UwN2JlODBiZTZiY2QxODgxNGViMjlhODc3OTdhOTljNmFcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiZGFyayB1aSAvIHR5cG9ncmFwaHkgLyB0ZXh0LmNvbnRyYXN0VGV4dC5wcmltYXJ5XCIsXG4gICAgc3R5bGVLZXk6IFwiNWI2MjJkOWI1ZjE2ZmY0NzFiNjY2ZWU4ZDk1YTM1ZWI1ZTdlNDY0YlwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJkYXJrIHVpIC8gdHlwb2dyYXBoeSAvIHRleHQuY29udHJhc3RUZXh0LmVycm9yXCIsXG4gICAgc3R5bGVLZXk6IFwiYWMzNmI2MGE2N2YzNmVkODA3MGNhYWVkZDA0NTYwMTJhMTBjMjJkNlwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJkYXJrIHVpIC8gdHlwb2dyYXBoeSAvIHRleHQuY29udHJhc3RUZXh0Lndhcm5pbmdcIixcbiAgICBzdHlsZUtleTogXCI1OWM5YmYyYTRkNmMwNGZkOTNjMWI5YWJjYzRjZjUwMWZjYWRiYjIyXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImRhcmsgdWkgLyB0eXBvZ3JhcGh5IC8gdGV4dC5jb250cmFzdFRleHQuc3VjY2Vzc1wiLFxuICAgIHN0eWxlS2V5OiBcIjE5NzJkYzAwMWQzMWRlYzMyNmM4ZTkzN2Y4MzAyZWUzNWZiYjg1M2ZcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiZGFyayB1aSAvIHR5cG9ncmFwaHkgLyB0ZXh0LmFjdGlvbi5kaXNhYmxlZFwiLFxuICAgIHN0eWxlS2V5OiBcIjdmN2E0ZWUxZmJjYjY1MjllNmZiNTY0YTBmNDg4MTg4YjBkYzJiMzdcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiZGFyayB1aSAvIGJ1dHRvbnMgLyBhY3Rpb24uZGlzYWJsZWRCYWNrZ3JvdW5kXCIsXG4gICAgc3R5bGVLZXk6IFwiMjE0YWM0ZGY3OTZiNTFjMGY0MjYwMjhkMGY0MjY4ZWZhNmVlMzY4NVwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJkYXJrIHVpIC8gYmFja2dyb3VuZCAvIGJhY2tncm91bmQuZGVmYXVsdFwiLFxuICAgIHN0eWxlS2V5OiBcIjJmMDYwZTc0MjJhOGFkMTdhMDM3YTI1MGQzNjhjZjY3MWFkYzA0NjhcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiZGFyayB1aSAvIGJhY2tncm91bmQgLyBiYWNrZ3JvdW5kLnBhcGVyXCIsXG4gICAgc3R5bGVLZXk6IFwiMTVmNWZmYWMzZWM5MWIyNDA4OTgxMzQzOWZmYWRkMWY5OTk0YjI5Y1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJkYXJrIHVpIC8gZGl2aWRlciAvIGRpdmlkZXJcIixcbiAgICBzdHlsZUtleTogXCI4NGFiMGYyOThlYThmY2QwYjgyYWM4OTI5OGFkNTExNDBjYTdiNzVhXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImRhcmsgdWkgLyA0RFAgLyBGVFBcIixcbiAgICBzdHlsZUtleTogXCI3YmIwMjhmZjdkODczNDg2Njc4YjdjNjc2NGZjNTBmMzllNTcxZWI2XCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImRhcmsgdWkgLyA0RFAgLyBNQVBcIixcbiAgICBzdHlsZUtleTogXCJkZjU3ZmViYzhlZjc3ZGQyYzM1YmUyZDFiOTQwYWZiODMzMTY2OGI0XCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImRhcmsgdWkgLyA0RFAgLyBBQ1wiLFxuICAgIHN0eWxlS2V5OiBcImU4MTkzYWJmZDJmNzE1ZTQ4YjljYzdjZTRiYzZiOTVjODk3YWEwNGRcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiZGFyayB1aSAvIDREUCAvIE5NXCIsXG4gICAgc3R5bGVLZXk6IFwiODJkNTBmMzAxMWQ4MTU5MDJlZDQzMGRmNmQ3MzQ1ZWNkZjk0NzYxYlwiLFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IExpZ2h0VWlDb2xvcnMgPSBbXG4gIHtcbiAgICBuYW1lOiBcImxpZ2h0IHVpIC8gaW50ZW50aW9ucyAvIHByaW1hcnkubWFpblwiLFxuICAgIHN0eWxlS2V5OiBcImNmMGM4ZTg4ZWI2NWI4MDQ5ZmVjYTYwYWM4M2UxZGUzZDNhYjZlOGJcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwibGlnaHQgdWkgLyBpbnRlbnRpb25zIC8gcHJpbWFyeS5kYXJrXCIsXG4gICAgc3R5bGVLZXk6IFwiZGE5Mzg2OThjOWQyMjMyMjFkNjNjN2M1NTAxYTkwNTdhMGQ1ZjZmYlwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJsaWdodCB1aSAvIGludGVudGlvbnMgLyBlcnJvci5tYWluXCIsXG4gICAgc3R5bGVLZXk6IFwiNzk4Y2I4Zjg5OGFiMmE1MDhhN2JhNDkxZDg5OTAxMWZkYTg5NjU3N1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJsaWdodCB1aSAvIGludGVudGlvbnMgLyBlcnJvci5kYXJrXCIsXG4gICAgc3R5bGVLZXk6IFwiMTI3NzY0NTZlNjhhZGY0YWI1ZTM5MTc5N2MzYzg0ZTkyYjBmODZjMlwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJsaWdodCB1aSAvIGludGVudGlvbnMgLyB3YXJuaW5nLm1haW5cIixcbiAgICBzdHlsZUtleTogXCJmMjdhNjBkZjhjMTYyMTg1ZWEyNDcyYTgwMWIyNzFlZjY2MmMwNDI5XCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImxpZ2h0IHVpIC8gaW50ZW50aW9ucyAvIHdhcm5pbmcuZGFya1wiLFxuICAgIHN0eWxlS2V5OiBcIjYxNWQ2ZDVjYWM0ODU1ZTk4MWM4Yjk0MmI5ODZlZTcwNWI1NjhiMjhcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwibGlnaHQgdWkgLyBpbnRlbnRpb25zIC8gc3VjY2Vzcy5tYWluXCIsXG4gICAgc3R5bGVLZXk6IFwiZTRhYTQxZThiZjUyZjk0ZWY1ZmNlMzY2OWY1MTBhZjNjYjc5YzVhN1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJsaWdodCB1aSAvIGludGVudGlvbnMgLyBzdWNjZXNzLmRhcmtcIixcbiAgICBzdHlsZUtleTogXCJkOTg4M2I1M2MyNTM5YmYxZTEwNjgyMDVmZTFkMDU5ZDU4MzE1ZTRmXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImxpZ2h0IHVpIC8gdHlwb2dyYXBoeSAvIHRleHQucHJpbWFyeVwiLFxuICAgIHN0eWxlS2V5OiBcIjhmMDVjNjNkZTdmMTAwYjJiZDhmYWQ3YjhiZDcxNDg5YjYzN2MwNjdcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwibGlnaHQgdWkgLyB0eXBvZ3JhcGh5IC8gdGV4dC5zZWNvbmRhcnlcIixcbiAgICBzdHlsZUtleTogXCI5NzA2M2E1ZjYyYzM1NGU2YWUwOTE5ZDUwYjY4ZDBiYWRiNGExMjJlXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImxpZ2h0IHVpIC8gdHlwb2dyYXBoeSAvIHRleHQuZGlzYWJsZWRcIixcbiAgICBzdHlsZUtleTogXCJhODA5Zjc1ZTE0ZmJlNjI5NjI3MmU4NTMxMTA2ZjZjYzRjNjkyNTUzXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImxpZ2h0IHVpIC8gdHlwb2dyYXBoeSAvIHRleHQuY29udHJhc3RUZXh0LnByaW1hcnlcIixcbiAgICBzdHlsZUtleTogXCJiMjhhN2ZjZGQyNDczMjNkN2JhOTk5NjFjOTYwOGNmODM3OGJhZGExXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImxpZ2h0IHVpIC8gdHlwb2dyYXBoeSAvIHRleHQuY29udHJhc3RUZXh0LmVycm9yXCIsXG4gICAgc3R5bGVLZXk6IFwiYzQyYzVmMTk5MDM5MGM0MTNhZTYyOTI1ZTlhZjBkNTFiZjMyYzk0NVwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJsaWdodCB1aSAvIHR5cG9ncmFwaHkgLyB0ZXh0LmNvbnRyYXN0VGV4dC53YXJuaW5nXCIsXG4gICAgc3R5bGVLZXk6IFwiZWVjZDgyY2NhYWU5ODg2MjRjNDVmMjgyOTY1NjQwMzdkYTg1Y2MxYVwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJsaWdodCB1aSAvIHR5cG9ncmFwaHkgLyB0ZXh0LmNvbnRyYXN0VGV4dC5zdWNjZXNzXCIsXG4gICAgc3R5bGVLZXk6IFwiZDdkYmFlZjY2YTkzMmZmMjc2ZjZmNGFhNTE5ODVhMDU5ZGVkZmJmOFwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJsaWdodCB1aSAvIHR5cG9ncmFwaHkgLyB0ZXh0LmFjdGlvbi5kaXNhYmxlZFwiLFxuICAgIHN0eWxlS2V5OiBcImY4MWExZjc0ODcwMzE2OThkMTVjMjM5NGU0Yzc0ZmNjOWVjY2MyOTlcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwibGlnaHQgdWkgLyBidXR0b25zIC8gYWN0aW9uLmRpc2FibGVkQmFja2dyb3VuZFwiLFxuICAgIHN0eWxlS2V5OiBcIjczYjE1ZTNhNzllZWVhNzU3MjgzYTQ0Y2Y3MTEzMTMwNWNiYTIzOTlcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwibGlnaHQgdWkgLyBiYWNrZ3JvdW5kIC8gYmFja2dyb3VuZC5kZWZhdWx0XCIsXG4gICAgc3R5bGVLZXk6IFwiMjNlOTRmY2VlZDlhY2NiZGE0ZGI5YzY3MmM0M2QyMWI0ZDI4NmU0Y1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJsaWdodCB1aSAvIGJhY2tncm91bmQgLyBiYWNrZ3JvdW5kLnBhcGVyXCIsXG4gICAgc3R5bGVLZXk6IFwiOTAzZTViZjI3NDEzOWVlYjlmNDk2OGE5ZWYwOGVjMDVlYWYwYjI3NFwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJsaWdodCB1aSAvIGRpdmlkZXIgLyBkaXZpZGVyXCIsXG4gICAgc3R5bGVLZXk6IFwiZWU0ZGRjZTJlNTZhZDQ3YzQyMTZkNTgyN2EyODNiOTQzYTc5NGM3OFwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJsaWdodCB1aSAvIDREUCAvIEZUUFwiLFxuICAgIHN0eWxlS2V5OiBcIjIyNGU0OTEyMDI3YmU5Zjc1Njg1ZmQ0MGIyNTI4YmE5ZjM0ZmU5NThcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwibGlnaHQgdWkgLyA0RFAgLyBNQVBcIixcbiAgICBzdHlsZUtleTogXCJhYWEzYTUzMWExMjRmYTg1NGUwOWQzOThmOThmYjQ3Yjk4OWE4YTcyXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImxpZ2h0IHVpIC8gNERQIC8gQUNcIixcbiAgICBzdHlsZUtleTogXCIyMjBkMzQ5Mzc0N2NkOGQ4YmRjNWQ0YTBlNzk2NWMzNmEzYzUyMzQ5XCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImxpZ2h0IHVpIC8gNERQIC8gTk1cIixcbiAgICBzdHlsZUtleTogXCJkZGNiZjY4ZmE1YzFlYWE3MjA3NzE2NDI3MmI3YWU1YjllNWU0ZWQ3XCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcInV0aWxpdHkgLyBtYXNrXCIsXG4gICAgc3R5bGVLZXk6IFwiZDA0ZGIyNmJmODk3MzUyZjVjYzQ5YjM4NTRmYTZiN2U5ODFiMThlNlwiLFxuICB9LFxuXTtcbiIsImV4cG9ydCBjb25zdCBMaWdodFVpRWZmZWN0cyA9IFtcbiAge1xuICAgIG5hbWU6IFwibGlnaHQgdWkgLyBib3JkZXIgLyB0b3BcIixcbiAgICBzdHlsZUtleTogXCJiNDg3MjJkNjE2NDhkN2M2NTY1ZmVhNjQwMzYxODUzZWM1MzYzOWQxXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImxpZ2h0IHVpIC8gYm9yZGVyIC8gcmlnaHRcIixcbiAgICBzdHlsZUtleTogXCIzMzk0ZmVlOGUzZjA4ZWRjN2Q2MGQ2YWFiMjlmMGYzZjhlZTFiMWIyXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImxpZ2h0IHVpIC8gYm9yZGVyIC8gYm90dG9tXCIsXG4gICAgc3R5bGVLZXk6IFwiZjYzZmZmMzlhZTAyMWYwNzc5YjZkNDZkYzk3NWJjNTc4ZGQzYjdjNVwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJsaWdodCB1aSAvIGJvcmRlciAvIGxlZnRcIixcbiAgICBzdHlsZUtleTogXCI5ZWRkZGY3ODBiZjQ0NTE1ZDk1ZTJhNGJmZjYwMzZlMjQ3ZGE1YWY1XCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImxpZ2h0IHVpIC8gYm9yZGVyIC8gdG9wICYgYm90dG9tXCIsXG4gICAgc3R5bGVLZXk6IFwiMjNjMTE5MTZlNmFmNDEzZWYyMjBhY2ZjYzQwMTk1ZDgyZmUzMDNiNVwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJsaWdodCB1aSAvIGJvcmRlciAvIGxlZnQgJiByaWdodFwiLFxuICAgIHN0eWxlS2V5OiBcImE2NDQ3YjcyMTA5MDFiY2E0NWI5OGZlOTE4YWM1NTU0MGZhODM1NGVcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwibGlnaHQgdWkgLyBzaGFkb3cgLyBsb3dcIixcbiAgICBzdHlsZUtleTogXCI4Y2NlYTlkNTIzY2Y5ZGMxM2ZlZTY4ZjM5MmYzZjljYzMxODdhNDU3XCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImxpZ2h0IHVpIC8gc2hhZG93IC8gaGlnaFwiLFxuICAgIHN0eWxlS2V5OiBcImM2MTI1M2MzOGY2ZDBkOWYzYjMwMmE3N2EzODA3ZTA1MmU5YzNmOTFcIixcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBEYXJrVWlFZmZlY3RzID0gW1xuICB7XG4gICAgbmFtZTogXCJkYXJrIHVpIC8gYm9yZGVyIC8gdG9wXCIsXG4gICAgc3R5bGVLZXk6IFwiZDM5NGM2ZmY3OGE5NGM5MDBmMzQ0YjUzZjFkN2UwZTdlY2RjY2Q3OVwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJkYXJrIHVpIC8gYm9yZGVyIC8gcmlnaHRcIixcbiAgICBzdHlsZUtleTogXCI0MzNjNjA1ZjM0ZTlhODhkMDM1MGYyMmZlNThjOWFmYzhmMGU3ZGQ3XCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImRhcmsgdWkgLyBib3JkZXIgLyBib3R0b21cIixcbiAgICBzdHlsZUtleTogXCIzZTQ2NzQ4MTA1MTA2YjY1NDQwYzI0ZjFiOWU0MWM5OTRmZGFjNDAyXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImRhcmsgdWkgLyBib3JkZXIgLyBsZWZ0XCIsXG4gICAgc3R5bGVLZXk6IFwiZjg4YjIyN2RkNmQ2YjRmODI4NWIyZTE3OWE3YzdkNDI3N2YwZmIzMVwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJkYXJrIHVpIC8gYm9yZGVyIC8gdG9wICYgYm90dG9tXCIsXG4gICAgc3R5bGVLZXk6IFwiYTM0ZjNkMGEyMmMyNDU5Y2ZjNjI2ZjE3OGM0N2Q5YmIxYmE4YjJhNVwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJkYXJrIHVpIC8gYm9yZGVyIC8gbGVmdCAmIHJpZ2h0XCIsXG4gICAgc3R5bGVLZXk6IFwiZmMwNmI4ZTcwMzJmYzliMWZhMDdhZjVlMzkyOTNkZjIxNTBmZjRkY1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJkYXJrIHVpIC8gc2hhZG93IC8gbG93XCIsXG4gICAgc3R5bGVLZXk6IFwiOTg3NjE5MDRiY2M5ZDM4YzgxZWUyM2U3YjQzMmQ4Yzk3ZTI5ZjBjMVwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJkYXJrIHVpIC8gc2hhZG93IC8gaGlnaFwiLFxuICAgIHN0eWxlS2V5OiBcIjIwOWI0NTFlNGY2OGY1YmYzYWRlMjRlZjM2YTEwYTYwOWNkYWUyMzlcIixcbiAgfSxcbl07XG4iXSwic291cmNlUm9vdCI6IiJ9