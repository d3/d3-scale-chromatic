import {scaleOrdinal} from "d3-scale";
import colors from "../colors";

var colorsSet1 = colors("e41a1c377eb84daf4a984ea3ff7f00ffff33a65628f781bf999999");

export default function() {
  return scaleOrdinal().range(colorsSet1);
}
