import colors from "../colors";
import ramp from "../ramp";

export var scheme = new Array(3).concat(
  "f1a340f7f7f7998ec3",
  "e66101fdb863b2abd25e3c99",
  "e66101fdb863f7f7f7b2abd25e3c99",
  "b35806f1a340fee0b6d8daeb998ec3542788",
  "b35806f1a340fee0b6f7f7f7d8daeb998ec3542788",
  "b35806e08214fdb863fee0b6d8daebb2abd28073ac542788",
  "b35806e08214fdb863fee0b6f7f7f7d8daebb2abd28073ac542788",
  "7f3b08b35806e08214fdb863fee0b6d8daebb2abd28073ac5427882d004b",
  "7f3b08b35806e08214fdb863fee0b6f7f7f7d8daebb2abd28073ac5427882d004b"
).map(colors);

export default ramp(scheme);
