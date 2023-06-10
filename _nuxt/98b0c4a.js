(window.webpackJsonp=window.webpackJsonp||[]).push([[652],{1450:function(n){n.exports=JSON.parse('{"code":["<pre class=\\"hljs\\"><code><span class=\\"hljs-comment\\">/**\\n * Definition for a binary tree node.\\n * function TreeNode(val) {\\n *     this.val = val;\\n *     this.left = this.right = null;\\n * }\\n */</span>\\n<span class=\\"hljs-comment\\">/**\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{TreeNode}</span> <span class=\\"hljs-variable\\">root</span></span>\\n * <span class=\\"hljs-doctag\\">@return <span class=\\"hljs-type\\">{number[]}</span></span>\\n */</span>\\n<span class=\\"hljs-keyword\\">var</span> rightSideView = <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span>(<span class=\\"hljs-params\\">root</span>) </span>{\\n  <span class=\\"hljs-keyword\\">if</span>(!root)<span class=\\"hljs-keyword\\">return</span> []\\n  <span class=\\"hljs-keyword\\">let</span> arr=[root]\\n  <span class=\\"hljs-keyword\\">let</span> res=[]\\n  <span class=\\"hljs-keyword\\">while</span>(arr.length&gt;<span class=\\"hljs-number\\">0</span>){\\n    <span class=\\"hljs-keyword\\">let</span> len=arr.length\\n    res.push(arr[len<span class=\\"hljs-number\\">-1</span>].val)\\n    <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> i=<span class=\\"hljs-number\\">0</span>;i&lt;len;i++){\\n      <span class=\\"hljs-keyword\\">let</span> node=arr.shift()\\n      <span class=\\"hljs-keyword\\">if</span>(node.left)arr.push(node.left)\\n      <span class=\\"hljs-keyword\\">if</span>(node.right)arr.push(node.right)\\n    }\\n  }\\n  <span class=\\"hljs-keyword\\">return</span> res\\n};\\n</code></pre>\\n"],"querySlug":"binary-tree-right-side-view","created_at":"2019-03-18","timeArr":[2019,2,18,20,48,58,0],"hasThinking":false,"content":"<p>给定一个二叉树的 <strong>根节点</strong> <code>root</code>，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。</p>\\n\\n<p> </p>\\n\\n<p><strong>示例 1:</strong></p>\\n\\n<p><img src=\\"https://assets.leetcode.com/uploads/2021/02/14/tree.jpg\\" style=\\"width: 270px; \\" /></p>\\n\\n<pre>\\n<strong>输入:</strong> [1,2,3,null,5,null,4]\\n<strong>输出:</strong> [1,3,4]\\n</pre>\\n\\n<p><strong>示例 2:</strong></p>\\n\\n<pre>\\n<strong>输入:</strong> [1,null,3]\\n<strong>输出:</strong> [1,3]\\n</pre>\\n\\n<p><strong>示例 3:</strong></p>\\n\\n<pre>\\n<strong>输入:</strong> []\\n<strong>输出:</strong> []\\n</pre>\\n\\n<p> </p>\\n\\n<p><strong>提示:</strong></p>\\n\\n<ul>\\n\\t<li>二叉树的节点个数的范围是 <code>[0,100]</code></li>\\n\\t<li><meta charset=\\"UTF-8\\" /><code>-100 <= Node.val <= 100</code> </li>\\n</ul>\\n","title":"199. 二叉树的右视图","relatedTags":["树","深度优先搜索","广度优先搜索","二叉树"],"difficult":"Middle","lang":["javascript"],"uniqueID":"199","slug":"199-Binary-Tree-Right-Side-View"}')}}]);