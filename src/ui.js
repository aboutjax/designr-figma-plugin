import * as React from "react";
import * as ReactDOM from "react-dom";
import "./ui.css";
import { SliderHorizontal } from "./react/SliderHorizontal";
import { SliderVertical } from "./react/sliderVertical";
import { SliderItemSpacing } from "./react/sliderItemSpacing";
const App = () => {
    let onColorCheck = () => {
        parent.postMessage({ pluginMessage: { type: "color-checker" } }, "*");
    };
    let onSpacingCheck = () => {
        parent.postMessage({ pluginMessage: { type: "spacing-checker" } }, "*");
    };
    let onForceAutoLayoutHorizontal = () => {
        parent.postMessage({ pluginMessage: { type: "force-auto-layout-horizontal" } }, "*");
    };
    let onForceAutoLayoutVertical = () => {
        parent.postMessage({ pluginMessage: { type: "force-auto-layout-vertical" } }, "*");
    };
    let onDarkTheme = () => {
        parent.postMessage({ pluginMessage: { type: "dark-theme" } }, "*");
    };
    let onLightTheme = () => {
        parent.postMessage({ pluginMessage: { type: "light-theme" } }, "*");
    };
    let onPaddingHorizontalSlider = (val) => {
        let sliderValue = val.target.value;
        setHorizontalPadding(sliderValue);
        parent.postMessage({
            pluginMessage: {
                type: "padding-horizontal-slider",
                sliderValue: sliderValue,
            },
        }, "*");
    };
    let onPaddingVerticalSlider = (val) => {
        let sliderValue = val.target.value;
        setVerticalPadding(sliderValue);
        parent.postMessage({
            pluginMessage: {
                type: "padding-vertical-slider",
                sliderValue: sliderValue,
            },
        }, "*");
    };
    let onItemSpacingSlider = (val) => {
        let sliderValue = val.target.value;
        setItemSpacing(sliderValue);
        parent.postMessage({
            pluginMessage: {
                type: "item-spacing-slider",
                sliderValue: sliderValue,
            },
        }, "*");
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
        }
        else {
            setSelected(true);
            let selectedFrameHorizontalPadding = val.data.pluginMessage.horizontalPadding;
            let selectedFrameVerticalPadding = val.data.pluginMessage.verticalPadding;
            let selectedFrameItemSpacing = val.data.pluginMessage.itemSpacing;
            let selectedFrameLayoutMode = val.data.pluginMessage.layoutMode;
            setLayoutMode(selectedFrameLayoutMode);
            pxToSize(setHorizontalPadding, selectedFrameHorizontalPadding);
            pxToSize(setVerticalPadding, selectedFrameVerticalPadding);
            pxToSize(setItemSpacing, selectedFrameItemSpacing);
        }
    };
    const [horizontalPadding, setHorizontalPadding] = React.useState(1);
    const [verticalPadding, setVerticalPadding] = React.useState(1);
    const [itemSpacing, setItemSpacing] = React.useState(1);
    const [layoutMode, setLayoutMode] = React.useState("NONE");
    const [selected, setSelected] = React.useState(false);
    return (React.createElement("div", { className: "container" },
        React.createElement("div", { className: "section" },
            React.createElement("h4", null, "Colours"),
            React.createElement("p", null, "Check color consistency for the selected frame."),
            React.createElement("button", { className: "button", id: "check-colors", onClick: onColorCheck }, "Check Colors")),
        React.createElement("div", { className: "section" },
            React.createElement("h4", null, "Themes"),
            React.createElement("p", null, "Convert selected frame to light / dark theme."),
            React.createElement("div", { className: "button-group" },
                React.createElement("div", { className: "flex" },
                    React.createElement("button", { className: "button", id: "dark-theme", onClick: onDarkTheme }, "Dark"),
                    React.createElement("button", { className: "button", id: "light-theme", onClick: onLightTheme }, "Light")))),
        React.createElement("div", { className: "section" },
            React.createElement("h4", null, "Enable Auto Layout"),
            React.createElement("p", null, "Force Auto Layout on selected frames."),
            React.createElement("div", { className: "button-group" },
                React.createElement("div", { className: "flex" },
                    React.createElement("button", { className: "button secondary", id: "check-spacing", onClick: onForceAutoLayoutVertical }, "Vertical"),
                    React.createElement("button", { className: "button secondary", id: "check-spacing", onClick: onForceAutoLayoutHorizontal }, "Horizontal")))),
        selected && layoutMode !== "NONE" ? (React.createElement(AutoLayoutSpacingSection, { layoutMode: layoutMode, horizontalPadding: horizontalPadding, verticalPadding: verticalPadding, onPaddingHorizontalSlider: onPaddingHorizontalSlider, onPaddingVerticalSlider: onPaddingVerticalSlider, itemSpacing: itemSpacing, onItemSpacingSlider: onItemSpacingSlider, onSpacingCheck: onSpacingCheck })) : ("")));
};
const AutoLayoutSpacingSection = (props) => (React.createElement("div", { className: "section" },
    React.createElement("div", { className: "section" },
        React.createElement("h4", { className: "tiny-header" }, "Horizontal Padding"),
        React.createElement(SliderHorizontal, { layoutMode: props.layoutMode, horizontalPadding: props.horizontalPadding, onPaddingHorizontalSlider: props.onPaddingHorizontalSlider })),
    React.createElement("div", { className: "section" },
        React.createElement("h4", { className: "tiny-header" }, "Vertical Padding"),
        React.createElement(SliderVertical, { layoutMode: props.layoutMode, verticalPadding: props.verticalPadding, onPaddingVerticalSlider: props.onPaddingVerticalSlider })),
    React.createElement("div", { className: "section" },
        React.createElement("h4", { className: "tiny-header" }, "Item Spacing"),
        React.createElement(SliderItemSpacing, { layoutMode: props.layoutMode, itemSpacing: props.itemSpacing, onItemSpacingSlider: props.onItemSpacingSlider })),
    React.createElement("p", null, "Auto Layout padding & spacing from frame names."),
    React.createElement("button", { className: "button", id: "check-spacing", onClick: props.onSpacingCheck }, "Apply Spacing From Name")));
const Table = () => (React.createElement("table", { cellSpacing: "0" },
    React.createElement("thead", null,
        React.createElement("tr", null,
            React.createElement("th", null, "Properties"),
            React.createElement("th", null, "Keywords"))),
    React.createElement("tbody", null,
        React.createElement("tr", null,
            React.createElement("td", null, "Direction"),
            React.createElement("td", null,
                React.createElement("span", { className: "code" }, "vertical, "),
                React.createElement("span", { className: "code" }, "horizontal"))),
        React.createElement("tr", null,
            React.createElement("td", null, "Vertical Padding"),
            React.createElement("td", null,
                React.createElement("span", { className: "code" }, "pv-{size}"))),
        React.createElement("tr", null,
            React.createElement("td", null, "Horizontal Padding"),
            React.createElement("td", null,
                React.createElement("span", { className: "code" }, "ph-{size}"))),
        React.createElement("tr", null,
            React.createElement("td", null, "Item Spacing"),
            React.createElement("td", null,
                React.createElement("span", { className: "code" }, "sp-{size}"))))));
ReactDOM.render(React.createElement(App, null), document.getElementById("react-page"));
