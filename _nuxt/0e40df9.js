(window.webpackJsonp=window.webpackJsonp||[]).push([[625],{1423:function(n){n.exports=JSON.parse('{"code":["<pre class=\\"hljs\\"><code><span class=\\"hljs-comment\\">/**\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{number[]}</span> <span class=\\"hljs-variable\\">apples</span></span>\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{number[]}</span> <span class=\\"hljs-variable\\">days</span></span>\\n * <span class=\\"hljs-doctag\\">@return <span class=\\"hljs-type\\">{number}</span></span>\\n */</span>\\n<span class=\\"hljs-keyword\\">var</span> eatenApples = <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span>(<span class=\\"hljs-params\\">apples, days</span>) </span>{\\n    <span class=\\"hljs-keyword\\">let</span> orderList=[]\\n    <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span> <span class=\\"hljs-title\\">insert</span>(<span class=\\"hljs-params\\">[count,rotDay]</span>)</span>{\\n        <span class=\\"hljs-keyword\\">if</span>(orderList.length===<span class=\\"hljs-number\\">0</span> || rotDay &gt;= orderList[orderList.length<span class=\\"hljs-number\\">-1</span>][<span class=\\"hljs-number\\">1</span>]){\\n            orderList.push([count,rotDay])\\n        }<span class=\\"hljs-keyword\\">else</span>{\\n            <span class=\\"hljs-keyword\\">let</span> idx=bsEnd(orderList,rotDay)\\n            orderList.splice(idx,<span class=\\"hljs-number\\">0</span>,[count,rotDay])\\n        }\\n\\n    }\\n    <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span> <span class=\\"hljs-title\\">bsEnd</span>(<span class=\\"hljs-params\\">arr,n</span>)</span>{\\n        <span class=\\"hljs-keyword\\">let</span> lo=<span class=\\"hljs-number\\">0</span>,hi=arr.length<span class=\\"hljs-number\\">-1</span>\\n        <span class=\\"hljs-keyword\\">while</span>(lo&lt;hi){\\n            <span class=\\"hljs-keyword\\">let</span> mid=<span class=\\"hljs-built_in\\">Math</span>.floor((lo+hi)/<span class=\\"hljs-number\\">2</span>)\\n            <span class=\\"hljs-keyword\\">if</span>(arr[mid][<span class=\\"hljs-number\\">1</span>]&lt;n)lo=mid+<span class=\\"hljs-number\\">1</span>\\n            <span class=\\"hljs-keyword\\">else</span> hi=mid\\n        }\\n        <span class=\\"hljs-keyword\\">return</span> hi\\n    }\\n    <span class=\\"hljs-keyword\\">let</span> res=<span class=\\"hljs-number\\">0</span>\\n    <span class=\\"hljs-keyword\\">let</span> len=apples.length\\n    <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> i=<span class=\\"hljs-number\\">0</span>;i&lt;<span class=\\"hljs-number\\">40005</span>;i++){\\n        <span class=\\"hljs-keyword\\">if</span>(i&lt;len){\\n            <span class=\\"hljs-keyword\\">let</span> rotDay=i+<span class=\\"hljs-number\\">1</span>+days[i]\\n            <span class=\\"hljs-keyword\\">let</span> count=apples[i]\\n            insert([count,rotDay])\\n        }\\n        <span class=\\"hljs-comment\\">// console.log(orderList)</span>\\n        <span class=\\"hljs-keyword\\">if</span>(orderList.length&gt;<span class=\\"hljs-number\\">0</span>){\\n            <span class=\\"hljs-keyword\\">let</span> eatData=orderList[<span class=\\"hljs-number\\">0</span>]\\n            <span class=\\"hljs-keyword\\">while</span>(eatData[<span class=\\"hljs-number\\">1</span>]&lt;=i+<span class=\\"hljs-number\\">1</span> || eatData[<span class=\\"hljs-number\\">0</span>]===<span class=\\"hljs-number\\">0</span>){\\n                orderList.shift()\\n                <span class=\\"hljs-keyword\\">if</span>(orderList.length===<span class=\\"hljs-number\\">0</span>)<span class=\\"hljs-keyword\\">break</span>\\n                eatData=orderList[<span class=\\"hljs-number\\">0</span>]\\n            }\\n            <span class=\\"hljs-keyword\\">if</span>(orderList.length&gt;<span class=\\"hljs-number\\">0</span>){\\n                orderList[<span class=\\"hljs-number\\">0</span>][<span class=\\"hljs-number\\">0</span>]--\\n                res++\\n            }\\n\\n        }\\n    }\\n    <span class=\\"hljs-keyword\\">return</span> res\\n\\n};\\n</code></pre>\\n"],"querySlug":"maximum-number-of-eaten-apples","created_at":"2021-01-10","timeArr":[2021,0,10,17,57,19,0],"hasThinking":false,"content":"<p>有一棵特殊的苹果树，一连 <code>n</code> 天，每天都可以长出若干个苹果。在第 <code>i</code> 天，树上会长出 <code>apples[i]</code> 个苹果，这些苹果将会在 <code>days[i]</code> 天后（也就是说，第 <code>i + days[i]</code> 天时）腐烂，变得无法食用。也可能有那么几天，树上不会长出新的苹果，此时用 <code>apples[i] == 0</code> 且 <code>days[i] == 0</code> 表示。</p>\\n\\n<p>你打算每天 <strong>最多</strong> 吃一个苹果来保证营养均衡。注意，你可以在这 <code>n</code> 天之后继续吃苹果。</p>\\n\\n<p>给你两个长度为 <code>n</code> 的整数数组 <code>days</code> 和 <code>apples</code> ，返回你可以吃掉的苹果的最大数目<em>。</em></p>\\n\\n<p> </p>\\n\\n<p><strong>示例 1：</strong></p>\\n\\n<pre><strong>输入：</strong>apples = [1,2,3,5,2], days = [3,2,1,4,2]\\n<strong>输出：</strong>7\\n<strong>解释：</strong>你可以吃掉 7 个苹果：\\n- 第一天，你吃掉第一天长出来的苹果。\\n- 第二天，你吃掉一个第二天长出来的苹果。\\n- 第三天，你吃掉一个第二天长出来的苹果。过了这一天，第三天长出来的苹果就已经腐烂了。\\n- 第四天到第七天，你吃的都是第四天长出来的苹果。\\n</pre>\\n\\n<p><strong>示例 2：</strong></p>\\n\\n<pre><strong>输入：</strong>apples = [3,0,0,0,0,2], days = [3,0,0,0,0,2]\\n<strong>输出：</strong>5\\n<strong>解释：</strong>你可以吃掉 5 个苹果：\\n- 第一天到第三天，你吃的都是第一天长出来的苹果。\\n- 第四天和第五天不吃苹果。\\n- 第六天和第七天，你吃的都是第六天长出来的苹果。\\n</pre>\\n\\n<p> </p>\\n\\n<p><strong>提示：</strong></p>\\n\\n<ul>\\n\\t<li><code>apples.length == n</code></li>\\n\\t<li><code>days.length == n</code></li>\\n\\t<li><code>1 &lt;= n &lt;= 2 * 10<sup>4</sup></code></li>\\n\\t<li><code>0 &lt;= apples[i], days[i] &lt;= 2 * 10<sup>4</sup></code></li>\\n\\t<li>只有在 <code>apples[i] = 0</code> 时，<code>days[i] = 0</code> 才成立</li>\\n</ul>\\n","title":"1705. 吃苹果的最大数目","relatedTags":["贪心","数组","堆（优先队列）"],"difficult":"Middle","lang":["javascript"],"uniqueID":"1705","slug":"1705-Maximum-Number-of-Eaten-Apples"}')}}]);