(window.webpackJsonp=window.webpackJsonp||[]).push([[934],{1732:function(n){n.exports=JSON.parse('{"code":["<pre class=\\"hljs\\"><code><span class=\\"hljs-class\\"><span class=\\"hljs-keyword\\">class</span> <span class=\\"hljs-title\\">Solution</span><span class=\\"hljs-params\\">(object)</span>:</span>\\n    <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">def</span> <span class=\\"hljs-title\\">maxSubArray</span><span class=\\"hljs-params\\">(self, nums)</span>:</span>\\n        <span class=\\"hljs-string\\">\\"\\"\\"\\n        :type nums: List[int]\\n        :rtype: int\\n        \\"\\"\\"</span>\\n        <span class=\\"hljs-comment\\"># ans=0</span>\\n        <span class=\\"hljs-comment\\"># maxSum=float(\'-inf\')</span>\\n        <span class=\\"hljs-comment\\"># for n in nums:</span>\\n        <span class=\\"hljs-comment\\">#   ans+=n</span>\\n        <span class=\\"hljs-comment\\">#   maxSum=max(maxSum,ans)</span>\\n        <span class=\\"hljs-comment\\">#   if ans&lt;=0:</span>\\n        <span class=\\"hljs-comment\\">#     ans=0</span>\\n        <span class=\\"hljs-comment\\"># return maxSum</span>\\n        \\n        <span class=\\"hljs-comment\\"># dp=[0]*len(nums)</span>\\n        <span class=\\"hljs-comment\\"># dp[0]=nums[0]</span>\\n        <span class=\\"hljs-comment\\"># for i in range(1,len(nums)):</span>\\n        <span class=\\"hljs-comment\\">#   if dp[i-1]+nums[i]&lt;=nums[i]:</span>\\n        <span class=\\"hljs-comment\\">#     dp[i]=nums[i]</span>\\n        <span class=\\"hljs-comment\\">#   else:</span>\\n        <span class=\\"hljs-comment\\">#     dp[i]=dp[i-1]+nums[i]</span>\\n        <span class=\\"hljs-comment\\"># return max(dp)</span>\\n        \\n        <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">def</span> <span class=\\"hljs-title\\">maxSub</span><span class=\\"hljs-params\\">(arr,lo,hi)</span>:</span>\\n          <span class=\\"hljs-keyword\\">if</span> lo == hi:<span class=\\"hljs-keyword\\">return</span> arr[lo]\\n          mid = (lo+hi) // <span class=\\"hljs-number\\">2</span>\\n          <span class=\\"hljs-comment\\"># 左最大</span>\\n          left = maxSub(arr,lo,mid)        \\n          <span class=\\"hljs-comment\\"># 右最大</span>\\n          right = maxSub(arr,mid+<span class=\\"hljs-number\\">1</span>,hi)  \\n          <span class=\\"hljs-comment\\"># 中间最大</span>\\n          leftMid,rightMid = float(<span class=\\"hljs-string\\">\\"-inf\\"</span>),float(<span class=\\"hljs-string\\">\\"-inf\\"</span>)\\n          tempL,tempR = <span class=\\"hljs-number\\">0</span>,<span class=\\"hljs-number\\">0</span>\\n          <span class=\\"hljs-keyword\\">for</span> i <span class=\\"hljs-keyword\\">in</span> range(mid,lo<span class=\\"hljs-number\\">-1</span>,<span class=\\"hljs-number\\">-1</span>):\\n            tempL += arr[i]\\n            leftMid = max(leftMid,tempL)\\n          <span class=\\"hljs-keyword\\">for</span> i <span class=\\"hljs-keyword\\">in</span> range(mid+<span class=\\"hljs-number\\">1</span>,hi+<span class=\\"hljs-number\\">1</span>):\\n            tempR += arr[i]\\n            rightMid = max(rightMid,tempR)\\n          <span class=\\"hljs-keyword\\">return</span> max(left,right,leftMid+rightMid)\\n          \\n        <span class=\\"hljs-keyword\\">return</span> maxSub(nums,<span class=\\"hljs-number\\">0</span>,len(nums)<span class=\\"hljs-number\\">-1</span>)\\n</code></pre>\\n"],"querySlug":"maximum-subarray","created_at":"2019-02-28","timeArr":[2019,1,28,0,46,24,0],"hasThinking":true,"thinking":"<hr>\\n<p>思路：</p>\\n<p><code>O(N)</code>算法就是不断计算前缀和，并且更新最大值，直到<code>sum&lt;0</code>，更新<code>sum=0</code>，继续计算前缀值。\\n这个算法叫做<code>Kadane算法</code>。</p>\\n<pre class=\\"hljs\\"><code><span class=\\"hljs-comment\\">/**\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{number[]}</span> <span class=\\"hljs-variable\\">nums</span></span>\\n * <span class=\\"hljs-doctag\\">@return <span class=\\"hljs-type\\">{number}</span></span>\\n */</span>\\n<span class=\\"hljs-keyword\\">var</span> maxSubArray = <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span>(<span class=\\"hljs-params\\">nums</span>) </span>{ \\n  <span class=\\"hljs-keyword\\">let</span> sum=<span class=\\"hljs-number\\">0</span>,max=nums[<span class=\\"hljs-number\\">0</span>]\\n  <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> i=<span class=\\"hljs-number\\">0</span>;i&lt;nums.length;i++){\\n    sum+=nums[i]\\n    max=<span class=\\"hljs-built_in\\">Math</span>.max(max,sum)\\n    <span class=\\"hljs-keyword\\">if</span>(sum&lt;<span class=\\"hljs-number\\">0</span>)sum=<span class=\\"hljs-number\\">0</span>\\n  }\\n  <span class=\\"hljs-keyword\\">return</span> max\\n};\\n</code></pre>\\n<p><code>O(NlogN)</code>是分治</p>\\n<ol>\\n<li>取中间点<code>mid</code>。</li>\\n<li>计算出左半边<code>[lo,mid]</code>的最大和以及右半边<code>[mid+1,hi]</code>的最大和。</li>\\n<li>从<code>mid</code>开始往左和从<code>mid+1</code>开始往右，计算从中间往两边扩展的最大和。</li>\\n</ol>\\n<p>最后取3者最大值。</p>\\n","content":"<p>给定一个整数数组 <code>nums</code> ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。</p>\\n\\n<p> </p>\\n\\n<p><strong>示例 1：</strong></p>\\n\\n<pre>\\n<strong>输入：</strong>nums = [-2,1,-3,4,-1,2,1,-5,4]\\n<strong>输出：</strong>6\\n<strong>解释：</strong>连续子数组 [4,-1,2,1] 的和最大，为 6 。\\n</pre>\\n\\n<p><strong>示例 2：</strong></p>\\n\\n<pre>\\n<strong>输入：</strong>nums = [1]\\n<strong>输出：</strong>1\\n</pre>\\n\\n<p><strong>示例 3：</strong></p>\\n\\n<pre>\\n<strong>输入：</strong>nums = [0]\\n<strong>输出：</strong>0\\n</pre>\\n\\n<p><strong>示例 4：</strong></p>\\n\\n<pre>\\n<strong>输入：</strong>nums = [-1]\\n<strong>输出：</strong>-1\\n</pre>\\n\\n<p><strong>示例 5：</strong></p>\\n\\n<pre>\\n<strong>输入：</strong>nums = [-100000]\\n<strong>输出：</strong>-100000\\n</pre>\\n\\n<p> </p>\\n\\n<p><strong>提示：</strong></p>\\n\\n<ul>\\n\\t<li><code>1 <= nums.length <= 3 * 10<sup>4</sup></code></li>\\n\\t<li><code>-10<sup>5</sup> <= nums[i] <= 10<sup>5</sup></code></li>\\n</ul>\\n\\n<p> </p>\\n\\n<p><strong>进阶：</strong>如果你已经实现复杂度为 <code>O(n)</code> 的解法，尝试使用更为精妙的 <strong>分治法</strong> 求解。</p>\\n","title":"53. 最大子序和","relatedTags":["数组","分治","动态规划"],"difficult":"Easy","lang":["python"],"uniqueID":"53","slug":"53-Maximum-Subarray"}')}}]);