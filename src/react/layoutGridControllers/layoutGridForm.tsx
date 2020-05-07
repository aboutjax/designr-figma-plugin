import * as React from "react";
import { useState } from "react";
import { Option } from "./sliderHorizontal";
import styled from "styled-components";
import * as _ from "lodash";

const LayoutGridForm = (props) => {
  const [layoutGridState, setLayoutGridState] = React.useState([
    { type: "horizontal", value: 0 },
    { type: "vertical", value: 0 },
    { type: "baselineGrid", value: false },
    { type: "maxWidth", value: false },
    { type: "columns", value: false },
  ]);

  const [
    selectedFrameLayoutGrids,
    setselectedFrameLayoutGrids,
  ] = React.useState(props.selectedLayoutGrids);

  const [paddingHorizontal, setPaddingHorizontal] = useState(0);
  const [paddingVertical, setPaddingVertical] = useState(0);
  const [baseline, setBaseline] = useState(false);
  const [maxWidth, setMaxWidth] = useState(false);
  const [columns, setColumns] = useState(false);

  React.useEffect(() => {
    // console.log(selectedFrameLayoutGrids);
    // checkSelectedFrame(props.selectedLayoutGrids);
    checkSelectedFrame();
  }, [props.selectedLayoutGrids]);

  let checkSelectedFrame = async () => {
    let grids = props.selectedLayoutGrids;

    // Horizontal Padding 1
    let isHorizontalPadding1 = (element) => {
      return element["pattern"] === "COLUMNS" && element["sectionSize"] === 4;
    };
    let hasHorizontalPadding1 = grids.some(isHorizontalPadding1);

    // Horizontal Padding 2
    let isHorizontalPadding2 = (element) => {
      return element["pattern"] === "COLUMNS" && element["sectionSize"] === 8;
    };
    let hasHorizontalPadding2 = grids.some(isHorizontalPadding2);

    // Horizontal Padding 3
    let isHorizontalPadding3 = (element) => {
      return element["pattern"] === "COLUMNS" && element["sectionSize"] === 16;
    };
    let hasHorizontalPadding3 = grids.some(isHorizontalPadding3);

    // Horizontal Padding 4
    let isHorizontalPadding4 = (element) => {
      return element["pattern"] === "COLUMNS" && element["sectionSize"] === 24;
    };
    let hasHorizontalPadding4 = grids.some(isHorizontalPadding4);

    // Horizontal Padding 5
    let isHorizontalPadding5 = (element) => {
      return element["pattern"] === "COLUMNS" && element["sectionSize"] === 32;
    };
    let hasHorizontalPadding5 = grids.some(isHorizontalPadding5);

    // Horizontal Padding 6
    let isHorizontalPadding6 = (element) => {
      return element["pattern"] === "COLUMNS" && element["sectionSize"] === 40;
    };
    let hasHorizontalPadding6 = grids.some(isHorizontalPadding6);

    // Horizontal Padding 7
    let isHorizontalPadding7 = (element) => {
      return element["pattern"] === "COLUMNS" && element["sectionSize"] === 48;
    };
    let hasHorizontalPadding7 = grids.some(isHorizontalPadding7);

    // Set States
    if (hasHorizontalPadding1) {
      setPaddingHorizontal(1);
    } else if (hasHorizontalPadding2) {
      setPaddingHorizontal(2);
    } else if (hasHorizontalPadding3) {
      setPaddingHorizontal(3);
    } else if (hasHorizontalPadding4) {
      setPaddingHorizontal(4);
    } else if (hasHorizontalPadding5) {
      setPaddingHorizontal(5);
    } else if (hasHorizontalPadding6) {
      setPaddingHorizontal(6);
    } else if (hasHorizontalPadding7) {
      setPaddingHorizontal(7);
    } else {
      setPaddingHorizontal(0);
    }

    // Vertical Padding 1
    let isVerticalPadding1 = (element) => {
      return element["pattern"] === "ROWS" && element["sectionSize"] === 4;
    };
    let hasVerticalPadding1 = grids.some(isVerticalPadding1);

    // Vertical Padding 2
    let isVerticalPadding2 = (element) => {
      return element["pattern"] === "ROWS" && element["sectionSize"] === 8;
    };
    let hasVerticalPadding2 = grids.some(isVerticalPadding2);

    // Vertical Padding 3
    let isVerticalPadding3 = (element) => {
      return element["pattern"] === "ROWS" && element["sectionSize"] === 16;
    };
    let hasVerticalPadding3 = grids.some(isVerticalPadding3);

    // Vertical Padding 4
    let isVerticalPadding4 = (element) => {
      return element["pattern"] === "ROWS" && element["sectionSize"] === 24;
    };
    let hasVerticalPadding4 = grids.some(isVerticalPadding4);

    // Vertical Padding 5
    let isVerticalPadding5 = (element) => {
      return element["pattern"] === "ROWS" && element["sectionSize"] === 32;
    };
    let hasVerticalPadding5 = grids.some(isVerticalPadding5);

    // Vertical Padding 6
    let isVerticalPadding6 = (element) => {
      return element["pattern"] === "ROWS" && element["sectionSize"] === 40;
    };
    let hasVerticalPadding6 = grids.some(isVerticalPadding6);

    // Vertical Padding 7
    let isVerticalPadding7 = (element) => {
      return element["pattern"] === "ROWS" && element["sectionSize"] === 48;
    };
    let hasVerticalPadding7 = grids.some(isVerticalPadding7);

    // Set States
    if (hasVerticalPadding1) {
      setPaddingVertical(1);
    } else if (hasVerticalPadding2) {
      setPaddingVertical(2);
    } else if (hasVerticalPadding3) {
      setPaddingVertical(3);
    } else if (hasVerticalPadding4) {
      setPaddingVertical(4);
    } else if (hasVerticalPadding5) {
      setPaddingVertical(5);
    } else if (hasVerticalPadding6) {
      setPaddingVertical(6);
    } else if (hasVerticalPadding7) {
      setPaddingVertical(7);
    } else {
      setPaddingVertical(0);
    }

    // Max Width
    let isMaxWidth = (element) => {
      return element["pattern"] === "COLUMNS" && element["gutterSize"] === 960;
    };
    let hasMaxWidth = grids.some(isMaxWidth);

    if (hasMaxWidth) {
      setMaxWidth(true);
    } else {
      setMaxWidth(false);
    }

    // Columns
    let isColumns = (element) => {
      return element["pattern"] === "COLUMNS" && element["count"] === 12;
    };
    let hasColumns = grids.some(isColumns);

    if (hasColumns) {
      setColumns(true);
    } else {
      setColumns(false);
    }
  };

  let handleHorizontalChange = (val) => {
    let targetValue = val.target.value;
    let newArray = layoutGridState.map((grid) => {
      if (grid.type === "horizontal") {
        grid.value = targetValue;
      } else {
        // Do nothing
      }
      return grid;
    });

    // Update states
    setLayoutGridState(newArray);
    setPaddingHorizontal(targetValue);

    // Send it up to update figma canvas
    props.onChange(newArray);
  };
  let handleVerticalChange = (val) => {
    let targetValue = val.target.value;
    let newArray = layoutGridState.map((grid) => {
      if (grid.type === "vertical") {
        grid.value = targetValue;
      } else {
        // Do nothing
      }
      return grid;
    });

    // Update state
    setLayoutGridState(newArray);
    setPaddingVertical(targetValue);

    // Send it up to update figma canvas
    props.onChange(newArray);
  };
  let handleBaselineChange = (val) => {
    let targetValue = val.target.checked;
    let newArray = layoutGridState.map((grid) => {
      if (grid.type === "baselineGrid") {
        grid.value = targetValue;
      } else {
        // Do nothing
      }
      return grid;
    });

    // Update state
    setLayoutGridState(newArray);

    // Send it up to update figma canvas
    props.onChange(newArray);
  };
  let handleMaxWidth = (val) => {
    let targetValue = val.target.checked;
    let newArray = layoutGridState.map((grid) => {
      if (grid.type === "maxWidth") {
        grid.value = targetValue;
      } else {
        // Do nothing
      }
      return grid;
    });

    // Update state
    setLayoutGridState(newArray);
    setMaxWidth(targetValue);

    // Send it up to update figma canvas
    props.onChange(newArray);
  };
  let handleColumns = (val) => {
    let targetValue = val.target.checked;
    let newArray = layoutGridState.map((grid) => {
      if (grid.type === "columns") {
        grid.value = targetValue;
      } else {
        // Do nothing
      }
      return grid;
    });

    // Update state
    setLayoutGridState(newArray);
    setColumns(targetValue);

    // Send it up to update figma canvas
    props.onChange(newArray);
  };

  let handleClearLayoutGrids = (val) => {
    props.onChange([
      { type: "horizontal", value: 0 },
      { type: "vertical", value: 0 },
      { type: "baselineGrid", value: false },
      { type: "maxWidth", value: false },
      { type: "columns", value: false },
    ]);
  };

  return (
    <div>
      <ClearLayoutGrid
        selectedLayoutGrids={props.selectedLayoutGrids}
        onChange={handleClearLayoutGrids}
      />
      <Option
        value={paddingHorizontal}
        type="horizontal"
        onChange={handleHorizontalChange}
      />
      <Option
        value={paddingVertical}
        type="vertical"
        onChange={handleVerticalChange}
      />
      {/* // Deprecated */}
      {/* <BasegridCheck onChange={handleBaselineChange} /> */}
      <MaxWidthCheck value={maxWidth} onChange={handleMaxWidth} />
      <ColumnsCheck value={columns} onChange={handleColumns} />
    </div>
  );
};

