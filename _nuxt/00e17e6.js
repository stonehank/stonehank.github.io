(window.webpackJsonp=window.webpackJsonp||[]).push([[850],{1648:function(n){n.exports=JSON.parse('{"code":["<pre class=\\"hljs\\"><code><span class=\\"hljs-class\\"><span class=\\"hljs-keyword\\">class</span> <span class=\\"hljs-title\\">Solution</span><span class=\\"hljs-params\\">(object)</span>:</span>\\n    <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">def</span> <span class=\\"hljs-title\\">arrangeCoins</span><span class=\\"hljs-params\\">(self, n)</span>:</span>\\n        <span class=\\"hljs-string\\">\\"\\"\\"\\n        :type n: int\\n        :rtype: int\\n        \\"\\"\\"</span>\\n        <span class=\\"hljs-keyword\\">if</span> n==<span class=\\"hljs-number\\">0</span>:<span class=\\"hljs-keyword\\">return</span> <span class=\\"hljs-number\\">0</span>\\n        <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">def</span> <span class=\\"hljs-title\\">plus</span><span class=\\"hljs-params\\">(start,end)</span>:</span>\\n          <span class=\\"hljs-keyword\\">return</span> (start+end)*(end-start+<span class=\\"hljs-number\\">1</span>)/<span class=\\"hljs-number\\">2</span>\\n        lo,hi=<span class=\\"hljs-number\\">1</span>,n\\n        <span class=\\"hljs-keyword\\">while</span> lo&lt;hi:\\n          mid=(lo+hi)//<span class=\\"hljs-number\\">2</span>\\n          curSum=plus(<span class=\\"hljs-number\\">1</span>,mid)\\n          <span class=\\"hljs-keyword\\">if</span> curSum&lt;n:\\n            lo=mid+<span class=\\"hljs-number\\">1</span>\\n          <span class=\\"hljs-keyword\\">else</span>:\\n            hi=mid\\n        s=plus(<span class=\\"hljs-number\\">1</span>,lo)\\n        <span class=\\"hljs-keyword\\">if</span> s==n:<span class=\\"hljs-keyword\\">return</span> lo\\n        <span class=\\"hljs-keyword\\">return</span> lo<span class=\\"hljs-number\\">-1</span>\\n            \\n          \\n</code></pre>\\n"],"querySlug":"arranging-coins","created_at":"2019-02-25","timeArr":[2019,1,25,22,58,34,0],"hasThinking":false,"content":"<p>你总共有&nbsp;<em>n&nbsp;</em>枚硬币，你需要将它们摆成一个阶梯形状，第&nbsp;<em>k&nbsp;</em>行就必须正好有&nbsp;<em>k&nbsp;</em>枚硬币。</p>\\n\\n<p>给定一个数字&nbsp;<em>n</em>，找出可形成完整阶梯行的总行数。</p>\\n\\n<p><em>n&nbsp;</em>是一个非负整数，并且在32位有符号整型的范围内。</p>\\n\\n<p><strong>示例 1:</strong></p>\\n\\n<pre>\\nn = 5\\n\\n硬币可排列成以下几行:\\n&curren;\\n&curren; &curren;\\n&curren; &curren;\\n\\n因为第三行不完整，所以返回2.\\n</pre>\\n\\n<p><strong>示例 2:</strong></p>\\n\\n<pre>\\nn = 8\\n\\n硬币可排列成以下几行:\\n&curren;\\n&curren; &curren;\\n&curren; &curren; &curren;\\n&curren; &curren;\\n\\n因为第四行不完整，所以返回3.\\n</pre>\\n","title":"441. 排列硬币","relatedTags":["数学","二分查找"],"difficult":"Easy","lang":["python"],"uniqueID":"441","slug":"441-Arranging-Coins"}')}}]);