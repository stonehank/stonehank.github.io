(window.webpackJsonp=window.webpackJsonp||[]).push([[1005],{1803:function(n){n.exports=JSON.parse('{"code":["<pre class=\\"hljs\\"><code><span class=\\"hljs-class\\"><span class=\\"hljs-keyword\\">class</span> <span class=\\"hljs-title\\">Solution</span><span class=\\"hljs-params\\">(object)</span>:</span>\\n    <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">def</span> <span class=\\"hljs-title\\">minPathSum</span><span class=\\"hljs-params\\">(self, grid)</span>:</span>\\n        <span class=\\"hljs-string\\">\\"\\"\\"\\n        :type grid: List[List[int]]\\n        :rtype: int\\n        \\"\\"\\"</span>\\n        r=len(grid)\\n        c=len(grid[<span class=\\"hljs-number\\">0</span>])\\n        dp=[[float(<span class=\\"hljs-string\\">\'inf\'</span>)]*c <span class=\\"hljs-keyword\\">for</span> i <span class=\\"hljs-keyword\\">in</span> range(r)]\\n        dp[<span class=\\"hljs-number\\">0</span>][<span class=\\"hljs-number\\">0</span>]=grid[<span class=\\"hljs-number\\">0</span>][<span class=\\"hljs-number\\">0</span>]\\n        <span class=\\"hljs-keyword\\">for</span> i <span class=\\"hljs-keyword\\">in</span> range(r):\\n          <span class=\\"hljs-keyword\\">for</span> j <span class=\\"hljs-keyword\\">in</span> range(c):\\n            <span class=\\"hljs-keyword\\">if</span> i&lt;r<span class=\\"hljs-number\\">-1</span>:\\n              dp[i+<span class=\\"hljs-number\\">1</span>][j]=min(dp[i+<span class=\\"hljs-number\\">1</span>][j],dp[i][j]+grid[i+<span class=\\"hljs-number\\">1</span>][j])\\n            <span class=\\"hljs-keyword\\">if</span> j&lt;c<span class=\\"hljs-number\\">-1</span>:\\n              dp[i][j+<span class=\\"hljs-number\\">1</span>]=min(dp[i][j+<span class=\\"hljs-number\\">1</span>],dp[i][j]+grid[i][j+<span class=\\"hljs-number\\">1</span>])\\n        <span class=\\"hljs-keyword\\">return</span> dp[<span class=\\"hljs-number\\">-1</span>][<span class=\\"hljs-number\\">-1</span>]\\n</code></pre>\\n"],"querySlug":"minimum-path-sum","created_at":"2019-02-28","timeArr":[2019,1,28,10,52,21,0],"hasThinking":true,"thinking":"<hr>\\n<p>思路：</p>\\n<p>与<code>NO.62</code>和<code>NO.63</code>一个模式。</p>\\n<p><code>dp[i][j]</code>代表当前位置的最小路径和，状态转移方程：</p>\\n<p>右侧：<code>dp[i+1][j]=Math.min(dp[i+1][j],dp[i][j]+grid[i+1][j])</code></p>\\n<p>下侧：<code>dp[i][j+1]=Math.min(dp[i][j+1],dp[i][j]+grid[i][j+1])</code></p>\\n","content":"<p>给定一个包含非负整数的 <code><em>m</em> x <em>n</em></code> 网格 <code>grid</code> ，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。</p>\\n\\n<p><strong>说明：</strong>每次只能向下或者向右移动一步。</p>\\n\\n<p> </p>\\n\\n<p><strong>示例 1：</strong></p>\\n<img alt=\\"\\" src=\\"https://assets.leetcode.com/uploads/2020/11/05/minpath.jpg\\" style=\\"width: 242px; height: 242px;\\" />\\n<pre>\\n<strong>输入：</strong>grid = [[1,3,1],[1,5,1],[4,2,1]]\\n<strong>输出：</strong>7\\n<strong>解释：</strong>因为路径 1→3→1→1→1 的总和最小。\\n</pre>\\n\\n<p><strong>示例 2：</strong></p>\\n\\n<pre>\\n<strong>输入：</strong>grid = [[1,2,3],[4,5,6]]\\n<strong>输出：</strong>12\\n</pre>\\n\\n<p> </p>\\n\\n<p><strong>提示：</strong></p>\\n\\n<ul>\\n\\t<li><code>m == grid.length</code></li>\\n\\t<li><code>n == grid[i].length</code></li>\\n\\t<li><code>1 <= m, n <= 200</code></li>\\n\\t<li><code>0 <= grid[i][j] <= 100</code></li>\\n</ul>\\n","title":"64. 最小路径和","relatedTags":["数组","动态规划","矩阵"],"difficult":"Middle","lang":["python"],"uniqueID":"64","slug":"64-Minimum-Path-Sum"}')}}]);