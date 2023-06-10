(window.webpackJsonp=window.webpackJsonp||[]).push([[977],{1775:function(n){n.exports=JSON.parse('{"code":["<pre class=\\"hljs\\"><code><span class=\\"hljs-comment\\">/**\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{string}</span> <span class=\\"hljs-variable\\">expression</span></span>\\n * <span class=\\"hljs-doctag\\">@return <span class=\\"hljs-type\\">{string}</span></span>\\n */</span>\\n<span class=\\"hljs-keyword\\">var</span> fractionAddition = <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span>(<span class=\\"hljs-params\\">expression</span>) </span>{\\n  <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span> <span class=\\"hljs-title\\">gcd</span>(<span class=\\"hljs-params\\">a,b</span>)</span>{\\n    <span class=\\"hljs-keyword\\">if</span>(b===<span class=\\"hljs-number\\">0</span>)<span class=\\"hljs-keyword\\">return</span> a\\n    <span class=\\"hljs-keyword\\">let</span> m=a % b\\n    <span class=\\"hljs-keyword\\">return</span> gcd(b,m)\\n  }\\n  <span class=\\"hljs-keyword\\">let</span> sign=<span class=\\"hljs-string\\">\\"+\\"</span>\\n  <span class=\\"hljs-keyword\\">let</span> nomiRes=<span class=\\"hljs-number\\">0</span>,denoRes=<span class=\\"hljs-number\\">1</span>\\n  <span class=\\"hljs-keyword\\">let</span> nomi=<span class=\\"hljs-string\\">\'\'</span>,deno=<span class=\\"hljs-string\\">\'\'</span>,slash=<span class=\\"hljs-literal\\">false</span>\\n  <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> i=<span class=\\"hljs-number\\">0</span>;i&lt;=expression.length;i++){\\n    <span class=\\"hljs-keyword\\">if</span>(i===expression.length || <span class=\\"hljs-regexp\\">/[\\\\+\\\\-]/</span>.test(expression[i])){\\n      <span class=\\"hljs-comment\\">// console.log(nomi,\'---\',deno)</span>\\n      <span class=\\"hljs-keyword\\">if</span>(nomi!==<span class=\\"hljs-string\\">\\"\\"</span> &amp;&amp; deno!==<span class=\\"hljs-string\\">\\"\\"</span>){\\n        <span class=\\"hljs-keyword\\">let</span> newDeno=+deno*denoRes,\\n            newNomi=nomiRes*+deno+((sign===<span class=\\"hljs-string\\">\\"-\\"</span>?<span class=\\"hljs-number\\">-1</span>:<span class=\\"hljs-number\\">1</span>)*nomi*denoRes)\\n        <span class=\\"hljs-keyword\\">let</span> g=gcd(newDeno,<span class=\\"hljs-built_in\\">Math</span>.abs(newNomi))\\n        nomiRes=newNomi/g\\n        denoRes=newDeno/g\\n        nomi=<span class=\\"hljs-string\\">\'\'</span>\\n        deno=<span class=\\"hljs-string\\">\'\'</span>\\n      }\\n      slash=<span class=\\"hljs-literal\\">false</span>\\n      sign=expression[i]      \\n    }<span class=\\"hljs-keyword\\">else</span> <span class=\\"hljs-keyword\\">if</span>(expression[i]===<span class=\\"hljs-string\\">\'/\'</span>){\\n      slash=<span class=\\"hljs-literal\\">true</span>\\n    }<span class=\\"hljs-keyword\\">else</span>{\\n      <span class=\\"hljs-keyword\\">if</span>(slash)deno+=expression[i]\\n      <span class=\\"hljs-keyword\\">else</span> nomi+=expression[i]\\n    }\\n  }\\n  <span class=\\"hljs-keyword\\">return</span> nomiRes+<span class=\\"hljs-string\\">\'/\'</span>+denoRes\\n};\\n</code></pre>\\n"],"querySlug":"fraction-addition-and-subtraction","created_at":"2019-04-01","timeArr":[2019,3,1,16,19,7,0],"hasThinking":false,"content":"<p>给定一个表示分数加减运算表达式的字符串，你需要返回一个字符串形式的计算结果。&nbsp;这个结果应该是不可约分的分数，即<a href=\\"https://baike.baidu.com/item/%E6%9C%80%E7%AE%80%E5%88%86%E6%95%B0\\" target=\\"_blank\\">最简分数</a>。&nbsp;如果最终结果是一个整数，例如&nbsp;<code>2</code>，你需要将它转换成分数形式，其分母为&nbsp;<code>1</code>。所以在上述例子中, <code>2</code>&nbsp;应该被转换为&nbsp;<code>2/1</code>。</p>\\n\\n<p><strong>示例&nbsp;1:</strong></p>\\n\\n<pre>\\n<strong>输入:</strong>&quot;-1/2+1/2&quot;\\n<strong>输出:</strong> &quot;0/1&quot;\\n</pre>\\n\\n<p><strong>&nbsp;示例 2:</strong></p>\\n\\n<pre>\\n<strong>输入:</strong>&quot;-1/2+1/2+1/3&quot;\\n<strong>输出:</strong> &quot;1/3&quot;\\n</pre>\\n\\n<p><strong>示例 3:</strong></p>\\n\\n<pre>\\n<strong>输入:</strong>&quot;1/3-1/2&quot;\\n<strong>输出:</strong> &quot;-1/6&quot;\\n</pre>\\n\\n<p><strong>示例 4:</strong></p>\\n\\n<pre>\\n<strong>输入:</strong>&quot;5/3+1/3&quot;\\n<strong>输出:</strong> &quot;2/1&quot;\\n</pre>\\n\\n<p><strong>说明:</strong></p>\\n\\n<ol>\\n\\t<li>输入和输出字符串只包含&nbsp;<code>&#39;0&#39;</code> 到&nbsp;<code>&#39;9&#39;</code>&nbsp;的数字，以及&nbsp;<code>&#39;/&#39;</code>, <code>&#39;+&#39;</code> 和&nbsp;<code>&#39;-&#39;</code>。&nbsp;</li>\\n\\t<li>输入和输出分数格式均为&nbsp;<code>&plusmn;分子/分母</code>。如果输入的第一个分数或者输出的分数是正数，则&nbsp;<code>&#39;+&#39;</code>&nbsp;会被省略掉。</li>\\n\\t<li>输入只包含合法的<strong>最简分数</strong>，每个分数的<strong>分子</strong>与<strong>分母</strong>的范围是&nbsp;&nbsp;[1,10]。&nbsp;如果分母是1，意味着这个分数实际上是一个整数。</li>\\n\\t<li>输入的分数个数范围是 [1,10]。</li>\\n\\t<li><strong>最终结果</strong>的分子与分母保证是 32 位整数范围内的有效整数。</li>\\n</ol>\\n","title":"592. 分数加减运算","relatedTags":["数学","字符串","模拟"],"difficult":"Middle","lang":["javascript"],"uniqueID":"592","slug":"592-Fraction-Addition-and-Subtraction"}')}}]);