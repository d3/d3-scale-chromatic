# d3-scale-chromatic

Color schemes from [ColorBrewer](http://colorbrewer2.org) by Cynthia A. Brewer. These color schemes are intended for use with [d3.scaleOrdinal](https://github.com/d3/d3-scale/blob/master/README.md#ordinal-scales), [d3.scaleQuantize](https://github.com/d3/d3-scale/blob/master/README.md#quantize-scales) or [d3.scaleQuantile](https://github.com/d3/d3-scale/blob/master/README.md#quantile-scales), but each scheme is simply an array of hexadecimal RGB color strings, so use them however you like!

## Installing

If you use NPM, `npm install d3-scale-chromatic`. Otherwise, download the [latest release](https://github.com/d3/d3-scale-chromatic/releases/latest). You can also load directly from [d3js.org](https://d3js.org), either as a [standalone library](https://d3js.org/d3-scale-chromatic.v0.0.min.js) or as part of [D3 4.0](https://github.com/d3/d3). AMD, CommonJS, and vanilla environments are supported. In vanilla, a `d3_scale_chromatic` global is exported:

```html
<script src="https://d3js.org/d3.v4.0.0-alpha.44.min.js"></script>
<script src="https://d3js.org/d3-scale-chromatic.v0.0.min.js"></script>
<script>

var ylGn5 = d3.scaleOrdinal().range(d3_scale_chromatic.schemeYlGn(5));

</script>
```

[Try d3-scale-chromatic in your browser.](https://tonicdev.com/npm/d3-scale-chromatic)

## API Reference

### Categorical

<a href="#schemeAccent" name="schemeAccent">#</a> d3.<b>schemeAccent</b>(<i>n</i>)

<img src="https://raw.githubusercontent.com/d3/d3-scale-chromatic/master/img/accent.png" width="100%" height="40" alt="Accent">

Returns the Accent color scheme with *n* colors; *n* must be in the range [3,8].

<a href="#schemeDark2" name="schemeDark2">#</a> d3.<b>schemeDark2</b>(<i>n</i>)

<img src="https://raw.githubusercontent.com/d3/d3-scale-chromatic/master/img/dark2.png" width="100%" height="40" alt="Dark2">

Returns the Dark2 color scheme with *n* colors; *n* must be in the range [3,8].

<a href="#schemePaired" name="schemePaired">#</a> d3.<b>schemePaired</b>(<i>n</i>)

<img src="https://raw.githubusercontent.com/d3/d3-scale-chromatic/master/img/paired.png" width="100%" height="40" alt="Paired">

Returns the Paired color scheme with *n* colors; *n* must be in the range [3,12].

<a href="#schemePastel1" name="schemePastel1">#</a> d3.<b>schemePastel1</b>(<i>n</i>)

<img src="https://raw.githubusercontent.com/d3/d3-scale-chromatic/master/img/pastel1.png" width="100%" height="40" alt="Pastel1">

Returns the Pastel1 color scheme with *n* colors; *n* must be in the range [3,9].

<a href="#schemePastel2" name="schemePastel2">#</a> d3.<b>schemePastel2</b>(<i>n</i>)

<img src="https://raw.githubusercontent.com/d3/d3-scale-chromatic/master/img/pastel2.png" width="100%" height="40" alt="Pastel2">

Returns the Pastel2 color scheme with *n* colors; *n* must be in the range [3,8].

<a href="#schemeSet1" name="schemeSet1">#</a> d3.<b>schemeSet1</b>(<i>n</i>)

<img src="https://raw.githubusercontent.com/d3/d3-scale-chromatic/master/img/set1.png" width="100%" height="40" alt="Set1">

Returns the Set1 color scheme with *n* colors; *n* must be in the range [3,9].

<a href="#schemeSet2" name="schemeSet2">#</a> d3.<b>schemeSet2</b>(<i>n</i>)

<img src="https://raw.githubusercontent.com/d3/d3-scale-chromatic/master/img/set2.png" width="100%" height="40" alt="Set2">

Returns the Set2 color scheme with *n* colors; *n* must be in the range [3,8].

<a href="#schemeSet3" name="schemeSet3">#</a> d3.<b>schemeSet3</b>(<i>n</i>)

<img src="https://raw.githubusercontent.com/d3/d3-scale-chromatic/master/img/set3.png" width="100%" height="40" alt="Set3">

Returns the Set3 color scheme with *n* colors; *n* must be in the range [3,12].

### Diverging

<a href="#schemeBrBG" name="schemeBrBG">#</a> d3.<b>schemeBrBG</b>(<i>n</i>)

<img src="https://raw.githubusercontent.com/d3/d3-scale-chromatic/master/img/br-b-g.png" width="100%" height="40" alt="BrBG">

Returns the BrBG color scheme with *n* colors; *n* must be in the range [3,11].

<a href="#schemePRGn" name="schemePRGn">#</a> d3.<b>schemePRGn</b>(<i>n</i>)

<img src="https://raw.githubusercontent.com/d3/d3-scale-chromatic/master/img/p-r-gn.png" width="100%" height="40" alt="PRGn">

Returns the PRGn color scheme with *n* colors; *n* must be in the range [3,11].

<a href="#schemePiYG" name="schemePiYG">#</a> d3.<b>schemePiYG</b>(<i>n</i>)

<img src="https://raw.githubusercontent.com/d3/d3-scale-chromatic/master/img/pi-y-g.png" width="100%" height="40" alt="PiYG">

Returns the PiYG color scheme with *n* colors; *n* must be in the range [3,11].

<a href="#schemePuOr" name="schemePuOr">#</a> d3.<b>schemePuOr</b>(<i>n</i>)

<img src="https://raw.githubusercontent.com/d3/d3-scale-chromatic/master/img/pu-or.png" width="100%" height="40" alt="PuOr">

Returns the PuOr color scheme with *n* colors; *n* must be in the range [3,11].

<a href="#schemeRdBu" name="schemeRdBu">#</a> d3.<b>schemeRdBu</b>(<i>n</i>)

<img src="https://raw.githubusercontent.com/d3/d3-scale-chromatic/master/img/rd-bu.png" width="100%" height="40" alt="RdBu">

Returns the RdBu color scheme with *n* colors; *n* must be in the range [3,11].

<a href="#schemeRdGy" name="schemeRdGy">#</a> d3.<b>schemeRdGy</b>(<i>n</i>)

<img src="https://raw.githubusercontent.com/d3/d3-scale-chromatic/master/img/rd-gy.png" width="100%" height="40" alt="RdGy">

Returns the RdGy color scheme with *n* colors; *n* must be in the range [3,11].

<a href="#schemeRdYlBu" name="schemeRdYlBu">#</a> d3.<b>schemeRdYlBu</b>(<i>n</i>)

<img src="https://raw.githubusercontent.com/d3/d3-scale-chromatic/master/img/rd-yl-bu.png" width="100%" height="40" alt="RdYlBu">

Returns the RdYlBu color scheme with *n* colors; *n* must be in the range [3,11].

<a href="#schemeRdYlGn" name="schemeRdYlGn">#</a> d3.<b>schemeRdYlGn</b>(<i>n</i>)

<img src="https://raw.githubusercontent.com/d3/d3-scale-chromatic/master/img/rd-yl-gn.png" width="100%" height="40" alt="RdYlGn">

Returns the RdYlGn color scheme with *n* colors; *n* must be in the range [3,11].

<a href="#schemeSpectral" name="schemeSpectral">#</a> d3.<b>schemeSpectral</b>(<i>n</i>)

<img src="https://raw.githubusercontent.com/d3/d3-scale-chromatic/master/img/spectral.png" width="100%" height="40" alt="Spectral">

Returns the Spectral color scheme with *n* colors; *n* must be in the range [3,11].

### Sequential (Single Hue)

<a href="#schemeBlues" name="schemeBlues">#</a> d3.<b>schemeBlues</b>(<i>n</i>)

<img src="https://raw.githubusercontent.com/d3/d3-scale-chromatic/master/img/blues.png" width="100%" height="40" alt="Blues">

Returns the Blues color scheme with *n* colors; *n* must be in the range [3,9].

<a href="#schemeGreens" name="schemeGreens">#</a> d3.<b>schemeGreens</b>(<i>n</i>)

<img src="https://raw.githubusercontent.com/d3/d3-scale-chromatic/master/img/greens.png" width="100%" height="40" alt="Greens">

Returns the Greens color scheme with *n* colors; *n* must be in the range [3,9].

<a href="#schemeGreys" name="schemeGreys">#</a> d3.<b>schemeGreys</b>(<i>n</i>)

<img src="https://raw.githubusercontent.com/d3/d3-scale-chromatic/master/img/greys.png" width="100%" height="40" alt="Greys">

Returns the Greys color scheme with *n* colors; *n* must be in the range [3,9].

<a href="#schemeOranges" name="schemeOranges">#</a> d3.<b>schemeOranges</b>(<i>n</i>)

<img src="https://raw.githubusercontent.com/d3/d3-scale-chromatic/master/img/oranges.png" width="100%" height="40" alt="Oranges">

Returns the Oranges color scheme with *n* colors; *n* must be in the range [3,9].

<a href="#schemePurples" name="schemePurples">#</a> d3.<b>schemePurples</b>(<i>n</i>)

<img src="https://raw.githubusercontent.com/d3/d3-scale-chromatic/master/img/purples.png" width="100%" height="40" alt="Purples">

Returns the Purples color scheme with *n* colors; *n* must be in the range [3,9].

<a href="#schemeReds" name="schemeReds">#</a> d3.<b>schemeReds</b>(<i>n</i>)

<img src="https://raw.githubusercontent.com/d3/d3-scale-chromatic/master/img/reds.png" width="100%" height="40" alt="Reds">

Returns the Reds color scheme with *n* colors; *n* must be in the range [3,9].

### Sequential (Multi-Hue)

<a href="#schemeBuGn" name="schemeBuGn">#</a> d3.<b>schemeBuGn</b>(<i>n</i>)

<img src="https://raw.githubusercontent.com/d3/d3-scale-chromatic/master/img/bu-gn.png" width="100%" height="40" alt="Reds">

Returns the BuGn color scheme with *n* colors; *n* must be in the range [3,9].

<a href="#schemeBuPu" name="schemeBuPu">#</a> d3.<b>schemeBuPu</b>(<i>n</i>)

<img src="https://raw.githubusercontent.com/d3/d3-scale-chromatic/master/img/bu-pu.png" width="100%" height="40" alt="Reds">

Returns the BuPu color scheme with *n* colors; *n* must be in the range [3,9].

<a href="#schemeGnBu" name="schemeGnBu">#</a> d3.<b>schemeGnBu</b>(<i>n</i>)

<img src="https://raw.githubusercontent.com/d3/d3-scale-chromatic/master/img/gn-bu.png" width="100%" height="40" alt="Reds">

Returns the GnBu color scheme with *n* colors; *n* must be in the range [3,9].

<a href="#schemeOrRd" name="schemeOrRd">#</a> d3.<b>schemeOrRd</b>(<i>n</i>)

<img src="https://raw.githubusercontent.com/d3/d3-scale-chromatic/master/img/or-rd.png" width="100%" height="40" alt="Reds">

Returns the OrRd color scheme with *n* colors; *n* must be in the range [3,9].

<a href="#schemePuBuGn" name="schemePuBuGn">#</a> d3.<b>schemePuBuGn</b>(<i>n</i>)

<img src="https://raw.githubusercontent.com/d3/d3-scale-chromatic/master/img/pu-bu-gn.png" width="100%" height="40" alt="Reds">

Returns the PuBuGn color scheme with *n* colors; *n* must be in the range [3,9].

<a href="#schemePuBu" name="schemePuBu">#</a> d3.<b>schemePuBu</b>(<i>n</i>)

<img src="https://raw.githubusercontent.com/d3/d3-scale-chromatic/master/img/pu-bu.png" width="100%" height="40" alt="Reds">

Returns the PuBu color scheme with *n* colors; *n* must be in the range [3,9].

<a href="#schemePuRd" name="schemePuRd">#</a> d3.<b>schemePuRd</b>(<i>n</i>)

<img src="https://raw.githubusercontent.com/d3/d3-scale-chromatic/master/img/pu-rd.png" width="100%" height="40" alt="Reds">

Returns the PuRd color scheme with *n* colors; *n* must be in the range [3,9].

<a href="#schemeRdPu" name="schemeRdPu">#</a> d3.<b>schemeRdPu</b>(<i>n</i>)

<img src="https://raw.githubusercontent.com/d3/d3-scale-chromatic/master/img/rd-pu.png" width="100%" height="40" alt="Reds">

Returns the RdPu color scheme with *n* colors; *n* must be in the range [3,9].

<a href="#schemeYlGnBu" name="schemeYlGnBu">#</a> d3.<b>schemeYlGnBu</b>(<i>n</i>)

<img src="https://raw.githubusercontent.com/d3/d3-scale-chromatic/master/img/yl-gn-bu.png" width="100%" height="40" alt="Reds">

Returns the YlGnBu color scheme with *n* colors; *n* must be in the range [3,9].

<a href="#schemeYlGn" name="schemeYlGn">#</a> d3.<b>schemeYlGn</b>(<i>n</i>)

<img src="https://raw.githubusercontent.com/d3/d3-scale-chromatic/master/img/yl-gn.png" width="100%" height="40" alt="Reds">

Returns the YlGn color scheme with *n* colors; *n* must be in the range [3,9].

<a href="#schemeYlOrBr" name="schemeYlOrBr">#</a> d3.<b>schemeYlOrBr</b>(<i>n</i>)

<img src="https://raw.githubusercontent.com/d3/d3-scale-chromatic/master/img/yl-or-br.png" width="100%" height="40" alt="Reds">

Returns the YlOrBr color scheme with *n* colors; *n* must be in the range [3,9].

<a href="#schemeYlOrRd" name="schemeYlOrRd">#</a> d3.<b>schemeYlOrRd</b>(<i>n</i>)

<img src="https://raw.githubusercontent.com/d3/d3-scale-chromatic/master/img/yl-or-rd.png" width="100%" height="40" alt="Reds">

Returns the YlOrRd color scheme with *n* colors; *n* must be in the range [3,9].
