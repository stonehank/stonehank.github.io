(window.webpackJsonp=window.webpackJsonp||[]).push([[739],{1537:function(n){n.exports=JSON.parse('{"code":["<pre class=\\"hljs\\"><code><span class=\\"hljs-class\\"><span class=\\"hljs-keyword\\">class</span> <span class=\\"hljs-title\\">Solution</span><span class=\\"hljs-params\\">(object)</span>:</span>\\n    <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">def</span> <span class=\\"hljs-title\\">maxCoins</span><span class=\\"hljs-params\\">(self, nums)</span>:</span>\\n        <span class=\\"hljs-string\\">\\"\\"\\"\\n        :type nums: List[int]\\n        :rtype: int\\n        \\"\\"\\"</span>\\n        n=len(nums)\\n        <span class=\\"hljs-keyword\\">if</span> n==<span class=\\"hljs-number\\">0</span>:<span class=\\"hljs-keyword\\">return</span> <span class=\\"hljs-number\\">0</span>\\n        dp=[[<span class=\\"hljs-number\\">0</span>]*n <span class=\\"hljs-keyword\\">for</span> i <span class=\\"hljs-keyword\\">in</span> range(n)]\\n        <span class=\\"hljs-keyword\\">for</span> i <span class=\\"hljs-keyword\\">in</span> range(n):\\n          <span class=\\"hljs-keyword\\">for</span> j <span class=\\"hljs-keyword\\">in</span> range(n-i):\\n            k=j+i\\n            mid_l,mid_r=<span class=\\"hljs-number\\">1</span>,<span class=\\"hljs-number\\">1</span>\\n            <span class=\\"hljs-keyword\\">if</span> j&gt;<span class=\\"hljs-number\\">0</span>:mid_l=nums[j<span class=\\"hljs-number\\">-1</span>]\\n            <span class=\\"hljs-keyword\\">if</span> k&lt;n<span class=\\"hljs-number\\">-1</span>:mid_r=nums[k+<span class=\\"hljs-number\\">1</span>]\\n            <span class=\\"hljs-keyword\\">for</span> x <span class=\\"hljs-keyword\\">in</span> range(j,k+<span class=\\"hljs-number\\">1</span>):\\n              left,right=<span class=\\"hljs-number\\">0</span>,<span class=\\"hljs-number\\">0</span>\\n              <span class=\\"hljs-keyword\\">if</span> x&gt;<span class=\\"hljs-number\\">0</span>:left=dp[j][x<span class=\\"hljs-number\\">-1</span>]\\n              <span class=\\"hljs-keyword\\">if</span> x&lt;k:right=dp[x+<span class=\\"hljs-number\\">1</span>][k]\\n              mid=mid_l*nums[x]*mid_r\\n              dp[j][k]=max(dp[j][k],left+mid+right)\\n              \\n        <span class=\\"hljs-keyword\\">return</span> dp[<span class=\\"hljs-number\\">0</span>][<span class=\\"hljs-number\\">-1</span>]\\n                \\n              \\n</code></pre>\\n"],"querySlug":"burst-balloons","created_at":"2019-03-02","timeArr":[2019,2,2,0,3,39,0],"hasThinking":false,"content":"<p>有 <code>n</code> 个气球，编号为<code>0</code> 到 <code>n - 1</code>，每个气球上都标有一个数字，这些数字存在数组 <code>nums</code> 中。</p>\\n\\n<p>现在要求你戳破所有的气球。戳破第 <code>i</code> 个气球，你可以获得 <code>nums[i - 1] * nums[i] * nums[i + 1]</code> 枚硬币。 这里的 <code>i - 1</code> 和 <code>i + 1</code> 代表和 <code>i</code> 相邻的两个气球的序号。如果 <code>i - 1</code>或 <code>i + 1</code> 超出了数组的边界，那么就当它是一个数字为 <code>1</code> 的气球。</p>\\n\\n<p>求所能获得硬币的最大数量。</p>\\n\\n<p> </p>\\n<strong>示例 1：</strong>\\n\\n<pre>\\n<strong>输入：</strong>nums = [3,1,5,8]\\n<strong>输出：</strong>167\\n<strong>解释：</strong>\\nnums = [3,1,5,8] --\x3e [3,5,8] --\x3e [3,8] --\x3e [8] --\x3e []\\ncoins =  3*1*5    +   3*5*8   +  1*3*8  + 1*8*1 = 167</pre>\\n\\n<p><strong>示例 2：</strong></p>\\n\\n<pre>\\n<strong>输入：</strong>nums = [1,5]\\n<strong>输出：</strong>10\\n</pre>\\n\\n<p> </p>\\n\\n<p><strong>提示：</strong></p>\\n\\n<ul>\\n\\t<li><code>n == nums.length</code></li>\\n\\t<li><code>1 <= n <= 500</code></li>\\n\\t<li><code>0 <= nums[i] <= 100</code></li>\\n</ul>\\n","title":"312. 戳气球","relatedTags":["数组","动态规划"],"difficult":"Hard","lang":["python"],"uniqueID":"312","slug":"312-Burst-Balloons"}')}}]);