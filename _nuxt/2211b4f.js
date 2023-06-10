(window.webpackJsonp=window.webpackJsonp||[]).push([[570],{1368:function(n){n.exports=JSON.parse('{"code":["<pre class=\\"hljs\\"><code><span class=\\"hljs-comment\\">/**\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{string}</span> <span class=\\"hljs-variable\\">s</span></span>\\n * <span class=\\"hljs-doctag\\">@return <span class=\\"hljs-type\\">{number}</span></span>\\n */</span>\\n<span class=\\"hljs-keyword\\">var</span> maxUniqueSplit = <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span>(<span class=\\"hljs-params\\">s</span>) </span>{\\n  <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span> <span class=\\"hljs-title\\">resolve</span>(<span class=\\"hljs-params\\">str,used</span>)</span>{\\n    <span class=\\"hljs-keyword\\">if</span>(str===<span class=\\"hljs-string\\">\'\'</span>)<span class=\\"hljs-keyword\\">return</span> <span class=\\"hljs-number\\">0</span>\\n    <span class=\\"hljs-keyword\\">let</span> count=<span class=\\"hljs-number\\">0</span>\\n    <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> i=<span class=\\"hljs-number\\">1</span>;i&lt;=str.length;i++){\\n      <span class=\\"hljs-keyword\\">let</span> cur=str.slice(<span class=\\"hljs-number\\">0</span>,i)\\n      <span class=\\"hljs-keyword\\">let</span> rest=str.slice(i)\\n      <span class=\\"hljs-keyword\\">if</span>(!used[cur]){\\n        used[cur]=<span class=\\"hljs-literal\\">true</span>\\n        count=<span class=\\"hljs-built_in\\">Math</span>.max(count,resolve(rest,used)+<span class=\\"hljs-number\\">1</span>)\\n        used[cur]=<span class=\\"hljs-literal\\">false</span>\\n      }\\n    }\\n    <span class=\\"hljs-keyword\\">return</span> count\\n  }\\n  <span class=\\"hljs-keyword\\">return</span> resolve(s,{})\\n};\\n</code></pre>\\n"],"querySlug":"split-a-string-into-the-max-number-of-unique-substrings","created_at":"2020-09-26","timeArr":[2020,8,26,17,11,1,0],"hasThinking":false,"content":"<p>给你一个字符串 <code>s</code> ，请你拆分该字符串，并返回拆分后唯一子字符串的最大数目。</p>\\n\\n<p>字符串 <code>s</code> 拆分后可以得到若干 <strong>非空子字符串</strong> ，这些子字符串连接后应当能够还原为原字符串。但是拆分出来的每个子字符串都必须是 <strong>唯一的</strong> 。</p>\\n\\n<p>注意：<strong>子字符串</strong> 是字符串中的一个连续字符序列。</p>\\n\\n<p>&nbsp;</p>\\n\\n<p><strong>示例 1：</strong></p>\\n\\n<pre><strong>输入：</strong>s = &quot;ababccc&quot;\\n<strong>输出：</strong>5\\n<strong>解释：</strong>一种最大拆分方法为 [&#39;a&#39;, &#39;b&#39;, &#39;ab&#39;, &#39;c&#39;, &#39;cc&#39;] 。像 [&#39;a&#39;, &#39;b&#39;, &#39;a&#39;, &#39;b&#39;, &#39;c&#39;, &#39;cc&#39;] 这样拆分不满足题目要求，因为其中的 &#39;a&#39; 和 &#39;b&#39; 都出现了不止一次。\\n</pre>\\n\\n<p><strong>示例 2：</strong></p>\\n\\n<pre><strong>输入：</strong>s = &quot;aba&quot;\\n<strong>输出：</strong>2\\n<strong>解释：</strong>一种最大拆分方法为 [&#39;a&#39;, &#39;ba&#39;] 。\\n</pre>\\n\\n<p><strong>示例 3：</strong></p>\\n\\n<pre><strong>输入：</strong>s = &quot;aa&quot;\\n<strong>输出：</strong>1\\n<strong>解释：</strong>无法进一步拆分字符串。\\n</pre>\\n\\n<p>&nbsp;</p>\\n\\n<p><strong>提示：</strong></p>\\n\\n<ul>\\n\\t<li>\\n\\t<p><code>1 &lt;= s.length&nbsp;&lt;= 16</code></p>\\n\\t</li>\\n\\t<li>\\n\\t<p><code>s</code> 仅包含小写英文字母</p>\\n\\t</li>\\n</ul>\\n","title":"1593. 拆分字符串使唯一子字符串的数目最大","relatedTags":["哈希表","字符串","回溯"],"difficult":"Middle","lang":["javascript"],"uniqueID":"1593","slug":"1593-Split-a-String-Into-the-Max-Number-of-Unique-Substrings"}')}}]);