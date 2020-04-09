const SpacingDefault = (node) => {
  if (node) {
    if (node.type === "GROUP") {
      node.layoutAlign = "VERTICAL";
      node.verticalPadding = 24;
      node.horizontalPadding = 24;
      node.layoutMode = "NONE";
      if ("children" in node) {
        let group = node.children[0];
      }
    } else {
      let setAutoLayout = new Promise(function (resolve, reject) {
        // the function is executed automatically when the promise is constructed

        node.layoutMode = "VERTICAL";

        node.name = "vertical pa-m";
        node.verticalPadding = 24;
        node.horizontalPadding = 24;
        setTimeout(() => resolve("done"), 20);
      });

      setAutoLayout.then(() => {
        if ("children" in node) {
          node.children[0].layoutAlign = "STRETCH";
        }
        node.layoutMode = "NONE";
      });
    }
  }
};

export { SpacingDefault };
