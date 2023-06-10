(window.webpackJsonp=window.webpackJsonp||[]).push([[580],{1378:function(n){n.exports=JSON.parse('{"code":["<pre class=\\"hljs\\"><code><span class=\\"hljs-comment\\">/**\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{number[]}</span> <span class=\\"hljs-variable\\">arr</span></span>\\n * <span class=\\"hljs-doctag\\">@return <span class=\\"hljs-type\\">{number}</span></span>\\n */</span>\\n<span class=\\"hljs-keyword\\">var</span> trimMean = <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span>(<span class=\\"hljs-params\\">arr</span>) </span>{\\n    arr.sort(<span class=\\"hljs-function\\">(<span class=\\"hljs-params\\">a,b</span>)=&gt;</span>a-b)\\n    <span class=\\"hljs-keyword\\">let</span> len=arr.length\\n    <span class=\\"hljs-keyword\\">let</span> count=len*<span class=\\"hljs-number\\">0.05</span>\\n    arr=arr.slice(count,len-count)\\n    <span class=\\"hljs-keyword\\">return</span> arr.reduce(<span class=\\"hljs-function\\">(<span class=\\"hljs-params\\">a,b</span>)=&gt;</span>a+b) / (len-count*<span class=\\"hljs-number\\">2</span>)\\n};\\n</code></pre>\\n"],"querySlug":"mean-of-array-after-removing-some-elements","created_at":"2021-03-08","timeArr":[2021,2,8,9,31,21,0],"hasThinking":false,"content":"<p>给你一个整数数组 <code>arr</code> ，请你删除最小 <code>5%</code> 的数字和最大 <code>5%</code> 的数字后，剩余数字的平均值。</p>\\n\\n<p>与 <strong>标准答案</strong> 误差在 <code>10<sup>-5</sup></code> 的结果都被视为正确结果。</p>\\n\\n<p> </p>\\n\\n<p><strong>示例 1：</strong></p>\\n\\n<pre>\\n<b>输入：</b>arr = [1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3]\\n<b>输出：</b>2.00000\\n<b>解释：</b>删除数组中最大和最小的元素后，所有元素都等于 2，所以平均值为 2 。\\n</pre>\\n\\n<p><strong>示例 2：</strong></p>\\n\\n<pre>\\n<b>输入：</b>arr = [6,2,7,5,1,2,0,3,10,2,5,0,5,5,0,8,7,6,8,0]\\n<b>输出：</b>4.00000\\n</pre>\\n\\n<p><strong>示例 3：</strong></p>\\n\\n<pre>\\n<b>输入：</b>arr = [6,0,7,0,7,5,7,8,3,4,0,7,8,1,6,8,1,1,2,4,8,1,9,5,4,3,8,5,10,8,6,6,1,0,6,10,8,2,3,4]\\n<b>输出：</b>4.77778\\n</pre>\\n\\n<p><strong>示例 4：</strong></p>\\n\\n<pre>\\n<b>输入：</b>arr = [9,7,8,7,7,8,4,4,6,8,8,7,6,8,8,9,2,6,0,0,1,10,8,6,3,3,5,1,10,9,0,7,10,0,10,4,1,10,6,9,3,6,0,0,2,7,0,6,7,2,9,7,7,3,0,1,6,1,10,3]\\n<b>输出：</b>5.27778\\n</pre>\\n\\n<p><strong>示例 5：</strong></p>\\n\\n<pre>\\n<b>输入：</b>arr = [4,8,4,10,0,7,1,3,7,8,8,3,4,1,6,2,1,1,8,0,9,8,0,3,9,10,3,10,1,10,7,3,2,1,4,9,10,7,6,4,0,8,5,1,2,1,6,2,5,0,7,10,9,10,3,7,10,5,8,5,7,6,7,6,10,9,5,10,5,5,7,2,10,7,7,8,2,0,1,1]\\n<b>输出：</b>5.29167\\n</pre>\\n\\n<p> </p>\\n\\n<p><strong>提示：</strong></p>\\n\\n<ul>\\n\\t<li><code>20 <= arr.length <= 1000</code></li>\\n\\t<li><code>arr.length</code><b> </b>是 <code>20</code> 的<strong> 倍数</strong> </li>\\n\\t<li><code>0 <= arr[i] <= 10<sup>5</sup></code></li>\\n</ul>\\n","title":"1619. 删除某些元素后的数组均值","relatedTags":["数组","排序"],"difficult":"Easy","lang":["javascript"],"uniqueID":"1619","slug":"1619-Mean-of-Array-After-Removing-Some-Elements"}')}}]);