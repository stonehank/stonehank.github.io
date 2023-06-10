(window.webpackJsonp=window.webpackJsonp||[]).push([[694],{1492:function(n){n.exports=JSON.parse('{"code":["<pre class=\\"hljs\\"><code><span class=\\"hljs-comment\\">/**\\n * Definition for a binary tree node.\\n * function TreeNode(val) {\\n *     this.val = val;\\n *     this.left = this.right = null;\\n * }\\n */</span>\\n<span class=\\"hljs-comment\\">/**\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{TreeNode}</span> <span class=\\"hljs-variable\\">root</span></span>\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{TreeNode}</span> <span class=\\"hljs-variable\\">p</span></span>\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{TreeNode}</span> <span class=\\"hljs-variable\\">q</span></span>\\n * <span class=\\"hljs-doctag\\">@return <span class=\\"hljs-type\\">{TreeNode}</span></span>\\n */</span>\\n<span class=\\"hljs-keyword\\">var</span> lowestCommonAncestor = <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span>(<span class=\\"hljs-params\\">root, p, q</span>) </span>{\\n  <span class=\\"hljs-keyword\\">if</span>(!root)<span class=\\"hljs-keyword\\">return</span> <span class=\\"hljs-literal\\">null</span>\\n  <span class=\\"hljs-keyword\\">if</span>(root.val===p.val)<span class=\\"hljs-keyword\\">return</span> p\\n  <span class=\\"hljs-keyword\\">if</span>(root.val===q.val)<span class=\\"hljs-keyword\\">return</span> q\\n  <span class=\\"hljs-keyword\\">let</span> anc1=lowestCommonAncestor(root.left,p,q),\\n      anc2=lowestCommonAncestor(root.right,p,q)\\n  <span class=\\"hljs-keyword\\">if</span>(anc1!=<span class=\\"hljs-literal\\">null</span> &amp;&amp; anc2!=<span class=\\"hljs-literal\\">null</span>)<span class=\\"hljs-keyword\\">return</span> root\\n  <span class=\\"hljs-keyword\\">if</span>(anc1==<span class=\\"hljs-literal\\">null</span>)<span class=\\"hljs-keyword\\">return</span> anc2\\n  <span class=\\"hljs-keyword\\">if</span>(anc2==<span class=\\"hljs-literal\\">null</span>)<span class=\\"hljs-keyword\\">return</span> anc1   \\n};\\n</code></pre>\\n"],"querySlug":"lowest-common-ancestor-of-a-binary-tree","created_at":"2019-03-18","timeArr":[2019,2,18,21,17,25,0],"hasThinking":false,"content":"<p>给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。</p>\\n\\n<p><a href=\\"https://baike.baidu.com/item/%E6%9C%80%E8%BF%91%E5%85%AC%E5%85%B1%E7%A5%96%E5%85%88/8918834?fr=aladdin\\" target=\\"_blank\\">百度百科</a>中最近公共祖先的定义为：“对于有根树 T 的两个节点 p、q，最近公共祖先表示为一个节点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（<strong>一个节点也可以是它自己的祖先</strong>）。”</p>\\n\\n<p> </p>\\n\\n<p><strong>示例 1：</strong></p>\\n<img alt=\\"\\" src=\\"https://assets.leetcode.com/uploads/2018/12/14/binarytree.png\\" style=\\"width: 200px; height: 190px;\\" />\\n<pre>\\n<strong>输入：</strong>root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1\\n<strong>输出：</strong>3\\n<strong>解释：</strong>节点 <code>5 </code>和节点 <code>1 </code>的最近公共祖先是节点 <code>3 。</code>\\n</pre>\\n\\n<p><strong>示例 2：</strong></p>\\n<img alt=\\"\\" src=\\"https://assets.leetcode.com/uploads/2018/12/14/binarytree.png\\" style=\\"width: 200px; height: 190px;\\" />\\n<pre>\\n<strong>输入：</strong>root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4\\n<strong>输出：</strong>5\\n<strong>解释：</strong>节点 <code>5 </code>和节点 <code>4 </code>的最近公共祖先是节点 <code>5 。</code>因为根据定义最近公共祖先节点可以为节点本身。\\n</pre>\\n\\n<p><strong>示例 3：</strong></p>\\n\\n<pre>\\n<strong>输入：</strong>root = [1,2], p = 1, q = 2\\n<strong>输出：</strong>1\\n</pre>\\n\\n<p> </p>\\n\\n<p><strong>提示：</strong></p>\\n\\n<ul>\\n\\t<li>树中节点数目在范围 <code>[2, 10<sup>5</sup>]</code> 内。</li>\\n\\t<li><code>-10<sup>9</sup> <= Node.val <= 10<sup>9</sup></code></li>\\n\\t<li>所有 <code>Node.val</code> <code>互不相同</code> 。</li>\\n\\t<li><code>p != q</code></li>\\n\\t<li><code>p</code> 和 <code>q</code> 均存在于给定的二叉树中。</li>\\n</ul>\\n","title":"236. 二叉树的最近公共祖先","relatedTags":["树","深度优先搜索","二叉树"],"difficult":"Middle","lang":["javascript"],"uniqueID":"236","slug":"236-Lowest-Common-Ancestor-of-a-Binary-Tree"}')}}]);