import {scaleSequential} from "d3-scale";
import {interpolateRgbBasis} from "d3-interpolate";
import colors from "./colors";

export default function(range) {
  var i = interpolateRgbBasis(colors(range));
  return function() {
    return scaleSequential(i);
  };
}
