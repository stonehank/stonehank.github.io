(window.webpackJsonp=window.webpackJsonp||[]).push([[1351],{2149:function(n){n.exports=JSON.parse('{"code":["<pre class=\\"hljs\\"><code><span class=\\"hljs-comment\\">/**\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{number[]}</span> <span class=\\"hljs-variable\\">A</span></span>\\n * <span class=\\"hljs-doctag\\">@return <span class=\\"hljs-type\\">{number}</span></span>\\n */</span>\\n<span class=\\"hljs-keyword\\">var</span> maxTurbulenceSize = <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span>(<span class=\\"hljs-params\\">A</span>) </span>{\\n  <span class=\\"hljs-keyword\\">if</span>(A.length===<span class=\\"hljs-number\\">0</span>)<span class=\\"hljs-keyword\\">return</span> <span class=\\"hljs-number\\">0</span>\\n  <span class=\\"hljs-keyword\\">if</span>(A.length===<span class=\\"hljs-number\\">1</span>)<span class=\\"hljs-keyword\\">return</span> <span class=\\"hljs-number\\">1</span>\\n  <span class=\\"hljs-keyword\\">let</span> dp=[[<span class=\\"hljs-number\\">1</span>,<span class=\\"hljs-literal\\">null</span>]]\\n  <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> i=<span class=\\"hljs-number\\">1</span>;i&lt;A.length;i++){\\n    <span class=\\"hljs-keyword\\">let</span> delta=A[i]-A[i<span class=\\"hljs-number\\">-1</span>]\\n    <span class=\\"hljs-keyword\\">if</span>(delta===<span class=\\"hljs-number\\">0</span>)dp[i]=[<span class=\\"hljs-number\\">1</span>,<span class=\\"hljs-literal\\">null</span>]\\n    <span class=\\"hljs-keyword\\">else</span> <span class=\\"hljs-keyword\\">if</span>(delta&lt;<span class=\\"hljs-number\\">0</span>){\\n      <span class=\\"hljs-keyword\\">if</span>(dp[i<span class=\\"hljs-number\\">-1</span>][<span class=\\"hljs-number\\">1</span>]==<span class=\\"hljs-literal\\">null</span>)dp[i]=[<span class=\\"hljs-number\\">2</span>,<span class=\\"hljs-string\\">\\"S\\"</span>]\\n      <span class=\\"hljs-keyword\\">else</span> <span class=\\"hljs-keyword\\">if</span>(dp[i<span class=\\"hljs-number\\">-1</span>][<span class=\\"hljs-number\\">1</span>]===<span class=\\"hljs-string\\">\\"B\\"</span>)dp[i]=[dp[i<span class=\\"hljs-number\\">-1</span>][<span class=\\"hljs-number\\">0</span>]+<span class=\\"hljs-number\\">1</span>,<span class=\\"hljs-string\\">\\"S\\"</span>]\\n      <span class=\\"hljs-keyword\\">else</span> dp[i]=[<span class=\\"hljs-number\\">2</span>,<span class=\\"hljs-string\\">\'S\'</span>]\\n    }<span class=\\"hljs-keyword\\">else</span>{\\n      <span class=\\"hljs-keyword\\">if</span>(dp[i<span class=\\"hljs-number\\">-1</span>][<span class=\\"hljs-number\\">1</span>]==<span class=\\"hljs-literal\\">null</span>)dp[i]=[<span class=\\"hljs-number\\">2</span>,<span class=\\"hljs-string\\">\\"B\\"</span>]\\n      <span class=\\"hljs-keyword\\">else</span> <span class=\\"hljs-keyword\\">if</span>(dp[i<span class=\\"hljs-number\\">-1</span>][<span class=\\"hljs-number\\">1</span>]===<span class=\\"hljs-string\\">\\"S\\"</span>)dp[i]=[dp[i<span class=\\"hljs-number\\">-1</span>][<span class=\\"hljs-number\\">0</span>]+<span class=\\"hljs-number\\">1</span>,<span class=\\"hljs-string\\">\\"B\\"</span>]\\n      <span class=\\"hljs-keyword\\">else</span> dp[i]=[<span class=\\"hljs-number\\">2</span>,<span class=\\"hljs-string\\">\'B\'</span>]\\n    }\\n  }\\n  <span class=\\"hljs-keyword\\">let</span> max=<span class=\\"hljs-number\\">0</span>\\n  <span class=\\"hljs-keyword\\">for</span>(<span class=\\"hljs-keyword\\">let</span> i=<span class=\\"hljs-number\\">0</span>;i&lt;dp.length;i++){\\n    max=<span class=\\"hljs-built_in\\">Math</span>.max(max,dp[i][<span class=\\"hljs-number\\">0</span>])\\n  }\\n  <span class=\\"hljs-keyword\\">return</span> max\\n};\\n</code></pre>\\n"],"querySlug":"longest-turbulent-subarray","created_at":"2019-01-20","timeArr":[2019,0,20,11,7,30,0],"hasThinking":false,"content":"<p>当 <code>A</code>&nbsp;的子数组&nbsp;<code>A[i], A[i+1], ..., A[j]</code>&nbsp;满足下列条件时，我们称其为<em>湍流子数组</em>：</p>\\n\\n<ul>\\n\\t<li>若&nbsp;<code>i &lt;= k &lt; j</code>，当 <code>k</code>&nbsp;为奇数时，&nbsp;<code>A[k] &gt; A[k+1]</code>，且当 <code>k</code> 为偶数时，<code>A[k] &lt; A[k+1]</code>；</li>\\n\\t<li><strong>或 </strong>若&nbsp;<code>i &lt;= k &lt; j</code>，当 <code>k</code> 为偶数时，<code>A[k] &gt; A[k+1]</code>&nbsp;，且当 <code>k</code>&nbsp;为奇数时，&nbsp;<code>A[k] &lt; A[k+1]</code>。</li>\\n</ul>\\n\\n<p>也就是说，如果比较符号在子数组中的每个相邻元素对之间翻转，则该子数组是湍流子数组。</p>\\n\\n<p>返回 <code>A</code> 的最大湍流子数组的<strong>长度</strong>。</p>\\n\\n<p>&nbsp;</p>\\n\\n<p><strong>示例 1：</strong></p>\\n\\n<pre><strong>输入：</strong>[9,4,2,10,7,8,8,1,9]\\n<strong>输出：</strong>5\\n<strong>解释：</strong>(A[1] &gt; A[2] &lt; A[3] &gt; A[4] &lt; A[5])\\n</pre>\\n\\n<p><strong>示例 2：</strong></p>\\n\\n<pre><strong>输入：</strong>[4,8,12,16]\\n<strong>输出：</strong>2\\n</pre>\\n\\n<p><strong>示例 3：</strong></p>\\n\\n<pre><strong>输入：</strong>[100]\\n<strong>输出：</strong>1\\n</pre>\\n\\n<p>&nbsp;</p>\\n\\n<p><strong>提示：</strong></p>\\n\\n<ol>\\n\\t<li><code>1 &lt;= A.length &lt;= 40000</code></li>\\n\\t<li><code>0 &lt;= A[i] &lt;= 10^9</code></li>\\n</ol>\\n","title":"978. 最长湍流子数组","relatedTags":["数组","动态规划","滑动窗口"],"difficult":"Middle","lang":["javascript"],"uniqueID":"978","slug":"978-Longest-Turbulent-Subarray"}')}}]);