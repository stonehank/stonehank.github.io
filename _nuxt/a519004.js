(window.webpackJsonp=window.webpackJsonp||[]).push([[1335],{2133:function(n){n.exports=JSON.parse('{"code":["<pre class=\\"hljs\\"><code><span class=\\"hljs-comment\\">/**\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{number[][]}</span> <span class=\\"hljs-variable\\">points</span></span>\\n * <span class=\\"hljs-doctag\\">@return <span class=\\"hljs-type\\">{number}</span></span>\\n */</span>\\n<span class=\\"hljs-keyword\\">var</span> minAreaFreeRect = <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span>(<span class=\\"hljs-params\\">points</span>) </span>{\\n  <span class=\\"hljs-keyword\\">let</span> <span class=\\"hljs-keyword\\">set</span> = new Set();\\n  for (let p of points) {\\n    <span class=\\"hljs-keyword\\">set</span>.add(p[0]+\\"-\\"+p[1]);\\n  }\\n  let N=points.length\\n  let minArea=Infinity\\n  for(let i=0;i&lt;N-3;i++){\\n    <span class=\\"hljs-keyword\\">let</span> p1=points[i]\\n    <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> j=i+<span class=\\"hljs-number\\">1</span>;j&lt;N<span class=\\"hljs-number\\">-2</span>;j++){\\n      <span class=\\"hljs-keyword\\">let</span> p2=points[j]\\n      <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> k=j+<span class=\\"hljs-number\\">1</span>;k&lt;N<span class=\\"hljs-number\\">-1</span>;k++){\\n        <span class=\\"hljs-keyword\\">let</span> p3=points[k]\\n        <span class=\\"hljs-keyword\\">let</span> e1=getDis(p1,p2),e2=getDis(p1,p3),e3=getDis(p2,p3)\\n        <span class=\\"hljs-keyword\\">let</span> max=<span class=\\"hljs-built_in\\">Math</span>.max(e1,e2,e3)\\n        <span class=\\"hljs-keyword\\">if</span>(max*<span class=\\"hljs-number\\">2</span>!==e1+e2+e3)<span class=\\"hljs-keyword\\">continue</span>\\n        <span class=\\"hljs-keyword\\">let</span> se1=<span class=\\"hljs-literal\\">null</span>,se2=<span class=\\"hljs-literal\\">null</span>\\n        <span class=\\"hljs-keyword\\">let</span> x=<span class=\\"hljs-literal\\">null</span>,y=<span class=\\"hljs-literal\\">null</span>\\n        <span class=\\"hljs-keyword\\">if</span>(max===e1){\\n          se1=e2\\n          se2=e3\\n          x=p1[<span class=\\"hljs-number\\">0</span>]+p2[<span class=\\"hljs-number\\">0</span>]-p3[<span class=\\"hljs-number\\">0</span>]\\n          y=p1[<span class=\\"hljs-number\\">1</span>]+p2[<span class=\\"hljs-number\\">1</span>]-p3[<span class=\\"hljs-number\\">1</span>]\\n        }<span class=\\"hljs-keyword\\">else</span> <span class=\\"hljs-keyword\\">if</span>(max===e2){\\n          se1=e1\\n          se2=e3\\n          x=p1[<span class=\\"hljs-number\\">0</span>]+p3[<span class=\\"hljs-number\\">0</span>]-p2[<span class=\\"hljs-number\\">0</span>]\\n          y=p1[<span class=\\"hljs-number\\">1</span>]+p3[<span class=\\"hljs-number\\">1</span>]-p2[<span class=\\"hljs-number\\">1</span>]\\n        }<span class=\\"hljs-keyword\\">else</span>{\\n          se1=e2\\n          se2=e1\\n          x=p2[<span class=\\"hljs-number\\">0</span>]+p3[<span class=\\"hljs-number\\">0</span>]-p1[<span class=\\"hljs-number\\">0</span>]\\n          y=p2[<span class=\\"hljs-number\\">1</span>]+p3[<span class=\\"hljs-number\\">1</span>]-p1[<span class=\\"hljs-number\\">1</span>] \\n        }\\n        <span class=\\"hljs-keyword\\">if</span>(<span class=\\"hljs-keyword\\">set</span>.has(x+\\"-\\"+y)){\\n          minArea=<span class=\\"hljs-built_in\\">Math</span>.min(minArea,<span class=\\"hljs-built_in\\">Math</span>.sqrt(se1*se2))\\n        }\\n      }\\n    }\\n  }\\n  <span class=\\"hljs-keyword\\">if</span>(minArea===<span class=\\"hljs-literal\\">Infinity</span>)<span class=\\"hljs-keyword\\">return</span> <span class=\\"hljs-number\\">0</span>\\n  <span class=\\"hljs-keyword\\">return</span> minArea\\n  <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span> <span class=\\"hljs-title\\">getDis</span>(<span class=\\"hljs-params\\">[x1,y1],[x2,y2]</span>)</span>{\\n    <span class=\\"hljs-keyword\\">return</span> <span class=\\"hljs-built_in\\">Math</span>.pow(x1-x2,<span class=\\"hljs-number\\">2</span>)+<span class=\\"hljs-built_in\\">Math</span>.pow(y1-y2,<span class=\\"hljs-number\\">2</span>)\\n  }\\n};\\n</code></pre>\\n"],"querySlug":"minimum-area-rectangle-ii","created_at":"2019-04-04","timeArr":[2019,3,4,10,10,30,0],"hasThinking":true,"thinking":"<hr>\\n<p>思路：</p>\\n<p>这道题的范围是<code>[1,50]</code>，因此可以使用4重循环，每次找到4个点，然后判断：</p>\\n<p>是否对应的两条边<code>两两相等</code>。</p>\\n<p>例如 4个点<code>1,2,3,4</code>，检查 <code>e1_2===e3_4</code>，<code>e1_3===e2_4</code>，<code>e2_3===e1_4</code></p>\\n<p>如果成立，说明是一个有效矩形。</p>\\n<p><code>4次方</code>能通过，但是效率不高，更好的办法是<strong>只找3个点</strong>，先判断这3个点是否有效，再去计算出第4个点，检查是否存在第4个点。</p>\\n<p>判断规则：</p>\\n<ol>\\n<li>对于3个点，使用<code>勾股定理</code>判断是否有一个直角三角形。</li>\\n<li>第4个点可以通过<code>斜边的两点之和 - 另一个点</code>得出。</li>\\n</ol>\\n","content":"<p>给定在 xy 平面上的一组点，确定由这些点组成的任何矩形的最小面积，其中矩形的边<strong>不一定平行于</strong> x 轴和 y 轴。</p>\\n\\n<p>如果没有任何矩形，就返回 0。</p>\\n\\n<p>&nbsp;</p>\\n\\n<p><strong>示例 1：</strong></p>\\n\\n<p><strong><img alt=\\"\\" src=\\"https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/22/1a.png\\" style=\\"height: 151px; width: 150px;\\"></strong></p>\\n\\n<pre><strong>输入：</strong>[[1,2],[2,1],[1,0],[0,1]]\\n<strong>输出：</strong>2.00000\\n<strong>解释：</strong>最小面积的矩形出现在 [1,2],[2,1],[1,0],[0,1] 处，面积为 2。</pre>\\n\\n<p><strong>示例 2：</strong></p>\\n\\n<p><img alt=\\"\\" src=\\"https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/23/2.png\\" style=\\"height: 94px; width: 150px;\\"></p>\\n\\n<pre><strong>输入：</strong>[[0,1],[2,1],[1,1],[1,0],[2,0]]\\n<strong>输出：</strong>1.00000\\n<strong>解释：</strong>最小面积的矩形出现在 [1,0],[1,1],[2,1],[2,0] 处，面积为 1。\\n</pre>\\n\\n<p><strong>示例 3：</strong></p>\\n\\n<p><img alt=\\"\\" src=\\"https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/23/3.png\\" style=\\"height: 94px; width: 150px;\\"></p>\\n\\n<pre><strong>输入：</strong>[[0,3],[1,2],[3,1],[1,3],[2,1]]\\n<strong>输出：</strong>0\\n<strong>解释：</strong>没法从这些点中组成任何矩形。\\n</pre>\\n\\n<p><strong>示例 4：</strong></p>\\n\\n<p><strong><img alt=\\"\\" src=\\"https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/21/4c.png\\" style=\\"height: 155px; width: 160px;\\"></strong></p>\\n\\n<pre><strong>输入：</strong>[[3,1],[1,1],[0,1],[2,1],[3,3],[3,2],[0,2],[2,3]]\\n<strong>输出：</strong>2.00000\\n<strong>解释：</strong>最小面积的矩形出现在 [2,1],[2,3],[3,3],[3,1] 处，面积为 2。\\n</pre>\\n\\n<p>&nbsp;</p>\\n\\n<p><strong>提示：</strong></p>\\n\\n<ol>\\n\\t<li><code>1 &lt;= points.length &lt;= 50</code></li>\\n\\t<li><code>0 &lt;=&nbsp;points[i][0] &lt;=&nbsp;40000</code></li>\\n\\t<li><code>0 &lt;=&nbsp;points[i][1] &lt;=&nbsp;40000</code></li>\\n\\t<li>所有的点都是不同的。</li>\\n\\t<li>与真实值误差不超过 <code>10^-5</code>&nbsp;的答案将视为正确结果。</li>\\n</ol>\\n","title":"963. 最小面积矩形 II","relatedTags":["几何","数组","数学"],"difficult":"Middle","lang":["javascript"],"uniqueID":"963","slug":"963-Minimum-Area-Rectangle-II"}')}}]);