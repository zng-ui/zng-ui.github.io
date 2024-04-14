(function() {var type_impls = {
"zng_unit":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-CornerRadius2D%3CT,+U%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/zng_unit/corner_radius.rs.html#41-142\">source</a><a href=\"#impl-CornerRadius2D%3CT,+U%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> + <a class=\"trait\" href=\"https://docs.rs/num-traits/0.2/num_traits/identities/trait.Zero.html\" title=\"trait num_traits::identities::Zero\">Zero</a>, U&gt; <a class=\"struct\" href=\"zng_unit/struct.CornerRadius2D.html\" title=\"struct zng_unit::CornerRadius2D\">CornerRadius2D</a>&lt;T, U&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method\"><a class=\"src rightside\" href=\"src/zng_unit/corner_radius.rs.html#43-55\">source</a><h4 class=\"code-header\">pub fn <a href=\"zng_unit/struct.CornerRadius2D.html#tymethod.new\" class=\"fn\">new</a>(\n    top_left: Size2D&lt;T, U&gt;,\n    top_right: Size2D&lt;T, U&gt;,\n    bottom_right: Size2D&lt;T, U&gt;,\n    bottom_left: Size2D&lt;T, U&gt;\n) -&gt; Self</h4></section></summary><div class=\"docblock\"><p>New with distinct values.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.new_all\" class=\"method\"><a class=\"src rightside\" href=\"src/zng_unit/corner_radius.rs.html#58-60\">source</a><h4 class=\"code-header\">pub fn <a href=\"zng_unit/struct.CornerRadius2D.html#tymethod.new_all\" class=\"fn\">new_all</a>(radius: Size2D&lt;T, U&gt;) -&gt; Self</h4></section></summary><div class=\"docblock\"><p>New all corners same radius.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.zero\" class=\"method\"><a class=\"src rightside\" href=\"src/zng_unit/corner_radius.rs.html#63-65\">source</a><h4 class=\"code-header\">pub fn <a href=\"zng_unit/struct.CornerRadius2D.html#tymethod.zero\" class=\"fn\">zero</a>() -&gt; Self</h4></section></summary><div class=\"docblock\"><p>All zeros.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.inflate\" class=\"method\"><a class=\"src rightside\" href=\"src/zng_unit/corner_radius.rs.html#68-87\">source</a><h4 class=\"code-header\">pub fn <a href=\"zng_unit/struct.CornerRadius2D.html#tymethod.inflate\" class=\"fn\">inflate</a>(self, offsets: <a class=\"struct\" href=\"zng_unit/struct.SideOffsets2D.html\" title=\"struct zng_unit::SideOffsets2D\">SideOffsets2D</a>&lt;T, U&gt;) -&gt; Self<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/ops/arith/trait.AddAssign.html\" title=\"trait core::ops::arith::AddAssign\">AddAssign</a>,</div></h4></section></summary><div class=\"docblock\"><p>Calculate the corner radius of an outer border around <code>self</code> to perfectly fit.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.deflate\" class=\"method\"><a class=\"src rightside\" href=\"src/zng_unit/corner_radius.rs.html#90-141\">source</a><h4 class=\"code-header\">pub fn <a href=\"zng_unit/struct.CornerRadius2D.html#tymethod.deflate\" class=\"fn\">deflate</a>(self, offsets: <a class=\"struct\" href=\"zng_unit/struct.SideOffsets2D.html\" title=\"struct zng_unit::SideOffsets2D\">SideOffsets2D</a>&lt;T, U&gt;) -&gt; Self<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/ops/arith/trait.SubAssign.html\" title=\"trait core::ops::arith::SubAssign\">SubAssign</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/cmp/trait.PartialOrd.html\" title=\"trait core::cmp::PartialOrd\">PartialOrd</a>,</div></h4></section></summary><div class=\"docblock\"><p>Calculate the corner radius of an inner border inside <code>self</code> to perfectly fit.</p>\n</div></details></div></details>",0,"zng_unit::px_dip::PxCornerRadius","zng_unit::px_dip::DipCornerRadius"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-CornerRadius2D%3CT,+U%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/zng_unit/corner_radius.rs.html#30-39\">source</a><a href=\"#impl-Clone-for-CornerRadius2D%3CT,+U%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>, U&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"zng_unit/struct.CornerRadius2D.html\" title=\"struct zng_unit::CornerRadius2D\">CornerRadius2D</a>&lt;T, U&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/zng_unit/corner_radius.rs.html#31-38\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.1/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; Self</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.77.1/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.77.1/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.1/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.77.1/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","zng_unit::px_dip::PxCornerRadius","zng_unit::px_dip::DipCornerRadius"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Default-for-CornerRadius2D%3CT,+U%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/zng_unit/corner_radius.rs.html#20-29\">source</a><a href=\"#impl-Default-for-CornerRadius2D%3CT,+U%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>, U&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"zng_unit/struct.CornerRadius2D.html\" title=\"struct zng_unit::CornerRadius2D\">CornerRadius2D</a>&lt;T, U&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.default\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/zng_unit/corner_radius.rs.html#21-28\">source</a><a href=\"#method.default\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.1/core/default/trait.Default.html#tymethod.default\" class=\"fn\">default</a>() -&gt; Self</h4></section></summary><div class='docblock'>Returns the “default value” for a type. <a href=\"https://doc.rust-lang.org/1.77.1/core/default/trait.Default.html#tymethod.default\">Read more</a></div></details></div></details>","Default","zng_unit::px_dip::PxCornerRadius","zng_unit::px_dip::DipCornerRadius"],["<section id=\"impl-Eq-for-CornerRadius2D%3CT,+U%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/zng_unit/corner_radius.rs.html#161\">source</a><a href=\"#impl-Eq-for-CornerRadius2D%3CT,+U%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>, U&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"struct\" href=\"zng_unit/struct.CornerRadius2D.html\" title=\"struct zng_unit::CornerRadius2D\">CornerRadius2D</a>&lt;T, U&gt;</h3></section>","Eq","zng_unit::px_dip::PxCornerRadius","zng_unit::px_dip::DipCornerRadius"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Deserialize%3C'de%3E-for-CornerRadius2D%3CT,+U%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/zng_unit/corner_radius.rs.html#8\">source</a><a href=\"#impl-Deserialize%3C'de%3E-for-CornerRadius2D%3CT,+U%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'de, T, U&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.197/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"zng_unit/struct.CornerRadius2D.html\" title=\"struct zng_unit::CornerRadius2D\">CornerRadius2D</a>&lt;T, U&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.197/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt;,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.deserialize\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/zng_unit/corner_radius.rs.html#8\">source</a><a href=\"#method.deserialize\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://docs.rs/serde/1.0.197/serde/de/trait.Deserialize.html#tymethod.deserialize\" class=\"fn\">deserialize</a>&lt;__D&gt;(__deserializer: __D) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.1/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;Self, __D::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.197/serde/de/trait.Deserializer.html#associatedtype.Error\" title=\"type serde::de::Deserializer::Error\">Error</a>&gt;<div class=\"where\">where\n    __D: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.197/serde/de/trait.Deserializer.html\" title=\"trait serde::de::Deserializer\">Deserializer</a>&lt;'de&gt;,</div></h4></section></summary><div class='docblock'>Deserialize this value from the given Serde deserializer. <a href=\"https://docs.rs/serde/1.0.197/serde/de/trait.Deserialize.html#tymethod.deserialize\">Read more</a></div></details></div></details>","Deserialize<'de>","zng_unit::px_dip::PxCornerRadius","zng_unit::px_dip::DipCornerRadius"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Serialize-for-CornerRadius2D%3CT,+U%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/zng_unit/corner_radius.rs.html#8\">source</a><a href=\"#impl-Serialize-for-CornerRadius2D%3CT,+U%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, U&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.197/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"zng_unit/struct.CornerRadius2D.html\" title=\"struct zng_unit::CornerRadius2D\">CornerRadius2D</a>&lt;T, U&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.197/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.serialize\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/zng_unit/corner_radius.rs.html#8\">source</a><a href=\"#method.serialize\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://docs.rs/serde/1.0.197/serde/ser/trait.Serialize.html#tymethod.serialize\" class=\"fn\">serialize</a>&lt;__S&gt;(&amp;self, __serializer: __S) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.1/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;__S::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.197/serde/ser/trait.Serializer.html#associatedtype.Ok\" title=\"type serde::ser::Serializer::Ok\">Ok</a>, __S::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.197/serde/ser/trait.Serializer.html#associatedtype.Error\" title=\"type serde::ser::Serializer::Error\">Error</a>&gt;<div class=\"where\">where\n    __S: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.197/serde/ser/trait.Serializer.html\" title=\"trait serde::ser::Serializer\">Serializer</a>,</div></h4></section></summary><div class='docblock'>Serialize this value into the given Serde serializer. <a href=\"https://docs.rs/serde/1.0.197/serde/ser/trait.Serialize.html#tymethod.serialize\">Read more</a></div></details></div></details>","Serialize","zng_unit::px_dip::PxCornerRadius","zng_unit::px_dip::DipCornerRadius"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialEq-for-CornerRadius2D%3CT,+U%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/zng_unit/corner_radius.rs.html#153-160\">source</a><a href=\"#impl-PartialEq-for-CornerRadius2D%3CT,+U%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>, U&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> for <a class=\"struct\" href=\"zng_unit/struct.CornerRadius2D.html\" title=\"struct zng_unit::CornerRadius2D\">CornerRadius2D</a>&lt;T, U&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.eq\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/zng_unit/corner_radius.rs.html#154-159\">source</a><a href=\"#method.eq\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.1/core/cmp/trait.PartialEq.html#tymethod.eq\" class=\"fn\">eq</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.reference.html\">&amp;Self</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>self</code> and <code>other</code> values to be equal, and is used\nby <code>==</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ne\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.77.1/src/core/cmp.rs.html#242\">source</a></span><a href=\"#method.ne\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.1/core/cmp/trait.PartialEq.html#method.ne\" class=\"fn\">ne</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>!=</code>. The default implementation is almost always\nsufficient, and should not be overridden without very good reason.</div></details></div></details>","PartialEq","zng_unit::px_dip::PxCornerRadius","zng_unit::px_dip::DipCornerRadius"],["<section id=\"impl-Copy-for-CornerRadius2D%3CT,+U%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/zng_unit/corner_radius.rs.html#40\">source</a><a href=\"#impl-Copy-for-CornerRadius2D%3CT,+U%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>, U&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"zng_unit/struct.CornerRadius2D.html\" title=\"struct zng_unit::CornerRadius2D\">CornerRadius2D</a>&lt;T, U&gt;</h3></section>","Copy","zng_unit::px_dip::PxCornerRadius","zng_unit::px_dip::DipCornerRadius"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-CornerRadius2D%3CT,+U%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/zng_unit/corner_radius.rs.html#143-152\">source</a><a href=\"#impl-Debug-for-CornerRadius2D%3CT,+U%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>, U&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"zng_unit/struct.CornerRadius2D.html\" title=\"struct zng_unit::CornerRadius2D\">CornerRadius2D</a>&lt;T, U&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/zng_unit/corner_radius.rs.html#144-151\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.1/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.1/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/1.77.1/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.77.1/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","zng_unit::px_dip::PxCornerRadius","zng_unit::px_dip::DipCornerRadius"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()