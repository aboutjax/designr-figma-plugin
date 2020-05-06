import * as React from "react";
import { Option } from "./sliderHorizontal";
import styled from "styled-components";

const SimpleButton = styled.button`
  appearance: button;
  padding: 12px;
  background-color: white;
  border: 1px solid lightgray;
  color: black;
  width: 100%;
  border-radius: 4px;
`;

const LayoutGridForm = (props) => {
  let layoutGridOptions = [
    { type: "horizontal", value: "0" },
    { type: "vertical", value: "0" },
    { type: "baselineGrid", value: false },
    { type: "maxWidth", value: false },
    { type: "columns", value: false },
  ];
  let handleHorizontalChange = (val) => {
    let targetValue = val.target.value;
    layoutGridOptions[0].value = targetValue;
    props.onChange(layoutGridOptions);
  };
  let handleVerticalChange = (val) => {
    let targetValue = val.target.value;
    layoutGridOptions[1].value = targetValue;
    props.onChange(layoutGridOptions);
  };
  let handleBaselineChange = (val) => {
    let targetValue = val.target.checked;
    layoutGridOptions[2].value = targetValue;
    props.onChange(layoutGridOptions);
  };
  let handleMaxWidth = (val) => {
    let targetValue = val.target.checked;
    layoutGridOptions[3].value = targetValue;
    props.onChange(layoutGridOptions);
  };
  let handleColumns = (val) => {
    let targetValue = val.target.checked;
    layoutGridOptions[4].value = targetValue;
    props.onChange(layoutGridOptions);
  };

  let handleClearLayoutGrids = (val) => {
    props.onChange([]);
  };

  return (
    <div>
      <ClearLayoutGrid onChange={handleClearLayoutGrids} />
      <Option type="horizontal" onChange={handleHorizontalChange} />
      <Option type="vertical" onChange={handleVerticalChange} />
      <BasegridCheck onChange={handleBaselineChange} />
      <MaxWidthCheck onChange={handleMaxWidth} />
      <ColumnsCheck onChange={handleColumns} />
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
