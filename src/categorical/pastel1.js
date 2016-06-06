import {scaleOrdinal} from "d3-scale";
import colors from "../colors";

var colorsPastel1 = colors("fbb4aeb3cde3ccebc5decbe4fed9a6ffffcce5d8bdfddaecf2f2f2");

export default function() {
  return scaleOrdinal().range(colorsPastel1);
}
