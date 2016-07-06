# d3-scale-chromatic

This module provides sequential, diverging and categorical color schemes derived from Cynthia A. Brewer’s [ColorBrewer](http://colorbrewer2.org). Since ColorBrewer publishes only discrete color schemes, the sequential and diverging scales are interpolated using [uniform B-splines](http://bl.ocks.org/mbostock/048d21cf747371b11884f75ad896e5a5). These schemes and interpolators are designed to work with [d3-scale](https://github.com/d3/d3-scale)’s [d3.scaleOrdinal](https://github.com/d3/d3-scale#ordinal-scales) and [d3.scaleSequential](https://github.com/d3/d3-scale#sequential-scales). For example, to create a categorical color scale using the [Accent](#schemeAccent) color scheme:

```js
var color = d3.scaleOrdinal(d3.schemeAccent);
```

To create a diverging color scale using the [PiYG](#interpolatePiYG) color scheme:

```js
var color = d3.scaleSequential(d3.interpolatePiYG);
```

## Installing

If you use NPM, `npm install d3-scale-chromatic`. Otherwise, download the [latest release](https://github.com/d3/d3-scale-chromatic/releases/latest) or load directly from [d3js.org](https://d3js.org) as a [standalone library](https://d3js.org/d3-scale-chromatic.v1.min.js). AMD, CommonJS, and vanilla environments are supported. In vanilla, a `d3` global is exported:

```html
<script src="https://d3js.org/d3-color.v1.min.js"></script>
<script src="https://d3js.org/d3-interpolate.v1.min.js"></script>
<script src="https://d3js.org/d3-scale-chromatic.v1.min.js"></script>
<script>

var yellow = d3.interpolateYlGn(0), // "rgb(255, 255, 229)"
    yellowGreen = d3.interpolateYlGn(0.5), // "rgb(120, 197, 120)"
    green = d3.interpolateYlGn(1); // "rgb(0, 69, 41)"

</script>
```

Or, in combination with the [D3 default bundle](https://github.com/d3/d3):

```html
<script src="https://d3js.org/d3.v4.min.js"></script>
<script src="https://d3js.org/d3-scale-chromatic.v1.min.js"></script>
<script>

var yellow = d3.interpolateYlGn(0), // "rgb(255, 255, 229)"
    yellowGreen = d3.interpolateYlGn(0.5), // "rgb(120, 197, 120)"
    green = d3.interpolateYlGn(1); // "rgb(0, 69, 41)"

</script>
```

[Try d3-scale-chromatic in your browser.](https://tonicdev.com/npm/d3-scale-chromatic)

## API Reference

### Categorical

<a href="#schemeAccent" name="schemeAccent">#</a> d3.<b>schemeAccent</b>

<img src="https://raw.githubusercontent.com/d3/d3-scale-chromatic/master/img/Accent.png" width="100%" height="40" alt="Accent">

An array of eight categorical colors represented as RGB hexadecimal strings.

<a href="#schemeDark2" name="schemeDark2">#</a> d3.<b>schemeDark2</b>

<img src="https://raw.githubusercontent.com/d3/d3-scale-chromatic/master/img/Dark2.png" width="100%" height="40" alt="Dark2">

An array of eight categorical colors represented as RGB hexadecimal strings.

<a href="#schemePaired" name="schemePaired">#</a> d3.<b>schemePaired</b>

<img src="https://raw.githubusercontent.com/d3/d3-scale-chromatic/master/img/Paired.png" width="100%" height="40" alt="Paired">

An array of twelve categorical colors represented as RGB hexadecimal strings.

<a href="#schemePastel1" name="schemePastel1">#</a> d3.<b>schemePastel1</b>

<img src="https://raw.githubusercontent.com/d3/d3-scale-chromatic/master/img/Pastel1.png" width="100%" height="40" alt="Pastel1">

An array of nine categorical colors represented as RGB hexadecimal strings.

<a href="#schemePastel2" name="schemePastel2">#</a> d3.<b>schemePastel2</b>

<img src="https://raw.githubusercontent.com/d3/d3-scale-chromatic/master/img/Pastel2.png" width="100%" height="40" alt="Pastel2">

An array of eight categorical colors represented as RGB hexadecimal strings.

<a href="#schemeSet1" name="schemeSet1">#</a> d3.<b>schemeSet1</b>

<img src="https://raw.githubusercontent.com/d3/d3-scale-chromatic/master/img/Set1.png" width="100%" height="40" alt="Set1">

An array of nine categorical colors represented as RGB hexadecimal strings.

<a href="#schemeSet2" name="schemeSet2">#</a> d3.<b>schemeSet2</b>

<img src="https://raw.githubusercontent.com/d3/d3-scale-chromatic/master/img/Set2.png" width="100%" height="40" alt="Set2">

An array of eight categorical colors represented as RGB hexadecimal strings.

<a href="#schemeSet3" name="schemeSet3">#</a> d3.<b>schemeSet3</b>

<img src="https://raw.githubusercontent.com/d3/d3-scale-chromatic/master/img/Set3.png" width="100%" height="40" alt="Set3">

An array of twelve categorical colors represented as RGB hexadecimal strings.

### Diverging

<a href="#interpolateBrBG" name="interpolateBrBG">#</a> d3.<b>interpolateBrBG</b>(*t*)

<img src="https://raw.githubusercontent.com/d3/d3-scale-chromatic/master/img/BrBG.png" width="100%" height="40" alt="BrBG">

Given a number *t* in the range [0,1], returns the corresponding color from the “BrBG” diverging color scheme represented as an RGB string.

<a href="#interpolatePRGn" name="interpolatePRGn">#</a> d3.<b>interpolatePRGn</b>(*t*)

<img src="https://raw.githubusercontent.com/d3/d3-scale-chromatic/master/img/PRGn.png" width="100%" height="40" alt="PRGn">

Given a number *t* in the range [0,1], returns the corresponding color from the “PRGn” diverging color scheme represented as an RGB string.

<a href="#interpolatePiYG" name="interpolatePiYG">#</a> d3.<b>interpolatePiYG</b>(*t*)

<img src="https://raw.githubusercontent.com/d3/d3-scale-chromatic/master/img/PiYG.png" width="100%" height="40" alt="PiYG">

Given a number *t* in the range [0,1], returns the corresponding color from the “PiYG” diverging color scheme represented as an RGB string.

<a href="#interpolatePuOr" name="interpolatePuOr">#</a> d3.<b>interpolatePuOr</b>(*t*)

<img src="https://raw.githubusercontent.com/d3/d3-scale-chromatic/master/img/PuOr.png" width="100%" height="40" alt="PuOr">

Given a number *t* in the range [0,1], returns the corresponding color from the “PuOr” diverging color scheme represented as an RGB string.

<a href="#interpolateRdBu" name="interpolateRdBu">#</a> d3.<b>interpolateRdBu</b>(*t*)

<img src="https://raw.githubusercontent.com/d3/d3-scale-chromatic/master/img/RdBu.png" width="100%" height="40" alt="RdBu">

Given a number *t* in the range [0,1], returns the corresponding color from the “RdBu” diverging color scheme represented as an RGB string.

<a href="#interpolateRdGy" name="interpolateRdGy">#</a> d3.<b>interpolateRdGy</b>(*t*)

<img src="https://raw.githubusercontent.com/d3/d3-scale-chromatic/master/img/RdGy.png" width="100%" height="40" alt="RdGy">

Given a number *t* in the range [0,1], returns the corresponding color from the “RdGy” diverging color scheme represented as an RGB string.

<a href="#interpolateRdYlBu" name="interpolateRdYlBu">#</a> d3.<b>interpolateRdYlBu</b>(*t*)

<img src="https://raw.githubusercontent.com/d3/d3-scale-chromatic/master/img/RdYlBu.png" width="100%" height="40" alt="RdYlBu">

Given a number *t* in the range [0,1], returns the corresponding color from the “RdYlBu” diverging color scheme represented as an RGB string.

<a href="#interpolateRdYlGn" name="interpolateRdYlGn">#</a> d3.<b>interpolateRdYlGn</b>(*t*)

<img src="https://raw.githubusercontent.com/d3/d3-scale-chromatic/master/img/RdYlGn.png" width="100%" height="40" alt="RdYlGn">

Given a number *t* in the range [0,1], returns the corresponding color from the “RdYlGn” diverging color scheme represented as an RGB string.

<a href="#interpolateSpectral" name="interpolateSpectral">#</a> d3.<b>interpolateSpectral</b>(*t*)

<img src="https://raw.githubusercontent.com/d3/d3-scale-chromatic/master/img/Spectral.png" width="100%" height="40" alt="Spectral">

Given a number *t* in the range [0,1], returns the corresponding color from the “Spectral” diverging color scheme represented as an RGB string.

### Sequential (Single Hue)

<a href="#interpolateBlues" name="interpolateBlues">#</a> d3.<b>interpolateBlues</b>(*t*)

<img src="https://raw.githubusercontent.com/d3/d3-scale-chromatic/master/img/Blues.png" width="100%" height="40" alt="Blues">

Given a number *t* in the range [0,1], returns the corresponding color from the “Blues” sequential color scheme represented as an RGB string.

<a href="#interpolateGreens" name="interpolateGreens">#</a> d3.<b>interpolateGreens</b>(*t*)

<img src="https://raw.githubusercontent.com/d3/d3-scale-chromatic/master/img/Greens.png" width="100%" height="40" alt="Greens">

Given a number *t* in the range [0,1], returns the corresponding color from the “Greens” sequential color scheme represented as an RGB string.

<a href="#interpolateGreys" name="interpolateGreys">#</a> d3.<b>interpolateGreys</b>(*t*)

<img src="https://raw.githubusercontent.com/d3/d3-scale-chromatic/master/img/Greys.png" width="100%" height="40" alt="Greys">

Given a number *t* in the range [0,1], returns the corresponding color from the “Greys” sequential color scheme represented as an RGB string.

<a href="#interpolateOranges" name="interpolateOranges">#</a> d3.<b>interpolateOranges</b>(*t*)

<img src="https://raw.githubusercontent.com/d3/d3-scale-chromatic/master/img/Oranges.png" width="100%" height="40" alt="Oranges">

Given a number *t* in the range [0,1], returns the corresponding color from the “Oranges” sequential color scheme represented as an RGB string.

<a href="#interpolatePurples" name="interpolatePurples">#</a> d3.<b>interpolatePurples</b>(*t*)

<img src="https://raw.githubusercontent.com/d3/d3-scale-chromatic/master/img/Purples.png" width="100%" height="40" alt="Purples">

Given a number *t* in the range [0,1], returns the corresponding color from the “Purples” sequential color scheme represented as an RGB string.

<a href="#interpolateReds" name="interpolateReds">#</a> d3.<b>interpolateReds</b>(*t*)

<img src="https://raw.githubusercontent.com/d3/d3-scale-chromatic/master/img/Reds.png" width="100%" height="40" alt="Reds">

Given a number *t* in the range [0,1], returns the corresponding color from the “Reds” sequential color scheme represented as an RGB string.

### Sequential (Multi-Hue)

<a href="#interpolateBuGn" name="interpolateBuGn">#</a> d3.<b>interpolateBuGn</b>(*t*)

<img src="https://raw.githubusercontent.com/d3/d3-scale-chromatic/master/img/BuGn.png" width="100%" height="40" alt="BuGn">

Given a number *t* in the range [0,1], returns the corresponding color from the “BuGn” sequential color scheme represented as an RGB string.

<a href="#interpolateBuPu" name="interpolateBuPu">#</a> d3.<b>interpolateBuPu</b>(*t*)

<img src="https://raw.githubusercontent.com/d3/d3-scale-chromatic/master/img/BuPu.png" width="100%" height="40" alt="BuPu">

Given a number *t* in the range [0,1], returns the corresponding color from the “BuPu” sequential color scheme represented as an RGB string.

<a href="#interpolateGnBu" name="interpolateGnBu">#</a> d3.<b>interpolateGnBu</b>(*t*)

<img src="https://raw.githubusercontent.com/d3/d3-scale-chromatic/master/img/GnBu.png" width="100%" height="40" alt="GnBu">

Given a number *t* in the range [0,1], returns the corresponding color from the “GnBu” sequential color scheme represented as an RGB string.

<a href="#interpolateOrRd" name="interpolateOrRd">#</a> d3.<b>interpolateOrRd</b>(*t*)

<img src="https://raw.githubusercontent.com/d3/d3-scale-chromatic/master/img/OrRd.png" width="100%" height="40" alt="OrRd">

Given a number *t* in the range [0,1], returns the corresponding color from the “OrRd” sequential color scheme represented as an RGB string.

<a href="#interpolatePuBuGn" name="interpolatePuBuGn">#</a> d3.<b>interpolatePuBuGn</b>(*t*)

<img src="https://raw.githubusercontent.com/d3/d3-scale-chromatic/master/img/PuBuGn.png" width="100%" height="40" alt="PuBuGn">

Given a number *t* in the range [0,1], returns the corresponding color from the “PuBuGn” sequential color scheme represented as an RGB string.

<a href="#interpolatePuBu" name="interpolatePuBu">#</a> d3.<b>interpolatePuBu</b>(*t*)

<img src="https://raw.githubusercontent.com/d3/d3-scale-chromatic/master/img/PuBu.png" width="100%" height="40" alt="PuBu">

Given a number *t* in the range [0,1], returns the corresponding color from the “PuBu” sequential color scheme represented as an RGB string.

<a href="#interpolatePuRd" name="interpolatePuRd">#</a> d3.<b>interpolatePuRd</b>(*t*)

<img src="https://raw.githubusercontent.com/d3/d3-scale-chromatic/master/img/PuRd.png" width="100%" height="40" alt="PuRd">

Given a number *t* in the range [0,1], returns the corresponding color from the “PuRd” sequential color scheme represented as an RGB string.

<a href="#interpolateRdPu" name="interpolateRdPu">#</a> d3.<b>interpolateRdPu</b>(*t*)

<img src="https://raw.githubusercontent.com/d3/d3-scale-chromatic/master/img/RdPu.png" width="100%" height="40" alt="RdPu">

Given a number *t* in the range [0,1], returns the corresponding color from the “RdPu” sequential color scheme represented as an RGB string.

<a href="#interpolateYlGnBu" name="interpolateYlGnBu">#</a> d3.<b>interpolateYlGnBu</b>(*t*)

<img src="https://raw.githubusercontent.com/d3/d3-scale-chromatic/master/img/YlGnBu.png" width="100%" height="40" alt="YlGnBu">

Given a number *t* in the range [0,1], returns the corresponding color from the “YlGnBu” sequential color scheme represented as an RGB string.

<a href="#interpolateYlGn" name="interpolateYlGn">#</a> d3.<b>interpolateYlGn</b>(*t*)

<img src="https://raw.githubusercontent.com/d3/d3-scale-chromatic/master/img/YlGn.png" width="100%" height="40" alt="YlGn">

Given a number *t* in the range [0,1], returns the corresponding color from the “YlGn” sequential color scheme represented as an RGB string.

<a href="#interpolateYlOrBr" name="interpolateYlOrBr">#</a> d3.<b>interpolateYlOrBr</b>(*t*)

<img src="https://raw.githubusercontent.com/d3/d3-scale-chromatic/master/img/YlOrBr.png" width="100%" height="40" alt="YlOrBr">

Given a number *t* in the range [0,1], returns the corresponding color from the “YlOrBr” sequential color scheme represented as an RGB string.

<a href="#interpolateYlOrRd" name="interpolateYlOrRd">#</a> d3.<b>interpolateYlOrRd</b>(*t*)

<img src="https://raw.githubusercontent.com/d3/d3-scale-chromatic/master/img/YlOrRd.png" width="100%" height="40" alt="YlOrRd">

Given a number *t* in the range [0,1], returns the corresponding color from the “YlOrRd” sequential color scheme represented as an RGB string.
