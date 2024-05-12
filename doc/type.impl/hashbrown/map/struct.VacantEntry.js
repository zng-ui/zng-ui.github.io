(function() {var type_impls = {
"zng_unique_id":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-VacantEntry%3C'_,+K,+V,+S,+A%3E\" class=\"impl\"><a href=\"#impl-Debug-for-VacantEntry%3C'_,+K,+V,+S,+A%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;K, V, S, A&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for VacantEntry&lt;'_, K, V, S, A&gt;<div class=\"where\">where\n    K: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,\n    A: Allocator,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.78.0/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.78.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.78.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.78.0/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.78.0/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","zng_unique_id::IdVacantEntry"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-VacantEntry%3C'a,+K,+V,+S,+A%3E\" class=\"impl\"><a href=\"#impl-VacantEntry%3C'a,+K,+V,+S,+A%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, K, V, S, A&gt; VacantEntry&lt;'a, K, V, S, A&gt;<div class=\"where\">where\n    A: Allocator,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.key\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">key</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.reference.html\">&amp;K</a></h4></section></summary><div class=\"docblock\"><p>Gets a reference to the key that would be used when inserting a value\nthrough the <code>VacantEntry</code>.</p>\n<h5 id=\"examples\"><a class=\"doc-anchor\" href=\"#examples\">§</a>Examples</h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">use </span>hashbrown::HashMap;\n\n<span class=\"kw\">let </span><span class=\"kw-2\">mut </span>map: HashMap&lt;<span class=\"kw-2\">&amp;</span>str, u32&gt; = HashMap::new();\n<span class=\"macro\">assert_eq!</span>(map.entry(<span class=\"string\">\"poneyland\"</span>).key(), <span class=\"kw-2\">&amp;</span><span class=\"string\">\"poneyland\"</span>);</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.into_key\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">into_key</a>(self) -&gt; K</h4></section></summary><div class=\"docblock\"><p>Take ownership of the key.</p>\n<h5 id=\"examples-1\"><a class=\"doc-anchor\" href=\"#examples-1\">§</a>Examples</h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">use </span>hashbrown::hash_map::{Entry, HashMap};\n\n<span class=\"kw\">let </span><span class=\"kw-2\">mut </span>map: HashMap&lt;<span class=\"kw-2\">&amp;</span>str, u32&gt; = HashMap::new();\n\n<span class=\"kw\">match </span>map.entry(<span class=\"string\">\"poneyland\"</span>) {\n    Entry::Occupied(<span class=\"kw\">_</span>) =&gt; <span class=\"macro\">panic!</span>(),\n    Entry::Vacant(v) =&gt; <span class=\"macro\">assert_eq!</span>(v.into_key(), <span class=\"string\">\"poneyland\"</span>),\n}</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.insert\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">insert</a>(self, value: V) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.reference.html\">&amp;'a mut V</a><div class=\"where\">where\n    K: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a>,\n    S: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/hash/trait.BuildHasher.html\" title=\"trait core::hash::BuildHasher\">BuildHasher</a>,</div></h4></section></summary><div class=\"docblock\"><p>Sets the value of the entry with the VacantEntry’s key,\nand returns a mutable reference to it.</p>\n<h5 id=\"examples-2\"><a class=\"doc-anchor\" href=\"#examples-2\">§</a>Examples</h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">use </span>hashbrown::HashMap;\n<span class=\"kw\">use </span>hashbrown::hash_map::Entry;\n\n<span class=\"kw\">let </span><span class=\"kw-2\">mut </span>map: HashMap&lt;<span class=\"kw-2\">&amp;</span>str, u32&gt; = HashMap::new();\n\n<span class=\"kw\">if let </span>Entry::Vacant(o) = map.entry(<span class=\"string\">\"poneyland\"</span>) {\n    o.insert(<span class=\"number\">37</span>);\n}\n<span class=\"macro\">assert_eq!</span>(map[<span class=\"string\">\"poneyland\"</span>], <span class=\"number\">37</span>);</code></pre></div>\n</div></details></div></details>",0,"zng_unique_id::IdVacantEntry"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()