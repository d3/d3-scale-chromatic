
import {rgb} from "d3-color";
import {scaleLinear} from "d3-scale";

// Reimplementation of the IDL "STD Gamma II" color scale, based on bioRad's implementation (https://github.com/adokter/bioRad/blob/e0ede427eb34007dc9985302d40cbdab158e0636/R/color_scale.R#L65-L85)
// and the explanations at: https://github.com/inbo/crow/issues/38 
export default function(t) {
    t = 255 - (t * 255); // Constants below are taken from bioRad and have a 0-255 range
  
    return rgb(
        scaleLinear().domain([0, 62, 81, 93, 145, 176, 191, 208, 255]).range([255, 255, 163, 255, 255, 81, 81, 0, 0])(t), 
        scaleLinear().domain([0, 64, 79, 110, 142, 255]).range([255, 255, 163, 163, 0, 0])(t), 
        scaleLinear().domain([0, 79, 96, 110, 127, 159, 206, 255]).range([255, 0, 0, 82, 0, 0, 255, 0])(t), 
        1
    )
  }