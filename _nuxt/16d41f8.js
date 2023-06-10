(window.webpackJsonp=window.webpackJsonp||[]).push([[1077],{1875:function(n){n.exports=JSON.parse('{"code":["<pre class=\\"hljs\\"><code><span class=\\"hljs-comment\\">/**\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{number[]}</span> <span class=\\"hljs-variable\\">bits</span></span>\\n * <span class=\\"hljs-doctag\\">@return <span class=\\"hljs-type\\">{boolean}</span></span>\\n */</span>\\n<span class=\\"hljs-keyword\\">var</span> isOneBitCharacter = <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span>(<span class=\\"hljs-params\\">bits</span>) </span>{\\n  <span class=\\"hljs-keyword\\">let</span> n=bits.length\\n  <span class=\\"hljs-keyword\\">if</span>(bits[n<span class=\\"hljs-number\\">-2</span>]===<span class=\\"hljs-number\\">0</span>)<span class=\\"hljs-keyword\\">return</span> <span class=\\"hljs-literal\\">true</span>\\n  <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span> <span class=\\"hljs-title\\">isValid</span>(<span class=\\"hljs-params\\">start</span>)</span>{\\n    <span class=\\"hljs-keyword\\">if</span>(start&gt;n<span class=\\"hljs-number\\">-2</span>)<span class=\\"hljs-keyword\\">return</span> <span class=\\"hljs-literal\\">false</span>\\n    <span class=\\"hljs-keyword\\">if</span>(start===n<span class=\\"hljs-number\\">-2</span>)<span class=\\"hljs-keyword\\">return</span> <span class=\\"hljs-literal\\">true</span>\\n    <span class=\\"hljs-keyword\\">if</span>(bits[start]===<span class=\\"hljs-number\\">0</span>){\\n      <span class=\\"hljs-keyword\\">return</span> isValid(start+<span class=\\"hljs-number\\">1</span>)\\n    }<span class=\\"hljs-keyword\\">else</span>{\\n      <span class=\\"hljs-keyword\\">return</span> isValid(start+<span class=\\"hljs-number\\">2</span>)\\n    }\\n  }\\n  <span class=\\"hljs-keyword\\">return</span> !isValid(<span class=\\"hljs-number\\">0</span>)\\n};\\n</code></pre>\\n"],"querySlug":"1-bit-and-2-bit-characters","created_at":"2019-03-14","timeArr":[2019,2,14,23,54,5,0],"hasThinking":false,"content":"<p>有两种特殊字符。第一种字符可以用一比特<code>0</code>来表示。第二种字符可以用两比特(<code>10</code>&nbsp;或&nbsp;<code>11</code>)来表示。</p>\\n\\n<p>现给一个由若干比特组成的字符串。问最后一个字符是否必定为一个一比特字符。给定的字符串总是由0结束。</p>\\n\\n<p><strong>示例&nbsp;1:</strong></p>\\n\\n<pre>\\n<strong>输入:</strong> \\nbits = [1, 0, 0]\\n<strong>输出:</strong> True\\n<strong>解释:</strong> \\n唯一的编码方式是一个两比特字符和一个一比特字符。所以最后一个字符是一比特字符。\\n</pre>\\n\\n<p><strong>示例&nbsp;2:</strong></p>\\n\\n<pre>\\n<strong>输入:</strong> \\nbits = [1, 1, 1, 0]\\n<strong>输出:</strong> False\\n<strong>解释:</strong> \\n唯一的编码方式是两比特字符和两比特字符。所以最后一个字符不是一比特字符。\\n</pre>\\n\\n<p><strong>注意:</strong></p>\\n\\n<ul>\\n\\t<li><code>1 &lt;= len(bits) &lt;= 1000</code>.</li>\\n\\t<li><code>bits[i]</code> 总是<code>0</code> 或&nbsp;<code>1</code>.</li>\\n</ul>\\n","title":"717. 1比特与2比特字符","relatedTags":["数组"],"difficult":"Easy","lang":["javascript"],"uniqueID":"717","slug":"717-1-bit-and-2-bit-Characters"}')}}]);