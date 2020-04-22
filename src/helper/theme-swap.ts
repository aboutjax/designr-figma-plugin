import { ColorStyleId } from "../theme-styles/colors";
import { EffectsStyleId } from "../theme-styles/effects";

const LightThemeTraverse = async (node) => {
  let darkUIBackgroundDefault = await ColorStyleId.darkUI.backgroundDefault;
  let darkUIBackgroundSurface = await ColorStyleId.darkUI.backgroundSurface;
  let darkUIDivider = await ColorStyleId.darkUI.divider;
  let darkUIPrimary = await ColorStyleId.darkUI.primary;
  let darkUIPrimaryHover = await ColorStyleId.darkUI.primaryHover;
  let darkUIDanger = await ColorStyleId.darkUI.danger;
  let darkUISuccess = await ColorStyleId.darkUI.success;
  let darkUIWarning = await ColorStyleId.darkUI.warning;
  let darkUIOnPrimary = await ColorStyleId.darkUI.onPrimary;
  let darkUIOnDanger = await ColorStyleId.darkUI.onDanger;
  let darkUIOnSuccess = await ColorStyleId.darkUI.onSuccess;
  let darkUIOnWarning = await ColorStyleId.darkUI.onWarning;
  let darkUIOnBackgroundHigh = await ColorStyleId.darkUI.onBackgroundHigh;
  let darkUIOnBackgroundMedium = await ColorStyleId.darkUI.onBackgroundMedium;
  let darkUIOnBackgroundDisabled = await ColorStyleId.darkUI
    .onBackgroundDisabled;

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
    case darkUIDivider.id:
      ColorStyleId.lightUI.divider.then((resp) => {
        node.strokeStyleId = resp.id;
      });
      break;
    case darkUIPrimary.id:
      ColorStyleId.lightUI.primary.then((resp) => {
        node.strokeStyleId = resp.id;
      });
      break;
    case darkUIDanger.id:
      ColorStyleId.lightUI.danger.then((resp) => {
        node.strokeStyleId = resp.id;
      });
      break;
    case darkUISuccess.id:
      ColorStyleId.lightUI.success.then((resp) => {
        node.strokeStyleId = resp.id;
      });
      break;
    case darkUIWarning.id:
      ColorStyleId.lightUI.warning.then((resp) => {
        node.strokeStyleId = resp.id;
      });
      break;
    case darkUIOnBackgroundHigh.id:
      ColorStyleId.lightUI.onBackgroundHigh.then((resp) => {
        node.strokeStyleId = resp.id;
      });
      break;
    case darkUIOnBackgroundMedium.id:
      ColorStyleId.lightUI.onBackgroundMedium.then((resp) => {
        node.strokeStyleId = resp.id;
      });
      break;
    case darkUIOnBackgroundDisabled.id:
      ColorStyleId.lightUI.onBackgroundDisabled.then((resp) => {
        node.strokeStyleId = resp.id;
      });
      break;
    case darkUIOnWarning.id:
      ColorStyleId.lightUI.onWarning.then((resp) => {
        node.strokeStyleId = resp.id;
      });
      break;
  }

  // Fills
  switch (node.fillStyleId) {
    case darkUIBackgroundDefault.id:
      ColorStyleId.lightUI.backgroundDefault.then((resp) => {
        node.fillStyleId = resp.id;
      });
      break;
    case darkUIBackgroundSurface.id:
      ColorStyleId.lightUI.backgroundSurface.then((resp) => {
        node.fillStyleId = resp.id;
      });
      break;
    case darkUIDivider.id:
      ColorStyleId.lightUI.divider.then((resp) => {
        node.fillStyleId = resp.id;
      });
      break;
    case darkUIPrimary.id:
      ColorStyleId.lightUI.primary.then((resp) => {
        node.fillStyleId = resp.id;
      });
      break;
    case darkUIPrimaryHover.id:
      ColorStyleId.lightUI.primaryHover.then((resp) => {
        node.fillStyleId = resp.id;
      });
      break;
    case darkUIDanger.id:
      ColorStyleId.lightUI.danger.then((resp) => {
        node.fillStyleId = resp.id;
      });
      break;
    case darkUISuccess.id:
      ColorStyleId.lightUI.success.then((resp) => {
        node.fillStyleId = resp.id;
      });
      break;
    case darkUIWarning.id:
      ColorStyleId.lightUI.warning.then((resp) => {
        node.fillStyleId = resp.id;
      });
      break;
    case darkUIOnPrimary.id:
      ColorStyleId.lightUI.onPrimary.then((resp) => {
        node.fillStyleId = resp.id;
      });
      break;
    case darkUIOnDanger.id:
      ColorStyleId.lightUI.onDanger.then((resp) => {
        node.fillStyleId = resp.id;
      });
      break;
    case darkUIOnSuccess.id:
      ColorStyleId.lightUI.onSuccess.then((resp) => {
        node.fillStyleId = resp.id;
      });
      break;
    case darkUIOnWarning.id:
      ColorStyleId.lightUI.onWarning.then((resp) => {
        node.fillStyleId = resp.id;
      });
      break;
    case darkUIOnBackgroundHigh.id:
      ColorStyleId.lightUI.onBackgroundHigh.then((resp) => {
        node.fillStyleId = resp.id;
      });
      break;
    case darkUIOnBackgroundMedium.id:
      ColorStyleId.lightUI.onBackgroundMedium.then((resp) => {
        node.fillStyleId = resp.id;
      });
      break;
    case darkUIOnBackgroundDisabled.id:
      ColorStyleId.lightUI.onBackgroundDisabled.then((resp) => {
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
  let lightUIBackgroundDefault = await ColorStyleId.lightUI.backgroundDefault;
  let lightUIBackgroundSurface = await ColorStyleId.lightUI.backgroundSurface;
  let lightUIDivider = await ColorStyleId.lightUI.divider;
  let lightUIPrimary = await ColorStyleId.lightUI.primary;
  let lightUIPrimaryHover = await ColorStyleId.lightUI.primaryHover;
  let lightUIDanger = await ColorStyleId.lightUI.danger;
  let lightUISuccess = await ColorStyleId.lightUI.success;
  let lightUIWarning = await ColorStyleId.lightUI.warning;
  let lightUIOnPrimary = await ColorStyleId.lightUI.onPrimary;
  let lightUIOnDanger = await ColorStyleId.lightUI.onDanger;
  let lightUIOnSuccess = await ColorStyleId.lightUI.onSuccess;
  let lightUIOnWarning = await ColorStyleId.lightUI.onWarning;
  let lightUIonBackgroundHigh = await ColorStyleId.lightUI.onBackgroundHigh;
  let lightUIOnBackgroundMedium = await ColorStyleId.lightUI.onBackgroundMedium;
  let lightUIOnBackgroundDisabled = await ColorStyleId.lightUI
    .onBackgroundDisabled;

  // Effects
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
    case lightUIDivider.id:
      ColorStyleId.darkUI.divider.then((resp) => {
        node.strokeStyleId = resp.id;
      });
      break;
    case lightUIPrimary.id:
      ColorStyleId.darkUI.primary.then((resp) => {
        node.strokeStyleId = resp.id;
      });
      break;
    case lightUIDanger.id:
      ColorStyleId.darkUI.danger.then((resp) => {
        node.strokeStyleId = resp.id;
      });
      break;
    case lightUIWarning.id:
      ColorStyleId.darkUI.warning.then((resp) => {
        node.strokeStyleId = resp.id;
      });
      break;
    case lightUISuccess.id:
      ColorStyleId.darkUI.success.then((resp) => {
        node.strokeStyleId = resp.id;
      });
      break;
    case lightUIonBackgroundHigh.id:
      ColorStyleId.darkUI.onBackgroundHigh.then((resp) => {
        node.strokeStyleId = resp.id;
      });
      break;
    case lightUIOnBackgroundMedium.id:
      ColorStyleId.darkUI.onBackgroundMedium.then((resp) => {
        node.strokeStyleId = resp.id;
      });
      break;
    case lightUIOnBackgroundDisabled.id:
      ColorStyleId.darkUI.onBackgroundDisabled.then((resp) => {
        node.strokeStyleId = resp.id;
      });
      break;
  }

  // Fill
  switch (node.fillStyleId) {
    case lightUIBackgroundDefault.id:
      ColorStyleId.darkUI.backgroundDefault.then((resp) => {
        node.fillStyleId = resp.id;
      });
      break;
    case lightUIBackgroundSurface.id:
      ColorStyleId.darkUI.backgroundSurface.then((resp) => {
        node.fillStyleId = resp.id;
      });
      break;
    case lightUIDivider.id:
      ColorStyleId.darkUI.divider.then((resp) => {
        node.fillStyleId = resp.id;
      });
      break;
    case lightUIPrimary.id:
      ColorStyleId.darkUI.primary.then((resp) => {
        node.fillStyleId = resp.id;
      });
      break;
    case lightUIPrimaryHover.id:
      ColorStyleId.darkUI.primaryHover.then((resp) => {
        node.fillStyleId = resp.id;
      });
      break;
    case lightUIDanger.id:
      ColorStyleId.darkUI.danger.then((resp) => {
        node.fillStyleId = resp.id;
      });
      break;
    case lightUISuccess.id:
      ColorStyleId.darkUI.success.then((resp) => {
        node.fillStyleId = resp.id;
      });
      break;
    case lightUIWarning.id:
      ColorStyleId.darkUI.warning.then((resp) => {
        node.fillStyleId = resp.id;
      });
      break;
    case lightUIOnPrimary.id:
      ColorStyleId.darkUI.onPrimary.then((resp) => {
        node.fillStyleId = resp.id;
      });
      break;
    case lightUIOnDanger.id:
      ColorStyleId.darkUI.onDanger.then((resp) => {
        node.fillStyleId = resp.id;
      });
      break;
    case lightUIOnSuccess.id:
      ColorStyleId.darkUI.onSuccess.then((resp) => {
        node.fillStyleId = resp.id;
      });
      break;
    case lightUIOnWarning.id:
      ColorStyleId.darkUI.onWarning.then((resp) => {
        node.fillStyleId = resp.id;
      });
      break;
    case lightUIonBackgroundHigh.id:
      ColorStyleId.darkUI.onBackgroundHigh.then((resp) => {
        node.fillStyleId = resp.id;
      });
      break;
    case lightUIOnBackgroundMedium.id:
      ColorStyleId.darkUI.onBackgroundMedium.then((resp) => {
        node.fillStyleId = resp.id;
      });
      break;
    case lightUIOnBackgroundDisabled.id:
      ColorStyleId.darkUI.onBackgroundDisabled.then((resp) => {
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
