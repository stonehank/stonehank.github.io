(window.webpackJsonp=window.webpackJsonp||[]).push([[1147],{1945:function(n){n.exports=JSON.parse('{"code":["<pre class=\\"hljs\\"><code><span class=\\"hljs-comment\\">/**\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{number}</span> <span class=\\"hljs-variable\\">K</span></span>\\n * <span class=\\"hljs-doctag\\">@return <span class=\\"hljs-type\\">{number}</span></span>\\n */</span>\\n<span class=\\"hljs-keyword\\">var</span> preimageSizeFZF = <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span>(<span class=\\"hljs-params\\">K</span>) </span>{\\n  <span class=\\"hljs-keyword\\">let</span> lo=<span class=\\"hljs-number\\">1</span>,hi=K*<span class=\\"hljs-number\\">5</span>\\n  <span class=\\"hljs-keyword\\">while</span>(lo&lt;=hi){\\n    <span class=\\"hljs-keyword\\">let</span> mid=<span class=\\"hljs-built_in\\">Math</span>.floor((lo+hi)/<span class=\\"hljs-number\\">2</span>)\\n    <span class=\\"hljs-keyword\\">let</span> count=calc(mid)\\n    <span class=\\"hljs-keyword\\">if</span>(count&lt;K)lo=mid+<span class=\\"hljs-number\\">1</span>\\n    <span class=\\"hljs-keyword\\">else</span> hi=mid<span class=\\"hljs-number\\">-1</span>\\n  }\\n  <span class=\\"hljs-keyword\\">let</span> ans=<span class=\\"hljs-number\\">0</span>\\n  <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> i=lo;;i++){\\n    <span class=\\"hljs-keyword\\">let</span> n=calc(i)\\n    <span class=\\"hljs-keyword\\">if</span>(n!==K)<span class=\\"hljs-keyword\\">break</span>\\n    ans++\\n  }\\n  <span class=\\"hljs-keyword\\">return</span> ans\\n  <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span> <span class=\\"hljs-title\\">calc</span>(<span class=\\"hljs-params\\">n</span>)</span>{\\n    <span class=\\"hljs-keyword\\">let</span> res=<span class=\\"hljs-number\\">0</span>, x=<span class=\\"hljs-number\\">5</span>\\n    <span class=\\"hljs-keyword\\">while</span>(x&lt;=n){\\n      res+=<span class=\\"hljs-built_in\\">Math</span>.floor(n/x)\\n      x*=<span class=\\"hljs-number\\">5</span>\\n    }\\n    <span class=\\"hljs-keyword\\">return</span> res\\n  }\\n};\\n</code></pre>\\n","<pre class=\\"hljs\\"><code><span class=\\"hljs-class\\"><span class=\\"hljs-keyword\\">class</span> <span class=\\"hljs-title\\">Solution</span><span class=\\"hljs-params\\">(object)</span>:</span>\\n    <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">def</span> <span class=\\"hljs-title\\">preimageSizeFZF</span><span class=\\"hljs-params\\">(self, K)</span>:</span>\\n        <span class=\\"hljs-string\\">\\"\\"\\"\\n        :type K: int\\n        :rtype: int\\n        \\"\\"\\"</span>\\n        <span class=\\"hljs-keyword\\">if</span> K==<span class=\\"hljs-number\\">0</span>:<span class=\\"hljs-keyword\\">return</span> <span class=\\"hljs-number\\">5</span>\\n        lo,hi=K,K*<span class=\\"hljs-number\\">5</span>\\n        <span class=\\"hljs-keyword\\">while</span> lo&lt;=hi:\\n          mid=(lo+hi)//<span class=\\"hljs-number\\">2</span>\\n          count=<span class=\\"hljs-number\\">0</span>\\n          pivot=<span class=\\"hljs-number\\">5</span>\\n          \\n          <span class=\\"hljs-keyword\\">while</span> pivot&lt;=mid:\\n            count+=mid//pivot\\n            pivot*=<span class=\\"hljs-number\\">5</span>\\n          <span class=\\"hljs-comment\\"># print mid,count</span>\\n          <span class=\\"hljs-keyword\\">if</span> count&lt;K:\\n            lo=mid+<span class=\\"hljs-number\\">1</span>\\n          <span class=\\"hljs-keyword\\">elif</span> count&gt;K:\\n            hi=mid<span class=\\"hljs-number\\">-1</span>\\n          <span class=\\"hljs-keyword\\">else</span>:\\n            <span class=\\"hljs-keyword\\">return</span> <span class=\\"hljs-number\\">5</span>\\n          \\n        <span class=\\"hljs-keyword\\">return</span> <span class=\\"hljs-number\\">0</span>\\n</code></pre>\\n"],"querySlug":"preimage-size-of-factorial-zeroes-function","hasThinking":false,"content":"<p> <code>f(x)</code> 是 <code>x!</code> 末尾是 0 的数量。（回想一下 <code>x! = 1 * 2 * 3 * ... * x</code>，且 <code>0! = 1</code> ）</p>\\n\\n<p>例如， <code>f(3) = 0</code> ，因为 3! = 6 的末尾没有 0 ；而 <code>f(11) = 2</code> ，因为 11!= 39916800 末端有 2 个 0 。给定 <code>K</code>，找出多少个非负整数 <code>x</code> ，能满足 <code>f(x) = K</code> 。</p>\\n\\n<p> </p>\\n\\n<p><strong>示例 1：</strong><strong> </strong></p>\\n\\n<pre>\\n<strong>输入：</strong>K = 0<strong>\\n输出：</strong>5<strong>\\n解释：</strong>0!, 1!, 2!, 3!, and 4! 均符合 K = 0 的条件。\\n</pre>\\n\\n<p><strong>示例 2：</strong></p>\\n\\n<pre>\\n<strong>输入：</strong>K = 5\\n<strong>输出：</strong>0\\n<strong>解释：</strong>没有匹配到这样的 x!，符合 K = 5 的条件。</pre>\\n\\n<p> </p>\\n\\n<p><strong>提示：</strong></p>\\n\\n<ul>\\n\\t<li>\\n\\t<p><code>K</code> 是范围在 <code>[0, 10^9]</code> 的整数<strong>。</strong></p>\\n\\t</li>\\n</ul>\\n","title":"793. 阶乘函数后 K 个零","relatedTags":["数学","二分查找"],"difficult":"Hard","lang":["javascript","python"],"uniqueID":"793","slug":"793-Preimage-Size-of-Factorial-Zeroes-Function"}')}}]);