(window.webpackJsonp=window.webpackJsonp||[]).push([[438],{1236:function(n){n.exports=JSON.parse('{"code":["<pre class=\\"hljs\\"><code><span class=\\"hljs-comment\\">/**\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{number[]}</span> <span class=\\"hljs-variable\\">target</span></span>\\n * <span class=\\"hljs-doctag\\">@return <span class=\\"hljs-type\\">{boolean}</span></span>\\n */</span>\\n<span class=\\"hljs-keyword\\">var</span> isPossible = <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span>(<span class=\\"hljs-params\\">target</span>) </span>{\\n  \\n  <span class=\\"hljs-keyword\\">let</span> sum=target.reduce(<span class=\\"hljs-function\\">(<span class=\\"hljs-params\\">a,b</span>)=&gt;</span>a+b)\\n  <span class=\\"hljs-keyword\\">return</span> resolve(target,sum)\\n  <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span> <span class=\\"hljs-title\\">resolve</span>(<span class=\\"hljs-params\\">target,sum</span>)</span>{\\n    <span class=\\"hljs-keyword\\">let</span> allOne=<span class=\\"hljs-literal\\">true</span>\\n    <span class=\\"hljs-keyword\\">let</span> max=<span class=\\"hljs-number\\">-1</span>,maxId=<span class=\\"hljs-literal\\">null</span>\\n    <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> i=<span class=\\"hljs-number\\">0</span>;i&lt;target.length;i++){\\n      <span class=\\"hljs-keyword\\">if</span>(target[i]&lt;<span class=\\"hljs-number\\">1</span>)<span class=\\"hljs-keyword\\">return</span> <span class=\\"hljs-literal\\">false</span>\\n      <span class=\\"hljs-keyword\\">if</span>(target[i]&gt;<span class=\\"hljs-number\\">1</span>)allOne=<span class=\\"hljs-literal\\">false</span>\\n      <span class=\\"hljs-keyword\\">if</span>(target[i]&gt;max){\\n        max=target[i]\\n        maxId=i\\n      }\\n    }\\n    <span class=\\"hljs-keyword\\">if</span>(allOne)<span class=\\"hljs-keyword\\">return</span> <span class=\\"hljs-literal\\">true</span>\\n    <span class=\\"hljs-keyword\\">let</span> restSum=sum-max\\n    target[maxId]=max-restSum\\n    <span class=\\"hljs-keyword\\">return</span> resolve(target,max)\\n  }\\n};\\n</code></pre>\\n"],"querySlug":"construct-target-array-with-multiple-sums","created_at":"2020-02-16","timeArr":[2020,1,16,11,32,18,0],"hasThinking":false,"content":"<p>给你一个整数数组&nbsp;<code>target</code> 。一开始，你有一个数组&nbsp;<code>A</code> ，它的所有元素均为 1 ，你可以执行以下操作：</p>\\n\\n<ul>\\n\\t<li>令&nbsp;<code>x</code>&nbsp;为你数组里所有元素的和</li>\\n\\t<li>选择满足&nbsp;<code>0 &lt;= i &lt; target.size</code>&nbsp;的任意下标&nbsp;<code>i</code>&nbsp;，并让&nbsp;<code>A</code>&nbsp;数组里下标为&nbsp;<code>i</code>&nbsp;处的值为&nbsp;<code>x</code>&nbsp;。</li>\\n\\t<li>你可以重复该过程任意次</li>\\n</ul>\\n\\n<p>如果能从&nbsp;<code>A</code>&nbsp;开始构造出目标数组&nbsp;<code>target</code>&nbsp;，请你返回 True ，否则返回 False 。</p>\\n\\n<p>&nbsp;</p>\\n\\n<p><strong>示例 1：</strong></p>\\n\\n<pre><strong>输入：</strong>target = [9,3,5]\\n<strong>输出：</strong>true\\n<strong>解释：</strong>从 [1, 1, 1] 开始\\n[1, 1, 1], 和为 3 ，选择下标 1\\n[1, 3, 1], 和为 5， 选择下标 2\\n[1, 3, 5], 和为 9， 选择下标 0\\n[9, 3, 5] 完成\\n</pre>\\n\\n<p><strong>示例 2：</strong></p>\\n\\n<pre><strong>输入：</strong>target = [1,1,1,2]\\n<strong>输出：</strong>false\\n<strong>解释：</strong>不可能从 [1,1,1,1] 出发构造目标数组。\\n</pre>\\n\\n<p><strong>示例 3：</strong></p>\\n\\n<pre><strong>输入：</strong>target = [8,5]\\n<strong>输出：</strong>true\\n</pre>\\n\\n<p>&nbsp;</p>\\n\\n<p><strong>提示：</strong></p>\\n\\n<ul>\\n\\t<li><code>N == target.length</code></li>\\n\\t<li><code>1 &lt;= target.length&nbsp;&lt;= 5 * 10^4</code></li>\\n\\t<li><code>1 &lt;= target[i] &lt;= 10^9</code></li>\\n</ul>\\n","title":"1354. 多次求和构造目标数组","relatedTags":["数组","堆（优先队列）"],"difficult":"Hard","lang":["javascript"],"uniqueID":"1354","slug":"1354-Construct-Target-Array-With-Multiple-Sums"}')}}]);