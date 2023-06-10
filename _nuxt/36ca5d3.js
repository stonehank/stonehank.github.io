(window.webpackJsonp=window.webpackJsonp||[]).push([[877],{1675:function(n){n.exports=JSON.parse('{"code":["<pre class=\\"hljs\\"><code><span class=\\"hljs-comment\\">/**\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{string}</span> <span class=\\"hljs-variable\\">IP</span></span>\\n * <span class=\\"hljs-doctag\\">@return <span class=\\"hljs-type\\">{string}</span></span>\\n */</span>\\n<span class=\\"hljs-keyword\\">var</span> validIPAddress = <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span>(<span class=\\"hljs-params\\">IP</span>) </span>{\\n  <span class=\\"hljs-keyword\\">if</span>(IP.includes(<span class=\\"hljs-string\\">\\":\\"</span>) &amp;&amp; checkIPV6(IP))<span class=\\"hljs-keyword\\">return</span> <span class=\\"hljs-string\\">\\"IPv6\\"</span>\\n  <span class=\\"hljs-keyword\\">if</span>(IP.includes(<span class=\\"hljs-string\\">\\".\\"</span>) &amp;&amp; checkIPV4(IP))<span class=\\"hljs-keyword\\">return</span> <span class=\\"hljs-string\\">\\"IPv4\\"</span>\\n  <span class=\\"hljs-keyword\\">return</span> <span class=\\"hljs-string\\">\\"Neither\\"</span>\\n  \\n  <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span> <span class=\\"hljs-title\\">checkIPV6</span>(<span class=\\"hljs-params\\">str</span>)</span>{\\n    <span class=\\"hljs-keyword\\">let</span> arr=str.split(<span class=\\"hljs-string\\">\\":\\"</span>)\\n    <span class=\\"hljs-keyword\\">if</span>(arr.length!==<span class=\\"hljs-number\\">8</span>)<span class=\\"hljs-keyword\\">return</span> <span class=\\"hljs-literal\\">false</span>\\n    <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> i=<span class=\\"hljs-number\\">0</span>;i&lt;arr.length;i++){\\n      <span class=\\"hljs-keyword\\">if</span>(arr[i]===<span class=\\"hljs-string\\">\\"\\"</span>)<span class=\\"hljs-keyword\\">return</span> <span class=\\"hljs-literal\\">false</span>\\n      <span class=\\"hljs-keyword\\">if</span>(arr[i].length&gt;<span class=\\"hljs-number\\">4</span>)<span class=\\"hljs-keyword\\">return</span> <span class=\\"hljs-literal\\">false</span>\\n      <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> l <span class=\\"hljs-keyword\\">of</span> arr[i]){\\n        <span class=\\"hljs-keyword\\">if</span>(!<span class=\\"hljs-regexp\\">/[a-f0-9A-F]/</span>.test(l))<span class=\\"hljs-keyword\\">return</span> <span class=\\"hljs-literal\\">false</span>\\n      }\\n    }\\n    <span class=\\"hljs-keyword\\">return</span> <span class=\\"hljs-literal\\">true</span>\\n  }\\n  <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span> <span class=\\"hljs-title\\">checkIPV4</span>(<span class=\\"hljs-params\\">str</span>)</span>{\\n    <span class=\\"hljs-keyword\\">let</span> arr=str.split(<span class=\\"hljs-string\\">\\".\\"</span>)\\n    <span class=\\"hljs-keyword\\">if</span>(arr.length!==<span class=\\"hljs-number\\">4</span>)<span class=\\"hljs-keyword\\">return</span> <span class=\\"hljs-literal\\">false</span>\\n    <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> i=<span class=\\"hljs-number\\">0</span>;i&lt;arr.length;i++){\\n      <span class=\\"hljs-keyword\\">if</span>(arr[i]===<span class=\\"hljs-string\\">\\"\\"</span>)<span class=\\"hljs-keyword\\">return</span> <span class=\\"hljs-literal\\">false</span>\\n      <span class=\\"hljs-keyword\\">if</span>(arr[i].length&gt;<span class=\\"hljs-number\\">1</span> &amp;&amp; arr[i][<span class=\\"hljs-number\\">0</span>]===<span class=\\"hljs-string\\">\\"0\\"</span>)<span class=\\"hljs-keyword\\">return</span> <span class=\\"hljs-literal\\">false</span>\\n      <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> l <span class=\\"hljs-keyword\\">of</span> arr[i]){\\n        <span class=\\"hljs-keyword\\">if</span>(!<span class=\\"hljs-regexp\\">/[0-9]/</span>.test(l))<span class=\\"hljs-keyword\\">return</span> <span class=\\"hljs-literal\\">false</span>\\n      }\\n      <span class=\\"hljs-keyword\\">if</span>(<span class=\\"hljs-built_in\\">parseInt</span>(arr[i],<span class=\\"hljs-number\\">10</span>)&gt;<span class=\\"hljs-number\\">255</span>)<span class=\\"hljs-keyword\\">return</span> <span class=\\"hljs-literal\\">false</span>\\n    }\\n    <span class=\\"hljs-keyword\\">return</span> <span class=\\"hljs-literal\\">true</span>\\n  }\\n};\\n</code></pre>\\n"],"querySlug":"validate-ip-address","created_at":"2019-03-25","timeArr":[2019,2,25,11,57,55,0],"hasThinking":false,"content":"<p>编写一个函数来验证输入的字符串是否是有效的 IPv4 或&nbsp;IPv6 地址。</p>\\n\\n<ul>\\n\\t<li>如果是有效的 IPv4 地址，返回 <code>&quot;IPv4&quot;</code> ；</li>\\n\\t<li>如果是有效的 IPv6 地址，返回 <code>&quot;IPv6&quot;</code> ；</li>\\n\\t<li>如果不是上述类型的 IP 地址，返回 <code>&quot;Neither&quot;</code> 。</li>\\n</ul>\\n\\n<p><strong>IPv4</strong>&nbsp;地址由十进制数和点来表示，每个地址包含 4 个十进制数，其范围为&nbsp;0 -&nbsp;255，&nbsp;用(&quot;.&quot;)分割。比如，<code>172.16.254.1</code>；</p>\\n\\n<p>同时，IPv4 地址内的数不会以 0 开头。比如，地址&nbsp;<code>172.16.254.01</code> 是不合法的。</p>\\n\\n<p><strong>IPv6</strong>&nbsp;地址由 8 组 16 进制的数字来表示，每组表示&nbsp;16 比特。这些组数字通过 (&quot;:&quot;)分割。比如,&nbsp;&nbsp;<code>2001:0db8:85a3:0000:0000:8a2e:0370:7334</code> 是一个有效的地址。而且，我们可以加入一些以 0 开头的数字，字母可以使用大写，也可以是小写。所以，&nbsp;<code>2001:db8:85a3:0:0:8A2E:0370:7334</code> 也是一个有效的 IPv6 address地址 (即，忽略 0 开头，忽略大小写)。</p>\\n\\n<p>然而，我们不能因为某个组的值为 0，而使用一个空的组，以至于出现 (::) 的情况。&nbsp;比如，&nbsp;<code>2001:0db8:85a3::8A2E:0370:7334</code> 是无效的 IPv6 地址。</p>\\n\\n<p>同时，在 IPv6 地址中，多余的 0 也是不被允许的。比如，&nbsp;<code>02001:0db8:85a3:0000:0000:8a2e:0370:7334</code> 是无效的。</p>\\n\\n<p>&nbsp;</p>\\n\\n<p><strong>示例 1：</strong></p>\\n\\n<pre><strong>输入：</strong>IP = &quot;172.16.254.1&quot;\\n<strong>输出：</strong>&quot;IPv4&quot;\\n<strong>解释：</strong>有效的 IPv4 地址，返回 &quot;IPv4&quot;\\n</pre>\\n\\n<p><strong>示例 2：</strong></p>\\n\\n<pre><strong>输入：</strong>IP = &quot;2001:0db8:85a3:0:0:8A2E:0370:7334&quot;\\n<strong>输出：</strong>&quot;IPv6&quot;\\n<strong>解释：</strong>有效的 IPv6 地址，返回 &quot;IPv6&quot;\\n</pre>\\n\\n<p><strong>示例 3：</strong></p>\\n\\n<pre><strong>输入：</strong>IP = &quot;256.256.256.256&quot;\\n<strong>输出：</strong>&quot;Neither&quot;\\n<strong>解释：</strong>既不是 IPv4 地址，又不是 IPv6 地址\\n</pre>\\n\\n<p><strong>示例 4：</strong></p>\\n\\n<pre><strong>输入：</strong>IP = &quot;2001:0db8:85a3:0:0:8A2E:0370:7334:&quot;\\n<strong>输出：</strong>&quot;Neither&quot;\\n</pre>\\n\\n<p><strong>示例 5：</strong></p>\\n\\n<pre><strong>输入：</strong>IP = &quot;1e1.4.5.6&quot;\\n<strong>输出：</strong>&quot;Neither&quot;\\n</pre>\\n\\n<p>&nbsp;</p>\\n\\n<p><strong>提示：</strong></p>\\n\\n<ul>\\n\\t<li><code>IP</code> 仅由英文字母，数字，字符 <code>&#39;.&#39;</code> 和 <code>&#39;:&#39;</code> 组成。</li>\\n</ul>\\n","title":"468. 验证IP地址","relatedTags":["字符串"],"difficult":"Middle","lang":["javascript"],"uniqueID":"468","slug":"468-Validate-IP-Address"}')}}]);