(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{555:function(n){n.exports=JSON.parse('{"content":"<h4 id=\\"shi-yong-ast-wan-cheng-xu-qiu\\">使用AST完成需求</h4>\\n<p>需求：输出方法中的参数为字符串&#39;1234&#39;的变量名</p>\\n<pre><code class=\\"language-js\\"><pre class=\\"hljs\\"><code><span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span> <span class=\\"hljs-title\\">x</span>(<span class=\\"hljs-params\\"></span>)</span>{\\n  <span class=\\"hljs-keyword\\">var</span> a=<span class=\\"hljs-built_in\\">parseInt</span>(<span class=\\"hljs-string\\">\'1234\'</span>);\\n  <span class=\\"hljs-keyword\\">var</span> b=<span class=\\"hljs-string\\">\'1234\'</span>;\\n  <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span> <span class=\\"hljs-title\\">double</span>(<span class=\\"hljs-params\\">n</span>)</span>{\\n    <span class=\\"hljs-keyword\\">return</span> n*<span class=\\"hljs-number\\">2</span>\\n  }\\n  <span class=\\"hljs-keyword\\">var</span> c=double(<span class=\\"hljs-string\\">\'1234\'</span>);\\n  <span class=\\"hljs-keyword\\">var</span> d=double(<span class=\\"hljs-number\\">1234</span>);\\n  <span class=\\"hljs-keyword\\">var</span> e=(<span class=\\"hljs-string\\">\'1234\'</span>)*<span class=\\"hljs-number\\">2</span>;\\n  <span class=\\"hljs-keyword\\">var</span> f=<span class=\\"hljs-string\\">\\"double(\'1234\')\\"</span>;\\n}</code></pre></code></pre>\\n<p>如果使用正则，我们需要定义：</p>\\n<ol>\\n<li>需要在方法参数内(括号前面必须是符合命名格式的方法名)，过滤b,e</li>\\n<li>必须是字符串1234，过滤d</li>\\n<li>必须在方法调用内，而不是字符串内，过滤f</li>\\n</ol>\\n<p>因为如果用正则处理，会比较繁琐</p>\\n<p>尝试使用AST，直接上代码</p>\\n<pre><code class=\\"language-js\\"><pre class=\\"hljs\\"><code><span class=\\"hljs-keyword\\">const</span> esprima=<span class=\\"hljs-built_in\\">require</span>(<span class=\\"hljs-string\\">\'esprima\'</span>);\\n<span class=\\"hljs-keyword\\">const</span> estraverse =<span class=\\"hljs-built_in\\">require</span>(<span class=\\"hljs-string\\">\'estraverse\'</span>);\\n\\n<span class=\\"hljs-keyword\\">const</span> ast=esprima.parse(x.toString())\\nestraverse.traverse(ast, {\\n  <span class=\\"hljs-attr\\">enter</span>: <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span> (<span class=\\"hljs-params\\">node,parent</span>) </span>{\\n    <span class=\\"hljs-keyword\\">if</span>(node.type===<span class=\\"hljs-string\\">\\"CallExpression\\"</span> <span class=\\"hljs-comment\\">// 对应正则中第3条</span>\\n      &amp;&amp; node.callee.type===<span class=\\"hljs-string\\">\\"Identifier\\"</span>  <span class=\\"hljs-comment\\">// 对应正则中第1条</span>\\n      &amp;&amp; node.arguments[<span class=\\"hljs-number\\">0</span>].value===<span class=\\"hljs-string\\">\\"1234\\"</span>\\n      ){ <span class=\\"hljs-comment\\">// 对应正则中第2条</span>\\n      node.arguments[<span class=\\"hljs-number\\">0</span>].value=\\n      <span class=\\"hljs-built_in\\">console</span>.log(parent.id.name) \\n    }\\n  }\\n});\\n<span class=\\"hljs-comment\\">// a</span>\\n<span class=\\"hljs-comment\\">// c</span></code></pre></code></pre>\\n","toc":[{"anchor":"shi-yong-ast-wan-cheng-xu-qiu","level":4,"text":"使用AST完成需求"}],"relatedTags":null,"created_at":"2018-06-27","timeArr":[2018,5,27,0,0,0,0],"title":"JS的AST(Esprima.parse)","uuid":"36b0972f79325bab8c6db377892c184e894e5492","summary":"<h4>使用AST完成需求</h4>\\n<p>需求：输出方法中的参数为字符串\'1234\'的变量名</p>\\n<pre class=\\"hljs\\"><code><span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span> <span class=\\"hljs-title\\">x</span>(<span class=\\"hljs-params\\"></span>)</span>{\\n  <span class=\\"hljs-keyword\\">var</span> a=<span class=\\"hljs-built_in\\">parseInt</span>(<span class=\\"hljs-string\\">\'1234\'</span>);\\n  <span class=\\"hljs-keyword\\">var</span> b=<span class=\\"hljs-string\\">\'1234\'</span>;\\n  <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span> <span class=\\"hljs-title\\">double</span>(<span class=\\"hljs-params\\">n</span>)</span>{\\n    <span class=\\"hljs-keyword\\">return</span> n*<span class=\\"hljs-number\\">2</span>\\n  }\\n  <span class=\\"hljs-keyword\\">var</span> c=double...</code></pre>","slug":"JS-de-AST(Esprima.parse)","sha":"8446b12b208921dadb0f44d47ca83eb637509139"}')}}]);