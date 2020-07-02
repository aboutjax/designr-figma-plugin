function clone(val) {
  return JSON.parse(JSON.stringify(val));
}

let phName = null;
let pvName = null;
let spName = null;

let nameProp = {
  horizontal: "ph-none",
  vertical: "pv-none",
  spacing: "sp-none",
};

function updateName(val, node) {
  if (val.type === "horizontal") {
    nameProp.horizontal = val.value;
  } else if (val.type === "vertical") {
    nameProp.vertical = val.value;
  } else if (val.type === "spacing") {
    nameProp.spacing = val.value;
  }

  node.name =
    nameProp.horizontal + " " + nameProp.vertical + " " + nameProp.spacing;
}

const PaddingHorizontalSlider = (nodes, msg) => {
  let sliderValue = msg.sliderValue;
  let spacing = null;
  let spacingName = null;

  switch (sliderValue) {
    default:
      spacing = 0;
      spacingName = "none";
      break;

    case "1":
      spacing = 4;
      spacingName = "1";
      break;
    case "2":
      spacing = 8;
      spacingName = "2";
      break;
    case "3":
      spacing = 12;
      spacingName = "3";
      break;
    case "4":
      spacing = 16;
      spacingName = "4";
      break;
    case "5":
      spacing = 24;
      spacingName = "5";
      break;
    case "6":
      spacing = 32;
      spacingName = "6";
      break;
    case "7":
      spacing = 40;
      spacingName = "7";
      break;
    case "8":
      spacing = 48;
      spacingName = "8";
      break;
  }

  for (const node of nodes) {
    if (node) {
      phName = "ph-" + spacingName;
      updateName({ type: "horizontal", value: phName }, node);

      if (node.type === "GROUP") {
        node.horizontalPadding = spacing;
        node.layoutMode = "NONE";
        if ("children" in node) {
          let group = node.children[0];
        }
      } else {
        let setAutoLayout = new Promise(function (resolve, reject) {
          node.horizontalPadding = spacing;
          setTimeout(() => resolve("done"), 5);
        });
      }
    }
  }
};

const PaddingVerticalSlider = (nodes, msg) => {
  let sliderValue = msg.sliderValue;
  let spacing = null;
  let spacingName = null;

  switch (sliderValue) {
    default:
      spacing = 0;
      spacingName = "none";
      break;

    case "1":
      spacing = 4;
      spacingName = "1";
      break;
    case "2":
      spacing = 8;
      spacingName = "2";
      break;
    case "3":
      spacing = 12;
      spacingName = "3";
      break;
    case "4":
      spacing = 16;
      spacingName = "4";
      break;
    case "5":
      spacing = 24;
      spacingName = "5";
      break;
    case "6":
      spacing = 32;
      spacingName = "6";
      break;
    case "7":
      spacing = 40;
      spacingName = "7";
      break;
    case "8":
      spacing = 48;
      spacingName = "8";
      break;
  }

  for (const node of nodes) {
    if (node) {
      pvName = "pv-" + spacingName;
      updateName({ type: "vertical", value: pvName }, node);
      if (node.type === "GROUP") {
        node.verticalPadding = spacing;
      } else {
        let setAutoLayout = new Promise(function (resolve, reject) {
          node.verticalPadding = spacing;
          setTimeout(() => resolve("done"), 5);
        });
      }
    }
  }
};

const ItemSpacing = (nodes, msg) => {
  let sliderValue = msg.sliderValue;
  let spacing = null;
  let spacingName = null;

  switch (sliderValue) {
    default:
      spacing = 0;
      spacingName = "none";
      break;

    case "1":
      spacing = 4;
      spacingName = "1";
      break;
    case "2":
      spacing = 8;
      spacingName = "2";
      break;
    case "3":
      spacing = 12;
      spacingName = "3";
      break;
    case "4":
      spacing = 12;
      spacingName = "4";
      break;
    case "5":
      spacing = 24;
      spacingName = "5";
      break;
    case "6":
      spacing = 32;
      spacingName = "6";
      break;
    case "7":
      spacing = 40;
      spacingName = "7";
      break;
    case "8":
      spacing = 48;
      spacingName = "8";
      break;
  }

  for (const node of nodes) {
    node.itemSpacing = spacing;
    spName = "sp-" + spacingName;
    updateName({ type: "spacing", value: spName }, node);
  }
};

export { PaddingHorizontalSlider, PaddingVerticalSlider, ItemSpacing };
