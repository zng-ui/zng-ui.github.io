(function() {var type_impls = {
"zng_ext_config":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-AnyConfig-for-SyncConfig%3CM%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/zng_ext_config/sync.rs.html#206-237\">source</a><a href=\"#impl-AnyConfig-for-SyncConfig%3CM%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;M: <a class=\"trait\" href=\"zng_ext_config/trait.ConfigMap.html\" title=\"trait zng_ext_config::ConfigMap\">ConfigMap</a>&gt; <a class=\"trait\" href=\"zng_ext_config/trait.AnyConfig.html\" title=\"trait zng_ext_config::AnyConfig\">AnyConfig</a> for <a class=\"struct\" href=\"zng_ext_config/struct.SyncConfig.html\" title=\"struct zng_ext_config::SyncConfig\">SyncConfig</a>&lt;M&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.get_raw\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/zng_ext_config/sync.rs.html#207-214\">source</a><a href=\"#method.get_raw\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"zng_ext_config/trait.AnyConfig.html#tymethod.get_raw\" class=\"fn\">get_raw</a>(\n    &amp;mut self,\n    key: <a class=\"type\" href=\"zng_ext_config/type.ConfigKey.html\" title=\"type zng_ext_config::ConfigKey\">ConfigKey</a>,\n    default: <a class=\"struct\" href=\"zng_ext_config/struct.RawConfigValue.html\" title=\"struct zng_ext_config::RawConfigValue\">RawConfigValue</a>,\n    shared: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.bool.html\">bool</a>\n) -&gt; <a class=\"type\" href=\"zng_var/boxed/type.BoxedVar.html\" title=\"type zng_var::boxed::BoxedVar\">BoxedVar</a>&lt;<a class=\"struct\" href=\"zng_ext_config/struct.RawConfigValue.html\" title=\"struct zng_ext_config::RawConfigValue\">RawConfigValue</a>&gt;</h4></section></summary><div class='docblock'>Gets a weak typed variable to the config <code>key</code>. <a href=\"zng_ext_config/trait.AnyConfig.html#tymethod.get_raw\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.contains_key\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/zng_ext_config/sync.rs.html#216-218\">source</a><a href=\"#method.contains_key\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"zng_ext_config/trait.AnyConfig.html#tymethod.contains_key\" class=\"fn\">contains_key</a>(&amp;mut self, key: <a class=\"type\" href=\"zng_ext_config/type.ConfigKey.html\" title=\"type zng_ext_config::ConfigKey\">ConfigKey</a>) -&gt; <a class=\"type\" href=\"zng_var/boxed/type.BoxedVar.html\" title=\"type zng_var::boxed::BoxedVar\">BoxedVar</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.bool.html\">bool</a>&gt;</h4></section></summary><div class='docblock'>Gets a read-only variable that tracks if an entry for the <code>key</code> is in the backing storage.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.status\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/zng_ext_config/sync.rs.html#220-222\">source</a><a href=\"#method.status\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"zng_ext_config/trait.AnyConfig.html#tymethod.status\" class=\"fn\">status</a>(&amp;self) -&gt; <a class=\"type\" href=\"zng_var/boxed/type.BoxedVar.html\" title=\"type zng_var::boxed::BoxedVar\">BoxedVar</a>&lt;<a class=\"enum\" href=\"zng_ext_config/enum.ConfigStatus.html\" title=\"enum zng_ext_config::ConfigStatus\">ConfigStatus</a>&gt;</h4></section></summary><div class='docblock'>Gets a read-only variable that represents the IO status of the config.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.remove\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/zng_ext_config/sync.rs.html#224-232\">source</a><a href=\"#method.remove\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"zng_ext_config/trait.AnyConfig.html#tymethod.remove\" class=\"fn\">remove</a>(&amp;mut self, key: &amp;<a class=\"type\" href=\"zng_ext_config/type.ConfigKey.html\" title=\"type zng_ext_config::ConfigKey\">ConfigKey</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>Removes the <code>key</code> from the backing storage. <a href=\"zng_ext_config/trait.AnyConfig.html#tymethod.remove\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.low_memory\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/zng_ext_config/sync.rs.html#234-236\">source</a><a href=\"#method.low_memory\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"zng_ext_config/trait.AnyConfig.html#tymethod.low_memory\" class=\"fn\">low_memory</a>(&amp;mut self)</h4></section></summary><div class='docblock'>Cleanup and flush RAM caches.</div></details></div></details>","AnyConfig","zng_ext_config::json::JsonConfig","zng_ext_config::toml::TomlConfig","zng_ext_config::ron::RonConfig","zng_ext_config::yaml::YamlConfig"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Config-for-SyncConfig%3CM%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/zng_ext_config/sync.rs.html#238-243\">source</a><a href=\"#impl-Config-for-SyncConfig%3CM%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;M: <a class=\"trait\" href=\"zng_ext_config/trait.ConfigMap.html\" title=\"trait zng_ext_config::ConfigMap\">ConfigMap</a>&gt; <a class=\"trait\" href=\"zng_ext_config/trait.Config.html\" title=\"trait zng_ext_config::Config\">Config</a> for <a class=\"struct\" href=\"zng_ext_config/struct.SyncConfig.html\" title=\"struct zng_ext_config::SyncConfig\">SyncConfig</a>&lt;M&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.get\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/zng_ext_config/sync.rs.html#239-242\">source</a><a href=\"#method.get\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"zng_ext_config/trait.Config.html#tymethod.get\" class=\"fn\">get</a>&lt;T: <a class=\"trait\" href=\"zng_ext_config/trait.ConfigValue.html\" title=\"trait zng_ext_config::ConfigValue\">ConfigValue</a>&gt;(\n    &amp;mut self,\n    key: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"type\" href=\"zng_ext_config/type.ConfigKey.html\" title=\"type zng_ext_config::ConfigKey\">ConfigKey</a>&gt;,\n    default: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/ops/function/trait.FnOnce.html\" title=\"trait core::ops::function::FnOnce\">FnOnce</a>() -&gt; T\n) -&gt; <a class=\"type\" href=\"zng_var/boxed/type.BoxedVar.html\" title=\"type zng_var::boxed::BoxedVar\">BoxedVar</a>&lt;T&gt;</h4></section></summary><div class='docblock'>Gets a variable that is bound to the config <code>key</code>. <a href=\"zng_ext_config/trait.Config.html#tymethod.get\">Read more</a></div></details></div></details>","Config","zng_ext_config::json::JsonConfig","zng_ext_config::toml::TomlConfig","zng_ext_config::ron::RonConfig","zng_ext_config::yaml::YamlConfig"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-SyncConfig%3CM%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/zng_ext_config/sync.rs.html#21-205\">source</a><a href=\"#impl-SyncConfig%3CM%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;M: <a class=\"trait\" href=\"zng_ext_config/trait.ConfigMap.html\" title=\"trait zng_ext_config::ConfigMap\">ConfigMap</a>&gt; <a class=\"struct\" href=\"zng_ext_config/struct.SyncConfig.html\" title=\"struct zng_ext_config::SyncConfig\">SyncConfig</a>&lt;M&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.sync\" class=\"method\"><a class=\"src rightside\" href=\"src/zng_ext_config/sync.rs.html#23-55\">source</a><h4 class=\"code-header\">pub fn <a href=\"zng_ext_config/struct.SyncConfig.html#tymethod.sync\" class=\"fn\">sync</a>(file: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.78.0/std/path/struct.PathBuf.html\" title=\"struct std::path::PathBuf\">PathBuf</a>&gt;) -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Open write the <code>file</code></p>\n</div></details></div></details>",0,"zng_ext_config::json::JsonConfig","zng_ext_config::toml::TomlConfig","zng_ext_config::ron::RonConfig","zng_ext_config::yaml::YamlConfig"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()