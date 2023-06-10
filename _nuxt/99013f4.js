(window.webpackJsonp=window.webpackJsonp||[]).push([[1274],{2072:function(n){n.exports=JSON.parse('{"code":["<pre class=\\"hljs\\"><code><span class=\\"hljs-comment\\">/**\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{number[]}</span> <span class=\\"hljs-variable\\">A</span></span>\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{number}</span> <span class=\\"hljs-variable\\">K</span></span>\\n * <span class=\\"hljs-doctag\\">@return <span class=\\"hljs-type\\">{number}</span></span>\\n */</span>\\n<span class=\\"hljs-keyword\\">var</span> smallestRangeI = <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span>(<span class=\\"hljs-params\\">A, K</span>) </span>{\\n  <span class=\\"hljs-keyword\\">let</span> min=<span class=\\"hljs-built_in\\">Math</span>.min.apply(<span class=\\"hljs-built_in\\">Math</span>,A),\\n      max=<span class=\\"hljs-built_in\\">Math</span>.max.apply(<span class=\\"hljs-built_in\\">Math</span>,A)\\n  \\n  <span class=\\"hljs-keyword\\">return</span> <span class=\\"hljs-built_in\\">Math</span>.max(max-K-min-K,<span class=\\"hljs-number\\">0</span>)\\n};\\n</code></pre>\\n"],"querySlug":"smallest-range-i","created_at":"2019-04-03","timeArr":[2019,3,3,18,16,25,0],"hasThinking":true,"thinking":"<hr>\\n<p>思路：</p>\\n<p>这道题条件是<code>-K&lt;=x&lt;=K</code>，因此只需要将<code>A</code>的最大最小值的差距减到最小，就是最后的结果。</p>\\n","content":"<p>给你一个整数数组 <code>nums</code>，请你给数组中的每个元素 <code>nums[i]</code> 都加上一个任意数字 <code>x</code> （<code>-k <= x <= k</code>），从而得到一个新数组 <code>result</code> 。</p>\\n\\n<p>返回数组 <code>result</code> 的最大值和最小值之间可能存在的最小差值。</p>\\n\\n<p> </p>\\n\\n<ol>\\n</ol>\\n\\n<ol>\\n</ol>\\n\\n<div>\\n<p><strong>示例 1：</strong></p>\\n\\n<pre>\\n<strong>输入：</strong>nums = <span id=\\"example-input-1-1\\">[1]</span>, k = <span id=\\"example-input-1-2\\">0</span>\\n<strong>输出：</strong><span id=\\"example-output-1\\">0\\n<strong>解释：</strong>result = [1]</span>\\n</pre>\\n\\n<div>\\n<p><strong>示例 2：</strong></p>\\n\\n<pre>\\n<strong>输入：</strong>nums = <span id=\\"example-input-2-1\\">[0,10]</span>, k = <span id=\\"example-input-2-2\\">2</span>\\n<strong>输出：</strong><span id=\\"example-output-2\\">6\\n</span><span id=\\"example-output-1\\"><strong>解释：</strong></span><span>result = [2,8]</span>\\n</pre>\\n\\n<div>\\n<p><strong>示例 3：</strong></p>\\n\\n<pre>\\n<strong>输入：</strong>nums = <span id=\\"example-input-3-1\\">[1,3,6]</span>, k = <span id=\\"example-input-3-2\\">3</span>\\n<strong>输出：</strong><span id=\\"example-output-3\\">0\\n</span><span id=\\"example-output-1\\"><strong>解释：</strong></span><span>result = [3,3,3] or result = [4,4,4]</span>\\n</pre>\\n</div>\\n</div>\\n</div>\\n\\n<p> </p>\\n\\n<p><strong>提示：</strong></p>\\n\\n<ul>\\n\\t<li><code>1 <= nums.length <= 10000</code></li>\\n\\t<li><code>0 <= nums[i] <= 10000</code></li>\\n\\t<li><code>0 <= k <= 10000</code></li>\\n</ul>\\n","title":"908. 最小差值 I","relatedTags":["数组","数学"],"difficult":"Easy","lang":["javascript"],"uniqueID":"908","slug":"908-Smallest-Range-I"}')}}]);