(function() {
    var implementors = Object.fromEntries([["zng",[]],["zng_task",[["impl AsyncRead for <a class=\"struct\" href=\"zng_task/http/struct.Body.html\" title=\"struct zng_task::http::Body\">Body</a>"],["impl&lt;S, L&gt; AsyncRead for <a class=\"struct\" href=\"zng_task/io/struct.ReadLimited.html\" title=\"struct zng_task::io::ReadLimited\">ReadLimited</a>&lt;S, L&gt;<div class=\"where\">where\n    S: AsyncRead,\n    L: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.88.0/core/ops/function/trait.Fn.html\" title=\"trait core::ops::function::Fn\">Fn</a>() -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.88.0/std/io/error/struct.Error.html\" title=\"struct std::io::error::Error\">Error</a>,</div>"],["impl&lt;S: AsyncRead&gt; AsyncRead for <a class=\"struct\" href=\"zng_task/io/struct.McBufReader.html\" title=\"struct zng_task::io::McBufReader\">McBufReader</a>&lt;S&gt;"],["impl&lt;T: AsyncRead + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.88.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>&gt; AsyncRead for <a class=\"struct\" href=\"zng_task/io/struct.Measure.html\" title=\"struct zng_task::io::Measure\">Measure</a>&lt;T&gt;"]]]]);
    if (window.register_implementors) {
        window.register_implementors(implementors);
    } else {
        window.pending_implementors = implementors;
    }
})()
//{"start":57,"fragment_lengths":[10,1144]}