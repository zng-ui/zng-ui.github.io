(function() {var type_impls = {
"zng_view":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Round-for-i16\" class=\"impl\"><a href=\"#impl-Round-for-i16\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"zng_view/webrender/euclid/num/trait.Round.html\" title=\"trait zng_view::webrender::euclid::num::Round\">Round</a> for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.i16.html\">i16</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.round\" class=\"method trait-impl\"><a href=\"#method.round\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"zng_view/webrender/euclid/num/trait.Round.html#tymethod.round\" class=\"fn\">round</a>(self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.i16.html\">i16</a></h4></section></summary><div class='docblock'>Rounds to the nearest integer value. <a href=\"zng_view/webrender/euclid/num/trait.Round.html#tymethod.round\">Read more</a></div></details></div></details>","Round","zng_view::gleam::gl::GLshort"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Ceil-for-i16\" class=\"impl\"><a href=\"#impl-Ceil-for-i16\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"zng_view/webrender/euclid/num/trait.Ceil.html\" title=\"trait zng_view::webrender::euclid::num::Ceil\">Ceil</a> for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.i16.html\">i16</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.ceil\" class=\"method trait-impl\"><a href=\"#method.ceil\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"zng_view/webrender/euclid/num/trait.Ceil.html#tymethod.ceil\" class=\"fn\">ceil</a>(self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.i16.html\">i16</a></h4></section></summary><div class='docblock'>Rounds to the smallest integer equal or greater than the original value. <a href=\"zng_view/webrender/euclid/num/trait.Ceil.html#tymethod.ceil\">Read more</a></div></details></div></details>","Ceil","zng_view::gleam::gl::GLshort"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Floor-for-i16\" class=\"impl\"><a href=\"#impl-Floor-for-i16\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"zng_view/webrender/euclid/num/trait.Floor.html\" title=\"trait zng_view::webrender::euclid::num::Floor\">Floor</a> for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.i16.html\">i16</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.floor\" class=\"method trait-impl\"><a href=\"#method.floor\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"zng_view/webrender/euclid/num/trait.Floor.html#tymethod.floor\" class=\"fn\">floor</a>(self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.i16.html\">i16</a></h4></section></summary><div class='docblock'>Rounds to the biggest integer equal or lower than the original value. <a href=\"zng_view/webrender/euclid/num/trait.Floor.html#tymethod.floor\">Read more</a></div></details></div></details>","Floor","zng_view::gleam::gl::GLshort"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ReadEndian%3Ci16%3E-for-R\" class=\"impl\"><a class=\"src rightside\" href=\"https://docs.rs/lebe/0.5.0/src/lebe/lib.rs.html#422-427\">source</a><a href=\"#impl-ReadEndian%3Ci16%3E-for-R\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;R&gt; <a class=\"trait\" href=\"https://docs.rs/lebe/0.5.0/lebe/io/trait.ReadEndian.html\" title=\"trait lebe::io::ReadEndian\">ReadEndian</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.i16.html\">i16</a>&gt; for R<div class=\"where\">where\n    R: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.read_from_little_endian_into\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"https://docs.rs/lebe/0.5.0/src/lebe/lib.rs.html#422-427\">source</a><a href=\"#method.read_from_little_endian_into\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://docs.rs/lebe/0.5.0/lebe/io/trait.ReadEndian.html#tymethod.read_from_little_endian_into\" class=\"fn\">read_from_little_endian_into</a>(&amp;mut self, value: &amp;mut <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.i16.html\">i16</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.2/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.2/std/io/error/struct.Error.html\" title=\"struct std::io::error::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Read into the supplied reference. Acts the same as <code>std::io::Read::read_exact</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.read_from_big_endian_into\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"https://docs.rs/lebe/0.5.0/src/lebe/lib.rs.html#422-427\">source</a><a href=\"#method.read_from_big_endian_into\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://docs.rs/lebe/0.5.0/lebe/io/trait.ReadEndian.html#tymethod.read_from_big_endian_into\" class=\"fn\">read_from_big_endian_into</a>(&amp;mut self, value: &amp;mut <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.i16.html\">i16</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.2/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.2/std/io/error/struct.Error.html\" title=\"struct std::io::error::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Read into the supplied reference. Acts the same as <code>std::io::Read::read_exact</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.read_from_native_endian_into\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"https://docs.rs/lebe/0.5.0/src/lebe/lib.rs.html#317\">source</a><a href=\"#method.read_from_native_endian_into\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://docs.rs/lebe/0.5.0/lebe/io/trait.ReadEndian.html#method.read_from_native_endian_into\" class=\"fn\">read_from_native_endian_into</a>(&amp;mut self, value: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.reference.html\">&amp;mut T</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.2/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.2/std/io/error/struct.Error.html\" title=\"struct std::io::error::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Read into the supplied reference. Acts the same as <code>std::io::Read::read_exact</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.read_from_little_endian\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"https://docs.rs/lebe/0.5.0/src/lebe/lib.rs.html#324\">source</a><a href=\"#method.read_from_little_endian\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://docs.rs/lebe/0.5.0/lebe/io/trait.ReadEndian.html#method.read_from_little_endian\" class=\"fn\">read_from_little_endian</a>(&amp;mut self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.2/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;T, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.2/std/io/error/struct.Error.html\" title=\"struct std::io::error::Error\">Error</a>&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,</div></h4></section></summary><div class='docblock'>Read the byte value of the inferred type</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.read_from_big_endian\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"https://docs.rs/lebe/0.5.0/src/lebe/lib.rs.html#332\">source</a><a href=\"#method.read_from_big_endian\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://docs.rs/lebe/0.5.0/lebe/io/trait.ReadEndian.html#method.read_from_big_endian\" class=\"fn\">read_from_big_endian</a>(&amp;mut self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.2/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;T, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.2/std/io/error/struct.Error.html\" title=\"struct std::io::error::Error\">Error</a>&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,</div></h4></section></summary><div class='docblock'>Read the byte value of the inferred type</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.read_from_native_endian\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"https://docs.rs/lebe/0.5.0/src/lebe/lib.rs.html#340\">source</a><a href=\"#method.read_from_native_endian\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://docs.rs/lebe/0.5.0/lebe/io/trait.ReadEndian.html#method.read_from_native_endian\" class=\"fn\">read_from_native_endian</a>(&amp;mut self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.2/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;T, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.2/std/io/error/struct.Error.html\" title=\"struct std::io::error::Error\">Error</a>&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,</div></h4></section></summary><div class='docblock'>Read the byte value of the inferred type</div></details></div></details>","ReadEndian<i16>","zng_view::gleam::gl::GLshort"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-WriteEndian%3Ci16%3E-for-W\" class=\"impl\"><a class=\"src rightside\" href=\"https://docs.rs/lebe/0.5.0/src/lebe/lib.rs.html#422-427\">source</a><a href=\"#impl-WriteEndian%3Ci16%3E-for-W\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;W&gt; <a class=\"trait\" href=\"https://docs.rs/lebe/0.5.0/lebe/io/trait.WriteEndian.html\" title=\"trait lebe::io::WriteEndian\">WriteEndian</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.i16.html\">i16</a>&gt; for W<div class=\"where\">where\n    W: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.2/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.write_as_little_endian\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"https://docs.rs/lebe/0.5.0/src/lebe/lib.rs.html#422-427\">source</a><a href=\"#method.write_as_little_endian\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://docs.rs/lebe/0.5.0/lebe/io/trait.WriteEndian.html#tymethod.write_as_little_endian\" class=\"fn\">write_as_little_endian</a>(&amp;mut self, value: &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.i16.html\">i16</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.2/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.2/std/io/error/struct.Error.html\" title=\"struct std::io::error::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Write the byte value of the specified reference, converting it to little endianness</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.write_as_big_endian\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"https://docs.rs/lebe/0.5.0/src/lebe/lib.rs.html#422-427\">source</a><a href=\"#method.write_as_big_endian\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://docs.rs/lebe/0.5.0/lebe/io/trait.WriteEndian.html#tymethod.write_as_big_endian\" class=\"fn\">write_as_big_endian</a>(&amp;mut self, value: &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.i16.html\">i16</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.2/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.2/std/io/error/struct.Error.html\" title=\"struct std::io::error::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Write the byte value of the specified reference, converting it to big endianness</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.write_as_native_endian\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"https://docs.rs/lebe/0.5.0/src/lebe/lib.rs.html#296\">source</a><a href=\"#method.write_as_native_endian\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://docs.rs/lebe/0.5.0/lebe/io/trait.WriteEndian.html#method.write_as_native_endian\" class=\"fn\">write_as_native_endian</a>(&amp;mut self, value: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.reference.html\">&amp;T</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.2/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.2/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.2/std/io/error/struct.Error.html\" title=\"struct std::io::error::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Write the byte value of the specified reference, not converting it</div></details></div></details>","WriteEndian<i16>","zng_view::gleam::gl::GLshort"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()