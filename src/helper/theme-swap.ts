import { ColorStyleId } from "../theme-styles/colors";
import { EffectsStyleId } from "../theme-styles/effects";

const LightThemeTraverse = async (node) => {
  let darkUIBody = await ColorStyleId.darkUI.body;
  let darkUISurface = await ColorStyleId.darkUI.surface;
  let darkUIKeyline = await ColorStyleId.darkUI.keyline;
  let darkUIKeylineAlternative = await ColorStyleId.darkUI.keylineAlternative;
  let darkUIAccent = await ColorStyleId.darkUI.accent;
  let darkUIError = await ColorStyleId.darkUI.error;
  let darkUIOnAccent = await ColorStyleId.darkUI.onAccent;
  let darkUIOnSurfaceHigh = await ColorStyleId.darkUI.onSurfaceHigh;
  let darkUIOnSurfaceMedium = await ColorStyleId.darkUI.onSurfaceMedium;
  let darkUIOnSurfaceDisabled = await ColorStyleId.darkUI.onSurfaceDisabled;

  let darkUIShadowLow = await EffectsStyleId.darkUI.shadowLow;
  let darkUIShadowHigh = await EffectsStyleId.darkUI.shadowHigh;
  let darkUIBorderTop = await EffectsStyleId.darkUI.borderTop;
  let darkUIBorderRight = await EffectsStyleId.darkUI.borderRight;
  let darkUIBorderBottom = await EffectsStyleId.darkUI.borderBottom;
  let darkUIBorderLeft = await EffectsStyleId.darkUI.borderLeft;
  let darkUIBorderTopBottom = await EffectsStyleId.darkUI.borderTopBottom;
  let darkUIBorderLeftRight = await EffectsStyleId.darkUI.borderLeftRight;

  // Strokes
  switch (node.strokeStyleId) {
    case darkUIAccent.id:
      ColorStyleId.lightUI.accent.then((resp) => {
        node.strokeStyleId = resp.id;
      });
      break;
    case darkUIError.id:
      ColorStyleId.lightUI.error.then((resp) => {
        node.strokeStyleId = resp.id;
      });
      break;
    case darkUIKeyline.id:
      ColorStyleId.lightUI.keyline.then((resp) => {
        node.strokeStyleId = resp.id;
      });
      break;
    case darkUIKeylineAlternative.id:
      ColorStyleId.lightUI.keylineAlternative.then((resp) => {
        node.strokeStyleId = resp.id;
      });
      break;
    case darkUIAccent.id:
      ColorStyleId.lightUI.accent.then((resp) => {
        node.strokeStyleId = resp.id;
      });
      break;
  }

  // Fills
  switch (node.fillStyleId) {
    case darkUIBody.id:
      ColorStyleId.lightUI.body.then((resp) => {
        node.fillStyleId = resp.id;
      });
      break;
    case darkUISurface.id:
      ColorStyleId.lightUI.surface.then((resp) => {
        node.fillStyleId = resp.id;
      });
      break;
    case darkUIKeyline.id:
      ColorStyleId.lightUI.keyline.then((resp) => {
        node.fillStyleId = resp.id;
      });
      break;
    case darkUIKeylineAlternative.id:
      ColorStyleId.lightUI.keylineAlternative.then((resp) => {
        node.fillStyleId = resp.id;
      });
      break;
    case darkUIAccent.id:
      ColorStyleId.lightUI.accent.then((resp) => {
        node.fillStyleId = resp.id;
      });
      break;
    case darkUIError.id:
      ColorStyleId.lightUI.error.then((resp) => {
        node.fillStyleId = resp.id;
      });
      break;
    case darkUIOnAccent.id:
      ColorStyleId.lightUI.onAccent.then((resp) => {
        node.fillStyleId = resp.id;
      });
      break;
    case darkUIOnSurfaceHigh.id:
      ColorStyleId.lightUI.onSurfaceHigh.then((resp) => {
        node.fillStyleId = resp.id;
      });
      break;
    case darkUIOnSurfaceMedium.id:
      ColorStyleId.lightUI.onSurfaceMedium.then((resp) => {
        node.fillStyleId = resp.id;
      });
      break;
    case darkUIOnSurfaceDisabled.id:
      ColorStyleId.lightUI.onSurfaceDisabled.then((resp) => {
        node.fillStyleId = resp.id;
      });
      break;
  }

  // Effects
  switch (node.effectStyleId) {
    case darkUIShadowLow.id:
      EffectsStyleId.lightUI.shadowLow.then((resp) => {
        node.effectStyleId = resp.id;
      });
      break;
    case darkUIShadowHigh.id:
      EffectsStyleId.lightUI.shadowHigh.then((resp) => {
        node.effectStyleId = resp.id;
      });
      break;
    case darkUIBorderTop.id:
      EffectsStyleId.lightUI.borderTop.then((resp) => {
        node.effectStyleId = resp.id;
      });
      break;
    case darkUIBorderRight.id:
      EffectsStyleId.lightUI.borderRight.then((resp) => {
        node.effectStyleId = resp.id;
      });
      break;
    case darkUIBorderBottom.id:
      EffectsStyleId.lightUI.borderBottom.then((resp) => {
        node.effectStyleId = resp.id;
      });
      break;
    case darkUIBorderLeft.id:
      EffectsStyleId.lightUI.borderLeft.then((resp) => {
        node.effectStyleId = resp.id;
      });
      break;
    case darkUIBorderTopBottom.id:
      EffectsStyleId.lightUI.borderTopBottom.then((resp) => {
        node.effectStyleId = resp.id;
      });
      break;
    case darkUIBorderLeftRight.id:
      EffectsStyleId.lightUI.borderLeftRight.then((resp) => {
        node.effectStyleId = resp.id;
      });
      break;
  }

  // do nothing below
  if ("children" in node) {
    for (const child of node.children) {
      LightThemeTraverse(child);
    }
  } else {
    // do nothing
  }
};

