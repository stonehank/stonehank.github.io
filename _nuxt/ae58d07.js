(window.webpackJsonp=window.webpackJsonp||[]).push([[554],{1352:function(n){n.exports=JSON.parse('{"code":["<pre class=\\"hljs\\"><code><span class=\\"hljs-comment\\">/**\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{number}</span> <span class=\\"hljs-variable\\">n</span></span>\\n * <span class=\\"hljs-doctag\\">@return <span class=\\"hljs-type\\">{number}</span></span>\\n */</span>\\n<span class=\\"hljs-keyword\\">var</span> minOperations = <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span>(<span class=\\"hljs-params\\">n</span>) </span>{\\n    <span class=\\"hljs-keyword\\">let</span> min=<span class=\\"hljs-number\\">1</span>\\n    <span class=\\"hljs-keyword\\">let</span> max=<span class=\\"hljs-number\\">2</span>*(n<span class=\\"hljs-number\\">-1</span>)+<span class=\\"hljs-number\\">1</span>\\n    <span class=\\"hljs-keyword\\">let</span> mid=(min+max)/<span class=\\"hljs-number\\">2</span>\\n    <span class=\\"hljs-keyword\\">let</span> res=<span class=\\"hljs-number\\">0</span>\\n    <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> i=<span class=\\"hljs-number\\">0</span>;i&lt;n;i++){\\n        <span class=\\"hljs-keyword\\">if</span>(<span class=\\"hljs-number\\">2</span>*i+<span class=\\"hljs-number\\">1</span>&lt;mid){\\n            res+=mid-(<span class=\\"hljs-number\\">2</span>*i+<span class=\\"hljs-number\\">1</span>)\\n        }\\n    }\\n    <span class=\\"hljs-keyword\\">return</span> res\\n};\\n</code></pre>\\n"],"querySlug":"minimum-operations-to-make-array-equal","created_at":"2020-08-16","timeArr":[2020,7,16,18,42,42,0],"hasThinking":false,"content":"<p>存在一个长度为 <code>n</code> 的数组 <code>arr</code> ，其中 <code>arr[i] = (2 * i) + 1</code> （ <code>0 &lt;= i &lt; n</code> ）。</p>\\n\\n<p>一次操作中，你可以选出两个下标，记作 <code>x</code> 和 <code>y</code> （ <code>0 &lt;= x, y &lt; n</code> ）并使 <code>arr[x]</code> 减去 <code>1</code> 、<code>arr[y]</code> 加上 <code>1</code> （即 <code>arr[x] -=1 </code>且 <code>arr[y] += 1</code> ）。最终的目标是使数组中的所有元素都 <strong>相等</strong> 。题目测试用例将会 <strong>保证</strong> ：在执行若干步操作后，数组中的所有元素最终可以全部相等。</p>\\n\\n<p>给你一个整数 <code>n</code>，即数组的长度。请你返回使数组 <code>arr</code> 中所有元素相等所需的 <strong>最小操作数</strong> 。</p>\\n\\n<p>&nbsp;</p>\\n\\n<p><strong>示例 1：</strong></p>\\n\\n<pre><strong>输入：</strong>n = 3\\n<strong>输出：</strong>2\\n<strong>解释：</strong>arr = [1, 3, 5]\\n第一次操作选出 x = 2 和 y = 0，使数组变为 [2, 3, 4]\\n第二次操作继续选出 x = 2 和 y = 0，数组将会变成 [3, 3, 3]\\n</pre>\\n\\n<p><strong>示例 2：</strong></p>\\n\\n<pre><strong>输入：</strong>n = 6\\n<strong>输出：</strong>9\\n</pre>\\n\\n<p>&nbsp;</p>\\n\\n<p><strong>提示：</strong></p>\\n\\n<ul>\\n\\t<li><code>1 &lt;= n &lt;= 10^4</code></li>\\n</ul>\\n","title":"1551. 使数组中所有元素相等的最小操作数","relatedTags":["数学"],"difficult":"Middle","lang":["javascript"],"uniqueID":"1551","slug":"1551-Minimum-Operations-to-Make-Array-Equal"}')}}]);