(window.webpackJsonp=window.webpackJsonp||[]).push([[651],{1449:function(n){n.exports=JSON.parse('{"code":["<pre class=\\"hljs\\"><code><span class=\\"hljs-class\\"><span class=\\"hljs-keyword\\">class</span> <span class=\\"hljs-title\\">Solution</span><span class=\\"hljs-params\\">(object)</span>:</span>\\n    <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">def</span> <span class=\\"hljs-title\\">rob</span><span class=\\"hljs-params\\">(self, nums)</span>:</span>\\n        <span class=\\"hljs-string\\">\\"\\"\\"\\n        :type nums: List[int]\\n        :rtype: int\\n        \\"\\"\\"</span>\\n        <span class=\\"hljs-keyword\\">if</span> <span class=\\"hljs-keyword\\">not</span> nums:<span class=\\"hljs-keyword\\">return</span> <span class=\\"hljs-number\\">0</span>\\n        n=len(nums)\\n        dp=[<span class=\\"hljs-number\\">0</span>]*(n+<span class=\\"hljs-number\\">1</span>)\\n        dp[<span class=\\"hljs-number\\">1</span>]=nums[<span class=\\"hljs-number\\">0</span>]\\n        <span class=\\"hljs-keyword\\">for</span> i <span class=\\"hljs-keyword\\">in</span> range(<span class=\\"hljs-number\\">2</span>,n+<span class=\\"hljs-number\\">1</span>):\\n          dp[i]=max(dp[i<span class=\\"hljs-number\\">-1</span>],dp[i<span class=\\"hljs-number\\">-2</span>]+nums[i<span class=\\"hljs-number\\">-1</span>])\\n        <span class=\\"hljs-comment\\"># print dp</span>\\n        <span class=\\"hljs-keyword\\">return</span> dp[<span class=\\"hljs-number\\">-1</span>]\\n</code></pre>\\n"],"querySlug":"house-robber","created_at":"2019-03-01","timeArr":[2019,2,1,14,29,5,0],"hasThinking":false,"content":"<p>你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，<strong>如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警</strong>。</p>\\n\\n<p>给定一个代表每个房屋存放金额的非负整数数组，计算你<strong> 不触动警报装置的情况下 </strong>，一夜之内能够偷窃到的最高金额。</p>\\n\\n<p> </p>\\n\\n<p><strong>示例 1：</strong></p>\\n\\n<pre>\\n<strong>输入：</strong>[1,2,3,1]\\n<strong>输出：</strong>4\\n<strong>解释：</strong>偷窃 1 号房屋 (金额 = 1) ，然后偷窃 3 号房屋 (金额 = 3)。\\n     偷窃到的最高金额 = 1 + 3 = 4 。</pre>\\n\\n<p><strong>示例 2：</strong></p>\\n\\n<pre>\\n<strong>输入：</strong>[2,7,9,3,1]\\n<strong>输出：</strong>12\\n<strong>解释：</strong>偷窃 1 号房屋 (金额 = 2), 偷窃 3 号房屋 (金额 = 9)，接着偷窃 5 号房屋 (金额 = 1)。\\n     偷窃到的最高金额 = 2 + 9 + 1 = 12 。\\n</pre>\\n\\n<p> </p>\\n\\n<p><strong>提示：</strong></p>\\n\\n<ul>\\n\\t<li><code>1 <= nums.length <= 100</code></li>\\n\\t<li><code>0 <= nums[i] <= 400</code></li>\\n</ul>\\n","title":"198. 打家劫舍","relatedTags":["数组","动态规划"],"difficult":"Middle","lang":["python"],"uniqueID":"198","slug":"198-House-Robber"}')}}]);