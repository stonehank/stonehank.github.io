(window.webpackJsonp=window.webpackJsonp||[]).push([[353],{1151:function(n){n.exports=JSON.parse('{"code":["<pre class=\\"hljs\\"><code><span class=\\"hljs-comment\\">/**\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{string}</span> <span class=\\"hljs-variable\\">s</span></span>\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{number}</span> <span class=\\"hljs-variable\\">k</span></span>\\n * <span class=\\"hljs-doctag\\">@return <span class=\\"hljs-type\\">{string}</span></span>\\n */</span>\\n<span class=\\"hljs-keyword\\">var</span> removeDuplicates = <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span>(<span class=\\"hljs-params\\">s, k</span>) </span>{\\n  <span class=\\"hljs-keyword\\">let</span> convert=[]\\n  <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> i=<span class=\\"hljs-number\\">0</span>;i&lt;s.length;i++){\\n    <span class=\\"hljs-keyword\\">let</span> curL=s[i]\\n    <span class=\\"hljs-keyword\\">if</span>(convert.length===<span class=\\"hljs-number\\">0</span> || convert[convert.length<span class=\\"hljs-number\\">-1</span>].l!==curL){\\n      convert.push({\\n        <span class=\\"hljs-attr\\">l</span>:curL,\\n        <span class=\\"hljs-attr\\">c</span>:<span class=\\"hljs-number\\">1</span>\\n      })\\n    }<span class=\\"hljs-keyword\\">else</span>{\\n      convert[convert.length<span class=\\"hljs-number\\">-1</span>].c++\\n    }\\n  }\\n  <span class=\\"hljs-comment\\">// console.log(convert)</span>\\n  \\n  <span class=\\"hljs-keyword\\">let</span> canReduce=<span class=\\"hljs-literal\\">true</span>\\n  <span class=\\"hljs-keyword\\">let</span> aux=[]\\n  <span class=\\"hljs-keyword\\">while</span>(canReduce){\\n    canReduce=<span class=\\"hljs-literal\\">false</span>\\n    <span class=\\"hljs-comment\\">// console.log(convert)</span>\\n    <span class=\\"hljs-keyword\\">let</span> len=convert.length\\n    <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> i=<span class=\\"hljs-number\\">0</span>;i&lt;len;i++){\\n      <span class=\\"hljs-keyword\\">let</span> cur=convert.shift()\\n      <span class=\\"hljs-keyword\\">if</span>(cur.c&gt;=k){\\n        canReduce=<span class=\\"hljs-literal\\">true</span>\\n        cur.c-=k\\n        <span class=\\"hljs-keyword\\">if</span>(cur.c===<span class=\\"hljs-number\\">0</span>)<span class=\\"hljs-keyword\\">continue</span>\\n      }\\n      <span class=\\"hljs-keyword\\">if</span>(canReduce &amp;&amp; aux.length&gt;<span class=\\"hljs-number\\">0</span> &amp;&amp; aux[aux.length<span class=\\"hljs-number\\">-1</span>].l===cur.l){\\n        aux[aux.length<span class=\\"hljs-number\\">-1</span>].c+=cur.c\\n      }<span class=\\"hljs-keyword\\">else</span>{\\n        aux.push(cur)\\n      }\\n    }\\n    convert=aux\\n    aux=[]\\n  }\\n  <span class=\\"hljs-comment\\">// console.log(convert)</span>\\n  <span class=\\"hljs-keyword\\">let</span> res=<span class=\\"hljs-string\\">\'\'</span>\\n  <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> i=<span class=\\"hljs-number\\">0</span>;i&lt;convert.length;i++){\\n    res+=convert[i].l.repeat(convert[i].c)\\n  }\\n  <span class=\\"hljs-keyword\\">return</span> res\\n};\\n</code></pre>\\n"],"querySlug":"remove-all-adjacent-duplicates-in-string-ii","created_at":"2019-09-29","timeArr":[2019,8,29,11,2,59,0],"hasThinking":false,"content":"<p>给你一个字符串&nbsp;<code>s</code>，「<code>k</code> 倍重复项删除操作」将会从 <code>s</code>&nbsp;中选择&nbsp;<code>k</code>&nbsp;个相邻且相等的字母，并删除它们，使被删去的字符串的左侧和右侧连在一起。</p>\\n\\n<p>你需要对&nbsp;<code>s</code>&nbsp;重复进行无限次这样的删除操作，直到无法继续为止。</p>\\n\\n<p>在执行完所有删除操作后，返回最终得到的字符串。</p>\\n\\n<p>本题答案保证唯一。</p>\\n\\n<p>&nbsp;</p>\\n\\n<p><strong>示例 1：</strong></p>\\n\\n<pre><strong>输入：</strong>s = &quot;abcd&quot;, k = 2\\n<strong>输出：</strong>&quot;abcd&quot;\\n<strong>解释：</strong>没有要删除的内容。</pre>\\n\\n<p><strong>示例 2：</strong></p>\\n\\n<pre><strong>输入：</strong>s = &quot;deeedbbcccbdaa&quot;, k = 3\\n<strong>输出：</strong>&quot;aa&quot;\\n<strong>解释： \\n</strong>先删除 &quot;eee&quot; 和 &quot;ccc&quot;，得到 &quot;ddbbbdaa&quot;\\n再删除 &quot;bbb&quot;，得到 &quot;dddaa&quot;\\n最后删除 &quot;ddd&quot;，得到 &quot;aa&quot;</pre>\\n\\n<p><strong>示例 3：</strong></p>\\n\\n<pre><strong>输入：</strong>s = &quot;pbbcggttciiippooaais&quot;, k = 2\\n<strong>输出：</strong>&quot;ps&quot;\\n</pre>\\n\\n<p>&nbsp;</p>\\n\\n<p><strong>提示：</strong></p>\\n\\n<ul>\\n\\t<li><code>1 &lt;= s.length &lt;= 10^5</code></li>\\n\\t<li><code>2 &lt;= k &lt;= 10^4</code></li>\\n\\t<li><code>s</code>&nbsp;中只含有小写英文字母。</li>\\n</ul>\\n","title":"1209. 删除字符串中的所有相邻重复项 II","relatedTags":["栈","字符串"],"difficult":"Middle","lang":["javascript"],"uniqueID":"1209","slug":"1209-Remove-All-Adjacent-Duplicates-in-String-II"}')}}]);