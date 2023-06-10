(window.webpackJsonp=window.webpackJsonp||[]).push([[1004],{1802:function(n){n.exports=JSON.parse('{"code":["<pre class=\\"hljs\\"><code><span class=\\"hljs-class\\"><span class=\\"hljs-keyword\\">class</span> <span class=\\"hljs-title\\">Solution</span><span class=\\"hljs-params\\">(object)</span>:</span>\\n    <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">def</span> <span class=\\"hljs-title\\">numDecodings</span><span class=\\"hljs-params\\">(self, s)</span>:</span>\\n        <span class=\\"hljs-string\\">\\"\\"\\"\\n        :type s: str\\n        :rtype: int\\n        \\"\\"\\"</span>\\n        <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">def</span> <span class=\\"hljs-title\\">calc</span><span class=\\"hljs-params\\">(a,b)</span>:</span>\\n          <span class=\\"hljs-keyword\\">if</span> a==<span class=\\"hljs-string\\">\\"*\\"</span> <span class=\\"hljs-keyword\\">and</span> b==<span class=\\"hljs-string\\">\\"*\\"</span>:\\n            <span class=\\"hljs-keyword\\">return</span> <span class=\\"hljs-number\\">15</span>\\n          <span class=\\"hljs-keyword\\">elif</span> a==<span class=\\"hljs-string\\">\\"*\\"</span>:\\n            <span class=\\"hljs-keyword\\">if</span> b&lt;=<span class=\\"hljs-string\\">\\"6\\"</span>:\\n              <span class=\\"hljs-keyword\\">return</span> <span class=\\"hljs-number\\">2</span>\\n            <span class=\\"hljs-keyword\\">return</span> <span class=\\"hljs-number\\">1</span>\\n          <span class=\\"hljs-keyword\\">elif</span> b==<span class=\\"hljs-string\\">\\"*\\"</span>:\\n            <span class=\\"hljs-keyword\\">if</span> a==<span class=\\"hljs-string\\">\\"1\\"</span>:\\n              <span class=\\"hljs-keyword\\">return</span> <span class=\\"hljs-number\\">9</span>\\n            <span class=\\"hljs-keyword\\">if</span> a==<span class=\\"hljs-string\\">\\"2\\"</span>:\\n              <span class=\\"hljs-keyword\\">return</span> <span class=\\"hljs-number\\">6</span>\\n            <span class=\\"hljs-keyword\\">return</span> <span class=\\"hljs-number\\">0</span>\\n          <span class=\\"hljs-keyword\\">else</span>:\\n            x=int(a+b)\\n            <span class=\\"hljs-keyword\\">if</span> <span class=\\"hljs-number\\">10</span>&lt;=x&lt;=<span class=\\"hljs-number\\">26</span>:\\n              <span class=\\"hljs-keyword\\">return</span> <span class=\\"hljs-number\\">1</span>\\n            <span class=\\"hljs-keyword\\">return</span> <span class=\\"hljs-number\\">0</span>\\n                  \\n        <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">def</span> <span class=\\"hljs-title\\">calc1</span><span class=\\"hljs-params\\">(a)</span>:</span>\\n          <span class=\\"hljs-keyword\\">if</span> a==<span class=\\"hljs-string\\">\\"*\\"</span>:<span class=\\"hljs-keyword\\">return</span> <span class=\\"hljs-number\\">9</span>\\n          <span class=\\"hljs-keyword\\">if</span> a==<span class=\\"hljs-string\\">\\"0\\"</span>:<span class=\\"hljs-keyword\\">return</span> <span class=\\"hljs-number\\">0</span>\\n          <span class=\\"hljs-keyword\\">return</span> <span class=\\"hljs-number\\">1</span>\\n        \\n        MOD=<span class=\\"hljs-number\\">1e9</span>+<span class=\\"hljs-number\\">7</span>\\n        n=len(s)\\n        dp=[<span class=\\"hljs-number\\">0</span>]*(n+<span class=\\"hljs-number\\">1</span>)\\n        dp[<span class=\\"hljs-number\\">0</span>]=<span class=\\"hljs-number\\">1</span>\\n        dp[<span class=\\"hljs-number\\">1</span>]=calc1(s[<span class=\\"hljs-number\\">0</span>])\\n        <span class=\\"hljs-keyword\\">for</span> i <span class=\\"hljs-keyword\\">in</span> range(<span class=\\"hljs-number\\">2</span>,n+<span class=\\"hljs-number\\">1</span>):\\n          dp[i]=(calc(s[i<span class=\\"hljs-number\\">-2</span>],s[i<span class=\\"hljs-number\\">-1</span>])*dp[i<span class=\\"hljs-number\\">-2</span>] + calc1(s[i<span class=\\"hljs-number\\">-1</span>])*dp[i<span class=\\"hljs-number\\">-1</span>]) % MOD\\n\\n        <span class=\\"hljs-keyword\\">return</span> int(dp[<span class=\\"hljs-number\\">-1</span>])\\n</code></pre>\\n"],"querySlug":"decode-ways-ii","created_at":"2019-03-06","timeArr":[2019,2,6,9,56,47,0],"hasThinking":false,"content":"<p>一条包含字母&nbsp;<code>A-Z</code> 的消息通过以下的方式进行了编码：</p>\\n\\n<pre>&#39;A&#39; -&gt; 1\\n&#39;B&#39; -&gt; 2\\n...\\n&#39;Z&#39; -&gt; 26\\n</pre>\\n\\n<p>除了上述的条件以外，现在加密字符串可以包含字符 &#39;*&#39;了，字符&#39;*&#39;可以被当做1到9当中的任意一个数字。</p>\\n\\n<p>给定一条包含数字和字符&#39;*&#39;的加密信息，请确定解码方法的总数。</p>\\n\\n<p>同时，由于结果值可能会相当的大，所以你应当对10<sup>9</sup>&nbsp;+ 7取模。（翻译者标注：此处取模主要是为了防止溢出）</p>\\n\\n<p><strong>示例 1 :</strong></p>\\n\\n<pre><strong>输入:</strong> &quot;*&quot;\\n<strong>输出:</strong> 9\\n<strong>解释:</strong> 加密的信息可以被解密为: &quot;A&quot;, &quot;B&quot;, &quot;C&quot;, &quot;D&quot;, &quot;E&quot;, &quot;F&quot;, &quot;G&quot;, &quot;H&quot;, &quot;I&quot;.\\n</pre>\\n\\n<p><strong>示例 2 :</strong></p>\\n\\n<pre><strong>输入:</strong> &quot;1*&quot;\\n<strong>输出:</strong> 9 + 9 = 18（翻译者标注：这里1*可以分解为1,* 或者当做1*来处理，所以结果是9+9=18）\\n</pre>\\n\\n<p><strong>说明 :</strong></p>\\n\\n<ol>\\n\\t<li>输入的字符串长度范围是 [1, 10<sup>5</sup>]。</li>\\n\\t<li>输入的字符串只会包含字符 &#39;*&#39; 和 数字&#39;0&#39; - &#39;9&#39;。</li>\\n</ol>\\n","title":"639. 解码方法 II","relatedTags":["字符串","动态规划"],"difficult":"Hard","lang":["python"],"uniqueID":"639","slug":"639-Decode-Ways-II"}')}}]);