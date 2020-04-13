var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { ColorStyleId } from "../theme-styles/colors";
import { EffectsStyleId } from "../theme-styles/effects";
const LightThemeTraverse = (node) => __awaiter(this, void 0, void 0, function* () {
    let darkUIBody = yield ColorStyleId.darkUI.body;
    let darkUISurface = yield ColorStyleId.darkUI.surface;
    let darkUIKeyline = yield ColorStyleId.darkUI.keyline;
    let darkUIKeylineAlternative = yield ColorStyleId.darkUI.keylineAlternative;
    let darkUIAccent = yield ColorStyleId.darkUI.accent;
    let darkUIError = yield ColorStyleId.darkUI.error;
    let darkUIOnAccent = yield ColorStyleId.darkUI.onAccent;
    let darkUIOnSurfaceHigh = yield ColorStyleId.darkUI.onSurfaceHigh;
    let darkUIOnSurfaceMedium = yield ColorStyleId.darkUI.onSurfaceMedium;
    let darkUIOnSurfaceDisabled = yield ColorStyleId.darkUI.onSurfaceDisabled;
    let darkUIShadowLow = yield EffectsStyleId.darkUI.shadowLow;
    let darkUIShadowHigh = yield EffectsStyleId.darkUI.shadowHigh;
    let darkUIBorderTop = yield EffectsStyleId.darkUI.borderTop;
    let darkUIBorderRight = yield EffectsStyleId.darkUI.borderRight;
    let darkUIBorderBottom = yield EffectsStyleId.darkUI.borderBottom;
    let darkUIBorderLeft = yield EffectsStyleId.darkUI.borderLeft;
    let darkUIBorderTopBottom = yield EffectsStyleId.darkUI.borderTopBottom;
    let darkUIBorderLeftRight = yield EffectsStyleId.darkUI.borderLeftRight;
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
    }
    else {
        // do nothing
    }
});
const DarkThemeTraverse = (node) => __awaiter(this, void 0, void 0, function* () {
    let lightUIBody = yield ColorStyleId.lightUI.body;
    let lightUISurface = yield ColorStyleId.lightUI.surface;
    let lightUIKeyline = yield ColorStyleId.lightUI.keyline;
    let lightUIKeylineAlternative = yield ColorStyleId.lightUI.keylineAlternative;
    let lightUIAccent = yield ColorStyleId.lightUI.accent;
    let lightUIError = yield ColorStyleId.lightUI.error;
    let lightUIOnAccent = yield ColorStyleId.lightUI.onAccent;
    let lightUIOnSurfaceHigh = yield ColorStyleId.lightUI.onSurfaceHigh;
    let lightUIOnSurfaceMedium = yield ColorStyleId.lightUI.onSurfaceMedium;
    let lightUIOnSurfaceDisabled = yield ColorStyleId.lightUI.onSurfaceDisabled;
    let lightUIShadowLow = yield EffectsStyleId.lightUI.shadowLow;
    let lightUIShadowHigh = yield EffectsStyleId.lightUI.shadowHigh;
    let lightUIBorderTop = yield EffectsStyleId.lightUI.borderTop;
    let lightUIBorderRight = yield EffectsStyleId.lightUI.borderRight;
    let lightUIBorderBottom = yield EffectsStyleId.lightUI.borderBottom;
    let lightUIBorderLeft = yield EffectsStyleId.lightUI.borderLeft;
    let lightUIBorderTopBottom = yield EffectsStyleId.lightUI.borderTopBottom;
    let lightUIBorderLeftRight = yield EffectsStyleId.lightUI.borderLeftRight;
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
    }
    else {
        // do nothing
    }
});
export { LightThemeTraverse, DarkThemeTraverse };
