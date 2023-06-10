(window.webpackJsonp=window.webpackJsonp||[]).push([[1361],{2159:function(n){n.exports=JSON.parse('{"code":["<pre class=\\"hljs\\"><code><span class=\\"hljs-comment\\">/**\\n * Definition for a binary tree node.\\n * function TreeNode(val) {\\n *     this.val = val;\\n *     this.left = this.right = null;\\n * }\\n */</span>\\n<span class=\\"hljs-comment\\">/**\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{TreeNode}</span> <span class=\\"hljs-variable\\">root</span></span>\\n * <span class=\\"hljs-doctag\\">@return <span class=\\"hljs-type\\">{number[][]}</span></span>\\n */</span>\\n<span class=\\"hljs-keyword\\">var</span> verticalTraversal = <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span>(<span class=\\"hljs-params\\">root</span>) </span>{\\n  <span class=\\"hljs-keyword\\">if</span>(!root)<span class=\\"hljs-keyword\\">return</span> []\\n  <span class=\\"hljs-keyword\\">let</span> aux=[]\\n  <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span> <span class=\\"hljs-title\\">dfs</span>(<span class=\\"hljs-params\\">root,x,y</span>)</span>{\\n    root.x=x\\n    root.y=y\\n    aux.push([root.val,x,y])\\n    <span class=\\"hljs-keyword\\">if</span>(root.left)dfs(root.left,x<span class=\\"hljs-number\\">-1</span>,y<span class=\\"hljs-number\\">-1</span>)\\n    <span class=\\"hljs-keyword\\">if</span>(root.right)dfs(root.right,x+<span class=\\"hljs-number\\">1</span>,y<span class=\\"hljs-number\\">-1</span>)\\n  }\\n  dfs(root,<span class=\\"hljs-number\\">0</span>,<span class=\\"hljs-number\\">0</span>)\\n  <span class=\\"hljs-comment\\">// console.log(aux)</span>\\n  aux.sort(<span class=\\"hljs-function\\">(<span class=\\"hljs-params\\">a,b</span>)=&gt;</span>{\\n    <span class=\\"hljs-keyword\\">if</span>(a[<span class=\\"hljs-number\\">1</span>]&lt;b[<span class=\\"hljs-number\\">1</span>])<span class=\\"hljs-keyword\\">return</span> <span class=\\"hljs-number\\">-1</span>\\n    <span class=\\"hljs-keyword\\">else</span> <span class=\\"hljs-keyword\\">if</span>(a[<span class=\\"hljs-number\\">1</span>]&gt;b[<span class=\\"hljs-number\\">1</span>])<span class=\\"hljs-keyword\\">return</span> <span class=\\"hljs-number\\">1</span>\\n    <span class=\\"hljs-keyword\\">else</span>{\\n      <span class=\\"hljs-keyword\\">if</span>(a[<span class=\\"hljs-number\\">2</span>]&lt;b[<span class=\\"hljs-number\\">2</span>])<span class=\\"hljs-keyword\\">return</span> <span class=\\"hljs-number\\">1</span>\\n      <span class=\\"hljs-keyword\\">else</span> <span class=\\"hljs-keyword\\">if</span>(a[<span class=\\"hljs-number\\">2</span>]&gt;b[<span class=\\"hljs-number\\">2</span>])<span class=\\"hljs-keyword\\">return</span> <span class=\\"hljs-number\\">-1</span>\\n      <span class=\\"hljs-keyword\\">else</span>{\\n        <span class=\\"hljs-keyword\\">return</span> a[<span class=\\"hljs-number\\">0</span>]-b[<span class=\\"hljs-number\\">0</span>]\\n      }\\n    }\\n  })\\n  <span class=\\"hljs-comment\\">// console.log(aux)</span>\\n  <span class=\\"hljs-keyword\\">let</span> res=[]\\n  <span class=\\"hljs-keyword\\">let</span> temp=[aux[<span class=\\"hljs-number\\">0</span>][<span class=\\"hljs-number\\">0</span>]]\\n  <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> i=<span class=\\"hljs-number\\">1</span>;i&lt;aux.length;i++){\\n    <span class=\\"hljs-keyword\\">let</span> cur=aux[i],\\n        pre=aux[i<span class=\\"hljs-number\\">-1</span>]\\n    <span class=\\"hljs-comment\\">// console.log(cur,pre)</span>\\n    <span class=\\"hljs-keyword\\">if</span>(cur[<span class=\\"hljs-number\\">1</span>]===pre[<span class=\\"hljs-number\\">1</span>]){\\n      temp.push(cur[<span class=\\"hljs-number\\">0</span>])\\n    }<span class=\\"hljs-keyword\\">else</span>{\\n      res.push(temp.slice())\\n      temp=[cur[<span class=\\"hljs-number\\">0</span>]]\\n    }\\n  }\\n  <span class=\\"hljs-keyword\\">if</span>(temp.length&gt;<span class=\\"hljs-number\\">0</span>)res.push(temp)\\n  <span class=\\"hljs-keyword\\">return</span> res\\n};\\n</code></pre>\\n"],"querySlug":"vertical-order-traversal-of-a-binary-tree","created_at":"2019-02-03","timeArr":[2019,1,3,11,10,33,0],"hasThinking":false,"content":"<p>给你二叉树的根结点 <code>root</code> ，请你设计算法计算二叉树的<em> </em><strong>垂序遍历</strong> 序列。</p>\\n\\n<p>对位于 <code>(row, col)</code> 的每个结点而言，其左右子结点分别位于 <code>(row + 1, col - 1)</code> 和 <code>(row + 1, col + 1)</code> 。树的根结点位于 <code>(0, 0)</code> 。</p>\\n\\n<p>二叉树的 <strong>垂序遍历</strong> 从最左边的列开始直到最右边的列结束，按列索引每一列上的所有结点，形成一个按出现位置从上到下排序的有序列表。如果同行同列上有多个结点，则按结点的值从小到大进行排序。</p>\\n\\n<p>返回二叉树的 <strong>垂序遍历</strong> 序列。</p>\\n\\n<p> </p>\\n\\n<p><strong>示例 1：</strong></p>\\n<img alt=\\"\\" src=\\"https://assets.leetcode.com/uploads/2021/01/29/vtree1.jpg\\" style=\\"width: 431px; height: 304px;\\" />\\n<pre>\\n<strong>输入：</strong>root = [3,9,20,null,null,15,7]\\n<strong>输出：</strong>[[9],[3,15],[20],[7]]\\n<strong>解释：</strong>\\n列 -1 ：只有结点 9 在此列中。\\n列  0 ：只有结点 3 和 15 在此列中，按从上到下顺序。\\n列  1 ：只有结点 20 在此列中。\\n列  2 ：只有结点 7 在此列中。</pre>\\n\\n<p><strong>示例 2：</strong></p>\\n<img alt=\\"\\" src=\\"https://assets.leetcode.com/uploads/2021/01/29/vtree2.jpg\\" style=\\"width: 512px; height: 304px;\\" />\\n<pre>\\n<strong>输入：</strong>root = [1,2,3,4,5,6,7]\\n<strong>输出：</strong>[[4],[2],[1,5,6],[3],[7]]\\n<strong>解释：</strong>\\n列 -2 ：只有结点 4 在此列中。\\n列 -1 ：只有结点 2 在此列中。\\n列  0 ：结点 1 、5 和 6 都在此列中。\\n          1 在上面，所以它出现在前面。\\n          5 和 6 位置都是 (2, 0) ，所以按值从小到大排序，5 在 6 的前面。\\n列  1 ：只有结点 3 在此列中。\\n列  2 ：只有结点 7 在此列中。\\n</pre>\\n\\n<p><strong>示例 3：</strong></p>\\n<img alt=\\"\\" src=\\"https://assets.leetcode.com/uploads/2021/01/29/vtree3.jpg\\" style=\\"width: 512px; height: 304px;\\" />\\n<pre>\\n<strong>输入：</strong>root = [1,2,3,4,6,5,7]\\n<strong>输出：</strong>[[4],[2],[1,5,6],[3],[7]]\\n<strong>解释：</strong>\\n这个示例实际上与示例 2 完全相同，只是结点 5 和 6 在树中的位置发生了交换。\\n因为 5 和 6 的位置仍然相同，所以答案保持不变，仍然按值从小到大排序。</pre>\\n\\n<p> </p>\\n\\n<p><strong>提示：</strong></p>\\n\\n<ul>\\n\\t<li>树中结点数目总数在范围 <code>[1, 1000]</code> 内</li>\\n\\t<li><code>0 <= Node.val <= 1000</code></li>\\n</ul>\\n","title":"987. 二叉树的垂序遍历","relatedTags":["树","深度优先搜索","广度优先搜索","哈希表","二叉树"],"difficult":"Hard","lang":["javascript"],"uniqueID":"987","slug":"987-Vertical-Order-Traversal-of-a-Binary-Tree"}')}}]);