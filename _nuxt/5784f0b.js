(window.webpackJsonp=window.webpackJsonp||[]).push([[1033],{1831:function(n){n.exports=JSON.parse('{"code":["<pre class=\\"hljs\\"><code><span class=\\"hljs-comment\\">/**\\n * Definition for a binary tree node.\\n * function TreeNode(val) {\\n *     this.val = val;\\n *     this.left = this.right = null;\\n * }\\n */</span>\\n<span class=\\"hljs-comment\\">/**\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{TreeNode}</span> <span class=\\"hljs-variable\\">root</span></span>\\n * <span class=\\"hljs-doctag\\">@return <span class=\\"hljs-type\\">{number}</span></span>\\n */</span>\\n<span class=\\"hljs-keyword\\">var</span> findSecondMinimumValue = <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span>(<span class=\\"hljs-params\\">root</span>) </span>{\\n  <span class=\\"hljs-keyword\\">if</span>(!root)<span class=\\"hljs-keyword\\">return</span> <span class=\\"hljs-number\\">-1</span>\\n  <span class=\\"hljs-keyword\\">let</span> min=root.val,ans=<span class=\\"hljs-literal\\">Infinity</span>\\n  <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span> <span class=\\"hljs-title\\">dfs</span>(<span class=\\"hljs-params\\">root</span>)</span>{\\n    <span class=\\"hljs-keyword\\">if</span>(root.val&gt;min){\\n      ans=<span class=\\"hljs-built_in\\">Math</span>.min(ans,root.val)\\n    }<span class=\\"hljs-keyword\\">else</span>{\\n      <span class=\\"hljs-keyword\\">if</span>(root.left)dfs(root.left)\\n      <span class=\\"hljs-keyword\\">if</span>(root.right)dfs(root.right)      \\n    }\\n  }\\n  dfs(root)\\n  <span class=\\"hljs-keyword\\">return</span> ans==<span class=\\"hljs-literal\\">Infinity</span>?<span class=\\"hljs-number\\">-1</span>:ans\\n};\\n</code></pre>\\n"],"querySlug":"second-minimum-node-in-a-binary-tree","created_at":"2019-03-19","timeArr":[2019,2,19,17,0,39,0],"hasThinking":false,"content":"<p>给定一个非空特殊的二叉树，每个节点都是正数，并且每个节点的子节点数量只能为 <code>2</code> 或 <code>0</code>。如果一个节点有两个子节点的话，那么该节点的值等于两个子节点中较小的一个。</p>\\n\\n<p>更正式地说，<code>root.val = min(root.left.val, root.right.val)</code> 总成立。</p>\\n\\n<p>给出这样的一个二叉树，你需要输出所有节点中的<strong>第二小的值。</strong>如果第二小的值不存在的话，输出 -1 <strong>。</strong></p>\\n\\n<p> </p>\\n\\n<p><strong>示例 1：</strong></p>\\n<img alt=\\"\\" src=\\"https://assets.leetcode.com/uploads/2020/10/15/smbt1.jpg\\" style=\\"width: 431px; height: 302px;\\" />\\n<pre>\\n<strong>输入：</strong>root = [2,2,5,null,null,5,7]\\n<strong>输出：</strong>5\\n<strong>解释：</strong>最小的值是 2 ，第二小的值是 5 。\\n</pre>\\n\\n<p><strong>示例 2：</strong></p>\\n<img alt=\\"\\" src=\\"https://assets.leetcode.com/uploads/2020/10/15/smbt2.jpg\\" style=\\"width: 321px; height: 182px;\\" />\\n<pre>\\n<strong>输入：</strong>root = [2,2,2]\\n<strong>输出：</strong>-1\\n<strong>解释：</strong>最小的值是 2, 但是不存在第二小的值。\\n</pre>\\n\\n<p> </p>\\n\\n<p><strong>提示：</strong></p>\\n\\n<ul>\\n\\t<li>树中节点数目在范围 <code>[1, 25]</code> 内</li>\\n\\t<li><code>1 <= Node.val <= 2<sup>31</sup> - 1</code></li>\\n\\t<li>对于树中每个节点 <code>root.val == min(root.left.val, root.right.val)</code></li>\\n</ul>\\n","title":"671. 二叉树中第二小的节点","relatedTags":["树","深度优先搜索","二叉树"],"difficult":"Easy","lang":["javascript"],"uniqueID":"671","slug":"671-Second-Minimum-Node-In-a-Binary-Tree"}')}}]);