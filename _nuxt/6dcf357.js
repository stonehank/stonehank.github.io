(window.webpackJsonp=window.webpackJsonp||[]).push([[1206],{2004:function(n){n.exports=JSON.parse('{"code":["<pre class=\\"hljs\\"><code><span class=\\"hljs-comment\\">/**\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{number[][]}</span> <span class=\\"hljs-variable\\">graph</span></span>\\n * <span class=\\"hljs-doctag\\">@return <span class=\\"hljs-type\\">{number}</span></span>\\n */</span>\\n<span class=\\"hljs-keyword\\">var</span> shortestPathLength = <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span>(<span class=\\"hljs-params\\">graph</span>) </span>{\\n  <span class=\\"hljs-keyword\\">let</span> N=graph.length\\n  <span class=\\"hljs-keyword\\">let</span> finalState=(<span class=\\"hljs-number\\">1</span>&lt;&lt;N)<span class=\\"hljs-number\\">-1</span>\\n  <span class=\\"hljs-keyword\\">let</span> minStep=<span class=\\"hljs-literal\\">Infinity</span>\\n  <span class=\\"hljs-keyword\\">let</span> dist=<span class=\\"hljs-built_in\\">Array</span>(N).fill().map(<span class=\\"hljs-function\\"><span class=\\"hljs-params\\">()</span>=&gt;</span><span class=\\"hljs-built_in\\">Array</span>(finalState+<span class=\\"hljs-number\\">1</span>).fill(<span class=\\"hljs-literal\\">Infinity</span>))\\n  <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> i=<span class=\\"hljs-number\\">0</span>;i&lt;N;i++){\\n    dist[i][<span class=\\"hljs-number\\">1</span>&lt;&lt;i]=<span class=\\"hljs-number\\">0</span>\\n    minStep=<span class=\\"hljs-built_in\\">Math</span>.min(minStep,bfs([[i,<span class=\\"hljs-number\\">1</span>&lt;&lt;i]]))\\n  }\\n\\n  <span class=\\"hljs-keyword\\">return</span> minStep\\n  <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span> <span class=\\"hljs-title\\">bfs</span>(<span class=\\"hljs-params\\">arr</span>)</span>{\\n    <span class=\\"hljs-keyword\\">while</span>(arr.length&gt;<span class=\\"hljs-number\\">0</span>){\\n      <span class=\\"hljs-keyword\\">let</span> len=arr.length\\n      <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> i=<span class=\\"hljs-number\\">0</span>;i&lt;len;i++){\\n        <span class=\\"hljs-keyword\\">let</span> [v,state]=arr.shift()\\n        <span class=\\"hljs-keyword\\">let</span> curStep=dist[v][state]\\n        <span class=\\"hljs-keyword\\">if</span>(state===finalState)<span class=\\"hljs-keyword\\">return</span> curStep\\n        <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> j=<span class=\\"hljs-number\\">0</span>;j&lt;graph[v].length;j++){\\n          <span class=\\"hljs-keyword\\">let</span> w=graph[v][j],\\n              newState=state | <span class=\\"hljs-number\\">1</span>&lt;&lt;w\\n          <span class=\\"hljs-keyword\\">if</span>(curStep+<span class=\\"hljs-number\\">1</span>&lt;dist[w][newState]){\\n            dist[w][newState]=curStep+<span class=\\"hljs-number\\">1</span>\\n            arr.push([w,newState])\\n          }\\n        }\\n      }\\n    }\\n    <span class=\\"hljs-keyword\\">return</span> <span class=\\"hljs-literal\\">Infinity</span>\\n  }\\n};\\n</code></pre>\\n"],"querySlug":"shortest-path-visiting-all-nodes","created_at":"2019-03-08","timeArr":[2019,2,8,23,18,44,0],"hasThinking":false,"content":"<p>存在一个由 <code>n</code> 个节点组成的无向连通图，图中的节点按从 <code>0</code> 到 <code>n - 1</code> 编号。</p>\\n\\n<p>给你一个数组 <code>graph</code> 表示这个图。其中，<code>graph[i]</code> 是一个列表，由所有与节点 <code>i</code> 直接相连的节点组成。</p>\\n\\n<p>返回能够访问所有节点的最短路径的长度。你可以在任一节点开始和停止，也可以多次重访节点，并且可以重用边。</p>\\n\\n<p>&nbsp;</p>\\n\\n<ol>\\n</ol>\\n\\n<p><strong>示例 1：</strong></p>\\n<img alt=\\"\\" src=\\"https://assets.leetcode.com/uploads/2021/05/12/shortest1-graph.jpg\\" style=\\"width: 222px; height: 183px;\\" />\\n<pre>\\n<strong>输入：</strong>graph = [[1,2,3],[0],[0],[0]]\\n<strong>输出：</strong>4\\n<strong>解释：</strong>一种可能的路径为 [1,0,2,0,3]</pre>\\n\\n<p><strong>示例 2：</strong></p>\\n\\n<p><img alt=\\"\\" src=\\"https://assets.leetcode.com/uploads/2021/05/12/shortest2-graph.jpg\\" style=\\"width: 382px; height: 222px;\\" /></p>\\n\\n<pre>\\n<strong>输入：</strong>graph = [[1],[0,2,4],[1,3,4],[2],[1,2]]\\n<strong>输出：</strong>4\\n<strong>解释：</strong>一种可能的路径为 [0,1,4,2,3]\\n</pre>\\n\\n<p>&nbsp;</p>\\n\\n<p><strong>提示：</strong></p>\\n\\n<ul>\\n\\t<li><code>n == graph.length</code></li>\\n\\t<li><code>1 &lt;= n &lt;= 12</code></li>\\n\\t<li><code>0 &lt;= graph[i].length &lt;&nbsp;n</code></li>\\n\\t<li><code>graph[i]</code> 不包含 <code>i</code></li>\\n\\t<li>如果 <code>graph[a]</code> 包含 <code>b</code> ，那么 <code>graph[b]</code> 也包含 <code>a</code></li>\\n\\t<li>输入的图总是连通图</li>\\n</ul>\\n","title":"847. 访问所有节点的最短路径","relatedTags":["位运算","广度优先搜索","图","动态规划","状态压缩"],"difficult":"Hard","lang":["javascript"],"uniqueID":"847","slug":"847-Shortest-Path-Visiting-All-Nodes"}')}}]);