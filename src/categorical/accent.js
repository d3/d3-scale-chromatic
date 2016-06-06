import {scaleOrdinal} from "d3-scale";
import colors from "../colors";

var colorsAccent = colors("7fc97fbeaed4fdc086ffff99386cb0f0027fbf5b17666666");

export default function() {
  return scaleOrdinal().range(colorsAccent);
}
