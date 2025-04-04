(function() {
    var type_impls = Object.fromEntries([["zng",[]],["zng_unique_id",[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-Entry%3C'_,+K,+V,+S,+A%3E\" class=\"impl\"><a href=\"#impl-Debug-for-Entry%3C'_,+K,+V,+S,+A%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;K, V, S, A&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.86.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for Entry&lt;'_, K, V, S, A&gt;<div class=\"where\">where\n    K: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.86.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,\n    V: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.86.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,\n    A: Allocator,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.86.0/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.86.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.86.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.86.0/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.86.0/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.86.0/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","zng_unique_id::IdEntry"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Entry%3C'a,+K,+V,+S,+A%3E\" class=\"impl\"><a href=\"#impl-Entry%3C'a,+K,+V,+S,+A%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, K, V, S, A&gt; Entry&lt;'a, K, V, S, A&gt;<div class=\"where\">where\n    A: Allocator,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.insert\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">insert</a>(self, value: V) -&gt; OccupiedEntry&lt;'a, K, V, S, A&gt;<div class=\"where\">where\n    K: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.86.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a>,\n    S: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.86.0/core/hash/trait.BuildHasher.html\" title=\"trait core::hash::BuildHasher\">BuildHasher</a>,</div></h4></section></summary><div class=\"docblock\"><p>Sets the value of the entry, and returns an <code>OccupiedEntry</code>.</p>\n<h5 id=\"examples\"><a class=\"doc-anchor\" href=\"#examples\">§</a>Examples</h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">use </span>hashbrown::HashMap;\n\n<span class=\"kw\">let </span><span class=\"kw-2\">mut </span>map: HashMap&lt;<span class=\"kw-2\">&amp;</span>str, u32&gt; = HashMap::new();\n<span class=\"kw\">let </span>entry = map.entry(<span class=\"string\">\"horseyland\"</span>).insert(<span class=\"number\">37</span>);\n\n<span class=\"macro\">assert_eq!</span>(entry.key(), <span class=\"kw-2\">&amp;</span><span class=\"string\">\"horseyland\"</span>);</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.or_insert\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">or_insert</a>(self, default: V) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.86.0/std/primitive.reference.html\">&amp;'a mut V</a><div class=\"where\">where\n    K: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.86.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a>,\n    S: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.86.0/core/hash/trait.BuildHasher.html\" title=\"trait core::hash::BuildHasher\">BuildHasher</a>,</div></h4></section></summary><div class=\"docblock\"><p>Ensures a value is in the entry by inserting the default if empty, and returns\na mutable reference to the value in the entry.</p>\n<h5 id=\"examples-1\"><a class=\"doc-anchor\" href=\"#examples-1\">§</a>Examples</h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">use </span>hashbrown::HashMap;\n\n<span class=\"kw\">let </span><span class=\"kw-2\">mut </span>map: HashMap&lt;<span class=\"kw-2\">&amp;</span>str, u32&gt; = HashMap::new();\n\n<span class=\"comment\">// nonexistent key\n</span>map.entry(<span class=\"string\">\"poneyland\"</span>).or_insert(<span class=\"number\">3</span>);\n<span class=\"macro\">assert_eq!</span>(map[<span class=\"string\">\"poneyland\"</span>], <span class=\"number\">3</span>);\n\n<span class=\"comment\">// existing key\n</span><span class=\"kw-2\">*</span>map.entry(<span class=\"string\">\"poneyland\"</span>).or_insert(<span class=\"number\">10</span>) <span class=\"kw-2\">*</span>= <span class=\"number\">2</span>;\n<span class=\"macro\">assert_eq!</span>(map[<span class=\"string\">\"poneyland\"</span>], <span class=\"number\">6</span>);</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.or_insert_with\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">or_insert_with</a>&lt;F&gt;(self, default: F) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.86.0/std/primitive.reference.html\">&amp;'a mut V</a><div class=\"where\">where\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.86.0/core/ops/function/trait.FnOnce.html\" title=\"trait core::ops::function::FnOnce\">FnOnce</a>() -&gt; V,\n    K: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.86.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a>,\n    S: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.86.0/core/hash/trait.BuildHasher.html\" title=\"trait core::hash::BuildHasher\">BuildHasher</a>,</div></h4></section></summary><div class=\"docblock\"><p>Ensures a value is in the entry by inserting the result of the default function if empty,\nand returns a mutable reference to the value in the entry.</p>\n<h5 id=\"examples-2\"><a class=\"doc-anchor\" href=\"#examples-2\">§</a>Examples</h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">use </span>hashbrown::HashMap;\n\n<span class=\"kw\">let </span><span class=\"kw-2\">mut </span>map: HashMap&lt;<span class=\"kw-2\">&amp;</span>str, u32&gt; = HashMap::new();\n\n<span class=\"comment\">// nonexistent key\n</span>map.entry(<span class=\"string\">\"poneyland\"</span>).or_insert_with(|| <span class=\"number\">3</span>);\n<span class=\"macro\">assert_eq!</span>(map[<span class=\"string\">\"poneyland\"</span>], <span class=\"number\">3</span>);\n\n<span class=\"comment\">// existing key\n</span><span class=\"kw-2\">*</span>map.entry(<span class=\"string\">\"poneyland\"</span>).or_insert_with(|| <span class=\"number\">10</span>) <span class=\"kw-2\">*</span>= <span class=\"number\">2</span>;\n<span class=\"macro\">assert_eq!</span>(map[<span class=\"string\">\"poneyland\"</span>], <span class=\"number\">6</span>);</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.or_insert_with_key\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">or_insert_with_key</a>&lt;F&gt;(self, default: F) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.86.0/std/primitive.reference.html\">&amp;'a mut V</a><div class=\"where\">where\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.86.0/core/ops/function/trait.FnOnce.html\" title=\"trait core::ops::function::FnOnce\">FnOnce</a>(<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.86.0/std/primitive.reference.html\">&amp;K</a>) -&gt; V,\n    K: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.86.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a>,\n    S: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.86.0/core/hash/trait.BuildHasher.html\" title=\"trait core::hash::BuildHasher\">BuildHasher</a>,</div></h4></section></summary><div class=\"docblock\"><p>Ensures a value is in the entry by inserting, if empty, the result of the default function.\nThis method allows for generating key-derived values for insertion by providing the default\nfunction a reference to the key that was moved during the <code>.entry(key)</code> method call.</p>\n<p>The reference to the moved key is provided so that cloning or copying the key is\nunnecessary, unlike with <code>.or_insert_with(|| ... )</code>.</p>\n<h5 id=\"examples-3\"><a class=\"doc-anchor\" href=\"#examples-3\">§</a>Examples</h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">use </span>hashbrown::HashMap;\n\n<span class=\"kw\">let </span><span class=\"kw-2\">mut </span>map: HashMap&lt;<span class=\"kw-2\">&amp;</span>str, usize&gt; = HashMap::new();\n\n<span class=\"comment\">// nonexistent key\n</span>map.entry(<span class=\"string\">\"poneyland\"</span>).or_insert_with_key(|key| key.chars().count());\n<span class=\"macro\">assert_eq!</span>(map[<span class=\"string\">\"poneyland\"</span>], <span class=\"number\">9</span>);\n\n<span class=\"comment\">// existing key\n</span><span class=\"kw-2\">*</span>map.entry(<span class=\"string\">\"poneyland\"</span>).or_insert_with_key(|key| key.chars().count() * <span class=\"number\">10</span>) <span class=\"kw-2\">*</span>= <span class=\"number\">2</span>;\n<span class=\"macro\">assert_eq!</span>(map[<span class=\"string\">\"poneyland\"</span>], <span class=\"number\">18</span>);</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.key\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">key</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.86.0/std/primitive.reference.html\">&amp;K</a></h4></section></summary><div class=\"docblock\"><p>Returns a reference to this entry’s key.</p>\n<h5 id=\"examples-4\"><a class=\"doc-anchor\" href=\"#examples-4\">§</a>Examples</h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">use </span>hashbrown::HashMap;\n\n<span class=\"kw\">let </span><span class=\"kw-2\">mut </span>map: HashMap&lt;<span class=\"kw-2\">&amp;</span>str, u32&gt; = HashMap::new();\nmap.entry(<span class=\"string\">\"poneyland\"</span>).or_insert(<span class=\"number\">3</span>);\n<span class=\"comment\">// existing key\n</span><span class=\"macro\">assert_eq!</span>(map.entry(<span class=\"string\">\"poneyland\"</span>).key(), <span class=\"kw-2\">&amp;</span><span class=\"string\">\"poneyland\"</span>);\n<span class=\"comment\">// nonexistent key\n</span><span class=\"macro\">assert_eq!</span>(map.entry(<span class=\"string\">\"horseland\"</span>).key(), <span class=\"kw-2\">&amp;</span><span class=\"string\">\"horseland\"</span>);</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.and_modify\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">and_modify</a>&lt;F&gt;(self, f: F) -&gt; Entry&lt;'a, K, V, S, A&gt;<div class=\"where\">where\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.86.0/core/ops/function/trait.FnOnce.html\" title=\"trait core::ops::function::FnOnce\">FnOnce</a>(<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.86.0/std/primitive.reference.html\">&amp;mut V</a>),</div></h4></section></summary><div class=\"docblock\"><p>Provides in-place mutable access to an occupied entry before any\npotential inserts into the map.</p>\n<h5 id=\"examples-5\"><a class=\"doc-anchor\" href=\"#examples-5\">§</a>Examples</h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">use </span>hashbrown::HashMap;\n\n<span class=\"kw\">let </span><span class=\"kw-2\">mut </span>map: HashMap&lt;<span class=\"kw-2\">&amp;</span>str, u32&gt; = HashMap::new();\n\nmap.entry(<span class=\"string\">\"poneyland\"</span>)\n   .and_modify(|e| { <span class=\"kw-2\">*</span>e += <span class=\"number\">1 </span>})\n   .or_insert(<span class=\"number\">42</span>);\n<span class=\"macro\">assert_eq!</span>(map[<span class=\"string\">\"poneyland\"</span>], <span class=\"number\">42</span>);\n\nmap.entry(<span class=\"string\">\"poneyland\"</span>)\n   .and_modify(|e| { <span class=\"kw-2\">*</span>e += <span class=\"number\">1 </span>})\n   .or_insert(<span class=\"number\">42</span>);\n<span class=\"macro\">assert_eq!</span>(map[<span class=\"string\">\"poneyland\"</span>], <span class=\"number\">43</span>);</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.and_replace_entry_with\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">and_replace_entry_with</a>&lt;F&gt;(self, f: F) -&gt; Entry&lt;'a, K, V, S, A&gt;<div class=\"where\">where\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.86.0/core/ops/function/trait.FnOnce.html\" title=\"trait core::ops::function::FnOnce\">FnOnce</a>(<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.86.0/std/primitive.reference.html\">&amp;K</a>, V) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.86.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;V&gt;,</div></h4></section></summary><div class=\"docblock\"><p>Provides shared access to the key and owned access to the value of\nan occupied entry and allows to replace or remove it based on the\nvalue of the returned option.</p>\n<h5 id=\"examples-6\"><a class=\"doc-anchor\" href=\"#examples-6\">§</a>Examples</h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">use </span>hashbrown::HashMap;\n<span class=\"kw\">use </span>hashbrown::hash_map::Entry;\n\n<span class=\"kw\">let </span><span class=\"kw-2\">mut </span>map: HashMap&lt;<span class=\"kw-2\">&amp;</span>str, u32&gt; = HashMap::new();\n\n<span class=\"kw\">let </span>entry = map\n    .entry(<span class=\"string\">\"poneyland\"</span>)\n    .and_replace_entry_with(|_k, _v| <span class=\"macro\">panic!</span>());\n\n<span class=\"kw\">match </span>entry {\n    Entry::Vacant(e) =&gt; {\n        <span class=\"macro\">assert_eq!</span>(e.key(), <span class=\"kw-2\">&amp;</span><span class=\"string\">\"poneyland\"</span>);\n    }\n    Entry::Occupied(<span class=\"kw\">_</span>) =&gt; <span class=\"macro\">panic!</span>(),\n}\n\nmap.insert(<span class=\"string\">\"poneyland\"</span>, <span class=\"number\">42</span>);\n\n<span class=\"kw\">let </span>entry = map\n    .entry(<span class=\"string\">\"poneyland\"</span>)\n    .and_replace_entry_with(|k, v| {\n        <span class=\"macro\">assert_eq!</span>(k, <span class=\"kw-2\">&amp;</span><span class=\"string\">\"poneyland\"</span>);\n        <span class=\"macro\">assert_eq!</span>(v, <span class=\"number\">42</span>);\n        <span class=\"prelude-val\">Some</span>(v + <span class=\"number\">1</span>)\n    });\n\n<span class=\"kw\">match </span>entry {\n    Entry::Occupied(e) =&gt; {\n        <span class=\"macro\">assert_eq!</span>(e.key(), <span class=\"kw-2\">&amp;</span><span class=\"string\">\"poneyland\"</span>);\n        <span class=\"macro\">assert_eq!</span>(e.get(), <span class=\"kw-2\">&amp;</span><span class=\"number\">43</span>);\n    }\n    Entry::Vacant(<span class=\"kw\">_</span>) =&gt; <span class=\"macro\">panic!</span>(),\n}\n\n<span class=\"macro\">assert_eq!</span>(map[<span class=\"string\">\"poneyland\"</span>], <span class=\"number\">43</span>);\n\n<span class=\"kw\">let </span>entry = map\n    .entry(<span class=\"string\">\"poneyland\"</span>)\n    .and_replace_entry_with(|_k, _v| <span class=\"prelude-val\">None</span>);\n\n<span class=\"kw\">match </span>entry {\n    Entry::Vacant(e) =&gt; <span class=\"macro\">assert_eq!</span>(e.key(), <span class=\"kw-2\">&amp;</span><span class=\"string\">\"poneyland\"</span>),\n    Entry::Occupied(<span class=\"kw\">_</span>) =&gt; <span class=\"macro\">panic!</span>(),\n}\n\n<span class=\"macro\">assert!</span>(!map.contains_key(<span class=\"string\">\"poneyland\"</span>));</code></pre></div>\n</div></details></div></details>",0,"zng_unique_id::IdEntry"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Entry%3C'a,+K,+V,+S,+A%3E\" class=\"impl\"><a href=\"#impl-Entry%3C'a,+K,+V,+S,+A%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, K, V, S, A&gt; Entry&lt;'a, K, V, S, A&gt;<div class=\"where\">where\n    V: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.86.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,\n    A: Allocator,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.or_default\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">or_default</a>(self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.86.0/std/primitive.reference.html\">&amp;'a mut V</a><div class=\"where\">where\n    K: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.86.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a>,\n    S: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.86.0/core/hash/trait.BuildHasher.html\" title=\"trait core::hash::BuildHasher\">BuildHasher</a>,</div></h4></section></summary><div class=\"docblock\"><p>Ensures a value is in the entry by inserting the default value if empty,\nand returns a mutable reference to the value in the entry.</p>\n<h5 id=\"examples\"><a class=\"doc-anchor\" href=\"#examples\">§</a>Examples</h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">use </span>hashbrown::HashMap;\n\n<span class=\"kw\">let </span><span class=\"kw-2\">mut </span>map: HashMap&lt;<span class=\"kw-2\">&amp;</span>str, <span class=\"prelude-ty\">Option</span>&lt;u32&gt;&gt; = HashMap::new();\n\n<span class=\"comment\">// nonexistent key\n</span>map.entry(<span class=\"string\">\"poneyland\"</span>).or_default();\n<span class=\"macro\">assert_eq!</span>(map[<span class=\"string\">\"poneyland\"</span>], <span class=\"prelude-val\">None</span>);\n\nmap.insert(<span class=\"string\">\"horseland\"</span>, <span class=\"prelude-val\">Some</span>(<span class=\"number\">3</span>));\n\n<span class=\"comment\">// existing key\n</span><span class=\"macro\">assert_eq!</span>(map.entry(<span class=\"string\">\"horseland\"</span>).or_default(), <span class=\"kw-2\">&amp;mut </span><span class=\"prelude-val\">Some</span>(<span class=\"number\">3</span>));</code></pre></div>\n</div></details></div></details>",0,"zng_unique_id::IdEntry"]]],["zng_wgt",[]]]);
    if (window.register_type_impls) {
        window.register_type_impls(type_impls);
    } else {
        window.pending_type_impls = type_impls;
    }
})()
//{"start":55,"fragment_lengths":[10,19250,15]}