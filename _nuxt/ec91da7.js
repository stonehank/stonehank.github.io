(window.webpackJsonp=window.webpackJsonp||[]).push([[1016],{1814:function(n){n.exports=JSON.parse('{"code":["<pre class=\\"hljs\\"><code><span class=\\"hljs-comment\\">/**\\n * Definition for a binary tree node.\\n * function TreeNode(val) {\\n *     this.val = val;\\n *     this.left = this.right = null;\\n * }\\n */</span>\\n<span class=\\"hljs-comment\\">/**\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{TreeNode}</span> <span class=\\"hljs-variable\\">root</span></span>\\n * <span class=\\"hljs-doctag\\">@return <span class=\\"hljs-type\\">{TreeNode[]}</span></span>\\n */</span>\\n<span class=\\"hljs-keyword\\">var</span> findDuplicateSubtrees = <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span>(<span class=\\"hljs-params\\">root</span>) </span>{\\n  <span class=\\"hljs-keyword\\">if</span>(!root)<span class=\\"hljs-keyword\\">return</span> []\\n  <span class=\\"hljs-keyword\\">let</span> hash={},res=[]\\n  <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span> <span class=\\"hljs-title\\">stringify</span>(<span class=\\"hljs-params\\">root</span>)</span>{\\n    <span class=\\"hljs-keyword\\">if</span>(!root)<span class=\\"hljs-keyword\\">return</span> <span class=\\"hljs-string\\">\'#\'</span>\\n    <span class=\\"hljs-keyword\\">let</span> str=root.val+<span class=\\"hljs-string\\">\\"-\\"</span>+stringify(root.left)+<span class=\\"hljs-string\\">\'-\'</span>+stringify(root.right)\\n    <span class=\\"hljs-keyword\\">if</span>(!hash[str])hash[str]=<span class=\\"hljs-number\\">1</span>\\n    <span class=\\"hljs-keyword\\">else</span> hash[str]++\\n    <span class=\\"hljs-keyword\\">if</span>(hash[str]===<span class=\\"hljs-number\\">2</span>)res.push(root)\\n    <span class=\\"hljs-keyword\\">return</span> str\\n  }\\n  stringify(root)\\n  <span class=\\"hljs-keyword\\">return</span> res\\n};\\n</code></pre>\\n"],"querySlug":"find-duplicate-subtrees","created_at":"2019-03-19","timeArr":[2019,2,19,15,29,30,0],"hasThinking":true,"thinking":"<hr>\\n<p>思路：</p>\\n<p>关键是后序遍历，先遍历子树，对子树进行<code>stringify</code>处理</p>\\n<p><code>stringify(父树)=本身的节点+stringify(左子树)+stringify(右子树)</code></p>\\n<p>这样父树就不需要重新再次遍历，复杂度从<code>O(N^2)</code>降低到<code>O(N)</code>。</p>\\n<p>对于每一个节点的<code>stringify</code>，使用<code>hash</code>保存出现的次数，一旦出现2次，即可添加到结果，超过2次和未达到2次都不处理。</p>\\n","content":"<p>给定一棵二叉树，返回所有重复的子树。对于同一类的重复子树，你只需要返回其中任意<strong>一棵</strong>的根结点即可。</p>\\n\\n<p>两棵树重复是指它们具有相同的结构以及相同的结点值。</p>\\n\\n<p><strong>示例 1：</strong></p>\\n\\n<pre>        1\\n       / \\\\\\n      2   3\\n     /   / \\\\\\n    4   2   4\\n       /\\n      4\\n</pre>\\n\\n<p>下面是两个重复的子树：</p>\\n\\n<pre>      2\\n     /\\n    4\\n</pre>\\n\\n<p>和</p>\\n\\n<pre>    4\\n</pre>\\n\\n<p>因此，你需要以列表的形式返回上述重复子树的根结点。</p>\\n","title":"652. 寻找重复的子树","relatedTags":["树","深度优先搜索","广度优先搜索","二叉树"],"difficult":"Middle","lang":["javascript"],"uniqueID":"652","slug":"652-Find-Duplicate-Subtrees"}')}}]);