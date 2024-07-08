(function() {var type_impls = {
"zng":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-AnyConfig-for-SyncConfig%3CM%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/zng_ext_config/sync.rs.html#232\">source</a><a href=\"#impl-AnyConfig-for-SyncConfig%3CM%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;M&gt; <a class=\"trait\" href=\"zng/config/trait.AnyConfig.html\" title=\"trait zng::config::AnyConfig\">AnyConfig</a> for <a class=\"struct\" href=\"zng_ext_config/sync/struct.SyncConfig.html\" title=\"struct zng_ext_config::sync::SyncConfig\">SyncConfig</a>&lt;M&gt;<div class=\"where\">where\n    M: <a class=\"trait\" href=\"zng_ext_config/trait.ConfigMap.html\" title=\"trait zng_ext_config::ConfigMap\">ConfigMap</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.get_raw\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/zng_ext_config/sync.rs.html#233\">source</a><a href=\"#method.get_raw\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"zng/config/trait.AnyConfig.html#tymethod.get_raw\" class=\"fn\">get_raw</a>(\n    &amp;mut self,\n    key: <a class=\"struct\" href=\"zng/text/struct.Txt.html\" title=\"struct zng::text::Txt\">Txt</a>,\n    default: <a class=\"struct\" href=\"zng/config/struct.RawConfigValue.html\" title=\"struct zng::config::RawConfigValue\">RawConfigValue</a>,\n    insert: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.79.0/std/primitive.bool.html\">bool</a>,\n    shared: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.79.0/std/primitive.bool.html\">bool</a>\n) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.79.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn VarBoxed&lt;<a class=\"struct\" href=\"zng/config/struct.RawConfigValue.html\" title=\"struct zng::config::RawConfigValue\">RawConfigValue</a>&gt;&gt;</h4></section></summary><div class='docblock'>Gets a weak typed variable to the config <code>key</code>. <a href=\"zng/config/trait.AnyConfig.html#tymethod.get_raw\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.contains_key\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/zng_ext_config/sync.rs.html#242\">source</a><a href=\"#method.contains_key\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"zng/config/trait.AnyConfig.html#tymethod.contains_key\" class=\"fn\">contains_key</a>(&amp;mut self, key: <a class=\"struct\" href=\"zng/text/struct.Txt.html\" title=\"struct zng::text::Txt\">Txt</a>) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.79.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn VarBoxed&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.79.0/std/primitive.bool.html\">bool</a>&gt;&gt;</h4></section></summary><div class='docblock'>Gets a read-only variable that tracks if an entry for the <code>key</code> is in the backing storage.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.status\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/zng_ext_config/sync.rs.html#246\">source</a><a href=\"#method.status\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"zng/config/trait.AnyConfig.html#tymethod.status\" class=\"fn\">status</a>(&amp;self) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.79.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn VarBoxed&lt;<a class=\"enum\" href=\"zng/config/enum.ConfigStatus.html\" title=\"enum zng::config::ConfigStatus\">ConfigStatus</a>&gt;&gt;</h4></section></summary><div class='docblock'>Gets a read-only variable that represents the IO status of the config.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.remove\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/zng_ext_config/sync.rs.html#250\">source</a><a href=\"#method.remove\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"zng/config/trait.AnyConfig.html#tymethod.remove\" class=\"fn\">remove</a>(&amp;mut self, key: &amp;<a class=\"struct\" href=\"zng/text/struct.Txt.html\" title=\"struct zng::text::Txt\">Txt</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.79.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>Removes the <code>key</code> from the backing storage. <a href=\"zng/config/trait.AnyConfig.html#tymethod.remove\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.low_memory\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/zng_ext_config/sync.rs.html#260\">source</a><a href=\"#method.low_memory\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"zng/config/trait.AnyConfig.html#tymethod.low_memory\" class=\"fn\">low_memory</a>(&amp;mut self)</h4></section></summary><div class='docblock'>Cleanup and flush RAM caches.</div></details></div></details>","AnyConfig","zng::config::JsonConfig","zng::config::RonConfig","zng::config::TomlConfig","zng::config::YamlConfig"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Config-for-SyncConfig%3CM%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/zng_ext_config/sync.rs.html#264\">source</a><a href=\"#impl-Config-for-SyncConfig%3CM%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;M&gt; <a class=\"trait\" href=\"zng/config/trait.Config.html\" title=\"trait zng::config::Config\">Config</a> for <a class=\"struct\" href=\"zng_ext_config/sync/struct.SyncConfig.html\" title=\"struct zng_ext_config::sync::SyncConfig\">SyncConfig</a>&lt;M&gt;<div class=\"where\">where\n    M: <a class=\"trait\" href=\"zng_ext_config/trait.ConfigMap.html\" title=\"trait zng_ext_config::ConfigMap\">ConfigMap</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.get\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/zng_ext_config/sync.rs.html#265\">source</a><a href=\"#method.get\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"zng/config/trait.Config.html#tymethod.get\" class=\"fn\">get</a>&lt;T&gt;(\n    &amp;mut self,\n    key: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.79.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"zng/text/struct.Txt.html\" title=\"struct zng::text::Txt\">Txt</a>&gt;,\n    default: T,\n    insert: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.79.0/std/primitive.bool.html\">bool</a>\n) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.79.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn VarBoxed&lt;T&gt;&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"zng/config/trait.ConfigValue.html\" title=\"trait zng::config::ConfigValue\">ConfigValue</a>,</div></h4></section></summary><div class='docblock'>Gets a variable that is bound to the config <code>key</code>. <a href=\"zng/config/trait.Config.html#tymethod.get\">Read more</a></div></details></div></details>","Config","zng::config::JsonConfig","zng::config::RonConfig","zng::config::TomlConfig","zng::config::YamlConfig"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-SyncConfig%3CM%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/zng_ext_config/sync.rs.html#21\">source</a><a href=\"#impl-SyncConfig%3CM%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;M&gt; <a class=\"struct\" href=\"zng_ext_config/sync/struct.SyncConfig.html\" title=\"struct zng_ext_config::sync::SyncConfig\">SyncConfig</a>&lt;M&gt;<div class=\"where\">where\n    M: <a class=\"trait\" href=\"zng_ext_config/trait.ConfigMap.html\" title=\"trait zng_ext_config::ConfigMap\">ConfigMap</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.sync\" class=\"method\"><a class=\"src rightside\" href=\"src/zng_ext_config/sync.rs.html#23\">source</a><h4 class=\"code-header\">pub fn <a href=\"zng_ext_config/sync/struct.SyncConfig.html#tymethod.sync\" class=\"fn\">sync</a>(file: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.79.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.79.0/std/path/struct.PathBuf.html\" title=\"struct std::path::PathBuf\">PathBuf</a>&gt;) -&gt; <a class=\"struct\" href=\"zng_ext_config/sync/struct.SyncConfig.html\" title=\"struct zng_ext_config::sync::SyncConfig\">SyncConfig</a>&lt;M&gt;</h4></section></summary><div class=\"docblock\"><p>Open write the <code>file</code></p>\n</div></details></div></details>",0,"zng::config::JsonConfig","zng::config::RonConfig","zng::config::TomlConfig","zng::config::YamlConfig"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()