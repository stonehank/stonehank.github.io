(window.webpackJsonp=window.webpackJsonp||[]).push([[1234],{2032:function(n){n.exports=JSON.parse('{"code":["<pre class=\\"hljs\\"><code><span class=\\"hljs-comment\\">/**\\n * Definition for a binary tree node.\\n * function TreeNode(val) {\\n *     this.val = val;\\n *     this.left = this.right = null;\\n * }\\n */</span>\\n<span class=\\"hljs-comment\\">/**\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{TreeNode}</span> <span class=\\"hljs-variable\\">root1</span></span>\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{TreeNode}</span> <span class=\\"hljs-variable\\">root2</span></span>\\n * <span class=\\"hljs-doctag\\">@return <span class=\\"hljs-type\\">{boolean}</span></span>\\n */</span>\\n<span class=\\"hljs-keyword\\">var</span> leafSimilar = <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span>(<span class=\\"hljs-params\\">root1, root2</span>) </span>{\\n  <span class=\\"hljs-keyword\\">let</span> leaf1=getLeaf(root1),\\n      leaf2=getLeaf(root2)\\n  <span class=\\"hljs-keyword\\">return</span> leaf1.toString()===leaf2.toString()\\n  <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span> <span class=\\"hljs-title\\">getLeaf</span>(<span class=\\"hljs-params\\">root</span>)</span>{\\n    <span class=\\"hljs-keyword\\">if</span>(!root)<span class=\\"hljs-keyword\\">return</span> []\\n    <span class=\\"hljs-keyword\\">let</span> res=[]\\n    <span class=\\"hljs-keyword\\">if</span>(root.left)res=res.concat(getLeaf(root.left))\\n    <span class=\\"hljs-keyword\\">if</span>(root.right)res=res.concat(getLeaf(root.right))\\n    <span class=\\"hljs-keyword\\">if</span>(!root.left &amp;&amp; !root.right){\\n      res.push(root.val)\\n    }\\n    <span class=\\"hljs-keyword\\">return</span> res\\n  }\\n};\\n</code></pre>\\n"],"querySlug":"leaf-similar-trees","created_at":"2019-03-20","timeArr":[2019,2,20,18,51,30,0],"hasThinking":false,"content":"<p>请考虑一棵二叉树上所有的叶子，这些叶子的值按从左到右的顺序排列形成一个 <strong>叶值序列 </strong>。</p>\\n\\n<p><img alt=\\"\\" src=\\"https://s3-lc-upload.s3.amazonaws.com/uploads/2018/07/16/tree.png\\" style=\\"height: 240px; width: 300px;\\" /></p>\\n\\n<p>举个例子，如上图所示，给定一棵叶值序列为 <code>(6, 7, 4, 9, 8)</code> 的树。</p>\\n\\n<p>如果有两棵二叉树的叶值序列是相同，那么我们就认为它们是 <em>叶相似 </em>的。</p>\\n\\n<p>如果给定的两个根结点分别为 <code>root1</code> 和 <code>root2</code> 的树是叶相似的，则返回 <code>true</code>；否则返回 <code>false</code> 。</p>\\n\\n<p> </p>\\n\\n<p><strong>示例 1：</strong></p>\\n\\n<p><img alt=\\"\\" src=\\"https://assets.leetcode.com/uploads/2020/09/03/leaf-similar-1.jpg\\" style=\\"height: 297px; width: 750px;\\" /></p>\\n\\n<pre>\\n<strong>输入：</strong>root1 = [3,5,1,6,2,9,8,null,null,7,4], root2 = [3,5,1,6,7,4,2,null,null,null,null,null,null,9,8]\\n<strong>输出：</strong>true\\n</pre>\\n\\n<p><strong>示例 2：</strong></p>\\n\\n<pre>\\n<strong>输入：</strong>root1 = [1], root2 = [1]\\n<strong>输出：</strong>true\\n</pre>\\n\\n<p><strong>示例 3：</strong></p>\\n\\n<pre>\\n<strong>输入：</strong>root1 = [1], root2 = [2]\\n<strong>输出：</strong>false\\n</pre>\\n\\n<p><strong>示例 4：</strong></p>\\n\\n<pre>\\n<strong>输入：</strong>root1 = [1,2], root2 = [2,2]\\n<strong>输出：</strong>true\\n</pre>\\n\\n<p><strong>示例 5：</strong></p>\\n\\n<p><img alt=\\"\\" src=\\"https://assets.leetcode.com/uploads/2020/09/03/leaf-similar-2.jpg\\" style=\\"height: 165px; width: 450px;\\" /></p>\\n\\n<pre>\\n<strong>输入：</strong>root1 = [1,2,3], root2 = [1,3,2]\\n<strong>输出：</strong>false\\n</pre>\\n\\n<p> </p>\\n\\n<p><strong>提示：</strong></p>\\n\\n<ul>\\n\\t<li>给定的两棵树可能会有 <code>1</code> 到 <code>200</code> 个结点。</li>\\n\\t<li>给定的两棵树上的值介于 <code>0</code> 到 <code>200</code> 之间。</li>\\n</ul>\\n","title":"872. 叶子相似的树","relatedTags":["树","深度优先搜索","二叉树"],"difficult":"Easy","lang":["javascript"],"uniqueID":"872","slug":"872-Leaf-Similar-Trees"}')}}]);