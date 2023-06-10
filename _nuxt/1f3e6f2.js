(window.webpackJsonp=window.webpackJsonp||[]).push([[536],{1334:function(n){n.exports=JSON.parse('{"code":["<pre class=\\"hljs\\"><code><span class=\\"hljs-comment\\">/**\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{number}</span> <span class=\\"hljs-variable\\">numBottles</span></span>\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{number}</span> <span class=\\"hljs-variable\\">numExchange</span></span>\\n * <span class=\\"hljs-doctag\\">@return <span class=\\"hljs-type\\">{number}</span></span>\\n */</span>\\n<span class=\\"hljs-keyword\\">var</span> numWaterBottles = <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span>(<span class=\\"hljs-params\\">numBottles, numExchange</span>) </span>{\\n    <span class=\\"hljs-keyword\\">let</span> res=<span class=\\"hljs-number\\">0</span>\\n    <span class=\\"hljs-keyword\\">let</span> empty=<span class=\\"hljs-number\\">0</span>\\n    <span class=\\"hljs-keyword\\">let</span> full=numBottles\\n    \\n    <span class=\\"hljs-keyword\\">while</span>(full&gt;<span class=\\"hljs-number\\">0</span>){\\n        res+=full\\n        empty+=full\\n        full=<span class=\\"hljs-built_in\\">Math</span>.floor(empty / numExchange)\\n        empty=empty % numExchange\\n    }\\n    <span class=\\"hljs-keyword\\">return</span> res\\n};\\n</code></pre>\\n"],"querySlug":"water-bottles","created_at":"2020-07-19","timeArr":[2020,6,19,10,33,47,0],"hasThinking":false,"content":"<p>小区便利店正在促销，用 <code>numExchange</code> 个空酒瓶可以兑换一瓶新酒。你购入了 <code>numBottles</code> 瓶酒。</p>\\n\\n<p>如果喝掉了酒瓶中的酒，那么酒瓶就会变成空的。</p>\\n\\n<p>请你计算 <strong>最多</strong> 能喝到多少瓶酒。</p>\\n\\n<p>&nbsp;</p>\\n\\n<p><strong>示例 1：</strong></p>\\n\\n<p><strong><img alt=\\"\\" src=\\"https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2020/07/19/sample_1_1875.png\\" style=\\"height: 240px; width: 480px;\\"></strong></p>\\n\\n<pre><strong>输入：</strong>numBottles = 9, numExchange = 3\\n<strong>输出：</strong>13\\n<strong>解释：</strong>你可以用 <code>3</code> 个空酒瓶兑换 1 瓶酒。\\n所以最多能喝到 9 + 3 + 1 = 13 瓶酒。\\n</pre>\\n\\n<p><strong>示例 2：</strong></p>\\n\\n<p><img alt=\\"\\" src=\\"https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2020/07/19/sample_2_1875.png\\" style=\\"height: 240px; width: 790px;\\"></p>\\n\\n<pre><strong>输入：</strong>numBottles = 15, numExchange = 4\\n<strong>输出：</strong>19\\n<strong>解释：</strong>你可以用 <code>4</code> 个空酒瓶兑换 1 瓶酒。\\n所以最多能喝到 15 + 3 + 1 = 19 瓶酒。\\n</pre>\\n\\n<p><strong>示例 3：</strong></p>\\n\\n<pre><strong>输入：</strong>numBottles = 5, numExchange = 5\\n<strong>输出：</strong>6\\n</pre>\\n\\n<p><strong>示例 4：</strong></p>\\n\\n<pre><strong>输入：</strong>numBottles = 2, numExchange = 3\\n<strong>输出：</strong>2\\n</pre>\\n\\n<p>&nbsp;</p>\\n\\n<p><strong>提示：</strong></p>\\n\\n<ul>\\n\\t<li><code>1 &lt;=&nbsp;numBottles &lt;= 100</code></li>\\n\\t<li><code>2 &lt;=&nbsp;numExchange &lt;= 100</code></li>\\n</ul>\\n","title":"1518. 换酒问题","relatedTags":["数学","模拟"],"difficult":"Easy","lang":["javascript"],"uniqueID":"1518","slug":"1518-Water-Bottles"}')}}]);