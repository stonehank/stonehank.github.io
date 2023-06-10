(window.webpackJsonp=window.webpackJsonp||[]).push([[972],{1770:function(n){n.exports=JSON.parse('{"code":["<pre class=\\"hljs\\"><code><span class=\\"hljs-comment\\">/**\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{number[][]}</span> <span class=\\"hljs-variable\\">points</span></span>\\n * <span class=\\"hljs-doctag\\">@return <span class=\\"hljs-type\\">{number[][]}</span></span>\\n */</span>\\n<span class=\\"hljs-keyword\\">var</span> outerTrees = <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span>(<span class=\\"hljs-params\\">points</span>) </span>{\\n  <span class=\\"hljs-keyword\\">let</span> start=points[<span class=\\"hljs-number\\">0</span>]\\n  <span class=\\"hljs-comment\\">// 找到最左侧的点</span>\\n  <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> i=<span class=\\"hljs-number\\">1</span>;i&lt;points.length;i++){\\n    <span class=\\"hljs-keyword\\">if</span>(points[i][<span class=\\"hljs-number\\">0</span>]&lt;start[<span class=\\"hljs-number\\">0</span>]){\\n      start=points[i]\\n    }\\n  }\\n  <span class=\\"hljs-keyword\\">let</span> current=start\\n  <span class=\\"hljs-comment\\">// 用于存放不在左右侧，而在当前线上的点</span>\\n  <span class=\\"hljs-keyword\\">let</span> collinearPoints=[]\\n  <span class=\\"hljs-keyword\\">let</span> res=[start],hash={}\\n  hash[start[<span class=\\"hljs-number\\">0</span>]+<span class=\\"hljs-string\\">\' \'</span>+start[<span class=\\"hljs-number\\">1</span>]]=<span class=\\"hljs-literal\\">true</span>\\n  <span class=\\"hljs-keyword\\">while</span>(<span class=\\"hljs-literal\\">true</span>){\\n    <span class=\\"hljs-keyword\\">let</span> next=points[<span class=\\"hljs-number\\">0</span>]\\n    <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> i=<span class=\\"hljs-number\\">1</span>;i&lt;points.length;i++){\\n      <span class=\\"hljs-keyword\\">if</span>(isSame(current,points[i]))<span class=\\"hljs-keyword\\">continue</span>\\n\\n      <span class=\\"hljs-keyword\\">let</span> res=crossProduct(current,next,points[i])\\n      <span class=\\"hljs-comment\\">// 大于0 说明在当前current--&gt;next这条直线的左侧</span>\\n      <span class=\\"hljs-keyword\\">if</span>(res&gt;<span class=\\"hljs-number\\">0</span>){\\n        next=points[i]\\n        collinearPoints=[]\\n      <span class=\\"hljs-comment\\">// 等于0 说明在直线上</span>\\n      }<span class=\\"hljs-keyword\\">else</span> <span class=\\"hljs-keyword\\">if</span>(res===<span class=\\"hljs-number\\">0</span>){\\n        <span class=\\"hljs-comment\\">// 找出距离current更小的点作为线上点，继续检查距离更远的点</span>\\n        <span class=\\"hljs-keyword\\">if</span>(distance(current,next)&lt;distance(current,points[i])){\\n          collinearPoints.push(next)\\n          next=points[i]\\n        }<span class=\\"hljs-keyword\\">else</span>{\\n          collinearPoints.push(points[i])\\n        }\\n      }\\n    }\\n    <span class=\\"hljs-comment\\">// 将当前线上点加入结果</span>\\n    <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> [x,y] <span class=\\"hljs-keyword\\">of</span> collinearPoints){\\n      <span class=\\"hljs-keyword\\">if</span>(hash[x+<span class=\\"hljs-string\\">\' \'</span>+y]==<span class=\\"hljs-literal\\">null</span>){\\n        hash[x+<span class=\\"hljs-string\\">\' \'</span>+y]=<span class=\\"hljs-literal\\">true</span>\\n        res.push([x,y])\\n      }\\n    }\\n\\n    <span class=\\"hljs-comment\\">// 如果已经和start连接上，可以跳出</span>\\n    <span class=\\"hljs-keyword\\">if</span>(isSame(next,start))<span class=\\"hljs-keyword\\">break</span>\\n    res.push(next)\\n    <span class=\\"hljs-comment\\">// 更新current点，然后继续从每一个点开始检测</span>\\n    current=next\\n\\n  }\\n  <span class=\\"hljs-keyword\\">return</span> res\\n  <span class=\\"hljs-comment\\">// 检查两点是否相同</span>\\n  <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span> <span class=\\"hljs-title\\">isSame</span>(<span class=\\"hljs-params\\">p1,p2</span>)</span>{\\n    <span class=\\"hljs-keyword\\">return</span> p1[<span class=\\"hljs-number\\">0</span>]===p2[<span class=\\"hljs-number\\">0</span>] &amp;&amp; p1[<span class=\\"hljs-number\\">1</span>]===p2[<span class=\\"hljs-number\\">1</span>]\\n  }\\n  <span class=\\"hljs-comment\\">// 检查c点在ab有向直线的左侧(大于0)还是右侧(小于0)还是线上(等于0)</span>\\n  <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span> <span class=\\"hljs-title\\">crossProduct</span>(<span class=\\"hljs-params\\">a,b,c</span>)</span>{\\n    <span class=\\"hljs-keyword\\">let</span> y1=a[<span class=\\"hljs-number\\">1</span>]-b[<span class=\\"hljs-number\\">1</span>],\\n        y2=a[<span class=\\"hljs-number\\">1</span>]-c[<span class=\\"hljs-number\\">1</span>],\\n        x1=a[<span class=\\"hljs-number\\">0</span>]-b[<span class=\\"hljs-number\\">0</span>],\\n        x2=a[<span class=\\"hljs-number\\">0</span>]-c[<span class=\\"hljs-number\\">0</span>]\\n    <span class=\\"hljs-keyword\\">return</span> y2*x1-y1*x2\\n  }\\n  <span class=\\"hljs-comment\\">// p1,p2的距离</span>\\n  <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span> <span class=\\"hljs-title\\">distance</span>(<span class=\\"hljs-params\\">p1,p2</span>)</span>{\\n    <span class=\\"hljs-keyword\\">return</span> <span class=\\"hljs-built_in\\">Math</span>.abs(p2[<span class=\\"hljs-number\\">0</span>]-p1[<span class=\\"hljs-number\\">0</span>])+<span class=\\"hljs-built_in\\">Math</span>.abs(p2[<span class=\\"hljs-number\\">1</span>]-p1[<span class=\\"hljs-number\\">1</span>])\\n  }    \\n};\\n</code></pre>\\n"],"querySlug":"erect-the-fence","created_at":"2019-04-28","timeArr":[2019,3,28,0,28,19,0],"hasThinking":true,"thinking":"<hr>\\n<p>思路：</p>\\n<ol>\\n<li>\\n<p>暴力解<code>O(N^3)</code></p>\\n<p>对于每一个点，找到另一个点组成一条直线，再对每个点判断是在这条直线左侧还是右侧，如果全部都只在一侧，那么说明这两个点是有效点。</p>\\n<p>通过提早跳出(一但发现两侧都<code>&gt;0</code>，立刻跳出)，勉强能通过。</p>\\n</li>\\n<li>\\n<p>凸包算法，<code>O(N*M)</code>，<code>M</code>为有效点的个数。</p>\\n<p>算法思想如下：</p>\\n<ol>\\n<li>\\n<p>找到最左侧点作为起始点<code>start</code>。</p>\\n</li>\\n<li>\\n<p>以<code>points[0]</code>作为直线点<code>next</code>，对遍历其他点<code>points[i]</code>，</p>\\n<p>如果<code>points[i]</code>在以<code>start</code>和<code>next</code>组成的有向直线左侧，那么更新<code>next</code>为<code>points[i]</code>；</p>\\n<p>如果在右侧，继续检测；</p>\\n<p>如果在直线上，那么选取与<code>current</code>距离更远的作为<code>next</code>，并且用一个数组保存距离更近的点。</p>\\n</li>\\n<li>\\n<p>遍历一遍后，<code>next</code>已经确定，这时<code>current</code>与<code>next</code>组成的直线左侧没有任何点，如果存在直线上的点，添加进结果。</p>\\n</li>\\n<li>\\n<p>如果<code>next</code>已经就是<code>start</code>点，说明已经绕了一圈，跳出；否则添加<code>next</code>到结果，并且更新<code>current</code>为<code>start</code>，继续重头检测。</p>\\n</li>\\n</ol>\\n<p>比起<code>暴力解</code>，算法通过只找直线左侧的点，如果发现点<code>p</code>在直线左侧，则继续从点<code>p</code>找，这时候之前找的点肯定在点<code>p</code>右侧，不必重复计算，提升效率。</p>\\n</li>\\n</ol>\\n","content":"<p>在一个二维的花园中，有一些用 (x, y) 坐标表示的树。由于安装费用十分昂贵，你的任务是先用<strong>最短</strong>的绳子围起所有的树。只有当所有的树都被绳子包围时，花园才能围好栅栏。你需要找到正好位于栅栏边界上的树的坐标。</p>\\r\\n\\r\\n<p>&nbsp;</p>\\r\\n\\r\\n<p><strong>示例 1:</strong></p>\\r\\n\\r\\n<pre><strong>输入:</strong> [[1,1],[2,2],[2,0],[2,4],[3,3],[4,2]]\\r\\n<strong>输出:</strong> [[1,1],[2,0],[4,2],[3,3],[2,4]]\\r\\n<strong>解释:</strong>\\r\\n<img src=\\"https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/10/12/erect_the_fence_1.png\\" style=\\"width: 100%; max-width: 320px\\">\\r\\n</pre>\\r\\n\\r\\n<p><strong>示例 2:</strong></p>\\r\\n\\r\\n<pre><strong>输入:</strong> [[1,2],[2,2],[4,2]]\\r\\n<strong>输出:</strong> [[1,2],[2,2],[4,2]]\\r\\n<strong>解释:</strong>\\r\\n<img src=\\"https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/10/12/erect_the_fence_2.png\\" style=\\"width: 100%; max-width: 320px\\">\\r\\n即使树都在一条直线上，你也需要先用绳子包围它们。\\r\\n</pre>\\r\\n\\r\\n<p>&nbsp;</p>\\r\\n\\r\\n<p><strong>注意:</strong></p>\\r\\n\\r\\n<ol>\\r\\n\\t<li>所有的树应当被围在一起。你不能剪断绳子来包围树或者把树分成一组以上。</li>\\r\\n\\t<li>输入的整数在 0 到 100 之间。</li>\\r\\n\\t<li>花园至少有一棵树。</li>\\r\\n\\t<li>所有树的坐标都是不同的。</li>\\r\\n\\t<li>输入的点<strong>没有</strong>顺序。输出顺序也没有要求。</li>\\r\\n</ol>","title":"587. 安装栅栏","relatedTags":["几何","数组","数学"],"difficult":"Hard","lang":["javascript"],"uniqueID":"587","slug":"587-Erect-the-Fence"}')}}]);