(window.webpackJsonp=window.webpackJsonp||[]).push([[260],{1058:function(n){n.exports=JSON.parse('{"code":["<pre class=\\"hljs\\"><code><span class=\\"hljs-comment\\">/**\\n * Definition for a binary tree node.\\n * function TreeNode(val) {\\n *     this.val = val;\\n *     this.left = this.right = null;\\n * }\\n */</span>\\n<span class=\\"hljs-comment\\">/**\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{number[]}</span> <span class=\\"hljs-variable\\">preorder</span></span>\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{number[]}</span> <span class=\\"hljs-variable\\">inorder</span></span>\\n * <span class=\\"hljs-doctag\\">@return <span class=\\"hljs-type\\">{TreeNode}</span></span>\\n */</span>\\n<span class=\\"hljs-keyword\\">var</span> buildTree = <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span>(<span class=\\"hljs-params\\">preorder, inorder</span>) </span>{\\n  <span class=\\"hljs-keyword\\">let</span> id=<span class=\\"hljs-number\\">0</span>\\n  <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span> <span class=\\"hljs-title\\">create</span>(<span class=\\"hljs-params\\">start,end</span>)</span>{\\n    <span class=\\"hljs-keyword\\">if</span>(start&gt;end)<span class=\\"hljs-keyword\\">return</span> <span class=\\"hljs-literal\\">null</span>\\n    <span class=\\"hljs-keyword\\">let</span> val=preorder[id++]\\n    <span class=\\"hljs-keyword\\">let</span> root=<span class=\\"hljs-keyword\\">new</span> TreeNode(val)\\n    <span class=\\"hljs-keyword\\">let</span> splitID=inorder.indexOf(val)\\n    root.left=create(start,splitID<span class=\\"hljs-number\\">-1</span>)\\n    root.right=create(splitID+<span class=\\"hljs-number\\">1</span>,end)\\n    <span class=\\"hljs-keyword\\">return</span> root\\n  }\\n  <span class=\\"hljs-keyword\\">return</span> create(<span class=\\"hljs-number\\">0</span>,inorder.length<span class=\\"hljs-number\\">-1</span>)\\n};\\n</code></pre>\\n"],"querySlug":"construct-binary-tree-from-preorder-and-inorder-traversal","created_at":"2019-03-12","timeArr":[2019,2,12,20,54,47,0],"hasThinking":true,"thinking":"<hr>\\n<p>思路：</p>\\n<p>按照<code>preorder</code>的顺序从<code>inorder</code>内部查找，对于查找到的索引<code>idx</code>，将当前<code>inorder</code>的左<code>lo</code>和右<code>hi</code>边界继续分割为<code>[lo,idx-1]</code>和<code>[idx+1,hi]</code>，继续递归处理。</p>\\n<p>和<code>NO.106</code>的区别在于<code>preorder</code>需要从左向右，并且先<code>left</code>子树再<code>right</code>子树。</p>\\n","content":"<p>给定一棵树的前序遍历 <code>preorder</code> 与中序遍历  <code>inorder</code>。请构造二叉树并返回其根节点。</p>\\n\\n<p> </p>\\n\\n<p><strong>示例 1:</strong></p>\\n<img alt=\\"\\" src=\\"https://assets.leetcode.com/uploads/2021/02/19/tree.jpg\\" />\\n<pre>\\n<strong>Input:</strong> preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]\\n<strong>Output:</strong> [3,9,20,null,null,15,7]\\n</pre>\\n\\n<p><strong>示例 2:</strong></p>\\n\\n<pre>\\n<strong>Input:</strong> preorder = [-1], inorder = [-1]\\n<strong>Output:</strong> [-1]\\n</pre>\\n\\n<p> </p>\\n\\n<p><strong>提示:</strong></p>\\n\\n<ul>\\n\\t<li><code>1 <= preorder.length <= 3000</code></li>\\n\\t<li><code>inorder.length == preorder.length</code></li>\\n\\t<li><code>-3000 <= preorder[i], inorder[i] <= 3000</code></li>\\n\\t<li><code>preorder</code> 和 <code>inorder</code> 均无重复元素</li>\\n\\t<li><code>inorder</code> 均出现在 <code>preorder</code></li>\\n\\t<li><code>preorder</code> 保证为二叉树的前序遍历序列</li>\\n\\t<li><code>inorder</code> 保证为二叉树的中序遍历序列</li>\\n</ul>\\n","title":"105. 从前序与中序遍历序列构造二叉树","relatedTags":["树","数组","哈希表","分治","二叉树"],"difficult":"Middle","lang":["javascript"],"uniqueID":"105","slug":"105-Construct-Binary-Tree-from-Preorder-and-Inorder-Traversal"}')}}]);