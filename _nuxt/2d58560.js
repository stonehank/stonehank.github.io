(window.webpackJsonp=window.webpackJsonp||[]).push([[591],{1389:function(n){n.exports=JSON.parse('{"code":["<pre class=\\"hljs\\"><code><span class=\\"hljs-comment\\">/**\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{string}</span> <span class=\\"hljs-variable\\">s</span></span>\\n * <span class=\\"hljs-doctag\\">@return <span class=\\"hljs-type\\">{number}</span></span>\\n */</span>\\n<span class=\\"hljs-keyword\\">var</span> minimumDeletions = <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span>(<span class=\\"hljs-params\\">s</span>) </span>{\\n    <span class=\\"hljs-keyword\\">let</span> ac=<span class=\\"hljs-number\\">0</span>,bc=<span class=\\"hljs-number\\">0</span>\\n    <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> str <span class=\\"hljs-keyword\\">of</span> s){\\n        <span class=\\"hljs-keyword\\">if</span>(str===<span class=\\"hljs-string\\">\'a\'</span>)ac++\\n    }\\n    <span class=\\"hljs-keyword\\">let</span> result=ac\\n    <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> str <span class=\\"hljs-keyword\\">of</span> s){\\n        <span class=\\"hljs-keyword\\">if</span>(str===<span class=\\"hljs-string\\">\'a\'</span>)ac--\\n        <span class=\\"hljs-keyword\\">else</span> bc++\\n        result=<span class=\\"hljs-built_in\\">Math</span>.min(result,ac+bc)\\n    }\\n    <span class=\\"hljs-keyword\\">return</span> result\\n};\\n</code></pre>\\n"],"querySlug":"minimum-deletions-to-make-string-balanced","created_at":"2020-11-28","timeArr":[2020,10,28,12,55,5,0],"hasThinking":false,"content":"<p>给你一个字符串 <code>s</code> ，它仅包含字符 <code>\'a\'</code> 和 <code>\'b\'</code>​​​​ 。</p>\\n\\n<p>你可以删除 <code>s</code> 中任意数目的字符，使得 <code>s</code> <strong>平衡</strong> 。我们称 <code>s</code> <strong>平衡的</strong> 当不存在下标对 <code>(i,j)</code> 满足 <code>i < j</code> 且 <code>s[i] = \'b\'</code> 同时 <code>s[j]= \'a\'</code> 。</p>\\n\\n<p>请你返回使 <code>s</code> <strong>平衡</strong> 的 <strong>最少</strong> 删除次数。</p>\\n\\n<p> </p>\\n\\n<p><strong>示例 1：</strong></p>\\n\\n<pre>\\n<b>输入：</b>s = \\"aababbab\\"\\n<b>输出：</b>2\\n<b>解释：</b>你可以选择以下任意一种方案：\\n下标从 0 开始，删除第 2 和第 6 个字符（\\"aa<strong>b</strong>abb<strong>a</strong>b\\" -> \\"aaabbb\\"），\\n下标从 0 开始，删除第 3 和第 6 个字符（\\"aab<strong>a</strong>bb<strong>a</strong>b\\" -> \\"aabbbb\\"）。\\n</pre>\\n\\n<p><strong>示例 2：</strong></p>\\n\\n<pre>\\n<b>输入：</b>s = \\"bbaaaaabb\\"\\n<b>输出：</b>2\\n<b>解释：</b>唯一的最优解是删除最前面两个字符。\\n</pre>\\n\\n<p> </p>\\n\\n<p><strong>提示：</strong></p>\\n\\n<ul>\\n\\t<li><code>1 <= s.length <= 10<sup>5</sup></code></li>\\n\\t<li><code>s[i]</code> 要么是 <code>\'a\'</code> 要么是 <code>\'b\'</code>​<strong> </strong>。​</li>\\n</ul>\\n","title":"1653. 使字符串平衡的最少删除次数","relatedTags":["栈","字符串","动态规划"],"difficult":"Middle","lang":["javascript"],"uniqueID":"1653","slug":"1653-Minimum-Deletions-to-Make-String-Balanced"}')}}]);