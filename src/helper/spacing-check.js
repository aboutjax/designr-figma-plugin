const SpacingCheckTraverse = (nodes) => {
    for (const node of nodes) {
        let name = node.name;
        let paddingAllRegex = /\b(?:pa-xxs|pa-xs|pa-s|pa-m|pa-l|pa-xl|pa-xxl|pa-none)\b/g;
        let paddingHorizontalRegex = /\b(?:ph-xxs|ph-xs|ph-s|ph-m|ph-l|ph-xl|ph-xxl|ph-none)\b/g;
        let paddingVerticalRegex = /\b(?:pv-xxs|pv-xs|pv-s|pv-m|pv-l|pv-xl|pv-xxl|pv-none)\b/g;
        let itemSpacingAllRegex = /\b(?:sp-xxs|sp-xs|sp-s|sp-m|sp-l|sp-xl|sp-xxl|sp-none)\b/g;
        let autolayoutRegex = /\b(?:vertical|horizontal)\b/g;
        let matchPaddingAll = name.match(paddingAllRegex);
        let matchPaddingHorizontal = name.match(paddingHorizontalRegex);
        let matchPaddingVertical = name.match(paddingVerticalRegex);
        let matchItemSpacing = name.match(itemSpacingAllRegex);
        let matchAutoLayoutDirection = name.match(autolayoutRegex);
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
                case "sp-none":
                    node.itemSpacing = 0;
                    break;
                case "sp-xxs":
                    node.itemSpacing = 4;
                    break;
                case "sp-xs":
                    node.itemSpacing = 8;
                    break;
                case "sp-s":
                    node.itemSpacing = 16;
                    break;
                case "sp-m":
                    node.itemSpacing = 24;
                    break;
                case "sp-l":
                    node.itemSpacing = 32;
                    break;
                case "sp-xl":
                    node.itemSpacing = 40;
                    break;
                case "sp-xxl":
                    node.itemSpacing = 48;
                    break;
            }
        }
        if (matchPaddingAll == null) {
            // console.log("no");
        }
        else {
            console.log("has padding all");
            switch (matchPaddingAll[0]) {
                case "pa-none":
                    node.horizontalPadding = 0;
                    node.verticalPadding = 0;
                    break;
                case "pa-xxs":
                    node.horizontalPadding = 4;
                    node.verticalPadding = 4;
                    break;
                case "pa-xs":
                    node.horizontalPadding = 8;
                    node.verticalPadding = 8;
                    break;
                case "pa-s":
                    node.horizontalPadding = 16;
                    node.verticalPadding = 16;
                    break;
                case "pa-m":
                    node.horizontalPadding = 24;
                    node.verticalPadding = 24;
                    break;
                case "pa-l":
                    node.horizontalPadding = 32;
                    node.verticalPadding = 32;
                    break;
                case "pa-xl":
                    node.horizontalPadding = 40;
                    node.verticalPadding = 40;
                    break;
                case "pa-xxl":
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
                case "ph-xxs":
                    node.horizontalPadding = 4;
                    break;
                case "ph-xs":
                    node.horizontalPadding = 8;
                    break;
                case "ph-s":
                    node.horizontalPadding = 16;
                    break;
                case "ph-m":
                    node.horizontalPadding = 24;
                    break;
                case "ph-l":
                    node.horizontalPadding = 32;
                    break;
                case "ph-xl":
                    node.horizontalPadding = 40;
                    break;
                case "ph-xxl":
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
                case "pv-xxs":
                    node.verticalPadding = 4;
                    break;
                case "pv-xs":
                    node.verticalPadding = 8;
                    break;
                case "pv-s":
                    node.verticalPadding = 16;
                    break;
                case "pv-m":
                    node.verticalPadding = 24;
                    break;
                case "pv-l":
                    node.verticalPadding = 32;
                    break;
                case "pv-xl":
                    node.verticalPadding = 40;
                    break;
                case "pv-xxl":
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
export { SpacingCheckTraverse };
