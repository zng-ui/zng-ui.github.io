(function() {var type_impls = {
"zng_layout":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Rotation2D%3CT,+Src,+Dst%3E\" class=\"impl\"><a href=\"#impl-Rotation2D%3CT,+Src,+Dst%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, Src, Dst&gt; <a class=\"struct\" href=\"zng_layout/unit/euclid/struct.Rotation2D.html\" title=\"struct zng_layout::unit::euclid::Rotation2D\">Rotation2D</a>&lt;T, Src, Dst&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"zng_layout/unit/euclid/struct.Rotation2D.html#tymethod.new\" class=\"fn\">new</a>(angle: <a class=\"struct\" href=\"zng_layout/unit/euclid/struct.Angle.html\" title=\"struct zng_layout::unit::euclid::Angle\">Angle</a>&lt;T&gt;) -&gt; <a class=\"struct\" href=\"zng_layout/unit/euclid/struct.Rotation2D.html\" title=\"struct zng_layout::unit::euclid::Rotation2D\">Rotation2D</a>&lt;T, Src, Dst&gt;</h4></section></summary><div class=\"docblock\"><p>Creates a rotation from an angle in radians.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.radians\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"zng_layout/unit/euclid/struct.Rotation2D.html#tymethod.radians\" class=\"fn\">radians</a>(angle: T) -&gt; <a class=\"struct\" href=\"zng_layout/unit/euclid/struct.Rotation2D.html\" title=\"struct zng_layout::unit::euclid::Rotation2D\">Rotation2D</a>&lt;T, Src, Dst&gt;</h4></section></summary><div class=\"docblock\"><p>Creates a rotation from an angle in radians.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.identity\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"zng_layout/unit/euclid/struct.Rotation2D.html#tymethod.identity\" class=\"fn\">identity</a>() -&gt; <a class=\"struct\" href=\"zng_layout/unit/euclid/struct.Rotation2D.html\" title=\"struct zng_layout::unit::euclid::Rotation2D\">Rotation2D</a>&lt;T, Src, Dst&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://docs.rs/num-traits/0.2/num_traits/identities/trait.Zero.html\" title=\"trait num_traits::identities::Zero\">Zero</a>,</div></h4></section></summary><div class=\"docblock\"><p>Creates the identity rotation.</p>\n</div></details></div></details>",0,"zng_layout::unit::euclid::default::Rotation2D"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Rotation2D%3CT,+Src,+Dst%3E\" class=\"impl\"><a href=\"#impl-Rotation2D%3CT,+Src,+Dst%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, Src, Dst&gt; <a class=\"struct\" href=\"zng_layout/unit/euclid/struct.Rotation2D.html\" title=\"struct zng_layout::unit::euclid::Rotation2D\">Rotation2D</a>&lt;T, Src, Dst&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.cast_unit\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"zng_layout/unit/euclid/struct.Rotation2D.html#tymethod.cast_unit\" class=\"fn\">cast_unit</a>&lt;Src2, Dst2&gt;(&amp;self) -&gt; <a class=\"struct\" href=\"zng_layout/unit/euclid/struct.Rotation2D.html\" title=\"struct zng_layout::unit::euclid::Rotation2D\">Rotation2D</a>&lt;T, Src2, Dst2&gt;</h4></section></summary><div class=\"docblock\"><p>Cast the unit, preserving the numeric value.</p>\n<h5 id=\"example\"><a class=\"doc-anchor\" href=\"#example\">§</a>Example</h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">enum </span>Local {}\n<span class=\"kw\">enum </span>World {}\n\n<span class=\"kw\">enum </span>Local2 {}\n<span class=\"kw\">enum </span>World2 {}\n\n<span class=\"kw\">let </span>to_world: Rotation2D&lt;<span class=\"kw\">_</span>, Local, World&gt; = Rotation2D::radians(<span class=\"number\">42</span>);\n\n<span class=\"macro\">assert_eq!</span>(to_world.angle, to_world.cast_unit::&lt;Local2, World2&gt;().angle);</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.to_untyped\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"zng_layout/unit/euclid/struct.Rotation2D.html#tymethod.to_untyped\" class=\"fn\">to_untyped</a>(&amp;self) -&gt; <a class=\"struct\" href=\"zng_layout/unit/euclid/struct.Rotation2D.html\" title=\"struct zng_layout::unit::euclid::Rotation2D\">Rotation2D</a>&lt;T, <a class=\"struct\" href=\"zng_layout/unit/euclid/struct.UnknownUnit.html\" title=\"struct zng_layout::unit::euclid::UnknownUnit\">UnknownUnit</a>, <a class=\"struct\" href=\"zng_layout/unit/euclid/struct.UnknownUnit.html\" title=\"struct zng_layout::unit::euclid::UnknownUnit\">UnknownUnit</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Drop the units, preserving only the numeric value.</p>\n<h5 id=\"example-1\"><a class=\"doc-anchor\" href=\"#example-1\">§</a>Example</h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">enum </span>Local {}\n<span class=\"kw\">enum </span>World {}\n\n<span class=\"kw\">let </span>to_world: Rotation2D&lt;<span class=\"kw\">_</span>, Local, World&gt; = Rotation2D::radians(<span class=\"number\">42</span>);\n\n<span class=\"macro\">assert_eq!</span>(to_world.angle, to_world.to_untyped().angle);</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.from_untyped\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"zng_layout/unit/euclid/struct.Rotation2D.html#tymethod.from_untyped\" class=\"fn\">from_untyped</a>(\n    r: &amp;<a class=\"struct\" href=\"zng_layout/unit/euclid/struct.Rotation2D.html\" title=\"struct zng_layout::unit::euclid::Rotation2D\">Rotation2D</a>&lt;T, <a class=\"struct\" href=\"zng_layout/unit/euclid/struct.UnknownUnit.html\" title=\"struct zng_layout::unit::euclid::UnknownUnit\">UnknownUnit</a>, <a class=\"struct\" href=\"zng_layout/unit/euclid/struct.UnknownUnit.html\" title=\"struct zng_layout::unit::euclid::UnknownUnit\">UnknownUnit</a>&gt;\n) -&gt; <a class=\"struct\" href=\"zng_layout/unit/euclid/struct.Rotation2D.html\" title=\"struct zng_layout::unit::euclid::Rotation2D\">Rotation2D</a>&lt;T, Src, Dst&gt;</h4></section></summary><div class=\"docblock\"><p>Tag a unitless value with units.</p>\n<h5 id=\"example-2\"><a class=\"doc-anchor\" href=\"#example-2\">§</a>Example</h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">use </span>euclid::UnknownUnit;\n<span class=\"kw\">enum </span>Local {}\n<span class=\"kw\">enum </span>World {}\n\n<span class=\"kw\">let </span>rot: Rotation2D&lt;<span class=\"kw\">_</span>, UnknownUnit, UnknownUnit&gt; = Rotation2D::radians(<span class=\"number\">42</span>);\n\n<span class=\"macro\">assert_eq!</span>(rot.angle, Rotation2D::&lt;<span class=\"kw\">_</span>, Local, World&gt;::from_untyped(<span class=\"kw-2\">&amp;</span>rot).angle);</code></pre></div>\n</div></details></div></details>",0,"zng_layout::unit::euclid::default::Rotation2D"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Rotation2D%3CT,+Src,+Dst%3E\" class=\"impl\"><a href=\"#impl-Rotation2D%3CT,+Src,+Dst%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, Src, Dst&gt; <a class=\"struct\" href=\"zng_layout/unit/euclid/struct.Rotation2D.html\" title=\"struct zng_layout::unit::euclid::Rotation2D\">Rotation2D</a>&lt;T, Src, Dst&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.get_angle\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"zng_layout/unit/euclid/struct.Rotation2D.html#tymethod.get_angle\" class=\"fn\">get_angle</a>(&amp;self) -&gt; <a class=\"struct\" href=\"zng_layout/unit/euclid/struct.Angle.html\" title=\"struct zng_layout::unit::euclid::Angle\">Angle</a>&lt;T&gt;</h4></section></summary><div class=\"docblock\"><p>Returns self.angle as a strongly typed <code>Angle&lt;T&gt;</code>.</p>\n</div></details></div></details>",0,"zng_layout::unit::euclid::default::Rotation2D"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Rotation2D%3CT,+Src,+Dst%3E\" class=\"impl\"><a href=\"#impl-Rotation2D%3CT,+Src,+Dst%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, Src, Dst&gt; <a class=\"struct\" href=\"zng_layout/unit/euclid/struct.Rotation2D.html\" title=\"struct zng_layout::unit::euclid::Rotation2D\">Rotation2D</a>&lt;T, Src, Dst&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://docs.rs/num-traits/0.2/num_traits/real/trait.Real.html\" title=\"trait num_traits::real::Real\">Real</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.to_3d\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"zng_layout/unit/euclid/struct.Rotation2D.html#tymethod.to_3d\" class=\"fn\">to_3d</a>(&amp;self) -&gt; <a class=\"struct\" href=\"zng_layout/unit/euclid/struct.Rotation3D.html\" title=\"struct zng_layout::unit::euclid::Rotation3D\">Rotation3D</a>&lt;T, Src, Dst&gt;</h4></section></summary><div class=\"docblock\"><p>Creates a 3d rotation (around the z axis) from this 2d rotation.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.inverse\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"zng_layout/unit/euclid/struct.Rotation2D.html#tymethod.inverse\" class=\"fn\">inverse</a>(&amp;self) -&gt; <a class=\"struct\" href=\"zng_layout/unit/euclid/struct.Rotation2D.html\" title=\"struct zng_layout::unit::euclid::Rotation2D\">Rotation2D</a>&lt;T, Dst, Src&gt;</h4></section></summary><div class=\"docblock\"><p>Returns the inverse of this rotation.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.then\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"zng_layout/unit/euclid/struct.Rotation2D.html#tymethod.then\" class=\"fn\">then</a>&lt;NewSrc&gt;(\n    &amp;self,\n    other: &amp;<a class=\"struct\" href=\"zng_layout/unit/euclid/struct.Rotation2D.html\" title=\"struct zng_layout::unit::euclid::Rotation2D\">Rotation2D</a>&lt;T, NewSrc, Src&gt;\n) -&gt; <a class=\"struct\" href=\"zng_layout/unit/euclid/struct.Rotation2D.html\" title=\"struct zng_layout::unit::euclid::Rotation2D\">Rotation2D</a>&lt;T, NewSrc, Dst&gt;</h4></section></summary><div class=\"docblock\"><p>Returns a rotation representing the other rotation followed by this rotation.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.transform_point\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"zng_layout/unit/euclid/struct.Rotation2D.html#tymethod.transform_point\" class=\"fn\">transform_point</a>(&amp;self, point: <a class=\"struct\" href=\"zng_layout/unit/euclid/struct.Point2D.html\" title=\"struct zng_layout::unit::euclid::Point2D\">Point2D</a>&lt;T, Src&gt;) -&gt; <a class=\"struct\" href=\"zng_layout/unit/euclid/struct.Point2D.html\" title=\"struct zng_layout::unit::euclid::Point2D\">Point2D</a>&lt;T, Dst&gt;</h4></section></summary><div class=\"docblock\"><p>Returns the given 2d point transformed by this rotation.</p>\n<p>The input point must be use the unit Src, and the returned point has the unit Dst.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.transform_vector\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"zng_layout/unit/euclid/struct.Rotation2D.html#tymethod.transform_vector\" class=\"fn\">transform_vector</a>(&amp;self, vector: <a class=\"struct\" href=\"zng_layout/unit/euclid/struct.Vector2D.html\" title=\"struct zng_layout::unit::euclid::Vector2D\">Vector2D</a>&lt;T, Src&gt;) -&gt; <a class=\"struct\" href=\"zng_layout/unit/euclid/struct.Vector2D.html\" title=\"struct zng_layout::unit::euclid::Vector2D\">Vector2D</a>&lt;T, Dst&gt;</h4></section></summary><div class=\"docblock\"><p>Returns the given 2d vector transformed by this rotation.</p>\n<p>The input point must be use the unit Src, and the returned point has the unit Dst.</p>\n</div></details></div></details>",0,"zng_layout::unit::euclid::default::Rotation2D"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Rotation2D%3CT,+Src,+Dst%3E\" class=\"impl\"><a href=\"#impl-Rotation2D%3CT,+Src,+Dst%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, Src, Dst&gt; <a class=\"struct\" href=\"zng_layout/unit/euclid/struct.Rotation2D.html\" title=\"struct zng_layout::unit::euclid::Rotation2D\">Rotation2D</a>&lt;T, Src, Dst&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/ops/arith/trait.Add.html\" title=\"trait core::ops::arith::Add\">Add</a>&lt;Output = T&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/ops/arith/trait.Sub.html\" title=\"trait core::ops::arith::Sub\">Sub</a>&lt;Output = T&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;Output = T&gt; + <a class=\"trait\" href=\"https://docs.rs/num-traits/0.2/num_traits/identities/trait.Zero.html\" title=\"trait num_traits::identities::Zero\">Zero</a> + <a class=\"trait\" href=\"zng_layout/unit/euclid/trait.Trig.html\" title=\"trait zng_layout::unit::euclid::Trig\">Trig</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.to_transform\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"zng_layout/unit/euclid/struct.Rotation2D.html#tymethod.to_transform\" class=\"fn\">to_transform</a>(&amp;self) -&gt; <a class=\"struct\" href=\"zng_layout/unit/euclid/struct.Transform2D.html\" title=\"struct zng_layout::unit::euclid::Transform2D\">Transform2D</a>&lt;T, Src, Dst&gt;</h4></section></summary><div class=\"docblock\"><p>Returns the matrix representation of this rotation.</p>\n</div></details></div></details>",0,"zng_layout::unit::euclid::default::Rotation2D"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-Rotation2D%3CT,+Src,+Dst%3E\" class=\"impl\"><a href=\"#impl-Clone-for-Rotation2D%3CT,+Src,+Dst%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, Src, Dst&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"zng_layout/unit/euclid/struct.Rotation2D.html\" title=\"struct zng_layout::unit::euclid::Rotation2D\">Rotation2D</a>&lt;T, Src, Dst&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.2/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"zng_layout/unit/euclid/struct.Rotation2D.html\" title=\"struct zng_layout::unit::euclid::Rotation2D\">Rotation2D</a>&lt;T, Src, Dst&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.77.2/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.77.2/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.2/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.77.2/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","zng_layout::unit::euclid::default::Rotation2D"],["<section id=\"impl-Eq-for-Rotation2D%3CT,+Src,+Dst%3E\" class=\"impl\"><a href=\"#impl-Eq-for-Rotation2D%3CT,+Src,+Dst%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, Src, Dst&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"struct\" href=\"zng_layout/unit/euclid/struct.Rotation2D.html\" title=\"struct zng_layout::unit::euclid::Rotation2D\">Rotation2D</a>&lt;T, Src, Dst&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>,</div></h3></section>","Eq","zng_layout::unit::euclid::default::Rotation2D"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Serialize-for-Rotation2D%3CT,+Src,+Dst%3E\" class=\"impl\"><a href=\"#impl-Serialize-for-Rotation2D%3CT,+Src,+Dst%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, Src, Dst&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.199/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"zng_layout/unit/euclid/struct.Rotation2D.html\" title=\"struct zng_layout::unit::euclid::Rotation2D\">Rotation2D</a>&lt;T, Src, Dst&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.199/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.serialize\" class=\"method trait-impl\"><a href=\"#method.serialize\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://docs.rs/serde/1.0.199/serde/ser/trait.Serialize.html#tymethod.serialize\" class=\"fn\">serialize</a>&lt;__S&gt;(\n    &amp;self,\n    __serializer: __S\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.2/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;&lt;__S as <a class=\"trait\" href=\"https://docs.rs/serde/1.0.199/serde/ser/trait.Serializer.html\" title=\"trait serde::ser::Serializer\">Serializer</a>&gt;::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.199/serde/ser/trait.Serializer.html#associatedtype.Ok\" title=\"type serde::ser::Serializer::Ok\">Ok</a>, &lt;__S as <a class=\"trait\" href=\"https://docs.rs/serde/1.0.199/serde/ser/trait.Serializer.html\" title=\"trait serde::ser::Serializer\">Serializer</a>&gt;::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.199/serde/ser/trait.Serializer.html#associatedtype.Error\" title=\"type serde::ser::Serializer::Error\">Error</a>&gt;<div class=\"where\">where\n    __S: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.199/serde/ser/trait.Serializer.html\" title=\"trait serde::ser::Serializer\">Serializer</a>,</div></h4></section></summary><div class='docblock'>Serialize this value into the given Serde serializer. <a href=\"https://docs.rs/serde/1.0.199/serde/ser/trait.Serialize.html#tymethod.serialize\">Read more</a></div></details></div></details>","Serialize","zng_layout::unit::euclid::default::Rotation2D"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Zeroable-for-Rotation2D%3CT,+Src,+Dst%3E\" class=\"impl\"><a href=\"#impl-Zeroable-for-Rotation2D%3CT,+Src,+Dst%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, Src, Dst&gt; Zeroable for <a class=\"struct\" href=\"zng_layout/unit/euclid/struct.Rotation2D.html\" title=\"struct zng_layout::unit::euclid::Rotation2D\">Rotation2D</a>&lt;T, Src, Dst&gt;<div class=\"where\">where\n    T: Zeroable,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.zeroed\" class=\"method trait-impl\"><a href=\"#method.zeroed\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">zeroed</a>() -&gt; Self</h4></section></summary><div class='docblock'>Calls <a href=\"https://doc.rust-lang.org/1.77.2/core/mem/fn.zeroed.html\" title=\"fn core::mem::zeroed\"><code>zeroed</code></a>. <a>Read more</a></div></details></div></details>","Zeroable","zng_layout::unit::euclid::default::Rotation2D"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Deserialize%3C'de%3E-for-Rotation2D%3CT,+Src,+Dst%3E\" class=\"impl\"><a href=\"#impl-Deserialize%3C'de%3E-for-Rotation2D%3CT,+Src,+Dst%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'de, T, Src, Dst&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.199/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"zng_layout/unit/euclid/struct.Rotation2D.html\" title=\"struct zng_layout::unit::euclid::Rotation2D\">Rotation2D</a>&lt;T, Src, Dst&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.199/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt;,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.deserialize\" class=\"method trait-impl\"><a href=\"#method.deserialize\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://docs.rs/serde/1.0.199/serde/de/trait.Deserialize.html#tymethod.deserialize\" class=\"fn\">deserialize</a>&lt;__D&gt;(\n    __deserializer: __D\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.2/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"zng_layout/unit/euclid/struct.Rotation2D.html\" title=\"struct zng_layout::unit::euclid::Rotation2D\">Rotation2D</a>&lt;T, Src, Dst&gt;, &lt;__D as <a class=\"trait\" href=\"https://docs.rs/serde/1.0.199/serde/de/trait.Deserializer.html\" title=\"trait serde::de::Deserializer\">Deserializer</a>&lt;'de&gt;&gt;::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.199/serde/de/trait.Deserializer.html#associatedtype.Error\" title=\"type serde::de::Deserializer::Error\">Error</a>&gt;<div class=\"where\">where\n    __D: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.199/serde/de/trait.Deserializer.html\" title=\"trait serde::de::Deserializer\">Deserializer</a>&lt;'de&gt;,</div></h4></section></summary><div class='docblock'>Deserialize this value from the given Serde deserializer. <a href=\"https://docs.rs/serde/1.0.199/serde/de/trait.Deserialize.html#tymethod.deserialize\">Read more</a></div></details></div></details>","Deserialize<'de>","zng_layout::unit::euclid::default::Rotation2D"],["<section id=\"impl-Pod-for-Rotation2D%3CT,+Src,+Dst%3E\" class=\"impl\"><a href=\"#impl-Pod-for-Rotation2D%3CT,+Src,+Dst%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, Src, Dst&gt; Pod for <a class=\"struct\" href=\"zng_layout/unit/euclid/struct.Rotation2D.html\" title=\"struct zng_layout::unit::euclid::Rotation2D\">Rotation2D</a>&lt;T, Src, Dst&gt;<div class=\"where\">where\n    T: Pod,\n    Src: 'static,\n    Dst: 'static,</div></h3></section>","Pod","zng_layout::unit::euclid::default::Rotation2D"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialEq-for-Rotation2D%3CT,+Src,+Dst%3E\" class=\"impl\"><a href=\"#impl-PartialEq-for-Rotation2D%3CT,+Src,+Dst%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, Src, Dst&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> for <a class=\"struct\" href=\"zng_layout/unit/euclid/struct.Rotation2D.html\" title=\"struct zng_layout::unit::euclid::Rotation2D\">Rotation2D</a>&lt;T, Src, Dst&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.eq\" class=\"method trait-impl\"><a href=\"#method.eq\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.2/core/cmp/trait.PartialEq.html#tymethod.eq\" class=\"fn\">eq</a>(&amp;self, other: &amp;<a class=\"struct\" href=\"zng_layout/unit/euclid/struct.Rotation2D.html\" title=\"struct zng_layout::unit::euclid::Rotation2D\">Rotation2D</a>&lt;T, Src, Dst&gt;) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>self</code> and <code>other</code> values to be equal, and is used\nby <code>==</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ne\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.77.2/src/core/cmp.rs.html#242\">source</a></span><a href=\"#method.ne\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.2/core/cmp/trait.PartialEq.html#method.ne\" class=\"fn\">ne</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>!=</code>. The default implementation is almost always\nsufficient, and should not be overridden without very good reason.</div></details></div></details>","PartialEq","zng_layout::unit::euclid::default::Rotation2D"],["<section id=\"impl-Copy-for-Rotation2D%3CT,+Src,+Dst%3E\" class=\"impl\"><a href=\"#impl-Copy-for-Rotation2D%3CT,+Src,+Dst%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, Src, Dst&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"zng_layout/unit/euclid/struct.Rotation2D.html\" title=\"struct zng_layout::unit::euclid::Rotation2D\">Rotation2D</a>&lt;T, Src, Dst&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>,</div></h3></section>","Copy","zng_layout::unit::euclid::default::Rotation2D"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Hash-for-Rotation2D%3CT,+Src,+Dst%3E\" class=\"impl\"><a href=\"#impl-Hash-for-Rotation2D%3CT,+Src,+Dst%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, Src, Dst&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> for <a class=\"struct\" href=\"zng_layout/unit/euclid/struct.Rotation2D.html\" title=\"struct zng_layout::unit::euclid::Rotation2D\">Rotation2D</a>&lt;T, Src, Dst&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.hash\" class=\"method trait-impl\"><a href=\"#method.hash\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.2/core/hash/trait.Hash.html#tymethod.hash\" class=\"fn\">hash</a>&lt;H&gt;(&amp;self, h: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.reference.html\">&amp;mut H</a>)<div class=\"where\">where\n    H: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\">Hasher</a>,</div></h4></section></summary><div class='docblock'>Feeds this value into the given <a href=\"https://doc.rust-lang.org/1.77.2/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\"><code>Hasher</code></a>. <a href=\"https://doc.rust-lang.org/1.77.2/core/hash/trait.Hash.html#tymethod.hash\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.hash_slice\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.3.0\">1.3.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.77.2/src/core/hash/mod.rs.html#238-240\">source</a></span><a href=\"#method.hash_slice\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.2/core/hash/trait.Hash.html#method.hash_slice\" class=\"fn\">hash_slice</a>&lt;H&gt;(data: &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.slice.html\">[Self]</a>, state: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.reference.html\">&amp;mut H</a>)<div class=\"where\">where\n    H: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\">Hasher</a>,\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h4></section></summary><div class='docblock'>Feeds a slice of this type into the given <a href=\"https://doc.rust-lang.org/1.77.2/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\"><code>Hasher</code></a>. <a href=\"https://doc.rust-lang.org/1.77.2/core/hash/trait.Hash.html#method.hash_slice\">Read more</a></div></details></div></details>","Hash","zng_layout::unit::euclid::default::Rotation2D"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()