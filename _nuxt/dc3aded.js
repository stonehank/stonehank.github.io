(window.webpackJsonp=window.webpackJsonp||[]).push([[235],{1033:function(n){n.exports=JSON.parse('{"code":["<pre class=\\"hljs\\"><code><span class=\\"hljs-comment\\">/**\\n * Definition for a binary tree node.\\n * function TreeNode(val) {\\n *     this.val = val;\\n *     this.left = this.right = null;\\n * }\\n */</span>\\n<span class=\\"hljs-comment\\">/**\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{TreeNode}</span> <span class=\\"hljs-variable\\">root</span></span>\\n * <span class=\\"hljs-doctag\\">@return <span class=\\"hljs-type\\">{number}</span></span>\\n */</span>\\n<span class=\\"hljs-keyword\\">var</span> maxAncestorDiff = <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span>(<span class=\\"hljs-params\\">root</span>) </span>{\\n  <span class=\\"hljs-keyword\\">let</span> maxGap=<span class=\\"hljs-number\\">-1</span>\\n  <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span> <span class=\\"hljs-title\\">dfs</span>(<span class=\\"hljs-params\\">root,max,min</span>)</span>{\\n    maxGap=<span class=\\"hljs-built_in\\">Math</span>.max(maxGap,max-min)\\n    <span class=\\"hljs-keyword\\">if</span>(!root)<span class=\\"hljs-keyword\\">return</span>\\n    <span class=\\"hljs-keyword\\">let</span> nxtMax=<span class=\\"hljs-built_in\\">Math</span>.max(max,root.val),nxtMin=<span class=\\"hljs-built_in\\">Math</span>.min(min,root.val)\\n    dfs(root.left,nxtMax,nxtMin)\\n    dfs(root.right,nxtMax,nxtMin)\\n  }\\n  dfs(root,root.val,root.val)\\n  <span class=\\"hljs-keyword\\">return</span> maxGap\\n};\\n</code></pre>\\n"],"querySlug":"maximum-difference-between-node-and-ancestor","created_at":"2019-05-15","timeArr":[2019,4,15,14,34,39,0],"hasThinking":true,"thinking":"<hr>\\n<p>思路：</p>\\n<p>题目的意思就是找<code>树</code>中每一条路径的最大和最小值差值最大的值。</p>\\n<p>我们只需要保存当前路径上的最大值和最小值，然后通过<code>dfs</code>不断筛选出最大差距。</p>\\n","content":"<p>给定二叉树的根节点 <code>root</code>，找出存在于 <strong>不同</strong> 节点 <code>A</code> 和 <code>B</code> 之间的最大值 <code>V</code>，其中 <code>V = |A.val - B.val|</code>，且 <code>A</code> 是 <code>B</code> 的祖先。</p>\\n\\n<p>（如果 A 的任何子节点之一为 B，或者 A 的任何子节点是 B 的祖先，那么我们认为 A 是 B 的祖先）</p>\\n\\n<p> </p>\\n\\n<p><strong>示例 1：</strong></p>\\n\\n<p><img alt=\\"\\" src=\\"https://assets.leetcode.com/uploads/2020/11/09/tmp-tree.jpg\\" style=\\"width: 400px; height: 390px;\\" /></p>\\n\\n<pre>\\n<strong>输入：</strong>root = [8,3,10,1,6,null,14,null,null,4,7,13]\\n<strong>输出：</strong>7\\n<strong>解释： </strong>\\n我们有大量的节点与其祖先的差值，其中一些如下：\\n|8 - 3| = 5\\n|3 - 7| = 4\\n|8 - 1| = 7\\n|10 - 13| = 3\\n在所有可能的差值中，最大值 7 由 |8 - 1| = 7 得出。\\n</pre>\\n\\n<p><strong>示例 2：</strong></p>\\n<img alt=\\"\\" src=\\"https://assets.leetcode.com/uploads/2020/11/09/tmp-tree-1.jpg\\" style=\\"width: 250px; height: 349px;\\" />\\n<pre>\\n<strong>输入：</strong>root = [1,null,2,null,0,3]\\n<strong>输出：</strong>3\\n</pre>\\n\\n<p> </p>\\n\\n<p><strong>提示：</strong></p>\\n\\n<ul>\\n\\t<li>树中的节点数在 <code>2</code> 到 <code>5000</code> 之间。</li>\\n\\t<li><code>0 <= Node.val <= 10<sup>5</sup></code></li>\\n</ul>\\n","title":"1026. 节点与其祖先之间的最大差值","relatedTags":["树","深度优先搜索","二叉树"],"difficult":"Middle","lang":["javascript"],"uniqueID":"1026","slug":"1026-Maximum-Difference-Between-Node-and-Ancestor"}')}}]);