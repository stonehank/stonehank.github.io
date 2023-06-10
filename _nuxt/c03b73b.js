(window.webpackJsonp=window.webpackJsonp||[]).push([[1352],{2150:function(n){n.exports=JSON.parse('{"code":["<pre class=\\"hljs\\"><code><span class=\\"hljs-comment\\">/**\\n * Definition for a binary tree node.\\n * function TreeNode(val) {\\n *     this.val = val;\\n *     this.left = this.right = null;\\n * }\\n */</span>\\n<span class=\\"hljs-comment\\">/**\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{TreeNode}</span> <span class=\\"hljs-variable\\">root</span></span>\\n * <span class=\\"hljs-doctag\\">@return <span class=\\"hljs-type\\">{number}</span></span>\\n */</span>\\n<span class=\\"hljs-keyword\\">var</span> distributeCoins = <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span>(<span class=\\"hljs-params\\">root</span>) </span>{\\n  <span class=\\"hljs-keyword\\">if</span>(!root)<span class=\\"hljs-keyword\\">return</span> <span class=\\"hljs-number\\">0</span>\\n  <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span> <span class=\\"hljs-title\\">nodeNeed</span>(<span class=\\"hljs-params\\">node</span>)</span>{\\n    <span class=\\"hljs-keyword\\">if</span>(!node)<span class=\\"hljs-keyword\\">return</span> <span class=\\"hljs-number\\">0</span>\\n    <span class=\\"hljs-keyword\\">let</span> curCoins=<span class=\\"hljs-number\\">0</span>,curNodes=<span class=\\"hljs-number\\">0</span>\\n    dfs(node)\\n    <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span> <span class=\\"hljs-title\\">dfs</span>(<span class=\\"hljs-params\\">node</span>)</span>{\\n      curCoins+=node.val\\n      curNodes++\\n      <span class=\\"hljs-keyword\\">if</span>(node.left)dfs(node.left)\\n      <span class=\\"hljs-keyword\\">if</span>(node.right)dfs(node.right)\\n    }\\n    <span class=\\"hljs-keyword\\">return</span> curNodes-curCoins\\n  }\\n  <span class=\\"hljs-keyword\\">let</span> leftNeed=nodeNeed(root.left),\\n      rightNeed=nodeNeed(root.right)\\n  \\n  <span class=\\"hljs-keyword\\">return</span> <span class=\\"hljs-built_in\\">Math</span>.abs(leftNeed)+<span class=\\"hljs-built_in\\">Math</span>.abs(rightNeed)+distributeCoins(root.left)+distributeCoins(root.right)\\n};\\n</code></pre>\\n"],"querySlug":"distribute-coins-in-binary-tree","created_at":"2019-01-20","timeArr":[2019,0,20,10,52,41,0],"hasThinking":false,"content":"<p>给定一个有 <code>N</code> 个结点的二叉树的根结点 <code>root</code>，树中的每个结点上都对应有 <code>node.val</code> 枚硬币，并且总共有 <code>N</code> 枚硬币。</p>\\n\\n<p>在一次移动中，我们可以选择两个相邻的结点，然后将一枚硬币从其中一个结点移动到另一个结点。(移动可以是从父结点到子结点，或者从子结点移动到父结点。)。</p>\\n\\n<p>返回使每个结点上只有一枚硬币所需的移动次数。</p>\\n\\n<p>&nbsp;</p>\\n\\n<p><strong>示例 1：</strong></p>\\n\\n<p><strong><img alt=\\"\\" src=\\"https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2019/01/19/tree1.png\\" style=\\"height: 142px; width: 150px;\\"></strong></p>\\n\\n<pre><strong>输入：</strong>[3,0,0]\\n<strong>输出：</strong>2\\n<strong>解释：</strong>从树的根结点开始，我们将一枚硬币移到它的左子结点上，一枚硬币移到它的右子结点上。\\n</pre>\\n\\n<p><strong>示例 2：</strong></p>\\n\\n<p><strong><img alt=\\"\\" src=\\"https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2019/01/19/tree2.png\\" style=\\"height: 142px; width: 150px;\\"></strong></p>\\n\\n<pre><strong>输入：</strong>[0,3,0]\\n<strong>输出：</strong>3\\n<strong>解释：</strong>从根结点的左子结点开始，我们将两枚硬币移到根结点上 [移动两次]。然后，我们把一枚硬币从根结点移到右子结点上。\\n</pre>\\n\\n<p><strong>示例 3：</strong></p>\\n\\n<p><strong><img alt=\\"\\" src=\\"https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2019/01/19/tree3.png\\" style=\\"height: 142px; width: 150px;\\"></strong></p>\\n\\n<pre><strong>输入：</strong>[1,0,2]\\n<strong>输出：</strong>2\\n</pre>\\n\\n<p><strong>示例 4：</strong></p>\\n\\n<p><strong><img alt=\\"\\" src=\\"https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2019/01/19/tree4.png\\" style=\\"height: 156px; width: 155px;\\"></strong></p>\\n\\n<pre><strong>输入：</strong>[1,0,0,null,3]\\n<strong>输出：</strong>4\\n</pre>\\n\\n<p>&nbsp;</p>\\n\\n<p><strong>提示：</strong></p>\\n\\n<ol>\\n\\t<li><code>1&lt;= N &lt;= 100</code></li>\\n\\t<li><code>0 &lt;= node.val &lt;= N</code></li>\\n</ol>\\n","title":"979. 在二叉树中分配硬币","relatedTags":["树","深度优先搜索","二叉树"],"difficult":"Middle","lang":["javascript"],"uniqueID":"979","slug":"979-Distribute-Coins-in-Binary-Tree"}')}}]);