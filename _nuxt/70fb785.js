(window.webpackJsonp=window.webpackJsonp||[]).push([[691],{1489:function(n){n.exports=JSON.parse('{"code":["<pre class=\\"hljs\\"><code><span class=\\"hljs-comment\\">/**\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{number}</span> <span class=\\"hljs-variable\\">n</span></span>\\n * <span class=\\"hljs-doctag\\">@return <span class=\\"hljs-type\\">{number}</span></span>\\n */</span>\\n<span class=\\"hljs-keyword\\">var</span> countDigitOne = <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span>(<span class=\\"hljs-params\\">n</span>) </span>{\\n  <span class=\\"hljs-keyword\\">if</span>(n&lt;<span class=\\"hljs-number\\">1</span>)<span class=\\"hljs-keyword\\">return</span> <span class=\\"hljs-number\\">0</span>\\n  <span class=\\"hljs-keyword\\">if</span>(n&lt;=<span class=\\"hljs-number\\">9</span>)<span class=\\"hljs-keyword\\">return</span> <span class=\\"hljs-number\\">1</span>\\n  <span class=\\"hljs-keyword\\">let</span> carry=<span class=\\"hljs-number\\">0</span>\\n  <span class=\\"hljs-keyword\\">let</span> m=n\\n  <span class=\\"hljs-keyword\\">while</span>(m&gt;<span class=\\"hljs-number\\">0</span>){\\n    m=<span class=\\"hljs-built_in\\">Math</span>.floor(m/<span class=\\"hljs-number\\">10</span>)\\n    carry++\\n  }\\n\\n  <span class=\\"hljs-comment\\">// 100,1000...</span>\\n  <span class=\\"hljs-keyword\\">let</span> finegrit=<span class=\\"hljs-built_in\\">Math</span>.pow(<span class=\\"hljs-number\\">10</span>,carry<span class=\\"hljs-number\\">-1</span>)\\n  <span class=\\"hljs-comment\\">// n=576 finegrit=&gt;100,m=&gt;5,rest=&gt;76 (n&gt;=199)</span>\\n  <span class=\\"hljs-comment\\">// n=13  finegrit=&gt;10, m=&gt;1,rest=&gt;3  (n &lt; 19)</span>\\n  m=<span class=\\"hljs-built_in\\">Math</span>.floor(n/finegrit)\\n  <span class=\\"hljs-keyword\\">let</span> rest=n -(m*finegrit)\\n  \\n  <span class=\\"hljs-keyword\\">let</span> extra\\n  <span class=\\"hljs-keyword\\">if</span>(n&gt;=finegrit*<span class=\\"hljs-number\\">2</span><span class=\\"hljs-number\\">-1</span>)extra=finegrit\\n  <span class=\\"hljs-keyword\\">else</span> extra=rest+<span class=\\"hljs-number\\">1</span>\\n  \\n  <span class=\\"hljs-keyword\\">return</span> extra+countDigitOne(finegrit<span class=\\"hljs-number\\">-1</span>)*m+countDigitOne(rest)\\n};\\n</code></pre>\\n"],"querySlug":"number-of-digit-one","created_at":"2019-03-30","timeArr":[2019,2,30,22,31,13,0],"hasThinking":false,"content":"<p>给定一个整数 <code>n</code>，计算所有小于等于 <code>n</code> 的非负整数中数字 <code>1</code> 出现的个数。</p>\\n\\n<p>&nbsp;</p>\\n\\n<p><strong>示例 1：</strong></p>\\n\\n<pre>\\n<strong>输入：</strong>n = 13\\n<strong>输出：</strong>6\\n</pre>\\n\\n<p><strong>示例 2：</strong></p>\\n\\n<pre>\\n<strong>输入：</strong>n = 0\\n<strong>输出：</strong>0\\n</pre>\\n\\n<p>&nbsp;</p>\\n\\n<p><strong>提示：</strong></p>\\n\\n<ul>\\n\\t<li><code>0 &lt;= n &lt;= 10<sup>9</sup></code></li>\\n</ul>\\n","title":"233. 数字 1 的个数","relatedTags":["递归","数学","动态规划"],"difficult":"Hard","lang":["javascript"],"uniqueID":"233","slug":"233-Number-of-Digit-One"}')}}]);