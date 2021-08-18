import { DarkUiColors, LightUiColors } from "../theme-styles/colors";
import { DarkUiEffects, LightUiEffects } from "../theme-styles/effects";

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

      let filtered = allDarkTokens.find(
        (item) => item.name === swappedNodeFillName
      );

      node.fillStyleId = filtered.id;
    } else {
      swappedNodeFillName = nodeFillPaintName.replace("dark ui/", "light ui/");

      let filtered = allLightTokens.find(
        (item) => item.name === swappedNodeFillName
      );

      node.fillStyleId = filtered.id;
    }
  } else {
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
      swappedNodeStrokeName = nodeStrokePaintName.replace(
        "light ui/",
        "dark ui/"
      );

      let filtered = allDarkTokens.find(
        (item) => item.name === swappedNodeStrokeName
      );

      node.strokeStyleId = filtered.id;
    } else {
      swappedNodeStrokeName = nodeStrokePaintName.replace(
        "dark ui/",
        "light ui/"
      );

      let filtered = allLightTokens.find(
        (item) => item.name === swappedNodeStrokeName
      );

      node.strokeStyleId = filtered.id;
    }
  } else {
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
      swappedNodeEffectName = nodeEffectStyleName.replace(
        "light ui/",
        "dark ui/"
      );

      let filtered = allDarkEffects.find(
        (item) => item.name === swappedNodeEffectName
      );

      console.log(filtered);

      node.effectStyleId = filtered.id;
    } else {
      swappedNodeEffectName = nodeEffectStyleName.replace(
        "dark ui/",
        "light ui/"
      );

      let filtered = allLightEffects.find(
        (item) => item.name === swappedNodeEffectName
      );

      node.effectStyleId = filtered.id;
    }
  } else {
    return;
  }
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
        } else {
          Swap(child);
        }
      }
    } else {
      // do nothing
    }
  };

  Swap(node);

  // swapStroke(node);
  // swapEffects(node);
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

const fetchAllLightTokens = async () => {
  return Promise.all(
    LightUiColors.map((item) => figma.importStyleByKeyAsync(item.styleKey))
  );
};

const fetchAllLightEffects = async () => {
  return Promise.all(
    LightUiEffects.map((item) => figma.importStyleByKeyAsync(item.styleKey))
  );
};

const fetchAllDarkTokens = async () => {
  return Promise.all(
    DarkUiColors.map((item) => figma.importStyleByKeyAsync(item.styleKey))
  );
};

const fetchAllDarkEffects = async () => {
  return Promise.all(
    DarkUiEffects.map((item) => figma.importStyleByKeyAsync(item.styleKey))
  );
};
