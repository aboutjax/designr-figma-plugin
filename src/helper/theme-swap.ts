import { DarkUiColors, LightUiColors } from "../theme-styles/colors";
import { DarkUiEffects, LightUiEffects } from "../theme-styles/effects";

// Fill
const swapFill = async (node) => {
  let nodeFillStyleId = node.fillStyleId;
  let nodeFillPaintStyle = figma.getStyleById(nodeFillStyleId);
  let nodeFillPaintName = nodeFillPaintStyle.name;
  let swappedNodeFillName = null;
  let nodeFillPaintIsLightMode = nodeFillPaintName.includes("light ui");

  if (nodeFillPaintIsLightMode) {
    swappedNodeFillName = nodeFillPaintName.replace(
      "light ui/",
      "dark ui/"
    );

    for (const item of DarkUiColors) {
      if (item.name === swappedNodeFillName) {
        figma.importStyleByKeyAsync(item.styleKey).then((resp) => {
          node.fillStyleId = resp.id;
        });
      }
    }
  } else {
    swappedNodeFillName = nodeFillPaintName.replace(
      "dark ui/",
      "light ui/"
    );

    for (const item of LightUiColors) {
      if (item.name === swappedNodeFillName) {
        figma.importStyleByKeyAsync(item.styleKey).then((resp) => {
          node.fillStyleId = resp.id;
        });
      }
    }
  }
};

// Strokes
const swapStroke = async (node) => {
  let nodeStrokeStyleId = node.strokeStyleId;
  let nodeStrokePaintStyle = figma.getStyleById(nodeStrokeStyleId);
  let nodeStrokePaintName = nodeStrokePaintStyle.name;
  let swappedNodeStrokeName = null;
  let nodeStrokePaintIsLightMode = nodeStrokePaintName.includes("light ui");

  console.log("Stroke: " + nodeStrokePaintName);

  if (nodeStrokePaintIsLightMode) {
    swappedNodeStrokeName = nodeStrokePaintName.replace(
      "light ui/",
      "dark ui/"
    );
    for (const item of DarkUiColors) {
      if (item.name === swappedNodeStrokeName) {
        figma.importStyleByKeyAsync(item.styleKey).then((resp) => {
          node.strokeStyleId = resp.id;
        });
      } else {
        // Do nothing
      }
    }
  } else {
    swappedNodeStrokeName = nodeStrokePaintName.replace(
      "dark ui/",
      "light ui/"
    );
    for (const item of LightUiColors) {
      if (item.name === swappedNodeStrokeName) {
        figma.importStyleByKeyAsync(item.styleKey).then((resp) => {
          node.strokeStyleId = resp.id;
        });
      } else {
        // Do nothing
      }
    }
  }
};

// Effects
const swapEffects = async (node) => {
  let nodeEffectStyleId = node.effectStyleId;
  let nodeEffectStyle = figma.getStyleById(nodeEffectStyleId);
  let nodeEffectStyleName = nodeEffectStyle.name;
  let swappedNodeEffectName = null;
  let nodeEffectStyleNameIsLight = nodeEffectStyleName.includes("light ui");
  console.log("Effect: " + nodeEffectStyleName);

  if (nodeEffectStyleNameIsLight) {
    swappedNodeEffectName = nodeEffectStyleName.replace(
      "light ui/",
      "dark ui/"
    );
    for (const item of DarkUiEffects) {
      if (item.name === swappedNodeEffectName) {
        figma.importStyleByKeyAsync(item.styleKey).then((resp) => {
          node.effectStyleId = resp.id;
        });
      } else {
        // do nothing
      }
    }
  } else {
    swappedNodeEffectName = nodeEffectStyleName.replace(
      "dark ui/",
      "light ui/"
    );
    for (const item of LightUiEffects) {
      if (item.name === swappedNodeEffectName) {
        figma.importStyleByKeyAsync(item.styleKey).then((resp) => {
          node.effectStyleId = resp.id;
        });
      } else {
        // Do nothing
      }
    }
  }
};

// Theme Swap
const ThemeSwap = async (node) => {
  GetAllLocalPaintStyles();
  // GetAllLocalEffectStyles();
  // do nothing below
  if ("children" in node) {
    for (const child of node.children) {
      if (child.locked) {
      } else {
        ThemeSwap(child);
      }
    }
  } else {
    // do nothing
  }
  swapFill(node);
  swapStroke(node);
  swapEffects(node);
};

export { ThemeSwap };

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
      // rgba: rgba,
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
