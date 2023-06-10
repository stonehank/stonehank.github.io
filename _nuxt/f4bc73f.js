(window.webpackJsonp=window.webpackJsonp||[]).push([[309],{1107:function(n){n.exports=JSON.parse('{"code":["<pre class=\\"hljs\\"><code><span class=\\"hljs-comment\\">/**\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{number[]}</span> <span class=\\"hljs-variable\\">arr1</span></span>\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{number[]}</span> <span class=\\"hljs-variable\\">arr2</span></span>\\n * <span class=\\"hljs-doctag\\">@return <span class=\\"hljs-type\\">{number}</span></span>\\n */</span>\\n<span class=\\"hljs-keyword\\">var</span> maxAbsValExpr = <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span>(<span class=\\"hljs-params\\">arr1, arr2</span>) </span>{\\n  <span class=\\"hljs-keyword\\">let</span> aux=[]\\n  <span class=\\"hljs-keyword\\">let</span> res=-<span class=\\"hljs-literal\\">Infinity</span>\\n  <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> j=<span class=\\"hljs-number\\">-1</span>;j&lt;=<span class=\\"hljs-number\\">1</span>;j+=<span class=\\"hljs-number\\">2</span>){\\n    <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> k=<span class=\\"hljs-number\\">-1</span>;k&lt;=<span class=\\"hljs-number\\">1</span>;k+=<span class=\\"hljs-number\\">2</span>){\\n      <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> i=<span class=\\"hljs-number\\">0</span>;i&lt;arr1.length;i++){\\n        aux[i]=arr1[i]*j + arr2[i]*k + i\\n      }\\n      <span class=\\"hljs-keyword\\">let</span> max=<span class=\\"hljs-built_in\\">Math</span>.max.apply(<span class=\\"hljs-built_in\\">Math</span>,aux)\\n      <span class=\\"hljs-keyword\\">let</span> min=<span class=\\"hljs-built_in\\">Math</span>.min.apply(<span class=\\"hljs-built_in\\">Math</span>,aux)\\n      res=<span class=\\"hljs-built_in\\">Math</span>.max(res,max-min)\\n    }\\n  }\\n  <span class=\\"hljs-keyword\\">return</span> res\\n};\\n</code></pre>\\n"],"querySlug":"maximum-of-absolute-value-expression","created_at":"2019-07-21","timeArr":[2019,6,21,12,25,35,0],"hasThinking":true,"thinking":"<hr>\\n<p>思路：</p>\\n<p><code>|a-b|</code>可以看成是 <code>Math.max(a-b,b-a)</code>；</p>\\n<p>先将<code>|arr1[i] - arr1[j]| + |arr2[i] - arr2[j]| + |i - j|</code>写成<code>|a1 - b1| + |a2 - b2| + |i - j|</code>， 以方便观看</p>\\n<p>我们将按索引顺序遍历数组，那么 <code>|i - j|</code>实际就是<code>(i - j)</code></p>\\n<p>上面算式推导出以下4个算式：</p>\\n<pre class=\\"hljs\\"><code>(a1-b1) + (a2-b2) + (i-j)\\n(a1-b1) + (b2-a2) + (i-j)\\n(b1-a1) + (a2-b2) + (i-j)\\n(b1-a1) + (b2-a2) + (i-j)\\n</code></pre>\\n<p>上面4个也可以写成:</p>\\n<pre class=\\"hljs\\"><code>(+a1+a2+i) - (+b1+b2+j)\\n(+a1-a2+i) - (+b1-b2+j)\\n(-a1+a2+i) - (-b1+b2+j)\\n(-a1-a2+i) - (-b1-b2+j)\\n</code></pre>\\n<p><code>a1,a2 / b1,b2</code>对应的符号分别是</p>\\n<pre class=\\"hljs\\"><code>+,+\\n+,-\\n-,+\\n-,-\\n</code></pre>\\n<p>因此只需要遍历4种符号，然后取最大值。</p>\\n","content":"<p>给你两个长度相等的整数数组，返回下面表达式的最大值：</p>\\n\\n<p><code>|arr1[i] - arr1[j]| + |arr2[i] - arr2[j]| + |i - j|</code></p>\\n\\n<p>其中下标 <code>i</code>，<code>j</code> 满足&nbsp;<code>0 &lt;= i, j &lt; arr1.length</code>。</p>\\n\\n<p>&nbsp;</p>\\n\\n<p><strong>示例 1：</strong></p>\\n\\n<pre><strong>输入：</strong>arr1 = [1,2,3,4], arr2 = [-1,4,5,6]\\n<strong>输出：</strong>13\\n</pre>\\n\\n<p><strong>示例 2：</strong></p>\\n\\n<pre><strong>输入：</strong>arr1 = [1,-2,-5,0,10], arr2 = [0,-2,-1,-7,-4]\\n<strong>输出：</strong>20</pre>\\n\\n<p>&nbsp;</p>\\n\\n<p><strong>提示：</strong></p>\\n\\n<ul>\\n\\t<li><code>2 &lt;= arr1.length == arr2.length &lt;= 40000</code></li>\\n\\t<li><code>-10^6 &lt;= arr1[i], arr2[i] &lt;= 10^6</code></li>\\n</ul>\\n","title":"1131. 绝对值表达式的最大值","relatedTags":["数组","数学"],"difficult":"Middle","lang":["javascript"],"uniqueID":"1131","slug":"1131-Maximum-of-Absolute-Value-Expression"}')}}]);