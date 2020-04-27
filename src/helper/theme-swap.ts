import { DarkUiColors, LightUiColors } from "../theme-styles/colors";
import { DarkUiEffects, LightUiEffects } from "../theme-styles/effects";

// Light Mode
const LightThemeTraverse = async (node) => {
  // do nothing below
  if ("children" in node) {
    for (const child of node.children) {
      LightThemeTraverse(child);
    }
  } else {
    // do nothing
  }

  function replaceNodeWithLightPalette(val) {
    // Fills
    let nodeFillStyleId = val.fillStyleId;
    let nodeFillPaintStyle = figma.getStyleById(nodeFillStyleId);
    let nodeFillName = nodeFillPaintStyle.name;
    let lightNodeFillName = nodeFillName.replace("dark ui / ", "light ui / ");

    for (const item of LightUiColors) {
      if (item.name === lightNodeFillName) {
        figma.importStyleByKeyAsync(item.styleKey).then((resp) => {
          node.fillStyleId = resp.id;
        });
      } else {
        // Do nothing
      }
    }

    // Strokes
    let nodeStrokeStyleId = val.strokeStyleId;
    let nodeStrokePaintStyle = figma.getStyleById(nodeStrokeStyleId);
    let nodeStrokeName = nodeStrokePaintStyle.name;
    let lightNodeStrokeName = nodeStrokeName.replace(
      "dark ui / ",
      "light ui / "
    );

    for (const item of LightUiColors) {
      if (item.name === lightNodeStrokeName) {
        figma.importStyleByKeyAsync(item.styleKey).then((resp) => {
          node.strokeStyleId = resp.id;
        });
      } else {
        // Do nothing
      }
    }

    // Effects
    let nodeEffectStyleId = val.effectStyleId;
    console.log(nodeEffectStyleId);

    let nodeEffectStyle = figma.getStyleById(nodeEffectStyleId);
    let nodeEffectName = nodeEffectStyle.name;
    let lightNodeEffectName = nodeEffectName.replace(
      "dark ui / ",
      "light ui / "
    );

    for (const item of LightUiEffects) {
      if (item.name === lightNodeEffectName) {
        figma.importStyleByKeyAsync(item.styleKey).then((resp) => {
          node.effectStyleId = resp.id;
        });
      } else {
        // Do nothing
      }
    }
  }
  // Replace nodes
  replaceNodeWithLightPalette(node);
};

// Dark Mode
const DarkThemeTraverse = async (node) => {
  // GetAllLocalEffectStyles();
  // GetAllLocalPaintStyles()
  // do nothing below
  if ("children" in node) {
    for (const child of node.children) {
      DarkThemeTraverse(child);
    }
  } else {
    // do nothing
  }
  
  function replaceNodeWithDarkPalette(val) {
    // Fills
    let nodeFillStyleId = val.fillStyleId;
    let nodeFillPaintStyle = figma.getStyleById(nodeFillStyleId);
    let nodeFillName = nodeFillPaintStyle.name;
    let darkNodeFillName = nodeFillName.replace("light ui / ", "dark ui / ");

    for (const item of DarkUiColors) {
      if (item.name === darkNodeFillName) {
        figma.importStyleByKeyAsync(item.styleKey).then((resp) => {
          node.fillStyleId = resp.id;
        });
      } else {
        // Do nothing
      }
    }

    // Strokes
    let nodeStrokeStyleId = val.strokeStyleId;
    let nodeStrokePaintStyle = figma.getStyleById(nodeStrokeStyleId);
    let nodeStrokeName = nodeStrokePaintStyle.name;
    let darkNodeStrokeName = nodeStrokeName.replace(
      "light ui / ",
      "dark ui / "
    );

    for (const item of DarkUiColors) {
      if (item.name === darkNodeStrokeName) {
        figma.importStyleByKeyAsync(item.styleKey).then((resp) => {
          node.strokeStyleId = resp.id;
        });
      } else {
        // Do nothing
      }
    }

    // Effects
    let nodeEffectStyleId = val.effectStyleId;
    console.log(nodeEffectStyleId);

    let nodeEffectStyle = figma.getStyleById(nodeEffectStyleId);
    let nodeEffectName = nodeEffectStyle.name;
    let DarkNodeEffectName = nodeEffectName.replace(
      "light ui / ",
      "dark ui / "
    );

    for (const item of DarkUiEffects) {
      if (item.name === DarkNodeEffectName) {
        figma.importStyleByKeyAsync(item.styleKey).then((resp) => {
          node.effectStyleId = resp.id;
        });
      } else {
        // Do nothing
      }
    }
  }
  // Replace nodes
  replaceNodeWithDarkPalette(node);
};

export { LightThemeTraverse, DarkThemeTraverse };

// Run this in tokens file
const GetAllLocalPaintStyles = () => {
  function clone(val) {
    return JSON.parse(JSON.stringify(val))
  }
  let allPaintStyles = figma.getLocalPaintStyles();
  // console.log(allPaintStyles);
  let allStylesArray = [];
  for (const paintStyle of allPaintStyles) {
    
    let color = clone(paintStyle.paints[0])
    // console.log(color);
    
    let colorRGB = color.color
    
    
    let rgbToInt = (value) => { return Math.ceil(value * 255) }
    
    let rgba = {
      r: rgbToInt(colorRGB.r),
      g: rgbToInt(colorRGB.g),
      b: rgbToInt(colorRGB.b),
      a: color.opacity
    }
    

    
    allStylesArray.push({ name: paintStyle.name, styleKey: paintStyle.key, rgba: rgba });

    console.log(allStylesArray);
    

    
    

  }
  // console.log(allStylesArray);
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
