(window.webpackJsonp=window.webpackJsonp||[]).push([[935],{1733:function(n){n.exports=JSON.parse('{"code":["<pre class=\\"hljs\\"><code><span class=\\"hljs-comment\\">/**\\n * Definition for a binary tree node.\\n * function TreeNode(val) {\\n *     this.val = val;\\n *     this.left = this.right = null;\\n * }\\n */</span>\\n<span class=\\"hljs-comment\\">/**\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{TreeNode}</span> <span class=\\"hljs-variable\\">root</span></span>\\n * <span class=\\"hljs-doctag\\">@return <span class=\\"hljs-type\\">{number}</span></span>\\n */</span>\\n<span class=\\"hljs-keyword\\">var</span> getMinimumDifference = <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span>(<span class=\\"hljs-params\\">root</span>) </span>{\\n    <span class=\\"hljs-keyword\\">let</span> last\\n    <span class=\\"hljs-keyword\\">let</span> min=<span class=\\"hljs-built_in\\">Number</span>.MAX_SAFE_INTEGER\\n    <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span> <span class=\\"hljs-title\\">inorder</span>(<span class=\\"hljs-params\\">node</span>)</span>{\\n        <span class=\\"hljs-keyword\\">if</span>(!node)<span class=\\"hljs-keyword\\">return</span>\\n        <span class=\\"hljs-keyword\\">if</span>(node.left)inorder(node.left)\\n        <span class=\\"hljs-keyword\\">if</span>(last===<span class=\\"hljs-literal\\">undefined</span>)last=node.val\\n        <span class=\\"hljs-keyword\\">else</span>{\\n            <span class=\\"hljs-keyword\\">let</span> cur=node.val-last\\n            <span class=\\"hljs-keyword\\">if</span>(cur&lt;min)min=cur\\n            last=node.val\\n        }\\n        <span class=\\"hljs-keyword\\">if</span>(node.right)inorder(node.right)\\n    }\\n    inorder(root)\\n    <span class=\\"hljs-keyword\\">return</span> min \\n};\\n</code></pre>\\n"],"querySlug":"minimum-absolute-difference-in-bst","created_at":"2019-04-30","timeArr":[2019,3,30,12,45,25,0],"hasThinking":true,"thinking":"<hr>\\n<p>思路：</p>\\n<p>与<code>NO.783</code>一致，根据<code>BST</code>的性质，使用中序排列(从小到大)，依次检查每一个节点值的差距。</p>\\n","content":"<p>给你一棵所有节点为非负值的二叉搜索树，请你计算树中任意两节点的差的绝对值的最小值。</p>\\n\\n<p>&nbsp;</p>\\n\\n<p><strong>示例：</strong></p>\\n\\n<pre><strong>输入：</strong>\\n\\n   1\\n    \\\\\\n     3\\n    /\\n   2\\n\\n<strong>输出：</strong>\\n1\\n\\n<strong>解释：\\n</strong>最小绝对差为 1，其中 2 和 1 的差的绝对值为 1（或者 2 和 3）。\\n</pre>\\n\\n<p>&nbsp;</p>\\n\\n<p><strong>提示：</strong></p>\\n\\n<ul>\\n\\t<li>树中至少有 2 个节点。</li>\\n\\t<li>本题与 783 <a href=\\"https://leetcode-cn.com/problems/minimum-distance-between-bst-nodes/\\">https://leetcode-cn.com/problems/minimum-distance-between-bst-nodes/</a> 相同</li>\\n</ul>\\n","title":"530. 二叉搜索树的最小绝对差","relatedTags":["树","深度优先搜索","广度优先搜索","二叉搜索树","二叉树"],"difficult":"Easy","lang":["javascript"],"uniqueID":"530","slug":"530-Minimum-Absolute-Difference-in-BST"}')}}]);