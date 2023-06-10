(window.webpackJsonp=window.webpackJsonp||[]).push([[637],{1435:function(n){n.exports=JSON.parse('{"code":["<pre class=\\"hljs\\"><code><span class=\\"hljs-comment\\">/**\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{number[]}</span> <span class=\\"hljs-variable\\">source</span></span>\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{number[]}</span> <span class=\\"hljs-variable\\">target</span></span>\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{number[][]}</span> <span class=\\"hljs-variable\\">allowedSwaps</span></span>\\n * <span class=\\"hljs-doctag\\">@return <span class=\\"hljs-type\\">{number}</span></span>\\n */</span>\\n<span class=\\"hljs-keyword\\">var</span> minimumHammingDistance = <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span>(<span class=\\"hljs-params\\">source, target, allowedSwaps</span>) </span>{\\n    <span class=\\"hljs-keyword\\">let</span> len=source.length\\n    <span class=\\"hljs-keyword\\">let</span> uf=<span class=\\"hljs-built_in\\">Array</span>(len).fill().map(<span class=\\"hljs-function\\">(<span class=\\"hljs-params\\">_,i</span>)=&gt;</span>i)\\n    <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span> <span class=\\"hljs-title\\">union</span>(<span class=\\"hljs-params\\">a,b</span>)</span>{\\n        <span class=\\"hljs-keyword\\">let</span> i=find(a)\\n        <span class=\\"hljs-keyword\\">let</span> j=find(b)\\n        <span class=\\"hljs-keyword\\">if</span>(i===j)<span class=\\"hljs-keyword\\">return</span>\\n        uf[i]=j\\n    }\\n    <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span> <span class=\\"hljs-title\\">find</span>(<span class=\\"hljs-params\\">i</span>)</span>{\\n        <span class=\\"hljs-keyword\\">if</span>(uf[i]!==i){\\n            uf[i]=find(uf[i])\\n        }\\n        <span class=\\"hljs-keyword\\">return</span> uf[i]\\n    }\\n    <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> [x,y] <span class=\\"hljs-keyword\\">of</span> allowedSwaps){\\n        union(x,y)\\n    }\\n    <span class=\\"hljs-keyword\\">let</span> util=[]\\n    <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> i=<span class=\\"hljs-number\\">0</span>;i&lt;uf.length;i++){\\n        uf[i]=find(uf[i])\\n        util.push([uf[i],i])\\n    }\\n    util.sort(<span class=\\"hljs-function\\">(<span class=\\"hljs-params\\">a,b</span>)=&gt;</span>[a[<span class=\\"hljs-number\\">0</span>]-b[<span class=\\"hljs-number\\">0</span>]])\\n    <span class=\\"hljs-comment\\">// console.log(util)</span>\\n    <span class=\\"hljs-keyword\\">let</span> group=[[util[<span class=\\"hljs-number\\">0</span>][<span class=\\"hljs-number\\">1</span>]]]\\n    <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> i=<span class=\\"hljs-number\\">1</span>;i&lt;util.length;i++){\\n        <span class=\\"hljs-keyword\\">if</span>(util[i][<span class=\\"hljs-number\\">0</span>]===util[i<span class=\\"hljs-number\\">-1</span>][<span class=\\"hljs-number\\">0</span>]){\\n            group[group.length<span class=\\"hljs-number\\">-1</span>].push(util[i][<span class=\\"hljs-number\\">1</span>])\\n        }<span class=\\"hljs-keyword\\">else</span>{\\n            group.push([util[i][<span class=\\"hljs-number\\">1</span>]])\\n        }\\n    }\\n    <span class=\\"hljs-comment\\">// let group=[[0]]</span>\\n    <span class=\\"hljs-comment\\">// for(let i=1;i&lt;uf.length;i++){</span>\\n    <span class=\\"hljs-comment\\">//     let hasG=false</span>\\n    <span class=\\"hljs-comment\\">//     for(let j=0;j&lt;group.length;j++){</span>\\n    <span class=\\"hljs-comment\\">//         let g=group[j][0]</span>\\n    <span class=\\"hljs-comment\\">//         if(find(i)===find(g)){</span>\\n    <span class=\\"hljs-comment\\">//             group[j].push(i)</span>\\n    <span class=\\"hljs-comment\\">//             hasG=true</span>\\n    <span class=\\"hljs-comment\\">//             break</span>\\n    <span class=\\"hljs-comment\\">//         }</span>\\n    <span class=\\"hljs-comment\\">//     }</span>\\n    <span class=\\"hljs-comment\\">//     if(!hasG){</span>\\n    <span class=\\"hljs-comment\\">//         group.push([i])</span>\\n    <span class=\\"hljs-comment\\">//     }</span>\\n    <span class=\\"hljs-comment\\">// }</span>\\n    <span class=\\"hljs-comment\\">// console.log(uf,group)</span>\\n    <span class=\\"hljs-keyword\\">let</span> res=<span class=\\"hljs-number\\">0</span>\\n    <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> i=<span class=\\"hljs-number\\">0</span>;i&lt;group.length;i++){\\n        <span class=\\"hljs-keyword\\">let</span> g=group[i]\\n        <span class=\\"hljs-keyword\\">let</span> c1={}\\n        <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> j=<span class=\\"hljs-number\\">0</span>;j&lt;g.length;j++){\\n            <span class=\\"hljs-keyword\\">if</span>(c1[source[g[j]]]==<span class=\\"hljs-literal\\">null</span>)c1[source[g[j]]]=<span class=\\"hljs-number\\">0</span>\\n            c1[source[g[j]]]++\\n        }\\n        <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> j=<span class=\\"hljs-number\\">0</span>;j&lt;g.length;j++){\\n            <span class=\\"hljs-keyword\\">let</span> t=target[g[j]]\\n            <span class=\\"hljs-keyword\\">if</span>(c1[t]&gt;<span class=\\"hljs-number\\">0</span>)c1[t]--\\n            <span class=\\"hljs-keyword\\">else</span> res++\\n        }\\n    }\\n    <span class=\\"hljs-keyword\\">return</span> res\\n};\\n</code></pre>\\n"],"querySlug":"minimize-hamming-distance-after-swap-operations","created_at":"2021-02-27","timeArr":[2021,1,27,13,23,41,0],"hasThinking":false,"content":"<p>给你两个整数数组 <code>source</code> 和 <code>target</code> ，长度都是 <code>n</code> 。还有一个数组 <code>allowedSwaps</code> ，其中每个 <code>allowedSwaps[i] = [a<sub>i</sub>, b<sub>i</sub>]</code> 表示你可以交换数组 <code>source</code> 中下标为 <code>a<sub>i</sub></code> 和 <code>b<sub>i</sub></code>（<strong>下标从 0 开始</strong>）的两个元素。注意，你可以按 <strong>任意</strong> 顺序 <strong>多次</strong> 交换一对特定下标指向的元素。</p>\\n\\n<p>相同长度的两个数组 <code>source</code> 和 <code>target</code> 间的 <strong>汉明距离</strong> 是元素不同的下标数量。形式上，其值等于满足 <code>source[i] != target[i]</code> （<strong>下标从 0 开始</strong>）的下标 <code>i</code>（<code>0 &lt;= i &lt;= n-1</code>）的数量。</p>\\n\\n<p>在对数组 <code>source</code> 执行 <strong>任意</strong> 数量的交换操作后，返回 <code>source</code> 和 <code>target</code> 间的 <strong>最小汉明距离</strong> 。</p>\\n\\n<p> </p>\\n\\n<p><strong>示例 1：</strong></p>\\n\\n<pre><strong>输入：</strong>source = [1,2,3,4], target = [2,1,4,5], allowedSwaps = [[0,1],[2,3]]\\n<strong>输出：</strong>1\\n<strong>解释：</strong>source 可以按下述方式转换：\\n- 交换下标 0 和 1 指向的元素：source = [<strong>2</strong>,<strong>1</strong>,3,4]\\n- 交换下标 2 和 3 指向的元素：source = [2,1,<strong>4</strong>,<strong>3</strong>]\\nsource 和 target 间的汉明距离是 1 ，二者有 1 处元素不同，在下标 3 。\\n</pre>\\n\\n<p><strong>示例 2：</strong></p>\\n\\n<pre><strong>输入：</strong>source = [1,2,3,4], target = [1,3,2,4], allowedSwaps = []\\n<strong>输出：</strong>2\\n<strong>解释：</strong>不能对 source 执行交换操作。\\nsource 和 target 间的汉明距离是 2 ，二者有 2 处元素不同，在下标 1 和下标 2 。</pre>\\n\\n<p><strong>示例 3：</strong></p>\\n\\n<pre><strong>输入：</strong>source = [5,1,2,4,3], target = [1,5,4,2,3], allowedSwaps = [[0,4],[4,2],[1,3],[1,4]]\\n<strong>输出：</strong>0\\n</pre>\\n\\n<p> </p>\\n\\n<p><strong>提示：</strong></p>\\n\\n<ul>\\n\\t<li><code>n == source.length == target.length</code></li>\\n\\t<li><code>1 &lt;= n &lt;= 10<sup>5</sup></code></li>\\n\\t<li><code>1 &lt;= source[i], target[i] &lt;= 10<sup>5</sup></code></li>\\n\\t<li><code>0 &lt;= allowedSwaps.length &lt;= 10<sup>5</sup></code></li>\\n\\t<li><code>allowedSwaps[i].length == 2</code></li>\\n\\t<li><code>0 &lt;= a<sub>i</sub>, b<sub>i</sub> &lt;= n - 1</code></li>\\n\\t<li><code>a<sub>i</sub> != b<sub>i</sub></code></li>\\n</ul>\\n","title":"1722. 执行交换操作后的最小汉明距离","relatedTags":["深度优先搜索","并查集","数组"],"difficult":"Middle","lang":["javascript"],"uniqueID":"1722","slug":"1722-Minimize-Hamming-Distance-After-Swap-Operations"}')}}]);