function BasegridCheck(props) {
  return (
    <div>
      <h4 className="tiny-header">Baseline Grids</h4>
      <label htmlFor="baseline-grid" className="layout-grid-label">
        <span>Show baseline grids</span>
        <input
          className="layout-grid-input"
          type="checkbox"
          id="baseline-grid"
          name="layout-grid"
          onChange={props.onChange}
        />
      </label>
    </div>
  );
}

function MaxWidthCheck(props) {
  return (
    <div>
      <h4 className="tiny-header">Max Width</h4>
      <label htmlFor="max-width" className="layout-grid-label">
        <span>Show max width</span>
        <input
          className="layout-grid-input"
          type="checkbox"
          id="max-width"
          name="layout-grid"
          onChange={props.onChange}
          checked={props.value}
        />
      </label>
    </div>
  );
}

function ColumnsCheck(props) {
  return (
    <div>
      <h4 className="tiny-header">Columns</h4>
      <label htmlFor="columns" className="layout-grid-label">
        <span>Show columns</span>
        <input
          className="layout-grid-input"
          type="checkbox"
          id="columns"
          name="layout-grid"
          onChange={props.onChange}
          checked={props.value}
        />
      </label>
    </div>
  );
}

const ClearAllLink = styled.a`
  position: absolute;
  top: 16px;
  right: 16px;
`;

function ClearLayoutGrid(props) {
  return (
    <ClearAllLink href="#" onClick={props.onChange}>
      Clear All
    </ClearAllLink>
  );
}

export { LayoutGridForm };
