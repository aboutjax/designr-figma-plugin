import * as React from "react";
const SliderItemSpacing = (props) => (
  <div>
    <label
      className="padding-input-range-label"
      htmlFor="padding-horizontal-slider"
    >
      <span className="label">0</span>
      <span className="label">xxs</span>
      <span className="label">xs</span>
      <span className="label">s</span>
      <span className="label">m</span>
      <span className="label">l</span>
      <span className="label">xl</span>
      <span className="label">xxl</span>
    </label>
    <input
      disabled={props.layoutMode == "NONE" ? true : false}
      className="padding-input-range"
      name="itemSpacing"
      type="range"
      step="1"
      min="0"
      max="7"
      value={props.itemSpacing}
      onChange={props.onItemSpacingSlider}
    />
  </div>
);

export { SliderItemSpacing };
