(window.webpackJsonp=window.webpackJsonp||[]).push([[835],{1633:function(n){n.exports=JSON.parse('{"code":["<pre class=\\"hljs\\"><code><span class=\\"hljs-comment\\">/**\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{string}</span> <span class=\\"hljs-variable\\">s</span></span>\\n * <span class=\\"hljs-doctag\\">@return <span class=\\"hljs-type\\">{string}</span></span>\\n */</span>\\n<span class=\\"hljs-keyword\\">var</span> originalDigits = <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span>(<span class=\\"hljs-params\\">s</span>) </span>{\\n  <span class=\\"hljs-keyword\\">let</span> cache=<span class=\\"hljs-built_in\\">Array</span>(<span class=\\"hljs-number\\">26</span>).fill(<span class=\\"hljs-number\\">0</span>),\\n      numCount=<span class=\\"hljs-built_in\\">Array</span>(<span class=\\"hljs-number\\">10</span>).fill(<span class=\\"hljs-number\\">0</span>)\\n  \\n  <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> i=<span class=\\"hljs-number\\">0</span>;i&lt;s.length;i++){\\n    cache[s.charCodeAt(i)<span class=\\"hljs-number\\">-97</span>]++\\n  }\\n\\n  <span class=\\"hljs-keyword\\">let</span> checks1={<span class=\\"hljs-string\\">\'z\'</span>:[<span class=\\"hljs-string\\">\'zero\'</span>,<span class=\\"hljs-number\\">0</span>],<span class=\\"hljs-string\\">\'w\'</span>:[<span class=\\"hljs-string\\">\'two\'</span>,<span class=\\"hljs-number\\">2</span>],<span class=\\"hljs-string\\">\'u\'</span>:[<span class=\\"hljs-string\\">\'four\'</span>,<span class=\\"hljs-number\\">4</span>],\\n               <span class=\\"hljs-string\\">\'x\'</span>:[<span class=\\"hljs-string\\">\'six\'</span>,<span class=\\"hljs-number\\">6</span>],<span class=\\"hljs-string\\">\'g\'</span>:[<span class=\\"hljs-string\\">\'eight\'</span>,<span class=\\"hljs-number\\">8</span>]}\\n  <span class=\\"hljs-keyword\\">let</span> checks2={<span class=\\"hljs-string\\">\'o\'</span>:[<span class=\\"hljs-string\\">\'one\'</span>,<span class=\\"hljs-number\\">1</span>],<span class=\\"hljs-string\\">\'h\'</span>:[<span class=\\"hljs-string\\">\'three\'</span>,<span class=\\"hljs-number\\">3</span>],<span class=\\"hljs-string\\">\'f\'</span>:[<span class=\\"hljs-string\\">\'five\'</span>,<span class=\\"hljs-number\\">5</span>],\\n               <span class=\\"hljs-string\\">\'s\'</span>:[<span class=\\"hljs-string\\">\'seven\'</span>,<span class=\\"hljs-number\\">7</span>]}\\n  <span class=\\"hljs-keyword\\">let</span> checks3={<span class=\\"hljs-string\\">\'i\'</span>:[<span class=\\"hljs-string\\">\'nine\'</span>,<span class=\\"hljs-number\\">9</span>]}\\n  \\n  <span class=\\"hljs-keyword\\">let</span> res=<span class=\\"hljs-string\\">\'\'</span>\\n  check(checks1)\\n  check(checks2)\\n  check(checks3)\\n  <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> i=<span class=\\"hljs-number\\">0</span>;i&lt;numCount.length;i++){\\n    res+=(i+<span class=\\"hljs-string\\">\'\'</span>).repeat(numCount[i])\\n  }\\n  <span class=\\"hljs-keyword\\">return</span> res\\n  \\n  <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span> <span class=\\"hljs-title\\">check</span>(<span class=\\"hljs-params\\">checkObj</span>)</span>{\\n    <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> k <span class=\\"hljs-keyword\\">in</span> checkObj){\\n      <span class=\\"hljs-keyword\\">let</span> code=k.charCodeAt(<span class=\\"hljs-number\\">0</span>)<span class=\\"hljs-number\\">-97</span>\\n      <span class=\\"hljs-keyword\\">if</span>(cache[code]&gt;<span class=\\"hljs-number\\">0</span>){\\n        <span class=\\"hljs-keyword\\">let</span> del=cache[code]\\n        <span class=\\"hljs-keyword\\">let</span> [lett,numIdx]=checkObj[k]\\n        <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> i=<span class=\\"hljs-number\\">0</span>;i&lt;lett.length;i++){\\n          cache[lett.charCodeAt(i)<span class=\\"hljs-number\\">-97</span>]-=del\\n        }\\n        numCount[numIdx]+=del\\n      }\\n    } \\n  }\\n};\\n</code></pre>\\n"],"querySlug":"reconstruct-original-digits-from-english","created_at":"2019-04-01","timeArr":[2019,3,1,15,41,39,0],"hasThinking":true,"thinking":"<hr>\\n<p>思路：</p>\\n<p>先找出在所有数字单词中存在唯一字母的，</p>\\n<p>例如：<code>zero</code>的<code>z</code>就是唯一的。</p>\\n<p>第一轮可以找出<code>0,2,4,6,8</code>，分别对应着<code>z,w,u,x,g</code></p>\\n<p>将他们对应的所有字母减少。</p>\\n<p>继续找，第二轮可以找出<code>1,3,5,7</code>，对应着<code>o,h,f,s</code></p>\\n<p>第三轮就是<code>9</code>，对应<code>i</code></p>\\n<p>最终时间复杂度<code>O(n)</code></p>\\n","content":"<p>给定一个<strong>非空</strong>字符串，其中包含字母顺序打乱的英文单词表示的数字<code>0-9</code>。按升序输出原始的数字。</p>\\n\\n<p><strong>注意:</strong></p>\\n\\n<ol>\\n\\t<li>输入只包含小写英文字母。</li>\\n\\t<li>输入保证合法并可以转换为原始的数字，这意味着像 &quot;abc&quot; 或 &quot;zerone&quot; 的输入是不允许的。</li>\\n\\t<li>输入字符串的长度小于 50,000。</li>\\n</ol>\\n\\n<p><strong>示例 1:</strong></p>\\n\\n<pre>\\n输入: &quot;owoztneoer&quot;\\n\\n输出: &quot;012&quot; (zeroonetwo)\\n</pre>\\n\\n<p><strong>示例 2:</strong></p>\\n\\n<pre>\\n输入: &quot;fviefuro&quot;\\n\\n输出: &quot;45&quot; (fourfive)\\n</pre>\\n","title":"423. 从英文中重建数字","relatedTags":["哈希表","数学","字符串"],"difficult":"Middle","lang":["javascript"],"uniqueID":"423","slug":"423-Reconstruct-Original-Digits-from-English"}')}}]);