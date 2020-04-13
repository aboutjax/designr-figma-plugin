import * as React from "react";
const SliderHorizontal = (props) => (React.createElement("div", null,
    React.createElement("label", { className: "padding-input-range-label", htmlFor: "padding-horizontal-slider" },
        React.createElement("span", { className: "label" }, "0"),
        React.createElement("span", { className: "label" }, "xxs"),
        React.createElement("span", { className: "label" }, "xs"),
        React.createElement("span", { className: "label" }, "s"),
        React.createElement("span", { className: "label" }, "m"),
        React.createElement("span", { className: "label" }, "l"),
        React.createElement("span", { className: "label" }, "xl"),
        React.createElement("span", { className: "label" }, "xxl")),
    React.createElement("input", { disabled: props.layoutMode == "NONE" ? true : false, className: "padding-input-range", name: "horizontalPadding", type: "range", step: "1", min: "0", max: "7", value: props.horizontalPadding, onChange: props.onPaddingHorizontalSlider })));
export { SliderHorizontal };
