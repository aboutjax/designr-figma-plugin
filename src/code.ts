// This plugin will open a modal to prompt the user to enter a number, and
// it will then create that many rectangles on the screen.

// This file holds the main code for the plugins. It has access to the *document*.
// You can access browser APIs in the <script> tag inside "ui.html" which has a
// full browser enviroment (see documentation).
// import { SpacingDefault } from "./helper/spacing-default";
import { ThemeSwap } from "./helper/theme-swap";
import { SpacingCheckTraverse } from "./helper/spacing-check";
import { ColorCheckTraverse } from "./helper/color-check";
import {
  ForceAutoLayoutHorizontal,
  ForceAutoLayoutVertical,
} from "./helper/force-auto-layout";

import {
  PaddingHorizontalSlider,
  PaddingVerticalSlider,
  ItemSpacing,
} from "./helper/spacing-slider";
import { SetLayoutGrid } from "./helper/layout-grid";

import { onSelectionChange } from "./helper/callback";

// This shows the HTML page in "ui.html".
figma.showUI(__html__);

// Calls to "parent.postMessage" from within the HTML page will trigger this
// callback. The callback will be passed the "pluginMessage" property of the
// posted message.
figma.ui.resize(300, 850);

figma.on("selectionchange", () => {
  let thisSelection = figma.currentPage.selection[0];
  onSelectionChange(thisSelection);
});

figma.ui.onmessage = (msg) => {
  if (msg.type === "swap-theme") {
    ThemeSwap(figma.currentPage.selection[0]);
  } else if (msg.type === "color-checker") {
    ColorCheckTraverse(figma.currentPage.selection[0]);
  } else if (msg.type === "spacing-checker") {
    SpacingCheckTraverse(figma.currentPage.selection);
  } else if (msg.type === "padding-horizontal-slider") {
    PaddingHorizontalSlider(figma.currentPage.selection, msg);
  } else if (msg.type === "padding-vertical-slider") {
    PaddingVerticalSlider(figma.currentPage.selection, msg);
  } else if (msg.type === "item-spacing-slider") {
    ItemSpacing(figma.currentPage.selection, msg);
  } else if (msg.type === "force-auto-layout-horizontal") {
    ForceAutoLayoutHorizontal(figma.currentPage.selection);
  } else if (msg.type === "force-auto-layout-vertical") {
    ForceAutoLayoutVertical(figma.currentPage.selection);
  } else if (msg.type === "set-layout-grid") {
    SetLayoutGrid(figma.currentPage.selection, msg);
  }

  // Make sure to close the plugin when you're done. Otherwise the plugin will
  // keep running, which shows the cancel button at the bottom of the screen.
  // figma.closePlugin();
};
