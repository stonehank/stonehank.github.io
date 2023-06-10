(window.webpackJsonp=window.webpackJsonp||[]).push([[848],{1646:function(n){n.exports=JSON.parse('{"code":["<pre class=\\"hljs\\"><code><span class=\\"hljs-comment\\">/**\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{string}</span> <span class=\\"hljs-variable\\">s</span></span>\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{string}</span> <span class=\\"hljs-variable\\">p</span></span>\\n * <span class=\\"hljs-doctag\\">@return <span class=\\"hljs-type\\">{boolean}</span></span>\\n */</span>\\n<span class=\\"hljs-keyword\\">var</span> isMatch = <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span>(<span class=\\"hljs-params\\">s, p</span>) </span>{\\n  <span class=\\"hljs-keyword\\">let</span> pLen=p.length,sLen=s.length\\n  <span class=\\"hljs-keyword\\">let</span> dp=<span class=\\"hljs-built_in\\">Array</span>(pLen+<span class=\\"hljs-number\\">1</span>).fill().map(<span class=\\"hljs-function\\"><span class=\\"hljs-params\\">()</span>=&gt;</span><span class=\\"hljs-built_in\\">Array</span>(sLen+<span class=\\"hljs-number\\">1</span>).fill(<span class=\\"hljs-literal\\">false</span>))\\n  dp[<span class=\\"hljs-number\\">0</span>][<span class=\\"hljs-number\\">0</span>]=<span class=\\"hljs-literal\\">true</span>\\n  <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> i=<span class=\\"hljs-number\\">1</span>;i&lt;pLen+<span class=\\"hljs-number\\">1</span>;i++){\\n    <span class=\\"hljs-keyword\\">if</span>(p[i<span class=\\"hljs-number\\">-1</span>]===<span class=\\"hljs-string\\">\'*\'</span> &amp;&amp; dp[i<span class=\\"hljs-number\\">-1</span>][<span class=\\"hljs-number\\">0</span>]){\\n      dp[i][<span class=\\"hljs-number\\">0</span>]=<span class=\\"hljs-literal\\">true</span>\\n    }\\n  }\\n  <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> i=<span class=\\"hljs-number\\">1</span>;i&lt;pLen+<span class=\\"hljs-number\\">1</span>;i++){\\n    <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> j=<span class=\\"hljs-number\\">1</span>;j&lt;sLen+<span class=\\"hljs-number\\">1</span>;j++){\\n      <span class=\\"hljs-keyword\\">let</span> pId=i<span class=\\"hljs-number\\">-1</span>,sId=j<span class=\\"hljs-number\\">-1</span>\\n      <span class=\\"hljs-keyword\\">if</span>(p[pId]===<span class=\\"hljs-string\\">\\"?\\"</span> || p[pId]===s[sId]){\\n        dp[i][j]=dp[i<span class=\\"hljs-number\\">-1</span>][j<span class=\\"hljs-number\\">-1</span>]\\n      }\\n      <span class=\\"hljs-keyword\\">if</span>(p[pId]===<span class=\\"hljs-string\\">\\"*\\"</span>){\\n        dp[i][j]=dp[i<span class=\\"hljs-number\\">-1</span>][j] || dp[i][j<span class=\\"hljs-number\\">-1</span>]\\n        <span class=\\"hljs-comment\\">// let k=0</span>\\n        <span class=\\"hljs-comment\\">// while(k&lt;sLen+1){</span>\\n        <span class=\\"hljs-comment\\">//   if(dp[i-1][k])break</span>\\n        <span class=\\"hljs-comment\\">//   k++</span>\\n        <span class=\\"hljs-comment\\">// }</span>\\n        <span class=\\"hljs-comment\\">// while(k&lt;sLen+1){</span>\\n        <span class=\\"hljs-comment\\">//   dp[i][k++]=true</span>\\n        <span class=\\"hljs-comment\\">// }</span>\\n        <span class=\\"hljs-comment\\">// break</span>\\n      }\\n    }\\n  }\\n  <span class=\\"hljs-keyword\\">return</span> dp[pLen][sLen]    \\n};\\n</code></pre>\\n","<pre class=\\"hljs\\"><code><span class=\\"hljs-class\\"><span class=\\"hljs-keyword\\">class</span> <span class=\\"hljs-title\\">Solution</span><span class=\\"hljs-params\\">(object)</span>:</span>\\n    <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">def</span> <span class=\\"hljs-title\\">isMatch</span><span class=\\"hljs-params\\">(self, s, p)</span>:</span>\\n        <span class=\\"hljs-string\\">\\"\\"\\"\\n        :type s: str\\n        :type p: str\\n        :rtype: bool\\n        \\"\\"\\"</span>\\n        m=len(p)\\n        n=len(s)\\n        dp=[[<span class=\\"hljs-literal\\">False</span>]*(n+<span class=\\"hljs-number\\">1</span>) <span class=\\"hljs-keyword\\">for</span> i <span class=\\"hljs-keyword\\">in</span> range(m+<span class=\\"hljs-number\\">1</span>)]\\n        <span class=\\"hljs-keyword\\">for</span> i <span class=\\"hljs-keyword\\">in</span> range(m+<span class=\\"hljs-number\\">1</span>):\\n          <span class=\\"hljs-keyword\\">for</span> j <span class=\\"hljs-keyword\\">in</span> range(n+<span class=\\"hljs-number\\">1</span>):\\n            <span class=\\"hljs-keyword\\">if</span> i==<span class=\\"hljs-number\\">0</span> <span class=\\"hljs-keyword\\">and</span> j==<span class=\\"hljs-number\\">0</span>:dp[i][j]=<span class=\\"hljs-literal\\">True</span>\\n            <span class=\\"hljs-keyword\\">elif</span> i==<span class=\\"hljs-number\\">0</span>:dp[i][j]=<span class=\\"hljs-literal\\">False</span>\\n            <span class=\\"hljs-keyword\\">elif</span> j==<span class=\\"hljs-number\\">0</span>:\\n              <span class=\\"hljs-keyword\\">if</span> p[i<span class=\\"hljs-number\\">-1</span>]==<span class=\\"hljs-string\\">\\"*\\"</span>:dp[i][j]=dp[i<span class=\\"hljs-number\\">-1</span>][j]\\n              <span class=\\"hljs-keyword\\">else</span>:dp[i][j]=<span class=\\"hljs-literal\\">False</span>\\n        \\n        <span class=\\"hljs-keyword\\">for</span> i <span class=\\"hljs-keyword\\">in</span> range(<span class=\\"hljs-number\\">1</span>,m+<span class=\\"hljs-number\\">1</span>):\\n          <span class=\\"hljs-keyword\\">for</span> j <span class=\\"hljs-keyword\\">in</span> range(<span class=\\"hljs-number\\">1</span>,n+<span class=\\"hljs-number\\">1</span>):\\n            <span class=\\"hljs-keyword\\">if</span> s[j<span class=\\"hljs-number\\">-1</span>]==p[i<span class=\\"hljs-number\\">-1</span>] <span class=\\"hljs-keyword\\">or</span> p[i<span class=\\"hljs-number\\">-1</span>]==<span class=\\"hljs-string\\">\\"?\\"</span>:\\n              dp[i][j]=dp[i<span class=\\"hljs-number\\">-1</span>][j<span class=\\"hljs-number\\">-1</span>]\\n            <span class=\\"hljs-keyword\\">elif</span> p[i<span class=\\"hljs-number\\">-1</span>]==<span class=\\"hljs-string\\">\\"*\\"</span>:\\n              dp[i][j]=dp[i<span class=\\"hljs-number\\">-1</span>][j] <span class=\\"hljs-keyword\\">or</span> dp[i][j<span class=\\"hljs-number\\">-1</span>]\\n        <span class=\\"hljs-comment\\"># print dp</span>\\n        <span class=\\"hljs-keyword\\">return</span> dp[m][n]\\n</code></pre>\\n"],"querySlug":"wildcard-matching","hasThinking":true,"thinking":"<hr>\\n<p>思路：</p>\\n<ul>\\n<li>DP</li>\\n</ul>\\n<p><code>dp[i][j]</code>表示前<code>i</code>个<code>pattern</code>是否能匹配前<code>j</code>个<code>string</code>。</p>\\n<p>初始<code>dp[0][0]=true</code>，并且如果当前<code>p[i]</code>是<code>*</code>，那么如果<code>dp[i-1][j]</code>为<code>true</code>，那么<code>dp[i][j]</code>也为<code>true</code>，因为<code>*</code>可以匹配空字符串。</p>\\n<p>如果遇到<code>?</code>或者<code>p[i]===s[j]</code>，说明可以匹配任意一个字符或者两者相等，检查上一次是否匹配，<code>dp[i][j]=dp[i-1][j-1]</code>。</p>\\n<p>如果遇到<code>*</code>，<code>*</code>可以匹配任何位数的字符，</p>\\n<ul>\\n<li>\\n<p>如果上一个模板值已经能和<code>s</code>匹配，那么当前它也能匹配(作为空字符串)，例如：<code>s=&quot;ab&quot;</code>，<code>p=&quot;ab*&quot;</code>；</p>\\n</li>\\n<li>\\n<p>如果上一个字符串已经和当前模板匹配了，那么它也能匹配(作为任意长度的字符)，例如：<code>s=&quot;abcd&quot;</code>，<code>p=&quot;a*&quot;</code>。</p>\\n</li>\\n</ul>\\n<pre class=\\"hljs\\"><code><span class=\\"hljs-comment\\">/**\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{string}</span> <span class=\\"hljs-variable\\">s</span></span>\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{string}</span> <span class=\\"hljs-variable\\">p</span></span>\\n * <span class=\\"hljs-doctag\\">@return <span class=\\"hljs-type\\">{boolean}</span></span>\\n */</span>\\n<span class=\\"hljs-keyword\\">var</span> isMatch = <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span>(<span class=\\"hljs-params\\">s, p</span>) </span>{\\n  <span class=\\"hljs-keyword\\">let</span> pLen=p.length,sLen=s.length\\n  <span class=\\"hljs-keyword\\">let</span> dp=<span class=\\"hljs-built_in\\">Array</span>(pLen+<span class=\\"hljs-number\\">1</span>).fill().map(<span class=\\"hljs-function\\"><span class=\\"hljs-params\\">()</span>=&gt;</span><span class=\\"hljs-built_in\\">Array</span>(sLen+<span class=\\"hljs-number\\">1</span>).fill(<span class=\\"hljs-literal\\">false</span>))\\n  dp[<span class=\\"hljs-number\\">0</span>][<span class=\\"hljs-number\\">0</span>]=<span class=\\"hljs-literal\\">true</span>\\n  <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> i=<span class=\\"hljs-number\\">1</span>;i&lt;pLen+<span class=\\"hljs-number\\">1</span>;i++){\\n    <span class=\\"hljs-keyword\\">if</span>(p[i<span class=\\"hljs-number\\">-1</span>]===<span class=\\"hljs-string\\">\'*\'</span> &amp;&amp; dp[i<span class=\\"hljs-number\\">-1</span>][<span class=\\"hljs-number\\">0</span>]){\\n      dp[i][<span class=\\"hljs-number\\">0</span>]=<span class=\\"hljs-literal\\">true</span>\\n    }\\n  }\\n  <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> i=<span class=\\"hljs-number\\">1</span>;i&lt;pLen+<span class=\\"hljs-number\\">1</span>;i++){\\n    <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> j=<span class=\\"hljs-number\\">1</span>;j&lt;sLen+<span class=\\"hljs-number\\">1</span>;j++){\\n      <span class=\\"hljs-keyword\\">let</span> pId=i<span class=\\"hljs-number\\">-1</span>,sId=j<span class=\\"hljs-number\\">-1</span>\\n      <span class=\\"hljs-keyword\\">if</span>(p[pId]===<span class=\\"hljs-string\\">\\"?\\"</span> || p[pId]===s[sId]){\\n        dp[i][j]=dp[i<span class=\\"hljs-number\\">-1</span>][j<span class=\\"hljs-number\\">-1</span>]\\n      }\\n      <span class=\\"hljs-keyword\\">if</span>(p[pId]===<span class=\\"hljs-string\\">\\"*\\"</span>){\\n        dp[i][j]=dp[i<span class=\\"hljs-number\\">-1</span>][j] || dp[i][j<span class=\\"hljs-number\\">-1</span>]\\n      }\\n    }\\n  }\\n  <span class=\\"hljs-keyword\\">return</span> dp[pLen][sLen]    \\n};\\n</code></pre>\\n<ul>\\n<li>双指针</li>\\n</ul>\\n<p>定义两个指针，<code>pi</code>对应<code>pattern</code>上的索引，<code>si</code>对应<code>string</code>上的索引，关键思想是遇到<code>*</code>，记录当前的位置，并不使用，等到后面无法匹配时，在去查看<code>*</code>的位置。</p>\\n<p>如果<code>p[pi]===s[si] || p[pi]===&quot;?&quot;</code>说明两者可以视为相等，<code>si++</code>和<code>pi++</code>；</p>\\n<p>如果<code>p[pi]===\'*\'</code>，记录当前的<code>si</code>和<code>pi</code>，继续检查；</p>\\n<p>如果不符合以上的条件，说明不匹配了，这时要回到上一次记录的<code>*</code>的位置，继续检查。</p>\\n<p>最后检查<code>pi</code>是否到达<code>p</code>的最后。</p>\\n","content":"<p>给定一个字符串&nbsp;(<code>s</code>) 和一个字符模式&nbsp;(<code>p</code>) ，实现一个支持&nbsp;<code>&#39;?&#39;</code>&nbsp;和&nbsp;<code>&#39;*&#39;</code>&nbsp;的通配符匹配。</p>\\n\\n<pre>&#39;?&#39; 可以匹配任何单个字符。\\n&#39;*&#39; 可以匹配任意字符串（包括空字符串）。\\n</pre>\\n\\n<p>两个字符串<strong>完全匹配</strong>才算匹配成功。</p>\\n\\n<p><strong>说明:</strong></p>\\n\\n<ul>\\n\\t<li><code>s</code>&nbsp;可能为空，且只包含从&nbsp;<code>a-z</code>&nbsp;的小写字母。</li>\\n\\t<li><code>p</code>&nbsp;可能为空，且只包含从&nbsp;<code>a-z</code>&nbsp;的小写字母，以及字符&nbsp;<code>?</code>&nbsp;和&nbsp;<code>*</code>。</li>\\n</ul>\\n\\n<p><strong>示例&nbsp;1:</strong></p>\\n\\n<pre><strong>输入:</strong>\\ns = &quot;aa&quot;\\np = &quot;a&quot;\\n<strong>输出:</strong> false\\n<strong>解释:</strong> &quot;a&quot; 无法匹配 &quot;aa&quot; 整个字符串。</pre>\\n\\n<p><strong>示例&nbsp;2:</strong></p>\\n\\n<pre><strong>输入:</strong>\\ns = &quot;aa&quot;\\np = &quot;*&quot;\\n<strong>输出:</strong> true\\n<strong>解释:</strong>&nbsp;&#39;*&#39; 可以匹配任意字符串。\\n</pre>\\n\\n<p><strong>示例&nbsp;3:</strong></p>\\n\\n<pre><strong>输入:</strong>\\ns = &quot;cb&quot;\\np = &quot;?a&quot;\\n<strong>输出:</strong> false\\n<strong>解释:</strong>&nbsp;&#39;?&#39; 可以匹配 &#39;c&#39;, 但第二个 &#39;a&#39; 无法匹配 &#39;b&#39;。\\n</pre>\\n\\n<p><strong>示例&nbsp;4:</strong></p>\\n\\n<pre><strong>输入:</strong>\\ns = &quot;adceb&quot;\\np = &quot;*a*b&quot;\\n<strong>输出:</strong> true\\n<strong>解释:</strong>&nbsp;第一个 &#39;*&#39; 可以匹配空字符串, 第二个 &#39;*&#39; 可以匹配字符串 &quot;dce&quot;.\\n</pre>\\n\\n<p><strong>示例&nbsp;5:</strong></p>\\n\\n<pre><strong>输入:</strong>\\ns = &quot;acdcb&quot;\\np = &quot;a*c?b&quot;\\n<strong>输出:</strong> false</pre>\\n","title":"44. 通配符匹配","relatedTags":["贪心","递归","字符串","动态规划"],"difficult":"Hard","lang":["javascript","python"],"uniqueID":"44","slug":"44-Wildcard-Matching"}')}}]);