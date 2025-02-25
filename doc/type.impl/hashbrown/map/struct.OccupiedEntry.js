(function() {
    var type_impls = Object.fromEntries([["zng_unique_id",[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-OccupiedEntry%3C'_,+K,+V,+S,+A%3E\" class=\"impl\"><a href=\"#impl-Debug-for-OccupiedEntry%3C'_,+K,+V,+S,+A%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;K, V, S, A&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.85.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for OccupiedEntry&lt;'_, K, V, S, A&gt;<div class=\"where\">where\n    K: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.85.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,\n    V: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.85.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,\n    A: Allocator,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.85.0/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.85.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.85.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.85.0/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.85.0/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.85.0/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","zng_unique_id::IdOccupiedEntry"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-OccupiedEntry%3C'a,+K,+V,+S,+A%3E\" class=\"impl\"><a href=\"#impl-OccupiedEntry%3C'a,+K,+V,+S,+A%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, K, V, S, A&gt; OccupiedEntry&lt;'a, K, V, S, A&gt;<div class=\"where\">where\n    A: Allocator,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.key\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">key</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.85.0/std/primitive.reference.html\">&amp;K</a></h4></section></summary><div class=\"docblock\"><p>Gets a reference to the key in the entry.</p>\n<h5 id=\"examples\"><a class=\"doc-anchor\" href=\"#examples\">§</a>Examples</h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">use </span>hashbrown::hash_map::{Entry, HashMap};\n\n<span class=\"kw\">let </span><span class=\"kw-2\">mut </span>map: HashMap&lt;<span class=\"kw-2\">&amp;</span>str, u32&gt; = HashMap::new();\nmap.entry(<span class=\"string\">\"poneyland\"</span>).or_insert(<span class=\"number\">12</span>);\n\n<span class=\"kw\">match </span>map.entry(<span class=\"string\">\"poneyland\"</span>) {\n    Entry::Vacant(<span class=\"kw\">_</span>) =&gt; <span class=\"macro\">panic!</span>(),\n    Entry::Occupied(entry) =&gt; <span class=\"macro\">assert_eq!</span>(entry.key(), <span class=\"kw-2\">&amp;</span><span class=\"string\">\"poneyland\"</span>),\n}</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.remove_entry\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">remove_entry</a>(self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.85.0/std/primitive.tuple.html\">(K, V)</a></h4></section></summary><div class=\"docblock\"><p>Take the ownership of the key and value from the map.\nKeeps the allocated memory for reuse.</p>\n<h5 id=\"examples-1\"><a class=\"doc-anchor\" href=\"#examples-1\">§</a>Examples</h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">use </span>hashbrown::HashMap;\n<span class=\"kw\">use </span>hashbrown::hash_map::Entry;\n\n<span class=\"kw\">let </span><span class=\"kw-2\">mut </span>map: HashMap&lt;<span class=\"kw-2\">&amp;</span>str, u32&gt; = HashMap::new();\n<span class=\"comment\">// The map is empty\n</span><span class=\"macro\">assert!</span>(map.is_empty() &amp;&amp; map.capacity() == <span class=\"number\">0</span>);\n\nmap.entry(<span class=\"string\">\"poneyland\"</span>).or_insert(<span class=\"number\">12</span>);\n\n<span class=\"kw\">if let </span>Entry::Occupied(o) = map.entry(<span class=\"string\">\"poneyland\"</span>) {\n    <span class=\"comment\">// We delete the entry from the map.\n    </span><span class=\"macro\">assert_eq!</span>(o.remove_entry(), (<span class=\"string\">\"poneyland\"</span>, <span class=\"number\">12</span>));\n}\n\n<span class=\"macro\">assert_eq!</span>(map.contains_key(<span class=\"string\">\"poneyland\"</span>), <span class=\"bool-val\">false</span>);\n<span class=\"comment\">// Now map hold none elements\n</span><span class=\"macro\">assert!</span>(map.is_empty());</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.get\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">get</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.85.0/std/primitive.reference.html\">&amp;V</a></h4></section></summary><div class=\"docblock\"><p>Gets a reference to the value in the entry.</p>\n<h5 id=\"examples-2\"><a class=\"doc-anchor\" href=\"#examples-2\">§</a>Examples</h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">use </span>hashbrown::HashMap;\n<span class=\"kw\">use </span>hashbrown::hash_map::Entry;\n\n<span class=\"kw\">let </span><span class=\"kw-2\">mut </span>map: HashMap&lt;<span class=\"kw-2\">&amp;</span>str, u32&gt; = HashMap::new();\nmap.entry(<span class=\"string\">\"poneyland\"</span>).or_insert(<span class=\"number\">12</span>);\n\n<span class=\"kw\">match </span>map.entry(<span class=\"string\">\"poneyland\"</span>) {\n    Entry::Vacant(<span class=\"kw\">_</span>) =&gt; <span class=\"macro\">panic!</span>(),\n    Entry::Occupied(entry) =&gt; <span class=\"macro\">assert_eq!</span>(entry.get(), <span class=\"kw-2\">&amp;</span><span class=\"number\">12</span>),\n}</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.get_mut\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">get_mut</a>(&amp;mut self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.85.0/std/primitive.reference.html\">&amp;mut V</a></h4></section></summary><div class=\"docblock\"><p>Gets a mutable reference to the value in the entry.</p>\n<p>If you need a reference to the <code>OccupiedEntry</code> which may outlive the\ndestruction of the <code>Entry</code> value, see <a href=\"#method.into_mut\"><code>into_mut</code></a>.</p>\n<h5 id=\"examples-3\"><a class=\"doc-anchor\" href=\"#examples-3\">§</a>Examples</h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">use </span>hashbrown::HashMap;\n<span class=\"kw\">use </span>hashbrown::hash_map::Entry;\n\n<span class=\"kw\">let </span><span class=\"kw-2\">mut </span>map: HashMap&lt;<span class=\"kw-2\">&amp;</span>str, u32&gt; = HashMap::new();\nmap.entry(<span class=\"string\">\"poneyland\"</span>).or_insert(<span class=\"number\">12</span>);\n\n<span class=\"macro\">assert_eq!</span>(map[<span class=\"string\">\"poneyland\"</span>], <span class=\"number\">12</span>);\n<span class=\"kw\">if let </span>Entry::Occupied(<span class=\"kw-2\">mut </span>o) = map.entry(<span class=\"string\">\"poneyland\"</span>) {\n    <span class=\"kw-2\">*</span>o.get_mut() += <span class=\"number\">10</span>;\n    <span class=\"macro\">assert_eq!</span>(<span class=\"kw-2\">*</span>o.get(), <span class=\"number\">22</span>);\n\n    <span class=\"comment\">// We can use the same Entry multiple times.\n    </span><span class=\"kw-2\">*</span>o.get_mut() += <span class=\"number\">2</span>;\n}\n\n<span class=\"macro\">assert_eq!</span>(map[<span class=\"string\">\"poneyland\"</span>], <span class=\"number\">24</span>);</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.into_mut\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">into_mut</a>(self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.85.0/std/primitive.reference.html\">&amp;'a mut V</a></h4></section></summary><div class=\"docblock\"><p>Converts the <code>OccupiedEntry</code> into a mutable reference to the value in the entry\nwith a lifetime bound to the map itself.</p>\n<p>If you need multiple references to the <code>OccupiedEntry</code>, see <a href=\"#method.get_mut\"><code>get_mut</code></a>.</p>\n<h5 id=\"examples-4\"><a class=\"doc-anchor\" href=\"#examples-4\">§</a>Examples</h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">use </span>hashbrown::hash_map::{Entry, HashMap};\n\n<span class=\"kw\">let </span><span class=\"kw-2\">mut </span>map: HashMap&lt;<span class=\"kw-2\">&amp;</span>str, u32&gt; = HashMap::new();\nmap.entry(<span class=\"string\">\"poneyland\"</span>).or_insert(<span class=\"number\">12</span>);\n\n<span class=\"macro\">assert_eq!</span>(map[<span class=\"string\">\"poneyland\"</span>], <span class=\"number\">12</span>);\n\n<span class=\"kw\">let </span>value: <span class=\"kw-2\">&amp;mut </span>u32;\n<span class=\"kw\">match </span>map.entry(<span class=\"string\">\"poneyland\"</span>) {\n    Entry::Occupied(entry) =&gt; value = entry.into_mut(),\n    Entry::Vacant(<span class=\"kw\">_</span>) =&gt; <span class=\"macro\">panic!</span>(),\n}\n<span class=\"kw-2\">*</span>value += <span class=\"number\">10</span>;\n\n<span class=\"macro\">assert_eq!</span>(map[<span class=\"string\">\"poneyland\"</span>], <span class=\"number\">22</span>);</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.insert\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">insert</a>(&amp;mut self, value: V) -&gt; V</h4></section></summary><div class=\"docblock\"><p>Sets the value of the entry, and returns the entry’s old value.</p>\n<h5 id=\"examples-5\"><a class=\"doc-anchor\" href=\"#examples-5\">§</a>Examples</h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">use </span>hashbrown::HashMap;\n<span class=\"kw\">use </span>hashbrown::hash_map::Entry;\n\n<span class=\"kw\">let </span><span class=\"kw-2\">mut </span>map: HashMap&lt;<span class=\"kw-2\">&amp;</span>str, u32&gt; = HashMap::new();\nmap.entry(<span class=\"string\">\"poneyland\"</span>).or_insert(<span class=\"number\">12</span>);\n\n<span class=\"kw\">if let </span>Entry::Occupied(<span class=\"kw-2\">mut </span>o) = map.entry(<span class=\"string\">\"poneyland\"</span>) {\n    <span class=\"macro\">assert_eq!</span>(o.insert(<span class=\"number\">15</span>), <span class=\"number\">12</span>);\n}\n\n<span class=\"macro\">assert_eq!</span>(map[<span class=\"string\">\"poneyland\"</span>], <span class=\"number\">15</span>);</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.remove\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">remove</a>(self) -&gt; V</h4></section></summary><div class=\"docblock\"><p>Takes the value out of the entry, and returns it.\nKeeps the allocated memory for reuse.</p>\n<h5 id=\"examples-6\"><a class=\"doc-anchor\" href=\"#examples-6\">§</a>Examples</h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">use </span>hashbrown::HashMap;\n<span class=\"kw\">use </span>hashbrown::hash_map::Entry;\n\n<span class=\"kw\">let </span><span class=\"kw-2\">mut </span>map: HashMap&lt;<span class=\"kw-2\">&amp;</span>str, u32&gt; = HashMap::new();\n<span class=\"comment\">// The map is empty\n</span><span class=\"macro\">assert!</span>(map.is_empty() &amp;&amp; map.capacity() == <span class=\"number\">0</span>);\n\nmap.entry(<span class=\"string\">\"poneyland\"</span>).or_insert(<span class=\"number\">12</span>);\n\n<span class=\"kw\">if let </span>Entry::Occupied(o) = map.entry(<span class=\"string\">\"poneyland\"</span>) {\n    <span class=\"macro\">assert_eq!</span>(o.remove(), <span class=\"number\">12</span>);\n}\n\n<span class=\"macro\">assert_eq!</span>(map.contains_key(<span class=\"string\">\"poneyland\"</span>), <span class=\"bool-val\">false</span>);\n<span class=\"comment\">// Now map hold none elements\n</span><span class=\"macro\">assert!</span>(map.is_empty());</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.replace_entry_with\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">replace_entry_with</a>&lt;F&gt;(self, f: F) -&gt; Entry&lt;'a, K, V, S, A&gt;<div class=\"where\">where\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.85.0/core/ops/function/trait.FnOnce.html\" title=\"trait core::ops::function::FnOnce\">FnOnce</a>(<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.85.0/std/primitive.reference.html\">&amp;K</a>, V) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.85.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;V&gt;,</div></h4></section></summary><div class=\"docblock\"><p>Provides shared access to the key and owned access to the value of\nthe entry and allows to replace or remove it based on the\nvalue of the returned option.</p>\n<h5 id=\"examples-7\"><a class=\"doc-anchor\" href=\"#examples-7\">§</a>Examples</h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">use </span>hashbrown::HashMap;\n<span class=\"kw\">use </span>hashbrown::hash_map::Entry;\n\n<span class=\"kw\">let </span><span class=\"kw-2\">mut </span>map: HashMap&lt;<span class=\"kw-2\">&amp;</span>str, u32&gt; = HashMap::new();\nmap.insert(<span class=\"string\">\"poneyland\"</span>, <span class=\"number\">42</span>);\n\n<span class=\"kw\">let </span>entry = <span class=\"kw\">match </span>map.entry(<span class=\"string\">\"poneyland\"</span>) {\n    Entry::Occupied(e) =&gt; {\n        e.replace_entry_with(|k, v| {\n            <span class=\"macro\">assert_eq!</span>(k, <span class=\"kw-2\">&amp;</span><span class=\"string\">\"poneyland\"</span>);\n            <span class=\"macro\">assert_eq!</span>(v, <span class=\"number\">42</span>);\n            <span class=\"prelude-val\">Some</span>(v + <span class=\"number\">1</span>)\n        })\n    }\n    Entry::Vacant(<span class=\"kw\">_</span>) =&gt; <span class=\"macro\">panic!</span>(),\n};\n\n<span class=\"kw\">match </span>entry {\n    Entry::Occupied(e) =&gt; {\n        <span class=\"macro\">assert_eq!</span>(e.key(), <span class=\"kw-2\">&amp;</span><span class=\"string\">\"poneyland\"</span>);\n        <span class=\"macro\">assert_eq!</span>(e.get(), <span class=\"kw-2\">&amp;</span><span class=\"number\">43</span>);\n    }\n    Entry::Vacant(<span class=\"kw\">_</span>) =&gt; <span class=\"macro\">panic!</span>(),\n}\n\n<span class=\"macro\">assert_eq!</span>(map[<span class=\"string\">\"poneyland\"</span>], <span class=\"number\">43</span>);\n\n<span class=\"kw\">let </span>entry = <span class=\"kw\">match </span>map.entry(<span class=\"string\">\"poneyland\"</span>) {\n    Entry::Occupied(e) =&gt; e.replace_entry_with(|_k, _v| <span class=\"prelude-val\">None</span>),\n    Entry::Vacant(<span class=\"kw\">_</span>) =&gt; <span class=\"macro\">panic!</span>(),\n};\n\n<span class=\"kw\">match </span>entry {\n    Entry::Vacant(e) =&gt; {\n        <span class=\"macro\">assert_eq!</span>(e.key(), <span class=\"kw-2\">&amp;</span><span class=\"string\">\"poneyland\"</span>);\n    }\n    Entry::Occupied(<span class=\"kw\">_</span>) =&gt; <span class=\"macro\">panic!</span>(),\n}\n\n<span class=\"macro\">assert!</span>(!map.contains_key(<span class=\"string\">\"poneyland\"</span>));</code></pre></div>\n</div></details></div></details>",0,"zng_unique_id::IdOccupiedEntry"],["<section id=\"impl-Send-for-OccupiedEntry%3C'_,+K,+V,+S,+A%3E\" class=\"impl\"><a href=\"#impl-Send-for-OccupiedEntry%3C'_,+K,+V,+S,+A%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;K, V, S, A&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.85.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for OccupiedEntry&lt;'_, K, V, S, A&gt;<div class=\"where\">where\n    K: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.85.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,\n    V: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.85.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,\n    S: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.85.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,\n    A: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.85.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + Allocator,</div></h3></section>","Send","zng_unique_id::IdOccupiedEntry"],["<section id=\"impl-Sync-for-OccupiedEntry%3C'_,+K,+V,+S,+A%3E\" class=\"impl\"><a href=\"#impl-Sync-for-OccupiedEntry%3C'_,+K,+V,+S,+A%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;K, V, S, A&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.85.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for OccupiedEntry&lt;'_, K, V, S, A&gt;<div class=\"where\">where\n    K: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.85.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,\n    V: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.85.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,\n    S: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.85.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,\n    A: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.85.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + Allocator,</div></h3></section>","Sync","zng_unique_id::IdOccupiedEntry"]]]]);
    if (window.register_type_impls) {
        window.register_type_impls(type_impls);
    } else {
        window.pending_type_impls = type_impls;
    }
})()
//{"start":55,"fragment_lengths":[18686]}