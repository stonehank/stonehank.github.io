(window.webpackJsonp=window.webpackJsonp||[]).push([[973],{1771:function(n){n.exports=JSON.parse('{"code":["<pre class=\\"hljs\\"><code><span class=\\"hljs-comment\\">/**\\n * // Definition for a Node.\\n * function Node(val,children) {\\n *    this.val = val;\\n *    this.children = children;\\n * };\\n */</span>\\n<span class=\\"hljs-comment\\">/**\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{Node}</span> <span class=\\"hljs-variable\\">root</span></span>\\n * <span class=\\"hljs-doctag\\">@return <span class=\\"hljs-type\\">{number[]}</span></span>\\n */</span>\\n<span class=\\"hljs-keyword\\">var</span> preorder = <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span>(<span class=\\"hljs-params\\">root</span>) </span>{\\n  <span class=\\"hljs-keyword\\">if</span>(!root)<span class=\\"hljs-keyword\\">return</span> []\\n  <span class=\\"hljs-keyword\\">let</span> stack=[root],res=[]\\n  <span class=\\"hljs-keyword\\">while</span>(stack.length&gt;<span class=\\"hljs-number\\">0</span> ){\\n    <span class=\\"hljs-keyword\\">let</span> node=stack.pop()\\n    res.push(node.val)\\n    <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> i=node.children.length<span class=\\"hljs-number\\">-1</span>;i&gt;=<span class=\\"hljs-number\\">0</span>;i--){\\n      stack.push(node.children[i])\\n    }\\n  }\\n  <span class=\\"hljs-keyword\\">return</span> res\\n};\\n</code></pre>\\n"],"querySlug":"n-ary-tree-preorder-traversal","created_at":"2019-03-20","timeArr":[2019,2,20,10,55,0,0],"hasThinking":false,"content":"<p>给定一个 N 叉树，返回其节点值的<strong> 前序遍历</strong> 。</p>\\n\\n<p>N 叉树 在输入中按层序遍历进行序列化表示，每组子节点由空值 <code>null</code> 分隔（请参见示例）。</p>\\n\\n<div class=\\"original__bRMd\\">\\n<div>\\n<p> </p>\\n\\n<p><strong>进阶：</strong></p>\\n\\n<p>递归法很简单，你可以使用迭代法完成此题吗?</p>\\n\\n<p> </p>\\n\\n<p><strong>示例 1：</strong></p>\\n\\n<p><img src=\\"https://assets.leetcode.com/uploads/2018/10/12/narytreeexample.png\\" style=\\"width: 100%; max-width: 300px;\\" /></p>\\n\\n<pre>\\n<strong>输入：</strong>root = [1,null,3,2,4,null,5,6]\\n<strong>输出：</strong>[1,3,5,6,2,4]\\n</pre>\\n<strong>示例 2：</strong>\\n\\n<p><img alt=\\"\\" src=\\"https://assets.leetcode.com/uploads/2019/11/08/sample_4_964.png\\" style=\\"width: 296px; height: 241px;\\" /></p>\\n\\n<pre>\\n<strong>输入：</strong>root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]\\n<strong>输出：</strong>[1,2,3,6,7,11,14,4,8,12,5,9,13,10]\\n</pre>\\n\\n<p> </p>\\n\\n<p><strong>提示：</strong></p>\\n\\n<ul>\\n\\t<li>N 叉树的高度小于或等于 <code>1000</code></li>\\n\\t<li>节点总数在范围 <code>[0, 10^4]</code> 内</li>\\n</ul>\\n</div>\\n</div>\\n","title":"589. N 叉树的前序遍历","relatedTags":["栈","树","深度优先搜索"],"difficult":"Easy","lang":["javascript"],"uniqueID":"589","slug":"589-N-ary-Tree-Preorder-Traversal"}')}}]);