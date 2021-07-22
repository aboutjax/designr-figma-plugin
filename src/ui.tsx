declare function require(path: string): any;
import * as React from "react";
import * as ReactDOM from "react-dom";
import "./ui.css";

import { SliderHorizontal } from "./react/SliderHorizontal";
import { SliderVertical } from "./react/sliderVertical";
import { SliderItemSpacing } from "./react/sliderItemSpacing";
import { LayoutGridForm } from "./react/layoutGridControllers/layoutGridForm";

const App = () => {
  let onColorCheck = () => {
    parent.postMessage({ pluginMessage: { type: "color-checker" } }, "*");
  };

  let onSpacingCheck = () => {
    parent.postMessage({ pluginMessage: { type: "spacing-checker" } }, "*");
  };

  let onForceAutoLayoutHorizontal = () => {
    parent.postMessage(
      { pluginMessage: { type: "force-auto-layout-horizontal" } },
      "*"
    );
  };

  let onForceAutoLayoutVertical = () => {
    parent.postMessage(
      { pluginMessage: { type: "force-auto-layout-vertical" } },
      "*"
    );
  };

  let onThemeSwap = () => {
    parent.postMessage({ pluginMessage: { type: "swap-theme" } }, "*");
  };

  let onPaddingHorizontalSlider = (val) => {
    let sliderValue = val.target.value;
    setHorizontalPadding(sliderValue);
    parent.postMessage(
      {
        pluginMessage: {
          type: "padding-horizontal-slider",
          sliderValue: sliderValue,
        },
      },
      "*"
    );
  };
  let onPaddingVerticalSlider = (val) => {
    let sliderValue = val.target.value;
    setVerticalPadding(sliderValue);
    parent.postMessage(
      {
        pluginMessage: {
          type: "padding-vertical-slider",
          sliderValue: sliderValue,
        },
      },
      "*"
    );
  };
  let onItemSpacingSlider = (val) => {
    let sliderValue = val.target.value;
    setItemSpacing(sliderValue);
    parent.postMessage(
      {
        pluginMessage: {
          type: "item-spacing-slider",
          sliderValue: sliderValue,
        },
      },
      "*"
    );
  };
  let SetLayoutGrid = (val) => {
    parent.postMessage(
      {
        pluginMessage: {
          type: "set-layout-grid",
          layoutGridOptions: val,
        },
      },
      "*"
    );
  };

  function pxToSize(setState, value) {
    switch (value) {
      case 4:
        setState(1);
        break;
      case 8:
        setState(2);
        break;
      case 16:
        setState(3);
        break;
      case 24:
        setState(4);
        break;
      case 32:
        setState(5);
        break;
      case 40:
        setState(6);
        break;
      case 48:
        setState(7);
        break;
      case 0:
        setState(0);
        break;
    }
  }

  onmessage = (val) => {
    let message = val.data.pluginMessage;
    if (message === "nothing selected") {
      console.log("nothing selected");
      setSelected(false);
    } else {
      setSelected(true);
      let selectedFrameHorizontalPadding =
        val.data.pluginMessage.horizontalPadding;
      let selectedFrameVerticalPadding = val.data.pluginMessage.verticalPadding;
      let selectedFrameItemSpacing = val.data.pluginMessage.itemSpacing;
      let selectedFrameLayoutMode = val.data.pluginMessage.layoutMode;
      let selectedFrameType = val.data.pluginMessage.type;
      let selectedFrameLayoutGrids = val.data.pluginMessage.layoutGrids;

      // console.log(selectedFrameLayoutGrids);

      setLayoutMode(selectedFrameLayoutMode);
      pxToSize(setHorizontalPadding, selectedFrameHorizontalPadding);
      pxToSize(setVerticalPadding, selectedFrameVerticalPadding);
      pxToSize(setItemSpacing, selectedFrameItemSpacing);
      setType(selectedFrameType);
      setLayoutGrids(selectedFrameLayoutGrids);
    }
  };

  const [horizontalPadding, setHorizontalPadding] = React.useState(1);
  const [verticalPadding, setVerticalPadding] = React.useState(1);
  const [itemSpacing, setItemSpacing] = React.useState(1);
  const [layoutMode, setLayoutMode] = React.useState("NONE");
  const [selected, setSelected] = React.useState(false);
  const [type, setType] = React.useState(null);
  const [layoutGrids, setLayoutGrids] = React.useState();

  return (
    <div className="container">
      {/* <div className="section">
        <h4>Colours</h4>
        <p>Check stray colors for the selected frame.</p>
        <button className="button" id="check-colors" onClick={onColorCheck}>
          Check Colors
        </button>
      </div> */}
      <div className="section">
        <h4>Light & Dark Themes</h4>
        <p>Convert frame to opposite theme.</p>
        <div className="button-group">
          <div className="flex">
            <button className="button" id="theme-swap" onClick={onThemeSwap}>
              Swap Theme
            </button>
          </div>
        </div>
      </div>

      <div className="section" style={{ position: "relative" }}>
        <h4>Layout Grids</h4>
        <LayoutGridForm
          selected={selected}
          selectedLayoutGrids={layoutGrids}
          onChange={SetLayoutGrid}
        />
      </div>

      {/* {selected && layoutMode !== "NONE" && type == "FRAME" ? (
        <AutoLayoutSpacingSection
          layoutMode={layoutMode}
          horizontalPadding={horizontalPadding}
          verticalPadding={verticalPadding}
          onPaddingHorizontalSlider={onPaddingHorizontalSlider}
          onPaddingVerticalSlider={onPaddingVerticalSlider}
          itemSpacing={itemSpacing}
          onItemSpacingSlider={onItemSpacingSlider}
          onSpacingCheck={onSpacingCheck}
        />
      ) : (
        ""
      )} */}
    </div>
  );
};

