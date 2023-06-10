(window.webpackJsonp=window.webpackJsonp||[]).push([[1331],{2129:function(n){n.exports=JSON.parse('{"code":["<pre class=\\"hljs\\"><code><span class=\\"hljs-class\\"><span class=\\"hljs-keyword\\">class</span> <span class=\\"hljs-title\\">Solution</span><span class=\\"hljs-params\\">(object)</span>:</span>\\n    <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">def</span> <span class=\\"hljs-title\\">numTrees</span><span class=\\"hljs-params\\">(self, n)</span>:</span>\\n        <span class=\\"hljs-string\\">\\"\\"\\"\\n        :type n: int\\n        :rtype: int\\n        \\"\\"\\"</span>\\n        dp=[<span class=\\"hljs-number\\">0</span>]*(n+<span class=\\"hljs-number\\">1</span>)\\n        dp[<span class=\\"hljs-number\\">0</span>]=<span class=\\"hljs-number\\">1</span>\\n        <span class=\\"hljs-keyword\\">for</span> i <span class=\\"hljs-keyword\\">in</span> range(<span class=\\"hljs-number\\">1</span>,n+<span class=\\"hljs-number\\">1</span>):\\n          <span class=\\"hljs-keyword\\">for</span> j <span class=\\"hljs-keyword\\">in</span> range(<span class=\\"hljs-number\\">0</span>,i):\\n            dp[i]+=dp[j]*dp[i-j<span class=\\"hljs-number\\">-1</span>]\\n        <span class=\\"hljs-keyword\\">return</span> dp[<span class=\\"hljs-number\\">-1</span>]\\n</code></pre>\\n"],"querySlug":"unique-binary-search-trees","created_at":"2019-02-28","timeArr":[2019,1,28,16,45,51,0],"hasThinking":true,"thinking":"<hr>\\n<p>思路：</p>\\n<p>与<code>NO.95</code>不同在于，这题不需要找出划分后具体的树，只需要保留结果，因此使用<code>DP</code>。</p>\\n<p><code>dp[i]</code>表示从数量为<code>i</code>有多少种划分，初始<code>dp[0]=1</code>，即<code>root</code>为<code>null</code>就是1种划分。</p>\\n<p><code>dp[i]=dp[j]*dp[i-j-1]</code>，<code>j</code>的范围为<code>0&lt;=j&lt;i</code>，其中<code>j</code>表示左子树的数量，<code>i-j-1</code>表示右子树的数量。</p>\\n","content":"<p>给你一个整数 <code>n</code> ，求恰由 <code>n</code> 个节点组成且节点值从 <code>1</code> 到 <code>n</code> 互不相同的 <strong>二叉搜索树</strong> 有多少种？返回满足题意的二叉搜索树的种数。</p>\\n\\n<p> </p>\\n\\n<p><strong>示例 1：</strong></p>\\n<img alt=\\"\\" src=\\"https://assets.leetcode.com/uploads/2021/01/18/uniquebstn3.jpg\\" style=\\"width: 600px; height: 148px;\\" />\\n<pre>\\n<strong>输入：</strong>n = 3\\n<strong>输出：</strong>5\\n</pre>\\n\\n<p><strong>示例 2：</strong></p>\\n\\n<pre>\\n<strong>输入：</strong>n = 1\\n<strong>输出：</strong>1\\n</pre>\\n\\n<p> </p>\\n\\n<p><strong>提示：</strong></p>\\n\\n<ul>\\n\\t<li><code>1 <= n <= 19</code></li>\\n</ul>\\n","title":"96. 不同的二叉搜索树","relatedTags":["树","二叉搜索树","数学","动态规划","二叉树"],"difficult":"Middle","lang":["python"],"uniqueID":"96","slug":"96-Unique-Binary-Search-Trees"}')}}]);