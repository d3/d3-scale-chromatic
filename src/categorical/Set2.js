import {scaleOrdinal} from "d3-scale";
import colors from "../colors";

var colorsSet2 = colors("66c2a5fc8d628da0cbe78ac3a6d854ffd92fe5c494b3b3b3");

export default function() {
  return scaleOrdinal().range(colorsSet2);
}

