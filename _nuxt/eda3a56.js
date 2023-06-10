(window.webpackJsonp=window.webpackJsonp||[]).push([[1048],{1846:function(n){n.exports=JSON.parse('{"code":["<pre class=\\"hljs\\"><code><span class=\\"hljs-comment\\">/**\\n * Definition for a binary tree node.\\n * function TreeNode(val) {\\n *     this.val = val;\\n *     this.left = this.right = null;\\n * }\\n */</span>\\n<span class=\\"hljs-comment\\">/**\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{TreeNode}</span> <span class=\\"hljs-variable\\">root</span></span>\\n * <span class=\\"hljs-doctag\\">@return <span class=\\"hljs-type\\">{number}</span></span>\\n */</span>\\n<span class=\\"hljs-keyword\\">var</span> longestUnivaluePath = <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span>(<span class=\\"hljs-params\\">root</span>) </span>{\\n  <span class=\\"hljs-comment\\">// if(!root)return 0</span>\\n  <span class=\\"hljs-keyword\\">let</span> maxLen=<span class=\\"hljs-number\\">0</span>\\n  <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span> <span class=\\"hljs-title\\">dfs</span>(<span class=\\"hljs-params\\">root</span>)</span>{\\n    <span class=\\"hljs-keyword\\">if</span>(!root)<span class=\\"hljs-keyword\\">return</span> <span class=\\"hljs-number\\">0</span>\\n    <span class=\\"hljs-keyword\\">let</span> leftL=dfs(root.left),\\n        rightL=dfs(root.right)\\n    <span class=\\"hljs-keyword\\">let</span> l=<span class=\\"hljs-number\\">0</span>,r=<span class=\\"hljs-number\\">0</span>\\n    <span class=\\"hljs-keyword\\">let</span> val=root.val\\n    <span class=\\"hljs-keyword\\">if</span>(root.left &amp;&amp; root.left.val===val)l=leftL+<span class=\\"hljs-number\\">1</span>\\n    <span class=\\"hljs-keyword\\">if</span>(root.right &amp;&amp; root.right.val===val)r=rightL+<span class=\\"hljs-number\\">1</span>\\n    maxLen=<span class=\\"hljs-built_in\\">Math</span>.max(maxLen,l+r)\\n    <span class=\\"hljs-keyword\\">return</span> <span class=\\"hljs-built_in\\">Math</span>.max(l,r)\\n  }\\n  dfs(root)\\n  <span class=\\"hljs-keyword\\">return</span> maxLen\\n};\\n</code></pre>\\n"],"querySlug":"longest-univalue-path","created_at":"2019-03-19","timeArr":[2019,2,19,23,14,11,0],"hasThinking":false,"content":"<p>给定一个二叉树，找到最长的路径，这个路径中的每个节点具有相同值。 这条路径可以经过也可以不经过根节点。</p>\\n\\n<p><strong>注意</strong>：两个节点之间的路径长度由它们之间的边数表示。</p>\\n\\n<p><strong>示例 1:</strong></p>\\n\\n<p>输入:</p>\\n\\n<pre>\\n              5\\n             / \\\\\\n            4   5\\n           / \\\\   \\\\\\n          1   1   5\\n</pre>\\n\\n<p>输出:</p>\\n\\n<pre>\\n2\\n</pre>\\n\\n<p><strong>示例 2:</strong></p>\\n\\n<p>输入:</p>\\n\\n<pre>\\n              1\\n             / \\\\\\n            4   5\\n           / \\\\   \\\\\\n          4   4   5\\n</pre>\\n\\n<p>输出:</p>\\n\\n<pre>\\n2\\n</pre>\\n\\n<p><strong>注意:</strong> 给定的二叉树不超过10000个结点。&nbsp;树的高度不超过1000。</p>\\n","title":"687. 最长同值路径","relatedTags":["树","深度优先搜索","二叉树"],"difficult":"Middle","lang":["javascript"],"uniqueID":"687","slug":"687-Longest-Univalue-Path"}')}}]);