const DarkThemeTraverse = async (node) => {
  let lightUIBody = await ColorStyleId.lightUI.body;
  let lightUISurface = await ColorStyleId.lightUI.surface;
  let lightUIKeyline = await ColorStyleId.lightUI.keyline;
  let lightUIKeylineAlternative = await ColorStyleId.lightUI.keylineAlternative;
  let lightUIAccent = await ColorStyleId.lightUI.accent;
  let lightUIError = await ColorStyleId.lightUI.error;
  let lightUIOnAccent = await ColorStyleId.lightUI.onAccent;
  let lightUIOnSurfaceHigh = await ColorStyleId.lightUI.onSurfaceHigh;
  let lightUIOnSurfaceMedium = await ColorStyleId.lightUI.onSurfaceMedium;
  let lightUIOnSurfaceDisabled = await ColorStyleId.lightUI.onSurfaceDisabled;
  let lightUIShadowLow = await EffectsStyleId.lightUI.shadowLow;
  let lightUIShadowHigh = await EffectsStyleId.lightUI.shadowHigh;
  let lightUIBorderTop = await EffectsStyleId.lightUI.borderTop;
  let lightUIBorderRight = await EffectsStyleId.lightUI.borderRight;
  let lightUIBorderBottom = await EffectsStyleId.lightUI.borderBottom;
  let lightUIBorderLeft = await EffectsStyleId.lightUI.borderLeft;
  let lightUIBorderTopBottom = await EffectsStyleId.lightUI.borderTopBottom;
  let lightUIBorderLeftRight = await EffectsStyleId.lightUI.borderLeftRight;

  // Stroke
  switch (node.strokeStyleId) {
    case lightUIAccent.id:
      ColorStyleId.darkUI.accent.then((resp) => {
        node.strokeStyleId = resp.id;
      });
      break;
    case lightUIError.id:
      ColorStyleId.darkUI.error.then((resp) => {
        node.strokeStyleId = resp.id;
      });
      break;
    case lightUIKeyline.id:
      ColorStyleId.darkUI.keyline.then((resp) => {
        node.strokeStyleId = resp.id;
      });
      break;
    case lightUIKeylineAlternative.id:
      ColorStyleId.darkUI.keylineAlternative.then((resp) => {
        node.strokeStyleId = resp.id;
      });
      break;
    case lightUIAccent.id:
      ColorStyleId.darkUI.accent.then((resp) => {
        node.strokeStyleId = resp.id;
      });
      break;
  }

  // Fill
  switch (node.fillStyleId) {
    case lightUIBody.id:
      ColorStyleId.darkUI.body.then((resp) => {
        node.fillStyleId = resp.id;
      });
      break;
    case lightUISurface.id:
      ColorStyleId.darkUI.surface.then((resp) => {
        node.fillStyleId = resp.id;
      });
      break;
    case lightUIKeyline.id:
      ColorStyleId.darkUI.keyline.then((resp) => {
        node.fillStyleId = resp.id;
      });
      break;

    case lightUIKeylineAlternative.id:
      ColorStyleId.darkUI.keylineAlternative.then((resp) => {
        node.fillStyleId = resp.id;
      });
      break;
    case lightUIAccent.id:
      ColorStyleId.darkUI.accent.then((resp) => {
        node.fillStyleId = resp.id;
      });
      break;
    case lightUIError.id:
      ColorStyleId.darkUI.error.then((resp) => {
        node.fillStyleId = resp.id;
      });
      break;
    case lightUIOnAccent.id:
      ColorStyleId.darkUI.onAccent.then((resp) => {
        node.fillStyleId = resp.id;
      });
      break;
    case lightUIOnSurfaceHigh.id:
      ColorStyleId.darkUI.onSurfaceHigh.then((resp) => {
        node.fillStyleId = resp.id;
      });
      break;
    case lightUIOnSurfaceMedium.id:
      ColorStyleId.darkUI.onSurfaceMedium.then((resp) => {
        node.fillStyleId = resp.id;
      });
      break;
    case lightUIOnSurfaceDisabled.id:
      ColorStyleId.darkUI.onSurfaceDisabled.then((resp) => {
        node.fillStyleId = resp.id;
      });
      break;
  }

  // Effects
  switch (node.effectStyleId) {
    case lightUIShadowLow.id:
      EffectsStyleId.darkUI.shadowLow.then((resp) => {
        node.effectStyleId = resp.id;
      });
      break;
    case lightUIShadowHigh.id:
      EffectsStyleId.darkUI.shadowHigh.then((resp) => {
        node.effectStyleId = resp.id;
      });
      break;
    case lightUIBorderTop.id:
      EffectsStyleId.darkUI.borderTop.then((resp) => {
        node.effectStyleId = resp.id;
      });
      break;
    case lightUIBorderRight.id:
      EffectsStyleId.darkUI.borderRight.then((resp) => {
        node.effectStyleId = resp.id;
      });
      break;
    case lightUIBorderBottom.id:
      EffectsStyleId.darkUI.borderBottom.then((resp) => {
        node.effectStyleId = resp.id;
      });
      break;
    case lightUIBorderLeft.id:
      EffectsStyleId.darkUI.borderLeft.then((resp) => {
        node.effectStyleId = resp.id;
      });
      break;
    case lightUIBorderTopBottom.id:
      EffectsStyleId.darkUI.borderTopBottom.then((resp) => {
        node.effectStyleId = resp.id;
      });
      break;
    case lightUIBorderLeftRight.id:
      EffectsStyleId.darkUI.borderLeftRight.then((resp) => {
        node.effectStyleId = resp.id;
      });
      break;
  }

  // do nothing below
  if ("children" in node) {
    for (const child of node.children) {
      DarkThemeTraverse(child);
    }
  } else {
    // do nothing
  }
};

export { LightThemeTraverse, DarkThemeTraverse };
