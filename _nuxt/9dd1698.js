(window.webpackJsonp=window.webpackJsonp||[]).push([[494],{1292:function(n){n.exports=JSON.parse('{"code":["<pre class=\\"hljs\\"><code><span class=\\"hljs-comment\\">/**\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{number[]}</span> <span class=\\"hljs-variable\\">target</span></span>\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{number}</span> <span class=\\"hljs-variable\\">n</span></span>\\n * <span class=\\"hljs-doctag\\">@return <span class=\\"hljs-type\\">{string[]}</span></span>\\n */</span>\\n<span class=\\"hljs-keyword\\">var</span> buildArray = <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span>(<span class=\\"hljs-params\\">target, n</span>) </span>{\\n  <span class=\\"hljs-keyword\\">let</span> res=[]\\n  <span class=\\"hljs-keyword\\">let</span> x=<span class=\\"hljs-number\\">1</span>\\n  <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> i=<span class=\\"hljs-number\\">0</span>;i&lt;target.length;i++){\\n    <span class=\\"hljs-keyword\\">if</span>(target[i]!==x){\\n      res.push(<span class=\\"hljs-string\\">\'Push\'</span>,<span class=\\"hljs-string\\">\'Pop\'</span>)\\n      i--\\n    }<span class=\\"hljs-keyword\\">else</span>{\\n      res.push(<span class=\\"hljs-string\\">\'Push\'</span>)\\n    }\\n    x++\\n  }\\n  <span class=\\"hljs-keyword\\">return</span> res\\n};\\n</code></pre>\\n"],"querySlug":"build-an-array-with-stack-operations","created_at":"2020-05-10","timeArr":[2020,4,10,10,34,51,0],"hasThinking":false,"content":"<p>给你一个目标数组 <code>target</code> 和一个整数 <code>n</code>。每次迭代，需要从  <code>list = {1,2,3..., n}</code> 中依序读取一个数字。</p>\\n\\n<p>请使用下述操作来构建目标数组 <code>target</code> ：</p>\\n\\n<ul>\\n\\t<li><strong>Push</strong>：从 <code>list</code> 中读取一个新元素， 并将其推入数组中。</li>\\n\\t<li><strong>Pop</strong>：删除数组中的最后一个元素。</li>\\n\\t<li>如果目标数组构建完成，就停止读取更多元素。</li>\\n</ul>\\n\\n<p>题目数据保证目标数组严格递增，并且只包含 <code>1</code> 到 <code>n</code> 之间的数字。</p>\\n\\n<p>请返回构建目标数组所用的操作序列。</p>\\n\\n<p>题目数据保证答案是唯一的。</p>\\n\\n<p> </p>\\n\\n<p><strong>示例 1：</strong></p>\\n\\n<pre>\\n<strong>输入：</strong>target = [1,3], n = 3\\n<strong>输出：</strong>[\\"Push\\",\\"Push\\",\\"Pop\\",\\"Push\\"]\\n<strong>解释： \\n</strong>读取 1 并自动推入数组 -> [1]\\n读取 2 并自动推入数组，然后删除它 -> [1]\\n读取 3 并自动推入数组 -> [1,3]\\n</pre>\\n\\n<p><strong>示例 2：</strong></p>\\n\\n<pre>\\n<strong>输入：</strong>target = [1,2,3], n = 3\\n<strong>输出：</strong>[\\"Push\\",\\"Push\\",\\"Push\\"]\\n</pre>\\n\\n<p><strong>示例 3：</strong></p>\\n\\n<pre>\\n<strong>输入：</strong>target = [1,2], n = 4\\n<strong>输出：</strong>[\\"Push\\",\\"Push\\"]\\n<strong>解释：</strong>只需要读取前 2 个数字就可以停止。\\n</pre>\\n\\n<p><strong>示例 4：</strong></p>\\n\\n<pre>\\n<strong>输入：</strong>target = [2,3,4], n = 4\\n<strong>输出：</strong>[\\"Push\\",\\"Pop\\",\\"Push\\",\\"Push\\",\\"Push\\"]\\n</pre>\\n\\n<p> </p>\\n\\n<p><strong>提示：</strong></p>\\n\\n<ul>\\n\\t<li><code>1 <= target.length <= 100</code></li>\\n\\t<li><code>1 <= target[i] <= 100</code></li>\\n\\t<li><code>1 <= n <= 100</code></li>\\n\\t<li><code>target</code> 是严格递增的</li>\\n</ul>\\n","title":"1441. 用栈操作构建数组","relatedTags":["栈","数组","模拟"],"difficult":"Easy","lang":["javascript"],"uniqueID":"1441","slug":"1441-Build-an-Array-With-Stack-Operations"}')}}]);