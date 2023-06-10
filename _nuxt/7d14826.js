(window.webpackJsonp=window.webpackJsonp||[]).push([[490],{1288:function(n){n.exports=JSON.parse('{"code":["<pre class=\\"hljs\\"><code><span class=\\"hljs-comment\\">/**\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{number[][]}</span> <span class=\\"hljs-variable\\">nums</span></span>\\n * <span class=\\"hljs-doctag\\">@return <span class=\\"hljs-type\\">{number[]}</span></span>\\n */</span>\\n<span class=\\"hljs-keyword\\">var</span> findDiagonalOrder = <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span>(<span class=\\"hljs-params\\">nums</span>) </span>{\\n  <span class=\\"hljs-keyword\\">let</span> m=nums.length\\n  <span class=\\"hljs-keyword\\">let</span> n=<span class=\\"hljs-number\\">0</span>\\n  <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> i=<span class=\\"hljs-number\\">0</span>;i&lt;m;i++){\\n    n=<span class=\\"hljs-built_in\\">Math</span>.max(n,nums[i].length)\\n  }\\n  <span class=\\"hljs-keyword\\">let</span> res=<span class=\\"hljs-built_in\\">Array</span>(m+n).fill().map(<span class=\\"hljs-function\\"><span class=\\"hljs-params\\">()</span>=&gt;</span>[])\\n  <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> i=<span class=\\"hljs-number\\">0</span>;i&lt;m;i++){\\n    <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> j=<span class=\\"hljs-number\\">0</span>;j&lt;nums[i].length;j++){\\n      res[i+j].push(nums[i][j])\\n    }\\n  }\\n  res=res.map(<span class=\\"hljs-function\\"><span class=\\"hljs-params\\">arr</span>=&gt;</span>arr.reverse())\\n  <span class=\\"hljs-keyword\\">let</span> ans=[]\\n  <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> arr <span class=\\"hljs-keyword\\">of</span> res){\\n    ans.push(...arr)\\n  }\\n  <span class=\\"hljs-keyword\\">return</span> ans\\n};\\n</code></pre>\\n"],"querySlug":"diagonal-traverse-ii","created_at":"2020-04-26","timeArr":[2020,3,26,17,6,30,0],"hasThinking":false,"content":"<p>给你一个列表&nbsp;<code>nums</code>&nbsp;，里面每一个元素都是一个整数列表。请你依照下面各图的规则，按顺序返回&nbsp;<code>nums</code>&nbsp;中对角线上的整数。</p>\\n\\n<p>&nbsp;</p>\\n\\n<p><strong>示例 1：</strong></p>\\n\\n<p><strong><img alt=\\"\\" src=\\"https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2020/04/23/sample_1_1784.png\\" style=\\"height: 143px; width: 158px;\\"></strong></p>\\n\\n<pre><strong>输入：</strong>nums = [[1,2,3],[4,5,6],[7,8,9]]\\n<strong>输出：</strong>[1,4,2,7,5,3,8,6,9]\\n</pre>\\n\\n<p><strong>示例 2：</strong></p>\\n\\n<p><strong><img alt=\\"\\" src=\\"https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2020/04/23/sample_2_1784.png\\" style=\\"height: 177px; width: 230px;\\"></strong></p>\\n\\n<pre><strong>输入：</strong>nums = [[1,2,3,4,5],[6,7],[8],[9,10,11],[12,13,14,15,16]]\\n<strong>输出：</strong>[1,6,2,8,7,3,9,4,12,10,5,13,11,14,15,16]\\n</pre>\\n\\n<p><strong>示例 3：</strong></p>\\n\\n<pre><strong>输入：</strong>nums = [[1,2,3],[4],[5,6,7],[8],[9,10,11]]\\n<strong>输出：</strong>[1,4,2,5,3,8,6,9,7,10,11]\\n</pre>\\n\\n<p><strong>示例 4：</strong></p>\\n\\n<pre><strong>输入：</strong>nums = [[1,2,3,4,5,6]]\\n<strong>输出：</strong>[1,2,3,4,5,6]\\n</pre>\\n\\n<p>&nbsp;</p>\\n\\n<p><strong>提示：</strong></p>\\n\\n<ul>\\n\\t<li><code>1 &lt;= nums.length &lt;= 10^5</code></li>\\n\\t<li><code>1 &lt;= nums[i].length &lt;=&nbsp;10^5</code></li>\\n\\t<li><code>1 &lt;= nums[i][j] &lt;= 10^9</code></li>\\n\\t<li><code>nums</code>&nbsp;中最多有&nbsp;<code>10^5</code>&nbsp;个数字。</li>\\n</ul>\\n","title":"1424. 对角线遍历 II","relatedTags":["数组","排序","堆（优先队列）"],"difficult":"Middle","lang":["javascript"],"uniqueID":"1424","slug":"1424-Diagonal-Traverse-II"}')}}]);