const AutoLayoutSpacingSection = (props) => (
  <div className="section">
    <h4>Auto Layout</h4>
    <div className="section">
      <h4 className="tiny-header">Horizontal Padding</h4>
      <SliderHorizontal
        layoutMode={props.layoutMode}
        horizontalPadding={props.horizontalPadding}
        onPaddingHorizontalSlider={props.onPaddingHorizontalSlider}
      />
    </div>
    <div className="section">
      <h4 className="tiny-header">Vertical Padding</h4>
      <SliderVertical
        layoutMode={props.layoutMode}
        verticalPadding={props.verticalPadding}
        onPaddingVerticalSlider={props.onPaddingVerticalSlider}
      />
    </div>

    <div className="section">
      <h4 className="tiny-header">Item Spacing</h4>
      <SliderItemSpacing
        layoutMode={props.layoutMode}
        itemSpacing={props.itemSpacing}
        onItemSpacingSlider={props.onItemSpacingSlider}
      />
    </div>

    <p>Auto Layout padding & spacing from frame names.</p>

    <button
      className="button"
      id="check-spacing"
      onClick={props.onSpacingCheck}
    >
      Update from Name
    </button>
  </div>
);

const Table = () => (
  <table cellSpacing="0">
    <thead>
      <tr>
        <th>Properties</th>
        <th>Keywords</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Direction</td>

        <td>
          <span className="code">vertical, </span>
          <span className="code">horizontal</span>
        </td>
      </tr>

      <tr>
        <td>Vertical Padding</td>

        <td>
          <span className="code">{"pv-{size}"}</span>
        </td>
      </tr>
      <tr>
        <td>Horizontal Padding</td>

        <td>
          <span className="code">{"ph-{size}"}</span>
        </td>
      </tr>
      <tr>
        <td>Item Spacing</td>

        <td>
          <span className="code">{"sp-{size}"}</span>
        </td>
      </tr>
    </tbody>
  </table>
);

ReactDOM.render(<App />, document.getElementById("react-page"));
