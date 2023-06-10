(window.webpackJsonp=window.webpackJsonp||[]).push([[821],{1619:function(n){n.exports=JSON.parse('{"code":["<pre class=\\"hljs\\"><code><span class=\\"hljs-comment\\">/**\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{number[][]}</span> <span class=\\"hljs-variable\\">heightMap</span></span>\\n * <span class=\\"hljs-doctag\\">@return <span class=\\"hljs-type\\">{number}</span></span>\\n */</span>\\n<span class=\\"hljs-keyword\\">var</span> trapRainWater = <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span>(<span class=\\"hljs-params\\">heightMap</span>) </span>{\\n  <span class=\\"hljs-keyword\\">let</span> pq=[]\\n  <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span> <span class=\\"hljs-title\\">bsEnd</span>(<span class=\\"hljs-params\\">arr,n</span>)</span>{\\n    <span class=\\"hljs-keyword\\">let</span> lo=<span class=\\"hljs-number\\">0</span>,hi=arr.length<span class=\\"hljs-number\\">-1</span>\\n    <span class=\\"hljs-keyword\\">while</span>(lo&lt;hi){\\n      <span class=\\"hljs-keyword\\">let</span> mid=<span class=\\"hljs-built_in\\">Math</span>.floor((lo+hi)/<span class=\\"hljs-number\\">2</span>)\\n      <span class=\\"hljs-keyword\\">if</span>(arr[mid][<span class=\\"hljs-number\\">0</span>]&gt;n)lo=mid+<span class=\\"hljs-number\\">1</span>\\n      <span class=\\"hljs-keyword\\">else</span> hi=mid\\n    }\\n    <span class=\\"hljs-keyword\\">return</span> hi\\n  }\\n  <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span> <span class=\\"hljs-title\\">insert</span>(<span class=\\"hljs-params\\">n</span>)</span>{\\n    <span class=\\"hljs-keyword\\">if</span>(pq.length===<span class=\\"hljs-number\\">0</span> || pq[pq.length<span class=\\"hljs-number\\">-1</span>][<span class=\\"hljs-number\\">0</span>]&gt;=n[<span class=\\"hljs-number\\">0</span>]){\\n      pq.push(n)\\n    }<span class=\\"hljs-keyword\\">else</span>{\\n      <span class=\\"hljs-keyword\\">let</span> idx=bsEnd(pq,n[<span class=\\"hljs-number\\">0</span>])\\n      pq.splice(idx,<span class=\\"hljs-number\\">0</span>,n)\\n    }\\n  }\\n  <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span> <span class=\\"hljs-title\\">delMin</span>(<span class=\\"hljs-params\\"></span>)</span>{\\n    <span class=\\"hljs-keyword\\">return</span> pq.pop()\\n  }\\n  <span class=\\"hljs-keyword\\">if</span>(heightMap.length===<span class=\\"hljs-number\\">0</span>)<span class=\\"hljs-keyword\\">return</span> <span class=\\"hljs-number\\">0</span>\\n  <span class=\\"hljs-keyword\\">let</span> m=heightMap.length,n=heightMap[<span class=\\"hljs-number\\">0</span>].length\\n  <span class=\\"hljs-keyword\\">let</span> moves=[[<span class=\\"hljs-number\\">-1</span>,<span class=\\"hljs-number\\">0</span>],[<span class=\\"hljs-number\\">1</span>,<span class=\\"hljs-number\\">0</span>],[<span class=\\"hljs-number\\">0</span>,<span class=\\"hljs-number\\">-1</span>],[<span class=\\"hljs-number\\">0</span>,<span class=\\"hljs-number\\">1</span>]]\\n  <span class=\\"hljs-keyword\\">let</span> visited=<span class=\\"hljs-built_in\\">Array</span>(m).fill().map(<span class=\\"hljs-function\\"><span class=\\"hljs-params\\">()</span>=&gt;</span><span class=\\"hljs-built_in\\">Array</span>(n).fill(<span class=\\"hljs-literal\\">false</span>))\\n  <span class=\\"hljs-keyword\\">let</span> res=<span class=\\"hljs-number\\">0</span>\\n  <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> i=<span class=\\"hljs-number\\">0</span>;i&lt;m;i++){\\n    insert([heightMap[i][<span class=\\"hljs-number\\">0</span>],i,<span class=\\"hljs-number\\">0</span>])\\n    insert([heightMap[i][n<span class=\\"hljs-number\\">-1</span>],i,n<span class=\\"hljs-number\\">-1</span>])\\n    visited[i][<span class=\\"hljs-number\\">0</span>]=<span class=\\"hljs-literal\\">true</span>\\n    visited[i][n<span class=\\"hljs-number\\">-1</span>]=<span class=\\"hljs-literal\\">true</span>\\n  }\\n  <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> i=<span class=\\"hljs-number\\">1</span>;i&lt;n<span class=\\"hljs-number\\">-1</span>;i++){\\n    insert([heightMap[<span class=\\"hljs-number\\">0</span>][i],<span class=\\"hljs-number\\">0</span>,i])\\n    insert([heightMap[m<span class=\\"hljs-number\\">-1</span>][i],m<span class=\\"hljs-number\\">-1</span>,i])\\n    visited[<span class=\\"hljs-number\\">0</span>][i]=<span class=\\"hljs-literal\\">true</span>\\n    visited[m<span class=\\"hljs-number\\">-1</span>][i]=<span class=\\"hljs-literal\\">true</span>\\n  }\\n  <span class=\\"hljs-keyword\\">while</span>(pq.length&gt;<span class=\\"hljs-number\\">0</span>){\\n    <span class=\\"hljs-keyword\\">let</span> [v,x,y]=delMin()\\n    move(v,[x,y])\\n  }\\n  <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span> <span class=\\"hljs-title\\">move</span>(<span class=\\"hljs-params\\">v,[x,y]</span>)</span>{\\n    <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> [dx,dy] <span class=\\"hljs-keyword\\">of</span> moves){\\n      <span class=\\"hljs-keyword\\">let</span> nx=dx+x,ny=dy+y\\n      <span class=\\"hljs-keyword\\">if</span>(nx&lt;<span class=\\"hljs-number\\">0</span> || ny&lt;<span class=\\"hljs-number\\">0</span> || nx&gt;=m || ny&gt;=n)<span class=\\"hljs-keyword\\">continue</span>\\n      <span class=\\"hljs-keyword\\">if</span>(visited[nx][ny])<span class=\\"hljs-keyword\\">continue</span>\\n      <span class=\\"hljs-keyword\\">if</span>(heightMap[nx][ny]&lt;=v){\\n        res+=v-heightMap[nx][ny]\\n        visited[nx][ny]=<span class=\\"hljs-literal\\">true</span>\\n        move(v,[nx,ny])\\n      }<span class=\\"hljs-keyword\\">else</span>{\\n        visited[nx][ny]=<span class=\\"hljs-literal\\">true</span>\\n        insert([heightMap[nx][ny],nx,ny])\\n      }\\n    }    \\n  }\\n  <span class=\\"hljs-keyword\\">return</span> res\\n};\\n</code></pre>\\n"],"querySlug":"trapping-rain-water-ii","created_at":"2019-04-15","timeArr":[2019,3,15,21,25,29,0],"hasThinking":true,"thinking":"<hr>\\n<p>思路：</p>\\n<p>面的问题因为涉及4个方向的边，使用<code>优先队列</code>，每次取出边上的最小值处理(最容易漏水的位置)。</p>\\n<ol>\\n<li>\\n<p>将4条最外边的值加入<code>优先队列</code>，建立一个<code>visited</code>，表示已经探索过的区域，不重复执行</p>\\n</li>\\n<li>\\n<p>取出最小值<code>a</code>，从<code>a</code>开始遍历，不过要遍历4个方向，<code>visited</code>为true的跳过，同时设置一个<code>max</code>，\\n用于保存当前最矮的墙中最高的...(因为使用<code>优先队列</code>每次取出最小值)</p>\\n</li>\\n<li>\\n<p>遇到比<code>max</code>高的墙，则加入到<code>优先队列</code>中，因为这个墙已经可以作为一个新的边，</p>\\n<p>遇到不比<code>max</code>高的平面或者凹口，记录增加的水位<code>max - 当前凹口的高度</code>，继续遍历直到遇到比<code>a</code>高的。</p>\\n</li>\\n<li>\\n<p>直到<code>优先队列</code>的数据全部处理完</p>\\n</li>\\n</ol>\\n<p>思路视频，非常<code>easy</code></p>\\n<p><a href=\\"https://www.youtube.com/watch?v=cJayBq38VYw\\">Visualization of priority queue algorithm.</a></p>\\n","content":"<p>给你一个&nbsp;<code>m x n</code>&nbsp;的矩阵，其中的值均为非负整数，代表二维高度图每个单元的高度，请计算图中形状最多能接多少体积的雨水。</p>\\n\\n<p>&nbsp;</p>\\n\\n<p><strong>示例 1:</strong></p>\\n\\n<p><img alt=\\"\\" src=\\"https://assets.leetcode.com/uploads/2021/04/08/trap1-3d.jpg\\" /></p>\\n\\n<pre>\\n<strong>输入:</strong> heightMap = [[1,4,3,1,3,2],[3,2,1,3,2,4],[2,3,3,2,3,1]]\\n<strong>输出:</strong> 4\\n<strong>解释:</strong> 下雨后，雨水将会被上图蓝色的方块中。总的接雨水量为1+2+1=4。\\n</pre>\\n\\n<p><strong>示例&nbsp;2:</strong></p>\\n\\n<p><img alt=\\"\\" src=\\"https://assets.leetcode.com/uploads/2021/04/08/trap2-3d.jpg\\" /></p>\\n\\n<pre>\\n<strong>输入:</strong> heightMap = [[3,3,3,3,3],[3,2,2,2,3],[3,2,1,2,3],[3,2,2,2,3],[3,3,3,3,3]]\\n<strong>输出:</strong> 10\\n</pre>\\n\\n<p>&nbsp;</p>\\n\\n<p><strong>提示:</strong></p>\\n\\n<ul>\\n\\t<li><code>m == heightMap.length</code></li>\\n\\t<li><code>n == heightMap[i].length</code></li>\\n\\t<li><code>1 &lt;= m, n &lt;= 200</code></li>\\n\\t<li><code>0 &lt;= heightMap[i][j] &lt;= 2 * 10<sup>4</sup></code></li>\\n</ul>\\n\\n<p>&nbsp;</p>\\n","title":"407. 接雨水 II","relatedTags":["广度优先搜索","数组","矩阵","堆（优先队列）"],"difficult":"Hard","lang":["javascript"],"uniqueID":"407","slug":"407-Trapping-Rain-Water-II"}')}}]);