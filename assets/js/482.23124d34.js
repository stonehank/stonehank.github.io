(window.webpackJsonp=window.webpackJsonp||[]).push([[482],{777:function(s){s.exports=JSON.parse('{"code":["<pre class=\\"hljs\\"><code><span class=\\"hljs-comment\\">/**\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{number[]}</span> <span class=\\"hljs-variable\\">queries</span></span>\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{number}</span> <span class=\\"hljs-variable\\">m</span></span>\\n * <span class=\\"hljs-doctag\\">@return <span class=\\"hljs-type\\">{number[]}</span></span>\\n */</span>\\n<span class=\\"hljs-keyword\\">var</span> processQueries = <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span>(<span class=\\"hljs-params\\">queries, m</span>) </span>{\\n  <span class=\\"hljs-keyword\\">let</span> P=<span class=\\"hljs-built_in\\">Array</span>(m).fill().map(<span class=\\"hljs-function\\">(<span class=\\"hljs-params\\">n,i</span>)=&gt;</span>i+<span class=\\"hljs-number\\">1</span>)\\n  <span class=\\"hljs-keyword\\">let</span> res=[]\\n  <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> i=<span class=\\"hljs-number\\">0</span>;i&lt;queries.length;i++){\\n    <span class=\\"hljs-keyword\\">let</span> pIdx=P.indexOf(queries[i])\\n    res.push(pIdx)\\n    P.splice(pIdx,<span class=\\"hljs-number\\">1</span>)\\n    P.unshift(queries[i])\\n  }\\n  <span class=\\"hljs-keyword\\">return</span> res\\n};\\n</code></pre>\\n"],"titleSlug":"queries-on-a-permutation-with-key","hasThinking":false,"content":"<p>\u7ed9\u4f60\u4e00\u4e2a\u5f85\u67e5\u6570\u7ec4 <code>queries</code> \uff0c\u6570\u7ec4\u4e2d\u7684\u5143\u7d20\u4e3a <code>1</code> \u5230 <code>m</code> \u4e4b\u95f4\u7684\u6b63\u6574\u6570\u3002 \u8bf7\u4f60\u6839\u636e\u4ee5\u4e0b\u89c4\u5219\u5904\u7406\u6240\u6709\u5f85\u67e5\u9879 <code>queries[i]</code>\uff08\u4ece <code>i=0</code> \u5230 <code>i=queries.length-1</code>\uff09\uff1a</p>\\n\\n<ul>\\n\\t<li>\u4e00\u5f00\u59cb\uff0c\u6392\u5217 <code>P=[1,2,3,...,m]</code>\u3002</li>\\n\\t<li>\u5bf9\u4e8e\u5f53\u524d\u7684 <code>i</code> \uff0c\u8bf7\u4f60\u627e\u51fa\u5f85\u67e5\u9879 <code>queries[i]</code> \u5728\u6392\u5217 <code>P</code> \u4e2d\u7684\u4f4d\u7f6e\uff08<strong>\u4e0b\u6807\u4ece 0 \u5f00\u59cb</strong>\uff09\uff0c\u7136\u540e\u5c06\u5176\u4ece\u539f\u4f4d\u7f6e\u79fb\u52a8\u5230\u6392\u5217 <code>P</code> \u7684\u8d77\u59cb\u4f4d\u7f6e\uff08\u5373\u4e0b\u6807\u4e3a 0 \u5904\uff09\u3002\u6ce8\u610f\uff0c <code>queries[i]</code> \u5728 <code>P</code> \u4e2d\u7684\u4f4d\u7f6e\u5c31\u662f <code>queries[i]</code> \u7684\u67e5\u8be2\u7ed3\u679c\u3002</li>\\n</ul>\\n\\n<p>\u8bf7\u4f60\u4ee5\u6570\u7ec4\u5f62\u5f0f\u8fd4\u56de\u5f85\u67e5\u6570\u7ec4&nbsp; <code>queries</code> \u7684\u67e5\u8be2\u7ed3\u679c\u3002</p>\\n\\n<p>&nbsp;</p>\\n\\n<p><strong>\u793a\u4f8b 1\uff1a</strong></p>\\n\\n<pre><strong>\u8f93\u5165\uff1a</strong>queries = [3,1,2,1], m = 5\\n<strong>\u8f93\u51fa\uff1a</strong>[2,1,2,1] \\n<strong>\u89e3\u91ca\uff1a</strong>\u5f85\u67e5\u6570\u7ec4 queries \u5904\u7406\u5982\u4e0b\uff1a\\n\u5bf9\u4e8e i=0: queries[i]=3, P=[1,2,3,4,5], 3 \u5728 P \u4e2d\u7684\u4f4d\u7f6e\u662f <strong>2</strong>\uff0c\u63a5\u7740\u6211\u4eec\u628a 3 \u79fb\u52a8\u5230 P \u7684\u8d77\u59cb\u4f4d\u7f6e\uff0c\u5f97\u5230 P=[3,1,2,4,5] \u3002\\n\u5bf9\u4e8e i=1: queries[i]=1, P=[3,1,2,4,5], 1 \u5728 P \u4e2d\u7684\u4f4d\u7f6e\u662f <strong>1</strong>\uff0c\u63a5\u7740\u6211\u4eec\u628a 1 \u79fb\u52a8\u5230 P \u7684\u8d77\u59cb\u4f4d\u7f6e\uff0c\u5f97\u5230 P=[1,3,2,4,5] \u3002 \\n\u5bf9\u4e8e i=2: queries[i]=2, P=[1,3,2,4,5], 2 \u5728 P \u4e2d\u7684\u4f4d\u7f6e\u662f <strong>2</strong>\uff0c\u63a5\u7740\u6211\u4eec\u628a 2 \u79fb\u52a8\u5230 P \u7684\u8d77\u59cb\u4f4d\u7f6e\uff0c\u5f97\u5230 P=[2,1,3,4,5] \u3002\\n\u5bf9\u4e8e i=3: queries[i]=1, P=[2,1,3,4,5], 1 \u5728 P \u4e2d\u7684\u4f4d\u7f6e\u662f <strong>1</strong>\uff0c\u63a5\u7740\u6211\u4eec\u628a 1 \u79fb\u52a8\u5230 P \u7684\u8d77\u59cb\u4f4d\u7f6e\uff0c\u5f97\u5230 P=[1,2,3,4,5] \u3002 \\n\u56e0\u6b64\uff0c\u8fd4\u56de\u7684\u7ed3\u679c\u6570\u7ec4\u4e3a [2,1,2,1] \u3002  \\n</pre>\\n\\n<p><strong>\u793a\u4f8b 2\uff1a</strong></p>\\n\\n<pre><strong>\u8f93\u5165\uff1a</strong>queries = [4,1,2,2], m = 4\\n<strong>\u8f93\u51fa\uff1a</strong>[3,1,2,0]\\n</pre>\\n\\n<p><strong>\u793a\u4f8b 3\uff1a</strong></p>\\n\\n<pre><strong>\u8f93\u5165\uff1a</strong>queries = [7,5,5,8,3], m = 8\\n<strong>\u8f93\u51fa\uff1a</strong>[6,5,0,7,5]\\n</pre>\\n\\n<p>&nbsp;</p>\\n\\n<p><strong>\u63d0\u793a\uff1a</strong></p>\\n\\n<ul>\\n\\t<li><code>1 &lt;= m &lt;= 10^3</code></li>\\n\\t<li><code>1 &lt;= queries.length &lt;= m</code></li>\\n\\t<li><code>1 &lt;= queries[i] &lt;= m</code></li>\\n</ul>\\n","title":"1409. \u67e5\u8be2\u5e26\u952e\u7684\u6392\u5217","relatedTags":["\u6570\u7ec4"],"difficult":"Middle","lang":["javascript"],"uniqueID":"1409"}')}}]);