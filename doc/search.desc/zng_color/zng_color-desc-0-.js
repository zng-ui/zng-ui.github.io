searchState.loadedDescShard("zng_color", 0, "Color and gradient types, functions and macros, <code>Rgba</code>, …\nDefines the preferred color scheme in a context.\nCreates a color with the hue and saturation of the …\nDarkens the background color to reflect the foreground …\nBrightens the background color to reflect the foreground …\nRepresents a dark and light <em>color</em>.\nColor scheme preference.\nLight text, dark background.\nSelects the darker of the colors.\nSubtracts the darker of the two constituent colors from …\nProduces an effect similar to that of the <em>difference</em> mode …\nMultiplies or screens the colors, depending on the …\nHSL + alpha.\nSpherical linear interpolation in Hue (shorter path), …\nLinear interpolate SLA, spherical linear interpolation in …\nLinear interpolation in each HSLA component.\nHSV + alpha\nCreates a color with the hue of the foreground color and …\nDefines the color space for color interpolation.\nDark text, light background.\nSelects the lighter of the colors.\nCreates a color with the luminosity of the foreground …\nColor mix and adjustment methods.\nColor mix blend mode.\nMultiply the colors.\nNormal alpha blend of the foreground color over the …\nMultiplies or screens the colors, depending on the …\nPre-multiplied RGB + alpha.\nWebrender <code>MixBlendMode</code>.\nRGB + alpha.\nLinear interpolation in each RGBA component.\nColor functions argument conversion helper.\nCreates a color with the saturation of the foreground …\nMultiply the colors, then complements the result.\nDarkens or lightens the colors, depending on the …\nAlpha channel value, in the <code>[0.0..=1.0]</code> range.\nAlpha channel value, in the <code>[0.0..=1.0]</code> range.\nAlpha channel in the <code>[0.0..=1.0]</code> range, zero is invisible, …\nAlpha channel in the <code>[0.0..=1.0]</code> range, zero is invisible, …\nBlue channel value, in the <code>[0.0..=1.0]</code> range.\n<code>Rgba::blue</code> multiplied by <code>alpha</code>.\nGets the color for the scheme.\nCreate a variable that selects the <code>ColorPair</code> highlight …\nCreate a variable that maps to <code>dark</code> or <code>light</code> depending on …\nCreate a variable that selects the <code>ColorPair</code> depending on …\nNamed primary, secondary and tertiary colors.\nColor used when <code>ColorScheme::Dark</code>.\nSubtracts the <code>amount</code> from the color <em>lightness</em>.\nLight.\nSubtracts the <code>amount</code> from the color <em>saturation</em>.\nColor filter effect.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nFrom <code>(dark, light)</code> tuple.\nFrom same color to both.\nFrom same color to both.\nFrom same color to both.\nReturns the argument unchanged.\nReturns the argument unchanged.\nGradient types.\nGreen channel value, in the <code>[0.0..=1.0]</code> range.\n<code>Rgba::green</code> multiplied by <code>alpha</code>.\nHexadecimal color literal.\nOverlay white with <code>highlight</code> amount as alpha over the <code>dark</code> …\nOverlay black with <code>highlight</code> amount as alpha over the <code>light</code>…\nHSL color, opaque, alpha is set to <code>1.0</code>.\nHSLA color.\nAnimation sampler that sets the <code>lerp_space</code> to …\nAnimation sampler that sets the <code>lerp_space</code> to …\nHSV color, opaque, alpha is set to <code>1.0</code>.\nHSVA color.\nHue color angle in the <code>[0.0..=360.0]</code> range.\nHue color angle in the <code>[0.0..=360.0]</code> range.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nFrom same color to both.\nConversion to positional color.\nFrom same color to both.\nConversion to positional color.\nFrom same color to both.\nConversion to positional color.\nIf the saturation is more than zero.\nDefault implementation of lerp for <code>Rgba</code> in apps.\nGets the lerp space used for color interpolation.\nColor used when <code>ColorScheme::Light</code>.\nAdds the <code>amount</code> to the color <em>lightness</em>.\nLightness amount in the <code>[0.0..=1.0]</code> range, zero is black, …\nMixAdjust <code>background</code> over <code>self</code> using the <code>mode</code>.\nMixAdjust <code>background</code> over <code>self</code> using the <code>mode</code>.\nMixAdjust <code>self</code> over <code>background</code> using the <code>MixBlendMode::</code>…\nMixAdjust <code>background</code> over <code>self</code> using the …\nMixAdjust <code>background</code> over <code>self</code> using the …\nMixAdjust <code>background</code> over <code>self</code> using the …\nMixAdjust <code>background</code> over <code>self</code> using the …\nMixAdjust <code>background</code> over <code>self</code> using the …\nMixAdjust <code>background</code> over <code>self</code> using the …\nMixAdjust <code>self</code> over <code>background</code> using the <code>MixBlendMode::</code>Hue`…\nMixAdjust <code>background</code> over <code>self</code> using the …\nMixAdjust <code>self</code> over <code>background</code> using the <code>MixBlendMode::</code>…\nMixAdjust <code>background</code> over <code>self</code> using the …\nMixAdjust <code>background</code> over <code>self</code> using the …\nMixAdjust <code>background</code> over <code>self</code> using the …\nMixAdjust <code>self</code> over <code>background</code> using the <code>MixBlendMode::</code>…\nMixAdjust <code>background</code> over <code>self</code> using the …\nMixAdjust <code>background</code> over <code>self</code> using the …\nNew from RGB of a the same type and A that can be of a …\nRed channel value, in the <code>[0.0..=1.0]</code> range.\n<code>Rgba::red</code> multiplied by <code>alpha</code>.\nRGB color, opaque, alpha is set to <code>1.0</code>.\nRGBA color.\nAnimation sampler that sets the <code>lerp_space</code> to …\nSaturation amount in the <code>[0.0..=1.0]</code> range, zero is gray, …\nSaturation amount in the <code>[0.0..=1.0]</code> range, zero is gray, …\nSet the <code>alpha</code> component from any type that converts to …\nSets the <code>alpha</code> value.\nSets the <code>alpha</code> value.\nSet the <code>blue</code> component from any type that converts to …\nSet the <code>green</code> component from any type that converts to …\nSets the <code>hue</code> color angle.\nSets the <code>hue</code> color angle.\nSets the <code>lightness</code> value.\nSet the <code>red</code> component from any type that converts to …\nSets the <code>saturation</code> value.\nSets the <code>saturation</code> value.\nSets the <code>value</code>.\nInterpolate in the <code>LerpSpace::Hsla</code> mode.\nInterpolate in the <code>LerpSpace::HslaChromatic</code> mode.\nCreates a <code>GradientStops</code> containing the arguments.\nConvert a copy to [R, G, B, A] bytes.\nReturns a copy of the color with the alpha set to <code>0</code>.\nBrightness amount in the <code>[0.0..=1.0]</code> range, zero is black, …\nNamed web colors.\nReturns a copy of the color with a new <code>alpha</code> value.\nReturns a copy of this color with a new <code>alpha</code>.\nReturns a copy of this color with a new <code>alpha</code>.\nReturns a copy of the color with a new <code>blue</code> value.\nReturns a copy of the color with a new <code>green</code> value.\nReturns a copy of this color with a new <code>hue</code>.\nReturns a copy of this color with a new <code>hue</code>.\nCalls <code>f</code> with <code>lerp_space</code> set to <code>space</code>.\nReturns a copy of this color with a new <code>lightness</code>.\nReturns a copy of this color with a new <code>lightness</code>.\nReturns a copy of the color with a new <code>red</code> value.\nReturns a copy of this color with a new <code>saturation</code>.\nReturns a copy of this color with a new <code>saturation</code>.\nReturns a copy of this color with a new <code>value</code>.\n Azure, <code>#0080FF</code>, <code>rgb(0, 128, 255)</code>.\n Black, <code>#000000</code>, <code>rgb(0, 0, 0)</code>.\n Blue, <code>#0000FF</code>, <code>rgb(0, 0, 255)</code>.\n Cyan, <code>#00FFFF</code>, <code>rgb(0, 255, 255)</code>.\n Gray, <code>#808080</code>, <code>rgb(128, 128, 128)</code>.\n Green, <code>#00FF00</code>, <code>rgb(0, 255, 0)</code>.\n Lime, <code>#80FF00</code>, <code>rgb(128, 255, 0)</code>.\n Magenta, <code>#FF00FF</code>, <code>rgb(255, 0, 255)</code>.\n Orange, <code>#FF8000</code>, <code>rgb(255, 128, 0)</code>.\n Red, <code>#FF0000</code>, <code>rgb(255, 0, 0)</code>.\n Rose, <code>#FF0080</code>, <code>rgb(255, 0, 128)</code>.\n Spring, <code>#00FF80</code>, <code>rgb(0, 255, 128)</code>.\n Violet, <code>#8000FF</code>, <code>rgb(128, 0, 255)</code>.\n White, <code>#FFFFFF</code>, <code>rgb(255, 255, 255)</code>.\n Yellow, <code>#FFFF00</code>, <code>rgb(255, 255, 0)</code>.\nRepresents a custom color filter.\nA color filter or combination of filters.\nA computed <code>Filter</code>, ready for Webrender.\nAdd a blue effect to the filter, the blue <code>radius</code> is …\nAdd a brightness adjustment to the filter, zero removes …\nCustom filter.\nAdd a contrast adjustment to the filter, zero removes all …\nAdd a drop-shadow to the effect.\nAdd a filter that fills the pixel space with <code>color</code>.\nReturns the argument unchanged.\nReturns the argument unchanged.\nAdd a grayscale color effect to the filter, zero is the …\nAdd a filter that adds the <code>angle</code> to each color <code>hue</code> value.\nMatrix that does not alter any color.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nAdd a color inversion filter, zero does not invert, one …\nCompute a <code>RenderFilter</code> in the current <code>LAYOUT</code> context.\nReturns <code>true</code> if this filter is affected by the layout …\nNew default empty.\nNew <code>Filter::blur</code>.\nNew <code>Filter::brightness</code>.\nNew <code>Filter::color_matrix</code>.\nNew <code>Filter::contrast</code>.\nNew <code>Filter::drop_shadow</code>.\nNew <code>Filter::flood</code>.\nNew <code>Filter::grayscale</code>.\nNew <code>Filter::hue_rotate</code>.\nNew <code>Filter::invert</code>.\nNew <code>Filter::opacity</code>.\nNew <code>Filter::saturate</code>.\nNew <code>Filter::sepia</code>.\nAdd an opacity adjustment to the filter, zero is fully …\nAdd a saturation adjustment to the filter, zero fully …\nAdd a sepia color effect to the filter, zero is the input …\nCompute a <code>RenderFilter</code> if the filter is not affected by …\nLine defined by an angle. 0º is a line from …\nThe color values at the ends of the gradient vector fill …\nLength to the closest corner from the center point.\nLength to the closest edge from the center point.\nColor stop.\nMidway point between two colors.\nA color stop in a gradient.\nSpecifies how to draw the gradient outside the first and …\nLength to the farthest corner from the center point.\nLength to the farthest edge from the center point.\nThe radial gradient radius length in both dimensions.\nThe radial gradient radius base length.\nA stop in a gradient.\nStops in a gradient.\nLine defined by two points. If the points are inside the …\nThe angle or line that defines a linear gradient.\nThe gradient is repeated alternating direction until the …\nGradient extend mode supported by the render.\nComputed <code>GradientStop</code>.\nThe gradient is repeated until the space is filled.\nHow the base length is calculated. The base length is the …\nEnable circular radius.\nIf the gradient is circular or elliptical.\nEllipse radii relative from center to the closest corner.\nEllipse radii relative from center to the closest edge.\nColor at the offset.\nThe color.\n<code>farthest_corner(100.pct())</code>\nLast color stop.\nEllipse radii relative from center to the farthest corner.\nEllipse radii relative from center to the farthest edge.\n<code>Reflect</code> is converted to <code>Repeat</code>, you need to prepare the …\nReturns the argument unchanged.\nReturns the argument unchanged.\nConversion to <code>Length::Factor</code> and to radius.\nConversion to <code>Length::Px</code> and to radius.\nReturns the argument unchanged.\nConversion to <code>Length::DipF32</code> and to radius.\nEllipse fill the base radius.\nConversion to <code>Length::Factor</code> and to radius.\nEllipse <code>GradientRadiusBase</code> and ellipse radius.\nConversion to <code>Length::Dip</code> and to radius.\nConversion to <code>Length::Dip</code> and to radius.\nEllipse <code>GradientRadius::farthest_corner</code>.\nEllipse <code>GradientRadius::farthest_corner</code>.\nReturns the argument unchanged.\nReturns the argument unchanged.\nConversion to <code>Length::Dip</code> color hint.\nConversion to <code>Length::Factor</code> color hint.\nConversion to positional color.\nConversion to positional color.\nConversion to <code>Length::Factor</code> color hint.\nConversion to positional color.\nReturns the argument unchanged.\nConversion to <code>Length::Dip</code> color hint.\n<code>GradientStops::from_stops</code>\n<code>GradientStops::from_colors</code>\n<code>GradientStops::from_colors</code>\n<code>GradientStops::from_colors</code>\n<code>GradientStops::from_colors</code>\n<code>GradientStops::from_stops</code>\n<code>GradientStops::from_stops</code>\n<code>GradientStops::from_stops</code>\nReturns the argument unchanged.\n<code>GradientStops::from_stops</code>\n<code>GradientStops::from_stops</code>\n<code>GradientStops::from_colors</code>\n<code>GradientStops::from_colors</code>\n<code>GradientStops::from_stops</code>\n<code>GradientStops::from_colors</code>\n<code>GradientStops::from_stops</code>\n<code>GradientStops::from_stops</code>\n<code>GradientStops::from_colors</code>\n<code>GradientStops::from_colors</code>\nGradient stops from colors spaced equally.\nGradient stops from color stops.\nGradient stops from colors forming stripes of same length.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nEllipse fill the base radius.\nIf a calculated layout offset is positional.\nIf this color stop offset is resolved relative to the …\nCompute the radius in the current <code>LAYOUT</code> context.\nCompute a <code>RenderGradientStop</code> in the current <code>LAYOUT</code> context.\nComputes the linear gradient in the current <code>LAYOUT</code> context.\nComputes the layout for a radial gradient.\nNumber of stops.\nLinear interpolates for same axis kinds, or changes in one …\nOptional stops between start and end.\nNew color stop with a defined offset.\nGradients stops with two colors from <code>start</code> to <code>end</code>.\nNew color stop with a undefined offset.\nOffset in pixels.\nOffset point where the <code>color</code> is fully visible.\nThe length of the rendered gradient stops.\nSet the alpha of all colors in the gradient.\nFirst color stop.\nCreates a <code>GradientStops</code> containing the arguments.\n Alice Blue, <code>#F0F8FF</code>, <code>rgb(240, 248, 255)</code>.\n Antique White, <code>#FAEBD7</code>, <code>rgb(250, 235, 215)</code>.\n Aqua, <code>#00FFFF</code>, <code>rgb(0, 255, 255)</code>.\n Aquamarine, <code>#7FFFD4</code>, <code>rgb(127, 255, 212)</code>.\n Azure, <code>#F0FFFF</code>, <code>rgb(240, 255, 255)</code>.\n Beige, <code>#F5F5DC</code>, <code>rgb(245, 245, 220)</code>.\n Bisque, <code>#FFE4C4</code>, <code>rgb(255, 228, 196)</code>.\n Black, <code>#000000</code>, <code>rgb(0, 0, 0)</code>.\n Blanched Almond, <code>#FFEBCD</code>, <code>rgb(255, 235, 205)</code>.\n Blue, <code>#0000FF</code>, <code>rgb(0, 0, 255)</code>.\n Blue Violet, <code>#8A2BE2</code>, <code>rgb(138, 43, 226)</code>.\n Brown, <code>#A52A2A</code>, <code>rgb(165, 42, 42)</code>.\n Burly Wood, <code>#DEB887</code>, <code>rgb(222, 184, 135)</code>.\n Cadet Blue, <code>#5F9EA0</code>, <code>rgb(95, 158, 160)</code>.\n Chartreuse, <code>#7FFF00</code>, <code>rgb(127, 255, 0)</code>.\n Chocolate, <code>#D2691E</code>, <code>rgb(210, 105, 30)</code>.\n Coral, <code>#FF7F50</code>, <code>rgb(255, 127, 80)</code>.\n Cornflower Blue, <code>#6495ED</code>, <code>rgb(100, 149, 237)</code>.\n Cornsilk, <code>#FFF8DC</code>, <code>rgb(255, 248, 220)</code>.\n Crimson, <code>#DC143C</code>, <code>rgb(220, 20, 60)</code>.\n Cyan, <code>#00FFFF</code>, <code>rgb(0, 255, 255)</code>.\n Dark Blue, <code>#00008B</code>, <code>rgb(0, 0, 139)</code>.\n Dark Cyan, <code>#008B8B</code>, <code>rgb(0, 139, 139)</code>.\n Dark Goldenrod, <code>#B8860B</code>, <code>rgb(184, 134, 11)</code>.\n Dark Gray, <code>#A9A9A9</code>, <code>rgb(169, 169, 169)</code>.\n Dark Green, <code>#006400</code>, <code>rgb(0, 100, 0)</code>.\n Dark Khaki, <code>#BDB76B</code>, <code>rgb(189, 183, 107)</code>.\n Dark Magenta, <code>#8B008B</code>, <code>rgb(139, 0, 139)</code>.\n Dark Olive Green, <code>#556B2F</code>, <code>rgb(85, 107, 47)</code>.\n Dark Orange, <code>#FF8C00</code>, <code>rgb(255, 140, 0)</code>.\n Dark Orchid, <code>#9932CC</code>, <code>rgb(153, 50, 204)</code>.\n Dark Red, <code>#8B0000</code>, <code>rgb(139, 0, 0)</code>.\n Dark Salmon, <code>#E9967A</code>, <code>rgb(233, 150, 122)</code>.\n Dark Sea Green, <code>#8FBC8F</code>, <code>rgb(143, 188, 143)</code>.\n Dark Slate Blue, <code>#483D8B</code>, <code>rgb(72, 61, 139)</code>.\n Dark Slate Gray, <code>#2F4F4F</code>, <code>rgb(47, 79, 79)</code>.\n Dark Turquoise, <code>#00CED1</code>, <code>rgb(0, 206, 209)</code>.\n Dark Violet, <code>#9400D3</code>, <code>rgb(148, 0, 211)</code>.\n Deep Pink, <code>#FF1493</code>, <code>rgb(255, 20, 147)</code>.\n Deep Sky Blue, <code>#00BFFF</code>, <code>rgb(0, 191, 255)</code>.\n Dim Gray, <code>#696969</code>, <code>rgb(105, 105, 105)</code>.\n Dodger Blue, <code>#1E90FF</code>, <code>rgb(30, 144, 255)</code>.\n Fire Brick, <code>#B22222</code>, <code>rgb(178, 34, 34)</code>.\n Floral White, <code>#FFFAF0</code>, <code>rgb(255, 250, 240)</code>.\n Forest Green, <code>#228B22</code>, <code>rgb(34, 139, 34)</code>.\n Fuchsia, <code>#FF00FF</code>, <code>rgb(255, 0, 255)</code>.\n Gainsboro, <code>#DCDCDC</code>, <code>rgb(220, 220, 220)</code>.\n Ghost White, <code>#F8F8FF</code>, <code>rgb(248, 248, 255)</code>.\n Gold, <code>#FFD700</code>, <code>rgb(255, 215, 0)</code>.\n Goldenrod, <code>#DAA520</code>, <code>rgb(218, 165, 32)</code>.\n Gray, <code>#808080</code>, <code>rgb(128, 128, 128)</code>.\n Green, <code>#008000</code>, <code>rgb(0, 128, 0)</code>.\n Green Yellow, <code>#ADFF2F</code>, <code>rgb(173, 255, 47)</code>.\n Honeydew, <code>#F0FFF0</code>, <code>rgb(240, 255, 240)</code>.\n Hot Pink, <code>#FF69B4</code>, <code>rgb(255, 105, 180)</code>.\n Indian Red, <code>#CD5C5C</code>, <code>rgb(205, 92, 92)</code>.\n Indigo, <code>#4B0082</code>, <code>rgb(75, 0, 130)</code>.\n Ivory, <code>#FFFFF0</code>, <code>rgb(255, 255, 240)</code>.\n Khaki, <code>#F0E68C</code>, <code>rgb(240, 230, 140)</code>.\n Lavender, <code>#E6E6FA</code>, <code>rgb(230, 230, 250)</code>.\n Lavender Blush, <code>#FFF0F5</code>, <code>rgb(255, 240, 245)</code>.\n Lawn Green, <code>#7CFC00</code>, <code>rgb(124, 252, 0)</code>.\n Lemon Chiffon, <code>#FFFACD</code>, <code>rgb(255, 250, 205)</code>.\n Light Blue, <code>#ADD8E6</code>, <code>rgb(173, 216, 230)</code>.\n Light Coral, <code>#F08080</code>, <code>rgb(240, 128, 128)</code>.\n Light Cyan, <code>#E0FFFF</code>, <code>rgb(224, 255, 255)</code>.\n Light Goldenrod Yellow, <code>#FAFAD2</code>, <code>rgb(250, 250, 210)</code>.\n Light Gray, <code>#D3D3D3</code>, <code>rgb(211, 211, 211)</code>.\n Light Green, <code>#90EE90</code>, <code>rgb(144, 238, 144)</code>.\n Light Pink, <code>#FFB6C1</code>, <code>rgb(255, 182, 193)</code>.\n Light Salmon, <code>#FFA07A</code>, <code>rgb(255, 160, 122)</code>.\n Light Sea Green, <code>#20B2AA</code>, <code>rgb(32, 178, 170)</code>.\n Light Sky Blue, <code>#87CEFA</code>, <code>rgb(135, 206, 250)</code>.\n Light Slate Gray, <code>#778899</code>, <code>rgb(119, 136, 153)</code>.\n Light Steel Blue, <code>#B0C4DE</code>, <code>rgb(176, 196, 222)</code>.\n Light Yellow, <code>#FFFFE0</code>, <code>rgb(255, 255, 224)</code>.\n Lime, <code>#00FF00</code>, <code>rgb(0, 255, 0)</code>.\n Lime Green, <code>#32CD32</code>, <code>rgb(50, 205, 50)</code>.\n Linen, <code>#FAF0E6</code>, <code>rgb(250, 240, 230)</code>.\n Magenta, <code>#FF00FF</code>, <code>rgb(255, 0, 255)</code>.\n Maroon, <code>#800000</code>, <code>rgb(128, 0, 0)</code>.\n Medium Aquamarine, <code>#66CDAA</code>, <code>rgb(102, 205, 170)</code>.\n Medium Blue, <code>#0000CD</code>, <code>rgb(0, 0, 205)</code>.\n Medium Orchid, <code>#BA55D3</code>, <code>rgb(186, 85, 211)</code>.\n Medium Purple, <code>#9370DB</code>, <code>rgb(147, 112, 219)</code>.\n Medium Sea Green, <code>#3CB371</code>, <code>rgb(60, 179, 113)</code>.\n Medium Slate Blue, <code>#7B68EE</code>, <code>rgb(123, 104, 238)</code>.\n Medium Spring Green, <code>#00FA9A</code>, <code>rgb(0, 250, 154)</code>.\n Medium Turquoise, <code>#48D1CC</code>, <code>rgb(72, 209, 204)</code>.\n Medium Violet Red, <code>#C71585</code>, <code>rgb(199, 21, 133)</code>.\n Midnight Blue, <code>#191970</code>, <code>rgb(25, 25, 112)</code>.\n Mint Cream, <code>#F5FFFA</code>, <code>rgb(245, 255, 250)</code>.\n Misty Rose, <code>#FFE4E1</code>, <code>rgb(255, 228, 225)</code>.\n Moccasin, <code>#FFE4B5</code>, <code>rgb(255, 228, 181)</code>.\n Navajo White, <code>#FFDEAD</code>, <code>rgb(255, 222, 173)</code>.\n Navy, <code>#000080</code>, <code>rgb(0, 0, 128)</code>.\n Old Lace, <code>#FDF5E6</code>, <code>rgb(253, 245, 230)</code>.\n Olive, <code>#808000</code>, <code>rgb(128, 128, 0)</code>.\n Olive Drab, <code>#6B8E23</code>, <code>rgb(107, 142, 35)</code>.\n Orange, <code>#FFA500</code>, <code>rgb(255, 165, 0)</code>.\n Orange Red, <code>#FF4500</code>, <code>rgb(255, 69, 0)</code>.\n Orchid, <code>#DA70D6</code>, <code>rgb(218, 112, 214)</code>.\n Pale Goldenrod, <code>#EEE8AA</code>, <code>rgb(238, 232, 170)</code>.\n Pale Green, <code>#98FB98</code>, <code>rgb(152, 251, 152)</code>.\n Pale Turquoise, <code>#AFEEEE</code>, <code>rgb(175, 238, 238)</code>.\n Pale Violet Red, <code>#DB7093</code>, <code>rgb(219, 112, 147)</code>.\n Papaya Whip, <code>#FFEFD5</code>, <code>rgb(255, 239, 213)</code>.\n Peach Puff, <code>#FFDAB9</code>, <code>rgb(255, 218, 185)</code>.\n Peru, <code>#CD853F</code>, <code>rgb(205, 133, 63)</code>.\n Pink, <code>#FFC0CB</code>, <code>rgb(255, 192, 203)</code>.\n Plum, <code>#DDA0DD</code>, <code>rgb(221, 160, 221)</code>.\n Powder Blue, <code>#B0E0E6</code>, <code>rgb(176, 224, 230)</code>.\n Purple, <code>#800080</code>, <code>rgb(128, 0, 128)</code>.\n Red, <code>#FF0000</code>, <code>rgb(255, 0, 0)</code>.\n Rosy Brown, <code>#BC8F8F</code>, <code>rgb(188, 143, 143)</code>.\n Royal Blue, <code>#4169E1</code>, <code>rgb(65, 105, 225)</code>.\n Saddle Brown, <code>#8B4513</code>, <code>rgb(139, 69, 19)</code>.\n Salmon, <code>#FA8072</code>, <code>rgb(250, 128, 114)</code>.\n Sandy Brown, <code>#F4A460</code>, <code>rgb(244, 164, 96)</code>.\n Seashell, <code>#FFF5EE</code>, <code>rgb(255, 245, 238)</code>.\n Sea Green, <code>#2E8B57</code>, <code>rgb(46, 139, 87)</code>.\n Sienna, <code>#A0522D</code>, <code>rgb(160, 82, 45)</code>.\n Silver, <code>#C0C0C0</code>, <code>rgb(192, 192, 192)</code>.\n Sky Blue, <code>#87CEEB</code>, <code>rgb(135, 206, 235)</code>.\n Slate Blue, <code>#6A5ACD</code>, <code>rgb(106, 90, 205)</code>.\n Slate Gray, <code>#708090</code>, <code>rgb(112, 128, 144)</code>.\n Snow, <code>#FFFAFA</code>, <code>rgb(255, 250, 250)</code>.\n Spring Green, <code>#00FF7F</code>, <code>rgb(0, 255, 127)</code>.\n Steel Blue, <code>#4682B4</code>, <code>rgb(70, 130, 180)</code>.\n Tan, <code>#D2B48C</code>, <code>rgb(210, 180, 140)</code>.\n Teal, <code>#008080</code>, <code>rgb(0, 128, 128)</code>.\n Thistle, <code>#D8BFD8</code>, <code>rgb(216, 191, 216)</code>.\n Tomato, <code>#FF6347</code>, <code>rgb(255, 99, 71)</code>.\n Turquoise, <code>#40E0D0</code>, <code>rgb(64, 224, 208)</code>.\n Violet, <code>#EE82EE</code>, <code>rgb(238, 130, 238)</code>.\n Wheat, <code>#F5DEB3</code>, <code>rgb(245, 222, 179)</code>.\n White, <code>#FFFFFF</code>, <code>rgb(255, 255, 255)</code>.\n White Smoke, <code>#F5F5F5</code>, <code>rgb(245, 245, 245)</code>.\n Yellow, <code>#FFFF00</code>, <code>rgb(255, 255, 0)</code>.\n Yellow Green, <code>#9ACD32</code>, <code>rgb(154, 205, 50)</code>.")