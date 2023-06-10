(window.webpackJsonp=window.webpackJsonp||[]).push([[1385],{2183:function(n){n.exports=JSON.parse('{"code":["<pre class=\\"hljs\\"><code><span class=\\"hljs-comment\\">/**\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{string}</span> <span class=\\"hljs-variable\\">s</span></span>\\n * <span class=\\"hljs-doctag\\">@return <span class=\\"hljs-type\\">{number}</span></span>\\n */</span>\\n<span class=\\"hljs-keyword\\">var</span> calculate = <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span>(<span class=\\"hljs-params\\">str</span>) </span>{\\n    <span class=\\"hljs-keyword\\">let</span> x=<span class=\\"hljs-number\\">1</span>\\n    <span class=\\"hljs-keyword\\">let</span> y=<span class=\\"hljs-number\\">0</span>\\n    <span class=\\"hljs-keyword\\">let</span> sum=<span class=\\"hljs-number\\">0</span>\\n    <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> s <span class=\\"hljs-keyword\\">of</span> str){\\n        <span class=\\"hljs-keyword\\">if</span>(s===<span class=\\"hljs-string\\">\'A\'</span>){\\n            x=<span class=\\"hljs-number\\">2</span>*x+y\\n        }<span class=\\"hljs-keyword\\">else</span>{\\n            y=<span class=\\"hljs-number\\">2</span>*y+x\\n        }\\n    }\\n    <span class=\\"hljs-keyword\\">return</span> x+y\\n};\\n</code></pre>\\n"],"querySlug":"nGK0Fy","created_at":"2020-09-12","timeArr":[2020,8,12,15,3,28,0],"hasThinking":false,"content":"<p>小扣在秋日市集发现了一款速算机器人。店家对机器人说出两个数字（记作 <code>x</code> 和 <code>y</code>），请小扣说出计算指令：</p>\\n<ul>\\n<li><code>&quot;A&quot;</code> 运算：使 <code>x = 2 * x + y</code>；</li>\\n<li><code>&quot;B&quot;</code> 运算：使 <code>y = 2 * y + x</code>。</li>\\n</ul>\\n<p>在本次游戏中，店家说出的数字为 <code>x = 1</code> 和 <code>y = 0</code>，小扣说出的计算指令记作仅由大写字母 <code>A</code>、<code>B</code> 组成的字符串 <code>s</code>，字符串中字符的顺序表示计算顺序，请返回最终 <code>x</code> 与 <code>y</code> 的和为多少。</p>\\n<p><strong>示例 1：</strong></p>\\n<blockquote>\\n<p>输入：<code>s = &quot;AB&quot;</code></p>\\n<p>输出：<code>4</code></p>\\n<p>解释：\\n经过一次 A 运算后，x = 2, y = 0。\\n再经过一次 B 运算，x = 2, y = 2。\\n最终 x 与 y 之和为 4。</p>\\n</blockquote>\\n<p><strong>提示：</strong></p>\\n<ul>\\n<li><code>0 &lt;= s.length &lt;= 10</code></li>\\n<li><code>s</code> 由 <code>\'A\'</code> 和 <code>\'B\'</code> 组成</li>\\n</ul>\\n","title":"LCP 17. 速算机器人","relatedTags":["数学","字符串","模拟"],"difficult":"Easy","lang":["javascript"],"uniqueID":"LCP 17","slug":"LCP-17-su-suan-ji-qi-ren"}')}}]);