(window.webpackJsonp=window.webpackJsonp||[]).push([[587],{1385:function(n){n.exports=JSON.parse('{"code":["<pre class=\\"hljs\\"><code><span class=\\"hljs-comment\\">/**\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{number}</span> <span class=\\"hljs-variable\\">n</span></span>\\n * <span class=\\"hljs-doctag\\">@return <span class=\\"hljs-type\\">{number}</span></span>\\n */</span>\\n<span class=\\"hljs-keyword\\">var</span> getMaximumGenerated = <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span>(<span class=\\"hljs-params\\">n</span>) </span>{\\n    <span class=\\"hljs-keyword\\">if</span>(n===<span class=\\"hljs-number\\">0</span>)<span class=\\"hljs-keyword\\">return</span> <span class=\\"hljs-number\\">0</span>\\n    <span class=\\"hljs-keyword\\">let</span> arr=[<span class=\\"hljs-number\\">0</span>,<span class=\\"hljs-number\\">1</span>]\\n    <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> i=<span class=\\"hljs-number\\">2</span>;i&lt;=n;i++){\\n        <span class=\\"hljs-keyword\\">let</span> half=<span class=\\"hljs-built_in\\">Math</span>.floor(i/<span class=\\"hljs-number\\">2</span>)\\n        <span class=\\"hljs-keyword\\">if</span>(i%<span class=\\"hljs-number\\">2</span>===<span class=\\"hljs-number\\">0</span>){\\n            arr[i]=arr[half]\\n        }<span class=\\"hljs-keyword\\">else</span>{\\n            arr[i]=arr[half]+arr[half+<span class=\\"hljs-number\\">1</span>]\\n        }\\n    }\\n    <span class=\\"hljs-keyword\\">return</span> <span class=\\"hljs-built_in\\">Math</span>.max.apply(<span class=\\"hljs-built_in\\">Math</span>,arr)\\n};\\n</code></pre>\\n"],"querySlug":"get-maximum-in-generated-array","created_at":"2020-12-26","timeArr":[2020,11,26,18,1,19,0],"hasThinking":false,"content":"<p>给你一个整数 <code>n</code> 。按下述规则生成一个长度为 <code>n + 1</code> 的数组 <code>nums</code> ：</p>\\n\\n<ul>\\n\\t<li><code>nums[0] = 0</code></li>\\n\\t<li><code>nums[1] = 1</code></li>\\n\\t<li>当 <code>2 <= 2 * i <= n</code> 时，<code>nums[2 * i] = nums[i]</code></li>\\n\\t<li>当 <code>2 <= 2 * i + 1 <= n</code> 时，<code>nums[2 * i + 1] = nums[i] + nums[i + 1]</code></li>\\n</ul>\\n\\n<p>返回生成数组 <code>nums</code> 中的 <strong>最大</strong> 值。</p>\\n\\n<p> </p>\\n\\n<p><strong>示例 1：</strong></p>\\n\\n<pre>\\n<strong>输入：</strong>n = 7\\n<strong>输出：</strong>3\\n<strong>解释：</strong>根据规则：\\n  nums[0] = 0\\n  nums[1] = 1\\n  nums[(1 * 2) = 2] = nums[1] = 1\\n  nums[(1 * 2) + 1 = 3] = nums[1] + nums[2] = 1 + 1 = 2\\n  nums[(2 * 2) = 4] = nums[2] = 1\\n  nums[(2 * 2) + 1 = 5] = nums[2] + nums[3] = 1 + 2 = 3\\n  nums[(3 * 2) = 6] = nums[3] = 2\\n  nums[(3 * 2) + 1 = 7] = nums[3] + nums[4] = 2 + 1 = 3\\n因此，nums = [0,1,1,2,1,3,2,3]，最大值 3\\n</pre>\\n\\n<p><strong>示例 2：</strong></p>\\n\\n<pre>\\n<strong>输入：</strong>n = 2\\n<strong>输出：</strong>1\\n<strong>解释：</strong>根据规则，nums[0]、nums[1] 和 nums[2] 之中的最大值是 1\\n</pre>\\n\\n<p><strong>示例 3：</strong></p>\\n\\n<pre>\\n<strong>输入：</strong>n = 3\\n<strong>输出：</strong>2\\n<strong>解释：</strong>根据规则，nums[0]、nums[1]、nums[2] 和 nums[3] 之中的最大值是 2\\n</pre>\\n\\n<p> </p>\\n\\n<p><strong>提示：</strong></p>\\n\\n<ul>\\n\\t<li><code>0 <= n <= 100</code></li>\\n</ul>\\n","title":"1646. 获取生成数组中的最大值","relatedTags":["数组","动态规划","模拟"],"difficult":"Easy","lang":["javascript"],"uniqueID":"1646","slug":"1646-Get-Maximum-in-Generated-Array"}')}}]);