(window.webpackJsonp=window.webpackJsonp||[]).push([[1364],{2162:function(n){n.exports=JSON.parse('{"code":["<pre class=\\"hljs\\"><code><span class=\\"hljs-comment\\">/**\\n * Definition for a binary tree node.\\n * function TreeNode(val) {\\n *     this.val = val;\\n *     this.left = this.right = null;\\n * }\\n */</span>\\n<span class=\\"hljs-comment\\">/**\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{TreeNode}</span> <span class=\\"hljs-variable\\">root</span></span>\\n * <span class=\\"hljs-doctag\\">@return <span class=\\"hljs-type\\">{void}</span> </span>Do not return anything, modify root in-place instead.\\n */</span>\\n<span class=\\"hljs-keyword\\">var</span> recoverTree = <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span>(<span class=\\"hljs-params\\">root</span>) </span>{\\n  <span class=\\"hljs-comment\\">// O(n)</span>\\n  <span class=\\"hljs-comment\\">// let aux=[]</span>\\n  <span class=\\"hljs-comment\\">// function dfs(root){</span>\\n  <span class=\\"hljs-comment\\">//   if(root.left)dfs(root.left)</span>\\n  <span class=\\"hljs-comment\\">//   aux.push(root)</span>\\n  <span class=\\"hljs-comment\\">//   if(root.right)dfs(root.right)</span>\\n  <span class=\\"hljs-comment\\">// }</span>\\n  <span class=\\"hljs-comment\\">// dfs(root)</span>\\n  <span class=\\"hljs-comment\\">// let s1,s2</span>\\n  <span class=\\"hljs-comment\\">// for(let i=0;i&lt;aux.length-1;i++){</span>\\n  <span class=\\"hljs-comment\\">//   if(aux[i].val&gt;aux[i+1].val){</span>\\n  <span class=\\"hljs-comment\\">//     if(s1==null)s1=aux[i]</span>\\n  <span class=\\"hljs-comment\\">//     if(s1!=null)s2=aux[i+1]</span>\\n  <span class=\\"hljs-comment\\">//   }</span>\\n  <span class=\\"hljs-comment\\">// }</span>\\n  <span class=\\"hljs-comment\\">// let t=s1.val</span>\\n  <span class=\\"hljs-comment\\">// s1.val=s2.val</span>\\n  <span class=\\"hljs-comment\\">// s2.val=t</span>\\n  \\n  <span class=\\"hljs-comment\\">// O(1)</span>\\n  <span class=\\"hljs-keyword\\">let</span> s1=<span class=\\"hljs-literal\\">null</span>,s2=<span class=\\"hljs-literal\\">null</span>,prev=<span class=\\"hljs-literal\\">null</span>\\n  <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span> <span class=\\"hljs-title\\">dfs</span>(<span class=\\"hljs-params\\">root</span>)</span>{\\n    <span class=\\"hljs-keyword\\">if</span>(root.left)dfs(root.left)\\n\\n    \\n    <span class=\\"hljs-keyword\\">if</span>(prev &amp;&amp; root.val&lt;=prev.val){\\n      <span class=\\"hljs-keyword\\">if</span>(!s1)s1=prev\\n      <span class=\\"hljs-keyword\\">if</span>(s1)s2=root\\n    }\\n    prev=root\\n    <span class=\\"hljs-keyword\\">if</span>(root.right)dfs(root.right)\\n  }\\n  dfs(root)\\n  <span class=\\"hljs-keyword\\">let</span> t=s1.val\\n  s1.val=s2.val\\n  s2.val=t\\n};\\n</code></pre>\\n"],"querySlug":"recover-binary-search-tree","created_at":"2019-03-18","timeArr":[2019,2,18,11,37,29,0],"hasThinking":true,"thinking":"<hr>\\n<p>思路：</p>\\n<p>这道题关键就是利用二叉搜索树的中序遍历，找出不符合要求的2个节点。</p>\\n<p>其中<code>O(n)</code>的思路是，使用一个数组保存中序遍历的结果，然后找出错误排序的2个节点，通过交换即可。</p>\\n<pre class=\\"hljs\\"><code><span class=\\"hljs-comment\\">/**\\n * Definition for a binary tree node.\\n * function TreeNode(val) {\\n *     this.val = val;\\n *     this.left = this.right = null;\\n * }\\n */</span>\\n<span class=\\"hljs-comment\\">/**\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{TreeNode}</span> <span class=\\"hljs-variable\\">root</span></span>\\n * <span class=\\"hljs-doctag\\">@return <span class=\\"hljs-type\\">{void}</span> </span>Do not return anything, modify root in-place instead.\\n */</span>\\n<span class=\\"hljs-keyword\\">var</span> recoverTree = <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span>(<span class=\\"hljs-params\\">root</span>) </span>{\\n  <span class=\\"hljs-keyword\\">let</span> aux=[]\\n  <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span> <span class=\\"hljs-title\\">dfs</span>(<span class=\\"hljs-params\\">root</span>)</span>{\\n    <span class=\\"hljs-keyword\\">if</span>(root.left)dfs(root.left)\\n    aux.push(root)\\n    <span class=\\"hljs-keyword\\">if</span>(root.right)dfs(root.right)\\n  }\\n  dfs(root)\\n  <span class=\\"hljs-keyword\\">let</span> s1,s2\\n  <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> i=<span class=\\"hljs-number\\">0</span>;i&lt;aux.length<span class=\\"hljs-number\\">-1</span>;i++){\\n    <span class=\\"hljs-keyword\\">if</span>(aux[i].val&gt;aux[i+<span class=\\"hljs-number\\">1</span>].val){\\n      <span class=\\"hljs-keyword\\">if</span>(s1==<span class=\\"hljs-literal\\">null</span>)s1=aux[i]\\n      <span class=\\"hljs-keyword\\">if</span>(s1!=<span class=\\"hljs-literal\\">null</span>)s2=aux[i+<span class=\\"hljs-number\\">1</span>]\\n    }\\n  }\\n  <span class=\\"hljs-keyword\\">let</span> t=s1.val\\n  s1.val=s2.val\\n  s2.val=t\\n};\\n</code></pre>\\n<p><code>O(1)</code>的思路也差不多，不过不需要使用一个数组来保存，而是3个变量<code>prevNode,s1,s2</code>，其中<code>s1</code>和<code>s2</code>为最终交换的节点。</p>\\n<p><code>prevNode</code>为上一个节点，直接在原树上进行中序遍历，当发现顺序不对时，让<code>s1=prevNode, s2=root</code>，接着遍历，如果还存在顺序\\n不对，只需要更新<code>s2</code>即可。</p>\\n","content":"<p>给你二叉搜索树的根节点 <code>root</code> ，该树中的两个节点被错误地交换。请在不改变其结构的情况下，恢复这棵树。</p>\\n\\n<p><strong>进阶：</strong>使用 O(<em>n</em>) 空间复杂度的解法很容易实现。你能想出一个只使用常数空间的解决方案吗？</p>\\n\\n<p> </p>\\n\\n<p><strong>示例 1：</strong></p>\\n<img alt=\\"\\" src=\\"https://assets.leetcode.com/uploads/2020/10/28/recover1.jpg\\" style=\\"width: 422px; height: 302px;\\" />\\n<pre>\\n<strong>输入：</strong>root = [1,3,null,null,2]\\n<strong>输出：</strong>[3,1,null,null,2]\\n<strong>解释：</strong>3 不能是 1 左孩子，因为 3 > 1 。交换 1 和 3 使二叉搜索树有效。\\n</pre>\\n\\n<p><strong>示例 2：</strong></p>\\n<img alt=\\"\\" src=\\"https://assets.leetcode.com/uploads/2020/10/28/recover2.jpg\\" style=\\"width: 581px; height: 302px;\\" />\\n<pre>\\n<strong>输入：</strong>root = [3,1,4,null,null,2]\\n<strong>输出：</strong>[2,1,4,null,null,3]\\n<strong>解释：</strong>2 不能在 3 的右子树中，因为 2 < 3 。交换 2 和 3 使二叉搜索树有效。</pre>\\n\\n<p> </p>\\n\\n<p><strong>提示：</strong></p>\\n\\n<ul>\\n\\t<li>树上节点的数目在范围 <code>[2, 1000]</code> 内</li>\\n\\t<li><code>-2<sup>31</sup> <= Node.val <= 2<sup>31</sup> - 1</code></li>\\n</ul>\\n","title":"99. 恢复二叉搜索树","relatedTags":["树","深度优先搜索","二叉搜索树","二叉树"],"difficult":"Middle","lang":["javascript"],"uniqueID":"99","slug":"99-Recover-Binary-Search-Tree"}')}}]);