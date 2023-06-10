(window.webpackJsonp=window.webpackJsonp||[]).push([[1025],{1823:function(n){n.exports=JSON.parse('{"code":["<pre class=\\"hljs\\"><code><span class=\\"hljs-comment\\">/**\\n * Definition for a binary tree node.\\n * function TreeNode(val) {\\n *     this.val = val;\\n *     this.left = this.right = null;\\n * }\\n */</span>\\n<span class=\\"hljs-comment\\">/**\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{TreeNode}</span> <span class=\\"hljs-variable\\">root</span></span>\\n * <span class=\\"hljs-doctag\\">@return <span class=\\"hljs-type\\">{number}</span></span>\\n */</span>\\n<span class=\\"hljs-keyword\\">var</span> widthOfBinaryTree = <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span>(<span class=\\"hljs-params\\">root</span>) </span>{\\n  <span class=\\"hljs-keyword\\">if</span>(!root)<span class=\\"hljs-keyword\\">return</span> <span class=\\"hljs-number\\">0</span>\\n  <span class=\\"hljs-keyword\\">let</span> arr=[[root,<span class=\\"hljs-number\\">0</span>]]\\n  <span class=\\"hljs-keyword\\">let</span> maxWidth=<span class=\\"hljs-number\\">0</span>\\n  <span class=\\"hljs-keyword\\">while</span>(arr.length&gt;<span class=\\"hljs-number\\">0</span>){\\n    <span class=\\"hljs-keyword\\">let</span> len=arr.length\\n    <span class=\\"hljs-keyword\\">let</span> l=<span class=\\"hljs-literal\\">null</span>,r=<span class=\\"hljs-literal\\">null</span>\\n    <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> i=<span class=\\"hljs-number\\">0</span>;i&lt;len;i++){\\n      <span class=\\"hljs-keyword\\">let</span> [node,pos]=arr.shift()\\n      <span class=\\"hljs-keyword\\">if</span>(l==<span class=\\"hljs-literal\\">null</span>)l=pos\\n      <span class=\\"hljs-keyword\\">else</span> r=pos\\n      <span class=\\"hljs-keyword\\">if</span>(node.left)arr.push([node.left,pos*<span class=\\"hljs-number\\">2</span>])\\n      <span class=\\"hljs-keyword\\">if</span>(node.right)arr.push([node.right,pos*<span class=\\"hljs-number\\">2</span>+<span class=\\"hljs-number\\">1</span>])\\n    }\\n    <span class=\\"hljs-keyword\\">let</span> w=<span class=\\"hljs-number\\">0</span>\\n    <span class=\\"hljs-keyword\\">if</span>(l==<span class=\\"hljs-literal\\">null</span> || r==<span class=\\"hljs-literal\\">null</span>)w=<span class=\\"hljs-number\\">1</span>\\n    maxWidth=<span class=\\"hljs-built_in\\">Math</span>.max(maxWidth,r-l+<span class=\\"hljs-number\\">1</span>)\\n  }\\n  <span class=\\"hljs-keyword\\">return</span> maxWidth\\n};\\n</code></pre>\\n"],"querySlug":"maximum-width-of-binary-tree","created_at":"2019-03-19","timeArr":[2019,2,19,16,29,20,0],"hasThinking":false,"content":"<p>给定一个二叉树，编写一个函数来获取这个树的最大宽度。树的宽度是所有层中的最大宽度。这个二叉树与<strong>满二叉树（full binary tree）</strong>结构相同，但一些节点为空。</p>\\n\\n<p>每一层的宽度被定义为两个端点（该层最左和最右的非空节点，两端点间的<code>null</code>节点也计入长度）之间的长度。</p>\\n\\n<p><strong>示例 1:</strong></p>\\n\\n<pre>\\n<strong>输入:</strong> \\n\\n           1\\n         /   \\\\\\n        3     2\\n       / \\\\     \\\\  \\n      5   3     9 \\n\\n<strong>输出:</strong> 4\\n<strong>解释:</strong> 最大值出现在树的第 3 层，宽度为 4 (5,3,null,9)。\\n</pre>\\n\\n<p><strong>示例 2:</strong></p>\\n\\n<pre>\\n<strong>输入:</strong> \\n\\n          1\\n         /  \\n        3    \\n       / \\\\       \\n      5   3     \\n\\n<strong>输出:</strong> 2\\n<strong>解释:</strong> 最大值出现在树的第 3 层，宽度为 2 (5,3)。\\n</pre>\\n\\n<p><strong>示例&nbsp;3:</strong></p>\\n\\n<pre>\\n<strong>输入:</strong> \\n\\n          1\\n         / \\\\\\n        3   2 \\n       /        \\n      5      \\n\\n<strong>输出:</strong> 2\\n<strong>解释:</strong> 最大值出现在树的第 2 层，宽度为 2 (3,2)。\\n</pre>\\n\\n<p><strong>示例 4:</strong></p>\\n\\n<pre>\\n<strong>输入:</strong> \\n\\n          1\\n         / \\\\\\n        3   2\\n       /     \\\\  \\n      5       9 \\n     /         \\\\\\n    6           7\\n<strong>输出:</strong> 8\\n<strong>解释:</strong> 最大值出现在树的第 4 层，宽度为 8 (6,null,null,null,null,null,null,7)。\\n</pre>\\n\\n<p><strong>注意:</strong> 答案在32位有符号整数的表示范围内。</p>\\n","title":"662. 二叉树最大宽度","relatedTags":["树","深度优先搜索","广度优先搜索","二叉树"],"difficult":"Middle","lang":["javascript"],"uniqueID":"662","slug":"662-Maximum-Width-of-Binary-Tree"}')}}]);