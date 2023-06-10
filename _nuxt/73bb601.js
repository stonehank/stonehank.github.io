(window.webpackJsonp=window.webpackJsonp||[]).push([[539],{1337:function(n){n.exports=JSON.parse('{"code":["<pre class=\\"hljs\\"><code><span class=\\"hljs-comment\\">/**\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{number[]}</span> <span class=\\"hljs-variable\\">arr</span></span>\\n * <span class=\\"hljs-doctag\\">@return <span class=\\"hljs-type\\">{number}</span></span>\\n */</span>\\n<span class=\\"hljs-keyword\\">var</span> numOfSubarrays = <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span>(<span class=\\"hljs-params\\">arr</span>) </span>{\\n    <span class=\\"hljs-keyword\\">let</span> count=<span class=\\"hljs-number\\">0</span>\\n    <span class=\\"hljs-keyword\\">let</span> sum=<span class=\\"hljs-number\\">0</span>\\n    <span class=\\"hljs-keyword\\">let</span> MOD=<span class=\\"hljs-number\\">1e9</span>+<span class=\\"hljs-number\\">7</span>\\n    <span class=\\"hljs-keyword\\">let</span> odd=<span class=\\"hljs-number\\">0</span>, even=<span class=\\"hljs-number\\">0</span>\\n    <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> i=<span class=\\"hljs-number\\">0</span>;i&lt;arr.length;i++){\\n        sum+=arr[i]\\n        <span class=\\"hljs-keyword\\">if</span>(sum % <span class=\\"hljs-number\\">2</span> === <span class=\\"hljs-number\\">1</span>){\\n            odd++\\n        }<span class=\\"hljs-keyword\\">else</span>{\\n            even++\\n        }\\n    }\\n    <span class=\\"hljs-keyword\\">let</span> res=odd\\n    <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> i=<span class=\\"hljs-number\\">1</span>;i&lt;arr.length;i++){\\n        <span class=\\"hljs-keyword\\">if</span>(arr[i<span class=\\"hljs-number\\">-1</span>]%<span class=\\"hljs-number\\">2</span>===<span class=\\"hljs-number\\">1</span>){\\n            odd--\\n            res=(res+<span class=\\"hljs-built_in\\">Math</span>.max(even,<span class=\\"hljs-number\\">0</span>)) % MOD\\n            <span class=\\"hljs-keyword\\">let</span> x=even\\n            even=odd\\n            odd=x\\n        }<span class=\\"hljs-keyword\\">else</span>{\\n            even--\\n            res=(res+<span class=\\"hljs-built_in\\">Math</span>.max(odd,<span class=\\"hljs-number\\">0</span>)) % MOD\\n        }\\n    }\\n    <span class=\\"hljs-keyword\\">return</span> res\\n};\\n</code></pre>\\n"],"querySlug":"number-of-sub-arrays-with-odd-sum","created_at":"2020-08-08","timeArr":[2020,7,8,17,27,55,0],"hasThinking":false,"content":"<p>给你一个整数数组&nbsp;<code>arr</code>&nbsp;。请你返回和为 <strong>奇数</strong>&nbsp;的子数组数目。</p>\\n\\n<p>由于答案可能会很大，请你将结果对&nbsp;<code>10^9 + 7</code>&nbsp;取余后返回。</p>\\n\\n<p>&nbsp;</p>\\n\\n<p><strong>示例 1：</strong></p>\\n\\n<pre><strong>输入：</strong>arr = [1,3,5]\\n<strong>输出：</strong>4\\n<strong>解释：</strong>所有的子数组为 [[1],[1,3],[1,3,5],[3],[3,5],[5]] 。\\n所有子数组的和为 [1,4,9,3,8,5].\\n奇数和包括 [1,9,3,5] ，所以答案为 4 。\\n</pre>\\n\\n<p><strong>示例 2 ：</strong></p>\\n\\n<pre><strong>输入：</strong>arr = [2,4,6]\\n<strong>输出：</strong>0\\n<strong>解释：</strong>所有子数组为 [[2],[2,4],[2,4,6],[4],[4,6],[6]] 。\\n所有子数组和为 [2,6,12,4,10,6] 。\\n所有子数组和都是偶数，所以答案为 0 。\\n</pre>\\n\\n<p><strong>示例 3：</strong></p>\\n\\n<pre><strong>输入：</strong>arr = [1,2,3,4,5,6,7]\\n<strong>输出：</strong>16\\n</pre>\\n\\n<p><strong>示例 4：</strong></p>\\n\\n<pre><strong>输入：</strong>arr = [100,100,99,99]\\n<strong>输出：</strong>4\\n</pre>\\n\\n<p><strong>示例 5：</strong></p>\\n\\n<pre><strong>输入：</strong>arr = [7]\\n<strong>输出：</strong>1\\n</pre>\\n\\n<p>&nbsp;</p>\\n\\n<p><strong>提示：</strong></p>\\n\\n<ul>\\n\\t<li><code>1 &lt;= arr.length &lt;= 10^5</code></li>\\n\\t<li><code>1 &lt;= arr[i] &lt;= 100</code></li>\\n</ul>\\n","title":"1524. 和为奇数的子数组数目","relatedTags":["数组","数学","动态规划","前缀和"],"difficult":"Middle","lang":["javascript"],"uniqueID":"1524","slug":"1524-Number-of-Sub-arrays-With-Odd-Sum"}')}}]);