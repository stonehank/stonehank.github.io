(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{600:function(n){n.exports=JSON.parse('{"content":"<p>今天碰到一个需求，获取函数参数名称，\\n刚开始打算用正则去处理，但函数写法(包括es6)也挺多的，</p>\\n<p>例如：</p>\\n<pre><code><pre class=\\"hljs\\"><code>function x(a,b){}\\nfunction x(a=5,b=3){}\\nlet x=function(a=5,b){}\\nlet x=(a=5,b)=&gt;a+b\\nlet x=a=&gt;a*2\\nfunction x(a,/* b */){}</code></pre></code></pre><p>如果用正则去兼容所有情况，考虑的会比较复杂，而且不能有冲突。</p>\\n<p>这里使用<code>AST</code>语法树去获取，思路就是</p>\\n<ol>\\n<li><p>函数可以分为3类，分别是</p>\\n<p><code>FunctionDeclaration</code>，对应 <code>function x(a,b){}</code>\\n<code>FunctionExpression</code>，对应<code>let x=function(a=5,b){}</code>\\n<code>ArrowFunctionExpression</code>，对应<code>let x=a=&gt;a*2</code></p>\\n</li>\\n<li><p>获取语法分析包<code>npm install --save esprima</code>，\\n 获取语法树递归解析包<code>npm install --save estraverse</code></p>\\n<p> 使用<code>estraverse</code>去处理语法树，可以省去很多判断处理，因为它已经帮你处理好了</p>\\n</li>\\n<li><p>编写代码处理</p>\\n</li>\\n</ol>\\n<pre><code class=\\"language-js\\"><pre class=\\"hljs\\"><code><span class=\\"hljs-keyword\\">const</span> esprima=<span class=\\"hljs-built_in\\">require</span>(<span class=\\"hljs-string\\">\'esprima\'</span>);\\n<span class=\\"hljs-keyword\\">const</span> estraverse =<span class=\\"hljs-built_in\\">require</span>(<span class=\\"hljs-string\\">\'estraverse\'</span>);\\n<span class=\\"hljs-keyword\\">const</span> astEsprima=esprima.parse(testFunc)\\n<span class=\\"hljs-keyword\\">let</span> res\\n  estraverse.traverse(astEsprima, {\\n    <span class=\\"hljs-comment\\">// estraverse递归进入的时候触发</span>\\n    <span class=\\"hljs-attr\\">enter</span>: <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span> (<span class=\\"hljs-params\\">node</span>) </span>{\\n      <span class=\\"hljs-comment\\">// 函数对应3种类型</span>\\n      <span class=\\"hljs-keyword\\">if</span>(node.type===<span class=\\"hljs-string\\">\\"FunctionDeclaration\\"</span> || \\n      node.type===<span class=\\"hljs-string\\">\\"ArrowFunctionExpression\\"</span> || \\n      node.type===<span class=\\"hljs-string\\">\\"FunctionExpression\\"</span>){\\n        <span class=\\"hljs-keyword\\">let</span> params=node.params\\n        params=params.map(<span class=\\"hljs-function\\"><span class=\\"hljs-params\\">o</span>=&gt;</span>{\\n          <span class=\\"hljs-comment\\">// 当参数是表达式时，需要递归解析，找到`Identifier`</span>\\n          <span class=\\"hljs-keyword\\">while</span>(o.type!==<span class=\\"hljs-string\\">\'Identifier\'</span>)o=o.left\\n          <span class=\\"hljs-keyword\\">return</span> o.name\\n        })\\n        res=params\\n        <span class=\\"hljs-comment\\">// 中断estraverse递归</span>\\n        <span class=\\"hljs-keyword\\">this</span>.break()\\n      }\\n    }\\n  });</code></pre></code></pre>\\n<hr>\\n<p>测试：</p>\\n<pre><code class=\\"language-js\\"><pre class=\\"hljs\\"><code><span class=\\"hljs-keyword\\">let</span> test=[\\n  <span class=\\"hljs-string\\">\'function d(a,b,c){}\'</span> <span class=\\"hljs-comment\\">// returns [\\"a\\",\\"b\\",\\"c\\"]</span>\\n  ,<span class=\\"hljs-string\\">\'function d(){}\'</span> <span class=\\"hljs-comment\\">// returns []</span>\\n  ,<span class=\\"hljs-string\\">\'function named(a, b, c) {}\'</span> <span class=\\"hljs-comment\\">// returns [\\"a\\",\\"b\\",\\"c\\"]</span>\\n  ,<span class=\\"hljs-string\\">\'function x(a /* = 1 */, b /* = true */) {}\'</span> <span class=\\"hljs-comment\\">// returns [\\"a\\",\\"b\\"]</span>\\n  ,<span class=\\"hljs-string\\">\'function fprintf(handle, fmt /*, {}*/) {}\'</span> <span class=\\"hljs-comment\\">// returns [\\"handle\\",\\"fmt\\"]</span>\\n  ,<span class=\\"hljs-string\\">\'function x( a, b = 1, c ){}\'</span> <span class=\\"hljs-comment\\">// returns [\\"a\\",\\"b\\",\\"c\\"]</span>\\n  ,<span class=\\"hljs-string\\">\'function x(a=4*(5/3), b) {}\'</span> <span class=\\"hljs-comment\\">// returns [\\"a\\",\\"b\\"]</span>\\n  ,<span class=\\"hljs-string\\">\'function x(a /* function() yes */, \\\\n /* no, */b)/* omg! */{}\'</span> <span class=\\"hljs-comment\\">// returns [\\"a\\",\\"b\\"]</span>\\n  ,<span class=\\"hljs-string\\">\'function x( A, b \\\\n,c ,d \\\\n ) \\\\n {}\'</span> <span class=\\"hljs-comment\\">// returns [\\"A\\",\\"b\\",\\"c\\",\\"d\\"]</span>\\n  ,<span class=\\"hljs-string\\">\'function x(a,b){}\'</span> <span class=\\"hljs-comment\\">// returns [\\"a\\",\\"b\\"]</span>\\n  ,<span class=\\"hljs-string\\">\'function $args(func) {}\'</span> <span class=\\"hljs-comment\\">// returns [\\"func\\"]</span>\\n  ,<span class=\\"hljs-string\\">\'function Object() {}\'</span> <span class=\\"hljs-comment\\">// returns []</span>\\n  ,<span class=\\"hljs-string\\">\'e=&gt;{}\'</span>  <span class=\\"hljs-comment\\">// [\\"e\\"]</span>\\n  ,<span class=\\"hljs-string\\">\'(a,b)=&gt;{}\'</span>  <span class=\\"hljs-comment\\">// [\\"a\\",\\"b\\"]</span>\\n  ,<span class=\\"hljs-string\\">\'(e)=&gt;1\'</span> <span class=\\"hljs-comment\\">// [\\"e\\"]</span>\\n  ,<span class=\\"hljs-string\\">\'(a=65,b=undefined)=&gt;\\"string\\"\'</span> <span class=\\"hljs-comment\\">// [\\"a\\",\\"b\\"]</span>\\n  ,<span class=\\"hljs-string\\">\'ddd=e=&gt;{}\'</span>  <span class=\\"hljs-comment\\">// [\\"e\\"]</span>\\n  ,<span class=\\"hljs-string\\">\'let xx=(e,b)=&gt;{}\'</span> <span class=\\"hljs-comment\\">// [\\"e\\",\\"b\\"]</span>\\n  ,<span class=\\"hljs-string\\">\'xx=function(bb){}\'</span>  <span class=\\"hljs-comment\\">// [\\"bb\\"]</span>\\n  ,<span class=\\"hljs-string\\">\'let x=function(aa,cc){}\'</span>  <span class=\\"hljs-comment\\">// [\\"aa\\",\\"cc\\"]</span>\\n  ,<span class=\\"hljs-string\\">`let x=(controller) =&gt;{  \\n    }`</span>                      <span class=\\"hljs-comment\\">// [\\"controller\\"] </span>\\n]</code></pre></code></pre>\\n","toc":[],"relatedTags":null,"created_at":"2018-09-13","timeArr":[2018,8,13,0,0,0,0],"title":"获取函数参数名称","uuid":"be95143b4d5b92aa8901844dde5e73230a1d2f49","summary":"<p>今天碰到一个需求，获取函数参数名称，\\n刚开始打算用正则去处理，但函数写法(包括es6)也挺多的，</p>\\n<p>例如：</p>\\n<pre class=\\"hljs\\"><code>function x(a,b){}\\nfunction x(a=5,b=3){}\\nlet x=function(a=5,b){}\\nlet x=(a=5,b)=&gt;a+b\\nlet x=a=&gt;a*2\\nfuncti...</code></pre>","slug":"huo-qu-han-shu-can-shu-ming-cheng","sha":"666081661a6e70d949e3a7754293a33f83e18432"}')}}]);