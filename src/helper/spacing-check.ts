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
    } else {
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
    } else {
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
          node.itemSpacing = 12;
          break;
        case "sp-4":
          node.itemSpacing = 16;
          break;
        case "sp-5":
          node.itemSpacing = 24;
          break;
        case "sp-6":
          node.itemSpacing = 32;
          break;
        case "sp-7":
          node.itemSpacing = 40;
          break;
        case "sp-8":
          node.itemSpacing = 48;
          break;
      }
    }

    if (matchPaddingAll == null) {
      console.log("no");
    } else {
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
          node.horizontalPadding = 12;
          node.verticalPadding = 12;
          break;
        case "pa-4":
          node.horizontalPadding = 16;
          node.verticalPadding = 16;
          break;
        case "pa-5":
          node.horizontalPadding = 24;
          node.verticalPadding = 24;
          break;
        case "pa-6":
          node.horizontalPadding = 32;
          node.verticalPadding = 32;
          break;
        case "pa-7":
          node.horizontalPadding = 40;
          node.verticalPadding = 40;
          break;
        case "pa-8":
          node.horizontalPadding = 48;
          node.verticalPadding = 48;
          break;
      }
    }

    if (matchPaddingHorizontal == null) {
      // console.log("no");
    } else {
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
          node.horizontalPadding = 12;
          break;
        case "ph-4":
          node.horizontalPadding = 16;
          break;
        case "ph-5":
          node.horizontalPadding = 24;
          break;
        case "ph-6":
          node.horizontalPadding = 32;
          break;
        case "ph-7":
          node.horizontalPadding = 40;
          break;
        case "ph-8":
          node.horizontalPadding = 48;
          break;
      }
    }

    if (matchPaddingVertical == null) {
      // console.log("no");
    } else {
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
          node.verticalPadding = 12;
          break;
        case "pv-4":
          node.verticalPadding = 16;
          break;
        case "pv-5":
          node.verticalPadding = 24;
          break;
        case "pv-6":
          node.verticalPadding = 32;
          break;
        case "pv-7":
          node.verticalPadding = 40;
          break;
        case "pv-8":
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
