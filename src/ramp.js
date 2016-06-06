import {interpolateRgbBasis} from "d3-interpolate";
import colors from "./colors";

export default function(range) {
  return interpolateRgbBasis(colors(range));
}
