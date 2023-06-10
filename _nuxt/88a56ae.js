(window.webpackJsonp=window.webpackJsonp||[]).push([[818],{1616:function(n){n.exports=JSON.parse('{"code":["<pre class=\\"hljs\\"><code><span class=\\"hljs-comment\\">/**\\n * Definition for a binary tree node.\\n * function TreeNode(val) {\\n *     this.val = val;\\n *     this.left = this.right = null;\\n * }\\n */</span>\\n<span class=\\"hljs-comment\\">/**\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{TreeNode}</span> <span class=\\"hljs-variable\\">root</span></span>\\n * <span class=\\"hljs-doctag\\">@return <span class=\\"hljs-type\\">{number}</span></span>\\n */</span>\\n<span class=\\"hljs-keyword\\">var</span> sumOfLeftLeaves = <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span>(<span class=\\"hljs-params\\">root</span>) </span>{\\n  <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span> <span class=\\"hljs-title\\">calcLeftSum</span>(<span class=\\"hljs-params\\">root,left</span>)</span>{\\n    <span class=\\"hljs-keyword\\">if</span>(!root)<span class=\\"hljs-keyword\\">return</span> <span class=\\"hljs-number\\">0</span>\\n    <span class=\\"hljs-keyword\\">let</span> sum=<span class=\\"hljs-number\\">0</span>\\n    <span class=\\"hljs-keyword\\">if</span>(root.left)sum+=calcLeftSum(root.left,<span class=\\"hljs-literal\\">true</span>)\\n    <span class=\\"hljs-keyword\\">if</span>(root.right)sum+=calcLeftSum(root.right,<span class=\\"hljs-literal\\">false</span>)\\n    <span class=\\"hljs-keyword\\">if</span>(!root.left &amp;&amp; !root.right){\\n      <span class=\\"hljs-keyword\\">if</span>(left)<span class=\\"hljs-keyword\\">return</span> root.val\\n      <span class=\\"hljs-keyword\\">return</span> <span class=\\"hljs-number\\">0</span>\\n    }\\n    <span class=\\"hljs-keyword\\">return</span> sum\\n  }\\n  <span class=\\"hljs-keyword\\">return</span> calcLeftSum(root,<span class=\\"hljs-literal\\">false</span>)\\n};\\n</code></pre>\\n"],"querySlug":"sum-of-left-leaves","created_at":"2019-03-18","timeArr":[2019,2,18,23,13,20,0],"hasThinking":false,"content":"<p>计算给定二叉树的所有左叶子之和。</p>\\n\\n<p><strong>示例：</strong></p>\\n\\n<pre>\\n    3\\n   / \\\\\\n  9  20\\n    /  \\\\\\n   15   7\\n\\n在这个二叉树中，有两个左叶子，分别是 9 和 15，所以返回 24</pre>\\n\\n<p>&nbsp;</p>\\n","title":"404. 左叶子之和","relatedTags":["树","深度优先搜索","广度优先搜索","二叉树"],"difficult":"Easy","lang":["javascript"],"uniqueID":"404","slug":"404-Sum-of-Left-Leaves"}')}}]);