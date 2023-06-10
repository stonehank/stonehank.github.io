(window.webpackJsonp=window.webpackJsonp||[]).push([[452],{1250:function(n){n.exports=JSON.parse('{"code":["<pre class=\\"hljs\\"><code><span class=\\"hljs-comment\\">/**\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{number}</span> <span class=\\"hljs-variable\\">n</span></span>\\n * <span class=\\"hljs-doctag\\">@return <span class=\\"hljs-type\\">{string}</span></span>\\n */</span>\\n<span class=\\"hljs-keyword\\">var</span> generateTheString = <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span>(<span class=\\"hljs-params\\">n</span>) </span>{\\n  <span class=\\"hljs-keyword\\">if</span>(n%<span class=\\"hljs-number\\">2</span>==<span class=\\"hljs-number\\">1</span>){\\n    <span class=\\"hljs-keyword\\">return</span> <span class=\\"hljs-string\\">\'a\'</span>.repeat(n)\\n  }<span class=\\"hljs-keyword\\">else</span>{\\n    <span class=\\"hljs-keyword\\">return</span> <span class=\\"hljs-string\\">\'a\'</span>+<span class=\\"hljs-string\\">\'b\'</span>.repeat(n<span class=\\"hljs-number\\">-1</span>)\\n  }\\n};\\n</code></pre>\\n"],"querySlug":"generate-a-string-with-characters-that-have-odd-counts","created_at":"2020-03-08","timeArr":[2020,2,8,10,32,22,0],"hasThinking":false,"content":"<p>给你一个整数 <code>n</code>，请你返回一个含<em> <code>n</code> </em>个字符的字符串，其中每种字符在该字符串中都恰好出现 <strong>奇数次</strong> <em><strong>。</strong></em></p>\\n\\n<p>返回的字符串必须只含小写英文字母。如果存在多个满足题目要求的字符串，则返回其中任意一个即可。</p>\\n\\n<p>&nbsp;</p>\\n\\n<p><strong>示例 1：</strong></p>\\n\\n<pre><strong>输入：</strong>n = 4\\n<strong>输出：</strong>&quot;pppz&quot;\\n<strong>解释：</strong>&quot;pppz&quot; 是一个满足题目要求的字符串，因为 &#39;p&#39; 出现 3 次，且 &#39;z&#39; 出现 1 次。当然，还有很多其他字符串也满足题目要求，比如：&quot;ohhh&quot; 和 &quot;love&quot;。\\n</pre>\\n\\n<p><strong>示例 2：</strong></p>\\n\\n<pre><strong>输入：</strong>n = 2\\n<strong>输出：</strong>&quot;xy&quot;\\n<strong>解释：</strong>&quot;xy&quot; 是一个满足题目要求的字符串，因为 &#39;x&#39; 和 &#39;y&#39; 各出现 1 次。当然，还有很多其他字符串也满足题目要求，比如：&quot;ag&quot; 和 &quot;ur&quot;。\\n</pre>\\n\\n<p><strong>示例 3：</strong></p>\\n\\n<pre><strong>输入：</strong>n = 7\\n<strong>输出：</strong>&quot;holasss&quot;\\n</pre>\\n\\n<p>&nbsp;</p>\\n\\n<p><strong>提示：</strong></p>\\n\\n<ul>\\n\\t<li><code>1 &lt;= n &lt;= 500</code></li>\\n</ul>\\n","title":"1374. 生成每种字符都是奇数个的字符串","relatedTags":["字符串"],"difficult":"Easy","lang":["javascript"],"uniqueID":"1374","slug":"1374-Generate-a-String-With-Characters-That-Have-Odd-Counts"}')}}]);