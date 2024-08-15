(function() {var type_impls = {
"zng_layout":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-CornerRadius2D%3CT,+U%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/zng_unit/corner_radius.rs.html#30\">source</a><a href=\"#impl-Clone-for-CornerRadius2D%3CT,+U%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, U&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"zng_layout/unit/struct.CornerRadius2D.html\" title=\"struct zng_layout::unit::CornerRadius2D\">CornerRadius2D</a>&lt;T, U&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/zng_unit/corner_radius.rs.html#31\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.80.1/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"zng_layout/unit/struct.CornerRadius2D.html\" title=\"struct zng_layout::unit::CornerRadius2D\">CornerRadius2D</a>&lt;T, U&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.80.1/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.80.1/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.80.1/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.1/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.80.1/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","zng_layout::unit::PxCornerRadius","zng_layout::unit::DipCornerRadius"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-CornerRadius2D%3CT,+U%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/zng_unit/corner_radius.rs.html#41\">source</a><a href=\"#impl-CornerRadius2D%3CT,+U%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, U&gt; <a class=\"struct\" href=\"zng_layout/unit/struct.CornerRadius2D.html\" title=\"struct zng_layout::unit::CornerRadius2D\">CornerRadius2D</a>&lt;T, U&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.1/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> + <a class=\"trait\" href=\"https://docs.rs/num-traits/0.2/num_traits/identities/trait.Zero.html\" title=\"trait num_traits::identities::Zero\">Zero</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method\"><a class=\"src rightside\" href=\"src/zng_unit/corner_radius.rs.html#43-48\">source</a><h4 class=\"code-header\">pub fn <a href=\"zng_layout/unit/struct.CornerRadius2D.html#tymethod.new\" class=\"fn\">new</a>(\n    top_left: <a class=\"struct\" href=\"zng_layout/unit/euclid/struct.Size2D.html\" title=\"struct zng_layout::unit::euclid::Size2D\">Size2D</a>&lt;T, U&gt;,\n    top_right: <a class=\"struct\" href=\"zng_layout/unit/euclid/struct.Size2D.html\" title=\"struct zng_layout::unit::euclid::Size2D\">Size2D</a>&lt;T, U&gt;,\n    bottom_right: <a class=\"struct\" href=\"zng_layout/unit/euclid/struct.Size2D.html\" title=\"struct zng_layout::unit::euclid::Size2D\">Size2D</a>&lt;T, U&gt;,\n    bottom_left: <a class=\"struct\" href=\"zng_layout/unit/euclid/struct.Size2D.html\" title=\"struct zng_layout::unit::euclid::Size2D\">Size2D</a>&lt;T, U&gt;,\n) -&gt; <a class=\"struct\" href=\"zng_layout/unit/struct.CornerRadius2D.html\" title=\"struct zng_layout::unit::CornerRadius2D\">CornerRadius2D</a>&lt;T, U&gt;</h4></section></summary><div class=\"docblock\"><p>New with distinct values.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.new_all\" class=\"method\"><a class=\"src rightside\" href=\"src/zng_unit/corner_radius.rs.html#58\">source</a><h4 class=\"code-header\">pub fn <a href=\"zng_layout/unit/struct.CornerRadius2D.html#tymethod.new_all\" class=\"fn\">new_all</a>(radius: <a class=\"struct\" href=\"zng_layout/unit/euclid/struct.Size2D.html\" title=\"struct zng_layout::unit::euclid::Size2D\">Size2D</a>&lt;T, U&gt;) -&gt; <a class=\"struct\" href=\"zng_layout/unit/struct.CornerRadius2D.html\" title=\"struct zng_layout::unit::CornerRadius2D\">CornerRadius2D</a>&lt;T, U&gt;</h4></section></summary><div class=\"docblock\"><p>New all corners same radius.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.zero\" class=\"method\"><a class=\"src rightside\" href=\"src/zng_unit/corner_radius.rs.html#63\">source</a><h4 class=\"code-header\">pub fn <a href=\"zng_layout/unit/struct.CornerRadius2D.html#tymethod.zero\" class=\"fn\">zero</a>() -&gt; <a class=\"struct\" href=\"zng_layout/unit/struct.CornerRadius2D.html\" title=\"struct zng_layout::unit::CornerRadius2D\">CornerRadius2D</a>&lt;T, U&gt;</h4></section></summary><div class=\"docblock\"><p>All zeros.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.inflate\" class=\"method\"><a class=\"src rightside\" href=\"src/zng_unit/corner_radius.rs.html#68-70\">source</a><h4 class=\"code-header\">pub fn <a href=\"zng_layout/unit/struct.CornerRadius2D.html#tymethod.inflate\" class=\"fn\">inflate</a>(self, offsets: <a class=\"struct\" href=\"zng_layout/unit/struct.SideOffsets2D.html\" title=\"struct zng_layout::unit::SideOffsets2D\">SideOffsets2D</a>&lt;T, U&gt;) -&gt; <a class=\"struct\" href=\"zng_layout/unit/struct.CornerRadius2D.html\" title=\"struct zng_layout::unit::CornerRadius2D\">CornerRadius2D</a>&lt;T, U&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.1/core/ops/arith/trait.AddAssign.html\" title=\"trait core::ops::arith::AddAssign\">AddAssign</a>,</div></h4></section></summary><div class=\"docblock\"><p>Calculate the corner radius of an outer border around <code>self</code> to perfectly fit.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.deflate\" class=\"method\"><a class=\"src rightside\" href=\"src/zng_unit/corner_radius.rs.html#90-92\">source</a><h4 class=\"code-header\">pub fn <a href=\"zng_layout/unit/struct.CornerRadius2D.html#tymethod.deflate\" class=\"fn\">deflate</a>(self, offsets: <a class=\"struct\" href=\"zng_layout/unit/struct.SideOffsets2D.html\" title=\"struct zng_layout::unit::SideOffsets2D\">SideOffsets2D</a>&lt;T, U&gt;) -&gt; <a class=\"struct\" href=\"zng_layout/unit/struct.CornerRadius2D.html\" title=\"struct zng_layout::unit::CornerRadius2D\">CornerRadius2D</a>&lt;T, U&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.1/core/ops/arith/trait.SubAssign.html\" title=\"trait core::ops::arith::SubAssign\">SubAssign</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.1/core/cmp/trait.PartialOrd.html\" title=\"trait core::cmp::PartialOrd\">PartialOrd</a>,</div></h4></section></summary><div class=\"docblock\"><p>Calculate the corner radius of an inner border inside <code>self</code> to perfectly fit.</p>\n</div></details></div></details>",0,"zng_layout::unit::PxCornerRadius","zng_layout::unit::DipCornerRadius"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-CornerRadius2D%3CT,+U%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/zng_unit/corner_radius.rs.html#143\">source</a><a href=\"#impl-Debug-for-CornerRadius2D%3CT,+U%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, U&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"zng_layout/unit/struct.CornerRadius2D.html\" title=\"struct zng_layout::unit::CornerRadius2D\">CornerRadius2D</a>&lt;T, U&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/zng_unit/corner_radius.rs.html#144\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.80.1/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.80.1/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.80.1/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.1/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.80.1/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.80.1/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","zng_layout::unit::PxCornerRadius","zng_layout::unit::DipCornerRadius"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Default-for-CornerRadius2D%3CT,+U%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/zng_unit/corner_radius.rs.html#20\">source</a><a href=\"#impl-Default-for-CornerRadius2D%3CT,+U%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, U&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.1/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"zng_layout/unit/struct.CornerRadius2D.html\" title=\"struct zng_layout::unit::CornerRadius2D\">CornerRadius2D</a>&lt;T, U&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.1/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.default\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/zng_unit/corner_radius.rs.html#21\">source</a><a href=\"#method.default\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.80.1/core/default/trait.Default.html#tymethod.default\" class=\"fn\">default</a>() -&gt; <a class=\"struct\" href=\"zng_layout/unit/struct.CornerRadius2D.html\" title=\"struct zng_layout::unit::CornerRadius2D\">CornerRadius2D</a>&lt;T, U&gt;</h4></section></summary><div class='docblock'>Returns the “default value” for a type. <a href=\"https://doc.rust-lang.org/1.80.1/core/default/trait.Default.html#tymethod.default\">Read more</a></div></details></div></details>","Default","zng_layout::unit::PxCornerRadius","zng_layout::unit::DipCornerRadius"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Deserialize%3C'de%3E-for-CornerRadius2D%3CT,+U%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/zng_unit/corner_radius.rs.html#8\">source</a><a href=\"#impl-Deserialize%3C'de%3E-for-CornerRadius2D%3CT,+U%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'de, T, U&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.207/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"zng_layout/unit/struct.CornerRadius2D.html\" title=\"struct zng_layout::unit::CornerRadius2D\">CornerRadius2D</a>&lt;T, U&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.207/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt;,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.deserialize\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/zng_unit/corner_radius.rs.html#8\">source</a><a href=\"#method.deserialize\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://docs.rs/serde/1.0.207/serde/de/trait.Deserialize.html#tymethod.deserialize\" class=\"fn\">deserialize</a>&lt;__D&gt;(\n    __deserializer: __D,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.80.1/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"zng_layout/unit/struct.CornerRadius2D.html\" title=\"struct zng_layout::unit::CornerRadius2D\">CornerRadius2D</a>&lt;T, U&gt;, &lt;__D as <a class=\"trait\" href=\"https://docs.rs/serde/1.0.207/serde/de/trait.Deserializer.html\" title=\"trait serde::de::Deserializer\">Deserializer</a>&lt;'de&gt;&gt;::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.207/serde/de/trait.Deserializer.html#associatedtype.Error\" title=\"type serde::de::Deserializer::Error\">Error</a>&gt;<div class=\"where\">where\n    __D: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.207/serde/de/trait.Deserializer.html\" title=\"trait serde::de::Deserializer\">Deserializer</a>&lt;'de&gt;,</div></h4></section></summary><div class='docblock'>Deserialize this value from the given Serde deserializer. <a href=\"https://docs.rs/serde/1.0.207/serde/de/trait.Deserialize.html#tymethod.deserialize\">Read more</a></div></details></div></details>","Deserialize<'de>","zng_layout::unit::PxCornerRadius","zng_layout::unit::DipCornerRadius"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-DipToPx-for-CornerRadius2D%3CDip,+Dip%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/zng_unit/px_dip.rs.html#707\">source</a><a href=\"#impl-DipToPx-for-CornerRadius2D%3CDip,+Dip%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"zng_layout/unit/trait.DipToPx.html\" title=\"trait zng_layout::unit::DipToPx\">DipToPx</a> for <a class=\"struct\" href=\"zng_layout/unit/struct.CornerRadius2D.html\" title=\"struct zng_layout::unit::CornerRadius2D\">CornerRadius2D</a>&lt;<a class=\"struct\" href=\"zng_layout/unit/struct.Dip.html\" title=\"struct zng_layout::unit::Dip\">Dip</a>, <a class=\"struct\" href=\"zng_layout/unit/struct.Dip.html\" title=\"struct zng_layout::unit::Dip\">Dip</a>&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.AsPx\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.AsPx\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"zng_layout/unit/trait.DipToPx.html#associatedtype.AsPx\" class=\"associatedtype\">AsPx</a> = <a class=\"struct\" href=\"zng_layout/unit/struct.CornerRadius2D.html\" title=\"struct zng_layout::unit::CornerRadius2D\">CornerRadius2D</a>&lt;<a class=\"struct\" href=\"zng_layout/unit/struct.Px.html\" title=\"struct zng_layout::unit::Px\">Px</a>, <a class=\"struct\" href=\"zng_layout/unit/struct.Px.html\" title=\"struct zng_layout::unit::Px\">Px</a>&gt;</h4></section></summary><div class='docblock'><code>Self</code> equivalent in <a href=\"zng_layout/unit/struct.Px.html\" title=\"struct zng_layout::unit::Px\"><code>Px</code></a> units.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.to_px\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/zng_unit/px_dip.rs.html#710\">source</a><a href=\"#method.to_px\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"zng_layout/unit/trait.DipToPx.html#tymethod.to_px\" class=\"fn\">to_px</a>(\n    self,\n    scale_factor: <a class=\"struct\" href=\"zng_layout/unit/struct.Factor.html\" title=\"struct zng_layout::unit::Factor\">Factor</a>,\n) -&gt; &lt;<a class=\"struct\" href=\"zng_layout/unit/struct.CornerRadius2D.html\" title=\"struct zng_layout::unit::CornerRadius2D\">CornerRadius2D</a>&lt;<a class=\"struct\" href=\"zng_layout/unit/struct.Dip.html\" title=\"struct zng_layout::unit::Dip\">Dip</a>, <a class=\"struct\" href=\"zng_layout/unit/struct.Dip.html\" title=\"struct zng_layout::unit::Dip\">Dip</a>&gt; as <a class=\"trait\" href=\"zng_layout/unit/trait.DipToPx.html\" title=\"trait zng_layout::unit::DipToPx\">DipToPx</a>&gt;::<a class=\"associatedtype\" href=\"zng_layout/unit/trait.DipToPx.html#associatedtype.AsPx\" title=\"type zng_layout::unit::DipToPx::AsPx\">AsPx</a></h4></section></summary><div class='docblock'>Multiply the <a href=\"zng_layout/unit/struct.Dip.html\" title=\"struct zng_layout::unit::Dip\"><code>Dip</code></a> self by the scale.</div></details></div></details>","DipToPx","zng_layout::unit::DipCornerRadius"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialEq-for-CornerRadius2D%3CT,+U%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/zng_unit/corner_radius.rs.html#153\">source</a><a href=\"#impl-PartialEq-for-CornerRadius2D%3CT,+U%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, U&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.1/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> for <a class=\"struct\" href=\"zng_layout/unit/struct.CornerRadius2D.html\" title=\"struct zng_layout::unit::CornerRadius2D\">CornerRadius2D</a>&lt;T, U&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.1/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.eq\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/zng_unit/corner_radius.rs.html#154\">source</a><a href=\"#method.eq\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.80.1/core/cmp/trait.PartialEq.html#tymethod.eq\" class=\"fn\">eq</a>(&amp;self, other: &amp;<a class=\"struct\" href=\"zng_layout/unit/struct.CornerRadius2D.html\" title=\"struct zng_layout::unit::CornerRadius2D\">CornerRadius2D</a>&lt;T, U&gt;) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.1/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>self</code> and <code>other</code> values to be equal, and is used\nby <code>==</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ne\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.80.1/src/core/cmp.rs.html#263\">source</a></span><a href=\"#method.ne\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.80.1/core/cmp/trait.PartialEq.html#method.ne\" class=\"fn\">ne</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.1/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.1/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>!=</code>. The default implementation is almost always\nsufficient, and should not be overridden without very good reason.</div></details></div></details>","PartialEq","zng_layout::unit::PxCornerRadius","zng_layout::unit::DipCornerRadius"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PxToDip-for-CornerRadius2D%3CPx,+Px%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/zng_unit/px_dip.rs.html#719\">source</a><a href=\"#impl-PxToDip-for-CornerRadius2D%3CPx,+Px%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"zng_layout/unit/trait.PxToDip.html\" title=\"trait zng_layout::unit::PxToDip\">PxToDip</a> for <a class=\"struct\" href=\"zng_layout/unit/struct.CornerRadius2D.html\" title=\"struct zng_layout::unit::CornerRadius2D\">CornerRadius2D</a>&lt;<a class=\"struct\" href=\"zng_layout/unit/struct.Px.html\" title=\"struct zng_layout::unit::Px\">Px</a>, <a class=\"struct\" href=\"zng_layout/unit/struct.Px.html\" title=\"struct zng_layout::unit::Px\">Px</a>&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.AsDip\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.AsDip\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"zng_layout/unit/trait.PxToDip.html#associatedtype.AsDip\" class=\"associatedtype\">AsDip</a> = <a class=\"struct\" href=\"zng_layout/unit/struct.CornerRadius2D.html\" title=\"struct zng_layout::unit::CornerRadius2D\">CornerRadius2D</a>&lt;<a class=\"struct\" href=\"zng_layout/unit/struct.Dip.html\" title=\"struct zng_layout::unit::Dip\">Dip</a>, <a class=\"struct\" href=\"zng_layout/unit/struct.Dip.html\" title=\"struct zng_layout::unit::Dip\">Dip</a>&gt;</h4></section></summary><div class='docblock'><code>Self</code> equivalent in <a href=\"zng_layout/unit/struct.Dip.html\" title=\"struct zng_layout::unit::Dip\"><code>Dip</code></a> units.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.to_dip\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/zng_unit/px_dip.rs.html#722\">source</a><a href=\"#method.to_dip\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"zng_layout/unit/trait.PxToDip.html#tymethod.to_dip\" class=\"fn\">to_dip</a>(\n    self,\n    scale_factor: <a class=\"struct\" href=\"zng_layout/unit/struct.Factor.html\" title=\"struct zng_layout::unit::Factor\">Factor</a>,\n) -&gt; &lt;<a class=\"struct\" href=\"zng_layout/unit/struct.CornerRadius2D.html\" title=\"struct zng_layout::unit::CornerRadius2D\">CornerRadius2D</a>&lt;<a class=\"struct\" href=\"zng_layout/unit/struct.Px.html\" title=\"struct zng_layout::unit::Px\">Px</a>, <a class=\"struct\" href=\"zng_layout/unit/struct.Px.html\" title=\"struct zng_layout::unit::Px\">Px</a>&gt; as <a class=\"trait\" href=\"zng_layout/unit/trait.PxToDip.html\" title=\"trait zng_layout::unit::PxToDip\">PxToDip</a>&gt;::<a class=\"associatedtype\" href=\"zng_layout/unit/trait.PxToDip.html#associatedtype.AsDip\" title=\"type zng_layout::unit::PxToDip::AsDip\">AsDip</a></h4></section></summary><div class='docblock'>Divide the <a href=\"zng_layout/unit/struct.Px.html\" title=\"struct zng_layout::unit::Px\"><code>Px</code></a> self by the scale.</div></details></div></details>","PxToDip","zng_layout::unit::PxCornerRadius"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Serialize-for-CornerRadius2D%3CT,+U%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/zng_unit/corner_radius.rs.html#8\">source</a><a href=\"#impl-Serialize-for-CornerRadius2D%3CT,+U%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, U&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.207/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"zng_layout/unit/struct.CornerRadius2D.html\" title=\"struct zng_layout::unit::CornerRadius2D\">CornerRadius2D</a>&lt;T, U&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.207/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.serialize\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/zng_unit/corner_radius.rs.html#8\">source</a><a href=\"#method.serialize\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://docs.rs/serde/1.0.207/serde/ser/trait.Serialize.html#tymethod.serialize\" class=\"fn\">serialize</a>&lt;__S&gt;(\n    &amp;self,\n    __serializer: __S,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.80.1/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;&lt;__S as <a class=\"trait\" href=\"https://docs.rs/serde/1.0.207/serde/ser/trait.Serializer.html\" title=\"trait serde::ser::Serializer\">Serializer</a>&gt;::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.207/serde/ser/trait.Serializer.html#associatedtype.Ok\" title=\"type serde::ser::Serializer::Ok\">Ok</a>, &lt;__S as <a class=\"trait\" href=\"https://docs.rs/serde/1.0.207/serde/ser/trait.Serializer.html\" title=\"trait serde::ser::Serializer\">Serializer</a>&gt;::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.207/serde/ser/trait.Serializer.html#associatedtype.Error\" title=\"type serde::ser::Serializer::Error\">Error</a>&gt;<div class=\"where\">where\n    __S: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.207/serde/ser/trait.Serializer.html\" title=\"trait serde::ser::Serializer\">Serializer</a>,</div></h4></section></summary><div class='docblock'>Serialize this value into the given Serde serializer. <a href=\"https://docs.rs/serde/1.0.207/serde/ser/trait.Serialize.html#tymethod.serialize\">Read more</a></div></details></div></details>","Serialize","zng_layout::unit::PxCornerRadius","zng_layout::unit::DipCornerRadius"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Transitionable-for-CornerRadius2D%3CT,+U%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/zng_var/impls.rs.html#175-178\">source</a><a href=\"#impl-Transitionable-for-CornerRadius2D%3CT,+U%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, U&gt; <a class=\"trait\" href=\"zng_var/animation/trait.Transitionable.html\" title=\"trait zng_var::animation::Transitionable\">Transitionable</a> for <a class=\"struct\" href=\"zng_layout/unit/struct.CornerRadius2D.html\" title=\"struct zng_layout::unit::CornerRadius2D\">CornerRadius2D</a>&lt;T, U&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"zng_var/animation/trait.Transitionable.html\" title=\"trait zng_var::animation::Transitionable\">Transitionable</a>,\n    U: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.1/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.1/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.1/core/any/trait.Any.html\" title=\"trait core::any::Any\">Any</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.lerp\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/zng_var/impls.rs.html#180\">source</a><a href=\"#method.lerp\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"zng_var/animation/trait.Transitionable.html#tymethod.lerp\" class=\"fn\">lerp</a>(self, to: &amp;<a class=\"struct\" href=\"zng_layout/unit/struct.CornerRadius2D.html\" title=\"struct zng_layout::unit::CornerRadius2D\">CornerRadius2D</a>&lt;T, U&gt;, step: <a class=\"struct\" href=\"zng_layout/unit/struct.Factor.html\" title=\"struct zng_layout::unit::Factor\">Factor</a>) -&gt; <a class=\"struct\" href=\"zng_layout/unit/struct.CornerRadius2D.html\" title=\"struct zng_layout::unit::CornerRadius2D\">CornerRadius2D</a>&lt;T, U&gt;</h4></section></summary><div class='docblock'>Sample the linear interpolation from <code>self</code> -&gt; <code>to</code> by <code>step</code>.  </div></details></div></details>","Transitionable","zng_layout::unit::PxCornerRadius","zng_layout::unit::DipCornerRadius"],["<section id=\"impl-Copy-for-CornerRadius2D%3CT,+U%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/zng_unit/corner_radius.rs.html#40\">source</a><a href=\"#impl-Copy-for-CornerRadius2D%3CT,+U%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, U&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.1/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"zng_layout/unit/struct.CornerRadius2D.html\" title=\"struct zng_layout::unit::CornerRadius2D\">CornerRadius2D</a>&lt;T, U&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.1/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>,</div></h3></section>","Copy","zng_layout::unit::PxCornerRadius","zng_layout::unit::DipCornerRadius"],["<section id=\"impl-Eq-for-CornerRadius2D%3CT,+U%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/zng_unit/corner_radius.rs.html#161\">source</a><a href=\"#impl-Eq-for-CornerRadius2D%3CT,+U%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, U&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.1/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"struct\" href=\"zng_layout/unit/struct.CornerRadius2D.html\" title=\"struct zng_layout::unit::CornerRadius2D\">CornerRadius2D</a>&lt;T, U&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.1/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>,</div></h3></section>","Eq","zng_layout::unit::PxCornerRadius","zng_layout::unit::DipCornerRadius"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()