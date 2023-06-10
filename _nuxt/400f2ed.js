(window.webpackJsonp=window.webpackJsonp||[]).push([[984],{1782:function(n){n.exports=JSON.parse('{"code":["<pre class=\\"hljs\\"><code><span class=\\"hljs-class\\"><span class=\\"hljs-keyword\\">class</span> <span class=\\"hljs-title\\">Solution</span><span class=\\"hljs-params\\">(object)</span>:</span>\\n    <span class=\\"hljs-function\\"><span class=\\"hljs-keyword\\">def</span> <span class=\\"hljs-title\\">findIntegers</span><span class=\\"hljs-params\\">(self, num)</span>:</span>\\n        <span class=\\"hljs-string\\">\\"\\"\\"\\n        :type num: int\\n        :rtype: int\\n        \\"\\"\\"</span>\\n        fib=[<span class=\\"hljs-number\\">0</span>]*<span class=\\"hljs-number\\">31</span>\\n        fib[<span class=\\"hljs-number\\">0</span>]=<span class=\\"hljs-number\\">1</span>\\n        fib[<span class=\\"hljs-number\\">1</span>]=<span class=\\"hljs-number\\">2</span>\\n        <span class=\\"hljs-keyword\\">for</span> i <span class=\\"hljs-keyword\\">in</span> range(<span class=\\"hljs-number\\">2</span>,<span class=\\"hljs-number\\">31</span>):\\n          fib[i]=fib[i<span class=\\"hljs-number\\">-1</span>]+fib[i<span class=\\"hljs-number\\">-2</span>]\\n        ans,pre=<span class=\\"hljs-number\\">0</span>,<span class=\\"hljs-number\\">0</span>\\n        <span class=\\"hljs-keyword\\">for</span> k <span class=\\"hljs-keyword\\">in</span> range(<span class=\\"hljs-number\\">30</span>,<span class=\\"hljs-number\\">-1</span>,<span class=\\"hljs-number\\">-1</span>):\\n          <span class=\\"hljs-keyword\\">if</span> num &amp; (<span class=\\"hljs-number\\">1</span>&lt;&lt;k):\\n            ans+=fib[k]\\n            <span class=\\"hljs-keyword\\">if</span> pre==<span class=\\"hljs-number\\">1</span>:<span class=\\"hljs-keyword\\">return</span> ans\\n            <span class=\\"hljs-keyword\\">else</span> :pre=<span class=\\"hljs-number\\">1</span>\\n          <span class=\\"hljs-keyword\\">else</span>:\\n            pre=<span class=\\"hljs-number\\">0</span>\\n        \\n        <span class=\\"hljs-keyword\\">return</span> ans+<span class=\\"hljs-number\\">1</span>\\n        \\n</code></pre>\\n"],"querySlug":"non-negative-integers-without-consecutive-ones","created_at":"2019-03-05","timeArr":[2019,2,5,19,45,55,0],"hasThinking":true,"thinking":"<hr>\\n<p>思路：</p>\\n<p>这道题首先要计算出前32位的斐波那契数，原因如下：</p>\\n<p>当二进制k为<code>1-4位</code>的解如下：</p>\\n<pre class=\\"hljs\\"><code>             / 1000\\n         100      \\n       /     \\\\ 1001      \\n  / 10          \\n1      \\\\     / 1010\\n  \\\\      101\\n    11(X)    \\\\ 1011(X)\\n</code></pre>\\n<p>只有当尾数是<code>0</code>的下一轮能增加2个，尾数是<code>1</code>的下一轮只能增加1个，这是一个斐波那契数列，<code>f(k)=f(k-1)+f(k+1)</code></p>\\n<p>当参数为<code>2^k</code>时，结果就是<code>f[k]+1</code></p>\\n<p>当斐波那契数列(f)求出后，假设给定的参数<code>num</code>的而二进制为<code>10010110101</code></p>\\n<p>当<code>k</code>为10，<code>1&lt;&lt;k</code>为 <code>10000000000</code>\\n两者按位且不为0，因此需要 <code>+f[10]</code></p>\\n<blockquote>\\n<p>这里<code>+f[k]</code>可以看成将<code>k</code>位的1变为0，在后<code>k-1</code>位中存在的非连续1的数量，\\n例如<code>f[10]</code>，可以看成9位的非连续1的数量</p>\\n</blockquote>\\n<p>接着，要处理 <code>10110101</code>这一段,继续遍历k</p>\\n<p>当k为7，<code>1&lt;&lt;k</code>为  <code>10000000</code>，两者按位且不为0， <code>+f[7]</code></p>\\n<p>接着处理<code>110101</code></p>\\n<p>当k为5，<code>1&lt;&lt;k</code>为 <code>100000</code>，两者按位且不为0，<code>+f[5]</code></p>\\n<p>但注意，继续遍历当k为4时，按位且同样不为0，说明存在2个1连续，</p>\\n<p>例如，<code>110101</code>，但出现2个1连续，则后面的不需要继续计算了，因为存在11开头，后面一定都不合法。</p>\\n","content":"<p>给定一个正整数 n，找出小于或等于 n 的非负整数中，其二进制表示不包含&nbsp;<strong>连续的1&nbsp;</strong>的个数。</p>\\n\\n<p><strong>示例 1:</strong></p>\\n\\n<pre><strong>输入:</strong> 5\\n<strong>输出:</strong> 5\\n<strong>解释:</strong> \\n下面是带有相应二进制表示的非负整数&lt;= 5：\\n0 : 0\\n1 : 1\\n2 : 10\\n3 : 11\\n4 : 100\\n5 : 101\\n其中，只有整数3违反规则（有两个连续的1），其他5个满足规则。</pre>\\n\\n<p><strong>说明:</strong> 1 &lt;= n &lt;= 10<sup>9</sup></p>\\n","title":"600. 不含连续1的非负整数","relatedTags":["动态规划"],"difficult":"Hard","lang":["python"],"uniqueID":"600","slug":"600-Non-negative-Integers-without-Consecutive-Ones"}')}}]);