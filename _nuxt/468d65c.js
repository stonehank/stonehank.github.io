(window.webpackJsonp=window.webpackJsonp||[]).push([[1369],{2167:function(n){n.exports=JSON.parse('{"code":["<pre class=\\"hljs\\"><code><span class=\\"hljs-comment\\">/**\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{number[][]}</span> <span class=\\"hljs-variable\\">grid</span></span>\\n * <span class=\\"hljs-doctag\\">@return <span class=\\"hljs-type\\">{number}</span></span>\\n */</span>\\n<span class=\\"hljs-keyword\\">var</span> orangesRotting = <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span>(<span class=\\"hljs-params\\">grid</span>) </span>{\\n  <span class=\\"hljs-keyword\\">if</span>(grid.length===<span class=\\"hljs-number\\">0</span>)<span class=\\"hljs-keyword\\">return</span> <span class=\\"hljs-number\\">0</span>\\n  <span class=\\"hljs-keyword\\">let</span> freshNum=<span class=\\"hljs-number\\">0</span>\\n  <span class=\\"hljs-keyword\\">let</span> rots=[]\\n  <span class=\\"hljs-keyword\\">let</span> moves=[[<span class=\\"hljs-number\\">1</span>,<span class=\\"hljs-number\\">0</span>],[<span class=\\"hljs-number\\">-1</span>,<span class=\\"hljs-number\\">0</span>],[<span class=\\"hljs-number\\">0</span>,<span class=\\"hljs-number\\">-1</span>],[<span class=\\"hljs-number\\">0</span>,<span class=\\"hljs-number\\">1</span>]]\\n  <span class=\\"hljs-keyword\\">let</span> r=grid.length,c=grid[<span class=\\"hljs-number\\">0</span>].length\\n  <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> i=<span class=\\"hljs-number\\">0</span>;i&lt;r;i++){\\n    <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> j=<span class=\\"hljs-number\\">0</span>;j&lt;c;j++){\\n      <span class=\\"hljs-keyword\\">if</span>(grid[i][j]===<span class=\\"hljs-number\\">1</span>)freshNum++\\n      <span class=\\"hljs-keyword\\">else</span> <span class=\\"hljs-keyword\\">if</span>(grid[i][j]===<span class=\\"hljs-number\\">2</span>)rots.push([i,j])\\n    }\\n  }\\n  <span class=\\"hljs-keyword\\">if</span>(freshNum===<span class=\\"hljs-number\\">0</span>)<span class=\\"hljs-keyword\\">return</span> <span class=\\"hljs-number\\">0</span>\\n  <span class=\\"hljs-keyword\\">let</span> step=<span class=\\"hljs-number\\">0</span>\\n\\n  <span class=\\"hljs-keyword\\">while</span>(rots.length&gt;<span class=\\"hljs-number\\">0</span>){\\n    <span class=\\"hljs-keyword\\">let</span> len=rots.length\\n    <span class=\\"hljs-keyword\\">if</span>(freshNum===<span class=\\"hljs-number\\">0</span>)<span class=\\"hljs-keyword\\">return</span> step\\n    step++\\n    <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> i=<span class=\\"hljs-number\\">0</span>;i&lt;len;i++){\\n      <span class=\\"hljs-keyword\\">let</span> [x,y]=rots.shift()\\n      <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> [dx,dy] <span class=\\"hljs-keyword\\">of</span> moves){\\n        <span class=\\"hljs-keyword\\">let</span> newx=x+dx,newy=y+dy\\n        <span class=\\"hljs-keyword\\">if</span>(newx&lt;<span class=\\"hljs-number\\">0</span> || newy&lt;<span class=\\"hljs-number\\">0</span> || newx&gt;=r || newy&gt;=c)<span class=\\"hljs-keyword\\">continue</span>\\n        <span class=\\"hljs-keyword\\">if</span>(grid[newx][newy]===<span class=\\"hljs-number\\">1</span>){\\n          grid[newx][newy]=<span class=\\"hljs-number\\">2</span>\\n          freshNum--\\n          rots.push([newx,newy])\\n        }\\n      }\\n    }\\n  }\\n  <span class=\\"hljs-keyword\\">return</span> <span class=\\"hljs-number\\">-1</span>\\n};\\n</code></pre>\\n"],"querySlug":"rotting-oranges","created_at":"2020-03-04","timeArr":[2020,2,4,23,58,29,0],"hasThinking":false,"content":"<p>在给定的网格中，每个单元格可以有以下三个值之一：</p>\\n\\n<ul>\\n\\t<li>值&nbsp;<code>0</code>&nbsp;代表空单元格；</li>\\n\\t<li>值&nbsp;<code>1</code>&nbsp;代表新鲜橘子；</li>\\n\\t<li>值&nbsp;<code>2</code>&nbsp;代表腐烂的橘子。</li>\\n</ul>\\n\\n<p>每分钟，任何与腐烂的橘子（在 4 个正方向上）相邻的新鲜橘子都会腐烂。</p>\\n\\n<p>返回直到单元格中没有新鲜橘子为止所必须经过的最小分钟数。如果不可能，返回&nbsp;<code>-1</code>。</p>\\n\\n<p>&nbsp;</p>\\n\\n<p><strong>示例 1：</strong></p>\\n\\n<p><strong><img alt=\\"\\" src=\\"https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2019/02/16/oranges.png\\" style=\\"height: 150px; width: 712px;\\"></strong></p>\\n\\n<pre><strong>输入：</strong>[[2,1,1],[1,1,0],[0,1,1]]\\n<strong>输出：</strong>4\\n</pre>\\n\\n<p><strong>示例 2：</strong></p>\\n\\n<pre><strong>输入：</strong>[[2,1,1],[0,1,1],[1,0,1]]\\n<strong>输出：</strong>-1\\n<strong>解释：</strong>左下角的橘子（第 2 行， 第 0 列）永远不会腐烂，因为腐烂只会发生在 4 个正向上。\\n</pre>\\n\\n<p><strong>示例 3：</strong></p>\\n\\n<pre><strong>输入：</strong>[[0,2]]\\n<strong>输出：</strong>0\\n<strong>解释：</strong>因为 0 分钟时已经没有新鲜橘子了，所以答案就是 0 。\\n</pre>\\n\\n<p>&nbsp;</p>\\n\\n<p><strong>提示：</strong></p>\\n\\n<ol>\\n\\t<li><code>1 &lt;= grid.length &lt;= 10</code></li>\\n\\t<li><code>1 &lt;= grid[0].length &lt;= 10</code></li>\\n\\t<li><code>grid[i][j]</code> 仅为&nbsp;<code>0</code>、<code>1</code>&nbsp;或&nbsp;<code>2</code></li>\\n</ol>\\n","title":"994. 腐烂的橘子","relatedTags":["广度优先搜索","数组","矩阵"],"difficult":"Middle","lang":["javascript"],"uniqueID":"994","slug":"994-Rotting-Oranges"}')}}]);