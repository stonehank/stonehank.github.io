(window.webpackJsonp=window.webpackJsonp||[]).push([[608],{1406:function(n){n.exports=JSON.parse('{"code":["<pre class=\\"hljs\\"><code><span class=\\"hljs-comment\\">/**\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{number[]}</span> <span class=\\"hljs-variable\\">nums</span></span>\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{number}</span> <span class=\\"hljs-variable\\">k</span></span>\\n * <span class=\\"hljs-doctag\\">@return <span class=\\"hljs-type\\">{number}</span></span>\\n */</span>\\n<span class=\\"hljs-keyword\\">var</span> maxOperations = <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span>(<span class=\\"hljs-params\\">nums, k</span>) </span>{\\n    <span class=\\"hljs-keyword\\">let</span> cache={}\\n    <span class=\\"hljs-keyword\\">let</span> res=<span class=\\"hljs-number\\">0</span>\\n    <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> n <span class=\\"hljs-keyword\\">of</span> nums){\\n        <span class=\\"hljs-keyword\\">let</span> r=k-n\\n        <span class=\\"hljs-keyword\\">if</span>(cache[n]){\\n            cache[n]--\\n            res++\\n            <span class=\\"hljs-keyword\\">continue</span>\\n        }\\n        <span class=\\"hljs-keyword\\">if</span>(r&lt;<span class=\\"hljs-number\\">0</span>)<span class=\\"hljs-keyword\\">continue</span>\\n        <span class=\\"hljs-keyword\\">if</span>(cache[r]==<span class=\\"hljs-literal\\">null</span>){\\n            cache[r]=<span class=\\"hljs-number\\">1</span>\\n        }<span class=\\"hljs-keyword\\">else</span>{\\n            cache[r]++\\n        }\\n\\n    }\\n    <span class=\\"hljs-keyword\\">return</span> res\\n};\\n</code></pre>\\n"],"querySlug":"max-number-of-k-sum-pairs","created_at":"2020-12-18","timeArr":[2020,11,18,21,14,8,0],"hasThinking":false,"content":"<p>给你一个整数数组 <code>nums</code> 和一个整数 <code>k</code> 。</p>\\n\\n<p>每一步操作中，你需要从数组中选出和为 <code>k</code> 的两个整数，并将它们移出数组。</p>\\n\\n<p>返回你可以对数组执行的最大操作数。</p>\\n\\n<p> </p>\\n\\n<p><strong>示例 1：</strong></p>\\n\\n<pre>\\n<strong>输入：</strong>nums = [1,2,3,4], k = 5\\n<strong>输出：</strong>2\\n<strong>解释：</strong>开始时 nums = [1,2,3,4]：\\n- 移出 1 和 4 ，之后 nums = [2,3]\\n- 移出 2 和 3 ，之后 nums = []\\n不再有和为 5 的数对，因此最多执行 2 次操作。</pre>\\n\\n<p><strong>示例 2：</strong></p>\\n\\n<pre>\\n<strong>输入：</strong>nums = [3,1,3,4,3], k = 6\\n<strong>输出：</strong>1\\n<strong>解释：</strong>开始时 nums = [3,1,3,4,3]：\\n- 移出前两个 3 ，之后nums = [1,4,3]\\n不再有和为 6 的数对，因此最多执行 1 次操作。</pre>\\n\\n<p> </p>\\n\\n<p><strong>提示：</strong></p>\\n\\n<ul>\\n\\t<li><code>1 <= nums.length <= 10<sup>5</sup></code></li>\\n\\t<li><code>1 <= nums[i] <= 10<sup>9</sup></code></li>\\n\\t<li><code>1 <= k <= 10<sup>9</sup></code></li>\\n</ul>\\n","title":"1679. K 和数对的最大数目","relatedTags":["数组","哈希表","双指针","排序"],"difficult":"Middle","lang":["javascript"],"uniqueID":"1679","slug":"1679-Max-Number-of-K-Sum-Pairs"}')}}]);