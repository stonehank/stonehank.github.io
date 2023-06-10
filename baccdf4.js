(window.webpackJsonp=window.webpackJsonp||[]).push([[1342],{2140:function(n){n.exports=JSON.parse('{"code":["<pre class=\\"hljs\\"><code><span class=\\"hljs-comment\\">/**\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{string}</span> <span class=\\"hljs-variable\\">s1</span></span>\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{string}</span> <span class=\\"hljs-variable\\">s2</span></span>\\n * <span class=\\"hljs-doctag\\">@param <span class=\\"hljs-type\\">{string}</span> <span class=\\"hljs-variable\\">s3</span></span>\\n * <span class=\\"hljs-doctag\\">@return <span class=\\"hljs-type\\">{boolean}</span></span>\\n */</span>\\n<span class=\\"hljs-keyword\\">var</span> isInterleave = <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span>(<span class=\\"hljs-params\\">s1, s2, s3</span>) </span>{\\n  <span class=\\"hljs-keyword\\">let</span> isValid=<span class=\\"hljs-literal\\">false</span>\\n  <span class=\\"hljs-keyword\\">let</span> hash={}\\n  <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">function</span> <span class=\\"hljs-title\\">isInter</span>(<span class=\\"hljs-params\\">i1,i2</span>)</span>{\\n    <span class=\\"hljs-keyword\\">let</span> i3=i1+i2\\n    <span class=\\"hljs-keyword\\">if</span>(i3===s3.length){\\n      <span class=\\"hljs-keyword\\">if</span>(i1===s1.length &amp;&amp; i2===s2.length)<span class=\\"hljs-keyword\\">return</span> <span class=\\"hljs-literal\\">true</span>\\n      <span class=\\"hljs-keyword\\">return</span> <span class=\\"hljs-literal\\">false</span>\\n    }\\n    <span class=\\"hljs-keyword\\">if</span>(hash[i1+<span class=\\"hljs-string\\">\'\'</span>+i2]!=<span class=\\"hljs-literal\\">null</span>)<span class=\\"hljs-keyword\\">return</span> hash[i1+<span class=\\"hljs-string\\">\'\'</span>+i2]\\n    <span class=\\"hljs-keyword\\">let</span> cur=s3[i3]\\n    <span class=\\"hljs-keyword\\">let</span> isV=<span class=\\"hljs-literal\\">false</span>\\n    <span class=\\"hljs-keyword\\">if</span>(s1[i1]===cur)isV=isInter(i1+<span class=\\"hljs-number\\">1</span>,i2)\\n    <span class=\\"hljs-keyword\\">if</span>(isV){\\n      hash[i1+<span class=\\"hljs-string\\">\'\'</span>+i2]=isV\\n      <span class=\\"hljs-keyword\\">return</span> isV\\n    }\\n    <span class=\\"hljs-keyword\\">if</span>(s2[i2]===cur)isV=isInter(i1,i2+<span class=\\"hljs-number\\">1</span>)\\n    hash[i1+<span class=\\"hljs-string\\">\'\'</span>+i2]=isV\\n    <span class=\\"hljs-keyword\\">return</span> isV\\n  }\\n  <span class=\\"hljs-keyword\\">return</span> isInter(<span class=\\"hljs-number\\">0</span>,<span class=\\"hljs-number\\">0</span>)\\n};\\n</code></pre>\\n","<pre class=\\"hljs\\"><code><span class=\\"hljs-class\\"><span class=\\"hljs-keyword\\">class</span> <span class=\\"hljs-title\\">Solution</span><span class=\\"hljs-params\\">(object)</span>:</span>\\n    <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">def</span> <span class=\\"hljs-title\\">isInterleave</span><span class=\\"hljs-params\\">(self, s1, s2, s3)</span>:</span>\\n        <span class=\\"hljs-string\\">\\"\\"\\"\\n        :type s1: str\\n        :type s2: str\\n        :type s3: str\\n        :rtype: bool\\n        \\"\\"\\"</span>\\n        mem={}\\n        n1,n2,n3=len(s1),len(s2),len(s3)\\n        <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">def</span> <span class=\\"hljs-title\\">inInter</span><span class=\\"hljs-params\\">(i1,i2)</span>:</span>\\n          i3=i1+i2\\n          <span class=\\"hljs-keyword\\">if</span> i3==n3:\\n            <span class=\\"hljs-keyword\\">if</span> i1==n1 <span class=\\"hljs-keyword\\">and</span> i2==n2:<span class=\\"hljs-keyword\\">return</span> <span class=\\"hljs-literal\\">True</span>\\n            <span class=\\"hljs-keyword\\">return</span> <span class=\\"hljs-literal\\">False</span>\\n          <span class=\\"hljs-keyword\\">if</span> mem.has_key((i1,i2)):\\n            <span class=\\"hljs-keyword\\">return</span> mem[(i1,i2)]\\n          cur=s3[i3]\\n          res=<span class=\\"hljs-literal\\">False</span>\\n          <span class=\\"hljs-keyword\\">if</span> i1&lt;n1 <span class=\\"hljs-keyword\\">and</span> s1[i1]==cur:\\n            res=inInter(i1+<span class=\\"hljs-number\\">1</span>,i2)\\n          <span class=\\"hljs-keyword\\">if</span> res:\\n            mem.setdefault((i1,i2),res)\\n            <span class=\\"hljs-keyword\\">return</span> <span class=\\"hljs-literal\\">True</span>\\n          <span class=\\"hljs-keyword\\">if</span> i2&lt;n2 <span class=\\"hljs-keyword\\">and</span> s2[i2]==cur:\\n            res=inInter(i1,i2+<span class=\\"hljs-number\\">1</span>)\\n          mem.setdefault((i1,i2),res)\\n          <span class=\\"hljs-keyword\\">return</span> res          \\n        <span class=\\"hljs-keyword\\">return</span> inInter(<span class=\\"hljs-number\\">0</span>,<span class=\\"hljs-number\\">0</span>)\\n</code></pre>\\n"],"querySlug":"interleaving-string","hasThinking":true,"thinking":"<hr>\\n<p>思路：</p>\\n<p>DP，<code>dp[i][j]</code>表示<code>s1[0,i]</code>和<code>s2[0,j]</code>是否能交叉形成<code>s3[0,i+j-1]</code>。</p>\\n<p>设定<code>dp</code>的行高为<code>s1.length+1</code>，多出的一行为空值。</p>\\n<p>设定<code>dp</code>的列宽为<code>s2.length+1</code>，多出的一列为空值。</p>\\n<p><code>dp[0][0]=true</code>。</p>\\n<p>设定第一行的初始值：<code>dp[0][i]=dp[0][i-1] &amp;&amp; s2[i-1]===s3[i-1]</code>，因为是第一行，所以<code>s1[0]</code>为空值，只需要判断<code>s2</code>和<code>s3</code>；</p>\\n<p>设定第一列的初始值：<code>dp[i][0]=dp[i-1][0] &amp;&amp; s1[i-1]===s3[i-1]</code>，同样<code>s2[0]</code>为空值，只需要判断<code>s1</code>和<code>s3</code>；</p>\\n<p>后续的转移方程：</p>\\n<p><code>dp[i][j]=(s1[i-1]===s3[k] &amp;&amp; dp[i-1][j]) || (s2[j-1]===s3[k] &amp;&amp; dp[i][j-1])</code>，其中<code>k=i+j-1</code>；</p>\\n<p>后续需要判断2种情况，<code>s1</code>和<code>s3</code>或者<code>s2</code>和<code>s3</code>。</p>\\n","content":"<p>给定三个字符串 <code>s1</code>、<code>s2</code>、<code>s3</code>，请你帮忙验证 <code>s3</code> 是否是由 <code>s1</code> 和 <code>s2</code><em> </em><strong>交错 </strong>组成的。</p>\\n\\n<p>两个字符串 <code>s</code> 和 <code>t</code> <strong>交错</strong> 的定义与过程如下，其中每个字符串都会被分割成若干 <strong>非空</strong> 子字符串：</p>\\n\\n<ul>\\n\\t<li><code>s = s<sub>1</sub> + s<sub>2</sub> + ... + s<sub>n</sub></code></li>\\n\\t<li><code>t = t<sub>1</sub> + t<sub>2</sub> + ... + t<sub>m</sub></code></li>\\n\\t<li><code>|n - m| <= 1</code></li>\\n\\t<li><strong>交错</strong> 是 <code>s<sub>1</sub> + t<sub>1</sub> + s<sub>2</sub> + t<sub>2</sub> + s<sub>3</sub> + t<sub>3</sub> + ...</code> 或者 <code>t<sub>1</sub> + s<sub>1</sub> + t<sub>2</sub> + s<sub>2</sub> + t<sub>3</sub> + s<sub>3</sub> + ...</code></li>\\n</ul>\\n\\n<p><strong>提示：</strong><code>a + b</code> 意味着字符串 <code>a</code> 和 <code>b</code> 连接。</p>\\n\\n<p> </p>\\n\\n<p><strong>示例 1：</strong></p>\\n<img alt=\\"\\" src=\\"https://assets.leetcode.com/uploads/2020/09/02/interleave.jpg\\" style=\\"width: 561px; height: 203px;\\" />\\n<pre>\\n<strong>输入：</strong>s1 = \\"aabcc\\", s2 = \\"dbbca\\", s3 = \\"aadbbcbcac\\"\\n<strong>输出：</strong>true\\n</pre>\\n\\n<p><strong>示例 2：</strong></p>\\n\\n<pre>\\n<strong>输入：</strong>s1 = \\"aabcc\\", s2 = \\"dbbca\\", s3 = \\"aadbbbaccc\\"\\n<strong>输出：</strong>false\\n</pre>\\n\\n<p><strong>示例 3：</strong></p>\\n\\n<pre>\\n<strong>输入：</strong>s1 = \\"\\", s2 = \\"\\", s3 = \\"\\"\\n<strong>输出：</strong>true\\n</pre>\\n\\n<p> </p>\\n\\n<p><strong>提示：</strong></p>\\n\\n<ul>\\n\\t<li><code>0 <= s1.length, s2.length <= 100</code></li>\\n\\t<li><code>0 <= s3.length <= 200</code></li>\\n\\t<li><code>s1</code>、<code>s2</code>、和 <code>s3</code> 都由小写英文字母组成</li>\\n</ul>\\n","title":"97. 交错字符串","relatedTags":["字符串","动态规划"],"difficult":"Middle","lang":["javascript","python"],"uniqueID":"97","slug":"97-Interleaving-String"}')}}]);