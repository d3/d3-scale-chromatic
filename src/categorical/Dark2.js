import {scaleOrdinal} from "d3-scale";
import colors from "../colors";

var colorsDark2 = colors("1b9e77d95f027570b3e7298a66a61ee6ab02a6761d666666");

export default function() {
  return scaleOrdinal().range(colorsDark2);
}
