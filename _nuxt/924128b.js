(window.webpackJsonp=window.webpackJsonp||[]).push([[1378],{2176:function(n){n.exports=JSON.parse('{"code":["<pre class=\\"hljs\\"><code><span class=\\"hljs-comment\\">/**\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{number}</span> <span class=\\"hljs-variable\\">n</span></span>\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{number[][]}</span> <span class=\\"hljs-variable\\">leadership</span></span>\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{number[][]}</span> <span class=\\"hljs-variable\\">operations</span></span>\\n * <span class=\\"hljs-doctag\\">@return <span class=\\"hljs-type\\">{number[]}</span></span>\\n */</span>\\n<span class=\\"hljs-keyword\\">var</span> bonus = <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span>(<span class=\\"hljs-params\\">n, leadership, operations</span>) </span>{\\n  <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span> <span class=\\"hljs-title\\">Tree</span>(<span class=\\"hljs-params\\">parent</span>)</span>{\\n    <span class=\\"hljs-keyword\\">this</span>.self=<span class=\\"hljs-number\\">0</span>\\n    <span class=\\"hljs-keyword\\">this</span>.subAll=<span class=\\"hljs-number\\">0</span>\\n    <span class=\\"hljs-keyword\\">this</span>.parent=parent\\n    <span class=\\"hljs-keyword\\">this</span>.child=[]\\n  }\\n  Tree.prototype.add=<span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span>(<span class=\\"hljs-params\\">idTree</span>)</span>{\\n    <span class=\\"hljs-keyword\\">this</span>.child.push(idTree)\\n  }\\n  Tree.prototype.addParentCoin=<span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span>(<span class=\\"hljs-params\\">coin</span>)</span>{\\n    <span class=\\"hljs-keyword\\">if</span>(<span class=\\"hljs-keyword\\">this</span>.parent){\\n      <span class=\\"hljs-keyword\\">this</span>.parent.subAll+=coin\\n      <span class=\\"hljs-keyword\\">this</span>.parent.addParentCoin(coin)\\n    }\\n  }\\n  \\n  Tree.prototype.addSelfCoin=<span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span>(<span class=\\"hljs-params\\">coin</span>)</span>{\\n    <span class=\\"hljs-keyword\\">this</span>.self+=coin\\n    <span class=\\"hljs-keyword\\">this</span>.addParentCoin(coin)\\n  }\\n  Tree.prototype.addCoin=<span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span>(<span class=\\"hljs-params\\">coin</span>)</span>{\\n    <span class=\\"hljs-keyword\\">this</span>.self+=coin\\n    <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> i=<span class=\\"hljs-number\\">0</span>;i&lt;<span class=\\"hljs-keyword\\">this</span>.child.length;i++){\\n      <span class=\\"hljs-keyword\\">this</span>.child[i].addCoin(coin)\\n    }\\n    <span class=\\"hljs-keyword\\">this</span>.addParentCoin(coin) \\n  }\\n  <span class=\\"hljs-keyword\\">let</span> trees=[]\\n  <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> [p,c] <span class=\\"hljs-keyword\\">of</span> leadership){\\n    <span class=\\"hljs-keyword\\">let</span> pt=trees[p] || <span class=\\"hljs-keyword\\">new</span> Tree(<span class=\\"hljs-literal\\">null</span>)\\n    <span class=\\"hljs-keyword\\">let</span> ct=trees[c] || <span class=\\"hljs-keyword\\">new</span> Tree(<span class=\\"hljs-literal\\">null</span>)\\n    \\n    ct.parent=pt\\n    pt.child.push(ct)\\n    trees[p]=pt\\n    trees[c]=ct\\n  }\\n  <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> i=<span class=\\"hljs-number\\">0</span>;i&lt;n;i++){\\n    <span class=\\"hljs-keyword\\">if</span>(trees[i]==<span class=\\"hljs-literal\\">null</span>)trees[i]=<span class=\\"hljs-keyword\\">new</span> Tree(<span class=\\"hljs-literal\\">null</span>)\\n  }\\n  <span class=\\"hljs-keyword\\">let</span> res=[]\\n  <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> i=<span class=\\"hljs-number\\">0</span>;i&lt;operations.length;i++){\\n    <span class=\\"hljs-keyword\\">let</span> m=operations[i][<span class=\\"hljs-number\\">0</span>]\\n    <span class=\\"hljs-keyword\\">if</span>(m==<span class=\\"hljs-number\\">1</span>){\\n      trees[operations[i][<span class=\\"hljs-number\\">1</span>]].addSelfCoin(operations[i][<span class=\\"hljs-number\\">2</span>])\\n    }<span class=\\"hljs-keyword\\">else</span> <span class=\\"hljs-keyword\\">if</span>(m==<span class=\\"hljs-number\\">2</span>){\\n      trees[operations[i][<span class=\\"hljs-number\\">1</span>]].addCoin(operations[i][<span class=\\"hljs-number\\">2</span>])\\n    }<span class=\\"hljs-keyword\\">else</span> <span class=\\"hljs-keyword\\">if</span>(m==<span class=\\"hljs-number\\">3</span>){\\n      <span class=\\"hljs-keyword\\">let</span> t=trees[operations[i][<span class=\\"hljs-number\\">1</span>]]\\n      res.push((t.self+t.subAll) % <span class=\\"hljs-number\\">1000000007</span>)\\n    }\\n  }\\n  <span class=\\"hljs-keyword\\">return</span> res\\n};\\n</code></pre>\\n"],"querySlug":"coin-bonus","created_at":"2019-09-25","timeArr":[2019,8,25,0,17,16,0],"hasThinking":false,"content":"<p>力扣决定给一个刷题团队发<code>LeetCoin</code>作为奖励。同时，为了监控给大家发了多少<code>LeetCoin</code>，力扣有时候也会进行查询。</p>\\n\\n<p>&nbsp;</p>\\n\\n<p>该刷题团队的管理模式可以用一棵树表示：</p>\\n\\n<ol>\\n\\t<li>团队只有一个负责人，编号为1。除了该负责人外，每个人有且仅有一个领导（负责人没有领导）；</li>\\n\\t<li>不存在循环管理的情况，如A管理B，B管理C，C管理A。</li>\\n</ol>\\n\\n<p>&nbsp;</p>\\n\\n<p>力扣想进行的操作有以下三种：</p>\\n\\n<ol>\\n\\t<li>给团队的一个成员（也可以是负责人）发一定数量的<code>LeetCoin</code>；</li>\\n\\t<li>给团队的一个成员（也可以是负责人），以及他/她管理的所有人（即他/她的下属、他/她下属的下属，&hellip;&hellip;），发一定数量的<code>LeetCoin</code>；</li>\\n\\t<li>查询某一个成员（也可以是负责人），以及他/她管理的所有人被发到的<code>LeetCoin</code>之和。</li>\\n</ol>\\n\\n<p>&nbsp;</p>\\n\\n<p><strong>输入：</strong></p>\\n\\n<ol>\\n\\t<li><code>N</code>表示团队成员的个数（编号为1～N，负责人为1）；</li>\\n\\t<li><code>leadership</code>是大小为<code>(N&nbsp;- 1) * 2</code>的二维数组，其中每个元素<code>[a, b]</code>代表<code>b</code>是<code>a</code>的下属；</li>\\n\\t<li><code>operations</code>是一个长度为<code>Q</code>的二维数组，代表以时间排序的操作，格式如下：\\n\\t<ol>\\n\\t\\t<li><code>operations[i][0] = 1</code>: 代表第一种操作，<code>operations[i][1]</code>代表成员的编号，<code>operations[i][2]</code>代表<code>LeetCoin</code>的数量；</li>\\n\\t\\t<li><code>operations[i][0] = 2</code>: 代表第二种操作，<code>operations[i][1]</code>代表成员的编号，<code>operations[i][2]</code>代表<code>LeetCoin</code>的数量；</li>\\n\\t\\t<li><code>operations[i][0] = 3</code>: 代表第三种操作，<code>operations[i][1]</code>代表成员的编号；</li>\\n\\t</ol>\\n\\t</li>\\n</ol>\\n\\n<p><strong>输出：</strong></p>\\n\\n<p>返回一个数组，数组里是每次<strong>查询</strong>的返回值（发<code>LeetCoin</code>的操作不需要任何返回值）。由于发的<code>LeetCoin</code>很多，请把每次查询的结果模<code>1e9+7 (1000000007)</code>。</p>\\n\\n<p>&nbsp;</p>\\n\\n<p><strong>示例 1：</strong></p>\\n\\n<pre><strong>输入：</strong>N = 6, leadership = [[1, 2], [1, 6], [2, 3], [2, 5], [1, 4]], operations = [[1, 1, 500], [2, 2, 50], [3, 1], [2, 6, 15], [3, 1]]\\n<strong>输出：</strong>[650, 665]\\n<strong>解释：</strong>团队的管理关系见下图。\\n第一次查询时，每个成员得到的LeetCoin的数量分别为（按编号顺序）：500, 50, 50, 0, 50, 0;\\n第二次查询时，每个成员得到的LeetCoin的数量分别为（按编号顺序）：500, 50, 50, 0, 50, 15.\\n</pre>\\n\\n<p><img alt=\\"\\" src=\\"https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2019/09/09/coin_example_1.jpg\\" style=\\"height: 344px; width: 300px;\\"></p>\\n\\n<p>&nbsp;</p>\\n\\n<p><strong>限制：</strong></p>\\n\\n<ol>\\n\\t<li><code>1 &lt;= N &lt;= 50000</code></li>\\n\\t<li><code>1 &lt;= Q &lt;= 50000</code></li>\\n\\t<li><code>operations[i][0] != 3 时，1 &lt;= operations[i][2]&nbsp;&lt;= 5000</code></li>\\n</ol>\\n","title":"LCP 05. 发 LeetCoin","relatedTags":["树状数组","线段树","数组"],"difficult":"Hard","lang":["javascript"],"uniqueID":"LCP 05","slug":"LCP-05-Coin-Bonus"}')}}]);