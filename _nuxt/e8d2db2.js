(window.webpackJsonp=window.webpackJsonp||[]).push([[846],{1644:function(n){n.exports=JSON.parse('{"code":["<pre class=\\"hljs\\"><code><span class=\\"hljs-comment\\">/**\\n * Definition for a binary tree node.\\n * function TreeNode(val) {\\n *     this.val = val;\\n *     this.left = this.right = null;\\n * }\\n */</span>\\n<span class=\\"hljs-comment\\">/**\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{TreeNode}</span> <span class=\\"hljs-variable\\">root</span></span>\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{number}</span> <span class=\\"hljs-variable\\">sum</span></span>\\n * <span class=\\"hljs-doctag\\">@return <span class=\\"hljs-type\\">{number}</span></span>\\n */</span>\\n<span class=\\"hljs-keyword\\">var</span> pathSum = <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span>(<span class=\\"hljs-params\\">root, sum</span>) </span>{\\n  <span class=\\"hljs-keyword\\">if</span>(!root)<span class=\\"hljs-keyword\\">return</span> <span class=\\"hljs-number\\">0</span>\\n  <span class=\\"hljs-keyword\\">let</span> hash={},res=<span class=\\"hljs-number\\">0</span>,targ=sum\\n  hash[<span class=\\"hljs-number\\">0</span>]=<span class=\\"hljs-number\\">1</span>\\n  <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span> <span class=\\"hljs-title\\">hasPath</span>(<span class=\\"hljs-params\\">root,curSum</span>)</span>{\\n    <span class=\\"hljs-keyword\\">let</span> curV=root.val\\n    <span class=\\"hljs-keyword\\">let</span> newSum=curSum+curV\\n    <span class=\\"hljs-keyword\\">if</span>(hash[newSum-targ]&gt;<span class=\\"hljs-number\\">0</span>)res+=hash[newSum-targ]\\n    <span class=\\"hljs-keyword\\">if</span>(hash[newSum]==<span class=\\"hljs-literal\\">null</span>)hash[newSum]=<span class=\\"hljs-number\\">0</span>\\n    hash[newSum]++\\n    <span class=\\"hljs-keyword\\">if</span>(root.left)hasPath(root.left,newSum)\\n    <span class=\\"hljs-keyword\\">if</span>(root.right)hasPath(root.right,newSum)\\n    hash[newSum]--\\n  }\\n  hasPath(root,<span class=\\"hljs-number\\">0</span>)\\n  <span class=\\"hljs-keyword\\">return</span> res\\n};\\n</code></pre>\\n","<pre class=\\"hljs\\"><code><span class=\\"hljs-comment\\"># Definition for a binary tree node.</span>\\n<span class=\\"hljs-comment\\"># class TreeNode(object):</span>\\n<span class=\\"hljs-comment\\">#     def __init__(self, x):</span>\\n<span class=\\"hljs-comment\\">#         self.val = x</span>\\n<span class=\\"hljs-comment\\">#         self.left = None</span>\\n<span class=\\"hljs-comment\\">#         self.right = None</span>\\n\\n<span class=\\"hljs-class\\"><span class=\\"hljs-keyword\\">class</span> <span class=\\"hljs-title\\">Solution</span><span class=\\"hljs-params\\">(object)</span>:</span>\\n    <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">def</span> <span class=\\"hljs-title\\">pathSum</span><span class=\\"hljs-params\\">(self, root, sum)</span>:</span>\\n        <span class=\\"hljs-string\\">\\"\\"\\"\\n        :type root: TreeNode\\n        :type sum: int\\n        :rtype: int\\n        \\"\\"\\"</span>\\n        <span class=\\"hljs-keyword\\">if</span> <span class=\\"hljs-keyword\\">not</span> root:<span class=\\"hljs-keyword\\">return</span> <span class=\\"hljs-number\\">0</span>\\n        memo=collections.defaultdict(int)\\n        memo[<span class=\\"hljs-number\\">0</span>]=<span class=\\"hljs-number\\">1</span>\\n        <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">def</span> <span class=\\"hljs-title\\">calcPath</span><span class=\\"hljs-params\\">(root,curSum,targ)</span>:</span>\\n          curSum+=root.val\\n          res=<span class=\\"hljs-number\\">0</span>\\n          <span class=\\"hljs-keyword\\">if</span> curSum-targ <span class=\\"hljs-keyword\\">in</span> memo: res+=memo[curSum-targ]\\n          memo[curSum]+=<span class=\\"hljs-number\\">1</span>\\n          <span class=\\"hljs-keyword\\">if</span> root.left: res+=calcPath(root.left,curSum,targ)\\n          <span class=\\"hljs-keyword\\">if</span> root.right: res+=calcPath(root.right,curSum,targ)\\n          memo[curSum]-=<span class=\\"hljs-number\\">1</span>\\n          <span class=\\"hljs-keyword\\">return</span> res\\n        \\n        <span class=\\"hljs-keyword\\">return</span> calcPath(root,<span class=\\"hljs-number\\">0</span>,sum)\\n\\n</code></pre>\\n"],"querySlug":"path-sum-iii","hasThinking":true,"thinking":"<hr>\\n<p>思路：</p>\\n<p><code>O(n^2)</code>：遍历树，对每一个节点，进行计算从这个节点开始往下的路径和的处理。</p>\\n<p><code>O(nlogn)</code>：类似<code>Two Sum</code>，定义一个<code>hash</code>，用来保存当前<strong>从上往下的路径</strong>上的和，如果发现<code>当前和-target</code>存在，\\n直接添加到结果。</p>\\n<p>要注意的是：<code>hash[sum]</code>保存的和只能用于当前节点以下的路径，如果当前节点以下都处理完毕，需要减去这次保存的结果，<code>hash[sum]--</code>。</p>\\n","content":"<p>给定一个二叉树的根节点 <code>root</code> ，和一个整数 <code>targetSum</code> ，求该二叉树里节点值之和等于 <code>targetSum</code> 的 <strong>路径</strong> 的数目。</p>\\n\\n<p><strong>路径</strong> 不需要从根节点开始，也不需要在叶子节点结束，但是路径方向必须是向下的（只能从父节点到子节点）。</p>\\n\\n<p> </p>\\n\\n<p><strong>示例 1：</strong></p>\\n\\n<p><img src=\\"https://assets.leetcode.com/uploads/2021/04/09/pathsum3-1-tree.jpg\\" style=\\"width: 452px; \\" /></p>\\n\\n<pre>\\n<strong>输入：</strong>root = [10,5,-3,3,2,null,11,3,-2,null,1], targetSum = 8\\n<strong>输出：</strong>3\\n<strong>解释：</strong>和等于 8 的路径有 3 条，如图所示。\\n</pre>\\n\\n<p><strong>示例 2：</strong></p>\\n\\n<pre>\\n<strong>输入：</strong>root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22\\n<strong>输出：</strong>3\\n</pre>\\n\\n<p> </p>\\n\\n<p><strong>提示:</strong></p>\\n\\n<ul>\\n\\t<li>二叉树的节点个数的范围是 <code>[0,1000]</code></li>\\n\\t<li><meta charset=\\"UTF-8\\" /><code>-10<sup>9</sup> <= Node.val <= 10<sup>9</sup></code> </li>\\n\\t<li><code>-1000 <= targetSum <= 1000</code> </li>\\n</ul>\\n","title":"437. 路径总和 III","relatedTags":["树","深度优先搜索","二叉树"],"difficult":"Middle","lang":["javascript","python"],"uniqueID":"437","slug":"437-Path-Sum-III"}')}}]);