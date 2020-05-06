import * as React from "react";
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

  // React.useEffect(() => {
  //   setLayoutGridState([
  //     { type: "horizontal", value: "0" },
  //     { type: "vertical", value: "0" },
  //     { type: "baselineGrid", value: false },
  //     { type: "maxWidth", value: false },
  //     { type: "columns", value: false },
  //   ]);
  // }, []);

  // let layoutGridOptions = [
  //   { type: "horizontal", value: "0" },
  //   { type: "vertical", value: "0" },
  //   { type: "baselineGrid", value: false },
  //   { type: "maxWidth", value: false },
  //   { type: "columns", value: false },
  // ];
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

    // Update state
    setLayoutGridState(newArray);

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
        selectedLayoutGrids={props.selectedLayoutGrids}
        type="horizontal"
        onChange={handleHorizontalChange}
      />
      <Option
        selectedLayoutGrids={props.selectedLayoutGrids}
        type="vertical"
        onChange={handleVerticalChange}
      />
      <BasegridCheck
        selectedLayoutGrids={props.selectedLayoutGrids}
        onChange={handleBaselineChange}
      />
      <MaxWidthCheck
        selectedLayoutGrids={props.selectedLayoutGrids}
        onChange={handleMaxWidth}
      />
      <ColumnsCheck
        selectedLayoutGrids={props.selectedLayoutGrids}
        onChange={handleColumns}
      />
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
