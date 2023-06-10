(window.webpackJsonp=window.webpackJsonp||[]).push([[700],{1498:function(n){n.exports=JSON.parse('{"code":["<pre class=\\"hljs\\"><code><span class=\\"hljs-comment\\">/**\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{string}</span> <span class=\\"hljs-variable\\">input</span></span>\\n * <span class=\\"hljs-doctag\\">@return <span class=\\"hljs-type\\">{number[]}</span></span>\\n */</span>\\n<span class=\\"hljs-keyword\\">var</span> diffWaysToCompute = <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span>(<span class=\\"hljs-params\\">input</span>) </span>{\\n  <span class=\\"hljs-keyword\\">if</span>(<span class=\\"hljs-regexp\\">/^\\\\d+$/</span>.test(input))<span class=\\"hljs-keyword\\">return</span> [+input]\\n  <span class=\\"hljs-keyword\\">let</span> res=[]\\n  <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> i=<span class=\\"hljs-number\\">0</span>;i&lt;input.length;i++){\\n     <span class=\\"hljs-keyword\\">if</span>(<span class=\\"hljs-regexp\\">/[\\\\*\\\\+\\\\-]/</span>.test(input[i])){\\n       <span class=\\"hljs-keyword\\">let</span> nxt1=diffWaysToCompute(input.substring(<span class=\\"hljs-number\\">0</span>,i)),\\n           nxt2=diffWaysToCompute(input.substring(i+<span class=\\"hljs-number\\">1</span>))\\n       <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> n1 <span class=\\"hljs-keyword\\">of</span> nxt1){\\n         <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> n2 <span class=\\"hljs-keyword\\">of</span> nxt2){\\n           <span class=\\"hljs-keyword\\">if</span>(input[i]===<span class=\\"hljs-string\\">\\"*\\"</span>)res.push(n1*n2)\\n           <span class=\\"hljs-keyword\\">else</span> <span class=\\"hljs-keyword\\">if</span>(input[i]===<span class=\\"hljs-string\\">\\"+\\"</span>)res.push(n1+n2)\\n           <span class=\\"hljs-keyword\\">else</span> res.push(n1-n2)\\n         }\\n       }\\n     }\\n  }\\n  <span class=\\"hljs-keyword\\">return</span> res\\n};\\n</code></pre>\\n"],"querySlug":"different-ways-to-add-parentheses","created_at":"2019-04-23","timeArr":[2019,3,23,23,7,4,0],"hasThinking":true,"thinking":"<hr>\\n<p>思路：</p>\\n<p><code>分治</code>思想，对于<code>input</code>，找到它的运算符号的位置，分割成两个子字符串，然后递归处理即可。</p>\\n","content":"<p>给定一个含有数字和运算符的字符串，为表达式添加括号，改变其运算优先级以求出不同的结果。你需要给出所有可能的组合的结果。有效的运算符号包含 <code>+</code>,&nbsp;<code>-</code>&nbsp;以及&nbsp;<code>*</code>&nbsp;。</p>\\n\\n<p><strong>示例&nbsp;1:</strong></p>\\n\\n<pre><strong>输入:</strong> <code>&quot;2-1-1&quot;</code>\\n<strong>输出:</strong> <code>[0, 2]</code>\\n<strong>解释: </strong>\\n((2-1)-1) = 0 \\n(2-(1-1)) = 2</pre>\\n\\n<p><strong>示例&nbsp;2:</strong></p>\\n\\n<pre><strong>输入: </strong><code>&quot;2*3-4*5&quot;</code>\\n<strong>输出:</strong> <code>[-34, -14, -10, -10, 10]</code>\\n<strong>解释: \\n</strong>(2*(3-(4*5))) = -34 \\n((2*3)-(4*5)) = -14 \\n((2*(3-4))*5) = -10 \\n(2*((3-4)*5)) = -10 \\n(((2*3)-4)*5) = 10</pre>\\n","title":"241. 为运算表达式设计优先级","relatedTags":["递归","记忆化搜索","数学","字符串","动态规划"],"difficult":"Middle","lang":["javascript"],"uniqueID":"241","slug":"241-Different-Ways-to-Add-Parentheses"}')}}]);