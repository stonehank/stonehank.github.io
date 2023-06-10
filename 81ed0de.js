(window.webpackJsonp=window.webpackJsonp||[]).push([[537],{1335:function(n){n.exports=JSON.parse('{"code":["<pre class=\\"hljs\\"><code><span class=\\"hljs-comment\\">/**\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{number}</span> <span class=\\"hljs-variable\\">n</span></span>\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{number[][]}</span> <span class=\\"hljs-variable\\">edges</span></span>\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{string}</span> <span class=\\"hljs-variable\\">labels</span></span>\\n * <span class=\\"hljs-doctag\\">@return <span class=\\"hljs-type\\">{number[]}</span></span>\\n */</span>\\n\\n<span class=\\"hljs-keyword\\">var</span> countSubTrees = <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span>(<span class=\\"hljs-params\\">n, edges, labels</span>) </span>{\\n    <span class=\\"hljs-keyword\\">let</span> g=<span class=\\"hljs-built_in\\">Array</span>(n).fill().map(<span class=\\"hljs-function\\"><span class=\\"hljs-params\\">()</span>=&gt;</span>[])\\n    <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> [f,t] <span class=\\"hljs-keyword\\">of</span> edges){\\n        g[f].push(t)\\n        g[t].push(f)\\n    }\\n    <span class=\\"hljs-keyword\\">let</span> res=<span class=\\"hljs-built_in\\">Array</span>(n).fill(<span class=\\"hljs-number\\">0</span>)\\n    <span class=\\"hljs-keyword\\">let</span> used={}\\n    used[<span class=\\"hljs-number\\">0</span>]=<span class=\\"hljs-literal\\">true</span>\\n    dfs(<span class=\\"hljs-number\\">0</span>)\\n    <span class=\\"hljs-keyword\\">return</span> res\\n    <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span> <span class=\\"hljs-title\\">dfs</span>(<span class=\\"hljs-params\\">node</span>)</span>{\\n        <span class=\\"hljs-keyword\\">let</span> val=labels[node]\\n        <span class=\\"hljs-keyword\\">let</span> curCount={}\\n        curCount[val]=<span class=\\"hljs-number\\">1</span>\\n        <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> i=<span class=\\"hljs-number\\">0</span>;i&lt;g[node].length;i++){\\n            <span class=\\"hljs-keyword\\">let</span> nxt=g[node][i]\\n            <span class=\\"hljs-keyword\\">if</span>(used[nxt]!=<span class=\\"hljs-literal\\">null</span>)<span class=\\"hljs-keyword\\">continue</span>\\n            used[nxt]=<span class=\\"hljs-literal\\">true</span>\\n            <span class=\\"hljs-keyword\\">let</span> subCount=dfs(g[node][i])\\n            curCount=combine(curCount,subCount)\\n        }\\n        res[node]=curCount[val]\\n        <span class=\\"hljs-keyword\\">return</span> curCount\\n    }\\n    \\n    <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span> <span class=\\"hljs-title\\">combine</span>(<span class=\\"hljs-params\\">obj1,obj2</span>)</span>{\\n        <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> k <span class=\\"hljs-keyword\\">in</span> obj2){\\n            <span class=\\"hljs-keyword\\">if</span>(obj1[k]==<span class=\\"hljs-literal\\">null</span>){\\n                obj1[k]=obj2[k]\\n            }<span class=\\"hljs-keyword\\">else</span>{\\n                obj1[k]+=obj2[k]\\n            }\\n        }\\n        <span class=\\"hljs-keyword\\">return</span> obj1\\n    }\\n};\\n</code></pre>\\n"],"querySlug":"number-of-nodes-in-the-sub-tree-with-the-same-label","created_at":"2020-07-19","timeArr":[2020,6,19,10,55,28,0],"hasThinking":false,"content":"<p>给你一棵树（即，一个连通的无环无向图），这棵树由编号从 <code>0</code>&nbsp; 到 <code>n - 1</code> 的 n 个节点组成，且恰好有 <code>n - 1</code> 条 <code>edges</code> 。树的根节点为节点 <code>0</code> ，树上的每一个节点都有一个标签，也就是字符串 <code>labels</code> 中的一个小写字符（编号为 <code>i</code> 的 节点的标签就是 <code>labels[i]</code> ）</p>\\n\\n<p>边数组 <code>edges</code> 以 <code>edges[i] = [a<sub>i</sub>, b<sub>i</sub>]</code> 的形式给出，该格式表示节点 <code>a<sub>i</sub></code> 和 <code>b<sub>i</sub></code> 之间存在一条边。</p>\\n\\n<p>返回一个大小为 <em><code>n</code></em> 的数组，其中 <code>ans[i]</code> 表示第 <code>i</code> 个节点的子树中与节点 <code>i</code> 标签相同的节点数。</p>\\n\\n<p>树 <code>T</code> 中的子树是由 <code>T</code> 中的某个节点及其所有后代节点组成的树。</p>\\n\\n<p>&nbsp;</p>\\n\\n<p><strong>示例 1：</strong></p>\\n\\n<p><img alt=\\"\\" src=\\"https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2020/07/19/q3e1.jpg\\" style=\\"height: 321px; width: 441px;\\"></p>\\n\\n<pre><strong>输入：</strong>n = 7, edges = [[0,1],[0,2],[1,4],[1,5],[2,3],[2,6]], labels = &quot;abaedcd&quot;\\n<strong>输出：</strong>[2,1,1,1,1,1,1]\\n<strong>解释：</strong>节点 0 的标签为 &#39;a&#39; ，以 &#39;a&#39; 为根节点的子树中，节点 2 的标签也是 &#39;a&#39; ，因此答案为 2 。注意树中的每个节点都是这棵子树的一部分。\\n节点 1 的标签为 &#39;b&#39; ，节点 1 的子树包含节点 1、4 和 5，但是节点 4、5 的标签与节点 1 不同，故而答案为 1（即，该节点本身）。\\n</pre>\\n\\n<p><strong>示例 2：</strong></p>\\n\\n<p><img alt=\\"\\" src=\\"https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2020/07/19/q3e2.jpg\\" style=\\"height: 321px; width: 381px;\\"></p>\\n\\n<pre><strong>输入：</strong>n = 4, edges = [[0,1],[1,2],[0,3]], labels = &quot;bbbb&quot;\\n<strong>输出：</strong>[4,2,1,1]\\n<strong>解释：</strong>节点 2 的子树中只有节点 2 ，所以答案为 1 。\\n节点 3 的子树中只有节点 3 ，所以答案为 1 。\\n节点 1 的子树中包含节点 1 和 2 ，标签都是 &#39;b&#39; ，因此答案为 2 。\\n节点 0 的子树中包含节点 0、1、2 和 3，标签都是 &#39;b&#39;，因此答案为 4 。\\n</pre>\\n\\n<p><strong>示例 3：</strong></p>\\n\\n<p><img alt=\\"\\" src=\\"https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2020/07/19/q3e3.jpg\\" style=\\"height: 321px; width: 381px;\\"></p>\\n\\n<pre><strong>输入：</strong>n = 5, edges = [[0,1],[0,2],[1,3],[0,4]], labels = &quot;aabab&quot;\\n<strong>输出：</strong>[3,2,1,1,1]\\n</pre>\\n\\n<p><strong>示例 4：</strong></p>\\n\\n<pre><strong>输入：</strong>n = 6, edges = [[0,1],[0,2],[1,3],[3,4],[4,5]], labels = &quot;cbabaa&quot;\\n<strong>输出：</strong>[1,2,1,1,2,1]\\n</pre>\\n\\n<p><strong>示例 5：</strong></p>\\n\\n<pre><strong>输入：</strong>n = 7, edges = [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6]], labels = &quot;aaabaaa&quot;\\n<strong>输出：</strong>[6,5,4,1,3,2,1]\\n</pre>\\n\\n<p>&nbsp;</p>\\n\\n<p><strong>提示：</strong></p>\\n\\n<ul>\\n\\t<li><code>1 &lt;= n &lt;= 10^5</code></li>\\n\\t<li><code>edges.length == n - 1</code></li>\\n\\t<li><code>edges[i].length == 2</code></li>\\n\\t<li><code>0 &lt;= a<sub>i</sub>,&nbsp;b<sub>i</sub> &lt; n</code></li>\\n\\t<li><code>a<sub>i</sub> !=&nbsp;b<sub>i</sub></code></li>\\n\\t<li><code>labels.length == n</code></li>\\n\\t<li><code>labels</code> 仅由小写英文字母组成</li>\\n</ul>\\n","title":"1519. 子树中标签相同的节点数","relatedTags":["树","深度优先搜索","广度优先搜索"],"difficult":"Middle","lang":["javascript"],"uniqueID":"1519","slug":"1519-Number-of-Nodes-in-the-Sub-Tree-With-the-Same-Label"}')}}]);