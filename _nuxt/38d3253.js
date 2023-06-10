(window.webpackJsonp=window.webpackJsonp||[]).push([[713],{1511:function(n){n.exports=JSON.parse('{"code":["<pre class=\\"hljs\\"><code><span class=\\"hljs-comment\\">/**\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{number[]}</span> <span class=\\"hljs-variable\\">citations</span></span>\\n * <span class=\\"hljs-doctag\\">@return <span class=\\"hljs-type\\">{number}</span></span>\\n */</span>\\n<span class=\\"hljs-keyword\\">var</span> hIndex = <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span>(<span class=\\"hljs-params\\">citations</span>) </span>{\\n  <span class=\\"hljs-keyword\\">let</span> len=citations.length\\n  <span class=\\"hljs-keyword\\">let</span> max=<span class=\\"hljs-number\\">0</span>\\n  <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> i=<span class=\\"hljs-number\\">0</span>;i&lt;len;i++){\\n    <span class=\\"hljs-keyword\\">let</span> c=citations[i]\\n    <span class=\\"hljs-keyword\\">let</span> t=len-i\\n    <span class=\\"hljs-keyword\\">if</span>(c&gt;=t){\\n      max=<span class=\\"hljs-built_in\\">Math</span>.max(max,t)\\n    }\\n  }\\n  <span class=\\"hljs-keyword\\">return</span> max\\n};\\n</code></pre>\\n"],"querySlug":"h-index-ii","created_at":"2018-12-31","timeArr":[2018,11,31,13,32,39,0],"hasThinking":false,"content":"<p>给你一个整数数组 <code>citations</code> ，其中 <code>citations[i]</code> 表示研究者的第 <code>i</code> 篇论文被引用的次数，<code>citations</code> 已经按照 <strong>升序排列 </strong>。计算并返回该研究者的 <strong><code>h</code><em> </em>指数</strong>。</p>\\n\\n<p><a href=\\"https://baike.baidu.com/item/h-index/3991452?fr=aladdin\\" target=\\"_blank\\">h 指数的定义</a>：h 代表“高引用次数”（high citations），一名科研人员的 h 指数是指他（她）的 （<code>n</code> 篇论文中）<strong>总共</strong>有 <code>h</code> 篇论文分别被引用了<strong>至少</strong> <code>h</code> 次。且其余的 <em><code>n - h</code> </em>篇论文每篇被引用次数 <strong>不超过 </strong><em><code>h</code> </em>次。</p>\\n\\n<p><strong>提示：</strong>如果 <code>h</code><em> </em>有多种可能的值，<strong><code>h</code> 指数 </strong>是其中最大的那个。</p>\\n\\n<p>请你设计并实现对数时间复杂度的算法解决此问题。</p>\\n\\n<p> </p>\\n\\n<p><strong>示例 1：</strong></p>\\n\\n<pre>\\n<strong>输入<code>：</code></strong><code>citations = [0,1,3,5,6]</code>\\n<strong>输出：</strong>3 \\n<strong>解释：</strong>给定数组表示研究者总共有 <code>5</code> 篇论文，每篇论文相应的被引用了 0<code>, 1, 3, 5, 6</code> 次。\\n     由于研究者有 <code>3 </code>篇论文每篇<strong> 至少 </strong>被引用了 <code>3</code> 次，其余两篇论文每篇被引用<strong> 不多于</strong> <code>3</code> 次，所以她的<em> h </em>指数是 <code>3</code> 。</pre>\\n\\n<p><strong>示例 2：</strong></p>\\n\\n<pre>\\n<strong>输入：</strong>citations = [1,2,100]\\n<strong>输出：</strong>2\\n</pre>\\n\\n<p> </p>\\n\\n<p><strong>提示：</strong></p>\\n\\n<ul>\\n\\t<li><code>n == citations.length</code></li>\\n\\t<li><code>1 <= n <= 10<sup>5</sup></code></li>\\n\\t<li><code>0 <= citations[i] <= 1000</code></li>\\n\\t<li><code>citations</code> 按 <strong>升序排列</strong></li>\\n</ul>\\n","title":"275. H 指数 II","relatedTags":["数组","二分查找"],"difficult":"Middle","lang":["javascript"],"uniqueID":"275","slug":"275-H-Index-II"}')}}]);