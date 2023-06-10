(window.webpackJsonp=window.webpackJsonp||[]).push([[502],{1300:function(n){n.exports=JSON.parse('{"code":["<pre class=\\"hljs\\"><code><span class=\\"hljs-comment\\">/**\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{number[][]}</span> <span class=\\"hljs-variable\\">points</span></span>\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{number}</span> <span class=\\"hljs-variable\\">r</span></span>\\n * <span class=\\"hljs-doctag\\">@return <span class=\\"hljs-type\\">{number}</span></span>\\n */</span>\\n<span class=\\"hljs-keyword\\">var</span> numPoints = <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span>(<span class=\\"hljs-params\\">points, r</span>) </span>{\\n\\n  <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span> <span class=\\"hljs-title\\">getCenter</span>(<span class=\\"hljs-params\\">a,b,r,someFlag</span>)</span>{\\n    <span class=\\"hljs-keyword\\">let</span> x1=a[<span class=\\"hljs-number\\">0</span>],x2=b[<span class=\\"hljs-number\\">0</span>],\\n    y1=a[<span class=\\"hljs-number\\">1</span>],y2=b[<span class=\\"hljs-number\\">1</span>];\\n    <span class=\\"hljs-keyword\\">let</span> c1 = (x2*x2 - x1*x1 + y2*y2 - y1*y1) / (<span class=\\"hljs-number\\">2</span> *(x2 - x1));\\n    <span class=\\"hljs-keyword\\">let</span> c2 = (y2 - y1) / (x2 - x1);\\n    <span class=\\"hljs-keyword\\">let</span> A = (c2*c2 + <span class=\\"hljs-number\\">1</span>);\\n    <span class=\\"hljs-keyword\\">let</span> B = (<span class=\\"hljs-number\\">2</span> * x1*c2 - <span class=\\"hljs-number\\">2</span> * c1*c2 - <span class=\\"hljs-number\\">2</span> * y1);\\n    <span class=\\"hljs-keyword\\">let</span> C = x1*x1 - <span class=\\"hljs-number\\">2</span> * x1*c1 + c1*c1 + y1*y1 - r*r;\\n    <span class=\\"hljs-keyword\\">let</span> y = (-B + (<span class=\\"hljs-built_in\\">Math</span>.sqrt(B*B - <span class=\\"hljs-number\\">4</span> * A*C)*(someFlag?<span class=\\"hljs-number\\">-1</span>:<span class=\\"hljs-number\\">1</span>))) / (<span class=\\"hljs-number\\">2</span> * A);\\n    <span class=\\"hljs-keyword\\">let</span> x = c1 - c2 * y;\\n    <span class=\\"hljs-keyword\\">return</span> [+x.toFixed(<span class=\\"hljs-number\\">5</span>),+y.toFixed(<span class=\\"hljs-number\\">5</span>)]\\n  }\\n  <span class=\\"hljs-keyword\\">let</span> res=<span class=\\"hljs-number\\">1</span>\\n  <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> i=<span class=\\"hljs-number\\">0</span>;i&lt;points.length;i++){\\n    <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> j=<span class=\\"hljs-number\\">0</span>;j&lt;points.length;j++){\\n      <span class=\\"hljs-keyword\\">if</span>(i===j)<span class=\\"hljs-keyword\\">continue</span>\\n      <span class=\\"hljs-keyword\\">let</span> [x1,y1]=points[i]\\n      <span class=\\"hljs-keyword\\">let</span> [x2,y2]=points[j]\\n      <span class=\\"hljs-keyword\\">let</span> [cx1,cy1]=getCenter(points[i],points[j],r,<span class=\\"hljs-literal\\">true</span>)\\n      <span class=\\"hljs-keyword\\">let</span> [cx2,cy2]=getCenter(points[i],points[j],r,<span class=\\"hljs-literal\\">false</span>)\\n      <span class=\\"hljs-keyword\\">let</span> valid=<span class=\\"hljs-number\\">0</span>\\n      <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> k=<span class=\\"hljs-number\\">0</span>;k&lt;points.length;k++){\\n        <span class=\\"hljs-keyword\\">let</span> [x,y]=points[k]\\n        <span class=\\"hljs-keyword\\">if</span>(+(<span class=\\"hljs-built_in\\">Math</span>.sqrt((cx1-x)*(cx1-x) + (cy1-y)*(cy1-y)).toFixed(<span class=\\"hljs-number\\">2</span>))&lt;=r){\\n          valid++\\n        }\\n      }\\n      valid=<span class=\\"hljs-number\\">0</span>\\n      <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> k=<span class=\\"hljs-number\\">0</span>;k&lt;points.length;k++){\\n        <span class=\\"hljs-keyword\\">let</span> [x,y]=points[k]\\n        <span class=\\"hljs-keyword\\">if</span>(+(<span class=\\"hljs-built_in\\">Math</span>.sqrt((cx2-x)*(cx2-x) + (cy2-y)*(cy2-y)).toFixed(<span class=\\"hljs-number\\">2</span>))&lt;=r){\\n          valid++\\n        }\\n      }  \\n      res=<span class=\\"hljs-built_in\\">Math</span>.max(res,valid)\\n    }\\n  }\\n  <span class=\\"hljs-keyword\\">return</span> res\\n};\\n</code></pre>\\n"],"querySlug":"maximum-number-of-darts-inside-of-a-circular-dartboard","created_at":"2020-05-17","timeArr":[2020,4,17,11,41,45,0],"hasThinking":false,"content":"<p>墙壁上挂着一个圆形的飞镖靶。现在请你蒙着眼睛向靶上投掷飞镖。</p>\\n\\n<p>投掷到墙上的飞镖用二维平面上的点坐标数组表示。飞镖靶的半径为 <code>r</code> 。</p>\\n\\n<p>请返回能够落在 <strong>任意</strong> 半径为 <code>r</code> 的圆形靶内或靶上的最大飞镖数。</p>\\n\\n<p>&nbsp;</p>\\n\\n<p><strong>示例 1：</strong></p>\\n\\n<p><img alt=\\"\\" src=\\"https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2020/05/16/sample_1_1806.png\\" style=\\"height: 159px; width: 186px;\\"></p>\\n\\n<pre><strong>输入：</strong>points = [[-2,0],[2,0],[0,2],[0,-2]], r = 2\\n<strong>输出：</strong>4\\n<strong>解释：</strong>如果圆形的飞镖靶的圆心为 (0,0) ，半径为 2 ，所有的飞镖都落在靶上，此时落在靶上的飞镖数最大，值为 4 。\\n</pre>\\n\\n<p><strong>示例 2：</strong></p>\\n\\n<p><strong><img alt=\\"\\" src=\\"https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2020/05/16/sample_2_1806.png\\" style=\\"height: 183px; width: 224px;\\"></strong></p>\\n\\n<pre><strong>输入：</strong>points = [[-3,0],[3,0],[2,6],[5,4],[0,9],[7,8]], r = 5\\n<strong>输出：</strong>5\\n<strong>解释：</strong>如果圆形的飞镖靶的圆心为 (0,4) ，半径为 5 ，则除了 (7,8) 之外的飞镖都落在靶上，此时落在靶上的飞镖数最大，值为 5 。</pre>\\n\\n<p><strong>示例 3：</strong></p>\\n\\n<pre><strong>输入：</strong>points = [[-2,0],[2,0],[0,2],[0,-2]], r = 1\\n<strong>输出：</strong>1\\n</pre>\\n\\n<p><strong>示例 4：</strong></p>\\n\\n<pre><strong>输入：</strong>points = [[1,2],[3,5],[1,-1],[2,3],[4,1],[1,3]], r = 2\\n<strong>输出：</strong>4\\n</pre>\\n\\n<p>&nbsp;</p>\\n\\n<p><strong>提示：</strong></p>\\n\\n<ul>\\n\\t<li><code>1 &lt;= points.length &lt;= 100</code></li>\\n\\t<li><code>points[i].length == 2</code></li>\\n\\t<li><code>-10^4 &lt;= points[i][0], points[i][1] &lt;= 10^4</code></li>\\n\\t<li><code>1 &lt;= r &lt;= 5000</code></li>\\n</ul>\\n","title":"1453. 圆形靶内的最大飞镖数量","relatedTags":["几何","数组","数学"],"difficult":"Hard","lang":["javascript"],"uniqueID":"1453","slug":"1453-Maximum-Number-of-Darts-Inside-of-a-Circular-Dartboard"}')}}]);