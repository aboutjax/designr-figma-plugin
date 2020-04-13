function clone(val) {
  return JSON.parse(JSON.stringify(val));
}

// Check object equality helper
function isEquivalent(a, b) {
  // Create arrays of property names
  var aProps = Object.getOwnPropertyNames(a);
  var bProps = Object.getOwnPropertyNames(b);

  // If number of properties is different,
  // objects are not equivalent
  if (aProps.length != bProps.length) {
    return false;
  }

  for (var i = 0; i < aProps.length; i++) {
    var propName = aProps[i];

    // If values of same property are not equal,
    // objects are not equivalent
    if (a[propName] !== b[propName]) {
      return false;
    }
  }

  // If we made it this far, objects
  // are considered equivalent
  return true;
}

const ColorCheckTraverse = (node) => {
  let strayFill = 0;
  let strayStroke = 0;
  if ("fills" && "strokes" in node) {
    // Filter warning stroke function
    let filterWarningStroke = function (stroke) {
      console.log("clear out");

      if (
        stroke.type == "SOLID" &&
        isEquivalent(stroke.color, { r: 1, g: 0, b: 0 })
      ) {
        console.log("yes");
        return false;
      } else {
        console.log("no");
        return true;
      }
    };

    let oldStrokes = clone(node.strokes);

    let newStrokes = oldStrokes.filter(filterWarningStroke);

    if (node.strokeStyleId.length > 0) {
      // do nothing
    } else {
      node.strokes = newStrokes;
    }

    // // Add warning stroke function
    let addWarningStroke = function (node) {
      let strokes = clone(node.strokes);
      let warningStrokeProperty = {
        color: { r: 1, g: 0, b: 0 },
        opacity: 1,
        type: "SOLID",
        blendMode: "NORMAL",
        visible: true,
      };
      strokes.push(warningStrokeProperty);
      node.strokes = strokes;
      // node.strokeAlign = "OUTSIDE";
    };

    // Check Fill
    const hasImage = (fill) => fill.type === "IMAGE";
    if (node.fills.length > 0) {
      // if (node.fills.some(hasImage)) {
      //   console.log("fill is image");
      // } else {
      //   console.log("fill is NOT image");
      //   // nothing
      // }
      if (node.fillStyleId.length > 0 || node.fills.some(hasImage)) {
        console.log("✅ Good fill");
      } else {
        console.log("❌ Bad fill");

        // Add warning stroke
        addWarningStroke(node);
        strayFill++;
      }
    } else {
      console.log("no fill");
    }

    // Check Stroke
    if (node.strokes.length > 0) {
      if (node.strokeStyleId.length > 0) {
        console.log("✅ Good stroke");
      } else {
        console.log("❌ Bad stroke");

        // // Add warning stroke
        addWarningStroke(node);
        strayStroke++;
      }
    } else {
      console.log("no stroke");
    }
  } else {
    console.log("No fill & stroke property");
  }

  if ("children" in node) {
    for (const child of node.children) {
      ColorCheckTraverse(child);
    }
  } else {
    // do nothing
  }

  if (strayFill > 0 || strayStroke > 0) {
    let errorString =
      "You have " +
      strayFill +
      " fills and " +
      strayStroke +
      " strokes not using colours from our library!";
    figma.notify(errorString, { timeout: 0.5 });
  } else {
    figma.notify("👏 All is good in the hood!", { timeout: 0.5 });
  }
};

export { ColorCheckTraverse };
