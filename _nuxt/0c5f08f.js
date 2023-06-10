(window.webpackJsonp=window.webpackJsonp||[]).push([[1390],{2188:function(n){n.exports=JSON.parse('{"code":["<pre class=\\"hljs\\"><code><span class=\\"hljs-comment\\">/**\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{number}</span> <span class=\\"hljs-variable\\">target</span></span>\\n * <span class=\\"hljs-doctag\\">@return <span class=\\"hljs-type\\">{number[][]}</span></span>\\n */</span>\\n<span class=\\"hljs-keyword\\">var</span> findContinuousSequence = <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span>(<span class=\\"hljs-params\\">target</span>) </span>{\\n  <span class=\\"hljs-keyword\\">let</span> res=[]\\n  <span class=\\"hljs-keyword\\">let</span> i=<span class=\\"hljs-number\\">1</span>,j=<span class=\\"hljs-number\\">2</span>,sum=<span class=\\"hljs-number\\">3</span>\\n  <span class=\\"hljs-keyword\\">while</span>(j&lt;target){\\n    <span class=\\"hljs-keyword\\">if</span>(sum&lt;=target){\\n      <span class=\\"hljs-keyword\\">if</span>(sum===target){\\n        res.push(<span class=\\"hljs-built_in\\">Array</span>(j-i+<span class=\\"hljs-number\\">1</span>).fill().map(<span class=\\"hljs-function\\">(<span class=\\"hljs-params\\">n,idx</span>)=&gt;</span>idx+i))\\n      }\\n      j++\\n      sum+=j\\n    }<span class=\\"hljs-keyword\\">else</span>{\\n      sum-=i\\n      i++\\n      <span class=\\"hljs-keyword\\">if</span>(i===j)<span class=\\"hljs-keyword\\">return</span> res\\n    }\\n  }\\n  <span class=\\"hljs-keyword\\">return</span> res\\n};\\n</code></pre>\\n"],"querySlug":"he-wei-sde-lian-xu-zheng-shu-xu-lie-lcof","created_at":"2020-03-06","timeArr":[2020,2,6,22,33,34,0],"hasThinking":false,"content":"<p>输入一个正整数 <code>target</code> ，输出所有和为 <code>target</code> 的连续正整数序列（至少含有两个数）。</p>\\n\\n<p>序列内的数字由小到大排列，不同序列按照首个数字从小到大排列。</p>\\n\\n<p>&nbsp;</p>\\n\\n<p><strong>示例 1：</strong></p>\\n\\n<pre><strong>输入：</strong>target = 9\\n<strong>输出：</strong>[[2,3,4],[4,5]]\\n</pre>\\n\\n<p><strong>示例 2：</strong></p>\\n\\n<pre><strong>输入：</strong>target = 15\\n<strong>输出：</strong>[[1,2,3,4,5],[4,5,6],[7,8]]\\n</pre>\\n\\n<p>&nbsp;</p>\\n\\n<p><strong>限制：</strong></p>\\n\\n<ul>\\n\\t<li><code>1 &lt;= target &lt;= 10^5</code></li>\\n</ul>\\n\\n<p>&nbsp;</p>\\n","title":"剑指 Offer 57 - II. 和为s的连续正数序列","relatedTags":["数学","双指针","枚举"],"difficult":"Easy","lang":["javascript"],"uniqueID":"剑指 Offer 57 - II","slug":"jian-zhi-Offer-57-II-he-wei-s-de-lian-xu-zheng-shu-xu-lie-LCOF"}')}}]);