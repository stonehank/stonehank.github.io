(window.webpackJsonp=window.webpackJsonp||[]).push([[219],{1017:function(n){n.exports=JSON.parse('{"code":["<pre class=\\"hljs\\"><code><span class=\\"hljs-comment\\">/**\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{number[]}</span> <span class=\\"hljs-variable\\">weights</span></span>\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{number}</span> <span class=\\"hljs-variable\\">D</span></span>\\n * <span class=\\"hljs-doctag\\">@return <span class=\\"hljs-type\\">{number}</span></span>\\n */</span>\\n<span class=\\"hljs-keyword\\">var</span> shipWithinDays = <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span>(<span class=\\"hljs-params\\">weights, D</span>) </span>{\\n  <span class=\\"hljs-keyword\\">let</span> maxOne=-<span class=\\"hljs-literal\\">Infinity</span>\\n  <span class=\\"hljs-keyword\\">let</span> sum=<span class=\\"hljs-number\\">0</span>\\n  <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> w <span class=\\"hljs-keyword\\">of</span> weights){\\n    maxOne=<span class=\\"hljs-built_in\\">Math</span>.max(maxOne,w)\\n    sum+=w\\n  }\\n  <span class=\\"hljs-keyword\\">let</span> lo=maxOne,hi=sum\\n  <span class=\\"hljs-keyword\\">while</span>(lo&lt;hi){\\n    <span class=\\"hljs-keyword\\">let</span> mid=<span class=\\"hljs-built_in\\">Math</span>.floor((lo+hi)/<span class=\\"hljs-number\\">2</span>)\\n    <span class=\\"hljs-keyword\\">let</span> day=<span class=\\"hljs-number\\">1</span>\\n    <span class=\\"hljs-keyword\\">let</span> curCap=mid\\n    <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> i=<span class=\\"hljs-number\\">0</span>;i&lt;weights.length;){\\n      <span class=\\"hljs-keyword\\">if</span>(curCap-weights[i]&gt;=<span class=\\"hljs-number\\">0</span>){\\n        curCap-=weights[i++]\\n      }<span class=\\"hljs-keyword\\">else</span>{\\n        curCap=mid\\n        day++\\n      }\\n    }\\n    <span class=\\"hljs-keyword\\">if</span>(day&gt;D){\\n      lo=mid+<span class=\\"hljs-number\\">1</span>\\n    }<span class=\\"hljs-keyword\\">else</span>{\\n      hi=mid\\n    }\\n  }\\n  <span class=\\"hljs-keyword\\">return</span> lo\\n};\\n</code></pre>\\n"],"querySlug":"capacity-to-ship-packages-within-d-days","created_at":"2019-03-17","timeArr":[2019,2,17,10,49,58,0],"hasThinking":false,"content":"<p>传送带上的包裹必须在 D 天内从一个港口运送到另一个港口。</p>\\n\\n<p>传送带上的第 <code>i</code> 个包裹的重量为 <code>weights[i]</code>。每一天，我们都会按给出重量的顺序往传送带上装载包裹。我们装载的重量不会超过船的最大运载重量。</p>\\n\\n<p>返回能在 <code>D</code> 天内将传送带上的所有包裹送达的船的最低运载能力。</p>\\n\\n<p> </p>\\n\\n<p><strong>示例 1：</strong></p>\\n\\n<pre>\\n<strong>输入：</strong>weights = [1,2,3,4,5,6,7,8,9,10], D = 5\\n<strong>输出：</strong>15\\n<strong>解释：</strong>\\n船舶最低载重 15 就能够在 5 天内送达所有包裹，如下所示：\\n第 1 天：1, 2, 3, 4, 5\\n第 2 天：6, 7\\n第 3 天：8\\n第 4 天：9\\n第 5 天：10\\n\\n请注意，货物必须按照给定的顺序装运，因此使用载重能力为 14 的船舶并将包装分成 (2, 3, 4, 5), (1, 6, 7), (8), (9), (10) 是不允许的。 \\n</pre>\\n\\n<p><strong>示例 2：</strong></p>\\n\\n<pre>\\n<strong>输入：</strong>weights = [3,2,2,4,1,4], D = 3\\n<strong>输出：</strong>6\\n<strong>解释：</strong>\\n船舶最低载重 6 就能够在 3 天内送达所有包裹，如下所示：\\n第 1 天：3, 2\\n第 2 天：2, 4\\n第 3 天：1, 4\\n</pre>\\n\\n<p><strong>示例 3：</strong></p>\\n\\n<pre>\\n<strong>输入：</strong>weights = [1,2,3,1,1], D = 4\\n<strong>输出：</strong>3\\n<strong>解释：</strong>\\n第 1 天：1\\n第 2 天：2\\n第 3 天：3\\n第 4 天：1, 1\\n</pre>\\n\\n<p> </p>\\n\\n<p><strong>提示：</strong></p>\\n\\n<ul>\\n\\t<li><code>1 <= D <= weights.length <= 5 * 10<sup>4</sup></code></li>\\n\\t<li><code>1 <= weights[i] <= 500</code></li>\\n</ul>\\n","title":"1011. 在 D 天内送达包裹的能力","relatedTags":["贪心","数组","二分查找"],"difficult":"Middle","lang":["javascript"],"uniqueID":"1011","slug":"1011-Capacity-To-Ship-Packages-Within-D-Days"}')}}]);