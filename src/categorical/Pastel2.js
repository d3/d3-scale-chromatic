import {scaleOrdinal} from "d3-scale";
import colors from "../colors";

var colorsPastel2 = colors("b3e2cdfdcdaccbd5e8f4cae4e6f5c9fff2aef1e2cccccccc");

export default function() {
  return scaleOrdinal().range(colorsPastel2);
}
