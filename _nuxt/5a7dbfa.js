(window.webpackJsonp=window.webpackJsonp||[]).push([[1029],{1827:function(n){n.exports=JSON.parse('{"code":["<pre class=\\"hljs\\"><code><span class=\\"hljs-class\\"><span class=\\"hljs-keyword\\">class</span> <span class=\\"hljs-title\\">Solution</span><span class=\\"hljs-params\\">(object)</span>:</span>\\n    <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">def</span> <span class=\\"hljs-title\\">findKthNumber</span><span class=\\"hljs-params\\">(self, m, n, k)</span>:</span>\\n        <span class=\\"hljs-string\\">\\"\\"\\"\\n        :type m: int\\n        :type n: int\\n        :type k: int\\n        :rtype: int\\n        \\"\\"\\"</span>\\n        lo=<span class=\\"hljs-number\\">1</span>\\n        hi=n*m\\n        <span class=\\"hljs-keyword\\">while</span> lo&lt;hi:\\n          mid=(lo+hi)//<span class=\\"hljs-number\\">2</span>\\n          count=<span class=\\"hljs-number\\">0</span>\\n          <span class=\\"hljs-keyword\\">for</span> i <span class=\\"hljs-keyword\\">in</span> range(<span class=\\"hljs-number\\">1</span>,m+<span class=\\"hljs-number\\">1</span>):\\n            count+=min(mid// i,n)\\n          <span class=\\"hljs-keyword\\">if</span> count&lt;k:\\n            lo=mid+<span class=\\"hljs-number\\">1</span>\\n          <span class=\\"hljs-keyword\\">else</span>:\\n            hi=mid\\n        <span class=\\"hljs-keyword\\">return</span> lo\\n</code></pre>\\n"],"querySlug":"kth-smallest-number-in-multiplication-table","created_at":"2019-02-26","timeArr":[2019,1,26,13,28,42,0],"hasThinking":false,"content":"<p>几乎每一个人都用&nbsp;<a href=\\"https://baike.baidu.com/item/%E4%B9%98%E6%B3%95%E8%A1%A8\\">乘法表</a>。但是你能在乘法表中快速找到第<code>k</code>小的数字吗？</p>\\n\\n<p>给定高度<code>m</code>&nbsp;、宽度<code>n</code> 的一张&nbsp;<code>m * n</code>的乘法表，以及正整数<code>k</code>，你需要返回表中第<code>k</code>&nbsp;小的数字。</p>\\n\\n<p><strong>例&nbsp;1：</strong></p>\\n\\n<pre>\\n<strong>输入:</strong> m = 3, n = 3, k = 5\\n<strong>输出:</strong> 3\\n<strong>解释:</strong> \\n乘法表:\\n1\\t2\\t3\\n2\\t4\\t6\\n3\\t6\\t9\\n\\n第5小的数字是 3 (1, 2, 2, 3, 3).\\n</pre>\\n\\n<p><strong>例 2：</strong></p>\\n\\n<pre>\\n<strong>输入:</strong> m = 2, n = 3, k = 6\\n<strong>输出:</strong> 6\\n<strong>解释:</strong> \\n乘法表:\\n1\\t2\\t3\\n2\\t4\\t6\\n\\n第6小的数字是 6 (1, 2, 2, 3, 4, 6).\\n</pre>\\n\\n<p><strong>注意：</strong></p>\\n\\n<ol>\\n\\t<li><code>m</code> 和&nbsp;<code>n</code>&nbsp;的范围在 [1, 30000] 之间。</li>\\n\\t<li><code>k</code> 的范围在 [1, m * n] 之间。</li>\\n</ol>\\n","title":"668. 乘法表中第k小的数","relatedTags":["二分查找"],"difficult":"Hard","lang":["python"],"uniqueID":"668","slug":"668-Kth-Smallest-Number-in-Multiplication-Table"}')}}]);