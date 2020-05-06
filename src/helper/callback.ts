const onSelectionChange = (node) => {
  if (node) {
    console.log(node);
    let horizontalPadding = node.horizontalPadding;
    let verticalPadding = node.verticalPadding;
    let itemSpacing = node.itemSpacing;
    let layoutMode = node.layoutMode;
    let type = node.type;
    let layoutGrids = node.layoutGrids;

    let obj = {
      horizontalPadding: horizontalPadding,
      verticalPadding: verticalPadding,
      itemSpacing: itemSpacing,
      layoutMode: layoutMode,
      type: type,
      layoutGrids: layoutGrids,
    };

    figma.ui.postMessage(obj);
  } else {
    // console.log("no");
    figma.ui.postMessage("nothing selected");
  }
};

export { onSelectionChange };
