(window.webpackJsonp=window.webpackJsonp||[]).push([[545],{1343:function(n){n.exports=JSON.parse('{"code":["<pre class=\\"hljs\\"><code><span class=\\"hljs-comment\\">/**\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{number[]}</span> <span class=\\"hljs-variable\\">arr</span></span>\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{number}</span> <span class=\\"hljs-variable\\">a</span></span>\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{number}</span> <span class=\\"hljs-variable\\">b</span></span>\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{number}</span> <span class=\\"hljs-variable\\">c</span></span>\\n * <span class=\\"hljs-doctag\\">@return <span class=\\"hljs-type\\">{number}</span></span>\\n */</span>\\n<span class=\\"hljs-keyword\\">var</span> countGoodTriplets = <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span>(<span class=\\"hljs-params\\">arr, a, b, c</span>) </span>{\\n    <span class=\\"hljs-keyword\\">let</span> res=<span class=\\"hljs-number\\">0</span>\\n    <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> i=<span class=\\"hljs-number\\">0</span>;i&lt;arr.length;i++){\\n        <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> j=i+<span class=\\"hljs-number\\">1</span>;j&lt;arr.length;j++){\\n            <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> k=j+<span class=\\"hljs-number\\">1</span>;k&lt;arr.length;k++){\\n                <span class=\\"hljs-keyword\\">let</span> x=arr[i],y=arr[j],z=arr[k]\\n                <span class=\\"hljs-keyword\\">if</span>(<span class=\\"hljs-built_in\\">Math</span>.abs(x-y)&lt;=a &amp;&amp; <span class=\\"hljs-built_in\\">Math</span>.abs(y-z)&lt;=b &amp;&amp; <span class=\\"hljs-built_in\\">Math</span>.abs(x-z)&lt;=c){\\n                    res++\\n                }\\n            }\\n        }\\n    }\\n    <span class=\\"hljs-keyword\\">return</span> res\\n};\\n</code></pre>\\n"],"querySlug":"count-good-triplets","created_at":"2020-08-02","timeArr":[2020,7,2,10,32,43,0],"hasThinking":false,"content":"<p>给你一个整数数组 <code>arr</code> ，以及 <code>a</code>、<code>b</code> 、<code>c</code> 三个整数。请你统计其中好三元组的数量。</p>\\n\\n<p>如果三元组 <code>(arr[i], arr[j], arr[k])</code> 满足下列全部条件，则认为它是一个 <strong>好三元组</strong> 。</p>\\n\\n<ul>\\n\\t<li><code>0 &lt;= i &lt; j &lt; k &lt;&nbsp;arr.length</code></li>\\n\\t<li><code>|arr[i] - arr[j]| &lt;= a</code></li>\\n\\t<li><code>|arr[j] - arr[k]| &lt;= b</code></li>\\n\\t<li><code>|arr[i] - arr[k]| &lt;= c</code></li>\\n</ul>\\n\\n<p>其中 <code>|x|</code> 表示 <code>x</code> 的绝对值。</p>\\n\\n<p>返回 <strong>好三元组的数量</strong> 。</p>\\n\\n<p>&nbsp;</p>\\n\\n<p><strong>示例 1：</strong></p>\\n\\n<pre><strong>输入：</strong>arr = [3,0,1,1,9,7], a = 7, b = 2, c = 3\\n<strong>输出：</strong>4\\n<strong>解释：</strong>一共有 4 个好三元组：[(3,0,1), (3,0,1), (3,1,1), (0,1,1)] 。\\n</pre>\\n\\n<p><strong>示例 2：</strong></p>\\n\\n<pre><strong>输入：</strong>arr = [1,1,2,2,3], a = 0, b = 0, c = 1\\n<strong>输出：</strong>0\\n<strong>解释：</strong>不存在满足所有条件的三元组。\\n</pre>\\n\\n<p>&nbsp;</p>\\n\\n<p><strong>提示：</strong></p>\\n\\n<ul>\\n\\t<li><code>3 &lt;= arr.length &lt;= 100</code></li>\\n\\t<li><code>0 &lt;= arr[i] &lt;= 1000</code></li>\\n\\t<li><code>0 &lt;= a, b, c &lt;= 1000</code></li>\\n</ul>\\n","title":"1534. 统计好三元组","relatedTags":["数组","枚举"],"difficult":"Easy","lang":["javascript"],"uniqueID":"1534","slug":"1534-Count-Good-Triplets"}')}}]);