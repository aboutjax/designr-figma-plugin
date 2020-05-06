import {
  paddingHorizontal,
  paddingVertical,
  baselineGrids,
  getMaxWidthGrids,
  maxWidthGrids,
  columnGrids,
} from "../theme-styles/LayoutGrids";

const SetLayoutGrid = (nodes, msg) => {
  console.log(msg.layoutGridOptions);

  for (const node of nodes) {
    // node.layoutGrids = [];

    const horizontalPaddingSliderValue = msg.layoutGridOptions[0].value;
    const verticalPaddingSliderValue = msg.layoutGridOptions[1].value;
    const showBaselineRows = msg.layoutGridOptions[2].value;
    const showMaxWidth = msg.layoutGridOptions[3].value;
    const showColumns = msg.layoutGridOptions[4].value;

    let allGrids = [];

    let spacingHorizontal = 0;
    let spacingVertical = 0;

    switch (horizontalPaddingSliderValue) {
      default:
        spacingHorizontal = 0;
        break;
      case "0":
        spacingHorizontal = 0;
        break;
      case "1":
        spacingHorizontal = 4;
        break;
      case "2":
        spacingHorizontal = 8;
        break;
      case "3":
        spacingHorizontal = 16;
        break;
      case "4":
        spacingHorizontal = 24;
        break;
      case "5":
        spacingHorizontal = 32;
        break;
      case "6":
        spacingHorizontal = 40;
        break;
      case "7":
        spacingHorizontal = 48;
        break;
    }

    switch (verticalPaddingSliderValue) {
      default:
        spacingVertical = 0;
        break;
      case "0":
        spacingVertical = 0;
        break;
      case "1":
        spacingVertical = 4;
        break;
      case "2":
        spacingVertical = 8;
        break;
      case "3":
        spacingVertical = 16;
        break;
      case "4":
        spacingVertical = 24;
        break;
      case "5":
        spacingVertical = 32;
        break;
      case "6":
        spacingVertical = 40;
        break;
      case "7":
        spacingVertical = 48;
        break;
    }

    paddingHorizontal(spacingHorizontal).then((val) => {
      if (val.length == 0) {
        // do nothing
      } else {
        for (const grid of val) {
          allGrids.push(grid);
          // console.log(allGrids);
          node.layoutGrids = allGrids;
        }
      }
    });

    paddingVertical(spacingVertical).then((val) => {
      if (val.length == 0) {
        // do nothing
      } else {
        for (const grid of val) {
          allGrids.push(grid);
          // console.log(allGrids);
          node.layoutGrids = allGrids;
        }
      }
    });

    if (showMaxWidth) {
      for (const grid of maxWidthGrids) {
        console.log(grid);

        allGrids.push(grid);

        node.layoutGrids = allGrids;
      }
    } else {
      node.layoutGrids = allGrids;
    }

    if (showColumns) {
      for (const grid of columnGrids) {
        console.log(grid);

        allGrids.push(grid);

        node.layoutGrids = allGrids;
      }
    } else {
      node.layoutGrids = allGrids;
    }

    if (showBaselineRows) {
      // console.log("show");
      allGrids.push(baselineGrids);
      node.layoutGrids = allGrids;
      // console.log(allGrids);
    } else {
      node.layoutGrids = allGrids;
      // console.log(allGrids);
    }
  }
};

export { SetLayoutGrid };
