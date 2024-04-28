(function() {var type_impls = {
"zng_layout":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-HomogeneousVector%3CT,+U%3E\" class=\"impl\"><a href=\"#impl-HomogeneousVector%3CT,+U%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, U&gt; <a class=\"struct\" href=\"zng_layout/unit/euclid/struct.HomogeneousVector.html\" title=\"struct zng_layout::unit::euclid::HomogeneousVector\">HomogeneousVector</a>&lt;T, U&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method\"><h4 class=\"code-header\">pub const fn <a href=\"zng_layout/unit/euclid/struct.HomogeneousVector.html#tymethod.new\" class=\"fn\">new</a>(x: T, y: T, z: T, w: T) -&gt; <a class=\"struct\" href=\"zng_layout/unit/euclid/struct.HomogeneousVector.html\" title=\"struct zng_layout::unit::euclid::HomogeneousVector\">HomogeneousVector</a>&lt;T, U&gt;</h4></section></summary><div class=\"docblock\"><p>Constructor taking scalar values directly.</p>\n</div></details></div></details>",0,"zng_layout::unit::euclid::default::HomogeneousVector"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-HomogeneousVector%3CT,+U%3E\" class=\"impl\"><a href=\"#impl-HomogeneousVector%3CT,+U%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, U&gt; <a class=\"struct\" href=\"zng_layout/unit/euclid/struct.HomogeneousVector.html\" title=\"struct zng_layout::unit::euclid::HomogeneousVector\">HomogeneousVector</a>&lt;T, U&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/ops/arith/trait.Div.html\" title=\"trait core::ops::arith::Div\">Div</a>&lt;Output = T&gt; + <a class=\"trait\" href=\"zng_layout/unit/euclid/num/trait.Zero.html\" title=\"trait zng_layout::unit::euclid::num::Zero\">Zero</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/cmp/trait.PartialOrd.html\" title=\"trait core::cmp::PartialOrd\">PartialOrd</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.to_point2d\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"zng_layout/unit/euclid/struct.HomogeneousVector.html#tymethod.to_point2d\" class=\"fn\">to_point2d</a>(self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.2/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"zng_layout/unit/euclid/struct.Point2D.html\" title=\"struct zng_layout::unit::euclid::Point2D\">Point2D</a>&lt;T, U&gt;&gt;</h4></section></summary><div class=\"docblock\"><p>Convert into Cartesian 2D point.</p>\n<p>Returns None if the point is on or behind the W=0 hemisphere.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.to_point3d\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"zng_layout/unit/euclid/struct.HomogeneousVector.html#tymethod.to_point3d\" class=\"fn\">to_point3d</a>(self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.2/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"zng_layout/unit/euclid/struct.Point3D.html\" title=\"struct zng_layout::unit::euclid::Point3D\">Point3D</a>&lt;T, U&gt;&gt;</h4></section></summary><div class=\"docblock\"><p>Convert into Cartesian 3D point.</p>\n<p>Returns None if the point is on or behind the W=0 hemisphere.</p>\n</div></details></div></details>",0,"zng_layout::unit::euclid::default::HomogeneousVector"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-HomogeneousVector%3CT,+U%3E\" class=\"impl\"><a href=\"#impl-Clone-for-HomogeneousVector%3CT,+U%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, U&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"zng_layout/unit/euclid/struct.HomogeneousVector.html\" title=\"struct zng_layout::unit::euclid::HomogeneousVector\">HomogeneousVector</a>&lt;T, U&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.2/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"zng_layout/unit/euclid/struct.HomogeneousVector.html\" title=\"struct zng_layout::unit::euclid::HomogeneousVector\">HomogeneousVector</a>&lt;T, U&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.77.2/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.77.2/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.2/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.77.2/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","zng_layout::unit::euclid::default::HomogeneousVector"],["<section id=\"impl-Eq-for-HomogeneousVector%3CT,+U%3E\" class=\"impl\"><a href=\"#impl-Eq-for-HomogeneousVector%3CT,+U%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, U&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"struct\" href=\"zng_layout/unit/euclid/struct.HomogeneousVector.html\" title=\"struct zng_layout::unit::euclid::HomogeneousVector\">HomogeneousVector</a>&lt;T, U&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>,</div></h3></section>","Eq","zng_layout::unit::euclid::default::HomogeneousVector"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Serialize-for-HomogeneousVector%3CT,+U%3E\" class=\"impl\"><a href=\"#impl-Serialize-for-HomogeneousVector%3CT,+U%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, U&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.199/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"zng_layout/unit/euclid/struct.HomogeneousVector.html\" title=\"struct zng_layout::unit::euclid::HomogeneousVector\">HomogeneousVector</a>&lt;T, U&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.199/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.serialize\" class=\"method trait-impl\"><a href=\"#method.serialize\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://docs.rs/serde/1.0.199/serde/ser/trait.Serialize.html#tymethod.serialize\" class=\"fn\">serialize</a>&lt;S&gt;(\n    &amp;self,\n    serializer: S\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.2/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;&lt;S as <a class=\"trait\" href=\"https://docs.rs/serde/1.0.199/serde/ser/trait.Serializer.html\" title=\"trait serde::ser::Serializer\">Serializer</a>&gt;::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.199/serde/ser/trait.Serializer.html#associatedtype.Ok\" title=\"type serde::ser::Serializer::Ok\">Ok</a>, &lt;S as <a class=\"trait\" href=\"https://docs.rs/serde/1.0.199/serde/ser/trait.Serializer.html\" title=\"trait serde::ser::Serializer\">Serializer</a>&gt;::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.199/serde/ser/trait.Serializer.html#associatedtype.Error\" title=\"type serde::ser::Serializer::Error\">Error</a>&gt;<div class=\"where\">where\n    S: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.199/serde/ser/trait.Serializer.html\" title=\"trait serde::ser::Serializer\">Serializer</a>,</div></h4></section></summary><div class='docblock'>Serialize this value into the given Serde serializer. <a href=\"https://docs.rs/serde/1.0.199/serde/ser/trait.Serialize.html#tymethod.serialize\">Read more</a></div></details></div></details>","Serialize","zng_layout::unit::euclid::default::HomogeneousVector"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Zeroable-for-HomogeneousVector%3CT,+U%3E\" class=\"impl\"><a href=\"#impl-Zeroable-for-HomogeneousVector%3CT,+U%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, U&gt; Zeroable for <a class=\"struct\" href=\"zng_layout/unit/euclid/struct.HomogeneousVector.html\" title=\"struct zng_layout::unit::euclid::HomogeneousVector\">HomogeneousVector</a>&lt;T, U&gt;<div class=\"where\">where\n    T: Zeroable,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.zeroed\" class=\"method trait-impl\"><a href=\"#method.zeroed\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">zeroed</a>() -&gt; Self</h4></section></summary><div class='docblock'>Calls <a href=\"https://doc.rust-lang.org/1.77.2/core/mem/fn.zeroed.html\" title=\"fn core::mem::zeroed\"><code>zeroed</code></a>. <a>Read more</a></div></details></div></details>","Zeroable","zng_layout::unit::euclid::default::HomogeneousVector"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Deserialize%3C'de%3E-for-HomogeneousVector%3CT,+U%3E\" class=\"impl\"><a href=\"#impl-Deserialize%3C'de%3E-for-HomogeneousVector%3CT,+U%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'de, T, U&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.199/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"zng_layout/unit/euclid/struct.HomogeneousVector.html\" title=\"struct zng_layout::unit::euclid::HomogeneousVector\">HomogeneousVector</a>&lt;T, U&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.199/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt;,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.deserialize\" class=\"method trait-impl\"><a href=\"#method.deserialize\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://docs.rs/serde/1.0.199/serde/de/trait.Deserialize.html#tymethod.deserialize\" class=\"fn\">deserialize</a>&lt;D&gt;(\n    deserializer: D\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.2/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"zng_layout/unit/euclid/struct.HomogeneousVector.html\" title=\"struct zng_layout::unit::euclid::HomogeneousVector\">HomogeneousVector</a>&lt;T, U&gt;, &lt;D as <a class=\"trait\" href=\"https://docs.rs/serde/1.0.199/serde/de/trait.Deserializer.html\" title=\"trait serde::de::Deserializer\">Deserializer</a>&lt;'de&gt;&gt;::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.199/serde/de/trait.Deserializer.html#associatedtype.Error\" title=\"type serde::de::Deserializer::Error\">Error</a>&gt;<div class=\"where\">where\n    D: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.199/serde/de/trait.Deserializer.html\" title=\"trait serde::de::Deserializer\">Deserializer</a>&lt;'de&gt;,</div></h4></section></summary><div class='docblock'>Deserialize this value from the given Serde deserializer. <a href=\"https://docs.rs/serde/1.0.199/serde/de/trait.Deserialize.html#tymethod.deserialize\">Read more</a></div></details></div></details>","Deserialize<'de>","zng_layout::unit::euclid::default::HomogeneousVector"],["<section id=\"impl-Pod-for-HomogeneousVector%3CT,+U%3E\" class=\"impl\"><a href=\"#impl-Pod-for-HomogeneousVector%3CT,+U%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, U&gt; Pod for <a class=\"struct\" href=\"zng_layout/unit/euclid/struct.HomogeneousVector.html\" title=\"struct zng_layout::unit::euclid::HomogeneousVector\">HomogeneousVector</a>&lt;T, U&gt;<div class=\"where\">where\n    T: Pod,\n    U: 'static,</div></h3></section>","Pod","zng_layout::unit::euclid::default::HomogeneousVector"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialEq-for-HomogeneousVector%3CT,+U%3E\" class=\"impl\"><a href=\"#impl-PartialEq-for-HomogeneousVector%3CT,+U%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, U&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> for <a class=\"struct\" href=\"zng_layout/unit/euclid/struct.HomogeneousVector.html\" title=\"struct zng_layout::unit::euclid::HomogeneousVector\">HomogeneousVector</a>&lt;T, U&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.eq\" class=\"method trait-impl\"><a href=\"#method.eq\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.2/core/cmp/trait.PartialEq.html#tymethod.eq\" class=\"fn\">eq</a>(&amp;self, other: &amp;<a class=\"struct\" href=\"zng_layout/unit/euclid/struct.HomogeneousVector.html\" title=\"struct zng_layout::unit::euclid::HomogeneousVector\">HomogeneousVector</a>&lt;T, U&gt;) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>self</code> and <code>other</code> values to be equal, and is used\nby <code>==</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ne\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.77.2/src/core/cmp.rs.html#242\">source</a></span><a href=\"#method.ne\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.2/core/cmp/trait.PartialEq.html#method.ne\" class=\"fn\">ne</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>!=</code>. The default implementation is almost always\nsufficient, and should not be overridden without very good reason.</div></details></div></details>","PartialEq","zng_layout::unit::euclid::default::HomogeneousVector"],["<section id=\"impl-Copy-for-HomogeneousVector%3CT,+U%3E\" class=\"impl\"><a href=\"#impl-Copy-for-HomogeneousVector%3CT,+U%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, U&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"zng_layout/unit/euclid/struct.HomogeneousVector.html\" title=\"struct zng_layout::unit::euclid::HomogeneousVector\">HomogeneousVector</a>&lt;T, U&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>,</div></h3></section>","Copy","zng_layout::unit::euclid::default::HomogeneousVector"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-HomogeneousVector%3CT,+U%3E\" class=\"impl\"><a href=\"#impl-Debug-for-HomogeneousVector%3CT,+U%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, U&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"zng_layout/unit/euclid/struct.HomogeneousVector.html\" title=\"struct zng_layout::unit::euclid::HomogeneousVector\">HomogeneousVector</a>&lt;T, U&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.2/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.2/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.2/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.2/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.77.2/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","zng_layout::unit::euclid::default::HomogeneousVector"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-From%3CPoint3D%3CT,+U%3E%3E-for-HomogeneousVector%3CT,+U%3E\" class=\"impl\"><a href=\"#impl-From%3CPoint3D%3CT,+U%3E%3E-for-HomogeneousVector%3CT,+U%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, U&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"zng_layout/unit/euclid/struct.Point3D.html\" title=\"struct zng_layout::unit::euclid::Point3D\">Point3D</a>&lt;T, U&gt;&gt; for <a class=\"struct\" href=\"zng_layout/unit/euclid/struct.HomogeneousVector.html\" title=\"struct zng_layout::unit::euclid::HomogeneousVector\">HomogeneousVector</a>&lt;T, U&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"zng_layout/unit/euclid/num/trait.One.html\" title=\"trait zng_layout::unit::euclid::num::One\">One</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from\" class=\"method trait-impl\"><a href=\"#method.from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.2/core/convert/trait.From.html#tymethod.from\" class=\"fn\">from</a>(p: <a class=\"struct\" href=\"zng_layout/unit/euclid/struct.Point3D.html\" title=\"struct zng_layout::unit::euclid::Point3D\">Point3D</a>&lt;T, U&gt;) -&gt; <a class=\"struct\" href=\"zng_layout/unit/euclid/struct.HomogeneousVector.html\" title=\"struct zng_layout::unit::euclid::HomogeneousVector\">HomogeneousVector</a>&lt;T, U&gt;</h4></section></summary><div class='docblock'>Converts to this type from the input type.</div></details></div></details>","From<Point3D<T, U>>","zng_layout::unit::euclid::default::HomogeneousVector"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-From%3CPoint2D%3CT,+U%3E%3E-for-HomogeneousVector%3CT,+U%3E\" class=\"impl\"><a href=\"#impl-From%3CPoint2D%3CT,+U%3E%3E-for-HomogeneousVector%3CT,+U%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, U&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"zng_layout/unit/euclid/struct.Point2D.html\" title=\"struct zng_layout::unit::euclid::Point2D\">Point2D</a>&lt;T, U&gt;&gt; for <a class=\"struct\" href=\"zng_layout/unit/euclid/struct.HomogeneousVector.html\" title=\"struct zng_layout::unit::euclid::HomogeneousVector\">HomogeneousVector</a>&lt;T, U&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"zng_layout/unit/euclid/num/trait.Zero.html\" title=\"trait zng_layout::unit::euclid::num::Zero\">Zero</a> + <a class=\"trait\" href=\"zng_layout/unit/euclid/num/trait.One.html\" title=\"trait zng_layout::unit::euclid::num::One\">One</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from\" class=\"method trait-impl\"><a href=\"#method.from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.2/core/convert/trait.From.html#tymethod.from\" class=\"fn\">from</a>(p: <a class=\"struct\" href=\"zng_layout/unit/euclid/struct.Point2D.html\" title=\"struct zng_layout::unit::euclid::Point2D\">Point2D</a>&lt;T, U&gt;) -&gt; <a class=\"struct\" href=\"zng_layout/unit/euclid/struct.HomogeneousVector.html\" title=\"struct zng_layout::unit::euclid::HomogeneousVector\">HomogeneousVector</a>&lt;T, U&gt;</h4></section></summary><div class='docblock'>Converts to this type from the input type.</div></details></div></details>","From<Point2D<T, U>>","zng_layout::unit::euclid::default::HomogeneousVector"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-From%3CVector2D%3CT,+U%3E%3E-for-HomogeneousVector%3CT,+U%3E\" class=\"impl\"><a href=\"#impl-From%3CVector2D%3CT,+U%3E%3E-for-HomogeneousVector%3CT,+U%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, U&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"zng_layout/unit/euclid/struct.Vector2D.html\" title=\"struct zng_layout::unit::euclid::Vector2D\">Vector2D</a>&lt;T, U&gt;&gt; for <a class=\"struct\" href=\"zng_layout/unit/euclid/struct.HomogeneousVector.html\" title=\"struct zng_layout::unit::euclid::HomogeneousVector\">HomogeneousVector</a>&lt;T, U&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"zng_layout/unit/euclid/num/trait.Zero.html\" title=\"trait zng_layout::unit::euclid::num::Zero\">Zero</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from\" class=\"method trait-impl\"><a href=\"#method.from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.2/core/convert/trait.From.html#tymethod.from\" class=\"fn\">from</a>(v: <a class=\"struct\" href=\"zng_layout/unit/euclid/struct.Vector2D.html\" title=\"struct zng_layout::unit::euclid::Vector2D\">Vector2D</a>&lt;T, U&gt;) -&gt; <a class=\"struct\" href=\"zng_layout/unit/euclid/struct.HomogeneousVector.html\" title=\"struct zng_layout::unit::euclid::HomogeneousVector\">HomogeneousVector</a>&lt;T, U&gt;</h4></section></summary><div class='docblock'>Converts to this type from the input type.</div></details></div></details>","From<Vector2D<T, U>>","zng_layout::unit::euclid::default::HomogeneousVector"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-From%3CVector3D%3CT,+U%3E%3E-for-HomogeneousVector%3CT,+U%3E\" class=\"impl\"><a href=\"#impl-From%3CVector3D%3CT,+U%3E%3E-for-HomogeneousVector%3CT,+U%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, U&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"zng_layout/unit/euclid/struct.Vector3D.html\" title=\"struct zng_layout::unit::euclid::Vector3D\">Vector3D</a>&lt;T, U&gt;&gt; for <a class=\"struct\" href=\"zng_layout/unit/euclid/struct.HomogeneousVector.html\" title=\"struct zng_layout::unit::euclid::HomogeneousVector\">HomogeneousVector</a>&lt;T, U&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"zng_layout/unit/euclid/num/trait.Zero.html\" title=\"trait zng_layout::unit::euclid::num::Zero\">Zero</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from\" class=\"method trait-impl\"><a href=\"#method.from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.2/core/convert/trait.From.html#tymethod.from\" class=\"fn\">from</a>(v: <a class=\"struct\" href=\"zng_layout/unit/euclid/struct.Vector3D.html\" title=\"struct zng_layout::unit::euclid::Vector3D\">Vector3D</a>&lt;T, U&gt;) -&gt; <a class=\"struct\" href=\"zng_layout/unit/euclid/struct.HomogeneousVector.html\" title=\"struct zng_layout::unit::euclid::HomogeneousVector\">HomogeneousVector</a>&lt;T, U&gt;</h4></section></summary><div class='docblock'>Converts to this type from the input type.</div></details></div></details>","From<Vector3D<T, U>>","zng_layout::unit::euclid::default::HomogeneousVector"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Hash-for-HomogeneousVector%3CT,+U%3E\" class=\"impl\"><a href=\"#impl-Hash-for-HomogeneousVector%3CT,+U%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, U&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> for <a class=\"struct\" href=\"zng_layout/unit/euclid/struct.HomogeneousVector.html\" title=\"struct zng_layout::unit::euclid::HomogeneousVector\">HomogeneousVector</a>&lt;T, U&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.hash\" class=\"method trait-impl\"><a href=\"#method.hash\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.2/core/hash/trait.Hash.html#tymethod.hash\" class=\"fn\">hash</a>&lt;H&gt;(&amp;self, h: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.reference.html\">&amp;mut H</a>)<div class=\"where\">where\n    H: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\">Hasher</a>,</div></h4></section></summary><div class='docblock'>Feeds this value into the given <a href=\"https://doc.rust-lang.org/1.77.2/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\"><code>Hasher</code></a>. <a href=\"https://doc.rust-lang.org/1.77.2/core/hash/trait.Hash.html#tymethod.hash\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.hash_slice\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.3.0\">1.3.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.77.2/src/core/hash/mod.rs.html#238-240\">source</a></span><a href=\"#method.hash_slice\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.2/core/hash/trait.Hash.html#method.hash_slice\" class=\"fn\">hash_slice</a>&lt;H&gt;(data: &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.slice.html\">[Self]</a>, state: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.reference.html\">&amp;mut H</a>)<div class=\"where\">where\n    H: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\">Hasher</a>,\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h4></section></summary><div class='docblock'>Feeds a slice of this type into the given <a href=\"https://doc.rust-lang.org/1.77.2/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\"><code>Hasher</code></a>. <a href=\"https://doc.rust-lang.org/1.77.2/core/hash/trait.Hash.html#method.hash_slice\">Read more</a></div></details></div></details>","Hash","zng_layout::unit::euclid::default::HomogeneousVector"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()