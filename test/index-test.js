import assert from "assert";
import * as d3 from "../src/index.js";

it("exports the expected schemes", () => {
  assert.deepStrictEqual(Object.keys(d3).sort(), [
    "interpolateBlues",
    "interpolateBrBG",
    "interpolateBuGn",
    "interpolateBuPu",
    "interpolateCividis",
    "interpolateCool",
    "interpolateCubehelixDefault",
    "interpolateGnBu",
    "interpolateGreens",
    "interpolateGreys",
    "interpolateInferno",
    "interpolateMagma",
    "interpolateOrRd",
    "interpolateOranges",
    "interpolatePRGn",
    "interpolatePiYG",
    "interpolatePlasma",
    "interpolatePuBu",
    "interpolatePuBuGn",
    "interpolatePuOr",
    "interpolatePuRd",
    "interpolatePurples",
    "interpolateRainbow",
    "interpolateRdBu",
    "interpolateRdGy",
    "interpolateRdPu",
    "interpolateRdYlBu",
    "interpolateRdYlGn",
    "interpolateReds",
    "interpolateSinebow",
    "interpolateSpectral",
    "interpolateTurbo",
    "interpolateViridis",
    "interpolateWarm",
    "interpolateYlGn",
    "interpolateYlGnBu",
    "interpolateYlOrBr",
    "interpolateYlOrRd",
    "schemeAccent",
    "schemeBlues",
    "schemeBrBG",
    "schemeBuGn",
    "schemeBuPu",
    "schemeCategory10",
    "schemeDark2",
    "schemeGnBu",
    "schemeGreens",
    "schemeGreys",
    "schemeObservable10",
    "schemeOrRd",
    "schemeOranges",
    "schemePRGn",
    "schemePaired",
    "schemePastel1",
    "schemePastel2",
    "schemePiYG",
    "schemePuBu",
    "schemePuBuGn",
    "schemePuOr",
    "schemePuRd",
    "schemePurples",
    "schemeRdBu",
    "schemeRdGy",
    "schemeRdPu",
    "schemeRdYlBu",
    "schemeRdYlGn",
    "schemeReds",
    "schemeSet1",
    "schemeSet2",
    "schemeSet3",
    "schemeSpectral",
    "schemeTableau10",
    "schemeYlGn",
    "schemeYlGnBu",
    "schemeYlOrBr",
    "schemeYlOrRd"
  ]);
});
